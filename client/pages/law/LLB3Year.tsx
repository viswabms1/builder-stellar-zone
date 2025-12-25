import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  BookOpen,
  Users,
  Award,
  Briefcase,
  Clock,
  Target,
} from "lucide-react";

export default function LLB3Year() {
  const curriculum = [
    "Constitutional Law",
    "Criminal Law",
    "Contract Law",
    "Torts",
    "Property Law",
    "Commercial Law",
    "Evidence and Procedure",
    "Professional Ethics",
  ];

  const specializations = [
    "Civil Law Practice",
    "Criminal Law Practice",
    "Commercial Litigation",
    "Corporate Advisory",
  ];

  const careers = [
    { title: "Advocate", description: "Practice law in courts and provide legal counsel" },
    { title: "Legal Consultant", description: "Advise clients on legal matters and strategies" },
    { title: "In-House Counsel", description: "Provide legal services within organizations" },
    { title: "Judicial Officer", description: "Serve as magistrate or legal administrator" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8917c7b87dc?q=80&w=1200&auto=format&fit=crop"
            alt="LLB 3-Year Program"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-3 w-full">
            <Link
              to="/academics/law/programs"
              className="inline-flex items-center gap-2 text-brand-magenta hover:text-brand-magenta/80 mb-6 transition-colors"
            >
              <ChevronRight className="w-4 h-4 rotate-180" />
              Back to Programs
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-magenta/10 rounded-full border border-brand-magenta/20 mb-4">
              <BookOpen className="w-4 h-4 text-brand-magenta" />
              <span className="text-sm font-medium text-brand-magenta font-display">Postgraduate Program</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight font-display mb-4">
              LLB (3-Year)
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl font-display">
              For Graduates from Other Fields
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://admissions.dsu.edu.in/" target="_blank" rel="noreferrer">
                <Button className="bg-brand-gradient text-foreground">
                  Apply Now <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-3 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Program Overview</h2>
              <p className="text-lg text-foreground/75 mb-6 leading-relaxed">
                This program is designed for graduates from other fields who wish to pursue a career in law. It focuses on core legal subjects while allowing students to specialize in specific areas of law, making it ideal for career switchers.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-brand-magenta flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Duration</h3>
                    <p className="text-foreground/75">3 Years (6 Semesters)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="w-6 h-6 text-brand-magenta flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Eligibility</h3>
                    <p className="text-foreground/75">Bachelor's degree in any field</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-brand-magenta flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Qualification</h3>
                    <p className="text-foreground/75">LLB (3-Year) Degree</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-border/30 bg-card/40 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-display">Why This Program?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-brand-magenta flex-shrink-0 mt-0.5" />
                    <span>Core legal subjects focus</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-brand-magenta flex-shrink-0 mt-0.5" />
                    <span>Specialization flexibility</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-brand-magenta flex-shrink-0 mt-0.5" />
                    <span>Tailored for career switchers</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-brand-magenta flex-shrink-0 mt-0.5" />
                    <span>Accelerated timeline</span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="px-3 py-16 bg-muted/40">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-12">Core Curriculum</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {curriculum.map((subject, i) => (
              <Card key={i} className="border-border/30 bg-card/40 backdrop-blur-sm">
                <CardContent className="pt-6 flex items-start gap-4">
                  <BookOpen className="w-5 h-5 text-brand-magenta flex-shrink-0 mt-1" />
                  <p className="font-medium">{subject}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="px-3 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-12">Specialization Options</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {specializations.map((spec, i) => (
              <Card key={i} className="border-border/30 bg-card/40 backdrop-blur-sm">
                <CardContent className="pt-6 flex items-start gap-4">
                  <Award className="w-5 h-5 text-brand-magenta flex-shrink-0 mt-1" />
                  <p className="font-medium">{spec}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="px-3 py-16 bg-muted/40">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-12">Career Paths</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {careers.map((career, i) => (
              <Card key={i} className="border-border/30 bg-card/40 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-display flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-brand-magenta" />
                    {career.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/75">{career.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-3 py-16">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Ready to Switch Careers to Law?
          </h2>
          <p className="text-lg text-foreground/75 mb-8 max-w-2xl mx-auto">
            Apply now to LLB (3-Year) and leverage your existing qualifications to pursue your legal career.
          </p>
          <a href="https://admissions.dsu.edu.in/" target="_blank" rel="noreferrer">
            <Button className="bg-brand-gradient text-foreground">
              Apply Now <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
