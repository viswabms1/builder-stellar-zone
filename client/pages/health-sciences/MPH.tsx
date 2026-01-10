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
  Activity,
  ShieldAlert,
  Globe,
  Database,
  BarChart3,
  Scale,
  DollarSign,
  PieChart,
} from "lucide-react";

export default function MPH() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const specializations = [
    { icon: BarChart3, label: "Biostatistics" },
    { icon: ShieldAlert, label: "Epidemiology" },
    { icon: Activity, label: "Environmental Health" },
    { icon: Database, label: "Health Informatics" },
    { icon: Globe, label: "Global Health" },
    { icon: Scale, label: "Health Policy" },
  ];

  const highlights = [
    "Comprehensive study of disease epidemiology and health determinants",
    "Bridging the gap between clinical and managerial aspects of healthcare",
    "Focus on public policy making and healthcare program management",
    "Advanced training in health economics and finance",
    "Special emphasis on emerging global health challenges",
    "Techno-managerial training for modern healthcare systems",
  ];

  const curriculumItems = [
    "Biostatistics",
    "Epidemiology",
    "Environmental & Occupational Health",
    "Public Health Informatics",
    "Public Health in Rural & Urban areas",
    "Health Policy",
    "Health Economics",
    "Health Finance",
    "Public Health Nutrition",
    "Global Health & Diseases",
  ];

  const careers = [
    "Public Health Specialist → Health Policy Analyst → Health Administrator",
    "Epidemiologist → Research Director → Public Health Consultant",
    "Program Manager in NGOs/International Agencies (WHO, UNICEF, etc.)",
    "Academic Faculty → Researcher → Public Health Educator",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative w-full overflow-hidden" id="top">
        <div className="relative w-full h-[55vh] md:h-[70vh]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F0119480c4dc44173b0cb713cdd4d9176?format=webp&width=800"
            alt="Masters in Public Health (MPH)"
            className="w-full h-full object-cover"
            style={{
              filter: "brightness(0.9) contrast(1.1) saturate(1.1)",
            }}
          />
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="hero-title-inside absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between p-3 sm:p-6 max-w-7xl mx-auto w-full">
            <div className="max-w-3xl">
              <p className="text-lg sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1 sm:mb-4 uppercase tracking-widest font-display">
                Masters in Public Health (MPH)
              </p>
              <h1 className="text-xs sm:text-base md:text-lg text-white/90 mb-2 sm:mb-6 leading-tight font-display max-w-2xl">
                Bridging clinical expertise with managerial leadership for global healthcare impact.
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
        <div className="hero-title-outside max-w-3xl">
          <p className="text-lg sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-1 sm:mb-4 uppercase tracking-widest font-display">
            Masters in Public Health (MPH)
          </p>
          <h1 className="text-xs sm:text-base md:text-lg text-foreground/80 mb-2 sm:mb-6 leading-tight font-display">
            Bridging clinical expertise with managerial leadership for global healthcare impact.
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
            <div className="max-w-4xl">
              <h2 className="font-display text-3xl md:text-4xl mb-6">
                Program Overview
              </h2>
              <div className="space-y-4 text-foreground/80 font-body text-lg leading-relaxed">
                <p>
                  Public health programs demand special emphasis on studying disease epidemiology, various determinants of health, and emerging challenges in health, public policy making, and program management.
                </p>
                <p>
                  Public health professionals help in bridging the gap between the clinical and managerial aspects of program implementation and provide techno – managerial inputs. The curriculum is designed to prepare professionals who can lead health initiatives and manage complex health systems with technical excellence and strategic vision.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 rounded-lg border border-brand-blue/20 bg-brand-blue/5"
              >
                <ShieldAlert className="h-5 w-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground font-body">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="px-3 py-12 bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4 text-center">
              Curriculum Highlights
            </h2>
            <p className="text-foreground/80 font-body max-w-3xl mx-auto text-center">
              Our comprehensive curriculum covers the full spectrum of public health disciplines, from core sciences to advanced policy and management.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {curriculumItems.map((item, i) => (
              <Card key={i} className="border-brand-blue/20 bg-card/50 backdrop-blur-sm hover:border-brand-blue transition-colors duration-300">
                <CardContent className="p-4 flex flex-col items-center text-center justify-center h-full">
                  <p className="font-display text-sm font-semibold">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Icons */}
      <section className="px-3 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {specializations.map((spec, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="p-4 rounded-full bg-brand-blue/10 text-brand-blue">
                  <spec.icon className="h-8 w-8" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-center font-display">{spec.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="px-3 py-12 bg-brand-blue/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Career Pathways & Global Impact
            </h2>
            <p className="text-foreground/80 font-body max-w-3xl">
              MPH graduates are prepared for leadership roles in government health departments, international organizations, and private healthcare consulting.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {careers.map((career, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border border-border/50 bg-card/80 backdrop-blur-sm flex items-start gap-4"
              >
                <Trophy className="h-6 w-6 text-brand-orange flex-shrink-0" />
                <p className="text-sm md:text-base text-foreground font-body">{career}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-3 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-2xl border-2 border-brand-blue/30 bg-card p-10 shadow-xl">
            <h3 className="mb-3 font-display text-3xl">
              Become a Leader in Global Health
            </h3>
            <p className="mb-8 text-foreground/80 font-body text-lg">
              Join our Master of Public Health program and gain the techno-managerial skills to transform healthcare delivery and policy on a global scale.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://admissions.dsu.edu.in/"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="bg-brand-gradient text-foreground px-8 py-6 text-lg font-bold rounded-full">
                  Start Your Application
                  <GraduationCap className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a
                href="/academics/health-sciences/allied-health"
              >
                <Button variant="outline" className="px-8 py-6 text-lg font-bold rounded-full border-brand-blue text-brand-blue">
                  Explore More Programs
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
