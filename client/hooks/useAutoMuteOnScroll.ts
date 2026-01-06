import { useRef, useEffect } from "react";

/**
 * Hook that automatically mutes ANY video when it scrolls out of view
 * Works with any video element on the page - hero videos, embedded videos, etc.
 * Usage: const containerRef = useAutoMuteOnScroll(videoRef);
 *        <div ref={containerRef}><video ref={videoRef} .../></div>
 *
 * OR if the video is the only element in container:
 * Usage: useAutoMuteOnScroll(videoRef);
 */
export function useAutoMuteOnScroll(videoRef: React.RefObject<HTMLVideoElement>) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (video) {
          // Automatically mute when out of view
          if (!entry.isIntersecting) {
            video.muted = true;
          }
          // Don't auto-unmute - let user control unmuting
        }
      },
      { threshold: 0.1 }
    );

    // Observe the video element directly for maximum compatibility
    observer.observe(video);
    return () => observer.disconnect();
  }, [videoRef]);

  return containerRef;
}

/**
 * Alternative hook for when you want to wrap video in a container
 * Usage: <div ref={containerRef}><video ref={videoRef} .../></div>
 */
export function useAutoMuteOnScrollContainer(videoRef: React.RefObject<HTMLVideoElement>) {
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
