import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Stethoscope,
  Users,
  Microscope,
  GraduationCap,
  Trophy,
  Award,
  ChevronDown,
  ChevronRight,
  Download,
  CalendarDays,
  Zap,
} from "lucide-react";

export default function MScNursing() {
  const specializations = [
    { icon: Microscope, label: "Medical Surgical Nursing" },
    { icon: Heart, label: "Child Health Nursing" },
    { icon: Users, label: "Mental Health Nursing" },
    { icon: Stethoscope, label: "OB-GYN Nursing" },
    { icon: Trophy, label: "Psychiatric Nursing" },
    { icon: Award, label: "Advanced Research" },
  ];

  const highlights = [
    "Comprehensive 2-year postgraduate program with specialization options",
    "Advanced clinical skills and evidence-based nursing practice",
    "Research methodology and thesis-based learning",
    "Leadership development and nursing management focus",
    "Integration of latest clinical advancements and innovations",
    "Preparation for nursing specialist roles and academic positions",
  ];

  const careers = [
    "Clinical Nurse Specialist → Advanced Practice Nurse → Nurse Practitioner",
    "Nursing Educator → Academic Leadership → Department Head",
    "Nursing Researcher → Research Director → Faculty Member",
    "International opportunities: USA, UK, Canada, Middle East (₹25-40 LPA+)",
  ];


  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative w-full overflow-hidden" id="top">
        <div className="relative w-full h-[55vh] md:h-[70vh]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F6d2803c8f3c2422a9807104fc8bbd1cb?format=webp&width=800"
            alt="M.Sc Nursing"
            className="w-full h-full object-cover"
            style={{
              filter: "brightness(1.1) contrast(1.1) saturate(1.15)",
            }}
          />
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="hero-title-inside absolute bottom-0 left-0 right-0 z-20 flex items-end justify-start p-3 sm:p-6 max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              <p className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-1 sm:mb-4 uppercase tracking-widest font-display">
                M.Sc Nursing
              </p>
              <h1 className="text-xs sm:text-base md:text-base text-white/80 mb-2 sm:mb-6 leading-tight font-display">
                Advanced Nursing & Professional Excellence
              </h1>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-background relative max-w-7xl mx-auto px-3 w-full py-6 sm:py-8">
        <div className="hero-title-outside max-w-2xl">
          <p className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-1 sm:mb-4 uppercase tracking-widest font-display">
            M.Sc Nursing
          </p>
          <h1 className="text-xs sm:text-base md:text-base text-foreground/80 mb-2 sm:mb-6 leading-tight font-display">
            Advanced Nursing & Professional Excellence
          </h1>
        </div>

        <div className="flex flex-row gap-2 sm:gap-4">
          <a
            href="https://admissions.dsu.edu.in/"
            target="_blank"
            rel="noreferrer"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Button
              size="sm"
              className="sm:size-lg bg-white hover:bg-white/90 text-brand-orange hover:text-brand-orange/80 px-4 sm:px-8 py-2 sm:py-6 text-xs sm:text-base font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
            >
              Apply Now
              <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <a
            href="https://dsu.edu.in/virtual-tour/"
            target="_blank"
            rel="noreferrer"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Button
              size="sm"
              className="sm:size-lg bg-white hover:bg-white/90 text-brand-orange hover:text-brand-orange/80 px-4 sm:px-8 py-2 sm:py-6 text-xs sm:text-base font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
            >
              Virtual Tour
            </Button>
          </a>
        </div>
      </div>

      {/* Program Overview */}
      <section id="overview" className="relative overflow-hidden px-3 py-8">
        <div
          className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-brand-orange/20 via-transparent to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl mb-4">Program Overview</h2>
              <p className="text-foreground/80 font-body">
                The M.Sc Nursing program is a comprehensive 2-year postgraduate pathway designed to equip students with advanced clinical skills, fostering confidence to excel in challenging healthcare environments. The program emphasizes a comprehensive approach to nursing education, ensuring graduates are well-prepared for specialized roles in the healthcare sector. Throughout the course, students are trained to practice patient-centered nursing with compassion and respect, prioritizing dignity and well-being while operating within professional, ethical, and legal frameworks.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-lg border border-brand-orange/20 bg-brand-orange/5">
                <Heart className="h-5 w-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground font-body">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="px-3 py-8 bg-gradient-to-r from-brand-orange/5 via-brand-magenta/5 to-brand-blue/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">Program Specializations</h2>
            <p className="text-foreground/80 font-body max-w-3xl">
              Choose from diverse specialization areas to focus your advanced nursing education and career development.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 rounded-lg border border-brand-orange/20 bg-brand-orange/10 backdrop-blur-sm">
              <h3 className="font-display text-lg mb-2 text-brand-orange">Medical Surgical Nursing</h3>
              <p className="text-sm text-foreground font-body">Advanced practice in acute and chronic medical-surgical conditions with emphasis on complex patient care and evidence-based interventions.</p>
            </div>
            <div className="p-6 rounded-lg border border-brand-orange/20 bg-brand-orange/10 backdrop-blur-sm">
              <h3 className="font-display text-lg mb-2 text-brand-orange">Child Health Nursing</h3>
              <p className="text-sm text-foreground font-body">Specialized pediatric nursing care covering neonatal, infant, child and adolescent health with focus on developmental approaches and family-centered care.</p>
            </div>
            <div className="p-6 rounded-lg border border-brand-orange/20 bg-brand-orange/10 backdrop-blur-sm">
              <h3 className="font-display text-lg mb-2 text-brand-orange">Mental Health Nursing</h3>
              <p className="text-sm text-foreground font-body">Advanced psychiatric and mental health nursing practice with focus on therapeutic communication, psychosocial interventions, and community mental health.</p>
            </div>
            <div className="p-6 rounded-lg border border-brand-orange/20 bg-brand-orange/10 backdrop-blur-sm">
              <h3 className="font-display text-lg mb-2 text-brand-orange">Obstetrics & Gynecological Nursing</h3>
              <p className="text-sm text-foreground font-body">Specialized nursing care in obstetrics, gynecology, and women's health with emphasis on maternal-newborn care and reproductive health.</p>
            </div>
            <div className="p-6 rounded-lg border border-brand-orange/20 bg-brand-orange/10 backdrop-blur-sm">
              <h3 className="font-display text-lg mb-2 text-brand-orange">Psychiatric Nursing</h3>
              <p className="text-sm text-foreground font-body">Advanced psychiatric nursing focusing on mental health disorders, therapeutic modalities, crisis intervention, and rehabilitation nursing.</p>
            </div>
            <div className="p-6 rounded-lg border border-brand-orange/20 bg-brand-orange/10 backdrop-blur-sm">
              <h3 className="font-display text-lg mb-2 text-brand-orange">Advanced Research</h3>
              <p className="text-sm text-foreground font-body">Nursing research methodologies, evidence-based practice, research proposal development, and thesis-based research in specialized nursing areas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="px-3 py-8 bg-gradient-to-r from-brand-orange/5 via-brand-magenta/5 to-brand-blue/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">Career Pathways & Placements</h2>
            <p className="text-foreground/80 font-body max-w-3xl">
              Graduates emerge with the knowledge, skills, and ethical grounding necessary to lead in diverse clinical and research settings.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {careers.map((career, i) => (
              <div key={i} className="p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <Trophy className="h-5 w-5 text-brand-orange flex-shrink-0 mt-1" />
                  <p className="text-sm text-foreground font-body">{career}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Library */}
      <CurriculumLibrary />

      {/* Related Resources */}
      <section
        id="related-resources"
        className="bg-gradient-to-r from-brand-orange/5 via-brand-magenta/5 to-brand-blue/5 px-3 py-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl">
              Explore More at DSU Nursing
            </h2>
            <p className="mt-3 text-sm text-foreground font-body">
              Discover clinical excellence, research initiatives, placements and admission pathways
            </p>
          </div>
          <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-4">
            <a
              href="/centre-of-excellence"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-orange/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-orange/20 to-brand-orange/10 flex items-center justify-center">
                  <Award className="h-12 w-12 text-brand-orange/70 group-hover:text-brand-orange transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-orange transition-colors">
                    Clinical Simulation Labs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    State-of-the-art simulation labs and clinical training centers
                  </p>
                </CardContent>
              </Card>
            </a>

            <a
              href="/research"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-orange/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-orange/20 to-brand-orange/10 flex items-center justify-center">
                  <Microscope className="h-12 w-12 text-brand-orange/70 group-hover:text-brand-orange transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-orange transition-colors">
                    Research & Innovation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    Faculty-led nursing research and healthcare innovation
                  </p>
                </CardContent>
              </Card>
            </a>

            <a
              href="/placements"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-orange/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-orange/20 to-brand-orange/10 flex items-center justify-center">
                  <GraduationCap className="h-12 w-12 text-brand-orange/70 group-hover:text-brand-orange transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-orange transition-colors">
                    Placements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    Career pathways with leading hospitals and healthcare organizations
                  </p>
                </CardContent>
              </Card>
            </a>

            <a
              href="https://admissions.dsu.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-orange/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-orange/20 to-brand-orange/10 flex items-center justify-center">
                  <Heart className="h-12 w-12 text-brand-orange/70 group-hover:text-brand-orange transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-orange transition-colors">
                    Admissions
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p className="text-sm text-foreground/80 font-body">
                    Join DSU Nursing and make a difference in healthcare
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-brand-orange group-hover:text-brand-orange/80 transition-colors">
                    Apply Now
                    <ChevronRight className="h-3 w-3" />
                  </span>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-3 pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-none border border-brand-orange/20 bg-brand-orange/5 p-10">
            <h3 className="mb-3 font-display text-3xl">
              Ready to excel in advanced nursing?
            </h3>
            <p className="mb-6 text-foreground font-body">
              Explore the M.Sc Nursing program, take a virtual tour and begin your journey towards nursing leadership and excellence at DSU College of Nursing Sciences.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://admissions.dsu.edu.in/"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="bg-brand-gradient text-foreground">
                  Apply Now
                  <GraduationCap className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

interface CurriculumProgram {
  id: string;
  label: string;
  description: string;
  image: string;
  batches: CurriculumBatch[];
}

interface CurriculumBatch {
  year: string;
  summary: string;
  documentUrl?: string;
}

function CurriculumLibrary() {
  const [openProgram, setOpenProgram] = useState<string | null>(null);

  const programs: CurriculumProgram[] = [
    {
      id: "msc-nursing",
      label: "M.Sc Nursing Curriculum",
      description: "2-year comprehensive postgraduate pathway with specialization options and research thesis",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&h=400&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Latest curriculum with advanced nursing practice specializations, research methodology, and thesis work across 4 semesters",
          documentUrl:
            "https://www.dsu.edu.in/images/HealthSciences/nursing/MSC-Nursing-Curriculum-2025-26.pdf",
        },
        {
          year: "2024-25",
          summary: "Previous curriculum batch with comprehensive postgraduate nursing theory and specialized clinical practice",
          documentUrl:
            "https://www.dsu.edu.in/images/HealthSciences/nursing/MSC-Nursing-Curriculum-2024-25.pdf",
        },
      ],
    },
  ];

  return (
    <section className="px-3 py-8 bg-gradient-to-r from-brand-orange/5 via-brand-magenta/5 to-brand-blue/5">
      <div className="mx-auto max-w-6xl space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="headline-2 mb-3 font-display">
              <span className="text-foreground">Curriculum </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Library
              </span>
            </h2>
            <p className="max-w-2xl text-sm text-foreground sm:text-base font-body">
              Access comprehensive curriculum documentation, specialization details, learning outcomes, and downloadable syllabus for the M.Sc Nursing program.
            </p>
          </div>
          <Badge className="w-fit rounded-full bg-brand-orange/15 px-4 py-2 text-xs font-semibold text-brand-orange border border-brand-orange/20">
            2025 – 2026
          </Badge>
        </div>

        <div className="grid gap-3 lg:grid-cols-2">
          {programs.map((program) => {
            const isOpen = openProgram === program.id;
            const borderClass = "border-brand-orange/30";
            const badgeClass = "bg-brand-orange/15 text-brand-orange border-brand-orange/20";

            return (
              <div
                key={program.id}
                className={`rounded-3xl border-2 ${borderClass} overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-brand-orange/10 hover:-translate-y-1`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.label}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-3 bg-background/50 backdrop-blur-sm space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge className={`rounded-full border ${badgeClass}`}>
                      Postgraduate
                    </Badge>
                  </div>
                  <div>
                    <h3 className="headline-3 font-display text-foreground mb-2">{program.label}</h3>
                    <p className="text-sm text-foreground/80 font-body">{program.description}</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-brand-orange/30 hover:bg-brand-orange/10 text-brand-orange hover:text-brand-orange"
                    onClick={() => setOpenProgram(isOpen ? null : program.id)}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isOpen ? "Hide" : "View"} Curriculum
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </span>
                  </Button>

                  {isOpen && (
                    <div className="mt-4 space-y-3 border-t border-border/20 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                      {program.batches.map((batch, batchIdx) => (
                        <div
                          key={`${program.id}-${batch.year}`}
                          className="rounded-xl border border-border/40 bg-card/70 p-3 transition-all hover:border-brand-orange/40"
                        >
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2">
                              <Badge className="rounded-full border text-xs bg-brand-orange/20 text-brand-orange border-brand-orange/30">
                                <CalendarDays className="h-3 w-3 mr-1" />
                                {batch.year}
                              </Badge>
                              {batchIdx === 0 && (
                                <Badge className="rounded-full bg-brand-orange/20 text-brand-orange border-brand-orange/30 border text-xs">
                                  <Zap className="h-3 w-3 mr-1" />
                                  Current
                                </Badge>
                              )}
                            </div>
                          </div>
                          <p className="text-xs text-foreground/80 font-body mb-3 leading-relaxed">{batch.summary}</p>
                          {batch.documentUrl && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full justify-center gap-1 rounded text-xs font-semibold bg-brand-orange/10 text-brand-orange hover:bg-brand-orange/20"
                              asChild
                            >
                              <a href={batch.documentUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1">
                                <Download className="h-3 w-3" />
                                Download Curriculum PDF
                              </a>
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
