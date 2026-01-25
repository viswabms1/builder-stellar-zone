import { ArrowRight, ArrowLeft, BookOpen, Disc3, Newspaper, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LibraryCollections() {
  const collections = [
    {
      icon: BookOpen,
      title: "Books",
      count: "2,50,000+",
      description: "Comprehensive collection of textbooks, reference books, and research monographs across all disciplines",
    },
    {
      icon: Newspaper,
      title: "Periodicals & Journals",
      count: "500+",
      description: "Leading national and international journals, magazines, and newspapers",
    },
    {
      icon: Disc3,
      title: "Audiovisual Media",
      count: "10,000+",
      description: "CDs, DVDs, and multimedia resources for enhanced learning",
    },
    {
      icon: Database,
      title: "Digital Resources",
      count: "24/7",
      description: "E-books, online journals, databases, and research platforms",
    },
  ];

  const subjectAreas = [
    { name: "Engineering & Technology", items: "Electronics, Mechanical, Civil, Aerospace, Computer Science" },
    { name: "Computer Applications", items: "Software Development, Web Technology, Database Systems" },
    { name: "Sciences", items: "Physics, Chemistry, Mathematics, Biology" },
    { name: "Management Studies", items: "Finance, Marketing, Business Strategy, Economics" },
    { name: "Law", items: "Constitutional Law, Corporate Law, Criminal Law" },
    { name: "Health Sciences", items: "Nursing, Physiotherapy, Medical Science" },
    { name: "Arts & Humanities", items: "Literature, History, Philosophy, Social Sciences" },
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
              Our Collections
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Over 5 lakh volumes of comprehensive resources
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

      {/* Collections Overview */}
      <section className="py-16 px-3 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Collection Overview</h2>
          <p className="text-lg text-foreground/70">
            A diverse and comprehensive collection serving all academic disciplines
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {collections.map((col, idx) => {
            const Icon = col.icon;
            return (
              <Card key={idx} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="p-3 rounded-lg bg-amber-500/10 w-fit mb-4">
                    <Icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{col.title}</h3>
                  <p className="text-2xl font-bold text-amber-600 mb-2">{col.count}</p>
                  <p className="text-sm text-foreground/70">{col.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Subject-wise Collections */}
        <Card className="border-none shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl">Collections by Subject Area</CardTitle>
            <CardDescription className="text-lg">
              Specialized resources for every discipline
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {subjectAreas.map((area, idx) => (
                <div key={idx} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <h4 className="font-semibold text-lg mb-2">{area.name}</h4>
                  <p className="text-sm text-foreground/70">{area.items}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Collection Development Policy */}
        <Card className="border-none shadow-lg bg-amber-50 dark:bg-slate-800">
          <CardHeader style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}>
            <CardTitle className="text-3xl md:text-4xl">Collection Development</CardTitle>
            <CardDescription className="text-lg">
              Our approach to building quality collections
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
            <p className="text-lg leading-relaxed text-foreground/80">
              The DSU Central Library follows a systematic and strategic approach to collection development. We focus on:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/70">
              <li>Acquiring quality resources that support curriculum and research</li>
              <li>Balancing print and digital formats based on user needs</li>
              <li>Regular weeding and updating of collections</li>
              <li>Investing in emerging subjects and interdisciplinary areas</li>
              <li>Maintaining currency of periodicals and online databases</li>
              <li>Building special collections aligned with university strengths</li>
              <li>Collaborating with faculty for specialized acquisitions</li>
            </ul>
          </CardContent>
        </Card>

        {/* Access Information */}
        <Card className="border-none shadow-lg mt-8">
          <CardHeader>
            <CardTitle>How to Access Collections</CardTitle>
            <CardDescription>
              Ways to browse and search our library collections
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold mb-1">Online Catalog (OPAC)</h4>
                <p className="text-foreground/70">
                  Search our entire collection through our digital library platform available 24/7
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Physical Library Visit</h4>
                <p className="text-foreground/70">
                  Browse and discover resources in person at our 560-capacity library facility
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Reference Services</h4>
                <p className="text-foreground/70">
                  Ask our librarians for recommendations and research assistance
                </p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 dark:bg-slate-700 rounded-lg">
              <Button asChild className="w-full">
                <a href="https://dsuunivopac.ltsinformatics.com/" target="_blank" rel="noopener noreferrer">
                  Search Library Collections <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Button asChild className="bg-amber-600 hover:bg-amber-700">
            <Link to="/library">
              Back to Library <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
