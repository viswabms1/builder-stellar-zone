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
  ArrowRight,
  Beaker,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Download,
  FileText,
  Filter,
  FlaskConical,
  GraduationCap,
  IndianRupee,
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  getDepartmentEvents,
  getSchoolNews,
  getSchoolAnnouncements,
  type NoticeItem as ImportedNoticeItem,
} from "@/data/engineering-events";
import { useAutoMuteOnScroll } from "@/hooks/useAutoMuteOnScroll";
import { schools } from "./Eligibility";

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
  differentiator?: string;
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
  "Computer Science & Engineering (AI & ML)":
    "/academics/engineering/artificial-intelligence",
};

const PG_PROGRAMS = [
  "M.Tech - Computer Science & Engineering",
  "M.Tech - Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
  "M.Tech - Artificial Intelligence and Data Science",
  "M.Tech - Artificial Intelligence",
  "M.Tech - Artificial Intelligence and Robotics",
  "M.Tech - Embedded Systems",
  "M.Tech - Design Engineering",
];

const ENGINEERING_DEPARTMENTS: EngineeringDepartment[] = [
  // CS CLUSTER PROGRAMS (8 programs)
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
  },
  {
    name: "Computer Science & Engineering (AI & ML)",
    area: "Specialised UG Major",
    description:
      "Deep-dives into responsible AI, data engineering, ML pipelines and NLP with industry-certified projects.",
    image:
      "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/engineering/artificial-intelligence",
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
    link: "/academics/engineering/ai-data-science",
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
  // OTHER ENGINEERING DISCIPLINES (3 programs)
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
  differentiator?: string;
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
    link: "/academics/engineering/aerospace-engineering",
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
    featured: true,
  },
  {
    name: "M.Tech - Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
    area: "AI & ML Specialization",
    description:
      "Deep-dive into responsible AI, machine learning pipelines, NLP and computer vision with GPU-accelerated research on NVIDIA DGX B200.",
    image:
      "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/engineering/computer-science",
    highlights: ["ML Pipelines", "NLP & Vision", "Research Thesis"],
    overlay:
      "bg-gradient-to-br from-brand-magenta/65 via-brand-blue/55 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-magenta/30 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
  },
  {
    name: "M.Tech - Artificial Intelligence and Data Science",
    area: "Data Engineering",
    description:
      "Engineer data products with applied analytics, data governance, cloud-native pipelines and real-time dashboards powered by GPU computing.",
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/engineering/ai-data-science",
    highlights: ["Data Engineering", "Analytics", "Cloud Pipelines"],
    overlay:
      "bg-gradient-to-br from-brand-blue/70 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-blue/30 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
  },
  {
    name: "M.Tech - Artificial Intelligence",
    area: "AI Research",
    description:
      "Explore cutting-edge artificial intelligence, generative models, reinforcement learning and responsible AI principles with industry partnerships.",
    image:
      "https://images.pexels.com/photos/18068747/pexels-photo-18068747.png?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    link: "/academics/engineering/artificial-intelligence",
    highlights: ["Generative Models", "Reinforcement Learning", "Research"],
    overlay:
      "bg-gradient-to-br from-brand-purple/70 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-purple/30 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
  },
  {
    name: "M.Tech - Artificial Intelligence and Robotics",
    area: "Robotics & Automation",
    description:
      "Build intelligent robotic systems combining machine learning, computer vision, control systems and autonomous navigation.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/engineering/ai-robotics",
    highlights: ["Robotics", "Machine Vision", "Autonomous Systems"],
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
      "https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    link: "/academics/physics",
  },
  {
    name: "Chemistry Department",
    focus:
      "Materials science, polymer chemistry and environmental labs enabling sustainable engineering solutions.",
    image:
      "https://images.pexels.com/photos/3962281/pexels-photo-3962281.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    link: "/academics/chemistry",
  },
  {
    name: "Mathematics Department",
    focus:
      "Applied mathematics, statistics and computational techniques powering algorithmic and analytical thinking.",
    image:
      "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/academics/mathematics",
  },
  {
    name: "Humanities & Social Sciences",
    focus:
      "Communication, design thinking, economics and liberal arts courses that shape socially conscious engineers.",
    image:
      "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
    <>
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
    </>
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
      className={`relative flex h-full flex-col justify-end overflow-hidden rounded-none border border-white/10 bg-black/10 backdrop-blur-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-magenta/20 min-h-[420px]`}
    >
      <img
        src={department.image}
        alt={department.name}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
      />
      <div className={`absolute inset-0 ${overlayClasses}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      <div className={`absolute left-6 top-3 z-20 ${badgeClasses}`}>
        {department.area}
      </div>
      <div className="relative z-10 flex h-[85%] flex-col justify-end p-3 text-white">
        <div className={`${panelClasses} flex flex-col h-full`}>
          <div className="space-y-4 flex-1 overflow-hidden">
            <div>
              <h3 className="font-display text-2xl leading-tight text-white">
                {department.name}
              </h3>
              <p className="mt-3 text-sm text-white/85 font-body">
                {department.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {department.highlights.slice(0, 3).map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-white/85"
                >
                  {item}
                </span>
              ))}
            </div>
            {department.differentiator && (
              <p className="text-xs text-white/70 italic font-body">
                {department.differentiator}
              </p>
            )}
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-colors group-hover:text-brand-magenta mt-auto">
            Explore department
            <ChevronRight className="h-4 w-4 transition-colors group-hover:text-brand-magenta" />
          </span>
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

function FoundationalDepartmentCard({
  department,
}: {
  department: SupportingDepartment;
}) {
  const isInternal = department.link.startsWith("/");
  const wrapperClasses =
    "group block h-full rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const overlayClasses =
    "bg-gradient-to-t from-black/85 via-black/50 to-transparent";
  const badgeClasses =
    "inline-flex items-center gap-2 rounded-none px-3 py-1 text-xs uppercase tracking-wide bg-white/20 text-white backdrop-blur";
  const panelClasses =
    "rounded-none border border-white/15 p-3 shadow-[0_25px_80px_-35px_rgba(255,255,255,0.45)] transition-colors duration-500 bg-black/60 backdrop-blur-lg";

  const content = (
    <div className="relative flex h-full flex-col justify-end overflow-hidden rounded-none border border-white/10 bg-black/10 backdrop-blur-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-magenta/20 min-h-[340px]">
      <img
        src={department.image}
        alt={department.name}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
      />
      <div className={`absolute inset-0 ${overlayClasses}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      <div className={`absolute left-6 top-3 z-20 ${badgeClasses}`}>
        Foundational Department
      </div>
      <div className="relative z-10 flex h-[85%] flex-col justify-end p-4 text-white">
        <div className={`${panelClasses} flex flex-col h-full`}>
          <div className="space-y-3 flex-1 overflow-hidden">
            <div>
              <h3 className="font-display text-lg leading-tight text-white">
                {department.name}
              </h3>
              <p className="mt-2 text-sm text-white/85 font-body">
                {department.focus}
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-colors group-hover:text-brand-magenta mt-auto">
            Visit department
            <ChevronRight className="h-4 w-4 transition-colors group-hover:text-brand-magenta" />
          </span>
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
    <div className="relative flex h-full flex-col justify-end overflow-hidden rounded-none border border-white/10 bg-black/10 backdrop-blur-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-magenta/20 min-h-[420px]">
      <img
        src={program.image}
        alt={program.name}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
      />
      <div className={`absolute inset-0 ${overlayClasses}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      <div className={`absolute left-6 top-3 z-20 ${badgeClasses}`}>
        {program.area}
      </div>
      <div className="relative z-10 flex h-[85%] flex-col justify-end p-3 text-white">
        <div className={`${panelClasses} flex flex-col h-full`}>
          <div className="space-y-4 flex-1 overflow-hidden">
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
            {program.differentiator && (
              <p className="text-xs text-white/70 italic font-body">
                {program.differentiator}
              </p>
            )}
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-colors group-hover:text-brand-magenta mt-auto">
            Explore programme
            <ChevronRight className="h-4 w-4 transition-colors group-hover:text-brand-magenta" />
          </span>
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
    <>
      <div
        ref={containerRef}
        className="hero-video-container relative flex items-center justify-start"
      >
        <video
          ref={videoRef}
          src="https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2F6c3245bbc7eb40e8b8f8c3b9b772f3c1?alt=media&token=0ac3b70c-9f2a-48f5-b22e-fc189d18d323&apiKey=4aa279a8430d441dba9c55f659831878"
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

        <div className="hero-title-inside hero-school-title absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between p-3 sm:p-6 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl school-title-text">
            <p className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-1 sm:mb-4 uppercase tracking-widest font-display">
              School of Engineering
            </p>
            <h1 className="text-xs sm:text-base md:text-base text-white/80 mb-0 sm:mb-2 leading-tight font-display">
              Powered by NVIDIA DGX B200 — enterprise-scale AI compute for
              engineering education and research
            </h1>
            <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-white/70 mb-4 sm:mb-6">
              <span>NAAC A+</span>
              <span>•</span>
              <span>Industry-linked Programs</span>
              <span>•</span>
              <span>GPU-accelerated Workloads</span>
            </div>
          </div>

          {/* Buttons inside video - visible on md and up */}
          <div className="hidden md:flex flex-col lg:flex-row gap-4">
            <a
              href="https://admissions.dsu.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-6 text-base font-bold font-display transition-all duration-300 group shadow-xl shadow-brand-blue/30 hover:shadow-2xl hover:shadow-brand-blue/50 hover:-translate-y-1 w-full sm:w-auto"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>

            <a
              href="https://dsu.edu.in/virtual-tour/#SchoolOfEngineeringEntrance_01,1.14,0,75,4"
              target="_blank"
              rel="noreferrer"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background w-full sm:w-auto"
            >
              <Button
                variant="outline"
                className="bg-transparent hover:bg-white/10 text-white border border-white/70 px-6 py-3 text-sm font-medium font-display transition-all duration-300 w-full sm:w-auto"
              >
                Engineering Tour
              </Button>
            </a>

            <a
              href="https://dsu.edu.in/virtual-tour/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-blue-100 transition-all duration-300 font-display font-semibold text-lg group w-fit"
            >
              <span>Full University Tour</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform group-hover:text-brand-blue" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-background relative max-w-7xl mx-auto px-3 w-full py-6 sm:py-8">
        <div className="hero-title-outside max-w-2xl">
          <p className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-1 sm:mb-4 uppercase tracking-widest font-display">
            School of Engineering
          </p>
          <h1 className="text-xs sm:text-base md:text-base text-foreground/80 mb-0 sm:mb-2 leading-tight font-display">
            Powered by NVIDIA DGX B200 — enterprise-scale AI compute for
            engineering education and research
          </h1>
          <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-foreground/70 mb-4 sm:mb-6">
            <span>NAAC A+</span>
            <span>•</span>
            <span>Industry-linked Programs</span>
            <span>•</span>
            <span>GPU-accelerated Workloads</span>
          </div>
        </div>

        {/* Buttons below video - visible only on mobile */}
        <div className="flex md:hidden flex-col gap-4 w-full sm:w-auto">
          <a
            href="https://admissions.dsu.edu.in/"
            target="_blank"
            rel="noreferrer"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-6 text-base font-bold font-display transition-all duration-300 group shadow-xl shadow-brand-blue/30 hover:shadow-2xl hover:shadow-brand-blue/50 hover:-translate-y-1 w-full sm:w-auto"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="https://dsu.edu.in/virtual-tour/#SchoolOfEngineeringEntrance_01,1.14,0,75,4"
              target="_blank"
              rel="noreferrer"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background w-full sm:w-auto"
            >
              <Button
                variant="outline"
                className="bg-transparent hover:bg-white/10 text-white border border-white/70 px-6 py-3 text-sm font-medium font-display transition-all duration-300 w-full sm:w-auto"
              >
                Engineering Tour
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
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

type Program = {
  name: string;
  level: "UG" | "PG" | "Professional";
  duration?: string;
  eligibility: string;
  eligibilityPoints?: string[];
  fees: { label: string; amount: string }[];
  specializations?: string[];
  notes?: string[];
  scholarships?: string;
  school: string;
};

function EngineeringProgramFinder() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [engineeringPrograms, setEngineeringPrograms] = useState<Program[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<string>("All");

  useEffect(() => {
    const engineeringSchool = schools.find(
      (s) => s.name === "School of Engineering",
    );
    if (engineeringSchool) {
      const programs: Program[] = [];
      engineeringSchool.categories.forEach((category) => {
        category.programs.forEach((program) => {
          programs.push({ ...program, school: engineeringSchool.name });
        });
      });
      setEngineeringPrograms(programs);
    }
  }, []);

  const filteredPrograms = engineeringPrograms.filter((program) => {
    const matchesLevel =
      selectedLevel === "All" || program.level === selectedLevel;
    return matchesLevel;
  });

  const handleProgramSelect = (programName: string) => {
    const program = engineeringPrograms.find((p) => p.name === programName);
    setSelectedProgram(program || null);
  };

  return (
    <section className="px-3 py-8 mx-auto max-w-4xl">
      <div className="space-y-8">
        <Card className="border-2 border-green-500/20 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/15">
                <Filter className="h-6 w-6 text-brand-blue" />
              </div>
              <div>
                <CardTitle className="text-2xl">
                  Eligibility and Fees for School of Engineering Programs
                </CardTitle>
                <CardDescription>
                  Explore program details, eligibility criteria, and fee
                  structure
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">
                Program Level
              </label>
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Select level..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Levels</SelectItem>
                  <SelectItem value="UG">Undergraduate (UG)</SelectItem>
                  <SelectItem value="PG">Postgraduate (PG)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between pt-2">
              <p className="text-sm text-foreground/60">
                {filteredPrograms.length} program
                {filteredPrograms.length !== 1 ? "s" : ""} found
              </p>
            </div>

            <div className="border-t border-border/40 pt-4">
              <label className="text-sm font-semibold text-foreground mb-2 block">
                Select Program
              </label>
              <Select
                onValueChange={handleProgramSelect}
                value={selectedProgram?.name || ""}
              >
                <SelectTrigger className="h-12 text-base">
                  <SelectValue placeholder="Choose a program from the filtered results..." />
                </SelectTrigger>
                <SelectContent className="max-h-[400px]">
                  {filteredPrograms.length === 0 ? (
                    <div className="p-4 text-center text-sm text-foreground/60">
                      No programs match your filters
                    </div>
                  ) : (
                    filteredPrograms.map((program) => (
                      <SelectItem
                        key={program.name}
                        value={program.name}
                        className="py-3"
                      >
                        <div className="flex flex-col">
                          <span className="font-semibold">{program.name}</span>
                          <span className="text-xs text-foreground/60">
                            {program.level}
                            {program.duration && ` • ${program.duration}`}
                          </span>
                        </div>
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {selectedProgram && (
          <div className="space-y-6">
            <Card className="border-2 border-green-500/20 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-8 w-8 text-green-600" />
                  <div>
                    <CardTitle className="text-2xl">
                      {selectedProgram.name}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {selectedProgram.level}
                      {selectedProgram.duration &&
                        ` • ${selectedProgram.duration}`}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-2 border-green-500/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  <CardTitle className="text-xl">
                    Eligibility Criteria
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-foreground leading-relaxed">
                    {selectedProgram.eligibility}
                  </p>
                  {selectedProgram.eligibilityPoints &&
                    selectedProgram.eligibilityPoints.length > 0 && (
                      <ul className="space-y-2">
                        {selectedProgram.eligibilityPoints.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-foreground">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  {selectedProgram.specializations &&
                    selectedProgram.specializations.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-border/40">
                        <h4 className="font-semibold text-foreground mb-2">
                          Specializations Available:
                        </h4>
                        <ul className="space-y-1">
                          {selectedProgram.specializations.map((spec, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-foreground/80"
                            >
                              • {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <IndianRupee className="h-6 w-6 text-green-600" />
                  <CardTitle className="text-xl">
                    Fee Structure (2026-27)
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {selectedProgram.fees.map((fee, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center p-4 rounded-lg bg-green-500/10 border border-green-500/20"
                    >
                      <span className="font-semibold text-foreground">
                        {fee.label}
                      </span>
                      <span className="text-lg font-bold text-green-600">
                        {fee.amount}
                      </span>
                    </div>
                  ))}
                </div>
                {selectedProgram.scholarships && (
                  <div className="mt-4 pt-4 border-t border-border/40">
                    <p className="text-sm text-foreground/70">
                      {selectedProgram.scholarships}
                    </p>
                  </div>
                )}
                {selectedProgram.notes && selectedProgram.notes.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-border/40">
                    <ul className="space-y-2">
                      {selectedProgram.notes.map((note, idx) => (
                        <li key={idx} className="text-sm text-foreground/70">
                          ℹ️ {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="flex gap-3">
              <Button
                onClick={() => setSelectedProgram(null)}
                variant="outline"
                className="flex-1 rounded-lg"
              >
                ← Back to Search
              </Button>
              <Button
                className="flex-1 rounded-lg bg-brand-magenta text-white hover:bg-brand-magenta/90"
                asChild
              >
                <a
                  href="https://admissions.dsu.edu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now →
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default function Engineering() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative" id="top">
        <HeroVideo />
      </section>

      <section id="programs" className="relative overflow-hidden px-3 py-8">
        <div
          className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-brand-magenta/20 via-transparent to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="max-w-3xl">
              <h2 className="headline-2 mb-6">
                Future-ready engineering
                <span className="bg-brand-gradient bg-clip-text text-transparent">
                  {" "}disciplines
                </span>
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

      <EngineeringProgramFinder />

      <section
        id="foundational-departments"
        className="bg-gradient-to-r from-brand-blue/10 via-brand-magenta/10 to-brand-orange/10 px-3 py-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="max-w-3xl">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Foundational Departments
              </Badge>
              <h2 className="headline-2 mb-6 mt-4">
                Foundational departments that power every engineering
                <span className="bg-brand-gradient bg-clip-text text-transparent">
                  {" "}discipline
                </span>
              </h2>
              <p className="mt-4 text-sm text-foreground font-body max-w-3xl">
                Every DSU engineer is backed by strong fundamentals in science,
                mathematics, and humanities.
              </p>
            </div>
          </div>
          <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-4">
            {SUPPORTING_DEPARTMENTS.map((department) => (
              <FoundationalDepartmentCard
                key={department.name}
                department={department}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Dean's Message Section - Moved after program overview */}
      <section className="dean-section-wrapper relative overflow-hidden px-3 py-8 bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-blue/5">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="headline-2 mb-2">
              Message from the
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                {" "}Dean
              </span>
            </h2>
            <p className="text-sm text-foreground/70 font-body">
              Vision for Engineering at DSU
            </p>
          </div>
          <div className="rounded-none border border-brand-blue/20 bg-brand-blue/10 overflow-hidden backdrop-blur">
            <div className="grid md:grid-cols-[300px_1fr] gap-0">
              {/* Dean's Photo */}
              <div className="relative overflow-hidden bg-gradient-to-br from-brand-magenta/10 to-brand-blue/10 flex items-start justify-center p-2 sm:p-4 md:p-12 pt-3 sm:pt-6 md:pt-12">
                <div className="relative w-full max-w-[160px] sm:max-w-xs md:max-w-xs">
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

              {/* Dean's Message - Balanced with Video & Text */}
              <div className="p-4 md:p-12 flex flex-col justify-center">
                <div className="space-y-6">
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

                  {/* Message Content */}
                  <div className="space-y-4 pt-4 border-t border-border/20">
                    <div>
                      <p className="font-display text-lg font-bold text-brand-magenta mb-4">
                        BE YOU • BE THE DIFFERENCE!!!
                      </p>
                    </div>
                    <div className="space-y-3 text-sm text-foreground/85 font-body leading-relaxed">
                      <p>
                        Welcome to the new way of learning at School of
                        Engineering (SoE) of Dayananda Sagar University. We are
                        committed to helping you make a positive difference in
                        the world. We provide outstanding education that equips
                        students with skills, experience, and confidence
                        required to stand out from the crowd.
                      </p>
                      <p className="font-semibold text-foreground mt-4">
                        Our core values include:
                      </p>
                      <ul className="space-y-2 text-sm text-foreground/85 font-body list-disc list-inside ml-2">
                        <li>
                          Culture of Excellence in Interdisciplinary learning,
                          Research, Creativity, and Innovation
                        </li>
                        <li>
                          Student-centric, Research-centric World-Class
                          Education
                        </li>
                        <li>
                          Developing independent critical thinkers with societal
                          and ethical responsibility
                        </li>
                      </ul>
                      <p className="pt-2">
                        We value ability, not background. We support all
                        students to achieve their potential and gain the
                        knowledge, expertise, and employability skills for their
                        chosen career path. Upon completion of your engineering
                        degree at SoE, you will be well-prepared for your
                        professional journey.
                      </p>
                    </div>
                    <p className="font-display font-semibold text-brand-magenta pt-4 text-sm">
                      BEST WISHES!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="notice-board" className="px-3 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-8">
            <div>
              <h2 className="headline-2 mb-3">
            <span className="text-foreground">What's </span>
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Happening
            </span>
            <span className="text-foreground"> at School of Engineering, DSU</span>
          </h2>
              <p className="max-w-2xl text-sm text-foreground sm:text-base font-body">
                Explore recent achievements, industry collaborations, and
                upcoming opportunities.
              </p>
            </div>
          </div>
          <NoticeBoardCarousel />
        </div>
      </section>

      <section
        id="related-resources"
        className="bg-gradient-to-r from-brand-magenta/5 via-brand-blue/5 to-brand-orange/5 px-3 py-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl">
              Explore More at School of Engineering, DSU
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
                    AI Infrastructure Partner: NVIDIA. Hands-on learning through
                    research projects and industry collaboration.
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
                  <p className="text-xs text-brand-orange font-medium mt-2">
                    AI, core engineering, startups & enterprises
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
                    Join School of Engineering, DSU and shape your future
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
              <RouterLink
                to="/academics/engineering/newsletter"
                className="hover:text-brand-magenta"
              >
                Monthly Newsletter – SOE Bulletin
              </RouterLink>
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

      {/* Eligibility Teaser Bar */}
      <section className="bg-brand-magenta/5 border-y border-brand-magenta/20 px-3 py-4">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="text-sm text-foreground font-body">
              <span className="font-semibold">Quick Eligibility Check:</span>
              <span className="ml-2 text-foreground/70">
                10+2 with Physics & Mathematics | B.Tech | M.Tech via PGCET /
                Direct
              </span>
            </div>
            <a
              href="/program-lookup"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta hover:text-brand-magenta/80 transition-colors"
            >
              Explore Programs
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
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
              the School of Engineering, DSU.
            </p>
            <p className="mb-4 text-xs text-foreground/70 font-body">
              Admissions support available across CET, Direct & International
              pathways.
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
                href="https://dsu.edu.in/virtual-tour/#SchoolOfEngineeringEntrance_01,1.14,0,75,4"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-transparent hover:bg-transparent"
                >
                  Engineering Tour
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
                  Full University Tour
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why DSU Engineering Section */}
      <section className="px-3 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl">
              Why Choose School of Engineering, DSU?
            </h2>
            <p className="mt-4 text-sm text-foreground/70 font-body max-w-3xl">
              School of Engineering, DSU operates a centralized AI compute
              backbone built on NVIDIA DGX B200, enabling large-scale AI,
              simulation, and data-intensive workloads across multiple
              engineering labs.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* NVIDIA DGX B200 Infrastructure - FIRST */}
            <Card className="rounded-2xl border border-brand-blue/20 bg-brand-blue/5 backdrop-blur lg:col-span-1 lg:row-span-1">
              <CardHeader>
                <CardTitle className="font-display flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-brand-blue" />
                  NVIDIA DGX B200 Infrastructure
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-foreground/80 font-body">
                GPU-accelerated workloads on NVIDIA DGX B200 for AI, machine
                learning, and data-intensive engineering simulations.
                Enterprise-scale compute backbone supporting all labs.
              </CardContent>
            </Card>

            {/* Engineering Labs & Programs */}
            <Card className="rounded-2xl border border-brand-magenta/20 bg-brand-magenta/5 backdrop-blur">
              <CardHeader>
                <CardTitle className="font-display flex items-center gap-2">
                  <Beaker className="h-5 w-5 text-brand-magenta" />
                  Engineering Labs & Programs
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-foreground/80 font-body">
                Hands-on research and development across 10+ engineering
                disciplines powered by DGX B200 infrastructure.
              </CardContent>
            </Card>

            {/* Research & Innovation */}
            <Card className="rounded-2xl border border-brand-orange/20 bg-brand-orange/5 backdrop-blur">
              <CardHeader>
                <CardTitle className="font-display flex items-center gap-2">
                  <Microscope className="h-5 w-5 text-brand-orange" />
                  Research & Innovation
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-foreground/80 font-body">
                Active research in aerospace, embedded systems, robotics,
                healthcare technology, and sustainable engineering supported by
                DGX B200 acceleration.
              </CardContent>
            </Card>

            {/* NAAC Accreditation */}
            <Card className="rounded-2xl border border-brand-magenta/20 bg-brand-magenta/5 backdrop-blur">
              <CardHeader>
                <CardTitle className="font-display flex items-center gap-2">
                  <Award className="h-5 w-5 text-brand-magenta" />
                  NAAC Accredited
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-foreground/80 font-body">
                NAAC A+ accreditation backed by continuous quality assurance,
                research depth, and infrastructure innovation.
              </CardContent>
            </Card>

            {/* Holistic Education */}
            <Card className="rounded-2xl border border-brand-blue/20 bg-brand-blue/5 backdrop-blur">
              <CardHeader>
                <CardTitle className="font-display flex items-center gap-2">
                  <Network className="h-5 w-5 text-brand-blue" />
                  Holistic Education
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-foreground/80 font-body">
                Strong fundamentals in science, math, and humanities
                complementing technical depth and industry preparation.
              </CardContent>
            </Card>

            {/* Career Readiness - LAST */}
            <Card className="rounded-2xl border border-brand-orange/20 bg-brand-orange/5 backdrop-blur">
              <CardHeader>
                <CardTitle className="font-display flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-brand-orange" />
                  Career Readiness
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-foreground/80 font-body">
                Industry-aligned curriculum with strong placement outcomes.
                Connections with leading global tech companies, AI-focused
                enterprises, and startups.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
