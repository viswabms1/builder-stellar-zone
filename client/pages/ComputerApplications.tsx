import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  BadgeCheck,
  Beaker,
  ChevronRight,
  Cpu,
  GraduationCap,
  Laptop,
  Sparkles,
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

type Highlight = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  stat?: string;
};

type ProgramGroup = {
  label: string;
  programs: string[];
};

type ResourceLink = {
  title: string;
  description: string;
  href: string;
  badge: string;
};

type LabExperience = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?q=80&w=2000&auto=format&fit=crop";

const USP_HIGHLIGHTS: Highlight[] = [
  {
    title: "Nurturing Fresh IT Talent",
    description:
      "Established in 2016-17 to empower the next generation of developers, analysts and product builders with future-ready skills.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",
    icon: Award,
    stat: "8+ Years of Impact",
  },
  {
    title: "Skill-First Curriculum",
    description:
      "Specialise early in app development, cloud, AI or analytics with project studios and hackathons embedded in each semester.",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1600&auto=format&fit=crop",
    icon: Sparkles,
  },
  {
    title: "Industry Immersion Labs",
    description:
      "Gain hands-on time in IBM, NVIDIA, VMware and Automation Technology labs for real-world problem solving.",
    image:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop",
    icon: Cpu,
  },
  {
    title: "Expanding Data Science Futures",
    description:
      "Launching B.Sc and M.Sc in Data Science from 2025-26 to elevate advanced analytics talent.",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop",
    icon: BadgeCheck,
  },
];

const PROGRAM_GROUPS: ProgramGroup[] = [
  {
    label: "Undergraduate",
    programs: ["Bachelor of Computer Applications", "B.Sc in Data Science"],
  },
  {
    label: "Postgraduate",
    programs: ["Master of Computer Applications", "M.Sc in Data Science"],
  },
];

const LAB_EXPERIENCES: LabExperience[] = [
  {
    title: "IBM Software Lab for Emerging Technologies",
    description:
      "Co-innovate on enterprise stack modernisation and full-stack development challenges.",
    icon: Laptop,
  },
  {
    title: "NVIDIA – Boston Innovation Lab",
    description:
      "Prototype AI, XR and accelerated computing solutions with industry-grade toolchains.",
    icon: Cpu,
  },
  {
    title: "VMware IT Academy",
    description:
      "Master cloud infrastructure, virtualisation and automation workflows with certifications.",
    icon: Beaker,
  },
];

const RESOURCE_LINKS: ResourceLink[] = [
  {
    title: "Academic Calendar 2025-26",
    description:
      "Download the latest academic roadmap for Computer Applications cohorts.",
    href: "https://www.dsu.edu.in/images/AC_11082025.pdf",
    badge: "Calendar",
  },
  {
    title: "Events Conducted",
    description:
      "Catch up on ideathons, tech talks and community meetups hosted by the school.",
    href: "https://www.dsu.edu.in/news-events/events-computer-applications",
    badge: "Events",
  },
  {
    title: "Research Updates",
    description:
      "Explore publications and projects undertaken by faculty and students.",
    href: "https://www.dsu.edu.in/computer-applications/research-sca",
    badge: "Research",
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
        <Icon className="h-4 w-4" /> USP
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <h3 className="mb-2 text-lg font-semibold font-display">
          {highlight.title}
        </h3>
        <p className="text-sm text-white/80 font-body">
          {highlight.description}
        </p>
        {highlight.stat ? (
          <div className="mt-3 text-xs uppercase tracking-wide text-white/70 font-body">
            {highlight.stat}
          </div>
        ) : null}
      </div>
    </Card>
  );
}

function ResourceCard({ resource }: { resource: ResourceLink }) {
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
      <CardContent className="space-y-5 text-sm text-muted-foreground font-body">
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

function LabCard({ lab }: { lab: LabExperience }) {
  const Icon = lab.icon;
  return (
    <Card className="h-full rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-magenta/10 text-brand-magenta">
          <Icon className="h-5 w-5" />
        </span>
        <CardTitle className="text-base font-display">{lab.title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-sm leading-relaxed text-muted-foreground font-body">
          {lab.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export default function ComputerApplications() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative" id="top">
        <div className="h-[60vh] w-full overflow-hidden md:h-[70vh]">
          <img
            src={HERO_IMAGE}
            alt="School of Computer Applications"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-6 inline-flex items-center rounded-full border border-brand-magenta/20 bg-brand-magenta/10 px-4 py-2">
              <Cpu className="mr-2 h-4 w-4 text-brand-magenta" />
              <span className="text-sm font-medium text-brand-magenta font-display">
                School of Computer Applications
              </span>
            </div>
            <h1 className="mb-4 font-display text-4xl leading-tight text-white md:text-6xl">
              Build Tomorrow's Digital Experiences
            </h1>
            <p className="max-w-2xl text-white/90 font-body text-lg">
              From full-stack development to data science and cloud-native
              innovation, DSU prepares tech creators with experiential labs,
              industry mentorship and product-focused learning.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/admissions">
                <Button className="bg-brand-gradient text-white">
                  Apply Now
                </Button>
              </Link>
              <a
                href="https://www.dsu.edu.in/computer-applications/usp-sca"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-brand-magenta/40 hover:bg-brand-magenta/10"
                >
                  Explore USP
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_minmax(0,1fr)] lg:items-center">
            <div className="space-y-6">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Academic Pathways
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl">
                Programs that transform tech aspirations into careers
              </h2>
              <p className="text-sm text-muted-foreground font-body">
                Choose focused routes into software development, analytics, data science and emerging tech with curriculum co-designed by industry mentors and research leaders.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {PROGRAM_GROUPS.map((group) => (
                  <Card
                    key={group.label}
                    className="rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm"
                  >
                    <CardHeader className="pb-3">
                      <Badge className="bg-brand-magenta/15 text-brand-magenta">
                        {group.label}
                      </Badge>
                      <CardTitle className="mt-4 text-xl font-display">
                        {group.label} Programmes
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-2 text-sm text-muted-foreground font-body">
                      {group.programs.map((program) => (
                        <div key={program} className="flex items-center">
                          <ChevronRight className="mr-2 h-3 w-3 text-brand-magenta" />
                          {program}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-brand-magenta/25 bg-brand-magenta/10 p-8 shadow-[0_30px_120px_-50px_rgba(233,97,255,0.6)]">
              <h3 className="font-display text-2xl text-brand-magenta">
                Programme Highlights
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-brand-magenta/90 font-body">
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4" />
                  Industry-aligned curriculum with Capstone Studios from year one
                </li>
                <li className="flex items-start gap-2">
                  <Laptop className="mt-0.5 h-4 w-4" />
                  Dedicated labs for full-stack, data science, cybersecurity and cloud-native engineering
                </li>
                <li className="flex items-start gap-2">
                  <Award className="mt-0.5 h-4 w-4" />
                  Global certifications and internship immersion with partner companies
                </li>
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
              Why Learners Choose DSU Computer Applications
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {USP_HIGHLIGHTS.map((highlight) => (
              <HighlightCard key={highlight.title} highlight={highlight} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="labs"
        className="bg-gradient-to-r from-brand-blue/5 to-brand-orange/5 px-6 py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Experiential Learning
              </Badge>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">
                Innovation Labs & Career Readiness
              </h2>
              <p className="mt-3 text-sm text-muted-foreground font-body">
                Access cross-disciplinary labs and mentorship programmes that
                spark product engineering, AI, automation and cloud-native
                careers.
              </p>
            </div>
            <a
              href="https://www.dsu.edu.in/computer-applications/facilities-sca"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
            >
              View facilities gallery
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {LAB_EXPERIENCES.map((lab) => (
              <LabCard key={lab.title} lab={lab} />
            ))}
          </div>
        </div>
      </section>

      <section id="calendar" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Calendar & Updates
              </Badge>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">
                Stay Ahead of Every Milestone
              </h2>
              <p className="mt-3 text-sm text-muted-foreground font-body">
                Download academic schedules, explore event recaps and tap into
                ongoing research that keeps learners future focused.
              </p>
            </div>
            <a
              href="https://www.dsu.edu.in/computer-applications/happening-sca"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
            >
              School happenings hub
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {RESOURCE_LINKS.map((resource) => (
              <ResourceCard key={resource.title} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-3xl border border-brand-magenta/20 bg-brand-magenta/5 p-10">
            <h3 className="mb-3 font-display text-3xl">
              Launch Your Tech Career with DSU
            </h3>
            <p className="mb-6 text-muted-foreground font-body">
              Collaborate with mentors, build real products, showcase your
              portfolio and secure roles with the ecosystem of recruiters
              partnering with the School of Computer Applications.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/admissions">
                <Button className="bg-brand-gradient text-white">
                  Start Application
                  <GraduationCap className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a
                href="https://www.dsu.edu.in/computer-applications/placement-sca"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-brand-magenta/40 hover:bg-brand-magenta/10"
                >
                  Placement Snapshot
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
