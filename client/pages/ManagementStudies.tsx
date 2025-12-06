import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  Building,
  ChevronRight,
  DollarSign,
  GraduationCap,
  Layers,
  Network,
  Star,
  TrendingUp,
  Users,
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
  level: string;
  focus: string;
  link?: string;
};

type Advantage = {
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
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2000&auto=format&fit=crop";

const USP_HIGHLIGHTS: Highlight[] = [
  {
    title: "Legacy of Excellence",
    description:
      "Five decades of management education shaped by global-quality infrastructure, corporate mentors and entrepreneurial culture.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
    icon: Award,
    stat: "50+ Years",
  },
  {
    title: "Industry-Embedded Curriculum",
    description:
      "Experiential projects, simulations and capstone immersions that align coursework with management consulting and startup realities.",
    image:
      "https://images.unsplash.com/photo-1521790362495-1c9c6e5bff09?q=80&w=1600&auto=format&fit=crop",
    icon: TrendingUp,
  },
  {
    title: "Global & Digital Focus",
    description:
      "Live business caseathons, analytics sprints and global exchange sessions nurture agile leadership mindsets.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
    icon: Star,
  },
  {
    title: "Innovation Ecosystem",
    description:
      "Tap into DSU Labs, incubation centres and industry associations to prototype ideas and scale ventures.",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1600&auto=format&fit=crop",
    icon: Network,
  },
];

const PROGRAMMES: Programme[] = [
  {
    name: "Bachelor of Commerce",
    level: "Undergraduate",
    focus:
      "Build strong accounting, finance and analytics fundamentals with industry certifications.",
    link: "https://www.dsu.edu.in/commerce-management/bachelor-of-commerce-management",
  },
  {
    name: "Bachelor of Business Administration",
    level: "Undergraduate",
    focus:
      "Develop leadership and entrepreneurial skills through labs, internships and mentoring.",
    link: "https://www.dsu.edu.in/commerce-management/bba",
  },
  {
    name: "Master of Business Administration",
    level: "Postgraduate",
    focus:
      "Specialise in marketing, finance, HR, analytics and operations with global immersion.",
    link: "https://www.dsu.edu.in/commerce-management/mba",
  },
  {
    name: "Doctoral Programmes",
    level: "Doctoral",
    focus:
      "Research-driven doctoral tracks across commerce, management and entrepreneurship.",
    link: "https://www.dsu.edu.in/dsu-research",
  },
];

const ADVANTAGES: Advantage[] = [
  {
    title: "Innovation & Analytics Labs",
    description:
      "Access DSU's IBM, NVIDIA, Automation and Design Innovation labs for business analytics and product incubation.",
    icon: Layers,
  },
  {
    title: "Corporate Mentorship",
    description:
      "Industry partnerships deliver mentorship circles, live consulting briefs and leadership dialogues each term.",
    icon: Users,
  },
  {
    title: "Global Immersion",
    description:
      "International study tours, guest lectures and exchange programmes broaden global business perspectives.",
    icon: Building,
  },
  {
    title: "Career Lift Platform",
    description:
      "Dedicated placement coaching, alumni networking and start-up accelerators fuel career trajectories.",
    icon: DollarSign,
  },
];

const RESOURCES: Resource[] = [
  {
    title: "Academic Calendar 2025-26",
    description:
      "Plan your semesters with the official DSU academic calendar including internships and assessments.",
    href: "https://www.dsu.edu.in/images/University/DSU_AC.pdf",
    badge: "Calendar",
  },
  {
    title: "NSS & NCC Activities",
    description:
      "Engage in community leadership programmes that build civic responsibility and social impact.",
    href: "https://www.dsu.edu.in/images/University/NSS_Actvities.pdf",
    badge: "Engage",
  },
  {
    title: "Sports Facilities",
    description:
      "Explore the world-class sports infrastructure that sustains wellbeing during rigorous academic schedules.",
    href: "https://www.dsu.edu.in/images/University/Sports_Facilities.pdf",
    badge: "Campus",
  },
  {
    title: "Photo Gallery",
    description:
      "Relive flagship conclaves, pitch fests and leadership summits hosted by SCMS.",
    href: "https://www.dsu.edu.in/photo-gallery",
    badge: "Culture",
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

function AdvantageCard({ advantage }: { advantage: Advantage }) {
  const Icon = advantage.icon;
  return (
    <Card className="h-full rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-magenta/10 text-brand-magenta">
          <Icon className="h-5 w-5" />
        </span>
        <CardTitle className="text-base font-display">
          {advantage.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-sm leading-relaxed text-foreground font-body">
          {advantage.description}
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

export default function ManagementStudies() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative" id="top">
        <div className="h-[60vh] w-full overflow-hidden md:h-[70vh]">
          <img
            src={HERO_IMAGE}
            alt="School of Commerce and Management Studies"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-6 inline-flex items-center rounded-full border border-brand-magenta/20 bg-brand-magenta/10 px-4 py-2">
              <TrendingUp className="mr-2 h-4 w-4 text-brand-magenta" />
              <span className="text-sm font-medium text-brand-magenta font-display">
                School of Commerce & Management Studies
              </span>
            </div>
            <h1 className="mb-4 font-display text-4xl leading-tight text-white md:text-6xl">
              Recalibrate. Collaborate. Elevate.
            </h1>
            <p className="max-w-2xl text-white/90 font-body text-lg">
              Shape business leaders with immersive management education,
              innovation labs and global exposure tailored for the trust
              economy.
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
              <a href="mailto:dean-scms@dsu.edu.in">
                <Button
                  variant="outline"
                  className="border-brand-magenta/40 hover:bg-brand-magenta/10"
                >
                  Contact Dean SCMS
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
                Programmes that create agile business leaders
              </h2>
              <p className="text-sm text-foreground font-body">
                Build a career-ready portfolio across B.Com, BBA, MBA and doctoral tracks with immersive labs, consulting clinics and global immersion opportunities.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {PROGRAMMES.map((programme) => (
                  <Card
                    key={programme.name}
                    className="h-full rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm"
                  >
                    <CardHeader className="pb-3">
                      <Badge className="bg-brand-magenta/15 text-brand-magenta">
                        {programme.level}
                      </Badge>
                      <CardTitle className="mt-4 text-xl font-display">
                        {programme.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm text-foreground font-body">
                      <p>{programme.focus}</p>
                      {programme.link ? (
                        <a
                          href={programme.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
                        >
                          Know more
                          <ChevronRight className="h-4 w-4" />
                        </a>
                      ) : null}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-brand-magenta/25 bg-brand-magenta/10 p-8 shadow-[0_30px_120px_-50px_rgba(233,97,255,0.6)]">
              <h3 className="font-display text-2xl text-brand-magenta">
                What you gain at SCMS
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-brand-magenta/90 font-body">
                <li className="flex items-start gap-2">
                  <TrendingUp className="mt-0.5 h-4 w-4" />
                  Strategic specialisations in finance, analytics, marketing and entrepreneurship
                </li>
                <li className="flex items-start gap-2">
                  <Layers className="mt-0.5 h-4 w-4" />
                  Live business labs, hackathons and consulting clinics with corporate partners
                </li>
                <li className="flex items-start gap-2">
                  <DollarSign className="mt-0.5 h-4 w-4" />
                  Placement readiness, venture acceleration and alumni mentorship to fast-track careers
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
              Why Future Leaders Choose SCMS
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
        id="advantages"
        className="bg-gradient-to-r from-brand-blue/5 to-brand-orange/5 px-6 py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Career Advantages
              </Badge>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">
                Beyond the Classroom
              </h2>
              <p className="mt-3 text-sm text-foreground font-body">
                Leverage innovation hubs, corporate mentorship, global
                immersions and placement readiness platforms that make DSU
                graduates highly sought after.
              </p>
            </div>
            <a
              href="https://www.dsu.edu.in/commerce-management/bba"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
            >
              Explore BBA experience
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {ADVANTAGES.map((advantage) => (
              <AdvantageCard key={advantage.title} advantage={advantage} />
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
                Stay Synced with SCMS
              </h2>
              <p className="mt-3 text-sm text-foreground font-body">
                Download official documents, explore co-curricular platforms and
                plan your journey with key schedules, activities and galleries.
              </p>
            </div>
            <a
              href="https://www.dsu.edu.in/academics/schools/management-studies#programs"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
            >
              View more resources
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
              Drive Business Impact with DSU
            </h3>
            <p className="mb-6 text-foreground font-body">
              Join a vibrant management community that transforms purpose-driven
              ideas into scalable ventures through mentorship, labs and global
              networks.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/admissions">
                <Button className="bg-brand-gradient text-foreground">
                  Start Application
                  <GraduationCap className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a
                href="https://www.dsu.edu.in/commerce-management/mba"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-brand-magenta/40 hover:bg-brand-magenta/10"
                >
                  MBA Brochure
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
