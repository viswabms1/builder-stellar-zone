import { useState, useEffect, useMemo } from "react";
import { useEvents } from "@/hooks/useEvents";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  ChevronRight,
  Search,
  Filter,
  X,
  ExternalLink,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Event } from "@/data/events";

const SCHOOLS = [
  { label: "All Schools", value: "" },
  { label: "School of Engineering", value: "Engineering" },
  { label: "School of Health Sciences", value: "Health Sciences" },
  { label: "School of Law", value: "Law" },
  { label: "School of Computer Applications", value: "Computer Applications" },
  { label: "School of Commerce & Management", value: "Commerce & Management" },
  { label: "School of Basic & Applied Sciences", value: "Basic & Applied Sciences" },
  { label: "School of Arts, Design & Humanities", value: "Arts, Design & Humanities" },
  { label: "School of Design & Digital Trans-Media", value: "Design & Digital Trans-Media" },
];

const CATEGORIES: Array<{ label: string; value: Event["category"] | "" }> = [
  { label: "All Events", value: "" },
  { label: "Workshop", value: "Workshop" },
  { label: "Seminar", value: "Seminar" },
  { label: "Conference", value: "Conference" },
  { label: "Hackathon", value: "Hackathon" },
  { label: "Sports", value: "Sports" },
  { label: "Cultural", value: "Cultural" },
  { label: "Academic", value: "Academic" },
];

const STATUS_FILTERS = [
  { label: "All Events", value: "" },
  { label: "Upcoming", value: "upcoming" },
  { label: "Ongoing", value: "ongoing" },
];

interface FilterState {
  school: string;
  category: string;
  status: string;
  search: string;
}

function EventCard({ event, onSelect }: { event: Event; onSelect: (e: Event) => void }) {
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Card className="group border border-brand-blue/20 bg-gradient-to-br from-brand-blue/5 to-brand-magenta/5 hover:border-brand-blue/40 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
      <button
        onClick={() => onSelect(event)}
        className="w-full text-left"
      >
        {event.image && (
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-brand-blue/10 to-brand-magenta/10">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute top-3 right-3 flex gap-2">
              <Badge className="bg-brand-blue/90 text-white">
                {event.category}
              </Badge>
            </div>
          </div>
        )}
        <CardHeader>
          <div className="space-y-2">
            <CardTitle className="text-lg group-hover:text-brand-blue transition-colors line-clamp-2">
              {event.title}
            </CardTitle>
            <div className="flex items-center text-sm text-foreground/70 gap-2">
              <Calendar className="w-4 h-4 flex-shrink-0" />
              <span>{formattedDate}</span>
              {event.time && (
                <>
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <span>{event.time}</span>
                </>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-3">
          <p className="text-sm text-foreground/80 line-clamp-2">
            {event.description}
          </p>

          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-brand-magenta flex-shrink-0 mt-0.5" />
              <span className="text-foreground/70">{event.location}</span>
            </div>

            {event.registered && event.capacity && (
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span className="text-foreground/70">
                  {event.registered} / {event.capacity} registered
                </span>
              </div>
            )}
          </div>

          {event.school && (
            <div className="pt-2">
              <Badge variant="outline" className="text-xs">
                {event.school}
              </Badge>
            </div>
          )}

          <div className="flex gap-2">
            {event.registrationRequired && event.registrationLink && (
              <Button
                size="sm"
                className="flex-1 gap-1 bg-brand-magenta text-white hover:bg-brand-magenta/90"
                asChild
              >
                <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                  Register
                  <ExternalLink className="w-3 h-3" />
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </button>
    </Card>
  );
}

function EventModal({ event, onClose }: { event: Event | null; onClose: () => void }) {
  if (!event) return null;

  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-foreground/10 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {event.image && (
          <div className="relative h-64 overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        )}

        <div className="p-6 space-y-6">
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-3xl font-display font-bold text-foreground">
                  {event.title}
                </h2>
                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <Badge className="bg-brand-blue/20 text-brand-blue">
                    {event.category}
                  </Badge>
                  {event.school_code && (
                    <Badge variant="outline">{event.school_code}</Badge>
                  )}
                  {event.department_code && (
                    <Badge variant="outline">{event.department_code}</Badge>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-wide mb-2">
                  Date & Time
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-brand-blue flex-shrink-0" />
                    <span className="text-foreground font-medium">
                      {formattedDate}
                    </span>
                  </div>
                  {event.time && (
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-brand-blue flex-shrink-0" />
                      <span className="text-foreground font-medium">
                        {event.time}
                        {event.end_time && ` - ${event.end_time}`}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-wide mb-2">
                  Location
                </h3>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-magenta flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{event.location}</span>
                </div>
              </div>

              {event.registered !== undefined && event.capacity && (
                <div>
                  <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-wide mb-2">
                    Registrations
                  </h3>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-brand-orange flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-sm text-foreground mb-1">
                        {event.registered} / {event.capacity} registered
                      </div>
                      <div className="w-full bg-foreground/10 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-brand-blue to-brand-magenta h-2 rounded-full transition-all"
                          style={{
                            width: `${(event.registered / event.capacity) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              {event.tags && event.tags.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-wide mb-2">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {event.registration_required && (
                <div>
                  <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-wide mb-2">
                    Registration
                  </h3>
                  <p className="text-sm text-foreground/80 mb-3">
                    Registration is required to attend this event.
                  </p>
                  {event.registrationLink && (
                    <Button
                      className="w-full gap-2 bg-brand-magenta text-white hover:bg-brand-magenta/90"
                      asChild
                    >
                      <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                        Register Now
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>

          {event.description && (
            <div>
              <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-wide mb-3">
                Description
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                {event.description}
              </p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}

export default function Events() {
  const { events: allEvents = [], loading, error } = useEvents();
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [filters, setFilters] = useState<FilterState>({
    school: "",
    category: "",
    status: "upcoming",
    search: "",
  });

  const filteredEvents = useMemo(() => {
    return allEvents.filter((event) => {
      const matchesSchool = !filters.school || event.school_code === filters.school;
      const matchesCategory =
        !filters.category || event.category === (filters.category as Event["category"]);
      const matchesStatus =
        !filters.status || event.status === filters.status;
      const matchesSearch =
        !filters.search ||
        event.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        event.description.toLowerCase().includes(filters.search.toLowerCase());

      return matchesSchool && matchesCategory && matchesStatus && matchesSearch;
    }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [allEvents, filters]);

  const hasActiveFilters = Object.values(filters).some(
    (v) => v !== ""
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative px-3 py-12 md:py-20 bg-gradient-to-br from-brand-blue/10 via-brand-magenta/10 to-brand-orange/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="headline-1 mb-4">
              University Events
            </h1>
            <p className="text-lg text-foreground/80 font-body">
              Discover and register for workshops, seminars, conferences, and
              cultural events happening across Dayananda Sagar University.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border px-3 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/50" />
              <input
                type="text"
                placeholder="Search events by title or description..."
                value={filters.search}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, search: e.target.value }))
                }
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-brand-blue/50"
              />
            </div>

            {/* Filter Controls */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div>
                <label className="text-xs font-semibold text-foreground/70 mb-1 block">
                  School
                </label>
                <Select
                  value={filters.school}
                  onValueChange={(value) =>
                    setFilters((prev) => ({ ...prev, school: value }))
                  }
                >
                  <SelectTrigger className="h-10">
                    <SelectValue placeholder="Select school" />
                  </SelectTrigger>
                  <SelectContent>
                    {SCHOOLS.map((school) => (
                      <SelectItem key={school.value} value={school.value}>
                        {school.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-xs font-semibold text-foreground/70 mb-1 block">
                  Category
                </label>
                <Select
                  value={filters.category}
                  onValueChange={(value) =>
                    setFilters((prev) => ({ ...prev, category: value }))
                  }
                >
                  <SelectTrigger className="h-10">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((cat) => (
                      <SelectItem key={cat.value || "all"} value={cat.value || ""}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-xs font-semibold text-foreground/70 mb-1 block">
                  Status
                </label>
                <Select
                  value={filters.status}
                  onValueChange={(value) =>
                    setFilters((prev) => ({ ...prev, status: value }))
                  }
                >
                  <SelectTrigger className="h-10">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    {STATUS_FILTERS.map((status) => (
                      <SelectItem key={status.value || "all"} value={status.value || ""}>
                        {status.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {hasActiveFilters && (
                <div className="flex items-end">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      setFilters({
                        school: "",
                        category: "",
                        status: "upcoming",
                        search: "",
                      })
                    }
                    className="w-full"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="px-3 py-12">
        <div className="max-w-7xl mx-auto">
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600">
              Error loading events: {error}
            </div>
          )}

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-96 bg-foreground/10 rounded-lg animate-pulse" />
              ))}
            </div>
          ) : filteredEvents.length === 0 ? (
            <div className="text-center py-20">
              <div className="mb-12">
                <Filter className="w-16 h-16 text-foreground/30 mx-auto mb-6" />
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                  No Events Available
                </h2>
                <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
                  {hasActiveFilters
                    ? "Try adjusting your filters to find more events."
                    : "Events will be posted here as they are scheduled across the university. Check back soon!"}
                </p>
              </div>

              {!hasActiveFilters && (
                <div className="bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5 border border-border rounded-xl p-8 mb-12">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                    About University Events
                  </h3>
                  <div className="text-left max-w-2xl mx-auto space-y-3 text-foreground/80">
                    <p>
                      🎓 <span className="font-semibold">Workshops & Seminars</span> - Expert-led sessions on cutting-edge topics in AI, technology, healthcare, law, and business
                    </p>
                    <p>
                      🏆 <span className="font-semibold">Conferences & Hackathons</span> - Major events bringing together students, faculty, and industry leaders for networking and innovation
                    </p>
                    <p>
                      🎭 <span className="font-semibold">Cultural & Sports Events</span> - Celebrating our diverse campus community through various activities and competitions
                    </p>
                    <p>
                      📚 <span className="font-semibold">Academic Events</span> - Research presentations, guest lectures, and knowledge-sharing sessions across all schools
                    </p>
                  </div>
                </div>
              )}

              {hasActiveFilters && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() =>
                    setFilters({
                      school: "",
                      category: "",
                      status: "upcoming",
                      search: "",
                    })
                  }
                  className="mt-8"
                >
                  <X className="w-4 h-4 mr-2" />
                  Clear Filters
                </Button>
              )}
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                  Upcoming Events
                </h2>
                <p className="text-sm text-foreground/70">
                  Showing <span className="font-semibold">{filteredEvents.length}</span>{" "}
                  event{filteredEvents.length !== 1 ? "s" : ""}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    onSelect={setSelectedEvent}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Info Section */}
      {filteredEvents.length === 0 && !error && !loading && (
        <section className="px-3 py-16 bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                  Why Attend DSU Events?
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand-blue/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-brand-blue font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Network with Industry Experts</h4>
                      <p className="text-foreground/70">Connect with professionals and leaders in your field</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand-magenta/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-brand-magenta font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Learn New Skills</h4>
                      <p className="text-foreground/70">Stay updated with latest trends and technologies</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand-orange/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-brand-orange font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Build Your Resume</h4>
                      <p className="text-foreground/70">Add valuable experience and certifications</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <Card className="border-brand-blue/20 bg-gradient-to-br from-brand-blue/10 to-brand-blue/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-brand-blue" />
                      How to Register
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <p>
                      <span className="font-semibold">1. Browse Events</span> - Use filters to find events of interest
                    </p>
                    <p>
                      <span className="font-semibold">2. View Details</span> - Click on any event to see full information
                    </p>
                    <p>
                      <span className="font-semibold">3. Register</span> - Click the "Register" button to sign up
                    </p>
                    <p>
                      <span className="font-semibold">4. Attend</span> - Mark your calendar and don't miss it!
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-brand-magenta/20 bg-gradient-to-br from-brand-magenta/10 to-brand-magenta/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-brand-magenta" />
                      Get Notified
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-foreground/80">
                    <p className="mb-4">
                      Events will be populated from our Directus CMS system. New events will be posted regularly across all schools and departments.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      asChild
                    >
                      <a href="/campus-life">
                        Explore Campus Life
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Event Detail Modal */}
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
}
