import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mechFaculty } from "@/data/mech-faculty";
import { NewsSection } from "@/components/NewsSection";
import { EventsSection } from "@/components/EventsSection";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import {
  Cog,
  Zap,
  Flame,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  Download,
  FileText,
  GraduationCap,
  CalendarDays,
  BookOpen,
  Award,
  Microscope,
  Building,
} from "lucide-react";

export default function DeptMechanical() {
  const chairperson = useMemo(() => mechFaculty[0], []);
  const specializations = [
    { icon: Cog, label: "Design & CAD" },
    { icon: Flame, label: "GPU-Accelerated CFD" },
    { icon: Zap, label: "Manufacturing & AI" },
    { icon: Cog, label: "Robotics & Automation" },
  ];

  const highlights = [
    "Comprehensive curriculum covering mechanics, kinematics, thermodynamics, and materials science",
    "GPU-accelerated CAE tools: NVIDIA CUDA-powered FEA and CFD for thermal & structural analysis (10-100X faster simulations)",
    "Project-based learning with real-world manufacturing problems using advanced computational engineering",
    "Strong emphasis on thermal systems, manufacturing processes, automation, and AI-driven predictive maintenance",
    "Industry partnerships with leading automotive, aerospace, and manufacturing companies",
    "Access to high-performance computing infrastructure for complex simulations and optimization problems",
  ];

  const careers = [
    "CAE Engineer (FEA/CFD) → Senior Analyst → Chief Engineer (with GPU simulation expertise, ₹18-35 LPA)",
    "Manufacturing Engineer → Production Manager → Plant Manager (with AI-driven process optimization)",
    "Thermal/Systems Engineer → Technical Lead → Project Manager (computational engineering focus)",
    "Strong placements in automotive, aerospace, manufacturing, and semiconductor sectors; 15-25% premium for CAE expertise",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="dept-hero-section relative pt-40 md:pt-0">
        <div className="h-[70vh] md:h-[65vh] max-h-[400px] md:max-h-none w-full overflow-hidden">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F78d3d64c67dc4e3a96d4b9c09a6b4aec?format=webp&width=800"
            alt="Department of Mechanical Engineering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-3 pb-20 md:pb-0 pt-6 md:pt-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 rounded-full border border-white/20 mb-4 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white font-display">Department of Mechanical Engineering</span>
            </div>
            <h1 className="headline-1 text-white leading-tight font-display">Design & Simulate at Supercomputer Scale</h1>
            <p className="subheadline text-white/90 max-w-2xl mt-3 font-body">
              Master mechanics, thermodynamics, and design using GPU-accelerated FEA, CFD, and AI-driven simulations on NVIDIA infrastructure. Build solutions faster with high-performance computing.
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
      <section className="px-3 py-8 bg-gradient-to-r from-brand-orange/5 via-brand-blue/5 to-brand-magenta/5 border-y border-border/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="headline-2 font-display mb-2">Programs Offered</h2>
            <p className="text-foreground/80 font-body">Choose your pathway with access to GPU-accelerated CAE tools and high-performance computing</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* B.Tech Program */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-5 h-5 text-brand-orange" />
                  <Badge className="bg-brand-orange/20 text-brand-orange border-brand-orange/30">Undergraduate</Badge>
                </div>
                <CardTitle className="font-display">B.Tech Mechanical Engineering</CardTitle>
                <CardDescription className="font-body">4-Year Program</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground font-body">Design, manufacturing, and innovation focus</p>
                <div className="flex flex-wrap gap-2">
                  {["Thermal Systems", "Manufacturing", "CAD & Design", "Materials Science"].map((spec, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">{spec}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* M.Tech Program */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-5 h-5 text-brand-blue" />
                  <Badge className="bg-brand-blue/20 text-brand-blue border-brand-blue/30">Postgraduate</Badge>
                </div>
                <CardTitle className="font-display">M.Tech Design Engineering</CardTitle>
                <CardDescription className="font-body">2-Year Program</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground font-body">Advanced product design and innovation</p>
                <div className="flex flex-wrap gap-2">
                  {["CAD & Simulation", "Design Thinking", "Product Studio"].map((spec, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">{spec}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-display">Why Choose ME?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm font-body">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <span>State-of-the-Art Labs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <span>Industry Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <span>Design Innovation</span>
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
              Mechanical Engineering is a discipline that applies the principles of physics, mathematics, and materials science for design, analysis, prototyping, manufacturing, and maintenance of mechanical systems. The field deals with the conversion of thermal energy to mechanical power and the design, production, and operation of machines and tools. The B.Tech Mechanical Engineering program at DSU combines foundational knowledge with cutting-edge tools and hands-on experience.
            </p>
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-display">Curriculum Highlights</CardTitle>
                <CardDescription className="font-body">Designed for engineers who innovate</CardDescription>
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
                <img src="https://images.unsplash.com/photo-1517677129300-07b130802f46?q=80&w=1200&auto=format&fit=crop" alt="ME Labs" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Fast Facts</CardTitle>
                <CardDescription className="font-body">What sets ME at DSU apart</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <div className="flex items-center justify-between"><span>Program Type</span><span className="font-medium">B.Tech</span></div>
                <div className="flex items-center justify-between"><span>Duration</span><span className="font-medium">4 Years</span></div>
                <div className="flex items-center justify-between"><span>Computational Infrastructure</span><span className="font-medium">GPU-Accelerated CAE</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Computational Engineering Tools */}
      <section className="px-3 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="headline-2 font-display mb-2">Advanced Computational Tools Powered by NVIDIA</h2>
            <p className="text-foreground/80 font-body max-w-2xl">Access GPU-accelerated engineering software for faster, more accurate simulations and analysis</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* FEA & Structural Analysis */}
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-6 rounded-lg border border-blue-500/30">
              <h4 className="text-xl font-bold text-blue-500 mb-3">Finite Element Analysis (FEA)</h4>
              <ul className="space-y-2 text-base text-foreground/70">
                <li>✓ GPU-accelerated structural and thermal analysis for rapid prototyping</li>
                <li>✓ Simulate complex mechanical systems 10-50X faster than traditional CPU</li>
                <li>✓ Real-time optimization and design iteration on supercomputer infrastructure</li>
                <li>✓ Materials science simulations for failure prediction and durability testing</li>
              </ul>
            </div>

            {/* CFD & Thermal Simulation */}
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-lg border border-orange-500/30">
              <h4 className="text-xl font-bold text-orange-500 mb-3">Computational Fluid Dynamics (CFD)</h4>
              <ul className="space-y-2 text-base text-foreground/70">
                <li>✓ GPU-powered thermal and flow analysis for turbomachinery and heat transfer</li>
                <li>✓ CUDA-accelerated solvers for complex combustion and aerodynamic simulations</li>
                <li>✓ Instant feedback on design modifications for rapid engineering cycles</li>
                <li>✓ High-fidelity simulations that would take weeks on traditional systems</li>
              </ul>
            </div>

            {/* AI for Manufacturing */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-lg border border-purple-500/30">
              <h4 className="text-xl font-bold text-purple-500 mb-3">AI-Driven Manufacturing Optimization</h4>
              <ul className="space-y-2 text-base text-foreground/70">
                <li>✓ Machine learning models for predictive maintenance and fault detection</li>
                <li>✓ GPU-accelerated neural networks for quality control and defect prediction</li>
                <li>✓ Process optimization using reinforcement learning on NVIDIA infrastructure</li>
                <li>✓ Industry-scale applications in automotive and aerospace manufacturing</li>
              </ul>
            </div>

            {/* Why It Matters */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-6 rounded-lg border border-emerald-500/30">
              <h4 className="text-xl font-bold text-emerald-500 mb-3">Competitive Advantage</h4>
              <ul className="space-y-2 text-base text-foreground/70">
                <li>✓ Hands-on experience with tools used by top automotive (BMW, Tesla) and aerospace (Boeing, Airbus) companies</li>
                <li>✓ 15-25% salary premium for engineers with GPU-accelerated CAE expertise</li>
                <li>✓ Rare computational infrastructure in Indian engineering education</li>
                <li>✓ Direct pathway to high-demand roles in semiconductor, automotive, and defense sectors</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CurriculumLibrary />

      <AccreditationDocuments />

      <NoticeBoard />

      <LabsFacilitiesCarousel />

      {/* Leadership Section */}
      <section className="px-3 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="headline-3 font-display">Department Leadership</h2>
            <Link to="/academics/engineering/mechanical-engineering/faculty">
              <Button variant="outline" className="border-brand-orange/40 hover:bg-brand-orange/10">
                Explore full faculty list
              </Button>
            </Link>
          </div>
          <div className="grid auto-rows-max gap-3 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {/* Chairperson */}
            <div>
              <Link to={`/academics/engineering/mechanical/faculty/${chairperson.slug}`}>
                <div className="group relative overflow-hidden rounded-lg border border-border/40 bg-card/40 backdrop-blur-sm hover:shadow-lg hover:shadow-brand-orange/10 transition-all cursor-pointer h-full">
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
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="px-3 py-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-5 items-start">
          <div>
            <h2 className="headline-3 mb-4 font-display">Career Prospects</h2>
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
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" alt="Contact ME" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Department Contact</CardTitle>
                <CardDescription className="font-body">Chairperson, Mechanical Engineering</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <div className="flex items-center justify-between"><span>Email</span><a className="font-medium hover:underline" href="mailto:chairman-me@dsu.edu.in">chairman-me@dsu.edu.in</a></div>
                <div className="flex items-center justify-between"><span>Phone</span><span className="font-medium">080-49092935</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="px-3 py-20">
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

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {/* Centre of Excellence */}
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

            {/* Research */}
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
                    Cutting-edge research initiatives and innovation labs
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
                    Career pathways with leading companies
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Admissions */}
            <a
              href="https://admissions.dsu.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-orange/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-orange/20 to-brand-orange/10 flex items-center justify-center">
                  <Cog className="h-12 w-12 text-brand-orange/70 group-hover:text-brand-orange transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-orange transition-colors">
                    Admissions
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p className="text-sm text-foreground/80 font-body">
                    Join DSU Mechanical Engineering and innovate
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

      {/* CTA */}
      <section className="px-3 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl p-5 border border-brand-orange/20 bg-brand-orange/5">
            <h3 className="headline-3 mb-3 font-display">Join DSU Mechanical Engineering</h3>
            <p className="text-foreground mb-6 font-body">Design, build, and innovate solutions that transform industries and improve lives.</p>
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

function LabsFacilitiesCarousel() {
  const [currentLabIndex, setCurrentLabIndex] = useState(0);

  const labs: LabItem[] = [
    { title: "CAD & CAM Lab", image: "https://images.unsplash.com/photo-1517677129300-07b130802f46?q=80&w=1200&auto=format&fit=crop" },
    { title: "Thermal Engineering Lab", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" },
    { title: "Manufacturing & Production Lab", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop" },
    { title: "Robotics & Automation Lab", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop" },
    { title: "Materials Testing Lab", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" },
    { title: "Design Studio", image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop" },
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
      url: "https://www.dsu.edu.in/images/Engineering/ME-dept/accreditation/BOS.pdf",
    },
    {
      title: "Program Educational Objectives",
      abbr: "PEO",
      url: "https://www.dsu.edu.in/images/Engineering/ME-dept/accreditation/PEO.pdf",
    },
    {
      title: "Program Outcomes",
      abbr: "PO",
      url: "https://www.dsu.edu.in/images/Engineering/ME-dept/accreditation/PO.pdf",
    },
    {
      title: "Program Specific Outcomes",
      abbr: "PSO",
      url: "https://www.dsu.edu.in/images/Engineering/ME-dept/accreditation/PSO.pdf",
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

function NoticeBoard() {
  const notices: NoticeItem[] = [
    {
      id: "notice-1",
      title: "Mechanical Engineering Expo 2025",
      category: "Event",
      date: "Feb 20, 2025",
      description:
        "Showcase of student projects in CAD/CAM, robotics, and advanced manufacturing technologies.",
      image: "https://images.unsplash.com/photo-1517677129300-07b130802f46?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/ME-dept/notices/ME-Expo-2025.pdf",
    },
    {
      id: "notice-2",
      title: "Semester IV Lab Assignment Registration",
      category: "Announcement",
      date: "Feb 5, 2025",
      description:
        "Register for manufacturing, thermal, and robotics labs for the upcoming semester.",
      link: "https://www.dsu.edu.in/images/Engineering/ME-dept/notices/Lab-Registration-2025.pdf",
    },
    {
      id: "notice-3",
      title: "Industry Workshop: CAD/CAM Advanced Techniques",
      category: "Event",
      date: "Jan 28, 2025",
      description:
        "Hands-on workshop by CATIA experts on advanced design and simulation techniques.",
      image: "https://images.unsplash.com/photo-1517677129300-07b130802f46?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/ME-dept/notices/CAD-Workshop.pdf",
    },
    {
      id: "notice-4",
      title: "Faculty Research Highlights 2024",
      category: "News",
      date: "Jan 22, 2025",
      description:
        "Department faculty published research on thermal systems and manufacturing optimization.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f70a504f9?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/ME-dept/notices/Research-2024.pdf",
    },
    {
      id: "notice-5",
      title: "Capstone Project Competition",
      category: "Event",
      date: "Feb 15, 2025",
      description:
        "Final year students compete with innovative mechanical design projects solving real-world problems.",
      image: "https://images.unsplash.com/photo-1517677129300-07b130802f46?w=600&h=300&fit=crop",
    },
    {
      id: "notice-6",
      title: "Strong Placements in Automotive Sector",
      category: "News",
      date: "Jan 18, 2025",
      description:
        "ME graduates placed at Maruti, Bajaj, TVS, and other leading automotive companies.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/ME-dept/notices/Placements-2024-25.pdf",
    },
    {
      id: "notice-7",
      title: "Robotics Lab Setup Complete",
      category: "Announcement",
      date: "Jan 25, 2025",
      description:
        "New state-of-the-art robotics and automation lab now operational for student projects.",
      link: "https://www.dsu.edu.in/images/Engineering/ME-dept/notices/Robotics-Lab-2025.pdf",
    },
    {
      id: "notice-8",
      title: "Guest Lecture: Sustainable Manufacturing",
      category: "Event",
      date: "Feb 12, 2025",
      description:
        "Industry expert discusses sustainable practices in modern manufacturing systems.",
      image: "https://images.unsplash.com/photo-1517677129300-07b130802f46?w=600&h=300&fit=crop",
    },
    {
      id: "notice-9",
      title: "NAAC Accreditation - A Grade",
      category: "News",
      date: "Jan 12, 2025",
      description:
        "Mechanical Engineering program achieves A grade in NAAC assessment for academic excellence.",
      image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/ME-dept/notices/NAAC-2025.pdf",
    },
  ];

  const getCategoryStyle = () => ({
    icon: CalendarDays,
    label: "Event",
    className: "bg-brand-orange/15 text-brand-orange",
  });

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
          <div className="flex items-center gap-2 px-4 py-3 rounded-xl border-l-4 border-brand-orange bg-brand-orange/10">
            <h3 className="headline-4 font-display text-brand-orange">{title}</h3>
          </div>
          <p className="text-xs text-foreground/60 italic p-4 text-center">No items to display</p>
        </div>
      );
    }

    const currentItem = items[currentIndex];

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 px-4 py-3 rounded-xl border-l-4 border-brand-orange bg-brand-orange/10">
          <h3 className="headline-4 font-display text-brand-orange">{title}</h3>
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
                  className="h-6 px-2 text-xs bg-brand-orange/10 text-brand-orange hover:bg-brand-orange/20"
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
                    ? "bg-brand-orange w-6"
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
              Stay updated with upcoming events, news, and important announcements from the Mechanical Engineering department.
            </p>
          </div>
          <Badge className="w-fit rounded-full bg-brand-orange/15 px-4 py-2 text-xs font-semibold text-brand-orange border border-brand-orange/20">
            Updated weekly
          </Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            {renderCarousel("Events", events, "orange", currentEventIndex, setCurrentEventIndex)}
          </div>
          <div>
            {renderCarousel("News", news, "orange", currentNewsIndex, setCurrentNewsIndex)}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 px-4 py-3 rounded-xl border-l-4 border-brand-orange bg-brand-orange/10">
            <h3 className="headline-4 font-display text-brand-orange">Announcements</h3>
            <Badge className="ml-auto text-xs">{announcements.length}</Badge>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {announcements.length > 0 ? (
              announcements.map((notice) => (
                <Card
                  key={notice.id}
                  className="group border border-border/40 bg-card/50 shadow-sm transition hover:-translate-y-1 hover:border-brand-orange/40 hover:shadow-brand-orange/5"
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold text-foreground/60">{notice.date}</span>
                      {notice.link && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 px-2 text-xs bg-brand-orange/10 text-brand-orange hover:bg-brand-orange/20"
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
      label: "B.Tech Mechanical Engineering",
      description: "4-year undergraduate program with specializations in design, thermal systems, and manufacturing",
      image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ff4525c4483ff446382a20ff22b915388?format=webp&width=800",
      batches: [
        {
          year: "2025-26",
          summary: "Foundations in mechanics, thermodynamics, and CAD with hands-on design projects",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/ME-dept/curriculum/BTech-ME-Curriculum-2025-26.pdf",
        },
        {
          year: "2026-27",
          summary: "Manufacturing processes, thermal systems, and advanced CAM techniques",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/ME-dept/curriculum/BTech-ME-Curriculum-2026-27.pdf",
        },
        {
          year: "2027-28",
          summary: "Robotics, automation, and specialized design projects with industry mentorship",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/ME-dept/curriculum/BTech-ME-Curriculum-2027-28.pdf",
        },
        {
          year: "2028-29",
          summary: "Capstone project, internships, and specialization completion",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/ME-dept/curriculum/BTech-ME-Curriculum-2028-29.pdf",
        },
      ],
    },
    {
      id: "mtech",
      label: "M.Tech Design Engineering",
      description: "2-year postgraduate program applying advanced design methodologies and computational tools for product innovation",
      image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ff5519221875143728b4d6be589211665?format=webp&width=800",
      batches: [
        {
          year: "2025-26",
          summary: "Advanced design methodologies, human-centred design thinking, and CAD/CAM fundamentals",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/ME-dept/curriculum/MTech-Design-Curriculum-2025-26.pdf",
        },
        {
          year: "2026-27",
          summary: "Computational design tools, simulation, product studio projects, and industry collaborations",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/ME-dept/curriculum/MTech-Design-Curriculum-2026-27.pdf",
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
              Explore comprehensive curriculum for the B.Tech Mechanical Engineering program. Access detailed course structures, learning outcomes, and downloadable syllabi.
            </p>
          </div>
          <Badge className="w-fit rounded-full bg-brand-orange/15 px-4 py-2 text-xs font-semibold text-brand-orange border border-brand-orange/20">
            2025 – 2029
          </Badge>
        </div>

        <div className="grid gap-3">
          {programs.map((program) => {
            const isOpen = openProgram === program.id;
            const isUG = program.id === "btech";
            const borderClass = "border-brand-orange/30";
            const badgeClass = `rounded-full border ${isUG ? "bg-brand-orange/15 text-brand-orange border-brand-orange/20" : "bg-brand-orange/15 text-brand-orange border-brand-orange/20"}`;
            const buttonClass = "w-full border-brand-orange/30 hover:bg-brand-orange/10 text-brand-orange hover:text-brand-orange";

            return (
              <div
                key={program.id}
                className={`rounded-3xl border-2 ${borderClass} overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-brand-orange/10 hover:-translate-y-1`}
              >
                <div className="relative h-48 overflow-hidden mt-4">
                  <img
                    src={program.image}
                    alt={program.label}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-3 bg-background/50 backdrop-blur-sm space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge className={badgeClass}>
                      {isUG ? "Undergraduate" : "Postgraduate"}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="headline-3 font-display text-foreground mb-2">{program.label}</h3>
                    <p className="text-sm text-foreground/80 font-body">{program.description}</p>
                  </div>
                  <Button
                    variant="outline"
                    className={buttonClass}
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
