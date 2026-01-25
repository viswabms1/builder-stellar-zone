import { ArrowRight, ArrowLeft, Mail, Phone, MapPin, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LibraryContact() {
  const contacts = [
    {
      title: "General Inquiries",
      email: "library@dsu.edu.in",
      phone: "+91-080-XXXX-XXXX",
      description: "For general questions and information",
    },
    {
      title: "E-Resources & Digital Library",
      email: "e-resources@dsu.edu.in",
      phone: "+91-080-XXXX-XXXX",
      description: "Access issues and digital resource queries",
    },
    {
      title: "Reference & Research Support",
      email: "reference@dsu.edu.in",
      phone: "+91-080-XXXX-XXXX",
      description: "Research guidance and reference services",
    },
    {
      title: "Corporate Membership",
      email: "corporate.library@dsu.edu.in",
      phone: "+91-080-XXXX-XXXX",
      description: "Institutional and corporate membership inquiries",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-emerald-500/10 via-teal-600/5 to-background dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 dark:bg-emerald-500/30 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-teal-600/10 dark:bg-teal-600/30 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Contact & Support
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Get in touch with our library team for assistance and inquiries
            </p>
          </div>
          <div className="flex justify-center">
            <Button asChild variant="outline">
              <Link to="/library">
                <ArrowRight className="mr-2 h-4 w-4" />
                Back to Library
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-3 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Reach Out To Us</h2>
          <p className="text-lg text-foreground/70">
            Multiple ways to contact our library for different needs
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contacts.map((contact, idx) => (
            <Card key={idx} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{contact.title}</CardTitle>
                <CardDescription>{contact.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-emerald-500/10 transition-colors"
                >
                  <Mail className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Email</p>
                    <p className="text-sm text-emerald-600">{contact.email}</p>
                  </div>
                </a>
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-emerald-500/10 transition-colors"
                >
                  <Phone className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Phone</p>
                    <p className="text-sm text-emerald-600">{contact.phone}</p>
                  </div>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Library Location */}
        <Card className="border-none shadow-lg bg-emerald-50 dark:bg-emerald-950/30 mb-8">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl flex items-center gap-2">
              <MapPin className="h-8 w-8 text-emerald-600" />
              DSU Central Library Location
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">Main Campus</h4>
                <p className="text-foreground/70 mb-3">
                  Devarakaggalahalli<br />
                  Harohalli, Bengaluru South<br />
                  Karnataka 562112<br />
                  India
                </p>
                <a
                  href="https://maps.google.com/maps?q=Dayananda+Sagar+University+Library"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="outline" size="sm">
                    View on Maps <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Hours of Operation</h4>
                <div className="flex items-start gap-2 mb-3">
                  <Clock className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground/70">
                      Monday - Saturday<br />
                      8:00 AM - 6:00 PM<br />
                      <br />
                      <em>Closed on Sundays and public holidays</em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Services Available */}
        <Card className="border-none shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl flex items-center gap-2">
              <MessageSquare className="h-8 w-8 text-emerald-600" />
              Services & Support
            </CardTitle>
            <CardDescription className="text-lg">
              Different support services available to our users
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Reference Services</h4>
                <p className="text-sm text-foreground/70">
                  Research assistance and guidance for academic work
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Orientation Programs</h4>
                <p className="text-sm text-foreground/70">
                  Library tours and training for new students
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Technology Support</h4>
                <p className="text-sm text-foreground/70">
                  Assistance with digital library and online resources
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Special Requests</h4>
                <p className="text-sm text-foreground/70">
                  Document delivery and custom research support
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-semibold">How do I register for library membership?</h4>
              <p className="text-foreground/70">
                All DSU students and staff are eligible. Visit the library with your ID card to register and receive your library card.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Can I access the digital library from home?</h4>
              <p className="text-foreground/70">
                Yes, all registered users can access digital resources 24/7 using their DSU credentials. Contact e-resources@dsu.edu.in for access issues.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">What is the maximum borrowing limit?</h4>
              <p className="text-foreground/70">
                It varies by user category. Undergraduates can borrow up to 5 books for 14 days. Faculty can borrow up to 15 books for 30 days.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">How can I renew my books?</h4>
              <p className="text-foreground/70">
                Visit the library, call the circulation desk, or use the online renewal system if no other user has requested the book.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Action */}
        <Card className="border-none shadow-lg mt-8 bg-gradient-to-r from-emerald-500/10 to-teal-500/10">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3">Need Immediate Assistance?</h3>
              <p className="text-foreground/70 mb-6">
                Visit us in person or send an email for quick responses to your queries
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                  <a href="mailto:library@dsu.edu.in">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/library">
                    Back to Library <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
