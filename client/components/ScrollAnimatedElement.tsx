import { ReactNode } from "react";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

interface ScrollAnimatedElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Wraps elements to add scroll-triggered fade-in-up animations
 * Elements slide up from bottom with fade effect when they enter viewport
 */
export function ScrollAnimatedElement({
  children,
  className = "",
  delay = 0,
}: ScrollAnimatedElementProps) {
  const { elementRef, isVisible } = useScrollTrigger({
    threshold: 0.1,
  });

  return (
    <div
      ref={elementRef}
      className={`scroll-fade-in-up ${isVisible ? "visible" : ""} ${className}`}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
