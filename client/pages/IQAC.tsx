import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  ClipboardList,
  FileText,
  GraduationCap,
  Lightbulb,
  Mail,
  Megaphone,
  ShieldCheck,
  Sparkles,
  Users2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const STAT_CARDS = [
  {
    label: "Academic & Administrative Units Engaged",
    value: "18",
    description: "Faculties, schools, and support divisions aligned with IQAC benchmarks.",
    icon: Building2,
  },
  {
    label: "Quality Enhancement Projects",
    value: "42",
    description: "Process improvements delivered through annual quality assurance cycles.",
    icon: Sparkles,
  },
  {
    label: "Capacity Building Sessions",
    value: "120+",
    description: "Workshops and orientations enabling outcome-based teaching and assessment.",
    icon: Users2,
  },
  {
    label: "Policy & Compliance Reviews",
    value: "30+",
    description: "Structured audits covering academics, research, governance, and student services.",
    icon: ShieldCheck,
  },
];

const FOCUS_PILLARS = [
  {
    title: "Academic Excellence",
    description:
      "Curriculum review, outcome-based education adoption, blended learning models, and regular programme impact analysis.",
    icon: GraduationCap,
  },
  {
    title: "Research & Innovation",
    description:
      "Grant facilitation, interdisciplinary research clusters, intellectual property sensitisation, and innovation ecosystem support.",
    icon: Lightbulb,
  },
  {
    title: "Stakeholder Engagement",
    description:
      "Multisource feedback, industry advisory participation, community outreach initiatives, and alumni partnerships.",
    icon: Users2,
  },
  {
    title: "Governance & Compliance",
    description:
      "Policy stewardship, NAAC preparedness, statutory documentation, and transparent decision-making frameworks.",
    icon: ClipboardList,
  },
];

const INITIATIVES = [
  {
    year: "2024-25",
    title: "Integrated Quality Data Hub",
    details:
      "Launched a centralised repository for programme outcomes, student achievements, and accreditation evidence aligned to NAAC criteria.",
    impact:
      "Enabled timely compliance reporting and real-time dashboards for leadership review.",
  },
  {
    year: "2023-24",
    title: "Digital Feedback Loop",
    details:
      "Streamlined feedback capture from students, alumni, employers, and faculty with automated action tracking and closure reports.",
    impact:
      "Improved response rates by 63% and ensured documented follow-through on stakeholder suggestions.",
  },
  {
    year: "2022-23",
    title: "Quality Culture Immersion",
    details:
      "Conducted institution-wide training on outcome-based education, course file curation, and academic audit preparedness.",
    impact:
      "Nurtured departmental quality champions and fostered a shared vocabulary for continuous improvement.",
  },
];

const RESOURCE_GROUPS = [
  {
    title: "Policies & Frameworks",
    subtitle: "Guiding documents that anchor institutional quality systems.",
    items: [
      "Quality Assurance Policy",
      "Academic Governance Manual",
      "Outcome Based Education Implementation Framework",
      "Research Integrity & Ethics Policy",
    ],
  },
  {
    title: "Reports & Submissions",
    subtitle: "Evidence-based documentation for accreditation and statutory compliances.",
    items: [
      "Annual Quality Assurance Reports (AQAR)",
      "Departmental Academic Audit Summaries",
      "Best Practices & Institutional Distinctiveness Compendium",
      "Gender & Green Audit Reports",
    ],
  },
  {
    title: "Stakeholder Feedback",
    subtitle: "Insights captured to strengthen learner and community experiences.",
    items: [
      "Student Satisfaction Survey Consolidation",
      "Alumni & Employer Engagement Outcomes",
      "Parent Interaction Dashboards",
      "Community Outreach Impact Statements",
    ],
  },
];

const ANNOUNCEMENTS = [
  {
    title: "IQAC Colloquium on Emerging Pedagogies",
    date: "07 April 2025",
    description: "Interactive masterclass on AI-enabled curriculum delivery and experiential assessment design.",
  },
  {
    title: "DSU Quality Conclave 2025",
    date: "19 April 2025",
    description: "Annual showcase of departmental best practices, impact caselets, and faculty innovation pitches.",
  },
  {
    title: "NAAC Evidence Readiness Drive",
    date: "06 May 2025",
    description: "Documentation sprint ensuring criteria repositories and course files remain audit-ready.",
  },
];

const QUALITY_WORKFLOW = [
  {
    step: "Plan",
    overview: "Define benchmarks, outcome measures, and review schedules in consultation with departments and leadership.",
  },
  {
    step: "Deploy",
    overview: "Roll out interventions, capacity-building, and process enhancements with cross-functional task forces.",
  },
  {
    step: "Evaluate",
    overview: "Measure performance indicators, conduct academic and administrative audits, and capture stakeholder feedback.",
  },
  {
    step: "Elevate",
    overview: "Present data-backed recommendations, publish improvement reports, and embed refinements into institutional policy.",
  },
];

const DIRECTOR_PROFILE = {
  name: "Prof. (Dr.) Meera Narayanan",
  designation: "Director, Internal Quality Assurance Cell",
  message:
    "The IQAC at DSU is envisioned as a catalyst for future-ready education. We champion evidence-informed decision making, nurture purposeful innovation, and ensure that every learner experience reflects our commitment to excellence.",
  email: "iqac@dsu.edu.in",
};

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(114,87,255,0.24),_transparent_55%)]" />
      <div className="absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-gradient blur-3xl opacity-40" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24 lg:flex-row lg:items-center lg:py-32">
        <div className="flex-1 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
            IQAC @ DSU
          </span>
          <h1 className="text-4xl font-display leading-tight text-white sm:text-5xl lg:text-6xl">
            Internal Quality Assurance Cell
          </h1>
          <p className="max-w-2xl text-lg text-white/70 font-body">
            Driving a culture of continuous improvement, academic excellence, and stakeholder delight through structured assurance systems aligned with NAAC benchmarks and beyond.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              asChild
              className="bg-brand-gradient text-white shadow-lg shadow-brand-magenta/20 hover:opacity-90"
            >
              <a href="mailto:iqac@dsu.edu.in" className="gap-2">
                Connect with IQAC
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <a
              href="https://www.naac.gov.in/images/docs/iqac/saac_iqac_guideline_1.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
            >
              View NAAC IQAC guidelines
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_25px_100px_-60px_rgba(255,255,255,0.8)]">
            <div className="absolute -right-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-brand-blue/20 blur-2xl" />
            <div className="relative space-y-5 text-white">
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                Quality Priorities 2025
              </p>
              <ul className="space-y-4 text-sm text-white/80 font-body">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-magenta" aria-hidden="true" />
                  <span>
                    Embed evidence-backed programme reviews with learner progression analytics and graduate attribute mapping.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-magenta" aria-hidden="true" />
                  <span>
                    Amplify faculty development for AI-integrated pedagogy, inclusive classrooms, and design thinking in assessment.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-magenta" aria-hidden="true" />
                  <span>
                    Strengthen stakeholder feedback convergence with transparent action tracking and measurable outcomes.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsShowcase() {
  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {STAT_CARDS.map((stat) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute -top-10 right-0 h-32 w-32 rounded-full bg-brand-gradient blur-3xl" />
              </div>
              <div className="relative flex flex-col gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white/80">
                  <stat.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                  {stat.label}
                </p>
                <p className="text-sm text-white/70 font-body">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MandateSection() {
  return (
    <section className="relative bg-slate-950 py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.1fr_minmax(0,1fr)]">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
            Mandate
          </span>
          <h2 className="text-3xl font-display text-white sm:text-4xl">
            Quality stewardship aligned with NAAC and global benchmarks
          </h2>
          <p className="text-base text-white/70 font-body">
            The IQAC at Dayananda Sagar University is a strategic driver of quality consciousness across academic, research, and administrative domains. It orchestrates institution-wide systems that foster transparency, accountability, innovation, and measurable learning outcomes.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-white/60">
                Core Objectives
              </p>
              <ul className="mt-4 space-y-3 text-sm text-white/75 font-body">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-magenta" aria-hidden="true" />
                  Institutionalise best practices that sustain academic rigor and learner-centric pedagogy.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-magenta" aria-hidden="true" />
                  Facilitate data-informed governance, ensuring compliance with national and international standards.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-magenta" aria-hidden="true" />
                  Promote participatory decision-making through stakeholder dialogues and collaborative review.
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-white/60">
                Post-accreditation Focus
              </p>
              <ul className="mt-4 space-y-3 text-sm text-white/75 font-body">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-magenta" aria-hidden="true" />
                  Translate peer team recommendations into strategic roadmaps and implementation dashboards.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-magenta" aria-hidden="true" />
                  Accelerate quality assurance digitisation for seamless documentation and audit readiness.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-magenta" aria-hidden="true" />
                  Nurture excellence narratives that highlight the university’s societal impact and graduate success stories.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold text-white">Constitution</h3>
            <p className="mt-3 text-sm text-white/70 font-body">
              The IQAC is constituted with senior academic leaders, administrative heads, industry experts, alumni, and student representatives to bring holistic perspectives to quality planning.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/75 font-body">
              <li className="flex items-start gap-2">
                <Award className="mt-0.5 h-4 w-4 text-brand-yellow" aria-hidden="true" />
                Chairperson – Vice Chancellor
              </li>
              <li className="flex items-start gap-2">
                <Award className="mt-0.5 h-4 w-4 text-brand-yellow" aria-hidden="true" />
                External Experts from academia and industry
              </li>
              <li className="flex items-start gap-2">
                <Award className="mt-0.5 h-4 w-4 text-brand-yellow" aria-hidden="true" />
                Coordinators for academics, research, student support, and community engagement
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold text-white">Working Committees</h3>
            <p className="mt-3 text-sm text-white/70 font-body">
              The IQAC convenes thematic committees to drive institutional priorities and monitor progress through quarterly reviews.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/75 font-body">
              <li className="flex items-start gap-2">
                <ClipboardList className="mt-0.5 h-4 w-4 text-brand-magenta" aria-hidden="true" />
                Curriculum Innovation & Outcome Evaluation Committee
              </li>
              <li className="flex items-start gap-2">
                <ClipboardList className="mt-0.5 h-4 w-4 text-brand-magenta" aria-hidden="true" />
                Research, Consultancy & IPR Facilitation Committee
              </li>
              <li className="flex items-start gap-2">
                <ClipboardList className="mt-0.5 h-4 w-4 text-brand-magenta" aria-hidden="true" />
                Student Support, Inclusivity & Wellbeing Committee
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function FocusAreasSection() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-display text-white sm:text-4xl">
              Strategic focus pillars
            </h2>
            <p className="mt-3 max-w-2xl text-base text-white/70 font-body">
              Each pillar has clearly defined metrics, owners, and review cadences to ensure sustained progress across the university.
            </p>
          </div>
          <Link
            to="/research"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
          >
            Explore DSU research ecosystem
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {FOCUS_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-brand-blue/20 blur-3xl" />
              </div>
              <div className="relative">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white/80">
                  <pillar.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm text-white/75 font-body">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnnouncementStrip() {
  return (
    <section className="bg-white/5 py-10 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white">
            Updates
          </span>
          <p className="text-sm text-white/70 font-body">
            Upcoming initiatives and engagements hosted by the Internal Quality Assurance Cell.
          </p>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {ANNOUNCEMENTS.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/10 p-6 text-white transition hover:border-white/30"
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                <Megaphone className="h-4 w-4" aria-hidden="true" />
                {item.date}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-white/75 font-body">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InitiativesTimeline() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-display text-white sm:text-4xl">
            Recent initiatives and impact stories
          </h2>
          <p className="mt-3 text-base text-white/70 font-body">
            IQAC programmes strengthen academic quality through measurable outcomes, digital tools, and collaborative engagement across the university.
          </p>
        </div>
        <div className="mt-12 space-y-8 border-l border-white/10 pl-6 sm:pl-10">
          {INITIATIVES.map((item) => (
            <div key={`${item.year}-${item.title}`} className="relative pl-6">
              <span className="absolute -left-3 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-white/30 bg-slate-950 text-xs font-semibold text-white/70">
                ●
              </span>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                  <span>{item.year}</span>
                  <span>IQAC Initiative</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-white/75 font-body">{item.details}</p>
                <p className="mt-4 inline-flex items-start gap-2 text-sm text-white font-body">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-magenta" aria-hidden="true" />
                  {item.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResourcesSection() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-display text-white sm:text-4xl">
              Resource library
            </h2>
            <p className="mt-3 max-w-2xl text-base text-white/70 font-body">
              Access curated documentation that underpins DSU’s quality initiatives. Write to IQAC for authenticated copies or collaborative reviews.
            </p>
          </div>
          <a
            href="mailto:iqac@dsu.edu.in?subject=IQAC%20Document%20Request"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
          >
            Request documents
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {RESOURCE_GROUPS.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-white transition hover:border-white/30"
            >
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                <FileText className="h-4 w-4" aria-hidden="true" />
                {group.title}
              </div>
              <p className="mt-4 text-sm text-white/75 font-body">{group.subtitle}</p>
              <ul className="mt-6 space-y-3 text-sm text-white/80 font-body">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <ArrowRight className="mt-0.5 h-4 w-4 text-brand-magenta" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section className="bg-white/5 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-display text-white sm:text-4xl">
            Continuous quality enhancement workflow
          </h2>
          <p className="mt-3 text-base text-white/70 font-body">
            Every academic year is structured around iterative quality cycles that translate strategy into measurable outcomes and responsive improvements.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {QUALITY_WORKFLOW.map((phase, index) => (
            <div
              key={phase.step}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-7 text-white"
            >
              <div className="absolute -right-10 top-0 h-24 w-24 rounded-full bg-brand-gradient-alt blur-3xl opacity-40" />
              <div className="relative space-y-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-sm font-semibold text-white/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold text-white">{phase.step}</h3>
                <p className="text-sm text-white/75 font-body">{phase.overview}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadershipSection() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 px-6 py-16 text-white shadow-[0_30px_120px_-80px_rgba(255,255,255,0.9)]">
        <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,1.4fr)]">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-brand-gradient-alt p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_65%)]" />
            <div className="relative space-y-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-2xl font-semibold">
                MN
              </span>
              <p className="text-sm uppercase tracking-[0.28em] text-white/80">
                Leadership Message
              </p>
              <h3 className="text-2xl font-semibold text-white">{DIRECTOR_PROFILE.name}</h3>
              <p className="text-sm text-white/80 font-body">{DIRECTOR_PROFILE.designation}</p>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-white/80 font-body">{DIRECTOR_PROFILE.message}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/70 font-body">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1">
                <MailIcon />
                <a href={`mailto:${DIRECTOR_PROFILE.email}`} className="font-medium text-white transition hover:text-brand-magenta">
                  {DIRECTOR_PROFILE.email}
                </a>
              </span>
              <span className="inline-flex items-center gap-2 text-white/60">
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                Collaborate with IQAC working groups for academic audits and accreditation readiness.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeedbackSection() {
  return (
    <section className="bg-slate-950 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-white">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white">
                Feedback & Support
              </span>
              <h2 className="text-3xl font-display text-white sm:text-4xl">
                Partner with IQAC for continuous enhancement
              </h2>
              <p className="text-base text-white/75 font-body">
                Departments, students, alumni, and industry collaborators are invited to share inputs that elevate DSU’s academic and societal impact. IQAC ensures transparent acknowledgement, analysis, and action documentation for every submission.
              </p>
            </div>
            <div className="space-y-4 text-sm text-white/75 font-body">
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <Megaphone className="mt-1 h-5 w-5 text-brand-magenta" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-white">Submit feedback</p>
                  <p className="mt-1">Share ideas, commendations, or concerns with the IQAC coordination team for swift action planning.</p>
                  <Button
                    asChild
                    variant="secondary"
                    className="mt-4 bg-white/10 text-white hover:bg-white/20"
                  >
                    <a
                      href="mailto:iqac@dsu.edu.in?subject=Feedback%20for%20IQAC"
                      className="gap-2"
                    >
                      Email feedback
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <Users2 className="mt-1 h-5 w-5 text-brand-magenta" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-white">Request facilitation</p>
                  <p className="mt-1">
                    Invite IQAC facilitators for departmental reviews, NAAC preparedness workshops, or policy clarifications.
                  </p>
                  <p className="mt-3 text-sm text-white/70">
                    Email <a href="mailto:iqac@dsu.edu.in" className="font-medium text-white transition hover:text-brand-magenta">iqac@dsu.edu.in</a> with proposed agenda and timelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MailIcon() {
  return <Mail className="h-4 w-4 text-white" aria-hidden="true" />;
}

export default function IQAC() {
  return (
    <main className="bg-slate-950 text-white">
      <HeroSection />
      <StatsShowcase />
      <MandateSection />
      <FocusAreasSection />
      <AnnouncementStrip />
      <InitiativesTimeline />
      <ResourcesSection />
      <WorkflowSection />
      <LeadershipSection />
      <FeedbackSection />
    </main>
  );
}
