import { Link as RouterLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  Beaker,
  ChevronRight,
  Cpu,
  FlaskConical,
  GraduationCap,
  Microscope,
  Network,
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

const HERO_IMAGE = "https://www.dsu.edu.in/images/Engineering/engg-landing.jpg";

type USPHighlight = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  stat?: string;
};

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

const USP_HIGHLIGHTS: USPHighlight[] = [
  {
    title: "INNOVATE. CREATE. DEVELOP.",
    description:
      "Signature School of Engineering ethos that shapes industry-ready engineers and impactful researchers.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
    icon: Award,
    stat: "12 Academic Programs",
  },
  {
    title: "Skill-Integrated Curriculum",
    description:
      "Knowledge-based coursework blended with project studios and competency-building labs from the first year.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    icon: Cpu,
  },
  {
    title: "Centers of Excellence",
    description:
      "Immersive learning through IBM, NVIDIA, GE and other industry-powered labs for real-time problem solving.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
    icon: Network,
  },
  {
    title: "Research & Lifelong Learning",
    description:
      "Emphasis on research, innovation and cultivating the scientific temper necessary for lifelong learning.",
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde67598?q=80&w=1600&auto=format&fit=crop",
    icon: Microscope,
  },
];

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
  "Computer Science & Engineering (AI & ML)": "/academics/engineering/ai-ml",
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
      "bg-brand-magenta/25 text-white/90 border border-white/30 backdrop-blur",
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
    link: "https://www.dsu.edu.in/engineering/electronics-communication",
    highlights: ["VLSI Lab", "5G Research", "IoT Systems"],
    overlay:
      "bg-gradient-to-br from-brand-blue/80 via-black/75 to-black/60 mix-blend-multiply",
    badgeClass:
      "bg-brand-blue/30 text-white/90 border border-white/25 backdrop-blur",
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
    link: "https://www.dsu.edu.in/engineering/mechanical-engineering",
    highlights: ["Advanced Manufacturing", "Robotics Studio", "CAE Tools"],
    overlay:
      "bg-gradient-to-br from-brand-orange/80 via-black/75 to-black/60 mix-blend-multiply",
    badgeClass:
      "bg-brand-orange/35 text-white/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/65 backdrop-blur-xl",
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
      "bg-gradient-to-tr from-brand-blue/70 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-blue/35 text-white/90 border border-white/25 backdrop-blur",
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
      "bg-brand-magenta/30 text-white/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
  },
  {
    name: "Computer Science & Engineering (AI & ML)",
    area: "Specialised UG Major",
    description:
      "Deep-dives into responsible AI, data engineering, ML pipelines and NLP with industry-certified projects.",
    image:
      "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/engineering/ai-ml",
    highlights: ["Capstone Studios", "AI Research", "Dual Certifications"],
    overlay:
      "bg-gradient-to-br from-brand-magenta/70 via-brand-blue/60 to-black/60 mix-blend-multiply",
    badgeClass:
      "bg-brand-magenta/30 text-white/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
  },
  {
    name: "Computer Science & Engineering (AI & Data Science)",
    area: "Data Innovation",
    description:
      "Engineer data products with applied analytics, data governance, cloud-native pipelines and real-time dashboards.",
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1600&auto=format&fit=crop",
    link: "https://www.dsu.edu.in/engineering/artificial-intelligence-data-science",
    highlights: ["Data Engineering", "Analytics Studio", "Cloud Pipelines"],
    overlay:
      "bg-gradient-to-br from-brand-blue/75 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-blue/30 text-white/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
  },
  {
    name: "Computer Science & Engineering (Data Science)",
    area: "Analytical Systems",
    description:
      "Dive into statistical computing, big data processing, intelligent automation and visual analytics.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    link: "https://www.dsu.edu.in/engineering/computer-science-data-science",
    highlights: ["Big Data Lab", "Predictive Models", "Visualization"],
    overlay:
      "bg-gradient-to-br from-brand-blue/70 via-brand-magenta/60 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-blue/30 text-white/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
  },
  {
    name: "Computer Science & Engineering (Cyber Security)",
    area: "Security & Resilience",
    description:
      "Protect digital infrastructure through secure coding, ethical hacking, digital forensics and governance frameworks.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    link: "https://www.dsu.edu.in/engineering/computer-science-cyber-security",
    highlights: ["Cyber Range", "Ethical Hacking", "Forensics"],
    overlay:
      "bg-gradient-to-br from-black/80 via-brand-magenta/60 to-brand-blue/60 mix-blend-multiply",
    badgeClass:
      "bg-black/50 text-white/90 border border-white/30 backdrop-blur",
    panelClass: "bg-black/60 backdrop-blur-xl",
  },
  {
    name: "Computer Science & Technology",
    area: "Industry Technology",
    description:
      "Blend software engineering, systems integration and platform engineering oriented towards digital enterprises.",
    image:
      "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?q=80&w=1600&auto=format&fit=crop",
    link: "https://www.dsu.edu.in/engineering/computer-science-technology",
    highlights: [
      "Platform Engineering",
      "Systems Design",
      "Enterprise Projects",
    ],
    overlay:
      "bg-gradient-to-br from-brand-orange/70 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-orange/35 text-white/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
  },
  {
    name: "Computer Science and Medical Engineering",
    area: "Healthcare Technology",
    description:
      "Create clinical-grade software, biomedical instrumentation and AI-assisted diagnostics for next-gen healthcare.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
    link: "https://www.dsu.edu.in/engineering/computer-science-medical-engineering",
    highlights: ["Digital Health", "Medical Imaging", "Bio-Informatics"],
    overlay:
      "bg-gradient-to-br from-brand-magenta/65 via-brand-blue/55 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-magenta/30 text-white/90 border border-white/25 backdrop-blur",
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
    link: "https://www.dsu.edu.in/engineering/physics",
  },
  {
    name: "Chemistry Department",
    focus:
      "Materials science, polymer chemistry and environmental labs enabling sustainable engineering solutions.",
    image:
      "https://images.unsplash.com/photo-1581090909855-1c76e948215d?q=80&w=1600&auto=format&fit=crop",
    link: "https://www.dsu.edu.in/engineering/chemistry",
  },
  {
    name: "Mathematics Department",
    focus:
      "Applied mathematics, statistics and computational techniques powering algorithmic and analytical thinking.",
    image:
      "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1600&auto=format&fit=crop",
    link: "https://www.dsu.edu.in/engineering/mathematics",
  },
  {
    name: "Humanities & Social Sciences",
    focus:
      "Communication, design thinking, economics and liberal arts courses that shape socially conscious engineers.",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1600&auto=format&fit=crop",
    link: "https://www.dsu.edu.in/engineering/humanities",
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

function DepartmentCard({ department }: { department: EngineeringDepartment }) {
  const isInternal = department.link.startsWith("/");
  const wrapperClasses = `group block h-full rounded-3xl ${
    department.featured ? "lg:col-span-6" : "lg:col-span-3"
  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta focus-visible:ring-offset-2 focus-visible:ring-offset-background`;
  const overlayClasses =
    department.overlay ??
    "bg-gradient-to-t from-black/85 via-black/50 to-transparent";
  const badgeClasses = `inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs uppercase tracking-wide ${
    department.badgeClass ?? "bg-white/15 text-white/80 backdrop-blur"
  }`;
  const panelClasses = `rounded-3xl border border-white/15 p-6 shadow-[0_25px_80px_-35px_rgba(255,255,255,0.45)] transition-colors duration-500 ${
    department.panelClass ?? "bg-black/60 backdrop-blur-lg"
  }`;

  const content = (
    <div
      className={`relative flex h-full flex-col justify-end overflow-hidden rounded-3xl border border-white/10 bg-black/10 backdrop-blur-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-magenta/20 ${
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
      <div className={`absolute left-6 top-6 ${badgeClasses}`}>
        {department.area}
      </div>
      <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
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
  return (
    <a
      href={department.link}
      target="_blank"
      rel="noreferrer"
      className="group block h-full transform transition-all duration-500 hover:-translate-y-1"
    >
      <Card className="h-full overflow-hidden rounded-3xl border border-border/50 bg-card/60 backdrop-blur">
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
        <CardContent className="space-y-4 p-6">
          <p className="text-sm leading-relaxed text-muted-foreground font-body">
            {department.focus}
          </p>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta">
            Visit department
            <ChevronRight className="h-4 w-4" />
          </span>
        </CardContent>
      </Card>
    </a>
  );
}

function CalendarResourceCard({ entry }: { entry: CalendarEntry }) {
  return (
    <Card className="h-full rounded-3xl border border-border/40 bg-card/60 backdrop-blur">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between gap-4">
          <Badge className="bg-brand-magenta/15 text-brand-magenta">
            {entry.tag}
          </Badge>
          <span className="text-xs text-muted-foreground font-body">
            {entry.academicYear}
          </span>
        </div>
        <CardTitle className="mt-4 text-lg font-display">
          {entry.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 text-sm text-muted-foreground font-body">
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
      <section className="relative" id="top">
        <div className="h-[60vh] w-full overflow-hidden md:h-[70vh]">
          <img
            src={HERO_IMAGE}
            alt="DSU School of Engineering"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-6 inline-flex items-center rounded-full border border-brand-magenta/20 bg-brand-magenta/10 px-4 py-2">
              <FlaskConical className="mr-2 h-4 w-4 text-brand-magenta" />
              <span className="text-sm font-medium text-brand-magenta font-display">
                School of Engineering
              </span>
            </div>
            <h1 className="mb-4 font-display text-4xl leading-tight text-white md:text-6xl">
              Innovate. Create. Develop.
            </h1>
            <p className="max-w-2xl text-white/90 font-body text-lg">
              Science & Technology based education that develops high-caliber
              engineers for industry, startups and scientific organisations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://dsu.edu.in/virtual-tour/"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="bg-brand-gradient text-white">
                  Virtual Tour
                </Button>
              </a>
              <a
                href="https://www.dsu.edu.in/engineering/programs-engineering"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-brand-magenta/40 hover:bg-brand-magenta/10"
                >
                  Programs @ DSU
                </Button>
              </a>
            </div>
          </div>
        </div>
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
              Why Students and Industry Choose DSU Engineering
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {USP_HIGHLIGHTS.map((highlight) => (
              <Card
                key={highlight.title}
                className="group relative h-80 overflow-hidden rounded-3xl border border-border/40 bg-card/40 backdrop-blur-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-magenta/10"
              >
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs text-white">
                  <highlight.icon className="h-4 w-4" /> USP
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="mb-2 text-lg font-semibold font-display">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-white/80 font-body">
                    {highlight.description}
                  </p>
                  {highlight.stat ? (
                    <div className="mt-3 text-xs uppercase tracking-wide text-white/70 font-body">
                      {highlight.stat}
                    </div>
                  ) : null}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dean's Message Section */}
      <section className="relative overflow-hidden px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-border/50 bg-card/60 overflow-hidden backdrop-blur">
            <div className="grid md:grid-cols-[300px_1fr] gap-0">
              {/* Dean's Photo */}
              <div className="relative overflow-hidden bg-gradient-to-br from-brand-magenta/10 to-brand-blue/10 flex items-center justify-center p-8 md:p-12">
                <div className="relative w-full max-w-xs">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fb0960f67ec5541b7bc257c9ecfe8e30b?format=webp&width=800"
                    alt="Dr. Udaya Kumar Reddy K R"
                    className="w-full h-auto object-cover rounded-2xl border-4 border-white/20"
                  />
                  <div
                    className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-orange via-brand-magenta to-brand-blue"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Dean's Message */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  {/* Header with Name and Title */}
                  <div className="border-l-4 border-brand-magenta pl-4">
                    <h3 className="text-2xl font-semibold text-foreground font-display">
                      Dr. Udaya Kumar Reddy K R
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 font-body">
                      Ph.D
                    </p>
                    <p className="text-sm font-medium text-brand-magenta mt-2 font-display">
                      Dean, School of Engineering
                    </p>
                  </div>

                  {/* Message Title */}
                  <div className="pt-2">
                    <h4 className="text-lg font-bold text-foreground uppercase tracking-wide font-display">
                      BE YOU
                    </h4>
                    <h4 className="text-lg font-bold text-brand-magenta uppercase tracking-wide font-display">
                      BE THE DIFFERENCE!!!
                    </h4>
                  </div>

                  {/* Message Content */}
                  <div className="space-y-4 text-sm text-muted-foreground font-body leading-relaxed">
                    <p>
                      Welcome to the new way of learning at School of Engineering (SoE) of Dayananda Sagar University (DSU). At SoE, we are committed to helping you to make a positive difference in the world.
                    </p>
                    <p>
                      We at SoE are immensely proud to provide all of our students with an outstanding education that equips them with the skills, experience, and confidence required to stand out from the crowd. The School promotes Culture of Excellence including the culture of Interdisciplinary, Research, Creativity, Innovations, and Entrepreneurship on various Cutting-Edge Technologies.
                    </p>
                    <p>
                      We at SoE, provide the World-Class Education that is Student-centric, Research-centric, and Educational space where all of our students will have a transformative education, learn to be independent critical thinkers, be societally and ethically responsible, and have a broad understanding of the will the world.
                    </p>
                    <p>
                      We value ability, not background, and we support all of our students to achieve their potential. We want you to enjoy your time here, confident that, upon completion of Engineering degree program under SoE, you will have the knowledge, expertise, and empathy skills to set you on your chosen career path.
                    </p>
                    <p>
                      The decision you make about where to study is an extremely important one. I am pleased you are considering the School of Engineering at DSU, and hope that you choose to continue your education with us.
                    </p>

                    {/* Closing */}
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-sm font-semibold text-brand-magenta uppercase tracking-wide">
                        BEST WISHES!
                      </p>
                      <div className="mt-4 space-y-1">
                        <p className="text-sm font-semibold text-foreground font-display">
                          Dr. Udaya Kumar Reddy K R
                        </p>
                        <p className="text-sm text-muted-foreground font-body">
                          Dean, School of Engineering
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="departments" className="relative overflow-hidden px-6 py-16">
        <div
          className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-brand-magenta/20 via-transparent to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Engineering Departments
              </Badge>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">
                Future-ready engineering disciplines
              </h2>
              <p className="mt-3 text-sm text-muted-foreground font-body">
                Discover flagship majors and emerging specialisations built with
                experiential learning, industry mentorship and research-driven
                pathways.
              </p>
            </div>
            <RouterLink
              to="/admissions"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
            >
              View admissions
              <ChevronRight className="h-4 w-4" />
            </RouterLink>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12">
            {ENGINEERING_DEPARTMENTS.map((department) => (
              <DepartmentCard key={department.name} department={department} />
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="relative overflow-hidden px-6 py-16">
        <div
          className="pointer-events-none absolute -right-32 top-0 hidden h-64 w-64 rounded-full bg-brand-blue/20 blur-3xl lg:block"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-32 bottom-0 hidden h-64 w-64 rounded-full bg-brand-magenta/15 blur-3xl lg:block"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_minmax(0,1fr)]">
            <div className="space-y-6">
              <Badge className="bg-brand-blue/15 text-brand-blue">
                Programs & Pathways
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl">
                Programs crafted with industry-aligned outcomes
              </h2>
              <p className="text-sm text-muted-foreground font-body">
                Our undergraduate and postgraduate offerings integrate project
                studios, global certifications and interdisciplinary minors so
                every learner can customise their journey.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-brand-magenta/20 bg-brand-magenta/10 p-5 text-brand-magenta">
                  <div className="text-3xl font-display">11</div>
                  <p className="mt-1 text-xs uppercase tracking-wide text-brand-magenta/80">
                    Undergraduate majors
                  </p>
                  <p className="mt-2 text-xs text-brand-magenta/80 font-body">
                    Specialise with honours, minors and industry electives from
                    semester one.
                  </p>
                </div>
                <div className="rounded-3xl border border-brand-blue/20 bg-brand-blue/10 p-5 text-brand-blue">
                  <div className="text-3xl font-display">3</div>
                  <p className="mt-1 text-xs uppercase tracking-wide text-brand-blue/80">
                    Postgraduate specialisations
                  </p>
                  <p className="mt-2 text-xs text-brand-blue/80 font-body">
                    Deep-dive into advanced systems, research and leadership
                    roles.
                  </p>
                </div>
                <div className="rounded-3xl border border-border/40 bg-card/70 p-5">
                  <div className="text-lg font-display text-foreground">
                    Project studio pedagogy
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground font-body">
                    Hands-on product build sprints with mentors from startups
                    and global tech companies.
                  </p>
                </div>
                <div className="rounded-3xl border border-border/40 bg-card/70 p-5">
                  <div className="text-lg font-display text-foreground">
                    Global certifications
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground font-body">
                    Earn credentials with IBM, NVIDIA, AWS, VMware and GE while
                    you study.
                  </p>
                </div>
              </div>
            </div>
            <Card className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/60 backdrop-blur-sm">
              <div
                className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-brand-magenta/15 blur-2xl"
                aria-hidden="true"
              />
              <CardContent className="relative space-y-8 p-6">
                <div>
                  <h3 className="font-display text-2xl">
                    Undergraduate Majors
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground font-body">
                    Choose from future-proof majors and emerging
                    specialisations.
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {UG_PROGRAMS.map((program) => {
                      const link = UG_PROGRAM_LINKS[program];

                      if (link) {
                        return (
                          <RouterLink
                            key={program}
                            to={link}
                            className="flex items-center text-sm text-brand-magenta hover:underline"
                          >
                            <ChevronRight className="mr-2 h-3 w-3 text-brand-magenta" />
                            {program}
                          </RouterLink>
                        );
                      }

                      return (
                        <div
                          key={program}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <ChevronRight className="mr-2 h-3 w-3 text-brand-magenta" />
                          {program}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="h-px w-full bg-border/50" />
                <div>
                  <h3 className="font-display text-2xl">
                    Postgraduate Specialisations
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground font-body">
                    Advance into research, product leadership and domain
                    expertise.
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {PG_PROGRAMS.map((program) => (
                      <div
                        key={program}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <ChevronRight className="mr-2 h-3 w-3 text-brand-magenta" />
                        {program}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="h-px w-full bg-border/50" />
                <div className="flex flex-wrap items-center gap-3">
                  <RouterLink
                    to="/academics"
                    className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta hover:underline"
                  >
                    Explore curriculum
                    <ChevronRight className="h-4 w-4" />
                  </RouterLink>
                  <RouterLink
                    to="/admissions"
                    className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta hover:underline"
                  >
                    Admissions process
                    <ChevronRight className="h-4 w-4" />
                  </RouterLink>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="supporting-departments"
        className="bg-gradient-to-r from-brand-blue/10 via-brand-magenta/10 to-brand-orange/10 px-6 py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Supporting Departments
              </Badge>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">
                Holistic foundations that amplify every major
              </h2>
              <p className="mt-3 text-sm text-muted-foreground font-body">
                Specialist faculty from sciences and humanities co-create
                immersive modules with core departments to sharpen research
                depth, analytical rigour and human-centred design thinking.
              </p>
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
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {SUPPORTING_DEPARTMENTS.map((department) => (
              <SupportingDepartmentCard
                key={department.name}
                department={department}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="notice-board" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[36px] border-[3px] border-dashed border-brand-magenta/30 bg-card/70 p-10 shadow-[0_35px_120px_-45px_rgba(175,80,255,0.65)] backdrop-blur">
            <div
              className="pointer-events-none absolute -left-16 top-10 h-32 w-32 rounded-full bg-brand-magenta/15 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-12 bottom-0 h-36 w-36 rounded-full bg-brand-blue/15 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_minmax(0,1fr)]">
              <div className="space-y-5">
                <Badge className="bg-brand-magenta/15 text-brand-magenta">
                  Notice Board
                </Badge>
                <h2 className="font-display text-3xl md:text-4xl">
                  School of Engineering Notice Board
                </h2>
                <p className="text-sm text-muted-foreground font-body">
                  Curated updates for the ongoing academic year 2025-26. Stay
                  aligned with assessment windows, immersion weeks and
                  University-hosted experiences.
                </p>
                <a
                  href="https://www.dsu.edu.in/engineering/coe-engineering"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta hover:underline"
                >
                  Browse previous circulars
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
              <div className="grid gap-6">
                {ENGINEERING_CALENDAR.map((entry) => (
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
        id="labs"
        className="bg-gradient-to-r from-brand-blue/5 to-brand-orange/5 px-6 py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="font-display text-3xl">Innovation & Labs</h3>
            <a
              href="https://www.dsu.edu.in/innovation"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-brand-magenta hover:underline font-body"
            >
              See all
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {INNOVATION_LABS.map((lab) => (
              <Card
                key={lab}
                className="border border-border/40 bg-card/40 backdrop-blur-sm"
              >
                <CardHeader className="pb-2">
                  <div className="inline-flex items-center gap-2 rounded-full bg-brand-magenta/10 px-2 py-1 text-xs text-brand-magenta">
                    <Beaker className="h-3.5 w-3.5" /> Lab
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardTitle className="text-base font-display">
                    {lab}
                  </CardTitle>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-5xl items-start gap-8 lg:grid-cols-3">
          <Card className="lg:col-span-2 overflow-hidden rounded-3xl border border-border/50 bg-card/50">
            <div className="relative h-56">
              <img
                src="https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=1600&auto=format&fit=crop"
                alt="Engineering Leadership"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <CardHeader>
              <CardTitle className="font-display">Leadership</CardTitle>
              <CardDescription className="font-body">
                Guidance that drives excellence in engineering education,
                research and student success.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 pt-0 text-sm font-body text-muted-foreground sm:grid-cols-2">
              <div>
                <div className="text-muted-foreground">Dean (Engineering)</div>
                <div className="font-medium text-foreground">
                  dean-engg@dsu.edu.in
                </div>
              </div>
              <div>
                <div className="text-muted-foreground">Phone</div>
                <div className="font-medium text-foreground">
                  +91-80-49092933
                </div>
              </div>
              <div>
                <div className="text-muted-foreground">Campus Address</div>
                <div className="font-medium text-foreground">
                  Innovation Campus, Kanakapura Road, Bengaluru
                </div>
              </div>
              <div>
                <div className="text-muted-foreground">Office Hours</div>
                <div className="font-medium text-foreground">
                  Mon–Fri �� 9:00 AM – 5:30 PM
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-3xl border border-border/50 bg-card/50">
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
                href="https://www.dsu.edu.in/engineering/usp-engineering"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-magenta"
              >
                USP Highlights
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

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-3xl border border-brand-magenta/20 bg-brand-magenta/5 p-10">
            <h3 className="mb-3 font-display text-3xl">
              Ready to shape the future?
            </h3>
            <p className="mb-6 text-muted-foreground font-body">
              Explore programmes, take a virtual tour and begin your journey at
              the DSU School of Engineering.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <RouterLink to="/admissions">
                <Button className="bg-brand-gradient text-white">
                  Apply Now
                  <GraduationCap className="ml-2 h-4 w-4" />
                </Button>
              </RouterLink>
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
