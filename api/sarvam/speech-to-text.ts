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
    // req body will be raw audio bytes, forwarded as multipart to Sarvam
    const chunks: Buffer[] = [];
    for await (const chunk of req) {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    }
    const audioBuffer = Buffer.concat(chunks);

    // Get content-type from request to pass along
    const contentType = (req.headers["content-type"] as string) || "multipart/form-data";

    // Forward the entire multipart body directly to Sarvam
    const sarvamRes = await fetch(SARVAM_STT_URL, {
      method: "POST",
      headers: {
        "api-subscription-key": SARVAM_API_KEY,
        "content-type": contentType,
      },
      body: audioBuffer,
    });

    const data = await sarvamRes.json();

    if (!sarvamRes.ok) {
      return res.status(sarvamRes.status).json({ error: data?.message || "Sarvam STT error", detail: data });
    }

    return res.status(200).json(data);
  } catch (err: any) {
    console.error("Sarvam STT proxy error:", err);
    return res.status(500).json({ error: "Internal server error", detail: err?.message });
  }
}
