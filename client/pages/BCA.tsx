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
} from "lucide-react";

export default function BCA() {
  const specializations = [
    { icon: Brain, label: "Web Development" },
    { icon: Database, label: "Database Management" },
    { icon: Network, label: "Networks" },
    { icon: Code, label: "Software Development" },
    { icon: Cpu, label: "Application Design" },
    { icon: Zap, label: "IT Infrastructure" },
  ];

  const highlights = [
    "Robust foundation in computer applications and theoretical insights",
    "Hands-on practical experience integrated throughout curriculum",
    "Industry-relevant technologies and real-world challenges",
    "Three-year comprehensive program spanning 6 semesters",
    "Emphasis on software development, database management, and networks",
    "Soft skills development including communication and teamwork",
  ];

  const careers = [
    "Software Developer → Senior Developer → Team Lead",
    "Database Administrator → Database Architect",
    "Web Developer → Full-Stack Engineer → Solutions Architect",
    "IT Consultant and Support roles across diverse industries",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative">
        <div className="h-[50vh] md:h-[65vh] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop"
            alt="BCA Program"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-magenta/10 rounded-full border border-brand-magenta/20 mb-4">
              <Sparkles className="w-4 h-4 text-brand-magenta" />
              <span className="text-sm font-medium text-brand-magenta font-display">Bachelor of Computer Applications</span>
            </div>
            <h1 className="headline-1 text-white leading-tight font-display">Master Computer Applications</h1>
            <p className="subheadline text-white/90 max-w-2xl mt-3 font-body">
              A comprehensive three-year program designed to equip you with robust skills in software development, database management, and computer networks.
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
            <p className="text-foreground/80 font-body">Choose your pathway to excellence</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* BCA Program */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-5 h-5 text-brand-magenta" />
                  <Badge className="bg-brand-magenta/20 text-brand-magenta border-brand-magenta/30">Undergraduate</Badge>
                </div>
                <CardTitle className="font-display">Bachelor of Computer Applications</CardTitle>
                <CardDescription className="font-body">3-Year Program</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground font-body">Comprehensive curriculum covering:</p>
                <div className="flex flex-wrap gap-2">
                  {["Web Development", "Database Design", "Software Development", "Networking", "IT Infrastructure", "Systems Design"].map((spec, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">{spec}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Program Highlights */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-5 h-5 text-brand-blue" />
                  <Badge className="bg-brand-blue/20 text-brand-blue border-brand-blue/30">Key Features</Badge>
                </div>
                <CardTitle className="font-display">Program Highlights</CardTitle>
                <CardDescription className="font-body">What makes BCA unique</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground font-body">Industry-ready curriculum with:</p>
                <div className="flex flex-wrap gap-2">
                  {["Theory & Practice", "Industry Exposure", "Soft Skills", "Internships", "Projects"].map((feat, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">{feat}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-display">Why Choose BCA?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm font-body">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-magenta flex-shrink-0" />
                  <span>Comprehensive 3-Year Program</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand-magenta flex-shrink-0" />
                  <span>Practical Industry Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Network className="w-4 h-4 text-brand-magenta flex-shrink-0" />
                  <span>Diverse Career Opportunities</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum Library */}
      <CurriculumLibrary />

      {/* Overview */}
      <section className="px-3 py-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-5 items-start">
          <div className="lg:col-span-2 space-y-3">
            <h2 className="headline-3 font-display">Overview</h2>
            <div className="space-y-4 text-foreground leading-relaxed font-body">
              <p>
                The BCA program is meticulously crafted to equip students with a robust foundation in computer applications, blending theoretical insights with hands-on practical experience. Spanning over three years, the curriculum is designed to meet the dynamic demands of the IT industry, ensuring that graduates are well-prepared to tackle real-world challenges in software development, database management, and computer networks.
              </p>
              <p>
                In today's fast-paced technological landscape, businesses and organizations rely heavily on innovative solutions to drive growth and efficiency. The BCA program addresses these needs by immersing students in cutting-edge technologies and industry-relevant practices. Through rigorous coursework, projects, and internships, students not only gain technical proficiency but also develop critical thinking and problem-solving abilities essential for success in diverse IT roles.
              </p>
              <p>
                Beyond technical skills, the program emphasizes the development of soft skills such as communication, teamwork, and adaptability. Students learn to collaborate effectively in multidisciplinary teams, present their ideas confidently, and adapt quickly to new technologies and methodologies.
              </p>
            </div>
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-display">Program Highlights</CardTitle>
                <CardDescription className="font-body">Core curriculum focus areas</CardDescription>
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
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop" alt="BCA Labs" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Program Details</CardTitle>
                <CardDescription className="font-body">Key specifications</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3 text-sm font-body">
                <div className="flex items-center justify-between border-b border-border/20 pb-3">
                  <span>Duration</span>
                  <span className="font-medium">3 Years</span>
                </div>
                <div className="flex items-center justify-between border-b border-border/20 pb-3">
                  <span>Semesters</span>
                  <span className="font-medium">6</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Degree</span>
                  <span className="font-medium">Bachelor</span>
                </div>
              </CardContent>
            </Card>
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
                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop" alt="Contact BCA" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Program Contact</CardTitle>
                <CardDescription className="font-body">Computer Applications Department</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <div className="flex items-center justify-between"><span>Email</span><a className="font-medium hover:underline" href="mailto:info-bca@dsu.edu.in">info-bca@dsu.edu.in</a></div>
                <div className="flex items-center justify-between"><span>Phone</span><span className="font-medium">080-49092900</span></div>
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
              Discover research, placements, admission pathways, and Centers of Excellence at DSU
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
                    Innovation labs and industry partnerships for cutting-edge learning
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
                    Opportunities to contribute to cutting-edge research initiatives
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
                    Career pathways with leading companies and diverse opportunities
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
                    Join DSU BCA and shape your future
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
            <h3 className="headline-3 mb-3 font-display">Join DSU BCA</h3>
            <p className="text-foreground mb-6 font-body">Explore programs, discover opportunities, and launch your career in computer applications.</p>
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
