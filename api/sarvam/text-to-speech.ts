import type { VercelRequest, VercelResponse } from "@vercel/node";

const SARVAM_TTS_URL = "https://api.sarvam.ai/text-to-speech";

/** Split text into chunks of ≤maxLen characters at sentence boundaries */
function splitTextForTTS(text: string, maxLen = 480): string[] {
  if (text.length <= maxLen) return [text];

  const chunks: string[] = [];
  let remaining = text;

  while (remaining.length > 0) {
    if (remaining.length <= maxLen) {
      chunks.push(remaining);
      break;
    }
    let splitAt = -1;
    for (const sep of [". ", "! ", "? ", ", "]) {
      const idx = remaining.lastIndexOf(sep, maxLen);
      if (idx > 0 && idx > splitAt) splitAt = idx + sep.length;
    }
    if (splitAt <= 0) splitAt = maxLen;
    chunks.push(remaining.slice(0, splitAt).trim());
    remaining = remaining.slice(splitAt).trim();
  }

  return chunks.filter(c => c.length > 0);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const SARVAM_API_KEY = process.env.SARVAM_API_KEY || "";
  if (!SARVAM_API_KEY) {
    return res.status(500).json({ error: "SARVAM_API_KEY not configured on server" });
  }

  try {
    const { text, language_code = "en-IN", speaker = "arya" } = req.body || {};

    if (!text) return res.status(400).json({ error: "text is required" });

    const chunks = splitTextForTTS(text, 480);
    const audioBuffers: Buffer[] = [];

    for (const chunk of chunks) {
      const sarvamRes = await fetch(SARVAM_TTS_URL, {
        method: "POST",
        headers: {
          "api-subscription-key": SARVAM_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: [chunk],
          target_language_code: language_code,
          speaker,
          model: "bulbul:v2",
          enable_preprocessing: true,
        }),
      });

      const data = await sarvamRes.json();

      if (!sarvamRes.ok) {
        return res.status(sarvamRes.status).json({
          error: data?.error?.message || data?.message || "Sarvam TTS error",
          detail: data,
        });
      }

      const b64 = data?.audios?.[0];
      if (!b64) return res.status(500).json({ error: "No audio returned from Sarvam" });

      audioBuffers.push(Buffer.from(b64, "base64"));
    }

    // Single chunk — return directly
    if (audioBuffers.length === 1) {
      return res.status(200).json({ audio: audioBuffers[0].toString("base64") });
    }

    // Multiple chunks — concatenate WAV: keep header from first, append raw PCM from rest
    const WAV_HEADER_SIZE = 44;
    const pcmParts: Buffer[] = [];
    for (let i = 0; i < audioBuffers.length; i++) {
      pcmParts.push(audioBuffers[i].subarray(i === 0 ? 0 : WAV_HEADER_SIZE));
    }
    const combined = Buffer.concat(pcmParts);

    // Fix WAV header sizes
    combined.writeUInt32LE(combined.length - 8, 4);
    combined.writeUInt32LE(combined.length - WAV_HEADER_SIZE, 40);

    return res.status(200).json({ audio: combined.toString("base64") });
  } catch (err: any) {
    console.error("Sarvam TTS proxy error:", err);
    return res.status(500).json({ error: "Internal server error", detail: err?.message });
  }
}
