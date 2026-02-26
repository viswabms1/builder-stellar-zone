import type { VercelRequest, VercelResponse } from "@vercel/node";

const SARVAM_API_KEY = process.env.SARVAM_API_KEY || "";
const SARVAM_STT_URL = "https://api.sarvam.ai/speech-to-text";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { audio, mimeType = "audio/webm", model = "saarika:v2.5", language_code } = req.body || {};

    if (!audio) return res.status(400).json({ error: "audio (base64) is required" });

    // Decode base64 to buffer
    const audioBuffer = Buffer.from(audio, "base64");

    // Build multipart form manually
    const boundary = `----FormBoundary${Date.now()}`;
    const ext = mimeType.includes("webm") ? "webm" : mimeType.includes("ogg") ? "ogg" : "wav";

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

    if (!sarvamRes.ok) {
      console.error("[Sarvam STT Vercel] Error:", data);
      return res.status(sarvamRes.status).json({ error: data?.message || "Sarvam STT error", detail: data });
    }

    return res.status(200).json(data);
  } catch (err: any) {
    console.error("[Sarvam STT Vercel] Exception:", err);
    return res.status(500).json({ error: "Internal server error", detail: err?.message });
  }
}
