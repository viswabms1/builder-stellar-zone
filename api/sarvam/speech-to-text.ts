import type { VercelRequest, VercelResponse } from "@vercel/node";

const SARVAM_STT_URL = "https://api.sarvam.ai/speech-to-text";

// Increase body size limit for audio payloads
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "50mb",
    },
  },
};

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
    const { audio, mimeType = "audio/wav", model = "saarika:v2.5", language_code = "en-IN" } = req.body || {};

    console.log(`[Sarvam STT Vercel] Request: model=${model}, language_code=${language_code}, audio length=${audio?.length || 0} chars`);

    if (!audio) return res.status(400).json({ error: "audio (base64) is required" });

    // Decode base64 to buffer
    const audioBuffer = Buffer.from(audio, "base64");

    // Build multipart form manually
    const boundary = `----FormBoundary${Date.now()}`;
    const ext = mimeType.includes("wav") ? "wav" : mimeType.includes("webm") ? "webm" : mimeType.includes("ogg") ? "ogg" : "wav";

    const parts: Buffer[] = [];

    const addField = (name: string, value: string) => {
      parts.push(Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="${name}"\r\n\r\n${value}\r\n`));
    };

    parts.push(Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="file"; filename="recording.${ext}"\r\nContent-Type: ${mimeType}\r\n\r\n`));
    parts.push(audioBuffer);
    parts.push(Buffer.from("\r\n"));

    addField("model", model);
    addField("language_code", language_code);

    parts.push(Buffer.from(`--${boundary}--\r\n`));

    const body = Buffer.concat(parts);
    console.log(`[Sarvam STT Vercel] Sending ${body.length} bytes to Sarvam API`);

    const sarvamRes = await fetch(SARVAM_STT_URL, {
      method: "POST",
      headers: {
        "api-subscription-key": SARVAM_API_KEY,
        "Content-Type": `multipart/form-data; boundary=${boundary}`,
        "Content-Length": String(body.length),
      },
      body,
    });

    const data = await sarvamRes.json();
    console.log(`[Sarvam STT Vercel] Response ${sarvamRes.status}:`, JSON.stringify(data).slice(0, 300));

    if (!sarvamRes.ok) {
      console.error("[Sarvam STT Vercel] Error:", data);
      return res.status(sarvamRes.status).json({
        error: data?.error?.message || data?.message || data?.detail || "Sarvam STT error",
        detail: data,
      });
    }

    return res.status(200).json(data);
  } catch (err: any) {
    console.error("[Sarvam STT Vercel] Exception:", err);
    return res.status(500).json({ error: err?.message || "Internal server error" });
  }
}
