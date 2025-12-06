import { Link as RouterLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  ChevronRight,
  FileText,
  Gavel,
  Globe,
  GraduationCap,
  Landmark,
  Scale,
  ShieldCheck,
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

type NewsItem = {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  color: "brand-magenta" | "brand-blue" | "brand-orange";
};

const USP_HIGHLIGHTS: USPHighlight[] = [
  {
    title: "New Age Lawyering",
    description:
      "Curriculum anchored in emerging domains like technology law, ADR, fintech regulation and human rights advocacy.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
    icon: ShieldCheck,
    stat: "Outcome-Focused",
  },
  {
    title: "Experiential Pedagogy",
    description:
      "Moot courts, legal aid clinics and simulation labs embed practice-ready skills into every semester.",
    image:
      "https://images.unsplash.com/photo-1528740579684-5809094cdaa1?q=80&w=1600&auto=format&fit=crop",
    icon: Gavel,
  },
  {
    title: "Research & Policy Impact",
    description:
      "Faculty-led centres address contemporary legal issues with publications, policy briefs and community engagement.",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1600&auto=format&fit=crop",
    icon: Globe,
  },
  {
    title: "Mentor Network",
    description:
      "Learn from advocates, judges, general counsels and public policy experts through masterclasses and internships.",
    image:
      "https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?q=80&w=1600&auto=format&fit=crop",
    icon: Users,
  },
];

const PROGRAM_CARDS: ProgramCard[] = [
  {
    name: "B.B.A., LL.B. (Hons)",
    area: "Integrated UG (Commerce & Law)",
    description:
      "Comprehensive 5-year programme blending business acumen with rigorous legal training, case studies and moot court practice for corporate law readiness.",
    image:
      "https://images.unsplash.com/photo-1528740579684-5809094cdaa1?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/law/bba-llb",
    highlights: ["Corporate Law", "Contract Drafting", "Moot Court"],
    overlay: "bg-gradient-to-br from-brand-magenta/80 via-black/75 to-black/60 mix-blend-multiply",
    badgeClass: "bg-brand-magenta/25 text-foreground/90 border border-white/30 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
    featured: true,
  },
  {
    name: "B.A., LL.B. (Hons)",
    area: "Integrated UG (Arts & Law)",
    description:
      "5-year integrated programme combining humanities scholarship with legal education, constitutional law emphasis, and public interest law practice.",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/law/ba-llb",
    highlights: ["Constitutional Law", "Public Interest", "Advocacy"],
    overlay: "bg-gradient-to-br from-brand-blue/75 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass: "bg-brand-blue/30 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
    featured: true,
  },
  {
    name: "LL.B. (Master of Laws)",
    area: "Postgraduate Specialisation",
    description:
      "Advanced 3-year postgraduate programme for law graduates specializing in litigation, corporate law, public law or emerging tech law domains.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/law/llb",
    highlights: ["Specializations", "Research Focus", "Industry Internships"],
    overlay: "bg-gradient-to-br from-brand-orange/70 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass: "bg-brand-orange/35 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
    featured: true,
  },
];

const FEATURED_NEWS: NewsItem[] = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fbf6a54aff7814535b71eda78a3d5f95e?format=webp&width=800",
    category: "Excellence",
    title: "Law Students Win All India Moot Court Championship 2025",
    excerpt:
      "DSU Law team clinches first position at the prestigious National Moot Court Championship with outstanding oral advocacy and legal reasoning.",
    date: "Nov 15, 2025",
    color: "brand-magenta",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ff67a08f95a24431783dc54fc189e605b?format=webp&width=800",
    category: "Research",
    title: "Faculty Research Published in Harvard Law Review",
    excerpt:
      "Prof. Justice Sharma's groundbreaking work on constitutional interpretation and ADR published in leading international legal journal.",
    date: "Nov 10, 2025",
    color: "brand-blue",
  },
  {
    image:
      "https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2Fd56a1c898842468187e8ff3260f0cdda?alt=media&token=6cb58cdf-a202-461d-b774-09ce61d439c3&apiKey=4aa279a8430d441dba9c55f659831878",
    category: "Placement",
    title: "100% Placement Rate for 2024-25 Law Batch",
    excerpt:
      "Law graduates placed at top law firms, corporate legal departments, and government organizations with competitive packages.",
    date: "Oct 25, 2025",
    color: "brand-orange",
  },
];

const DEAN_INFO: DeanInfo = {
  name: "Prof. Justice Sharma",
  title: "LL.M",
  position: "Dean, School of Law",
  photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  videoUrl: "https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2F0c95c62aa88741fca8ebdc32aade53d5?alt=media&token=c57ff4a9-aea8-4ff3-843b-23ce820ba630&apiKey=4aa279a8430d441dba9c55f659831878",
  borderColor: "border-blue-500/20",
  bgColor: "bg-blue-500/10",
};

function ProgramCardComponent({ program }: { program: ProgramCard }) {
  const isInternal = program.link.startsWith("/");
  const wrapperClasses = `group block h-full rounded-none ${
    program.featured ? "lg:col-span-4" : "lg:col-span-3"
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
            School of Law
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-display">
            Gateway to New Age Lawyering
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl font-display">
            Master contemporary legal challenges through immersive learning, moot courts, legal aid clinics, and mentorship from leading practitioners
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

export default function Law() {
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
              Why Future Advocates Choose DSU Law
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
                Academic Pathways for Legal Excellence
              </h2>
              <p className="mt-3 text-sm text-foreground font-body">
                Integrated and postgraduate programmes combining rigorous legal scholarship with moot courts, legal aid clinics, research and mentorship to prepare practice-ready advocates.
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

      <section id="featured-news" className="px-6 py-16 bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-3">
              Latest from School of Law
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

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Experiential Hubs
              </Badge>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">
                Clinics, Centres & Knowledge Spaces
              </h2>
              <p className="mt-3 text-sm text-foreground font-body">
                Transform classroom insights into societal impact through moot courts, legal aid clinics, research collaborations and specialized libraries.
              </p>
            </div>
            <a
              href="https://www.dsu.edu.in/law/law-student"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
            >
              Student hub
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="rounded-none border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-none bg-brand-magenta/10 text-brand-magenta">
                  <Gavel className="h-5 w-5" />
                </span>
                <CardTitle className="text-base font-display">Moot Court Arena</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm leading-relaxed text-foreground font-body">
                  Practice oral advocacy, client counselling and arbitration in purpose-built spaces.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-none border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-none bg-brand-magenta/10 text-brand-magenta">
                  <Scale className="h-5 w-5" />
                </span>
                <CardTitle className="text-base font-display">Legal Aid Clinic</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm leading-relaxed text-foreground font-body">
                  Serve communities, run legal literacy drives and collaborate with NGOs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-none border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-none bg-brand-magenta/10 text-brand-magenta">
                  <Globe className="h-5 w-5" />
                </span>
                <CardTitle className="text-base font-display">Research Centres</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm leading-relaxed text-foreground font-body">
                  Interdisciplinary centres focused on public policy, technology law and human rights.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-none border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-none bg-brand-magenta/10 text-brand-magenta">
                  <BookOpen className="h-5 w-5" />
                </span>
                <CardTitle className="text-base font-display">Law Library</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm leading-relaxed text-foreground font-body">
                  Access curated repository of journals, databases and international case law.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-none border border-brand-magenta/20 bg-brand-magenta/5 p-10">
            <h3 className="mb-3 font-display text-3xl">
              Shape the Future of Justice with DSU
            </h3>
            <p className="mb-6 text-foreground font-body">
              Gain courtroom confidence, global exposure and thought leadership by immersing yourself in DSU's vibrant legal ecosystem.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://admissions.dsu.edu.in/"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="bg-brand-gradient text-foreground">
                  Begin Application
                  <GraduationCap className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a
                href="https://www.dsu.edu.in/law/conference-law"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-brand-magenta/40 hover:bg-brand-magenta/10"
                >
                  Upcoming Conferences
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
