import { useMemo } from "react";
import { Link } from "react-router-dom";

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
  Award,
  BookOpen,
  Brain,
  CloudLightning,
  ContactRound,
  Cpu,
  Globe2,
  Home,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Star,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Course = {
  school: string;
  level: string;
  programs: string[];
};

type Award = {
  title: string;
  description: string;
};

type Instruction = {
  title: string;
  content: string | string[];
};

const awards: Award[] = [
  {
    title: "NAAC Accreditation",
    description: "Accredited with A+ grade for academic excellence",
  },
  {
    title: "IIRF Top 19",
    description: "Ranked among top 19 private engineering colleges in India",
  },
  {
    title: "AICTE Approved",
    description: "Approved for engineering and professional programmes",
  },
  {
    title: "UGC Recognized",
    description: "Recognized as a premier private university",
  },
];

const courses: Course[] = [
  {
    school: "School of Engineering",
    level: "UG Programs",
    programs: [
      "B.Tech Computer Science & Engineering",
      "B.Tech Computer Science & Engineering (Data Sciences)",
      "B.Tech Computer Science & Engineering (Cyber Security)",
      "B.Tech Computer Science & Engineering (Artificial Intelligence and Machine Learning)",
      "B.Tech Robotics & AI",
      "B.Tech Electronics & Communication Engineering",
      "B.Tech Mechanical Engineering",
      "B.Tech Computer Science & Technology",
      "B.Tech Aerospace Engineering",
      "B Voc Mechatronics",
      "B Voc CSE (Data Analytics)",
      "B Voc Tool Engineering",
      "B Voc Pharmaceutical Manufacturing Technologies",
      "B Voc CSE (Computer Engineering and IT Infrastructure)",
      "BCA - Bachelor of Computer Applications",
    ],
  },
  {
    school: "School of Engineering",
    level: "PG Programs",
    programs: [
      "M.Tech Computer Science & Engineering",
      "M.Tech Embedded System",
      "M.Tech Design Engineering",
      "MCA - Master of Computer Applications",
    ],
  },
  {
    school: "School of Law",
    level: "UG Programs",
    programs: [
      "B.A. LL.B (Hons.) - 5 year integrated course",
      "B.B.A. LL.B (Hons.) - 5 year integrated course",
      "LL.B - 3 year law course",
    ],
  },
  {
    school: "School of Basic and Applied Sciences",
    level: "UG Programs",
    programs: [
      "Bachelor of Science (Honours) - Biochemistry - 4 years",
      "Bachelor of Science (Honours) - Biotechnology - 4 years",
      "Bachelor of Science (Honours) - Genetics - 4 years",
      "Bachelor of Science (Honours) - Microbiology - 4 years",
      "Bachelor of Science (Honours) - Chemistry - 4 years",
      "B.Sc (Biotechnology, Biochemistry and Genetics)",
      "B.Sc (Biotechnology, Chemistry and Microbiology)",
      "B.Sc (Microbiology, Genetics and Biochemistry)",
    ],
  },
  {
    school: "School of Basic and Applied Sciences",
    level: "PG Programs",
    programs: [
      "M.Sc Biochemistry",
      "M.Sc Biotechnology",
      "M.Sc Microbiology",
      "M.Sc Human Genetics",
    ],
  },
  {
    school: "School of Commerce and Management",
    level: "UG Programs",
    programs: [
      "BBA Regular",
      "BBA BFSI",
      "BBA Retail",
      "B.Com - Regular",
      "B.Com - ACCA Integrated",
      "B.Com - CMA Integrated",
      "B.Com - With CA Coaching",
    ],
  },
  {
    school: "School of Commerce and Management",
    level: "PG Programs",
    programs: ["MBA"],
  },
  {
    school: "College of Allied Health Sciences",
    level: "UG Programs",
    programs: [
      "B.Sc Radiology and Imaging Technology",
      "B.Sc MLT - Medical Lab Technology",
      "B.Sc Operation Theatre Technology (OTT)",
      "B.Sc RDT - Renal Dialysis Technology",
      "B.Sc EET - Emergency & Trauma Care Technology",
      "B.Sc Audiology & Speech Language Pathology",
      "B.Sc Cardiac Care Technology",
      "B.Sc Optometry",
      "B.Sc Anesthesia and Operation Theatre Technology",
    ],
  },
  {
    school: "College of Allied Health Sciences",
    level: "PG Programs",
    programs: ["MPH - Masters in Public Health"],
  },
  {
    school: "College of Pharmaceutical Sciences",
    level: "UG Programs",
    programs: ["B.Pharm"],
  },
  {
    school: "College of Pharmaceutical Sciences",
    level: "PG Programs",
    programs: ["M Pharma", "Pharm D"],
  },
  {
    school: "College of Nursing Sciences",
    level: "UG Programs",
    programs: ["B.Sc Nursing", "PB B.Sc Nursing"],
  },
  {
    school: "College of Nursing Sciences",
    level: "PG Programs",
    programs: ["M.Sc Nursing"],
  },
  {
    school: "College of Physiotherapy",
    level: "UG Programs",
    programs: ["Bachelor's in Physiotherapy (B.P.T.)"],
  },
  {
    school: "College of Physiotherapy",
    level: "PG Programs",
    programs: ["Master's in Physiotherapy (M.P.T.)"],
  },
  {
    school: "School of Arts, Design and Humanities",
    level: "UG Programs",
    programs: [
      "B.Design",
      "BA Journalism and Mass Communication",
    ],
  },
  {
    school: "School of Computer Applications",
    level: "UG Programs",
    programs: [
      "BCA - Bachelor of Computer Applications",
      "B.Sc in Data Science",
    ],
  },
  {
    school: "School of Computer Applications",
    level: "PG Programs",
    programs: [
      "MCA - Master of Computer Applications",
      "M.Sc in Data Science",
    ],
  },
  {
    school: "School of Medicine",
    level: "UG Programs",
    programs: ["MBBS"],
  },
  {
    school: "Faculty of Engineering",
    level: "Ph.D Programs",
    programs: [
      "Ph.D in CSE (AI & ML, Data Science, Cybersecurity, AI & Robotics)",
      "Ph.D in Electronics & Communication Engineering",
      "Ph.D in Mechanical Engineering",
      "Ph.D in Aerospace Engineering",
      "Ph.D in Mathematics, Chemistry & Physics",
    ],
  },
  {
    school: "Faculty of Commerce & Management Studies",
    level: "Ph.D Programs",
    programs: ["Ph.D in Commerce & Management Studies"],
  },
  {
    school: "Faculty of Basic & Applied Sciences",
    level: "Ph.D Programs",
    programs: ["Ph.D in Life Sciences"],
  },
  {
    school: "Faculty of Health Sciences (Pharmaceutical Sciences)",
    level: "Ph.D Programs",
    programs: [
      "Ph.D in Pharmaceutics",
      "Ph.D in Pharmacology",
      "Ph.D in Pharmaceutical Chemistry",
      "Ph.D in Pharmacognosy",
      "Ph.D in Pharmaceutical Analysis",
      "Ph.D in Pharmacy Practice",
      "Ph.D in Pharmaceutical Regulatory Affairs",
      "Ph.D in Pharmaceutical Quality Assurance",
    ],
  },
  {
    school: "Faculty of Health Sciences (Physiotherapy)",
    level: "Ph.D Programs",
    programs: ["Ph.D in Physiotherapy"],
  },
  {
    school: "Faculty of Health Sciences (Nursing Sciences)",
    level: "Ph.D Programs",
    programs: ["Ph.D in Nursing Sciences"],
  },
  {
    school: "Faculty of School of Law",
    level: "Ph.D Programs",
    programs: ["Ph.D in Law"],
  },
  {
    school: "Faculty of School of Arts, Design and Humanities",
    level: "Ph.D Programs",
    programs: ["Ph.D in Journalism and Mass Communication"],
  },
  {
    school: "Faculty of School of Computer Applications",
    level: "Ph.D Programs",
    programs: ["Ph.D in Computer Applications"],
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
    title: "Required Documents For Admission",
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
    title: "Fee Payment Options",
    content:
      "Accepted payment methods include Credit Card, Debit Card, Net Banking, and UPI/Wallets.",
  },
  {
    title: "Welcome",
    content:
      "We look forward to welcoming you to Dayananda Sagar University.",
  },
];


export default function InternationalAdmissions() {
  return (
    <div className="bg-background text-foreground">
      <HeroSection />
      <AwardsSection />
      <AboutSection />
      <NVIDIAPartnershipSection />
      <CoursesSection />
      <CampusLifeSection />
      <CentreOfExcellenceSection />
      <InstructionsSection />
      <ApplySection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-background py-10 lg:py-28">
      <div className="absolute inset-0">
        <div className="absolute -top-10 -left-14 h-64 w-64 rounded-full bg-blue-500/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/25 blur-3xl" />
      </div>
      <div className="hero-international-content relative mx-auto flex max-w-6xl flex-col gap-12 px-3 lg:flex-row lg:items-center lg:justify-center">
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 body-sm font-semibold text-blue-500">
            <Globe2 className="h-4 w-4" />
            International & NRI Admissions 2026
          </div>
          <h1 className="mt-8 headline-1 leading-tight">
            Empowering Students with <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Knowledge, Discovery & Healing</span>
          </h1>
          <p className="mt-6 subheadline text-foreground">
            Perfect for International Students seeking a world-class education in Bangalore
          </p>
          <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="body-sm font-semibold text-blue-500">
                  Scholarship Upto 40%
                </p>
                <p className="body-sm text-foreground">*For Eligible Students</p>
              </div>
              <Button
                size="lg"
                className="rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 px-8 py-6 title-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:shadow-xl"
                asChild
              >
                <a href="https://international-admissions.dsu.edu.in" target="_blank" rel="noopener noreferrer">Apply Now
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AwardsSection() {
  return (
    <section className="bg-gradient-to-br from-yellow-500/5 via-amber-500/5 to-background px-3 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <Badge className="mx-auto w-fit rounded-full bg-yellow-500/15 px-4 py-2 text-yellow-600">
            <Award className="mr-2 h-4 w-4 inline" />
            Awards & Recognition
          </Badge>
          <h2 className="mt-4 headline-3">Recognized for Excellence</h2>
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {awards.map((award) => (
            <Card
              key={award.title}
              className="h-full border border-yellow-500/20 bg-card/80 shadow-sm transition hover:-translate-y-1 hover:shadow-yellow-500/10"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-600">
                  <Star className="h-6 w-6" />
                </div>
                <CardTitle className="title-sm font-semibold text-foreground">
                  {award.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center body-sm text-foreground">
                {award.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="px-3 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="headline-3">Experience International Education</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8 shadow-lg shadow-blue-500/10">
            <p className="leading-relaxed body-md text-foreground">
              Experience the pinnacle of academic excellence at our multidisciplinary and interdisciplinary university, where innovation flourishes and students are inspired to grow, excel, invent, and innovate.
            </p>
          </div>
          <div className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8 shadow-lg shadow-blue-500/10">
            <p className="leading-relaxed body-md text-foreground">
              Our vibrant community, comprising over 50,000 alumni, coupled with on-campus hostel facilities and a focus on interactive learning, creates a dynamic environment for personal and professional development.
            </p>
          </div>
          <div className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8 shadow-lg shadow-blue-500/10">
            <p className="leading-relaxed body-md text-foreground">
              Our state-of-the-art infrastructure supports cutting-edge research and technology, offering unparalleled opportunities for students to engage in groundbreaking discoveries.
            </p>
          </div>
          <div className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8 shadow-lg shadow-blue-500/10">
            <p className="leading-relaxed body-md text-foreground">
              Recognized as a premier institution for placements and internships, we provide a world-class education in a global setting, shaping the leaders of tomorrow.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Button
            size="lg"
            className="rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 px-8 py-6 title-sm font-semibold text-white"
            asChild
          >
            <a href="https://international-admissions.dsu.edu.in" target="_blank" rel="noopener noreferrer">Apply Now
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function NVIDIAPartnershipSection() {
  return (
    <section className="px-3 py-8 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-purple-500/5">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-10 shadow-lg shadow-purple-500/20">
          <div className="mb-8 text-center">
            <Badge className="mx-auto w-fit rounded-full bg-purple-500/20 px-4 py-2 text-purple-500 mb-4">
              Industry Partnership
            </Badge>
            <h2 className="headline-2 text-foreground mb-4">
              Powered by <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">NVIDIA AI Infrastructure</span>
            </h2>
            <p className="mt-4 body-lg text-foreground/80 max-w-3xl mx-auto">
              Dayananda Sagar University has partnered with NVIDIA to create a complete, enterprise-grade AI infrastructure for transforming education and research globally.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mt-8">
            <Card className="border border-purple-500/20 bg-background/80 shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/20 text-purple-500">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <CardTitle className="title-sm">NVIDIA DGX B200</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-foreground/80">
                Enterprise-grade GPU infrastructure enabling large-scale AI model training, deep learning research, and high-performance computing for students and faculty.
              </CardContent>
            </Card>

            <Card className="border border-purple-500/20 bg-background/80 shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/20 text-purple-500">
                    <Brain className="h-6 w-6" />
                  </div>
                  <CardTitle className="title-sm">CUDA & AI Frameworks</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-foreground/80">
                Industry-standard tools including PyTorch, TensorFlow, RAPIDS, and CUDA programming to build, train, and deploy AI systems at scale.
              </CardContent>
            </Card>

            <Card className="border border-purple-500/20 bg-background/80 shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/20 text-purple-500">
                    <Zap className="h-6 w-6" />
                  </div>
                  <CardTitle className="title-sm">Research Excellence</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-foreground/80">
                Access to world-class infrastructure supporting cutting-edge AI/ML research across computer vision, NLP, robotics, and biomedical domains.
              </CardContent>
            </Card>

            <Card className="border border-purple-500/20 bg-background/80 shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/20 text-purple-500">
                    <Award className="h-6 w-6" />
                  </div>
                  <CardTitle className="title-sm">Career Advantage</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-foreground/80">
                Hands-on NVIDIA experience and GPU-certified engineers command 20-40% higher salaries in the AI industry. Direct recruitment from leading AI companies.
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="body-sm text-foreground/70 mb-4">
              This complete NVIDIA AI infrastructure stack is available at only a handful of elite institutions across India.
            </p>
            <Button
              size="lg"
              className="rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-6 title-sm font-semibold text-white"
              asChild
            >
              <Link to="/nvidia-ai-architecture">
                Explore Full NVIDIA Architecture
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoursesSection() {
  const groupedBySchool = useMemo(() => {
    const groups: { [key: string]: { [key: string]: string[] } } = {};
    courses.forEach((courseItem) => {
      if (!groups[courseItem.school]) {
        groups[courseItem.school] = {};
      }
      if (!groups[courseItem.school][courseItem.level]) {
        groups[courseItem.school][courseItem.level] = [];
      }
      groups[courseItem.school][courseItem.level].push(...courseItem.programs);
    });
    return groups;
  }, []);

  const totalPrograms = courses.reduce((sum, c) => sum + c.programs.length, 0);

  const getLevelColor = (level: string) => {
    if (level.includes("UG")) return "bg-blue-500/10 text-blue-600 border border-blue-500/30";
    if (level.includes("PG")) return "bg-purple-500/10 text-purple-600 border border-purple-500/30";
    if (level.includes("Ph.D")) return "bg-amber-500/10 text-amber-600 border border-amber-500/30";
    return "bg-green-500/10 text-green-600 border border-green-500/30";
  };

  return (
    <section className="bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-background px-3 py-8" id="courses">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <Badge className="mx-auto w-fit rounded-full bg-blue-500/15 px-4 py-2 text-blue-500 mb-4">
            <BookOpen className="mr-2 h-4 w-4 inline" />
            Courses Offered
          </Badge>
          <h2 className="mt-4 headline-3">Comprehensive Programme Portfolio</h2>
          <p className="mt-3 body-lg text-foreground/80 max-w-3xl mx-auto">
            Programmes available at the Harohalli Main Campus with immersive labs, international faculty, and industry-aligned curricula.
          </p>
          <div className="mt-6 flex justify-center gap-6 flex-wrap">
            <div className="text-center">
              <p className="title-lg font-bold text-blue-500">{totalPrograms}</p>
              <p className="body-sm text-foreground/70">Total Programmes</p>
            </div>
            <div className="text-center">
              <p className="title-lg font-bold text-blue-500">
                {Object.keys(groupedBySchool).length}
              </p>
              <p className="body-sm text-foreground/70">Schools & Colleges</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {Object.entries(groupedBySchool).map(([school, levels]) => (
            <div
              key={school}
              className="rounded-2xl border border-blue-500/20 overflow-hidden shadow-lg shadow-blue-500/10 bg-gradient-to-br from-blue-500/5 to-background"
            >
              {/* School Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-5">
                <h3 className="title-sm font-bold text-white">{school}</h3>
              </div>

              {/* Levels & Programs */}
              <div className="p-6 space-y-6">
                {Object.entries(levels).map(([level, programs]) => (
                  <div key={`${school}-${level}`} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Badge className={`rounded-full px-4 py-2 font-semibold ${getLevelColor(level)}`}>
                        {level}
                      </Badge>
                      <span className="body-sm text-foreground/60">
                        {programs.length} programme{programs.length > 1 ? "s" : ""}
                      </span>
                    </div>

                    {/* Programs Grid */}
                    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 pl-6">
                      {programs.map((program) => (
                        <div
                          key={program}
                          className="rounded-lg border border-blue-500/20 bg-background/60 p-4 transition hover:bg-blue-500/10 hover:border-blue-500/40"
                        >
                          <p className="body-sm text-foreground leading-relaxed">
                            {program}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-12 rounded-2xl border border-blue-500/20 bg-background/50 p-6">
          <p className="body-sm font-semibold text-foreground mb-4">
            Program Levels:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded bg-blue-500"></span>
              <span className="body-sm text-foreground/80">
                Undergraduate (UG)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded bg-purple-500"></span>
              <span className="body-sm text-foreground/80">
                Postgraduate (PG)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded bg-amber-500"></span>
              <span className="body-sm text-foreground/80">
                Doctoral (Ph.D)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded bg-green-500"></span>
              <span className="body-sm text-foreground/80">Other</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CampusLifeSection() {
  return (
    <section className="px-3 py-8 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-background">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <Badge className="mx-auto w-fit rounded-full bg-green-500/20 px-4 py-2 text-green-600 mb-4">
            Campus Experience
          </Badge>
          <h2 className="headline-2 text-foreground mb-4">
            Life at DSU
          </h2>
        </div>

        <div className="rounded-3xl overflow-hidden border border-green-500/30 shadow-lg shadow-green-500/20 mb-8">
          <div className="relative h-96 md:h-[500px] w-full overflow-hidden bg-background">
            <video
              src="https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2F6b0c30504ae64c6aba12aa275eeac2e0?alt=media&token=038cd5f6-c13b-43c6-8760-c92abdbbc4dd&apiKey=4aa279a8430d441dba9c55f659831878"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
          </div>
        </div>

        <div className="rounded-3xl border border-green-500/30 bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-10 text-center shadow-lg shadow-green-500/20">
          <p className="body-lg text-foreground/80 max-w-3xl mx-auto mb-8">
            Experience a vibrant community with on-campus hostel facilities, diverse student clubs, cultural events, sports, and interactive learning environments that foster personal growth and lasting friendships.
          </p>
          <Button
            size="lg"
            className="rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-6 title-sm font-semibold text-white"
            asChild
          >
            <Link to="/campus-life">
              Explore Campus Life
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function CentreOfExcellenceSection() {
  return (
    <section className="px-3 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 p-10 text-center shadow-lg shadow-purple-500/20">
          <Badge className="mx-auto w-fit rounded-full bg-purple-500/20 px-4 py-2 text-purple-600 mb-4">
            Research & Innovation
          </Badge>
          <h2 className="headline-2 text-foreground mb-4">
            Centres of Excellence
          </h2>
          <p className="mt-4 body-lg text-foreground/80 max-w-3xl mx-auto mb-8">
            Access our dedicated research hubs equipped with cutting-edge laboratories, design studios, incubation support, and industry collaborations enabling groundbreaking discoveries.
          </p>
          <Button
            size="lg"
            className="rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 px-8 py-6 title-sm font-semibold text-white"
            asChild
          >
            <Link to="/centre-of-excellence">
              Discover Centres of Excellence
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function InstructionsSection() {
  return (
    <section className="bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-background px-3 py-8" id="instructions">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <Badge className="mx-auto w-fit rounded-full bg-blue-500/15 px-4 py-2 text-blue-500">
            Important Instructions
          </Badge>
          <h2 className="mt-4 headline-3">
            Before You Submit Your Application
          </h2>
          <p className="mt-3 body-lg text-foreground">
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
              <AccordionTrigger className="px-3 py-4 text-left title-sm font-semibold text-foreground">
                {instruction.title}
              </AccordionTrigger>
              <AccordionContent className="px-3 pb-6 body-sm text-foreground">
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

function ApplySection() {
  return (
    <section className="px-3 pb-20">
      <div className="mx-auto max-w-5xl rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-500/15 via-indigo-500/15 to-blue-500/15 p-10 text-center shadow-lg shadow-blue-500/10">
        <div className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500/20 px-4 py-2 body-sm font-semibold text-blue-500">
          <MessageCircle className="h-4 w-4" />
          Need More Guidance?
        </div>
        <h2 className="mt-6 headline-3 text-foreground">
          Talk to Our International Admissions Team
        </h2>
        <p className="mt-4 body-lg text-foreground">
          Share your academic goals, visa queries, or scholarship requirements. Our counsellors will connect with you within one business day.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            className="rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 px-8 py-6 title-sm font-semibold text-white hover:from-indigo-500 hover:to-blue-500"
            asChild
          >
            <a href="https://international-admissions.dsu.edu.in" target="_blank" rel="noopener noreferrer">
              Enquire Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-2xl border-2 border-blue-500 px-8 py-6 title-sm font-semibold text-blue-500"
            asChild
          >
            <a href="mailto:international-admissions@dsu.edu.in?subject=International%20Admissions%20Enquiry">
              Email Admissions
              <Mail className="ml-2 h-5 w-5" />
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
            description="Call +91 96060 22152 / 22150 / 22149 for international admissions."
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
        <p className="body-sm font-semibold text-foreground">{title}</p>
      </div>
      <p className="mt-3 body-sm text-foreground leading-relaxed">{description}</p>
    </div>
  );
}
