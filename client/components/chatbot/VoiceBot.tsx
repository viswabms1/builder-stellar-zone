import { useState, useRef, useCallback } from "react";
import { Mic, MicOff, Volume2, Loader2, X } from "lucide-react";
import { cn } from "@/lib/utils";

type VoiceBotStatus =
  | "idle"
  | "recording"
  | "transcribing"
  | "thinking"
  | "speaking"
  | "error";

interface VoiceBotProps {
  theme: string;
  onTranscript?: (text: string) => void;
  sendMessage: (text: string) => Promise<string | null>;
}

export function VoiceBot({ theme, onTranscript, sendMessage }: VoiceBotProps) {
  const [status, setStatus] = useState<VoiceBotStatus>("idle");
  const [statusText, setStatusText] = useState("Tap mic to speak");
  const [error, setError] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const isDark = theme === "dark";

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

      // Decode base64 WAV and play
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
    } catch (err: any) {
      console.error("TTS error:", err);
      setStatus("idle");
      setStatusText("Tap mic to speak");
    }
  }, []);

  const startRecording = useCallback(async () => {
    setError(null);
    stopAudio();

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // Prefer WebM (wide browser support); Sarvam accepts WebM/wav/mp3/etc.
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

        setStatus("transcribing");
        setStatusText("Transcribing...");

        try {
          // Convert blob to base64 and send as JSON (works in both dev and Vercel)
          const arrayBuffer = await audioBlob.arrayBuffer();
          const base64Audio = btoa(
            String.fromCharCode(...new Uint8Array(arrayBuffer))
          );

          const sttRes = await fetch("/api/sarvam/speech-to-text", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              audio: base64Audio,
              mimeType,
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
          setError(err.message || "Transcription failed");
          setStatus("error");
          setStatusText("Error. Tap to retry.");
        }
      };

      recorder.start();
      setStatus("recording");
      setStatusText("Listening... tap to stop");
    } catch (err: any) {
      console.error("Mic error:", err);
      const isDenied = err?.name === "NotAllowedError" || err?.name === "PermissionDeniedError";
      const isNotFound = err?.name === "NotFoundError";
      setError(
        isDenied
          ? "Browser blocked mic — open the preview in a new tab and allow microphone access"
          : isNotFound
          ? "No microphone found on this device"
          : "Could not access microphone"
      );
      setStatus("error");
      setStatusText("Mic unavailable");
    }
  }, [onTranscript, sendMessage, speakText]);

  const stopRecording = useCallback(() => {
    mediaRecorderRef.current?.stop();
  }, []);

  const handleMicClick = () => {
    if (status === "recording") {
      stopRecording();
    } else if (status === "speaking") {
      stopAudio();
      setStatus("idle");
      setStatusText("Tap mic to speak");
    } else if (status === "idle" || status === "error") {
      startRecording();
    }
  };

  const pulseColor =
    status === "recording"
      ? "bg-red-500"
      : status === "speaking"
      ? "bg-green-500"
      : status === "transcribing" || status === "thinking"
      ? "bg-yellow-500"
      : "bg-blue-500";

  const isAnimating = status === "recording" || status === "speaking";
  const isProcessing = status === "transcribing" || status === "thinking";

  return (
    <div className="flex flex-col items-center gap-3 py-4">
      {/* Mic Button */}
      <div className="relative flex items-center justify-center">
        {/* Pulse rings when recording or speaking */}
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
          aria-label={status === "recording" ? "Stop recording" : "Start recording"}
        >
          {isProcessing ? (
            <Loader2 className="w-6 h-6 text-white animate-spin" />
          ) : status === "speaking" ? (
            <Volume2 className="w-6 h-6 text-white" />
          ) : status === "recording" ? (
            <MicOff className="w-6 h-6 text-white" />
          ) : (
            <Mic className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Status text */}
      <p className={cn("text-xs text-center font-medium", isDark ? "text-slate-400" : "text-gray-500")}>
        {statusText}
      </p>

      {/* Error */}
      {error && status === "error" && (
        <div className={cn(
          "flex flex-col gap-2 text-xs px-3 py-2 rounded-lg mx-3 text-center",
          isDark ? "bg-red-900/30 text-red-300" : "bg-red-50 text-red-600"
        )}>
          <div className="flex items-center justify-center gap-1.5">
            <X className="w-3 h-3 flex-shrink-0" />
            <span>{error}</span>
          </div>
          {error.includes("blocked") && (
            <button
              onClick={() => window.open(window.location.href, "_blank")}
              className={cn(
                "w-full py-1.5 rounded-md text-xs font-semibold transition-colors",
                isDark
                  ? "bg-purple-600 hover:bg-purple-500 text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              )}
            >
              Open in New Tab to Allow Mic
            </button>
          )}
        </div>
      )}

      {/* Waveform bars when recording */}
      {status === "recording" && (
        <div className="flex items-center gap-0.5 h-6">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-red-400 rounded-full animate-pulse"
              style={{
                height: `${Math.random() * 16 + 4}px`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${0.5 + Math.random() * 0.5}s`,
              }}
            />
          ))}
        </div>
      )}

      {status === "speaking" && (
        <div className="flex items-center gap-0.5 h-6">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-green-400 rounded-full animate-pulse"
              style={{
                height: `${Math.random() * 16 + 4}px`,
                animationDelay: `${i * 0.12}s`,
                animationDuration: `${0.6 + Math.random() * 0.4}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
