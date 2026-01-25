import { ArrowRight, ArrowLeft, Shield, CheckCircle, AlertCircle, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LibraryAntiPlagiarism() {
  const tools = [
    {
      name: "Turnitin",
      description: "Leading plagiarism detection tool for academic integrity",
      features: ["Document checking", "Citation verification", "Originality reports"],
    },
    {
      name: "Copyleaks",
      description: "Advanced plagiarism detection and content verification",
      features: ["AI-powered detection", "Source identification", "Citation suggestions"],
    },
    {
      name: "Grammarly",
      description: "Writing assistant with plagiarism checking capabilities",
      features: ["Grammar checking", "Plagiarism detection", "Citation formatting"],
    },
  ];

  const guidelines = [
    {
      title: "What is Plagiarism?",
      content: "Plagiarism is the use of someone else's work, ideas, words, or intellectual property without proper acknowledgment or attribution. This includes copying text, paraphrasing without citation, and submitting work not originally created by you.",
    },
    {
      title: "Types of Plagiarism",
      content: "Direct copying, paraphrasing without citation, self-plagiarism, mosaic plagiarism, accidental plagiarism, and patchwriting are common forms of plagiarism that must be avoided.",
    },
    {
      title: "How to Avoid Plagiarism",
      content: "Use proper citation formats (APA, MLA, Chicago, Harvard), maintain detailed notes with sources, use quotation marks for direct quotes, paraphrase carefully with citations, and always attribute ideas to their original creators.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-red-500/10 via-rose-600/5 to-background dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 dark:bg-red-500/30 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-rose-600/10 dark:bg-rose-600/30 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Anti-Plagiarism Tools & Resources
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Promoting academic integrity and original work
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Integrity</h2>
          <p className="text-lg text-foreground/70">
            Resources and tools to help you maintain academic integrity and avoid plagiarism
          </p>
        </div>

        {/* Available Tools */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {tools.map((tool, idx) => (
            <Card key={idx} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-red-600" />
                  {tool.name}
                </CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm font-semibold mb-2">Key Features:</p>
                  <ul className="space-y-1">
                    {tool.features.map((feature, i) => (
                      <li key={i} className="text-sm text-foreground/70 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guidelines */}
        <Card className="border-none shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl flex items-center gap-2">
              <AlertCircle className="h-8 w-8 text-orange-600" />
              Understanding Plagiarism
            </CardTitle>
            <CardDescription className="text-lg">
              Important information to maintain academic integrity
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {guidelines.map((guideline, idx) => (
              <div key={idx} className="pb-6 border-b last:pb-0 last:border-b-0">
                <h4 className="font-semibold text-lg mb-2">{guideline.title}</h4>
                <p className="text-foreground/70">{guideline.content}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Citation Formats */}
        <Card className="border-none shadow-lg bg-blue-50 dark:bg-slate-800">
          <CardHeader style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}>
            <CardTitle className="text-3xl md:text-4xl">Citation Formats</CardTitle>
            <CardDescription className="text-lg">
              Standard citation styles to acknowledge sources properly
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">APA Format</h4>
                <p className="text-sm text-foreground/70 mb-2">
                  Commonly used in social sciences, education, and psychology.
                </p>
                <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                  Author, A. A. (Year). Title. Publisher.
                </code>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">MLA Format</h4>
                <p className="text-sm text-foreground/70 mb-2">
                  Popular in humanities, languages, and cultural studies.
                </p>
                <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                  Author. "Title." Publisher, Year.
                </code>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Chicago Style</h4>
                <p className="text-sm text-foreground/70 mb-2">
                  Used in history, business, and fine arts.
                </p>
                <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                  Author. Title. Publisher, Year.
                </code>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Harvard Format</h4>
                <p className="text-sm text-foreground/70 mb-2">
                  Used in scientific and academic research.
                </p>
                <code className="text-xs bg-white dark:bg-slate-900 p-2 rounded block overflow-x-auto">
                  Author, A. 2023. Title. Publisher.
                </code>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="border-none shadow-lg mt-8">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl flex items-center gap-2">
              <CheckCircle className="h-8 w-8 text-green-600" />
              Best Practices
            </CardTitle>
            <CardDescription className="text-lg">
              Tips for maintaining academic integrity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Keep detailed notes with source citations during research</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Use quotation marks for direct quotes and cite the source</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Paraphrase carefully and always cite the original source</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Use plagiarism detection tools to check your work before submission</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Maintain consistent citation format throughout your document</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Ask your instructor or librarian if you're unsure about citations</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Support */}
        <Card className="border-none shadow-lg mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-6 w-6 text-blue-600" />
              Need Help?
            </CardTitle>
            <CardDescription>
              Our library staff can help you with citation formatting and plagiarism prevention
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/70 mb-4">
              Contact our Reference Services for guidance on avoiding plagiarism and proper citation techniques:
            </p>
            <Button asChild className="w-full">
              <Link to="/library/contact">
                Contact Library <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Button asChild className="bg-red-600 hover:bg-red-700">
            <Link to="/library">
              Back to Library <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
