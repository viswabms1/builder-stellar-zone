import { ArrowRight, ArrowLeft, FileDown, BookOpen, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LibraryBrochure() {
  const brochures = [
    {
      title: "DSU Library Overview",
      description: "Comprehensive guide to library facilities and services",
      fileSize: "2.5 MB",
      type: "PDF",
    },
    {
      title: "New Student Orientation",
      description: "Essential information for new students about library usage",
      fileSize: "1.8 MB",
      type: "PDF",
    },
    {
      title: "Digital Library Guide",
      description: "Step-by-step guide to accessing online resources",
      fileSize: "1.2 MB",
      type: "PDF",
    },
    {
      title: "Research Support Services",
      description: "Information about research assistance and databases",
      fileSize: "2.1 MB",
      type: "PDF",
    },
    {
      title: "Citation Styles Guide",
      description: "Quick reference for APA, MLA, Chicago, and Harvard formats",
      fileSize: "1.5 MB",
      type: "PDF",
    },
    {
      title: "Library Services Catalog",
      description: "Complete list of all library services and facilities",
      fileSize: "3.0 MB",
      type: "PDF",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-teal-500/10 via-cyan-600/5 to-background dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 dark:bg-teal-500/30 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/10 dark:bg-cyan-600/30 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Library Brochures
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Download informational materials about our library services
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Available Brochures</h2>
          <p className="text-lg text-foreground/70">
            Download comprehensive guides and information materials
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {brochures.map((brochure, idx) => (
            <Card key={idx} className="border-none shadow-md hover:shadow-lg transition-shadow group">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-teal-500/10 group-hover:bg-teal-500/20 transition-colors">
                    <BookOpen className="h-6 w-6 text-teal-600" />
                  </div>
                  <div className="text-xs font-semibold px-2 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300">
                    {brochure.type}
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-teal-600 transition-colors">
                  {brochure.title}
                </h3>
                <p className="text-sm text-foreground/70 mb-3">{brochure.description}</p>
                <p className="text-xs text-foreground/60 mb-4">{brochure.fileSize}</p>
                <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                  <a href="#" download>
                    <FileDown className="mr-2 h-4 w-4" />
                    Download Brochure
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Information Section */}
        <Card className="border-none shadow-lg bg-teal-50 dark:bg-teal-950/30">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl">Library Information</CardTitle>
            <CardDescription className="text-lg">
              Key details about DSU Central Library
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">Library Highlights</h4>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Over 5 lakh volumes in collection</li>
                  <li>• Seating capacity for 560 students</li>
                  <li>• 24/7 digital library access</li>
                  <li>• Expert reference services</li>
                  <li>• Advanced research facilities</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Services Offered</h4>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Book borrowing and circulation</li>
                  <li>• Reference and research support</li>
                  <li>• Digital library access</li>
                  <li>• Document delivery services</li>
                  <li>• Library orientation programs</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="border-none shadow-lg mt-8">
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
            <CardDescription>
              Contact us for more information about our services
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-foreground/70">
              For digital copies or additional materials, please contact our library team:
            </p>
            <Button asChild className="w-full">
              <Link to="/library/contact">
                Contact Library <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Button asChild className="bg-teal-600 hover:bg-teal-700">
            <Link to="/library">
              Back to Library <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
