import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Download, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAnnouncements } from "@/hooks/useAnnouncements";
import { Card, CardContent } from "@/components/ui/card";

export default function AnnouncementDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { announcements, loading } = useAnnouncements({ limit: 1000 });

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-background/80 py-8 px-4">
        <div className="mx-auto max-w-3xl">
          <div className="animate-pulse space-y-4">
            <div className="h-10 bg-gray-200 rounded w-1/4" />
            <div className="h-32 bg-gray-200 rounded" />
            <div className="h-24 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    );
  }

  const announcement = announcements.find((a) => a.id === id);

  if (!announcement) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-background/80 py-8 px-4">
        <div className="mx-auto max-w-3xl">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="mb-6 gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>

          <div className="text-center py-12">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Announcement Not Found
            </h1>
            <p className="text-foreground/60 mb-6">
              The announcement you're looking for doesn't exist.
            </p>
            <Button onClick={() => navigate("/")} className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const formattedDate = announcement.date
    ? new Date(announcement.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown date";

  const getCategoryColor = (category?: string) => {
    switch (category?.toLowerCase()) {
      case "academic":
        return "bg-blue-100 text-blue-800";
      case "administrative":
        return "bg-purple-100 text-purple-800";
      case "event":
        return "bg-green-100 text-green-800";
      case "urgent":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority?: string) => {
    switch (priority?.toLowerCase()) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/80 py-8 px-4">
      <div className="mx-auto max-w-3xl">
        {/* Back button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate(-1)}
          className="mb-6 gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>

        <Card className="border-2 border-border/30 overflow-hidden">
          {announcement.image && (
            <div className="relative w-full h-96 bg-gradient-to-br from-brand-blue/10 to-brand-magenta/10 overflow-hidden">
              <img
                src={announcement.image}
                alt={announcement.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <CardContent className="p-8 space-y-6">
            {/* Title and metadata */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-foreground line-clamp-3">
                {announcement.title}
              </h1>

              {/* Badges and date */}
              <div className="flex flex-wrap items-center gap-3">
                {announcement.category && (
                  <Badge className={`${getCategoryColor(announcement.category)}`}>
                    {announcement.category}
                  </Badge>
                )}
                {announcement.priority && (
                  <Badge className={`${getPriorityColor(announcement.priority)}`}>
                    {announcement.priority.toUpperCase()} PRIORITY
                  </Badge>
                )}
                {announcement.type === "circular" && (
                  <Badge className="bg-red-200 text-red-800">CIRCULAR</Badge>
                )}
                <span className="text-sm text-foreground/60 ml-auto">
                  {formattedDate}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border/20" />

            {/* Full content */}
            <div className="prose prose-sm max-w-none text-foreground/80">
              <p className="text-lg leading-relaxed whitespace-pre-wrap break-words">
                {announcement.description}
              </p>
            </div>

            {/* Attachment */}
            {announcement.attachment && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => {
                    const url =
                      typeof announcement.attachment === "string"
                        ? announcement.attachment
                        : announcement.attachment.url;
                    let absoluteUrl = url;
                    if (!absoluteUrl.startsWith("http")) {
                      absoluteUrl = `${window.location.origin}${absoluteUrl}`;
                    }
                    window.open(absoluteUrl, "_blank");
                  }}
                  className="gap-2 bg-brand-blue hover:bg-brand-blue/90"
                >
                  <Download className="w-4 h-4" />
                  Download Attachment
                </Button>
              </div>
            )}

            {/* Additional info */}
            <div className="bg-foreground/5 rounded-lg p-4 grid grid-cols-2 gap-4 text-sm">
              {announcement.department_code && (
                <div>
                  <span className="text-foreground/60">Department</span>
                  <p className="font-semibold text-foreground">
                    {announcement.department_code.toUpperCase()}
                  </p>
                </div>
              )}
              {announcement.expiry_date && (
                <div>
                  <span className="text-foreground/60">Expiry Date</span>
                  <p className="font-semibold text-foreground">
                    {new Date(announcement.expiry_date).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
