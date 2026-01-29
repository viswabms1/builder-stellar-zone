import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ReadMoreProps {
  contentId: string;
  type: "announcement" | "news" | "event";
  maxLines?: number;
  className?: string;
  children: React.ReactNode;
}

/**
 * ReadMore Component - Shows "Read More" link only if content overflows
 * Detects overflow by checking if clamped content is taller than expected
 */
export function ReadMore({
  contentId,
  type,
  maxLines = 3,
  className = "",
  children,
}: ReadMoreProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const fullContentRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkOverflow = () => {
      if (contentRef.current && fullContentRef.current) {
        // Get the full content height (without line clamp)
        const fullHeight = fullContentRef.current.scrollHeight;

        // Get the computed line-height
        const styles = window.getComputedStyle(contentRef.current);
        const lineHeight = parseFloat(styles.lineHeight);
        const clampedMaxHeight = lineHeight * maxLines;

        // Content overflows if full height is greater than clamped height
        const isContentOverflowing = fullHeight > clampedMaxHeight + 5; // +5 for margin/padding

        console.log(`[ReadMore] Content overflow check:`, {
          contentId,
          fullHeight,
          clampedMaxHeight,
          maxLines,
          lineHeight,
          isOverflowing: isContentOverflowing
        });

        setIsOverflowing(isContentOverflowing);
      }
    };

    // Use a small delay to ensure DOM is fully rendered
    const timer = setTimeout(checkOverflow, 100);

    // Check on window resize
    window.addEventListener("resize", checkOverflow);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkOverflow);
    };
  }, [maxLines, children, contentId]);

  const handleReadMore = () => {
    navigate(`/${type}/${contentId}`);
  };

  return (
    <div className="space-y-3">
      {/* Hidden full-height reference to check overflow */}
      <div
        ref={fullContentRef}
        className={`invisible absolute pointer-events-none ${className}`}
        style={{ visibility: "hidden", position: "absolute" }}
      >
        {children}
      </div>

      {/* Visible clamped content */}
      <div
        ref={contentRef}
        className={`${className}`}
        style={{
          display: "-webkit-box",
          WebkitLineClamp: maxLines,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {children}
      </div>

      {isOverflowing && (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleReadMore}
          className="group gap-1 h-8 px-3 text-xs text-brand-blue hover:text-brand-blue hover:bg-brand-blue/10"
        >
          Read More
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </Button>
      )}
    </div>
  );
}
