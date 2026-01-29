import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ReadMoreProps {
  contentId: string;
  type: "announcement" | "news" | "event";
  maxLines?: number;
  className?: string;
  children: React.ReactNode;
  showReadMore?: boolean; // Explicit flag for showing Read More
}

/**
 * ReadMore Component - Shows "Read More" link to view full content
 * Can be explicitly controlled via showReadMore prop, or auto-detected from content length
 */
export function ReadMore({
  contentId,
  type,
  maxLines = 3,
  className = "",
  children,
  showReadMore: explicitShowReadMore,
}: ReadMoreProps) {
  const navigate = useNavigate();

  // Determine if we should show Read More
  let shouldShowReadMore = explicitShowReadMore;

  if (shouldShowReadMore === undefined) {
    // Auto-detect based on content length
    let contentText = "";
    if (typeof children === "string") {
      contentText = children;
    } else if (Array.isArray(children)) {
      contentText = children
        .map((c) => (typeof c === "string" ? c : ""))
        .join("");
    }
    // Show Read More if content is longer than ~180 characters
    shouldShowReadMore = contentText.length > 180;
  }

  const handleReadMore = () => {
    navigate(`/${type}/${contentId}`);
  };

  return (
    <div className="space-y-3">
      {/* Visible clamped content */}
      <div
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

      {shouldShowReadMore && (
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
