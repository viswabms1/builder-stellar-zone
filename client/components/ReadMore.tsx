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
 * ReadMore Component - Shows "Read More" link if content is substantial
 * Uses character count heuristic to determine if content warrants a detail page
 */
export function ReadMore({
  contentId,
  type,
  maxLines = 3,
  className = "",
  children,
}: ReadMoreProps) {
  const navigate = useNavigate();

  // Convert children to string to check length
  let contentText = "";
  if (typeof children === "string") {
    contentText = children;
  } else if (Array.isArray(children)) {
    contentText = children
      .map((c) => (typeof c === "string" ? c : ""))
      .join("");
  }

  // Show Read More if content is longer than ~200 characters (reasonable preview length)
  // This accounts for ~2-3 lines of text
  const shouldShowReadMore = contentText.length > 180;

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
