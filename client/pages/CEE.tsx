import { Link as RouterLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  BadgeCheck,
  CalendarDays,
  ChevronRight,
  ClipboardList,
  Compass,
  GraduationCap,
  Layers,
  Microscope,
  Network,
  Presentation,
  Sparkle,
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

type ProgramCard = {
  name: string;
  area: string;
  description: string;
  image: string;
  link: string;
  highlights: string[];
  overlay: string;
  badgeClass: string;
  panelClass: string;
  featured?: boolean;
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

type Offering = {
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
  "https://images.pexels.com/photos/3931561/pexels-photo-3931561.jpeg?auto=compress&cs=tinysrgb&w=1600";

const OFFERINGS: Offering[] = [
  {
    title: "Executive MBA Tracks",
    description:
      "Modular Executive MBA and EPM-style programmes with customisable electives for senior managers and entrepreneurs.",
    icon: GraduationCap,
  },
  {
    title: "Leadership Development",
    description:
      "Faculty dialogues, training & development bootcamps and boardroom simulations sharpen strategic capabilities.",
    icon: Presentation,
  },
  {
    title: "Industry Associations",
    description:
      "Collaborations with leading corporates, professional bodies and global partners for immersive residencies.",
    icon: Network,
  },
  {
    title: "Clubs & Experiences",
    description:
      "Executive clubs, live projects and innovation labs deliver peer networking and entrepreneurial momentum.",
    icon: BadgeCheck,
  },
];

const PROGRAM_CARDS: ProgramCard[] = [
  {
    name: "Executive MBA",
    area: "Weekend Format",
    description:
      "Modular Executive MBA for senior managers with flexible weekend schedules, strategic modules and global immersion.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdsBxDLGLdxHeUXCT6U6xaVkSTlkSJh1b95THI6MeoIImKHLw/viewform?pli=1",
    highlights: ["Weekend Classes", "Global Immersion", "CXO Mentorship"],
    overlay:
      "bg-gradient-to-br from-brand-magenta/80 via-black/75 to-black/60 mix-blend-multiply",
    badgeClass:
      "bg-brand-magenta/25 text-foreground/90 border border-white/30 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
    featured: true,
  },
  {
    name: "Leadership Development Programs",
    area: "Executive Education",
    description:
      "Tailored leadership bootcamps, boardroom simulations and strategic training for organizational leaders.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
    link: "https://www.dsu.edu.in/academics/cee/programs",
    highlights: [
      "Boardroom Simulations",
      "Strategic Training",
      "Executive Coaching",
    ],
    overlay:
      "bg-gradient-to-br from-brand-blue/75 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-blue/30 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
    featured: true,
  },
  {
    name: "Innovation & Entrepreneurship Labs",
    area: "Executive Growth",
    description:
      "Experiential labs combining live projects, innovation workshops and startup incubation for business leaders.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
    link: "https://www.dsu.edu.in/academics/cee/innovation-labs",
    highlights: ["Live Projects", "Innovation Workshops", "Incubation Support"],
    overlay:
      "bg-gradient-to-br from-brand-orange/70 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-orange/35 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
  },
];

const CALENDAR_ENTRIES: CalendarEntry[] = [
  {
    title: "Executive MBA Calendar 2025-26",
    academicYear: "2025-26",
    description:
      "Comprehensive schedule for Executive MBA cohorts including residencies, masterclasses, evaluations and industry immersions.",
    documentUrl: "https://www.dsu.edu.in/academics/cee/calendar-events",
    tag: "Executive MBA",
  },
];

const FEATURED_NEWS: NewsItem[] = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fbf6a54aff7814535b71eda78a3d5f95e?format=webp&width=800",
    category: "Excellence",
    title: "Executive MBA Cohort Launches Digital Transformation Initiative",
    excerpt:
      "New cohort begins with focus on AI-driven business models and organizational innovation in digital era.",
    date: "Nov 14, 2025",
    color: "brand-magenta",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ff67a08f95a24431783dc54fc189e605b?format=webp&width=800",
    category: "Speakers",
    title: "Global CEO Series Features Fortune 500 Leaders",
    excerpt:
      "Monthly speaker series brings together C-suite executives sharing insights on business strategy and market innovation.",
    date: "Nov 9, 2025",
    color: "brand-blue",
  },
  {
    image:
      "https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2Fd56a1c898842468187e8ff3260f0cdda?alt=media&token=6cb58cdf-a202-461d-b774-09ce61d439c3&apiKey=4aa279a8430d441dba9c55f659831878",
    category: "Placements",
    title: "Executive MBA Alumni Network Expands Globally",
    excerpt:
      "Alumni from CEE programmes secure C-suite and board positions at leading organizations across sectors.",
    date: "Oct 30, 2025",
    color: "brand-orange",
  },
];

const DEAN_INFO: DeanInfo = {
  name: "CAPT. A. Nagaraj Subbarao",
  title:
    "Master Mariner (Dredging & Ocean Engineering/Navigation) | Specialization in Leadership & Strategy (University of Illinois – Urbana Champaign, USA) | MBA | M.Phil | PhD",
  position: "Professor & Dean, SCMS",
  photo:
    "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F1a8c3f53dac94d93a61385f8bb1ff3a6?format=webp&width=800&height=1200",
  message: [
    "Dear Prospective Executive MBA Participants,",
    "Welcome to our Executive MBA program — a transformative journey designed to elevate your career, leadership, and impact in the ever-evolving world of business. In today's dynamic and interconnected global economy, leaders are constantly challenged to adapt, innovate, and drive meaningful change. Our Executive MBA program has been thoughtfully crafted to provide you with the strategic acumen, leadership insights, and problem-solving skills needed to navigate these complexities and thrive as an industry leader or entrepreneur.",
    "At the heart of our program is a commitment to academic excellence, industry relevance, and experiential learning. We emphasize the case study method, real-world business challenges, and global perspectives, ensuring that learning is not only theoretical but deeply practical. Our faculty comprises distinguished scholars, seasoned industry practitioners, and accomplished mentors who bring a wealth of knowledge and experience to the classroom. They are dedicated to your growth, guiding you to become innovative thinkers and resilient leaders.",
    "Our diverse cohort of professionals — drawn from engineering, technology, finance, healthcare, manufacturing, and more — creates a rich, collaborative learning environment. This diversity fosters peer-to-peer learning, networking, and the exchange of ideas that transcend industries and disciplines. The program is designed to accommodate the demands of your professional life, providing flexible schedules and robust support systems to ensure your success.",
    "We take immense pride in the achievements of our graduates, who have gone on to attain senior leadership roles, launch successful ventures, and transform their organizations. The Executive MBA journey at our institution is more than a degree; it's an investment in your future — one that will empower you to lead with vision, creativity, and integrity.",
    "I invite you to embark on this remarkable journey of learning, growth, and transformation. We look forward to partnering with you as you redefine your career, expand your horizons, and shape the future of business.",
    "As Dayananda Sagar University continues to grow in prestige and excellence as an institution of higher education, there has never been a better time to become a part of our distinctive learning community represented by bright and enthusiastic students guided by professorial excellence.",
    "Warm regards,",
    "Capt A. Nagaraj Subbarao, PhD",
    "Dean | SCMS | Dayananda Sagar University, Bengaluru, India",
  ],
  borderColor: "border-purple-500/20",
  bgColor: "bg-purple-500/10",
};

const RESOURCES: Resource[] = [
  {
    title: "Calendar of Events",
    description:
      "Download the latest executive education calendar capturing residencies, masterclasses and evaluations.",
    href: "https://www.dsu.edu.in/academics/cee/calendar-events",
    badge: "Calendar",
  },
  {
    title: "Executive MBA Application",
    description:
      "Apply for the upcoming Executive MBA cohort with flexible weekend modes and cohort-based learning.",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdsBxDLGLdxHeUXCT6U6xaVkSTlkSJh1b95THI6MeoIImKHLw/viewform?pli=1",
    badge: "Admissions",
  },
  {
    title: "Speaker Series",
    description:
      "Browse highlights from the Global Speaker Series featuring CEOs, founders and public policy leaders.",
    href: "https://www.dsu.edu.in/academics/cee/speaker-series",
    badge: "Insights",
  },
  {
    title: "Executive Brochure",
    description:
      "Get a deep dive into curricula, outcomes, electives and residency plans for executive programmes.",
    href: "https://www.dsu.edu.in/academics/cee/brochure",
    badge: "Brochure",
  },
];

function HighlightCard({
  highlight,
  index,
}: {
  highlight: Highlight;
  index: number;
}) {
  const Icon = highlight.icon;
  return (
    <div className="group flex flex-col h-full">
      {/* Image Container */}
      <div className="relative w-full h-64 overflow-hidden rounded-lg mb-6">
        <img
          src={highlight.image}
          alt={highlight.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Text Content Below Image */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-3 font-display text-foreground group-hover:text-brand-magenta transition-colors">
          {highlight.title}
        </h3>
        <p className="text-sm font-body text-foreground/80 leading-relaxed mb-4">
          {highlight.description}
        </p>
        {highlight.stat ? (
          <div className="text-xs uppercase tracking-wide font-semibold text-foreground/60 font-body mb-4">
            {highlight.stat}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function ProgramCardComponent({ program }: { program: ProgramCard }) {
  const isInternal = program.link.startsWith("/");
  const wrapperClasses = `group block h-full rounded-none ${
    program.featured ? "lg:col-span-6" : "lg:col-span-3"
  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta focus-visible:ring-offset-2 focus-visible:ring-offset-background`;
  const overlayClasses =
    program.overlay ??
    "bg-gradient-to-t from-black/85 via-black/50 to-transparent";
  const badgeClasses = `inline-flex items-center gap-2 rounded-none px-3 py-1 text-xs uppercase tracking-wide ${
    program.badgeClass ?? "bg-white/15 text-foreground/80 backdrop-blur"
  }`;
  const panelClasses = `rounded-none border border-white/15 p-6 shadow-[0_25px_80px_-35px_rgba(255,255,255,0.45)] transition-colors duration-500 ${
    program.panelClass ?? "bg-black/60 backdrop-blur-lg"
  }`;

  const content = (
    <div
      className={`relative flex h-full flex-col justify-end overflow-hidden rounded-none border border-white/10 bg-black/10 backdrop-blur-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-magenta/20 ${
        program.featured ? "min-h-[360px]" : "min-h-[300px]"
      }`}
    >
      <img
        src={program.image}
        alt={program.name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className={`absolute inset-0 ${overlayClasses}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      <div className={`absolute left-6 top-6 ${badgeClasses}`}>
        {program.area}
      </div>
      <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
        <div className={panelClasses}>
          <div className="space-y-4">
            <div>
              <h3 className="font-display text-2xl leading-tight text-white">
                {program.name}
              </h3>
              <p className="mt-3 text-sm text-white/85 font-body">
                {program.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {program.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-white/85"
                >
                  {item}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-colors group-hover:text-brand-magenta">
              Learn more
              <ChevronRight className="h-4 w-4 transition-colors group-hover:text-brand-magenta" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  if (isInternal) {
    return (
      <RouterLink to={program.link} className={wrapperClasses}>
        {content}
      </RouterLink>
    );
  }

  return (
    <a
      href={program.link}
      target="_blank"
      rel="noreferrer"
      className={wrapperClasses}
    >
      {content}
    </a>
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
          Download Calendar
          <ChevronRight className="h-4 w-4" />
        </a>
      </CardContent>
    </Card>
  );
}

function HeroVideo() {
  return (
    <div className="h-[40vh] sm:h-[55vh] md:h-[65vh] lg:h-[75vh] relative overflow-hidden flex items-center justify-start hero-video-container">
      <img
        src={HERO_IMAGE}
        alt="Center for Executive Education - Professional Leadership"
        className="absolute inset-0 object-cover"
        style={{
          filter: "brightness(1.1) contrast(1.15) saturate(1.2)",
          objectPosition: "center 50%",
        }}
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none"></div>

      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-magenta/5 rounded-full filter blur-3xl opacity-60 animate-float pointer-events-none"></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full filter blur-3xl opacity-60 animate-float pointer-events-none"
        style={{ animationDelay: "2s" }}
      ></div>

      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,.03) 0px, rgba(255,255,255,.03) 1px, transparent 1px, transparent 2px)",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-3 w-full z-10 pb-20 md:pb-0">
        <div className="max-w-2xl">
          <p className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 uppercase tracking-widest font-display">
            Center for Executive Education
          </p>
          <h1 className="text-sm md:text-base text-white/80 mb-6 leading-tight font-display">
            Executive MBA & Leadership Ecosystem
          </h1>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdsBxDLGLdxHeUXCT6U6xaVkSTlkSJh1b95THI6MeoIImKHLw/viewform?pli=1"
              target="_blank"
              rel="noreferrer"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Button
                size="lg"
                className="bg-white hover:bg-white/90 text-orange-600 hover:text-orange-700 px-8 py-6 text-base font-semibold font-display transition-all duration-300 group border-2 border-white"
              >
                Apply Now
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function OfferingCard({ offering }: { offering: Offering }) {
  const Icon = offering.icon;
  return (
    <Card className="h-full rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-magenta/10 text-brand-magenta">
          <Icon className="h-5 w-5" />
        </span>
        <CardTitle className="text-base font-display">
          {offering.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-sm leading-relaxed text-foreground font-body">
          {offering.description}
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

export default function CEE() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative" id="top">
        <HeroVideo />
      </section>

      <section id="offerings" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <Badge className="bg-brand-magenta/15 text-brand-magenta">
              Programme Spectrum
            </Badge>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              Pathways for working professionals
            </h2>
            <p className="mt-3 text-sm text-foreground font-body max-w-3xl mx-auto">
              Modular journeys blend weekend residencies, leadership labs,
              industry immersions and personalised mentoring to elevate
              executive careers.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {OFFERINGS.map((offering) => (
              <OfferingCard key={offering.title} offering={offering} />
            ))}
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
                Executive Programmes
              </h2>
              <p className="mt-3 text-sm text-foreground font-body">
                Modular executive pathways combining weekend residencies,
                strategic modules, CXO mentorship and global immersion for
                working professionals.
              </p>
            </div>
          </div>

          <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-12">
            {PROGRAM_CARDS.map((program) => (
              <ProgramCardComponent key={program.name} program={program} />
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
                  Executive Education Calendar
                </h2>
                <p className="text-sm text-foreground font-body">
                  Curated updates for ongoing programmes including residencies,
                  masterclasses, speaker series and evaluations.
                </p>
                <a
                  href="https://www.dsu.edu.in/academics/cee/news-events"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta hover:underline"
                >
                  Browse all events
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
        id="resources"
        className="bg-gradient-to-r from-brand-blue/5 to-brand-orange/5 px-6 py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Calendar & Resources
              </Badge>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">
                Plan Your Executive Journey
              </h2>
              <p className="mt-3 text-sm text-foreground font-body">
                Access calendars, brochures and speaker archives to stay ahead
                of application timelines and learning engagements.
              </p>
            </div>
            <a
              href="https://www.dsu.edu.in/academics/cee/news-events"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
            >
              News & events hub
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

      <section
        id="featured-news"
        className="px-6 py-16 bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-3">
              Latest from CEE
            </h2>
            <p className="text-sm text-foreground font-body">
              Stories of leadership excellence, speaker insights and alumni
              success
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {FEATURED_NEWS.map((item, index) => (
              <a
                key={item.title}
                href="#"
                className="group flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative w-full h-64 overflow-hidden rounded-lg mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Overlaid Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={`text-xs font-bold tracking-wider text-white ${
                        item.color === "brand-orange"
                          ? "bg-brand-orange"
                          : item.color === "brand-magenta"
                            ? "bg-brand-magenta"
                            : "bg-blue-600"
                      }`}
                    >
                      {item.category}
                    </Badge>
                  </div>
                </div>

                {/* Text Content Below Image */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-foreground font-display line-clamp-2 group-hover:text-brand-magenta transition-colors mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground/80 font-body line-clamp-3 mb-4">
                    {item.excerpt}
                  </p>

                  {/* Date and Link */}
                  <div className="mt-auto pt-4 border-t border-border/30 flex items-center justify-between">
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

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-none border border-brand-magenta/20 bg-brand-magenta/5 p-10">
            <h3 className="mb-3 font-display text-3xl">
              Accelerate Your Leadership Impact
            </h3>
            <p className="mb-6 text-foreground font-body">
              Join an executive cohort that blends innovation labs, global
              mentors and actionable playbooks to elevate your organisation.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdsBxDLGLdxHeUXCT6U6xaVkSTlkSJh1b95THI6MeoIImKHLw/viewform?pli=1"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="bg-brand-gradient text-foreground">
                  Apply Today
                  <GraduationCap className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <RouterLink to="/admissions">
                <Button
                  variant="outline"
                  className="border-brand-magenta/40 hover:bg-brand-magenta/10"
                >
                  Talk to Admissions
                </Button>
              </RouterLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
