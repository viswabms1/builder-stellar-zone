import type { LucideIcon } from "lucide-react";
import {
  Camera,
  ChevronRight,
  Film,
  Globe,
  GraduationCap,
  Headphones,
  Layers,
  Mic,
  PenSquare,
  Star,
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
  level: string;
  description: string;
};

type ProgramFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type Experience = {
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
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop";

const USP_HIGHLIGHTS: Highlight[] = [
  {
    title: "Convergence-Ready Learning",
    description:
      "Unified newsroom and studio workflows preparing students for multi-platform journalism and content creation.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
    icon: Layers,
    stat: "360° Media",
  },
  {
    title: "Ethics & Emerging Media",
    description:
      "Curriculum blends ethical storytelling with new media literacy across podcasts, digital and social formats.",
    image:
      "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1600&auto=format&fit=crop",
    icon: Star,
  },
  {
    title: "Industry Immersion",
    description:
      "Live newsroom simulations, masterclasses and two-month internships embed real-world reporting experiences.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop",
    icon: Mic,
  },
  {
    title: "Global Perspectives",
    description:
      "International collaborations like the Global Communication Project nurture cross-cultural storytelling skills.",
    image:
      "https://images.unsplash.com/photo-1523816512204-7c21eb1b4813?q=80&w=1600&auto=format&fit=crop",
    icon: Globe,
  },
];

const PROGRAMMES: Programme[] = [
  {
    name: "BA (Journalism & Mass Communication)",
    level: "Undergraduate",
    description:
      "Three-year programme covering print, television, digital media, filmmaking, podcasting, advertising, public relations and theatre with a compulsory two-month internship.",
  },
];

const PROGRAM_FEATURES: ProgramFeature[] = [
  {
    title: "Immersive Newsroom Labs",
    description:
      "Weekly reporting drills across TV, digital, print and mobile newsrooms with live editorial feedback from faculty mentors.",
    icon: Mic,
  },
  {
    title: "Audio, Video & Film Projects",
    description:
      "Produce short films, podcasts and documentaries using CJMC's broadcast studios, sound labs and VFX suites.",
    icon: Camera,
  },
  {
    title: "Global Collaboration Network",
    description:
      "Work with international partners through the Global Communication Project and engage with industry storytellers.",
    icon: Globe,
  },
];

const EXPERIENCES: Experience[] = [
  {
    title: "Newsroom Labs",
    description:
      "Hands-on training in multimedia storytelling, editing suites and broadcast production studios.",
    icon: Camera,
  },
  {
    title: "Audio & Podcasting",
    description:
      "State-of-the-art sound labs to produce radio shows, podcasts and immersive audio storytelling.",
    icon: Headphones,
  },
  {
    title: "Film & Visual Storytelling",
    description:
      "Documentary filmmaking, VFX and cinematography labs powered by DSU's creative studios.",
    icon: Film,
  },
  {
    title: "Story Labs & Writing Rooms",
    description:
      "Collaborative spaces for long-form writing, digital publishing and global communication projects.",
    icon: PenSquare,
  },
];

const RESOURCES: Resource[] = [
  {
    title: "Academic Calendar 2025-26",
    description:
      "Plan semesters with the university-wide academic calendar featuring CJMC milestones.",
    href: "https://www.dsu.edu.in/images/AC_11082025.pdf",
    badge: "Calendar",
  },
  {
    title: "Media Industry Overview",
    description:
      "Stay updated with trends across broadcasting, OTT, digital media and communication careers.",
    href: "https://www.dsu.edu.in/about-journalism-mass-comm/media-industry-cjmc",
    badge: "Insights",
  },
  {
    title: "Career Options",
    description:
      "Explore career tracks across journalism, advertising, PR, filmmaking and digital marketing.",
    href: "https://www.dsu.edu.in/about-journalism-mass-comm/career-options-cjmc",
    badge: "Careers",
  },
  {
    title: "Gallery",
    description:
      "Browse showcases and behind-the-scenes moments from CJMC productions and events.",
    href: "https://www.dsu.edu.in/photos-soa",
    badge: "Stories",
  },
];

const DEAN_INFO: DeanInfo = {
  name: "Dr. Arjun Menon",
  title: "M.A., Ph.D",
  position: "Dean, Centre for Journalism & Mass Communication",
  photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
  videoUrl: "https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2F0c95c62aa88741fca8ebdc32aade53d5?alt=media&token=c57ff4a9-aea8-4ff3-843b-23ce820ba630&apiKey=4aa279a8430d441dba9c55f659831878",
  borderColor: "border-rose-500/20",
  bgColor: "bg-rose-500/10",
};

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
      <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs text-foreground">
        <Icon className="h-4 w-4" /> CJMC USP
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
}

function ProgrammeCard({ programme }: { programme: Programme }) {
  return (
    <Card className="h-full rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <Badge className="bg-brand-magenta/15 text-brand-magenta">
          {programme.level}
        </Badge>
        <CardTitle className="mt-4 text-xl font-display">
          {programme.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-foreground font-body">
        {programme.description}
      </CardContent>
    </Card>
  );
}

function ExperienceCard({ experience }: { experience: Experience }) {
  const Icon = experience.icon;
  return (
    <Card className="h-full rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-magenta/10 text-brand-magenta">
          <Icon className="h-5 w-5" />
        </span>
        <CardTitle className="text-base font-display">
          {experience.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-sm leading-relaxed text-foreground font-body">
          {experience.description}
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
        <CardTitle className="mt-4 text-lg font-display">
          {resource.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 text-sm text-foreground font-body">
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

export default function JournalismMassComm() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative" id="top">
        <div className="h-[60vh] w-full overflow-hidden md:h-[70vh]">
          <img
            src={HERO_IMAGE}
            alt="College of Journalism and Mass Communication"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-6 inline-flex items-center rounded-full border border-brand-magenta/20 bg-brand-magenta/10 px-4 py-2">
              <Film className="mr-2 h-4 w-4 text-brand-magenta" />
              <span className="text-sm font-medium text-brand-magenta font-display">
                School of Arts & Humanities · CJMC
              </span>
            </div>
            <h1 className="mb-4 font-display text-4xl leading-tight text-white md:text-6xl">
              Storytellers for the Now & Next
            </h1>
            <p className="max-w-2xl text-white/90 font-body text-lg">
              Craft narratives across platforms with convergence labs, industry mentors and global collaborations at DSU's College of Journalism & Mass Communication.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://admissions.dsu.edu.in/"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="bg-brand-gradient text-foreground">
                  Apply Now
                </Button>
              </a>
              <a
                href="https://www.dsu.edu.in/about-journalism-mass-comm/cjmc-schemes-syllabus"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-brand-magenta/40 hover:bg-brand-magenta/10"
                >
                  View Syllabus
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_minmax(0,1fr)] lg:items-center">
            <div className="space-y-6">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Academic Pathways
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl">
                Programmes shaping multimedia storytellers
              </h2>
              <p className="text-sm text-foreground font-body">
                Build expertise across reporting, filmmaking, podcasting and strategic communication through immersive studios, global collaborations and industry internships.
              </p>
              <div className="grid gap-4 sm:grid-cols-1">
                {PROGRAMMES.map((programme) => (
                  <ProgrammeCard key={programme.name} programme={programme} />
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-brand-magenta/25 bg-brand-magenta/10 p-8 shadow-[0_30px_120px_-50px_rgba(233,97,255,0.6)]">
              <h3 className="font-display text-2xl text-brand-magenta">
                Programme Highlights
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-brand-magenta/90 font-body">
                {PROGRAM_FEATURES.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <li key={feature.title} className="flex items-start gap-3">
                      <Icon className="mt-1 h-4 w-4" />
                      <div className="space-y-1">
                        <p className="font-medium text-brand-magenta">
                          {feature.title}
                        </p>
                        <p className="text-xs text-brand-magenta/80">
                          {feature.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
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
              Unique Strengths
            </Badge>
            <h2 className="mt-5 font-display text-3xl md:text-4xl">
              Why Creators Choose CJMC
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {USP_HIGHLIGHTS.map((highlight) => (
              <HighlightCard key={highlight.title} highlight={highlight} />
            ))}
          </div>
        </div>
      </section>

      {/* Dean's Message Section */}
      <DeanSection dean={DEAN_INFO} />

      <section
        id="experiences"
        className="bg-gradient-to-r from-brand-blue/5 to-brand-orange/5 px-6 py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Learning Experiences
              </Badge>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">
                Studios, Labs & Creative Pods
              </h2>
              <p className="mt-3 text-sm text-foreground font-body">
                Immerse in production labs, podcast studios and storytelling residencies that bring journalistic narratives to life.
              </p>
            </div>
            <a
              href="https://www.dsu.edu.in/about-journalism-mass-comm/global-comm-project-cjmc"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
            >
              Global comm project
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {EXPERIENCES.map((experience) => (
              <ExperienceCard key={experience.title} experience={experience} />
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Calendar & Resources
              </Badge>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">
                Stay in Sync with CJMC
              </h2>
              <p className="mt-3 text-sm text-foreground font-body">
                Access calendars, industry overviews, career guides and galleries to plan your creative journey.
              </p>
            </div>
            <a
              href="https://www.dsu.edu.in/about-journalism-mass-comm/alumni-cjmc"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
            >
              Alumni stories
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
            <h3 className="mb-3 font-display text-3xl">
              Tell Stories that Matter
            </h3>
            <p className="mb-6 text-foreground font-body">
              Join CJMC to amplify narratives, collaborate with creatives worldwide and graduate with a portfolio that resonates with industry.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/admissions">
                <Button className="bg-brand-gradient text-foreground">
                  Start Application
                  <GraduationCap className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a
                href="https://www.dsu.edu.in/about-journalism-mass-comm/connect-with-cjmc"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-brand-magenta/40 hover:bg-brand-magenta/10"
                >
                  Connect with CJMC
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
