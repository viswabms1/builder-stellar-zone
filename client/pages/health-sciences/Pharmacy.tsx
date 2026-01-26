import { useState, useRef, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DepartmentNoticeBoard } from "@/components/DepartmentNoticeBoard";
import {
  Sparkles,
  GraduationCap,
  BookOpen,
  Pill,
  FlaskConical,
  Users,
  Trophy,
  Microscope,
  Award,
  ChevronRight,
  Volume2,
  VolumeX,
  Download,
  Heart,
  Stethoscope,
} from "lucide-react";
import { DeanSection, type DeanInfo } from "@/components/DeanSection";
import { useAutoMuteOnScroll } from "@/hooks/useAutoMuteOnScroll";

const DEAN_INFO: DeanInfo = {
  name: "Dr. MAYUR YERGERI CHANDRASEKHARAPPA",
  title: "M. Pharm, Ph.D.",
  position: "Principal, College of Pharmaceutical Sciences",
  photo:
    "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fcd86871d1f5644d8a1ded621ddadb75b?format=webp&width=800&height=1200",
  message: [
    "The College of Pharmaceutical Sciences at Dayananda Sagar University envisions becoming a global leader in pharmaceutical education, research, and innovation, aligned with the future needs of India and the world. Our mission is to nurture a new generation of pharmaceutical professionals who are equipped with cutting-edge knowledge, ethical values, and a commitment to addressing the evolving healthcare challenges of the 21st century.",
    "In the coming decades, India will face unprecedented demands in healthcare, driven by population growth, aging demographics, and the rise of chronic diseases. The College of Pharmaceutical Sciences aims to be at the forefront of this transformation by fostering interdisciplinary research, promoting drug discovery, and developing affordable, sustainable healthcare solutions. We will focus on emerging areas such as personalized medicine, nanotechnology, biologics, and artificial intelligence in drug development, ensuring our graduates are prepared to lead in a rapidly changing industry.",
    "Our vision emphasizes collaboration with industry, government, and global academic institutions to bridge the gap between academia and real-world applications. By establishing state-of-the-art research facilities and pharma startups, we will empower students and faculty to innovate and translate research into impactful products and therapies. We also aim to address India's need for self-reliance in pharmaceuticals by promoting indigenous drug development and reducing dependency on imports.",
    "Ethics and social responsibility will remain at the core of our curriculum, ensuring that our graduates not only excel in their careers but also contribute to the well-being of society. We envision a future where the DSU's College of Pharmaceutical Sciences is recognized as a hub of excellence, driving advancements in healthcare and improving the quality of life for millions. Through our commitment to education, research, and innovation, we aspire to play a pivotal role in shaping a healthier and a sustainable future for India and the world.",
    "Dr. MAYUR YERGERI CHANDRASEKHARAPPA",
    "Principal",
  ],
  borderColor: "border-brand-blue/20",
  bgColor: "bg-brand-blue/5",
};

type ProgramCard = {
  name: string;
  area: string;
  description: string;
  image: string;
  link: string;
  highlights: string[];
  overlay: string;
  badgeClass: string;
  panelClass: string;
  featured?: boolean;
};

const UG_PROGRAM_CARDS: ProgramCard[] = [
  {
    name: "B.Pharm",
    area: "Undergraduate",
    description:
      "4-Year Program. Comprehensive pharmaceutical education integrating drug discovery, formulation, and patient care.",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/health-sciences/b-pharm",
    highlights: ["4 Years", "Industry Training", "Research Labs"],
    overlay:
      "bg-gradient-to-br from-brand-blue/80 via-black/75 to-black/60 mix-blend-multiply",
    badgeClass:
      "bg-brand-blue/25 text-foreground/90 border border-white/30 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
    featured: true,
  },
];

const PG_PROGRAM_CARDS: ProgramCard[] = [
  {
    name: "Pharm.D",
    area: "Postgraduate",
    description:
      "6-Year Doctor of Pharmacy program preparing students for advanced patient care, clinical research, and pharmaceutical consultancy roles.",
    image:
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/health-sciences/pharm-d",
    highlights: ["6 Years", "Clinical Practice", "Patient Care", "Research"],
    overlay:
      "bg-gradient-to-br from-brand-magenta/80 via-black/75 to-black/60 mix-blend-multiply",
    badgeClass:
      "bg-brand-magenta/25 text-foreground/90 border border-white/30 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
    featured: true,
  },
  {
    name: "M.Pharm",
    area: "Postgraduate",
    description:
      "2-Year Master of Pharmacy program with specializations in Pharmaceutics, Pharmacology, and Regulatory Affairs.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop",
    link: "/academics/health-sciences/m-pharm",
    highlights: [
      "2 Years",
      "Pharmaceutics",
      "Pharmacology",
      "Regulatory Affairs",
    ],
    overlay:
      "bg-gradient-to-br from-brand-blue/75 via-black/70 to-black/55 mix-blend-multiply",
    badgeClass:
      "bg-brand-blue/30 text-foreground/90 border border-white/25 backdrop-blur",
    panelClass: "bg-black/55 backdrop-blur-xl",
    featured: true,
  },
];

function ProgramCardComponent({ program }: { program: ProgramCard }) {
  const isInternal = program.link.startsWith("/");
  const wrapperClasses = `group block h-full rounded-none ${
    program.featured ? "lg:col-span-6" : "lg:col-span-4"
  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background`;
  const overlayClasses =
    program.overlay ??
    "bg-gradient-to-t from-black/85 via-black/50 to-transparent";
  const badgeClasses = `inline-flex items-center gap-2 rounded-none px-3 py-1 text-xs uppercase tracking-wide ${
    program.badgeClass ?? "bg-white/15 text-foreground/80 backdrop-blur"
  }`;
  const panelClasses = `rounded-none border border-white/15 p-6 shadow-[0_25px_80px_-35px_rgba(255,255,255,0.45)] transition-colors duration-500 ${
    program.panelClass ?? "bg-black/60 backdrop-blur-lg"
  }`;

  const content = (
    <div
      className={`relative flex h-full flex-col justify-end overflow-hidden rounded-none border border-white/10 bg-black/10 backdrop-blur-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-blue/20 ${
        program.featured ? "min-h-[360px]" : "min-h-[300px]"
      }`}
    >
      <img
        src={program.image}
        alt={program.name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className={`absolute inset-0 ${overlayClasses}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      <div className={`absolute left-6 top-6 ${badgeClasses}`}>
        {program.area}
      </div>
      <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
        <div className={panelClasses}>
          <div className="space-y-4">
            <div>
              <h3 className="font-display text-2xl leading-tight text-white">
                {program.name}
              </h3>
              <p className="mt-3 text-sm text-white/85 font-body">
                {program.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {program.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-white/85"
                >
                  {item}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-colors group-hover:text-brand-blue">
              Explore programme
              <ChevronRight className="h-4 w-4 transition-colors group-hover:text-brand-blue" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  if (isInternal) {
    return (
      <RouterLink to={program.link} className={wrapperClasses}>
        {content}
      </RouterLink>
    );
  }

  return (
    <a
      href={program.link}
      target="_blank"
      rel="noreferrer"
      className={wrapperClasses}
    >
      {content}
    </a>
  );
}

function HeroSection() {
  const specializations = [
    { icon: Pill, label: "B.Pharm" },
    { icon: FlaskConical, label: "M.Pharm" },
    { icon: Microscope, label: "Pharm.D" },
    { icon: Award, label: "Research" },
    { icon: Heart, label: "Clinical Practice" },
    { icon: Stethoscope, label: "Industry Training" },
  ];

  return (
    <>
      <div className="hero-video-container relative flex items-center justify-start">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F2770dad2caf847da87a223aa1d2f908e?format=webp&width=800&height=1200"
          alt="Pharmacy Students in Laboratory"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            objectPosition: "center center",
            filter: "brightness(0.8) contrast(1.1)",
          }}
        />

        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />

        <div className="hero-title-inside absolute bottom-0 left-0 right-0 z-20 flex items-end justify-start p-3 sm:p-6 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 rounded-full border border-white/20 mb-4 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white font-display">
                College of Pharmaceutical Sciences
              </span>
            </div>
            <p className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-1 sm:mb-4 uppercase tracking-widest font-display">
              Pharmaceutical Sciences
            </p>
            <h1 className="text-xs sm:text-base md:text-base text-white/80 mb-2 sm:mb-6 leading-tight font-display">
              Innovation in Drug Discovery & Patient Care
            </h1>
            <div className="mt-4 sm:mt-6 flex flex-wrap gap-1 sm:gap-2">
              {specializations.map((s, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 px-2 py-0.5 sm:gap-2 sm:px-3 sm:py-1 rounded-full bg-white/10 text-white text-xs backdrop-blur"
                >
                  <s.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> {s.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-background relative max-w-7xl mx-auto px-3 w-full py-6 sm:py-8">
        <div className="hero-title-outside max-w-2xl">
          <p className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-1 sm:mb-4 uppercase tracking-widest font-display">
            Pharmaceutical Sciences
          </p>
          <h1 className="text-xs sm:text-base md:text-base text-foreground/80 mb-2 sm:mb-6 leading-tight font-display">
            Innovation in Drug Discovery & Patient Care
          </h1>
        </div>

        <div className="flex flex-row gap-2 sm:gap-4">
          <a
            href="https://admissions.dsu.edu.in/"
            target="_blank"
            rel="noreferrer"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Button
              size="sm"
              className="sm:size-lg bg-white hover:bg-white/90 text-brand-orange hover:text-brand-orange/80 px-4 sm:px-8 py-2 sm:py-6 text-xs sm:text-base font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
            >
              Apply Now
              <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <a
            href="https://dsu.edu.in/virtual-tour/"
            target="_blank"
            rel="noreferrer"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Button
              size="sm"
              className="sm:size-lg bg-white hover:bg-white/90 text-brand-orange hover:text-brand-orange/80 px-4 sm:px-8 py-2 sm:py-6 text-xs sm:text-base font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
            >
              Virtual Tour
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}

export default function Pharmacy() {
  const highlights = [
    "Comprehensive B.Pharm, M.Pharm, and Pharm.D programs",
    "State-of-the-art pharmaceutical laboratories with advanced equipment",
    "Industry internships at leading pharmaceutical companies",
    "Research opportunities in drug discovery and development",
    "Exposure to GMP standards, regulatory compliance, and clinical practice",
    "Mentorship by experienced pharmaceutical scientists and industry experts",
  ];

  const careers = [
    "B.Pharm graduates: Pharmacist → Senior Pharmacist → Pharmacy Manager → Chief Pharmacist",
    "M.Pharm graduates: Research Scientist → Senior Scientist → Principal Scientist in pharma R&D",
    "Pharm.D graduates: Clinical Pharmacist → Clinical Coordinator → Director of Pharmacy Services",
    "Quality Assurance & Regulatory Affairs roles in pharmaceutical industry",
    "Hospital and community pharmacy practice opportunities",
    "International career opportunities in pharmaceutical industry (₹15-35 LPA+)",
    "Excellent placement record with leading pharma companies, hospitals, and research institutions",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative" id="top">
        <HeroSection />
      </section>

      {/* Dean's Message Section */}
      <DeanSection dean={DEAN_INFO} />

      {/* Programs Section */}
      <section id="programs" className="relative overflow-hidden px-3 py-8">
        <div
          className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-brand-blue/20 via-transparent to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl">
                Programs Offered
              </h2>
              <p className="mt-3 text-sm text-foreground font-body max-w-2xl">
                Professional pharmaceutical education: B.Pharm (Undergraduate),
                Pharm.D and M.Pharm (Postgraduate) with industry exposure,
                research, and clinical practice
              </p>
            </div>
          </div>

          {/* Undergraduate Programs */}
          <div className="mb-12">
            <div className="mb-6">
              <Badge className="bg-brand-blue/15 text-brand-blue mb-2">
                Undergraduate Program
              </Badge>
              <h3 className="font-display text-2xl">B.Pharm</h3>
            </div>
            <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-12">
              {UG_PROGRAM_CARDS.map((program) => (
                <ProgramCardComponent key={program.name} program={program} />
              ))}
            </div>
          </div>

          {/* Postgraduate Programs */}
          <div className="mb-12">
            <div className="mb-6">
              <Badge className="bg-brand-magenta/15 text-brand-magenta mb-2">
                Postgraduate Programs
              </Badge>
              <h3 className="font-display text-2xl">Pharm.D & M.Pharm</h3>
            </div>
            <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-12">
              {PG_PROGRAM_CARDS.map((program) => (
                <ProgramCardComponent key={program.name} program={program} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Pharmacy */}
      <section className="px-3 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Why Choose Pharmacy at DSU?
            </h2>
            <p className="text-foreground/80 font-body max-w-3xl mb-8">
              Our B.Pharm, M.Pharm, and Pharm.D programs prepare you to be a
              skilled, innovative pharmaceutical professional with strong
              technical knowledge, clinical expertise, and ethical
              responsibility.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {highlights.map((highlight, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 rounded-lg border border-brand-blue/20 bg-brand-blue/5"
              >
                <Pill className="h-6 w-6 text-brand-blue flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground font-body">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="px-3 py-8 bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Career Pathways & Placements
            </h2>
            <p className="text-foreground/80 font-body max-w-3xl">
              Our B.Pharm, M.Pharm, and Pharm.D graduates are highly
              sought-after in pharmaceutical industry, hospitals, research
              institutions, and regulatory bodies. Excellent placement record
              with leading organizations.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {careers.map((career, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <div className="flex items-start gap-3">
                  <Trophy className="h-5 w-5 text-brand-orange flex-shrink-0 mt-1" />
                  <p className="text-sm text-foreground font-body">{career}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section
        id="related-resources"
        className="bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5 px-3 py-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl">
              Explore More at DSU Pharmacy
            </h2>
            <p className="mt-3 text-sm text-foreground font-body">
              Discover our research labs, industry partnerships, placements and
              admission pathways
            </p>
          </div>
          <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-5">
            <RouterLink
              to="/academics/health-sciences/pharmacy/faculty"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 flex items-center justify-center">
                  <Users className="h-12 w-12 text-brand-blue/70 group-hover:text-brand-blue transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-blue transition-colors">
                    Faculty & Staff
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    Meet our dedicated pharmaceutical faculty and researchers
                  </p>
                </CardContent>
              </Card>
            </RouterLink>

            <a
              href="/centre-of-excellence"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 flex items-center justify-center">
                  <Award className="h-12 w-12 text-brand-blue/70 group-hover:text-brand-blue transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-blue transition-colors">
                    Research Labs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    State-of-the-art pharmaceutical research laboratories
                  </p>
                </CardContent>
              </Card>
            </a>

            <a
              href="/research"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-magenta/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-magenta/20 to-brand-magenta/10 flex items-center justify-center">
                  <Microscope className="h-12 w-12 text-brand-magenta/70 group-hover:text-brand-magenta transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-magenta transition-colors">
                    Research & Innovation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    Drug discovery and pharmaceutical research initiatives
                  </p>
                </CardContent>
              </Card>
            </a>

            <a
              href="/placements"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-orange/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-orange/20 to-brand-orange/10 flex items-center justify-center">
                  <GraduationCap className="h-12 w-12 text-brand-orange/70 group-hover:text-brand-orange transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-orange transition-colors">
                    Placements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    Career pathways with leading pharmaceutical companies
                  </p>
                </CardContent>
              </Card>
            </a>

            <a
              href="https://admissions.dsu.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 flex items-center justify-center">
                  <Pill className="h-12 w-12 text-brand-blue/70 group-hover:text-brand-blue transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-blue transition-colors">
                    Admissions
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p className="text-sm text-foreground/80 font-body">
                    Join DSU Pharmacy and advance pharmaceutical innovation
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-brand-blue group-hover:text-brand-blue/80 transition-colors">
                    Apply Now
                    <ChevronRight className="h-3 w-3" />
                  </span>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Contact & Resources */}
      <section className="px-3 py-8">
        <div className="mx-auto grid max-w-5xl items-start gap-4 lg:grid-cols-2">
          <Card className="rounded-none border border-brand-blue/20 bg-brand-blue/5">
            <CardHeader>
              <CardTitle className="font-display">
                Contact & Leadership
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 text-sm font-body text-foreground">
              <div>
                <div className="text-foreground/70 text-xs uppercase tracking-wide">
                  Email
                </div>
                <div className="font-medium text-foreground">
                  pharmacy@dsu.edu.in
                </div>
              </div>
              <div>
                <div className="text-foreground/70 text-xs uppercase tracking-wide">
                  Phone
                </div>
                <div className="font-medium text-foreground">
                  +91-80-49092933
                </div>
              </div>
              <div>
                <div className="text-foreground/70 text-xs uppercase tracking-wide">
                  Campus Address
                </div>
                <div className="font-medium text-foreground">
                  Kanakapura Road, Bengaluru, Karnataka
                </div>
              </div>
              <div>
                <div className="text-foreground/70 text-xs uppercase tracking-wide">
                  Office Hours
                </div>
                <div className="font-medium text-foreground">
                  Mon–Fri, 9:00 AM – 5:30 PM
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-none border border-brand-magenta/20 bg-brand-magenta/5">
            <CardHeader>
              <CardTitle className="font-display">More Resources</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm font-body">
              <a href="/eligibility" className="hover:text-brand-blue">
                Programs & Fees
              </a>
              <a href="/faculty-directory" className="hover:text-brand-blue">
                Faculty Directory
              </a>
              <a href="/research" className="hover:text-brand-blue">
                Research Projects
              </a>
              <a href="/placements" className="hover:text-brand-blue">
                Placements & Careers
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <DepartmentNoticeBoard school="Health Sciences" department="Pharmacy" />
    </div>
  );
}
