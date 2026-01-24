import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  Building2,
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

type Highlight = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  stat?: string;
};

type Pillar = {
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

const HIGHLIGHTS: Highlight[] = [
  {
    title: "140 Acre Smart Campus",
    description:
      "Digitally integrated campus co-locating medical college, hospital and research to nurture innovation.",
    image:
      "https://images.unsplash.com/photo-1580281657521-8a19aa08c8c8?q=80&w=1600&auto=format&fit=crop",
    icon: Building2,
    stat: "140 Acres",
  },
  {
    title: "650 Bed Tertiary Care",
    description:
      "Comprehensive hospital serving 200+ villages with advanced diagnostics and emergency care.",
    image:
      "https://images.unsplash.com/photo-1584985251444-7acbadda4b61?q=80&w=1600&auto=format&fit=crop",
    icon: Hospital,
    stat: "650 Beds",
  },
  {
    title: "Simulation & Skills Labs",
    description:
      "High-fidelity labs and central diagnostics align academics with real-world clinical decision making.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
    icon: Stethoscope,
  },
  {
    title: "Community Impact",
    description:
      "Preventive health drives, community medicine postings and public health research drive societal wellbeing.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1600&auto=format&fit=crop",
    icon: ShieldCheck,
  },
];

const PILLARS: Pillar[] = [
  {
    title: "Medical College",
    description:
      "Competency-based MBBS curriculum, interdisciplinary faculty and outcome-driven mentorship.",
    icon: GraduationCap,
    href: "https://cdsimer.edu.in/medical-college",
  },
  {
    title: "Teaching Hospital",
    description:
      "Tertiary care, multi-speciality hospital enabling immersive clinical rotations and residencies.",
    icon: Hospital,
    href: "/academics/health-sciences/cdsimer/hospital",
  },
  {
    title: "Research & Innovation",
    description:
      "Clinical research institute translating curiosity into solutions for emerging healthcare challenges.",
    icon: Microscope,
    href: "https://cdsimer.edu.in/research/cri",
  },
  {
    title: "Central Laboratory",
    description:
      "Integrated biochemistry, pathology and microbiology diagnostics supporting precision medicine.",
    icon: Stethoscope,
    href: "https://cdsimer.edu.in/central-laboratory",
  },
  {
    title: "Medical Education Unit",
    description:
      "Faculty development, assessment innovation and patient-centred pedagogy to elevate teaching excellence.",
    icon: Compass,
    href: "https://cdsimer.edu.in/medical-education",
  },
  {
    title: "Life at CDSIMER",
    description:
      "Holistic campus life blending academic rigour, wellness, culture and leadership programmes.",
    icon: Sparkle,
    href: "/academics/health-sciences/cdsimer/life",
  },
];

const RESOURCES: Resource[] = [
  {
    title: "Enquire Now",
    description:
      "Reach admissions advisors for programme details, eligibility and counselling support.",
    href: "https://cdsimer.edu.in/enquiry",
    badge: "Admissions",
  },
  {
    title: "Events & Community Service",
    description:
      "Track conferences, CMEs, community outreach and campus engagements at DSU medical campus.",
    href: "https://cdsimer.edu.in/events",
    badge: "Events",
  },
  {
    title: "Library & Learning Resources",
    description:
      "Access physical and digital repositories that support evidence-based medical education.",
    href: "https://cdsimer.edu.in/library",
    badge: "Library",
  },
  {
    title: "Video Tour",
    description:
      "Experience the campus virtually through a curated video tour of CDSIMER.",
    href: "https://www.youtube.com/channel/UCaM-Ha3YDgcH203jPh0iReQ",
    badge: "Tour",
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

function PillarCard({ pillar }: { pillar: Pillar }) {
  const Icon = pillar.icon;
  const card = (
    <Card className="h-full rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-magenta/10 text-brand-magenta">
          <Icon className="h-5 w-5" />
        </span>
        <CardTitle className="text-base font-display">{pillar.title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-sm leading-relaxed text-foreground font-body">
          {pillar.description}
        </CardDescription>
      </CardContent>
    </Card>
  );

  if (!pillar.href) {
    return card;
  }

  if (pillar.href.startsWith("/")) {
    return (
      <Link
        to={pillar.href}
        className="block h-full transform transition-all duration-500 hover:-translate-y-1"
      >
        {card}
      </Link>
    );
  }

  return (
    <a
      href={pillar.href}
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

export default function MedicalEducationResearch() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative" id="top">
        <div className="h-[60vh] w-full overflow-hidden md:h-[70vh]">
          <img
            src={HERO_IMAGE}
            alt="Medical Education and Research"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-3">
            <div className="mb-3 inline-flex items-center rounded-full border border-brand-magenta/20 bg-brand-magenta/10 px-4 py-2 transform -translate-y-2">
              <Microscope className="mr-2 h-4 w-4 text-brand-magenta" />
              <span className="text-sm sm:text-base font-medium text-brand-magenta font-display">
                Dr. Chandramma Dayananda Sagar Institute of Medical Education &
                Research (CDSIMER)
              </span>
            </div>
            <h1 className="mb-4 font-display text-4xl leading-tight text-white md:text-6xl">
              Empowering Physicians Through Knowledge, Discovery & Healing
            </h1>
            <p className="max-w-3xl text-white/90 font-body text-lg">
              DSU's medical education and research ecosystem unites CDSIMER's
              smart campus, tertiary care hospital and translational research to
              elevate patient care and community wellbeing.
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
              <a href="https://cdsimer.edu.in" target="_blank" rel="noreferrer">
                <Button
                  variant="outline"
                  className="border-brand-magenta/40 hover:bg-brand-magenta/10"
                >
                  Visit CDSIMER Portal
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="highlights"
        className="bg-gradient-to-r from-brand-magenta/5 via-brand-orange/5 to-brand-blue/5 px-3 py-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <Badge
              className="bg-white/20 text-brand-magenta backdrop-blur"
              variant="secondary"
            >
              Highlights
            </Badge>
            <h2 className="mt-5 font-display text-3xl md:text-4xl">
              Smart Campus. Integrated Care. Translational Research.
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((highlight) => (
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
              One Ecosystem. Many Possibilities.
            </h2>
            <p className="mt-3 text-sm text-foreground font-body max-w-3xl mx-auto">
              From classroom to clinic, the Dr. Chandramma Dayananda Sagar
              Institute of Medical Education & Research (CDSIMER) unifies
              learning, care delivery and innovation for future-ready
              physicians.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {PILLARS.map((pillar) => (
              <PillarCard key={pillar.title} pillar={pillar} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="resources"
        className="bg-gradient-to-r from-brand-blue/5 to-brand-orange/5 px-3 py-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Resources
              </Badge>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">
                Plan Your Journey
              </h2>
              <p className="mt-3 text-sm text-foreground font-body">
                Access enquiry support, campus events, library resources and
                immersive tours to experience DSU's medical ecosystem.
              </p>
            </div>
            <a
              href="https://cdsimer.edu.in/enquiry"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
            >
              Contact CDSIMER
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
          <div className="rounded-3xl border border-brand-magenta/20 bg-brand-magenta/5 p-5">
            <h3 className="mb-3 font-display text-3xl">
              Shape the Future of Healthcare with DSU
            </h3>
            <p className="mb-3 text-foreground font-body">
              Join a medical community that blends compassionate care, research
              innovation and community service on one vibrant campus.
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
