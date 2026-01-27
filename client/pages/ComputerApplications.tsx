import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from "react";
import type { LucideIcon } from "lucide-react";

import {
  Award,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  ChevronRight,
  Cpu,
  Download,
  Eye,
  GraduationCap,
  Heart,
  Laptop,
  Microscope,
  Network,
  Sparkles,
  Target,
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
import { ProgramFinder } from "@/components/ProgramFinder";
import {
  getComputerApplicationsEvents,
  getComputerApplicationsNews,
  getComputerApplicationsAnnouncements,
  type NoticeItem as ImportedNoticeItem,
} from "@/data/computer-applications-events";


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

type NoticeItem = ImportedNoticeItem;

const getAllComputerApplicationsEvents = () => getComputerApplicationsEvents();
const getComputerApplicationsNewsData = () => getComputerApplicationsNews();
const getComputerApplicationsAnnouncementsData = () => getComputerApplicationsAnnouncements();

function NoticeBoardCarousel() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);

  const events = getAllComputerApplicationsEvents();
  const news = getComputerApplicationsNewsData();
  const announcements = getComputerApplicationsAnnouncementsData();

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
              <span className="text-foreground">Computer Applications </span>
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
    link: "/academics/computer-applications/data-science",
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

const DEAN_INFO: DeanInfo = {
  name: "Dr. S. Senthil",
  title: "Professor",
  position: "Professor & Dean, School of Computer Applications",
  photo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F78123c01ef9a44be8e575afd593b3b05?format=webp&width=800",
  videoUrl: "https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2F1083d7950c0b40d9a4695fbec2736931?alt=media&token=9a163dc2-8adc-462a-bd83-84831fad9217&apiKey=4aa279a8430d441dba9c55f659831878",
  borderColor: "border-blue-500/20",
  bgColor: "bg-blue-500/10",
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

function HeroImage() {
  return (
    <>
      <section className="relative w-full overflow-hidden" id="top">
        <div className="relative w-full h-[55vh] md:h-[70vh]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F78b1f75114dd43ebacd3ebec8be7ca18?format=webp&width=1200"
            alt="School of Computer Applications"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="hero-title-inside absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between p-3 sm:p-6 max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              <p className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-1 sm:mb-4 uppercase tracking-widest font-display">
                School of Computer Applications
              </p>
              <h1 className="text-xs sm:text-base md:text-base text-white/80 mb-2 sm:mb-6 leading-tight font-display">
                Technology, Innovation & Excellence
              </h1>
            </div>

            {/* Buttons inside video - visible on md and up */}
            <div className="hidden md:flex flex-col gap-2 sm:gap-4">
              <a
                href="https://admissions.dsu.edu.in/"
                target="_blank"
                rel="noreferrer"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Button
                  size="sm"
                  className="sm:size-lg bg-white hover:bg-white/90 text-brand-magenta hover:text-brand-magenta/80 px-4 sm:px-8 py-2 sm:py-6 text-xs sm:text-base font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
                >
                  Apply Now
                  <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a
                href="https://dsu.edu.in/virtual-tour/"
                target="_blank"
                rel="noreferrer"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Button
                  size="sm"
                  className="sm:size-lg bg-white hover:bg-white/90 text-brand-magenta hover:text-brand-magenta/80 px-4 sm:px-8 py-2 sm:py-6 text-xs sm:text-base font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
                >
                  Virtual Tour
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-background relative max-w-7xl mx-auto px-3 w-full py-6 sm:py-8">
        <div className="hero-title-outside max-w-2xl">
          <p className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-1 sm:mb-4 uppercase tracking-widest font-display">
            School of Computer Applications
          </p>
          <h1 className="text-xs sm:text-base md:text-base text-foreground/80 mb-2 sm:mb-6 leading-tight font-display">
            Technology, Innovation & Excellence
          </h1>
        </div>

        {/* Buttons below video - visible only on mobile */}
        <div className="flex md:hidden flex-row gap-2 sm:gap-4">
          <a
            href="https://admissions.dsu.edu.in/"
            target="_blank"
            rel="noreferrer"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Button
              size="sm"
              className="sm:size-lg bg-white hover:bg-white/90 text-brand-magenta hover:text-brand-magenta/80 px-4 sm:px-8 py-2 sm:py-6 text-xs sm:text-base font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
            >
              Apply Now
              <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <a
            href="https://dsu.edu.in/virtual-tour/"
            target="_blank"
            rel="noreferrer"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Button
              size="sm"
              className="sm:size-lg bg-white hover:bg-white/90 text-brand-magenta hover:text-brand-magenta/80 px-4 sm:px-8 py-2 sm:py-6 text-xs sm:text-base font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
            >
              Virtual Tour
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}

export default function ComputerApplications() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroImage />

      {/* Dean's Message Section */}
      <DeanSection dean={DEAN_INFO} />

      <section id="programs" className="relative overflow-hidden px-6 py-12">
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
          <div className="mb-12">
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

      <section
        id="related-resources"
        className="bg-gradient-to-r from-brand-magenta/5 via-brand-blue/5 to-brand-orange/5 px-6 py-12"
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

            <RouterLink
              to="/academics/computer-applications/faculty"
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
                    Meet our dedicated team of educators and mentors
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

      <section className="px-6 py-12">
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

      <ProgramFinder
        schoolName="School of Computer Applications"
        themeColor="blue"
      />

      <section id="notice-board" className="px-3 py-6">
        <NoticeBoardCarousel />
      </section>

      <section className="px-6 pb-16">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
