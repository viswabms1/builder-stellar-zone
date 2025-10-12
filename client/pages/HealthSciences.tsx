import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BadgeCheck,
  CalendarDays,
  ChevronRight,
  ClipboardCheck,
  GraduationCap,
  HeartPulse,
  Microscope,
  Pill,
  Stethoscope,
  Syringe,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

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

type Programme = {
  name: string;
  level: "UG" | "PG";
  focus: string;
  href?: string;
};

type SupportUnit = {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
};

type Resource = {
  title: string;
  description: string;
  href: string;
  badge: string;
};

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1580281657521-8a19aa08c8c8?q=80&w=2000&auto=format&fit=crop";

const USP_HIGHLIGHTS: Highlight[] = [
  {
    title: "Integrated Health Ecosystem",
    description:
      "Colleges of Nursing, Pharmaceutical Sciences, Physiotherapy and Allied Health share a collaborative campus with clinical partners.",
    image:
      "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=1600&auto=format&fit=crop",
    icon: ClipboardCheck,
    stat: "4 Constituent Colleges",
  },
  {
    title: "Patient-Centric Learning",
    description:
      "Clinical rotations at multi-speciality hospitals cultivate empathy, evidence-based care and inter-professional teamwork.",
    image:
      "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=1600&auto=format&fit=crop",
    icon: Stethoscope,
  },
  {
    title: "Research & Simulation Labs",
    description:
      "Advanced simulation centres, diagnostics labs and pharmaceutics facilities accelerate skill immersion.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
    icon: Microscope,
  },
  {
    title: "Community Impact",
    description:
      "Health camps, outreach and NSS drives foster preventive healthcare and public health leadership.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1600&auto=format&fit=crop",
    icon: Activity,
  },
];

const PROGRAMMES: Programme[] = [
  {
    name: "B.Sc Nursing",
    level: "UG",
    focus:
      "Holistic four-year programme with simulation labs, clinical postings and global certifications.",
    href: "https://www.dsu.edu.in/health-sciences/nursing",
  },
  {
    name: "B.Pharm",
    level: "UG",
    focus:
      "Professional degree covering pharmaceutics, pharmacology and regulatory sciences.",
    href: "https://www.dsu.edu.in/health-sciences/pharmacy",
  },
  {
    name: "Bachelor of Physiotherapy (BPT)",
    level: "UG",
    focus:
      "Comprehensive physiotherapy education with sports, neuro and cardiorespiratory specialisations.",
    href: "https://www.dsu.edu.in/health-sciences/physiotherapy",
  },
  {
    name: "Allied Health Sciences (B.Sc)",
    level: "UG",
    focus:
      "Programmes across medical laboratory technology, imaging, anaesthesia and emergency care.",
    href: "https://www.dsu.edu.in/health-sciences/allied-health-sciences",
  },
  {
    name: "M.Pharm",
    level: "PG",
    focus:
      "Research-intensive postgraduate degree with specialisations in pharmaceutics, analysis and pharmacology.",
    href: "https://www.dsu.edu.in/health-sciences/pharmacy",
  },
  {
    name: "MPT",
    level: "PG",
    focus:
      "Advanced physiotherapy programme emphasising musculoskeletal, neuro and cardiorespiratory expertise.",
    href: "https://www.dsu.edu.in/health-sciences/physiotherapy",
  },
  {
    name: "M.Sc Nursing",
    level: "PG",
    focus:
      "Leadership-oriented specialisations with focus on clinical excellence, pedagogy and research.",
    href: "https://www.dsu.edu.in/health-sciences/nursing",
  },
];

const SUPPORT_UNITS: SupportUnit[] = [
  {
    title: "College of Nursing Sciences",
    description:
      "Modern nursing labs, community postings and competency-based training for compassionate care.",
    icon: Stethoscope,
    href: "https://www.dsu.edu.in/health-sciences/nursing",
  },
  {
    title: "College of Pharmaceutical Sciences",
    description:
      "State-of-the-art formulation, analysis and quality assurance labs aligned with industry standards.",
    icon: Pill,
    href: "https://www.dsu.edu.in/health-sciences/pharmacy",
  },
  {
    title: "College of Physiotherapy",
    description:
      "Robotics-enabled rehab, sports therapy suites and research in functional recovery.",
    icon: Activity,
    href: "https://www.dsu.edu.in/health-sciences/physiotherapy",
  },
  {
    title: "College of Allied Health Sciences",
    description:
      "High-tech diagnostics, imaging and emergency labs supporting multidisciplinary healthcare teams.",
    icon: Syringe,
    href: "https://www.dsu.edu.in/health-sciences/allied-health-sciences",
  },
];

const RESOURCES: Resource[] = [
  {
    title: "Academic Calendar 2025-26",
    description:
      "Download the latest DSU academic calendar to plan coursework, internships and evaluations.",
    href: "https://www.dsu.edu.in/images/AC_11082025.pdf",
    badge: "Calendar",
  },
  {
    title: "Anti-Ragging & Compliance",
    description:
      "Review national anti-ragging guidelines and DSU stakeholder feedback for safe campuses.",
    href: "https://dsu.org.in/content/stakeholders-feedback-design-and-review-curricula-and-syllabi",
    badge: "Policy",
  },
  {
    title: "Health Sciences Admissions",
    description:
      "Explore admission criteria, counselling schedule and contact details for prospective students.",
    href: "https://www.dsu.edu.in/admissions",
    badge: "Admissions",
  },
  {
    title: "Clinical Partner Spotlight",
    description:
      "Experience teaching hospitals through CDSIMER's smart campus and simulation-enabled hospital.",
    href: "/academics/health-sciences/cdsimer/hospital",
    badge: "Clinical",
  },
  {
    title: "Medical Education & Research",
    description:
      "Learn how DSU integrates CDSIMER's medical college, hospital and research ecosystem.",
    href: "/academics/medical-education-research",
    badge: "Medical",
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
      <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs text-white">
        <Icon className="h-4 w-4" /> USP
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
  );
}

function ProgrammeCard({ programme }: { programme: Programme }) {
  const content = (
    <Card className="h-full rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <Badge className="bg-brand-magenta/15 text-brand-magenta">
          {programme.level} Programme
        </Badge>
        <CardTitle className="mt-4 text-xl font-gilroy">
          {programme.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm text-muted-foreground font-graphik">
        <p>{programme.focus}</p>
      </CardContent>
    </Card>
  );

  if (!programme.href) {
    return content;
  }

  return (
    <a
      href={programme.href}
      target="_blank"
      rel="noreferrer"
      className="block h-full transform transition-all duration-500 hover:-translate-y-1"
    >
      {content}
    </a>
  );
}

function SupportUnitCard({ unit }: { unit: SupportUnit }) {
  const Icon = unit.icon;
  const card = (
    <Card className="h-full rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-magenta/10 text-brand-magenta">
          <Icon className="h-5 w-5" />
        </span>
        <CardTitle className="text-base font-gilroy">{unit.title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-sm leading-relaxed text-muted-foreground font-graphik">
          {unit.description}
        </CardDescription>
      </CardContent>
    </Card>
  );

  if (!unit.href) {
    return card;
  }

  return (
    <a
      href={unit.href}
      target="_blank"
      rel="noreferrer"
      className="block h-full transform transition-all duration-500 hover:-translate-y-1"
    >
      {card}
    </a>
  );
}

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <Card className="h-full rounded-3xl border border-border/40 bg-card/60 backdrop-blur">
      <CardHeader className="pb-2">
        <Badge className="bg-brand-magenta/15 text-brand-magenta">
          {resource.badge}
        </Badge>
        <CardTitle className="mt-4 text-lg font-gilroy">
          {resource.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 text-sm text-muted-foreground font-graphik">
        <p>{resource.description}</p>
        {resource.href.startsWith("/") ? (
          <Link
            to={resource.href}
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
          >
            View resource
            <ChevronRight className="h-4 w-4" />
          </Link>
        ) : (
          <a
            href={resource.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
          >
            View resource
            <ChevronRight className="h-4 w-4" />
          </a>
        )}
      </CardContent>
    </Card>
  );
}

export default function HealthSciences() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative" id="top">
        <div className="h-[60vh] w-full overflow-hidden md:h-[70vh]">
          <img
            src={HERO_IMAGE}
            alt="School of Health Sciences"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-6 inline-flex items-center rounded-full border border-brand-magenta/20 bg-brand-magenta/10 px-4 py-2">
              <HeartPulse className="mr-2 h-4 w-4 text-brand-magenta" />
              <span className="text-sm font-medium text-brand-magenta font-gilroy">
                School of Health Sciences
              </span>
            </div>
            <h1 className="mb-4 font-gilroy text-4xl leading-tight text-white md:text-6xl">
              Advancing Care. Inspiring Wellness.
            </h1>
            <p className="max-w-2xl text-white/90 font-graphik text-lg">
              Build a career in nursing, pharmacy, physiotherapy and allied
              health with simulation-rich learning and patient-centric hospital
              immersion.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/admissions">
                <Button className="bg-brand-gradient text-white">
                  Apply Now
                </Button>
              </Link>
              <a
                href="https://www.dsu.edu.in/academics/schools/health-sciences"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-brand-magenta/40 hover:bg-brand-magenta/10"
                >
                  Visit School Portal
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_minmax(0,1fr)] lg:items-center">
            <div className="space-y-6">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Academic Pathways
              </Badge>
              <h2 className="font-gilroy text-3xl md:text-4xl">
                Programmes that transform healthcare delivery
              </h2>
              <p className="text-sm text-muted-foreground font-graphik">
                Nursing, pharmaceutical sciences, physiotherapy and allied health programmes integrate clinical rotations, research immersion and simulation-based training to graduate compassionate health professionals.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {PROGRAMMES.map((programme) => (
                  <ProgrammeCard key={programme.name} programme={programme} />
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-brand-magenta/25 bg-brand-magenta/10 p-8 shadow-[0_30px_120px_-50px_rgba(233,97,255,0.6)]">
              <h3 className="font-gilroy text-2xl text-brand-magenta">
                Clinical learning highlights
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-brand-magenta/90 font-graphik">
                <li className="flex items-start gap-2">
                  <HeartPulse className="mt-0.5 h-4 w-4" />
                  Multispecialty hospital rotations across Sagar Hospitals and CDSIMER teaching hospital
                </li>
                <li className="flex items-start gap-2">
                  <Pill className="mt-0.5 h-4 w-4" />
                  Dedicated simulation and skills labs for critical care, pharmaceutics, diagnostics and rehabilitation
                </li>
                <li className="flex items-start gap-2">
                  <Microscope className="mt-0.5 h-4 w-4" />
                  Research mentorship in community health, precision medicine, biotechnology and clinical trials
                </li>
              </ul>
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
              Unique Strengths
            </Badge>
            <h2 className="mt-5 font-gilroy text-3xl md:text-4xl">
              Why Future Health Professionals Choose DSU
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
        id="supporting"
        className="bg-gradient-to-r from-brand-blue/5 to-brand-orange/5 px-6 py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Constituent Colleges
              </Badge>
              <h2 className="mt-4 font-gilroy text-3xl md:text-4xl">
                Collaborative Health Sciences Ecosystem
              </h2>
              <p className="mt-3 text-sm text-muted-foreground font-graphik">
                Four specialised colleges work together on shared curriculum,
                simulation labs and clinical postings to deliver comprehensive
                healthcare education.
              </p>
            </div>
            <a
              href="https://www.dsu.edu.in/news-events"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
            >
              Health news & events
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {SUPPORT_UNITS.map((unit) => (
              <SupportUnitCard key={unit.title} unit={unit} />
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
              <h2 className="mt-4 font-gilroy text-3xl md:text-4xl">
                Stay Prepared for Every Milestone
              </h2>
              <p className="mt-3 text-sm text-muted-foreground font-graphik">
                Access calendars, compliance handbooks, admissions updates and
                hospital partners to plan your journey at the School of Health
                Sciences.
              </p>
            </div>
            <a
              href="https://www.dsu.edu.in/images/AC_11082025.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
            >
              Download calendar
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {RESOURCES.map((resource) => (
              <ResourceCard key={resource.title} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-3xl border border-brand-magenta/20 bg-brand-magenta/5 p-10">
            <h3 className="mb-3 font-gilroy text-3xl">
              Champion Health & Wellbeing with DSU
            </h3>
            <p className="mb-6 text-muted-foreground font-graphik">
              Engage with expert mentors, cutting-edge labs and community
              outreach that empower you to deliver compassionate, evidence-based
              care.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/admissions">
                <Button className="bg-brand-gradient text-white">
                  Start Application
                  <GraduationCap className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="https://cdsimer.edu.in" target="_blank" rel="noreferrer">
                <Button
                  variant="outline"
                  className="border-brand-magenta/40 hover:bg-brand-magenta/10"
                >
                  Explore CDSIMER
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
