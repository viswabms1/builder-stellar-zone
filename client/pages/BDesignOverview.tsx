import { Link as RouterLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
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
  Volume2,
  VolumeX,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DeanSection, type DeanInfo } from "@/components/DeanSection";
import { ProgramFinder } from "@/components/ProgramFinder";
import { useAutoMuteOnScroll } from "@/hooks/useAutoMuteOnScroll";
import { Download } from "lucide-react";
import DesignSchoolNavBar from "@/components/DesignSchoolNavBar";
import {
  getDesignEvents,
  getDesignNews,
  getDesignAnnouncements,
  type NoticeItem as ImportedNoticeItem,
} from "@/data/design-events";

type NoticeItem = ImportedNoticeItem;

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
    documentUrl: "https://www.dsu.edu.in/images/BDesign/calendar_2025_26.pdf",
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

const PROGRAM_CARDS: ProgramCard[] = [
  {
    name: "Bachelor of Design",
    area: "Undergraduate",
    description:
      "Four-year comprehensive programme combining foundational design theory with studio-based projects, global immersions, and mandatory industry internship to prepare human-centered designers and design innovators.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/design/bdesign/program",
    highlights: [
      "Product Design",
      "User Experience Design",
      "Animation and VFX",
      "Game Design",
    ],
    overlay:
      "bg-gradient-to-br from-brand-magenta/80 via-black/75 to-black/60 mix-blend-multiply",
    badgeClass:
      "bg-brand-magenta/25 text-foreground/90 border border-white/30 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
    featured: true,
  },
];

const DEAN_INFO: DeanInfo = {
  name: "Prof. Dinesh Kulkarni",
  position: "Dean, School of Design & Digital Trans-Media",
  photo:
    "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F4c97444b3cb24a3481336dfe91ee22db?format=webp&width=800",
  videoUrl:
    "https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2F8424b7a4848e447e85cd758b83aba08c?alt=media&token=c02519fd-c7bb-4aaf-adba-9897e2e5ca0f&apiKey=4aa279a8430d441dba9c55f659831878",
  borderColor: "border-pink-500/20",
  bgColor: "bg-pink-500/10",
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

function NoticeBoardCarousel() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);

  const events = getDesignEvents();
  const news = getDesignNews();
  const announcements = getDesignAnnouncements();

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
              <span className="text-foreground">B.Design </span>
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

const FACULTY_DATA = [
  { name: "Varun C.H", role: "Assistant Professor", img: "/images/faculty-varun.jpg", qualification: "Master of Animation & VFX", specializations: ["Animation", "Visual Effects", "Virtual Reality", "Unreal Engine"] },
  { name: "Abhinaya A Iyer", role: "UI/UX Design Instructor", img: "/images/faculty-abhinaya.jpg", qualification: "B.Arch, Architectural Design", specializations: ["User-Centered Interface Design", "UX Research", "Design Systems", "Interaction Design", "Micro interactions", "Design Mentoring"] },
  { name: "Komala D.S", role: "Assistant Professor", img: "/images/faculty-komala.jpg", qualification: "M.Sc Computer Science", specializations: ["Graphic Design", "User Interface design", "User Experience design", "Interaction Design"] },
  { name: "Dinesh Kulkarni", role: "Incharge – Digital Transmedia and Design", img: "/images/faculty-dinesh.jpg", qualification: "", specializations: ["Animation", "Film Making", "VFX", "Game Design", "Stereoscopy"] },
  { name: "Vivek Wallabhdas", role: "Associate Professor of Practice", img: "/images/faculty-vivek.jpg", qualification: "M.A Fine Arts", specializations: ["Media", "Animation Sciences & Techniques", "Print Design", "Motion Graphics", "eLearning and Game design"] },
  { name: "Harshitha V", role: "Assistant Professor", img: "/images/faculty-harshitha.jpg", qualification: "M.Des in Product Design", specializations: ["Product Design", "Industrial Design", "Design Research"] },
  { name: "Suresh Kumar S", role: "Assistant Professor", img: "/images/faculty-suresh.jpg", qualification: "M.Sc. Animation and VFX", specializations: ["3D Modeling", "3D Animation", "Rigging & Character Setup", "Photo-realistic Lighting & Rendering", "Generative AI in Content Creation"] },
  { name: "Suraj B S", role: "Assistant Professor", img: "/images/faculty-suraj.jpg", qualification: "M.Des in Product Design", specializations: ["Industrial Product Design", "Lifestyle Products", "Rapid Prototyping", "Product Visualisation", "Digital Rendering"] },
  { name: "Rashmi Kulkarni", role: "Instructor / Coordinator", img: "/images/faculty-rashmi.jpg", qualification: "Diploma in Electronics & Communication, PGDM in HR", specializations: ["3D Printing", "Additive manufacturing"] },
  { name: "Swapnil T Gaikwad", role: "Associate Professor Of Practice", img: "/images/faculty-swapnil.jpg", qualification: "MBD - Media Management", specializations: ["2D-Digital Animation", "Concept Art", "Pre-Visual Design", "Foundation Art", "AI Art"] },
];

function DesignFacultySection() {
  const [selectedFaculty, setSelectedFaculty] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const stepRef = useRef(0);
  const isPaused = useRef(false);
  const total = FACULTY_DATA.length;
  const ANIM_MS = 600;
  const PAUSE_MS = 900;

  // Pure DOM animation — zero React re-renders during animation
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let alive = true;
    let timerId: ReturnType<typeof setTimeout> | null = null;
    let cachedCardW = 0;
    let cachedGap = 0;

    const allCards = Array.from(track.children) as HTMLElement[];

    // GPU-accelerate the track
    track.style.willChange = "transform";

    const measureOnce = () => {
      if (allCards.length < 2) { cachedCardW = 300; cachedGap = 30; return; }
      const r0 = allCards[0].getBoundingClientRect();
      const r1 = allCards[1].getBoundingClientRect();
      cachedCardW = r0.width;
      cachedGap = r1.left - r0.right;
    };

    const applyPositions = (step: number, animate: boolean) => {
      const offset = step * (cachedCardW + cachedGap);
      track.style.transition = animate ? `transform ${ANIM_MS}ms ease-in-out` : "none";
      track.style.transform = `translateX(-${offset}px)`;
      for (let i = 0; i < allCards.length; i++) {
        allCards[i].style.transition = animate ? `padding-top ${ANIM_MS}ms ease-in-out` : "none";
        allCards[i].style.paddingTop = (i + step) % 2 !== 0 ? "clamp(80px, 10vw, 160px)" : "0px";
      }
    };

    const scheduleNext = () => {
      if (!alive) return;
      timerId = setTimeout(() => {
        if (!alive) return;
        if (isPaused.current) {
          timerId = setTimeout(() => scheduleNext(), 300);
          return;
        }

        const nextStep = stepRef.current + 1;

        if (nextStep >= total) {
          stepRef.current = nextStep;
          applyPositions(nextStep, true);
          // After animation, snap back to 0
          timerId = setTimeout(() => {
            if (!alive) return;
            stepRef.current = 0;
            applyPositions(0, false);
            void track.offsetHeight; // force paint
            scheduleNext();
          }, ANIM_MS + 50);
        } else {
          stepRef.current = nextStep;
          applyPositions(nextStep, true);
          scheduleNext();
        }
      }, PAUSE_MS + ANIM_MS);
    };

    // Wait for layout to stabilize (images to start loading, dimensions to settle)
    // Then measure once, set initial state, and start the loop
    const startDelay = setTimeout(() => {
      if (!alive) return;
      measureOnce();
      applyPositions(0, false);
      scheduleNext();
    }, 300);

    // Re-measure on resize
    const onResize = () => { measureOnce(); applyPositions(stepRef.current, false); };
    window.addEventListener("resize", onResize);

    return () => {
      alive = false;
      if (timerId) clearTimeout(timerId);
      clearTimeout(startDelay);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    isPaused.current = selectedFaculty !== null;
  }, [selectedFaculty]);

  return (
    <section
      className="w-full bg-white overflow-hidden relative"
      style={{ paddingTop: "clamp(24px, 2.5vw, 48px)", paddingBottom: "0" }}
      onMouseEnter={() => { isPaused.current = true; }}
      onMouseLeave={() => { if (selectedFaculty === null) isPaused.current = false; }}
    >
      <div style={{ maxWidth: "1720px", margin: "0 auto", padding: "0 clamp(20px, 5.2%, 100px)" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", fontWeight: 700, fontSize: "clamp(28px, 3.9vw, 75px)", lineHeight: "normal", letterSpacing: "0.75px", color: "#000", marginBottom: "clamp(8px, 1vw, 16px)" }}>
          Meet Our Faculties
        </h2>
        <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: "clamp(14px, 1.46vw, 28px)", lineHeight: "1.8", color: "#474747", marginBottom: "clamp(16px, 2vw, 32px)" }}>
          Our faculties are a tight knit of designers, artists, and visionaries, all bound by the same creative enthusiasm.
        </p>
      </div>

      <div className="relative overflow-hidden" style={{ height: "clamp(320px, 42vw, 700px)", padding: "0 clamp(20px, 3%, 60px)" }}>
        {/* Track: NO inline transform/transition — managed entirely via JS refs */}
        <div
          ref={trackRef}
          className="flex absolute"
          style={{ gap: "clamp(16px, 2vw, 40px)", alignItems: "flex-start" }}
        >
          {[...FACULTY_DATA, ...FACULTY_DATA].map((faculty, i) => {
            const dataIdx = i % total;
            return (
              <button
                key={`f-${i}`}
                className="flex-shrink-0 flex flex-col items-center group cursor-pointer"
                style={{ width: "clamp(180px, 23vw, 442px)" }}
                onClick={() => setSelectedFaculty(selectedFaculty === dataIdx ? null : dataIdx)}
              >
                <div className="relative overflow-hidden rounded-full bg-[#e8e8e8] w-full" style={{ aspectRatio: "1 / 1" }}>
                  <img src={faculty.img} alt={faculty.name} className="absolute inset-0 w-full h-full object-cover object-top" loading="lazy" />
                </div>
                <p className="text-center w-full" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "clamp(16px, 1.58vw, 30px)", color: "#1E242C", lineHeight: "1.5", marginTop: "clamp(8px, 1vw, 16px)" }}>
                  {faculty.name}
                </p>
                <p className="text-center w-full" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: "clamp(11px, 0.95vw, 18px)", color: "#414D60", lineHeight: "1.5" }}>
                  {faculty.role}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Faculty detail overlay */}
      {selectedFaculty !== null && (
        <div className="fixed inset-0 z-[10005] flex items-center justify-center" onClick={() => setSelectedFaculty(null)} style={{ backgroundColor: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)" }}>
          <div className="bg-white relative" onClick={(e) => e.stopPropagation()} style={{ width: "clamp(320px, 35vw, 540px)", borderRadius: "14px", padding: "clamp(20px, 1.8vw, 35px)", boxShadow: "0 20px 60px rgba(0,0,0,0.2)", animation: "fadeScaleIn 0.3s ease forwards" }}>
            <style>{`@keyframes fadeScaleIn { from { opacity:0; transform:scale(0.9) translateY(20px); } to { opacity:1; transform:scale(1) translateY(0); } }`}</style>
            <div className="flex items-start justify-between">
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "clamp(18px, 1.25vw, 24px)", color: "#1E242C", lineHeight: "1.5" }}>{FACULTY_DATA[selectedFaculty].name}</p>
                <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 0.83vw, 16px)", color: "#414D60", lineHeight: "1.5" }}>{FACULTY_DATA[selectedFaculty].role}</p>
              </div>
              <button onClick={() => setSelectedFaculty(null)} className="flex-shrink-0 hover:bg-gray-100 rounded-full p-1.5 transition-colors">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M13.5 4.5L4.5 13.5M4.5 4.5l9 9" stroke="#1E242C" strokeWidth="2" strokeLinecap="round" /></svg>
              </button>
            </div>
            <div style={{ height: "1px", backgroundColor: "#E5E7EB", margin: "clamp(16px, 1.5vw, 30px) 0" }} />
            {FACULTY_DATA[selectedFaculty].qualification && (
              <div className="flex items-center justify-between flex-wrap" style={{ fontFamily: "'Manrope', sans-serif", fontSize: "clamp(12px, 0.83vw, 16px)", lineHeight: "1.5", marginBottom: "clamp(16px, 1.5vw, 30px)" }}>
                <p style={{ fontWeight: 700, color: "#1E242C" }}>Qualification</p>
                <p style={{ fontWeight: 400, color: "#414D60" }}>{FACULTY_DATA[selectedFaculty].qualification}</p>
              </div>
            )}
            <div>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "clamp(12px, 0.83vw, 16px)", color: "#1E242C", lineHeight: "1.5", marginBottom: "clamp(8px, 0.78vw, 15px)" }}>Specializations</p>
              <div className="flex items-center flex-wrap" style={{ gap: "clamp(6px, 0.5vw, 10px)" }}>
                {FACULTY_DATA[selectedFaculty].specializations.map((spec, i) => (
                  <span key={spec} className="flex items-center" style={{ gap: "clamp(6px, 0.5vw, 10px)" }}>
                    <span style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: "clamp(11px, 0.73vw, 14px)", color: "#414D60" }}>{spec}</span>
                    {i < FACULTY_DATA[selectedFaculty].specializations.length - 1 && <span style={{ width: "1px", height: "20px", backgroundColor: "#D1D5DB" }} />}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// YouTube video ID — https://www.youtube.com/watch?v=Hhk-FNqTC_I
const YOUTUBE_VIDEO_ID = "Hhk-FNqTC_I";

function SalientFeaturesSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  // Close on Escape
  useEffect(() => {
    if (!videoOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setVideoOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [videoOpen]);

  return (
    <>
      <section className="w-full" style={{ backgroundColor: "#FAFAFA", padding: "clamp(40px, 5vw, 93px) clamp(20px, 5.5%, 107px)" }}>
        <div style={{ maxWidth: "1707px", margin: "0 auto" }}>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between" style={{ gap: "clamp(16px, 2vw, 40px)", marginBottom: "clamp(24px, 3vw, 56px)" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", fontWeight: 600, fontSize: "clamp(28px, 3.9vw, 75px)", lineHeight: "0.96", letterSpacing: "0.75px", color: "#000", maxWidth: "912px" }}>
              Salient Features of the Program
            </h2>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: "clamp(14px, 1.46vw, 28px)", lineHeight: "1.8", color: "#474747", maxWidth: "814px" }}>
              The program focuses on hands-on studio learning, and real-world projects. Students build strong creative skills, supported by expert mentorship and portfolio development.
            </p>
          </div>

          <div className="flex flex-col md:flex-row" style={{ gap: "clamp(12px, 1.5vw, 24px)" }}>
            {/* Left: 150+ Stats Card */}
            <div
              className="relative overflow-hidden flex flex-col justify-between"
              style={{ backgroundColor: "#010205", borderRadius: "clamp(20px, 2.08vw, 40px)", width: "clamp(280px, 30.4%, 584px)", aspectRatio: "584 / 509", padding: "clamp(24px, 2.8vw, 53px)" }}
            >
              <div>
                <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "clamp(48px, 5.83vw, 112px)", lineHeight: "1.5", letterSpacing: "-3.36px", color: "#fff" }}>150+</p>
                <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: "clamp(14px, 1.46vw, 28px)", lineHeight: "1.7", color: "#878C91", maxWidth: "429px" }}>
                  Cutting edge projects with the Department of Design
                </p>
              </div>
              <div className="flex items-center" style={{ gap: "clamp(4px, 0.49vw, 9.3px)" }}>
                {["salient-e1.png", "salient-e2.png", "salient-e3.png", "salient-e4.png"].map((img, i) => (
                  <img key={i} src={`/images/${img}`} alt="" className="rounded-full object-cover" style={{ width: "clamp(40px, 4.86vw, 93px)", height: "clamp(40px, 4.86vw, 93px)" }} />
                ))}
                <span style={{ fontFamily: "'Plus Jakarta Sans', 'Manrope', sans-serif", fontWeight: 700, fontSize: "clamp(40px, 5.14vw, 99px)", lineHeight: "1.5", letterSpacing: "-2.96px", color: "#fff" }}>+</span>
              </div>
            </div>

            {/* Right: Campus video card — click to play */}
            <button
              onClick={() => setVideoOpen(true)}
              className="relative overflow-hidden flex-1 group text-left"
              style={{ borderRadius: "clamp(20px, 2.08vw, 40px)", minHeight: "clamp(200px, 28.5vw, 509px)", border: "none", padding: 0, cursor: "pointer" }}
            >
              <img src="/images/salient-campus.jpg" alt="DSU Campus" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ opacity: 0.8 }} />
              <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.2)" }} />
              <div
                className="absolute flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ bottom: "clamp(16px, 2vw, 40px)", right: "clamp(16px, 2vw, 40px)", width: "clamp(56px, 7vw, 130px)", height: "clamp(56px, 7vw, 130px)", borderRadius: "50%", backgroundColor: "#003366", border: "clamp(4px, 0.8vw, 16px) solid #FAFAFA" }}
              >
                <img src="/images/salient-play.svg" alt="Play" style={{ width: "clamp(20px, 2.5vw, 48px)", height: "clamp(20px, 2.5vw, 48px)" }} />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Video Modal — fullscreen overlay */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[10006] flex items-center justify-center"
          onClick={() => setVideoOpen(false)}
          style={{ backgroundColor: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
        >
          <style>{`@keyframes videoFadeIn { from { opacity:0; transform:scale(0.92); } to { opacity:1; transform:scale(1); } }`}</style>
          {/* Close button */}
          <button
            onClick={() => setVideoOpen(false)}
            className="absolute z-10 hover:bg-white/20 rounded-full transition-colors"
            style={{ top: "clamp(16px, 2vw, 32px)", right: "clamp(16px, 2vw, 32px)", width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" /></svg>
          </button>

          {/* Video container — YouTube embed, no controls/branding, autoplay */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "min(90vw, 1200px)",
              aspectRatio: "16 / 9",
              borderRadius: "clamp(12px, 1.25vw, 24px)",
              overflow: "hidden",
              animation: "videoFadeIn 0.3s ease forwards",
              boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
              backgroundColor: "#000",
            }}
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&fs=0&playsinline=1`}
              title="School of Design Video"
              allow="autoplay; encrypted-media"
              allowFullScreen={false}
              className="w-full h-full"
              style={{ border: "none" }}
            />
          </div>
        </div>
      )}
    </>
  );
}

const NEWSLETTER_DATA: Record<string, { month: string; href: string }[]> = {
  "2024": [
    { month: "February", href: "" },
    { month: "March", href: "https://drive.google.com/uc?export=download&id=1fz3xjNCnjhiz5ZJVDFdhWD3sZylDIGL8" },
    { month: "April", href: "https://drive.google.com/uc?export=download&id=1jEP7XBjzlSIHNgI4oGcwqLRFuDFiJDg-" },
    { month: "May", href: "https://drive.google.com/uc?export=download&id=1S7npjpeKCEkS0nqVCTdxBx_mchpRz8Lr" },
    { month: "June", href: "https://drive.google.com/uc?export=download&id=1wDlF8uty9YK5TeldBxUn6ZNCVNnwNh8b" },
    { month: "July", href: "https://drive.google.com/uc?export=download&id=1UpuU78UwXgsL_BJFoIZTU8bkwQ0lqtOh" },
    { month: "August", href: "https://drive.google.com/uc?export=download&id=1uwQjjeyUr-4SsUGIv02Vc9HrNB-mz941" },
    { month: "September", href: "https://drive.google.com/uc?export=download&id=1IHYg58Plp0OK29UvFZXJR6KSey60JwZQ" },
    { month: "October", href: "https://drive.google.com/uc?export=download&id=1jFSbRpV_wiiqh8ahaXlRf9nph9huF9tG" },
    { month: "November", href: "https://drive.google.com/uc?export=download&id=1tYeYv8rryjca1EGK4HxKP1yGKagBmNtp" },
    { month: "December", href: "https://drive.google.com/uc?export=download&id=1OP-nx95PSWJgKTcUrAazu1Hun9_z4jWF" },
  ],
  "2025": [
    { month: "January", href: "" },
    { month: "February", href: "" },
    { month: "March", href: "" },
    { month: "April", href: "" },
    { month: "May", href: "" },
    { month: "June", href: "" },
    { month: "July", href: "" },
    { month: "August", href: "" },
    { month: "September", href: "" },
    { month: "October", href: "" },
    { month: "November", href: "" },
    { month: "December", href: "" },
  ],
  "2026": [
    { month: "January", href: "" },
    { month: "February", href: "" },
    { month: "March", href: "" },
    { month: "April", href: "" },
    { month: "May", href: "" },
    { month: "June", href: "" },
    { month: "July", href: "" },
    { month: "August", href: "" },
    { month: "September", href: "" },
    { month: "October", href: "" },
    { month: "November", href: "" },
    { month: "December", href: "" },
  ],
};

function NewsLettersSection() {
  const [activeYear, setActiveYear] = useState("2024");
  const years = ["2024", "2025", "2026"];
  const data = NEWSLETTER_DATA[activeYear] || [];

  // Pair months into rows of 2
  const rows: { left: typeof data[0]; right?: typeof data[0] }[] = [];
  for (let i = 0; i < data.length; i += 2) {
    rows.push({ left: data[i], right: data[i + 1] });
  }

  return (
    <section className="w-full" style={{ backgroundColor: "#fff", padding: "clamp(40px, 5vw, 80px) clamp(20px, 6.1%, 117px)" }}>
      <div style={{ maxWidth: "1686px", margin: "0 auto" }}>
        {/* Title */}
        <h2 style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", fontWeight: 600, fontSize: "clamp(28px, 3.33vw, 64px)", lineHeight: "1.125", letterSpacing: "0.64px", color: "#000", marginBottom: "clamp(16px, 1.67vw, 32px)" }}>
          News Letters
        </h2>

        {/* Year tabs */}
        <div className="flex flex-wrap" style={{ gap: "clamp(12px, 2.34vw, 45px)", marginBottom: "clamp(32px, 4.17vw, 80px)" }}>
          {years.map((yr) => (
            <button
              key={yr}
              onClick={() => setActiveYear(yr)}
              className="flex items-center justify-center"
              style={{
                width: "clamp(100px, 13vw, 249px)",
                height: "clamp(40px, 3.9vw, 75px)",
                borderRadius: "clamp(10px, 1.04vw, 20px)",
                backgroundColor: activeYear === yr ? "#011053" : "transparent",
                border: activeYear === yr ? "none" : "1px solid #011053",
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 500,
                fontSize: "clamp(14px, 1.46vw, 28px)",
                color: activeYear === yr ? "#fff" : "#011053",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {yr}
            </button>
          ))}
        </div>

        {/* Month rows — 2 columns on desktop, 1 on mobile */}
        {data.length > 0 ? (
          <div className="flex flex-col" style={{ gap: "clamp(16px, 2.5vw, 48px)" }}>
            {rows.map((row, ri) => (
              <div key={ri} className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "clamp(16px, 2.92vw, 56px)" }}>
                {[row.left, row.right].filter(Boolean).map((item) => (
                  <div key={item!.month} className="flex flex-col" style={{ gap: "clamp(16px, 2.08vw, 40px)" }}>
                    <div className="flex items-center justify-between">
                      <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: "clamp(18px, 1.88vw, 36px)", lineHeight: "1.2", color: "#1E242C" }}>
                        {item!.month}
                      </p>
                      {item!.href ? (
                        <a href={item!.href} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 hover:opacity-70 transition-opacity">
                          <img src="/images/naac-download.svg" alt="Download" style={{ width: "clamp(28px, 2.5vw, 48px)", height: "clamp(28px, 2.5vw, 48px)" }} />
                        </a>
                      ) : (
                        <span style={{ width: "clamp(28px, 2.5vw, 48px)", height: "clamp(28px, 2.5vw, 48px)", opacity: 0.3 }}>
                          <img src="/images/naac-download.svg" alt="" style={{ width: "100%", height: "100%", filter: "grayscale(1)" }} />
                        </span>
                      )}
                    </div>
                    <div style={{ height: "1px", backgroundColor: "#E5E7EB" }} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "clamp(14px, 1.15vw, 22px)", color: "#414D60", padding: "40px 0" }}>
            No newsletters available for {activeYear} yet.
          </p>
        )}
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="w-full" style={{ backgroundColor: "#F8F9FB", padding: "clamp(40px, 5vw, 80px) clamp(20px, 5.4%, 104px)" }}>
      <div style={{ maxWidth: "1713px", margin: "0 auto" }}>
        <div className="flex flex-col lg:flex-row" style={{ gap: "clamp(32px, 5vw, 96px)" }}>

          {/* Left: Two photos + badge */}
          <div className="relative flex-shrink-0" style={{ width: "clamp(280px, 40.2vw, 772px)", height: "clamp(350px, 43.6vw, 837px)" }}>
            {/* Narrow photo (left) — DSU campus building */}
            <div className="absolute overflow-hidden" style={{ left: 0, top: 0, width: "36.9%", height: "78.3%", borderRadius: "clamp(20px, 2.08vw, 40px)" }}>
              <img src="/images/howit-photo-campus.jpg" alt="DSU Campus" className="w-full h-full object-cover" />
            </div>
            {/* Wide photo (right) — students with laptop */}
            <div className="absolute overflow-hidden" style={{ left: "41.1%", top: 0, width: "58.9%", height: "100%", borderRadius: "clamp(20px, 2.08vw, 40px)" }}>
              <img src="/images/howit-photo-students.jpg" alt="Students" className="w-full h-full object-cover" />
            </div>
            {/* Badge — bottom left */}
            <div
              className="absolute flex items-center bg-white"
              style={{
                left: 0,
                bottom: 0,
                borderRadius: "clamp(10px, 1.04vw, 20px)",
                padding: "clamp(10px, 1.11vw, 21px)",
                gap: "clamp(10px, 1.11vw, 21px)",
                boxShadow: "13px 33px 133px 0px rgba(0,43,107,0.25)",
                border: "1.333px solid #EDEEF0",
                maxWidth: "clamp(280px, 33.2vw, 637px)",
              }}
            >
              <div className="flex items-center" style={{ paddingRight: "clamp(5px, 0.56vw, 11px)" }}>
                {["howit-avatar1.png", "howit-avatar2.png", "howit-avatar3.png"].map((a, i) => (
                  <img key={i} src={`/images/${a}`} alt="" className="rounded-full" style={{ width: "clamp(36px, 3.89vw, 75px)", height: "clamp(36px, 3.89vw, 75px)", marginRight: i < 2 ? "clamp(-8px, -0.56vw, -11px)" : "0", border: "2px solid #fff" }} />
                ))}
              </div>
              <div>
                <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "clamp(14px, 1.25vw, 24px)", color: "#003366", lineHeight: "1.5" }}>
                  Student-first learning approach
                </p>
                <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: "clamp(11px, 0.97vw, 19px)", color: "#414D60", lineHeight: "1.5" }}>
                  Industry-aligned curriculum
                </p>
              </div>
            </div>
          </div>

          {/* Right: Title + Steps + Apply Now */}
          <div className="flex-1">
            {/* Header row */}
            <div className="flex items-start justify-between" style={{ marginBottom: "clamp(24px, 3vw, 56px)" }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", fontWeight: 700, fontSize: "clamp(28px, 3.9vw, 75px)", lineHeight: "1.2", color: "#1E242C" }}>
                How It Works
              </h2>
              <a
                href="/admissions"
                className="hidden md:flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: "#003366",
                  borderRadius: "43px",
                  padding: "clamp(10px, 0.94vw, 18px) clamp(10px, 0.78vw, 15px)",
                  gap: "10px",
                  fontFamily: "'Graphik Trial', 'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(14px, 1.35vw, 26px)",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                <span>Apply Now!</span>
                <img src="/images/howit-arrow.svg" alt="" style={{ width: "clamp(24px, 2.08vw, 40px)", height: "clamp(24px, 2.08vw, 40px)" }} />
              </a>
            </div>

            {/* 3 Steps */}
            <div className="flex flex-col" style={{ gap: "clamp(24px, 3.6vw, 70px)" }}>
              {[
                { icon: "/images/howit-icon1.svg", iconBg: "#E1E9FE", title: "10+2 Qualification", desc: "50% marks in any stream from a recognized board with English as a mandatory course." },
                { icon: "/images/howit-icon2.svg", iconBg: "#FFEED2", title: "Diploma Route", desc: "At least 50% aggregate in a 3-year diploma with English as a mandatory course." },
                { icon: "/images/howit-icon3.svg", iconBg: "#F6E2FF", title: "Entrance Test", desc: "A valid test score in UCEED or DSU's Design Aptitude Test (DAT) is required as part of the admission process." },
              ].map((step) => (
                <div key={step.title}>
                  {/* Icon circle */}
                  <div className="flex items-center justify-center overflow-hidden" style={{ width: "clamp(44px, 3.89vw, 75px)", height: "clamp(44px, 3.89vw, 75px)", borderRadius: "50%", backgroundColor: step.iconBg, padding: "clamp(10px, 1.11vw, 21px)", marginBottom: "clamp(8px, 0.7vw, 13px)" }}>
                    <img src={step.icon} alt="" style={{ width: "clamp(18px, 1.67vw, 32px)", height: "clamp(18px, 1.67vw, 32px)" }} />
                  </div>
                  {/* Title — Cormorant Garamond SemiBold 40px */}
                  <h3 style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", fontWeight: 600, fontSize: "clamp(22px, 2.08vw, 40px)", lineHeight: "1.2", color: "#1E242C", marginBottom: "clamp(4px, 0.28vw, 5px)" }}>
                    {step.title}
                  </h3>
                  {/* Description — Manrope Medium 22px */}
                  <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: "clamp(13px, 1.15vw, 22px)", lineHeight: "1.5", color: "#414D60" }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile Apply Now */}
            <a
              href="/admissions"
              className="md:hidden flex items-center justify-center"
              style={{
                backgroundColor: "#003366",
                borderRadius: "43px",
                padding: "14px 20px",
                gap: "10px",
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                color: "#fff",
                textDecoration: "none",
                marginTop: "32px",
                width: "fit-content",
              }}
            >
              <span>Apply Now!</span>
              <img src="/images/howit-arrow.svg" alt="" style={{ width: "28px", height: "28px" }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const PUBLICATIONS = [
  {
    author: "Vivek Wallabhdas",
    date: "January 2024",
    text: "Co-Author Vivek Wallabhdas (2024). Media Literacy In The Digital Era;  Media and Money.\nISBN: 978-81-958059-8-3.",
    cover: "/images/pub-book-cover.jpg",
  },
];

function RecentPublicationsSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const pub = PUBLICATIONS[currentIdx];

  return (
    <section className="w-full" style={{ backgroundColor: "#FAFAFA", padding: "clamp(40px, 6.1vw, 117px) clamp(20px, 6.9%, 133px)" }}>
      <div style={{ maxWidth: "1654px", margin: "0 auto" }}>
        {/* Title — Cormorant Garamond SemiBold 75px */}
        <h2 style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", fontWeight: 600, fontSize: "clamp(28px, 3.9vw, 75px)", lineHeight: "1.2", color: "#000", marginBottom: "clamp(24px, 2.78vw, 53px)" }}>
          Recent Publications
        </h2>

        {/* Content: Text card + Book cover */}
        <div className="flex flex-col md:flex-row" style={{ gap: "clamp(16px, 1.67vw, 32px)", height: "auto" }}>
          {/* Left: Text card — bg #003366, rounded-40 */}
          <div
            className="flex-1 flex flex-col items-center justify-center"
            style={{
              backgroundColor: "#003366",
              borderRadius: "clamp(20px, 2.08vw, 40px)",
              padding: "clamp(32px, 3.33vw, 64px) clamp(16px, 1.11vw, 21px)",
              minHeight: "clamp(300px, 30.6vw, 588px)",
            }}
          >
            {/* Author + Date */}
            <div className="flex items-center justify-center" style={{ gap: "clamp(8px, 0.83vw, 16px)", marginBottom: "clamp(24px, 2.66vw, 51px)" }}>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: "clamp(14px, 1.04vw, 20px)", lineHeight: "1.5", color: "#fff" }}>
                {pub.author}
              </p>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#fff", flexShrink: 0 }} />
              <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: "clamp(14px, 1.04vw, 20px)", lineHeight: "1.5", color: "#AAB1BA" }}>
                {pub.date}
              </p>
            </div>

            {/* Publication text — Manrope Medium 32px, white, center */}
            <div className="text-center" style={{ maxWidth: "704px", marginBottom: "clamp(24px, 2.66vw, 51px)" }}>
              {pub.text.split("\n").map((line, i) => (
                <p key={i} style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: "clamp(16px, 1.67vw, 32px)", lineHeight: "1.2", color: "#fff" }}>
                  {line}
                </p>
              ))}
            </div>

            {/* Navigation arrows */}
            <div className="flex items-center justify-center" style={{ gap: "clamp(20px, 2.29vw, 44px)" }}>
              {/* Left arrow — outlined circle, #FFB81C border */}
              <button
                onClick={() => setCurrentIdx((prev) => (prev - 1 + PUBLICATIONS.length) % PUBLICATIONS.length)}
                className="flex items-center justify-center"
                style={{
                  width: "clamp(40px, 3.02vw, 58px)",
                  height: "clamp(40px, 3.02vw, 58px)",
                  borderRadius: "50%",
                  border: "0.684px solid #FFB81C",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  transform: "scaleY(-1)",
                }}
              >
                <img src="/images/pub-arrow-left.svg" alt="Previous" style={{ width: "clamp(14px, 1.14vw, 22px)", height: "clamp(14px, 1.14vw, 22px)" }} />
              </button>
              {/* Right arrow — filled circle, #FFB81C bg */}
              <button
                onClick={() => setCurrentIdx((prev) => (prev + 1) % PUBLICATIONS.length)}
                className="flex items-center justify-center"
                style={{
                  width: "clamp(40px, 3.02vw, 58px)",
                  height: "clamp(40px, 3.02vw, 58px)",
                  borderRadius: "50%",
                  backgroundColor: "#FFB81C",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <img src="/images/pub-arrow-right.svg" alt="Next" style={{ width: "clamp(14px, 1.14vw, 22px)", height: "clamp(14px, 1.14vw, 22px)" }} />
              </button>
            </div>
          </div>

          {/* Right: Book cover image — rounded-40 */}
          <div
            className="overflow-hidden flex-shrink-0"
            style={{
              width: "clamp(280px, 34.7vw, 667px)",
              borderRadius: "clamp(20px, 2.08vw, 40px)",
              aspectRatio: "667 / 588",
            }}
          >
            <img
              src={pub.cover}
              alt="Publication cover"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function DesignSchoolFooter() {
  const linkStyle: React.CSSProperties = { fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "clamp(13px, 1.25vw, 24px)", lineHeight: "1.11", color: "#474747", textDecoration: "none" };
  const headingStyle: React.CSSProperties = { fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "clamp(18px, 1.67vw, 32px)", lineHeight: "1", color: "#1e1e1e", marginBottom: "clamp(20px, 2.78vw, 53px)" };

  return (
    <footer className="w-full bg-white" style={{ borderTop: "1.333px solid #EFF0F6" }}>
      <div className="mx-auto" style={{ maxWidth: "1660px", padding: "clamp(40px, 8.33vw, 160px) clamp(20px, 4vw, 80px) clamp(20px, 2.5vw, 48px)" }}>
        {/* Grid: 2 cols on mobile, 3 on tablet, 5 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5" style={{ gap: "clamp(24px, 3vw, 60px) clamp(16px, 2vw, 40px)" }}>

          {/* Col 1: Logo + Tagline + Social — spans 2 cols on mobile */}
          <div className="col-span-2 md:col-span-1 flex flex-col" style={{ gap: "clamp(16px, 1.67vw, 32px)" }}>
            <img src="/images/footer-dsu-logo.png" alt="DSU" style={{ width: "clamp(120px, 9.17vw, 176px)", height: "auto", objectFit: "contain" }} />
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "clamp(14px, 1.46vw, 28px)", lineHeight: "1.43", letterSpacing: "0.28px", color: "#565B5E" }}>
              Online Degree Programs
            </p>
            <div className="flex items-center" style={{ gap: "clamp(12px, 1.51vw, 29px)" }}>
              <a href="https://www.facebook.com/dsaboroad" target="_blank" rel="noopener noreferrer"><img src="/images/footer-facebook.svg" alt="Facebook" style={{ width: "15px", height: "25px" }} /></a>
              <a href="https://www.instagram.com/daboroad" target="_blank" rel="noopener noreferrer"><img src="/images/footer-instagram.svg" alt="Instagram" style={{ width: "25px", height: "25px" }} /></a>
              <a href="https://www.linkedin.com/school/dayananda-sagar-university" target="_blank" rel="noopener noreferrer"><img src="/images/footer-linkedin.svg" alt="LinkedIn" style={{ width: "25px", height: "24px" }} /></a>
              <a href="https://www.youtube.com/@DayanandaSagarUniversity" target="_blank" rel="noopener noreferrer"><img src="/images/footer-youtube.svg" alt="YouTube" style={{ width: "28px", height: "20px" }} /></a>
            </div>
          </div>

          {/* Col 2: Home */}
          <div>
            <p style={headingStyle}>Home</p>
            <div className="flex flex-col" style={{ gap: "clamp(12px, 1.25vw, 24px)" }}>
              {[{ n: "Academics", h: "/academics" }, { n: "Admissions", h: "/admissions" }, { n: "Campus Life", h: "/campus-life" }, { n: "Contact Us", h: "/contact-complaints" }].map((l) => (
                <a key={l.n} href={l.h} style={linkStyle} className="hover:text-[#003366] transition-colors">{l.n}</a>
              ))}
            </div>
          </div>

          {/* Col 3: Schools */}
          <div>
            <p style={headingStyle}>Schools</p>
            <div className="flex flex-col" style={{ gap: "clamp(12px, 1.25vw, 24px)" }}>
              {[{ n: "School of Engineering", h: "/academics/engineering" }, { n: "School of Law", h: "/academics/law" }, { n: "School Of Health Sciences", h: "/academics/health-sciences" }, { n: "School of Computer Applications", h: "/academics/computer-applications" }, { n: "School of Design & Digital Transmedia", h: "/academics/design/bdesign" }].map((l) => (
                <a key={l.n} href={l.h} style={linkStyle} className="hover:text-[#003366] transition-colors">{l.n}</a>
              ))}
            </div>
          </div>

          {/* Col 4: Quick Links */}
          <div>
            <p style={headingStyle}>Quick Links</p>
            <div className="flex flex-col" style={{ gap: "clamp(12px, 1.25vw, 24px)" }}>
              {[{ n: "Academic Calendar", h: "/examinations" }, { n: "Sports Facilities", h: "/campus-life" }, { n: "NCC/NSS", h: "/campus-life" }, { n: "Barrier Free Environment", h: "/facilities" }].map((l) => (
                <a key={l.n} href={l.h} style={linkStyle} className="hover:text-[#003366] transition-colors">{l.n}</a>
              ))}
            </div>
          </div>

          {/* Col 5: Contact Us */}
          <div>
            <p style={headingStyle}>Contacts us</p>
            <div className="flex flex-col" style={{ gap: "clamp(16px, 1.67vw, 32px)" }}>
              <a href="mailto:admissions@dsu.edu.in" className="flex items-center hover:text-[#003366] transition-colors" style={{ ...linkStyle, gap: "8px" }}>
                <svg width="20" height="16" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0"><path d="M2 1h18a1.5 1.5 0 011.5 1.5v13A1.5 1.5 0 0120 17H2a1.5 1.5 0 01-1.5-1.5v-13A1.5 1.5 0 012 1z" stroke="#474747" strokeWidth="1.5"/><path d="M21.5 2L11 10.5.5 2" stroke="#474747" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                admissions@dsu.edu.in
              </a>
              <a href="tel:08046461800" className="flex items-center hover:text-[#003366] transition-colors" style={{ ...linkStyle, gap: "8px" }}>
                <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0"><path d="M21 15.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 013.11 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121 15.92z" stroke="#474747" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                080 46461800 / 080
              </a>
              <div className="flex items-start" style={{ gap: "8px" }}>
                <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0" style={{ marginTop: "3px" }}><path d="M10 1C5.58 1 2 4.58 2 9c0 6.5 8 14 8 14s8-7.5 8-14c0-4.42-3.58-8-8-8z" stroke="#474747" strokeWidth="1.5"/><circle cx="10" cy="9" r="3" stroke="#474747" strokeWidth="1.5"/></svg>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "clamp(13px, 1.25vw, 24px)", lineHeight: "1.67", color: "#474747" }}>
                  Devarakaggalahalli, Harohalli, Kanakapura Road, Bengaluru South Dt. – 562 112
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

function DesignHero() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: "1920 / 1080" }}
    >
      {/* Background image — Figma: 1920x1080, object-cover */}
      <img
        src="/images/design-hero-bg.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay 1 — Figma: rgba(0,0,0,0.12) */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.12)" }} />

      {/* Overlay 2 — Figma: rgba(22,22,22,0.45) */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(22,22,22,0.45)" }} />

      {/*
        Main heading — Figma: Cormorant Garamond Bold, 150px
        Gradient: linear-gradient(130.5deg, white 69.6%, #818181 95.1%)
        Position: left ~5%, top ~15.8%, width ~54%
      */}
      <h1
        className="absolute"
        style={{
          left: "clamp(20px, 5.1%, 98px)",
          top: "clamp(80px, 15.8%, 171px)",
          width: "clamp(280px, 54.3%, 1042px)",
          fontFamily: "'Cormorant Garamond', 'Georgia', serif",
          fontWeight: 700,
          fontSize: "clamp(32px, 7.8vw, 150px)",
          lineHeight: "normal",
          fontStyle: "normal",
          backgroundImage: "linear-gradient(130.5deg, rgb(255,255,255) 69.6%, rgb(129,129,129) 95.1%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Unleash Your Design Potential at DSU
      </h1>

      {/*
        Subtitle — Figma: Manrope Regular, 30px, #fef3f3, line-height 42px
        Position: right area, ~66.4% from left, top ~66.4%
      */}
      <p
        className="absolute hidden sm:block"
        style={{
          left: "clamp(200px, 73.9%, 1419px)",
          top: "clamp(300px, 66.4%, 717px)",
          width: "clamp(200px, 21.4%, 411px)",
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 400,
          fontSize: "clamp(14px, 1.56vw, 30px)",
          lineHeight: "1.4",
          color: "#fef3f3",
        }}
      >
        Empowering Future Designers with Skills, Vision, and Experience
      </p>

      {/*
        CTA Button — Figma: bg #003366, 268x70, radius 43px
        Manrope SemiBold 26px, white
        Arrow icon: 40x40 white circle with #003366 arrow
        Position: ~73.4% from left, top ~80.9%
      */}
      <a
        href="/academics/design/bdesign/program"
        className="absolute hidden sm:flex items-center justify-center gap-[10px]"
        style={{
          left: "clamp(200px, 73.4%, 1409px)",
          top: "clamp(400px, 80.9%, 874px)",
          width: "clamp(160px, 14vw, 268px)",
          height: "clamp(40px, 3.65vw, 70px)",
          borderRadius: "43px",
          backgroundColor: "#003366",
          padding: "18px 15px",
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 600,
          fontSize: "clamp(14px, 1.35vw, 26px)",
          lineHeight: "normal",
          color: "white",
          textDecoration: "none",
        }}
      >
        <span>Explore More!</span>
        <img
          src="/images/design-hero-arrow.svg"
          alt=""
          style={{ width: "clamp(24px, 2.08vw, 40px)", height: "clamp(24px, 2.08vw, 40px)" }}
        />
      </a>

      {/* Mobile: subtitle + CTA at bottom */}
      <div className="absolute bottom-0 left-0 right-0 sm:hidden p-5 bg-gradient-to-t from-black/80 to-transparent">
        <p
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "1.4",
            color: "#fef3f3",
            marginBottom: "16px",
          }}
        >
          Empowering Future Designers with Skills, Vision, and Experience
        </p>
        <a
          href="/academics/design/bdesign/program"
          className="inline-flex items-center justify-center gap-2"
          style={{
            height: "44px",
            borderRadius: "43px",
            backgroundColor: "#003366",
            padding: "0 20px",
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 600,
            fontSize: "15px",
            color: "white",
            textDecoration: "none",
          }}
        >
          <span>Explore More!</span>
          <img src="/images/design-hero-arrow.svg" alt="" style={{ width: "26px", height: "26px" }} />
        </a>
      </div>
    </div>
  );
}

export default function BDesignOverview() {
  return (
    <div className="min-h-screen text-foreground">
      <section className="relative !pt-0 !pb-0" id="top">
        <DesignHero />
        <DesignSchoolNavBar />
      </section>

      {/* Design at DSU — Figma section */}
      <section
        className="w-full bg-[#f5f5f5]"
        style={{ padding: "clamp(32px, 4vw, 56px) clamp(20px, 5.2%, 100px)" }}
      >
        <div style={{ maxWidth: "1720px", margin: "0 auto" }}>
          {/* Title — Cormorant Garamond Bold, 75px, black, tracking 0.75px */}
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 3.9vw, 75px)",
              lineHeight: "normal",
              letterSpacing: "0.75px",
              color: "#000",
              marginBottom: "clamp(16px, 2vw, 24px)",
            }}
          >
            Design at Dayananda Sagar University
          </h2>

          {/* Description — Manrope Regular, 28px, #474747, line-height 50px */}
          <p
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(14px, 1.46vw, 28px)",
              lineHeight: "1.8",
              color: "#474747",
            }}
          >
            At Dayananda Sagar University, Bachelor's in Design (B.Des.) course is a four-year full-time degree program that equips students with industrially relevant knowledge and skills that are required to become a professional designer. With creativity as its main driver, we consider usability, aesthetics, functionality and sustainability at the focal points of design.
          </p>
        </div>
      </section>

      {/* Vision, Mission & Objectives — Figma section */}
      <section
        className="w-full bg-[#f5f5f5]"
        style={{ padding: "clamp(24px, 3vw, 40px) clamp(20px, 5.2%, 100px)" }}
      >
        <div style={{ maxWidth: "1720px", margin: "0 auto" }}>
          {/* Section title */}
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 3.9vw, 75px)",
              lineHeight: "normal",
              letterSpacing: "0.75px",
              color: "#000",
              marginBottom: "clamp(24px, 3vw, 62px)",
            }}
          >
            Vision, Mission &amp; Objectives
          </h2>

          <div className="flex flex-col" style={{ gap: "clamp(16px, 1.5vw, 29px)" }}>
            {/* Vision card — full width */}
            <div
              className="bg-white overflow-hidden"
              style={{
                borderRadius: "clamp(12px, 1.25vw, 24px)",
                padding: "clamp(16px, 1.25vw, 24px)",
                boxShadow: "4px 4px 16.2px 4px rgba(170,170,170,0.25)",
              }}
            >
              <div className="flex flex-col items-center" style={{ gap: "clamp(12px, 1.25vw, 24px)" }}>
                {/* Icon */}
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: "clamp(40px, 3.65vw, 70px)",
                    height: "clamp(40px, 3.65vw, 70px)",
                    backgroundColor: "rgba(3,2,19,0.1)",
                  }}
                >
                  <img src="/images/icon-vision.svg" alt="" style={{ width: "clamp(28px, 2.5vw, 48px)", height: "clamp(28px, 2.5vw, 48px)" }} />
                </div>
                {/* Title */}
                <h3
                  className="text-center"
                  style={{
                    fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                    fontWeight: 700,
                    fontSize: "clamp(28px, 3.9vw, 75px)",
                    lineHeight: "normal",
                    letterSpacing: "0.75px",
                    color: "#000",
                  }}
                >
                  Vision
                </h3>
              </div>
              <p
                className="text-center"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(14px, 1.46vw, 28px)",
                  lineHeight: "1.8",
                  color: "#474747",
                  marginTop: "clamp(12px, 1.25vw, 24px)",
                }}
              >
                To become global leader offering world-class education in the field of Product Design, User Experience Design, Digital Filmmaking, Animation, Visual Effects and Gaming through proactively engagement with industry and research.
              </p>
            </div>

            {/* Mission + Objectives row */}
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "clamp(16px, 1.04vw, 20px)" }}>
              {/* Mission card */}
              <div
                className="bg-white overflow-hidden"
                style={{
                  borderRadius: "clamp(12px, 1.25vw, 24px)",
                  padding: "clamp(16px, 2.3vw, 45px) clamp(16px, 1.25vw, 24px)",
                  boxShadow: "4px 4px 16.2px 4px rgba(170,170,170,0.25)",
                }}
              >
                <div className="flex flex-col items-center" style={{ gap: "clamp(12px, 1.25vw, 24px)" }}>
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{
                      width: "clamp(40px, 3.65vw, 70px)",
                      height: "clamp(40px, 3.65vw, 70px)",
                      backgroundColor: "rgba(3,2,19,0.1)",
                    }}
                  >
                    <img src="/images/icon-mission.svg" alt="" style={{ width: "clamp(28px, 2.5vw, 48px)", height: "clamp(28px, 2.5vw, 48px)" }} />
                  </div>
                  <h3
                    className="text-center"
                    style={{
                      fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                      fontWeight: 700,
                      fontSize: "clamp(28px, 3.9vw, 75px)",
                      lineHeight: "normal",
                      letterSpacing: "0.75px",
                      color: "#000",
                    }}
                  >
                    Mission
                  </h3>
                </div>
                <ul
                  className="text-center list-disc"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(14px, 1.46vw, 28px)",
                    lineHeight: "1.8",
                    color: "#474747",
                    marginTop: "clamp(12px, 1.25vw, 24px)",
                    paddingLeft: "clamp(20px, 2.2vw, 42px)",
                  }}
                >
                  <li>To develop highly skilled professionals in the field of Design, Digital Filmmaking Animation, VFX, Gaming, VR &amp; AR.</li>
                  <li>To foster an ecosystem of start-ups and entrepreneurship in the Animation, Visual Effects, Digital Filmmaking and Gaming Industry, AR &amp; VR.</li>
                </ul>
              </div>

              {/* Objectives card */}
              <div
                className="bg-white overflow-hidden"
                style={{
                  borderRadius: "clamp(12px, 1.25vw, 24px)",
                  padding: "clamp(16px, 1.25vw, 24px)",
                  boxShadow: "4px 4px 16.2px 4px rgba(170,170,170,0.25)",
                }}
              >
                <div className="flex flex-col items-center" style={{ gap: "clamp(12px, 1.25vw, 24px)" }}>
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{
                      width: "clamp(40px, 3.65vw, 70px)",
                      height: "clamp(40px, 3.65vw, 70px)",
                      backgroundColor: "rgba(3,2,19,0.1)",
                    }}
                  >
                    <img src="/images/icon-objectives.svg" alt="" style={{ width: "clamp(28px, 2.5vw, 48px)", height: "clamp(28px, 2.5vw, 48px)" }} />
                  </div>
                  <h3
                    className="text-center"
                    style={{
                      fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                      fontWeight: 700,
                      fontSize: "clamp(28px, 3.9vw, 75px)",
                      lineHeight: "normal",
                      letterSpacing: "0.75px",
                      color: "#000",
                    }}
                  >
                    Objectives
                  </h3>
                </div>
                <ul
                  className="text-center list-disc"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(14px, 1.46vw, 28px)",
                    lineHeight: "1.8",
                    color: "#474747",
                    marginTop: "clamp(12px, 1.25vw, 24px)",
                    paddingLeft: "clamp(20px, 2.2vw, 42px)",
                  }}
                >
                  <li>Address real world problems through design education, practice and research and think creatively.</li>
                  <li>Be Media Literate, Media Capable, Media savvy.</li>
                  <li>Produce, create, manage media for 21st century in all its forms.</li>
                  <li>Understand how media impacts Individuals, Societies and Cultures while create fun, playful and engaging media.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations — Figma section */}
      <section
        className="w-full bg-[#f5f5f5]"
        style={{ padding: "clamp(32px, 4vw, 72px) clamp(20px, 5.2%, 100px)" }}
      >
        <div style={{ maxWidth: "1720px", margin: "0 auto" }}>
          {/* Title — Cormorant Garamond Bold 75px */}
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 3.9vw, 75px)",
              lineHeight: "normal",
              letterSpacing: "0.75px",
              color: "#000",
              marginBottom: "clamp(20px, 2vw, 40px)",
            }}
          >
            Specializations
          </h2>

          {/* 4 cards grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            style={{ gap: "clamp(12px, 1vw, 20px)" }}
          >
            {[
              { name: "User Experience Design", img: "/images/spec-uxd.jpg", href: "/academics/design/bdesign/ux" },
              { name: "Gaming Design", img: "/images/spec-gaming.jpg", href: "/academics/design/bdesign/game" },
              { name: "Animation & VFX Design", img: "/images/spec-animation.jpg", href: "/academics/design/bdesign/animation" },
              { name: "Product Design", img: "/images/spec-product.jpg", href: "/academics/design/bdesign/product" },
            ].map((spec) => (
              <a
                key={spec.name}
                href={spec.href}
                className="group relative block overflow-hidden"
                style={{
                  borderRadius: "clamp(20px, 2.08vw, 40px)",
                  aspectRatio: "418 / 560",
                }}
              >
                {/* Background image */}
                <img
                  src={spec.img}
                  alt={spec.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark overlay on image */}
                <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.2)" }} />

                {/* Top gradient for text readability */}
                <div
                  className="absolute top-0 left-0 right-0"
                  style={{
                    height: "50%",
                    borderRadius: "clamp(20px, 2.08vw, 40px) clamp(20px, 2.08vw, 40px) 0 0",
                    background: "linear-gradient(to bottom, rgba(22,22,22,0.55) 41%, rgba(124,124,124,0) 90%)",
                  }}
                />

                {/* Title — Manrope SemiBold, 37.3px, white, tracking -0.8px */}
                <p
                  className="absolute"
                  style={{
                    top: "6%",
                    left: "9%",
                    right: "15%",
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(18px, 1.94vw, 37px)",
                    lineHeight: "1.2",
                    letterSpacing: "-0.8px",
                    color: "white",
                  }}
                >
                  {spec.name}
                </p>

                {/* Arrow button — bottom right, #003366 circle, white border */}
                <div
                  className="absolute flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    bottom: "clamp(14px, 2vw, 38px)",
                    right: "clamp(14px, 2vw, 38px)",
                    width: "clamp(40px, 4.2vw, 80px)",
                    height: "clamp(40px, 4.2vw, 80px)",
                    borderRadius: "50%",
                    backgroundColor: "#003366",
                    border: "clamp(3px, 0.49vw, 9.3px) solid #fafafa",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: "clamp(14px, 1.5vw, 28px)", height: "clamp(14px, 1.5vw, 28px)" }}
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Faculties — Figma section */}
      <DesignFacultySection />

      {/* Gap: Figma = 72px at 1920px */}
      <div style={{ height: "clamp(24px, 3.75vw, 72px)", backgroundColor: "#fff" }} />

      {/* Salient Features — Figma section */}
      <SalientFeaturesSection />

      {/* NAAC Documents — Figma section (black bg) */}
      <section className="w-full" style={{ backgroundColor: "#000", paddingTop: "clamp(28px, 2.7vw, 52px)", paddingBottom: "clamp(48px, 5.5vw, 107px)" }}>
        <div style={{ maxWidth: "1707px", margin: "0 auto", padding: "0 clamp(20px, 5.5%, 107px)" }}>
          {/* Title */}
          <h2 style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", fontWeight: 600, fontSize: "clamp(28px, 3.9vw, 75px)", lineHeight: "normal", color: "#fff", marginBottom: "clamp(16px, 2vw, 32px)" }}>
            NAAC Documents
          </h2>

          {/* Document rows */}
          <div className="flex flex-col">
            {[
              { name: "Action Taken Report", thumb: "/images/naac-thumb1.png", href: "/pdfs/Action-Taken-Report.pdf" },
              { name: "Code Of Conduct Report", thumb: "/images/naac-thumb2.png", href: "/pdfs/Code-Of-Conduct-Report.pdf" },
              { name: "Feedback Analysis Report", thumb: "/images/naac-thumb3.png", href: "/pdfs/Feedback-Analysis-Report.pdf" },
              { name: "Stakeholder Feedback Report", thumb: "/images/naac-thumb4.png", href: "/pdfs/Stakeholder-Feedback-Report.pdf" },
            ].map((doc) => (
              <a
                key={doc.name}
                href={doc.href}
                download
                className="flex items-center justify-between hover:bg-white/5 transition-colors"
                style={{
                  borderBottom: "1.333px solid #282828",
                  padding: "clamp(20px, 2.2vw, 43px) 0",
                }}
              >
                <div className="flex items-center" style={{ gap: "clamp(16px, 2.2vw, 43px)" }}>
                  {/* Thumbnail */}
                  <img
                    src={doc.thumb}
                    alt=""
                    className="object-cover flex-shrink-0"
                    style={{
                      width: "clamp(100px, 10.4vw, 200px)",
                      height: "clamp(28px, 2.78vw, 53px)",
                      borderRadius: "clamp(12px, 1.25vw, 24px)",
                    }}
                  />
                  {/* Document name — Manrope SemiBold, 32px, white */}
                  <p style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(14px, 1.67vw, 32px)",
                    lineHeight: "1.67",
                    letterSpacing: "-1.33px",
                    color: "#fff",
                  }}>
                    {doc.name}
                  </p>
                </div>
                {/* Download icon — 54px */}
                <img
                  src="/images/naac-download.svg"
                  alt="Download"
                  className="flex-shrink-0"
                  style={{
                    width: "clamp(28px, 2.8vw, 54px)",
                    height: "clamp(28px, 2.8vw, 54px)",
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* News Letters — Figma section */}
      <NewsLettersSection />

      {/* How It Works — Figma section */}
      <HowItWorksSection />

      {/* Gallery — Figma section (black bg) */}
      <section className="w-full" style={{ backgroundColor: "#000", padding: "clamp(40px, 6.1vw, 117px) clamp(20px, 6.9%, 133px)" }}>
        <div style={{ maxWidth: "1654px", margin: "0 auto" }}>
          {/* Title */}
          <h2 style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", fontWeight: 600, fontSize: "clamp(28px, 3.9vw, 75px)", lineHeight: "1.2", color: "#fff", marginBottom: "clamp(24px, 2.78vw, 53px)" }}>
            Gallery
          </h2>

          {/* Gallery grid — exact Figma layout:
              Left frame (66.4%): top=[studio][sketches], bottom=[motorcycle wide]
              Right frame (31.8%): top=[product design tall], bottom=[presentation small]
              Gap between left and right frames: ~30px
          */}
          <div className="flex flex-col md:flex-row" style={{ gap: "clamp(8px, 1.6vw, 30px)" }}>
            {/* Left frame */}
            <div className="flex flex-col flex-[2.09]" style={{ gap: "clamp(8px, 2.3vw, 45px)" }}>
              {/* Top row: two equal images */}
              <div className="flex" style={{ gap: "clamp(8px, 2.5vw, 48px)" }}>
                <div className="flex-1 overflow-hidden" style={{ borderRadius: "clamp(16px, 2.08vw, 40px)", aspectRatio: "525 / 591" }}>
                  <img src="/images/gallery-1.jpg" alt="Design studio exhibition" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="flex-1 overflow-hidden" style={{ borderRadius: "clamp(16px, 2.08vw, 40px)", aspectRatio: "525 / 591" }}>
                  <img src="/images/gallery-2.jpg" alt="Design sketches" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
              {/* Bottom: wide motorcycle workshop */}
              <div className="overflow-hidden" style={{ borderRadius: "clamp(16px, 2.08vw, 40px)", aspectRatio: "1092 / 585" }}>
                <img src="/images/gallery-3.jpg" alt="Motorcycle workshop" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>

            {/* Right frame */}
            <div className="flex flex-col flex-1" style={{ gap: "clamp(8px, 2.2vw, 43px)" }}>
              {/* Tall: product design close-up (hand with colored sketches) */}
              <div className="overflow-hidden" style={{ borderRadius: "clamp(16px, 2.08vw, 40px)", aspectRatio: "525 / 802" }}>
                <img src="/images/gallery-5.jpg" alt="Product design sketches" className="w-full h-full object-cover" loading="lazy" />
              </div>
              {/* Small: student presentation */}
              <div className="overflow-hidden" style={{ borderRadius: "clamp(16px, 2.08vw, 40px)", aspectRatio: "525 / 374" }}>
                <img src="/images/gallery-6.jpg" alt="Student presentation" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Publications — Figma section */}
      <RecentPublicationsSection />

      {/* Custom Footer — only for this page */}
      <DesignSchoolFooter />
    </div>
  );
}
