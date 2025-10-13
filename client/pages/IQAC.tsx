import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  BookMarked,
  Building2,
  CalendarDays,
  FileText,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const HERO_BACKGROUND =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1620&q=80";

const STATS = [
  {
    value: "18",
    label: "Academic & support units engaged",
    description: "Faculties, schools, and strategic divisions aligned with IQAC benchmarks.",
    icon: Building2,
  },
  {
    value: "42",
    label: "Quality enhancement initiatives",
    description: "Process improvements completed through annual assurance cycles.",
    icon: Sparkles,
  },
  {
    value: "120+",
    label: "Capacity-building touchpoints",
    description: "Workshops, clinics, and orientations strengthening teaching excellence.",
    icon: Users2,
  },
  {
    value: "30+",
    label: "Policy & compliance audits",
    description: "Structured reviews spanning academics, research, and governance.",
    icon: ShieldCheck,
  },
];

const ABOUT_POINTS = [
  "Institutionalise outcome-based education and learner-centric pedagogy across programmes.",
  "Embed data-informed decision making through real-time dashboards and quality indicators.",
  "Synchronise statutory compliances and accreditation preparedness with proactive reviews.",
  "Foster a collaborative quality culture through inclusive stakeholder dialogues.",
];

const DIRECTOR_PROFILE = {
  name: "Prof. (Dr.) Meera Narayanan",
  designation: "Director, Internal Quality Assurance Cell",
  quote:
    "At Dayananda Sagar University, IQAC is the catalyst that transforms insights into impact. We encourage purposeful experimentation, cultivate reflective practice, and ensure every learner experience reflects our commitment to excellence.",
  image:
    "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=720&q=80",
  email: "iqac@dsu.edu.in",
};

const EVENT_TICKER = [
  {
    title: "IQAC Colloquium on Emerging Pedagogies",
    date: "April 07, 2025",
  },
  {
    title: "DSU Quality Conclave",
    date: "April 19, 2025",
  },
  {
    title: "NAAC Evidence Readiness Drive",
    date: "May 06, 2025",
  },
  {
    title: "Outcome Mapping Workshop",
    date: "May 24, 2025",
  },
];

const GALLERY_CATEGORIES = [
  "All",
  "Events",
  "Healthcare",
  "Outreach",
  "Sports",
  "Best Practices",
  "Distinctiveness",
];

const GALLERY_ITEMS = [
  {
    category: "Events",
    title: "Innovation Day Showcase",
    description: "Student-led prototypes and research pitches evaluated by industry mentors.",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=720&q=80",
  },
  {
    category: "Healthcare",
    title: "Interdisciplinary Health Camp",
    description: "Collaborative outreach integrating medical, dental, and allied health sciences.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=720&q=80",
  },
  {
    category: "Outreach",
    title: "Community Sustainability Drive",
    description: "Village adoption programme focusing on water stewardship and agri-tech awareness.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=720&q=80",
  },
  {
    category: "Sports",
    title: "Invitational Athletics Meet",
    description: "Track and field championship celebrating student discipline and teamwork.",
    image:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=720&q=80",
  },
  {
    category: "Best Practices",
    title: "Outcome-Based Curriculum Design Lab",
    description: "Cross-functional sprint to align graduate attributes with assessment matrices.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=720&q=80",
  },
  {
    category: "Distinctiveness",
    title: "Smart Campus Living Lab",
    description: "IoT-enabled environmental sensing to support experiential learning and research.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=720&q=80",
  },
];

const POLICY_GROUPS = [
  {
    title: "Policies & Frameworks",
    description: "Guiding documents that anchor DSU’s quality management and governance systems.",
    items: [
      "Quality Assurance Policy",
      "Academic Governance Manual",
      "Outcome-Based Education Implementation Framework",
      "Research Integrity & Ethics Policy",
    ],
  },
  {
    title: "Reports & Submissions",
    description: "Evidence-based documentation mapped to NAAC criteria and statutory compliances.",
    items: [
      "Annual Quality Assurance Reports (AQAR)",
      "Internal Academic Audit Compendium",
      "Institutional Distinctiveness Portfolio",
      "Gender & Green Audit Reports",
    ],
  },
  {
    title: "Stakeholder Feedback",
    description: "Structured inputs from learners, alumni, employers, and community partners.",
    items: [
      "Student Satisfaction Survey (SSS) Consolidation",
      "Alumni & Employer Feedback Dashboards",
      "Parent Advisory Insights",
      "Community Outreach Impact Digest",
    ],
  },
];

const QUICK_LINKS = [
  {
    label: "NAAC IQAC Guidelines",
    href: "https://www.naac.gov.in/images/docs/iqac/saac_iqac_guideline_1.pdf",
  },
  {
    label: "DSU Accreditation & Rankings",
    href: "https://www.dsu.edu.in/approvals-and-recognitions",
  },
  {
    label: "Internal Audit Calendar",
    href: "https://www.dsu.edu.in/images/downloads/IQAC-Audit-Calendar.pdf",
  },
  {
    label: "IQAC Feedback Form",
    href: "mailto:iqac@dsu.edu.in?subject=Feedback%20for%20IQAC",
  },
];

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: `url(${HERO_BACKGROUND})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-slate-950/80" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-14 px-6 py-28 text-white lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-white/80">
            Internal Quality Assurance Cell
          </span>
          <h1 className="text-4xl font-display leading-tight sm:text-5xl lg:text-6xl">
            We thrive for Quality, Excellence, Integrity, Innovation
          </h1>
          <p className="max-w-2xl text-lg text-white/80 font-body">
            The IQAC at Dayananda Sagar University orchestrates continuous improvement through evidence-based planning, collaborative reviews, and future-ready assurance systems aligned with NAAC benchmarks.
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
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"
            >
              Explore NAAC framework
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="flex-1">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_120px_-60px_rgba(255,255,255,0.8)]">
            <p className="text-sm uppercase tracking-[0.28em] text-white/60">Our Mandate</p>
            <ul className="mt-6 space-y-4 text-sm text-white/80 font-body">
              <li className="flex items-start gap-3">
                <Award className="mt-1 h-5 w-5 text-brand-yellow" aria-hidden="true" />
                Sustain a culture of quality by embedding reflective practice into every academic and administrative process.
              </li>
              <li className="flex items-start gap-3">
                <Award className="mt-1 h-5 w-5 text-brand-yellow" aria-hidden="true" />
                Translate peer review recommendations into measurable action plans with periodic impact tracking.
              </li>
              <li className="flex items-start gap-3">
                <Award className="mt-1 h-5 w-5 text-brand-yellow" aria-hidden="true" />
                Showcase institutional distinctiveness through evidence-led narratives and stakeholder stories.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="bg-slate-950 py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2 xl:grid-cols-4">
        {STATS.map((item) => (
          <div
            key={item.label}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
          >
            <div className="absolute -top-10 right-0 h-32 w-32 rounded-full bg-brand-gradient blur-3xl opacity-0 transition group-hover:opacity-60" />
            <div className="relative space-y-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white/80">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-3xl font-semibold text-white">{item.value}</p>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
                {item.label}
              </p>
              <p className="text-sm text-white/75 font-body">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="bg-slate-900/90 py-20 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
            About IQAC
          </span>
          <h2 className="text-3xl font-display sm:text-4xl">Quality stewardship aligned to national and global benchmarks</h2>
          <p className="text-base text-white/80 font-body">
            The IQAC at Dayananda Sagar University is mandated to architect continuous enhancement across academics, research, governance, and community impact. It ensures that quality initiatives remain structured, inclusive, and measurable, enabling us to deliver future-ready education.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {ABOUT_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-white/80 font-body">
                <FileText className="mt-1 h-4 w-4 text-brand-magenta" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              variant="secondary"
              className="bg-white/10 text-white hover:bg-white/20"
            >
              <a href="mailto:iqac@dsu.edu.in?subject=IQAC%20Collaboration%20Request" className="gap-2">
                Request departmental review
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Link
              to="/research"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"
            >
              Explore DSU research ecosystem
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_30px_120px_-80px_rgba(255,255,255,0.9)]">
          <img
            src="https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=880&q=80"
            alt="Dayananda Sagar University students collaborating"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-slate-950/70 p-6 text-sm text-white/80 font-body">
            IQAC collaborates with schools and centres through structured academic and administrative audits.
          </div>
        </div>
      </div>
    </section>
  );
}

function DirectorSection() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_40px_140px_-80px_rgba(255,255,255,0.8)]">
          <img
            src={DIRECTOR_PROFILE.image}
            alt={DIRECTOR_PROFILE.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
            Leadership message
          </span>
          <h3 className="text-3xl font-display sm:text-4xl">{DIRECTOR_PROFILE.name}</h3>
          <p className="text-sm uppercase tracking-[0.28em] text-white/60">
            {DIRECTOR_PROFILE.designation}
          </p>
          <p className="text-lg text-white/80 font-body">{DIRECTOR_PROFILE.quote}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/75 font-body">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1">
              <FileText className="h-4 w-4 text-white" aria-hidden="true" />
              <a
                href={`mailto:${DIRECTOR_PROFILE.email}`}
                className="font-medium text-white transition hover:text-brand-magenta"
              >
                {DIRECTOR_PROFILE.email}
              </a>
            </span>
            <span className="inline-flex items-center gap-2 text-white/60">
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
              Engage IQAC facilitators for audits, curriculum reviews, and quality clinics.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function EventTicker() {
  return (
    <section className="border-y border-white/10 bg-white/5 py-6 text-white">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white">
          Updates
        </span>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex animate-[ticker_28s_linear_infinite] gap-12 text-sm text-white/80 font-body">
            {[...EVENT_TICKER, ...EVENT_TICKER].map((item, index) => (
              <div key={`${item.title}-${index}`} className="inline-flex items-center gap-3 whitespace-nowrap">
                <CalendarDays className="h-4 w-4 text-brand-yellow" aria-hidden="true" />
                <span className="font-semibold text-white">{item.title}</span>
                <span className="text-white/60">{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
              Life at DSU
            </span>
            <h2 className="mt-4 text-3xl font-display sm:text-4xl">Experiences curated by IQAC</h2>
            <p className="mt-3 max-w-2xl text-base text-white/75 font-body">
              A gallery of academic, co-curricular, and outreach initiatives that showcase DSU’s vibrant learning ecosystem and quality-led impact.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {GALLERY_CATEGORIES.map((category) => (
              <span
                key={category}
                className={`inline-flex items-center rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-white/70 ${category === "All" ? "bg-brand-gradient text-white" : "bg-white/5"}`}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.title} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="space-y-3 p-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                  {item.category}
                </span>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-white/75 font-body">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PoliciesSection() {
  return (
    <section className="bg-slate-900/95 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
              Policies & Manuals
            </span>
            <h2 className="mt-4 text-3xl font-display sm:text-4xl">Structured documentation for assurance</h2>
            <p className="mt-3 max-w-2xl text-base text-white/75 font-body">
              IQAC curates policies, frameworks, and reports that guide institutional excellence. Access curated sets for collaborative reviews and statutory submissions.
            </p>
          </div>
          <Button
            asChild
            variant="secondary"
            className="bg-white/10 text-white hover:bg-white/20"
          >
            <a href="mailto:iqac@dsu.edu.in?subject=Request%20for%20IQAC%20Documents" className="gap-2">
              Request authenticated copy
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {POLICY_GROUPS.map((group) => (
            <div key={group.title} className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                <BookMarked className="h-4 w-4" aria-hidden="true" />
                {group.title}
              </div>
              <p className="mt-4 text-sm text-white/75 font-body">{group.description}</p>
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

function QuickLinksSection() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
            Contact & Support
          </span>
          <h2 className="text-3xl font-display sm:text-4xl">Collaborate with the IQAC office</h2>
          <p className="text-base text-white/75 font-body">
            Reach out for curriculum reviews, statutory documentation support, or to feature your best practices. The IQAC coordination team responds within two working days.
          </p>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/80 font-body">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-brand-magenta" aria-hidden="true" />
              <div>
                <p className="font-semibold text-white">IQAC Office, Dayananda Sagar University</p>
                <p className="mt-1">Innovation Campus, Kudlu Gate, Hosur Road, Bengaluru - 560 114</p>
                <p className="mt-3">
                  Email: <a href="mailto:iqac@dsu.edu.in" className="font-medium text-white transition hover:text-brand-magenta">iqac@dsu.edu.in</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Resource quick links</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {QUICK_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75 font-body transition hover:border-white/30 hover:text-white"
              >
                <span>{link.label}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function IQAC() {
  return (
    <main className="bg-slate-950 text-white">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <DirectorSection />
      <EventTicker />
      <GallerySection />
      <PoliciesSection />
      <QuickLinksSection />
    </main>
  );
}
