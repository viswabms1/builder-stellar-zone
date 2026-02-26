import type { Request, Response } from "express";

const SARVAM_STT_URL = "https://api.sarvam.ai/speech-to-text";
const SARVAM_TTS_URL = "https://api.sarvam.ai/text-to-speech";

// Read key inside functions so it's always fresh from process.env
const getKey = () => process.env.SARVAM_API_KEY || "";

export async function handleSarvamHealth(req: Request, res: Response) {
  const key = getKey();
  const keyStatus = key ? `set (starts: ${key.slice(0, 8)}...)` : "NOT SET";

  // Quick TTS test to verify key
  try {
    const testRes = await fetch(SARVAM_TTS_URL, {
      method: "POST",
      headers: {
        "api-subscription-key": key,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: ["Hello"],
        target_language_code: "en-IN",
        speaker: "arya",
        model: "bulbul:v2",
      }),
    });
    const testData = await testRes.json();
    return res.json({
      key: keyStatus,
      sarvam_status: testRes.status,
      sarvam_ok: testRes.ok,
      sarvam_response: testData,
    });
  } catch (err: any) {
    return res.json({ key: keyStatus, error: err.message });
  }
}

export async function handleSarvamSTT(req: Request, res: Response) {
  const SARVAM_API_KEY = getKey();

  try {
    const { audio, mimeType = "audio/webm", model = "saarika:v2.5", language_code } = req.body;

    if (!audio) {
      return res.status(400).json({ error: "audio (base64) is required" });
    }

    if (!SARVAM_API_KEY) {
      return res.status(500).json({ error: "SARVAM_API_KEY not configured on server" });
    }

    // Decode base64 to buffer
    const audioBuffer = Buffer.from(audio, "base64");

    // Build multipart form manually
    const boundary = `----FormBoundary${Date.now()}`;
    const ext = mimeType.includes("wav") ? "wav" : mimeType.includes("ogg") ? "ogg" : mimeType.includes("mp4") ? "mp4" : "webm";

    const parts: Buffer[] = [];

    const addField = (name: string, value: string) => {
      parts.push(Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="${name}"\r\n\r\n${value}\r\n`));
    };

    parts.push(Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="file"; filename="recording.${ext}"\r\nContent-Type: ${mimeType}\r\n\r\n`));
    parts.push(audioBuffer);
    parts.push(Buffer.from("\r\n"));
    addField("model", model);
    if (language_code && language_code !== "unknown") addField("language_code", language_code);
    parts.push(Buffer.from(`--${boundary}--\r\n`));

    const body = Buffer.concat(parts);

    console.log(`[Sarvam STT] Sending ${body.length} bytes, model=${model}, key starts with ${SARVAM_API_KEY.slice(0, 8)}`);

    const sarvamRes = await fetch(SARVAM_STT_URL, {
      method: "POST",
      headers: {
        "api-subscription-key": SARVAM_API_KEY,
        "Content-Type": `multipart/form-data; boundary=${boundary}`,
      },
      body,
    });

    const data = await sarvamRes.json();
    console.log(`[Sarvam STT] Response ${sarvamRes.status}:`, JSON.stringify(data).slice(0, 200));

    if (!sarvamRes.ok) {
      return res.status(sarvamRes.status).json({ error: data?.message || data?.detail || "Sarvam STT error", detail: data });
    }

    return res.status(200).json(data);
  } catch (err: any) {
    console.error("[Sarvam STT] Exception:", err);
    return res.status(500).json({ error: "Internal server error", detail: err?.message });
  }
}

/** Split text into chunks of ≤maxLen characters, breaking at sentence boundaries */
function splitTextForTTS(text: string, maxLen = 480): string[] {
  if (text.length <= maxLen) return [text];

  const chunks: string[] = [];
  let remaining = text;

  while (remaining.length > 0) {
    if (remaining.length <= maxLen) {
      chunks.push(remaining);
      break;
    }
    // Find last sentence boundary within maxLen
    let splitAt = -1;
    for (const sep of [". ", "! ", "? ", ", "]) {
      const idx = remaining.lastIndexOf(sep, maxLen);
      if (idx > 0 && idx > splitAt) splitAt = idx + sep.length;
    }
    if (splitAt <= 0) splitAt = maxLen; // hard cut if no boundary found

    chunks.push(remaining.slice(0, splitAt).trim());
    remaining = remaining.slice(splitAt).trim();
  }

  return chunks.filter(c => c.length > 0);
}

export async function handleSarvamTTS(req: Request, res: Response) {
  const SARVAM_API_KEY = getKey();

  try {
    const { text, language_code = "en-IN", speaker = "anushka" } = req.body;

    if (!text) return res.status(400).json({ error: "text is required" });

    if (!SARVAM_API_KEY) {
      return res.status(500).json({ error: "SARVAM_API_KEY not configured on server" });
    }

    // Split into ≤480 char chunks (Sarvam limit is 500)
    const chunks = splitTextForTTS(text, 480);
    console.log(`[Sarvam TTS] ${chunks.length} chunk(s), total ${text.length} chars, key starts with ${SARVAM_API_KEY.slice(0, 8)}`);

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
          speaker: "arya",
          model: "bulbul:v2",
          enable_preprocessing: true,
        }),
      });

      const data = await sarvamRes.json();

      if (!sarvamRes.ok) {
        console.error(`[Sarvam TTS] Chunk error ${sarvamRes.status}:`, JSON.stringify(data).slice(0, 200));
        return res.status(sarvamRes.status).json({ error: data?.error?.message || data?.message || "Sarvam TTS error", detail: data });
      }

      const b64 = data?.audios?.[0];
      if (!b64) return res.status(500).json({ error: "No audio returned from Sarvam" });

      audioBuffers.push(Buffer.from(b64, "base64"));
    }

    // If single chunk, return directly
    if (audioBuffers.length === 1) {
      return res.status(200).json({ audio: audioBuffers[0].toString("base64") });
    }

    // Concatenate WAV files: use header from first, append raw PCM from rest
    const WAV_HEADER_SIZE = 44;
    const pcmParts: Buffer[] = [];
    for (let i = 0; i < audioBuffers.length; i++) {
      pcmParts.push(audioBuffers[i].subarray(i === 0 ? 0 : WAV_HEADER_SIZE));
    }
    const combined = Buffer.concat(pcmParts);

    // Fix the WAV header sizes
    const totalSize = combined.length;
    combined.writeUInt32LE(totalSize - 8, 4);       // RIFF chunk size
    combined.writeUInt32LE(totalSize - WAV_HEADER_SIZE, 40); // data chunk size

    console.log(`[Sarvam TTS] Combined ${audioBuffers.length} chunks → ${totalSize} bytes`);

    return res.status(200).json({ audio: combined.toString("base64") });
  } catch (err: any) {
    console.error("[Sarvam TTS] Exception:", err);
    return res.status(500).json({ error: "Internal server error", detail: err?.message });
  }
}
