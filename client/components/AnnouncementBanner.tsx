import { useAnnouncements } from "@/hooks/useAnnouncements";
import { useContentContext } from "@/hooks/useContentContext";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { X, AlertCircle, Info, CheckCircle2, Download, FileText, Paperclip } from "lucide-react";
import { useState } from "react";
import { ReadMore } from "@/components/ReadMore";

interface AnnouncementBannerProps {
  priority?: "high" | "medium" | "low";
  category?: "Academic" | "Administrative" | "Event" | "Urgent" | "General";
  school?: string; // Optional override
  limit?: number;
  dismissible?: boolean;
  variant?: "banner" | "card" | "list";
}

/**
 * Get file icon based on file type
 */
function getFileIcon(fileType: string) {
  const lowerType = fileType.toLowerCase();
  if (lowerType === "pdf") return "📄";
  if (["doc", "docx", "txt"].includes(lowerType)) return "📝";
  if (["xls", "xlsx", "csv"].includes(lowerType)) return "📊";
  if (["ppt", "pptx"].includes(lowerType)) return "🎯";
  return "📎";
}

/**
 * Announcement Banner Component
 * Displays announcements with various layouts (banner, card, list)
 * Ready for Directus integration
 */
export function AnnouncementBanner({
  priority = "high",
  variant = "banner",
  dismissible = true,
  limit = 3,
  school: schoolProp,
  category,
}: AnnouncementBannerProps) {
  // Auto-detect school from current page context
  const { school: contextSchool } = useContentContext();
  const school = schoolProp || contextSchool; // Use prop if provided, otherwise use context

  const { announcements, loading, error } = useAnnouncements({
    priority,
    category,
    school,
    limit,
  });

  const [dismissed, setDismissed] = useState<Set<string>>(new Set());

  const visibleAnnouncements = announcements.filter(
    (a) => !dismissed.has(a.id)
  );

  if (loading) {
    return (
      <div className="animate-pulse bg-gray-200 h-16 rounded" />
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" className="mb-4">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  if (visibleAnnouncements.length === 0) {
    return null;
  }

  // Banner variant (single announcement at top)
  if (variant === "banner" && visibleAnnouncements.length > 0) {
    const announcement = visibleAnnouncements[0];
    const bgColor =
      announcement.priority === "high"
        ? "bg-red-50 border-red-500"
        : announcement.priority === "medium"
          ? "bg-yellow-50 border-yellow-500"
          : "bg-blue-50 border-blue-500";

    return (
      <div className={`mb-6 rounded-lg border-l-4 p-4 ${bgColor}`}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-foreground">
                {announcement.title}
              </h3>
              {announcement.type === "circular" && (
                <span className="inline-block px-2 py-1 text-xs font-medium bg-red-200 text-red-800 rounded">
                  CIRCULAR
                </span>
              )}
            </div>
            <ReadMore
              contentId={announcement.id}
              type="announcement"
              maxLines={2}
              className="text-sm text-foreground/75 mt-1"
            >
              {announcement.description}
            </ReadMore>

            {/* Attachment Section */}
            {announcement.attachment && (
              <div className="mt-4">
                <a
                  href={`https://dsu-website-headless-cms.directus.app/assets/${announcement.attachment}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 text-xs bg-white border border-foreground/20 rounded hover:bg-foreground/5 transition"
                >
                  <Paperclip className="h-3 w-3" />
                  <span className="font-medium text-foreground">
                    Download Attachment
                  </span>
                  <Download className="h-3 w-3 text-foreground/50 ml-1" />
                </a>
              </div>
            )}

            <p className="text-xs text-foreground/60 mt-3">
              {announcement.expiry_date && `Expires: ${new Date(announcement.expiry_date).toLocaleDateString()}`}
              {announcement.date && ` | Posted: ${new Date(announcement.date).toLocaleDateString()}`}
            </p>
          </div>
          {dismissible && (
            <button
              onClick={() => setDismissed(new Set(dismissed).add(announcement.id))}
              className="ml-4 text-foreground/50 hover:text-foreground flex-shrink-0"
              aria-label="Dismiss announcement"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
    );
  }

  // Card variant (grid of announcements)
  if (variant === "card") {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
        {visibleAnnouncements.map((announcement) => {
          const borderColor =
            announcement.priority === "high"
              ? "border-red-200 bg-red-50"
              : announcement.priority === "medium"
                ? "border-yellow-200 bg-yellow-50"
                : "border-blue-200 bg-blue-50";

          return (
            <div
              key={announcement.id}
              className={`rounded-lg border p-4 flex flex-col ${borderColor}`}
            >
              {announcement.image && (
                <img
                  src={announcement.image}
                  alt={announcement.title}
                  className="w-full h-32 object-cover rounded mb-3"
                />
              )}
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-foreground text-sm flex-1">
                  {announcement.title}
                </h4>
                {dismissible && (
                  <button
                    onClick={() =>
                      setDismissed(new Set(dismissed).add(announcement.id))
                    }
                    className="ml-2 text-foreground/50 hover:text-foreground flex-shrink-0"
                    aria-label="Dismiss announcement"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {announcement.type === "circular" && (
                <span className="inline-block px-2 py-1 text-xs font-medium bg-red-200 text-red-800 rounded w-fit mb-2">
                  CIRCULAR
                </span>
              )}

              <p className="text-xs text-foreground/75 mb-3 line-clamp-2">
                {announcement.description}
              </p>

              {/* Attachments in card */}
              {announcement.attachments && announcement.attachments.length > 0 && (
                <div className="mb-3 space-y-1">
                  {announcement.attachments.map((attachment) => (
                    <a
                      key={attachment.id}
                      href={attachment.fileUrl}
                      download={attachment.fileName}
                      className="flex items-center gap-2 text-xs text-foreground/70 hover:text-foreground transition"
                    >
                      <span>{getFileIcon(attachment.fileType)}</span>
                      <span className="truncate">{attachment.fileName}</span>
                    </a>
                  ))}
                </div>
              )}

              <div className="mt-auto flex items-center justify-between pt-2">
                <span className="text-xs text-foreground/60">
                  {new Date(announcement.date).toLocaleDateString()}
                </span>
                <span className="text-xs px-2 py-1 rounded bg-foreground/10">
                  {announcement.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // List variant (simple list)
  return (
    <div className="space-y-3 mb-6">
      {visibleAnnouncements.map((announcement) => (
        <div
          key={announcement.id}
          className={`rounded-lg border-l-4 p-3 flex items-start justify-between ${
            announcement.priority === "high"
              ? "bg-red-50 border-red-500"
              : announcement.priority === "medium"
                ? "bg-yellow-50 border-yellow-500"
                : "bg-blue-50 border-blue-500"
          }`}
        >
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-medium text-foreground text-sm">
                {announcement.title}
              </h4>
              {announcement.type === "circular" && (
                <span className="inline-block px-2 py-0.5 text-xs font-medium bg-red-200 text-red-800 rounded whitespace-nowrap">
                  CIRCULAR
                </span>
              )}
            </div>
            <p className="text-xs text-foreground/70">
              {new Date(announcement.date).toLocaleDateString()} •{" "}
              {announcement.category}
            </p>
            {announcement.attachments && announcement.attachments.length > 0 && (
              <p className="text-xs text-foreground/60 mt-1 flex items-center gap-1">
                <Paperclip className="h-3 w-3" />
                {announcement.attachments.length}{" "}
                {announcement.attachments.length === 1
                  ? "attachment"
                  : "attachments"}
              </p>
            )}
          </div>
          {dismissible && (
            <button
              onClick={() =>
                setDismissed(new Set(dismissed).add(announcement.id))
              }
              className="ml-4 text-foreground/50 hover:text-foreground flex-shrink-0"
              aria-label="Dismiss announcement"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
