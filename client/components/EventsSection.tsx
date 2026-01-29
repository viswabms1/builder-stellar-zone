import { useEvents } from "@/hooks/useEvents";
import { useContentContext } from "@/hooks/useContentContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ImageModal } from "@/components/ImageModal";
import { Calendar, MapPin, Users, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { ReadMore } from "@/components/ReadMore";

interface EventsSectionProps {
  school?: string; // Optional override
  department?: string; // Optional override
  limit?: number;
  variant?: "grid" | "list" | "upcoming" | "carousel";
  title?: string;
  description?: string;
  showViewAll?: boolean;
  compact?: boolean; // Removes outer section wrapper for grid layouts
}

/**
 * Reusable Events Section Component
 * Displays events from centralized data filtered by school/department
 *
 * @example
 * // Display all Engineering upcoming events
 * <EventsSection school="Engineering" title="Engineering Events" />
 *
 * @example
 * // Display CSE department events
 * <EventsSection school="Engineering" department="CSE" limit={3} variant="list" />
 *
 * @example
 * // Display featured upcoming events
 * <EventsSection limit={5} variant="upcoming" />
 */
export function EventsSection({
  school: schoolProp,
  department: departmentProp,
  limit = 6,
  variant = "grid",
  title = "Upcoming Events",
  description,
  showViewAll = false,
  compact = false,
}: EventsSectionProps) {
  // Auto-detect school and department from current page context
  const { school: contextSchool, department: contextDepartment } = useContentContext();
  const school = schoolProp || contextSchool;
  const department = departmentProp || contextDepartment;

  const { events, loading, error } = useEvents({
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
        Error loading events: {error}
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="text-center py-12 text-foreground/50">
        <p>No upcoming events at this time.</p>
      </div>
    );
  }

  // Carousel variant - rotating featured event
  if (variant === "carousel") {
    return <EventsCarousel events={events} title={title} description={description} compact={compact} />;
  }

  // Upcoming variant - featured events with more details
  if (variant === "upcoming") {
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
        <div className="space-y-4">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <CardTitle>{event.title}</CardTitle>
                    <Badge className="mt-2">{event.category}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <ReadMore
                  contentId={event.id}
                  type="event"
                  maxLines={2}
                  className="text-sm text-foreground/75"
                >
                  {event.description}
                </ReadMore>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(event.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  {event.time && (
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                  )}
                  {event.location && (
                    <div className="flex items-center gap-2 text-foreground/70">
                      <MapPin className="h-4 w-4" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  )}
                  {event.capacity && event.registered !== undefined && (
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Users className="h-4 w-4" />
                      <span>{event.registered}/{event.capacity}</span>
                    </div>
                  )}
                </div>
                {event.registration_required && (
                  <Button
                    size="sm"
                    asChild
                    className={event.registered === event.capacity ? "opacity-50 cursor-not-allowed" : ""}
                  >
                    {event.registration_link ? (
                      <a href={event.registration_link}>
                        {event.registered === event.capacity ? "Full" : "Register Now"}
                      </a>
                    ) : (
                      <span>
                        {event.registered === event.capacity ? "Full" : "Register Now"}
                      </span>
                    )}
                  </Button>
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
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition flex flex-col">
              <CardHeader className="pb-3">
                <CardTitle className="text-base line-clamp-2">{event.title}</CardTitle>
                <Badge variant="outline" className="w-fit text-xs">
                  {event.category}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-2 flex-1 flex flex-col">
                <ReadMore
                  contentId={event.id}
                  type="event"
                  maxLines={2}
                  className="text-xs text-foreground/70"
                >
                  {event.description}
                </ReadMore>
                <div className="space-y-1 text-xs text-foreground/60 mt-auto">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  {event.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3 w-3" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  )}
                </div>
                {event.registration_required && (
                  <Button size="sm" variant="outline" className="mt-2 w-full">
                    Register
                  </Button>
                )}
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
        {events.map((event) => (
          <div
            key={event.id}
            className="p-4 border rounded-lg hover:bg-foreground/5 transition"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-semibold text-foreground">{event.title}</h3>
              <Badge variant="outline" className="flex-shrink-0">
                {event.category}
              </Badge>
            </div>
            <ReadMore
              contentId={event.id}
              type="event"
              maxLines={2}
              className="text-sm text-foreground/70 mb-3"
            >
              {event.description}
            </ReadMore>
            <div className="grid grid-cols-2 gap-2 text-sm text-foreground/70 mb-3">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(event.date).toLocaleDateString()}</span>
              </div>
              {event.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span className="truncate">{event.location}</span>
                </div>
              )}
            </div>
            {event.registration_required && (
              <Button size="sm" variant="outline">
                Register Now
              </Button>
            )}
          </div>
        ))}
      </div>
      {showViewAll && (
        <button className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
          View All Events
          <ArrowRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

interface EventsCarouselProps {
  events: any[];
  title?: string;
  description?: string;
  compact?: boolean;
}

function EventsCarousel({ events, title, description, compact = false }: EventsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; title?: string } | null>(null);

  useEffect(() => {
    if (events.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [events.length]);

  if (events.length === 0) {
    const emptyContent = (
      <div className="flex items-center gap-2 px-4 py-3 rounded-xl border-l-4 border-brand-magenta bg-brand-magenta/10">
        <h3 className="headline-4 font-display text-brand-magenta">{title}</h3>
      </div>
    );

    if (compact) {
      return <div className="space-y-4">{emptyContent}</div>;
    }
    return (
      <section className="px-3 py-8">
        <div className="mx-auto max-w-7xl space-y-4">
          {emptyContent}
        </div>
      </section>
    );
  }

  const currentEvent = events[currentIndex];
  const carouselBody = (
    <>
      <div className="flex items-center gap-2 px-4 py-3 rounded-xl border-l-4 border-brand-magenta bg-brand-magenta/10">
        <h3 className="headline-4 font-display text-brand-magenta">{title}</h3>
        <Badge className="ml-auto text-xs">{currentIndex + 1} / {events.length}</Badge>
      </div>

      <Card className="group overflow-hidden rounded-2xl border-2 border-border/30 bg-card/40 backdrop-blur-sm">
        {currentEvent.events_image && (
          <div
            className="relative h-48 overflow-hidden cursor-pointer"
            onClick={() => setSelectedImage({
              src: `https://dsu-website-headless-cms.directus.app/assets/${typeof currentEvent.events_image === 'string' ? currentEvent.events_image : currentEvent.events_image.id}`,
              alt: currentEvent.title,
              title: currentEvent.title
            })}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setSelectedImage({
                  src: `https://dsu-website-headless-cms.directus.app/assets/${typeof currentEvent.events_image === 'string' ? currentEvent.events_image : currentEvent.events_image.id}`,
                  alt: currentEvent.title,
                  title: currentEvent.title
                });
              }
            }}
            aria-label={`Click to view ${currentEvent.title} image in larger size`}
          >
            <img
              src={`https://dsu-website-headless-cms.directus.app/assets/${typeof currentEvent.events_image === 'string' ? currentEvent.events_image : currentEvent.events_image.id}`}
              alt={currentEvent.title}
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
              <h4 className="font-display font-semibold text-sm text-foreground mb-2 line-clamp-2">{currentEvent.title}</h4>
              <p className="text-xs text-foreground/70 line-clamp-2">{currentEvent.description}</p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-border/20">
            <span className="text-xs font-semibold text-foreground/60">{new Date(currentEvent.date).toLocaleDateString()}</span>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between gap-2">
        <div className="flex gap-1">
          {events.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === currentIndex ? "bg-brand-magenta w-6" : "bg-border/40 w-1.5 hover:bg-border/60"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-1">
          <Button
            variant="outline"
            size="sm"
            className="h-7 px-2 text-xs"
            onClick={() => setCurrentIndex((prev) => (prev - 1 + events.length) % events.length)}
          >
            ←
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-7 px-2 text-xs"
            onClick={() => setCurrentIndex((prev) => (prev + 1) % events.length)}
          >
            →
          </Button>
        </div>
      </div>
    </>
  );

  if (compact) {
    return (
      <div className="space-y-4">
        {carouselBody}
        {selectedImage && (
          <ImageModal
            imageSrc={selectedImage.src}
            imageAlt={selectedImage.alt}
            title={selectedImage.title}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </div>
    );
  }

  return (
    <section className="px-3 py-8">
      <div className="mx-auto max-w-7xl space-y-4">
        {carouselBody}
      </div>
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
