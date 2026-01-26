import { useNews } from "@/hooks/useNews";
import { useContentContext } from "@/hooks/useContentContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface NewsSectionProps {
  school?: string; // Optional override
  department?: string; // Optional override
  limit?: number;
  variant?: "grid" | "list" | "featured" | "carousel";
  title?: string;
  description?: string;
  showViewAll?: boolean;
}

/**
 * Reusable News Section Component
 * Displays news from centralized data filtered by school/department
 *
 * @example
 * // Display all Engineering news
 * <NewsSection school="Engineering" title="Engineering News" />
 *
 * @example
 * // Display CSE department news
 * <NewsSection school="Engineering" department="CSE" limit={3} variant="list" />
 *
 * @example
 * // Display featured news (latest 5)
 * <NewsSection limit={5} variant="featured" />
 */
export function NewsSection({
  school: schoolProp,
  department: departmentProp,
  limit = 6,
  variant = "grid",
  title = "Latest News",
  description,
  showViewAll = false,
}: NewsSectionProps) {
  // Auto-detect school and department from current page context
  const { school: contextSchool, department: contextDepartment } = useContentContext();
  const school = schoolProp || contextSchool;
  const department = departmentProp || contextDepartment;

  const { news, loading, error } = useNews({
    school,
    department,
    limit,
  });

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="animate-pulse space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-24 bg-gray-200 rounded" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-600 text-sm">
        Error loading news: {error}
      </div>
    );
  }

  if (news.length === 0) {
    return (
      <div className="text-center py-12 text-foreground/50">
        <p>No news available at this time.</p>
      </div>
    );
  }

  // Carousel variant - rotating featured item
  if (variant === "carousel") {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % news.length);
      }, 6000);
      return () => clearInterval(interval);
    }, [news.length]);

    const currentItem = news[currentIndex];

    return (
      <section className="px-3 py-8">
        <div className="mx-auto max-w-7xl space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              {title && <h2 className="headline-2 font-display mb-2">{title}</h2>}
              {description && <p className="text-foreground/80 font-body">{description}</p>}
            </div>
            <Badge className="w-fit text-xs">{currentIndex + 1} / {news.length}</Badge>
          </div>

          <Card className="group overflow-hidden rounded-2xl border-2 border-border/30 bg-card/40 backdrop-blur-sm">
            {currentItem.image && (
              <div className="relative h-48 overflow-hidden">
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            )}
            <CardContent className="p-4 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <h4 className="font-display font-semibold text-sm text-foreground mb-2 line-clamp-2">{currentItem.title}</h4>
                  <p className="text-xs text-foreground/70 line-clamp-2">{currentItem.excerpt || (currentItem.content ? currentItem.content.substring(0, 100) : '')}</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-border/20">
                <span className="text-xs font-semibold text-foreground/60">{new Date(currentItem.date).toLocaleDateString()}</span>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-between gap-2">
            <div className="flex gap-1">
              {news.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentIndex
                      ? "bg-brand-blue w-8"
                      : "bg-border/40 w-1.5 hover:bg-border/60"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-2 text-xs"
                onClick={() => setCurrentIndex((prev) => (prev - 1 + news.length) % news.length)}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-2 text-xs"
                onClick={() => setCurrentIndex((prev) => (prev + 1) % news.length)}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Featured variant - large cards with images
  if (variant === "featured") {
    return (
      <div className="space-y-6">
        {title && (
          <div>
            <h2 className="text-3xl font-bold text-foreground">{title}</h2>
            {description && (
              <p className="text-foreground/70 mt-2">{description}</p>
            )}
          </div>
        )}
        <div className="grid gap-6 md:grid-cols-2">
          {news.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <Badge variant="outline">{item.category}</Badge>
                </div>
                <CardDescription>{item.excerpt || item.content.substring(0, 100)}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center text-xs text-foreground/60 gap-4">
                  {item.author && (
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {item.author}
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 pt-2">
                    {item.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // Grid variant - card grid
  if (variant === "grid") {
    return (
      <div className="space-y-6">
        {title && (
          <div>
            <h2 className="text-2xl font-bold text-foreground">{title}</h2>
            {description && (
              <p className="text-foreground/70 mt-1">{description}</p>
            )}
          </div>
        )}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 object-cover"
                />
              )}
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <CardTitle className="text-sm line-clamp-2">{item.title}</CardTitle>
                </div>
                <Badge variant="outline" className="w-fit text-xs">{item.category}</Badge>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-xs text-foreground/70 line-clamp-2">
                  {item.excerpt || item.content.substring(0, 80)}
                </p>
                <div className="flex items-center justify-between text-xs text-foreground/60">
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                  {item.author && <span>{item.author}</span>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // List variant - simple list
  return (
    <div className="space-y-4">
      {title && (
        <div>
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          {description && (
            <p className="text-foreground/70 mt-1">{description}</p>
          )}
        </div>
      )}
      <div className="space-y-3">
        {news.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-4 p-3 border rounded-lg hover:bg-foreground/5 transition"
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded flex-shrink-0"
              />
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-semibold text-sm text-foreground">
                  {item.title}
                </h3>
                <Badge variant="outline" className="text-xs flex-shrink-0">
                  {item.category}
                </Badge>
              </div>
              <p className="text-xs text-foreground/70 line-clamp-1 mb-1">
                {item.excerpt || item.content.substring(0, 100)}
              </p>
              <div className="flex items-center gap-3 text-xs text-foreground/60">
                <span>{new Date(item.date).toLocaleDateString()}</span>
                {item.author && <span>{item.author}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
      {showViewAll && (
        <button className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
          View All News
          <ArrowRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
