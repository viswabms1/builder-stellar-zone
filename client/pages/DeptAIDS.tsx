import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { schools } from "./Eligibility";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useMemo } from "react";
import { DepartmentNoticeBoard } from "@/components/DepartmentNoticeBoard";
import { CurriculumLibrary } from "@/components/CurriculumLibrary";
import { getCurriculumByDepartment } from "@/lib/content-manager";
import {
  Brain,
  Database,
  BarChart3,
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
  Zap,
  Award,
  Microscope,
  IndianRupee,
  ArrowRight,
} from "lucide-react";
import { useDepartmentFaculty } from "@/hooks/useDepartmentFaculty";
import { DepartmentPageMenu } from "@/components/DepartmentPageMenu";
import { Users, Briefcase, Mail, Building } from "lucide-react";

export default function DeptAIDS() {
  const { faculty } = useDepartmentFaculty({ departmentCode: "ai-ds" });
  const chairperson = useMemo(() => {
    return faculty.find((f) => f.title.includes("Chairperson"));
  }, [faculty]);
  const specializations = [
    { icon: Brain, label: "Artificial Intelligence" },
    { icon: BarChart3, label: "Data Science" },
    { icon: Brain, label: "Machine Learning" },
    { icon: Database, label: "Analytics Systems" },
  ];

  const highlights = [
    "Cutting-edge curriculum aligned with industry demands in AI and Data Science",
    "Project-based learning with real-world datasets and use cases",
    "Integration of advanced analytics and machine learning frameworks",
    "Strong emphasis on data-driven decision making and insights",
    "Collaborations with leading tech companies and research institutions",
    "Opportunities for research and specialization in emerging AI technologies",
  ];

  const careers = [
    "Data Scientist → Senior Data Scientist → Analytics Manager",
    "Machine Learning Engineer → AI Research Engineer → Technical Lead",
    "Business Analytics → Insights Engineer → Strategy Consultant",
    "Graduates work across technology, analytics, fintech, and data-driven sectors",
  ];

  const menuSections = [
    {
      id: "programs",
      label: "Programs",
      icon: <BookOpen className="w-4 h-4" />,
    },
    { id: "about", label: "About", icon: <Users className="w-4 h-4" /> },
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
    { id: "contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="dept-hero-section relative pt-40 md:pt-0">
        <div className="h-[70vh] md:h-[65vh] max-h-[400px] md:max-h-none w-full overflow-hidden">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F0319ed06aa42410cb90c38896ba9d23f?format=webp&width=800"
            alt="Department of AI & Data Science"
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
                Department of AI & Data Science
              </span>
            </div>
            <h1 className="headline-1 text-white leading-tight font-display">
              Department of Artificial Intelligence & Data Science
            </h1>
            <p className="subheadline text-white/90 max-w-2xl mt-3 font-body">
              An interdisciplinary department at the School of Engineering, DSU,
              focused on data-driven intelligence, AI systems, and applied
              analytics for industry and research.
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
        className="px-6 py-8 bg-gradient-to-r from-brand-blue/5 via-brand-blue/5 to-brand-blue/5 border-y border-border/30"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="headline-2 font-display mb-2">Academic Programs</h2>
            <p className="text-foreground/80 font-body">
              Undergraduate and postgraduate programs designed to build strong
              foundations in AI, data science, and analytics, with pathways to
              industry and research careers.
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
                  B.Tech CSE (AI & Data Science), School of Engineering, DSU
                </CardTitle>
                <CardDescription className="font-body">
                  4-Year Program
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground font-body">
                  With specializations in:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Machine Learning",
                    "Big Data Analytics",
                    "Data Science",
                    "Deep Learning",
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
                  <BookOpen className="w-5 h-5 text-brand-purple" />
                  <Badge className="bg-brand-purple/20 text-brand-purple border-brand-purple/30">
                    Postgraduate
                  </Badge>
                </div>
                <CardTitle className="font-display">
                  M.Tech Artificial Intelligence and Data Science, School of
                  Engineering, DSU
                </CardTitle>
                <CardDescription className="font-body">
                  2-Year Program
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground font-body">
                  Advanced research with focus on:
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Advanced Analytics", "AI Research", "Data Products"].map(
                    (spec, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {spec}
                      </Badge>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-display">
                  Why Choose AI & Data Science?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm font-body">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Tech Company Partnerships</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Cutting-Edge Curriculum</span>
                </div>
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>AI-Driven Innovation</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="about" className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="headline-3 font-display mb-2">
                About the Department
              </h2>
              <p className="text-foreground/90 font-body mb-4">
                The Department of Artificial Intelligence & Data Science at DSU
                focuses on the theory, systems, and applications of intelligent
                data-driven technologies across engineering and applied domains.
              </p>
            </div>
            <h3 className="headline-4 font-display">Overview</h3>
            <p className="text-foreground leading-relaxed font-body">
              Artificial Intelligence and Data Science at School of Engineering,
              DSU is a discipline that concerns scientific methodologies,
              processes, and techniques drawn from statistics, cognitive
              science, and computing. The B.Tech program equips students with
              skills to extract knowledge from structured and unstructured data
              through machine learning, big data analytics, and data science
              specializations. The M.Tech Artificial Intelligence and Data
              Science program provides advanced research pathways in generative
              AI, large-scale data systems, and data engineering architectures.
              Together, these programs transform students into leaders who
              deliver impactful AI and data science solutions across business,
              healthcare, finance, and emerging sectors.
            </p>
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-display">
                  Academic Strengths
                </CardTitle>
                <CardDescription className="font-body">
                  Core competencies powering our curriculum
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
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                  alt="AI & DS Labs"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Fast Facts</CardTitle>
                <CardDescription className="font-body">
                  What sets AI & DS apart at School of Engineering, DSU
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <div className="flex items-center justify-between">
                  <span>Program Type</span>
                  <span className="font-medium">B.Tech</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Duration</span>
                  <span className="font-medium">4 Years</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Industry Focus</span>
                  <span className="font-medium">Tech & Analytics</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="facilities">
        <LabsFacilitiesCarousel />
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="headline-3 font-display mb-8">
            Department Leadership
          </h2>
          <div className="max-w-4xl mb-12 p-6 rounded-2xl bg-card/40 border border-brand-blue/20">
            <h3 className="headline-4 font-display mb-3">
              Message from the Chairperson
            </h3>
            <p className="text-foreground/90 font-body leading-relaxed">
              The Department of AI & Data Science is committed to building
              strong analytical foundations, ethical AI practices, and applied
              problem-solving skills. Our programs emphasize rigor, relevance,
              and readiness for both industry and research pathways.
            </p>
          </div>
          <div className="grid auto-rows-max gap-3 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {chairperson && (
              <div>
                <div className="group relative overflow-hidden rounded-lg border border-border/40 bg-card/40 backdrop-blur-sm hover:shadow-lg hover:shadow-brand-blue/10 transition-all h-full">
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
                    <div className="text-white text-xs opacity-80 line-clamp-1">
                      Chairperson
                    </div>
                    <div className="text-white font-semibold text-xs font-display line-clamp-2">
                      {chairperson.name}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="mt-6">
            <Link to="/academics/engineering/ai-ds/faculty">
              <Button
                variant="outline"
                className="border-brand-blue/40 hover:bg-brand-blue/10"
              >
                Explore full faculty list
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="headline-3 mb-4 font-display">Career Pathways</h2>
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
      </section>

      <section id="contact" className="px-6 py-16 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="headline-3 mb-8 font-display">Get in Touch</h2>
          <Card className="max-w-2xl overflow-hidden border border-border/50 bg-card/50">
            <div className="relative h-40">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                alt="Contact AIIDS"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="font-display">Department Contact</CardTitle>
              <CardDescription className="font-body">
                Chairperson, AI & Data Science
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2 text-sm font-body">
              <div className="flex items-center justify-between">
                <span>Email</span>
                <a
                  className="font-medium hover:underline"
                  href="mailto:chairman-aiids@dsu.edu.in"
                >
                  chairman-aiids@dsu.edu.in
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span>Phone</span>
                <span className="font-medium">080-49092935</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="curriculum">
        <CurriculumLibraryWrapper />
      </section>

      <EligibilityAndFees />

      <DepartmentNoticeBoard department="AIDS" />

      <AccreditationDocuments />

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
              Excellence at School of Engineering, DSU
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
                    Immersive innovation labs powered by industry leaders
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
                    Cutting-edge research initiatives and innovation labs
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Placements */}
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
              className="group rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 flex items-center justify-center">
                  <Brain className="h-12 w-12 text-brand-blue/70 group-hover:text-brand-blue transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-blue transition-colors">
                    Admissions
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p className="text-sm text-foreground/80 font-body">
                    Join School of Engineering, DSU and shape your future
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
            <h3 className="headline-3 mb-3 font-display">
              Join School of Engineering, DSU
            </h3>
            <p className="text-foreground mb-6 font-body">
              Transform data into actionable intelligence and launch your career
              in AI and Data Science.
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
  const aiDsPrograms =
    engineeringSchool?.categories
      .flatMap((cat) => cat.programs)
      .filter((p) => {
        const name = p.name.toLowerCase();
        const isBTechAIDS =
          name.includes("b.tech") &&
          name.includes("artificial intelligence") &&
          name.includes("data science");
        const isMTechAIDS =
          name === "m.tech artificial intelligence and data science" ||
          name === "m.tech - artificial intelligence and data science";
        return isBTechAIDS || isMTechAIDS;
      }) || [];

  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);

  return (
    <section className="px-6 py-8 bg-gradient-to-r from-brand-blue/5 via-brand-blue/5 to-brand-orange/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="headline-2 font-display mb-3">Eligibility & Fees</h2>
          <p className="text-foreground/80 font-body max-w-3xl">
            AI & Data Science programs at School of Engineering, DSU offer both
            undergraduate and postgraduate pathways. B.Tech follows merit-based
            admission through entrance exams (CET, JEE Mains, Comed-K). Explore
            eligibility requirements for each program below.
          </p>
        </div>

        <div className="space-y-4">
          {aiDsPrograms.map((program, idx) => {
            const isBTech = program.name.toLowerCase().includes("b.tech");
            const iconColor = isBTech ? "text-brand-blue" : "text-brand-purple";
            return (
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
                            <span className="text-sm font-medium text-foreground">
                              {fee.label}
                            </span>
                            <span
                              className={`text-base font-semibold ${isBTech ? "text-blue-600" : "text-purple-600"}`}
                            >
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
    {
      title: "Machine Learning Lab",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Data Analytics Studio",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f70a504f9?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Big Data Processing Center",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "AI Research Lab",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Deep Learning Studio",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Data Visualization Lab",
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
    <section className="px-6 py-16 bg-gradient-to-r from-brand-blue/5 to-brand-blue/5">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-3 mb-4">
          <p className="text-foreground/80 font-body">
            State-of-the-art computing and analytics labs support hands-on
            learning, capstone projects, and applied research in AI and data
            science.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="headline-3 mb-2 font-display">Labs & Facilities</h2>
            <p className="text-sm text-foreground/80 font-body">
              Explore our infrastructure ecosystem
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

function AccreditationDocuments() {
  const documents = [
    {
      title: "Board of Studies (BOS)",
      abbr: "BOS",
      url: "https://www.dsu.edu.in/images/Engineering/AIIDS-dept/accreditation/BOS.pdf",
    },
    {
      title: "Program Educational Objectives",
      abbr: "PEO",
      url: "https://www.dsu.edu.in/images/Engineering/AIIDS-dept/accreditation/PEO.pdf",
    },
    {
      title: "Program Outcomes",
      abbr: "PO",
      url: "https://www.dsu.edu.in/images/Engineering/AIIDS-dept/accreditation/PO.pdf",
    },
    {
      title: "Program Specific Outcomes",
      abbr: "PSO",
      url: "https://www.dsu.edu.in/images/Engineering/AIIDS-dept/accreditation/PSO.pdf",
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

function NoticeBoard() {
  const notices: NoticeItem[] = [
    {
      id: "notice-1",
      title: "AI Summit 2025: Industry Leaders' Perspectives",
      category: "Event",
      date: "Feb 15, 2025",
      description:
        "Annual AI & Data Science summit featuring keynotes from Google, Microsoft, and IBM on latest trends in ML and data engineering.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/AIIDS-dept/notices/AI-Summit-2025.pdf",
    },
    {
      id: "notice-2",
      title: "Semester IV Specialization Track Selection",
      category: "Announcement",
      date: "Jan 30, 2025",
      description:
        "Students can now register for specialization tracks: NLP, Computer Vision, Reinforcement Learning, and Business Analytics.",
      link: "https://www.dsu.edu.in/images/Engineering/AIIDS-dept/notices/Specialization-Tracks-2025.pdf",
    },
    {
      id: "notice-3",
      title: "Industry Workshop: Practical Deep Learning",
      category: "Event",
      date: "Jan 25, 2025",
      description:
        "Hands-on workshop by TensorFlow engineers covering neural networks, computer vision, and production ML systems.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/AIIDS-dept/notices/Deep-Learning-Workshop.pdf",
    },
    {
      id: "notice-4",
      title: "Faculty Research Publications 2024",
      category: "News",
      date: "Jan 20, 2025",
      description:
        "Department faculty have published research in IEEE Transactions on Machine Learning and ACM Computing Reviews.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f70a504f9?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/AIIDS-dept/notices/Research-Publications-2024.pdf",
    },
    {
      id: "notice-5",
      title: "Data Science Capstone Project Showcase",
      category: "Event",
      date: "Feb 8, 2025",
      description:
        "Final year students showcase their capstone projects tackling real-world business problems using advanced analytics.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f70a504f9?w=600&h=300&fit=crop",
    },
    {
      id: "notice-6",
      title: "Placements 2024-25 Results",
      category: "News",
      date: "Jan 15, 2025",
      description:
        "Strong placement season with leading companies including Google, Flipkart, Amazon, and emerging AI startups.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/AIIDS-dept/notices/Placements-2024-25.pdf",
    },
    {
      id: "notice-7",
      title: "Kaggle Competition - DSU AI Challenge",
      category: "Announcement",
      date: "Jan 18, 2025",
      description:
        "International data science competition for AI & DS students with prizes and internship opportunities with tech companies.",
      link: "https://www.dsu.edu.in/images/Engineering/AIIDS-dept/notices/Kaggle-Challenge-2025.pdf",
    },
    {
      id: "notice-8",
      title: "Industry Mentorship Program Launch",
      category: "Event",
      date: "Feb 3, 2025",
      description:
        "One-on-one mentorship from data scientists and ML engineers at FAANG companies for career guidance and networking.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop",
    },
    {
      id: "notice-9",
      title: "NAAC Accreditation - A+ Grade",
      category: "News",
      date: "Jan 10, 2025",
      description:
        "The AI & DS program has achieved A+ grade in NAAC assessment, recognizing excellence in curriculum and industry alignment.",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/AIIDS-dept/notices/NAAC-Accreditation-2025.pdf",
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
          className: "bg-brand-blue/15 text-brand-blue",
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
                : "border-brand-blue bg-brand-blue/10"
            }`}
          >
            <h3
              className={`headline-4 font-display ${color === "blue" ? "text-brand-blue" : "text-brand-blue"}`}
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
              : "border-brand-blue bg-brand-blue/10"
          }`}
        >
          <h3
            className={`headline-4 font-display ${color === "blue" ? "text-brand-blue" : "text-brand-blue"}`}
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
                    ? "bg-brand-blue w-6"
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
              announcements from the AI & DS department.
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
              "blue",
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

function CurriculumLibraryWrapper() {
  const programs = getCurriculumByDepartment("Engineering", "AIDS");
  return <CurriculumLibrary programs={programs} themeColor="blue" />;
}

function OldCurriculumLibrary() {
  const [openProgram, setOpenProgram] = useState<string | null>(null);

  const programs: any[] = [
    {
      id: "btech",
      label: "B.Tech CSE (AI & Data Science)",
      description:
        "4-year undergraduate pathway with specialized tracks in ML and data analytics",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&h=400&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary:
            "Foundations in Python, Statistics, and Data Structures with industry-aligned projects",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/AIIDS-dept/curriculum/BTech-AIIDS-Curriculum-2025-26.pdf",
        },
        {
          year: "2026-27",
          summary:
            "Machine Learning, Data Analytics, and Computer Vision specialization tracks",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/AIIDS-dept/curriculum/BTech-AIIDS-Curriculum-2026-27.pdf",
        },
        {
          year: "2027-28",
          summary:
            "Advanced Deep Learning, NLP, and Big Data Technologies with live projects",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/AIIDS-dept/curriculum/BTech-AIIDS-Curriculum-2027-28.pdf",
        },
        {
          year: "2028-29",
          summary:
            "Capstone project, industry internships, and research publications",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/AIIDS-dept/curriculum/BTech-AIIDS-Curriculum-2028-29.pdf",
        },
      ],
    },
    {
      id: "mtech",
      label: "M.Tech Artificial Intelligence and Data Science",
      description:
        "2-year postgraduate specialization in advanced AI and data science research",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f70a504f9?q=80&w=600&h=400&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary:
            "Foundations in advanced ML, statistical modeling, and data engineering architectures",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/AIIDS-dept/curriculum/MTech-AIIDS-Curriculum-2025-26.pdf",
        },
        {
          year: "2026-27",
          summary:
            "Deep learning, NLP, computer vision, and large-scale data processing systems",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/AIIDS-dept/curriculum/MTech-AIIDS-Curriculum-2026-27.pdf",
        },
        {
          year: "2027-28",
          summary:
            "Generative AI, reinforcement learning, advanced analytics, and research thesis",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/AIIDS-dept/curriculum/MTech-AIIDS-Curriculum-2027-28.pdf",
        },
        {
          year: "2028-29",
          summary:
            "Research dissertation, industry collaborations, and innovation lab immersion",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/AIIDS-dept/curriculum/MTech-AIIDS-Curriculum-2028-29.pdf",
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
              Explore comprehensive curriculum for B.Tech and M.Tech AI & Data
              Science programs. Access detailed course structures, learning
              outcomes, and downloadable syllabi.
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
            const borderClass = isBtech
              ? "border-brand-blue/30"
              : "border-brand-purple/30";
            const badgeClass = isBtech
              ? "bg-brand-blue/15 text-brand-blue border-brand-blue/20"
              : "bg-brand-purple/15 text-brand-purple border-brand-purple/20";
            const hoverShadow = isBtech
              ? "hover:shadow-brand-blue/10"
              : "hover:shadow-brand-purple/10";

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
                    <h3 className="headline-3 font-display text-foreground mb-2">
                      {program.label}
                    </h3>
                    <p className="text-sm text-foreground/80 font-body">
                      {program.description}
                    </p>
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
                            batchIdx === 0
                              ? isBtech
                                ? "ring-2 ring-brand-blue/20"
                                : "ring-2 ring-brand-purple/20"
                              : ""
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2">
                              <Badge
                                className={`rounded-full border text-xs ${isBtech ? "bg-brand-blue/20 text-brand-blue border-brand-blue/30" : "bg-brand-purple/20 text-brand-purple border-brand-purple/30"}`}
                              >
                                <CalendarDays className="h-3 w-3 mr-1" />
                                {batch.year}
                              </Badge>
                              {batchIdx === 0 && (
                                <Badge
                                  className={`rounded-full border text-xs ${isBtech ? "bg-brand-blue/20 text-brand-blue border-brand-blue/30" : "bg-brand-purple/20 text-brand-purple border-brand-purple/30"}`}
                                >
                                  <Zap className="h-3 w-3 mr-1" />
                                  Current
                                </Badge>
                              )}
                            </div>
                          </div>
                          <p className="text-xs text-foreground/80 font-body mb-3 leading-relaxed">
                            {batch.summary}
                          </p>
                          {batch.documentUrl && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className={`w-full justify-center gap-1 rounded text-xs font-semibold ${isBtech ? "bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20" : "bg-brand-purple/10 text-brand-purple hover:bg-brand-purple/20"}`}
                              asChild
                            >
                              <a
                                href={batch.documentUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center gap-1"
                              >
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
