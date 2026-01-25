import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useAutoMuteOnScroll } from "@/hooks/useAutoMuteOnScroll";

export type DeanInfo = {
  name: string;
  title: string;
  position: string;
  photo: string;
  videoUrl?: string;
  message?: string[];
  borderColor?: string;
  bgColor?: string;
};

function DeanMessageVideo({ videoUrl }: { videoUrl: string }) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  useAutoMuteOnScroll(videoRef);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Sync button state with actual video muted status
    // This handles when scroll hook or other code changes video.muted
    const handleVolumeChange = () => {
      setIsMuted(video.muted);
    };

    video.addEventListener("volumechange", handleVolumeChange);
    return () => {
      video.removeEventListener("volumechange", handleVolumeChange);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black/20 border border-border/30">
      <video
        ref={videoRef}
        src={videoUrl}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
        loading="lazy"
        className="w-full h-full object-cover"
      />
      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="h-5 w-5" />
        ) : (
          <Volume2 className="h-5 w-5" />
        )}
      </button>
    </div>
  );
}

interface DeanSectionProps {
  dean: DeanInfo;
}

export function DeanSection({ dean }: DeanSectionProps) {
  const borderColorClass = dean.borderColor || "border-orange-500/20";
  const bgColorClass = dean.bgColor || "bg-orange-500/10";

  return (
    <section className="dean-section-wrapper relative overflow-hidden px-3 py-2">
      <div className="mx-auto max-w-7xl">
        <div
          className={`rounded-none border ${borderColorClass} ${bgColorClass} overflow-hidden backdrop-blur`}
        >
          <div className="grid md:grid-cols-[300px_1fr] gap-0">
            {/* Dean's Photo */}
            <div className="relative overflow-hidden bg-gradient-to-br from-brand-magenta/10 to-brand-blue/10 flex items-start justify-center p-2 sm:p-3 md:p-6">
              <div className="relative w-full max-w-[160px] sm:max-w-xs md:max-w-xs">
                <img
                  src={dean.photo}
                  alt={dean.name}
                  className="w-full h-auto object-cover rounded-none border-4 border-white/20"
                />
                <div
                  className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-orange via-brand-magenta to-brand-blue"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Dean's Message Video */}
            <div className="p-4 md:p-6 flex flex-col justify-center">
              <div className="space-y-4">
                {/* Header with Name and Title */}
                <div className="border-l-4 border-brand-magenta pl-4">
                  <h3 className="title-lg font-semibold text-foreground">
                    {dean.name}
                  </h3>
                  <p className="body-sm text-foreground mt-1">
                    {dean.title}
                  </p>
                  <p className="body-sm font-medium text-brand-magenta mt-2">
                    {dean.position}
                  </p>
                </div>

                {/* Content: Video or Message */}
                {dean.videoUrl ? (
                  <DeanMessageVideo videoUrl={dean.videoUrl} />
                ) : dean.message ? (
                  <div className="space-y-4 text-foreground/90 leading-relaxed body-md">
                    {dean.message.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                ) : (
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black/20 border border-border/30 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <p className="text-foreground/60 body-sm font-medium">
                        Coming Soon
                      </p>
                      <p className="text-foreground/40 body-sm">
                        Dean's Message Video
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
