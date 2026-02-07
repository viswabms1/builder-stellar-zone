import {
  ArrowRight,
  ArrowLeft,
  Globe,
  Database,
  BookOpen,
  Lock,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LibraryEResources() {
  const resources = [
    {
      title: "Digital Library OPAC",
      description: "Search and access our complete digital library collection",
      url: "https://dsuunivopac.ltsinformatics.com/",
      icon: Globe,
      category: "Access Platform",
    },
    {
      title: "E-Books Database",
      description: "Access thousands of e-books across all subject areas",
      url: "https://dsuunivopac.ltsinformatics.com/",
      icon: BookOpen,
      category: "Collections",
    },
    {
      title: "Online Journals",
      description: "Research journals and periodicals from leading publishers",
      url: "https://dsuunivopac.ltsinformatics.com/",
      icon: Database,
      category: "Periodicals",
    },
    {
      title: "Research Databases",
      description: "Subject-specific databases for academic research",
      url: "https://dsuunivopac.ltsinformatics.com/",
      icon: Database,
      category: "Research Tools",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-brand-blue/5 via-brand-magenta/5 to-background dark:from-slate-900 dark:via-black dark:to-black overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue/20 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-brand-magenta/20 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-4 text-foreground">
              <span className="bg-brand-gradient bg-clip-text text-transparent">E-Resources</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Access our comprehensive digital library and online resources
            </p>
          </div>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button asChild className="bg-gradient-to-r from-[#0088FF] via-[#FFD700] to-[#FF6B00] hover:via-[#FFC500] text-foreground animate-gradient bg-[length:200%_auto]">
              <a
                href="https://dsuunivopac.ltsinformatics.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="mr-2 h-4 w-4" />
                Access Digital Library
              </a>
            </Button>
            <Button asChild variant="outline" className="border-brand-blue/30 hover:bg-brand-blue/10">
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">
            <span className="bg-brand-gradient bg-clip-text text-transparent">Digital Resources Available</span>
          </h2>
          <p className="text-lg text-foreground/70">
            A comprehensive collection of e-resources accessible 24/7
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {resources.map((resource, idx) => {
            const Icon = resource.icon;
            return (
              <Card
                key={idx}
                className="border-none shadow-md hover:shadow-lg hover:shadow-brand-blue/20 transition-all bg-gradient-to-br from-card/80 via-card/60 to-card/40"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl">
                        {resource.title}
                      </CardTitle>
                      <CardDescription>{resource.category}</CardDescription>
                    </div>
                    <div className="p-2 rounded-lg bg-brand-blue/10">
                      <Icon className="h-5 w-5 text-brand-blue" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/70">{resource.description}</p>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-start text-brand-blue hover:text-brand-magenta"
                  >
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Access Resource <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Access Information */}
        <Card className="border-none shadow-lg mb-8 bg-gradient-to-br from-card/80 via-card/60 to-card/40">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display flex items-center gap-2">
              <Lock className="h-8 w-8 text-brand-blue" />
              <span className="bg-brand-gradient bg-clip-text text-transparent">How to Access E-Resources</span>
            </CardTitle>
            <CardDescription className="text-lg">
              Steps to access digital library from on-campus and off-campus
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Zap className="h-5 w-5 text-brand-blue" />
                On-Campus Access
              </h4>
              <p className="text-foreground/70">
                Students and faculty on campus can directly access the digital
                library platform using their DSU credentials without any
                additional authentication.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Zap className="h-5 w-5 text-brand-magenta" />
                Off-Campus Access
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-foreground/70">
                <li>Log in with your DSU username and password</li>
                <li>Use the institutional proxy to access resources</li>
                <li>Access through EZproxy authentication if required</li>
                <li>Contact library staff for remote access assistance</li>
              </ol>
            </div>
          </CardContent>
        </Card>

        {/* Collections Overview */}
        <Card className="border-none shadow-lg bg-gradient-to-br from-card/80 via-card/60 to-card/40">
          <CardHeader className="bg-gradient-to-r from-brand-blue/10 via-brand-magenta/10 to-brand-blue/10">
            <CardTitle className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display">
              <span className="bg-brand-gradient bg-clip-text text-transparent">Our Digital Collections</span>
            </CardTitle>
            <CardDescription className="text-lg text-foreground/80">
              Comprehensive resources across all academic disciplines
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">
                  Subject Areas Covered
                </h4>
                <ul className="list-disc list-inside space-y-1 text-foreground/70">
                  <li>Engineering & Technology</li>
                  <li>Computer Science & Applications</li>
                  <li>Sciences & Mathematics</li>
                  <li>Commerce & Management</li>
                  <li>Law & Social Sciences</li>
                  <li>Health Sciences</li>
                  <li>Arts, Design & Humanities</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Resource Types</h4>
                <ul className="list-disc list-inside space-y-1 text-foreground/70">
                  <li>E-books from major publishers</li>
                  <li>Research journals and periodicals</li>
                  <li>Conference proceedings</li>
                  <li>Dissertations and theses</li>
                  <li>Multimedia resources</li>
                  <li>Learning materials</li>
                  <li>Research datasets</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support Section */}
        <Card className="border-none shadow-lg mt-8 bg-gradient-to-br from-card/80 via-card/60 to-card/40">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold font-display">
              <span className="bg-brand-gradient bg-clip-text text-transparent">Need Help?</span>
            </CardTitle>
            <CardDescription>
              Our library staff is here to assist with e-resource access and
              research
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-foreground/70">
              If you experience any issues accessing our digital resources or
              need assistance, please contact our Reference Services team:
            </p>
            <div className="p-4 rounded-lg bg-gradient-to-r from-brand-blue/10 to-brand-magenta/10 border border-brand-blue/20">
              <p className="font-semibold">
                Email:{" "}
                <a
                  href="mailto:e-resources@dsu.edu.in"
                  className="text-brand-blue hover:text-brand-magenta transition-colors"
                >
                  e-resources@dsu.edu.in
                </a>
              </p>
              <p className="font-semibold">
                Reference Desk:{" "}
                <a
                  href="mailto:library@dsu.edu.in"
                  className="text-brand-blue hover:text-brand-magenta transition-colors"
                >
                  library@dsu.edu.in
                </a>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Button asChild className="bg-gradient-to-r from-[#0088FF] via-[#FFD700] to-[#FF6B00] hover:via-[#FFC500] text-foreground animate-gradient bg-[length:200%_auto]">
            <Link to="/library">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Library
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
