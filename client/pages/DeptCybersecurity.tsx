import { Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { DepartmentNoticeBoard } from "@/components/DepartmentNoticeBoard";
import {
  Sparkles,
  Shield,
  Lock,
  Eye,
  AlertCircle,
  GraduationCap,
  CheckCircle2,
  ChevronRight,
  Download,
  FileText,
  Award,
  Microscope,
  ChevronDown,
  CalendarDays,
  ClipboardList,
  Cpu,
  ArrowRight,
  Zap,
} from "lucide-react";
import { cybersecurityFaculty } from "@/data/cybersecurity-faculty";

export default function DeptCybersecurity() {
  const chairperson = useMemo(() => {
    return cybersecurityFaculty.find((f) => f.title.includes("Chairperson"));
  }, []);
  const specializations = [
    { icon: Lock, label: "Cryptography" },
    { icon: Shield, label: "Network Security" },
    { icon: Eye, label: "Threat Analysis" },
    { icon: AlertCircle, label: "Incident Response" },
  ];

  const highlights = [
    "Comprehensive curriculum covering network security, cryptography, and secure programming",
    "Strong foundation in computer science fundamentals and security principles",
    "Data Security and Network/Cloud Security specializations",
    "Ethical hacking and penetration testing techniques",
    "Secure coding practices and vulnerability assessment",
    "Industry partnerships and practical internship opportunities with leading security firms",
  ];

  const careers = [
    "Security Analyst → Senior Security Engineer → Security Manager",
    "Penetration Tester → Security Architect → Information Security Leadership",
    "Cloud Security Engineer → Identity & Access Management Specialist → Solutions Architect",
    "Graduates work across technology firms, finance, healthcare, government, and cybersecurity organizations",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="dept-hero-section relative pt-40 md:pt-0">
        <div className="h-[70vh] md:h-[65vh] max-h-[400px] md:max-h-none w-full overflow-hidden">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fa8fb5b08f627479c819be45e6f114757?format=webp&width=800"
            alt="Department of Cybersecurity"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-3 pb-20 md:pb-0 pt-6 md:pt-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 rounded-full border border-white/20 mb-4 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white font-display">B.Tech CSE (Cybersecurity)</span>
            </div>
            <h1 className="headline-1 text-white leading-tight font-display">Department of Cybersecurity</h1>
            <p className="subheadline text-white/90 max-w-2xl mt-3 font-body">
              A specialized department at the School of Engineering, DSU, focused on information security, cryptography, cyber defense, and secure digital systems.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {specializations.map((s, i) => (
                <span key={i} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs backdrop-blur">
                  <s.icon className="w-3.5 h-3.5" /> {s.label}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://admissions.dsu.edu.in/"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="bg-brand-gradient text-foreground">Apply Now <GraduationCap className="w-4 h-4 ml-2" /></Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="px-3 py-8 bg-gradient-to-r from-brand-blue/5 via-brand-blue/5 to-brand-blue/5 border-y border-border/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="headline-2 font-display mb-2">Academic Program</h2>
            <p className="text-foreground/80 font-body">A structured undergraduate program designed to build strong foundations in computer science and cybersecurity principles.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {/* B.Tech Program */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-5 h-5 text-brand-blue" />
                  <Badge className="bg-brand-blue/20 text-brand-blue border-brand-blue/30">Undergraduate</Badge>
                </div>
                <CardTitle className="font-display">B.Tech CSE (Cybersecurity)</CardTitle>
                <CardDescription className="font-body">4-Year Program</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground font-body">With specializations in:</p>
                <div className="flex flex-wrap gap-2">
                  {["Network Security", "Cryptography", "Threat Analysis", "Incident Response"].map((spec, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">{spec}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-display">Why Choose Cybersecurity?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm font-body">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Industry Leadership Partnerships</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Practical Security Labs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>High-Demand Career Path</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-3 py-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-5 items-start">
          <div className="lg:col-span-2 space-y-3">
            <div>
              <h2 className="headline-3 font-display mb-2">About the Department</h2>
              <p className="text-foreground/90 font-body mb-4">
                The Department of Cybersecurity at DSU focuses on securing digital infrastructure through strong foundations in computer science, security engineering, and applied cyber defense.
              </p>
            </div>
            <h3 className="headline-4 font-display">Overview</h3>
            <p className="text-foreground leading-relaxed font-body">
              B.Tech CSE (Cybersecurity) is designed to address the industry's increasing demand for skilled security professionals in the public and private sector. The program covers core computer science subjects as well as cybersecurity-specific courses, with emphasis on nurturing students with the knowledge and skills required to secure computers, detect and analyze attacks and threats, respond to attacks, and develop security policies, procedures, and standards.
            </p>
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-display">Academic Strengths</CardTitle>
                <CardDescription className="font-body">Core competencies powering our program</CardDescription>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-3 pt-0">
                {highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="overflow-hidden border border-border/50 bg-card/50">
              <div className="relative h-40">
                <img src="https://images.unsplash.com/photo-1563986768609-7f64142852dc?q=80&w=1200&auto=format&fit=crop" alt="Cybersecurity Labs" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Fast Facts</CardTitle>
                <CardDescription className="font-body">What sets Cybersecurity at DSU apart</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <div className="flex items-center justify-between"><span>Program Type</span><span className="font-medium">B.Tech</span></div>
                <div className="flex items-center justify-between"><span>Duration</span><span className="font-medium">4 Years</span></div>
                <div className="flex items-center justify-between"><span>Industry Focus</span><span className="font-medium">Security & Protection</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <LabsFacilitiesCarousel />

      {/* Leadership Section */}
      <section className="px-3 py-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="headline-3 font-display mb-8">Department Leadership</h2>
          <div className="max-w-4xl mb-12 p-6 rounded-2xl bg-card/40 border border-brand-blue/20">
            <h3 className="headline-4 font-display mb-3">Message from the Chairperson</h3>
            <p className="text-foreground/90 font-body leading-relaxed">
              The Cybersecurity department at DSU emphasizes rigorous technical foundations, ethical security practices, and applied problem-solving. Our goal is to prepare graduates who can secure digital systems across industry, government, and critical infrastructure.
            </p>
          </div>
          <div className="grid auto-rows-max gap-3 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {chairperson && (
              <div>
                <div className="group relative overflow-hidden rounded-lg border border-border/40 bg-card/40 backdrop-blur-sm hover:shadow-lg hover:shadow-brand-blue/10 transition-all h-full">
                  <div className="relative">
                    <div className="aspect-[1/1.3] w-full"></div>
                    <img src={chairperson.image} alt={chairperson.name} className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 p-2 w-full">
                    <div className="text-white text-xs opacity-80 line-clamp-1">Chairperson</div>
                    <div className="text-white font-semibold text-xs font-display line-clamp-2">{chairperson.name}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="mt-6">
            <Link to="/academics/engineering/cybersecurity/faculty">
              <Button variant="outline" className="border-brand-blue/40 hover:bg-brand-blue/10">
                Explore full faculty list
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="px-3 py-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-5 items-start">
          <div>
            <h2 className="headline-3 mb-4 font-display">Career Pathways</h2>
            <Card className="border border-border/50 bg-card/50">
              <CardContent className="p-3 grid gap-3">
                {careers.map((c, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-foreground font-body">
                    <ChevronRight className="w-3 h-3 text-brand-blue mt-1" />
                    <span>{c}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <div>
            <h2 className="headline-3 mb-4 font-display">Get in Touch</h2>
            <Card className="overflow-hidden border border-border/50 bg-card/50">
              <div className="relative h-40">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop" alt="Contact Cybersecurity" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Department Contact</CardTitle>
                <CardDescription className="font-body">Chairperson, Cybersecurity</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <div className="flex items-center justify-between"><span>Email</span><a className="font-medium hover:underline" href="mailto:chairman-cybersec@dsu.edu.in">chairman-cybersec@dsu.edu.in</a></div>
                <div className="flex items-center justify-between"><span>Phone</span><span className="font-medium">080-49092935</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CurriculumLibrary />

      <AccreditationDocuments />

      <AnnouncementBanner priority="high" variant="banner" />
      <DepartmentNoticeBoard department="Cybersecurity" />

      {/* Quick Links Section */}
      <section className="px-3 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="headline-2 mb-3 font-display">
              <span className="text-foreground">Explore </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                More Opportunities
              </span>
            </h2>
            <p className="text-foreground/80 font-body max-w-2xl mx-auto">
              Discover research, placements, admission pathways, and Centers of Excellence at DSU
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            <Link
              to="/centre-of-excellence"
              className="group rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 flex items-center justify-center">
                  <Award className="h-12 w-12 text-brand-blue/70 group-hover:text-brand-blue transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-blue transition-colors">
                    Centre of Excellence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    Immersive innovation labs powered by industry leaders
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link
              to="/research"
              className="group rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 flex items-center justify-center">
                  <Microscope className="h-12 w-12 text-brand-blue/70 group-hover:text-brand-blue transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-blue transition-colors">
                    Research & Innovation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    Cutting-edge cybersecurity research initiatives
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link
              to="/placements"
              className="group rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 flex items-center justify-center">
                  <GraduationCap className="h-12 w-12 text-brand-blue/70 group-hover:text-brand-blue transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-blue transition-colors">
                    Placements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    Career pathways with leading cybersecurity companies
                  </p>
                </CardContent>
              </Card>
            </Link>

            <a
              href="https://admissions.dsu.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 flex items-center justify-center">
                  <Cpu className="h-12 w-12 text-brand-blue/70 group-hover:text-brand-blue transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-blue transition-colors">
                    Admissions
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p className="text-sm text-foreground/80 font-body">
                    Join DSU Cybersecurity
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

      {/* CTA */}
      <section className="px-3 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl p-5 border border-brand-blue/20 bg-brand-blue/5">
            <h3 className="headline-3 mb-3 font-display">Join DSU Cybersecurity</h3>
            <p className="text-foreground mb-6 font-body">Explore programs, discover cutting-edge research, and launch your career in Cybersecurity and Information Protection.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://admissions.dsu.edu.in/"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="bg-brand-gradient text-foreground">Apply Now<GraduationCap className="w-4 h-4 ml-2" /></Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

interface CurriculumProgram {
  id: string;
  label: string;
  description: string;
  image: string;
  batches: CurriculumBatch[];
}

interface CurriculumBatch {
  year: string;
  summary: string;
  documentUrl?: string;
}

interface LabItem {
  title: string;
  image: string;
}

interface NoticeItem {
  id: string;
  title: string;
  category: "Event" | "News" | "Announcement";
  date: string;
  description: string;
  image?: string;
  link?: string;
}

function CurriculumLibrary() {
  const [openProgram, setOpenProgram] = useState<string | null>(null);

  const programs: CurriculumProgram[] = [
    {
      id: "btech",
      label: "B.Tech CSE (Cybersecurity)",
      description: "4-year undergraduate program with specialized tracks in network security, cryptography, and secure systems",
      image: "https://images.unsplash.com/photo-1563986768609-7f64142852dc?q=80&w=600&h=400&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Foundations in computer science, network fundamentals, and security principles",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/Cybersec-dept/curriculum/BTech-Cybersec-Curriculum-2025-26.pdf",
        },
        {
          year: "2026-27",
          summary: "Cryptography, network security, and secure coding techniques",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/Cybersec-dept/curriculum/BTech-Cybersec-Curriculum-2026-27.pdf",
        },
        {
          year: "2027-28",
          summary: "Advanced threat analysis, penetration testing, and incident response",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/Cybersec-dept/curriculum/BTech-Cybersec-Curriculum-2027-28.pdf",
        },
        {
          year: "2028-29",
          summary: "Capstone projects, security architecture design, and industry internships",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/Cybersec-dept/curriculum/BTech-Cybersec-Curriculum-2028-29.pdf",
        },
      ],
    },
  ];

  return (
    <section className="px-3 py-8 bg-gradient-to-r from-brand-blue/5 via-brand-blue/5 to-brand-blue/5">
      <div className="mx-auto max-w-6xl space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="headline-2 mb-3 font-display">
              <span className="text-foreground">Curriculum </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Library
              </span>
            </h2>
            <p className="max-w-2xl text-sm text-foreground sm:text-base font-body">
              Explore comprehensive curriculum for the B.Tech Cybersecurity program. Access detailed course structures, learning outcomes, and downloadable syllabi.
            </p>
          </div>
          <Badge className="w-fit rounded-full bg-brand-blue/15 px-4 py-2 text-xs font-semibold text-brand-blue border border-brand-blue/20">
            2025 – 2029
          </Badge>
        </div>

        <div className="grid gap-3">
          {programs.map((program) => {
            const isOpen = openProgram === program.id;

            return (
              <div
                key={program.id}
                className="rounded-3xl border-2 border-brand-blue/30 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/10 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.label}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-3 bg-background/50 backdrop-blur-sm space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge className="rounded-full border bg-brand-blue/15 text-brand-blue border-brand-blue/20">
                      Undergraduate
                    </Badge>
                  </div>
                  <div>
                    <h3 className="headline-3 font-display text-foreground mb-2">{program.label}</h3>
                    <p className="text-sm text-foreground/80 font-body">{program.description}</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-brand-blue/30 hover:bg-brand-blue/10 text-brand-blue hover:text-brand-blue"
                    onClick={() => setOpenProgram(isOpen ? null : program.id)}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isOpen ? "Hide" : "View"} Batches
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </span>
                  </Button>

                  {isOpen && (
                    <div className="mt-4 space-y-3 border-t border-border/20 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                      {program.batches.map((batch, batchIdx) => (
                        <div
                          key={`${program.id}-${batch.year}`}
                          className={`rounded-xl border border-border/40 bg-card/70 p-3 transition-all hover:border-brand-blue/40 ${
                            batchIdx === 0 ? "ring-2 ring-brand-blue/20" : ""
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2">
                              <Badge className="rounded-full border text-xs bg-brand-blue/20 text-brand-blue border-brand-blue/30">
                                <CalendarDays className="h-3 w-3 mr-1" />
                                {batch.year}
                              </Badge>
                              {batchIdx === 0 && (
                                <Badge className="rounded-full bg-brand-blue/20 text-brand-blue border-brand-blue/30 border text-xs">
                                  <Zap className="h-3 w-3 mr-1" />
                                  Current
                                </Badge>
                              )}
                            </div>
                          </div>
                          <p className="text-xs text-foreground/80 font-body mb-3 leading-relaxed">{batch.summary}</p>
                          {batch.documentUrl && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full justify-center gap-1 rounded text-xs font-semibold bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20"
                              asChild
                            >
                              <a href={batch.documentUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1">
                                <Download className="h-3 w-3" />
                                PDF
                              </a>
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LabsFacilitiesCarousel() {
  const [currentLabIndex, setCurrentLabIndex] = useState(0);

  const labs: LabItem[] = [
    { title: "Network Security Lab", image: "https://images.unsplash.com/photo-1550751827-4bd582f200e7?q=80&w=1200&auto=format&fit=crop" },
    { title: "Cryptography Lab", image: "https://images.unsplash.com/photo-1563986768609-7f64142852dc?q=80&w=1200&auto=format&fit=crop" },
    { title: "Penetration Testing Studio", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop" },
    { title: "Incident Response Center", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" },
    { title: "Secure Coding Lab", image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?q=80&w=1200&auto=format&fit=crop" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLabIndex((prev) => (prev + 1) % labs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [labs.length]);

  const currentLab = labs[currentLabIndex];

  return (
    <section className="px-3 py-8 bg-gradient-to-r from-brand-blue/5 to-brand-blue/5">
      <div className="max-w-7xl mx-auto space-y-3">
        <div className="space-y-3 mb-4">
          <p className="text-foreground/80 font-body">Specialized cybersecurity laboratories support hands-on learning in cryptography, secure networks, threat detection, and cyber defense simulations.</p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="headline-3 mb-2 font-display">Labs & Facilities</h2>
            <p className="text-sm text-foreground/80 font-body">Explore our infrastructure ecosystem</p>
          </div>
          <div className="text-xs text-foreground/60 font-body">
            {currentLabIndex + 1} of {labs.length}
          </div>
        </div>

        <Card className="group overflow-hidden rounded-3xl border-2 border-border/40 bg-card/40 backdrop-blur-sm">
          <div className="relative h-80 overflow-hidden">
            <img
              src={currentLab.image}
              alt={currentLab.title}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
          <CardContent className="p-3">
            <CardTitle className="font-display text-2xl text-foreground">{currentLab.title}</CardTitle>
          </CardContent>
        </Card>

        <div className="flex items-center justify-between gap-4">
          <div className="flex gap-2">
            {labs.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentLabIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentLabIndex
                    ? "bg-brand-blue w-8"
                    : "bg-border/40 w-2 hover:bg-border/60"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-border/40"
              onClick={() => setCurrentLabIndex((prev) => (prev - 1 + labs.length) % labs.length)}
            >
              ← Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-border/40"
              onClick={() => setCurrentLabIndex((prev) => (prev + 1) % labs.length)}
            >
              Next →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function AccreditationDocuments() {
  const documents = [
    {
      title: "Board of Studies (BOS)",
      abbr: "BOS",
      url: "https://www.dsu.edu.in/images/Engineering/Cybersec-dept/accreditation/BOS.pdf",
    },
    {
      title: "Program Educational Objectives",
      abbr: "PEO",
      url: "https://www.dsu.edu.in/images/Engineering/Cybersec-dept/accreditation/PEO.pdf",
    },
    {
      title: "Program Outcomes",
      abbr: "PO",
      url: "https://www.dsu.edu.in/images/Engineering/Cybersec-dept/accreditation/PO.pdf",
    },
    {
      title: "Program Specific Outcomes",
      abbr: "PSO",
      url: "https://www.dsu.edu.in/images/Engineering/Cybersec-dept/accreditation/PSO.pdf",
    },
  ];

  return (
    <section className="px-3 py-12 bg-background/50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-2">Accreditation Documents</h3>
          <p className="text-xs text-foreground/50 font-body">Program documentation and learning outcomes</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {documents.map((doc, idx) => (
            <a
              key={idx}
              href={doc.url}
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-lg border border-border/30 bg-card/30 p-4 transition-all hover:border-brand-blue/40 hover:bg-card/50 hover:shadow-md hover:shadow-brand-blue/5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue/20 transition-colors">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold text-brand-blue">{doc.abbr}</div>
                  <p className="text-xs text-foreground/70 line-clamp-2">{doc.title}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function DepartmentNoticeBoard({ department }: { department: string }) {
  const { announcements, news: newsItems, events: eventItems } = getDepartmentContent("Engineering", department);

  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  useEffect(() => {
    if (announcements.length === 0) return;
    const interval = setInterval(() => {
      setCurrentAnnouncementIndex((prev) => (prev + 1) % announcements.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [announcements.length]);

  useEffect(() => {
    if (newsItems.length === 0) return;
    const interval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % newsItems.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [newsItems.length]);

  useEffect(() => {
    if (eventItems.length === 0) return;
    const interval = setInterval(() => {
      setCurrentEventIndex((prev) => (prev + 1) % eventItems.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [eventItems.length]);

  const renderCarousel = (title: string, items: CarouselItem[], currentIndex: number, setCurrentIndex: (idx: number) => void, category: "Announcement" | "News" | "Event") => {
    const styles = getCategoryStyles(category);
    if (items.length === 0) {
      return (
        <div className="space-y-4">
          <div className={`flex items-center gap-2 px-4 py-3 rounded-xl border-l-4 ${styles.borderColor} ${styles.bgColor}`}>
            <h3 className={`headline-4 font-display ${styles.textColor}`}>{title}</h3>
          </div>
          <p className="text-xs text-foreground/60 italic p-4 text-center">No items to display</p>
        </div>
      );
    }

    const currentItem = items[currentIndex];

    return (
      <div className="space-y-4">
        <div className={`flex items-center gap-2 px-4 py-3 rounded-xl border-l-4 ${styles.borderColor} ${styles.bgColor}`}>
          <h3 className={`headline-4 font-display ${styles.textColor}`}>{title}</h3>
          <Badge className="ml-auto text-xs">{currentIndex + 1} / {items.length}</Badge>
        </div>

        <Card className="group overflow-hidden rounded-2xl border-2 border-border/30 bg-card/40 backdrop-blur-sm">
          {currentItem.image && (
            <div className="relative h-48 overflow-hidden">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          )}
          <CardContent className="p-4 space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <h4 className="font-display font-semibold text-sm text-foreground mb-2 line-clamp-2">{currentItem.title}</h4>
                <p className="text-xs text-foreground/70 line-clamp-2">{currentItem.description}</p>
              </div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-border/20">
              <span className="text-xs font-semibold text-foreground/60">{currentItem.date}</span>
              {currentItem.link && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 px-2 text-xs bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20"
                  asChild
                >
                  <a href={currentItem.link} target="_blank" rel="noreferrer">
                    <Download className="h-3 w-3 mr-1" />
                    PDF
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-between gap-2">
          <div className="flex gap-1">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === currentIndex
                    ? `${styles.bgColor} w-6`
                    : "bg-border/40 w-1.5 hover:bg-border/60"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-1">
            <Button
              variant="outline"
              size="sm"
              className="h-7 px-2 text-xs"
              onClick={() => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)}
            >
              ←
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-7 px-2 text-xs"
              onClick={() => setCurrentIndex((prev) => (prev + 1) % items.length)}
            >
              →
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="notice-board" className="px-3 py-8">
      <div className="mx-auto max-w-7xl space-y-4">
        <h2 className="headline-2 mb-3 font-display">
          <span className="text-foreground">Department </span>
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            Notice Board
          </span>
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {renderCarousel("Events", eventItems, currentEventIndex, setCurrentEventIndex, "Event")}
          {renderCarousel("News", newsItems, currentNewsIndex, setCurrentNewsIndex, "News")}
          {renderCarousel("Announcements", announcements, currentAnnouncementIndex, setCurrentAnnouncementIndex, "Announcement")}
        </div>
      </div>
    </section>
  );
}
