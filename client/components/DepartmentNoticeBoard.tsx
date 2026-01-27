import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getCategoryStyles, convertAnnouncementToCarouselItem, convertEventToCarouselItem, convertNewsToCarouselItem, type CarouselItem } from "@/lib/content-manager";
import { useDepartmentAnnouncements, getDepartmentCode } from "@/hooks/useDepartmentAnnouncements";
import { useDepartmentEvents } from "@/hooks/useDepartmentEvents";
import { useDepartmentNews } from "@/hooks/useDepartmentNews";
import { Download } from "lucide-react";

export function DepartmentNoticeBoard({ school = "Engineering", department }: { school?: string; department: string }) {
  // Fetch announcements, events, and news from Directus using department code
  const departmentCode = getDepartmentCode(department);

  const { announcements: directusAnnouncements, loading: announcementsLoading } = useDepartmentAnnouncements({
    departmentCode,
    limit: 10,
  });

  const { events: directusEvents, loading: eventsLoading } = useDepartmentEvents({
    departmentCode,
    limit: 10,
  });

  const { news: directusNews, loading: newsLoading } = useDepartmentNews({
    departmentCode,
    limit: 10,
  });

  // Convert Directus data to carousel items
  const announcements = directusAnnouncements.map(convertAnnouncementToCarouselItem);
  const eventItems = directusEvents.map(convertEventToCarouselItem);
  const newsItems = directusNews.map(convertNewsToCarouselItem);

  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  useEffect(() => {
    if (announcements.length === 0) return;
    const interval = setInterval(() => {
      setCurrentAnnouncementIndex((prev) => (prev + 1) % announcements.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [announcements.length]);

  useEffect(() => {
    if (newsItems.length === 0) return;
    const interval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % newsItems.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [newsItems.length]);

  useEffect(() => {
    if (eventItems.length === 0) return;
    const interval = setInterval(() => {
      setCurrentEventIndex((prev) => (prev + 1) % eventItems.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [eventItems.length]);

  const renderCarousel = (title: string, items: CarouselItem[], currentIndex: number, setCurrentIndex: (idx: number) => void, category: "Announcement" | "News" | "Event") => {
    const styles = getCategoryStyles(category);
    if (items.length === 0) {
      return (
        <div className="space-y-4">
          <div className={`flex items-center gap-2 px-4 py-3 rounded-xl border-l-4 ${styles.borderColor} ${styles.bgColor}`}>
            <h3 className={`headline-4 font-display ${styles.textColor}`}>{title}</h3>
          </div>
          <p className="text-xs text-foreground/60 italic p-4 text-center">No items to display</p>
        </div>
      );
    }

    const currentItem = items[currentIndex];

    return (
      <div className="space-y-4">
        <div className={`flex items-center gap-2 px-4 py-3 rounded-xl border-l-4 ${styles.borderColor} ${styles.bgColor}`}>
          <h3 className={`headline-4 font-display ${styles.textColor}`}>{title}</h3>
          <Badge className="ml-auto text-xs">{currentIndex + 1} / {items.length}</Badge>
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
                <p className="text-xs text-foreground/70 line-clamp-2">{currentItem.description}</p>
              </div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-border/20">
              <span className="text-xs font-semibold text-foreground/60">{currentItem.date}</span>
              {currentItem.link && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 px-2 text-xs bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20"
                  asChild
                >
                  <a href={currentItem.link} target="_blank" rel="noreferrer">
                    <Download className="h-3 w-3 mr-1" />
                    PDF
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-between gap-2">
          <div className="flex gap-1">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === currentIndex
                    ? `${styles.bgColor} w-6`
                    : "bg-border/40 w-1.5 hover:bg-border/60"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-1">
            <Button
              variant="outline"
              size="sm"
              className="h-7 px-2 text-xs"
              onClick={() => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)}
            >
              ←
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-7 px-2 text-xs"
              onClick={() => setCurrentIndex((prev) => (prev + 1) % items.length)}
            >
              →
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="notice-board" className="px-3 py-8">
      <div className="mx-auto max-w-7xl space-y-4">
        <h2 className="headline-2 mb-3 font-display">
          <span className="text-foreground">Department </span>
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            Notice Board
          </span>
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {renderCarousel("Events", eventItems, currentEventIndex, setCurrentEventIndex, "Event")}
          {renderCarousel("News", newsItems, currentNewsIndex, setCurrentNewsIndex, "News")}
          {renderCarousel("Announcements", announcements, currentAnnouncementIndex, setCurrentAnnouncementIndex, "Announcement")}
        </div>
      </div>
    </section>
  );
}
