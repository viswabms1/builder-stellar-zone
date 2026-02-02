import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ImageModal } from "@/components/ImageModal";
import { ReadMore } from "@/components/ReadMore";
import { getCategoryStyles, convertAnnouncementToCarouselItem, convertEventToCarouselItem, convertNewsToCarouselItem, type CarouselItem } from "@/lib/content-manager";
import { useDepartmentAnnouncements, getDepartmentCode } from "@/hooks/useDepartmentAnnouncements";
import { useDepartmentEvents } from "@/hooks/useDepartmentEvents";
import { useDepartmentNews } from "@/hooks/useDepartmentNews";
import { Download } from "lucide-react";

export function DepartmentNoticeBoard({ school = "Engineering", department }: { school?: string; department: string }) {
  // Fetch announcements, events, and news using department code
  const departmentCode = getDepartmentCode(department);

  const { announcements, loading: announcementsLoading } = useDepartmentAnnouncements({
    departmentCode,
    limit: 10,
  });

  const { events, loading: eventsLoading } = useDepartmentEvents({
    departmentCode,
    limit: 10,
  });

  const { news, loading: newsLoading } = useDepartmentNews({
    departmentCode,
    limit: 10,
  });

  // Convert data to carousel items
  const announcementItems = announcements.map(convertAnnouncementToCarouselItem);
  const eventItems = events.map(convertEventToCarouselItem);
  const newsItems = news.map(convertNewsToCarouselItem);

  console.log("[DepartmentNoticeBoard] Department:", department, "Code:", departmentCode);
  console.log("[DepartmentNoticeBoard] Events:", events);
  console.log("[DepartmentNoticeBoard] Converted event items:", eventItems);

  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; title?: string } | null>(null);

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
            <div
              className="relative h-48 overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage({ src: currentItem.image!, alt: currentItem.title, title: currentItem.title })}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedImage({ src: currentItem.image!, alt: currentItem.title, title: currentItem.title });
                }
              }}
              aria-label={`Click to view ${currentItem.title} image in larger size`}
            >
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold">
                  Click to enlarge
                </span>
              </div>
            </div>
          )}
          <CardContent className="p-4 space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <h4 className="font-display font-semibold text-sm text-foreground mb-2 line-clamp-2">{currentItem.title}</h4>
                <ReadMore
                  contentId={currentItem.id}
                  type={category.toLowerCase() as "announcement" | "news" | "event"}
                  maxLines={2}
                  className="text-xs text-foreground/70"
                  showReadMore={currentItem.description && currentItem.description.length > 150}
                >
                  {currentItem.description}
                </ReadMore>
              </div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-border/20">
              <span className="text-xs font-semibold text-foreground/60">{currentItem.date}</span>
              {currentItem.link && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 px-2 text-xs bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20"
                  onClick={() => {
                    // Ensure absolute URL
                    let absoluteUrl = currentItem.link;
                    if (!absoluteUrl.startsWith('http')) {
                      absoluteUrl = `${window.location.origin}${absoluteUrl}`;
                    }
                    window.open(absoluteUrl, '_blank');
                  }}
                >
                  <Download className="h-3 w-3 mr-1" />
                  PDF
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

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <ImageModal
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
          title={selectedImage.title}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
}
