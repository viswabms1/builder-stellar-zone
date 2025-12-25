import { useRef, useEffect } from "react";

/**
 * Hook that automatically mutes a video when it scrolls out of view
 * and allows manual unmuting when in view
 */
export function useAutoMuteOnScroll(videoRef: React.RefObject<HTMLVideoElement>) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !videoRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (!entry.isIntersecting) {
            videoRef.current.muted = true;
          }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [videoRef]);

  return containerRef;
}
