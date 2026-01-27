import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CurriculumLibrary } from "@/components/CurriculumLibrary";
import { DepartmentNoticeBoard } from "@/components/DepartmentNoticeBoard";
import { getCurriculumByDepartment } from "@/lib/content-manager";
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
  Radio,
  Microchip,
  Wifi,
} from "lucide-react";

function CurriculumLibraryECE() {
  const programs = getCurriculumByDepartment("Engineering", "ECE");
  return <CurriculumLibrary programs={programs} themeColor="blue" />;
}

export default function ElectronicsCommunication() {
  const specializations = [
    { icon: Microchip, label: "GPU-Accelerated VLSI" },
    { icon: Radio, label: "5G & Wireless" },
    { icon: Wifi, label: "Edge AI with Jetson" },
    { icon: Cpu, label: "Embedded AI Systems" },
    { icon: Network, label: "GPU Signal Processing" },
    { icon: Zap, label: "High-Performance Computing" },
  ];

  const highlights = [
    "Advanced curriculum in signal processing, VLSI, communication systems, and GPU computing",
    "GPU-accelerated design tools: NVIDIA CUDA for circuit simulation and verification (100X faster)",
    "Industry-sponsored labs: Bosch ETAS Lab, Analog Devices Lab with GPU-accelerated design frameworks",
    "Hands-on experience with 5G, IoT, edge AI on Jetson, and CUDA-based embedded systems",
    "High-performance signal processing using GPU-accelerated libraries (cuFFT, cuBLAS, RAPIDS)",
    "Research-driven learning integrating NVIDIA Jetson, DGX, and AI acceleration for next-gen electronics",
  ];

  const careers = [
    "VLSI Design Engineer (GPU-accelerated) → Senior Design Engineer → Chief Architect (₹20-40 LPA)",
    "Signal Processing Engineer → ML Systems Engineer (with CUDA/GPU expertise, ₹22-42 LPA)",
    "Embedded AI Specialist → Edge Computing Architect (Jetson platform expertise)",
    "Career pathways in semiconductor, 5G, defense electronics, and AI chip design; 20-30% premium for GPU skills",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="dept-hero-section relative pt-16 md:pt-0">
        <div className="h-[70vh] md:h-[65vh] max-h-[400px] md:max-h-none w-full overflow-hidden">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F2b2b8488d7854513ae645869966728c3?format=webp&width=800"
            alt="Department of Electronics & Communication Engineering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 pb-20 md:pb-0 pt-6 md:pt-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 rounded-full border border-white/20 mb-4 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white font-display">
                Department of Electronics & Communication Engineering
              </span>
            </div>
            <h1 className="headline-1 text-white leading-tight font-display">
              Build Chips & AI on GPU Acceleration
            </h1>
            <p className="subheadline text-white/90 max-w-2xl mt-3 font-body">
              Master VLSI, 5G, signal processing, and edge AI using
              GPU-accelerated design tools, NVIDIA CUDA, and Jetson platforms.
              Design next-gen electronics at supercomputer speed.
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
                <Button
                  className="bg-brand-gradient text-foreground"
                  style={{
                    padding:
                      "clamp(0.5rem, 1.5vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)",
                    fontSize: "clamp(0.8125rem, 1.8vw, 0.875rem)",
                  }}
                >
                  Apply Now
                  <GraduationCap
                    style={{
                      width: "clamp(0.875rem, 1.5vw, 1rem)",
                      height: "clamp(0.875rem, 1.5vw, 1rem)",
                    }}
                    className="ml-2"
                  />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="px-6 py-16 bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5 border-y border-border/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="headline-2 font-display mb-2">Programs Offered</h2>
            <p className="text-foreground/80 font-body">
              Choose your pathway with GPU-accelerated design tools, edge AI,
              and supercomputer-scale simulation infrastructure
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* B.Tech Program */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-5 h-5 text-brand-blue" />
                  <Badge className="bg-brand-blue/20 text-brand-blue border-brand-blue/30">
                    Undergraduate
                  </Badge>
                </div>
                <CardTitle className="font-display">
                  B.Tech Electronics & Communication Engineering
                </CardTitle>
                <CardDescription className="font-body">
                  4-Year Program
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground font-body">
                  With specializations in embedded systems and communication
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Embedded Systems",
                    "VLSI Design",
                    "5G & IoT",
                    "Signal Processing",
                  ].map((spec, i) => (
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
                  <BookOpen className="w-5 h-5 text-brand-blue" />
                  <Badge className="bg-brand-blue/20 text-brand-blue border-brand-blue/30">
                    Postgraduate
                  </Badge>
                </div>
                <CardTitle className="font-display">
                  M.Tech Embedded Systems
                </CardTitle>
                <CardDescription className="font-body">
                  2-Year Program
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground font-body">
                  Advanced embedded systems and real-time design
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "RTOS Design",
                    "Hardware Integration",
                    "Edge Computing",
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
                  Why Choose ECE?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm font-body">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Industry Lab Partnerships</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Research Facilities</span>
                </div>
                <div className="flex items-center gap-2">
                  <Network className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>5G & IoT Focus</span>
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
              The Department of Electronics & Communication Engineering offers a
              dynamic ecosystem for study, research, and professional growth.
              The B.Tech ECE program provides a solid foundation and new-age
              skills with an innovative curriculum and pedagogy aligned to NEP
              and industry partnerships. Students gain breadth across core
              electronics and communication, and depth through elective streams,
              while developing leadership and personal effectiveness for
              holistic growth.
            </p>
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-display">
                  Program Highlights
                </CardTitle>
                <CardDescription className="font-body">
                  Designed for electronics innovation
                </CardDescription>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-3 pt-0">
                {highlights.map((h, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
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
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop"
                  alt="ECE Labs"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Fast Facts</CardTitle>
                <CardDescription className="font-body">
                  What sets ECE at DSU apart
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <div className="flex items-center justify-between">
                  <span>GPU Acceleration</span>
                  <span className="font-medium">NVIDIA CUDA & Jetson</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Simulation Speedup</span>
                  <span className="font-medium">100X faster design</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Research Focus</span>
                  <span className="font-medium">AI Chips & 5G Design</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Computational Engineering Tools */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="headline-2 font-display mb-2">
              Advanced Computational Tools Powered by NVIDIA
            </h2>
            <p className="text-foreground/80 font-body max-w-2xl">
              Access GPU-accelerated design, simulation, and AI platforms for
              faster chip design, signal processing, and edge AI development
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* VLSI & Circuit Simulation */}
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-6 rounded-lg border border-blue-500/30">
              <h4 className="text-xl font-bold text-blue-500 mb-3">
                GPU-Accelerated VLSI Design & Simulation
              </h4>
              <ul className="space-y-2 text-base text-foreground/70">
                <li>
                  ✓ NVIDIA CUDA-powered circuit simulation: 50-100X faster
                  design verification
                </li>
                <li>
                  ✓ High-performance timing analysis, static/dynamic power
                  estimation using GPUs
                </li>
                <li>
                  ✓ Rapid prototyping: Simulate complex chip designs in hours
                  instead of weeks
                </li>
                <li>
                  ✓ Machine learning-assisted design: AI models for placement,
                  routing, and optimization
                </li>
              </ul>
            </div>

            {/* Signal Processing & Communication */}
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-lg border border-orange-500/30">
              <h4 className="text-xl font-bold text-orange-500 mb-3">
                GPU-Accelerated Signal Processing & 5G
              </h4>
              <ul className="space-y-2 text-base text-foreground/70">
                <li>
                  ✓ cuFFT, cuBLAS, cuDNN for high-speed DSP: real-time signal
                  processing on GPUs
                </li>
                <li>
                  ✓ 5G/6G communication simulation: Channel modeling,
                  beamforming, MIMO analysis at scale
                </li>
                <li>
                  ✓ Wireless communication design on NVIDIA infrastructure
                  (PyTorch, TensorFlow)
                </li>
                <li>
                  ✓ Spectrum analysis and software-defined radio (SDR) using GPU
                  acceleration
                </li>
              </ul>
            </div>

            {/* Edge AI & Jetson */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-lg border border-purple-500/30">
              <h4 className="text-xl font-bold text-purple-500 mb-3">
                Edge AI on NVIDIA Jetson Platforms
              </h4>
              <ul className="space-y-2 text-base text-foreground/70">
                <li>
                  ✓ Deploy AI models on Jetson Nano/Xavier/AGX: Real-time
                  inference for IoT and embedded systems
                </li>
                <li>
                  ✓ AI-powered IoT solutions: Object detection, speech
                  recognition, computer vision on edge devices
                </li>
                <li>
                  ✓ TensorRT optimization for model deployment on
                  energy-efficient Jetson hardware
                </li>
                <li>
                  ✓ Real-world embedded AI projects: UAVs, robotics, autonomous
                  systems with neural networks
                </li>
              </ul>
            </div>

            {/* Competitive Advantage */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-6 rounded-lg border border-emerald-500/30">
              <h4 className="text-xl font-bold text-emerald-500 mb-3">
                Industry-Ready Competitive Edge
              </h4>
              <ul className="space-y-2 text-base text-foreground/70">
                <li>
                  ✓ Experience with tools used by semiconductor leaders: NVIDIA,
                  Qualcomm, ARM, Intel
                </li>
                <li>
                  ✓ 20-30% salary premium for CUDA and GPU-accelerated
                  electronics engineers
                </li>
                <li>
                  ✓ Direct pathway to roles in semiconductor design, 5G
                  infrastructure, and AI chip development
                </li>
                <li>
                  ✓ Rare GPU-accelerated ECE infrastructure in Indian
                  engineering education
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CurriculumLibraryECE />

      <AccreditationDocumentsECE />

      <DepartmentNoticeBoard school="Engineering" department="Electronics & Communication" />

      <LabsFacilitiesCarouselECE />

      {/* Department Leadership */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="headline-3 font-display">Department Leadership</h2>
            <Link to="/academics/engineering/electronics-communication/faculty">
              <Button
                variant="outline"
                className="border-brand-blue/40 hover:bg-brand-blue/10"
              >
                Explore full faculty list
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Chairperson */}
            <div>
              <p className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-2">
                Chairperson
              </p>
              <div className="group relative overflow-hidden rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm hover:shadow-lg hover:shadow-brand-blue/10 transition-all cursor-pointer">
                <div className="relative">
                  <div className="aspect-square w-full"></div>
                  <img
                    src="https://www.dsu.edu.in/images/Engineering/ECE-dept/faculty/ArunBalodi.jpg"
                    alt="Dr Arun Balodi"
                    className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 p-3 w-full">
                  <div className="text-white text-xs opacity-80">Professor</div>
                  <div className="text-white font-semibold text-sm font-display line-clamp-2">
                    Dr Arun Balodi
                  </div>
                </div>
              </div>
            </div>
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
                  <div
                    key={i}
                    className="flex items-start gap-2 text-sm text-foreground font-body"
                  >
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
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop"
                  alt="Contact ECE"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-display">
                  Department Contact
                </CardTitle>
                <CardDescription className="font-body">
                  Chairperson, Electronics & Communication Engineering
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <div className="flex items-center justify-between">
                  <span>Email</span>
                  <a
                    className="font-medium hover:underline"
                    href="mailto:chairman-ece@dsu.edu.in"
                  >
                    chairman-ece@dsu.edu.in
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span>Phone</span>
                  <span className="font-medium">+91-080-49092937</span>
                </div>
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
              Discover research, placements, admission pathways, and Centers of
              Excellence at DSU
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Centre of Excellence */}
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
                    Immersive innovation labs powered by industry leaders like
                    Bosch and Analog Devices
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
                    Cutting-edge electronics research initiatives and innovation
                    labs
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
                    Career pathways with leading electronics and semiconductor
                    companies
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Admissions */}
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
                    Join DSU ECE and shape the future
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
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl p-10 border border-brand-blue/20 bg-brand-blue/5">
            <h3 className="headline-3 mb-3 font-display">Join DSU ECE</h3>
            <p className="text-foreground mb-6 font-body">
              Explore programs, discover research, and launch your career in
              Electronics & Communication Engineering.
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

function LabsFacilitiesCarouselECE() {
  const [currentLabIndex, setCurrentLabIndex] = useState(0);

  const labs: LabItem[] = [
    {
      title: "VLSI Design Lab",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Bosch ETAS Lab",
      image:
        "https://images.unsplash.com/photo-1517677129300-07b130802f46?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Communication Systems Lab",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "IoT & Robotics Lab",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Microcontroller Lab",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Analog Devices Lab",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
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
    <section className="px-6 py-16 bg-gradient-to-r from-brand-blue/5 to-brand-orange/5">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="headline-3 mb-2 font-display">Labs & Facilities</h2>
            <p className="text-sm text-foreground/80 font-body">
              State-of-the-art infrastructure for electronics and communication
              hands-on learning
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
          <CardContent className="p-6">
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

function AccreditationDocumentsECE() {
  const documents = [
    {
      title: "Board of Studies (BOS)",
      abbr: "BOS",
      url: "https://www.dsu.edu.in/images/Engineering/ECE-dept/accreditation/BOS.pdf",
    },
    {
      title: "Program Educational Objectives",
      abbr: "PEO",
      url: "https://www.dsu.edu.in/images/Engineering/ECE-dept/accreditation/PEO.pdf",
    },
    {
      title: "Program Outcomes",
      abbr: "PO",
      url: "https://www.dsu.edu.in/images/Engineering/ECE-dept/accreditation/PO.pdf",
    },
    {
      title: "Program Specific Outcomes",
      abbr: "PSO",
      url: "https://www.dsu.edu.in/images/Engineering/ECE-dept/accreditation/PSO.pdf",
    },
  ];

  return (
    <section className="px-6 py-12 bg-background/50">
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
              className="group relative rounded-lg border border-border/30 bg-card/30 p-4 transition-all hover:border-brand-blue/40 hover:bg-card/50 hover:shadow-md hover:shadow-brand-blue/5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue/20 transition-colors">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold text-brand-blue">
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

function NoticeBoardECE() {
  const notices: NoticeItem[] = [
    {
      id: "notice-1",
      title: "ECE Symposium 2025: Electronics & Communication Innovation",
      category: "Event",
      date: "Feb 14, 2025",
      description:
        "Department-hosted symposium with industry experts on latest VLSI, 5G, and IoT advancements.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/ECE-dept/notices/ECE-Symposium-2025.pdf",
    },
    {
      id: "notice-2",
      title: "B.Tech ECE Elective Registration",
      category: "Announcement",
      date: "Jan 31, 2025",
      description:
        "Register for sem VI electives including Advanced Embedded Systems, 5G Networks, and VLSI design.",
      link: "https://www.dsu.edu.in/images/Engineering/ECE-dept/notices/Elective-Registration-2025.pdf",
    },
    {
      id: "notice-3",
      title: "Bosch ETAS Lab: Real-Time Systems Workshop",
      category: "Event",
      date: "Feb 5, 2025",
      description:
        "Industry-led workshop on embedded real-time operating systems for automotive applications.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/ECE-dept/notices/ETAS-Workshop-2025.pdf",
    },
    {
      id: "notice-4",
      title: "ECE Faculty Publications in IEEE Conferences",
      category: "News",
      date: "Jan 23, 2025",
      description:
        "Two faculty papers accepted at IEEE International Conference on Electronics & Communication.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/ECE-dept/notices/Faculty-Publications-2025.pdf",
    },
    {
      id: "notice-5",
      title: "5G & IoT Research Lab Inauguration",
      category: "Event",
      date: "Feb 12, 2025",
      description:
        "Official inauguration of the new 5G & IoT research facility with state-of-the-art equipment.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=300&fit=crop",
    },
    {
      id: "notice-6",
      title: "VLSI Design Competition 2025",
      category: "News",
      date: "Jan 24, 2025",
      description:
        "Inter-college VLSI chip design competition with participation from engineering colleges across India.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f70a504f9?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/ECE-dept/notices/VLSI-Competition-2025.pdf",
    },
    {
      id: "notice-7",
      title: "Industrial Internship Policy Update",
      category: "Announcement",
      date: "Jan 26, 2025",
      description:
        "New guidelines for mandatory summer internships in electronics and semiconductor industries.",
      link: "https://www.dsu.edu.in/images/Engineering/ECE-dept/notices/Internship-Policy-2025.pdf",
    },
    {
      id: "notice-8",
      title: "Analog Devices Lab Workshop",
      category: "Event",
      date: "Feb 9, 2025",
      description:
        "Advanced analog circuit design workshop in collaboration with Analog Devices engineers.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop",
    },
    {
      id: "notice-9",
      title: "NAAC Accreditation: A Grade Maintained",
      category: "News",
      date: "Jan 17, 2025",
      description:
        "ECE department successfully maintains 'A' grade in latest NAAC cycle assessment.",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/ECE-dept/notices/NAAC-Accreditation-2025.pdf",
    },
  ];

  const getCategoryStyle = (category: NoticeItem["category"]) => {
    switch (category) {
      case "Event":
        return {
          icon: CalendarDays,
          label: "Event",
          className: "bg-brand-blue/15 text-brand-blue",
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
              color === "blue"
                ? "border-brand-blue bg-brand-blue/10"
                : "border-brand-orange bg-brand-orange/10"
            }`}
          >
            <h3
              className={`headline-4 font-display ${color === "blue" ? "text-brand-blue" : "text-brand-orange"}`}
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
            color === "blue"
              ? "border-brand-blue bg-brand-blue/10"
              : "border-brand-orange bg-brand-orange/10"
          }`}
        >
          <h3
            className={`headline-4 font-display ${color === "blue" ? "text-brand-blue" : "text-brand-orange"}`}
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
                    ? color === "blue"
                      ? "bg-brand-blue w-6"
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
              Stay updated with upcoming events, news, and important
              announcements from the ECE department.
            </p>
          </div>
          <Badge className="w-fit rounded-full bg-brand-blue/15 px-4 py-2 text-xs font-semibold text-brand-blue border border-brand-blue/20">
            Updated weekly
          </Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            {renderCarousel(
              "Events",
              events,
              "blue",
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
                  className="group border border-border/40 bg-card/50 shadow-sm transition hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-brand-blue/5"
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
