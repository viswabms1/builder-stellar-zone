import { useState, useRef, useCallback, useEffect } from "react";
import { Mic, MicOff, Volume2, Loader2, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

type MicPermission = "unknown" | "requesting" | "granted" | "denied" | "unavailable";
type VoiceBotStatus = "idle" | "recording" | "transcribing" | "thinking" | "speaking" | "error";

interface VoiceBotProps {
  theme: string;
  onTranscript?: (text: string) => void;
  sendMessage: (text: string) => Promise<string | null>;
}

export function VoiceBot({ theme, onTranscript, sendMessage }: VoiceBotProps) {
  const [micPermission, setMicPermission] = useState<MicPermission>("unknown");
  const [status, setStatus] = useState<VoiceBotStatus>("idle");
  const [statusText, setStatusText] = useState("Tap mic to speak");
  const [errorText, setErrorText] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const isDark = theme === "dark";

  // Check mic permission on mount
  useEffect(() => {
    if (!navigator.mediaDevices?.getUserMedia) {
      setMicPermission("unavailable");
      return;
    }

    // Use Permissions API if available to check without triggering prompt
    if (navigator.permissions) {
      navigator.permissions
        .query({ name: "microphone" as PermissionName })
        .then((result) => {
          if (result.state === "granted") {
            setMicPermission("granted");
          } else if (result.state === "denied") {
            setMicPermission("denied");
          } else {
            setMicPermission("unknown"); // "prompt" state — will ask when clicked
          }
          result.onchange = () => {
            setMicPermission(result.state === "granted" ? "granted" : result.state === "denied" ? "denied" : "unknown");
          };
        })
        .catch(() => {
          setMicPermission("unknown"); // Permissions API not supported, try directly
        });
    }
  }, []);

  const requestMicPermission = useCallback(async () => {
    setMicPermission("requesting");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach((t) => t.stop()); // Release immediately
      setMicPermission("granted");
      setErrorText(null);
    } catch (err: any) {
      if (err?.name === "NotAllowedError" || err?.name === "PermissionDeniedError") {
        setMicPermission("denied");
      } else {
        setMicPermission("unavailable");
      }
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
      setMicPermission("granted");

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
          const arrayBuffer = await audioBlob.arrayBuffer();
          const base64Audio = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));

          const sttRes = await fetch("/api/sarvam/speech-to-text", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ audio: base64Audio, mimeType, model: "saarika:v2.5" }),
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
          setErrorText(err.message || "Transcription failed");
          setStatus("error");
          setStatusText("Error. Tap to retry.");
        }
      };

      recorder.start();
      setStatus("recording");
      setStatusText("Listening... tap to stop");
    } catch (err: any) {
      if (err?.name === "NotAllowedError") {
        setMicPermission("denied");
      } else {
        setErrorText("Could not access microphone");
        setStatus("error");
      }
    }
  }, [onTranscript, sendMessage, speakText]);

  const stopRecording = useCallback(() => {
    mediaRecorderRef.current?.stop();
  }, []);

  const handleMicClick = () => {
    if (status === "recording") stopRecording();
    else if (status === "speaking") { stopAudio(); setStatus("idle"); setStatusText("Tap mic to speak"); }
    else startRecording();
  };

  const isAnimating = status === "recording" || status === "speaking";
  const isProcessing = status === "transcribing" || status === "thinking";

  // --- Permission screens ---
  if (micPermission === "unavailable") {
    return (
      <div className="flex flex-col items-center gap-3 py-6 px-4 text-center">
        <MicOff className={cn("w-10 h-10", isDark ? "text-slate-500" : "text-gray-400")} />
        <p className={cn("text-sm font-medium", isDark ? "text-slate-300" : "text-gray-700")}>Microphone not available</p>
        <p className={cn("text-xs", isDark ? "text-slate-500" : "text-gray-500")}>
          Your browser or device doesn't support microphone access. Try opening this site in Chrome or Edge.
        </p>
      </div>
    );
  }

  if (micPermission === "denied") {
    return (
      <div className="flex flex-col items-center gap-3 py-6 px-4 text-center">
        <MicOff className="w-10 h-10 text-red-400" />
        <p className={cn("text-sm font-medium", isDark ? "text-white" : "text-gray-800")}>Microphone blocked</p>
        <p className={cn("text-xs leading-relaxed", isDark ? "text-slate-400" : "text-gray-500")}>
          Click the <strong>lock/camera icon</strong> in your browser's address bar → set Microphone to <strong>Allow</strong> → refresh the page.
        </p>
        <button
          onClick={requestMicPermission}
          className="mt-1 px-4 py-2 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (micPermission === "unknown" || micPermission === "requesting") {
    return (
      <div className="flex flex-col items-center gap-4 py-6 px-4 text-center">
        <div className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center",
          isDark ? "bg-purple-600/20" : "bg-blue-50"
        )}>
          {micPermission === "requesting"
            ? <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
            : <ShieldCheck className={cn("w-8 h-8", isDark ? "text-purple-400" : "text-blue-500")} />
          }
        </div>
        <div>
          <p className={cn("text-sm font-semibold mb-1", isDark ? "text-white" : "text-gray-800")}>
            Microphone Permission Required
          </p>
          <p className={cn("text-xs leading-relaxed", isDark ? "text-slate-400" : "text-gray-500")}>
            DSU Voice Bot needs access to your microphone to listen to your voice.
          </p>
        </div>
        <button
          onClick={requestMicPermission}
          disabled={micPermission === "requesting"}
          className={cn(
            "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all shadow-lg",
            micPermission === "requesting"
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105"
          )}
        >
          <Mic className="w-4 h-4" />
          {micPermission === "requesting" ? "Requesting..." : "Allow Microphone Access"}
        </button>
        <p className={cn("text-[10px]", isDark ? "text-slate-500" : "text-gray-400")}>
          Your audio is processed securely and never stored.
        </p>
      </div>
    );
  }

  // --- Main voice UI (permission granted) ---
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
