import { useMemo } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Building,
  CheckCircle2,
  CloudLightning,
  Compass,
  ContactRound,
  FileText,
  Globe2,
  GraduationCap,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Program = {
  name: string;
  college: string;
  offerings: string;
  image: string;
};

type ProcessStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type Instruction = {
  title: string;
  content: string | string[];
};

type GalleryImage = {
  src: string;
  alt: string;
};

type InnovationLogo = {
  src: string;
  alt: string;
};

const heroStats = [
  {
    label: "Global alumni network",
    value: "50,000+",
  },
  {
    label: "International cohorts",
    value: "40+ nations",
  },
  {
    label: "Research & innovation hubs",
    value: "8 centres",
  },
];

const programs: Program[] = [
  {
    name: "School of Engineering",
    college: "B.Tech • M.Tech",
    offerings: "AI-driven labs, engineering design studios, and research internships.",
    image: "https://www.dsu.edu.in/images/school-of-enginering.svg",
  },
  {
    name: "College of Nursing Sciences",
    college: "B.Sc Nursing • PB B.Sc Nursing • M.Sc Nursing",
    offerings: "Clinical immersion, simulation labs, and global health collaborations.",
    image: "https://www.dsu.edu.in/images/college-of-nurse.svg",
  },
  {
    name: "College of Allied Health Sciences",
    college: "B.Sc (Allied Health Sciences) • MPH",
    offerings: "Hospital-embedded learning with multidisciplinary faculty mentors.",
    image: "https://www.dsu.edu.in/images/c-o-a-s.svg",
  },
  {
    name: "College of Pharmaceutical Sciences",
    college: "B.Pharm • Pharm.D • M.Pharm",
    offerings: "PCI-recognized programs with industry research and clinical rotations.",
    image: "https://www.dsu.edu.in/images/c-o-p-s.svg",
  },
  {
    name: "College of Physiotherapy",
    college: "BPT • MPT",
    offerings: "Advanced rehabilitation facilities and sports therapy internships.",
    image: "https://www.dsu.edu.in/images/c-o-p.svg",
  },
];

const processSteps: ProcessStep[] = [
  {
    title: "Online Application Form",
    description:
      "Fill in programme details, pay the programme fee, and upload the required documents for review.",
    icon: FileText,
  },
  {
    title: "Registration Fee",
    description:
      "Sign up on the admissions portal and complete the US $25 registration payment to initiate processing.",
    icon: ShieldCheck,
  },
  {
    title: "Document Verification",
    description:
      "The university admissions team validates submitted credentials and communicates status via email.",
    icon: ContactRound,
  },
  {
    title: "Student Onboarding",
    description:
      "Receive confirmation, student ID, and LMS credentials to start your DSU learning experience.",
    icon: Globe2,
  },
];

const instructions: Instruction[] = [
  {
    title: "Eligibility",
    content:
      "The application form is exclusively for NRI, Foreign Nationals, or students from SAARC countries.",
  },
  {
    title: "Application Sections",
    content:
      "The form contains multiple sections designed to understand the applicant comprehensively. Complete each section carefully.",
  },
  {
    title: "Contact Information",
    content:
      "Provide a valid email ID and functional phone number for SMS and email notifications throughout the process.",
  },
  {
    title: "Accurate Details",
    content:
      "Ensure the name and other personal details exactly match the information on your academic certificates.",
  },
  {
    title: "Registration Fee",
    content:
      "The US $25 registration fee is non-refundable and is not adjusted against the programme tuition fee.",
  },
  {
    title: "Mandatory Documents",
    content:
      "Upload all mandatory documents to avoid the application being marked as incomplete. Avoid password-protected files.",
  },
  {
    title: "Required Documents",
    content: [
      "Scanned passport-sized colour photograph",
      "Scanned signature",
      "Scanned copies of academic documents from Grade 10 to the highest qualification",
      "Scanned copies of diplomas or degrees",
      "Scanned copy of government-issued photo ID",
      "Scanned proof of residence (if different from ID)",
      "Scanned disability certificate (if applicable)",
      "Ensure all uploads are from original documents, not photocopies",
    ],
  },
  {
    title: "Fee Payment Modes",
    content:
      "Accepted payment methods include Credit Card, Debit Card, Net Banking, and UPI/Wallets.",
  },
  {
    title: "Welcome Message",
    content:
      "We look forward to welcoming you to Dayananda Sagar University.",
  },
];

const innovationLogos: InnovationLogo[] = [
  { src: "https://www.dsu.edu.in/images/center/1.png", alt: "Advanced research center" },
  { src: "https://www.dsu.edu.in/images/center/2.png", alt: "Innovation centre" },
  { src: "https://www.dsu.edu.in/images/center/3.png", alt: "Technology incubation hub" },
  { src: "https://www.dsu.edu.in/images/center/4.png", alt: "Centre of excellence" },
  { src: "https://www.dsu.edu.in/images/center/5.png", alt: "Entrepreneurship lab" },
  { src: "https://www.dsu.edu.in/images/center/6.png", alt: "Applied sciences lab" },
  { src: "https://www.dsu.edu.in/images/center/7.png", alt: "Design innovation studio" },
  { src: "https://www.dsu.edu.in/images/center/8.png", alt: "Healthcare innovation unit" },
];

const galleryImages: GalleryImage[] = [
  { src: "https://www.dsu.edu.in/images/gallery-img/img3.jpg", alt: "DSU innovation corridor" },
  { src: "https://www.dsu.edu.in/images/gallery-img/img4.jpg", alt: "Campus aerial view" },
  { src: "https://www.dsu.edu.in/images/gallery-img/img5.jpg", alt: "Student collaboration space" },
  { src: "https://www.dsu.edu.in/images/gallery-img/img1.jpg", alt: "Engineering laboratory" },
  { src: "https://www.dsu.edu.in/images/gallery-img/img2.jpg", alt: "Learning commons" },
];

export default function InternationalAdmissions() {
  return (
    <div className="bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <ProcessSection />
      <InnovationSection />
      <InstructionsSection />
      <GallerySection />
      <ApplySection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-background py-20 lg:py-28">
      <div className="absolute inset-0">
        <div className="absolute -top-10 -left-14 h-64 w-64 rounded-full bg-blue-500/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/25 blur-3xl" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-500">
            <Globe2 className="h-4 w-4" />
            International &amp; NRI Admissions 2025
          </div>
          <h1 className="mt-8 text-4xl font-bold leading-tight md:text-6xl">
            Study at Dayananda Sagar University from Anywhere in the World
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Join a multidisciplinary, research-driven campus with global alumni, immersive hostel life, and interactive learning environments designed for exploration, innovation, and international careers.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <Button
              size="lg"
              className="rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 px-8 py-6 text-lg font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:shadow-xl"
              asChild
            >
              <a href="#apply-now">Apply Now
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-2xl border-2 border-blue-500 px-8 py-6 text-lg font-semibold text-blue-500"
              asChild
            >
              <a href="#instructions">View Requirements
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-blue-500/20 bg-background/80 p-5 text-left shadow-sm backdrop-blur"
              >
                <p className="text-2xl font-semibold text-blue-500">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="rounded-3xl border border-blue-500/20 bg-card/80 p-6 shadow-xl backdrop-blur" id="apply-now">
            <CardTitle className="text-2xl font-semibold text-foreground">
              Enquire or Apply Today
            </CardTitle>
            <CardDescription className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Complete the enquiry form to receive personalised assistance on eligibility, visa support, scholarships, and onboarding.
            </CardDescription>
            <div className="mt-6 overflow-hidden rounded-2xl border border-blue-500/20">
              <iframe
                title="International Admissions Enquiry"
                src="https://widgets.in8.nopaperforms.com/register?&r=&q=&w=f3162f9d0da45b80ccb6342d22a3c1cb&m=&cu=https://www.dsu.edu.in/admissions-international/"
                className="h-[420px] w-full"
                loading="lazy"
              />
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              By submitting the form, you consent to communications from Dayananda Sagar University via email, SMS, and phone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-10 text-center shadow-lg shadow-blue-500/10">
          <Badge className="mx-auto mb-4 w-fit rounded-full bg-blue-500/15 px-4 py-2 text-blue-500">
            About International Admissions
          </Badge>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Experience the pinnacle of academic excellence at Dayananda Sagar University, where innovation flourishes and students are inspired to grow, excel, invent, and create. Our vibrant community of more than 50,000 alumni, contemporary hostel facilities, and interactive learning environments build an ecosystem for personal and professional transformation. With state-of-the-art infrastructure supporting cutting-edge research and technology, DSU offers unparalleled opportunities for international students to engage in groundbreaking discoveries, internships, and placements across the globe.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProgramsSection() {
  return (
    <section className="bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-background px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Applications Open — 2025 Intake</h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Programmes available at the Harohalli Main Campus with immersive labs, international faculty, and industry-aligned curricula.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {programs.map((program) => (
            <Card
              key={program.name}
              className="h-full border border-blue-500/20 bg-card/80 shadow-sm transition hover:-translate-y-1 hover:shadow-blue-500/10"
            >
              <CardHeader className="flex flex-col items-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="h-12 w-12 object-contain"
                    loading="lazy"
                  />
                </div>
                <CardTitle className="mt-4 text-xl font-semibold text-foreground">
                  {program.name}
                </CardTitle>
                <Badge className="mt-2 w-fit rounded-full bg-blue-500/15 px-3 py-1 text-xs text-blue-500">
                  {program.college}
                </Badge>
              </CardHeader>
              <CardContent className="text-center text-sm text-muted-foreground">
                {program.offerings}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <Badge className="mx-auto w-fit rounded-full bg-blue-500/15 px-4 py-2 text-blue-500">
            Admission Process
          </Badge>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            How to Join DSU as an International Student
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Follow these steps to complete your enrolment. Our admissions counsellors support you at every stage.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {processSteps.map((step) => (
            <Card
              key={step.title}
              className="border border-blue-500/20 bg-card/80 shadow-sm transition hover:-translate-y-1 hover:shadow-blue-500/10"
            >
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                  <step.icon className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-sm text-muted-foreground">
                    {step.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function InnovationSection() {
  const logosChunks = useMemo(() => {
    const chunkSize = 4;
    const chunks: InnovationLogo[][] = [];
    for (let i = 0; i < innovationLogos.length; i += chunkSize) {
      chunks.push(innovationLogos.slice(i, i + chunkSize));
    }
    return chunks;
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-background px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <Badge className="mx-auto w-fit rounded-full bg-blue-500/15 px-4 py-2 text-blue-500">
            Innovation Centres
          </Badge>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Centres Fueling Research &amp; Entrepreneurship</h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Dedicated hubs on campus provide access to advanced laboratories, design studios, incubation support, and industry collaborations.
          </p>
        </div>
        <div className="space-y-6">
          {logosChunks.map((chunk, index) => (
            <div key={`logos-${index}`} className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              {chunk.map((logo) => (
                <div
                  key={logo.src}
                  className="flex h-28 items-center justify-center rounded-2xl border border-blue-500/20 bg-background/80 p-6 shadow-sm"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstructionsSection() {
  return (
    <section className="px-6 py-16" id="instructions">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <Badge className="mx-auto w-fit rounded-full bg-blue-500/15 px-4 py-2 text-blue-500">
            Important Instructions
          </Badge>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Before You Submit Your Application
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Review all instructions to ensure your documents, eligibility, and contact details are in order for a seamless admission journey.
          </p>
        </div>
        <Accordion type="multiple" className="space-y-4">
          {instructions.map((instruction) => (
            <AccordionItem
              key={instruction.title}
              value={instruction.title}
              className="overflow-hidden rounded-2xl border border-blue-500/20 bg-card/80 backdrop-blur"
            >
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-foreground">
                {instruction.title}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-sm text-muted-foreground">
                {Array.isArray(instruction.content) ? (
                  <ul className="list-disc space-y-2 pl-5">
                    {instruction.content.map((item) => (
                      <li key={`${instruction.title}-${item}`}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="leading-relaxed">{instruction.content}</p>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-background px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <Badge className="mx-auto w-fit rounded-full bg-blue-500/15 px-4 py-2 text-blue-500">
            Gallery
          </Badge>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Explore Our Campus &amp; Facilities
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Glimpse into DSUs laboratories, collaborative spaces, and vibrant student life.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <Card
              key={image.src}
              className="group overflow-hidden border border-blue-500/20 bg-card/80 shadow-sm"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-4 text-sm text-muted-foreground">
                {image.alt}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApplySection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-5xl rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-500/15 via-indigo-500/15 to-blue-500/15 p-10 text-center shadow-lg shadow-blue-500/10">
        <div className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-500">
          <MessageCircle className="h-4 w-4" />
          Need More Guidance?
        </div>
        <h2 className="mt-6 text-3xl font-bold text-foreground md:text-4xl">
          Talk to Our International Admissions Team
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Share your academic goals, visa queries, or scholarship requirements. Our counsellors will connect with you within one business day.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            className="rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 px-8 py-6 text-lg font-semibold text-white hover:from-indigo-500 hover:to-blue-500"
            asChild
          >
            <a href="https://widgets.in8.nopaperforms.com/register?&r=&q=&w=f3162f9d0da45b80ccb6342d22a3c1cb&m=&cu=https://www.dsu.edu.in/admissions-international/" target="_blank" rel="noreferrer">
              Enquire Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-2xl border-2 border-blue-500 px-8 py-6 text-lg font-semibold text-blue-500"
            asChild
          >
            <a href="mailto:admissions@dsu.edu.in?subject=International%20Admissions%20Enquiry">
              Email Admissions
              <MailIcon />
            </a>
          </Button>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <SupportCard
            icon={MapPin}
            title="Campus Location"
            description="Devarakaggalahalli, Harohalli, Kanakapura Road, Bengaluru – 562 112"
          />
          <SupportCard
            icon={PhoneCall}
            title="Helpline"
            description="Call +91 96060 22152 / 22150 / 22149 for NRI & foreign admissions."
          />
          <SupportCard
            icon={CloudLightning}
            title="Visa & Travel"
            description="Dedicated support for visa documentation, accommodation, and airport pickup coordination."
          />
        </div>
      </div>
    </section>
  );
}

type SupportCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

function SupportCard({ icon: Icon, title, description }: SupportCardProps) {
  return (
    <div className="rounded-2xl border border-blue-500/20 bg-background/80 p-5 text-left shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
          <Icon className="h-5 w-5" />
        </div>
        <p className="text-sm font-semibold text-foreground">{title}</p>
      </div>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function MailIcon() {
  return <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Z" /><polyline points="22,6 12,13 2,6" /></svg>;
}
