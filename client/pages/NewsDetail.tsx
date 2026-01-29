import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, AlertCircle, User, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNews } from "@/hooks/useNews";
import { Card, CardContent } from "@/components/ui/card";

export default function NewsDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { news: allNews, loading } = useNews({ limit: 1000 });

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

  // Fix: Compare both string and number versions of ID to handle type mismatch
  const newsItem = allNews.find((n) => String(n.id) === String(id));

  if (!newsItem) {
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
              News Not Found
            </h1>
            <p className="text-foreground/60 mb-6">
              The news article you're looking for doesn't exist.
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

  const formattedDate = newsItem.date
    ? new Date(newsItem.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown date";

  const getCategoryColor = (category?: string) => {
    switch (category?.toLowerCase()) {
      case "achievement":
        return "bg-green-100 text-green-800";
      case "research":
        return "bg-purple-100 text-purple-800";
      case "placement":
        return "bg-blue-100 text-blue-800";
      case "accreditation":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Use full description if available, otherwise use summary
  const fullContent = newsItem.description || newsItem.summary;

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
          {newsItem.image && (
            <div className="relative w-full h-96 bg-gradient-to-br from-brand-blue/10 to-brand-magenta/10 overflow-hidden">
              <img
                src={newsItem.image}
                alt={newsItem.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <CardContent className="p-8 space-y-6">
            {/* Title and metadata */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-foreground line-clamp-3">
                {newsItem.title}
              </h1>

              {/* Metadata row */}
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-2 text-foreground/60">
                  <Calendar className="w-4 h-4" />
                  <span>{formattedDate}</span>
                </div>

                {newsItem.author && (
                  <div className="flex items-center gap-2 text-foreground/60">
                    <User className="w-4 h-4" />
                    <span>{newsItem.author}</span>
                  </div>
                )}

                {newsItem.category && (
                  <Badge className={`${getCategoryColor(newsItem.category)}`}>
                    {newsItem.category}
                  </Badge>
                )}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border/20" />

            {/* Summary section if different from description */}
            {newsItem.description && newsItem.summary && (
              <div className="bg-brand-blue/5 border-l-4 border-brand-blue p-4 rounded">
                <p className="text-base font-semibold text-foreground mb-2">
                  Summary
                </p>
                <p className="text-foreground/80">{newsItem.summary}</p>
              </div>
            )}

            {/* Full content */}
            <div className="prose prose-sm max-w-none text-foreground/80">
              <p className="text-lg leading-relaxed whitespace-pre-wrap break-words">
                {fullContent}
              </p>
            </div>

            {/* Tags */}
            {newsItem.tags && newsItem.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/20">
                {newsItem.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Additional info */}
            {(newsItem.department_code || newsItem.school_code) && (
              <div className="bg-foreground/5 rounded-lg p-4 grid grid-cols-2 gap-4 text-sm">
                {newsItem.department_code && (
                  <div>
                    <span className="text-foreground/60">Department</span>
                    <p className="font-semibold text-foreground">
                      {newsItem.department_code.toUpperCase()}
                    </p>
                  </div>
                )}
                {newsItem.school_code && (
                  <div>
                    <span className="text-foreground/60">School</span>
                    <p className="font-semibold text-foreground">
                      {newsItem.school_code}
                    </p>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
