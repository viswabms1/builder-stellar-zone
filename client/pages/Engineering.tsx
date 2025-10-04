import { Link as RouterLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  Beaker,
  BookOpen,
  CalendarDays,
  ChevronRight,
  Cpu,
  FlaskConical,
  GraduationCap,
  Layers,
  Microscope,
  Network,
  Star,
  TrendingUp,
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

type QuickLink = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
};

type USPHighlight = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  stat?: string;
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

const QUICK_LINKS: QuickLink[] = [
  {
    title: "USP",
    description: "Explore what differentiates DSU School of Engineering.",
    href: "#usp",
    icon: Star,
  },
  {
    title: "Supporting Departments",
    description:
      "Meet the interdisciplinary foundation that powers every program.",
    href: "#supporting-departments",
    icon: Layers,
  },
  {
    title: "Calendar of Events",
    description: "Access the latest academic and co-curricular schedules.",
    href: "#calendar",
    icon: CalendarDays,
  },
  {
    title: "Innovation & Labs",
    description: "Discover industry-partnered labs and centers of excellence.",
    href: "#labs",
    icon: Beaker,
  },
  {
    title: "Dean's Message",
    description: "Read the vision from the School of Engineering leadership.",
    href: "https://www.dsu.edu.in/engineering/dean-engineering",
    icon: BookOpen,
    external: true,
  },
  {
    title: "Weekly Newsletter",
    description:
      "Stay informed with highlights from the engineering community.",
    href: "https://www.dsu.edu.in/engineering/weekly-newsletter-soe",
    icon: TrendingUp,
    external: true,
  },
];

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

const SUPPORTING_DEPARTMENTS: SupportingDepartment[] = [
  {
    name: "Basic Engineering",
    focus:
      "Hands-on foundation courses that integrate physics, chemistry and mechanics for first-year engineers.",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1600&auto=format&fit=crop",
    link: "https://www.dsu.edu.in/engineering/basic-engineering",
  },
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
  {
    title: "1st Semester B.Tech Calendar",
    academicYear: "2024-25",
    description:
      "Academic roadmap for the incoming B.Tech batch with onboarding, foundation labs and assessment checkpoints.",
    documentUrl:
      "https://www.dsu.edu.in/images/Engineering/coe/1st_sem_2024_25_2.pdf",
    tag: "Year 1",
  },
  {
    title: "3rd & 5th Semester B.Tech Calendar",
    academicYear: "2024-25",
    description:
      "Planned milestones for higher semester coursework, community projects and industry interactions.",
    documentUrl:
      "https://www.dsu.edu.in/images/Engineering/coe/3rd_5th_sem_2024_25_2.pdf",
    tag: "Year 2 & 3",
  },
  {
    title: "7th Semester B.Tech Calendar",
    academicYear: "2024-25",
    description:
      "Capstone timelines covering research reviews, internships and pre-placement preparation for final year.",
    documentUrl:
      "https://www.dsu.edu.in/images/Engineering/coe/7th_sem_2024_25_2.pdf",
    tag: "Year 4",
  },
  {
    title: "Even Semester B.Tech Calendar",
    academicYear: "2024-25",
    description:
      "Consolidated even-semester plan featuring assessments, innovation challenges and inter-college events.",
    documentUrl:
      "https://www.dsu.edu.in/images/Engineering/coe/Even_Sem_24_25.pdf",
    tag: "Even Term",
  },
  {
    title: "6th Sem B.Tech & 4/6th Sem BCA Calendar",
    academicYear: "2023-24",
    description:
      "Integrated schedule aligning advanced B.Tech and BCA cohorts with shared lab intensives and evaluations.",
    documentUrl:
      "https://www.dsu.edu.in/images/Engineering/coe/2024_6th_sem_btec_bca.pdf",
    tag: "B.Tech & BCA",
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

function QuickLinkCard({ link }: { link: QuickLink }) {
  const Icon = link.icon;
  const content = (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-border/40 bg-card/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-magenta/60 hover:shadow-xl hover:shadow-brand-magenta/10">
      <div className="flex items-center justify-between">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-magenta/10 text-brand-magenta">
          <Icon className="h-5 w-5" />
        </span>
        <ChevronRight className="h-4 w-4 text-transparent transition-colors duration-500 group-hover:text-brand-magenta" />
      </div>
      <h3 className="mt-5 text-lg font-semibold font-gilroy">{link.title}</h3>
      <p className="mt-3 text-sm text-muted-foreground font-graphik">
        {link.description}
      </p>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-magenta">
        {link.external ? "Open resource" : "Jump to section"}
        <ChevronRight className="h-4 w-4" />
      </div>
    </div>
  );

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noreferrer"
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-3xl"
      >
        {content}
      </a>
    );
  }

  return (
    <a
      href={link.href}
      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-3xl"
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
            <h3 className="mt-3 text-xl font-semibold text-white font-gilroy">
              {department.name}
            </h3>
          </div>
        </div>
        <CardContent className="space-y-4 p-6">
          <p className="text-sm leading-relaxed text-muted-foreground font-graphik">
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
          <span className="text-xs text-muted-foreground font-graphik">
            {entry.academicYear}
          </span>
        </div>
        <CardTitle className="mt-4 text-lg font-gilroy">
          {entry.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 text-sm text-muted-foreground font-graphik">
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
              <span className="text-sm font-medium text-brand-magenta font-gilroy">
                School of Engineering
              </span>
            </div>
            <h1 className="mb-4 font-gilroy text-4xl leading-tight text-white md:text-6xl">
              Innovate. Create. Develop.
            </h1>
            <p className="max-w-2xl text-white/90 font-graphik text-lg">
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
        id="sub-menus"
        className="bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5 px-6 py-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Important Sub Menus
              </Badge>
              <h2 className="mt-4 font-gilroy text-3xl">
                Navigate the School of Engineering
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-muted-foreground font-graphik">
                Jump straight to leadership insights, programme highlights,
                supporting departments, innovation hubs and official
                communication channels.
              </p>
            </div>
            <a
              href="https://www.dsu.edu.in/academics/schools/engineering"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
            >
              Visit DSU Engineering Portal
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {QUICK_LINKS.map((link) => (
              <QuickLinkCard key={link.title} link={link} />
            ))}
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
            <h2 className="mt-5 font-gilroy text-3xl md:text-4xl">
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
                  <h3 className="mb-2 text-lg font-semibold font-gilroy">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-white/80 font-graphik">
                    {highlight.description}
                  </p>
                  {highlight.stat ? (
                    <div className="mt-3 text-xs uppercase tracking-wide text-white/70 font-graphik">
                      {highlight.stat}
                    </div>
                  ) : null}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 font-gilroy text-2xl">
              Undergraduate Programs
            </h3>
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="grid gap-3 sm:grid-cols-2">
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
                          <ChevronRight className="ml-1 h-3 w-3" />
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
              </CardContent>
            </Card>
          </div>
          <div>
            <h3 className="mb-4 font-gilroy text-2xl">Postgraduate Programs</h3>
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="grid gap-3 sm:grid-cols-2">
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="supporting-departments"
        className="bg-gradient-to-r from-brand-blue/5 to-brand-orange/5 px-6 py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Supporting Departments
              </Badge>
              <h2 className="mt-4 font-gilroy text-3xl md:text-4xl">
                Interdisciplinary Backbone of Engineering
              </h2>
              <p className="mt-3 text-sm text-muted-foreground font-graphik">
                Foundational departments work in tandem with every programme to
                build scientific temper, analytical depth and human-centred
                design perspectives.
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

      <section id="calendar" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Calendar of Events
              </Badge>
              <h2 className="mt-4 font-gilroy text-3xl md:text-4xl">
                Academic & Activity Schedules
              </h2>
              <p className="mt-3 text-sm text-muted-foreground font-graphik">
                Download the latest engineering calendars covering coursework
                timelines, skill studio checkpoints, evaluation cycles and
                innovation showcases.
              </p>
            </div>
            <a
              href="https://www.dsu.edu.in/engineering/coe-engineering"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
            >
              View full calendar archive
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {ENGINEERING_CALENDAR.map((entry) => (
              <CalendarResourceCard
                key={`${entry.title}-${entry.academicYear}`}
                entry={entry}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="labs"
        className="bg-gradient-to-r from-brand-blue/5 to-brand-orange/5 px-6 py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="font-gilroy text-3xl">Innovation & Labs</h3>
            <a
              href="https://www.dsu.edu.in/innovation"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-brand-magenta hover:underline font-graphik"
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
                  <CardTitle className="text-base font-gilroy">{lab}</CardTitle>
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
              <CardTitle className="font-gilroy">Leadership</CardTitle>
              <CardDescription className="font-graphik">
                Guidance that drives excellence in engineering education,
                research and student success.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 pt-0 text-sm font-graphik text-muted-foreground sm:grid-cols-2">
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
                  Mon–Fri · 9:00 AM – 5:30 PM
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-3xl border border-border/50 bg-card/50">
            <CardHeader>
              <CardTitle className="font-gilroy">
                More Engineering Resources
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm font-graphik">
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
            <h3 className="mb-3 font-gilroy text-3xl">
              Ready to shape the future?
            </h3>
            <p className="mb-6 text-muted-foreground font-graphik">
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
