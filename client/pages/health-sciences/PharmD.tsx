import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Pill,
  Stethoscope,
  Users,
  Microscope,
  GraduationCap,
  Trophy,
  Award,
  ChevronDown,
  ChevronRight,
  Download,
  Heart,
  AlertCircle,
  Clipboard,
} from "lucide-react";

export default function PharmD() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const highlights = [
    "Comprehensive 6-year professional doctoral program in pharmaceutical care and clinical pharmacy",
    "Meeting the growing needs and expectations of patients and medical community globally and nationally",
    "Ward round participation, ADR reporting, and drug interaction management",
    "Patient counselling, drug and poison information services",
    "Clinical intervention and pharmaceutical research opportunities",
    "Top-class infrastructure enabling development of clinical skills and professionalism",
  ];

  const activities = [
    "Ward round participation and patient care involvement",
    "Adverse Drug Reaction (ADR) monitoring and reporting",
    "Drug interaction checking and clinical assessment",
    "Comprehensive patient counselling and medication therapy",
    "Medical history interview and patient consultation",
    "Drug and poison information services",
    "Clinical intervention and therapeutic optimization",
    "Healthcare research and pharmaceutical innovation",
  ];

  const careers = [
    "Clinical Pharmacist → Senior Clinical Pharmacist → Clinical Pharmacy Manager",
    "Hospital Pharmacy Specialist → Director of Pharmacy Services",
    "Pharmaceutical Researcher → Senior Research Pharmacist",
    "Regulatory Affairs & Compliance roles in pharmaceutical industry",
    "Drug Information Specialist → Poison Information Center Manager",
    "Community Pharmacy Practice with Advanced Clinical Services",
    "International career opportunities in clinical pharmacy (₹20-40 LPA+)",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative w-full overflow-hidden" id="top">
        <div className="relative w-full h-[55vh] md:h-[70vh]">
          <img
            src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1600&auto=format&fit=crop"
            alt="Pharm.D Clinical Pharmacy"
            className="w-full h-full object-cover"
            style={{
              filter: "brightness(1.1) contrast(1.1) saturate(1.15)",
            }}
          />
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="hero-title-inside absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between p-3 sm:p-6 max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              <p className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-1 sm:mb-4 uppercase tracking-widest font-display">
                Pharm.D Pharmacy
              </p>
              <h1 className="text-xs sm:text-base md:text-base text-white/80 mb-2 sm:mb-6 leading-tight font-display">
                Advancing Clinical Pharmacy & Patient Care Excellence
              </h1>
            </div>

            {/* Buttons inside video - visible on md and up */}
            <div className="hidden md:flex flex-col gap-2 sm:gap-4">
              <a
                href="https://admissions.dsu.edu.in/"
                target="_blank"
                rel="noreferrer"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Button
                  size="sm"
                  className="sm:size-lg bg-white hover:bg-white/90 text-brand-magenta hover:text-brand-magenta/80 px-4 sm:px-8 py-2 sm:py-6 text-xs sm:text-base font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
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
                  className="sm:size-lg bg-white hover:bg-white/90 text-brand-magenta hover:text-brand-magenta/80 px-4 sm:px-8 py-2 sm:py-6 text-xs sm:text-base font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
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
            Pharm.D Pharmacy
          </p>
          <h1 className="text-xs sm:text-base md:text-base text-foreground/80 mb-2 sm:mb-6 leading-tight font-display">
            Advancing Clinical Pharmacy & Patient Care Excellence
          </h1>
        </div>

        {/* Buttons below video - visible only on mobile */}
        <div className="flex md:hidden flex-row gap-2 sm:gap-4">
          <a
            href="https://admissions.dsu.edu.in/"
            target="_blank"
            rel="noreferrer"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Button
              size="sm"
              className="sm:size-lg bg-white hover:bg-white/90 text-brand-magenta hover:text-brand-magenta/80 px-4 sm:px-8 py-2 sm:py-6 text-xs sm:text-base font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
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
              className="sm:size-lg bg-white hover:bg-white/90 text-brand-magenta hover:text-brand-magenta/80 px-4 sm:px-8 py-2 sm:py-6 text-xs sm:text-base font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
            >
              Virtual Tour
            </Button>
          </a>
        </div>
      </div>

      {/* Program Overview */}
      <section id="overview" className="relative overflow-hidden px-3 py-8">
        <div
          className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-brand-magenta/20 via-transparent to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                Program Overview
              </h2>
              <p className="text-foreground/80 font-body">
                Pharm.D (Doctor of Pharmacy) is a professional 6-year pharmacy
                doctoral program after 10+2 with the objectives of meeting the
                growing needs and expectations of the patient and the medical
                community both globally and nationally. The program focuses on
                advancing clinical pharmacy practice, pharmaceutical care
                delivery, and professional excellence in healthcare.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 rounded-lg border border-brand-magenta/20 bg-brand-magenta/5"
              >
                <Pill className="h-5 w-5 text-brand-magenta flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground font-body">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Objectives */}
      <section className="px-3 py-8 bg-gradient-to-r from-brand-magenta/5 via-brand-blue/5 to-brand-orange/5">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Program Objectives
            </h2>
            <p className="text-foreground/80 font-body max-w-3xl">
              The Pharm.D program is designed to develop future leaders in
              pharmacy practice and healthcare
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 rounded-lg border border-brand-magenta/20 bg-brand-magenta/5">
              <div className="flex items-start gap-4">
                <GraduationCap className="h-6 w-6 text-brand-magenta flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display font-semibold mb-2">
                    Professional Educational Excellence
                  </h3>
                  <p className="text-sm text-foreground/80">
                    Providing professional educational opportunities for
                    students to enable them to practice comprehensive
                    pharmaceutical care and adapt to changing professional roles
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-brand-magenta/20 bg-brand-magenta/5">
              <div className="flex items-start gap-4">
                <Heart className="h-6 w-6 text-brand-magenta flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display font-semibold mb-2">
                    Pharmaceutical Care Practice
                  </h3>
                  <p className="text-sm text-foreground/80">
                    Meeting the growing needs and expectations of patients,
                    society, and healthcare systems both nationally and globally
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-brand-magenta/20 bg-brand-magenta/5">
              <div className="flex items-start gap-4">
                <Clipboard className="h-6 w-6 text-brand-magenta flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display font-semibold mb-2">
                    Clinical Skills Development
                  </h3>
                  <p className="text-sm text-foreground/80">
                    Developing clinical skills, attitudes, responsibility, and
                    professionalism to become future leaders of the healthcare
                    profession
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-brand-magenta/20 bg-brand-magenta/5">
              <div className="flex items-start gap-4">
                <Microscope className="h-6 w-6 text-brand-magenta flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display font-semibold mb-2">
                    Research & Innovation
                  </h3>
                  <p className="text-sm text-foreground/80">
                    Using new technologies and contributing new knowledge to the
                    profession through research and clinical practice
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Activities */}
      <section className="px-3 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Department Activities & Services
            </h2>
            <p className="text-foreground/80 font-body max-w-3xl">
              Comprehensive patient care services covering the entire spectrum
              of pharmaceutical practice
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {activities.map((activity, i) => (
              <div
                key={i}
                className="p-4 rounded-lg border border-brand-magenta/20 bg-brand-magenta/5"
              >
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-brand-magenta flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground font-body">
                    {activity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="px-3 py-8 bg-gradient-to-r from-brand-magenta/5 via-brand-green/5 to-brand-orange/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Career Pathways & Placements
            </h2>
            <p className="text-foreground/80 font-body max-w-3xl">
              Pharm.D graduates are highly sought-after in hospitals, clinical
              practice, pharmaceutical industry, and research institutions with
              excellent career advancement opportunities.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {careers.map((career, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <div className="flex items-start gap-3">
                  <Trophy className="h-5 w-5 text-brand-magenta flex-shrink-0 mt-1" />
                  <p className="text-sm text-foreground font-body">{career}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Library */}
      <CurriculumLibrary />

      {/* Eligibility & Fees */}
      <section className="px-3 py-8 bg-gradient-to-r from-brand-magenta/5 via-brand-green/5 to-brand-orange/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Eligibility & Fee Structure
            </h2>
            <p className="text-foreground/80 font-body max-w-3xl mx-auto">
              Comprehensive information about admission requirements, entrance
              codes, and detailed fee structure for the Pharm.D program.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <a
              href="/eligibility?school=School%20of%20Health%20Sciences&program=Pharm.D"
              className="inline-block"
            >
              <Button className="bg-brand-gradient text-foreground px-8 py-6 text-base font-semibold">
                View Eligibility & Fees
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section
        id="related-resources"
        className="bg-gradient-to-r from-brand-magenta/5 via-brand-green/5 to-brand-orange/5 px-3 py-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl">
              Explore More at DSU Pharmacy
            </h2>
            <p className="mt-3 text-sm text-foreground font-body">
              Discover clinical excellence, research initiatives, placements and
              admission pathways
            </p>
          </div>
          <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-4">
            <Link
              to="/academics/health-sciences/pharmacy"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-magenta/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-magenta/20 to-brand-magenta/10 flex items-center justify-center">
                  <Pill className="h-12 w-12 text-brand-magenta/70 group-hover:text-brand-magenta transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-magenta transition-colors">
                    Pharmacy School
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    College of Pharmaceutical Sciences overview and all programs
                  </p>
                </CardContent>
              </Card>
            </Link>

            <a
              href="/centre-of-excellence"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-magenta/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-magenta/20 to-brand-magenta/10 flex items-center justify-center">
                  <Award className="h-12 w-12 text-brand-magenta/70 group-hover:text-brand-magenta transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-magenta transition-colors">
                    Clinical Facilities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    State-of-the-art clinical training centers and healthcare
                    facilities
                  </p>
                </CardContent>
              </Card>
            </a>

            <a
              href="/research"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-magenta/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-magenta/20 to-brand-magenta/10 flex items-center justify-center">
                  <Microscope className="h-12 w-12 text-brand-magenta/70 group-hover:text-brand-magenta transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-magenta transition-colors">
                    Research & Innovation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    Pharmacy research and clinical trial opportunities
                  </p>
                </CardContent>
              </Card>
            </a>

            <a
              href="https://admissions.dsu.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-magenta/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-magenta/20 to-brand-magenta/10 flex items-center justify-center">
                  <Stethoscope className="h-12 w-12 text-brand-magenta/70 group-hover:text-brand-magenta transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-magenta transition-colors">
                    Admissions
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p className="text-sm text-foreground/80 font-body">
                    Join DSU Pharm.D and advance clinical pharmacy excellence
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-brand-magenta group-hover:text-brand-magenta/80 transition-colors">
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
          <div className="rounded-none border border-brand-magenta/20 bg-brand-magenta/5 p-10">
            <h3 className="mb-3 font-display text-3xl">
              Ready to launch your clinical pharmacy career?
            </h3>
            <p className="mb-6 text-foreground font-body">
              Explore the Pharm.D program, take a virtual tour and begin your
              journey at DSU College of Pharmaceutical Sciences.
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
  const [openProgram, setOpenProgram] = React.useState<string | null>(null);

  const programs: CurriculumProgram[] = [
    {
      id: "pharmd",
      label: "Pharm.D Curriculum",
      description:
        "6-year professional doctoral program with clinical pharmacy practice, patient care, and healthcare research",
      image:
        "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=600&h=400&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary:
            "Latest curriculum with comprehensive clinical pharmacy, ward rounds, ADR monitoring, drug interactions, patient counselling, and clinical interventions across all 12 semesters",
          documentUrl:
            "https://www.dsu.edu.in/images/HealthSciences/pharmacy/PharmD-Curriculum-2025-26.pdf",
        },
        {
          year: "2024-25",
          summary:
            "Previous curriculum batch with comprehensive doctoral level pharmaceutical care and clinical practice components",
          documentUrl:
            "https://www.dsu.edu.in/images/HealthSciences/pharmacy/PharmD-Curriculum-2024-25.pdf",
        },
      ],
    },
  ];

  return (
    <section className="px-3 py-8 bg-gradient-to-r from-brand-magenta/5 via-brand-green/5 to-brand-orange/5">
      <div className="mx-auto max-w-6xl space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="headline-2 mb-3 font-display">
              <span className="text-foreground">Curriculum </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Library
              </span>
            </h2>
          </div>
          <div className="text-foreground/70 text-sm">
            Download Pharm.D curriculum for different academic batches
          </div>
        </div>

        <div className="space-y-3">
          {programs.map((program) => (
            <div key={program.id}>
              <button
                onClick={() =>
                  setOpenProgram(openProgram === program.id ? null : program.id)
                }
                className="w-full flex items-start justify-between rounded-lg border border-border/50 bg-card/50 p-4 text-left hover:bg-card/70 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-foreground">
                    {program.label}
                  </h3>
                  <p className="mt-1 text-sm text-foreground/70">
                    {program.description}
                  </p>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-brand-magenta transition-transform flex-shrink-0 ml-4 ${
                    openProgram === program.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openProgram === program.id && (
                <div className="mt-2 space-y-2">
                  {program.batches.map((batch) => (
                    <div
                      key={batch.year}
                      className="rounded-lg border border-brand-magenta/20 bg-brand-magenta/5 p-4"
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {batch.year}
                          </h4>
                          <p className="mt-1 text-sm text-foreground/70">
                            {batch.summary}
                          </p>
                        </div>
                        {batch.documentUrl && (
                          <a
                            href={batch.documentUrl}
                            download
                            className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-brand-magenta/20 px-3 py-1.5 text-xs font-semibold text-brand-magenta hover:bg-brand-magenta/30 transition-colors flex-shrink-0"
                          >
                            <Download className="h-4 w-4" />
                            Download
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
