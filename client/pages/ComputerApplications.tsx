import { Link as RouterLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import type { LucideIcon } from "lucide-react";

import {
  Award,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  ChevronRight,
  Cpu,
  Eye,
  GraduationCap,
  Heart,
  Laptop,
  Microscope,
  Network,
  Sparkles,
  Target,
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

type USPHighlight = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  stat?: string;
};

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

const USP_HIGHLIGHTS: USPHighlight[] = [
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
      "Specialise early in full-stack development, data science, cloud computing or analytics with project studios and hands-on learning embedded in each semester.",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1600&auto=format&fit=crop",
    icon: Sparkles,
  },
  {
    title: "Industry-Powered Innovation Labs",
    description:
      "Gain hands-on experience in IBM, NVIDIA, VMware and automation technology labs for real-world problem solving and product engineering.",
    image:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop",
    icon: Cpu,
  },
  {
    title: "Data Science & Advanced Analytics",
    description:
      "New B.Sc and M.Sc programs in Data Science from 2025-26 elevating advanced analytics and AI engineering talent pipelines.",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop",
    icon: BadgeCheck,
  },
];

const UG_PROGRAM_CARDS: ProgramCard[] = [
  {
    name: "Bachelor of Computer Applications (BCA)",
    area: "Core Software Development",
    description:
      "Comprehensive undergraduate program spanning full-stack development, database management, web technologies and software engineering principles with industry mentorship.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/computer-applications/bca",
    highlights: ["Full-Stack Development", "Web Technologies", "Product Labs"],
    overlay: "bg-gradient-to-br from-brand-magenta/80 via-black/75 to-black/60 mix-blend-multiply",
    badgeClass: "bg-brand-magenta/25 text-foreground/90 border border-white/30 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
    featured: true,
  },
  {
    name: "Bachelor of Science in Data Science",
    area: "Analytics & Intelligence",
    description:
      "Launch advanced careers in data engineering, analytics, visualization and machine learning with applied projects and real-world datasets.",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/computer-applications/bsc-data-science",
    highlights: ["Data Analytics", "ML Pipelines", "Visualization"],
    overlay: "bg-gradient-to-br from-brand-blue/75 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass: "bg-brand-blue/30 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
    featured: true,
  },
];

const PG_PROGRAM_CARDS: ProgramCard[] = [
  {
    name: "Master of Computer Applications (MCA)",
    area: "Advanced Systems Engineering",
    description:
      "Specialise in enterprise software development, cloud architecture, cybersecurity and emerging technologies through research-driven coursework and industry collaboration.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/computer-applications/mca",
    highlights: ["Enterprise Systems", "Cloud Architecture", "Research Thesis"],
    overlay: "bg-gradient-to-br from-brand-magenta/70 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass: "bg-brand-magenta/30 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
    featured: true,
  },
  {
    name: "Master of Science in Data Science",
    area: "Advanced Analytics",
    description:
      "Master statistical computing, advanced machine learning, big data processing and AI applications with industry-certified capstone projects.",
    image:
      "https://images.unsplash.com/photo-1527219525129-dfc4e4c5fbf8?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/computer-applications/msc-data-science",
    highlights: ["Advanced ML", "Big Data", "AI Systems"],
    overlay: "bg-gradient-to-br from-brand-blue/70 via-brand-magenta/60 to-black/55 mix-blend-multiply",
    badgeClass: "bg-brand-blue/30 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
    featured: true,
  },
];


const CALENDAR_ENTRIES: CalendarEntry[] = [
  {
    title: "BCA & MCA Odd Semester Academic Calendar",
    academicYear: "2025-26",
    description:
      "Detailed timeline for undergraduate and postgraduate odd semesters including assessments, projects and industry immersion weeks.",
    documentUrl:
      "https://www.dsu.edu.in/images/ComputerApplications/calendar_2025_26.pdf",
    tag: "BCA / MCA",
  },
];

type NewsItem = {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  color: "brand-magenta" | "brand-blue" | "brand-orange";
};

const FEATURED_NEWS: NewsItem[] = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fbf6a54aff7814535b71eda78a3d5f95e?format=webp&width=800",
    category: "Excellence",
    title: "Computer Applications Students Win National Hackathon 2025",
    excerpt:
      "Our BCA cohort takes first place at the National Software Development Championship with an AI-powered health monitoring system.",
    date: "Nov 10, 2025",
    color: "brand-magenta",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ff67a08f95a24431783dc54fc189e605b?format=webp&width=800",
    category: "Research",
    title: "Faculty Published Research in Top-Tier Data Science Journal",
    excerpt:
      "Dr. Priya Patel's research on machine learning optimization published in IEEE Transactions on Data Science.",
    date: "Nov 5, 2025",
    color: "brand-blue",
  },
  {
    image:
      "https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2Fd56a1c898842468187e8ff3260f0cdda?alt=media&token=6cb58cdf-a202-461d-b774-09ce61d439c3&apiKey=4aa279a8430d441dba9c55f659831878",
    category: "Placement",
    title: "Record 98% Placement Rate for 2024-25 Batch",
    excerpt:
      "Computer Applications graduates placed at leading tech companies including Google, Microsoft, and Amazon with average package of ₹15 LPA.",
    date: "Oct 28, 2025",
    color: "brand-orange",
  },
];


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
              Explore programme
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
          Download PDF
          <ChevronRight className="h-4 w-4" />
        </a>
      </CardContent>
    </Card>
  );
}

function HeroVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = isMuted;
  }, [isMuted]);

  return (
    <div className="w-full h-screen relative overflow-hidden flex items-end md:items-center justify-start">
      <video
        ref={videoRef}
        src="https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2F039b67f729094553afc521bcbf44f524?alt=media&token=f3f572a0-3afd-4a0a-9570-de176cc33653&apiKey=4aa279a8430d441dba9c55f659831878"
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: "brightness(1.1) contrast(1.15) saturate(1.2)"
        }}
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none"></div>

      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-magenta/5 rounded-full filter blur-3xl opacity-60 animate-float pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full filter blur-3xl opacity-60 animate-float pointer-events-none" style={{ animationDelay: "2s" }}></div>

      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,.03) 0px, rgba(255,255,255,.03) 1px, transparent 1px, transparent 2px)"
      }}></div>

      <div className="relative max-w-7xl mx-auto px-6 w-full z-10 pb-20 md:pb-0">
        <div className="max-w-2xl">
          <p className="text-sm md:text-base text-white/80 mb-4 uppercase tracking-widest font-display">
            School of Computer Applications
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-display">
            Build Tomorrow's Digital Experiences
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl font-display">
            Master full-stack development, data science, and cloud-native innovation with industry mentorship, experiential labs, and career-focused learning
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://admissions.dsu.edu.in/"
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
            <a
              href="https://dsu.edu.in/virtual-tour/"
              target="_blank"
              rel="noreferrer"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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

      <button
        onClick={toggleMute}
        className="absolute top-8 right-8 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white backdrop-blur-sm border border-white/20"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="h-5 w-5" />
        ) : (
          <Volume2 className="h-5 w-5" />
        )}
      </button>
    </div>
  );
}

export default function ComputerApplications() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative w-full" id="top">
        <HeroVideo />
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
              Why Students and Industry Choose DSU Computer Applications
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

      <section id="programs" className="relative overflow-hidden px-6 py-16">
        <div
          className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-brand-magenta/20 via-transparent to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl">
                Future-ready academic programmes
              </h2>
              <p className="mt-3 text-sm text-foreground font-body">
                Discover comprehensive undergraduate and postgraduate pathways designed with industry expertise, experiential learning, and career-focused skill development.
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
                Build strong foundations in software development and data science
              </p>
            </div>
            <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-12">
              {UG_PROGRAM_CARDS.map((program) => (
                <ProgramCardComponent key={program.name} program={program} />
              ))}
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
                Advance into research, specialisation and domain expertise
              </p>
            </div>
            <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-12">
              {PG_PROGRAM_CARDS.map((program) => (
                <ProgramCardComponent key={program.name} program={program} />
              ))}
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
                  Computer Applications Notice Board
                </h2>
                <p className="text-sm text-foreground font-body">
                  Curated updates for the ongoing academic year 2025-26. Stay aligned with assessment windows, projects and university-hosted experiences.
                </p>
                <a
                  href="https://www.dsu.edu.in/computer-applications/notices"
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
              Explore More at DSU Computer Applications
            </h2>
            <p className="mt-3 text-sm text-foreground font-body">
              Discover our innovation initiatives, placements, career pathways and student opportunities
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
                    Industry-powered innovation labs with IBM, NVIDIA and VMware
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
                  <Microscope className="h-12 w-12 text-brand-blue/70 group-hover:text-brand-blue transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-blue transition-colors">
                    Research & Innovation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    Faculty-led research projects and student research opportunities
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
                    Career pathways with leading tech companies and startups
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
                  <Cpu className="h-12 w-12 text-brand-magenta/70 group-hover:text-brand-magenta transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-magenta transition-colors">
                    Admissions
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p className="text-sm text-foreground/80 font-body">
                    Join DSU Computer Applications and build your tech career
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
                  sca@dsu.edu.in
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
                href="https://www.dsu.edu.in/computer-applications/programs"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-magenta"
              >
                Programs Overview
              </a>
              <a
                href="https://www.dsu.edu.in/computer-applications/highlights"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-magenta"
              >
                Highlights & USP
              </a>
              <a
                href="https://www.dsu.edu.in/computer-applications/newsletter"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-magenta"
              >
                Monthly Newsletter
              </a>
              <a
                href="https://www.dsu.edu.in/computer-applications/library"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-magenta"
              >
                Digital Library
              </a>
              <a
                href="https://www.dsu.edu.in/computer-applications/clubs"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-magenta"
              >
                Student Clubs & Communities
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="featured-news" className="px-6 py-16 bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-3">
              Latest from Computer Applications
            </h2>
            <p className="text-sm text-foreground font-body">
              Stories of excellence, research breakthroughs, and student success
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

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-none border border-brand-magenta/20 bg-brand-magenta/5 p-10">
            <h3 className="mb-3 font-display text-3xl">
              Ready to launch your tech career?
            </h3>
            <p className="mb-6 text-foreground font-body">
              Explore programmes, take a virtual tour and begin your journey at the DSU School of Computer Applications.
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
              <a
                href="https://dsu.edu.in/virtual-tour/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-brand-magenta/40 hover:bg-brand-magenta/10"
                >
                  Virtual Tour
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
