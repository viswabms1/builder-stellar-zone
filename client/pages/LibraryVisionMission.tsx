import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LibraryVisionMission() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-500/10 via-purple-600/5 to-background dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/30 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 dark:bg-purple-600/30 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Vision & Mission
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Our commitment to academic excellence and intellectual growth
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
      <section className="py-16 px-3 max-w-4xl mx-auto">
        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl">Our Vision</CardTitle>
            <CardDescription className="text-lg">
              Shaping the future of learning and research
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg leading-relaxed text-foreground/80">
              The DSU Central Library envisions itself as a premier knowledge
              hub that serves as the intellectual heart of the university. We
              aspire to be recognized as a model library that seamlessly
              integrates traditional and digital resources to support
              world-class education and research.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              Our vision is to empower learners and researchers by providing
              comprehensive access to global knowledge, fostering critical
              thinking, and promoting academic excellence across all
              disciplines.
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg mt-8">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl">Our Mission</CardTitle>
            <CardDescription className="text-lg">
              Excellence in service and support
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg leading-relaxed text-foreground/80">
              The DSU Central Library is committed to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-foreground/80">
              <li>
                Providing comprehensive collections of print and digital
                resources
              </li>
              <li>
                Facilitating access to global knowledge and information sources
              </li>
              <li>Supporting academic programs and research initiatives</li>
              <li>Promoting information literacy and research skills</li>
              <li>Creating an inclusive and welcoming learning environment</li>
              <li>Fostering intellectual discourse and academic growth</li>
              <li>
                Maintaining the highest standards of library services and
                professional ethics
              </li>
              <li>
                Embracing technology to enhance user experience and
                accessibility
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg mt-8">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl">Core Values</CardTitle>
            <CardDescription className="text-lg">
              Principles that guide our operations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">Excellence</h4>
                <p className="text-foreground/70">
                  Commitment to the highest standards in all our endeavors
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Accessibility</h4>
                <p className="text-foreground/70">
                  Ensuring equal access to resources for all users
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Innovation</h4>
                <p className="text-foreground/70">
                  Embracing new technologies and methodologies
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Integrity</h4>
                <p className="text-foreground/70">
                  Upholding ethical practices and transparency
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Inclusivity</h4>
                <p className="text-foreground/70">
                  Welcoming diverse perspectives and backgrounds
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Collaboration</h4>
                <p className="text-foreground/70">
                  Working together to achieve shared goals
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link to="/library">
              Explore More Library Services{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
