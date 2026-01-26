import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";
import { useMemo } from "react";
import { NewsSection } from "@/components/NewsSection";
import { EventsSection } from "@/components/EventsSection";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import {
  Bot,
  Brain,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  Cpu,
  Database,
  Download,
  FileText,
  GraduationCap,
  Heart,
  Landmark,
  Network,
  Shield,
  Sparkles,
  BookOpen,
  Code,
  Zap,
  Building,
  ArrowRight,
  Cog,
  Award,
  Microscope,
  IndianRupee,
  Target,
} from "lucide-react";
import { schools } from "./Eligibility";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function DeptAIML() {
  const { elementRef: outcomeRef, isVisible: outcomeVisible } = useScrollTrigger();
  const { elementRef: focusRef, isVisible: focusVisible } = useScrollTrigger();

  const chairperson = useMemo(() => {
    return aimlFaculty.find((f) => f.title.includes("Chairperson"));
  }, []);
  
  const specializations = [
    { icon: Brain, label: "GPU-Accelerated ML" },
    { icon: Database, label: "Deep Learning on CUDA" },
    { icon: Shield, label: "Responsible AI Systems" },
    { icon: Bot, label: "AI Robotics on Jetson" },
    { icon: Network, label: "AI-Powered Vision" },
    { icon: Cpu, label: "LLMs & NLP on GPUs" },
  ];

  const focusAreas = [
    {
      title: "AI Systems & Infrastructure",
      description: "Distributed AI systems, GPU-accelerated computing, model optimization and deployment",
      icon: Cpu,
    },
    {
      title: "Applied Machine Learning",
      description: "Real-world ML applications in industry, time-series analysis, recommendation systems",
      icon: Target,
    },
    {
      title: "Computer Vision & Robotics",
      description: "Image recognition, autonomous systems, robotic perception on Jetson devices",
      icon: Bot,
    },
    {
      title: "Healthcare & Industrial AI",
      description: "Medical imaging AI, diagnostic systems, industrial automation and predictive maintenance",
      icon: Heart,
    },
    {
      title: "Natural Language Processing",
      description: "Large language models, text analysis, conversational AI systems on GPUs",
      icon: Brain,
    },
    {
      title: "Responsible & Ethical AI",
      description: "AI fairness, interpretability, bias detection, ethical AI governance",
      icon: Shield,
    },
  ];

  const studentOutcomes = [
    {
      outcome: "AI Engineers & ML Architects",
      description: "Building production-scale AI systems at top-tier tech companies",
      skills: "CUDA, PyTorch, TensorFlow, Distributed Systems",
    },
    {
      outcome: "AI Researchers",
      description: "Publishing in top AI venues (NeurIPS, ICML, CVPR) with GPU-enabled research",
      skills: "Deep Learning Research, Mathematical Foundations, Publication Quality",
    },
    {
      outcome: "Healthcare AI Specialists",
      description: "Developing medical devices and diagnostic systems using deep learning",
      skills: "Medical Imaging AI, Clinical Data Analysis, Biomedical Engineering",
    },
    {
      outcome: "Robotics & Autonomous Systems Engineers",
      description: "Creating intelligent robots and autonomous vehicles",
      skills: "Computer Vision, Control Systems, Embedded AI on Jetson",
    },
    {
      outcome: "AI Entrepreneurs",
      description: "Launching AI startups with VC-ready infrastructure and industry connections",
      skills: "Full ML Stack, Product Development, Business Fundamentals",
    },
    {
      outcome: "Data-Driven Leaders",
      description: "AI/ML product leads and strategy roles leveraging technical credibility",
      skills: "System Design, Data Literacy, Cross-functional Leadership",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ===== HERO: DEPARTMENT-FIRST IDENTITY ===== */}
      <section className="dept-hero-section relative pt-40 md:pt-0">
        <div className="h-[70vh] md:h-[65vh] max-h-[400px] md:max-h-none w-full overflow-hidden">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F84f4ff57431c47e28aeb3f5aa994d0f1?format=webp&width=800"
            alt="Department of Computer Science & Engineering (AI & ML)"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-3 pb-20 md:pb-0 pt-12 md:pt-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 rounded-full border border-white/20 mb-4 backdrop-blur-sm">
              <Brain className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white font-display">Artificial Intelligence & Machine Learning</span>
            </div>
            <h1 className="headline-1 text-white leading-tight font-display">
              Department of Artificial Intelligence & Machine Learning
            </h1>
            <p className="subheadline text-white/90 max-w-2xl mt-3 font-body">
              Building AI engineers, researchers, and innovators through AI-first academics, NVIDIA-powered infrastructure, and industry-aligned outcomes.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {specializations.map((s, i) => (
                <span key={i} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs backdrop-blur">
                  <s.icon className="w-3.5 h-3.5" /> {s.label}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://admissions.dsu.edu.in/" target="_blank" rel="noreferrer">
                <Button className="bg-brand-gradient text-foreground">
                  Apply Now <GraduationCap className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DEPARTMENT OVERVIEW ===== */}
      <section className="px-3 py-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-5 items-start">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="headline-3 font-display">Who We Are</h2>
            <p className="text-foreground leading-relaxed font-body">
              The Department of AI & Machine Learning at DSU is dedicated to advancing AI education and research through cutting-edge academics, industry partnerships, and hands-on learning. We combine strong CS fundamentals with specialized AI expertise, leveraging NVIDIA's enterprise-grade infrastructure to prepare students for leadership roles in AI across academia, industry, and entrepreneurship.
            </p>
            <p className="text-foreground leading-relaxed font-body">
              Our commitment is to produce not just capable engineers, but visionary researchers and innovators who understand both the potential and responsibility of AI technology.
            </p>
          </div>
          <div>
            <Card className="overflow-hidden border border-border/50 bg-card/50">
              <div className="relative h-40">
                <img
                  src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop"
                  alt="AI & ML Labs"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Key Facts</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 text-sm font-body">
                <div className="flex items-center justify-between">
                  <span>Infrastructure</span>
                  <span className="font-medium">DGX B200 & Jetson</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Program Focus</span>
                  <span className="font-medium">AI-First Education</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Career Path</span>
                  <span className="font-medium">Multiple Tracks</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== WHAT AIML STUDENTS BECOME ===== */}
      <section ref={outcomeRef} className="px-3 py-12 bg-gradient-to-r from-brand-magenta/5 via-brand-blue/5 to-brand-orange/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="headline-2 font-display mb-3">What Our Graduates Become</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto font-body">
              Career pathways powered by strong fundamentals, AI expertise, and NVIDIA infrastructure access
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {studentOutcomes.map((item, idx) => (
              <Card
                key={idx}
                className={`border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all transform ${
                  outcomeVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-display text-brand-magenta">{item.outcome}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-foreground">{item.description}</p>
                  <div className="pt-2 border-t border-border/30">
                    <p className="text-xs font-semibold text-brand-magenta/80 mb-1">Key Skills:</p>
                    <p className="text-xs text-foreground/70">{item.skills}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOCUS AREAS & RESEARCH THEMES ===== */}
      <section ref={focusRef} className="px-3 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="headline-2 font-display mb-3">Research Focus Areas</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto font-body">
              Six strategic research and teaching domains defining our AI curriculum and research identity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {focusAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <Card
                  key={idx}
                  className={`border border-border/50 bg-card/50 backdrop-blur-sm hover:border-brand-magenta/30 transition-all transform ${
                    focusVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${idx * 75}ms` }}
                >
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg bg-brand-magenta/10 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-brand-magenta" />
                    </div>
                    <CardTitle className="text-base font-display">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/80">{area.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== PROGRAMS OFFERED ===== */}
      <section className="px-3 py-12 bg-gradient-to-r from-brand-magenta/5 via-brand-blue/5 to-brand-orange/5 border-y border-border/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="headline-2 font-display mb-2">Programs Offered</h2>
            <p className="text-foreground/80 font-body">Undergraduate and postgraduate pathways in AI & ML</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* B.Tech Program */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-5 h-5 text-brand-magenta" />
                  <Badge className="bg-brand-magenta/20 text-brand-magenta border-brand-magenta/30">Undergraduate</Badge>
                </div>
                <CardTitle className="font-display">B.Tech CSE (AI & ML)</CardTitle>
                <CardDescription className="font-body">4-Year Program</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground font-body">Core CS fundamentals with AI/ML specialization</p>
                <div className="flex flex-wrap gap-2">
                  {["GPU-Accelerated ML", "Deep Learning", "Vision Systems", "LLMs"].map((spec, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* M.Tech Program */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-5 h-5 text-brand-purple" />
                  <Badge className="bg-brand-purple/20 text-brand-purple border-brand-purple/30">Postgraduate</Badge>
                </div>
                <CardTitle className="font-display">M.Tech Artificial Intelligence</CardTitle>
                <CardDescription className="font-body">2-Year Program</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground font-body">Advanced AI research and specialization</p>
                <div className="flex flex-wrap gap-2">
                  {["Generative Models", "Reinforcement Learning", "Research Methods"].map((spec, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-display">Admission Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm font-body">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-magenta flex-shrink-0" />
                  <span>Rigorous selection process</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-magenta flex-shrink-0" />
                  <span>Strong CS + Mathematics foundation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-magenta flex-shrink-0" />
                  <span>NVIDIA lab access included</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== NVIDIA AI INFRASTRUCTURE (As Enabler, Not Hero) ===== */}
      <section className="px-3 py-20 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-4">
              <Cpu className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-blue-500 font-display">Infrastructure Advantage</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">How We Enable AI Learning at Scale</h2>
            <p className="text-xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
              NVIDIA's enterprise-grade AI infrastructure powers our curriculum, providing students with hands-on experience on the same tools used by leading AI labs globally.
            </p>
          </div>

          {/* Quick Hardware Overview */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <Card className="border-border/50 bg-gradient-to-br from-green-500/10 to-green-500/5 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl mb-4">
                  <Cpu className="w-6 h-6 text-green-500" />
                  Core Hardware
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm font-body">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">DGX B200 Supercomputers</p>
                    <p className="text-foreground/70 text-xs">Enterprise-scale training for massive AI models</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Jetson Edge Devices</p>
                    <p className="text-foreground/70 text-xs">Deploy AI models on efficient edge computing</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-gradient-to-br from-blue-500/10 to-blue-500/5 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl mb-4">
                  <Code className="w-6 h-6 text-blue-500" />
                  Software Stack
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm font-body">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">PyTorch, TensorFlow, RAPIDS</p>
                    <p className="text-foreground/70 text-xs">Industry-standard AI frameworks optimized for NVIDIA GPUs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">CUDA Programming</p>
                    <p className="text-foreground/70 text-xs">Learn parallel computing at GPU-scale</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Real Capabilities */}
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold mb-6 text-foreground">What Students Can Build</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <p className="font-semibold">Production-Scale LLMs</p>
                    <p className="text-sm text-foreground/70">Train and fine-tune large language models</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="font-semibold">Large-Scale Data Processing</p>
                    <p className="text-sm text-foreground/70">ML pipelines running 50–100× faster on GPU</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🤖</span>
                  <div>
                    <p className="font-semibold">Deployed AI Systems</p>
                    <p className="text-sm text-foreground/70">Real-world AI applications using Jetson inference</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔬</span>
                  <div>
                    <p className="font-semibold">Cutting-Edge Research</p>
                    <p className="text-sm text-foreground/70">Publish in top AI venues with GPU-powered experiments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/nvidia-ai-architecture">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white">
                Explore Full NVIDIA Architecture
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PROGRAMS & CURRICULUM ===== */}
      <EligibilityAndFees />

      <CurriculumLibrary />

      <AccreditationDocuments />

      {/* ===== FACULTY & LEADERSHIP ===== */}
      <section className="px-3 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="headline-3 font-display">Department Leadership</h2>
            <Link to="/academics/engineering/artificial-intelligence/faculty">
              <Button variant="outline" className="border-brand-magenta/40 hover:bg-brand-magenta/10">
                Explore Full Faculty
              </Button>
            </Link>
          </div>
          <div className="grid auto-rows-max gap-3 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {/* Chairperson */}
            {chairperson && (
              <div>
                <Link to={`/academics/engineering/artificial-intelligence/faculty/${chairperson.slug}`} className="group relative overflow-hidden rounded-lg border border-border/40 bg-card/40 backdrop-blur-sm hover:shadow-lg hover:shadow-brand-magenta/10 transition-all cursor-pointer block h-full">
                  <div className="relative">
                    <div className="aspect-[1/1.3] w-full"></div>
                    <img
                      src={chairperson.image}
                      alt={chairperson.name}
                      className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 p-2 w-full">
                    <div className="text-white text-xs opacity-80 line-clamp-1">Chairperson</div>
                    <div className="text-white font-semibold text-xs font-display line-clamp-2">{chairperson.name}</div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===== QUICK LINKS ===== */}
      <section className="px-3 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="headline-2 mb-3 font-display">
              <span className="text-foreground">Quick Links & </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">Resources</span>
            </h2>
            <p className="text-foreground/80 font-body max-w-2xl mx-auto">
              Important links for students, faculty, and researchers
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {/* Curriculum */}
            <Link to="/academics/engineering/ai-ml/curriculum" className="group rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-magenta/20 to-brand-magenta/10 flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-brand-magenta/70 group-hover:text-brand-magenta transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-magenta transition-colors">Curriculum</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">Detailed course structure and syllabus</p>
                </CardContent>
              </Card>
            </Link>

            {/* Labs & Facilities */}
            <Link to="/labs" className="group rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 flex items-center justify-center">
                  <Building className="h-12 w-12 text-brand-blue/70 group-hover:text-brand-blue transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-blue transition-colors">Labs & Facilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">GPU labs, NVIDIA infrastructure, research centers</p>
                </CardContent>
              </Card>
            </Link>

            {/* Research */}
            <Link to="/research" className="group rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-purple/20 to-brand-purple/10 flex items-center justify-center">
                  <Microscope className="h-12 w-12 text-brand-purple/70 group-hover:text-brand-purple transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-purple transition-colors">Research</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">Faculty research areas and opportunities</p>
                </CardContent>
              </Card>
            </Link>

            {/* Placements */}
            <Link to="/placements" className="group rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-orange/20 to-brand-orange/10 flex items-center justify-center">
                  <GraduationCap className="h-12 w-12 text-brand-orange/70 group-hover:text-brand-orange transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-orange transition-colors">Placements</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">Career opportunities and placement stats</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== LABS & FACILITIES ===== */}
      <LabsFacilitiesCarousel />

      {/* ===== NEWS & ANNOUNCEMENTS (KEPT AS IS) ===== */}
      <NoticeBoard />
    </div>
  );
}

// Supporting Components

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

function EligibilityAndFees() {
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);
  const engineeringSchool = schools.find(s => s.name === "School of Engineering");
  const aimlPrograms = engineeringSchool?.categories
    .flatMap(cat => cat.programs)
    .filter(p => {
      const name = p.name.toLowerCase();
      // Only show B.Tech CSE (AI & ML) and M.Tech Artificial Intelligence
      const isBTechAIML = name === "b.tech computer science & engineering (artificial intelligence & machine learning)";
      const isMTechAI = name === "m.tech artificial intelligence";
      return isBTechAIML || isMTechAI;
    }) || [];

  return (
    <section className="px-6 py-8 bg-gradient-to-r from-brand-blue/5 via-brand-blue/5 to-brand-orange/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="headline-2 font-display mb-3">Eligibility & Fees</h2>
          <p className="text-foreground/80 font-body max-w-3xl">
            AI & ML programs at School of Engineering, DSU offer both undergraduate and postgraduate pathways. B.Tech follows merit-based admission through entrance exams (CET, JEE Mains, Comed-K). Explore eligibility requirements for each program below.
          </p>
        </div>

        <div className="space-y-4">
          {aimlPrograms.map((program, idx) => {
            const isBTech = program.name.toLowerCase().includes("b.tech");
            const iconColor = isBTech ? "text-brand-blue" : "text-brand-purple";
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
                          className={`flex justify-between items-center p-3 rounded-lg ${isBTech ? "bg-blue-500/10 border border-blue-500/20" : "bg-purple-500/10 border border-purple-500/20"}`}
                        >
                          <span className="text-sm font-medium text-foreground">{fee.label}</span>
                          <span className={`text-base font-semibold ${isBTech ? "text-blue-600" : "text-purple-600"}`}>{fee.amount}</span>
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

interface LabItem {
  title: string;
  image: string;
}

function LabsFacilitiesCarousel() {
  const [currentLabIndex, setCurrentLabIndex] = useState(0);

  const labs: LabItem[] = [
    { title: "NVIDIA DGX B200 Supercomputer Lab", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop" },
    { title: "GPU-Accelerated Deep Learning Studio", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop" },
    { title: "AI & ML Research Center", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" },
    { title: "Computer Vision & Robotics Lab", image: "https://images.unsplash.com/photo-1516321318423-f06f70a504f9?q=80&w=1200&auto=format&fit=crop" },
    { title: "Jetson Edge Computing Lab", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" },
    { title: "Data Visualization & Analytics Lab", image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLabIndex((prev) => (prev + 1) % labs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [labs.length]);

  const currentLab = labs[currentLabIndex];

  return (
    <section className="px-6 py-16 bg-gradient-to-r from-brand-magenta/5 to-brand-magenta/5">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="headline-3 mb-2 font-display">Labs & Facilities</h2>
            <p className="text-sm text-foreground/80 font-body">State-of-the-art infrastructure for hands-on learning</p>
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
    { title: "Board of Studies", abbr: "BOS", url: "https://www.dsu.edu.in/images/Engineering/CSE-AIML/accreditation/BOS.pdf" },
    { title: "Program Educational Objectives", abbr: "PEO", url: "https://www.dsu.edu.in/images/Engineering/CSE-AIML/accreditation/PEO.pdf" },
    { title: "Program Outcomes", abbr: "PO", url: "https://www.dsu.edu.in/images/Engineering/CSE-AIML/accreditation/PO.pdf" },
    { title: "Program Specific Outcomes", abbr: "PSO", url: "https://www.dsu.edu.in/images/Engineering/CSE-AIML/accreditation/PSO.pdf" },
  ];

  return (
    <section className="px-6 py-12 bg-background/50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-2">Accreditation Documents</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {documents.map((doc, idx) => (
            <a
              key={idx}
              href={doc.url}
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-lg border border-border/30 bg-card/30 p-4 transition-all hover:border-brand-blue/40 hover:bg-card/50"
            >
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-brand-blue" />
                <div>
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

interface NoticeItem {
  id: string;
  title: string;
  category: "Event" | "News" | "Announcement";
  date: string;
  description: string;
  image?: string;
  link?: string;
}

function NoticeBoard() {
  const notices: NoticeItem[] = [
    {
      id: "notice-1",
      title: "AI Summit 2025: Industry Leaders' Perspectives",
      category: "Event",
      date: "Feb 15, 2025",
      description:
        "Annual AI & ML summit featuring keynotes from Google, Microsoft, and NVIDIA on latest trends in generative AI, LLMs, and GPU-accelerated computing.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/CSE-AIML/notices/AI-Summit-2025.pdf",
    },
    {
      id: "notice-2",
      title: "NVIDIA CUDA Programming Workshop",
      category: "Event",
      date: "Feb 5, 2025",
      description:
        "Hands-on workshop on GPU programming using CUDA, covering parallel processing, optimization techniques, and real-world AI applications.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/CSE-AIML/notices/CUDA-Workshop-2025.pdf",
    },
    {
      id: "notice-3",
      title: "Capstone Project Showcase: AI Solutions",
      category: "Event",
      date: "Mar 10, 2025",
      description:
        "Final year students showcase capstone projects built on NVIDIA infrastructure, including generative AI, computer vision, and NLP applications.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f70a504f9?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/CSE-AIML/notices/Capstone-Showcase-2025.pdf",
    },
    {
      id: "notice-4",
      title: "Faculty Publications in Top AI Venues",
      category: "News",
      date: "Feb 1, 2025",
      description:
        "Department faculty published research in NeurIPS, ICML, and CVPR 2024, advancing work in generative models and AI safety.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/CSE-AIML/notices/Faculty-Publications-2024.pdf",
    },
    {
      id: "notice-5",
      title: "Placement Results 2024-25",
      category: "News",
      date: "Jan 20, 2025",
      description:
        "Record-breaking placements with top AI companies including Google, Meta, Tesla, and NVIDIA. Premium packages for GPU-skilled engineers.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/CSE-AIML/notices/Placements-2024-25.pdf",
    },
    {
      id: "notice-6",
      title: "NAAC Accreditation - A++ Grade",
      category: "News",
      date: "Jan 10, 2025",
      description:
        "AI & ML program achieves A++ grade in NAAC assessment, recognizing excellence in curriculum design and industry alignment.",
      image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/CSE-AIML/notices/NAAC-Accreditation-2025.pdf",
    },
    {
      id: "notice-7",
      title: "Semester IV Specialization Selection Open",
      category: "Announcement",
      date: "Jan 15, 2025",
      description:
        "Students can now register for specialization tracks: Generative AI, Computer Vision, Reinforcement Learning, and Healthcare AI.",
      link: "https://www.dsu.edu.in/images/Engineering/CSE-AIML/notices/Specialization-Tracks-2025.pdf",
    },
    {
      id: "notice-8",
      title: "DGX B200 Lab Access for Research Projects",
      category: "Announcement",
      date: "Jan 8, 2025",
      description:
        "Apply now for access to DSU's NVIDIA DGX B200 supercomputers for research and development projects.",
      link: "https://www.dsu.edu.in/images/Engineering/CSE-AIML/notices/GPU-Lab-Access-2025.pdf",
    },
    {
      id: "notice-9",
      title: "Kaggle AI Challenge - DSU Edition",
      category: "Announcement",
      date: "Jan 5, 2025",
      description:
        "International data science competition for AI & ML students with prizes, internship opportunities, and industry mentoring.",
      link: "https://www.dsu.edu.in/images/Engineering/CSE-AIML/notices/Kaggle-Challenge-2025.pdf",
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
          className: "bg-brand-magenta/15 text-brand-magenta",
        };
      case "Announcement":
        return {
          icon: ClipboardList,
          label: "Announcement",
          className: "bg-brand-magenta/15 text-brand-magenta",
        };
      default:
        return {
          icon: ClipboardList,
          label: category,
          className: "bg-brand-magenta/15 text-brand-magenta",
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
          <div className={`flex items-center gap-2 px-4 py-3 rounded-xl border-l-4 border-brand-magenta bg-brand-magenta/10`}>
            <h3 className={`headline-4 font-display text-brand-magenta`}>{title}</h3>
          </div>
          <p className="text-xs text-foreground/60 italic p-4 text-center">No items to display</p>
        </div>
      );
    }

    const currentItem = items[currentIndex];

    return (
      <div className="space-y-4">
        <div className={`flex items-center gap-2 px-4 py-3 rounded-xl border-l-4 border-brand-magenta bg-brand-magenta/10`}>
          <h3 className={`headline-4 font-display text-brand-magenta`}>{title}</h3>
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
                  className="h-6 px-2 text-xs bg-brand-magenta/10 text-brand-magenta hover:bg-brand-magenta/20"
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
                    ? "bg-brand-magenta w-6"
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
              Stay updated with upcoming events, news, and important announcements from the AI & ML department.
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
            {renderCarousel("News", news, "magenta", currentNewsIndex, setCurrentNewsIndex)}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 px-4 py-3 rounded-xl border-l-4 border-brand-magenta bg-brand-magenta/10">
            <h3 className="headline-4 font-display text-brand-magenta">Announcements</h3>
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
                          className="h-6 px-2 text-xs bg-brand-magenta/10 text-brand-magenta hover:bg-brand-magenta/20"
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
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-foreground/70 line-clamp-2">{notice.description}</p>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-xs text-foreground/60 italic col-span-full p-4 text-center">No announcements to display</p>
            )}
          </div>
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
      label: "B.Tech CSE (AI & ML)",
      description: "4-year undergraduate pathway with specialized tracks in machine learning and AI systems",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&h=400&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Foundations in Python, Data Structures, Algorithms, and Mathematics with AI basics",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/CSE-AIML/curriculum/BTech-AIML-Curriculum-2025-26.pdf",
        },
        {
          year: "2026-27",
          summary: "Machine Learning, Deep Learning on CUDA, Computer Vision, and GPU-accelerated computing",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/CSE-AIML/curriculum/BTech-AIML-Curriculum-2026-27.pdf",
        },
        {
          year: "2027-28",
          summary: "Advanced Deep Learning, NLP, Reinforcement Learning, and LLM systems with NVIDIA infrastructure",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/CSE-AIML/curriculum/BTech-AIML-Curriculum-2027-28.pdf",
        },
        {
          year: "2028-29",
          summary: "Capstone projects, industry internships, NVIDIA certification, and research publications",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/CSE-AIML/curriculum/BTech-AIML-Curriculum-2028-29.pdf",
        },
      ],
    },
    {
      id: "mtech",
      label: "M.Tech Artificial Intelligence",
      description: "2-year postgraduate specialization in advanced AI research and development",
      image: "https://images.unsplash.com/photo-1516321318423-f06f70a504f9?q=80&w=600&h=400&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Foundations in advanced ML, statistical modeling, and GPU-accelerated data engineering",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/CSE-AIML/curriculum/MTech-AI-Curriculum-2025-26.pdf",
        },
        {
          year: "2026-27",
          summary: "Generative Models, Large Language Models, Computer Vision, and reinforcement learning systems",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/CSE-AIML/curriculum/MTech-AI-Curriculum-2026-27.pdf",
        },
        {
          year: "2027-28",
          summary: "Advanced AI research, thesis writing, NVIDIA partnership projects, and industry collaborations",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/CSE-AIML/curriculum/MTech-AI-Curriculum-2027-28.pdf",
        },
      ],
    },
  ];

  return (
    <section className="px-6 py-16 bg-gradient-to-r from-brand-blue/5 via-brand-blue/5 to-brand-blue/5">
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
              Explore comprehensive curriculum for B.Tech and M.Tech AI & ML programs. Access detailed course structures, learning outcomes, and downloadable syllabi.
            </p>
          </div>
          <Badge className="w-fit rounded-full bg-brand-blue/15 px-4 py-2 text-xs font-semibold text-brand-blue border border-brand-blue/20">
            2025 – 2029
          </Badge>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {programs.map((program, programIdx) => {
            const isOpen = openProgram === program.id;
            const isBtech = program.id === "btech";
            const borderClass = isBtech ? "border-brand-blue/30" : "border-brand-purple/30";
            const badgeClass = isBtech ? "bg-brand-blue/15 text-brand-blue border-brand-blue/20" : "bg-brand-purple/15 text-brand-purple border-brand-purple/20";
            const hoverShadow = isBtech ? "hover:shadow-brand-blue/10" : "hover:shadow-brand-purple/10";

            return (
              <div
                key={program.id}
                className={`rounded-3xl border-2 ${borderClass} overflow-hidden transition-all duration-300 hover:shadow-xl ${hoverShadow} hover:-translate-y-1`}
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
                      {isBtech ? "Undergraduate" : "Postgraduate"}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="headline-3 font-display text-foreground mb-2">{program.label}</h3>
                    <p className="text-sm text-foreground/80 font-body">{program.description}</p>
                  </div>
                  <Button
                    variant="outline"
                    className={`w-full ${isBtech ? "border-brand-blue/30 hover:bg-brand-blue/10 text-brand-blue hover:text-brand-blue" : "border-brand-purple/30 hover:bg-brand-purple/10 text-brand-purple hover:text-brand-purple"}`}
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
                          className={`rounded-xl border border-border/40 bg-card/70 p-3 transition-all ${isBtech ? "hover:border-brand-blue/40" : "hover:border-brand-purple/40"} ${
                            batchIdx === 0 ? isBtech ? "ring-2 ring-brand-blue/20" : "ring-2 ring-brand-purple/20" : ""
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2">
                              <Badge className={`rounded-full border text-xs ${isBtech ? "bg-brand-blue/20 text-brand-blue border-brand-blue/30" : "bg-brand-purple/20 text-brand-purple border-brand-purple/30"}`}>
                                <CalendarDays className="h-3 w-3 mr-1" />
                                {batch.year}
                              </Badge>
                              {batchIdx === 0 && (
                                <Badge className={`rounded-full border text-xs ${isBtech ? "bg-brand-blue/20 text-brand-blue border-brand-blue/30" : "bg-brand-purple/20 text-brand-purple border-brand-purple/30"}`}>
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
                              className={`w-full justify-center gap-1 rounded text-xs font-semibold ${isBtech ? "bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20" : "bg-brand-purple/10 text-brand-purple hover:bg-brand-purple/20"}`}
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
