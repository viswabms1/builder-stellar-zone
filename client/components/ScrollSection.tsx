import { useScrollTrigger } from "@/hooks/useScrollTrigger";
import { ReactNode } from "react";

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
}

/**
 * Wrapper component that triggers scroll animations when section enters viewport
 * Slides content up from bottom with fade-in effect
 */
export function ScrollSection({
  children,
  className = "",
  delay = 0,
  stagger = false,
}: ScrollSectionProps) {
  const { elementRef, isVisible } = useScrollTrigger({
    threshold: 0.1,
  });

  return (
    <div
      ref={elementRef}
      className={`${className} ${isVisible ? "visible" : ""} scroll-fade-in-up`}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {stagger ? (
        <div className="space-y-4">
          {Array.isArray(children)
            ? children.map((child, idx) => (
                <div key={idx} className="scroll-stagger-item">
                  {child}
                </div>
              ))
            : children}
        </div>
      ) : (
        children
      )}
    </div>
  );
}
