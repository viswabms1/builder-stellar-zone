import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  AlertCircle,
  Calendar,
  Clock,
  MapPin,
  Users,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEvents } from "@/hooks/useEvents";
import { Card, CardContent } from "@/components/ui/card";

export default function EventDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { events: allEvents, loading } = useEvents({ limit: 1000 });

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

  const event = allEvents.find((e) => e.id === id);

  if (!event) {
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
              Event Not Found
            </h1>
            <p className="text-foreground/60 mb-6">
              The event you're looking for doesn't exist.
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

  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = event.time
    ? event.time
    : eventDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });

  const getStatusColor = (status?: string) => {
    switch (status?.toLowerCase()) {
      case "upcoming":
        return "bg-green-100 text-green-800";
      case "ongoing":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-gray-100 text-gray-800";
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
          {event.events_image && (
            <div className="relative w-full h-96 bg-gradient-to-br from-brand-blue/10 to-brand-magenta/10 overflow-hidden">
              <img
                src={`https://dsu-website-headless-cms.directus.app/assets/${
                  typeof event.events_image === "string"
                    ? event.events_image
                    : event.events_image.id
                }`}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <CardContent className="p-8 space-y-6">
            {/* Title and metadata */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-foreground line-clamp-3">
                {event.title}
              </h1>

              {/* Status and category badges */}
              <div className="flex flex-wrap items-center gap-3">
                {event.status && (
                  <Badge className={`${getStatusColor(event.status)}`}>
                    {event.status.toUpperCase()}
                  </Badge>
                )}
                {event.category && (
                  <Badge variant="outline">{event.category}</Badge>
                )}
              </div>
            </div>

            {/* Key event information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-brand-blue/5 p-4 rounded-lg border border-brand-blue/20">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-brand-blue flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-foreground/60">Date</p>
                  <p className="font-semibold text-foreground">{formattedDate}</p>
                </div>
              </div>

              {event.time && (
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-foreground/60">Time</p>
                    <p className="font-semibold text-foreground">{formattedTime}</p>
                  </div>
                </div>
              )}

              {event.location && (
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-magenta flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-foreground/60">Location</p>
                    <p className="font-semibold text-foreground">
                      {event.location}
                    </p>
                  </div>
                </div>
              )}

              {event.capacity && (
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-foreground/60">Capacity</p>
                    <p className="font-semibold text-foreground">
                      {event.registered || 0} / {event.capacity} registered
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="border-t border-border/20" />

            {/* Full description */}
            <div className="prose prose-sm max-w-none text-foreground/80">
              <p className="text-lg leading-relaxed whitespace-pre-wrap break-words">
                {event.description}
              </p>
            </div>

            {/* Registration button */}
            {event.registrationRequired && event.registration_link && (
              <div className="bg-brand-magenta/5 border border-brand-magenta/20 rounded-lg p-4">
                <p className="text-sm text-foreground/60 mb-3">
                  Registration required for this event
                </p>
                <Button
                  asChild
                  className="gap-2 bg-brand-magenta text-white hover:bg-brand-magenta/90"
                >
                  <a
                    href={event.registration_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register Now
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            )}

            {/* Additional info */}
            {(event.department_code || event.school_code) && (
              <div className="bg-foreground/5 rounded-lg p-4 grid grid-cols-2 gap-4 text-sm">
                {event.department_code && (
                  <div>
                    <span className="text-foreground/60">Department</span>
                    <p className="font-semibold text-foreground">
                      {event.department_code.toUpperCase()}
                    </p>
                  </div>
                )}
                {event.school_code && (
                  <div>
                    <span className="text-foreground/60">School</span>
                    <p className="font-semibold text-foreground">
                      {event.school_code}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Tags */}
            {event.tags && event.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/20">
                {event.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
