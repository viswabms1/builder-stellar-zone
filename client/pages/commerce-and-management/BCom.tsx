import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ChevronRight,
  BookOpen,
  Users,
  Award,
  Briefcase,
  Clock,
  Target,
  ChevronDown,
  Download,
  CalendarDays,
} from "lucide-react";
import { Button } from "@/components/ui/button";

function CurriculumLibrary() {
  const [openProgram, setOpenProgram] = useState<string | null>(null);

  const programs = [
    {
      id: "bcom-standard",
      label: "B.Com (Standard)",
      description: "3-year comprehensive undergraduate program with foundation in accounting, finance, and commerce",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Latest curriculum bridging conceptual learning and practical application with professional corporate expertise across 6 semesters",
          documentUrl: "https://www.dsu.edu.in/images/Commerce/B-Com-Curriculum-2025-26.pdf",
        },
      ],
    },
    {
      id: "bcom-acca",
      label: "B.Com with ACCA Coaching",
      description: "3-year program integrated with ACCA (Association of Chartered Certified Accountants) coaching and examinations",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Dual certification program combining B.Com degree with up to 6 ACCA paper exemptions and reduced registration fees",
          documentUrl: "https://www.dsu.edu.in/images/Commerce/B-Com-ACCA-Curriculum-2025-26.pdf",
        },
      ],
    },
    {
      id: "bcom-cma",
      label: "B.Com with USA-CMA Coaching",
      description: "3-year program with Certified Management Accountant (CMA) certification from the Institute of Management Accountants, USA",
      image: "https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1200&auto=format&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Advanced curriculum covering financial reporting, planning, performance control, and financial decision making across 4 semesters",
          documentUrl: "https://www.dsu.edu.in/images/Commerce/B-Com-CMA-Curriculum-2025-26.pdf",
        },
      ],
    },
    {
      id: "bcom-ca",
      label: "B.Com with CA Foundation Coaching",
      description: "3-year program enabling simultaneous pursuit of B.Com and Chartered Accountant (CA) articleship",
      image: "https://images.unsplash.com/photo-1590080876-e50b5ff8f5d9?q=80&w=1200&auto=format&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Integrated program with B.Com morning classes and CA afternoon classes on campus, including CPT and IPCE training",
          documentUrl: "https://www.dsu.edu.in/images/Commerce/B-Com-CA-Curriculum-2025-26.pdf",
        },
      ],
    },
  ];

  return (
    <div className="grid gap-4 lg:grid-cols-1">
      {programs.map((program) => {
        const isOpen = openProgram === program.id;
        return (
          <div key={program.id} className="rounded-3xl border-2 border-brand-magenta/30 overflow-hidden transition-all hover:shadow-xl hover:shadow-brand-magenta/10">
            <div className="relative h-48 overflow-hidden">
              <img src={program.image} alt={program.label} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 bg-background/50 backdrop-blur-sm space-y-4">
              <div className="flex items-start gap-3">
                <Badge className="rounded-full border bg-brand-magenta/15 text-brand-magenta border-brand-magenta/20">Undergraduate</Badge>
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-foreground mb-2">{program.label}</h3>
                <p className="text-sm text-foreground/80">{program.description}</p>
              </div>
              <Button variant="outline" className="w-full border-brand-magenta/30 hover:bg-brand-magenta/10 text-brand-magenta" onClick={() => setOpenProgram(isOpen ? null : program.id)}>
                <span className="flex items-center justify-center gap-2">
                  {isOpen ? "Hide" : "View"} Curriculum
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </span>
              </Button>
              {isOpen && (
                <div className="mt-4 space-y-3 border-t border-border/20 pt-4">
                  {program.batches.map((batch) => (
                    <div key={batch.year} className="rounded-xl border border-border/40 bg-card/70 p-4 space-y-3">
                      <div className="flex items-center gap-2">
                        <Badge className="rounded-full border text-xs bg-brand-magenta/20 text-brand-magenta border-brand-magenta/30">
                          <CalendarDays className="h-3 w-3 mr-1" />
                          {batch.year}
                        </Badge>
                      </div>
                      <p className="text-sm text-foreground/80">{batch.summary}</p>
                      <a href={batch.documentUrl} target="_blank" rel="noreferrer" className="inline-block">
                        <Button size="sm" variant="outline" className="gap-2 border-brand-magenta/30 hover:bg-brand-magenta/10 text-brand-magenta">
                          <Download className="w-4 h-4" /> Download Syllabus
                        </Button>
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function BCom() {
  const highlights = [
    { icon: Award, label: "Industry-Aligned Curriculum" },
    { icon: Briefcase, label: "Professional Certifications" },
    { icon: Users, label: "Expert Faculty" },
    { icon: Target, label: "Career Ready" },
  ];

  const careers = [
    "Financial Analyst",
    "Chartered Accountant",
    "Tax Consultant",
    "Investment Banker",
    "Management Accountant",
    "Auditor",
    "Financial Planner",
    "Corporate Comptroller",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-brand-magenta/10 via-brand-blue/10 to-brand-orange/10 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-6">
            <div>
              <Link to="/academics/commerce-and-management" className="inline-flex items-center gap-2 text-sm text-brand-magenta hover:text-brand-magenta/80 mb-4">
                <ChevronRight className="h-4 w-4 rotate-180" />
                Back to Programs
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
                Bachelor of Commerce (B.Com)
              </h1>
              <p className="text-lg text-foreground/80 max-w-2xl">
                Bridge the gap between conceptual learning and practical application to develop professional corporate expertise through flexible, industry-aligned curriculum.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Program Overview */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold font-display">Program Overview</h2>
              <p className="text-foreground/80">
                The Bachelor of Commerce program at Dayananda Sagar University is designed to bridge the gap between conceptual learning and practical application to inculcate professional corporate expertise.
              </p>
              <p className="text-foreground/80">
                The curriculum has been suitably prepared to meet the challenging needs of Indian corporates, with built-in flexibility enabling students to choose from a wide spectrum of courses. SCMS imparts comprehensive business skills and provides the training ground that turns out high-calibre, competent, versatile professionals.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.label} className="border-border/50 bg-card/60 backdrop-blur">
                    <CardContent className="pt-6">
                      <Icon className="h-8 w-8 text-brand-magenta mb-3" />
                      <p className="font-semibold text-sm">{item.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Curriculum Library */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-display">Program Varieties & Curriculum</h2>
            <CurriculumLibrary />
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="bg-gradient-to-r from-brand-magenta/5 via-brand-blue/5 to-brand-orange/5 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold font-display mb-8">Career Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {careers.map((career) => (
              <div key={career} className="flex items-center gap-3 p-4 rounded-lg border border-border/30 bg-card/40 backdrop-blur-sm">
                <Briefcase className="h-5 w-5 text-brand-magenta flex-shrink-0" />
                <span className="text-foreground/90">{career}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold font-display mb-6">Ready to Shape Your Career?</h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Join DSU's B.Com program and gain the expertise and credentials needed for success in the global business landscape.
          </p>
          <a href="https://admissions.dsu.edu.in/" target="_blank" rel="noreferrer">
            <Button size="lg" className="bg-gradient-to-r from-brand-magenta to-brand-orange hover:shadow-lg">
              Apply Now
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
