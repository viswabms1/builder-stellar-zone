import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  Camera,
  CalendarDays,
  ChevronRight,
  Film,
  Globe,
  GraduationCap,
  Headphones,
  Layers,
  Mic,
  PenSquare,
  Sparkles,
  Users
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type QuickLink = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
};

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

const HERO_IMAGE = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop";

const QUICK_LINKS: QuickLink[] = [
  {
    title: "The CJMC Advantage",
    description: "Explore what makes our journalism programmes future ready.",
    href: "https://www.dsu.edu.in/about-journalism-mass-comm/advantage-journalism",
    icon: Award,
    external: true
  },
  {
    title: "Facilities",
    description: "Tour convergence labs, studios and creative production spaces.",
    href: "https://www.dsu.edu.in/about-journalism-mass-comm/facilities-features",
    icon: Camera,
    external: true
  },
  {
    title: "Projects",
    description: "Review flagship storytelling, multimedia and global comm projects.",
    href: "https://www.dsu.edu.in/about-journalism-mass-comm/projects-cjmc",
    icon: Film,
    external: true
  },
  {
    title: "Internships & Placements",
    description: "Understand internship pipelines, newsroom immersion and placements.",
    href: "https://www.dsu.edu.in/about-journalism-mass-comm/internship-placements-journalism",
    icon: PenSquare,
    external: true
  },
  {
    title: "Life @ CJMC",
    description: "Catch the vibe of student communities, clubs and productions.",
    href: "https://www.dsu.edu.in/about-journalism-mass-comm/life-at-cjmc",
    icon: Users,
    external: true
  },
  {
    title: "Academic Calendar",
    description: "Download the latest academic calendar to plan semesters.",
    href: "https://www.dsu.edu.in/images/AC_11082025.pdf",
    icon: CalendarDays,
    external: true
  }
];

const USP_HIGHLIGHTS: Highlight[] = [
  {
    title: "Convergence-Ready Learning",
    description: "Unified newsroom and studio workflows preparing students for multi-platform journalism and content creation.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
    icon: Layers,
    stat: "360° Media"
  },
  {
    title: "Ethics & Emerging Media",
    description: "Curriculum blends ethical storytelling with new media literacy across podcasts, digital and social formats.",
    image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1600&auto=format&fit=crop",
    icon: Sparkles
  },
  {
    title: "Industry Immersion",
    description: "Live newsroom simulations, masterclasses and two-month internships embed real-world reporting experiences.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop",
    icon: Mic
  },
  {
    title: "Global Perspectives",
    description: "International collaborations like the Global Communication Project nurture cross-cultural storytelling skills.",
    image: "https://images.unsplash.com/photo-1523816512204-7c21eb1b4813?q=80&w=1600&auto=format&fit=crop",
    icon: Globe
  }
];

const PROGRAMMES: Programme[] = [
  {
    name: "BA (Journalism & Mass Communication)",
    level: "Undergraduate",
    description: "Three-year programme covering print, television, digital media, filmmaking, podcasting, advertising, public relations and theatre with a compulsory two-month internship."
  }
];

const EXPERIENCES: Experience[] = [
  {
    title: "Newsroom Labs",
    description: "Hands-on training in multimedia storytelling, editing suites and broadcast production studios.",
    icon: Camera
  },
  {
    title: "Audio & Podcasting",
    description: "State-of-the-art sound labs to produce radio shows, podcasts and immersive audio storytelling.",
    icon: Headphones
  },
  {
    title: "Film & Visual Storytelling",
    description: "Documentary filmmaking, VFX and cinematography labs powered by DSU's creative studios.",
    icon: Film
  },
  {
    title: "Story Labs & Writing Rooms",
    description: "Collaborative spaces for long-form writing, digital publishing and global communication projects.",
    icon: PenSquare
  }
];

const RESOURCES: Resource[] = [
  {
    title: "Academic Calendar 2025-26",
    description: "Plan semesters with the university-wide academic calendar featuring CJMC milestones.",
    href: "https://www.dsu.edu.in/images/AC_11082025.pdf",
    badge: "Calendar"
  },
  {
    title: "Media Industry Overview",
    description: "Stay updated with trends across broadcasting, OTT, digital media and communication careers.",
    href: "https://www.dsu.edu.in/about-journalism-mass-comm/media-industry-cjmc",
    badge: "Insights"
  },
  {
    title: "Career Options",
    description: "Explore career tracks across journalism, advertising, PR, filmmaking and digital marketing.",
    href: "https://www.dsu.edu.in/about-journalism-mass-comm/career-options-cjmc",
    badge: "Careers"
  },
  {
    title: "Gallery",
    description: "Browse showcases and behind-the-scenes moments from CJMC productions and events.",
    href: "https://www.dsu.edu.in/photos-soa",
    badge: "Stories"
  }
];

function QuickLinkCard({ link }: { link: QuickLink }) {
  const Icon = link.icon;
  const content = (
    <div className="group h-full rounded-3xl border border-border/40 bg-card/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-magenta/60 hover:shadow-xl hover:shadow-brand-magenta/10">
      <div className="flex items-center justify-between">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-magenta/10 text-brand-magenta">
          <Icon className="h-5 w-5" />
        </span>
        <ChevronRight className="h-4 w-4 text-transparent transition-colors duration-500 group-hover:text-brand-magenta" />
      </div>
      <h3 className="mt-5 text-lg font-semibold font-gilroy">{link.title}</h3>
      <p className="mt-3 text-sm text-muted-foreground font-graphik">{link.description}</p>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-magenta">
        {link.external ? "Open resource" : "Jump to section"}
        <ChevronRight className="h-4 w-4" />
      </div>
    </div>
  );

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noreferrer"
        className="rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {content}
      </a>
    );
  }

  return (
    <a
      href={link.href}
      className="rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {content}
    </a>
  );
}

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
        <Icon className="h-4 w-4" /> CJMC USP
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <h3 className="mb-2 text-lg font-semibold font-gilroy">{highlight.title}</h3>
        <p className="text-sm text-white/80 font-graphik">{highlight.description}</p>
        {highlight.stat ? (
          <div className="mt-3 text-xs uppercase tracking-wide text-white/70 font-graphik">{highlight.stat}</div>
        ) : null}
      </div>
    </Card>
  );
}

function ProgrammeCard({ programme }: { programme: Programme }) {
  return (
    <Card className="h-full rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <Badge className="bg-brand-magenta/15 text-brand-magenta">{programme.level}</Badge>
        <CardTitle className="mt-4 text-xl font-gilroy">{programme.name}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground font-graphik">
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
        <CardTitle className="text-base font-gilroy">{experience.title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-sm leading-relaxed text-muted-foreground font-graphik">
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
        <Badge className="bg-brand-magenta/15 text-brand-magenta">{resource.badge}</Badge>
        <CardTitle className="mt-4 text-lg font-gilroy">{resource.title}</CardTitle>
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

export default function JournalismMassComm() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative" id="top">
        <div className="h-[60vh] w-full overflow-hidden md:h-[70vh]">
          <img src={HERO_IMAGE} alt="College of Journalism and Mass Communication" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-6 inline-flex items-center rounded-full border border-brand-magenta/20 bg-brand-magenta/10 px-4 py-2">
              <Film className="mr-2 h-4 w-4 text-brand-magenta" />
              <span className="text-sm font-medium text-brand-magenta font-gilroy">School of Arts & Humanities · CJMC</span>
            </div>
            <h1 className="mb-4 font-gilroy text-4xl leading-tight text-white md:text-6xl">Storytellers for the Now & Next</h1>
            <p className="max-w-2xl text-white/90 font-graphik text-lg">
              Craft narratives across platforms with convergence labs, industry mentors and global collaborations at DSU's College of Journalism & Mass Communication.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/admissions">
                <Button className="bg-brand-gradient text-white">Apply Now</Button>
              </Link>
              <a href="https://www.dsu.edu.in/about-journalism-mass-comm/cjmc-schemes-syllabus" target="_blank" rel="noreferrer">
                <Button variant="outline" className="border-brand-magenta/40 hover:bg-brand-magenta/10">
                  View Syllabus
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="quick-links" className="bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Badge className="bg-brand-magenta/15 text-brand-magenta">Important Sub Menus</Badge>
              <h2 className="mt-4 font-gilroy text-3xl">Navigate CJMC</h2>
              <p className="mt-3 max-w-2xl text-sm text-muted-foreground font-graphik">
                Explore programme details, facilities, projects, career pathways and student life experiences at CJMC.
              </p>
            </div>
            <a
              href="https://www.dsu.edu.in/about-journalism-mass-comm"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
            >
              Visit CJMC portal
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {QUICK_LINKS.map((link) => (
              <QuickLinkCard key={link.title} link={link} />
            ))}
          </div>
        </div>
      </section>

      <section id="usp" className="bg-gradient-to-r from-brand-magenta/5 via-brand-orange/5 to-brand-blue/5 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <Badge className="bg-white/20 text-brand-magenta backdrop-blur" variant="secondary">
              Unique Strengths
            </Badge>
            <h2 className="mt-5 font-gilroy text-3xl md:text-4xl">Why Creators Choose CJMC</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {USP_HIGHLIGHTS.map((highlight) => (
              <HighlightCard key={highlight.title} highlight={highlight} />
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <Badge className="bg-brand-magenta/15 text-brand-magenta">Academic Pathways</Badge>
            <h2 className="mt-4 font-gilroy text-3xl md:text-4xl">Undergraduate Programme</h2>
            <p className="mt-3 text-sm text-muted-foreground font-graphik max-w-3xl mx-auto">
              A future-ready BA (Journalism & Mass Communication) that blends storytelling craft with new-age media skills, culminating in a two-month professional internship.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-1">
            {PROGRAMMES.map((programme) => (
              <ProgrammeCard key={programme.name} programme={programme} />
            ))}
          </div>
        </div>
      </section>

      <section id="experiences" className="bg-gradient-to-r from-brand-blue/5 to-brand-orange/5 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">Learning Experiences</Badge>
              <h2 className="mt-4 font-gilroy text-3xl md:text-4xl">Studios, Labs & Creative Pods</h2>
              <p className="mt-3 text-sm text-muted-foreground font-graphik">
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
              <Badge className="bg-brand-magenta/15 text-brand-magenta">Calendar & Resources</Badge>
              <h2 className="mt-4 font-gilroy text-3xl md:text-4xl">Stay in Sync with CJMC</h2>
              <p className="mt-3 text-sm text-muted-foreground font-graphik">
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
            <h3 className="mb-3 font-gilroy text-3xl">Tell Stories that Matter</h3>
            <p className="mb-6 text-muted-foreground font-graphik">
              Join CJMC to amplify narratives, collaborate with creatives worldwide and graduate with a portfolio that resonates with industry.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/admissions">
                <Button className="bg-brand-gradient text-white">
                  Start Application
                  <GraduationCap className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="https://www.dsu.edu.in/about-journalism-mass-comm/connect-with-cjmc" target="_blank" rel="noreferrer">
                <Button variant="outline" className="border-brand-magenta/40 hover:bg-brand-magenta/10">
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
