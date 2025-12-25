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

export default function BALLBHonors() {
  const curriculum = [
    "Constitutional Law and Political Theory",
    "Contracts and Torts",
    "Criminal Law",
    "Property Law and Real Estate",
    "Family Law",
    "Commercial and Corporate Law",
    "Constitutional Rights and Civil Liberties",
    "Legal Writing and Advocacy",
  ];

  const careers = [
    { title: "Litigator", description: "Represent clients in courts and legal proceedings" },
    { title: "Corporate Counsel", description: "Provide legal advice to corporations and businesses" },
    { title: "Legal Advisor", description: "Advise government agencies and organizations" },
    { title: "Judicial Officer", description: "Serve as magistrate or judge in legal system" },
  ];

  const specializations = [
    { label: "Litigation", icon: Briefcase },
    { label: "Corporate Law", icon: Award },
    { label: "Constitutional Law", icon: BookOpen },
    { label: "Criminal Law", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1589578228447-91fce40ba2ad?q=80&w=1200&auto=format&fit=crop"
            alt="BA.LLB Program"
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
              <span className="text-sm font-medium text-brand-magenta font-display">Undergraduate Program</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight font-display mb-4">
              BA.LLB (Honors)
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl font-display">
              5-Year Integrated Program
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
                The BA.LLB (Honors) is a five-year integrated undergraduate program designed for students who wish to pursue a career in law directly after school. The program blends foundational legal theory with specialized subjects to foster critical thinking and practical skills essential for modern legal practice.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-brand-magenta flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Duration</h3>
                    <p className="text-foreground/75">5 Years (10 Semesters)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="w-6 h-6 text-brand-magenta flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Eligibility</h3>
                    <p className="text-foreground/75">12+2 pass from recognized board</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-brand-magenta flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Qualification</h3>
                    <p className="text-foreground/75">BA.LLB (Honors) Degree</p>
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
                    <span>Foundational legal theory and principles</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-brand-magenta flex-shrink-0 mt-0.5" />
                    <span>Specialized subjects aligned with practice</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-brand-magenta flex-shrink-0 mt-0.5" />
                    <span>Critical thinking development</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-brand-magenta flex-shrink-0 mt-0.5" />
                    <span>Practical skill enhancement</span>
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
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-12">Specialization Areas</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {specializations.map((spec, i) => {
              const Icon = spec.icon;
              return (
                <Card key={i} className="border-border/30 bg-card/40 backdrop-blur-sm text-center">
                  <CardContent className="pt-6">
                    <Icon className="w-8 h-8 text-brand-magenta mx-auto mb-4" />
                    <p className="font-semibold">{spec.label}</p>
                  </CardContent>
                </Card>
              );
            })}
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
            Ready to Begin Your Legal Journey?
          </h2>
          <p className="text-lg text-foreground/75 mb-8 max-w-2xl mx-auto">
            Apply now to BA.LLB (Honors) and join a community of aspiring legal professionals.
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
