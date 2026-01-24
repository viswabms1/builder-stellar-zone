import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BadgeCheck,
  BedDouble,
  CalendarDays,
  ChevronRight,
  Dumbbell,
  GraduationCap,
  House,
  Mail,
  Music,
  Palette,
  ShieldCheck,
  Sparkle,
  Sprout,
  Users,
  UtensilsCrossed,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2000&auto=format&fit=crop";

const HERO_STATS = [
  {
    label: "Residential Students",
    value: "1200+",
    description:
      "Learners residing on campus with dedicated student services and mentorship.",
    icon: BedDouble,
  },
  {
    label: "Student Clubs",
    value: "45+",
    description:
      "Cultural, literary, innovation and service clubs cultivating leadership.",
    icon: Sparkle,
  },
  {
    label: "Sports Facilities",
    value: "15",
    description:
      "Indoor and outdoor arenas, courts and gyms for year-round fitness.",
    icon: Dumbbell,
  },
  {
    label: "Community Drives",
    value: "60+/year",
    description:
      "Health camps, outreach events and volunteering programmes led by students.",
    icon: Activity,
  },
] satisfies Stat[];

const LIFESTYLE_FEATURES = [
  {
    title: "Accommodation",
    description:
      "Purpose-built hostels foster a vibrant academic community with thoughtfully designed spaces for rest, study and socialising.",
    points: [
      "Separate secure residences for women and men with 24×7 professional security",
      "Well-furnished rooms, ample storage, high-speed connectivity and round-the-clock utilities",
      "Multi-cuisine dining halls with hygienic kitchens, RO water and dietician oversight",
      "Common lounges, reading rooms and recreation corners that encourage peer learning",
    ],
    icon: House,
    ctaLabel: "Visit Hostel Portal",
    ctaHref: "https://myposhtell.com",
  },
  {
    title: "Campus Dining",
    description:
      "A multi-cuisine food court, satellite cafes and hostel kitchens celebrate culinary diversity and nutrition.",
    points: [
      "Dedicated vegetarian and continental counters catering to varied preferences",
      "Nutrition-focused menus curated with input from clinical diet committees",
      "Cashless kiosks and extended hours for residents on clinical rotations",
      "Student feedback loops to continually elevate quality and experience",
    ],
    icon: UtensilsCrossed,
  },
  {
    title: "Hostel Support",
    description:
      "Residential life teams ensure wellbeing, mentoring and a comfortable environment for every scholar.",
    points: [
      "Resident wardens, counsellors and medical assistance available around the clock",
      "Structured study hours, quiet zones and collaborative project spaces",
      "Guest suites for visiting parents and guardians with prior booking",
      "Digital access control and CCTV coverage for holistic safety",
    ],
    icon: ShieldCheck,
    ctaLabel: "Access Hostel Services",
    ctaHref: "https://myposhtell.com",
  },
] satisfies LifestyleFeature[];

const WELLNESS_PROGRAMMES = [
  {
    title: "Sports & Fitness",
    description:
      "Outdoor stadiums, synthetic courts and an advanced gymnasium nurture athletic excellence and lifelong wellness.",
    highlights: [
      "Cricket ground, football field, volleyball and basketball courts",
      "Indoor arenas for badminton, table tennis, squash and yoga studios",
      "Certified trainers and sports medicine support for competitive squads",
      "Annual intra- and inter-college tournaments that celebrate team spirit",
    ],
    icon: Dumbbell,
  },
  {
    title: "Culture & Creativity",
    description:
      "Performing arts, theatre, music and literary circles provide a platform to showcase talent and celebrate diversity.",
    highlights: [
      "Flagship cultural festival featuring dance, drama, music and fine arts",
      "Student-led literary magazine and debate forums with interdisciplinary themes",
      "Workshops with visiting artistes, filmmakers and storytellers",
      "Dedicated rehearsal suites and open-air amphitheatre for performances",
    ],
    icon: Palette,
  },
  {
    title: "Community & Outreach",
    description:
      "Service-driven clubs collaborate with NGOs and local communities for public health, sustainability and education projects.",
    highlights: [
      "Health camps and awareness drives across 200+ villages in Bengaluru South",
      "Environmental sustainability initiatives, campus waste segregation and tree-planting",
      "Mentoring programmes for school students aspiring to healthcare careers",
      "Partnerships with national service schemes and charitable foundations",
    ],
    icon: Sprout,
  },
] satisfies Programme[];

const CAMPUS_CLUBS = [
  {
    title: "Scholars' Council",
    description:
      "Student government coordinating leadership, mentorship and academic support initiatives.",
    icon: GraduationCap,
  },
  {
    title: "Harmony Collective",
    description:
      "Music and performing arts troupe producing concerts, unplugged evenings and choral showcases.",
    icon: Music,
  },
  {
    title: "Pulse Warriors",
    description:
      "Sports and fitness club organising leagues, wellness challenges and endurance treks.",
    icon: Activity,
  },
  {
    title: "Health Innovators Forum",
    description:
      "Interdisciplinary thinkers tackling clinical challenges through design sprints and hackathons.",
    icon: BadgeCheck,
  },
  {
    title: "Literati Guild",
    description:
      "Creative writing, theatre and debate circle fostering persuasive storytelling and critical inquiry.",
    icon: Palette,
  },
  {
    title: "Humanitarian Alliance",
    description:
      "Volunteer corps managing outreach clinics, blood donation drives and inclusion programmes.",
    icon: Users,
  },
] satisfies Club[];

const GALLERY_IMAGES = [
  {
    title: "Basketball Arena",
    description:
      "Synthetic courts hosting inter-house leagues under stadium lighting.",
    href: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Cricket Ovals",
    description:
      "Expansive green outfield designed for friendly matches and coaching camps.",
    href: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Fitness Studio",
    description: "High-performance gym zone with trainers and recovery pods.",
    href: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Music Lounge",
    description:
      "Acoustic-ready space for jam sessions, open mics and unplugged evenings.",
    href: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Residences",
    description: "Modern hostels with landscaped courtyards and study hubs.",
    href: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Cultural Showcase",
    description: "Annual fest celebrating art, theatre and global narratives.",
    href: "https://images.unsplash.com/photo-1523878288860-7ad281611901?q=80&w=1600&auto=format&fit=crop",
  },
] satisfies GalleryImage[];

const RESOURCE_LINKS = [
  {
    title: "Hostel Portal",
    description:
      "Manage accommodation preferences, payments and services through the MyPoshtell platform.",
    href: "https://myposhtell.com",
    badge: "Residences",
  },
  {
    title: "Hostel Handbook",
    description:
      "Guidelines, schedules and amenities for residents across CDSIMER hostels.",
    href: "https://cdsimer.edu.in/images/hospital/CDSIMER-Hostel-Guidelines.pdf",
    badge: "Residences",
  },
  {
    title: "Sports Calendar",
    description:
      "Track upcoming leagues, coaching clinics and wellness challenges.",
    href: "https://cdsimer.edu.in/images/events/CDSIMER-Sports-Calendar.pdf",
    badge: "Sports",
  },
  {
    title: "Cultural Festival",
    description:
      "Discover flagship cultural celebrations, auditions and volunteering opportunities.",
    href: "https://cdsimer.edu.in/images/events/CDSIMER-Cultural-Fest.pdf",
    badge: "Culture",
  },
  {
    title: "Student Support Services",
    description:
      "Access counselling, mentoring and wellbeing resources available throughout the year.",
    href: "https://cdsimer.edu.in/images/support/CDSIMER-Student-Support.pdf",
    badge: "Wellbeing",
  },
  {
    title: "Community Outreach",
    description:
      "Review social impact projects, rural health postings and volunteering logistics.",
    href: "https://cdsimer.edu.in/images/outreach/CDSIMER-Outreach-Portfolio.pdf",
    badge: "Outreach",
  },
] satisfies ResourceLink[];

const CONTACT_INFO = [
  {
    label: "Student Affairs",
    value: "+91 88844 07479",
    href: "tel:+918884407479",
    icon: Users,
  },
  {
    label: "Hostel Office",
    value: "+91 63668 85501",
    href: "tel:+916366885501",
    icon: House,
  },
  {
    label: "Email",
    value: "studentlife.cdsimer@dsu.edu.in",
    href: "mailto:studentlife.cdsimer@dsu.edu.in",
    icon: Mail,
  },
] satisfies ContactDetail[];

interface Stat {
  label: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

interface LifestyleFeature {
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
  ctaLabel?: string;
  ctaHref?: string;
}

interface Programme {
  title: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
}

interface Club {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface GalleryImage {
  title: string;
  description: string;
  href: string;
}

interface ResourceLink {
  title: string;
  description: string;
  href: string;
  badge: string;
}

interface ContactDetail {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
}

function StatCard({ stat }: { stat: Stat }) {
  const Icon = stat.icon;
  return (
    <Card className="h-full border border-border/40 bg-card/60 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-start gap-4 pb-2">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-magenta/10 text-brand-magenta">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <CardTitle className="text-2xl font-semibold font-display">
            {stat.value}
          </CardTitle>
          <p className="text-sm text-foreground font-body">{stat.label}</p>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-sm leading-relaxed text-foreground font-body">
          {stat.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

function LifestyleFeatureCard({ feature }: { feature: LifestyleFeature }) {
  const Icon = feature.icon;
  return (
    <Card className="h-full border border-border/40 bg-card/60 backdrop-blur">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
            <Icon className="h-5 w-5" />
          </span>
          <CardTitle className="text-xl font-semibold font-display leading-tight">
            {feature.title}
          </CardTitle>
        </div>
        <CardDescription className="mt-4 text-sm leading-relaxed text-foreground font-body">
          {feature.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0 space-y-4">
        <ul className="space-y-3 text-sm text-foreground font-body">
          {feature.points.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <ChevronRight className="mt-1 h-4 w-4 text-brand-magenta" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        {feature.ctaHref && feature.ctaLabel && (
          <a
            href={feature.ctaHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
          >
            {feature.ctaLabel}
            <ChevronRight className="h-4 w-4" />
          </a>
        )}
      </CardContent>
    </Card>
  );
}

function ProgrammeCard({ programme }: { programme: Programme }) {
  const Icon = programme.icon;
  return (
    <Card className="h-full border border-border/40 bg-card/50 backdrop-blur">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange/15 text-brand-orange">
            <Icon className="h-5 w-5" />
          </span>
          <CardTitle className="text-lg font-semibold font-display leading-tight">
            {programme.title}
          </CardTitle>
        </div>
        <CardDescription className="mt-4 text-sm leading-relaxed text-foreground font-body">
          {programme.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-2 text-sm text-foreground font-body">
          {programme.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <ChevronRight className="mt-1 h-4 w-4 text-brand-magenta" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function ClubCard({ club }: { club: Club }) {
  const Icon = club.icon;
  return (
    <Card className="h-full border border-border/40 bg-card/60 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-start gap-3">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-magenta/10 text-brand-magenta">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <CardTitle className="text-lg font-semibold font-display leading-tight">
            {club.title}
          </CardTitle>
          <CardDescription className="mt-3 text-sm leading-relaxed text-foreground font-body">
            {club.description}
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}

function GalleryCard({ image }: { image: GalleryImage }) {
  return (
    <Card className="group relative h-72 overflow-hidden border border-border/40 bg-card/40 backdrop-blur-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-magenta/10">
      <img
        src={image.href}
        alt={image.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-foreground">
        <h3 className="text-lg font-semibold font-display">{image.title}</h3>
        <p className="mt-2 text-sm text-foreground/80 font-body">
          {image.description}
        </p>
      </div>
    </Card>
  );
}

function ResourceCard({ resource }: { resource: ResourceLink }) {
  return (
    <Card className="h-full border border-border/40 bg-card/60 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <Badge className="bg-brand-magenta/15 text-brand-magenta">
          {resource.badge}
        </Badge>
        <CardTitle className="mt-4 text-lg font-display leading-tight">
          {resource.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-0">
        <CardDescription className="text-sm leading-relaxed text-foreground font-body">
          {resource.description}
        </CardDescription>
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

export default function CDSIMERLife() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative" id="top">
        <div className="h-[60vh] w-full overflow-hidden md:h-[75vh]">
          <img
            src={HERO_IMAGE}
            alt="Life at CDSIMER"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-3">
            <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">
              <Sparkle className="mr-2 h-4 w-4 text-foreground" />
              <span className="text-sm font-medium text-foreground/90 font-display">
                Life at CDSIMER
              </span>
            </div>
            <h1 className="max-w-3xl text-4xl font-display leading-tight text-white md:text-6xl">
              Discover Community, Culture & Wellbeing on a Vibrant Medical
              Campus
            </h1>
            <p className="mt-5 max-w-2xl text-white/90 font-body text-lg">
              From dynamic hostels and multi-cuisine dining to festivals, sports
              and outreach, CDSIMER curates experiences that nurture
              compassionate physicians and lifelong learners.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://cdsimer.edu.in/enquiry"
                target="_blank"
                rel="noreferrer"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Button className="bg-brand-gradient text-foreground">
                  Enquire Now
                </Button>
              </a>
              <Link
                to="/academics/health-sciences/cdsimer/hospital"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Button
                  variant="outline"
                  className="border-white/40 bg-white/10 text-foreground hover:bg-white hover:text-background"
                >
                  Explore Hospital Services
                </Button>
              </Link>
              <a
                href="https://myposhtell.com"
                target="_blank"
                rel="noreferrer"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Button className="bg-orange-500 text-foreground hover:bg-orange-500/90">
                  Hostel Portal
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5 px-3 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center">
            <Badge
              className="bg-white/20 text-foreground backdrop-blur"
              variant="secondary"
            >
              Campus Highlights
            </Badge>
            <h2 className="mt-6 text-3xl font-display text-foreground md:text-4xl">
              A Holistic Residential Experience Built Around You
            </h2>
            <p className="mt-4 text-sm text-foreground font-body max-w-3xl mx-auto">
              Purposeful spaces, supportive communities and wellness ecosystems
              empower students to balance rigorous academics with meaningful
              life experiences.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {HERO_STATS.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-3 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center">
            <Badge className="bg-brand-magenta/15 text-brand-magenta">
              Residential Life
            </Badge>
            <h2 className="mt-5 text-3xl font-display md:text-4xl">
              Live, Learn and Thrive Together
            </h2>
            <p className="mt-4 text-sm text-foreground font-body max-w-3xl mx-auto">
              Connected residences, dining experiences and support services
              create a nurturing home away from home for future healthcare
              leaders.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {LIFESTYLE_FEATURES.map((feature) => (
              <LifestyleFeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-brand-magenta/5 via-brand-orange/5 to-brand-blue/5 px-3 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <Badge className="bg-brand-orange/15 text-brand-orange">
                Programmes & Engagement
              </Badge>
              <h2 className="mt-4 text-3xl font-display md:text-4xl">
                Wellness, Creativity & Social Impact
              </h2>
              <p className="mt-3 text-sm text-foreground font-body max-w-2xl">
                Sports academies, cultural showcases and community outreach
                immerse every CDSIMER student in holistic growth and responsible
                citizenship.
              </p>
            </div>
            <a
              href="https://www.youtube.com/channel/UCaM-Ha3YDgcH203jPh0iReQ"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
            >
              Watch campus life
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {WELLNESS_PROGRAMMES.map((programme) => (
              <ProgrammeCard key={programme.title} programme={programme} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-3 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center">
            <Badge className="bg-brand-blue/15 text-brand-blue">
              Clubs & Societies
            </Badge>
            <h2 className="mt-5 text-3xl font-display md:text-4xl">
              Lead, Perform, Serve and Innovate
            </h2>
            <p className="mt-4 text-sm text-foreground font-body max-w-3xl mx-auto">
              Join multidisciplinary communities that celebrate curiosity,
              service and collaboration across the CDSIMER campus.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {CAMPUS_CLUBS.map((club) => (
              <ClubCard key={club.title} club={club} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-brand-magenta/5 via-brand-orange/5 to-brand-blue/5 px-3 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center">
            <Badge className="bg-brand-magenta/15 text-brand-magenta">
              Campus Moments
            </Badge>
            <h2 className="mt-5 text-3xl font-display md:text-4xl">
              Snapshots from a Dynamic Campus
            </h2>
            <p className="mt-4 text-sm text-foreground font-body max-w-3xl mx-auto">
              Explore everyday scenes that reflect camaraderie, creativity and
              the pursuit of excellence across CDSIMER.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {GALLERY_IMAGES.map((image) => (
              <GalleryCard key={image.title} image={image} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-3 py-8" id="resources">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Key Resources
              </Badge>
              <h2 className="mt-4 text-3xl font-display md:text-4xl">
                Plan Your Life at CDSIMER
              </h2>
              <p className="mt-3 text-sm text-foreground font-body">
                Download handbooks, calendars and support resources to prepare
                for a transformative residential journey.
              </p>
            </div>
            <a
              href="https://cdsimer.edu.in/enquiry"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
            >
              Contact student services
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {RESOURCE_LINKS.map((resource) => (
              <ResourceCard key={resource.title} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      <footer className="px-3 pb-20">
        <div className="mx-auto max-w-7xl">
          <Card className="border border-border/40 bg-card/60 backdrop-blur">
            <CardContent className="flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-display">
                  Ready to immerse yourself in life at CDSIMER?
                </h3>
                <p className="mt-2 max-w-2xl text-sm text-foreground font-body">
                  Connect with the Student Affairs team for accommodation,
                  clubs, cultural festivals and wellbeing initiatives tailored
                  to your goals.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {CONTACT_INFO.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="inline-flex items-center gap-2 rounded-full border border-brand-magenta/30 px-4 py-2 text-sm text-brand-magenta transition hover:bg-brand-magenta/10"
                    >
                      <item.icon className="h-4 w-4" />
                      <span className="font-medium font-display">
                        {item.label}:
                      </span>
                      <span className="font-body">{item.value}</span>
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/academics/health-sciences/cdsimer"
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta"
                >
                  <Button
                    variant="outline"
                    className="border-brand-magenta/40 hover:bg-brand-magenta/10"
                  >
                    Visit CDSIMER Overview
                  </Button>
                </Link>
                <Link
                  to="/academics/health-sciences/cdsimer/hospital"
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta"
                >
                  <Button className="bg-brand-gradient text-foreground">
                    Explore Hospital Services
                  </Button>
                </Link>
                <a
                  href="https://myposhtell.com"
                  target="_blank"
                  rel="noreferrer"
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta"
                >
                  <Button className="bg-orange-500 text-foreground hover:bg-orange-500/90">
                    Hostel Portal
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </footer>
    </div>
  );
}
