import { Link as RouterLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import type { LucideIcon } from "lucide-react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}
import {
  Award,
  Beaker,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Download,
  FileText,
  FlaskConical,
  GraduationCap,
  Microscope,
  Network,
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
import {
  getDepartmentEvents,
  getSchoolNews,
  getSchoolAnnouncements,
  type NoticeItem as ImportedNoticeItem,
} from "@/data/engineering-events";
import { useAutoMuteOnScroll } from "@/hooks/useAutoMuteOnScroll";

const HERO_IMAGE = "https://www.dsu.edu.in/images/Engineering/engg-landing.jpg";

type EngineeringDepartment = {
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

type SupportingDepartment = {
  name: string;
  focus: string;
  image: string;
  link: string;
};

type CalendarEntry = {
  title: string;
  academicYear: string;
  description: string;
  documentUrl: string;
  tag: string;
};

const UG_PROGRAMS = [
  "Computer Science & Engineering",
  "Computer Science & Engineering (AI & ML)",
  "Computer Science & Engineering (AI & Data Science)",
  "AI & Robotics",
  "Computer Science & Engineering (Data Science)",
  "Computer Science & Engineering (Cyber Security)",
  "Electronics & Communication Engineering",
  "Mechanical Engineering",
  "Computer Science & Technology",
  "Aerospace Engineering",
  "Computer Science and Medical Engineering",
];

const UG_PROGRAM_LINKS: Record<string, string> = {
  "Computer Science & Engineering": "/academics/engineering/computer-science",
  "Computer Science & Engineering (AI & ML)": "/academics/engineering/cse-aiml",
};

const PG_PROGRAMS = [
  "Computer Science & Engineering",
  "Embedded Systems",
  "Design Engineering",
];

const ENGINEERING_DEPARTMENTS: EngineeringDepartment[] = [
  {
    name: "Computer Science & Engineering",
    area: "Flagship UG Major",
    description:
      "AI-ready curriculum spanning full stack engineering, cyber defence, cloud-native architectures and product innovation studios.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/engineering/computer-science",
    highlights: ["AI & ML Studio", "Product Labs", "Industry Hackathons"],
    overlay:
      "bg-gradient-to-br from-brand-magenta/80 via-black/75 to-black/60 mix-blend-multiply",
    badgeClass:
      "bg-brand-magenta/25 text-foreground/90 border border-white/30 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
    featured: true,
  },
  {
    name: "Electronics & Communication Engineering",
    area: "Intelligent Systems",
    description:
      "Design advanced electronics, VLSI, embedded and communication systems empowered by 5G, IoT and semiconductor labs.",
    image:
      "https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/engineering/electronics-communication",
    highlights: ["VLSI Lab", "5G Research", "IoT Systems"],
    overlay:
      "bg-gradient-to-br from-brand-blue/80 via-black/75 to-black/60 mix-blend-multiply",
    badgeClass:
      "bg-brand-blue/30 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/60 backdrop-blur-xl",
    featured: true,
  },
  {
    name: "Mechanical Engineering",
    area: "Core Engineering",
    description:
      "Master sustainable manufacturing, automotive systems, robotics and design thinking with hands-on prototyping studios.",
    image:
      "https://images.unsplash.com/photo-1517677129300-07b130802f46?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/engineering/mechanical-engineering",
    highlights: ["Advanced Manufacturing", "Robotics Studio", "CAE Tools"],
    overlay:
      "bg-gradient-to-br from-brand-orange/80 via-black/75 to-black/60 mix-blend-multiply",
    badgeClass:
      "bg-brand-orange/35 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/65 backdrop-blur-xl",
  },
  {
    name: "Aerospace Engineering",
    area: "High Altitude Futures",
    description:
      "Explore flight mechanics, propulsion, avionics and composite materials in specialised aerospace laboratories.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/engineering/aerospace-engineering",
    highlights: ["Wind Tunnel", "Avionics Lab", "UAV Projects"],
    overlay:
      "bg-gradient-to-tr from-brand-blue/70 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-blue/35 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
  },
  {
    name: "AI & Robotics",
    area: "Interdisciplinary Edge",
    description:
      "Build human-centric intelligent systems blending robotics, machine vision, automation and IoT.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/engineering/ai-robotics",
    highlights: ["Robotics Arena", "Machine Vision", "Automation"],
    overlay:
      "bg-gradient-to-br from-brand-magenta/70 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-magenta/30 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
  },
  {
    name: "Computer Science & Engineering (AI & ML)",
    area: "Specialised UG Major",
    description:
      "Deep-dives into responsible AI, data engineering, ML pipelines and NLP with industry-certified projects.",
    image:
      "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/engineering/cse-aiml",
    highlights: ["Capstone Studios", "AI Research", "Dual Certifications"],
    overlay:
      "bg-gradient-to-br from-brand-magenta/70 via-brand-blue/60 to-black/60 mix-blend-multiply",
    badgeClass:
      "bg-brand-magenta/30 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
  },
  {
    name: "Computer Science & Engineering (AI & Data Science)",
    area: "Data Innovation",
    description:
      "Engineer data products with applied analytics, data governance, cloud-native pipelines and real-time dashboards.",
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/engineering/cse-ai-ds",
    highlights: ["Data Engineering", "Analytics Studio", "Cloud Pipelines"],
    overlay:
      "bg-gradient-to-br from-brand-blue/75 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-blue/30 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
  },
  {
    name: "Computer Science & Engineering (Data Science)",
    area: "Analytical Systems",
    description:
      "Dive into statistical computing, big data processing, intelligent automation and visual analytics.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/engineering/data-science",
    highlights: ["Big Data Lab", "Predictive Models", "Visualization"],
    overlay:
      "bg-gradient-to-br from-brand-blue/70 via-brand-magenta/60 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-blue/30 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
  },
  {
    name: "Computer Science & Engineering (Cyber Security)",
    area: "Security & Resilience",
    description:
      "Protect digital infrastructure through secure coding, ethical hacking, digital forensics and governance frameworks.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/engineering/cybersecurity",
    highlights: ["Cyber Range", "Ethical Hacking", "Forensics"],
    overlay:
      "bg-gradient-to-br from-black/80 via-brand-magenta/60 to-brand-blue/60 mix-blend-multiply",
    badgeClass:
      "bg-black/50 text-foreground/90 border border-white/30 backdrop-blur",
    panelClass: "bg-black/60 backdrop-blur-xl",
  },
  {
    name: "Computer Science & Technology",
    area: "Industry Technology",
    description:
      "Blend software engineering, systems integration and platform engineering oriented towards digital enterprises.",
    image:
      "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/engineering/computer-technology",
    highlights: [
      "Platform Engineering",
      "Systems Design",
      "Enterprise Projects",
    ],
    overlay:
      "bg-gradient-to-br from-brand-orange/70 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-orange/35 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
  },
  {
    name: "Computer Science and Medical Engineering",
    area: "Healthcare Technology",
    description:
      "Create clinical-grade software, biomedical instrumentation and AI-assisted diagnostics for next-gen healthcare.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/engineering/cs-medical-engineering",
    highlights: ["Digital Health", "Medical Imaging", "Bio-Informatics"],
    overlay:
      "bg-gradient-to-br from-brand-magenta/65 via-brand-blue/55 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-magenta/30 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
  },
];

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
    name: "Computer Science & Engineering",
    area: "Flagship UG Major",
    description:
      "AI-ready curriculum spanning full stack engineering, cyber defence, cloud-native architectures and product innovation studios.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/engineering/computer-science",
    highlights: ["AI & ML Studio", "Product Labs", "Industry Hackathons"],
    overlay:
      "bg-gradient-to-br from-brand-magenta/80 via-black/75 to-black/60 mix-blend-multiply",
    badgeClass:
      "bg-brand-magenta/25 text-foreground/90 border border-white/30 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
    featured: true,
  },
  {
    name: "Electronics & Communication Engineering",
    area: "Intelligent Systems",
    description:
      "Design advanced electronics, VLSI, embedded and communication systems empowered by 5G, IoT and semiconductor labs.",
    image:
      "https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/engineering/electronics-communication",
    highlights: ["VLSI Lab", "5G Research", "IoT Systems"],
    overlay:
      "bg-gradient-to-br from-brand-blue/75 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-blue/30 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
    featured: true,
  },
  {
    name: "Mechanical Engineering",
    area: "Core Engineering",
    description:
      "Master sustainable manufacturing, automotive systems, robotics and design thinking with hands-on prototyping studios.",
    image:
      "https://images.unsplash.com/photo-1517677129300-07b130802f46?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/engineering/mechanical-engineering",
    highlights: ["Advanced Manufacturing", "Robotics Studio", "CAE Tools"],
    overlay:
      "bg-gradient-to-br from-brand-orange/70 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-orange/35 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
  },
  {
    name: "Aerospace Engineering",
    area: "High Altitude Futures",
    description:
      "Explore flight mechanics, propulsion, avionics and composite materials in specialised aerospace laboratories.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1600&auto=format&fit=crop",
    link: "https://www.dsu.edu.in/engineering/aerospace-engineering",
    highlights: ["Wind Tunnel", "Avionics Lab", "UAV Projects"],
    overlay:
      "bg-gradient-to-br from-brand-blue/70 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-blue/30 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
  },
  {
    name: "AI & Robotics",
    area: "Interdisciplinary Edge",
    description:
      "Build human-centric intelligent systems blending robotics, machine vision, automation and IoT.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop",
    link: "https://www.dsu.edu.in/engineering/artificial-intelligence-robotics",
    highlights: ["Robotics Arena", "Machine Vision", "Automation"],
    overlay:
      "bg-gradient-to-br from-brand-magenta/70 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-magenta/30 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
  },
  {
    name: "Computer Science & Engineering (AI & ML)",
    area: "Specialised UG Major",
    description:
      "Deep-dives into responsible AI, data engineering, ML pipelines and NLP with industry-certified projects.",
    image:
      "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/engineering/cse-aiml",
    highlights: ["Capstone Studios", "AI Research", "Dual Certifications"],
    overlay:
      "bg-gradient-to-br from-brand-magenta/70 via-brand-blue/60 to-black/60 mix-blend-multiply",
    badgeClass:
      "bg-brand-magenta/30 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
  },
];

const PG_PROGRAM_CARDS: ProgramCard[] = [
  {
    name: "M.Tech - Computer Science & Engineering",
    area: "Advanced Computing",
    description:
      "Specialise in AI, cloud systems, cyber-physical systems and enterprise software through research-driven coursework and industry collaboration.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/engineering/computer-science",
    highlights: ["AI Systems", "Research Thesis", "Industry Mentorship"],
    overlay:
      "bg-gradient-to-br from-brand-magenta/70 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-magenta/30 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
  },
  {
    name: "M.Tech - Embedded Systems",
    area: "Systems Engineering",
    description:
      "Master real-time systems, IoT architectures, edge computing and VLSI design for critical infrastructure and embedded applications.",
    image:
      "https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/engineering/electronics-communication",
    highlights: ["RTOS Design", "Hardware Integration", "Edge Computing"],
    overlay:
      "bg-gradient-to-br from-brand-blue/70 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-blue/30 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
  },
  {
    name: "M.Tech - Design Engineering",
    area: "Product Innovation",
    description:
      "Apply advanced design methodologies, computational tools and human-centred design thinking to create scalable product solutions.",
    image:
      "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/engineering/mechanical-engineering",
    highlights: ["CAD & Simulation", "Design Thinking", "Product Studio"],
    overlay:
      "bg-gradient-to-br from-brand-orange/70 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-orange/35 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
  },
];

const SUPPORTING_DEPARTMENTS: SupportingDepartment[] = [
  {
    name: "Physics Department",
    focus:
      "Advanced instrumentation and applied physics modules covering photonics, energy and smart materials.",
    image:
      "https://images.unsplash.com/photo-1581092795360-6b4ea08a1f5c?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/physics",
  },
  {
    name: "Chemistry Department",
    focus:
      "Materials science, polymer chemistry and environmental labs enabling sustainable engineering solutions.",
    image:
      "https://images.unsplash.com/photo-1581091870622-5f1e9b8d2f70?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/chemistry",
  },
  {
    name: "Mathematics Department",
    focus:
      "Applied mathematics, statistics and computational techniques powering algorithmic and analytical thinking.",
    image:
      "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/mathematics",
  },
  {
    name: "Humanities & Social Sciences",
    focus:
      "Communication, design thinking, economics and liberal arts courses that shape socially conscious engineers.",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/humanities-social-sciences",
  },
];

const ENGINEERING_CALENDAR: CalendarEntry[] = [
  {
    title: "B.Tech Odd Semester Academic Calendar",
    academicYear: "2025-26",
    description:
      "Detailed timeline for B.Tech odd semesters including assessments, internships and industry immersion weeks.",
    documentUrl:
      "https://www.dsu.edu.in/images/Engineering/coe/Odd_Sem_25_26.pdf",
    tag: "B.Tech",
  },
];

const INNOVATION_LABS = [
  "IBM Software Lab for Emerging Technologies",
  "NVIDIA – Boston Innovation Lab",
  "GE Advanced Healthcare Simulation Lab",
  "Aerospace Engineering Lab",
  "Automotive Systems Lab",
  "Automation Technologies",
  "Design & Innovation Centre",
  "VMware IT Academy",
  "IBM Centre of Excellence",
];

type NoticeItem = ImportedNoticeItem;

// Aggregate events from all departments and school-level news/announcements
const getAllEvents = () => getDepartmentEvents();
const getSchoolNewsData = () => getSchoolNews();
const getSchoolAnnouncementsData = () => getSchoolAnnouncements();

function NoticeBoardCarousel() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);

  const events = getAllEvents();
  const news = getSchoolNewsData();
  const announcements = getSchoolAnnouncementsData();

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
              <span className="text-foreground">School of Engineering </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Notice Board
              </span>
            </h2>
            <p className="max-w-2xl text-sm text-foreground sm:text-base font-body">
              Stay updated with upcoming events, news, and important
              announcements from all departments.
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

function DepartmentCard({ department }: { department: EngineeringDepartment }) {
  const isInternal = department.link.startsWith("/");
  const wrapperClasses = `group block h-full rounded-none ${
    department.featured ? "lg:col-span-6" : "lg:col-span-3"
  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta focus-visible:ring-offset-2 focus-visible:ring-offset-background`;
  const overlayClasses =
    department.overlay ??
    "bg-gradient-to-t from-black/85 via-black/50 to-transparent";
  const badgeClasses = `inline-flex items-center gap-2 rounded-none px-3 py-1 text-xs uppercase tracking-wide ${
    department.badgeClass ?? "bg-white/15 text-foreground/80 backdrop-blur"
  }`;
  const panelClasses = `rounded-none border border-white/15 p-3 shadow-[0_25px_80px_-35px_rgba(255,255,255,0.45)] transition-colors duration-500 ${
    department.panelClass ?? "bg-black/60 backdrop-blur-lg"
  }`;

  const content = (
    <div
      className={`relative flex h-full flex-col justify-end overflow-hidden rounded-none border border-white/10 bg-black/10 backdrop-blur-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-magenta/20 ${
        department.featured ? "min-h-[360px]" : "min-h-[300px]"
      }`}
    >
      <img
        src={department.image}
        alt={department.name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className={`absolute inset-0 ${overlayClasses}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      <div className={`absolute left-6 top-3 ${badgeClasses}`}>
        {department.area}
      </div>
      <div className="relative z-10 flex h-full flex-col justify-end p-3 text-white">
        <div className={panelClasses}>
          <div className="space-y-4">
            <div>
              <h3 className="font-display text-2xl leading-tight text-white">
                {department.name}
              </h3>
              <p className="mt-3 text-sm text-white/85 font-body">
                {department.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {department.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-white/85"
                >
                  {item}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-colors group-hover:text-brand-magenta">
              Explore department
              <ChevronRight className="h-4 w-4 transition-colors group-hover:text-brand-magenta" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  if (isInternal) {
    return (
      <RouterLink to={department.link} className={wrapperClasses}>
        {content}
      </RouterLink>
    );
  }

  return (
    <a
      href={department.link}
      target="_blank"
      rel="noreferrer"
      className={wrapperClasses}
    >
      {content}
    </a>
  );
}

function SupportingDepartmentCard({
  department,
}: {
  department: SupportingDepartment;
}) {
  const isInternal = department.link.startsWith("/");
  const cardContent = (
    <Card className="h-full overflow-hidden rounded-none border border-purple-500/20 bg-purple-500/10 backdrop-blur">
      <div className="relative h-48 overflow-hidden">
        <img
          src={department.image}
          alt={department.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <Badge
            className="bg-white/20 text-white backdrop-blur"
            variant="secondary"
          >
            Supporting Department
          </Badge>
          <h3 className="mt-3 text-xl font-semibold text-white font-display">
            {department.name}
          </h3>
        </div>
      </div>
      <CardContent className="space-y-4 p-3">
        <p className="text-sm leading-relaxed text-foreground font-body">
          {department.focus}
        </p>
        <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta">
          Visit department
          <ChevronRight className="h-4 w-4" />
        </span>
      </CardContent>
    </Card>
  );

  if (isInternal) {
    return (
      <RouterLink
        to={department.link}
        className="group block h-full transform transition-all duration-500 hover:-translate-y-1"
      >
        {cardContent}
      </RouterLink>
    );
  }

  return (
    <a
      href={department.link}
      target="_blank"
      rel="noreferrer"
      className="group block h-full transform transition-all duration-500 hover:-translate-y-1"
    >
      {cardContent}
    </a>
  );
}

function ProgramCardComponent({ program }: { program: ProgramCard }) {
  const isInternal = program.link.startsWith("/");
  const wrapperClasses = `group block h-full rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta focus-visible:ring-offset-2 focus-visible:ring-offset-background`;
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
    <div
      ref={containerRef}
      className="w-full h-dvh md:h-[75vh] relative overflow-hidden flex items-end md:items-center justify-start"
    >
      <video
        ref={videoRef}
        src="https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2Fca43c77a955c4e4b86175d41c68120cf?alt=media&token=45cdb70a-71df-43de-8859-de7bc907f167&apiKey=4aa279a8430d441dba9c55f659831878"
        autoPlay
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
        crossOrigin="anonymous"
        className="absolute inset-0 w-screen md:w-full h-full object-cover"
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

      <div className="relative max-w-7xl mx-auto px-3 w-full z-10 pb-20 md:pb-0">
        <div className="max-w-2xl">
          <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 uppercase tracking-widest font-display">
            School of Engineering
          </p>
          <h1 className="text-sm md:text-base text-white/80 mb-6 leading-tight font-display">
            Shape the Future of Technology
          </h1>

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
                className="border-2 border-transparent text-white hover:bg-black/20 bg-black/10 backdrop-blur-sm hover:text-white px-8 py-6 text-base font-semibold font-display transition-all duration-300"
              >
                Virtual Tour
              </Button>
            </a>
          </div>
        </div>
      </div>

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
    </div>
  );
}

function DeanMessageVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  useAutoMuteOnScroll(videoRef);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Sync button state with actual video muted status
    const handleVolumeChange = () => {
      setIsMuted(video.muted);
    };

    video.addEventListener("volumechange", handleVolumeChange);
    return () => {
      video.removeEventListener("volumechange", handleVolumeChange);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black/20 border border-border/30">
      <video
        ref={videoRef}
        src="https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2F0c95c62aa88741fca8ebdc32aade53d5?alt=media&token=c57ff4a9-aea8-4ff3-843b-23ce820ba630&apiKey=4aa279a8430d441dba9c55f659831878"
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className="w-full h-full object-cover"
      />
      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white"
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

export default function Engineering() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative w-full" id="top">
        <HeroVideo />
      </section>

      {/* Dean's Message Section */}
      <section className="relative overflow-hidden px-3 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-none border border-orange-500/20 bg-orange-500/10 overflow-hidden backdrop-blur">
            <div className="grid md:grid-cols-[300px_1fr] gap-0">
              {/* Dean's Photo */}
              <div className="relative overflow-hidden bg-gradient-to-br from-brand-magenta/10 to-brand-blue/10 flex items-start justify-center p-4 md:p-12 pt-8 md:pt-12">
                <div className="relative w-full max-w-xs">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fb0960f67ec5541b7bc257c9ecfe8e30b?format=webp&width=800"
                    alt="Dr. Udaya Kumar Reddy K R"
                    className="w-full h-auto object-cover rounded-none border-4 border-white/20"
                  />
                  <div
                    className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-orange via-brand-magenta to-brand-blue"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Dean's Message Video */}
              <div className="p-4 md:p-12 flex flex-col justify-center">
                <div className="space-y-4">
                  {/* Header with Name and Title */}
                  <div className="border-l-4 border-brand-magenta pl-4">
                    <h3 className="text-2xl font-semibold text-foreground font-display">
                      Dr. Udaya Kumar Reddy K R
                    </h3>
                    <p className="text-sm text-foreground mt-1 font-body">
                      Ph.D
                    </p>
                    <p className="text-sm font-medium text-brand-magenta mt-2 font-display">
                      Dean, School of Engineering
                    </p>
                  </div>

                  {/* Video Container */}
                  <DeanMessageVideo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="relative overflow-hidden px-3 py-8">
        <div
          className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-brand-magenta/20 via-transparent to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl">
                Future-ready engineering disciplines
              </h2>
            </div>
          </div>

          {/* Undergraduate Programs */}
          <div className="mb-16">
            <div className="mb-8">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Undergraduate Programs
              </Badge>
              <h3 className="mt-4 font-display text-2xl md:text-3xl">
                B.Tech Programs
              </h3>
            </div>
            <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-12">
              {ENGINEERING_DEPARTMENTS.map((department) => (
                <DepartmentCard key={department.name} department={department} />
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
                M.Tech Programs
              </h3>
              <p className="mt-2 text-sm text-foreground font-body">
                Advance into research, product leadership and domain expertise
              </p>
            </div>
            <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-3">
              {PG_PROGRAM_CARDS.map((program) => (
                <ProgramCardComponent key={program.name} program={program} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="supporting-departments"
        className="bg-gradient-to-r from-brand-blue/10 via-brand-magenta/10 to-brand-orange/10 px-3 py-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Supporting Departments
              </Badge>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">
                Holistic foundations that amplify every major
              </h2>
            </div>
            <a
              href="https://www.dsu.edu.in/academics/schools/engineering#supporting-departments"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
            >
              Explore supporting departments
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-0 md:grid-cols-2 xl:grid-cols-3">
            {SUPPORTING_DEPARTMENTS.map((department) => (
              <SupportingDepartmentCard
                key={department.name}
                department={department}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="notice-board" className="px-3 py-8">
        <NoticeBoardCarousel />
      </section>

      <section
        id="related-resources"
        className="bg-gradient-to-r from-brand-magenta/5 via-brand-blue/5 to-brand-orange/5 px-3 py-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl">
              Explore More at DSU Engineering
            </h2>
            <p className="mt-3 text-sm text-foreground font-body">
              Discover our research initiatives, innovation labs, placements and
              admission pathways
            </p>
          </div>
          <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-4">
            {/* Centre of Excellence */}
            <RouterLink
              to="/centre-of-excellence"
              className="group rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-magenta/20 transition-all duration-500 hover:-translate-y-1"
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
                    Immersive innovation labs powered by industry leaders like
                    IBM, NVIDIA and GE
                  </p>
                </CardContent>
              </Card>
            </RouterLink>

            {/* Research */}
            <RouterLink
              to="/research"
              className="group rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-500 hover:-translate-y-1"
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
                    Cutting-edge research initiatives and innovation labs
                    driving the future
                  </p>
                </CardContent>
              </Card>
            </RouterLink>

            {/* Placements */}
            <RouterLink
              to="/placements"
              className="group rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-orange/20 transition-all duration-500 hover:-translate-y-1"
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
                    Career pathways with leading companies and startup
                    opportunities
                  </p>
                </CardContent>
              </Card>
            </RouterLink>

            {/* Admissions */}
            <a
              href="https://admissions.dsu.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-magenta/20 transition-all duration-500 hover:-translate-y-1"
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
                    Join DSU Engineering and shape your future
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
                  dean-engg@dsu.edu.in
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
                  Innovation Campus, Kanakapura Road, Bengaluru
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
              <CardTitle className="font-display">
                More Engineering Resources
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm font-body">
              <a
                href="https://www.dsu.edu.in/engineering/programs-engineering"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-magenta"
              >
                Programs Overview
              </a>
              <a
                href="https://www.dsu.edu.in/engineering/newsletter-soe"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-magenta"
              >
                Monthly Newsletter – SOE Bulletin
              </a>
              <a
                href="https://www.dsu.edu.in/engineering/soe-library"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-magenta"
              >
                Engineering Library
              </a>
              <a
                href="https://www.dsu.edu.in/engineering/club-activities"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-magenta"
              >
                Club Activities & Chapters
              </a>
              <a
                href="https://dsu.acm.org/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-magenta"
              >
                DSU ACM Student Chapter
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-3 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-3xl border border-brand-magenta/20 bg-brand-magenta/5 p-10">
            <h3 className="mb-3 font-display text-3xl">
              Ready to shape the future?
            </h3>
            <p className="mb-6 text-foreground font-body">
              Explore programmes, take a virtual tour and begin your journey at
              the DSU School of Engineering.
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
                  className="border-transparent hover:bg-transparent"
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
