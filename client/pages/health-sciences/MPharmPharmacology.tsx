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
  Beaker,
  Users,
  Microscope,
  GraduationCap,
  Trophy,
  Award,
  ChevronDown,
  ChevronRight,
  Download,
  Heart,
  Brain,
  BookOpen,
} from "lucide-react";

export default function MPharmPharmacology() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const highlights = [
    "Comprehensive 2-year postgraduate program in Pharmacology focused on pre-clinical drug evaluation",
    "Research in cardiovascular, gastrointestinal and neurological pharmacology",
    "Well-established animal house facilities and well-equipped research laboratories",
    "Screening of new chemical entities and herbal drugs for therapeutic activities",
    "Understanding of drug mechanisms of action and therapeutic effects",
    "Interdisciplinary approach combining cell biology, biochemistry, molecular biology and genetics",
  ];

  const researchAreas = [
    "Cardiovascular Pharmacology - Blood pressure regulation and heart disease treatment",
    "Gastrointestinal Pharmacology - Stomach ailments and digestive system disorders",
    "Neurological Pharmacology - Pain perception and neurological disease management",
    "Screening Natural Products - Herbal drug evaluation and characterization",
    "Synthetic Drug Development - Chemical entity synthesis and testing",
    "Drug Mechanism Studies - Understanding how drugs interact with biological systems",
  ];

  const pharmacologyFocus = [
    "Screening for Desired Activity - Identifying therapeutic potential of drug candidates",
    "Determining Mode of Action - Understanding mechanisms of drug action",
    "Quantifying Drug Activity - Measuring efficacy when chemical methods are unavailable",
    "Drug-Receptor Interactions - Studying drug binding and cellular responses",
    "Toxicology Assessment - Evaluating safety and adverse effects",
    "Clinical Relevance - Translating preclinical findings to patient care",
  ];

  const careers = [
    "Pharmacologist → Senior Pharmacologist → Principal Investigator in pharmaceutical research",
    "Pre-clinical Research Scientist → Director of Pharmacology in pharmaceutical companies",
    "Drug Development Specialist → Head of Drug Evaluation and Development",
    "Regulatory Pharmacology Expert in pharmaceutical industry and agencies",
    "Academic roles in pharmacy colleges and medical research institutions",
    "Hospital Clinical Pharmacologist → Therapeutic Drug Monitoring Specialist",
    "International research career opportunities (₹18-40 LPA+)",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative w-full overflow-hidden" id="top">
        <div className="relative w-full h-[55vh] md:h-[70vh]">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop"
            alt="M.Pharm Pharmacology"
            className="w-full h-full object-cover"
            style={{
              filter: "brightness(1.1) contrast(1.1) saturate(1.15)",
            }}
          />
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="hero-title-inside absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between p-3 sm:p-6 max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              <p className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-1 sm:mb-4 uppercase tracking-widest font-display">
                M.Pharm Pharmacology
              </p>
              <h1 className="text-xs sm:text-base md:text-base text-white/80 mb-2 sm:mb-6 leading-tight font-display">
                Advancing Drug Discovery & Pre-clinical Pharmacology Research
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
            M.Pharm Pharmacology
          </p>
          <h1 className="text-xs sm:text-base md:text-base text-foreground/80 mb-2 sm:mb-6 leading-tight font-display">
            Advancing Drug Discovery & Pre-clinical Pharmacology Research
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
                The M.Pharm Pharmacology program is a comprehensive 2-year
                postgraduate course focused on pre-clinical evaluation of
                candidate molecules of both natural and synthetic origin. The
                Department of Pharmacology is actively conducting research in
                screening new chemical entities and herbal drugs for their
                possible therapeutic activities, which can be exploited in
                developing clinically useful drug molecules.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 rounded-lg border border-brand-blue/20 bg-brand-blue/5"
              >
                <Beaker className="h-5 w-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground font-body">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="px-3 py-8 bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Research Areas
            </h2>
            <p className="text-foreground/80 font-body max-w-3xl">
              The department specializes in pre-clinical evaluation across
              multiple therapeutic areas
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((area, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border border-brand-blue/20 bg-brand-blue/5"
              >
                <div className="flex items-start gap-3">
                  {i === 0 && (
                    <Heart className="h-5 w-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  )}
                  {i === 1 && (
                    <Microscope className="h-5 w-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  )}
                  {i === 2 && (
                    <Brain className="h-5 w-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  )}
                  {i === 3 && (
                    <BookOpen className="h-5 w-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  )}
                  {i === 4 && (
                    <Beaker className="h-5 w-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  )}
                  {i === 5 && (
                    <Award className="h-5 w-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  )}
                  <p className="text-sm font-semibold text-foreground">
                    {area}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pharmacology Fundamentals */}
      <section className="px-3 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Understanding Pharmacology
            </h2>
            <p className="text-foreground/80 font-body max-w-3xl mb-8">
              Pharmacology is the study of how drugs work. It analyzes the
              mechanisms that drugs employ to bring about their therapeutic
              effects and deals with the effects of drugs on living organisms
              and their components.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-lg border border-brand-blue/20 bg-brand-blue/5">
              <h3 className="font-display font-semibold mb-3 text-lg">
                Fundamental Principle
              </h3>
              <p className="text-foreground/80 font-body">
                Drugs act as healing agents and are effective because they mimic
                or block molecules that control natural processes like blood
                pressure, organ development, and pain perception. Examples of
                important medicines include antibacterial drugs, anti-cancer
                drugs, and anti-migraine agents.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-brand-blue/20 bg-brand-blue/5">
              <h3 className="font-display font-semibold mb-3 text-lg">
                Interdisciplinary Approach
              </h3>
              <p className="text-foreground/80 font-body">
                Pharmacology makes use of information from many branches of
                sciences such as cell biology, biochemistry, molecular biology,
                and genetics to discover new ways to treat diseases. This
                interdisciplinary approach allows researchers to assimilate
                different scientific perspectives in the study of how drugs act
                and how to improve them.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-brand-blue/20 bg-brand-blue/5">
              <h3 className="font-display font-semibold mb-3 text-lg">
                Molecular Understanding
              </h3>
              <p className="text-foreground/80 font-body">
                Pharmacology deals with the effects of drugs on cells,
                membranes, enzymes and DNA. Understanding how drugs interact at
                the molecular level is crucial for developing more effective
                therapeutics and predicting potential side effects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pharmacologist Responsibilities */}
      <section className="px-3 py-8 bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Pharmacologist Responsibilities
            </h2>
            <p className="text-foreground/80 font-body max-w-3xl">
              Key responsibilities in the search for and development of new
              medicines
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pharmacologyFocus.map((responsibility, i) => (
              <div
                key={i}
                className="p-4 rounded-lg border border-brand-blue/20 bg-brand-blue/5"
              >
                <div className="flex items-start gap-3">
                  <Pill className="h-5 w-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-semibold text-foreground">
                    {responsibility}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="px-3 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Career Pathways & Placements
            </h2>
            <p className="text-foreground/80 font-body max-w-3xl">
              M.Pharm Pharmacology graduates are highly sought-after in
              pharmaceutical research, academia, and clinical settings with
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

      {/* Eligibility & Fees */}
      <section className="px-3 py-8 bg-gradient-to-r from-brand-blue/5 via-brand-green/5 to-brand-orange/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Eligibility & Fee Structure
            </h2>
            <p className="text-foreground/80 font-body max-w-3xl mx-auto">
              Comprehensive information about admission requirements, entrance
              codes, and detailed fee structure for the M.Pharm Pharmacology
              program.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <a
              href="/eligibility?school=School%20of%20Health%20Sciences&program=M.Pharm"
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
                    Research Facilities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    State-of-the-art animal house and research laboratories
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
                    Pre-clinical drug evaluation and research initiatives
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
                  <Brain className="h-12 w-12 text-brand-blue/70 group-hover:text-brand-blue transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-blue transition-colors">
                    Admissions
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p className="text-sm text-foreground/80 font-body">
                    Join DSU M.Pharm Pharmacology and advance your career
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
              Ready to advance drug discovery and development?
            </h3>
            <p className="mb-6 text-foreground font-body">
              Explore the M.Pharm Pharmacology program, take a virtual tour and
              begin your journey at DSU College of Pharmaceutical Sciences.
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
      id: "mpharm-pharma",
      label: "M.Pharm Pharmacology Curriculum",
      description:
        "2-year postgraduate program focusing on pre-clinical pharmacology, drug evaluation, and mechanism of action studies",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary:
            "Latest curriculum covering pharmacology fundamentals, pre-clinical drug evaluation, cardiovascular, gastrointestinal and neurological pharmacology, research methodology across 4 semesters",
          documentUrl:
            "https://www.dsu.edu.in/images/HealthSciences/pharmacy/MPharm-Pharmacology-Curriculum-2025-26.pdf",
        },
        {
          year: "2024-25",
          summary:
            "Previous curriculum batch with comprehensive pharmacology theory and pre-clinical research training",
          documentUrl:
            "https://www.dsu.edu.in/images/HealthSciences/pharmacy/MPharm-Pharmacology-Curriculum-2024-25.pdf",
        },
      ],
    },
  ];

  return (
    <section className="px-3 py-8 bg-gradient-to-r from-brand-blue/5 via-brand-green/5 to-brand-orange/5">
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
            Download M.Pharm Pharmacology curriculum for different academic
            batches
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
                  className={`h-5 w-5 text-brand-blue transition-transform flex-shrink-0 ml-4 ${
                    openProgram === program.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openProgram === program.id && (
                <div className="mt-2 space-y-2">
                  {program.batches.map((batch) => (
                    <div
                      key={batch.year}
                      className="rounded-lg border border-brand-blue/20 bg-brand-blue/5 p-4"
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
                            className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-brand-blue/20 px-3 py-1.5 text-xs font-semibold text-brand-blue hover:bg-brand-blue/30 transition-colors flex-shrink-0"
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
