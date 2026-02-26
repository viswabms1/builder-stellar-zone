import { useState, useRef, useCallback } from "react";
import { Mic, MicOff, Volume2, Loader2, PhoneOff } from "lucide-react";
import { cn } from "@/lib/utils";

type VoiceBotStatus = "idle" | "recording" | "transcribing" | "thinking" | "speaking" | "error";

interface VoiceBotProps {
  theme: string;
  onTranscript?: (text: string) => void;
  sendMessage: (text: string) => Promise<string | null>;
}

/** Convert ArrayBuffer to base64 in chunks to avoid stack overflow */
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

/** Encode PCM float32 samples to 16-bit mono WAV */
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
  view.setUint32(16, 16, true);      // chunk size
  view.setUint16(20, 1, true);       // PCM
  view.setUint16(22, 1, true);       // mono
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);       // block align
  view.setUint16(34, 16, true);      // bits per sample
  writeStr(36, "data");
  view.setUint32(40, numSamples * 2, true);
  for (let i = 0; i < numSamples; i++) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(44 + i * 2, s < 0 ? s * 0x8000 : s * 0x7fff, true);
  }
  return buffer;
}

/**
 * Convert any audio blob → 16kHz mono WAV (base64).
 * Sarvam STT works best with 16kHz PCM WAV.
 * Uses OfflineAudioContext to resample properly.
 */
async function convertBlobToWav(blob: Blob): Promise<string> {
  const arrayBuffer = await blob.arrayBuffer();

  // Decode original audio
  const audioCtx = new AudioContext();
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
  await audioCtx.close();

  const TARGET_SAMPLE_RATE = 16000;

  // Resample to 16kHz mono using OfflineAudioContext
  const numOutputSamples = Math.ceil(audioBuffer.duration * TARGET_SAMPLE_RATE);
  const offlineCtx = new OfflineAudioContext(1, numOutputSamples, TARGET_SAMPLE_RATE);

  const source = offlineCtx.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(offlineCtx.destination);
  source.start(0);

  const rendered = await offlineCtx.startRendering();
  const pcmData = rendered.getChannelData(0);

  console.log(`[VoiceBot] Audio: ${audioBuffer.duration.toFixed(1)}s, original ${audioBuffer.sampleRate}Hz → resampled ${TARGET_SAMPLE_RATE}Hz, ${pcmData.length} samples`);

  const wavBuffer = encodeWav(pcmData, TARGET_SAMPLE_RATE);
  return arrayBufferToBase64(wavBuffer);
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
  const emptyTranscriptCountRef = useRef(0);

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
    emptyTranscriptCountRef.current = 0;
    stopAudio();
    if (mediaRecorderRef.current?.state === "recording") {
      mediaRecorderRef.current.stop();
    }
    setStatus("idle");
    setStatusText("Tap to start conversation");
    setErrorText(null);
  }, []);

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
      const data = await res.json();
      const audio = data?.audio;
      if (!audio) throw new Error("No audio received from TTS");

      const byteChars = atob(audio);
      const byteArr = new Uint8Array(byteChars.length);
      for (let i = 0; i < byteChars.length; i++) byteArr[i] = byteChars.charCodeAt(i);

      const blob = new Blob([byteArr], { type: "audio/wav" });
      const url = URL.createObjectURL(blob);
      const audioEl = new Audio();
      audioEl.volume = 1.0;
      audioRef.current = audioEl;

      audioEl.onended = () => {
        URL.revokeObjectURL(url);
        audioRef.current = null;
        emptyTranscriptCountRef.current = 0; // reset on successful cycle
        if (conversationActiveRef.current) {
          setTimeout(() => {
            if (conversationActiveRef.current) startRecordingRef.current?.();
          }, 500);
        } else {
          setStatus("idle");
          setStatusText("Tap to start conversation");
        }
      };

      audioEl.onerror = () => {
        URL.revokeObjectURL(url);
        audioRef.current = null;
        setErrorText("Failed to play audio. Tap mic to continue.");
        setStatus("error");
        setStatusText("Audio error. Tap mic to retry.");
      };

      audioEl.src = url;
      await audioEl.play();
    } catch (err: any) {
      console.error("[VoiceBot TTS] Error:", err);
      setErrorText(err.message || "TTS failed. Tap mic to retry.");
      setStatus("error");
      setStatusText("Error. Tap mic to continue.");
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
      const msg =
        err?.name === "NotAllowedError" ? "Microphone access denied. Allow microphone in browser settings." :
        err?.name === "NotFoundError" ? "No microphone found." :
        `Mic error: ${err.message || err.name}`;
      setErrorText(msg);
      setStatus("error");
      setStatusText("Mic unavailable. Tap to retry.");
      conversationActiveRef.current = false;
      setConversationActive(false);
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

        if (audioBlob.size < 1000) {
          setStatusText("Didn't catch that. Listening...");
          setTimeout(() => startRecordingRef.current?.(), 800);
          return;
        }

        setStatus("transcribing");
        setStatusText("Processing...");

        try {
          // Convert to 16kHz WAV — required for accurate Sarvam STT
          const wavBase64 = await convertBlobToWav(audioBlob);

          const sttRes = await fetch("/api/sarvam/speech-to-text", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              audio: wavBase64,
              mimeType: "audio/wav",
              model: "saarika:v2.5",
              language_code: "en-IN",
            }),
          });

          if (!sttRes.ok) {
            const err = await sttRes.json().catch(() => ({}));
            throw new Error(err.error || `STT error ${sttRes.status}`);
          }

          const sttData = await sttRes.json();
          const transcript = (sttData?.transcript || "").trim();
          console.log("[VoiceBot] Transcript:", transcript || "(empty)");

          if (!transcript) {
            emptyTranscriptCountRef.current += 1;
            // After 2 consecutive empty transcripts, show error — don't loop forever
            if (emptyTranscriptCountRef.current >= 2) {
              emptyTranscriptCountRef.current = 0;
              setErrorText("Couldn't hear you clearly. Check mic volume and try again.");
              setStatus("error");
              setStatusText("Tap mic to retry.");
            } else {
              setStatusText("Didn't catch that. Listening...");
              setStatus("recording");
              setTimeout(() => startRecordingRef.current?.(), 600);
            }
            return;
          }

          // Successful transcript — reset empty counter
          emptyTranscriptCountRef.current = 0;
          onTranscript?.(transcript);
          setStatus("thinking");
          setStatusText("Thinking...");

          const reply = await sendMessage(transcript);
          if (reply && reply.trim() && conversationActiveRef.current) {
            await speakText(reply);
          } else if (!reply || !reply.trim()) {
            setErrorText("No response from bot. Tap mic to retry.");
            setStatus("error");
            setStatusText("Error. Tap mic to continue.");
          }
        } catch (err: any) {
          console.error("[VoiceBot] Processing error:", err);
          setErrorText(err.message || "Something went wrong.");
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
      stopAudio();
      if (conversationActiveRef.current) {
        setTimeout(() => startRecordingRef.current?.(), 300);
      }
    } else if (status === "error" && conversationActive) {
      setErrorText(null);
      startRecording();
    } else if (status !== "transcribing" && status !== "thinking") {
      conversationActiveRef.current = true;
      setConversationActive(true);
      setErrorText(null);
      emptyTranscriptCountRef.current = 0;
      startRecording();
    }
  };

  const isAnimating = status === "recording" || status === "speaking";
  const isProcessing = status === "transcribing" || status === "thinking";
  const pulseColor = status === "recording" ? "bg-red-500" : status === "speaking" ? "bg-green-500" : "bg-yellow-500";

  return (
    <div className="flex flex-col items-center gap-3 py-4">
      {/* Conversation active badge */}
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

      {errorText && (
        <p className={cn("text-xs text-center px-3 max-w-[280px]", isDark ? "text-red-400" : "text-red-500")}>
          {errorText}
        </p>
      )}

      {/* Audio visualizer — recording */}
      {status === "recording" && (
        <div className="flex items-center gap-0.5 h-6">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1 bg-red-400 rounded-full animate-pulse"
              style={{ height: `${8 + (i % 3) * 6}px`, animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      )}

      {/* Audio visualizer — speaking */}
      {status === "speaking" && (
        <div className="flex items-center gap-0.5 h-6">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1 bg-green-400 rounded-full animate-pulse"
              style={{ height: `${8 + (i % 3) * 6}px`, animationDelay: `${i * 0.12}s` }} />
          ))}
        </div>
      )}

      {/* End conversation */}
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
