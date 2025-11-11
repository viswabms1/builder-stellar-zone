import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { useLanguage } from "@/providers/language-provider";

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
  "DSAT Admissions",
  "Comed-K Code: E182",
  "Uni-GAUGE Code: UNI-010",
  "CET Code: DSU-E240",
  "PGCET Code (M.Tech): T970",
  "PGCET Code (MBA): B365MB",
  "PGCET Code (MCA): C520MC",
];

const quickLinks: QuickLink[] = [
  {
    title: "Direct Admissions – 2025",
    description:
      "Secure your seat through the non-DSAT window and confirm early.",
    href: "https://admissions.dsu.edu.in/?utm_source=Admissions%20Tab&utm_medium=Website&utm_campaign=WS-Admissions%202024",
    icon: Sparkles,
  },
  {
    title: "Programs, Eligibility & Fee Structure",
    description:
      "Review intake, qualifying exams, and detailed fee statements for every course.",
    href: "/eligibility",
    icon: BookOpen,
    external: false,
  },
  {
    title: "Hostel Fee",
    description:
      "Plan residential life with the latest accommodation and dining charges.",
    href: "https://www.dsu.edu.in/images/PDF/Hostel_Fee_2025_1.pdf",
    icon: Building,
  },
  {
    title: "International Admissions",
    description:
      "Dedicated guidance for foreign nationals, NRIs, and PIO applicants.",
    href: "/admissions/international",
    icon: Globe,
    external: false,
  },
  {
    title: "Online Degree",
    description:
      "Explore flexible DSU Online programs with industry-aligned curricula.",
    href: "https://apply.dsuonline.com/",
    icon: Laptop,
  },
  {
    title: "Admission Helpline",
    description:
      "Reach experienced counselors for personalized admission assistance.",
    href: "https://www.dsu.edu.in/admission/helpline",
    icon: PhoneCall,
  },
  {
    title: "FAQs",
    description:
      "Find detailed answers to DSAT, eligibility, document, and process queries.",
    href: "https://www.dsu.edu.in/images/Admission/FAQs-DSAT-DSU-2020.pdf",
    icon: Info,
  },
  {
    title: "Admission Closing Dates",
    description:
      "Track key deadlines for applications, counseling, and confirmation.",
    href: "https://www.dsu.edu.in/admission-lastdates",
    icon: CalendarCheck,
  },
];

const admissionTracks: AdmissionTrack[] = [
  {
    title: "DSAT Admissions",
    description:
      "Apply through the DSU Scholastic Aptitude Test (DSAT) and qualify for scholarships based on merit.",
    highlights: [
      "Register for DSAT and receive test slots via email",
      "Submit 10th, 11th/12th or qualifying exam marks",
      "Attend counseling to finalize campus and branch",
    ],
    href: "https://admissions.dsu.edu.in/",
    icon: GraduationCap,
    ctaLabel: "Register for DSAT",
  },
  {
    title: "Direct Admissions – 2025",
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
    title: "PGCET & Lateral Entry Admissions",
    description:
      "Follow Karnataka PGCET counseling codes for postgraduate programs and lateral admissions.",
    highlights: [
      "PGCET Codes: T970 (M.Tech) and B365MB (MBA)",
      "Document verification at KEA designated centers",
      "DSU assistance for branch selection and onboarding",
    ],
    href: "https://www.dsu.edu.in/eligibility",
    icon: School,
    ctaLabel: "View PGCET Guidelines",
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
    href: "/admissions/international",
    icon: Globe,
    ctaLabel: "Explore International Pathway",
  },
  {
    title: "DSU Online & Professional Programs",
    description:
      "Earn DSU degrees remotely with live mentorship, digital labs, and career-aligned curricula.",
    highlights: [
      "UGC-entitled, NAAC A+ institution",
      "Self-paced learning with weekend live sessions",
      "Placement and internship assistance",
    ],
    href: "https://apply.dsuonline.com/",
    icon: Laptop,
    ctaLabel: "Discover DSU Online",
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
    email: "dsat@dsu.edu.in",
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
  "You can apply through DSAT, Comed-K, or the direct admissions window.",
  "Remember the key codes: Comed-K E182, CET DSU-E240, and PGCET T970 for M.Tech, B365MB for MBA, and C520MC for MCA.",
  "Visit admissions dot d s u dot e d u dot i n to start your application and download program brochures for detailed curricula.",
  "Our counselors can be reached at zero eight zero four six four six one eight zero zero or admissions at d s u dot e d u dot i n.",
  "We look forward to welcoming you to DSU.",
];

const supportHighlights = [
  "Dedicated counseling support for DSAT, Direct, and International applicants",
  "Merit-based scholarships and financial aid guidance from the admissions office",
  "Personalized onboarding to help you choose programs, campuses, and housing",
];

export default function Admissions() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <QuickLinksSection />
      <AdmissionRoutesSection />
      <BrochureSection />
      <AIEngagementSection />
      <ContactSection />
      <SupportCallout />
    </div>
  );
}

function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-500/10 via-red-500/10 to-background py-20 lg:py-28">
      <div className="absolute inset-0">
        <div className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-red-600/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-500">
          <GraduationCap className="h-4 w-4" />
          {t('admissions.title')} 2025
        </div>
        <h1 className="mt-8 text-4xl font-bold leading-tight text-white md:text-6xl">
          {t('admissions.description')}
        </h1>
        <p className="mt-6 text-lg text-white md:text-xl">
          {t('academics.subtitle')}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="rounded-2xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 px-8 py-6 text-lg font-semibold text-foreground shadow-lg shadow-orange-500/30 transition hover:shadow-xl"
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
            className="rounded-2xl border-2 border-orange-500 px-8 py-6 text-lg font-semibold text-orange-500"
            asChild
          >
            <a
              href="https://www.dsu.edu.in/images/Admission/brochures/2025/DSU_Main_Campus_Programs_2025.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download Prospectus
              <Download className="h-5 w-5" />
            </a>
          </Button>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {admissionCodes.map((code) => (
            <Badge
              key={code}
              variant="secondary"
              className="border border-orange-500/30 bg-background/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-orange-500 backdrop-blur"
            >
              {code}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickLinksSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Start with the Essentials
          </h2>
          <p className="mt-3 text-lg text-foreground">
            Access the most requested admission resources, deadlines, and
            application pathways in one place.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {quickLinks.map((item) => (
            <Card
              key={item.title}
              className="group border border-border/60 bg-card/60 backdrop-blur-sm transition hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-500/10"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/15 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-foreground">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <ExternalLink className="h-5 w-5 text-foreground group-hover:text-orange-500" />
                </div>
                <CardTitle className="mt-4 text-xl font-semibold group-hover:text-orange-500">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="leading-relaxed text-foreground">
                  {item.description}
                </CardDescription>
                <Button
                  variant="secondary"
                  className="w-full justify-center rounded-xl bg-orange-500/10 text-orange-500 hover:bg-orange-500 hover:text-foreground"
                  asChild
                >
                  <a
                    href={item.href}
                    target={item.external === false ? undefined : "_blank"}
                    rel={item.external === false ? undefined : "noreferrer"}
                  >
                    Open Resource
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

function AdmissionRoutesSection() {
  return (
    <section className="bg-gradient-to-br from-orange-500/5 via-red-500/5 to-background px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Choose Your Admission Pathway
          </h2>
          <p className="mt-3 text-lg text-foreground">
            Whether you are an incoming undergraduate, postgraduate, lateral
            entrant, or international learner, DSU has a dedicated channel for
            you.
          </p>
        </div>
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {admissionTracks.map((track) => (
            <Card
              key={track.title}
              className="flex flex-col border border-orange-500/20 bg-card/70 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-orange-500/10"
            >
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/15 text-orange-500">
                  <track.icon className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4 text-2xl font-semibold text-foreground">
                  {track.title}
                </CardTitle>
                <CardDescription className="mt-2 text-base leading-relaxed text-foreground">
                  {track.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto space-y-4">
                <div className="space-y-3">
                  {track.highlights.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <ListChecks className="mt-0.5 h-4 w-4 text-orange-500" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <Button
                  className="w-full justify-center rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-foreground hover:from-red-500 hover:to-orange-500"
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

function BrochureSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Program Guides &amp; Brochures
          </h2>
          <p className="mt-3 text-lg text-foreground">
            Download detailed brochures to understand curricula, laboratories,
            internships, and placement pathways for every DSU school.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {brochureResources.map((resource) => (
            <Card
              key={resource.title}
              className="border border-border/60 bg-card/60 backdrop-blur-sm transition hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-orange-500/10"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {resource.title}
                </CardTitle>
                <CardDescription className="text-sm text-foreground">
                  {resource.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <Button
                  variant="secondary"
                  className="justify-center rounded-xl bg-orange-500/10 text-orange-500 hover:bg-orange-500 hover:text-foreground"
                  asChild
                >
                  <a href={resource.href} target="_blank" rel="noreferrer">
                    Download PDF
                    <Download className="h-4 w-4" />
                  </a>
                </Button>
                <p className="text-xs text-foreground">
                  Each brochure lists eligibility, semester-wise credits,
                  laboratory infrastructure, internship partners, and placement
                  support milestones.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function AIEngagementSection() {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      sender: "DSU AI Advisor",
      text: "Hello! I can guide you through DSU admissions, deadlines, scholarships, and campus services. Ask me anything to get started.",
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [voiceStatus, setVoiceStatus] = useState<string | null>(null);
  const [voiceActive, setVoiceActive] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const responseMatrix = useMemo(
    () => [
      {
        keywords: ["deadline", "last date", "closing"],
        response:
          "Admission closing dates are updated regularly at https://www.dsu.edu.in/admission-lastdates. Keep your documents ready before the DSAT and direct counseling windows close.",
      },
      {
        keywords: ["fee", "tuition", "structure"],
        response:
          "The complete program-wise fee structure is available at https://www.dsu.edu.in/eligibility. You can also download the latest brochures for semester-wise details.",
      },
      {
        keywords: ["international", "nri", "foreign"],
        response:
          "International applicants receive dedicated support at https://www.dsu.edu.in/international/. Our counselors assist with documentation, visa letters, and scholarships.",
      },
      {
        keywords: ["scholarship", "aid", "financial"],
        response:
          "Merit, sports, and need-based scholarships are awarded during counseling. Share your academic credentials with admissions@dsu.edu.in for personalized guidance.",
      },
      {
        keywords: ["hostel", "accommodation", "residence"],
        response:
          "Hostel fee details are published at https://www.dsu.edu.in/images/PDF/Hostel_Fee_2025_1.pdf. You can reserve accommodation during the admission confirmation stage.",
      },
      {
        keywords: ["contact", "phone", "help"],
        response:
          "Connect with our admissions helpline at 080 4646 1800 or write to admissions@dsu.edu.in for real-time assistance.",
      },
    ],
    [],
  );

  const defaultResponse =
    "I have highlighted the key resources on this page. For detailed counseling, call 080 4646 1800 or email admissions@dsu.edu.in.";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleChatSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = chatInput.trim();
    if (!value) {
      return;
    }

    const lowerValue = value.toLowerCase();
    const matched = responseMatrix.find((item) =>
      item.keywords.some((keyword) => lowerValue.includes(keyword)),
    );
    const botReply = matched ? matched.response : defaultResponse;

    setChatMessages((prev) => [
      ...prev,
      { sender: "You", text: value },
      { sender: "DSU AI Advisor", text: botReply },
    ]);
    setChatInput("");
  };

  const handleSamplePrompt = (prompt: string) => {
    setChatInput(prompt);
  };

  const handleVoiceStart = () => {
    if (
      typeof window === "undefined" ||
      typeof window.speechSynthesis === "undefined"
    ) {
      setVoiceStatus("Voice guidance is not supported on this device.");
      return;
    }

    const narration = voiceScriptLines.join(" ");
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(narration);
    utterance.rate = 1;
    utterance.onstart = () => {
      setVoiceActive(true);
      setVoiceStatus("Voice assistant is sharing the admissions overview.");
    };
    utterance.onend = () => {
      setVoiceActive(false);
      setVoiceStatus("Voice assistant finished the briefing.");
    };
    utterance.onerror = () => {
      setVoiceActive(false);
      setVoiceStatus("Unable to start voice guidance. Please try again.");
    };

    window.speechSynthesis.speak(utterance);
  };

  const handleVoiceStop = () => {
    if (
      typeof window !== "undefined" &&
      typeof window.speechSynthesis !== "undefined"
    ) {
      window.speechSynthesis.cancel();
      setVoiceActive(false);
      setVoiceStatus("Voice assistant stopped.");
    }
  };

  return (
    <section className="bg-gradient-to-r from-orange-500/5 to-red-500/5 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <Badge className="mx-auto w-fit rounded-full bg-orange-500/15 px-4 py-2 text-orange-500">
            Intelligent Admissions Support
          </Badge>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            AI Chat &amp; Voice Assistance Hub
          </h2>
          <p className="mt-3 text-lg text-foreground">
            Engage with DSU&apos;s AI-powered chat bot for quick answers or
            launch the guided voice assistant for a hands-free overview.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="border border-orange-500/20 bg-card/70 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-semibold">
                  AI Chat Assistant
                </CardTitle>
                <CardDescription className="text-sm text-foreground">
                  Conversational guidance tailored to DSU admissions pathways.
                </CardDescription>
              </div>
              <MessageSquare className="h-8 w-8 text-orange-500" />
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="h-64 overflow-y-auto rounded-xl border border-orange-500/20 bg-background/80 p-4 shadow-inner">
                <div className="space-y-4">
                  {chatMessages.map((message, index) => (
                    <div key={`${message.sender}-${index}`}>
                      <p className="text-xs font-semibold uppercase tracking-wider text-orange-500">
                        {message.sender}
                      </p>
                      <p className="mt-1 leading-relaxed text-sm text-foreground">
                        {message.text}
                      </p>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {aiSamplePrompts.map((prompt) => (
                  <Button
                    key={prompt}
                    type="button"
                    variant="secondary"
                    className="rounded-full border border-orange-500/20 bg-orange-500/10 text-xs text-orange-500 hover:bg-orange-500 hover:text-foreground"
                    onClick={() => handleSamplePrompt(prompt)}
                  >
                    {prompt}
                  </Button>
                ))}
              </div>
              <form onSubmit={handleChatSubmit} className="space-y-3">
                <Input
                  placeholder="How can we help you today?"
                  value={chatInput}
                  onChange={(event) => setChatInput(event.target.value)}
                  className="rounded-xl border-orange-500/30"
                />
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    className="rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-foreground hover:from-red-500 hover:to-orange-500"
                  >
                    Send Message
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          <Card className="border border-orange-500/20 bg-card/70 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-semibold">
                  Voice Assistant
                </CardTitle>
                <CardDescription className="text-sm text-foreground">
                  Receive a narrated briefing covering codes, timelines, and
                  support channels.
                </CardDescription>
              </div>
              <Headphones className="h-8 w-8 text-orange-500" />
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-2xl border border-orange-500/20 bg-background/80 p-4 text-sm leading-relaxed text-foreground">
                <p>
                  Activate the voice guide to hear a curated summary of DSU
                  admissions. Use it in counseling kiosks or during open houses
                  for quick orientation.
                </p>
                <div className="mt-4 rounded-xl bg-orange-500/10 p-3 text-xs text-orange-500">
                  Try saying: “Play the DSU admissions briefing” or “Tell me the
                  admission codes”.
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  type="button"
                  className="rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-foreground hover:from-red-500 hover:to-orange-500"
                  onClick={handleVoiceStart}
                  disabled={voiceActive}
                >
                  {voiceActive
                    ? "Voice Assistant Running"
                    : "Start Voice Assistant"}
                  <Mic className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-xl border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-foreground"
                  onClick={handleVoiceStop}
                  disabled={!voiceActive}
                >
                  Stop
                </Button>
              </div>
              {voiceStatus && (
                <div className="rounded-xl border border-orange-500/30 bg-orange-500/10 px-4 py-3 text-sm text-orange-500">
                  {voiceStatus}
                </div>
              )}
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Request a call-back
                </p>
                <Textarea
                  placeholder="Share your preferred time and query. Our team will respond within one business day."
                  className="mt-2 rounded-xl border-orange-500/30"
                />
                <div className="mt-3 flex justify-end">
                  <Button
                    type="button"
                    variant="secondary"
                    className="rounded-xl bg-orange-500/10 text-orange-500 hover:bg-orange-500 hover:text-foreground"
                    asChild
                  >
                    <a href="mailto:admissions@dsu.edu.in?subject=DSU%20Voice%20Assistant%20Call%20Back">
                      Send Request
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Connect with Our Admissions Team
          </h2>
          <p className="mt-3 text-lg text-foreground">
            Visit a DSU campus, schedule virtual counseling, or call the
            helpline numbers below for real-time assistance.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {campusContacts.map((campus) => (
            <Card
              key={campus.title}
              className="border border-border/60 bg-card/70 backdrop-blur-sm transition hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-orange-500/10"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-orange-500" />
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {campus.title}
                  </CardTitle>
                </div>
                <CardDescription className="mt-4 text-sm leading-relaxed text-foreground">
                  {campus.address}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-foreground">
                <div>
                  <p className="font-semibold text-foreground">Helpline</p>
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
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border border-orange-500/20 bg-card/70 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-orange-500" />
                <CardTitle className="text-xl font-semibold text-foreground">
                  Hotline Directory
                </CardTitle>
              </div>
              <CardDescription className="mt-2 text-sm text-foreground">
                Reach specialized teams to clarify program requisites,
                counseling logistics, and post-admission onboarding.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              {helplineGroups.map((group) => (
                <div
                  key={group.label}
                  className="rounded-2xl border border-orange-500/20 bg-background/70 p-4"
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
          <Card className="border border-orange-500/20 bg-card/70 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Flag className="h-6 w-6 text-orange-500" />
                <CardTitle className="text-xl font-semibold text-foreground">
                  Regional &amp; International Outreach
                </CardTitle>
              </div>
              <CardDescription className="mt-2 text-sm text-foreground">
                Connect with zonal coordinators and global offices for localized
                support.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              {regionalContacts.map((item) => (
                <div
                  key={item.region}
                  className="rounded-2xl border border-orange-500/20 bg-background/70 p-4 text-sm"
                >
                  <p className="font-semibold text-foreground">{item.region}</p>
                  <p className="mt-1 text-foreground">{item.contact}</p>
                </div>
              ))}
              <div className="sm:col-span-2 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-4 text-sm text-orange-500">
                For scholarship or sponsorship collaborations, email
                admissions@dsu.edu.in with program and applicant details.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function SupportCallout() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-4xl rounded-3xl border border-orange-500/20 bg-gradient-to-r from-orange-500/15 via-red-500/15 to-orange-500/15 p-10 text-center shadow-lg shadow-orange-500/10">
        <div className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500/20 px-4 py-2 text-sm font-semibold text-orange-500">
          <Sparkles className="h-4 w-4" />
          Experience DSU Admissions Support
        </div>
        <h2 className="mt-6 text-3xl font-bold text-foreground md:text-4xl">
          Ready to Personalize Your Admission Journey?
        </h2>
        <p className="mt-4 text-lg text-foreground">
          Our counselors are available across campuses, over phone, chat, and
          voice assistance. Book a session to design your academic roadmap with
          DSU.
        </p>
        <div className="mt-6 space-y-3">
          {supportHighlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-center justify-center gap-2 text-sm text-orange-500"
            >
              <ListChecks className="h-4 w-4" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            className="rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 px-8 py-6 text-lg font-semibold text-foreground hover:from-red-500 hover:to-orange-500"
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
            className="rounded-2xl border-2 border-orange-500 px-8 py-6 text-lg font-semibold text-orange-500"
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
