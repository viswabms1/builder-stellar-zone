import { Link as RouterLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  CalendarDays,
  ChevronRight,
  Compass,
  GraduationCap,
  Palette,
  PenTool,
  Presentation,
  Rocket,
  Shapes,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
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

type StructurePoint = {
  title: string;
  description: string;
  icon: LucideIcon;
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
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop";

const USP_HIGHLIGHTS: Highlight[] = [
  {
    title: "Project-Based Learning",
    description:
      "Every semester features micro, mini and major projects to transform ideas into launch-ready prototypes.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
    icon: PenTool,
    stat: "160 Credits",
  },
  {
    title: "Global Immersions & Internships",
    description:
      "Mandatory three-month industry or overseas research internship plus monthly workshops with design icons.",
    image:
      "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?q=80&w=1600&auto=format&fit=crop",
    icon: Compass,
  },
  {
    title: "Interdisciplinary Foundation",
    description:
      "Common foundation and liberal studies build a broad, human-centred design perspective across specialisations.",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1600&auto=format&fit=crop",
    icon: Award,
  },
  {
    title: "Industry Studios",
    description:
      "Design & Innovation Centre, IBM CoE, automotive and healthcare labs support experimentation with emerging tech.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
    icon: Presentation,
  },
];

const STRUCTURE_POINTS: StructurePoint[] = [
  {
    title: "Year I: Foundation",
    description:
      "Shared foundation studio, liberal studies and micro projects shape core design sensibilities across tracks.",
    icon: Palette,
  },
  {
    title: "Year II: Core Studios",
    description:
      "Discipline studios with mini projects, liberal studies and micro explorations across design research.",
    icon: PenTool,
  },
  {
    title: "Year III: Electives & Research",
    description:
      "Deeper dive into chosen specialisation with electives, design research project and industry briefs.",
    icon: Shapes,
  },
  {
    title: "Year IV: Internship & Major Project",
    description:
      "Capstone major project, portfolio review and mandatory three-month internship grounded in professional practice.",
    icon: Rocket,
  },
];

const CALENDAR_ENTRIES: CalendarEntry[] = [
  {
    title: "B.Design Academic Calendar",
    academicYear: "2025-26",
    description:
      "Detailed timeline for B.Design programme including studio cycles, critiques, internship periods and assessments.",
    documentUrl:
      "https://www.dsu.edu.in/images/BDesign/calendar_2025_26.pdf",
    tag: "B.Design",
  },
];

const FEATURED_NEWS: NewsItem[] = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fbf6a54aff7814535b71eda78a3d5f95e?format=webp&width=800",
    category: "Excellence",
    title: "B.Design Students Win International Design Awards",
    excerpt:
      "DSU design students receive recognition for innovative product design and social impact projects at global design competitions.",
    date: "Nov 13, 2025",
    color: "brand-magenta",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ff67a08f95a24431783dc54fc189e605b?format=webp&width=800",
    category: "Research",
    title: "Faculty Research on Sustainable Design Published in Design Journal",
    excerpt:
      "DSU B.Design faculty publish research on sustainable design practices and human-centered innovation methodologies.",
    date: "Nov 7, 2025",
    color: "brand-blue",
  },
  {
    image:
      "https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2Fd56a1c898842468187e8ff3260f0cdda?alt=media&token=6cb58cdf-a202-461d-b774-09ce61d439c3&apiKey=4aa279a8430d441dba9c55f659831878",
    category: "Placement",
    title: "94% Placement Rate for 2024-25 B.Design Batch",
    excerpt:
      "B.Design graduates placed at leading design firms, tech companies and startup design studios worldwide.",
    date: "Oct 29, 2025",
    color: "brand-orange",
  },
];

const DEAN_INFO: DeanInfo = {
  name: "Dr. Rajeev Kumar",
  title: "M.Des., Ph.D",
  position: "Dean, School of Design",
  photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  videoUrl: "https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2F0c95c62aa88741fca8ebdc32aade53d5?alt=media&token=c57ff4a9-aea8-4ff3-843b-23ce820ba630&apiKey=4aa279a8430d441dba9c55f659831878",
  borderColor: "border-pink-500/20",
  bgColor: "bg-pink-500/10",
};

function StructureCard({ point }: { point: StructurePoint }) {
  const Icon = point.icon;
  return (
    <Card className="h-full rounded-none border border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-magenta/10 text-brand-magenta">
          <Icon className="h-5 w-5" />
        </span>
        <CardTitle className="text-base font-display">{point.title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm leading-relaxed text-foreground font-body">
          {point.description}
        </p>
      </CardContent>
    </Card>
  );
}

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

export default function BDesignOverview() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative w-full" id="top">
        <div className="h-screen w-full flex items-center justify-center overflow-hidden">
          <img
            src={HERO_IMAGE}
            alt="School of Design B.Design"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
            <div className="max-w-2xl">
              <p className="text-sm md:text-base text-white/80 mb-4 uppercase tracking-widest font-display">
                School of Design
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-display">
                Design Experiences that Inspire
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl font-display">
                Master human-centered design with studio-based learning, global immersions and mandatory internships to solve real-world design challenges.
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
              Why Designers Choose DSU
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
          <div className="mb-16">
            <div className="mb-8">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Design Programme
              </Badge>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">
                B.Design (Bachelor of Design)
              </h2>
              <p className="mt-3 text-sm text-foreground font-body">
                Four-year undergraduate programme combining foundational design theory with studio-based projects, global immersions, and mandatory industry internship to prepare human-centered designers and design innovators.
              </p>
            </div>

            <div className="rounded-3xl border border-brand-magenta/25 bg-brand-magenta/10 p-8 shadow-[0_30px_120px_-50px_rgba(233,97,255,0.6)]">
              <h3 className="font-display text-2xl text-brand-magenta">
                Design Specialization Tracks
              </h3>
              <p className="mt-2 text-sm text-brand-magenta/80 font-body">
                From Year II onwards, students specialize in one of the following tracks based on interest and aptitude:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-brand-magenta/90 font-body grid md:grid-cols-2 gap-4">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-magenta" />
                  Product & Furniture Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-magenta" />
                  Interaction & User Experience Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-magenta" />
                  Graphic & Visual Communication
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-magenta" />
                  Fashion & Textile Design
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="structure" className="px-6 py-16 bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <Badge className="bg-brand-magenta/15 text-brand-magenta">
              Curriculum Architecture
            </Badge>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              Studio Journey Across Eight Semesters
            </h2>
            <p className="mt-3 text-sm text-foreground font-body max-w-3xl mx-auto">
              Move from foundational studios to advanced specialisation projects with liberal studies, research engagements and internships interwoven throughout the programme.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {STRUCTURE_POINTS.map((point) => (
              <StructureCard key={point.title} point={point} />
            ))}
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
                  B.Design Notice Board
                </h2>
                <p className="text-sm text-foreground font-body">
                  Curated updates for the ongoing academic year 2025-26. Stay aligned with studio cycles, critiques, internship timelines and assessments.
                </p>
                <a
                  href="https://www.dsu.edu.in/bdesign/notices"
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
              Explore More at DSU B.Design
            </h2>
            <p className="mt-3 text-sm text-foreground font-body">
              Discover our design studios, innovation labs, placements and admission pathways
            </p>
          </div>
          <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-4">
            <RouterLink
              to="/centre-of-excellence"
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
                    Design & Innovation labs with emerging tech studios
                  </p>
                </CardContent>
              </Card>
            </RouterLink>

            <RouterLink
              to="/research"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 flex items-center justify-center">
                  <Shapes className="h-12 w-12 text-brand-blue/70 group-hover:text-brand-blue transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-blue transition-colors">
                    Research & Innovation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    Faculty-led design research and innovation projects
                  </p>
                </CardContent>
              </Card>
            </RouterLink>

            <RouterLink
              to="/placements"
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
                    Career pathways with design firms and tech companies
                  </p>
                </CardContent>
              </Card>
            </RouterLink>

            <a
              href="https://admissions.dsu.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-magenta/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-magenta/20 to-brand-magenta/10 flex items-center justify-center">
                  <Palette className="h-12 w-12 text-brand-magenta/70 group-hover:text-brand-magenta transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-magenta transition-colors">
                    Admissions
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p className="text-sm text-foreground/80 font-body">
                    Join DSU B.Design and shape human-centered solutions
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
                  design@dsu.edu.in
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
                href="https://www.dsu.edu.in/bdesign/programs"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-magenta"
              >
                Programs Overview
              </a>
              <a
                href="https://www.dsu.edu.in/bdesign/highlights"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-magenta"
              >
                Highlights & USP
              </a>
              <a
                href="https://www.dsu.edu.in/bdesign/newsletter"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-magenta"
              >
                Monthly Newsletter
              </a>
              <a
                href="https://www.dsu.edu.in/bdesign/library"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-magenta"
              >
                Digital Library
              </a>
              <a
                href="https://www.dsu.edu.in/bdesign/student-hub"
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
              Latest from B.Design
            </h2>
            <p className="text-sm text-foreground font-body">
              Stories of design excellence, innovation, and student success
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
