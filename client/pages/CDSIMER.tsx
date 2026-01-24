import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  Building2,
  CalendarDays,
  ChevronRight,
  Compass,
  GraduationCap,
  Hospital,
  Microscope,
  ShieldCheck,
  Sparkle,
  Stethoscope,
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

type SectionCard = {
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
  "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=2000&auto=format&fit=crop";

const QUICK_LINKS: QuickLink[] = [
  {
    title: "Medical College",
    description:
      "Discover the smart campus nurturing next-generation physicians.",
    href: "#pillars",
    icon: GraduationCap,
  },
  {
    title: "Hospital",
    description:
      "Access the 650-bed tertiary care hospital offerings and departments.",
    href: "/academics/health-sciences/cdsimer/hospital",
    icon: Hospital,
  },
  {
    title: "Research & Innovation",
    description:
      "Explore CDSIMER research initiatives and central laboratory capabilities.",
    href: "https://cdsimer.edu.in/research/cri",
    icon: Microscope,
    external: true,
  },
  {
    title: "Admissions",
    description:
      "Enquire about programmes, eligibility and timelines for CDSIMER.",
    href: "https://cdsimer.edu.in/enquiry",
    icon: Users,
    external: true,
  },
  {
    title: "Events & Community",
    description:
      "Stay updated with campus events, community service drives and video tours.",
    href: "#resources",
    icon: CalendarDays,
  },
  {
    title: "Life at CDSIMER",
    description:
      "Experience student life, clubs and cultural vibrancy across the 140-acre campus.",
    href: "/academics/health-sciences/cdsimer/life",
    icon: Sparkle,
  },
];

const HERO_HIGHLIGHTS: Highlight[] = [
  {
    title: "140 Acre Smart Campus",
    description:
      "A digitally-enabled environment promoting creativity, innovation and scholarly pursuits across medicine and allied sciences.",
    image:
      "https://images.unsplash.com/photo-1580281657521-8a19aa08c8c8?q=80&w=1600&auto=format&fit=crop",
    icon: Building2,
    stat: "140 Acres",
  },
  {
    title: "650 Bed Tertiary Hospital",
    description:
      "Comprehensive care facility serving over 200 villages with multi-speciality departments and simulation-supported care.",
    image:
      "https://images.unsplash.com/photo-1584985251444-7acbadda4b61?q=80&w=1600&auto=format&fit=crop",
    icon: Hospital,
    stat: "650 Beds",
  },
  {
    title: "Research & Innovation",
    description:
      "Central laboratory and research initiatives turning clinical curiosity into translational breakthroughs.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
    icon: Microscope,
  },
  {
    title: "Community Impact",
    description:
      "Outreach programmes, community health camps and holistic campus life influenced by DSU's rich heritage.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1600&auto=format&fit=crop",
    icon: ShieldCheck,
  },
];

const PILLARS: SectionCard[] = [
  {
    title: "Medical College",
    description:
      "Competency-based medical curriculum with smart classrooms, skills labs and interdisciplinary faculty.",
    icon: GraduationCap,
    href: "https://cdsimer.edu.in/medical-college",
  },
  {
    title: "Hospital",
    description:
      "Tertiary care hospital integrating patient safety, advanced diagnostics and compassionate care.",
    icon: Hospital,
    href: "/academics/health-sciences/cdsimer/hospital",
  },
  {
    title: "Research & Innovation",
    description:
      "Clinical research ecosystem fostering discovery and innovation through disciplined inquiry.",
    icon: Microscope,
    href: "https://cdsimer.edu.in/research/cri",
  },
  {
    title: "Central Laboratory",
    description:
      "Comprehensive diagnostics spanning clinical biochemistry, pathology and microbiology.",
    icon: Stethoscope,
    href: "https://cdsimer.edu.in/central-laboratory",
  },
  {
    title: "Life at CDSIMER",
    description:
      "Holistic student life blending academics, wellness, culture and co-curricular growth.",
    icon: Sparkle,
    href: "/academics/health-sciences/cdsimer/life",
  },
  {
    title: "Medical Education",
    description:
      "Patient-centred teaching bridging classrooms with real-world care for diverse learning cohorts.",
    icon: Compass,
    href: "https://cdsimer.edu.in/medical-education",
  },
];

const RESOURCES: Resource[] = [
  {
    title: "Enquire Now",
    description:
      "Reach out to CDSIMER admissions for detailed programme guidance and campus visits.",
    href: "https://cdsimer.edu.in/enquiry",
    badge: "Admissions",
  },
  {
    title: "Events & Community Service",
    description:
      "Stay current with campus events calendar and community outreach initiatives.",
    href: "https://cdsimer.edu.in/events",
    badge: "Events",
  },
  {
    title: "Library & Learning Resources",
    description:
      "Access the digital and physical library assets powering lifelong medical learning.",
    href: "https://cdsimer.edu.in/library",
    badge: "Library",
  },
  {
    title: "Video Tour",
    description:
      "Experience CDSIMER through an immersive video tour of the campus and facilities.",
    href: "https://www.youtube.com/channel/UCaM-Ha3YDgcH203jPh0iReQ",
    badge: "Tour",
  },
];

function QuickLinkCard({ link }: { link: QuickLink }) {
  const Icon = link.icon;
  const content = (
    <div className="group h-full rounded-3xl border border-border/40 bg-card/60 p-3 transition-all duration-500 hover:-translate-y-1 hover:border-brand-magenta/60 hover:shadow-xl hover:shadow-brand-magenta/10">
      <div className="flex items-center justify-between">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-magenta/10 text-brand-magenta">
          <Icon className="h-5 w-5" />
        </span>
        <ChevronRight className="h-4 w-4 text-transparent transition-colors duration-500 group-hover:text-brand-magenta" />
      </div>
      <h3 className="mt-5 text-lg font-semibold font-display">{link.title}</h3>
      <p className="mt-3 text-sm text-foreground font-body">
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
        className="rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {content}
      </a>
    );
  }

  if (link.href.startsWith("/")) {
    return (
      <Link
        to={link.href}
        className="rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {content}
      </Link>
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
      <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs text-foreground">
        <Icon className="h-4 w-4" /> Highlight
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

function SectionCardComponent({ section }: { section: SectionCard }) {
  const Icon = section.icon;
  const card = (
    <Card className="h-full rounded-none border border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-none bg-brand-magenta/10 text-brand-magenta">
          <Icon className="h-5 w-5" />
        </span>
        <CardTitle className="text-base font-display">{section.title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-sm leading-relaxed text-foreground font-body">
          {section.description}
        </CardDescription>
      </CardContent>
    </Card>
  );

  if (!section.href) {
    return card;
  }

  if (section.href.startsWith("/")) {
    return (
      <Link
        to={section.href}
        className="block h-full transform transition-all duration-500 hover:-translate-y-1"
      >
        {card}
      </Link>
    );
  }

  return (
    <a
      href={section.href}
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
    <Card className="h-full rounded-none border border-border/40 bg-card/60 backdrop-blur">
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

export default function CDSIMER() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative" id="top">
        <div className="h-[60vh] w-full overflow-hidden md:h-[70vh]">
          <img
            src={HERO_IMAGE}
            alt="CDSIMER"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-3">
            <div className="mb-6 inline-flex items-center rounded-full border border-brand-magenta/20 bg-brand-magenta/10 px-4 py-2 transform -translate-y-2">
              <Hospital className="mr-2 h-4 w-4 text-brand-magenta" />
              <span className="text-sm sm:text-base font-medium text-brand-magenta font-display">
                Dr. Chandramma Dayananda Sagar Institute of Medical Education & Research (CDSIMER)
              </span>
            </div>
            <h1 className="mb-4 font-display text-4xl leading-tight text-white md:text-6xl">
              Empowering Healthcare with Knowledge, Discovery & Healing
            </h1>
            <p className="max-w-3xl text-white/90 font-body text-lg">
              CDSIMER blends a smart medical campus, tertiary care hospital and
              research innovation hub to drive excellence in patient care,
              education and community wellbeing.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://cdsimer.edu.in/enquiry"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="bg-brand-gradient text-foreground">
                  Enquire Now
                </Button>
              </a>
              <a
                href="https://cdsimer.edu.in/medical-college"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-brand-magenta/40 hover:bg-brand-magenta/10"
                >
                  Medical College Overview
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="quick-links"
        className="bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5 px-3 py-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Key Shortcuts
              </Badge>
              <h2 className="mt-4 font-display text-3xl">Navigate CDSIMER</h2>
              <p className="mt-3 max-w-2xl text-sm text-foreground font-body">
                Jump to programme pillars, admissions, research and campus life
                resources shaping the CDSIMER experience.
              </p>
            </div>
            <a
              href="https://cdsimer.edu.in"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
            >
              Visit cdsimer.edu.in
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
        id="highlights"
        className="bg-gradient-to-r from-brand-magenta/5 via-brand-orange/5 to-brand-blue/5 px-3 py-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center">
            <Badge
              className="bg-white/20 text-brand-magenta backdrop-blur"
              variant="secondary"
            >
              Campus Highlights
            </Badge>
            <h2 className="mt-5 font-display text-3xl md:text-4xl">
              Smart Campus. Tertiary Care. Translational Research.
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {HERO_HIGHLIGHTS.map((highlight) => (
              <HighlightCard key={highlight.title} highlight={highlight} />
            ))}
          </div>
        </div>
      </section>

      <section id="pillars" className="px-3 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <Badge className="bg-brand-magenta/15 text-brand-magenta">
              Academic & Care Pillars
            </Badge>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              Holistic Medical Ecosystem
            </h2>
            <p className="mt-3 text-sm text-foreground font-body max-w-3xl mx-auto">
              The Dr. Chandramma Dayananda Sagar Institute of Medical Education & Research (CDSIMER) unifies medical education, hospital services, research innovation and vibrant student life on a single connected campus.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {PILLARS.map((section) => (
              <SectionCardComponent key={section.title} section={section} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="resources"
        className="bg-gradient-to-r from-brand-blue/5 to-brand-orange/5 px-3 py-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Resources
              </Badge>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">
                Plan Your CDSIMER Journey
              </h2>
              <p className="mt-3 text-sm text-foreground font-body">
                Access enquiry support, campus events, library resources and
                video tours to experience CDSIMER before you arrive.
              </p>
            </div>
            <a
              href="https://cdsimer.edu.in/enquiry"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
            >
              Talk to CDSIMER
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {RESOURCES.map((resource) => (
              <ResourceCard key={resource.title} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-3 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-none border border-brand-magenta/20 bg-brand-magenta/5 p-5">
            <h3 className="mb-3 font-display text-3xl">
              Join a Purpose-Driven Medical Community
            </h3>
            <p className="mb-6 text-foreground font-body">
              Learn, heal and innovate on a campus where compassionate care
              meets cutting-edge technology and global vision.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://cdsimer.edu.in/enquiry"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="bg-brand-gradient text-foreground">
                  Enquire Now
                  <GraduationCap className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link to="/academics/health-sciences">
                <Button
                  variant="outline"
                  className="border-brand-magenta/40 hover:bg-brand-magenta/10"
                >
                  Explore Health Sciences @ DSU
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
