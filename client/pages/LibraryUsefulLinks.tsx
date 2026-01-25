import { ArrowRight, ArrowLeft, ExternalLink, Globe, Database, BookOpen, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LibraryUsefulLinks() {
  const links = [
    {
      category: "DSU Resources",
      icon: Zap,
      items: [
        {
          name: "DSU Main Website",
          url: "https://www.dsu.edu.in/",
          description: "Official website of Dayananda Sagar University",
        },
        {
          name: "DSU Digital Library",
          url: "https://dsuunivopac.ltsinformatics.com/",
          description: "Online library catalog and digital resources",
        },
        {
          name: "DSU Student Portal",
          url: "https://ums.mydsi.org/",
          description: "Academic and administrative portal for students",
        },
        {
          name: "DSU Admissions",
          url: "https://admissions.dsu.edu.in/",
          description: "Official admissions portal for all programs",
        },
      ],
    },
    {
      category: "Research Databases",
      icon: Database,
      items: [
        {
          name: "Google Scholar",
          url: "https://scholar.google.com/",
          description: "Free access to scholarly articles and research",
        },
        {
          name: "ResearchGate",
          url: "https://www.researchgate.net/",
          description: "Research and collaboration platform",
        },
        {
          name: "PubMed Central",
          url: "https://www.ncbi.nlm.nih.gov/pmc/",
          description: "Free full-text archive of biomedical literature",
        },
        {
          name: "SSRN",
          url: "https://www.ssrn.com/",
          description: "Social Science Research Network",
        },
      ],
    },
    {
      category: "Academic Resources",
      icon: BookOpen,
      items: [
        {
          name: "Open Textbook Library",
          url: "https://open.umn.edu/opentextbooks/",
          description: "Free open textbooks for various subjects",
        },
        {
          name: "MIT OpenCourseWare",
          url: "https://ocw.mit.edu/",
          description: "Free course materials from MIT",
        },
        {
          name: "Coursera",
          url: "https://www.coursera.org/",
          description: "Online learning platform with courses and degrees",
        },
        {
          name: "edX",
          url: "https://www.edx.org/",
          description: "Online courses from universities and institutions",
        },
      ],
    },
    {
      category: "Citation & Reference Tools",
      icon: Globe,
      items: [
        {
          name: "Zotero",
          url: "https://www.zotero.org/",
          description: "Free citation management tool",
        },
        {
          name: "Mendeley",
          url: "https://www.mendeley.com/",
          description: "Reference management and academic social network",
        },
        {
          name: "Grammarly",
          url: "https://www.grammarly.com/",
          description: "Writing assistant and plagiarism checker",
        },
        {
          name: "Turnitin",
          url: "https://www.turnitin.com/",
          description: "Plagiarism detection and writing feedback",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-indigo-500/10 via-blue-600/5 to-background dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-500/30 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 dark:bg-blue-600/30 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Useful Links & Resources
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Curated collection of helpful online resources and tools
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">External Resources</h2>
          <p className="text-lg text-foreground/70">
            Handpicked links to enhance your research and learning
          </p>
        </div>

        <div className="space-y-8">
          {links.map((section, idx) => {
            const Icon = section.icon;
            return (
              <div key={idx}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-indigo-500/10">
                    <Icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">{section.category}</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {section.items.map((item, i) => (
                    <Card key={i} className="border-none shadow-md hover:shadow-lg transition-shadow group">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h4 className="font-semibold text-lg mb-1 group-hover:text-indigo-600 transition-colors">
                              {item.name}
                            </h4>
                            <p className="text-sm text-foreground/70 mb-3">{item.description}</p>
                          </div>
                          <ExternalLink className="h-5 w-5 text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        </div>
                        <Button asChild variant="ghost" className="w-full justify-start px-0">
                          <a href={item.url} target="_blank" rel="noopener noreferrer">
                            Visit <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Recommended Resources */}
        <Card className="border-none shadow-lg mt-12 bg-indigo-50 dark:bg-indigo-950/30">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl">Recommended Resources</CardTitle>
            <CardDescription className="text-lg">
              Essential tools and platforms for academic success
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">For Research</h4>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Google Scholar for academic papers</li>
                  <li>• ResearchGate for networking</li>
                  <li>• PubMed for medical/biological research</li>
                  <li>• SSRN for social sciences</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">For Writing & Citations</h4>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Zotero for reference management</li>
                  <li>• Grammarly for writing assistance</li>
                  <li>• Turnitin for plagiarism checking</li>
                  <li>• Mendeley for document management</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
            <Link to="/library">
              Back to Library <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
