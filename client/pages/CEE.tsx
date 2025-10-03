import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  BadgeCheck,
  CalendarDays,
  ChevronRight,
  ClipboardList,
  Compass,
  GraduationCap,
  Layers,
  Network,
  Presentation,
  Sparkle,
  Users
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type QuickLink = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
};

type Highlight = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  stat?: string;
};

type Offering = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type Resource = {
  title: string;
  description: string;
  href: string;
  badge: string;
};

const HERO_IMAGE = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop";

const QUICK_LINKS: QuickLink[] = [
  {
    title: "Executive USP",
    description: "Discover the differentiators of DSU Executive Education.",
    href: "#usp",
    icon: Award
  },
  {
    title: "Programs",
    description: "Map the spectrum of executive pathways and learning outcomes.",
    href: "#offerings",
    icon: GraduationCap
  },
  {
    title: "Speaker Series",
    description: "Access thought leadership from global CXOs and innovators.",
    href: "https://www.dsu.edu.in/academics/cee/speaker-series",
    icon: Presentation,
    external: true
  },
  {
    title: "Admissions & FAQs",
    description: "Review admissions calendar, policies and onboarding details.",
    href: "https://www.dsu.edu.in/academics/cee/admission",
    icon: ClipboardList,
    external: true
  },
  {
    title: "Clubs & Experience",
    description: "Immerse in EMBA clubs, experiences and leadership labs.",
    href: "https://www.dsu.edu.in/academics/cee/experience",
    icon: Network,
    external: true
  },
  {
    title: "Calendar of Events",
    description: "Stay updated with executive education schedules and milestones.",
    href: "#resources",
    icon: CalendarDays
  }
];

const USP_HIGHLIGHTS: Highlight[] = [
  {
    title: "Executive-First Curriculum",
    description: "Programs tailored for working professionals balancing strategic leadership, innovation and digital business transformation.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
    icon: Sparkle,
    stat: "Weekend Format"
  },
  {
    title: "Integrated Ecosystem",
    description: "Innovation labs, incubation centres and industry partnerships create end-to-end upskilling experiences.",
    image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1600&auto=format&fit=crop",
    icon: Layers
  },
  {
    title: "CXO Mentorship",
    description: "Global leaders engage through speaker series, board of studies and bespoke coaching clinics.",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop",
    icon: Users
  },
  {
    title: "Career Acceleration",
    description: "Dedicated leadership assessments, executive coaching and international immersions unlock growth opportunities.",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?q=80&w=1600&auto=format&fit=crop",
    icon: Compass
  }
];

const OFFERINGS: Offering[] = [
  {
    title: "Executive MBA Tracks",
    description: "Modular Executive MBA and EPM-style programmes with customisable electives for senior managers and entrepreneurs.",
    icon: GraduationCap
  },
  {
    title: "Leadership Development",
    description: "Faculty dialogues, training & development bootcamps and boardroom simulations sharpen strategic capabilities.",
    icon: Presentation
  },
  {
    title: "Industry Associations",
    description: "Collaborations with leading corporates, professional bodies and global partners for immersive residencies.",
    icon: Network
  },
  {
    title: "Clubs & Experiences",
    description: "Executive clubs, live projects and innovation labs deliver peer networking and entrepreneurial momentum.",
    icon: BadgeCheck
  }
];

const RESOURCES: Resource[] = [
  {
    title: "Calendar of Events",
    description: "Download the latest executive education calendar capturing residencies, masterclasses and evaluations.",
    href: "https://www.dsu.edu.in/academics/cee/calendar-events",
    badge: "Calendar"
  },
  {
    title: "Executive MBA Application",
    description: "Apply for the upcoming Executive MBA cohort with flexible weekend modes and cohort-based learning.",
    href: "https://bit.ly/DSUEMBAApp",
    badge: "Admissions"
  },
  {
    title: "Speaker Series",
    description: "Browse highlights from the Global Speaker Series featuring CEOs, founders and public policy leaders.",
    href: "https://www.dsu.edu.in/academics/cee/speaker-series",
    badge: "Insights"
  },
  {
    title: "Executive Brochure",
    description: "Get a deep dive into curricula, outcomes, electives and residency plans for executive programmes.",
    href: "https://www.dsu.edu.in/academics/cee/brochure",
    badge: "Brochure"
  }
];

function QuickLinkCard({ link }: { link: QuickLink }) {
  const Icon = link.icon;
  const content = (
    <div className="group h-full rounded-3xl border border-border/40 bg-card/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-magenta/60 hover:shadow-xl hover:shadow-brand-magenta/10">
      <div className="flex items-center justify-between">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-magenta/10 text-brand-magenta">
          <Icon className="h-5 w-5" />
        </span>
        <ChevronRight className="h-4 w-4 text-transparent transition-colors duration-500 group-hover:text-brand-magenta" />
      </div>
      <h3 className="mt-5 text-lg font-semibold font-gilroy">{link.title}</h3>
      <p className="mt-3 text-sm text-muted-foreground font-graphik">{link.description}</p>
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
        className="rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {content}
      </a>
    );
  }

  return (
    <a
      href={link.href}
      className="rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {content}
    </a>
  );
}

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
        <Icon className="h-4 w-4" /> Executive USP
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <h3 className="mb-2 text-lg font-semibold font-gilroy">{highlight.title}</h3>
        <p className="text-sm text-white/80 font-graphik">{highlight.description}</p>
        {highlight.stat ? (
          <div className="mt-3 text-xs uppercase tracking-wide text-white/70 font-graphik">{highlight.stat}</div>
        ) : null}
      </div>
    </Card>
  );
}

function OfferingCard({ offering }: { offering: Offering }) {
  const Icon = offering.icon;
  return (
    <Card className="h-full rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-magenta/10 text-brand-magenta">
          <Icon className="h-5 w-5" />
        </span>
        <CardTitle className="text-base font-gilroy">{offering.title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-sm leading-relaxed text-muted-foreground font-graphik">
          {offering.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <Card className="h-full rounded-3xl border border-border/40 bg-card/60 backdrop-blur">
      <CardHeader className="pb-2">
        <Badge className="bg-brand-magenta/15 text-brand-magenta">{resource.badge}</Badge>
        <CardTitle className="mt-4 text-lg font-gilroy">{resource.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 text-sm text-muted-foreground font-graphik">
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

export default function CEE() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative" id="top">
        <div className="h-[60vh] w-full overflow-hidden md:h-[70vh]">
          <img src={HERO_IMAGE} alt="Center for Executive Education" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-6 inline-flex items-center rounded-full border border-brand-magenta/20 bg-brand-magenta/10 px-4 py-2">
              <Presentation className="mr-2 h-4 w-4 text-brand-magenta" />
              <span className="text-sm font-medium text-brand-magenta font-gilroy">Center for Executive Education</span>
            </div>
            <h1 className="mb-4 font-gilroy text-4xl leading-tight text-white md:text-6xl">Executive MBA & Leadership Ecosystem</h1>
            <p className="max-w-2xl text-white/90 font-graphik text-lg">
              Propel your career with weekend executive programmes, CXO mentorship and innovation labs tailored for working professionals.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://bit.ly/DSUEMBAApp" target="_blank" rel="noreferrer">
                <Button className="bg-brand-gradient text-white">Apply for Executive MBA</Button>
              </a>
              <a href="https://www.dsu.edu.in/academics/cee/brochure" target="_blank" rel="noreferrer">
                <Button variant="outline" className="border-brand-magenta/40 hover:bg-brand-magenta/10">
                  Download Brochure
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="quick-links" className="bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Badge className="bg-brand-magenta/15 text-brand-magenta">Important Sub Menus</Badge>
              <h2 className="mt-4 font-gilroy text-3xl">Navigate Executive Education</h2>
              <p className="mt-3 max-w-2xl text-sm text-muted-foreground font-graphik">
                Jump to programme architecture, speaker series, admissions resources and the executive experience at DSU.
              </p>
            </div>
            <a
              href="https://www.dsu.edu.in/academics/cee"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
            >
              Visit CEE portal
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

      <section id="usp" className="bg-gradient-to-r from-brand-magenta/5 via-brand-orange/5 to-brand-blue/5 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <Badge className="bg-white/20 text-brand-magenta backdrop-blur" variant="secondary">
              Executive Differentiators
            </Badge>
            <h2 className="mt-5 font-gilroy text-3xl md:text-4xl">Why Leaders Choose DSU CEE</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {USP_HIGHLIGHTS.map((highlight) => (
              <HighlightCard key={highlight.title} highlight={highlight} />
            ))}
          </div>
        </div>
      </section>

      <section id="offerings" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <Badge className="bg-brand-magenta/15 text-brand-magenta">Programme Spectrum</Badge>
            <h2 className="mt-4 font-gilroy text-3xl md:text-4xl">Pathways for Working Professionals</h2>
            <p className="mt-3 text-sm text-muted-foreground font-graphik max-w-3xl mx-auto">
              Modular learning journeys crafted for managers, entrepreneurs and CXOs equipped with leadership labs, residencies and personalised mentorship.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {OFFERINGS.map((offering) => (
              <OfferingCard key={offering.title} offering={offering} />
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="bg-gradient-to-r from-brand-blue/5 to-brand-orange/5 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">Calendar & Resources</Badge>
              <h2 className="mt-4 font-gilroy text-3xl md:text-4xl">Plan Your Executive Journey</h2>
              <p className="mt-3 text-sm text-muted-foreground font-graphik">
                Access calendars, brochures and speaker archives to stay ahead of application timelines and learning engagements.
              </p>
            </div>
            <a
              href="https://www.dsu.edu.in/academics/cee/news-events"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
            >
              News & events hub
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
            <h3 className="mb-3 font-gilroy text-3xl">Accelerate Your Leadership Impact</h3>
            <p className="mb-6 text-muted-foreground font-graphik">
              Join an executive cohort that blends innovation labs, global mentors and actionable playbooks to elevate your organisation.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="https://bit.ly/DSUEMBAApp" target="_blank" rel="noreferrer">
                <Button className="bg-brand-gradient text-white">
                  Apply Today
                  <GraduationCap className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link to="/admissions">
                <Button variant="outline" className="border-brand-magenta/40 hover:bg-brand-magenta/10">
                  Talk to Admissions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
