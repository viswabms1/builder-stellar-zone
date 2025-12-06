import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export type DeanInfo = {
  name: string;
  title: string;
  position: string;
  photo: string;
  videoUrl: string;
  borderColor?: string;
  bgColor?: string;
};

function DeanMessageVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black/20 border border-border/30">
      <video
        ref={videoRef}
        src="https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2F0c95c62aa88741fca8ebdc32aade53d5?alt=media&token=c57ff4a9-aea8-4ff3-843b-23ce820ba630&apiKey=4aa279a8430d441dba9c55f659831878"
        autoPlay
        muted
        loop
        playsInline
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
    <section className="relative overflow-hidden px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className={`rounded-none border ${borderColorClass} ${bgColorClass} overflow-hidden backdrop-blur`}>
          <div className="grid md:grid-cols-[300px_1fr] gap-0">
            {/* Dean's Photo */}
            <div className="relative overflow-hidden bg-gradient-to-br from-brand-magenta/10 to-brand-blue/10 flex items-start justify-center p-8 md:p-12 pt-8 md:pt-12">
              <div className="relative w-full max-w-xs">
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
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="space-y-4">
                {/* Header with Name and Title */}
                <div className="border-l-4 border-brand-magenta pl-4">
                  <h3 className="text-2xl font-semibold text-foreground font-display">
                    {dean.name}
                  </h3>
                  <p className="text-sm text-foreground mt-1 font-body">
                    {dean.title}
                  </p>
                  <p className="text-sm font-medium text-brand-magenta mt-2 font-display">
                    {dean.position}
                  </p>
                </div>

                {/* Video Container */}
                <DeanMessageVideo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
