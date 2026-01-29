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
 * Detects overflow by comparing scrollHeight with clientHeight
 */
export function ReadMore({
  contentId,
  type,
  maxLines = 3,
  className = "",
  children,
}: ReadMoreProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkOverflow = () => {
      if (contentRef.current) {
        // Get the computed line-height
        const styles = window.getComputedStyle(contentRef.current);
        const lineHeight = parseFloat(styles.lineHeight);
        const maxHeight = lineHeight * maxLines;

        // Check if content exceeds maxHeight
        const isContentOverflowing =
          contentRef.current.scrollHeight > maxHeight + 2; // +2 for rounding errors

        setIsOverflowing(isContentOverflowing);
      }
    };

    // Check on mount
    checkOverflow();

    // Check on window resize
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [maxLines, children]);

  const handleReadMore = () => {
    navigate(`/${type}/${contentId}`);
  };

  return (
    <div className="space-y-3">
      <div
        ref={contentRef}
        className={`overflow-hidden ${maxLines > 0 ? `line-clamp-${maxLines}` : ""} ${className}`}
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
