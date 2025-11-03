import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  Atom,
  Beaker,
  BookOpen,
  CalendarDays,
  ChevronRight,
  FileText,
  FlaskConical,
  GraduationCap,
  Microscope,
  Network,
  ShieldCheck,
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

type Highlight = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  stat?: string;
};

type ProgrammeGroup = {
  label: string;
  programmes: string[];
};

type DepartmentCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
};

type ResourceLink = {
  title: string;
  description: string;
  href: string;
  badge: string;
};

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1581091870622-5f1e9b8d2f70?q=80&w=2000&auto=format&fit=crop";

const USP_HIGHLIGHTS: Highlight[] = [
  {
    title: "Deciphering the Codes of Life",
    description:
      "Integrated curriculum across biological, physical and mathematical sciences builds confident problem-solvers.",
    image:
      "https://images.unsplash.com/photo-1535930749574-1399327ce78f?q=80&w=1600&auto=format&fit=crop",
    icon: Atom,
    stat: "Holistic STEM",
  },
  {
    title: "Research-Infused Learning",
    description:
      "Capstone projects and research internships expose students to translational science and industry applications.",
    image:
      "https://images.unsplash.com/photo-1521790361543-f645cf042ec4?q=80&w=1600&auto=format&fit=crop",
    icon: Microscope,
  },
  {
    title: "Skill Studios & Advanced Labs",
    description:
      "Gain hands-on mastery in biotechnology, diagnostics, health sciences and data-driven experimentation.",
    image:
      "https://images.unsplash.com/photo-1581091870622-1e7ab2ae57b2?q=80&w=1600&auto=format&fit=crop",
    icon: Beaker,
  },
  {
    title: "Future-Ready Data Science",
    description:
      "New data science programmes expand analytical, computational and AI competencies for science graduates.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    icon: ShieldCheck,
  },
];

const PROGRAMME_GROUPS: ProgrammeGroup[] = [
  {
    label: "Undergraduate",
    programmes: [
      "B.Sc Biological Sciences",
      "B.Sc Data Science",
      "B.Sc Allied Health Sciences",
    ],
  },
  {
    label: "Postgraduate",
    programmes: ["M.Sc Biological Sciences", "M.Sc Data Science"],
  },
];

const DEPARTMENTS: DepartmentCard[] = [
  {
    title: "Life Sciences",
    description:
      "Study molecular biology, biotechnology, genetics and environmental sciences with interdisciplinary research exposure.",
    icon: Microscope,
  },
  {
    title: "Physical Sciences",
    description:
      "Dive into physics and chemistry laboratories exploring materials, energy systems and applied spectroscopy.",
    icon: FlaskConical,
  },
  {
    title: "Mathematical & Computational Sciences",
    description:
      "Develop modelling, statistics and algorithmic foundations that underpin data analytics and scientific computing.",
    icon: Network,
  },
  {
    title: "Health & Diagnostic Sciences",
    description:
      "Train in diagnostics, allied health practices and translational research supporting healthcare innovation.",
    icon: Beaker,
  },
];

const RESOURCE_LINKS: ResourceLink[] = [
  {
    title: "Academic Calendar 2025-26",
    description:
      "Download the latest SBAS academic calendar to plan coursework, labs and assessments.",
    href: "https://www.dsu.edu.in/images/AC_11082025.pdf",
    badge: "Calendar",
  },
  {
    title: "Calendar of Events",
    description:
      "Timeline of seminars, outreach drives and interdisciplinary showcases from SBAS.",
    href: "https://www.dsu.edu.in/basic-applied-sciences/coe-sbas",
    badge: "Events",
  },
  {
    title: "SBAS Events Archive",
    description:
      "Explore coverage of past symposiums, workshops and student-led initiatives.",
    href: "https://www.dsu.edu.in/news-events/basic-and-applied-sciences",
    badge: "Stories",
  },
  {
    title: "SBAS Handbook",
    description:
      "Comprehensive handbook outlining policies, programme structure and student support.",
    href: "https://www.dsu.edu.in/images/SBAS/pdf/Handbook_2023.pdf",
    badge: "Handbook",
  },
];

function HighlightCard({ highlight }: { highlight: Highlight }) {
  const Icon = highlight.icon;
  return (
    <Card className="group relative h-80 overflow-hidden rounded-3xl border border-border/40 bg-card/40 backdrop-blur-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-magenta/10">
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
}

function DepartmentInfoCard({ department }: { department: DepartmentCard }) {
  const Icon = department.icon;
  const content = (
    <Card className="h-full rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-magenta/10 text-brand-magenta">
          <Icon className="h-5 w-5" />
        </span>
        <CardTitle className="text-base font-display">
          {department.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-sm leading-relaxed text-foreground font-body">
          {department.description}
        </CardDescription>
      </CardContent>
    </Card>
  );

  if (!department.href) {
    return content;
  }

  return (
    <a
      href={department.href}
      target="_blank"
      rel="noreferrer"
      className="block h-full transform transition-all duration-500 hover:-translate-y-1"
    >
      {content}
    </a>
  );
}

function ResourceCard({ resource }: { resource: ResourceLink }) {
  return (
    <Card className="h-full rounded-3xl border border-border/40 bg-card/60 backdrop-blur">
      <CardHeader className="pb-2">
        <Badge className="bg-brand-magenta/15 text-brand-magenta">
          {resource.badge}
        </Badge>
        <CardTitle className="mt-4 text-lg font-display">
          {resource.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 text-sm text-foreground font-body">
        <p>{resource.description}</p>
        <a
          href={resource.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
        >
          View resource
          <ChevronRight className="h-4 w-4" />
        </a>
      </CardContent>
    </Card>
  );
}

export default function AppliedSciences() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative" id="top">
        <div className="h-[60vh] w-full overflow-hidden md:h-[70vh]">
          <img
            src={HERO_IMAGE}
            alt="School of Basic & Applied Sciences"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-6 inline-flex items-center rounded-full border border-brand-magenta/20 bg-brand-magenta/10 px-4 py-2">
              <Atom className="mr-2 h-4 w-4 text-brand-magenta" />
              <span className="text-sm font-medium text-brand-magenta font-display">
                School of Basic & Applied Sciences
              </span>
            </div>
            <h1 className="mb-4 font-display text-4xl leading-tight text-foreground md:text-6xl">
              Deciphering the Codes of Life
            </h1>
            <p className="max-w-2xl text-foreground/90 font-body text-lg">
              Build scientific acumen across life sciences, physical sciences
              and data-driven experimentation with research-intensive mentorship
              at DSU.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/admissions">
                <Button className="bg-brand-gradient text-foreground">
                  Apply Now
                </Button>
              </Link>
              <a
                href="https://www.dsu.edu.in/basic-applied-sciences/usp-sbas"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-brand-magenta/40 hover:bg-brand-magenta/10"
                >
                  Explore USP
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <Badge className="bg-brand-magenta/15 text-brand-magenta">
              Academic Pathways
            </Badge>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              Programmes bridging science & society
            </h2>
            <p className="mt-3 text-sm text-foreground font-body max-w-3xl mx-auto">
              Programmes nurture curiosity, experimentation and analytical rigour, preparing graduates for research, healthcare, product development and analytics roles.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {PROGRAMME_GROUPS.map((group) => (
              <Card
                key={group.label}
                className="rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <CardHeader>
                  <Badge className="bg-brand-magenta/15 text-brand-magenta">
                    {group.label}
                  </Badge>
                  <CardTitle className="mt-4 text-xl font-display">
                    {group.label} Programmes
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-3 text-sm text-foreground font-body">
                  {group.programmes.map((programme) => (
                    <div key={programme} className="flex items-center">
                      <ChevronRight className="mr-2 h-3 w-3 text-brand-magenta" />
                      {programme}
                    </div>
                  ))}
                </CardContent>
              </Card>
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
              Unique Strengths
            </Badge>
            <h2 className="mt-5 font-display text-3xl md:text-4xl">
              Why Innovators Choose SBAS
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {USP_HIGHLIGHTS.map((highlight) => (
              <HighlightCard key={highlight.title} highlight={highlight} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="departments"
        className="bg-gradient-to-r from-brand-blue/5 to-brand-orange/5 px-6 py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Departments & Labs
              </Badge>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">
                Interdisciplinary Science Ecosystem
              </h2>
              <p className="mt-3 text-sm text-foreground font-body">
                Collaborate across life sciences, physical sciences, health
                sciences and computational domains through integrated
                coursework, labs and research projects.
              </p>
            </div>
            <a
              href="https://www.dsu.edu.in/basic-applied-sciences/sbas-library"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
            >
              Library & resources
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {DEPARTMENTS.map((department) => (
              <DepartmentInfoCard
                key={department.title}
                department={department}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Calendar & Resources
              </Badge>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">
                Plan, Engage & Excel
              </h2>
              <p className="mt-3 text-sm text-foreground font-body">
                Download calendars, revisit event highlights and access the
                official SBAS handbook to navigate every term with clarity.
              </p>
            </div>
            <a
              href="https://www.dsu.edu.in/basic-applied-sciences/sbas-testimonials"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
            >
              Student stories
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {RESOURCE_LINKS.map((resource) => (
              <ResourceCard key={resource.title} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-3xl border border-brand-magenta/20 bg-brand-magenta/5 p-10">
            <h3 className="mb-3 font-display text-3xl">
              Join the Science & Innovation Movement
            </h3>
            <p className="mb-6 text-foreground font-body">
              Engage with cross-disciplinary mentors, modern labs and industry
              collaborations that position SBAS graduates for global research
              and innovation careers.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/admissions">
                <Button className="bg-brand-gradient text-foreground">
                  Start Application
                  <GraduationCap className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a
                href="https://www.dsu.edu.in/basic-applied-sciences/sbas-placements"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-brand-magenta/40 hover:bg-brand-magenta/10"
                >
                  Placement Insights
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
