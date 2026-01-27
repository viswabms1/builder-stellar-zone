import { Link as RouterLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Atom,
  Award,
  Beaker,
  BookOpen,
  Brain,
  CalendarDays,
  ChevronRight,
  Cpu,
  Download,
  FileText,
  FlaskConical,
  GraduationCap,
  Lightbulb,
  Microscope,
  Network,
  Rocket,
  ShieldCheck,
  Users,
  Volume2,
  VolumeX,
  Zap,
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
import { NewsSection } from "@/components/NewsSection";
import { EventsSection } from "@/components/EventsSection";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { DeanSection, type DeanInfo } from "@/components/DeanSection";
import { ProgramFinder } from "@/components/ProgramFinder";
import { useAutoMuteOnScroll } from "@/hooks/useAutoMuteOnScroll";
import {
  getAppliedSciencesEvents,
  getAppliedSciencesNews,
  getAppliedSciencesAnnouncements,
  type NoticeItem as ImportedNoticeItem,
} from "@/data/applied-sciences-events";

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

type NoticeItem = ImportedNoticeItem;

const getAllAppliedSciencesEvents = () => getAppliedSciencesEvents();
const getAppliedSciencesNewsData = () => getAppliedSciencesNews();
const getAppliedSciencesAnnouncementsData = () =>
  getAppliedSciencesAnnouncements();

function NoticeBoardCarousel() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);

  const events = getAllAppliedSciencesEvents();
  const news = getAppliedSciencesNewsData();
  const announcements = getAppliedSciencesAnnouncementsData();

  useEffect(() => {
    if (events.length === 0) return;
    const interval = setInterval(() => {
      setCurrentEventIndex((prev) => (prev + 1) % events.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [events.length]);

  useEffect(() => {
    if (news.length === 0) return;
    const interval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % news.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [news.length]);

  useEffect(() => {
    if (announcements.length === 0) return;
    const interval = setInterval(() => {
      setCurrentAnnouncementIndex((prev) => (prev + 1) % announcements.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [announcements.length]);

  const getCategoryStyles = (category: "Event" | "News" | "Announcement") => {
    switch (category) {
      case "Event":
        return {
          borderColor: "border-brand-magenta",
          bgColor: "bg-brand-magenta/10",
          textColor: "text-brand-magenta",
          dotColor: "bg-brand-magenta",
        };
      case "News":
        return {
          borderColor: "border-brand-orange",
          bgColor: "bg-brand-orange/10",
          textColor: "text-brand-orange",
          dotColor: "bg-brand-orange",
        };
      default:
        return {
          borderColor: "border-brand-blue",
          bgColor: "bg-brand-blue/10",
          textColor: "text-brand-blue",
          dotColor: "bg-brand-blue",
        };
    }
  };

  const renderCarousel = (
    title: string,
    items: NoticeItem[],
    currentIndex: number,
    setCurrentIndex: (idx: number) => void,
    category: "Event" | "News" | "Announcement",
  ) => {
    const styles = getCategoryStyles(category);

    if (items.length === 0) {
      return (
        <div className="space-y-4">
          <div
            className={`flex items-center gap-2 px-4 py-3 rounded-xl border-l-4 ${styles.borderColor} ${styles.bgColor}`}
          >
            <h3 className={`headline-4 font-display ${styles.textColor}`}>
              {title}
            </h3>
          </div>
          <p className="text-xs text-foreground/60 italic p-4 text-center">
            No items to display
          </p>
        </div>
      );
    }

    const currentItem = items[currentIndex];

    return (
      <div className="space-y-4">
        <div
          className={`flex items-center gap-2 px-4 py-3 rounded-xl border-l-4 ${styles.borderColor} ${styles.bgColor}`}
        >
          <h3 className={`headline-4 font-display ${styles.textColor}`}>
            {title}
          </h3>
          <Badge className="ml-auto text-xs">
            {currentIndex + 1} / {items.length}
          </Badge>
        </div>

        <Card className="group overflow-hidden rounded-2xl border-2 border-border/30 bg-card/40 backdrop-blur-sm">
          {currentItem.image && (
            <div className="relative h-48 overflow-hidden">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          )}
          <CardContent className="p-4 space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <h4 className="font-display font-semibold text-sm text-foreground mb-2 line-clamp-2">
                  {currentItem.title}
                </h4>
                <p className="text-xs text-foreground/70 line-clamp-2">
                  {currentItem.description}
                </p>
                {currentItem.department && (
                  <p className="text-xs text-foreground/50 mt-2">
                    Department: {currentItem.department}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-border/20">
              <span className="text-xs font-semibold text-foreground/60">
                {currentItem.date}
              </span>
              {currentItem.link && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 px-2 text-xs bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20"
                  asChild
                >
                  <a href={currentItem.link} target="_blank" rel="noreferrer">
                    <Download className="h-3 w-3 mr-1" />
                    PDF
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-between gap-2">
          <div className="flex gap-1">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === currentIndex
                    ? `${styles.dotColor} w-6`
                    : "bg-border/40 w-1.5 hover:bg-border/60"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-1">
            <Button
              variant="outline"
              size="sm"
              className="h-7 px-2 text-xs"
              onClick={() =>
                setCurrentIndex(
                  (prev) => (prev - 1 + items.length) % items.length,
                )
              }
            >
              ←
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-7 px-2 text-xs"
              onClick={() =>
                setCurrentIndex((prev) => (prev + 1) % items.length)
              }
            >
              →
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="px-3 py-8">
      <div className="mx-auto max-w-7xl space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="headline-2 mb-3 font-display">
              <span className="text-foreground">
                School of Basic & Applied Sciences
              </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Notice Board
              </span>
            </h2>
            <p className="max-w-2xl text-sm text-foreground sm:text-base font-body">
              Stay updated with upcoming events, news, and important
              announcements from the school.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div>
            {renderCarousel(
              "Events",
              events,
              currentEventIndex,
              setCurrentEventIndex,
              "Event",
            )}
          </div>
          <div>
            {renderCarousel(
              "News",
              news,
              currentNewsIndex,
              setCurrentNewsIndex,
              "News",
            )}
          </div>
          <div>
            {renderCarousel(
              "Announcements",
              announcements,
              currentAnnouncementIndex,
              setCurrentAnnouncementIndex,
              "Announcement",
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1581091870622-5f1e9b8d2f70?q=80&w=2000&auto=format&fit=crop";

const UG_PROGRAM_CARDS: ProgramCard[] = [
  {
    name: "Bachelor of Science",
    area: "Interdisciplinary Sciences",
    description:
      "Innovative triple major programme combining core science disciplines, allowing students to specialise in multiple areas for enhanced flexibility and career opportunities.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/basic-applied-sciences/bsc-triple-major",
    highlights: [
      "Biotechnology, Biochemistry & Genetics",
      "Biotechnology, Chemistry & Microbiology",
      "Microbiology, Genetics & Biochemistry",
    ],
    overlay:
      "bg-gradient-to-br from-brand-blue/75 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-blue/30 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
    featured: true,
  },
];

const PG_PROGRAM_CARDS: ProgramCard[] = [
  {
    name: "Master of Science",
    area: "Advanced Life Sciences",
    description:
      "Specialized Master of Science programmes offering in-depth study and research opportunities with thesis work and industry collaboration.",
    image:
      "https://images.unsplash.com/photo-1576091160399-b2883cf36b6e?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/basic-applied-sciences/msc-specializations",
    highlights: [
      "M.Sc. Biochemistry",
      "M.Sc. Biotechnology",
      "M.Sc. Microbiology",
      "M.Sc. Molecular Biology and Genetics",
    ],
    overlay:
      "bg-gradient-to-br from-brand-orange/70 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-orange/30 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
    featured: true,
  },
];

const CALENDAR_ENTRIES: CalendarEntry[] = [
  {
    title: "School of Basic & Applied Sciences Academic Calendar",
    academicYear: "2025-26",
    description:
      "Detailed timeline for all science programmes including lab cycles, internships and research presentations.",
    documentUrl:
      "https://www.dsu.edu.in/images/AppliedSciences/calendar_2025_26.pdf",
    tag: "SBAS",
  },
];

const FEATURED_NEWS: NewsItem[] = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fbf6a54aff7814535b71eda78a3d5f95e?format=webp&width=800",
    category: "Excellence",
    title: "SBAS Students Win National Science Research Competition",
    excerpt:
      "DSU science students awarded first prize at National Research Summit for innovative biotechnology project.",
    date: "Nov 12, 2025",
    color: "brand-magenta",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ff67a08f95a24431783dc54fc189e605b?format=webp&width=800",
    category: "Research",
    title: "Faculty Research on Biotechnology Published in Nature Science",
    excerpt:
      "DSU SBAS faculty publish groundbreaking research on sustainable biotechnology solutions.",
    date: "Nov 8, 2025",
    color: "brand-blue",
  },
  {
    image:
      "https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2Fd56a1c898842468187e8ff3260f0cdda?alt=media&token=6cb58cdf-a202-461d-b774-09ce61d439c3&apiKey=4aa279a8430d441dba9c55f659831878",
    category: "Placement",
    title: "92% Placement Rate for 2024-25 Science Graduates",
    excerpt:
      "Science graduates placed at leading research institutions, biotech companies and analytics firms.",
    date: "Oct 28, 2025",
    color: "brand-orange",
  },
];

const DEAN_INFO: DeanInfo = {
  name: "Dr. Sunil S. More",
  title: "Ph.D in Biochemistry",
  position: "Professor & Dean, School of Basic & Applied Sciences",
  photo:
    "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fd8f7ea1fbcf24620b4dbc648eadcbd11?format=webp&width=800",
  videoUrl:
    "https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2F06e31dd773f042938ce9ce8289ec8bc9?alt=media&token=f6da0a27-8ae3-47f4-b420-360c8bc0d8bb&apiKey=4aa279a8430d441dba9c55f659831878",
  borderColor: "border-violet-500/20",
  bgColor: "bg-violet-500/10",
};

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
  const panelClasses = `rounded-none border border-white/15 p-3 shadow-[0_25px_80px_-35px_rgba(255,255,255,0.45)] transition-colors duration-500 ${
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
      <div className={`absolute left-6 top-3 ${badgeClasses}`}>
        {program.area}
      </div>
      <div className="relative z-10 flex h-full flex-col justify-end p-3 text-white">
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
  const containerRef = useAutoMuteOnScroll(videoRef);

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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      const isVisible =
        rect && rect.top < window.innerHeight && rect.bottom > 0;
      if (isVisible) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    };

    video.addEventListener("ended", handleEnded);
    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="hero-video-container relative flex items-center justify-start"
      >
        <video
          ref={videoRef}
          src="https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2F52dab630f4f84f40988812c8d91b12df?alt=media&token=d1204219-4499-4c1c-88ef-3532d4ab6b61&apiKey=4aa279a8430d441dba9c55f659831878"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          preload="metadata"
          crossOrigin="anonymous"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 85%",
            filter: "brightness(1.1) contrast(1.15) saturate(1.2)",
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

        <button
          onClick={toggleMute}
          className="absolute top-4 right-8 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white backdrop-blur-sm border border-white/20"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5" />
          ) : (
            <Volume2 className="h-5 w-5" />
          )}
        </button>

        <div className="hero-title-inside absolute bottom-0 left-0 right-0 z-20 flex items-end justify-start p-3 sm:p-6 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <p className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-1 sm:mb-4 uppercase tracking-widest font-display">
              School of Basic & Applied Sciences
            </p>
            <h1 className="text-xs sm:text-base md:text-base text-white/80 mb-2 sm:mb-6 leading-tight font-display">
              Science for Sustainable Tomorrow
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-background relative max-w-7xl mx-auto px-3 w-full py-6 sm:py-8">
        <div className="hero-title-outside max-w-2xl">
          <p className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-1 sm:mb-4 uppercase tracking-widest font-display">
            School of Basic & Applied Sciences
          </p>
          <h1 className="text-xs sm:text-base md:text-base text-foreground/80 mb-2 sm:mb-6 leading-tight font-display">
            Science for Sustainable Tomorrow
          </h1>
        </div>

        <div className="flex flex-row gap-2 sm:gap-4">
          <a
            href="https://admissions.dsu.edu.in/"
            target="_blank"
            rel="noreferrer"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Button
              size="sm"
              className="sm:size-lg bg-white hover:bg-white/90 text-orange-600 hover:text-orange-700 px-4 sm:px-8 py-2 sm:py-6 text-xs sm:text-base font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
            >
              Apply Now
              <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}

export default function AppliedSciences() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative" id="top">
        <HeroVideo />
      </section>

      {/* Dean's Message Section */}
      <div style={{ marginTop: "2cm" }}>
        <DeanSection dean={DEAN_INFO} />
      </div>

      <section id="programs" className="relative overflow-hidden px-3 py-8">
        <div
          className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-brand-magenta/20 via-transparent to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl">
                Academic Pathways in Sciences
              </h2>
              <p className="mt-3 text-sm text-foreground font-body">
                Comprehensive undergraduate and postgraduate programmes
                combining rigorous academics with research immersion, capstone
                projects and industry internships to prepare problem-solvers and
                innovators.
              </p>
            </div>
          </div>

          {/* Undergraduate Programs */}
          <div className="mb-8">
            <div className="mb-8">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Undergraduate Programs
              </Badge>
              <h3 className="mt-4 font-display text-2xl md:text-3xl">
                Bachelor Degree Programs
              </h3>
              <p className="mt-2 text-sm text-foreground font-body">
                Build foundation across biological and physical sciences
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
                Advance into research, specialisation and scientific leadership
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

      <section
        id="related-resources"
        className="bg-gradient-to-r from-brand-magenta/5 via-brand-blue/5 to-brand-orange/5 px-3 py-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl">
              Explore More at DSU SBAS
            </h2>
            <p className="mt-3 text-sm text-foreground font-body">
              Discover our research initiatives, innovation labs, placements and
              admission pathways
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
                    Advanced research labs with NVIDIA GPU-accelerated
                    infrastructure for life sciences research
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
                    NVIDIA-Powered Research
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    Cutting-edge research in biotechnology, biochemistry and
                    molecular sciences using GPU-accelerated computing
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
                    Career pathways with research institutions and tech
                    companies
                  </p>
                </CardContent>
              </Card>
            </RouterLink>

            <RouterLink
              to="/academics/basic-applied-sciences/faculty"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 flex items-center justify-center">
                  <Users className="h-12 w-12 text-brand-blue/70 group-hover:text-brand-blue transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-blue transition-colors">
                    Faculty & Staff
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    Meet our dedicated team of educators and researchers
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
                  <FlaskConical className="h-12 w-12 text-brand-magenta/70 group-hover:text-brand-magenta transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-magenta transition-colors">
                    Admissions
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p className="text-sm text-foreground/80 font-body">
                    Join DSU SBAS and shape your scientific career
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

      <section className="px-3 py-8 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="font-display text-3xl md:text-4xl mb-3">
              Research Excellence with NVIDIA AI Infrastructure
            </h2>
            <p className="text-sm text-foreground/80 font-body max-w-3xl">
              SBAS leverages cutting-edge NVIDIA GPU technology to accelerate
              research across biotechnology, biochemistry, molecular biology and
              microbiology, enabling breakthrough discoveries in life sciences.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="rounded-none border border-blue-500/30 bg-blue-500/10">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="font-display text-lg">
                    GPU-Accelerated Molecular Modeling
                  </CardTitle>
                  <Cpu className="h-5 w-5 text-blue-500/70 flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80 font-body">
                  NVIDIA DGX and CUDA-accelerated workstations enable
                  researchers to model protein structures, simulate molecular
                  interactions, and predict biochemical reactions at
                  unprecedented speeds.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-none border border-purple-500/30 bg-purple-500/10">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="font-display text-lg">
                    Computational Bioinformatics
                  </CardTitle>
                  <Brain className="h-5 w-5 text-purple-500/70 flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80 font-body">
                  Leverage GPU-powered RAPIDS for rapid genomic analysis,
                  sequence alignment, and large-scale bioinformatics pipelines
                  in biotechnology and genetics research.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-none border border-green-500/30 bg-green-500/10">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="font-display text-lg">
                    Machine Learning in Life Sciences
                  </CardTitle>
                  <Lightbulb className="h-5 w-5 text-green-500/70 flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80 font-body">
                  Apply PyTorch and TensorFlow on NVIDIA GPUs to develop AI
                  models for drug discovery, disease prediction, and
                  microbiological data analysis.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-none border border-orange-500/30 bg-orange-500/10">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="font-display text-lg">
                    Real-time Data Processing
                  </CardTitle>
                  <Zap className="h-5 w-5 text-orange-500/70 flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80 font-body">
                  Process high-volume experimental data from lab instruments and
                  sensors using NVIDIA CUDA cores for instant analysis and
                  visualization.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-none border border-cyan-500/30 bg-cyan-500/10">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="font-display text-lg">
                    Collaborative Research Infrastructure
                  </CardTitle>
                  <Network className="h-5 w-5 text-cyan-500/70 flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80 font-body">
                  Multi-GPU research clusters with NVLink technology enable
                  collaborative projects, massive simulations, and
                  enterprise-grade computational workflows.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-none border border-rose-500/30 bg-rose-500/10">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="font-display text-lg">
                    Industry-Ready Skills
                  </CardTitle>
                  <Award className="h-5 w-5 text-rose-500/70 flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80 font-body">
                  Students and faculty gain hands-on experience with NVIDIA
                  technology stack, making them highly sought-after in biotech,
                  pharmaceutical, and research-driven industries.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 rounded-lg border border-blue-500/30 bg-blue-500/5">
            <div className="flex items-start gap-3">
              <Rocket className="h-6 w-6 text-blue-500/70 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  Next-Generation Research
                </h3>
                <p className="text-sm text-foreground/80 font-body">
                  SBAS researchers are publishing groundbreaking work in
                  peer-reviewed journals, leveraging NVIDIA's parallel computing
                  capabilities to tackle complex problems in sustainable
                  science, precision medicine, and environmental biotechnology.
                  Our partnership with NVIDIA ensures students and faculty have
                  access to the same technology used by leading research
                  institutions worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 py-8">
        <div className="mx-auto grid max-w-5xl items-start gap-4 lg:grid-cols-2">
          <Card className="rounded-none border border-orange-500/20 bg-orange-500/10">
            <CardHeader>
              <CardTitle className="font-display">Leadership</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 text-sm font-body text-foreground">
              <div>
                <div className="text-foreground/70 text-xs uppercase tracking-wide">
                  Email
                </div>
                <div className="font-medium text-foreground">
                  sbas@dsu.edu.in
                </div>
              </div>
              <div>
                <div className="text-foreground/70 text-xs uppercase tracking-wide">
                  Phone
                </div>
                <div className="font-medium text-foreground">
                  +91-80-49092933
                </div>
              </div>
              <div>
                <div className="text-foreground/70 text-xs uppercase tracking-wide">
                  Campus Address
                </div>
                <div className="font-medium text-foreground">
                  Kanakapura Road, Bengaluru, Karnataka
                </div>
              </div>
              <div>
                <div className="text-foreground/70 text-xs uppercase tracking-wide">
                  Office Hours
                </div>
                <div className="font-medium text-foreground">
                  Mon–Fri, 9:00 AM – 5:30 PM
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-none border border-blue-500/20 bg-blue-500/10">
            <CardHeader>
              <CardTitle className="font-display">More Resources</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm font-body">
              <RouterLink
                to="/academics/basic-applied-sciences/faculty"
                className="hover:text-brand-magenta transition-colors"
              >
                Faculty Directory
              </RouterLink>
              <a
                href="https://www.dsu.edu.in/basic-applied-sciences/programs"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-magenta"
              >
                Programs Overview
              </a>
              <a
                href="https://www.dsu.edu.in/basic-applied-sciences/newsletter"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-magenta"
              >
                Monthly Newsletter
              </a>
              <a
                href="https://www.dsu.edu.in/basic-applied-sciences/library"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-magenta"
              >
                Digital Library
              </a>
              <a
                href="https://www.dsu.edu.in/basic-applied-sciences/student-hub"
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

      <ProgramFinder
        schoolName="School of Basic & Applied Sciences"
        themeColor="orange"
      />

      <AnnouncementBanner priority="high" variant="banner" />
      <NewsSection variant="carousel" title="Department News" />
      <EventsSection variant="carousel" title="Upcoming Events" />
    </div>
  );
}
