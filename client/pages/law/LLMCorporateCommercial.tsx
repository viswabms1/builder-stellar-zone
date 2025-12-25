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

export default function LLMCorporateCommercial() {
  const curriculum = [
    "Corporate Law and Governance",
    "Mergers and Acquisitions",
    "Intellectual Property Rights",
    "Competition Law",
    "Foreign Investment and Trade",
    "Corporate Restructuring",
    "Contract Drafting and Negotiation",
    "Compliance and Regulatory Framework",
  ];

  const specializations = [
    "M&A and Business Transactions",
    "Intellectual Property Management",
    "Corporate Compliance",
    "Business Dispute Resolution",
  ];

  const careers = [
    { title: "Corporate Counsel", description: "Senior legal advisor for major corporations" },
    { title: "M&A Specialist", description: "Handle mergers, acquisitions, and negotiations" },
    { title: "IP Manager", description: "Manage intellectual property portfolios" },
    { title: "Legal Consultant", description: "Advise businesses on corporate strategies" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
            alt="LLM Corporate and Commercial Law"
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
              <Briefcase className="w-4 h-4 text-brand-magenta" />
              <span className="text-sm font-medium text-brand-magenta font-display">Postgraduate Program</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight font-display mb-4">
              LLM in Corporate and Commercial Law
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl font-display">
              2-Year Advanced Program
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
                This program delves into the complexities of corporate law, focusing on the regulatory environment, business transactions, mergers and acquisitions, intellectual property rights, and other aspects essential for a career in corporate law.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-brand-magenta flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Duration</h3>
                    <p className="text-foreground/75">2 Years (4 Semesters)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-brand-magenta flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Eligibility</h3>
                    <p className="text-foreground/75">Bachelor of Laws (LLB) degree</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Briefcase className="w-6 h-6 text-brand-magenta flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Qualification</h3>
                    <p className="text-foreground/75">LLM in Corporate and Commercial Law</p>
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
                    <span>Corporate law in-depth study</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-brand-magenta flex-shrink-0 mt-0.5" />
                    <span>M&A expertise</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-brand-magenta flex-shrink-0 mt-0.5" />
                    <span>IP rights focus</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-brand-magenta flex-shrink-0 mt-0.5" />
                    <span>Regulatory environment mastery</span>
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
            Ready to Excel in Corporate Law?
          </h2>
          <p className="text-lg text-foreground/75 mb-8 max-w-2xl mx-auto">
            Apply now to LLM in Corporate and Commercial Law and master the complexities of modern business.
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
