import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Ambulance,
  BadgeCheck,
  BedDouble,
  Building2,
  CalendarDays,
  ChevronRight,
  Droplet,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Hospital,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Stethoscope,
  Syringe,
} from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
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
  "https://images.unsplash.com/photo-1584984360498-9b5eec6f5c86?q=80&w=2000&auto=format&fit=crop";

const HERO_STATS = [
  {
    label: "Bed Strength",
    value: "900+",
    description:
      "Tertiary-care beds expanding to 1,350 with step-down and specialty units",
    icon: BedDouble,
  },
  {
    label: "Emergency",
    value: "24×7",
    description:
      "Integrated trauma, emergency medicine and rapid response teams",
    icon: Ambulance,
  },
  {
    label: "Critical Care",
    value: "100",
    description:
      "Adult, neonatal and pediatric intensive care beds with advanced monitoring",
    icon: Activity,
  },
  {
    label: "Accreditations",
    value: "NABH & NABL",
    description: "Quality assured patient safety and laboratory excellence",
    icon: BadgeCheck,
  },
] satisfies Stat[];

const CARE_CONTINUUM = [
  {
    title: "Outpatient & Inpatient Journey",
    description:
      "Digitally-enabled OPDs and wards designed to offer compassionate care, seamless diagnostics and the right healing environment for every patient.",
    points: [
      "Unified OPD hub with specialty clinics and private examination rooms",
      "Electronic medical records and HIS that streamline consult-to-care",
      "Comfortable waiting areas with hydration points, guidance desks and wayfinding",
      "Dedicated wards for adults, pediatrics, labour and high-dependency support",
    ],
    icon: Stethoscope,
  },
  {
    title: "Accident & Emergency Services",
    description:
      "Round-the-clock emergency medicine supported by multidisciplinary specialists, fast diagnostics and ICU backup for time-critical care.",
    points: [
      "Red, yellow and green triage bays with rapid stabilization pathways",
      "On-site laboratory, radiology and blood bank operating day and night",
      "Emergency evacuation and ambulance coordination teams on standby",
      "Simulation-led drills preparing teams and learners for real-world response",
    ],
    icon: Ambulance,
  },
  {
    title: "Intensive & Critical Care",
    description:
      "100+ ICU beds across adult, neonatal, pediatric, surgical and isolation units led by intensivists and specially-trained nurses.",
    points: [
      "Central monitoring and ventilator support across modular ICU pods",
      "Dialysis, respiratory therapy and pain management services within reach",
      "Infection control protocols embedded through negative-pressure rooms",
      "Hands-on training opportunities for residents and allied health teams",
    ],
    icon: HeartPulse,
  },
] satisfies CareService[];

const SPECIALTY_SERVICES = [
  {
    title: "Anaesthesiology & Perioperative Care",
    description:
      "Fourteen modular operating theatres with HEPA filtration, modern anaesthesia workstations and motorised tables ready for advanced surgical care.",
    highlights: [
      "Live procedure streaming for academic mentorship",
      "Enhanced recovery pathways anchored in multimodal pain medicine",
      "Support for minimal access and robotic-assisted interventions",
    ],
    icon: Syringe,
  },
  {
    title: "Transfusion Medicine",
    description:
      "24/7 blood bank with component separation, apheresis and stringent donor stewardship to back complex procedures and emergencies.",
    highlights: [
      "Component therapy including platelets, cryo and FFP",
      "Pre-transfusion testing and hemovigilance protocols",
      "Community outreach and donor mobilisation initiatives",
    ],
    icon: Droplet,
  },
  {
    title: "Radiology & Imaging",
    description:
      "Comprehensive imaging suite delivering X-ray, ultrasonography, CT and interventional guidance with MRI capability on the roadmap.",
    highlights: [
      "Image-guided interventions supporting trauma and oncology",
      "Digital PACS workflow integrating wards and outpatient clinics",
      "Point-of-care ultrasound for emergency and critical care teams",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Laboratory Medicine",
    description:
      "Central laboratory spanning biochemistry, pathology, microbiology and molecular diagnostics with rapid-reporting support.",
    highlights: [
      "Clinical, histopathology and microbiology verticals in one hub",
      "Quality systems aligned with NABL benchmarks",
      "Research collaboration pipeline for translational discoveries",
    ],
    icon: FlaskConical,
  },
] satisfies SpecialtyService[];

const LEARNING_FEATURES = [
  {
    title: "Integrated Medical Education",
    description:
      "Competency-based MBBS, postgraduate and allied health training embed real patient scenarios with simulation and bedside teaching.",
    icon: GraduationCap,
  },
  {
    title: "Smart Campus Infrastructure",
    description:
      "Digitally synced lecture halls, skills labs and hospital information systems power evidence-based learning and care planning.",
    icon: Building2,
  },
  {
    title: "Community Outreach",
    description:
      "Community health programmes, rural health postings and public health drives extend the hospital's impact across 200+ villages.",
    icon: CalendarDays,
  },
] satisfies LearningFeature[];

const RESOURCE_LINKS = [
  {
    title: "Vision, Mission & Values",
    description:
      "Understand the guiding principles shaping CDSIMER's patient care philosophy.",
    href: "https://cdsimer.edu.in/images/hospital/CDSIMER_MVVQP.pdf",
    badge: "Overview",
  },
  {
    title: "Statutory Compliance",
    description:
      "Review statutory submissions and governance documents for the hospital.",
    href: "https://cdsimer.edu.in/images/hospital/CDSIMER-1.pdf",
    badge: "Governance",
  },
  {
    title: "MBBS Admission Process",
    description:
      "Track the latest MBBS admission timeline, eligibility and counselling flow.",
    href: "https://cdsimer.edu.in/images/Admission/Admission_Process_2025_as_on_15082025.pdf",
    badge: "Admissions",
  },
  {
    title: "PG Admission Process",
    description:
      "Understand postgraduate programme intake, seat matrix and key dates.",
    href: "https://cdsimer.edu.in/images/Admission/PG_Admission_Process_2024_24122024.pdf",
    badge: "Admissions",
  },
  {
    title: "Central Laboratory Overview",
    description:
      "Explore diagnostic capabilities, turnaround times and department workflows.",
    href: "https://cdsimer.edu.in/central-laboratory",
    badge: "Diagnostics",
  },
] satisfies ResourceLink[];

const CONTACT_INFO = [
  {
    label: "General Enquiry",
    value: "1800 425 9900",
    href: "tel:18004259900",
    icon: Phone,
  },
  {
    label: "MBBS Admission",
    value: "+91 6366885501",
    href: "tel:+916366885501",
    icon: Phone,
  },
  {
    label: "Email",
    value: "admissions.cdsimer@dsu.edu.in",
    href: "mailto:admissions.cdsimer@dsu.edu.in",
    icon: Mail,
  },
] satisfies ContactDetail[];

const CAMPUS_ADDRESS =
  "Dr. Chandramma Dayananda Sagar Institution for Medical Education & Research, Deverakaggalahalli, Kanakapura Road, Bengaluru South District, Karnataka — 562 112";

interface Stat {
  label: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

interface CareService {
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
}

interface SpecialtyService {
  title: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
}

interface LearningFeature {
  title: string;
  description: string;
  icon: LucideIcon;
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
          <p className="text-sm text-foreground font-body">
            {stat.label}
          </p>
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

function CareServiceCard({ service }: { service: CareService }) {
  const Icon = service.icon;
  return (
    <Card className="h-full border border-border/40 bg-card/60 backdrop-blur">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
            <Icon className="h-5 w-5" />
          </span>
          <CardTitle className="text-xl font-semibold font-display leading-tight">
            {service.title}
          </CardTitle>
        </div>
        <CardDescription className="mt-4 text-sm leading-relaxed text-foreground font-body">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-3 text-sm text-foreground font-body">
          {service.points.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <ChevronRight className="mt-1 h-4 w-4 text-brand-magenta" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function SpecialtyServiceCard({ service }: { service: SpecialtyService }) {
  const Icon = service.icon;
  return (
    <Card className="h-full border border-border/40 bg-card/50 backdrop-blur">
      <CardHeader>
        <div className="flex items-center gap-3">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange">
            <Icon className="h-5 w-5" />
          </span>
          <CardTitle className="text-lg font-semibold font-display leading-tight">
            {service.title}
          </CardTitle>
        </div>
        <CardDescription className="mt-4 text-sm leading-relaxed text-foreground font-body">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-2 text-sm text-foreground font-body">
          {service.highlights.map((item) => (
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

function LearningFeatureCard({ feature }: { feature: LearningFeature }) {
  const Icon = feature.icon;
  return (
    <Card className="h-full border border-border/40 bg-card/60 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-start gap-3">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-magenta/10 text-brand-magenta">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <CardTitle className="text-lg font-semibold font-display leading-tight">
            {feature.title}
          </CardTitle>
          <CardDescription className="mt-3 text-sm leading-relaxed text-foreground font-body">
            {feature.description}
          </CardDescription>
        </div>
      </CardHeader>
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
        <CardTitle className="mt-4 text-lg font-semibold font-display leading-tight">
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

export default function CDSIMERHospital() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative" id="top">
        <div className="h-[60vh] w-full overflow-hidden md:h-[75vh]">
          <img
            src={HERO_IMAGE}
            alt="CDSIMER Hospital campus"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">
              <Hospital className="mr-2 h-4 w-4 text-foreground" />
              <span className="text-sm font-medium text-foreground/90 font-display">
                CDSIMER Teaching Hospital
              </span>
            </div>
            <h1 className="max-w-3xl text-4xl font-display leading-tight text-foreground md:text-6xl">
              Compassionate Care, Advanced Infrastructure & Integrated Learning
            </h1>
            <p className="mt-5 max-w-2xl text-foreground/90 font-body text-lg">
              A NABH and NABL accredited tertiary-care destination serving
              Bengaluru South and surrounding communities with 24×7 emergency,
              speciality and critical care supported by DSU's medical education
              ecosystem.
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
              <a
                href="https://cdsimer.edu.in/images/Admission-Brochure.pdf"
                target="_blank"
                rel="noreferrer"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Button
                  variant="outline"
                  className="border-white/40 bg-white/10 text-foreground hover:bg-white hover:text-background"
                >
                  Download MBBS Brochure
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <Badge
              className="bg-white/20 text-foreground backdrop-blur"
              variant="secondary"
            >
              Hospital at a Glance
            </Badge>
            <h2 className="mt-6 text-3xl font-display text-foreground md:text-4xl">
              Holistic Healthcare for Patients, Learners and Communities
            </h2>
            <p className="mt-4 text-sm text-foreground font-body max-w-3xl mx-auto">
              CDSIMER Hospital complements the medical college with
              comprehensive services, digitally connected departments and
              compassionate teams who place patient safety and outcomes first.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {HERO_STATS.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <Badge className="bg-brand-magenta/15 text-brand-magenta">
              Continuum of Care
            </Badge>
            <h2 className="mt-5 text-3xl font-display md:text-4xl">
              Patient Journeys Designed for Every Need
            </h2>
            <p className="mt-4 text-sm text-foreground font-body max-w-3xl mx-auto">
              From first touch in the OPD to advanced intensive care, every
              service line is integrated with diagnostics, information systems
              and specialist teams.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {CARE_CONTINUUM.map((service) => (
              <CareServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-brand-magenta/5 via-brand-orange/5 to-brand-blue/5 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <Badge className="bg-brand-orange/15 text-brand-orange">
                Specialty Excellence
              </Badge>
              <h2 className="mt-4 text-3xl font-display md:text-4xl">
                Advanced Services Powering Clinical Outcomes
              </h2>
              <p className="mt-3 text-sm text-foreground font-body max-w-2xl">
                Operating theatres, diagnostics, laboratory sciences and
                transfusion medicine collaborate seamlessly to support
                high-acuity care and surgical specialities.
              </p>
            </div>
            <a
              href="https://cdsimer.edu.in/central-laboratory"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
            >
              Explore diagnostics
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {SPECIALTY_SERVICES.map((service) => (
              <SpecialtyServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[2fr,1.2fr] lg:items-center">
            <div>
              <Badge className="bg-brand-blue/15 text-brand-blue">
                Learning in Action
              </Badge>
              <h2 className="mt-5 text-3xl font-display md:text-4xl">
                Hospital-based Education & Community Impact
              </h2>
              <p className="mt-4 text-sm text-foreground font-body">
                Clinical postings, interdisciplinary simulations and community
                outreach connect learners with real-world health challenges
                while strengthening public health outcomes.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {LEARNING_FEATURES.map((feature) => (
                  <LearningFeatureCard key={feature.title} feature={feature} />
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Card className="overflow-hidden border border-border/40 bg-card/60 backdrop-blur">
                <CardHeader className="pb-2">
                  <Badge className="bg-brand-magenta/15 text-brand-magenta">
                    Watch
                  </Badge>
                  <CardTitle className="mt-4 text-lg font-display">
                    Inside CDSIMER Hospital
                  </CardTitle>
                  <CardDescription className="mt-2 text-sm text-foreground font-body">
                    Take a quick look at the campus, clinical environments and
                    simulation-backed learning in action.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <AspectRatio ratio={16 / 9}>
                    <iframe
                      src="https://www.youtube.com/embed/10yxPMitlJs"
                      title="CDSIMER Hospital Overview"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full rounded-lg border border-border/40"
                    />
                  </AspectRatio>
                </CardContent>
              </Card>
              <Card className="border border-border/40 bg-card/60 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <Badge className="bg-brand-orange/15 text-brand-orange">
                    Quick Access
                  </Badge>
                  <CardTitle className="mt-4 text-lg font-display">
                    Plan Your Visit
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3 text-sm text-foreground font-body">
                    <MapPin className="mt-1 h-5 w-5 text-brand-magenta" />
                    <span>{CAMPUS_ADDRESS}</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
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
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-gradient-to-r from-brand-magenta/5 via-brand-orange/5 to-brand-blue/5 px-6 py-16"
        id="resources"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <Badge className="bg-brand-magenta/15 text-brand-magenta">
              Key Resources
            </Badge>
            <h2 className="mt-5 text-3xl font-display md:text-4xl">
              Stay Informed & Connected
            </h2>
            <p className="mt-4 text-sm text-foreground font-body max-w-3xl mx-auto">
              Download admissions guidance, statutory information and laboratory
              resources to plan your journey with CDSIMER.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {RESOURCE_LINKS.map((resource) => (
              <ResourceCard key={resource.title} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      <footer className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <Card className="border border-border/40 bg-card/60 backdrop-blur">
            <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-display">
                  Ready to collaborate with CDSIMER Hospital?
                </h3>
                <p className="mt-2 max-w-2xl text-sm text-foreground font-body">
                  Reach out for partnerships, clinical rotations, research
                  collaborations or patient services. We are here to support
                  every step of your journey.
                </p>
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
                <a
                  href="https://api.whatsapp.com/send?phone=+916366885501"
                  target="_blank"
                  rel="noreferrer"
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta"
                >
                  <Button className="bg-brand-gradient text-foreground">
                    Chat on WhatsApp
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
