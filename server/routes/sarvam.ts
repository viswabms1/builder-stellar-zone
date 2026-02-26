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
        model: "bulbul:v1",
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
    const ext = mimeType.includes("ogg") ? "ogg" : mimeType.includes("mp4") ? "mp4" : "webm";

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

export async function handleSarvamTTS(req: Request, res: Response) {
  const SARVAM_API_KEY = getKey();

  try {
    const { text, language_code = "en-IN", speaker = "anushka" } = req.body;

    if (!text) return res.status(400).json({ error: "text is required" });

    if (!SARVAM_API_KEY) {
      return res.status(500).json({ error: "SARVAM_API_KEY not configured on server" });
    }

    console.log(`[Sarvam TTS] text="${text.slice(0, 50)}", key starts with ${SARVAM_API_KEY.slice(0, 8)}`);

    const sarvamRes = await fetch(SARVAM_TTS_URL, {
      method: "POST",
      headers: {
        "api-subscription-key": SARVAM_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: [text],
        target_language_code: language_code,
        speaker: "arya",
        model: "bulbul:v1",
        enable_preprocessing: true,
      }),
    });

    const data = await sarvamRes.json();
    console.log(`[Sarvam TTS] Response ${sarvamRes.status}:`, JSON.stringify(data).slice(0, 200));

    if (!sarvamRes.ok) {
      return res.status(sarvamRes.status).json({ error: data?.message || "Sarvam TTS error", detail: data });
    }

    const base64Audio = data?.audios?.[0];
    if (!base64Audio) return res.status(500).json({ error: "No audio returned from Sarvam" });

    return res.status(200).json({ audio: base64Audio });
  } catch (err: any) {
    console.error("[Sarvam TTS] Exception:", err);
    return res.status(500).json({ error: "Internal server error", detail: err?.message });
  }
}
