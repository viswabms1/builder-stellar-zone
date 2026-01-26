import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NewsSection } from "@/components/NewsSection";
import { EventsSection } from "@/components/EventsSection";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import {
  Pill,
  Beaker,
  Brain,
  Microscope,
  GraduationCap,
  Trophy,
  Award,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default function MPharm() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const specializations = [
    {
      name: "Pharmaceutics",
      icon: Beaker,
      description:
        "Study of quantitative aspects of drug delivery and dosage form development",
      highlights: [
        "Drug formulation and delivery systems",
        "Novel drug delivery technologies",
        "Quality control and assurance",
        "Manufacturing processes",
      ],
      link: "/academics/health-sciences/m-pharm-pharmaceutics",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop",
    },
    {
      name: "Pharmacology",
      icon: Brain,
      description:
        "Pre-clinical evaluation of drug candidates and mechanisms of action",
      highlights: [
        "Pre-clinical drug evaluation",
        "Cardiovascular pharmacology",
        "Gastrointestinal pharmacology",
        "Neurological pharmacology",
      ],
      link: "/academics/health-sciences/m-pharm-pharmacology",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative w-full overflow-hidden" id="top">
        <div className="relative w-full h-[55vh] md:h-[70vh]">
          <img
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1600&auto=format&fit=crop"
            alt="M.Pharm Master of Pharmacy"
            className="w-full h-full object-cover"
            style={{
              filter: "brightness(1.1) contrast(1.1) saturate(1.15)",
            }}
          />
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="hero-title-inside absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between p-3 sm:p-6 max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 rounded-full border border-white/20 mb-4 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white font-display">
                  Master of Pharmacy Programs
                </span>
              </div>
              <p className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-1 sm:mb-4 uppercase tracking-widest font-display">
                M.Pharm
              </p>
              <h1 className="text-xs sm:text-base md:text-base text-white/80 mb-2 sm:mb-6 leading-tight font-display">
                Advanced Pharmaceutical Sciences & Research
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
            M.Pharm
          </p>
          <h1 className="text-xs sm:text-base md:text-base text-foreground/80 mb-2 sm:mb-6 leading-tight font-display">
            Advanced Pharmaceutical Sciences & Research
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
                Master of Pharmacy (M.Pharm)
              </h2>
              <p className="text-foreground/80 font-body mb-4">
                The M.Pharm is a comprehensive 2-year postgraduate program
                designed to provide advanced knowledge and research skills in
                pharmaceutical sciences. The program offers specializations in
                two key areas: Pharmaceutics and Pharmacology.
              </p>
              <p className="text-foreground/80 font-body">
                Choose your specialization based on your interests in drug
                formulation and delivery or pre-clinical drug evaluation and
                mechanism studies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="px-3 py-8 bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Choose Your Specialization
            </h2>
            <p className="text-foreground/80 font-body max-w-3xl">
              Select the M.Pharm specialization that matches your career goals
              and interests
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {specializations.map((spec, i) => {
              const SpecIcon = spec.icon;
              return (
                <RouterLink
                  key={i}
                  to={spec.link}
                  className="group overflow-hidden rounded-lg border border-border/40 bg-card/60 backdrop-blur-sm hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden bg-slate-200 dark:bg-slate-800">
                    <img
                      src={spec.image}
                      alt={spec.name}
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center gap-3 text-white">
                        <SpecIcon className="h-6 w-6" />
                        <h3 className="font-display text-xl font-bold">
                          {spec.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-sm text-foreground/80 font-body mb-4">
                      {spec.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {spec.highlights.map((highlight, j) => (
                        <div
                          key={j}
                          className="flex items-start gap-2 text-sm text-foreground/80"
                        >
                          <ChevronRight className="h-4 w-4 text-brand-blue flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-sm font-medium text-brand-blue group-hover:text-brand-blue/80 transition-colors">
                      Explore Specialization
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </RouterLink>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="px-3 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Program Highlights
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 rounded-lg border border-brand-blue/20 bg-brand-blue/5">
              <div className="flex items-start gap-3 mb-3">
                <Pill className="h-6 w-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-semibold text-lg">
                  Advanced Research
                </h3>
              </div>
              <p className="text-sm text-foreground/80">
                Hands-on research experience with state-of-the-art laboratory
                facilities
              </p>
            </div>

            <div className="p-6 rounded-lg border border-brand-blue/20 bg-brand-blue/5">
              <div className="flex items-start gap-3 mb-3">
                <Award className="h-6 w-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-semibold text-lg">
                  Expert Faculty
                </h3>
              </div>
              <p className="text-sm text-foreground/80">
                Learn from experienced pharmacists and researchers with industry
                expertise
              </p>
            </div>

            <div className="p-6 rounded-lg border border-brand-blue/20 bg-brand-blue/5">
              <div className="flex items-start gap-3 mb-3">
                <Microscope className="h-6 w-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-semibold text-lg">
                  Industry Collaboration
                </h3>
              </div>
              <p className="text-sm text-foreground/80">
                Partnership with leading pharmaceutical companies for
                internships and projects
              </p>
            </div>

            <div className="p-6 rounded-lg border border-brand-blue/20 bg-brand-blue/5">
              <div className="flex items-start gap-3 mb-3">
                <GraduationCap className="h-6 w-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-semibold text-lg">
                  Career Placement
                </h3>
              </div>
              <p className="text-sm text-foreground/80">
                Strong placement record with pharmaceutical R&D, hospitals, and
                research institutions
              </p>
            </div>

            <div className="p-6 rounded-lg border border-brand-blue/20 bg-brand-blue/5">
              <div className="flex items-start gap-3 mb-3">
                <Trophy className="h-6 w-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-semibold text-lg">
                  International Standards
                </h3>
              </div>
              <p className="text-sm text-foreground/80">
                Curriculum aligned with global pharmaceutical education
                standards
              </p>
            </div>

            <div className="p-6 rounded-lg border border-brand-blue/20 bg-brand-blue/5">
              <div className="flex items-start gap-3 mb-3">
                <Beaker className="h-6 w-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <h3 className="font-display font-semibold text-lg">
                  Modern Facilities
                </h3>
              </div>
              <p className="text-sm text-foreground/80">
                Access to advanced equipment and technology for research and
                practical training
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Fees */}
      <section className="px-3 py-8 bg-gradient-to-r from-brand-blue/5 via-brand-green/5 to-brand-orange/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Eligibility & Fee Structure
            </h2>
            <p className="text-foreground/80 font-body max-w-3xl mx-auto">
              Comprehensive information about admission requirements, entrance
              codes, and detailed fee structure for M.Pharm programs.
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

      {/* Related Links */}
      <section className="px-3 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl">
              Explore More at DSU Pharmacy
            </h2>
          </div>
          <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-4">
            <RouterLink
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
                    College overview and all programs
                  </p>
                </CardContent>
              </Card>
            </RouterLink>

            <RouterLink
              to="/academics/health-sciences/b-pharm"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 flex items-center justify-center">
                  <GraduationCap className="h-12 w-12 text-brand-blue/70 group-hover:text-brand-blue transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-blue transition-colors">
                    B.Pharm Program
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    4-year undergraduate pharmacy program
                  </p>
                </CardContent>
              </Card>
            </RouterLink>

            <RouterLink
              to="/academics/health-sciences/pharm-d"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 flex items-center justify-center">
                  <Award className="h-12 w-12 text-brand-blue/70 group-hover:text-brand-blue transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-blue transition-colors">
                    Pharm.D Program
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    6-year doctoral pharmacy program
                  </p>
                </CardContent>
              </Card>
            </RouterLink>

            <a
              href="https://admissions.dsu.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 flex items-center justify-center">
                  <Beaker className="h-12 w-12 text-brand-blue/70 group-hover:text-brand-blue transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-blue transition-colors">
                    Admissions
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p className="text-sm text-foreground/80 font-body">
                    Apply to DSU Pharmacy programs
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
              Ready to advance your pharmaceutical career?
            </h3>
            <p className="mb-6 text-foreground font-body">
              Choose your M.Pharm specialization and begin your journey at DSU
              College of Pharmaceutical Sciences.
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

      <AnnouncementBanner priority="high" variant="banner" />
      <NewsSection variant="grid" title="Department News" />
      <EventsSection variant="upcoming" title="Upcoming Events" />
    </div>
  );
}
