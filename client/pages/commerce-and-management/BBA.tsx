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
      id: "bba-regular",
      label: "BBA (Regular)",
      description: "3-year comprehensive program preparing effective managers with modern teaching, research, and industry interaction",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Curriculum designed to develop competent, innovation-oriented, ethical managers with focus on leadership in global marketplace across 6 semesters",
          documentUrl: "https://www.dsu.edu.in/images/Commerce/BBA-Regular-Curriculum-2025-26.pdf",
        },
      ],
    },
    {
      id: "bba-bfsi",
      label: "BBA BFSI",
      description: "Specialization in Banking, Financial Services & Insurance (BFSI) with quantitative techniques and financial expertise",
      image: "https://images.unsplash.com/photo-1606531824254-d473aeb44dc5?q=80&w=1200&auto=format&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Specialized curriculum emphasizing application of quantitative techniques to finance, investment banking, securities trading, and risk management",
          documentUrl: "https://www.dsu.edu.in/images/Commerce/BBA-BFSI-Curriculum-2025-26.pdf",
        },
      ],
    },
    {
      id: "bba-ro",
      label: "BBA Retail Operations (RO)",
      description: "4-year program in association with Retailers Association's Skill Council of India (RASCI) with earn-while-you-learn approach",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1200&auto=format&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "8-semester program covering retail operations with on-the-job internships, dual degree from DSU and RASCI, hands-on retail industry exposure",
          documentUrl: "https://www.dsu.edu.in/images/Commerce/BBA-RO-Curriculum-2025-26.pdf",
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

export default function BBA() {
  const highlights = [
    { icon: Target, label: "Leadership Development" },
    { icon: Briefcase, label: "Industry Immersion" },
    { icon: Users, label: "Team Collaboration" },
    { icon: Award, label: "Career Ready" },
  ];

  const careers = [
    "Business Manager",
    "Financial Analyst",
    "Marketing Manager",
    "Operations Manager",
    "Entrepreneur",
    "Management Consultant",
    "Retail Manager",
    "Retail Operations Lead",
    "Business Development Manager",
    "Corporate Strategist",
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
                Bachelor of Business Administration (BBA)
              </h1>
              <p className="text-lg text-foreground/80 max-w-2xl">
                Prepare young minds with positive attitude for excellent performance and committed service through innovative management education blending theory with practical experience.
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
                The Bachelor of Business Administration (BBA) program is offered as a platform to prepare young minds with a positive attitude for excellent performance and committed service, providing the right nurturing ground to enable students to pursue their entrepreneurial ambitions.
              </p>
              <p className="text-foreground/80">
                The three-year program equips students to meet managerial challenges of the 21st century through case studies, presentations, internships, research projects, industrial visits, and guest lectures from industry experts. The focus is on developing independent thinking, decision-making capability, and research aptitude.
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
            <h2 className="text-3xl font-bold font-display">Program Specializations & Curriculum</h2>
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
          <h2 className="text-3xl font-bold font-display mb-6">Ready to Lead with Excellence?</h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Join DSU's BBA program and develop the skills, knowledge, and mindset needed to become an effective business leader.
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
