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
import { DepartmentNoticeBoard } from "@/components/DepartmentNoticeBoard";
import { CurriculumLibrary } from "@/components/CurriculumLibrary";
import { getCurriculumByDepartment } from "@/lib/content-manager";
import {
  Pill,
  Beaker,
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
  FlaskConical,
  Droplets,
} from "lucide-react";

export default function BPharm() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const specializations = [
    { icon: Pill, label: "Pharmaceutical Chemistry" },
    { icon: Beaker, label: "Pharmaceutics" },
    { icon: FlaskConical, label: "Pharmacology" },
    { icon: Droplets, label: "Pharmacognosy" },
    { icon: Microscope, label: "Drug Analysis" },
    { icon: Award, label: "Clinical Practice" },
  ];

  const highlights = [
    "Comprehensive 4-year undergraduate program integrating pharmaceutical theory and practice",
    "Practical training in synthesis, formulation, and analysis of pharmaceutical agents",
    "State-of-the-art pharmaceutical laboratories with advanced analytical equipment",
    "Pharmacological screening and biological standardization expertise",
    "In vivo drug interaction studies and clinical pharmacology exposure",
    "Industry internships at leading pharmaceutical companies with GMP-certified facilities",
  ];

  const careers = [
    "Pharmacist → Senior Pharmacist → Pharmacy Manager → Clinical Pharmacy Specialist",
    "Pharmaceutical Scientist → Research Scientist → Principal Scientist in R&D",
    "Quality Assurance & Regulatory Affairs roles in pharmaceutical industry",
    "Hospital pharmacy practice and clinical pharmacy opportunities",
    "Pharmaceutical Manufacturing & Process Development roles",
    "International career opportunities in pharma (₹15-35 LPA+)",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative w-full overflow-hidden" id="top">
        <div className="relative w-full h-[55vh] md:h-[70vh]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F2770dad2caf847da87a223aa1d2f908e?format=webp&width=800&height=1200"
            alt="B.Pharm Pharmaceutical Sciences"
            className="w-full h-full object-cover"
            style={{
              filter: "brightness(1.1) contrast(1.1) saturate(1.15)",
            }}
          />
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="hero-title-inside absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between p-3 sm:p-6 max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              <p className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-1 sm:mb-4 uppercase tracking-widest font-display">
                B.Pharm Pharmacy
              </p>
              <h1 className="text-xs sm:text-base md:text-base text-white/80 mb-2 sm:mb-6 leading-tight font-display">
                Excellence in Drug Discovery & Pharmaceutical Sciences
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
            B.Pharm Pharmacy
          </p>
          <h1 className="text-xs sm:text-base md:text-base text-foreground/80 mb-2 sm:mb-6 leading-tight font-display">
            Excellence in Drug Discovery & Pharmaceutical Sciences
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
                The B.Pharm (Bachelor of Pharmacy) is a 4-year undergraduate
                course which imparts adequate knowledge and scientific
                information in broad areas of pharmacy such as pharmaceutical
                chemistry, pharmaceutics, pharmacology and pharmacognosy.
                Students learn practical aspects of synthesis, formulation and
                analysis of various pharmaceutical and herbal medicinal agents,
                pharmacological screening, biological standardization and in
                vivo drug interaction.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 rounded-lg border border-brand-blue/20 bg-brand-blue/5"
              >
                <Pill className="h-5 w-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground font-body">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Areas of Study */}
      <section className="px-3 py-8 bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Core Areas of Study
            </h2>
            <p className="text-foreground/80 font-body max-w-3xl">
              Comprehensive pharmaceutical education across key disciplines
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 rounded-lg border border-brand-blue/20 bg-brand-blue/5">
              <div className="flex items-start gap-4">
                <Pill className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display font-semibold mb-2">
                    Pharmaceutical Chemistry
                  </h3>
                  <p className="text-sm text-foreground/80">
                    Synthesis, structure-activity relationships, and analysis of
                    pharmaceutical compounds
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-brand-blue/20 bg-brand-blue/5">
              <div className="flex items-start gap-4">
                <Beaker className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display font-semibold mb-2">
                    Pharmaceutics
                  </h3>
                  <p className="text-sm text-foreground/80">
                    Formulation, drug delivery systems, and dosage form
                    development
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-brand-blue/20 bg-brand-blue/5">
              <div className="flex items-start gap-4">
                <FlaskConical className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display font-semibold mb-2">
                    Pharmacology
                  </h3>
                  <p className="text-sm text-foreground/80">
                    Drug action, pharmacological screening, and therapeutic
                    applications
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-brand-blue/20 bg-brand-blue/5">
              <div className="flex items-start gap-4">
                <Droplets className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display font-semibold mb-2">
                    Pharmacognosy
                  </h3>
                  <p className="text-sm text-foreground/80">
                    Natural products, herbal medicines, and plant-derived
                    pharmaceuticals
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-brand-blue/20 bg-brand-blue/5">
              <div className="flex items-start gap-4">
                <Microscope className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display font-semibold mb-2">
                    Pharmaceutical Analysis
                  </h3>
                  <p className="text-sm text-foreground/80">
                    Quality control, analytical methods, and pharmaceutical
                    testing
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-brand-blue/20 bg-brand-blue/5">
              <div className="flex items-start gap-4">
                <Award className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display font-semibold mb-2">
                    Clinical Pharmacy
                  </h3>
                  <p className="text-sm text-foreground/80">
                    Patient care, drug interactions, and therapeutic drug
                    monitoring
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="px-3 py-8 bg-gradient-to-r from-brand-blue/5 via-brand-green/5 to-brand-orange/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Career Pathways & Placements
            </h2>
            <p className="text-foreground/80 font-body max-w-3xl">
              B.Pharm graduates are highly sought-after in pharmaceutical
              industries, hospitals, research institutions, and regulatory
              bodies with excellent placement opportunities.
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
      <CurriculumLibraryComponent />

      {/* Eligibility & Fees */}
      <section className="px-3 py-8 bg-gradient-to-r from-brand-blue/5 via-brand-green/5 to-brand-orange/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Eligibility & Fee Structure
            </h2>
            <p className="text-foreground/80 font-body max-w-3xl mx-auto">
              Comprehensive information about admission requirements, entrance
              codes, and detailed fee structure for the B.Pharm program.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <a
              href="/eligibility?school=School%20of%20Health%20Sciences&program=B.Pharm"
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
        className="bg-gradient-to-r from-brand-blue/5 via-brand-green/5 to-brand-orange/5 px-3 py-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl">
              Explore More at DSU Pharmacy
            </h2>
            <p className="mt-3 text-sm text-foreground font-body">
              Discover pharmaceutical research, industry partnerships,
              placements and admission pathways
            </p>
          </div>
          <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-4">
            <Link
              to="/academics/health-sciences/pharmacy"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 flex items-center justify-center">
                  <Pill className="h-12 w-12 text-brand-blue/70 group-hover:text-brand-blue transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-blue transition-colors">
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
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 flex items-center justify-center">
                  <Award className="h-12 w-12 text-brand-blue/70 group-hover:text-brand-blue transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-blue transition-colors">
                    Pharmaceutical Labs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    State-of-the-art research and pharmaceutical laboratories
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
                    Drug discovery and pharmaceutical research initiatives
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
                  <Pill className="h-12 w-12 text-brand-blue/70 group-hover:text-brand-blue transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-blue transition-colors">
                    Admissions
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p className="text-sm text-foreground/80 font-body">
                    Join DSU B.Pharm and advance pharmaceutical innovation
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
              Ready to launch your pharmacy career?
            </h3>
            <p className="mb-6 text-foreground font-body">
              Explore the B.Pharm program, take a virtual tour and begin your
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

      <DepartmentNoticeBoard school="Health Sciences" department="Pharmacy" />
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
  const programs = getCurriculumByDepartment("Health Sciences", "Pharmacy");
  return (
    <CurriculumLibrary
      programs={programs}
      themeColor="blue"
      description="Access comprehensive curriculum documentation, course structures, learning outcomes, and downloadable syllabus for the B.Pharm program."
    />
  );
}
