import { Link as RouterLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Award,
  BadgeCheck,
  CalendarDays,
  ChevronRight,
  ClipboardCheck,
  GraduationCap,
  HeartPulse,
  Microscope,
  Pill,
  Stethoscope,
  Syringe,
  Users,
  Volume2,
  VolumeX,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DeanSection, type DeanInfo } from "@/components/DeanSection";

type Highlight = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  stat?: string;
};

type Programme = {
  name: string;
  level: "UG" | "PG";
  focus: string;
  href?: string;
};

type CalendarEntry = {
  title: string;
  academicYear: string;
  description: string;
  documentUrl: string;
  tag: string;
};

type NewsItem = {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  color: "brand-magenta" | "brand-blue" | "brand-orange";
};

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1580281657521-8a19aa08c8c8?q=80&w=2000&auto=format&fit=crop";

const USP_HIGHLIGHTS: Highlight[] = [
  {
    title: "Integrated Health Ecosystem",
    description:
      "Colleges of Nursing, Pharmaceutical Sciences, Physiotherapy and Allied Health share a collaborative campus with clinical partners.",
    image:
      "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=1600&auto=format&fit=crop",
    icon: ClipboardCheck,
    stat: "4 Constituent Colleges",
  },
  {
    title: "Patient-Centric Learning",
    description:
      "Clinical rotations at multi-speciality hospitals cultivate empathy, evidence-based care and inter-professional teamwork.",
    image:
      "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=1600&auto=format&fit=crop",
    icon: Stethoscope,
  },
  {
    title: "Research & Simulation Labs",
    description:
      "Advanced simulation centres, diagnostics labs and pharmaceutics facilities accelerate skill immersion.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
    icon: Microscope,
  },
  {
    title: "Community Impact",
    description:
      "Health camps, outreach and NSS drives foster preventive healthcare and public health leadership.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1600&auto=format&fit=crop",
    icon: Activity,
  },
];

const PROGRAMMES: Programme[] = [
  {
    name: "B.Sc Nursing",
    level: "UG",
    focus:
      "Holistic four-year programme with simulation labs, clinical postings and global certifications.",
    href: "https://www.dsu.edu.in/health-sciences/nursing",
  },
  {
    name: "B.Pharm",
    level: "UG",
    focus:
      "Professional degree covering pharmaceutics, pharmacology and regulatory sciences.",
    href: "https://www.dsu.edu.in/health-sciences/pharmacy",
  },
  {
    name: "Bachelor of Physiotherapy (BPT)",
    level: "UG",
    focus:
      "Comprehensive physiotherapy education with sports, neuro and cardiorespiratory specialisations.",
    href: "https://www.dsu.edu.in/health-sciences/physiotherapy",
  },
  {
    name: "Allied Health Sciences (B.Sc)",
    level: "UG",
    focus:
      "Programmes across medical laboratory technology, imaging, anaesthesia and emergency care.",
    href: "https://www.dsu.edu.in/health-sciences/allied-health-sciences",
  },
  {
    name: "M.Pharm",
    level: "PG",
    focus:
      "Research-intensive postgraduate degree with specialisations in pharmaceutics, analysis and pharmacology.",
    href: "https://www.dsu.edu.in/health-sciences/pharmacy",
  },
  {
    name: "MPT",
    level: "PG",
    focus:
      "Advanced physiotherapy programme emphasising musculoskeletal, neuro and cardiorespiratory expertise.",
    href: "https://www.dsu.edu.in/health-sciences/physiotherapy",
  },
  {
    name: "M.Sc Nursing",
    level: "PG",
    focus:
      "Leadership-oriented specialisations with focus on clinical excellence, pedagogy and research.",
    href: "https://www.dsu.edu.in/health-sciences/nursing",
  },
];

const CALENDAR_ENTRIES: CalendarEntry[] = [
  {
    title: "Health Sciences Academic Calendar",
    academicYear: "2025-26",
    description:
      "Detailed timeline for all health programmes including clinical rotations, internships and assessments.",
    documentUrl:
      "https://www.dsu.edu.in/images/HealthSciences/calendar_2025_26.pdf",
    tag: "Health Sciences",
  },
];

const FEATURED_NEWS: NewsItem[] = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fbf6a54aff7814535b71eda78a3d5f95e?format=webp&width=800",
    category: "Excellence",
    title: "Health Sciences Students Awarded Best Research in Clinical Practice",
    excerpt:
      "DSU nursing students receive national recognition for innovative clinical research and patient care excellence.",
    date: "Nov 12, 2025",
    color: "brand-magenta",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ff67a08f95a24431783dc54fc189e605b?format=webp&width=800",
    category: "Research",
    title: "Faculty Research on Healthcare Innovation Published in International Journal",
    excerpt:
      "DSU Health Sciences faculty publish groundbreaking research on patient-centric healthcare delivery systems.",
    date: "Nov 8, 2025",
    color: "brand-blue",
  },
  {
    image:
      "https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2Fd56a1c898842468187e8ff3260f0cdda?alt=media&token=6cb58cdf-a202-461d-b774-09ce61d439c3&apiKey=4aa279a8430d441dba9c55f659831878",
    category: "Placement",
    title: "95% Placement Rate for 2024-25 Health Sciences Graduates",
    excerpt:
      "Graduates placed at leading hospitals, healthcare organizations and research institutions worldwide.",
    date: "Oct 28, 2025",
    color: "brand-orange",
  },
];

const DEAN_INFO: DeanInfo = {
  name: "Dr. Rajesh Patel",
  title: "M.D., Ph.D",
  position: "Dean, School of Health Sciences",
  photo: "https://images.unsplash.com/photo-1612349317150-e71f1f641930?q=80&w=800&auto=format&fit=crop",
  videoUrl: "https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2F0c95c62aa88741fca8ebdc32aade53d5?alt=media&token=c57ff4a9-aea8-4ff3-843b-23ce820ba630&apiKey=4aa279a8430d441dba9c55f659831878",
  borderColor: "border-emerald-500/20",
  bgColor: "bg-emerald-500/10",
};

function CalendarResourceCard({ entry }: { entry: CalendarEntry }) {
  return (
    <Card className="h-full rounded-none border border-purple-500/20 bg-purple-500/10 backdrop-blur">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between gap-4">
          <Badge className="bg-brand-magenta/15 text-brand-magenta">
            {entry.tag}
          </Badge>
          <span className="text-xs text-foreground font-body">
            {entry.academicYear}
          </span>
        </div>
        <CardTitle className="mt-4 text-lg font-display">
          {entry.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 text-sm text-foreground font-body">
        <p>{entry.description}</p>
        <a
          href={entry.documentUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
        >
          Download PDF
          <ChevronRight className="h-4 w-4" />
        </a>
      </CardContent>
    </Card>
  );
}

export default function HealthSciences() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative w-full" id="top">
        <div className="h-screen w-full flex items-center justify-center overflow-hidden">
          <img
            src={HERO_IMAGE}
            alt="School of Health Sciences"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
            <div className="max-w-2xl">
              <p className="text-sm md:text-base text-white/80 mb-4 uppercase tracking-widest font-display">
                School of Health Sciences
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-display">
                Advancing Care. Inspiring Wellness.
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl font-display">
                Build a career in nursing, pharmacy, physiotherapy and allied health with simulation-rich learning and patient-centric hospital immersion.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://admissions.dsu.edu.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-white hover:bg-white/90 text-orange-600 hover:text-orange-700 px-8 py-6 text-base font-semibold font-display transition-all duration-300 group border-2 border-white"
                  >
                    Apply Now
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <a
                  href="https://dsu.edu.in/virtual-tour/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-6 text-base font-semibold font-display transition-all duration-300"
                  >
                    Virtual Tour
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="usp"
        className="bg-gradient-to-r from-brand-magenta/5 via-brand-orange/5 to-brand-blue/5 px-6 py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <Badge
              className="bg-white/20 text-brand-magenta backdrop-blur"
              variant="secondary"
            >
              Unique Strengths (USP)
            </Badge>
            <h2 className="mt-5 font-display text-3xl md:text-4xl">
              Why Future Health Professionals Choose DSU
            </h2>
          </div>
          <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-4">
            {USP_HIGHLIGHTS.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <Card
                  key={highlight.title}
                  className="group relative h-80 overflow-hidden rounded-none border border-blue-500/20 bg-blue-500/10 backdrop-blur-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-magenta/10"
                >
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs text-foreground">
                    <Icon className="h-4 w-4" /> USP
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5 text-foreground">
                    <h3 className="mb-2 text-lg font-semibold font-display">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-foreground/80 font-body">
                      {highlight.description}
                    </p>
                    {highlight.stat ? (
                      <div className="mt-3 text-xs uppercase tracking-wide text-foreground/70 font-body">
                        {highlight.stat}
                      </div>
                    ) : null}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dean's Message Section */}
      <DeanSection dean={DEAN_INFO} />

      <section id="programs" className="relative overflow-hidden px-6 py-16">
        <div
          className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-brand-magenta/20 via-transparent to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl">
                Academic Pathways in Health Sciences
              </h2>
              <p className="mt-3 text-sm text-foreground font-body">
                Comprehensive undergraduate and postgraduate programmes combining rigorous academics with clinical immersion, research and mentorship to prepare compassionate healthcare professionals.
              </p>
            </div>
          </div>

          {/* Undergraduate Programs */}
          <div className="mb-16">
            <div className="mb-8">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Undergraduate Programs
              </Badge>
              <h3 className="mt-4 font-display text-2xl md:text-3xl">
                Bachelor Degree Programs
              </h3>
              <p className="mt-2 text-sm text-foreground font-body">
                Build foundation in nursing, pharmacy, physiotherapy and allied health sciences
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {PROGRAMMES.filter(p => p.level === "UG").map((programme) => {
                const content = (
                  <Card className="h-full rounded-none border border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <Badge className="bg-brand-magenta/15 text-brand-magenta">
                        {programme.level} Programme
                      </Badge>
                      <CardTitle className="mt-4 text-xl font-display">
                        {programme.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm text-foreground font-body">
                      <p>{programme.focus}</p>
                    </CardContent>
                  </Card>
                );

                if (!programme.href) {
                  return content;
                }

                return (
                  <a
                    key={programme.name}
                    href={programme.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block h-full transform transition-all duration-500 hover:-translate-y-1"
                  >
                    {content}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Postgraduate Programs */}
          <div>
            <div className="mb-8">
              <Badge className="bg-brand-blue/15 text-brand-blue">
                Postgraduate Programs
              </Badge>
              <h3 className="mt-4 font-display text-2xl md:text-3xl">
                Master Degree Programs
              </h3>
              <p className="mt-2 text-sm text-foreground font-body">
                Advance into research, specialisation and clinical leadership
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {PROGRAMMES.filter(p => p.level === "PG").map((programme) => {
                const content = (
                  <Card className="h-full rounded-none border border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <Badge className="bg-brand-blue/15 text-brand-blue">
                        {programme.level} Programme
                      </Badge>
                      <CardTitle className="mt-4 text-xl font-display">
                        {programme.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm text-foreground font-body">
                      <p>{programme.focus}</p>
                    </CardContent>
                  </Card>
                );

                if (!programme.href) {
                  return content;
                }

                return (
                  <a
                    key={programme.name}
                    href={programme.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block h-full transform transition-all duration-500 hover:-translate-y-1"
                  >
                    {content}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="calendar" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-none border-[3px] border-dashed border-brand-magenta/30 bg-card/70 p-10 shadow-[0_35px_120px_-45px_rgba(175,80,255,0.65)] backdrop-blur">
            <div
              className="pointer-events-none absolute -left-16 top-10 h-32 w-32 rounded-full bg-brand-magenta/15 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-12 bottom-0 h-36 w-36 rounded-full bg-brand-blue/15 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative grid gap-0 lg:grid-cols-[1.1fr_minmax(0,1fr)]">
              <div className="space-y-5">
                <Badge className="bg-brand-magenta/15 text-brand-magenta">
                  Notice Board
                </Badge>
                <h2 className="font-display text-3xl md:text-4xl">
                  Health Sciences Notice Board
                </h2>
                <p className="text-sm text-foreground font-body">
                  Curated updates for the ongoing academic year 2025-26. Stay aligned with assessment windows, clinical rotations and university-hosted experiences.
                </p>
                <a
                  href="https://www.dsu.edu.in/health-sciences/notices"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta hover:underline"
                >
                  Browse previous circulars
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
              <div className="grid gap-0">
                {CALENDAR_ENTRIES.map((entry) => (
                  <CalendarResourceCard
                    key={`${entry.title}-${entry.academicYear}`}
                    entry={entry}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="related-resources"
        className="bg-gradient-to-r from-brand-magenta/5 via-brand-blue/5 to-brand-orange/5 px-6 py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl">
              Explore More at DSU Health Sciences
            </h2>
            <p className="mt-3 text-sm text-foreground font-body">
              Discover our clinical excellence, research initiatives, placements and admission pathways
            </p>
          </div>
          <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-4">
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
                    Centre of Excellence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    Clinical research initiatives and simulation-powered learning labs
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
                    Faculty-led clinical research and translational medicine initiatives
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
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-magenta/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-magenta/20 to-brand-magenta/10 flex items-center justify-center">
                  <HeartPulse className="h-12 w-12 text-brand-magenta/70 group-hover:text-brand-magenta transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-magenta transition-colors">
                    Admissions
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p className="text-sm text-foreground/80 font-body">
                    Join DSU Health Sciences and make a difference in healthcare
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

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-5xl items-start gap-8 lg:grid-cols-2">
          <Card className="rounded-none border border-orange-500/20 bg-orange-500/10">
            <CardHeader>
              <CardTitle className="font-display">Leadership</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 text-sm font-body text-foreground">
              <div>
                <div className="text-foreground/70 text-xs uppercase tracking-wide">Email</div>
                <div className="font-medium text-foreground">
                  health-sciences@dsu.edu.in
                </div>
              </div>
              <div>
                <div className="text-foreground/70 text-xs uppercase tracking-wide">Phone</div>
                <div className="font-medium text-foreground">
                  +91-80-49092933
                </div>
              </div>
              <div>
                <div className="text-foreground/70 text-xs uppercase tracking-wide">Campus Address</div>
                <div className="font-medium text-foreground">
                  Kanakapura Road, Bengaluru, Karnataka
                </div>
              </div>
              <div>
                <div className="text-foreground/70 text-xs uppercase tracking-wide">Office Hours</div>
                <div className="font-medium text-foreground">
                  Mon–Fri, 9:00 AM – 5:30 PM
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-none border border-blue-500/20 bg-blue-500/10">
            <CardHeader>
              <CardTitle className="font-display">
                More Resources
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm font-body">
              <a
                href="https://www.dsu.edu.in/health-sciences/programs"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-magenta"
              >
                Programs Overview
              </a>
              <a
                href="https://www.dsu.edu.in/health-sciences/highlights"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-magenta"
              >
                Highlights & USP
              </a>
              <a
                href="https://www.dsu.edu.in/health-sciences/newsletter"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-magenta"
              >
                Monthly Newsletter
              </a>
              <a
                href="https://www.dsu.edu.in/health-sciences/library"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-magenta"
              >
                Digital Library
              </a>
              <a
                href="https://www.dsu.edu.in/health-sciences/student-hub"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-magenta"
              >
                Student Hub
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="featured-news" className="px-6 py-16 bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-3">
              Latest from Health Sciences
            </h2>
            <p className="text-sm text-foreground font-body">
              Stories of clinical excellence, research breakthroughs, and student success
            </p>
          </div>
          <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-3">
            {FEATURED_NEWS.map((item) => (
              <a
                key={item.title}
                href="#"
                className="group rounded-none overflow-hidden border backdrop-blur-sm hover:shadow-lg transition-all text-left cursor-pointer bg-card/40"
              >
                <div className="relative h-48 overflow-hidden border-b border-border/40">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge
                      className={`text-xs ${
                        item.color === "brand-orange"
                          ? "bg-brand-orange/20 text-brand-orange"
                          : item.color === "brand-magenta"
                            ? "bg-brand-magenta/20 text-brand-magenta"
                            : "bg-brand-blue/20 text-brand-blue"
                      }`}
                    >
                      {item.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="text-base font-semibold text-foreground font-display line-clamp-2 group-hover:text-brand-magenta transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground/80 font-body line-clamp-2">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-foreground/60 font-body flex items-center">
                      <CalendarDays className="w-3 h-3 mr-1" /> {item.date}
                    </span>
                    <ChevronRight className="w-4 h-4 text-foreground/60 group-hover:text-brand-magenta transition-colors" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
