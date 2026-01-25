import { ArrowRight, ArrowLeft, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LibraryTeam() {
  const teamMembers = [
    {
      name: "Chief Librarian",
      role: "Head of Central Library",
      description: "Oversees all library operations and strategic initiatives",
      email: "library@dsu.edu.in",
    },
    {
      name: "Digital Resources Manager",
      role: "E-Resources & Systems",
      description: "Manages digital library platform and online resources",
      email: "e-resources@dsu.edu.in",
    },
    {
      name: "Technical Services Librarian",
      role: "Cataloging & Acquisition",
      description: "Handles collection development and technical processing",
      email: "library@dsu.edu.in",
    },
    {
      name: "Reference Services",
      role: "Research Support",
      description: "Provides research guidance and information services",
      email: "library@dsu.edu.in",
    },
    {
      name: "Library Assistant",
      role: "User Services",
      description: "Assists with circulation, shelving, and user support",
      email: "library@dsu.edu.in",
    },
    {
      name: "Information Technology",
      role: "Systems & Infrastructure",
      description: "Maintains library systems and IT infrastructure",
      email: "library@dsu.edu.in",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-green-500/10 via-teal-600/5 to-background dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 dark:bg-green-500/30 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-teal-600/10 dark:bg-teal-600/30 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Our Team
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Meet our skilled and dedicated library professionals
            </p>
          </div>
          <div className="flex justify-center">
            <Button asChild variant="outline">
              <Link to="/library">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Library
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-3 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Librarians</h2>
          <p className="text-lg text-foreground/70">
            A team of skilled, professional, and compassionate library staff members dedicated to helping our community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, idx) => (
            <Card key={idx} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-base">{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70">{member.description}</p>
                <div className="space-y-2 border-t pt-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">{member.email}</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Philosophy */}
        <Card className="border-none shadow-lg mt-12">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl">Our Commitment</CardTitle>
            <CardDescription className="text-lg">
              What we stand for
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg leading-relaxed text-foreground/80">
              Our library team is committed to providing exceptional service to all members of the DSU community. We believe that every user deserves personalized attention and support in their academic journey.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">Professional Expertise</h4>
                <p className="text-foreground/70">
                  Our staff members are trained professionals with expertise in information science, collection management, and digital resources
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">User-Centric Service</h4>
                <p className="text-foreground/70">
                  We prioritize user satisfaction and continuously work to improve our services based on feedback and evolving needs
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Innovation</h4>
                <p className="text-foreground/70">
                  We embrace new technologies and methodologies to enhance library services and user experience
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Accessibility</h4>
                <p className="text-foreground/70">
                  We ensure that all resources and services are accessible to every member of our community
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="border-none shadow-lg mt-8 bg-blue-50 dark:bg-slate-800">
          <CardHeader style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>
              Contact our library team for support and inquiries
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:library@dsu.edu.in" className="text-blue-600 hover:text-blue-700">
                  library@dsu.edu.in
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-foreground/70">+91-080-XXXX-XXXX</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link to="/library">
              Back to Library <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
