import { useState, useRef, useCallback } from "react";
import { Mic, MicOff, Volume2, Loader2, PhoneOff } from "lucide-react";
import { cn } from "@/lib/utils";

type VoiceBotStatus = "idle" | "recording" | "transcribing" | "thinking" | "speaking" | "error";

interface VoiceBotProps {
  theme: string;
  onTranscript?: (text: string) => void;
  sendMessage: (text: string) => Promise<string | null>;
}

/** Convert ArrayBuffer to base64 in chunks */
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

/** Convert any audio blob to WAV using Web Audio API */
async function convertBlobToWav(blob: Blob): Promise<string> {
  const audioCtx = new AudioContext();
  const arrayBuffer = await blob.arrayBuffer();
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
  const sampleRate = audioBuffer.sampleRate;

  let pcmData: Float32Array;
  if (audioBuffer.numberOfChannels === 1) {
    pcmData = audioBuffer.getChannelData(0);
  } else {
    const length = audioBuffer.length;
    pcmData = new Float32Array(length);
    for (let ch = 0; ch < audioBuffer.numberOfChannels; ch++) {
      const channelData = audioBuffer.getChannelData(ch);
      for (let i = 0; i < length; i++) {
        pcmData[i] += channelData[i] / audioBuffer.numberOfChannels;
      }
    }
  }

  const wavBuffer = encodeWav(pcmData, sampleRate);
  await audioCtx.close();
  return arrayBufferToBase64(wavBuffer);
}

/** Encode PCM float32 samples to 16-bit WAV */
function encodeWav(samples: Float32Array, sampleRate: number): ArrayBuffer {
  const numSamples = samples.length;
  const buffer = new ArrayBuffer(44 + numSamples * 2);
  const view = new DataView(buffer);
  const writeStr = (offset: number, str: string) => {
    for (let i = 0; i < str.length; i++) view.setUint8(offset + i, str.charCodeAt(i));
  };
  writeStr(0, "RIFF");
  view.setUint32(4, 36 + numSamples * 2, true);
  writeStr(8, "WAVE");
  writeStr(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeStr(36, "data");
  view.setUint32(40, numSamples * 2, true);
  for (let i = 0; i < numSamples; i++) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(44 + i * 2, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
  }
  return buffer;
}

export function VoiceBot({ theme, onTranscript, sendMessage }: VoiceBotProps) {
  const [status, setStatus] = useState<VoiceBotStatus>("idle");
  const [conversationActive, setConversationActive] = useState(false);
  const [statusText, setStatusText] = useState("Tap to start conversation");
  const [errorText, setErrorText] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const conversationActiveRef = useRef(false);

  const isDark = theme === "dark";

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
  };

  const endConversation = useCallback(() => {
    conversationActiveRef.current = false;
    setConversationActive(false);
    stopAudio();
    if (mediaRecorderRef.current?.state === "recording") {
      mediaRecorderRef.current.stop();
    }
    setStatus("idle");
    setStatusText("Tap to start conversation");
    setErrorText(null);
  }, []);

  // startRecording is defined with a ref-based approach so speakText can call it
  const startRecordingRef = useRef<() => Promise<void>>();

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
        audioRef.current = null;
        // Auto-listen if conversation is still active
        if (conversationActiveRef.current) {
          setTimeout(() => {
            if (conversationActiveRef.current) {
              startRecordingRef.current?.();
            }
          }, 400);
        } else {
          setStatus("idle");
          setStatusText("Tap to start conversation");
        }
      };
      audioEl.onerror = () => {
        URL.revokeObjectURL(url);
        audioRef.current = null;
        if (conversationActiveRef.current) {
          setTimeout(() => startRecordingRef.current?.(), 400);
        } else {
          setStatus("idle");
          setStatusText("Tap to start conversation");
        }
      };
    } catch (err: any) {
      console.error("TTS error:", err);
      if (conversationActiveRef.current) {
        setStatus("idle");
        setStatusText("Listening...");
        setTimeout(() => startRecordingRef.current?.(), 400);
      } else {
        setStatus("idle");
        setStatusText("Tap to start conversation");
      }
    }
  }, []);

  const startRecording = useCallback(async () => {
    if (!conversationActiveRef.current) return;

    setErrorText(null);
    stopAudio();

    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (err: any) {
      console.error("getUserMedia failed:", err.name, err.message);
      if (err?.name === "NotAllowedError" || err?.name === "PermissionDeniedError") {
        setErrorText("Microphone access denied. Allow microphone in browser settings.");
      } else if (err?.name === "NotFoundError") {
        setErrorText("No microphone found.");
      } else {
        setErrorText(`Mic error: ${err.message || err.name || "Unknown"}`);
      }
      setStatus("error");
      setStatusText("Mic unavailable. Tap to retry.");
      setConversationActive(false);
      conversationActiveRef.current = false;
      return;
    }

    try {
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

        if (!conversationActiveRef.current) return;

        const audioBlob = new Blob(audioChunksRef.current, { type: mimeType });

        if (audioBlob.size < 100) {
          if (conversationActiveRef.current) {
            setStatusText("Didn't catch that. Listening...");
            setTimeout(() => startRecordingRef.current?.(), 800);
          }
          return;
        }

        setStatus("transcribing");
        setStatusText("Processing...");

        try {
          const wavBase64 = await convertBlobToWav(audioBlob);

          const sttRes = await fetch("/api/sarvam/speech-to-text", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ audio: wavBase64, mimeType: "audio/wav", model: "saarika:v2.5" }),
          });

          if (!sttRes.ok) {
            const err = await sttRes.json().catch(() => ({}));
            throw new Error(err.error || `STT error ${sttRes.status}`);
          }

          const sttData = await sttRes.json();
          const transcript = sttData?.transcript || "";

          if (!transcript.trim()) {
            if (conversationActiveRef.current) {
              setStatus("recording");
              setStatusText("Listening...");
              setTimeout(() => startRecordingRef.current?.(), 500);
            }
            return;
          }

          onTranscript?.(transcript);
          setStatus("thinking");
          setStatusText("Thinking...");

          const reply = await sendMessage(transcript);
          if (reply && conversationActiveRef.current) {
            await speakText(reply);
          } else if (conversationActiveRef.current) {
            setTimeout(() => startRecordingRef.current?.(), 400);
          }
        } catch (err: any) {
          console.error("STT error:", err);
          setErrorText(err.message || "Error occurred");
          setStatus("error");
          setStatusText("Error. Tap mic to continue.");
        }
      };

      recorder.start();
      setStatus("recording");
      setStatusText("Listening...");
    } catch (err: any) {
      stream.getTracks().forEach((t) => t.stop());
      setErrorText(`Recording error: ${err.message || "Unknown"}`);
      setStatus("error");
      setStatusText("Error. Tap to retry.");
    }
  }, [onTranscript, sendMessage, speakText]);

  // Keep ref in sync
  startRecordingRef.current = startRecording;

  const stopRecording = useCallback(() => {
    mediaRecorderRef.current?.stop();
  }, []);

  const handleMicClick = () => {
    if (status === "recording") {
      stopRecording();
    } else if (status === "speaking") {
      // Skip current response, listen again
      stopAudio();
      if (conversationActiveRef.current) {
        setTimeout(() => startRecordingRef.current?.(), 300);
      }
    } else if (conversationActive && status === "error") {
      // Retry after error
      setErrorText(null);
      startRecording();
    } else {
      // Start conversation
      conversationActiveRef.current = true;
      setConversationActive(true);
      setErrorText(null);
      startRecording();
    }
  };

  const isAnimating = status === "recording" || status === "speaking";
  const isProcessing = status === "transcribing" || status === "thinking";

  const pulseColor = status === "recording" ? "bg-red-500" : status === "speaking" ? "bg-green-500" : "bg-yellow-500";

  return (
    <div className="flex flex-col items-center gap-3 py-4">
      {/* Status label */}
      {conversationActive && (
        <div className={cn(
          "flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold",
          isDark ? "bg-green-500/15 text-green-400" : "bg-green-50 text-green-600"
        )}>
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Conversation active
        </div>
      )}

      {/* Mic button */}
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
        <p className={cn("text-xs text-center px-3 max-w-[280px]", isDark ? "text-red-400" : "text-red-500")}>
          {errorText}
        </p>
      )}

      {/* Audio visualizer */}
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

      {/* End conversation button */}
      {conversationActive && (
        <button
          onClick={endConversation}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium transition-colors mt-1",
            isDark
              ? "bg-red-500/15 text-red-400 hover:bg-red-500/25"
              : "bg-red-50 text-red-500 hover:bg-red-100"
          )}
        >
          <PhoneOff className="w-3 h-3" />
          End Conversation
        </button>
      )}
    </div>
  );
}
