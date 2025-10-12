import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  ChevronRight,
  Compass,
  GraduationCap,
  Palette,
  PenTool,
  Presentation,
  Rocket,
  Shapes,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

type Resource = {
  title: string;
  description: string;
  href: string;
  badge: string;
};

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=2000&auto=format&fit=crop";

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

const RESOURCES: Resource[] = [
  {
    title: "Academic Calendar 2025-26",
    description:
      "Plan studio cycles, critiques and internship timelines with the latest academic calendar.",
    href: "https://www.dsu.edu.in/images/AC_11082025.pdf",
    badge: "Calendar",
  },
  {
    title: "Programme Handbook",
    description:
      "Download the official handbook covering policies, assessment rubrics and student support.",
    href: "https://www.dsu.edu.in/images/SBAS/pdf/Handbook_2023.pdf",
    badge: "Handbook",
  },
  {
    title: "B.Design Brochure",
    description:
      "Explore specialisations, curriculum map and placement highlights in one place.",
    href: "https://www.dsu.edu.in/about-bdesign/bdesign-brochure",
    badge: "Brochure",
  },
  {
    title: "NAAC Documents",
    description:
      "Access ATR, code of conduct and stakeholder feedback to understand quality benchmarks.",
    href: "https://www.dsu.edu.in/about-bdesign",
    badge: "Quality",
  },
];

function HighlightCard({ highlight }: { highlight: Highlight }) {
  const Icon = highlight.icon;
  return (
    <Card className="group relative h-80 overflow-hidden rounded-3xl border border-border/40 bg-card/40 backdrop-blur-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-magenta/10">
      <img
        src={highlight.image}
        alt={highlight.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs text-white">
        <Icon className="h-4 w-4" /> B.Design USP
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <h3 className="mb-2 text-lg font-semibold font-gilroy">
          {highlight.title}
        </h3>
        <p className="text-sm text-white/80 font-graphik">
          {highlight.description}
        </p>
        {highlight.stat ? (
          <div className="mt-3 text-xs uppercase tracking-wide text-white/70 font-graphik">
            {highlight.stat}
          </div>
        ) : null}
      </div>
    </Card>
  );
}

function StructureCard({ point }: { point: StructurePoint }) {
  const Icon = point.icon;
  return (
    <Card className="h-full rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-magenta/10 text-brand-magenta">
          <Icon className="h-5 w-5" />
        </span>
        <CardTitle className="text-base font-gilroy">{point.title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-sm leading-relaxed text-muted-foreground font-graphik">
          {point.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <Card className="h-full rounded-3xl border border-border/40 bg-card/60 backdrop-blur">
      <CardHeader className="pb-2">
        <Badge className="bg-brand-magenta/15 text-brand-magenta">
          {resource.badge}
        </Badge>
        <CardTitle className="mt-4 text-lg font-gilroy">
          {resource.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 text-sm text-muted-foreground font-graphik">
        <p>{resource.description}</p>
        <a
          href={resource.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
        >
          View resource
          <ChevronRight className="h-4 w-4" />
        </a>
      </CardContent>
    </Card>
  );
}

export default function BDesignOverview() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative" id="top">
        <div className="h-[60vh] w-full overflow-hidden md:h-[70vh]">
          <img
            src={HERO_IMAGE}
            alt="Bachelor of Design Program"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-6 inline-flex items-center rounded-full border border-brand-magenta/20 bg-brand-magenta/10 px-4 py-2">
              <Palette className="mr-2 h-4 w-4 text-brand-magenta" />
              <span className="text-sm font-medium text-brand-magenta font-gilroy">
                B.Design · School of Design & Digital Trans Media
              </span>
            </div>
            <h1 className="mb-4 font-gilroy text-4xl leading-tight text-white md:text-6xl">
              Design Experiences that Inspire
            </h1>
            <p className="max-w-2xl text-white/90 font-graphik text-lg">
              A four-track Bachelor of Design programme combining foundation
              studios, interdisciplinary electives and industry immersions to
              craft designers of the future.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.dsu.edu.in/apply/bdesign"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="bg-brand-gradient text-white">
                  Apply for B.Design
                </Button>
              </a>
              <a
                href="https://www.dsu.edu.in/about-bdesign/bdesign-brochure"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-brand-magenta/40 hover:bg-brand-magenta/10"
                >
                  Download Brochure
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="overview"
        className="bg-gradient-to-r from-brand-magenta/5 via-brand-orange/5 to-brand-blue/5 px-6 py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <Badge
              className="bg-white/20 text-brand-magenta backdrop-blur"
              variant="secondary"
            >
              Unique Strengths
            </Badge>
            <h2 className="mt-5 font-gilroy text-3xl md:text-4xl">
              Why Designers Choose DSU
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {USP_HIGHLIGHTS.map((highlight) => (
              <HighlightCard key={highlight.title} highlight={highlight} />
            ))}
          </div>
        </div>
      </section>

      <section id="structure" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <Badge className="bg-brand-magenta/15 text-brand-magenta">
              Curriculum Architecture
            </Badge>
            <h2 className="mt-4 font-gilroy text-3xl md:text-4xl">
              Studio Journey Across Eight Semesters
            </h2>
            <p className="mt-3 text-sm text-muted-foreground font-graphik max-w-3xl mx-auto">
              Move from foundational studios to advanced specialisation projects
              with liberal studies, research engagements and internships
              interwoven throughout the programme.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {STRUCTURE_POINTS.map((point) => (
              <StructureCard key={point.title} point={point} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="resources"
        className="bg-gradient-to-r from-brand-blue/5 to-brand-orange/5 px-6 py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Calendar & Resources
              </Badge>
              <h2 className="mt-4 font-gilroy text-3xl md:text-4xl">
                Plan Your Design Journey
              </h2>
              <p className="mt-3 text-sm text-muted-foreground font-graphik">
                Access calendars, handbooks, brochures and quality documents to
                stay prepared from foundation studios to final juries.
              </p>
            </div>
            <a
              href="https://www.dsu.edu.in/about-bdesign/publications-bdesign"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
            >
              Recent publications
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {RESOURCES.map((resource) => (
              <ResourceCard key={resource.title} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-3xl border border-brand-magenta/20 bg-brand-magenta/5 p-10">
            <h3 className="mb-3 font-gilroy text-3xl">
              Design Tomorrow's Experiences
            </h3>
            <p className="mb-6 text-muted-foreground font-graphik">
              Collaborate with mentors, industry leaders and global studios to
              graduate with a portfolio that shapes inclusive, sustainable
              futures.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://www.dsu.edu.in/apply/bdesign"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="bg-brand-gradient text-white">
                  Start Application
                  <GraduationCap className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link to="/admissions">
                <Button
                  variant="outline"
                  className="border-brand-magenta/40 hover:bg-brand-magenta/10"
                >
                  Talk to Admissions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
