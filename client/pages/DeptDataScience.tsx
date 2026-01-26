import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { DepartmentNoticeBoard } from "@/components/DepartmentNoticeBoard";
import {
  Sparkles,
  Brain,
  BarChart3,
  Zap,
  Database,
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
} from "lucide-react";
import { dataScienceFaculty } from "@/data/data-science-faculty";

export default function DeptDataScience() {
  const chairperson = useMemo(() => {
    return dataScienceFaculty.find((f) => f.title.includes("Chairperson"));
  }, []);
  const specializations = [
    { icon: Brain, label: "GPU-Accelerated ML" },
    { icon: BarChart3, label: "RAPIDS Data Analytics" },
    { icon: Database, label: "Big Data on GPU" },
    { icon: Zap, label: "Deep Learning on CUDA" },
  ];

  const highlights = [
    "Access to NVIDIA DGX B200 and RAPIDS for GPU-accelerated data processing (50X faster than CPU)",
    "Learn CUDA, PyTorch, TensorFlow—same tools used by data scientists at Google, Meta, Netflix",
    "GPU-accelerated machine learning and deep learning on enterprise infrastructure",
    "Data pipelines that process massive datasets in hours instead of weeks",
    "Business analytics applied to real-world problems using world-class infrastructure",
    "Industry partnerships with data-driven companies and NVIDIA research collaboration",
  ];

  const careers = [
    "Data Scientist → Senior Data Scientist → Director of Analytics (₹20-40 LPA with GPU skills)",
    "Data Engineer → ML Systems Engineer → Principal Engineer (with RAPIDS & CUDA expertise)",
    "Analytics Engineer → Analytics Architect (GPU-accelerated pipelines)",
    "Career pathways in finance, healthcare, e-commerce, tech—20-40% salary premium for GPU skills",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="dept-hero-section relative pt-40 md:pt-0">
        <div className="h-[70vh] md:h-[65vh] max-h-[400px] md:max-h-none w-full overflow-hidden">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F7cfd94b17b1c4440bc680d69dcdc1a1c?format=webp&width=800"
            alt="Department of Data Science"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-3 pb-20 md:pb-0 pt-6 md:pt-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 rounded-full border border-white/20 mb-4 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white font-display">B.Tech CSE (Data Science)</span>
            </div>
            <h1 className="headline-1 text-white leading-tight font-display">Transform Data Into Insights on NVIDIA GPUs</h1>
            <p className="subheadline text-white/90 max-w-2xl mt-3 font-body">
              Learn on DSU's DGX B200 supercomputers with RAPIDS GPU acceleration. Master machine learning, analytics, and large-scale data processing—same tools used by top data scientists at Google, Meta, and Netflix.
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
      <section className="px-3 py-8 bg-gradient-to-r from-brand-orange/5 via-brand-orange/5 to-brand-orange/5 border-y border-border/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="headline-2 font-display mb-2">Programs Offered</h2>
            <p className="text-foreground/80 font-body">Learn on NVIDIA infrastructure: DGX B200 supercomputers, RAPIDS GPU acceleration, GPU-accelerated labs</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {/* B.Tech Program */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-5 h-5 text-brand-orange" />
                  <Badge className="bg-brand-orange/20 text-brand-orange border-brand-orange/30">Undergraduate</Badge>
                </div>
                <CardTitle className="font-display">B.Tech CSE (Data Science)</CardTitle>
                <CardDescription className="font-body">4-Year Program</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground font-body">Powered by NVIDIA DGX B200 & RAPIDS:</p>
                <div className="flex flex-wrap gap-2">
                  {["GPU-Accelerated ML", "RAPIDS Analytics", "Large-Scale Data Processing", "Deep Learning on CUDA"].map((spec, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">{spec}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-display">Why Choose Data Science?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm font-body">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <span>NVIDIA DGX B200 & RAPIDS access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <span>GPU-accelerated data pipelines (50X faster)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand-orange flex-shrink-0" />
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
              B.Tech CSE (Data Science) is a 4-year undergraduate degree programme powered by DSU's partnership with NVIDIA. Students learn to combine machine learning techniques, algorithms, and GPU-accelerated tools on enterprise infrastructure (DGX B200, RAPIDS) with business acumen and mathematics. The program blends technology, algorithm development, and data inference on the same infrastructure used by data scientists at Google, Meta, and Netflix—giving students competitive advantage in data science careers with 20-40% higher placement salaries.
            </p>
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-display">Curriculum Highlights</CardTitle>
                <CardDescription className="font-body">Built on NVIDIA infrastructure and GPU-accelerated learning</CardDescription>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-3 pt-0">
                {highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="overflow-hidden border border-border/50 bg-card/50">
              <div className="relative h-40">
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop" alt="Data Science Labs" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Fast Facts</CardTitle>
                <CardDescription className="font-body">NVIDIA-powered advantage at Data Science DSU</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <div className="flex items-center justify-between"><span>Salary Premium</span><span className="font-medium">+20-40% (GPU skills)</span></div>
                <div className="flex items-center justify-between"><span>Infrastructure</span><span className="font-medium">DGX B200 & RAPIDS</span></div>
                <div className="flex items-center justify-between"><span>Global Practice</span><span className="font-medium">CUDA, PyTorch, RAPIDS</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CurriculumLibrary />

      <AccreditationDocuments />

      <AnnouncementBanner priority="high" variant="banner" />
      <DepartmentNoticeBoard department="Data Science" />

      <LabsFacilitiesCarousel />

      {/* Leadership Section */}
      <section className="px-3 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="headline-3 font-display">Department Leadership</h2>
            <Link to="/academics/engineering/data-science/faculty">
              <Button variant="outline" className="border-brand-orange/40 hover:bg-brand-orange/10">
                Explore full faculty list
              </Button>
            </Link>
          </div>
          <div className="grid auto-rows-max gap-3 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {/* Chairperson */}
            {chairperson && (
              <div>
                <div className="group relative overflow-hidden rounded-lg border border-border/40 bg-card/40 backdrop-blur-sm hover:shadow-lg hover:shadow-brand-orange/10 transition-all h-full">
                  <div className="relative">
                    <div className="aspect-[1/1.3] w-full"></div>
                    <img src={chairperson.image} alt={chairperson.name} className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 p-2 w-full">
                    <div className="text-white text-xs opacity-80 line-clamp-1">Professor & Chairperson</div>
                    <div className="text-white font-semibold text-xs font-display line-clamp-2">{chairperson.name}</div>
                  </div>
                </div>
              </div>
            )}
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
                    <ChevronRight className="w-3 h-3 text-brand-orange mt-1" />
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
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop" alt="Contact Data Science" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Learn About NVIDIA Infrastructure</CardTitle>
                <CardDescription className="font-body">Chairperson, Data Science — Questions about GPU labs, RAPIDS access, and research</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <div className="flex items-center justify-between"><span>Email</span><a className="font-medium hover:underline" href="mailto:chairman-ds@dsu.edu.in">chairman-ds@dsu.edu.in</a></div>
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
              Explore NVIDIA AI infrastructure, GPU-accelerated data research, placement outcomes with salary premiums, and centers of excellence
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            <Link
              to="/centre-of-excellence"
              className="group rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-orange/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-orange/20 to-brand-orange/10 flex items-center justify-center">
                  <Award className="h-12 w-12 text-brand-orange/70 group-hover:text-brand-orange transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-orange transition-colors">
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
              className="group rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-orange/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-orange/20 to-brand-orange/10 flex items-center justify-center">
                  <Microscope className="h-12 w-12 text-brand-orange/70 group-hover:text-brand-orange transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-orange transition-colors">
                    Research & Innovation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    GPU-accelerated data science research on DGX B200 and RAPIDS with NVIDIA partnership
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
                    20-40% higher salaries for NVIDIA-skilled data scientists; direct recruitment from Google, Meta, Netflix
                  </p>
                </CardContent>
              </Card>
            </Link>

            <a
              href="https://admissions.dsu.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-orange/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-orange/20 to-brand-orange/10 flex items-center justify-center">
                  <Cpu className="h-12 w-12 text-brand-orange/70 group-hover:text-brand-orange transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-orange transition-colors">
                    Admissions
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p className="text-sm text-foreground/80 font-body">
                    Join DSU Data Science—learn on DGX B200 and become job-ready with premium placement prospects
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-brand-orange group-hover:text-brand-orange/80 transition-colors">
                    Apply Now
                    <ChevronRight className="h-3 w-3" />
                  </span>
                </CardContent>
              </Card>
            </a>
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
              Data science students access the same GPU-accelerated infrastructure used by data scientists at Google, Meta, Netflix, and Amazon.
            </p>
          </div>

          {/* Pride Callout */}
          <div className="relative overflow-hidden rounded-lg border-2 border-gradient-to-r from-gold-400 to-yellow-500/50 bg-gradient-to-r from-amber-50/50 to-yellow-50/50 dark:from-amber-950/30 dark:to-yellow-950/30 p-8 mb-14">
            <div className="absolute top-0 right-0 text-7xl opacity-10">👑</div>
            <div className="relative z-10">
              <p className="text-lg font-bold text-amber-900 dark:text-amber-200 mb-2">🏆 A Rare Distinction</p>
              <p className="text-lg text-foreground/85 leading-relaxed font-semibold">
                This complete NVIDIA AI infrastructure is available at only a handful of elite institutions across India. Data Science students at DSU learn on world-class GPU hardware that gives them a competitive advantage in data science careers and research opportunities.
              </p>
            </div>
          </div>

          {/* Key Benefits */}
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
                    <p className="text-sm text-foreground/70">NVIDIA-experienced data scientists command premium packages at Google, Meta, Netflix</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Top-Tier Company Access</p>
                    <p className="text-sm text-foreground/70">Direct recruitment from Google, Meta, Netflix, Amazon, and leading data-driven companies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Production-Ready Skills</p>
                    <p className="text-sm text-foreground/70">Experience with GPU-accelerated pipelines that handle real-world scale</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-gradient-to-br from-purple-500/10 to-purple-500/5 backdrop-blur hover:border-purple-500/50 transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl mb-4">
                  <Brain className="w-8 h-8 text-purple-500" />
                  Technical Advantage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">GPU-Accelerated Tools</p>
                    <p className="text-sm text-foreground/70">Learn RAPIDS, CUDA, and PyTorch on DGX B200 supercomputers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">50X Faster Pipelines</p>
                    <p className="text-sm text-foreground/70">Process massive datasets in hours instead of weeks with GPU acceleration</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Industry-Standard Skills</p>
                    <p className="text-sm text-foreground/70">Master tools used by data science teams at Google, Meta, Netflix</p>
                  </div>
                </div>
              </CardContent>
            </Card>
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

      {/* CTA */}
      <section className="px-3 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl p-5 border border-brand-orange/20 bg-brand-orange/5">
            <h3 className="headline-3 mb-3 font-display">Join DSU Data Science—Powered by NVIDIA</h3>
            <p className="text-foreground mb-6 font-body">Learn on DGX B200 and RAPIDS. Explore programs, conduct GPU-accelerated research, and launch your data science career with infrastructure used by Google, Meta, and Netflix.</p>
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
      label: "B.Tech CSE (Data Science)",
      description: "4-year undergraduate program with specialized tracks in machine learning, big data analytics, and business intelligence",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&h=400&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Foundations in statistics, programming, and data structures with analytics fundamentals",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/DS-dept/curriculum/BTech-DS-Curriculum-2025-26.pdf",
        },
        {
          year: "2026-27",
          summary: "Machine learning, statistical analysis, and big data processing techniques",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/DS-dept/curriculum/BTech-DS-Curriculum-2026-27.pdf",
        },
        {
          year: "2027-28",
          summary: "Advanced analytics, deep learning, and real-world data science projects",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/DS-dept/curriculum/BTech-DS-Curriculum-2027-28.pdf",
        },
        {
          year: "2028-29",
          summary: "Capstone projects, industry internships, and specialization completion",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/DS-dept/curriculum/BTech-DS-Curriculum-2028-29.pdf",
        },
      ],
    },
  ];

  return (
    <section className="px-3 py-8 bg-gradient-to-r from-brand-orange/5 via-brand-orange/5 to-brand-orange/5">
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
              Explore comprehensive curriculum for the B.Tech Data Science program. Access detailed course structures, learning outcomes, and downloadable syllabi.
            </p>
          </div>
          <Badge className="w-fit rounded-full bg-brand-orange/15 px-4 py-2 text-xs font-semibold text-brand-orange border border-brand-orange/20">
            2025 – 2029
          </Badge>
        </div>

        <div className="grid gap-3">
          {programs.map((program) => {
            const isOpen = openProgram === program.id;

            return (
              <div
                key={program.id}
                className="rounded-3xl border-2 border-brand-orange/30 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-brand-orange/10 hover:-translate-y-1"
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
                    <Badge className="rounded-full border bg-brand-orange/15 text-brand-orange border-brand-orange/20">
                      Undergraduate
                    </Badge>
                  </div>
                  <div>
                    <h3 className="headline-3 font-display text-foreground mb-2">{program.label}</h3>
                    <p className="text-sm text-foreground/80 font-body">{program.description}</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-brand-orange/30 hover:bg-brand-orange/10 text-brand-orange hover:text-brand-orange"
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
                          className={`rounded-xl border border-border/40 bg-card/70 p-3 transition-all hover:border-brand-orange/40 ${
                            batchIdx === 0 ? "ring-2 ring-brand-orange/20" : ""
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2">
                              <Badge className="rounded-full border text-xs bg-brand-orange/20 text-brand-orange border-brand-orange/30">
                                <CalendarDays className="h-3 w-3 mr-1" />
                                {batch.year}
                              </Badge>
                              {batchIdx === 0 && (
                                <Badge className="rounded-full bg-brand-orange/20 text-brand-orange border-brand-orange/30 border text-xs">
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
                              className="w-full justify-center gap-1 rounded text-xs font-semibold bg-brand-orange/10 text-brand-orange hover:bg-brand-orange/20"
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
    { title: "Data Analytics Lab", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" },
    { title: "Machine Learning Studio", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop" },
    { title: "Big Data Lab", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop" },
    { title: "Visualization Studio", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" },
    { title: "Deep Learning Center", image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?q=80&w=1200&auto=format&fit=crop" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLabIndex((prev) => (prev + 1) % labs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [labs.length]);

  const currentLab = labs[currentLabIndex];

  return (
    <section className="px-3 py-8 bg-gradient-to-r from-brand-orange/5 to-brand-orange/5">
      <div className="max-w-7xl mx-auto space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="headline-3 mb-2 font-display">Labs & Facilities</h2>
            <p className="text-sm text-foreground/80 font-body">State-of-the-art infrastructure for data science learning</p>
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
                    ? "bg-brand-orange w-8"
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
      url: "https://www.dsu.edu.in/images/Engineering/DS-dept/accreditation/BOS.pdf",
    },
    {
      title: "Program Educational Objectives",
      abbr: "PEO",
      url: "https://www.dsu.edu.in/images/Engineering/DS-dept/accreditation/PEO.pdf",
    },
    {
      title: "Program Outcomes",
      abbr: "PO",
      url: "https://www.dsu.edu.in/images/Engineering/DS-dept/accreditation/PO.pdf",
    },
    {
      title: "Program Specific Outcomes",
      abbr: "PSO",
      url: "https://www.dsu.edu.in/images/Engineering/DS-dept/accreditation/PSO.pdf",
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
              className="group relative rounded-lg border border-border/30 bg-card/30 p-4 transition-all hover:border-brand-orange/40 hover:bg-card/50 hover:shadow-md hover:shadow-brand-orange/5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange/20 transition-colors">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold text-brand-orange">{doc.abbr}</div>
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
