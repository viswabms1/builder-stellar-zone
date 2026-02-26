import type { VercelRequest, VercelResponse } from "@vercel/node";

const SARVAM_API_KEY = process.env.SARVAM_API_KEY || "";
const SARVAM_TTS_URL = "https://api.sarvam.ai/text-to-speech";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { text, language_code = "en-IN", speaker = "arya" } = req.body || {};

    if (!text) return res.status(400).json({ error: "text is required" });

    const sarvamRes = await fetch(SARVAM_TTS_URL, {
      method: "POST",
      headers: {
        "api-subscription-key": SARVAM_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: [text],
        target_language_code: language_code,
        speaker,
        model: "bulbul:v2",
        enable_preprocessing: true,
      }),
    });

    const data = await sarvamRes.json();

    if (!sarvamRes.ok) {
      return res.status(sarvamRes.status).json({ error: data?.message || "Sarvam TTS error", detail: data });
    }

    // Sarvam returns { audios: ["base64string", ...] }
    const base64Audio = data?.audios?.[0];
    if (!base64Audio) return res.status(500).json({ error: "No audio returned from Sarvam" });

    return res.status(200).json({ audio: base64Audio });
  } catch (err: any) {
    console.error("Sarvam TTS proxy error:", err);
    return res.status(500).json({ error: "Internal server error", detail: err?.message });
  }
}
