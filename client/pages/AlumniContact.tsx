import { ArrowLeft, Mail, Phone, MapPin, Globe, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AlumniContact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-red-500/10 via-pink-600/5 to-background dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 dark:bg-red-500/30 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/10 dark:bg-pink-600/30 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Contact Alumni Office
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Get in touch with us for queries and support
            </p>
          </div>
          <div className="flex justify-center">
            <Button asChild variant="outline">
              <Link to="/alumni">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Alumni
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-3 max-w-7xl mx-auto">
        {/* Main Contact Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Details */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Alumni Office</CardTitle>
              <CardDescription>Dayananda Sagar University</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  Address
                </h4>
                <p className="text-foreground/70">
                  Dayananda Sagar University
                  <br />
                  Bangalore, India
                  <br />
                  Campus Location
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <Mail className="h-5 w-5 text-red-600" />
                  Email
                </h4>
                <a
                  href="mailto:alumni@dsu.edu.in"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 break-all"
                >
                  alumni@dsu.edu.in
                </a>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <Phone className="h-5 w-5 text-red-600" />
                  Phone
                </h4>
                <a
                  href="tel:+919000000000"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700"
                >
                  +91-XXXXXXXXXX
                </a>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <Clock className="h-5 w-5 text-red-600" />
                  Office Hours
                </h4>
                <p className="text-foreground/70">
                  Monday - Friday
                  <br />
                  9:00 AM - 5:00 PM IST
                  <br />
                  Saturday & Sunday - Closed
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Online Presence */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Connect With Us</CardTitle>
              <CardDescription>Find us on different platforms</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <Globe className="h-5 w-5 text-red-600" />
                  Alumni Portal
                </h4>
                <p className="text-foreground/70 mb-3">
                  Access the dedicated alumni portal for registration,
                  networking, and exclusive resources.
                </p>
                <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                  <a
                    href="https://alumni.dsu.edu.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Alumni Portal <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold mb-3">Follow Us</h4>
                <p className="text-foreground/70 mb-3">
                  Stay updated through our social media channels for news,
                  events, and alumni stories.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <Button asChild variant="outline" size="sm">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Links */}
        <Card className="border-none shadow-lg mb-12 bg-red-50 dark:bg-slate-800">
          <CardHeader style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}>
            <CardTitle className="text-3xl">How Can We Help?</CardTitle>
            <CardDescription className="text-lg">
              Find answers and resources for common queries
            </CardDescription>
          </CardHeader>
          <CardContent style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Alumni Registration</h4>
                <p className="text-foreground/70 mb-3">
                  New to our alumni network? Register with the alumni portal to
                  access exclusive benefits and connect with fellow alumni.
                </p>
                <Button asChild variant="outline" size="sm">
                  <a
                    href="https://alumni.dsu.edu.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Events & Gatherings</h4>
                <p className="text-foreground/70 mb-3">
                  Looking for information about upcoming alumni events,
                  reunions, or networking opportunities?
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link to="/alumni/events">
                    View Events <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Newsletter</h4>
                <p className="text-foreground/70 mb-3">
                  Want to stay updated with alumni news, success stories, and
                  university announcements?
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link to="/alumni/newsletter">
                    Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Mentorship Programs</h4>
                <p className="text-foreground/70 mb-3">
                  Interested in mentoring current students or seeking guidance
                  from experienced alumni?
                </p>
                <Button asChild variant="outline" size="sm">
                  <a href="mailto:alumni@dsu.edu.in">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Giving Back</h4>
                <p className="text-foreground/70 mb-3">
                  Support the future of DSU through scholarships, awards, and
                  mentorship programs.
                </p>
                <Button asChild variant="outline" size="sm">
                  <a
                    href="https://alumni.dsu.edu.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contribute <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Career Services</h4>
                <p className="text-foreground/70 mb-3">
                  Seeking career opportunities, professional development, or
                  networking with alumni in your field?
                </p>
                <Button asChild variant="outline" size="sm">
                  <a href="mailto:alumni@dsu.edu.in">
                    Get Help <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form Info */}
        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Send us a Message</CardTitle>
            <CardDescription>
              Have a specific query? Send us a message through the alumni portal
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground/70">
              For detailed inquiries about events, mentorship programs, giving
              opportunities, or any other alumni-related matters, please use the
              contact form available on the alumni portal.
            </p>
            <p className="text-foreground/70">
              We typically respond to inquiries within 2-3 business days. For
              urgent matters, please call our office during business hours.
            </p>
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <a
                href="https://alumni.dsu.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to Alumni Portal <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Button asChild className="bg-red-600 hover:bg-red-700">
            <Link to="/alumni">
              Back to Alumni <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
