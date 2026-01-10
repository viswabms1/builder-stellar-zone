import { useState, useRef, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  GraduationCap,
  BookOpen,
  Stethoscope,
  Heart,
  Users,
  Trophy,
  Microscope,
  Award,
  ChevronRight,
  Volume2,
  VolumeX,
  Download,
  Activity,
  Dna,
  FlaskConical,
  Eye,
} from "lucide-react";
import { DeanSection, type DeanInfo } from "@/components/DeanSection";
import { useAutoMuteOnScroll } from "@/hooks/useAutoMuteOnScroll";
import {
  getAlliedHealthEvents,
  getAlliedHealthNews,
  getAlliedHealthAnnouncements,
  type NoticeItem as ImportedNoticeItem,
} from "@/data/allied-health-events";

type NoticeItem = ImportedNoticeItem;

const DEAN_INFO: DeanInfo = {
  name: "Dr. Nandan.T.M, MBBS, MD, ACME",
  title: "Professor - Microbiology & Principal",
  position: "College of Allied Health Sciences",
  photo:
    "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F828e34a3364649dd99857a8eb36a137a?format=webp&width=800",
  message: [
    "Established in 2021, the College of Allied Health Sciences offers eight undergraduate programmes and a Master of Public Health (MPH). Our curriculum is designed to provide highly skilled healthcare professionals for global delivery of preventive, curative, and rehabilitative care.",
    "Students are mentored by a multidisciplinary faculty of physicians, surgeons, and scientists, gaining real-life learning experiences through seminars, symposia, and clinical training from the start.",
    "Integrated within our parent medical school and hospital, we provide state-of-the-art infrastructure—including advanced labs, OT complexes, and emergency departments—ensuring rigorous monitoring of academic progress and hands-on technical training.",
    "Our graduates are prepared for diverse employment opportunities in the rapidly advancing healthcare industry worldwide. I wish all aspirants success in joining this revered sector.",
  ],
  borderColor: "border-brand-blue/20",
  bgColor: "bg-brand-blue/5",
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

const UG_PROGRAM_CARDS: ProgramCard[] = [
  {
    name: "B.Sc. Medical Laboratory Technology",
    area: "Undergraduate",
    description:
      "Performs clinical tests on specimens of bodily fluids and tissues to gather critical health information or determine cause of death.",
    image:
      "https://images.unsplash.com/photo-1513624954087-ca7109c0f710?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/health-sciences/bsc-mlt",
    highlights: ["Anatomy", "Physiology", "Biochemistry", "Microbiology", "Pathology"],
    overlay:
      "bg-gradient-to-br from-brand-blue/80 via-black/75 to-black/60 mix-blend-multiply",
    badgeClass:
      "bg-brand-blue/25 text-foreground/90 border border-white/30 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
  },
  {
    name: "B.Sc. Emergency & Trauma Care Technology",
    area: "Undergraduate",
    description:
      "Provides diagnostic, curative, and preventive medical services under doctor supervision, applying advanced procedures for treating injuries.",
    image:
      "https://images.unsplash.com/photo-1587350859728-117622bc75fb?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/health-sciences/bsc-etct",
    highlights: ["Anatomy", "Pharmacology", "Emergency Services", "Trauma Care"],
    overlay:
      "bg-gradient-to-br from-brand-orange/75 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-orange/30 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
  },
  {
    name: "B.Sc. in Operation Theatre Technology",
    area: "Undergraduate",
    description:
      "Member of multidisciplinary surgical teams assisting anesthetists, maintaining OTs, and managing sterile services and disaster preparedness.",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/health-sciences/bsc-aott",
    highlights: ["Anesthesia Tech", "OT Management", "Pharmacology", "Medicine"],
    overlay:
      "bg-gradient-to-br from-brand-magenta/75 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-magenta/30 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
  },
  {
    name: "B.Sc. in Radiology & Imaging Technology",
    area: "Undergraduate",
    description:
      "Tests and operates radiographic, ultrasound, and MRI equipment to produce images for diagnosis and monitors radiation treatments.",
    image:
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/health-sciences/bsc-mirt",
    highlights: ["Radiation Physics", "Imaging Physics", "Diagnostic Techniques", "Patient Care"],
    overlay:
      "bg-gradient-to-br from-brand-blue/75 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-blue/30 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
  },
  {
    name: "B.Sc. Renal Dialysis Technology",
    area: "Undergraduate",
    description:
      "Specialized training in dialysis procedures, nephrology care, and kidney care management for patients with renal impairments.",
    image:
      "https://images.unsplash.com/photo-1505751172107-104990666014?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/health-sciences/bsc-rdt",
    highlights: ["4 Years", "Nephrology Care", "Dialysis Support"],
    overlay:
      "bg-gradient-to-br from-brand-orange/75 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-orange/30 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
  },
  {
    name: "B.Sc. Cardiac Care Technology",
    area: "Undergraduate",
    description:
      "Expertise in circulatory systems and complex equipment operation for adult and pediatric cardiac interventions and structural defect correction.",
    image:
      "https://images.unsplash.com/photo-1576091160550-112569c0fce4?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/health-sciences/bsc-cct",
    highlights: ["Human-Anatomy", "Biochemistry", "Blood Banking", "Hematology"],
    overlay:
      "bg-gradient-to-br from-brand-magenta/75 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-magenta/30 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
  },
  {
    name: "B.Sc Audiology and Speech language Pathology",
    area: "Undergraduate",
    description:
      "Diagnosis and treatment of hearing, speech, and language disorders.",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/health-sciences/bsc-aslp",
    highlights: ["4 Years", "Communication Disorders", "Clinical Practice"],
    overlay:
      "bg-gradient-to-br from-brand-blue/75 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-blue/30 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
  },
  {
    name: "B.Sc Optometry",
    area: "Undergraduate",
    description:
      "Professional training in vision care, diagnostic tests, and clinical optometry.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/health-sciences/bsc-optometry",
    highlights: ["4 Years", "Vision Science", "Eye Care"],
    overlay:
      "bg-gradient-to-br from-brand-orange/75 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-orange/30 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
  },
];

const PG_PROGRAM_CARDS: ProgramCard[] = [
  {
    name: "MPH (Masters in Public Health)",
    area: "Postgraduate",
    description:
      "Focuses on disease epidemiology, public policy, and program management, bridging the gap between clinical and managerial aspects of healthcare implementation.",
    image:
      "https://images.unsplash.com/photo-1579165466511-70e21a47b192?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/health-sciences/mph",
    highlights: [
      "Epidemiology",
      "Public Policy",
      "Health Economics",
      "Biostatistics",
    ],
    overlay:
      "bg-gradient-to-br from-brand-blue/70 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-blue/30 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
    featured: true,
  },
];

function ProgramCardComponent({ program }: { program: ProgramCard }) {
  const isInternal = program.link.startsWith("/");
  const wrapperClasses = `group block h-full rounded-none ${
    program.featured ? "lg:col-span-6" : "lg:col-span-3"
  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background`;
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
      className={`relative flex h-full flex-col justify-end overflow-hidden rounded-none border border-white/10 bg-black/10 backdrop-blur-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-blue/20 ${
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
            <span className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-colors group-hover:text-brand-blue">
              Explore programme
              <ChevronRight className="h-4 w-4 transition-colors group-hover:text-brand-blue" />
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

  const specializations = [
    { icon: Microscope, label: "Lab Technology" },
    { icon: Eye, label: "Imaging Tech" },
    { icon: Activity, label: "Renal Care" },
    { icon: FlaskConical, label: "Biochemistry" },
    { icon: Dna, label: "Genetics" },
    { icon: Heart, label: "Public Health" },
  ];

  return (
    <>
      <div
        ref={containerRef}
        className="hero-video-container relative flex items-center justify-start"
      >
        <video
          ref={videoRef}
          src="https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2Fc96300162edb489dadc4e52306782aa5?alt=media&token=010e011e-5cd1-4973-afcf-1d2494fefde8&apiKey=4aa279a8430d441dba9c55f659831878"
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
            objectPosition: "center center",
            filter: "brightness(1.1) contrast(1.1) saturate(1.15)",
            zIndex: 0,
          }}
        />

        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />

        <button
          onClick={toggleMute}
          className="absolute top-4 right-8 z-50 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white backdrop-blur-sm border border-white/20"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 rounded-full border border-white/20 mb-4 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white font-display">
                College of Allied Health Sciences
              </span>
            </div>
            <p className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-1 sm:mb-4 uppercase tracking-widest font-display">
              College of Allied Health Sciences
            </p>
            <h1 className="text-xs sm:text-base md:text-base text-white/80 mb-2 sm:mb-6 leading-tight font-display">
              Empowering Healthcare through Technical Excellence
            </h1>
            <div className="mt-4 sm:mt-6 flex flex-wrap gap-1 sm:gap-2">
              {specializations.map((s, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 px-2 py-0.5 sm:gap-2 sm:px-3 sm:py-1 rounded-full bg-white/10 text-white text-xs backdrop-blur"
                >
                  <s.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> {s.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-background relative max-w-7xl mx-auto px-3 w-full py-6 sm:py-8">
        <div className="hero-title-outside max-w-2xl">
          <p className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-1 sm:mb-4 uppercase tracking-widest font-display">
            College of Allied Health Sciences
          </p>
          <h1 className="text-xs sm:text-base md:text-base text-foreground/80 mb-2 sm:mb-6 leading-tight font-display">
            Empowering Healthcare through Technical Excellence
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
              className="sm:size-lg bg-white hover:bg-white/90 text-brand-orange hover:text-brand-orange/80 px-4 sm:px-8 py-2 sm:py-6 text-xs sm:text-base font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
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
              className="sm:size-lg bg-white hover:bg-white/90 text-brand-orange hover:text-brand-orange/80 px-4 sm:px-8 py-2 sm:py-6 text-xs sm:text-base font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
            >
              Virtual Tour
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}

function NoticeBoardCarousel() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);

  const events = getAlliedHealthEvents();
  const news = getAlliedHealthNews();
  const announcements = getAlliedHealthAnnouncements();

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
          borderColor: "border-brand-blue",
          bgColor: "bg-brand-blue/10",
          textColor: "text-brand-blue",
          dotColor: "bg-brand-blue",
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
          borderColor: "border-brand-magenta",
          bgColor: "bg-brand-magenta/10",
          textColor: "text-brand-magenta",
          dotColor: "bg-brand-magenta",
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
                College of Allied Health Sciences{" "}
              </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Notice Board
              </span>
            </h2>
            <p className="max-w-2xl text-sm text-foreground sm:text-base font-body">
              Stay updated with upcoming events, news, and important
              announcements from the college.
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

export default function AlliedHealthSciences() {
  const highlights = [
    "State-of-the-art lecture halls, demo-rooms, and practical halls",
    "Integrated clinical training at parent medical school and attached hospital",
    "Hands-on exposure in Central Laboratory, OT Complexes, and Emergency Dept",
    "Advanced training in Radio-diagnostics, Renal Dialysis, and Blood Bank",
    "Community health training centers equipped with advanced technology",
    "On-campus hostel facilities for a safe and convenient student life",
    "Rigorous monitoring of academic progress and vocational mentorship",
  ];

  const careers = [
    "Medical Technologists → Laboratory/Clinical Managers → Department Heads",
    "Public Health Professionals → Policy Analysts → Healthcare Administrators",
    "Global opportunities in ever-advancing healthcare industries",
    "100% placement focus in revered healthcare sectors locally and abroad",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative" id="top">
        <HeroVideo />
      </section>

      {/* Dean's Message Section */}
      <DeanSection dean={DEAN_INFO} />

      {/* Programs Section */}
      <section id="programs" className="relative overflow-hidden px-3 py-8">
        <div
          className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-brand-blue/20 via-transparent to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl">
                Programs Offered
              </h2>
              <p className="mt-3 text-sm text-foreground font-body max-w-2xl">
                Comprehensive education in allied health sciences with a focus on clinical excellence and technical mastery
              </p>
            </div>
          </div>

          {/* Undergraduate Programs */}
          <div className="mb-12">
            <div className="mb-6">
              <Badge className="bg-brand-blue/15 text-brand-blue mb-2">
                Undergraduate
              </Badge>
              <h3 className="font-display text-2xl">B.Sc Allied Health Programs</h3>
            </div>
            <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-12">
              {UG_PROGRAM_CARDS.map((program) => (
                <ProgramCardComponent key={program.name} program={program} />
              ))}
            </div>
          </div>

          {/* Postgraduate Programs */}
          <div className="mb-12">
            <div className="mb-6">
              <Badge className="bg-brand-magenta/15 text-brand-magenta mb-2">
                Postgraduate
              </Badge>
              <h3 className="font-display text-2xl">M.Sc Programs</h3>
            </div>
            <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-12">
              {PG_PROGRAM_CARDS.map((program) => (
                <ProgramCardComponent key={program.name} program={program} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Allied Health */}
      <section className="px-3 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Why Choose Allied Health Sciences at DSU?
            </h2>
            <p className="text-foreground/80 font-body max-w-3xl mb-8">
              We provide a robust foundation for healthcare careers through advanced technology, expert faculty, and extensive clinical exposure.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {highlights.map((highlight, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 rounded-lg border border-brand-blue/20 bg-brand-blue/5"
              >
                <Activity className="h-6 w-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground font-body">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="px-3 py-8 bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Career Pathways & Placements
            </h2>
            <p className="text-foreground/80 font-body max-w-3xl">
              Our graduates are prepared for high-demand roles in hospitals, diagnostic centers, and research institutes across the globe.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {careers.map((career, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <div className="flex items-start gap-3">
                  <Trophy className="h-5 w-5 text-brand-orange flex-shrink-0 mt-1" />
                  <p className="text-sm text-foreground font-body">{career}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section
        id="related-resources"
        className="bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5 px-3 py-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl">
              Explore More at DSU Allied Health
            </h2>
            <p className="mt-3 text-sm text-foreground font-body">
              Discover our technical expertise, research, and placement pathways
            </p>
          </div>
          <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-5">
            <RouterLink
              to="/academics/health-sciences/allied-health/faculty"
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
                    Meet our expert allied health faculty and clinicians
                  </p>
                </CardContent>
              </Card>
            </RouterLink>

            <a
              href="/centre-of-excellence"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 flex items-center justify-center">
                  <Award className="h-12 w-12 text-brand-blue/70 group-hover:text-brand-blue transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-blue transition-colors">
                    Clinical Training Labs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    Advanced clinical facilities and diagnostic centers
                  </p>
                </CardContent>
              </Card>
            </a>

            <a
              href="/research"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-magenta/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-magenta/20 to-brand-magenta/10 flex items-center justify-center">
                  <Microscope className="h-12 w-12 text-brand-magenta/70 group-hover:text-brand-magenta transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-magenta transition-colors">
                    Research & Innovation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    Pioneering research in medical technology and public health
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
                    Global career pathways in leading healthcare systems
                  </p>
                </CardContent>
              </Card>
            </a>

            <a
              href="https://admissions.dsu.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 flex items-center justify-center">
                  <Activity className="h-12 w-12 text-brand-blue/70 group-hover:text-brand-blue transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-blue transition-colors">
                    Admissions
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p className="text-sm text-foreground/80 font-body">
                    Start your career in Allied Health Sciences today
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-brand-blue group-hover:text-brand-blue/80 transition-colors">
                    Apply Now
                    <ChevronRight className="h-3 w-3" />
                  </span>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Leadership & Resources */}
      <section className="px-3 py-8">
        <div className="mx-auto grid max-w-5xl items-start gap-4 lg:grid-cols-2">
          <Card className="rounded-none border border-brand-blue/20 bg-brand-blue/5">
            <CardHeader>
              <CardTitle className="font-display">
                Contact & Leadership
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 text-sm font-body text-foreground">
              <div>
                <div className="text-foreground/70 text-xs uppercase tracking-wide">
                  Email
                </div>
                <div className="font-medium text-foreground">
                  alliedhealth@dsu.edu.in
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

          <Card className="rounded-none border border-brand-magenta/20 bg-brand-magenta/5">
            <CardHeader>
              <CardTitle className="font-display">More Resources</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm font-body">
              <a
                href="https://www.dsu.edu.in/health-sciences/allied-health-programs"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-blue"
              >
                Programs Overview
              </a>
              <a
                href="https://www.dsu.edu.in/health-sciences/allied-health-faculty"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-blue"
              >
                Faculty Directory
              </a>
              <a
                href="https://www.dsu.edu.in/health-sciences/allied-health-library"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-blue"
              >
                Digital Library
              </a>
              <a
                href="https://www.dsu.edu.in/health-sciences/student-hub"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-blue"
              >
                Student Hub
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Notice Board */}
      <section id="notice-board" className="px-3 py-8">
        <NoticeBoardCarousel />
      </section>
    </div>
  );
}
