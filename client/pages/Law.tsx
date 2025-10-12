import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  Scale,
  BookOpen,
  ChevronRight,
  FileText,
  Gavel,
  Globe,
  GraduationCap,
  Landmark,
  Library,
  ShieldCheck,
  Users,
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

type Programme = {
  name: string;
  level: string;
  duration: string;
};

type Centre = {
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
  "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=2000&auto=format&fit=crop";

const USP_HIGHLIGHTS: Highlight[] = [
  {
    title: "New Age Lawyering",
    description:
      "Curriculum anchored in emerging domains like technology law, ADR, fintech regulation and human rights advocacy.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
    icon: ShieldCheck,
    stat: "Outcome-Focused",
  },
  {
    title: "Experiential Pedagogy",
    description:
      "Moot courts, legal aid clinics and simulation labs embed practice-ready skills into every semester.",
    image:
      "https://images.unsplash.com/photo-1528740579684-5809094cdaa1?q=80&w=1600&auto=format&fit=crop",
    icon: Gavel,
  },
  {
    title: "Research & Policy Impact",
    description:
      "Faculty-led centres address contemporary legal issues with publications, policy briefs and community engagement.",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1600&auto=format&fit=crop",
    icon: Globe,
  },
  {
    title: "Mentor Network",
    description:
      "Learn from advocates, judges, general counsels and public policy experts through masterclasses and internships.",
    image:
      "https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?q=80&w=1600&auto=format&fit=crop",
    icon: Users,
  },
];

const PROGRAMMES: Programme[] = [
  {
    name: "B.B.A., LL.B. (Hons)",
    level: "Integrated Undergraduate",
    duration: "5 Years",
  },
  {
    name: "B.A., LL.B. (Hons)",
    level: "Integrated Undergraduate",
    duration: "5 Years",
  },
  {
    name: "LL.B.",
    level: "Postgraduate",
    duration: "3 Years",
  },
];

const CENTRES: Centre[] = [
  {
    title: "Moot Court & Simulation Arena",
    description:
      "Practice oral advocacy, client counselling and arbitration in a purpose-built space mirroring real courtrooms.",
    icon: Gavel,
    href: "https://www.dsu.edu.in/law/activities-law",
  },
  {
    title: "Legal Aid & Outreach Clinic",
    description:
      "Serve communities, run legal literacy drives and collaborate with NGOs for social justice projects.",
    icon: Scale,
    href: "https://www.dsu.edu.in/law/cells-committees-law",
  },
  {
    title: "Research Centres",
    description:
      "Interdisciplinary centres focused on public policy, technology law, constitutionalism and human rights.",
    icon: Globe,
    href: "https://www.dsu.edu.in/law/law-research-centres",
  },
  {
    title: "Specialised Library & Knowledge Hub",
    description:
      "Access a curated repository of journals, online databases and international case law resources.",
    icon: Library,
    href: "https://www.dsu.edu.in/law/sol-library",
  },
];

const RESOURCE_LINKS: ResourceLink[] = [
  {
    title: "Newsletter",
    description:
      "Insights into achievements, student stories and legal discourse from the School of Law community.",
    href: "https://www.dsu.edu.in/law/newsletter-law",
    badge: "Updates",
  },
  {
    title: "Annual Conference",
    description:
      "Converge with practitioners and scholars at DSU's flagship legal conferences and conclaves.",
    href: "https://www.dsu.edu.in/law/conference-law",
    badge: "Conference",
  },
  {
    title: "Faculty Development Programmes",
    description:
      "Continuous upskilling initiatives for faculty and legal academics.",
    href: "https://www.dsu.edu.in/law/fdp-law",
    badge: "FDP",
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
  return (
    <Card className="h-full rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <Badge className="bg-brand-magenta/15 text-brand-magenta">
          {programme.level}
        </Badge>
        <CardTitle className="mt-4 text-xl font-gilroy">
          {programme.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground font-graphik">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-brand-magenta" />
          Duration: {programme.duration}
        </div>
      </CardContent>
    </Card>
  );
}

function CentreCard({ centre }: { centre: Centre }) {
  const Icon = centre.icon;
  const content = (
    <Card className="h-full rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-magenta/10 text-brand-magenta">
          <Icon className="h-5 w-5" />
        </span>
        <CardTitle className="text-base font-gilroy">{centre.title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-sm leading-relaxed text-muted-foreground font-graphik">
          {centre.description}
        </CardDescription>
      </CardContent>
    </Card>
  );

  if (!centre.href) {
    return content;
  }

  return (
    <a
      href={centre.href}
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
        <CardTitle className="mt-4 text-lg font-gilroy">
          {resource.title}
        </CardTitle>
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

export default function Law() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative" id="top">
        <div className="h-[60vh] w-full overflow-hidden md:h-[70vh]">
          <img
            src={HERO_IMAGE}
            alt="School of Law"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-6 inline-flex items-center rounded-full border border-brand-magenta/20 bg-brand-magenta/10 px-4 py-2">
              <Gavel className="mr-2 h-4 w-4 text-brand-magenta" />
              <span className="text-sm font-medium text-brand-magenta font-gilroy">
                School of Law
              </span>
            </div>
            <h1 className="mb-4 font-gilroy text-4xl leading-tight text-white md:text-6xl">
              Your Gateway to New Age Lawyering
            </h1>
            <p className="max-w-2xl text-white/90 font-graphik text-lg">
              Engage with contemporary legal challenges through immersive
              learning, interdisciplinary research and mentorship from leading
              practitioners.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/admissions">
                <Button className="bg-brand-gradient text-white">
                  Apply Now
                </Button>
              </Link>
              <a
                href="https://www.dsu.edu.in/law/about-school-law"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-brand-magenta/40 hover:bg-brand-magenta/10"
                >
                  About School of Law
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
                Programmes shaping practice-ready advocates
              </h2>
              <p className="text-sm text-muted-foreground font-graphik">
                Integrated and postgraduate programmes combine rigorous legal scholarship with drafting studios, internships, clinics and research to prepare you for new age lawyering.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {PROGRAMMES.map((programme) => (
                  <ProgrammeCard key={programme.name} programme={programme} />
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-brand-magenta/25 bg-brand-magenta/10 p-8 shadow-[0_30px_120px_-50px_rgba(233,97,255,0.6)]">
              <h3 className="font-gilroy text-2xl text-brand-magenta">
                DSU Law advantages
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-brand-magenta/90 font-graphik">
                <li className="flex items-start gap-2">
                  <Scale className="mt-0.5 h-4 w-4" />
                  Case-led pedagogy with moot courts, judgement writing and policy labs every semester
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4" />
                  Mandatory internships across litigation, corporate, policy and legal aid organisations
                </li>
                <li className="flex items-start gap-2">
                  <BookOpen className="mt-0.5 h-4 w-4" />
                  Faculty-led research centres publishing on constitutional law, ADR, cyber law and human rights
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
              Why Future Advocates Choose DSU Law
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
        id="centres"
        className="bg-gradient-to-r from-brand-blue/5 to-brand-orange/5 px-6 py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Experiential Hubs
              </Badge>
              <h2 className="mt-4 font-gilroy text-3xl md:text-4xl">
                Clinics, Centres & Knowledge Spaces
              </h2>
              <p className="mt-3 text-sm text-muted-foreground font-graphik">
                Transform classroom insights into societal impact through moot
                courts, legal aid clinics, research collaborations and
                resource-rich libraries.
              </p>
            </div>
            <a
              href="https://www.dsu.edu.in/law/law-student"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
            >
              Student achievements hub
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {CENTRES.map((centre) => (
              <CentreCard key={centre.title} centre={centre} />
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Calendar & Engagements
              </Badge>
              <h2 className="mt-4 font-gilroy text-3xl md:text-4xl">
                Stay Engaged with Law Events
              </h2>
              <p className="mt-3 text-sm text-muted-foreground font-graphik">
                From newsletters and conferences to faculty development
                programmes, keep up with the vibrant legal discourse at DSU.
              </p>
            </div>
            <a
              href="https://www.dsu.edu.in/law/activities-law"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
            >
              Explore activities
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {RESOURCE_LINKS.map((resource) => (
              <ResourceCard key={resource.title} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-3xl border border-brand-magenta/20 bg-brand-magenta/5 p-10">
            <h3 className="mb-3 font-gilroy text-3xl">
              Shape the Future of Justice with DSU
            </h3>
            <p className="mb-6 text-muted-foreground font-graphik">
              Gain courtroom confidence, global exposure and thought leadership
              by immersing yourself in DSU's vibrant legal ecosystem.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/admissions">
                <Button className="bg-brand-gradient text-white">
                  Begin Application
                  <GraduationCap className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a
                href="https://www.dsu.edu.in/law/conference-law"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-brand-magenta/40 hover:bg-brand-magenta/10"
                >
                  Upcoming Conferences
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
