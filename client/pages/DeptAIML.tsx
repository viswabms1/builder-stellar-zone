import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
} from "lucide-react";
import { schools } from "./Eligibility";

export default function DeptAIML() {
  const specializations = [
    { icon: Brain, label: "GPU-Accelerated ML" },
    { icon: Database, label: "Deep Learning on CUDA" },
    { icon: Shield, label: "Responsible AI Systems" },
    { icon: Bot, label: "AI Robotics on Jetson" },
    { icon: Network, label: "AI-Powered Vision" },
    { icon: Cpu, label: "LLMs & NLP on GPUs" },
  ];

  const highlights = [
    "Access to NVIDIA DGX B200 supercomputers for advanced AI research and model training",
    "Learn CUDA, PyTorch, TensorFlow on enterprise-grade GPU infrastructure—same tools as Google, Meta, OpenAI",
    "GPU-accelerated project-based learning: deep learning, autonomous systems, large-scale model training",
    "Strong foundations in mathematics, statistics, and GPU programming for AI systems",
    "Build production-scale AI models and deploy on Jetson edge devices",
    "Research collaborations with NVIDIA partners and industry leaders in AI",
  ];

  const careers = [
    "Machine Learning Engineer → AI Research Scientist (₹25-45 LPA with GPU skills)",
    "Data Science pathways: Analytics Engineer → Senior Data Scientist (GPU acceleration expertise)",
    "Opportunities in Robotics, Healthcare AI, Autonomous Systems with NVIDIA infrastructure experience",
    "100% placements; 20-40% salary premium for NVIDIA-certified AI engineers",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
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
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white font-display">Department of Computer Science & Engineering (AI & ML)</span>
            </div>
            <h1 className="headline-1 text-white leading-tight font-display">Design AI on World-Class NVIDIA Infrastructure</h1>
            <p className="subheadline text-white/90 max-w-2xl mt-3 font-body">
              Blend foundational CS with advanced AI/ML on DSU's DGX B200 supercomputers. Learn on the same infrastructure used by Google, Meta, and OpenAI. Build next-generation AI with GPU acceleration and production-scale deployment on Jetson.
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
      <section className="px-3 py-8 bg-gradient-to-r from-brand-magenta/5 via-brand-blue/5 to-brand-orange/5 border-y border-border/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="headline-2 font-display mb-2">Programs Offered</h2>
            <p className="text-foreground/80 font-body">Learn on NVIDIA infrastructure: DGX B200 supercomputers, Jetson edge devices, GPU-accelerated labs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* B.Tech Program */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-5 h-5 text-brand-magenta" />
                  <Badge className="bg-brand-magenta/20 text-brand-magenta border-brand-magenta/30">Undergraduate</Badge>
                </div>
                <CardTitle className="font-display">B.Tech Computer Science & Engineering (AI & ML)</CardTitle>
                <CardDescription className="font-body">4-Year Program</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground font-body">Powered by NVIDIA DGX B200 & GPU-accelerated learning:</p>
                <div className="flex flex-wrap gap-2">
                  {["GPU-Accelerated ML", "Deep Learning on CUDA", "AI Vision Systems", "LLMs & NLP on GPUs"].map((spec, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">{spec}</Badge>
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
                <CardTitle className="font-display">M.Tech Artificial Intelligence, School of Engineering, DSU</CardTitle>
                <CardDescription className="font-body">2-Year Program</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground font-body">Advanced AI research powered by NVIDIA DGX B200:</p>
                <div className="flex flex-wrap gap-2">
                  {["Generative Models", "Reinforcement Learning", "LLM Research", "Responsible AI"].map((spec, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">{spec}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-display">Why Choose AI & ML?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm font-body">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-magenta flex-shrink-0" />
                  <span>NVIDIA DGX B200 & Jetson access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-brand-magenta flex-shrink-0" />
                  <span>Learn CUDA, PyTorch, TensorFlow</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand-magenta flex-shrink-0" />
                  <span>20-40% higher placements salaries</span>
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
            <h2 className="headline-3 font-display">Overview</h2>
            <p className="text-foreground leading-relaxed font-body">
              The Department of Computer Science & Engineering (AI & ML) offers a dynamic ecosystem for study, research, and professional growth—powered by DSU's partnership with NVIDIA. The B.Tech AI & ML program combines core computing foundations with AI-focused coursework on enterprise-grade infrastructure including DGX B200 supercomputers, Jetson edge devices, and GPU-accelerated labs. Students master CUDA, PyTorch, TensorFlow on the exact tools used by Google, Meta, and OpenAI, with breadth across core computing and depth through ML, Computer Vision, NLP, and Robotics specializations aligned to NEP and industry partnerships.
            </p>
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-display">Curriculum Highlights</CardTitle>
                <CardDescription className="font-body">Built on NVIDIA infrastructure and GPU-accelerated learning</CardDescription>
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
                <img src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop" alt="AI & ML Labs" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Fast Facts</CardTitle>
                <CardDescription className="font-body">NVIDIA-powered advantage at AI & ML DSU</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <div className="flex items-center justify-between"><span>Salary Premium</span><span className="font-medium">+20-40% (GPU skills)</span></div>
                <div className="flex items-center justify-between"><span>Infrastructure</span><span className="font-medium">DGX B200 & Jetson</span></div>
                <div className="flex items-center justify-between"><span>Global Practice</span><span className="font-medium">CUDA, PyTorch, TensorFlow</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* NVIDIA AI Architecture Section */}
      <section className="px-3 py-20 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-4">
              <Cpu className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-blue-500 font-display">Enterprise-Grade Infrastructure</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">DSU's NVIDIA AI Architecture</h2>
            <p className="text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
              A rare and prestigious partnership that gives AI & ML students access to the exact same AI infrastructure used by Google, Meta, and OpenAI.
            </p>
          </div>

          {/* Pride Callout */}
          <div className="relative overflow-hidden rounded-lg border-2 border-gradient-to-r from-gold-400 to-yellow-500/50 bg-gradient-to-r from-amber-50/50 to-yellow-50/50 dark:from-amber-950/30 dark:to-yellow-950/30 p-8 mb-14">
            <div className="absolute top-0 right-0 text-7xl opacity-10">👑</div>
            <div className="relative z-10">
              <p className="text-lg font-bold text-amber-900 dark:text-amber-200 mb-2">🏆 A Rare Distinction</p>
              <p className="text-lg text-foreground/85 leading-relaxed font-semibold">
                This complete NVIDIA AI infrastructure is available at only a handful of elite institutions across India. AI & ML students at DSU learn on world-class hardware that gives them a competitive advantage in placement and research opportunities.
              </p>
            </div>
          </div>

          {/* The Complete Stack */}
          <div className="space-y-4 mb-16">
            <p className="text-lg font-semibold text-foreground mb-6">The Complete NVIDIA AI Stack AI & ML Students Master</p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Hardware Layer */}
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-lg border border-green-500/30">
                <h4 className="text-xl font-bold text-green-500 mb-3">Layer 1: Hardware Foundation</h4>
                <p className="text-base text-foreground/80 leading-relaxed mb-3">
                  Enterprise-grade NVIDIA GPU infrastructure for AI & ML projects at scale
                </p>
                <ul className="space-y-2 text-base text-foreground/70">
                  <li>✓ <span className="font-semibold">DGX B200</span> - Supercomputer for training massive AI models</li>
                  <li>✓ <span className="font-semibold">Jetson Family</span> - Edge AI devices for deploying models</li>
                  <li>✓ <span className="font-semibold">GPU Workstations</span> - High-performance development</li>
                  <li>✓ <span className="font-semibold">NVLink</span> - Ultra-fast GPU-to-GPU communication</li>
                </ul>
              </div>

              {/* CUDA Layer */}
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-6 rounded-lg border border-blue-500/30">
                <h4 className="text-xl font-bold text-blue-500 mb-3">Layer 2: CUDA - Parallel Computing</h4>
                <p className="text-base text-foreground/80 leading-relaxed mb-3">
                  NVIDIA's core platform that enables massive parallel processing for AI
                </p>
                <ul className="space-y-2 text-base text-foreground/70">
                  <li>✓ <span className="font-semibold">CUDA Cores</span> - Thousands of processors for parallel AI workloads</li>
                  <li>✓ <span className="font-semibold">cuDNN</span> - Optimized deep learning operations</li>
                  <li>✓ <span className="font-semibold">CUTLASS</span> - Fast matrix operations for neural networks</li>
                  <li>✓ <span className="font-semibold">cuBLAS</span> - GPU-accelerated linear algebra for AI</li>
                </ul>
              </div>

              {/* Framework Layer */}
              <div className="bg-gradient-to-r from-purple-500/10 to-violet-500/10 p-6 rounded-lg border border-purple-500/30">
                <h4 className="text-xl font-bold text-purple-500 mb-3">Layer 3: AI Frameworks</h4>
                <p className="text-base text-foreground/80 leading-relaxed mb-3">
                  Industry-standard frameworks optimized for NVIDIA GPUs—what major AI labs use
                </p>
                <ul className="space-y-2 text-base text-foreground/70">
                  <li>✓ <span className="font-semibold">PyTorch</span> - Deep learning research and production AI</li>
                  <li>✓ <span className="font-semibold">TensorFlow</span> - Scalable machine learning systems</li>
                  <li>✓ <span className="font-semibold">RAPIDS</span> - GPU-accelerated data science (50X faster)</li>
                  <li>✓ <span className="font-semibold">TensorRT</span> - High-performance inference (10X faster)</li>
                </ul>
              </div>

              {/* Applications Layer */}
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 p-6 rounded-lg border border-orange-500/30">
                <h4 className="text-xl font-bold text-orange-500 mb-3">Layer 4: AI Applications</h4>
                <p className="text-base text-foreground/80 leading-relaxed mb-3">
                  Build real-world AI/ML solutions that matter at scale
                </p>
                <ul className="space-y-2 text-base text-foreground/70">
                  <li>✓ Large Language Models (LLMs) and transformers</li>
                  <li>✓ Computer vision and autonomous systems</li>
                  <li>✓ Healthcare AI and medical imaging</li>
                  <li>✓ Robotics and intelligent automation</li>
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
                    <p className="font-semibold text-foreground mb-1">20-40% Higher Salaries</p>
                    <p className="text-sm text-foreground/70">NVIDIA-experienced ML engineers command premium packages at Google, Meta, NVIDIA, and top AI companies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Top-Tier Company Access</p>
                    <p className="text-sm text-foreground/70">Direct recruitment from Google, Meta, OpenAI, Microsoft, Tesla, and NVIDIA's AI research labs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Immediate Impact</p>
                    <p className="text-sm text-foreground/70">You're job-ready on day one with hands-on experience companies are looking for</p>
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
                    <p className="font-semibold text-foreground mb-1">Breakthrough Research</p>
                    <p className="text-sm text-foreground/70">Work on cutting-edge AI research with NVIDIA partners, producing publishable results</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Publication Quality</p>
                    <p className="text-sm text-foreground/70">Publish in top-tier AI venues like NeurIPS, ICML, CVPR with real GPU-enabled research</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">AI Entrepreneurship</p>
                    <p className="text-sm text-foreground/70">Build and launch AI startups with VC-ready infrastructure and investor connections</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Real Capabilities */}
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30 mb-10">
            <h3 className="text-2xl font-bold mb-4 text-foreground">What AI & ML Students Can Actually Do With This Infrastructure</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <p className="font-semibold">Train Production LLMs</p>
                    <p className="text-sm text-foreground/70">Build GPT-scale language models with billions of parameters</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="font-semibold">Process Massive Data</p>
                    <p className="text-sm text-foreground/70">ML pipelines that would take weeks—now run in hours</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🤖</span>
                  <div>
                    <p className="font-semibold">Deploy AI at Scale</p>
                    <p className="text-sm text-foreground/70">Real AI systems serving millions with inference on Jetson</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔬</span>
                  <div>
                    <p className="font-semibold">Push AI Frontiers</p>
                    <p className="text-sm text-foreground/70">Conduct cutting-edge ML research with NVIDIA partners</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/nvidia-ai-architecture">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white">
                Explore Full NVIDIA Architecture
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <EligibilityAndFees />

      <CurriculumLibrary />

      <AccreditationDocuments />

      <NoticeBoard />

      <LabsFacilitiesCarousel />

      {/* Leadership Section */}
      <section className="px-3 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="headline-3 font-display">Department Leadership</h2>
            <Link to="/academics/engineering/ai-ml/faculty">
              <Button variant="outline" className="border-brand-magenta/40 hover:bg-brand-magenta/10">
                Explore full faculty list
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Chairperson */}
            <div>
              <p className="text-xs font-semibold text-brand-magenta uppercase tracking-wider mb-2">Chairperson</p>
              <div className="group relative overflow-hidden rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm hover:shadow-lg hover:shadow-brand-magenta/10 transition-all cursor-pointer">
                <div className="relative">
                  <div className="aspect-square w-full"></div>
                  <img src="https://www.dsu.edu.in/images/Engineering/CSE-AIML/faculty/Jayavrinda.jpg" alt="Dr. Jayavrinda Vrindavanam V" className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 p-3 w-full">
                  <div className="text-white text-xs opacity-80">Professor</div>
                  <div className="text-white font-semibold text-sm font-display line-clamp-2">Dr. Jayavrinda Vrindavanam V</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="px-3 py-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-5 items-start">
          <div>
            <h2 className="headline-3 mb-4 font-display">Career Prospects (with NVIDIA Skills)</h2>
            <Card className="border border-border/50 bg-card/50">
              <CardContent className="p-3 grid gap-3">
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
                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop" alt="Contact AI & ML" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Learn About NVIDIA Infrastructure</CardTitle>
                <CardDescription className="font-body">Chairperson, AI & ML — Questions about GPU labs, DGX access, and research</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <div className="flex items-center justify-between"><span>Email</span><a className="font-medium hover:underline" href="mailto:chairman-aiml@dsu.edu.in">chairman-aiml@dsu.edu.in</a></div>
                <div className="flex items-center justify-between"><span>Phone</span><span className="font-medium">080-49092935</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
              Explore NVIDIA AI infrastructure, GPU-accelerated research partnerships, placement outcomes with salary premiums, and centers of excellence
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
                    Immersive innovation labs powered by industry leaders like IBM and NVIDIA
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
                    GPU-accelerated AI research on DGX B200 with NVIDIA partnership driving AI breakthroughs
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
                    20-40% higher salaries for NVIDIA-skilled engineers; direct recruitment from Google, Meta, OpenAI
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
                    Join DSU AI & ML—learn on DGX B200 and become job-ready with premium placement prospects
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
            <h3 className="headline-3 mb-3 font-display">Join DSU AI & ML—Powered by NVIDIA</h3>
            <p className="text-foreground mb-6 font-body">Learn on DGX B200 supercomputers and Jetson devices. Explore programs, conduct world-class research, and launch your career in AI with infrastructure used by Google, Meta, and OpenAI.</p>
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

function EligibilityAndFees() {
  const engineeringSchool = schools.find(s => s.name === "School of Engineering");
  const aimlPrograms = engineeringSchool?.categories
    .flatMap(cat => cat.programs)
    .filter(p => {
      const name = p.name.toLowerCase();
      const isBTechAIML = name.includes("b.tech") && name.includes("artificial intelligence") && name.includes("machine learning");
      const isMTechAI = name === "m.tech artificial intelligence";
      return isBTechAIML || isMTechAI;
    }) || [];

  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);

  return (
    <section className="px-3 py-8 bg-gradient-to-r from-brand-magenta/5 via-brand-blue/5 to-brand-orange/5">
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
            const iconColor = isBTech ? "text-brand-magenta" : "text-brand-purple";
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

                  {/* Scholarships */}
                  {program.scholarships && (
                    <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                      <p className="text-sm text-foreground/80 font-body">
                        <span className="font-semibold text-blue-600">Scholarships:</span> {program.scholarships}
                      </p>
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

function LabsFacilitiesCarousel() {
  const [currentLabIndex, setCurrentLabIndex] = useState(0);

  const labs: LabItem[] = [
    { title: "AI Innovation Studio", image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop" },
    { title: "IBM Software Lab for AI", image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=1600&auto=format&fit=crop" },
    { title: "NVIDIA GPU Computing Lab", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop" },
    { title: "Design & Innovation Centre", image: "https://images.unsplash.com/photo-1485712207831-935f663eb1dc?q=80&w=1600&auto=format&fit=crop" },
    { title: "Automation & Robotics Hub", image: "https://images.unsplash.com/photo-1501601966780-6ea9a272e3df?q=80&w=1600&auto=format&fit=crop" },
    { title: "Healthcare AI Lab", image: "https://images.unsplash.com/photo-1587502537681-7905c5a7b81a?q=80&w=1600&auto=format&fit=crop" },
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
            <p className="text-sm text-foreground/80 font-body">Industry-partnered labs for AI & ML hands-on learning</p>
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
      url: "https://www.dsu.edu.in/images/Engineering/CSE-AIML/accreditation/BOS.pdf",
    },
    {
      title: "Program Educational Objectives",
      abbr: "PEO",
      url: "https://www.dsu.edu.in/images/Engineering/CSE-AIML/accreditation/PEO.pdf",
    },
    {
      title: "Program Outcomes",
      abbr: "PO",
      url: "https://www.dsu.edu.in/images/Engineering/CSE-AIML/accreditation/PO.pdf",
    },
    {
      title: "Program Specific Outcomes",
      abbr: "PSO",
      url: "https://www.dsu.edu.in/images/Engineering/CSE-AIML/accreditation/PSO.pdf",
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
      title: "AI Summit 2025: Building Responsible AI",
      category: "Event",
      date: "Feb 10, 2025",
      description: "Department-hosted summit with keynotes on responsible AI, ethics, and industry trends with leading researchers.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/CSE-AIML/notices/AI-Summit-2025.pdf",
    },
    {
      id: "notice-2",
      title: "Internship Registration for Summer 2025",
      category: "Announcement",
      date: "Jan 30, 2025",
      description: "Apply for 8-week AI & ML internships with partner companies. Deadline for applications: Feb 15, 2025.",
      link: "https://www.dsu.edu.in/images/Engineering/CSE-AIML/notices/Internship-Registration-2025.pdf",
    },
    {
      id: "notice-3",
      title: "NVIDIA Workshop: Accelerated Computing",
      category: "Event",
      date: "Feb 3, 2025",
      description: "Hands-on workshop on GPU programming and CUDA for deep learning applications. Limited seats available.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/CSE-AIML/notices/NVIDIA-Workshop-2025.pdf",
    },
    {
      id: "notice-4",
      title: "Faculty Research Highlights 2024-25",
      category: "News",
      date: "Jan 20, 2025",
      description: "Latest publications and research breakthroughs from AI & ML faculty in top-tier journals and conferences.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/CSE-AIML/notices/Faculty-Research-2025.pdf",
    },
    {
      id: "notice-5",
      title: "Machine Learning Project Showcase",
      category: "Event",
      date: "Feb 15, 2025",
      description: "Student final-year projects showcasing real-world AI applications in healthcare, robotics, and fintech.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=300&fit=crop",
    },
    {
      id: "notice-6",
      title: "AI & ML Placements Update",
      category: "News",
      date: "Jan 22, 2025",
      description: "Department placement statistics showing strong demand for AI & ML graduates from tech and finance sectors.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f70a504f9?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/CSE-AIML/notices/Placements-2025.pdf",
    },
    {
      id: "notice-7",
      title: "Course Registration for Sem IV",
      category: "Announcement",
      date: "Jan 25, 2025",
      description: "Register for Semester 4 courses including specialization electives by Feb 10, 2025.",
      link: "https://www.dsu.edu.in/images/Engineering/CSE-AIML/notices/Course-Registration-Sem4-2025.pdf",
    },
    {
      id: "notice-8",
      title: "Guest Lecture: Generative AI Applications",
      category: "Event",
      date: "Feb 20, 2025",
      description: "Industry expert session on LLMs, prompt engineering, and practical generative AI deployment.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop",
    },
    {
      id: "notice-9",
      title: "NAAC Accreditation Results",
      category: "News",
      date: "Jan 18, 2025",
      description: "AI & ML program receives A+ rating in latest accreditation assessment, reflecting academic excellence.",
      image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/CSE-AIML/notices/NAAC-Accreditation-2025.pdf",
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
              Stay updated with upcoming events, news, and important announcements from the AI & ML department.
            </p>
          </div>
          <Badge className="w-fit rounded-full bg-brand-magenta/15 px-4 py-2 text-xs font-semibold text-brand-magenta border border-brand-magenta/20">
            Updated weekly
          </Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
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
      description: "4-year undergraduate pathway with AI & ML specializations",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "NEP-aligned with machine learning studios and automation labs",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/CSE-AIML/curriculum/BTech-AIML-Curriculum-2025-26.pdf",
        },
        {
          year: "2026-27",
          summary: "Deep learning labs, computer vision projects, and industry immersion",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/CSE-AIML/curriculum/BTech-AIML-Curriculum-2026-27.pdf",
        },
        {
          year: "2027-28",
          summary: "NLP specialization with robotics integration and research tracks",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/CSE-AIML/curriculum/BTech-AIML-Curriculum-2027-28.pdf",
        },
        {
          year: "2028-29",
          summary: "Generative AI, autonomous systems, and capstone innovation projects",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/CSE-AIML/curriculum/BTech-AIML-Curriculum-2028-29.pdf",
        },
      ],
    },
    {
      id: "mtech",
      label: "M.Tech Artificial Intelligence",
      description: "2-year postgraduate specialization in AI research and development",
      image: "https://images.unsplash.com/photo-1535994636912-b5b474f267ea?q=80&w=1600&auto=format&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Foundations in deep learning, neural networks, and responsible AI systems design",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/AIML-dept/curriculum/MTech-AI-Curriculum-2025-26.pdf",
        },
        {
          year: "2026-27",
          summary: "Generative AI, large language models, reinforcement learning, and research projects",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/AIML-dept/curriculum/MTech-AI-Curriculum-2026-27.pdf",
        },
        {
          year: "2027-28",
          summary: "Advanced AI research, autonomous systems, and thesis supervision",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/AIML-dept/curriculum/MTech-AI-Curriculum-2027-28.pdf",
        },
        {
          year: "2028-29",
          summary: "AI innovation labs, industry collaborations, and research publications",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/AIML-dept/curriculum/MTech-AI-Curriculum-2028-29.pdf",
        },
      ],
    },
  ];

  return (
    <section className="px-3 py-8 bg-gradient-to-r from-brand-magenta/5 via-brand-blue/5 to-brand-orange/5">
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
              Explore comprehensive curriculum packs for B.Tech and M.Tech programs. Access detailed course structures, learning outcomes, and downloadable syllabi.
            </p>
          </div>
          <Badge className="w-fit rounded-full bg-brand-magenta/15 px-4 py-2 text-xs font-semibold text-brand-magenta border border-brand-magenta/20">
            2025 – 2029
          </Badge>
        </div>

        <div className="grid gap-3 lg:grid-cols-2">
          {programs.map((program, programIdx) => {
            const isOpen = openProgram === program.id;
            const isProgramBtech = program.id === "btech";
            const borderClass = isProgramBtech
              ? "border-brand-orange/30"
              : "border-brand-blue/30";
            const badgeClass = isProgramBtech
              ? "bg-brand-orange/15 text-brand-orange border-brand-orange/20"
              : "bg-brand-blue/15 text-brand-blue border-brand-blue/20";
            const Icon = isProgramBtech ? Code : BookOpen;

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

                <div className="p-3 bg-background/50 backdrop-blur-sm space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge className={`rounded-full border ${badgeClass}`}>
                      {isProgramBtech ? "Undergraduate" : "Postgraduate"}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="headline-3 font-display text-foreground mb-2">{program.label}</h3>
                    <p className="text-sm text-foreground/80 font-body">{program.description}</p>
                  </div>
                  <Button
                    variant="outline"
                    className={`w-full ${isProgramBtech ? "border-brand-orange/30 hover:bg-brand-orange/10 text-brand-orange hover:text-brand-orange" : "border-brand-blue/30 hover:bg-brand-blue/10 text-brand-blue hover:text-brand-blue"}`}
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
                              <Badge className={`rounded-full border text-xs ${isProgramBtech ? "bg-brand-orange/20 text-brand-orange border-brand-orange/30" : "bg-brand-blue/20 text-brand-blue border-brand-blue/30"}`}>
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
                              className={`w-full justify-center gap-1 rounded text-xs font-semibold ${
                                isProgramBtech
                                  ? "bg-brand-orange/10 text-brand-orange hover:bg-brand-orange/20"
                                  : "bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20"
                              }`}
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
