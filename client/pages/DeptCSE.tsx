import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { schools } from "./Eligibility";
import { NewsSection } from "@/components/NewsSection";
import { EventsSection } from "@/components/EventsSection";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { DepartmentNoticeBoard } from "@/components/DepartmentNoticeBoard";
import { CurriculumLibrary } from "@/components/CurriculumLibrary";
import { getCurriculumByDepartment } from "@/lib/content-manager";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  Users,
  Briefcase,
  Mail,
} from "lucide-react";
import { DepartmentPageMenu } from "@/components/DepartmentPageMenu";

function CurriculumLibraryComponent() {
  const programs = getCurriculumByDepartment("Engineering", "CSE");
  return <CurriculumLibrary programs={programs} themeColor="blue" />;
}

export default function DeptCSE() {
  const specializations = [
    { icon: Brain, label: "AI & ML" },
    { icon: Database, label: "Data Science" },
    { icon: Shield, label: "Cyber Security" },
    { icon: Bot, label: "AI & Robotics" },
    { icon: Network, label: "Networks & IoT" },
    { icon: Cpu, label: "Cloud & Web Tech" },
  ];

  const highlights = [
    "Access to NVIDIA DGX B200 supercomputing and Jetson edge platforms",
    "Learn CUDA, PyTorch, and TensorFlow on enterprise-scale GPU systems",
    "Project-based learning with GPU-accelerated AI and data pipelines",
    "Research-driven learning enabled by DGX B200 infrastructure at DSU, School of Engineering",
    "Portfolio projects showcasing real-world, production-scale computing skills",
  ];

  const careers = [
    "AI/ML Engineer → Senior AI Researcher → ML Architect",
    "Data Scientist → Analytics Lead → Chief Data Officer",
    "Opportunities in Government, Defense, and leading organizations",
    "Strong placement outcomes driven by DGX B200–based AI and GPU computing skills",
  ];

  const menuSections = [
    {
      id: "programs",
      label: "Programs",
      icon: <BookOpen className="w-4 h-4" />,
    },
    { id: "about", label: "About", icon: <Users className="w-4 h-4" /> },
    {
      id: "infrastructure",
      label: "Infrastructure",
      icon: <Cpu className="w-4 h-4" />,
    },
    {
      id: "facilities",
      label: "Facilities",
      icon: <Building className="w-4 h-4" />,
    },
    {
      id: "leadership",
      label: "Leadership",
      icon: <Award className="w-4 h-4" />,
    },
    {
      id: "careers",
      label: "Careers",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      id: "curriculum",
      label: "Curriculum",
      icon: <FileText className="w-4 h-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="dept-hero-section relative">
        <div className="w-full overflow-hidden relative">
          <img
            src="https://www.dsu.edu.in/images/Engineering/CSE-dept/abt-cse.JPG"
            alt="Department of Computer Science & Engineering"
            className="w-full h-auto object-cover"
            style={{
              aspectRatio: "21 / 9",
              maxHeight: "600px",
              minHeight: "300px",
              objectFit: "cover",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div
          className="absolute inset-0 flex items-center"
          style={{ top: 0, bottom: 0 }}
        >
          <div className="max-w-7xl mx-auto px-3 pb-20 md:pb-0 pt-6 md:pt-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 rounded-full border border-white/20 mb-4 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white font-display">
                Department of Computer Science & Engineering
              </span>
            </div>
            <h1 className="headline-1 text-white leading-tight font-display">
              Computer Science Engineering for the AI Era
            </h1>
            <p className="subheadline text-white/90 max-w-2xl mt-3 font-body">
              Learn core CS on NVIDIA DGX B200 supercomputing infrastructure
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {specializations.map((s, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs backdrop-blur"
                >
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
                <Button className="bg-brand-gradient text-foreground">
                  Apply Now <GraduationCap className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <DepartmentPageMenu sections={menuSections} />

      {/* Programs Offered */}
      <section
        id="programs"
        className="px-3 py-8 bg-gradient-to-r from-brand-magenta/5 via-brand-blue/5 to-brand-orange/5 border-y border-border/30"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="headline-2 font-display mb-2">Programs Offered</h2>
            <p className="text-foreground/80 font-body">
              Learn on NVIDIA infrastructure: DGX B200 supercomputers, Jetson
              edge devices, and GPU workstations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* B.Tech Programs */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-5 h-5 text-brand-magenta" />
                  <Badge className="bg-brand-magenta/20 text-brand-magenta border-brand-magenta/30">
                    Undergraduate
                  </Badge>
                </div>
                <CardTitle className="font-display">
                  B.Tech Computer Science & Engineering, School of Engineering,
                  DSU
                </CardTitle>
                <CardDescription className="font-body">
                  4-Year Program
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground font-body">
                  With specializations in (powered by NVIDIA infrastructure):
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "AI & ML on CUDA",
                    "GPU-accelerated Data Science",
                    "Cyber Security AI",
                    "Robotics & Autonomous Systems",
                    "GPU Computing",
                    "Networks & Edge AI",
                  ].map((spec, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* M.Tech CSE */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-5 h-5 text-brand-blue" />
                  <Badge className="bg-brand-blue/20 text-brand-blue border-brand-blue/30">
                    Postgraduate
                  </Badge>
                </div>
                <CardTitle className="font-display">
                  M.Tech Computer Science & Engineering, School of Engineering,
                  DSU
                </CardTitle>
                <CardDescription className="font-body">
                  2-Year Program
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground font-body">
                  Advanced research on DGX B200 supercomputers with NVIDIA
                  partnership
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "GPU-Accelerated AI",
                    "Large-Scale Research",
                    "NVIDIA Partnership Projects",
                  ].map((spec, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* M.Tech CSE (AI & ML) */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-5 h-5 text-brand-magenta" />
                  <Badge className="bg-brand-magenta/20 text-brand-magenta border-brand-magenta/30">
                    Postgraduate
                  </Badge>
                </div>
                <CardTitle className="font-display">
                  M.Tech CSE (Artificial Intelligence and Machine Learning),
                  School of Engineering, DSU
                </CardTitle>
                <CardDescription className="font-body">
                  2-Year Program
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground font-body">
                  Specialization in AI and ML with GPU-accelerated research
                  projects
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Deep Learning",
                    "ML Pipelines",
                    "NLP & Computer Vision",
                  ].map((spec, i) => (
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
                <CardTitle className="text-lg font-display">
                  Why Computer Science & Engineering at DSU, School of
                  Engineering?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm font-body">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-magenta flex-shrink-0" />
                  <span>Strong placement outcomes with DGX B200 advantage</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand-magenta flex-shrink-0" />
                  <span>NVIDIA DGX B200 & Jetson access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-brand-magenta flex-shrink-0" />
                  <span>Learn CUDA, PyTorch on GPU labs</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="about" className="px-3 py-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-5 items-start">
          <div className="lg:col-span-2 space-y-3">
            <h2 className="headline-3 font-display">Overview</h2>
            <p className="text-foreground leading-relaxed font-body">
              Computer Science & Engineering at School of Engineering, DSU
              offers a comprehensive journey in computing—from undergraduate
              foundations to postgraduate research. The B.Tech program is built
              on algorithms, programming, systems, databases, networks, and
              software engineering, with hands-on experience using NVIDIA DGX
              B200 infrastructure and exposure to AI, machine learning, data
              science, and high-performance computing. The M.Tech programs (Core
              CSE and AI & ML specialization) provide advanced research
              opportunities in cutting-edge systems, GPU-accelerated AI, and
              industry-scale applications. Together, these pathways prepare
              students for software engineering roles, advanced AI applications,
              research leadership, and entrepreneurship in the technology
              sector.
            </p>
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-display">
                  Curriculum Highlights
                </CardTitle>
                <CardDescription className="font-body">
                  Built on NVIDIA infrastructure and industry partnerships
                </CardDescription>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-3 pt-0">
                {highlights.map((h, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
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
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
                  alt="CSE Labs"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Fast Facts</CardTitle>
                <CardDescription className="font-body">
                  NVIDIA-powered advantage at CSE DSU
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <div className="flex items-center justify-between">
                  <span>Salary Premium</span>
                  <span className="font-medium">+20-40% (GPU skills)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Infrastructure</span>
                  <span className="font-medium">DGX B200 & Jetson</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Global Practice</span>
                  <span className="font-medium">CUDA, PyTorch, TensorFlow</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <EligibilityAndFees />

      {/* NVIDIA AI Architecture Section */}
      <section
        id="infrastructure"
        className="px-3 py-20 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-4">
              <Cpu className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-blue-500 font-display">
                Enterprise-Grade Infrastructure
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Enterprise-grade NVIDIA DGX B200–centric AI Architecture
            </h2>
            <p className="text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
              Computer Science & Engineering students at School of Engineering,
              DSU gain access to advanced AI infrastructure for cutting-edge
              research and learning.
            </p>
          </div>

          {/* Pride Callout */}
          <div className="relative overflow-hidden rounded-lg border-2 border-gradient-to-r from-gold-400 to-yellow-500/50 bg-gradient-to-r from-amber-50/50 to-yellow-50/50 dark:from-amber-950/30 dark:to-yellow-950/30 p-8 mb-14">
            <div className="absolute top-0 right-0 text-7xl opacity-10">👑</div>
            <div className="relative z-10">
              <p className="text-lg font-bold text-amber-900 dark:text-amber-200 mb-2">
                🏆 Advanced Infrastructure Access
              </p>
              <p className="text-lg text-foreground/85 leading-relaxed font-semibold">
                Computer Science & Engineering students at School of
                Engineering, DSU leverage NVIDIA DGX B200 infrastructure for
                advanced AI research, learning, and career development.
              </p>
            </div>
          </div>

          {/* The Complete Stack */}
          <div className="space-y-4 mb-16">
            <p className="text-lg font-semibold text-foreground mb-6">
              The Complete NVIDIA AI Stack Computer Science & Engineering
              Students Master
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Hardware Layer */}
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-lg border border-green-500/30">
                <h4 className="text-xl font-bold text-green-500 mb-3">
                  Layer 1: Hardware Foundation
                </h4>
                <p className="text-base text-foreground/80 leading-relaxed mb-3">
                  Enterprise-grade NVIDIA GPU infrastructure for real-world AI
                  projects
                </p>
                <ul className="space-y-2 text-base text-foreground/70">
                  <li>
                    ✓ <span className="font-semibold">DGX B200</span> -
                    Supercomputer for training massive models
                  </li>
                  <li>
                    ✓ <span className="font-semibold">Jetson Family</span> -
                    Edge AI devices for deployment
                  </li>
                  <li>
                    ✓ <span className="font-semibold">GPU Workstations</span> -
                    High-performance development
                  </li>
                  <li>
                    ✓ <span className="font-semibold">NVLink</span> - Ultra-fast
                    GPU-to-GPU communication
                  </li>
                </ul>
              </div>

              {/* CUDA Layer */}
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-6 rounded-lg border border-blue-500/30">
                <h4 className="text-xl font-bold text-blue-500 mb-3">
                  Layer 2: CUDA - Parallel Computing
                </h4>
                <p className="text-base text-foreground/80 leading-relaxed mb-3">
                  NVIDIA's core platform that enables massive parallel
                  processing
                </p>
                <ul className="space-y-2 text-base text-foreground/70">
                  <li>
                    ✓ <span className="font-semibold">CUDA Cores</span> -
                    Thousands of processors working in parallel
                  </li>
                  <li>
                    ✓ <span className="font-semibold">cuDNN</span> - Optimized
                    neural network operations
                  </li>
                  <li>
                    ✓ <span className="font-semibold">CUTLASS</span> - Fast
                    matrix operations for deep learning
                  </li>
                  <li>
                    ✓ <span className="font-semibold">cuBLAS</span> -
                    GPU-accelerated linear algebra
                  </li>
                </ul>
              </div>

              {/* Framework Layer */}
              <div className="bg-gradient-to-r from-purple-500/10 to-violet-500/10 p-6 rounded-lg border border-purple-500/30">
                <h4 className="text-xl font-bold text-purple-500 mb-3">
                  Layer 3: AI Frameworks
                </h4>
                <p className="text-base text-foreground/80 leading-relaxed mb-3">
                  Industry-standard frameworks optimized for NVIDIA GPUs
                </p>
                <ul className="space-y-2 text-base text-foreground/70">
                  <li>
                    ✓ <span className="font-semibold">PyTorch</span> - Deep
                    learning research and production
                  </li>
                  <li>
                    ✓ <span className="font-semibold">TensorFlow</span> -
                    Scalable machine learning
                  </li>
                  <li>
                    ✓ <span className="font-semibold">RAPIDS</span> -
                    GPU-accelerated data science (50X faster)
                  </li>
                  <li>
                    ✓ <span className="font-semibold">TensorRT</span> -
                    High-performance inference (10X faster)
                  </li>
                </ul>
              </div>

              {/* Applications Layer */}
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 p-6 rounded-lg border border-orange-500/30">
                <h4 className="text-xl font-bold text-orange-500 mb-3">
                  Layer 4: AI Applications
                </h4>
                <p className="text-base text-foreground/80 leading-relaxed mb-3">
                  Build real-world AI solutions that matter
                </p>
                <ul className="space-y-2 text-base text-foreground/70">
                  <li>✓ Natural Language Processing (LLMs, transformers)</li>
                  <li>✓ Computer vision and autonomous systems</li>
                  <li>✓ Recommender systems and data analytics</li>
                  <li>✓ Cybersecurity AI and threat detection</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why This Matters Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <Card className="border-border/50 bg-gradient-to-br from-blue-500/10 to-blue-500/5 backdrop-blur hover:border-blue-500/50 transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl mb-4">
                  <Award className="w-8 h-8 text-blue-500" />
                  Placement Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      Competitive Advantage in Placements
                    </p>
                    <p className="text-sm text-foreground/70">
                      DGX B200 skills provide advantage in technical interviews
                      and placement outcomes
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      Industry-Ready Skills
                    </p>
                    <p className="text-sm text-foreground/70">
                      Technologies aligned with those used in leading global AI
                      research organizations
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      Day-One Readiness
                    </p>
                    <p className="text-sm text-foreground/70">
                      You're job-ready immediately—no need to learn new tools on
                      the job
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-gradient-to-br from-purple-500/10 to-purple-500/5 backdrop-blur hover:border-purple-500/50 transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl mb-4">
                  <Brain className="w-8 h-8 text-purple-500" />
                  Research Advantage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      Industry Collaborations
                    </p>
                    <p className="text-sm text-foreground/70">
                      Work on real problems with leading companies through
                      research partnerships
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      Publication Quality
                    </p>
                    <p className="text-sm text-foreground/70">
                      Publish groundbreaking research in top-tier venues like
                      NeurIPS, ICML
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      Venture Capital Ready
                    </p>
                    <p className="text-sm text-foreground/70">
                      Launch AI startups with proven infrastructure and investor
                      interest
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Real Capabilities */}
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30 mb-10">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              What Computer Science & Engineering Students Can Do With This
              Infrastructure
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <p className="font-semibold">Train Large Language Models</p>
                    <p className="text-sm text-foreground/70">
                      Build GPT-scale models with billions of parameters
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="font-semibold">Process Massive Datasets</p>
                    <p className="text-sm text-foreground/70">
                      Hours instead of weeks for data science pipelines
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🤖</span>
                  <div>
                    <p className="font-semibold">Deploy Production Systems</p>
                    <p className="text-sm text-foreground/70">
                      Real-world AI applications that scale to millions of users
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔬</span>
                  <div>
                    <p className="font-semibold">
                      Conduct Cutting-Edge Research
                    </p>
                    <p className="text-sm text-foreground/70">
                      Push AI boundaries with industry partners
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/nvidia-ai-architecture">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white"
              >
                Explore Full NVIDIA Architecture
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="curriculum">
        <CurriculumLibraryComponent />
      </section>

      <AccreditationDocuments />

      {/* Auto-filtered content based on current department context - 3-column grid layout */}
      <DepartmentNoticeBoard department="CSE" />

      <section id="facilities">
        <LabsFacilitiesCarousel />
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="px-3 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="headline-3 font-display">Department Leadership</h2>
            <Link to="/academics/engineering/computer-science/faculty">
              <Button
                variant="outline"
                className="border-brand-magenta/40 hover:bg-brand-magenta/10"
              >
                Explore full faculty list
              </Button>
            </Link>
          </div>
          <div className="grid auto-rows-max gap-3 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {/* Dean */}
            <div>
              <Link to="/academics/engineering/computer-science/faculty/dr-udaya-kumar-reddy-k-r">
                <div className="group relative overflow-hidden rounded-lg border border-border/40 bg-card/40 backdrop-blur-sm hover:shadow-lg hover:shadow-brand-magenta/10 transition-all h-full cursor-pointer">
                  <div className="relative">
                    <div className="aspect-[1/1.3] w-full"></div>
                    <img
                      src="https://www.dsu.edu.in/images/Engineering/CSE-dept/faculty/Udaya.jpg"
                      alt="Dr. Udaya Kumar Reddy K R"
                      className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 p-2 w-full">
                    <div className="text-white text-xs opacity-80 line-clamp-1">
                      Dean
                    </div>
                    <div className="text-white font-semibold text-xs font-display line-clamp-2">
                      Dr. Udaya Kumar Reddy K R
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Chairperson */}
            <div>
              <Link to="/academics/engineering/computer-science/faculty/dr-girisha-g-s">
                <div className="group relative overflow-hidden rounded-lg border border-border/40 bg-card/40 backdrop-blur-sm hover:shadow-lg hover:shadow-brand-magenta/10 transition-all h-full cursor-pointer">
                  <div className="relative">
                    <div className="aspect-[1/1.3] w-full"></div>
                    <img
                      src="https://www.dsu.edu.in/images/Engineering/CSE-dept/faculty/Girisha_GS.jpg"
                      alt="Dr. Girisha G S"
                      className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 p-2 w-full">
                    <div className="text-white text-xs opacity-80 line-clamp-1">
                      Chairperson
                    </div>
                    <div className="text-white font-semibold text-xs font-display line-clamp-2">
                      Dr. Girisha G S
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Associate Chair 1 */}
            <div>
              <Link to="/academics/engineering/computer-science/faculty/dr-bipin-kumar-rai">
                <div className="group relative overflow-hidden rounded-lg border border-border/40 bg-card/40 backdrop-blur-sm hover:shadow-lg hover:shadow-brand-magenta/10 transition-all h-full cursor-pointer">
                  <div className="relative">
                    <div className="aspect-[1/1.3] w-full"></div>
                    <img
                      src="https://www.dsu.edu.in/images/Engineering/CSE-dept/faculty/DrBipin_1.jpg"
                      alt="Dr. Bipin Kumar Rai"
                      className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 p-2 w-full">
                    <div className="text-white text-xs opacity-80 line-clamp-1">
                      Associate Chair
                    </div>
                    <div className="text-white font-semibold text-xs font-display line-clamp-2">
                      Dr. Bipin Kumar Rai
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Associate Chair 2 */}
            <div>
              <Link to="/academics/engineering/computer-science/faculty/dr-revathi-v">
                <div className="group relative overflow-hidden rounded-lg border border-border/40 bg-card/40 backdrop-blur-sm hover:shadow-lg hover:shadow-brand-magenta/10 transition-all h-full cursor-pointer">
                  <div className="relative">
                    <div className="aspect-[1/1.3] w-full"></div>
                    <img
                      src="https://www.dsu.edu.in/images/Engineering/CSE-dept/faculty/Revathi_V.jpg"
                      alt="Dr. Revathi V"
                      className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 p-2 w-full">
                    <div className="text-white text-xs opacity-80 line-clamp-1">
                      Associate Chair
                    </div>
                    <div className="text-white font-semibold text-xs font-display line-clamp-2">
                      Dr. Revathi V
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="px-3 py-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-5 items-start">
          <div>
            <h2 className="headline-3 mb-4 font-display">
              Career Prospects (with NVIDIA Skills)
            </h2>
            <Card className="border border-border/50 bg-card/50">
              <CardContent className="p-3 grid gap-3">
                {careers.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-sm text-foreground font-body"
                  >
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
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop"
                  alt="Contact CSE"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-display">
                  Learn About NVIDIA Infrastructure
                </CardTitle>
                <CardDescription className="font-body">
                  Department Leadership — Questions about GPU labs, DGX access,
                  and research
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <div className="flex items-center justify-between">
                  <span>Email</span>
                  <a
                    className="font-medium hover:underline"
                    href="mailto:cse-dept@dsu.edu.in"
                  >
                    cse-dept@dsu.edu.in
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span>Phone</span>
                  <span className="font-medium">080-49092935</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="px-3 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="headline-2 mb-3 font-display">
              <span className="text-foreground">Explore </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                More Opportunities
              </span>
            </h2>
            <p className="text-foreground/80 font-body max-w-2xl mx-auto">
              Explore NVIDIA AI infrastructure, research partnerships, placement
              outcomes, and centers of excellence powered by GPU computing
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {/* Centre of Excellence */}
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
                    NVIDIA-powered Centre of Excellence for AI and GPU Computing
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Research */}
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
                    GPU-accelerated research on NVIDIA DGX B200 within School of
                    Engineering, DSU
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Placements */}
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
                    Strong placement outcomes driven by DGX B200–based AI and
                    GPU computing skills
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Admissions */}
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
                    Join School of Engineering, DSU—learn on NVIDIA DGX B200 and
                    become job-ready with strong placement prospects
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
      <section className="px-3 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl p-5 border border-brand-magenta/20 bg-brand-magenta/5">
            <h3 className="headline-3 mb-3 font-display">
              Join School of Engineering, DSU
            </h3>
            <p className="text-foreground mb-6 font-body">
              Explore Computer Science & Engineering programs, discover
              NVIDIA-powered research, and launch your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://admissions.dsu.edu.in/"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="bg-brand-gradient text-foreground">
                  Apply Now
                  <GraduationCap className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function EligibilityAndFees() {
  const engineeringSchool = schools.find(
    (s) => s.name === "School of Engineering",
  );
  const csePrograms =
    engineeringSchool?.categories
      .flatMap((cat) => cat.programs)
      .filter((p) => {
        const name = p.name.toLowerCase();
        // Only show Core B.Tech CSE and M.Tech CSE (exclude specialization variants)
        const isCoreCSE = name === "b.tech computer science & engineering";
        const isMTechCSE =
          name === "m.tech computer science & engineering" ||
          name === "m.tech - computer science & engineering";
        const isMTechCSEAIML =
          name ===
            "m.tech computer science and engineering (artificial intelligence and machine learning)" ||
          name ===
            "m.tech - computer science and engineering (artificial intelligence and machine learning)";
        return isCoreCSE || isMTechCSE || isMTechCSEAIML;
      }) || [];

  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);

  return (
    <section className="px-3 py-8 bg-gradient-to-r from-brand-magenta/5 via-brand-blue/5 to-brand-orange/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="headline-2 font-display mb-3">Eligibility & Fees</h2>
          <p className="text-foreground/80 font-body max-w-3xl">
            B.Tech Computer Science & Engineering at DSU, School of Engineering
            follows admission pathways based on entrance exams (CET, JEE Mains,
            Uniguage, Comed-K) and merit-based direct admission.
          </p>
        </div>

        <div className="space-y-4">
          {csePrograms.map((program, idx) => (
            <Card
              key={idx}
              className="border border-border/50 bg-card/50 backdrop-blur-sm cursor-pointer hover:shadow-lg transition-all"
              onClick={() =>
                setExpandedProgram(
                  expandedProgram === program.name ? null : program.name,
                )
              }
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-display">
                      {program.name}
                    </CardTitle>
                    <CardDescription className="font-body mt-1">
                      {program.duration && <span>{program.duration} • </span>}
                      {program.eligibility.substring(0, 100)}...
                    </CardDescription>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-magenta transition-transform ${
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
                      <CheckCircle2 className="w-5 h-5 text-brand-magenta" />
                      Eligibility Criteria
                    </h4>
                    <p className="text-sm text-foreground/80 font-body leading-relaxed">
                      {program.eligibility}
                    </p>
                    {program.eligibilityPoints &&
                      program.eligibilityPoints.length > 0 && (
                        <ul className="mt-2 space-y-1">
                          {program.eligibilityPoints.map((point, pidx) => (
                            <li
                              key={pidx}
                              className="text-sm text-foreground/80 flex items-start gap-2"
                            >
                              <span className="text-brand-magenta">•</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      )}
                  </div>

                  {/* Fee Structure */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <IndianRupee className="w-5 h-5 text-brand-magenta" />
                      Fee Structure (2026-27)
                    </h4>
                    <div className="grid gap-2">
                      {program.fees.map((fee, fidx) => (
                        <div
                          key={fidx}
                          className="flex justify-between items-center p-3 rounded-lg bg-green-500/10 border border-green-500/20"
                        >
                          <span className="text-sm font-medium text-foreground">
                            {fee.label}
                          </span>
                          <span className="text-base font-semibold text-green-600">
                            {fee.amount}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specializations */}
                  {program.specializations &&
                    program.specializations.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          Specializations Available
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {program.specializations.map((spec, sidx) => (
                            <Badge
                              key={sidx}
                              variant="secondary"
                              className="text-xs"
                            >
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                  {/* Scholarships */}
                  {program.scholarships && (
                    <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                      <p className="text-sm text-foreground/80 font-body">
                        <span className="font-semibold text-blue-600">
                          Scholarships:
                        </span>{" "}
                        {program.scholarships}
                      </p>
                    </div>
                  )}

                  {/* Notes */}
                  {program.notes && program.notes.length > 0 && (
                    <div className="space-y-1">
                      {program.notes.map((note, nidx) => (
                        <p
                          key={nidx}
                          className="text-xs text-foreground/60 font-body"
                        >
                          ℹ️ {note}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* CTA */}
                  <div className="pt-4 border-t border-border/20">
                    <a
                      href="https://admissions.dsu.edu.in/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button className="w-full bg-brand-gradient text-foreground">
                        Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
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

function LabsFacilitiesCarousel() {
  const [currentLabIndex, setCurrentLabIndex] = useState(0);

  const labs: LabItem[] = [
    {
      title: "Programming & Systems Labs",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "AI & Data Science Lab",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Networks & IoT Lab",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Cyber Security Lab",
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Cloud & Web Tech Studio",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Innovation & Projects Space",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLabIndex((prev) => (prev + 1) % labs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [labs.length]);

  const currentLab = labs[currentLabIndex];

  return (
    <section className="px-3 py-8 bg-gradient-to-r from-brand-blue/5 to-brand-orange/5">
      <div className="max-w-7xl mx-auto space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="headline-3 mb-2 font-display">Labs & Facilities</h2>
            <p className="text-sm text-foreground/80 font-body">
              DSU, School of Engineering hosts multiple Computer Science
              laboratories. All AI-intensive workloads are centrally powered by
              NVIDIA DGX B200 infrastructure.
            </p>
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
            <CardTitle className="font-display text-2xl text-foreground">
              {currentLab.title}
            </CardTitle>
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
              onClick={() =>
                setCurrentLabIndex(
                  (prev) => (prev - 1 + labs.length) % labs.length,
                )
              }
            >
              ← Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-border/40"
              onClick={() =>
                setCurrentLabIndex((prev) => (prev + 1) % labs.length)
              }
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
      url: "https://www.dsu.edu.in/images/Engineering/CSE-dept/accreditation/BOS.pdf",
    },
    {
      title: "Program Educational Objectives",
      abbr: "PEO",
      url: "https://www.dsu.edu.in/images/Engineering/CSE-dept/accreditation/PEO.pdf",
    },
    {
      title: "Program Outcomes",
      abbr: "PO",
      url: "https://www.dsu.edu.in/images/Engineering/CSE-dept/accreditation/PO.pdf",
    },
    {
      title: "Program Specific Outcomes",
      abbr: "PSO",
      url: "https://www.dsu.edu.in/images/Engineering/CSE-dept/accreditation/PSO.pdf",
    },
  ];

  return (
    <section className="px-3 py-12 bg-background/50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-2">
            Accreditation Documents
          </h3>
          <p className="text-xs text-foreground/50 font-body">
            Program documentation and learning outcomes
          </p>
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
                  <div className="text-xs font-semibold text-brand-magenta">
                    {doc.abbr}
                  </div>
                  <p className="text-xs text-foreground/70 line-clamp-2">
                    {doc.title}
                  </p>
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
      title: "HackDSU 2025: 36-hour Product Build Sprint",
      category: "Event",
      date: "Feb 12, 2025",
      description:
        "Interdisciplinary hackathon hosted by CSE with tracks in AI for Health, Sustainable Tech, and FinTech innovation.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/CSE-dept/notices/HackDSU-2025.pdf",
    },
    {
      id: "notice-2",
      title: "Semester VI Elective Registration Window",
      category: "Announcement",
      date: "Jan 29, 2025",
      description:
        "Students can choose from Advanced Cloud Platforms, Secure Coding, XR Applications, and Data Storytelling electives till Feb 05.",
      link: "https://www.dsu.edu.in/images/Engineering/CSE-dept/notices/Elective-Registration-2025.pdf",
    },
    {
      id: "notice-3",
      title: "Industry Lecture: Responsible GenAI Systems",
      category: "Event",
      date: "Jan 24, 2025",
      description:
        "Guest session by Dr. Leela Narayanan, Principal Scientist at Novus Labs. Venue: Innovation Theatre, 10:30 AM.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/CSE-dept/notices/Responsible-GenAI-Guest-Lecture.pdf",
    },
    {
      id: "notice-4",
      title: "DSU CSE Annual Report 2024-25 Published",
      category: "News",
      date: "Jan 18, 2025",
      description:
        "The department's comprehensive annual report showcasing research, placements, and student achievements has been published.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/CSE-dept/notices/Annual-Report-2024-25.pdf",
    },
    {
      id: "notice-5",
      title: "Research Seminar: Quantum Computing Trends",
      category: "Event",
      date: "Feb 5, 2025",
      description:
        "Join Prof. Rajesh Kumar from IISc Bangalore for an in-depth discussion on quantum computing advances.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=300&fit=crop",
    },
    {
      id: "notice-6",
      title: "Faculty Publications in Top-Tier Venues",
      category: "News",
      date: "Jan 25, 2025",
      description:
        "Three research papers from CSE faculty have been accepted at IEEE and ACM international conferences.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f70a504f9?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/CSE-dept/notices/Faculty-Publications-2025.pdf",
    },
    {
      id: "notice-7",
      title: "Internship Policy Update 2025",
      category: "Announcement",
      date: "Jan 20, 2025",
      description:
        "New guidelines for mandatory summer internships including minimum duration, approval process, and assessment criteria.",
      link: "https://www.dsu.edu.in/images/Engineering/CSE-dept/notices/Internship-Policy-2025.pdf",
    },
    {
      id: "notice-8",
      title: "Industry Workshop: Cloud Architecture Patterns",
      category: "Event",
      date: "Feb 8, 2025",
      description:
        "Hands-on workshop by AWS certified architects covering microservices and containerization strategies.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop",
    },
    {
      id: "notice-9",
      title: "DSU CSE Receives NAAC Accreditation",
      category: "News",
      date: "Jan 15, 2025",
      description:
        "The department has secured 'A' grade in the latest NAAC assessment, reflecting excellence in academic and research standards.",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/CSE-dept/notices/NAAC-Accreditation-2025.pdf",
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

  const renderCarousel = (
    title: string,
    items: NoticeItem[],
    color: string,
    currentIndex: number,
    setCurrentIndex: (idx: number) => void,
  ) => {
    if (items.length === 0) {
      return (
        <div className="space-y-4">
          <div
            className={`flex items-center gap-2 px-4 py-3 rounded-xl border-l-4 ${
              color === "magenta"
                ? "border-brand-magenta bg-brand-magenta/10"
                : "border-brand-orange bg-brand-orange/10"
            }`}
          >
            <h3
              className={`headline-4 font-display ${color === "magenta" ? "text-brand-magenta" : "text-brand-orange"}`}
            >
              {title}
            </h3>
          </div>
          <p className="text-xs text-foreground/60 italic p-4 text-center">
            No items to display
          </p>
        </div>
      );
    }

    const currentItem = items[currentIndex];

    return (
      <div className="space-y-4">
        <div
          className={`flex items-center gap-2 px-4 py-3 rounded-xl border-l-4 ${
            color === "magenta"
              ? "border-brand-magenta bg-brand-magenta/10"
              : "border-brand-orange bg-brand-orange/10"
          }`}
        >
          <h3
            className={`headline-4 font-display ${color === "magenta" ? "text-brand-magenta" : "text-brand-orange"}`}
          >
            {title}
          </h3>
          <Badge className="ml-auto text-xs">
            {currentIndex + 1} / {items.length}
          </Badge>
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
                <h4 className="font-display font-semibold text-sm text-foreground mb-2 line-clamp-2">
                  {currentItem.title}
                </h4>
                <p className="text-xs text-foreground/70 line-clamp-2">
                  {currentItem.description}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-border/20">
              <span className="text-xs font-semibold text-foreground/60">
                {currentItem.date}
              </span>
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
              onClick={() =>
                setCurrentIndex(
                  (prev) => (prev - 1 + items.length) % items.length,
                )
              }
            >
              ←
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-7 px-2 text-xs"
              onClick={() =>
                setCurrentIndex((prev) => (prev + 1) % items.length)
              }
            >
              →
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="px-3 py-8">
      <div className="mx-auto max-w-7xl space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="headline-2 mb-3 font-display">
              <span className="text-foreground">Department </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Notice Board
              </span>
            </h2>
            <p className="max-w-2xl text-sm text-foreground sm:text-base font-body">
              Stay updated with upcoming events, news, and important
              announcements from the CSE department.
            </p>
          </div>
          <Badge className="w-fit rounded-full bg-brand-magenta/15 px-4 py-2 text-xs font-semibold text-brand-magenta border border-brand-magenta/20">
            Updated weekly
          </Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            {renderCarousel(
              "Events",
              events,
              "magenta",
              currentEventIndex,
              setCurrentEventIndex,
            )}
          </div>
          <div>
            {renderCarousel(
              "News",
              news,
              "orange",
              currentNewsIndex,
              setCurrentNewsIndex,
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 px-4 py-3 rounded-xl border-l-4 border-brand-blue bg-brand-blue/10">
            <h3 className="headline-4 font-display text-brand-blue">
              Announcements
            </h3>
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
                      <span className="text-xs font-semibold text-foreground/60">
                        {notice.date}
                      </span>
                      {notice.link && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 px-2 text-xs bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20"
                          asChild
                        >
                          <a
                            href={notice.link}
                            target="_blank"
                            rel="noreferrer"
                          >
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
                    <p className="text-xs text-foreground/70 line-clamp-2">
                      {notice.description}
                    </p>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-xs text-foreground/60 italic col-span-full p-4 text-center">
                No announcements to display
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
