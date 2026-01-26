import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CurriculumLibrary } from "@/components/CurriculumLibrary";
import { getCurriculumByDepartment } from "@/lib/content-manager";
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

export default function MPT() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const specializations = [
    { icon: Trophy, label: "Sports & Musculo Skeletal" },
    { icon: Heart, label: "Cardio Pulmonary" },
    { icon: Users, label: "Women's Health" },
    { icon: Microscope, label: "Neuro" },
    { icon: Stethoscope, label: "Community Based Rehabilitation" },
  ];

  const highlights = [
    "Comprehensive 2-year postgraduate program with specialization options",
    "Advanced clinical skills and evidence-based physiotherapy practice",
    "Research methodology and thesis-based learning in rehabilitation science",
    "Leadership development and physiotherapy management focus",
    "Integration of latest clinical advancements in rehabilitation",
    "Preparation for physiotherapy specialist roles and academic positions",
  ];

  const careers = [
    "Clinical Physiotherapist Specialist → Consultant Physiotherapist → Chief Rehabilitation Officer",
    "Physiotherapy Educator → Academic Leadership → Department Head",
    "Physiotherapy Researcher → Research Director → Faculty Member",
    "International opportunities: USA, UK, Canada, Middle East (₹25-40 LPA+)",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative w-full overflow-hidden" id="top">
        <div className="relative w-full h-[55vh] md:h-[70vh]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fc75c5785deb14931b4496d118c5dcb85?format=webp&width=800"
            alt="M.P.T Physiotherapy"
            className="w-full h-full object-cover"
            style={{
              filter: "brightness(1.1) contrast(1.1) saturate(1.15)",
            }}
          />
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="hero-title-inside absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between p-3 sm:p-6 max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              <p className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-1 sm:mb-4 uppercase tracking-widest font-display">
                M.P.T Physiotherapy
              </p>
              <h1 className="text-xs sm:text-base md:text-base text-white/80 mb-2 sm:mb-6 leading-tight font-display">
                Advanced Physiotherapy & Rehabilitation Excellence
              </h1>
            </div>

            {/* Buttons inside hero - visible on md and up */}
            <div className="hidden md:flex flex-col gap-2 sm:gap-4">
              <a
                href="https://admissions.dsu.edu.in/"
                target="_blank"
                rel="noreferrer"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Button
                  size="sm"
                  className="sm:size-lg bg-white hover:bg-white/90 text-brand-blue hover:text-brand-blue/80 px-4 sm:px-8 py-2 sm:py-6 text-xs sm:text-base font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
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
                  className="sm:size-lg bg-white hover:bg-white/90 text-brand-blue hover:text-brand-blue/80 px-4 sm:px-8 py-2 sm:py-6 text-xs sm:text-base font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
                >
                  Virtual Tour
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-background relative max-w-7xl mx-auto px-3 w-full py-6 sm:py-8">
        <div className="hero-title-outside max-w-2xl">
          <p className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-1 sm:mb-4 uppercase tracking-widest font-display">
            M.P.T Physiotherapy
          </p>
          <h1 className="text-xs sm:text-base md:text-base text-foreground/80 mb-2 sm:mb-6 leading-tight font-display">
            Advanced Physiotherapy & Rehabilitation Excellence
          </h1>
        </div>

        {/* Buttons below hero - visible only on mobile */}
        <div className="flex md:hidden flex-row gap-2 sm:gap-4">
          <a
            href="https://admissions.dsu.edu.in/"
            target="_blank"
            rel="noreferrer"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Button
              size="sm"
              className="sm:size-lg bg-white hover:bg-white/90 text-brand-blue hover:text-brand-blue/80 px-4 sm:px-8 py-2 sm:py-6 text-xs sm:text-base font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
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
              className="sm:size-lg bg-white hover:bg-white/90 text-brand-blue hover:text-brand-blue/80 px-4 sm:px-8 py-2 sm:py-6 text-xs sm:text-base font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
            >
              Virtual Tour
            </Button>
          </a>
        </div>
      </div>

      {/* Program Overview */}
      <section id="overview" className="relative overflow-hidden px-3 py-8">
        <div
          className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-brand-blue/20 via-transparent to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                Program Overview
              </h2>
              <p className="text-foreground/80 font-body">
                The M.P.T (Master of Physiotherapy) program is a comprehensive
                2-year postgraduate pathway designed to equip students with
                advanced clinical skills and specialized expertise in various
                areas of physiotherapy. The program emphasizes a comprehensive
                approach to rehabilitation education, ensuring graduates are
                well-prepared for specialized roles in clinical practice,
                research, and academic settings. Throughout the course, students
                are trained to practice evidence-based physiotherapy with
                compassion and respect, prioritizing patient dignity and
                well-being while operating within professional, ethical, and
                legal frameworks.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 rounded-lg border border-brand-blue/20 bg-brand-blue/5"
              >
                <Heart className="h-5 w-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground font-body">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="px-3 py-8 bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-green/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Program Specializations
            </h2>
            <p className="text-foreground/80 font-body max-w-3xl">
              Choose from diverse specialization areas to focus your advanced
              physiotherapy education and career development.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 rounded-lg border border-brand-blue/20 bg-brand-blue/10 backdrop-blur-sm">
              <h3 className="font-display text-lg mb-2 text-brand-blue">
                Sports & Musculo Skeletal
              </h3>
              <p className="text-sm text-foreground font-body">
                Advanced practice in sports medicine and musculoskeletal
                rehabilitation with emphasis on athletic performance, injury
                prevention, and functional movement restoration.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-brand-blue/20 bg-brand-blue/10 backdrop-blur-sm">
              <h3 className="font-display text-lg mb-2 text-brand-blue">
                Cardio Pulmonary
              </h3>
              <p className="text-sm text-foreground font-body">
                Specialized rehabilitation for cardiovascular and pulmonary
                conditions with focus on exercise prescription, breathing
                techniques, and patient education for chronic disease
                management.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-brand-blue/20 bg-brand-blue/10 backdrop-blur-sm">
              <h3 className="font-display text-lg mb-2 text-brand-blue">
                Women's Health
              </h3>
              <p className="text-sm text-foreground font-body">
                Advanced physiotherapy in women's health including maternal
                health, pelvic floor dysfunction, and women-specific
                rehabilitation across the lifespan.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-brand-blue/20 bg-brand-blue/10 backdrop-blur-sm">
              <h3 className="font-display text-lg mb-2 text-brand-blue">
                Neuro
              </h3>
              <p className="text-sm text-foreground font-body">
                Specialized neurophysiotherapy focusing on conditions affecting
                the nervous system, movement rehabilitation, and functional
                recovery in neurological disorders.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-brand-blue/20 bg-brand-blue/10 backdrop-blur-sm">
              <h3 className="font-display text-lg mb-2 text-brand-blue">
                Community Based Rehabilitation
              </h3>
              <p className="text-sm text-foreground font-body">
                Community-focused physiotherapy addressing public health
                initiatives, preventive rehabilitation, and inclusive care for
                underserved populations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="px-3 py-8 bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-green/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Career Pathways & Placements
            </h2>
            <p className="text-foreground/80 font-body max-w-3xl">
              Graduates emerge with the knowledge, skills, and ethical grounding
              necessary to lead in diverse clinical and research settings within
              physiotherapy and rehabilitation.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {careers.map((career, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <div className="flex items-start gap-3">
                  <Trophy className="h-5 w-5 text-brand-blue flex-shrink-0 mt-1" />
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
        className="bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-green/5 px-3 py-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl">
              Explore More at DSU Physiotherapy
            </h2>
            <p className="mt-3 text-sm text-foreground font-body">
              Discover clinical excellence, research initiatives, placements and
              admission pathways
            </p>
          </div>
          <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-4">
            <a
              href="/centre-of-excellence"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 flex items-center justify-center">
                  <Award className="h-12 w-12 text-brand-blue/70 group-hover:text-brand-blue transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-blue transition-colors">
                    Rehabilitation Labs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    State-of-the-art rehabilitation labs and clinical training
                    centers
                  </p>
                </CardContent>
              </Card>
            </a>

            <a
              href="/research"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 flex items-center justify-center">
                  <Microscope className="h-12 w-12 text-brand-blue/70 group-hover:text-brand-blue transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-blue transition-colors">
                    Research & Innovation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    Faculty-led physiotherapy research and healthcare innovation
                  </p>
                </CardContent>
              </Card>
            </a>

            <a
              href="/placements"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 flex items-center justify-center">
                  <GraduationCap className="h-12 w-12 text-brand-blue/70 group-hover:text-brand-blue transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-blue transition-colors">
                    Placements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    Career pathways with leading hospitals and rehabilitation
                    organizations
                  </p>
                </CardContent>
              </Card>
            </a>

            <a
              href="https://admissions.dsu.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 flex items-center justify-center">
                  <Heart className="h-12 w-12 text-brand-blue/70 group-hover:text-brand-blue transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-blue transition-colors">
                    Admissions
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p className="text-sm text-foreground/80 font-body">
                    Join DSU Physiotherapy and make a difference in
                    rehabilitation
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-brand-blue group-hover:text-brand-blue/80 transition-colors">
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
          <div className="rounded-none border border-brand-blue/20 bg-brand-blue/5 p-10">
            <h3 className="mb-3 font-display text-3xl">
              Ready to advance your physiotherapy career?
            </h3>
            <p className="mb-6 text-foreground font-body">
              Explore the M.P.T program, take a virtual tour and begin your
              journey towards physiotherapy leadership and excellence at DSU
              College of Physiotherapy.
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

function CurriculumLibraryComponent() {
  const programs = getCurriculumByDepartment("Health Sciences", "Physiotherapy");
  return (
    <CurriculumLibrary
      programs={programs}
      themeColor="blue"
      description="Access comprehensive curriculum documentation, specialization details, learning outcomes, and downloadable syllabus for the M.P.T program."
    />
  );
}
