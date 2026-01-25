import { ArrowRight, ArrowLeft, Calendar, MapPin, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AlumniEvents() {
  const upcomingEvents = [
    {
      title: "Alumni Reunion 2026",
      date: "March 15-17, 2026",
      location: "DSU Campus, Bangalore",
      description: "Annual celebration bringing together alumni from all batches",
      category: "Reunion",
    },
    {
      title: "Career Development Workshop",
      date: "February 28, 2026",
      location: "Online",
      description: "Insights on career advancement and professional growth",
      category: "Workshop",
    },
    {
      title: "Alumni Networking Breakfast",
      date: "February 14, 2026",
      location: "DSU Campus",
      description: "Connect with fellow alumni over breakfast",
      category: "Networking",
    },
    {
      title: "Entrepreneurship Talk Series",
      date: "Monthly",
      location: "Online & On-campus",
      description: "Alumni entrepreneurs share their startup journeys",
      category: "Talk Series",
    },
  ];

  const pastEvents = [
    {
      title: "Leadership Excellence Forum",
      date: "December 2025",
      attendees: "250+",
    },
    {
      title: "Alumni Achievement Awards",
      date: "October 2025",
      attendees: "500+",
    },
    {
      title: "Summer Networking Retreat",
      date: "June 2025",
      attendees: "150+",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-amber-500/10 via-orange-600/5 to-background dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 dark:bg-amber-500/30 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/10 dark:bg-orange-600/30 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Alumni Events
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Connect, celebrate, and grow with the DSU alumni community
            </p>
          </div>
          <div className="flex justify-center">
            <Button asChild variant="outline">
              <Link to="/alumni">
                <ArrowRight className="mr-2 h-4 w-4" />
                Back to Alumni
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-3 max-w-7xl mx-auto">
        {/* Upcoming Events */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-foreground/70">
              Mark your calendar for these exciting alumni gatherings
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, idx) => (
              <Card key={idx} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <span className="inline-block mt-2 px-2 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100 text-xs rounded-full">
                        {event.category}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-foreground/70 text-sm">{event.description}</p>
                  <Button asChild className="w-full mt-4 bg-amber-600 hover:bg-amber-700">
                    <a href="https://alumni.dsu.edu.in/" target="_blank" rel="noopener noreferrer">
                      Register Now <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Event Types */}
        <Card className="border-none shadow-lg mb-12 bg-amber-50 dark:bg-slate-800">
          <CardHeader style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}>
            <CardTitle className="text-3xl">Types of Events We Host</CardTitle>
            <CardDescription className="text-lg">
              Diverse opportunities for alumni engagement and connection
            </CardDescription>
          </CardHeader>
          <CardContent style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-amber-600" />
                  Reunions & Celebrations
                </h4>
                <p className="text-foreground/70">
                  Annual alumni reunions, batch gatherings, and celebration dinners to reconnect with classmates and create lasting memories.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <Users className="h-5 w-5 text-amber-600" />
                  Networking Events
                </h4>
                <p className="text-foreground/70">
                  Professional networking breakfasts, industry meetups, and mentorship sessions to expand your professional circle.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <Clock className="h-5 w-5 text-amber-600" />
                  Educational Programs
                </h4>
                <p className="text-foreground/70">
                  Workshops, seminars, and training programs on career development, skill enhancement, and industry trends.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-amber-600" />
                  Regional Chapters
                </h4>
                <p className="text-foreground/70">
                  Local chapter meetups in different cities bringing together alumni in your region for social and professional events.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Past Events */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recent Highlights
            </h2>
            <p className="text-lg text-foreground/70">
              Celebrating alumni achievements and building community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, idx) => (
              <Card key={idx} className="border-none shadow-md">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3">{event.title}</h3>
                  <div className="space-y-2 text-foreground/70">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{event.attendees} attended</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="border-none shadow-lg bg-gradient-to-r from-amber-600/10 to-orange-600/10 dark:from-amber-950/30 dark:to-orange-950/30">
          <CardContent className="py-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated on Alumni Events</h3>
            <p className="text-lg text-foreground/70 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive updates about upcoming events and special gatherings
            </p>
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link to="/alumni/newsletter">
                View Newsletter <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Button asChild className="bg-amber-600 hover:bg-amber-700">
            <Link to="/alumni">
              Back to Alumni <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
