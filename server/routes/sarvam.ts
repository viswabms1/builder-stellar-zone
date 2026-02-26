import type { Request, Response } from "express";

const SARVAM_API_KEY = process.env.SARVAM_API_KEY || "";
const SARVAM_STT_URL = "https://api.sarvam.ai/speech-to-text";
const SARVAM_TTS_URL = "https://api.sarvam.ai/text-to-speech";

export async function handleSarvamSTT(req: Request, res: Response) {
  try {
    const { audio, mimeType = "audio/webm", model = "saaras:v3", language_code = "unknown" } = req.body;

    if (!audio) {
      return res.status(400).json({ error: "audio (base64) is required" });
    }

    // Decode base64 to buffer
    const audioBuffer = Buffer.from(audio, "base64");

    // Build multipart form for Sarvam
    const boundary = `----FormBoundary${Date.now()}`;
    const ext = mimeType.includes("webm") ? "webm" : mimeType.includes("ogg") ? "ogg" : "wav";

    const parts: Buffer[] = [];

    const addField = (name: string, value: string) => {
      parts.push(
        Buffer.from(
          `--${boundary}\r\nContent-Disposition: form-data; name="${name}"\r\n\r\n${value}\r\n`
        )
      );
    };

    // File part
    parts.push(
      Buffer.from(
        `--${boundary}\r\nContent-Disposition: form-data; name="file"; filename="recording.${ext}"\r\nContent-Type: ${mimeType}\r\n\r\n`
      )
    );
    parts.push(audioBuffer);
    parts.push(Buffer.from("\r\n"));

    addField("model", model);
    addField("language_code", language_code);

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
      console.error("[Sarvam STT] Error:", data);
      return res.status(sarvamRes.status).json({ error: data?.message || "Sarvam STT error", detail: data });
    }

    return res.status(200).json(data);
  } catch (err: any) {
    console.error("[Sarvam STT] Exception:", err);
    return res.status(500).json({ error: "Internal server error", detail: err?.message });
  }
}

export async function handleSarvamTTS(req: Request, res: Response) {
  try {
    const { text, language_code = "en-IN", speaker = "meera" } = req.body;

    if (!text) {
      return res.status(400).json({ error: "text is required" });
    }

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
        model: "bulbul:v1",
        enable_preprocessing: true,
      }),
    });

    const data = await sarvamRes.json();

    if (!sarvamRes.ok) {
      console.error("[Sarvam TTS] Error:", data);
      return res.status(sarvamRes.status).json({ error: data?.message || "Sarvam TTS error", detail: data });
    }

    const base64Audio = data?.audios?.[0];
    if (!base64Audio) {
      return res.status(500).json({ error: "No audio returned from Sarvam" });
    }

    return res.status(200).json({ audio: base64Audio });
  } catch (err: any) {
    console.error("[Sarvam TTS] Exception:", err);
    return res.status(500).json({ error: "Internal server error", detail: err?.message });
  }
}
