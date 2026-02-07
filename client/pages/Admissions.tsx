import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";

import AdmissionCarouselNew from "@/components/AdmissionCarouselNew";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  BookOpen,
  Building,
  CalendarCheck,
  Download,
  ExternalLink,
  Flag,
  Globe,
  GraduationCap,
  Headphones,
  Info,
  Layers,
  Laptop,
  ListChecks,
  Mail,
  MapPin,
  MessageSquare,
  Mic,
  PhoneCall,
  School,
  Sparkles,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type QuickLink = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
  featured?: boolean;
};

type AdmissionTrack = {
  title: string;
  description: string;
  highlights: string[];
  href: string;
  icon: LucideIcon;
  ctaLabel: string;
};

type BrochureResource = {
  title: string;
  subtitle: string;
  href: string;
};

type HelplineGroup = {
  label: string;
  entries: string[];
};

type RegionalContact = {
  region: string;
  contact: string;
};

type ChatMessage = {
  sender: string;
  text: string;
};

const admissionCodes = [
  "Comed-K Code: E182",
  "Uni-GAUGE Code: UNI-010",
  "CET Code: DSU-E240",
  "MCA Code: C520MC",
];

const carouselImages = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ffce3e67bcc814c1aabf809c71102e1cc?format=webp&width=800",
    alt: "B.Tech JEE MAIN Admissions",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fcb5e92e25b634bdcaa9de2b0b31ec415?format=webp&width=800",
    alt: "Academic Excellence in Global Environment",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fac9ce7ef53604970818f60f8a54c7350?format=webp&width=800",
    alt: "Programs at DSU City Innovation Campus",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F73a8c29a2bec44baa4271feceae5c5e2?format=webp&width=800",
    alt: "B.Tech Admissions 2026-27",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fe5b128a011904d638fd0f853cafb7acc?format=webp&width=800",
    alt: "Admissions Open for NRI/Foreign Nationals",
  },
];

const quickLinks: QuickLink[] = [
  {
    title: "Programs, Eligibility & Fee Structure",
    description:
      "Review intake, qualifying exams, and detailed fee statements for every course.",
    href: "/eligibility",
    icon: BookOpen,
    external: false,
    featured: true,
  },
  {
    title: "Admission Closing Dates",
    description:
      "Track key deadlines for applications, counseling, and confirmation.",
    href: "/admissions/closing-dates",
    icon: CalendarCheck,
    external: false,
  },
  {
    title: "Direct Admissions – 2026",
    description:
      "Secure your seat through the direct admissions window and confirm early.",
    href: "https://admissions.dsu.edu.in/?utm_source=Admissions%20Tab&utm_medium=Website&utm_campaign=WS-Admissions%202024",
    icon: Sparkles,
  },
  {
    title: "Hostel Fee",
    description:
      "Plan residential life with the latest accommodation and dining charges.",
    href: "https://www.dsu.edu.in/images/PDF/Hostel_Fee_2025_1.pdf",
    icon: Building,
  },
  {
    title: "FAQs",
    description:
      "Find detailed answers to eligibility, document, and process queries.",
    href: "https://www.dsu.edu.in/images/Admission/FAQs-DSAT-DSU-2020.pdf",
    icon: Info,
  },
  {
    title: "Admission Helpline",
    description:
      "Reach experienced counselors for personalized admission assistance.",
    href: "https://www.dsu.edu.in/admission/helpline",
    icon: PhoneCall,
  },
  {
    title: "International Admissions",
    description:
      "Dedicated guidance for foreign nationals, NRIs, and PIO applicants.",
    href: "https://dsu.edu.in/international/",
    icon: Globe,
    external: true,
  },
  {
    title: "Online Degree Programs",
    description:
      "Explore flexible Online Degree Programs with industry-aligned curricula.",
    href: "https://apply.dsuonline.com/",
    icon: Laptop,
  },
];

const admissionTracks: AdmissionTrack[] = [
  {
    title: "Direct Admissions – 2026",
    description:
      "Utilize the direct admissions channel with spot counseling support for eligible candidates.",
    highlights: [
      "Ideal for high performers seeking early confirmation",
      "Upload transcripts and identity proof for verification",
      "Confirm your seat with the prescribed fee payment",
    ],
    href: "https://admissions.dsu.edu.in/?utm_source=Admissions%20Tab&utm_medium=Website&utm_campaign=WS-Admissions%202024",
    icon: Layers,
    ctaLabel: "Begin Direct Application",
  },
  {
    title: "International Admissions",
    description:
      "Dedicated advisors support foreign nationals, NRIs, and PIO applicants with documentation and visas.",
    highlights: [
      "Tailored onboarding for global applicants",
      "Support for visa letters and equivalence certificates",
      "Scholarship consideration for exceptional profiles",
    ],
    href: "https://dsu.edu.in/international/",
    icon: Globe,
    ctaLabel: "Explore International Pathway",
    external: true,
  },
  {
    title: "Online Degree Programs & Professional Programs",
    description:
      "Earn degrees remotely with live mentorship, digital labs, and career-aligned curricula.",
    highlights: [
      "UGC-entitled, NAAC A+ institution",
      "Self-paced learning with weekend live sessions",
      "Placement and internship assistance",
    ],
    href: "https://apply.dsuonline.com/",
    icon: Laptop,
    ctaLabel: "Discover Online Degree Programs",
  },
];

const brochureResources: BrochureResource[] = [
  {
    title: "City Innovation Campus Programs",
    subtitle: "Brochure 2025",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2025/DSU_City_innovation_Campus_Programs_2025.pdf",
  },
  {
    title: "Main Campus Programs",
    subtitle: "Brochure 2025",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2025/DSU_Main_Campus_Programs_2025.pdf",
  },
  {
    title: "School of Engineering",
    subtitle: "Brochure 2025",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2025/SoE_Brochure_2025.pdf",
  },
  {
    title: "MBA Programs",
    subtitle: "Brochure 2025",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2025/MBA_brochure_2025.pdf",
  },
  {
    title: "B.Des & Creative Programs",
    subtitle: "Brochure 2025",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2025/BDesign_brochure.pdf",
  },
  {
    title: "Allied Health Sciences",
    subtitle: "Brochure 2025",
    href: "https://www.dsu.edu.in/images/Admission/brochures/2025/allied_health_sciences_2025.pdf",
  },
];

const campusContacts = [
  {
    title: "DSU Main Campus",
    address:
      "Devarakaggalahalli, Harohalli, Kanakapura Road, Bengaluru South District – 562 112",
    email: "admissions@dsu.edu.in",
    phone: ["080 2861 1000"],
  },
  {
    title: "DSU City Innovation Campus",
    address:
      "Administrative & Main Admission Office, Kudlu Gate, Hosur Road, Bengaluru – 560 114",
    email: "admissions@dsu.edu.in",
    phone: ["080 4646 1800", "080 4909 2800"],
  },
  {
    title: "City Admissions Office",
    address: "Kumaraswamy Layout, Bengaluru – 560 078",
    email: "enquiry@dsu.edu.in",
    phone: ["+91 77609 64277", "+91 82963 16737", "+91 63668 85507"],
  },
];

const helplineGroups: HelplineGroup[] = [
  {
    label: "Admissions Helpline",
    entries: [
      "080 4646 1800",
      "080 4909 2800",
      "+91 77609 64277",
      "+91 82963 16737",
      "+91 63668 85507",
    ],
  },
  {
    label: "Registrar Office",
    entries: ["080 4909 2910", "080 4909 2911"],
  },
  {
    label: "Dean – Engineering",
    entries: ["080 4909 2986", "080 4909 2932", "080 4909 2933"],
  },
  {
    label: "Dean – MBA",
    entries: ["080 4909 2931"],
  },
  {
    label: "EMBA Enquiries",
    entries: ["080 4909 2930"],
  },
  {
    label: "Research Cell",
    entries: ["080 4909 2912"],
  },
];

const regionalContacts: RegionalContact[] = [
  { region: "East India", contact: "82402 16553" },
  { region: "West India", contact: "97414 88001" },
  { region: "North India", contact: "74889 83636" },
  { region: "South India", contact: "99628 35358" },
  { region: "International Admissions", contact: "+91 96060 22152" },
  { region: "International Support", contact: "+91 96060 22150" },
];

const aiSamplePrompts = [
  "When is the last date to apply?",
  "How can international students apply?",
  "What scholarships are available this year?",
  "Where do I download the fee structure?",
];

const voiceScriptLines = [
  "Welcome to Dayananda Sagar University admissions.",
  "You can apply through Comed-K, CET, or the direct admissions window.",
  "Remember the key codes: Comed-K E182, CET DSU-E240, and C520MC for MCA.",
  "Visit admissions dot d s u dot e d u dot i n to start your application and download program brochures for detailed curricula.",
  "Our counselors can be reached at zero eight zero four six four six one eight zero zero or admissions at d s u dot e d u dot i n.",
  "We look forward to welcoming you to DSU.",
];

const supportHighlights = [
  "Dedicated counseling support for Direct and International applicants",
  "Merit-based scholarships and financial aid guidance from the admissions office",
  "Personalized onboarding to help you choose programs, campuses, and housing",
];

export default function Admissions() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <AdmissionCarouselNew items={carouselImages} />
      <AdmissionRoutesSection />
      <EssentialsSection />
      <BrochureSection />
      <ContactSection />
      <SupportCallout />
    </div>
  );
}

function HeroSection() {
  const { theme } = useTheme();
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue/10 via-brand-magenta/5 to-background dark:from-orange-500/10 dark:via-red-500/10 py-10 lg:py-28">
      <div className="absolute inset-0">
        <div className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-brand-blue/20 dark:bg-orange-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-magenta/20 dark:bg-red-600/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-3 text-center">
        <Badge className="bg-brand-blue/15 text-brand-blue justify-center mb-8">
          <GraduationCap className="h-4 w-4 mr-2" />
          Admissions 2025 – Now Open
        </Badge>
        <h1 className="mt-8 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-display text-foreground">
          <span className="text-foreground">Your Path to </span>
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            AI-First Education
          </span>
        </h1>
        <p className="mt-6 text-base sm:text-xl md:text-2xl lg:text-3xl text-foreground/80 font-body">
          Multiple admission pathways, flexible programs, and a Bengaluru-based
          advantage. 100% placements with industry partnerships. Choose your
          route: Direct Admissions, International, or Online.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row flex-wrap">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#0088FF] via-[#FFD700] to-[#FF6B00] hover:from-[#FF6B00] hover:via-[#FFD700] hover:to-[#0088FF] text-foreground px-8 py-6 text-lg font-semibold rounded-2xl animate-gradient bg-[length:200%_auto]"
            asChild
          >
            <a
              href="https://admissions.dsu.edu.in/"
              target="_blank"
              rel="noreferrer"
            >
              Apply Now
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-2xl border-2 border-brand-blue text-brand-blue hover:bg-brand-blue/10 px-8 py-6 text-lg font-semibold"
            asChild
          >
            <a href="/eligibility">
              View Programs & Fees
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-2xl border-2 border-brand-blue text-brand-blue hover:bg-brand-blue/10 px-8 py-6 text-lg font-semibold"
            asChild
          >
            <a href="#choose-pathway">
              Choose Your Pathway
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-2xl border-2 border-brand-blue text-brand-blue hover:bg-brand-blue/10 px-8 py-6 text-lg font-semibold"
            asChild
          >
            <a href="/admissions/closing-dates">
              Closing Dates
              <CalendarCheck className="h-5 w-5" />
            </a>
          </Button>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {admissionCodes.slice(0, 4).map((code) => (
            <Badge
              key={code}
              variant="secondary"
              className="border border-brand-blue/30 bg-background/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-blue backdrop-blur"
            >
              {code}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdmissionRoutesSection() {
  return (
    <section
      className="bg-gradient-to-br from-brand-blue/5 via-brand-magenta/5 to-background dark:from-orange-500/5 dark:via-red-500/5 px-3 py-8"
      id="choose-pathway"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-display">
            <span className="text-foreground">Choose Your </span>
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Admission Pathway
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-xl md:text-2xl text-foreground/80 font-body">
            Whether you are an incoming undergraduate, postgraduate, lateral
            entrant, or international learner, DSU has a dedicated channel for
            you.
          </p>
        </div>
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {admissionTracks.map((track) => (
            <Card
              key={track.title}
              className="flex flex-col border border-brand-blue/30 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-brand-blue/20 group"
            >
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-blue group-hover:bg-brand-blue/25 transition-colors">
                  <track.icon className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4 text-2xl font-semibold text-foreground font-display">
                  {track.title}
                </CardTitle>
                <CardDescription className="mt-2 text-base leading-relaxed text-foreground/80 font-body">
                  {track.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto space-y-4">
                <div className="space-y-3">
                  {track.highlights.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 text-sm text-foreground/80 font-body"
                    >
                      <ListChecks className="mt-0.5 h-4 w-4 text-brand-blue flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <Button
                  className="w-full justify-center rounded-xl bg-gradient-to-r from-[#0088FF] via-[#FFD700] to-[#FF6B00] hover:from-[#FF6B00] hover:via-[#FFD700] hover:to-[#0088FF] text-foreground font-semibold animate-gradient bg-[length:200%_auto]"
                  asChild
                >
                  <a href={track.href} target="_blank" rel="noreferrer">
                    {track.ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function EssentialsSection() {
  return (
    <section className="px-3 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-display">
            <span className="text-foreground">Essential </span>
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Resources
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-xl md:text-2xl text-foreground/80 font-body">
            Quick access to the information you need at every stage of your
            admission journey.
          </p>
        </div>

        {/* Block 1: Decision-Critical */}
        <div className="mb-12">
          <h3 className="mb-6 text-xl sm:text-2xl md:text-3xl font-bold text-foreground font-display">
            📋 Decision-Critical
          </h3>
          <div className="grid gap-3 md:grid-cols-3">
            {quickLinks.slice(0, 3).map((item) => (
              <QuickLinkCard key={item.title} item={item} />
            ))}
          </div>
        </div>

        {/* Block 2: Support & Planning */}
        <div className="mb-12">
          <h3 className="mb-6 text-xl sm:text-2xl md:text-3xl font-bold text-foreground font-display">
            🤝 Support & Planning
          </h3>
          <div className="grid gap-3 md:grid-cols-3">
            {quickLinks.slice(3, 6).map((item) => (
              <QuickLinkCard key={item.title} item={item} />
            ))}
          </div>
        </div>

        {/* Block 3: Special Categories */}
        <div>
          <h3 className="mb-6 text-xl sm:text-2xl md:text-3xl font-bold text-foreground font-display">
            🌍 Special Categories
          </h3>
          <div className="grid gap-3 md:grid-cols-2">
            {quickLinks.slice(6, 8).map((item) => (
              <QuickLinkCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickLinkCard({ item }: { item: QuickLink }) {
  return (
    <Card
      className={`group border transition hover:-translate-y-1 hover:shadow-xl ${
        item.featured
          ? "border-brand-blue/60 bg-gradient-to-br from-brand-blue/15 to-brand-magenta/10 backdrop-blur-sm hover:border-brand-blue/80 hover:shadow-brand-blue/20 relative overflow-hidden"
          : "border-border/60 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm hover:border-brand-blue/40 hover:shadow-brand-blue/20"
      }`}
    >
      {item.featured && (
        <div className="absolute top-0 right-0">
          <Badge className="rounded-none rounded-bl-2xl bg-gradient-to-r from-[#0088FF] via-[#FFD700] to-[#FF6B00] text-white text-xs font-bold px-3 py-1">
            RECOMMENDED
          </Badge>
        </div>
      )}
      <CardHeader>
        <div className="flex items-center justify-between">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl transition ${
              item.featured
                ? "bg-brand-blue text-foreground"
                : "bg-brand-blue/15 text-brand-blue group-hover:bg-brand-blue group-hover:text-foreground"
            }`}
          >
            <item.icon className="h-6 w-6" />
          </div>
          <ExternalLink className="h-5 w-5 text-foreground group-hover:text-brand-blue" />
        </div>
        <CardTitle className="mt-4 text-lg font-semibold text-foreground font-display group-hover:text-brand-blue transition-colors">
          {item.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="leading-relaxed text-foreground/80 text-sm font-body">
          {item.description}
        </CardDescription>
        <Button
          className={`w-full justify-center rounded-xl font-semibold ${
            item.featured
              ? "bg-gradient-to-r from-[#0088FF] via-[#FFD700] to-[#FF6B00] hover:from-[#FF6B00] hover:via-[#FFD700] hover:to-[#0088FF] text-foreground animate-gradient bg-[length:200%_auto]"
              : "bg-brand-blue/10 text-brand-blue hover:bg-brand-blue hover:text-foreground"
          }`}
          asChild
        >
          <a
            href={item.href}
            target={item.external === false ? undefined : "_blank"}
            rel={item.external === false ? undefined : "noreferrer"}
          >
            Access
            <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

function BrochureSection() {
  return (
    <section className="px-3 py-8 bg-gradient-to-br from-brand-blue/5 via-brand-magenta/5 to-background dark:from-orange-500/5 dark:via-red-500/5">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-display">
            <span className="text-foreground">Program </span>
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Guides & Brochures
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-xl md:text-2xl text-foreground/80 font-body">
            Download detailed brochures for every school and program. Each
            brochure lists eligibility, semester-wise credits, laboratory
            infrastructure, internship partners, and placement support
            milestones.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {brochureResources.map((resource) => (
            <Card
              key={resource.title}
              className="border border-border/60 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm transition hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-brand-blue/20 group"
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {resource.title}
                </CardTitle>
                <CardDescription className="text-sm text-foreground">
                  {resource.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full justify-center rounded-xl bg-brand-blue/10 text-brand-blue hover:bg-brand-blue hover:text-foreground font-semibold"
                  asChild
                >
                  <a href={resource.href} target="_blank" rel="noreferrer">
                    Download PDF
                    <Download className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="px-3 py-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-display">
            <span className="text-foreground">Connect with Our </span>
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Admissions Team
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-xl md:text-2xl text-foreground/80 font-body">
            Visit a DSU campus, schedule virtual counseling, or call the
            helpline numbers below for real-time assistance.
          </p>
        </div>

        {/* Campus Contacts */}
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="text-xl font-bold text-brand-blue hover:text-brand-blue/80 py-4 font-display">
              <MapPin className="h-6 w-6 mr-3" />
              Campus Locations
            </AccordionTrigger>
            <AccordionContent className="pt-6">
              <div className="grid gap-3 lg:grid-cols-3">
                {campusContacts.map((campus) => (
                  <Card
                    key={campus.title}
                    className="border border-border/60 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm transition hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-brand-blue/20 group"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-foreground">
                        {campus.title}
                      </CardTitle>
                      <CardDescription className="mt-2 text-sm leading-relaxed text-foreground">
                        {campus.address}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm text-foreground">
                      <div>
                        <p className="font-semibold text-foreground">
                          Helpline
                        </p>
                        <div className="mt-2 space-y-1">
                          {campus.phone.map((phone) => (
                            <p key={phone}>{phone}</p>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <a
                          href={`mailto:${campus.email}`}
                          className="mt-1 inline-flex items-center gap-2 text-orange-500 hover:underline"
                        >
                          <Mail className="h-4 w-4" />
                          {campus.email}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-none">
            <AccordionTrigger className="text-xl font-bold text-brand-blue hover:text-brand-blue/80 py-4 font-display">
              <Headphones className="h-6 w-6 mr-3" />
              Hotline Directory
            </AccordionTrigger>
            <AccordionContent className="pt-6">
              <Card className="border border-brand-blue/20 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm">
                <CardHeader>
                  <CardDescription className="text-sm text-foreground/80 font-body">
                    Reach specialized teams to clarify program requisites,
                    counseling logistics, and post-admission onboarding.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 sm:grid-cols-2">
                  {helplineGroups.map((group) => (
                    <div
                      key={group.label}
                      className="rounded-2xl border border-brand-blue/20 bg-background/70 p-4"
                    >
                      <p className="text-sm font-semibold text-foreground">
                        {group.label}
                      </p>
                      <div className="mt-2 space-y-1 text-xs text-foreground">
                        {group.entries.map((entry) => (
                          <p key={`${group.label}-${entry}`}>{entry}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-none">
            <AccordionTrigger className="text-xl font-bold text-brand-blue hover:text-brand-blue/80 py-4 font-display">
              <Flag className="h-6 w-6 mr-3" />
              Regional & International Outreach
            </AccordionTrigger>
            <AccordionContent className="pt-6">
              <Card className="border border-brand-blue/20 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm">
                <CardHeader>
                  <CardDescription className="text-sm text-foreground/80 font-body">
                    Connect with zonal coordinators and global offices for
                    localized support.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-3 sm:grid-cols-2">
                  {regionalContacts.map((item) => (
                    <div
                      key={item.region}
                      className="rounded-2xl border border-brand-blue/20 bg-background/70 p-4 text-sm"
                    >
                      <p className="font-semibold text-foreground font-display">
                        {item.region}
                      </p>
                      <p className="mt-1 text-foreground/80 font-body">{item.contact}</p>
                    </div>
                  ))}
                  <div className="sm:col-span-2 rounded-2xl border border-brand-blue/20 bg-brand-blue/10 p-4 text-sm text-brand-blue font-body">
                    For scholarship or sponsorship collaborations, email
                    admissions@dsu.edu.in with program and applicant details.
                  </div>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

function SupportCallout() {
  return (
    <section className="px-3 pb-20">
      <div className="mx-auto max-w-4xl rounded-3xl border border-brand-blue/20 bg-gradient-to-r from-brand-blue/15 via-brand-magenta/15 to-brand-blue/15 dark:from-orange-500/15 dark:via-red-500/15 dark:to-orange-500/15 p-10 text-center shadow-lg shadow-brand-blue/10 dark:shadow-orange-500/10">
        <Badge className="inline-flex items-center justify-center gap-2 bg-brand-blue/20 text-brand-blue">
          <Sparkles className="h-4 w-4" />
          Ready to Start Your DSU Journey?
        </Badge>
        <h2 className="mt-6 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display text-foreground">
          <span className="text-foreground">Personalized </span>
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            Counseling is Just a Call Away
          </span>
        </h2>
        <p className="mt-4 text-base sm:text-xl md:text-2xl text-foreground/80 font-body">
          Our counselors are available across campuses, over phone, chat, and
          voice assistance. Book a session to design your academic roadmap with
          DSU.
        </p>
        <div className="mt-6 space-y-3">
          {supportHighlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-center justify-center gap-2 text-sm text-brand-blue font-body"
            >
              <ListChecks className="h-4 w-4 flex-shrink-0" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#0088FF] via-[#FFD700] to-[#FF6B00] hover:from-[#FF6B00] hover:via-[#FFD700] hover:to-[#0088FF] text-foreground px-8 py-6 text-lg font-semibold rounded-2xl animate-gradient bg-[length:200%_auto]"
            asChild
          >
            <a href="mailto:admissions@dsu.edu.in?subject=Schedule%20a%20Counseling%20Session">
              Schedule Counseling
              <PhoneCall className="h-5 w-5" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-2xl border-2 border-brand-blue text-brand-blue hover:bg-brand-blue/10 px-8 py-6 text-lg font-semibold"
            asChild
          >
            <a
              href="https://www.dsu.edu.in/admission/helpline"
              target="_blank"
              rel="noreferrer"
            >
              View Helpline Details
              <ExternalLink className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
