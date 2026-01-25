import { ArrowRight, ArrowLeft, MapPin, Phone, Mail, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LibraryConstituentLibraries() {
  const libraries = [
    {
      name: "Central Library",
      location: "Main Campus, Devarakaggalahalli",
      description:
        "Main library facility with comprehensive collection, digital resources, and study facilities",
      features: [
        "560-seat reading room",
        "Digital library access",
        "Computer labs",
        "Group study areas",
      ],
      phone: "+91-080-XXXX-XXXX",
      email: "library@dsu.edu.in",
    },
    {
      name: "Engineering Library",
      location: "School of Engineering Building",
      description:
        "Specialized library supporting engineering and technology programs",
      features: [
        "Technical journals and books",
        "Engineering databases",
        "Project resources",
        "Research support",
      ],
      phone: "+91-080-XXXX-XXXX",
      email: "engineering.library@dsu.edu.in",
    },
    {
      name: "Science & Technology Library",
      location: "School of Basic & Applied Sciences Building",
      description:
        "Dedicated facility for science and research resources",
      features: [
        "Research journals",
        "Laboratory manuals",
        "Digital databases",
        "Study facilities",
      ],
      phone: "+91-080-XXXX-XXXX",
      email: "science.library@dsu.edu.in",
    },
    {
      name: "Commerce & Management Library",
      location: "School of Management Building",
      description:
        "Resources for management, commerce, and business studies",
      features: [
        "Business databases",
        "Management journals",
        "Case studies",
        "Financial resources",
      ],
      phone: "+91-080-XXXX-XXXX",
      email: "management.library@dsu.edu.in",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-lime-500/10 via-green-600/5 to-background dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-lime-500/10 dark:bg-lime-500/30 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-green-600/10 dark:bg-green-600/30 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Constituent Libraries
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Specialized library facilities across campus
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Library Network</h2>
          <p className="text-lg text-foreground/70">
            Specialized library facilities serving different schools and departments
          </p>
        </div>

        <div className="space-y-6">
          {libraries.map((lib, idx) => (
            <Card key={idx} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">{lib.name}</CardTitle>
                <CardDescription className="text-base flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {lib.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80">{lib.description}</p>
                
                <div>
                  <h4 className="font-semibold mb-2">Highlights</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {lib.features.map((feature, i) => (
                      <li key={i} className="text-sm text-foreground/70 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-green-600" />
                    <a href={`tel:${lib.phone}`} className="text-green-600 hover:text-green-700">
                      {lib.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-green-600" />
                    <a href={`mailto:${lib.email}`} className="text-green-600 hover:text-green-700">
                      {lib.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Network Information */}
        <Card className="border-none shadow-lg mt-12 bg-green-50 dark:bg-slate-800">
          <CardHeader style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}>
            <CardTitle className="text-3xl md:text-4xl flex items-center gap-2">
              <Users className="h-8 w-8 text-green-600" />
              Unified Library System
            </CardTitle>
            <CardDescription className="text-lg">
              Connected network of specialized libraries across DSU
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
            <p className="text-foreground/80">
              The DSU library system comprises multiple constituent libraries, each specializing in resources and services for their respective schools and departments. All libraries operate under a unified system, allowing students and faculty seamless access to resources across the entire network.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Integrated Catalog</h4>
                <p className="text-sm text-foreground/70">
                  Search and access resources from all libraries through a single online catalog
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Resource Sharing</h4>
                <p className="text-sm text-foreground/70">
                  Borrow materials from any constituent library with your library card
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Coordinated Services</h4>
                <p className="text-sm text-foreground/70">
                  Access consistent services and support across all library locations
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hours of Operation */}
        <Card className="border-none shadow-lg mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">Hours of Operation</CardTitle>
            <CardDescription>
              All constituent libraries operate during the same hours
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Regular Hours</h4>
                <p className="text-foreground/70">
                  Monday - Saturday<br />
                  8:00 AM - 6:00 PM
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Digital Access</h4>
                <p className="text-foreground/70">
                  24/7 Online Library<br />
                  E-resources anytime, anywhere
                </p>
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
