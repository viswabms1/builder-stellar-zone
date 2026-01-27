import { Link as RouterLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Award,
  BadgeCheck,
  CalendarDays,
  ChevronRight,
  ClipboardCheck,
  Download,
  Droplet,
  GraduationCap,
  HeartPulse,
  Microscope,
  Pill,
  Stethoscope,
  Syringe,
  Users,
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
import { DeanSection, type DeanInfo } from "@/components/DeanSection";
import { ProgramFinder } from "@/components/ProgramFinder";
import { useAutoMuteOnScroll } from "@/hooks/useAutoMuteOnScroll";
import { SchoolNoticeBoard } from "@/components/SchoolNoticeBoard";
import {
  getHealthSciencesEvents,
  getHealthSciencesNews,
  getHealthSciencesAnnouncements,
  type NoticeItem as ImportedNoticeItem,
} from "@/data/health-sciences-events";

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

type CollegeCard = {
  id: string;
  name: string;
  collegeName: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  image: string;
  gradient: string;
  link: string;
};

const getAllHealthSciencesEvents = () => getHealthSciencesEvents();
const getHealthSciencesNewsData = () => getHealthSciencesNews();
const getHealthSciencesAnnouncementsData = () =>
  getHealthSciencesAnnouncements();

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1580281657521-8a19aa08c8c8?q=80&w=2000&auto=format&fit=crop";

const COLLEGE_CARDS: CollegeCard[] = [
  {
    id: "nursing",
    name: "Nursing",
    collegeName: "College of Nursing Sciences",
    description:
      "Holistic nursing education with simulation labs, clinical rotations and global certifications to develop compassionate healthcare leaders.",
    icon: HeartPulse,
    color: "text-brand-magenta",
    bgColor: "bg-brand-magenta/10 border-brand-magenta/30",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop",
    gradient: "from-brand-magenta/80 via-black/70 to-black/60",
    link: "/academics/health-sciences/nursing",
  },
  {
    id: "pharmacy",
    name: "Pharmacy",
    collegeName: "College of Pharmaceutical Sciences",
    description:
      "Professional pharmaceutical sciences covering pharmaceutics, pharmacology, regulatory sciences and clinical pharmacy with research focus.",
    icon: Pill,
    color: "text-brand-blue",
    bgColor: "bg-brand-blue/10 border-brand-blue/30",
    image:
      "https://images.unsplash.com/photo-1585523740023-dea1b3ffe518?q=80&w=1600&auto=format&fit=crop",
    gradient: "from-brand-blue/80 via-black/70 to-black/60",
    link: "/academics/health-sciences/pharmacy",
  },
  {
    id: "physiotherapy",
    name: "Physiotherapy",
    collegeName: "College of Physiotherapy",
    description:
      "Comprehensive physiotherapy education with sports, neuro and cardiorespiratory specialisations through hands-on clinical practice.",
    icon: Activity,
    color: "text-brand-orange",
    bgColor: "bg-brand-orange/10 border-brand-orange/30",
    image:
      "https://images.unsplash.com/photo-1576091160550-112569c0fce4?q=80&w=1600&auto=format&fit=crop",
    gradient: "from-brand-orange/80 via-black/70 to-black/60",
    link: "/academics/health-sciences/physiotherapy",
  },
  {
    id: "allied-health",
    name: "CAHS",
    collegeName: "College of Allied Health Sciences",
    description:
      "Programmes across medical laboratory technology, imaging, anaesthesia and emergency care with state-of-the-art facilities.",
    icon: Zap,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10 border-emerald-500/30",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop",
    gradient: "from-emerald-600/80 via-black/70 to-black/60",
    link: "/academics/health-sciences/allied-health",
  },
];

const CALENDAR_ENTRIES: CalendarEntry[] = [
  {
    title: "Health Sciences Academic Calendar",
    academicYear: "2025-26",
    description:
      "Detailed timeline for all health programmes including clinical rotations, internships and assessments.",
    documentUrl:
      "https://www.dsu.edu.in/images/HealthSciences/calendar_2025_26.pdf",
    tag: "Health Sciences",
  },
];

const FEATURED_NEWS: NewsItem[] = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fbf6a54aff7814535b71eda78a3d5f95e?format=webp&width=800",
    category: "Excellence",
    title:
      "Health Sciences Students Awarded Best Research in Clinical Practice",
    excerpt:
      "DSU nursing students receive national recognition for innovative clinical research and patient care excellence.",
    date: "Nov 12, 2025",
    color: "brand-magenta",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ff67a08f95a24431783dc54fc189e605b?format=webp&width=800",
    category: "Research",
    title:
      "Faculty Research on Healthcare Innovation Published in International Journal",
    excerpt:
      "DSU Health Sciences faculty publish groundbreaking research on patient-centric healthcare delivery systems.",
    date: "Nov 8, 2025",
    color: "brand-blue",
  },
  {
    image:
      "https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2Fd56a1c898842468187e8ff3260f0cdda?alt=media&token=6cb58cdf-a202-461d-b774-09ce61d439c3&apiKey=4aa279a8430d441dba9c55f659831878",
    category: "Placement",
    title: "95% Placement Rate for 2024-25 Health Sciences Graduates",
    excerpt:
      "Graduates placed at leading hospitals, healthcare organizations and research institutions worldwide.",
    date: "Oct 28, 2025",
    color: "brand-orange",
  },
];

const DEAN_INFO: DeanInfo = {
  name: "Dr. Pushpa Sarkar",
  title: "M.B.B.S., M.D. (Biochemistry)",
  position: "Dean, School of Health Sciences",
  photo:
    "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F7f512c1d58e5453a998bd190aac7ba35?format=webp&width=800",
  videoUrl:
    "https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2F84f33b0c1ec44dffa2b88332dd96833b?alt=media&token=2302d6e9-c38f-4838-b825-9f092b62845e&apiKey=4aa279a8430d441dba9c55f659831878",
  borderColor: "border-emerald-500/20",
  bgColor: "bg-emerald-500/10",
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
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div
        ref={containerRef}
        className="hero-video-container relative flex items-center justify-start"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F9e87377449e3447f8c28ad6d3cbc7823?format=webp&width=800"
          alt="School of Health Sciences"
          className="absolute inset-0 object-cover w-full h-full"
          style={{
            filter: "brightness(1.1) contrast(1.15) saturate(1.2)",
            objectPosition: "center top",
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

        <div className="hero-title-inside absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between p-3 sm:p-6 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <p className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-1 sm:mb-4 uppercase tracking-widest font-display">
              School of Health Sciences
            </p>
            <h1 className="text-xs sm:text-base md:text-base text-white/80 mb-2 sm:mb-6 leading-tight font-display">
              Advancing Care. Inspiring Wellness.
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
                className="sm:size-lg bg-white hover:bg-white/90 text-brand-orange hover:text-brand-orange/80 font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
                style={{
                  padding: "clamp(0.5rem, 1.5vw, 1rem) clamp(1rem, 3vw, 2rem)",
                  fontSize: "clamp(0.75rem, 1.8vw, 1rem)",
                }}
              >
                Apply Now
                <ChevronRight
                  style={{
                    width: "clamp(1rem, 2vw, 1.25rem)",
                    height: "clamp(1rem, 2vw, 1.25rem)",
                  }}
                  className="ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </a>
            <a
              href="https://dsu.edu.in/virtual-tour/#SchoolofHealthSciencesEntrance,-56.94,0,75,4"
              target="_blank"
              rel="noreferrer"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Button
                size="sm"
                className="sm:size-lg bg-white hover:bg-white/90 text-brand-orange hover:text-brand-orange/80 font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
                style={{
                  padding: "clamp(0.5rem, 1.5vw, 1rem) clamp(1rem, 3vw, 2rem)",
                  fontSize: "clamp(0.75rem, 1.8vw, 1rem)",
                }}
              >
                Health Sciences Tour
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
                className="sm:size-lg bg-white hover:bg-white/90 text-brand-orange hover:text-brand-orange/80 font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
                style={{
                  padding: "clamp(0.5rem, 1.5vw, 1rem) clamp(1rem, 3vw, 2rem)",
                  fontSize: "clamp(0.75rem, 1.8vw, 1rem)",
                }}
              >
                Full University Tour
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-background relative max-w-7xl mx-auto px-3 w-full py-6 sm:py-8">
        <div className="hero-title-outside max-w-2xl">
          <p className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-1 sm:mb-4 uppercase tracking-widest font-display">
            School of Health Sciences
          </p>
          <h1 className="text-xs sm:text-base md:text-base text-foreground/80 mb-2 sm:mb-6 leading-tight font-display">
            Advancing Care. Inspiring Wellness.
          </h1>
        </div>

        {/* Buttons below video - visible only on mobile */}
        <div className="flex md:hidden flex-col sm:flex-row gap-2 sm:gap-4 landscape-buttons">
          <a
            href="https://admissions.dsu.edu.in/"
            target="_blank"
            rel="noreferrer"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Button
              size="sm"
              className="sm:size-lg bg-white hover:bg-white/90 text-brand-orange hover:text-brand-orange/80 font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
              style={{
                padding: "clamp(0.5rem, 1.5vw, 1rem) clamp(1rem, 3vw, 2rem)",
                fontSize: "clamp(0.75rem, 1.8vw, 1rem)",
              }}
            >
              Apply Now
              <ChevronRight
                style={{
                  width: "clamp(1rem, 2vw, 1.25rem)",
                  height: "clamp(1rem, 2vw, 1.25rem)",
                }}
                className="ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </a>
          <a
            href="https://dsu.edu.in/virtual-tour/#SchoolofHealthSciencesEntrance,-56.94,0,75,4"
            target="_blank"
            rel="noreferrer"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Button
              size="sm"
              className="sm:size-lg bg-white hover:bg-white/90 text-brand-orange hover:text-brand-orange/80 font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
              style={{
                padding: "clamp(0.5rem, 1.5vw, 1rem) clamp(1rem, 3vw, 2rem)",
                fontSize: "clamp(0.75rem, 1.8vw, 1rem)",
              }}
            >
              Health Sciences Tour
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
              className="sm:size-lg bg-white hover:bg-white/90 text-brand-orange hover:text-brand-orange/80 font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
              style={{
                padding: "clamp(0.5rem, 1.5vw, 1rem) clamp(1rem, 3vw, 2rem)",
                fontSize: "clamp(0.75rem, 1.8vw, 1rem)",
              }}
            >
              Full University Tour
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}

export default function HealthSciences() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative" id="top">
        <HeroVideo />
      </section>

      {/* Dean's Message Section */}
      <DeanSection dean={DEAN_INFO} />

      <section id="colleges" className="relative overflow-hidden px-3 py-8">
        <div
          className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-brand-magenta/20 via-transparent to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl mb-3">
                Our Colleges
              </h2>
              <p className="mt-3 text-sm text-foreground font-body max-w-2xl">
                The School of Health Sciences affiliated with Dayananda Sagar
                University provides comprehensive education in the health sector
                and focuses on the betterment of the Healthcare System.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {COLLEGE_CARDS.map((college) => {
              const IconComponent = college.icon;
              const isInternal = college.link.startsWith("/");
              const CardComponent = isInternal ? RouterLink : "a";
              const cardProps = isInternal
                ? { to: college.link }
                : { href: college.link, target: "_blank", rel: "noreferrer" };
              return (
                <CardComponent
                  key={college.id}
                  {...cardProps}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/10 backdrop-blur-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-magenta/20 min-h-[400px] flex flex-col block no-underline"
                >
                  <img
                    src={college.image}
                    alt={college.collegeName}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${college.gradient} mix-blend-multiply`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div
                    className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(0deg, rgba(255,255,255,.03) 0px, rgba(255,255,255,.03) 1px, transparent 1px, transparent 2px)",
                    }}
                  ></div>

                  <div className="relative z-10 flex h-full flex-col justify-between p-6 text-white">
                    <div>
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/15 backdrop-blur-sm">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-display text-3xl font-bold leading-tight mb-2">
                        {college.name}
                      </h3>
                      <p className="text-sm font-medium text-white/90 mb-4">
                        {college.collegeName}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-white/80 font-body leading-relaxed mb-4">
                        {college.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-semibold text-white/90 group-hover:text-white transition-colors">
                        Explore Programme
                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </CardComponent>
              );
            })}
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
              Explore More at DSU Health Sciences
            </h2>
            <p className="mt-3 text-sm text-foreground font-body">
              Discover our clinical excellence, research initiatives, placements
              and admission pathways
            </p>
          </div>
          <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-4">
            <a
              href="/centre-of-excellence"
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
                    Clinical research initiatives and simulation-powered
                    learning labs
                  </p>
                </CardContent>
              </Card>
            </a>

            <a
              href="/research"
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
                    Faculty-led clinical research and translational medicine
                    initiatives
                  </p>
                </CardContent>
              </Card>
            </a>

            <a
              href="/placements"
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
                    Career pathways with leading hospitals and healthcare
                    organizations
                  </p>
                </CardContent>
              </Card>
            </a>

            <a
              href="https://admissions.dsu.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-magenta/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-magenta/20 to-brand-magenta/10 flex items-center justify-center">
                  <HeartPulse className="h-12 w-12 text-brand-magenta/70 group-hover:text-brand-magenta transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-magenta transition-colors">
                    Admissions
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p className="text-sm text-foreground/80 font-body">
                    Join DSU Health Sciences and make a difference in healthcare
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
                  health-sciences@dsu.edu.in
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
              <a
                href="https://www.dsu.edu.in/health-sciences/programs"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-magenta"
              >
                Programs Overview
              </a>
              <a
                href="https://www.dsu.edu.in/health-sciences/newsletter"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-magenta"
              >
                Monthly Newsletter
              </a>
              <a
                href="https://www.dsu.edu.in/health-sciences/library"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-magenta"
              >
                Digital Library
              </a>
              <a
                href="https://www.dsu.edu.in/health-sciences/student-hub"
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

      <SchoolNoticeBoard school="Health Sciences" />
    </div>
  );
}
