import { useState, useRef, useCallback, useEffect } from "react";
import { Mic, MicOff, Volume2, Loader2, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type VoiceBotStatus = "idle" | "recording" | "transcribing" | "thinking" | "speaking" | "error";

interface VoiceBotProps {
  theme: string;
  onTranscript?: (text: string) => void;
  sendMessage: (text: string) => Promise<string | null>;
}

/** Convert ArrayBuffer to base64 in chunks (avoids call stack overflow on large buffers) */
function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  const chunkSize = 8192;
  let binary = "";
  for (let i = 0; i < bytes.length; i += chunkSize) {
    const chunk = bytes.subarray(i, i + chunkSize);
    binary += String.fromCharCode.apply(null, chunk as unknown as number[]);
  }
  return btoa(binary);
}

/** Convert any audio blob to WAV using Web Audio API (Sarvam only accepts WAV/MP3) */
async function convertBlobToWav(blob: Blob): Promise<{ base64: string; mimeType: string }> {
  const audioCtx = new AudioContext();
  const arrayBuffer = await blob.arrayBuffer();
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);

  // Downmix to mono, 16kHz for speech (smaller payload, Sarvam-friendly)
  const sampleRate = 16000;
  const offlineCtx = new OfflineAudioContext(1, Math.ceil(audioBuffer.duration * sampleRate), sampleRate);
  const source = offlineCtx.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(offlineCtx.destination);
  source.start();
  const rendered = await offlineCtx.startRendering();

  const pcmData = rendered.getChannelData(0);
  const wavBuffer = encodeWav(pcmData, sampleRate);

  await audioCtx.close();

  return {
    base64: arrayBufferToBase64(wavBuffer),
    mimeType: "audio/wav",
  };
}

/** Encode PCM float32 samples to 16-bit WAV */
function encodeWav(samples: Float32Array, sampleRate: number): ArrayBuffer {
  const numSamples = samples.length;
  const buffer = new ArrayBuffer(44 + numSamples * 2);
  const view = new DataView(buffer);

  // WAV header
  const writeStr = (offset: number, str: string) => {
    for (let i = 0; i < str.length; i++) view.setUint8(offset + i, str.charCodeAt(i));
  };

  writeStr(0, "RIFF");
  view.setUint32(4, 36 + numSamples * 2, true);
  writeStr(8, "WAVE");
  writeStr(12, "fmt ");
  view.setUint32(16, 16, true);        // chunk size
  view.setUint16(20, 1, true);         // PCM format
  view.setUint16(22, 1, true);         // mono
  view.setUint32(24, sampleRate, true); // sample rate
  view.setUint32(28, sampleRate * 2, true); // byte rate
  view.setUint16(32, 2, true);         // block align
  view.setUint16(34, 16, true);        // bits per sample
  writeStr(36, "data");
  view.setUint32(40, numSamples * 2, true);

  // PCM data - clamp float32 to int16
  for (let i = 0; i < numSamples; i++) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(44 + i * 2, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
  }

  return buffer;
}

export function VoiceBot({ theme, onTranscript, sendMessage }: VoiceBotProps) {
  const [micReady, setMicReady] = useState(false);
  const [micDenied, setMicDenied] = useState(false);
  const [status, setStatus] = useState<VoiceBotStatus>("idle");
  const [statusText, setStatusText] = useState("Tap mic to speak");
  const [errorText, setErrorText] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const permissionRequested = useRef(false);

  const isDark = theme === "dark";
  const isInIframe = window.self !== window.top;

  // Auto-request mic permission on mount
  useEffect(() => {
    if (permissionRequested.current) return;
    permissionRequested.current = true;

    if (!navigator.mediaDevices?.getUserMedia) {
      setMicDenied(true);
      return;
    }

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        stream.getTracks().forEach((t) => t.stop());
        setMicReady(true);
      })
      .catch((err) => {
        console.warn("Mic permission denied:", err.name);
        setMicDenied(true);
      });
  }, []);

  const retryPermission = useCallback(async () => {
    setMicDenied(false);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach((t) => t.stop());
      setMicReady(true);
    } catch {
      setMicDenied(true);
    }
  }, []);

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
  };

  const speakText = useCallback(async (text: string) => {
    setStatus("speaking");
    setStatusText("Speaking...");
    try {
      const res = await fetch("/api/sarvam/text-to-speech", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, language_code: "en-IN", speaker: "arya" }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "TTS failed");
      }

      const { audio } = await res.json();
      if (!audio) throw new Error("No audio received");

      const byteChars = atob(audio);
      const byteArr = new Uint8Array(byteChars.length);
      for (let i = 0; i < byteChars.length; i++) byteArr[i] = byteChars.charCodeAt(i);
      const blob = new Blob([byteArr], { type: "audio/wav" });
      const url = URL.createObjectURL(blob);

      const audioEl = new Audio(url);
      audioRef.current = audioEl;
      audioEl.play();
      audioEl.onended = () => {
        URL.revokeObjectURL(url);
        setStatus("idle");
        setStatusText("Tap mic to speak");
        audioRef.current = null;
      };
      audioEl.onerror = () => {
        URL.revokeObjectURL(url);
        setStatus("idle");
        setStatusText("Tap mic to speak");
        audioRef.current = null;
      };
    } catch (err: any) {
      console.error("TTS error:", err);
      setStatus("idle");
      setStatusText("Tap mic to speak");
    }
  }, []);

  const startRecording = useCallback(async () => {
    setErrorText(null);
    stopAudio();

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setMicReady(true);
      setMicDenied(false);

      const mimeType = MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
        ? "audio/webm;codecs=opus"
        : MediaRecorder.isTypeSupported("audio/webm")
        ? "audio/webm"
        : "audio/ogg";

      const recorder = new MediaRecorder(stream, { mimeType });
      mediaRecorderRef.current = recorder;
      audioChunksRef.current = [];

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };

      recorder.onstop = async () => {
        stream.getTracks().forEach((t) => t.stop());
        const audioBlob = new Blob(audioChunksRef.current, { type: mimeType });

        if (audioBlob.size < 100) {
          setStatus("idle");
          setStatusText("Recording too short. Try again.");
          return;
        }

        setStatus("transcribing");
        setStatusText("Converting audio...");

        try {
          // Convert WebM/Opus to WAV (Sarvam only accepts WAV/MP3)
          const { base64: wavBase64 } = await convertBlobToWav(audioBlob);

          setStatusText("Transcribing...");

          const sttRes = await fetch("/api/sarvam/speech-to-text", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              audio: wavBase64,
              mimeType: "audio/wav",
              model: "saarika:v2.5",
            }),
          });

          if (!sttRes.ok) {
            const err = await sttRes.json().catch(() => ({}));
            throw new Error(err.error || `STT error ${sttRes.status}`);
          }

          const sttData = await sttRes.json();
          const transcript = sttData?.transcript || "";

          if (!transcript.trim()) {
            setStatus("idle");
            setStatusText("Didn't catch that. Try again.");
            return;
          }

          onTranscript?.(transcript);
          setStatus("thinking");
          setStatusText("Thinking...");

          const reply = await sendMessage(transcript);
          if (reply) {
            await speakText(reply);
          } else {
            setStatus("idle");
            setStatusText("Tap mic to speak");
          }
        } catch (err: any) {
          console.error("STT error:", err);
          setErrorText(err.message || "Transcription failed");
          setStatus("error");
          setStatusText("Error. Tap to retry.");
        }
      };

      recorder.start();
      setStatus("recording");
      setStatusText("Listening... tap to stop");
    } catch (err: any) {
      if (err?.name === "NotAllowedError" || err?.name === "PermissionDeniedError") {
        setMicDenied(true);
      } else {
        setErrorText("Could not access microphone");
        setStatus("error");
        setStatusText("Error. Tap to retry.");
      }
    }
  }, [onTranscript, sendMessage, speakText]);

  const stopRecording = useCallback(() => {
    mediaRecorderRef.current?.stop();
  }, []);

  const handleMicClick = () => {
    if (status === "recording") stopRecording();
    else if (status === "speaking") {
      stopAudio();
      setStatus("idle");
      setStatusText("Tap mic to speak");
    } else startRecording();
  };

  const isAnimating = status === "recording" || status === "speaking";
  const isProcessing = status === "transcribing" || status === "thinking";

  // Denied screen
  if (micDenied) {
    return (
      <div className="flex flex-col items-center gap-3 py-6 px-4 text-center">
        <MicOff className="w-10 h-10 text-red-400" />
        <p className={cn("text-sm font-medium", isDark ? "text-white" : "text-gray-800")}>
          Microphone blocked
        </p>
        {isInIframe ? (
          <>
            <p className={cn("text-xs leading-relaxed", isDark ? "text-slate-400" : "text-gray-500")}>
              Microphone cannot be used inside the preview frame. Please open the site in a new tab to use the Voice Bot.
            </p>
            <button
              onClick={() => window.open(window.location.origin, "_blank")}
              className="mt-1 flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Open in New Tab
            </button>
          </>
        ) : (
          <>
            <p className={cn("text-xs leading-relaxed", isDark ? "text-slate-400" : "text-gray-500")}>
              Click the <strong>lock/site-settings icon</strong> in your browser's address bar, set Microphone to <strong>Allow</strong>, then tap the button below.
            </p>
            <button
              onClick={retryPermission}
              className="mt-1 px-4 py-2 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
            >
              Try Again
            </button>
          </>
        )}
      </div>
    );
  }

  // Loading / waiting for permission
  if (!micReady) {
    return (
      <div className="flex flex-col items-center gap-3 py-6 px-4 text-center">
        <Loader2 className={cn("w-8 h-8 animate-spin", isDark ? "text-purple-400" : "text-blue-500")} />
        <p className={cn("text-xs", isDark ? "text-slate-400" : "text-gray-500")}>
          Requesting microphone access...
        </p>
      </div>
    );
  }

  // Main voice UI
  const pulseColor = status === "recording" ? "bg-red-500" : status === "speaking" ? "bg-green-500" : "bg-yellow-500";

  return (
    <div className="flex flex-col items-center gap-3 py-4">
      <div className="relative flex items-center justify-center">
        {isAnimating && (
          <>
            <span className={cn("absolute w-20 h-20 rounded-full opacity-20 animate-ping", pulseColor)} />
            <span className={cn("absolute w-16 h-16 rounded-full opacity-30 animate-ping", pulseColor)} style={{ animationDelay: "0.2s" }} />
          </>
        )}
        <button
          onClick={handleMicClick}
          disabled={isProcessing}
          className={cn(
            "relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg",
            status === "recording"
              ? "bg-red-500 hover:bg-red-600 scale-110"
              : status === "speaking"
              ? "bg-green-500 hover:bg-green-600"
              : isProcessing
              ? isDark ? "bg-slate-700 cursor-not-allowed" : "bg-gray-200 cursor-not-allowed"
              : status === "error"
              ? "bg-orange-500 hover:bg-orange-600"
              : "bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105"
          )}
        >
          {isProcessing ? <Loader2 className="w-6 h-6 text-white animate-spin" />
            : status === "speaking" ? <Volume2 className="w-6 h-6 text-white" />
            : status === "recording" ? <MicOff className="w-6 h-6 text-white" />
            : <Mic className="w-6 h-6 text-white" />}
        </button>
      </div>

      <p className={cn("text-xs text-center font-medium", isDark ? "text-slate-400" : "text-gray-500")}>
        {statusText}
      </p>

      {errorText && status === "error" && (
        <p className={cn("text-xs text-center px-3", isDark ? "text-red-400" : "text-red-500")}>
          {errorText}
        </p>
      )}

      {status === "recording" && (
        <div className="flex items-center gap-0.5 h-6">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1 bg-red-400 rounded-full animate-pulse"
              style={{ height: `${8 + (i % 3) * 6}px`, animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      )}

      {status === "speaking" && (
        <div className="flex items-center gap-0.5 h-6">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1 bg-green-400 rounded-full animate-pulse"
              style={{ height: `${8 + (i % 3) * 6}px`, animationDelay: `${i * 0.12}s` }} />
          ))}
        </div>
      )}
    </div>
  );
}
