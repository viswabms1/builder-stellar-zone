import { Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NewsSection } from "@/components/NewsSection";
import { EventsSection } from "@/components/EventsSection";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import {
  Sparkles,
  Brain,
  Bot,
  Eye,
  Cpu,
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
  ArrowRight,
  Zap,
  BookOpen,
  IndianRupee,
} from "lucide-react";
import { schools } from "./Eligibility";
import { aiRoboticsFaculty } from "@/data/ai-robotics-faculty";

export default function DeptAIRobotics() {
  const chairperson = useMemo(() => {
    return aiRoboticsFaculty.find((f) => f.title.includes("Chairman") || f.title.includes("Chairperson"));
  }, []);
  const specializations = [
    { icon: Brain, label: "AI/ML" },
    { icon: Eye, label: "Computer Vision" },
    { icon: Bot, label: "Robotics" },
    { icon: Cpu, label: "Cognitive Tech" },
  ];

  const highlights = [
    "Integrated curriculum covering AI, machine learning, computer vision, and robotics fundamentals",
    "Cognitive technologies: NLP, knowledge representation, and deep learning",
    "AI/ML techniques: supervised learning, unsupervised learning, neural networks, reinforcement learning",
    "Computer vision: image processing, object detection, 3D vision, visual interpretation",
    "Robotics engineering: kinematics, dynamics, motion planning, sensor integration, human-robot interaction",
    "Industry partnerships and internships with leading robotics and AI companies",
  ];

  const careers = [
    "AI/ML Engineer → Senior AI Researcher → AI Research Director",
    "Robotics Engineer → Autonomous Systems Specialist → Technical Lead",
    "Computer Vision Engineer → Vision Systems Architect → Innovation Manager",
    "Career pathways in autonomous vehicles, manufacturing, healthcare, and industrial robotics",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="dept-hero-section relative pt-40 md:pt-0">
        <div className="h-[70vh] md:h-[65vh] max-h-[400px] md:max-h-none w-full overflow-hidden">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F0aa3f9e7f9e04925a0755e2a560ce118?format=webp&width=800"
            alt="Department of AI and Robotics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 pb-20 md:pb-0 pt-6 md:pt-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 rounded-full border border-white/20 mb-4 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white font-display">Department of AI and Robotics</span>
            </div>
            <h1 className="headline-1 text-white leading-tight font-display">Build Intelligent Autonomous Systems</h1>
            <p className="subheadline text-white/90 max-w-2xl mt-3 font-body">
              Master AI, machine learning, computer vision, and robotics to develop intelligent systems at DSU.
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
      <section className="px-6 py-8 bg-gradient-to-r from-brand-magenta/5 via-brand-magenta/5 to-brand-magenta/5 border-y border-border/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="headline-2 font-display mb-2">Programs Offered</h2>
            <p className="text-foreground/80 font-body">Choose your pathway to AI and robotics excellence</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* B.Tech Program */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-5 h-5 text-brand-magenta" />
                  <Badge className="bg-brand-magenta/20 text-brand-magenta border-brand-magenta/30">Undergraduate</Badge>
                </div>
                <CardTitle className="font-display">B.Tech AI and Robotics</CardTitle>
                <CardDescription className="font-body">4-Year Program</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground font-body">With specializations in:</p>
                <div className="flex flex-wrap gap-2">
                  {["AI/ML", "Computer Vision", "Robotics", "Cognitive Tech"].map((spec, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">{spec}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* M.Tech Program */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-5 h-5 text-brand-magenta" />
                  <Badge className="bg-brand-magenta/20 text-brand-magenta border-brand-magenta/30">Postgraduate</Badge>
                </div>
                <CardTitle className="font-display">M.Tech AI and Robotics, School of Engineering, DSU</CardTitle>
                <CardDescription className="font-body">2-Year Program</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground font-body">Advanced research in autonomous systems:</p>
                <div className="flex flex-wrap gap-2">
                  {["Autonomous Systems", "Machine Vision", "Intelligent Control", "Advanced Robotics"].map((spec, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">{spec}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-display">Why Choose AI and Robotics?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm font-body">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-magenta flex-shrink-0" />
                  <span>Industry Lab Partnerships</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand-magenta flex-shrink-0" />
                  <span>Hands-On Robotics Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-brand-magenta flex-shrink-0" />
                  <span>Autonomous Systems Focus</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="headline-3 font-display">Overview</h2>
            <p className="text-foreground leading-relaxed font-body">
              The AI and Robotics program integrates cognitive technologies, AI/ML, computer vision, and robotics to develop intelligent systems capable of autonomous perception, reasoning, and action. The B.Tech AI and Robotics program combines foundational knowledge with cutting-edge tools and hands-on experience in creating systems that can learn, perceive, and act autonomously. The M.Tech Artificial Intelligence and Robotics program provides advanced research opportunities in autonomous systems, intelligent control, machine vision systems, and applications in autonomous vehicles, manufacturing, and industrial automation. Together, these pathways prepare graduates for leadership roles in robotics engineering, autonomous systems design, and AI-driven innovation across diverse sectors.
            </p>
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-display">Curriculum Highlights</CardTitle>
                <CardDescription className="font-body">Designed for AI and robotics innovators</CardDescription>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-3 pt-0">
                {highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-brand-magenta mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="overflow-hidden border border-border/50 bg-card/50">
              <div className="relative h-40">
                <img src="https://images.unsplash.com/photo-1488229297570-58c12e4cef56?q=80&w=1200&auto=format&fit=crop" alt="AI Labs" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Fast Facts</CardTitle>
                <CardDescription className="font-body">What sets AI & Robotics at DSU apart</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <div className="flex items-center justify-between"><span>Program Type</span><span className="font-medium">B.Tech</span></div>
                <div className="flex items-center justify-between"><span>Duration</span><span className="font-medium">4 Years</span></div>
                <div className="flex items-center justify-between"><span>Industry Focus</span><span className="font-medium">AI, Robotics & Automation</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <EligibilityAndFees />

      <CurriculumLibrary />

      <AccreditationDocuments />

      <AnnouncementBanner priority="high" variant="banner" />
      <NewsSection variant="grid" title="Department News" />
      <EventsSection variant="upcoming" title="Upcoming Events" />

      <LabsFacilitiesCarousel />

      {/* Leadership Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="headline-3 font-display">Department Leadership</h2>
            <Link to="/academics/engineering/ai-robotics/faculty">
              <Button variant="outline" className="border-brand-magenta/40 hover:bg-brand-magenta/10">
                Explore full faculty list
              </Button>
            </Link>
          </div>
          <div className="grid auto-rows-max gap-3 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {/* Chairman */}
            {chairperson && (
              <div>
                <div className="group relative overflow-hidden rounded-lg border border-border/40 bg-card/40 backdrop-blur-sm hover:shadow-lg hover:shadow-brand-magenta/10 transition-all h-full">
                  <div className="relative">
                    <div className="aspect-[1/1.3] w-full"></div>
                    <img src={chairperson.image} alt={chairperson.name} className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 p-2 w-full">
                    <div className="text-white text-xs opacity-80 line-clamp-1">{chairperson.title}</div>
                    <div className="text-white font-semibold text-xs font-display line-clamp-2">{chairperson.name}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="headline-3 mb-4 font-display">Career Prospects</h2>
            <Card className="border border-border/50 bg-card/50">
              <CardContent className="p-6 grid gap-3">
                {careers.map((c, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-foreground font-body">
                    <ChevronRight className="w-3 h-3 text-brand-magenta mt-1" />
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
                <img src="https://images.unsplash.com/photo-1516321318423-f06f70a504f9?q=80&w=1200&auto=format&fit=crop" alt="Contact AI Robotics" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Department Contact</CardTitle>
                <CardDescription className="font-body">Chairman, AI and Robotics</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <div className="flex items-center justify-between"><span>Email</span><a className="font-medium hover:underline" href="mailto:chairman-air@dsu.edu.in">chairman-air@dsu.edu.in</a></div>
                <div className="flex items-center justify-between"><span>Phone</span><span className="font-medium">080-49092935</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
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

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link
              to="/centre-of-excellence"
              className="group rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-magenta/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-magenta/20 to-brand-magenta/10 flex items-center justify-center">
                  <Award className="h-12 w-12 text-brand-magenta/70 group-hover:text-brand-magenta transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-magenta transition-colors">
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
              className="group rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-magenta/20 transition-all duration-500 hover:-translate-y-1"
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
                    Cutting-edge AI and robotics research initiatives
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link
              to="/placements"
              className="group rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-orange/20 transition-all duration-500 hover:-translate-y-1"
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
                    Career pathways with leading AI and robotics companies
                  </p>
                </CardContent>
              </Card>
            </Link>

            <a
              href="https://admissions.dsu.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-magenta/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-magenta/20 to-brand-magenta/10 flex items-center justify-center">
                  <Cpu className="h-12 w-12 text-brand-magenta/70 group-hover:text-brand-magenta transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-magenta transition-colors">
                    Admissions
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p className="text-sm text-foreground/80 font-body">
                    Join DSU AI and Robotics
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-brand-magenta group-hover:text-brand-magenta/80 transition-colors">
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
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl p-10 border border-brand-magenta/20 bg-brand-magenta/5">
            <h3 className="headline-3 mb-3 font-display">Join DSU AI and Robotics</h3>
            <p className="text-foreground mb-6 font-body">Explore programs, discover cutting-edge research, and launch your career in AI and Robotics engineering.</p>
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

function EligibilityAndFees() {
  const engineeringSchool = schools.find(s => s.name === "School of Engineering");
  const airPrograms = engineeringSchool?.categories
    .flatMap(cat => cat.programs)
    .filter(p => {
      const name = p.name.toLowerCase();
      const isBTechAIR = name.includes("b.tech") && name.includes("robotics");
      const isMTechAIR = name === "m.tech artificial intelligence and robotics" || name === "m.tech - artificial intelligence and robotics";
      return isBTechAIR || isMTechAIR;
    }) || [];

  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);

  return (
    <section className="px-6 py-8 bg-gradient-to-r from-brand-magenta/5 via-brand-magenta/5 to-brand-magenta/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="headline-2 font-display mb-3">Eligibility & Fees</h2>
          <p className="text-foreground/80 font-body max-w-3xl">
            AI and Robotics programs at School of Engineering, DSU offer both undergraduate and postgraduate pathways. B.Tech follows merit-based admission through entrance exams (CET, JEE Mains, Comed-K). Explore eligibility requirements for each program below.
          </p>
        </div>

        <div className="space-y-4">
          {airPrograms.map((program, idx) => {
            const isBTech = program.name.toLowerCase().includes("b.tech");
            const iconColor = isBTech ? "text-brand-magenta" : "text-brand-magenta";
            return (
            <Card
              key={idx}
              className="border border-border/50 bg-card/50 backdrop-blur-sm cursor-pointer hover:shadow-lg transition-all"
              onClick={() => setExpandedProgram(expandedProgram === program.name ? null : program.name)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-display">{program.name}</CardTitle>
                    <CardDescription className="font-body mt-1">
                      {program.duration && <span>{program.duration} • </span>}
                      {program.eligibility.substring(0, 100)}...
                    </CardDescription>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 ${iconColor} transition-transform ${
                      expandedProgram === program.name ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </CardHeader>

              {expandedProgram === program.name && (
                <CardContent className="space-y-4 border-t border-border/20 pt-4">
                  {/* Eligibility */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <CheckCircle2 className={`w-5 h-5 ${iconColor}`} />
                      Eligibility Criteria
                    </h4>
                    <p className="text-sm text-foreground/80 font-body leading-relaxed">
                      {program.eligibility}
                    </p>
                    {program.eligibilityPoints && program.eligibilityPoints.length > 0 && (
                      <ul className="mt-2 space-y-1">
                        {program.eligibilityPoints.map((point, pidx) => (
                          <li key={pidx} className="text-sm text-foreground/80 flex items-start gap-2">
                            <span className={iconColor}>•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Fee Structure */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <IndianRupee className={`w-5 h-5 ${iconColor}`} />
                      Fee Structure (2026-27)
                    </h4>
                    <div className="grid gap-2">
                      {program.fees.map((fee, fidx) => (
                        <div
                          key={fidx}
                          className="flex justify-between items-center p-3 rounded-lg bg-green-500/10 border border-green-500/20"
                        >
                          <span className="text-sm font-medium text-foreground">{fee.label}</span>
                          <span className="text-base font-semibold text-green-600">{fee.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specializations */}
                  {program.specializations && program.specializations.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Specializations Available</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.specializations.map((spec, sidx) => (
                          <Badge key={sidx} variant="secondary" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Notes */}
                  {program.notes && program.notes.length > 0 && (
                    <div className="space-y-1">
                      {program.notes.map((note, nidx) => (
                        <p key={nidx} className="text-xs text-foreground/60 font-body">
                          ℹ️ {note}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* CTA */}
                  <div className="pt-4 border-t border-border/20">
                    <a href="https://admissions.dsu.edu.in/" target="_blank" rel="noreferrer">
                      <Button className="w-full bg-brand-gradient text-foreground">
                        Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              )}
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CurriculumLibrary() {
  const [openProgram, setOpenProgram] = useState<string | null>(null);

  const programs: CurriculumProgram[] = [
    {
      id: "btech",
      label: "B.Tech CSE (AI & Robotics)",
      description: "4-year undergraduate program integrating AI/ML, computer vision, and robotics for autonomous intelligent systems",
      image: "https://images.unsplash.com/photo-1488229297570-58c12e4cef56?q=80&w=600&h=400&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Fundamentals of AI, robotics basics, and computer vision introduction",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/AIR-dept/curriculum/BTech-AIR-Curriculum-2025-26.pdf",
        },
        {
          year: "2026-27",
          summary: "Machine learning, robotic kinematics, and advanced computer vision techniques",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/AIR-dept/curriculum/BTech-AIR-Curriculum-2026-27.pdf",
        },
        {
          year: "2027-28",
          summary: "Deep learning, autonomous systems, motion planning, and human-robot interaction",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/AIR-dept/curriculum/BTech-AIR-Curriculum-2027-28.pdf",
        },
        {
          year: "2028-29",
          summary: "Capstone projects, AI/robotics applications, and industry partnerships",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/AIR-dept/curriculum/BTech-AIR-Curriculum-2028-29.pdf",
        },
      ],
    },
    {
      id: "mtech",
      label: "M.Tech Artificial Intelligence and Robotics",
      description: "2-year postgraduate program with advanced research in AI-driven autonomous systems",
      image: "https://images.unsplash.com/photo-1581091216562-40c08a5a4183?q=80&w=600&h=400&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Advanced AI techniques, control systems, and intelligent perception for robotics",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/AIR-dept/curriculum/MTech-AIR-Curriculum-2025-26.pdf",
        },
        {
          year: "2026-27",
          summary: "Machine vision systems, autonomous navigation, and human-robot interaction",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/AIR-dept/curriculum/MTech-AIR-Curriculum-2026-27.pdf",
        },
        {
          year: "2027-28",
          summary: "Research specializations in autonomous vehicles, swarm robotics, and AI applications",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/AIR-dept/curriculum/MTech-AIR-Curriculum-2027-28.pdf",
        },
        {
          year: "2028-29",
          summary: "Thesis and research publications in AI and robotics",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/AIR-dept/curriculum/MTech-AIR-Curriculum-2028-29.pdf",
        },
      ],
    },
  ];

  return (
    <section className="px-6 py-16 bg-gradient-to-r from-brand-magenta/5 via-brand-magenta/5 to-brand-magenta/5">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="headline-2 mb-3 font-display">
              <span className="text-foreground">Curriculum </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Library
              </span>
            </h2>
            <p className="max-w-2xl text-sm text-foreground sm:text-base font-body">
              Explore comprehensive curriculum packs for B.Tech and M.Tech AI and Robotics programs. Access detailed course structures, learning outcomes, and downloadable syllabi.
            </p>
          </div>
          <Badge className="w-fit rounded-full bg-brand-magenta/15 px-4 py-2 text-xs font-semibold text-brand-magenta border border-brand-magenta/20">
            2025 – 2029
          </Badge>
        </div>

        <div className="grid gap-6">
          {programs.map((program) => {
            const isOpen = openProgram === program.id;
            const isBTech = program.id === "btech";
            const borderClass = isBTech ? "border-brand-magenta/30" : "border-brand-magenta/30";
            const badgeClass = isBTech ? "bg-brand-magenta/15 text-brand-magenta border-brand-magenta/20" : "bg-brand-magenta/15 text-brand-magenta border-brand-magenta/20";

            return (
              <div
                key={program.id}
                className={`rounded-3xl border-2 ${borderClass} overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-brand-magenta/10 hover:-translate-y-1`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.label}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 bg-background/50 backdrop-blur-sm space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge className={`rounded-full border ${badgeClass}`}>
                      {isBTech ? "Undergraduate" : "Postgraduate"}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="headline-3 font-display text-foreground mb-2">{program.label}</h3>
                    <p className="text-sm text-foreground/80 font-body">{program.description}</p>
                  </div>
                  <Button
                    variant="outline"
                    className={`w-full ${isBTech ? "border-brand-magenta/30 hover:bg-brand-magenta/10 text-brand-magenta hover:text-brand-magenta" : "border-brand-magenta/30 hover:bg-brand-magenta/10 text-brand-magenta hover:text-brand-magenta"}`}
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
                          className={`rounded-xl border border-border/40 bg-card/70 p-3 transition-all hover:border-brand-magenta/40 ${
                            batchIdx === 0 ? "ring-2 ring-brand-magenta/20" : ""
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2">
                              <Badge className="rounded-full border text-xs bg-brand-magenta/20 text-brand-magenta border-brand-magenta/30">
                                <CalendarDays className="h-3 w-3 mr-1" />
                                {batch.year}
                              </Badge>
                              {batchIdx === 0 && (
                                <Badge className="rounded-full bg-brand-magenta/20 text-brand-magenta border-brand-magenta/30 border text-xs">
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
                              className="w-full justify-center gap-1 rounded text-xs font-semibold bg-brand-magenta/10 text-brand-magenta hover:bg-brand-magenta/20"
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
    { title: "AI/ML Lab", image: "https://images.unsplash.com/photo-1488229297570-58c12e4cef56?q=80&w=1200&auto=format&fit=crop" },
    { title: "Computer Vision Lab", image: "https://images.unsplash.com/photo-1581091216562-40c08a5a4183?q=80&w=1200&auto=format&fit=crop" },
    { title: "Robotics Lab", image: "https://images.unsplash.com/photo-1517346883202-92202d440203?q=80&w=1200&auto=format&fit=crop" },
    { title: "Motion Planning Studio", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" },
    { title: "Autonomous Systems Lab", image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?q=80&w=1200&auto=format&fit=crop" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLabIndex((prev) => (prev + 1) % labs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [labs.length]);

  const currentLab = labs[currentLabIndex];

  return (
    <section className="px-6 py-16 bg-gradient-to-r from-brand-magenta/5 to-brand-orange/5">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="headline-3 mb-2 font-display">Labs & Facilities</h2>
            <p className="text-sm text-foreground/80 font-body">State-of-the-art infrastructure for AI and Robotics learning</p>
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
          <CardContent className="p-6">
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
                    ? "bg-brand-magenta w-8"
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
      url: "https://www.dsu.edu.in/images/Engineering/AIR-dept/accreditation/BOS.pdf",
    },
    {
      title: "Program Educational Objectives",
      abbr: "PEO",
      url: "https://www.dsu.edu.in/images/Engineering/AIR-dept/accreditation/PEO.pdf",
    },
    {
      title: "Program Outcomes",
      abbr: "PO",
      url: "https://www.dsu.edu.in/images/Engineering/AIR-dept/accreditation/PO.pdf",
    },
    {
      title: "Program Specific Outcomes",
      abbr: "PSO",
      url: "https://www.dsu.edu.in/images/Engineering/AIR-dept/accreditation/PSO.pdf",
    },
  ];

  return (
    <section className="px-6 py-12 bg-background/50">
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
              className="group relative rounded-lg border border-border/30 bg-card/30 p-4 transition-all hover:border-brand-magenta/40 hover:bg-card/50 hover:shadow-md hover:shadow-brand-magenta/5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-magenta/10 text-brand-magenta group-hover:bg-brand-magenta/20 transition-colors">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold text-brand-magenta">{doc.abbr}</div>
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

function NoticeBoard() {
  const notices: NoticeItem[] = [
    {
      id: "notice-1",
      title: "B.Tech AI and Robotics Program Launch 2025",
      category: "Event",
      date: "Jan 15, 2025",
      description: "Welcome to the inaugural batch of B.Tech AI and Robotics at DSU with cutting-edge curriculum and industry partnerships.",
      image: "https://images.unsplash.com/photo-1581091216562-40c08a5a4183?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/AIR-dept/notices/Program-Launch.pdf",
    },
    {
      id: "notice-2",
      title: "Industry Guest Lectures by AI and Robotics Leaders",
      category: "Event",
      date: "Feb 2025",
      description: "Weekly sessions featuring experts from leading AI and robotics organizations.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop",
    },
    {
      id: "notice-3",
      title: "Internship Opportunities in AI and Robotics",
      category: "News",
      date: "Year-round",
      description: "Paid internships with organizations in AI, robotics, autonomous vehicles, and automation sectors.",
      image: "https://images.unsplash.com/photo-1517346883202-92202d440203?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/AIR-dept/notices/Internships.pdf",
    },
    {
      id: "notice-4",
      title: "Research Paper Accepted at International Conference",
      category: "News",
      date: "Jan 20, 2025",
      description: "Faculty research on autonomous systems accepted at IEEE International Conference on Robotics and Automation.",
      image: "https://images.unsplash.com/photo-1488229297570-58c12e4cef56?w=600&h=300&fit=crop",
    },
    {
      id: "notice-5",
      title: "Robotics Project Showcase Event",
      category: "Announcement",
      date: "Mar 2025",
      description: "Students will showcase their AI and robotics projects to industry partners and recruiters.",
    },
    {
      id: "notice-6",
      title: "Curriculum and Elective Registration",
      category: "Announcement",
      date: "Feb 2025",
      description: "New electives in autonomous vehicles, robotic manipulation, and cognitive AI are now available for registration.",
      link: "https://www.dsu.edu.in/images/Engineering/AIR-dept/notices/Curriculum-Updates.pdf",
    },
  ];

  const getCategoryStyle = (category: NoticeItem["category"]) => {
    switch (category) {
      case "Event":
        return {
          icon: CalendarDays,
          label: "Event",
          className: "bg-brand-magenta/15 text-brand-magenta",
        };
      case "News":
        return {
          icon: FileText,
          label: "News",
          className: "bg-brand-orange/15 text-brand-orange",
        };
      case "Announcement":
        return {
          icon: ClipboardList,
          label: "Announcement",
          className: "bg-brand-blue/15 text-brand-blue",
        };
      default:
        return {
          icon: ClipboardList,
          label: category,
          className: "bg-brand-blue/15 text-brand-blue",
        };
    }
  };

  const events = notices.filter((n) => n.category === "Event");
  const news = notices.filter((n) => n.category === "News");
  const announcements = notices.filter((n) => n.category === "Announcement");

  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  useEffect(() => {
    if (events.length === 0) return;
    const interval = setInterval(() => {
      setCurrentEventIndex((prev) => (prev + 1) % events.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [events.length]);

  useEffect(() => {
    if (news.length === 0) return;
    const interval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % news.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [news.length]);

  const renderCarousel = (title: string, items: NoticeItem[], color: string, currentIndex: number, setCurrentIndex: (idx: number) => void) => {
    if (items.length === 0) {
      return (
        <div className="space-y-4">
          <div className={`flex items-center gap-2 px-4 py-3 rounded-xl border-l-4 ${
            color === "magenta"
              ? "border-brand-magenta bg-brand-magenta/10"
              : "border-brand-orange bg-brand-orange/10"
          }`}>
            <h3 className={`headline-4 font-display ${color === "magenta" ? "text-brand-magenta" : "text-brand-orange"}`}>{title}</h3>
          </div>
          <p className="text-xs text-foreground/60 italic p-4 text-center">No items to display</p>
        </div>
      );
    }

    const currentItem = items[currentIndex];

    return (
      <div className="space-y-4">
        <div className={`flex items-center gap-2 px-4 py-3 rounded-xl border-l-4 ${
          color === "magenta"
            ? "border-brand-magenta bg-brand-magenta/10"
            : "border-brand-orange bg-brand-orange/10"
        }`}>
          <h3 className={`headline-4 font-display ${color === "magenta" ? "text-brand-magenta" : "text-brand-orange"}`}>{title}</h3>
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
                    ? color === "magenta"
                      ? "bg-brand-magenta w-6"
                      : "bg-brand-orange w-6"
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
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="headline-2 mb-3 font-display">
              <span className="text-foreground">Department </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Notice Board
              </span>
            </h2>
            <p className="max-w-2xl text-sm text-foreground sm:text-base font-body">
              Stay updated with upcoming events, news, and important announcements from the AI and Robotics department.
            </p>
          </div>
          <Badge className="w-fit rounded-full bg-brand-magenta/15 px-4 py-2 text-xs font-semibold text-brand-magenta border border-brand-magenta/20">
            Updated weekly
          </Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            {renderCarousel("Events", events, "magenta", currentEventIndex, setCurrentEventIndex)}
          </div>
          <div>
            {renderCarousel("News", news, "orange", currentNewsIndex, setCurrentNewsIndex)}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 px-4 py-3 rounded-xl border-l-4 border-brand-blue bg-brand-blue/10">
            <h3 className="headline-4 font-display text-brand-blue">Announcements</h3>
            <Badge className="ml-auto text-xs">{announcements.length}</Badge>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {announcements.length > 0 ? (
              announcements.map((notice) => (
                <Card
                  key={notice.id}
                  className="group border border-border/40 bg-card/50 shadow-sm transition hover:-translate-y-1 hover:border-brand-magenta/40 hover:shadow-brand-magenta/5"
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold text-foreground/60">{notice.date}</span>
                      {notice.link && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 px-2 text-xs bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20"
                          asChild
                        >
                          <a href={notice.link} target="_blank" rel="noreferrer">
                            <Download className="h-3 w-3" />
                          </a>
                        </Button>
                      )}
                    </div>
                    <CardTitle className="text-sm font-display text-foreground line-clamp-2">
                      {notice.title}
                    </CardTitle>
                    {notice.description && (
                      <CardDescription className="text-xs line-clamp-2 mt-1">
                        {notice.description}
                      </CardDescription>
                    )}
                  </CardHeader>
                </Card>
              ))
            ) : (
              <p className="col-span-full text-center text-sm text-foreground/60 py-8">No announcements yet</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
