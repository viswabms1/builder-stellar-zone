import { useState, useEffect, useRef } from "react";
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
  Volume2,
  VolumeX,
} from "lucide-react";
import { useAutoMuteOnScroll } from "@/hooks/useAutoMuteOnScroll";

export default function DataScience() {
  const specializations = [
    { icon: Brain, label: "Data Analysis" },
    { icon: Database, label: "Machine Learning" },
    { icon: Cpu, label: "Statistical Modeling" },
    { icon: Code, label: "Data Mining" },
    { icon: Network, label: "Big Data" },
    { icon: Zap, label: "Data Visualization" },
  ];

  const highlights = [
    "Comprehensive knowledge in data analysis and programming",
    "Hands-on skills in statistical modeling and algorithms",
    "Interdisciplinary approach blending mathematics and computer science",
    "Real-world project applications and industry collaborations",
    "Focus on data-driven decision-making",
    "Emphasis on practical applications and industry exposure",
  ];

  const careers = [
    "Data Scientist → Senior Data Scientist → Analytics Manager",
    "Machine Learning Engineer → ML Architect",
    "Data Analyst → Business Intelligence Specialist",
    "Research roles in academia and leading tech organizations",
  ];

  function HeroVideo() {
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useAutoMuteOnScroll(videoRef);

    const toggleMute = () => {
      if (videoRef.current) {
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(!isMuted);
      }
    };

    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      video.muted = isMuted;
    }, [isMuted]);

    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      const handleEnded = () => {
        const rect = containerRef.current?.getBoundingClientRect();
        const isVisible =
          rect && rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          video.currentTime = 0;
          video.play().catch(() => {});
        }
      };

      video.addEventListener("ended", handleEnded);
      return () => {
        video.removeEventListener("ended", handleEnded);
      };
    }, []);

    return (
      <>
        <div
          ref={containerRef}
          className="hero-video-container relative flex items-center justify-start"
        >
          <video
            ref={videoRef}
            src="https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2F39093d61002645a1bad496661edf3411?alt=media&token=36f5157a-4a26-4834-8c56-cea0ffb50ca3&apiKey=4aa279a8430d441dba9c55f659831878"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="metadata"
            crossOrigin="anonymous"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 85%",
              filter: "brightness(1.1) contrast(1.15) saturate(1.2)",
            }}
          />

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none"></div>

          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-magenta/5 rounded-full filter blur-3xl opacity-60 animate-float pointer-events-none"></div>
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full filter blur-3xl opacity-60 animate-float pointer-events-none"
            style={{ animationDelay: "2s" }}
          ></div>

          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(255,255,255,.03) 0px, rgba(255,255,255,.03) 1px, transparent 1px, transparent 2px)",
            }}
          ></div>

          <button
            onClick={toggleMute}
            className="absolute top-8 right-8 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white backdrop-blur-sm border border-white/20"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <VolumeX className="h-5 w-5" />
            ) : (
              <Volume2 className="h-5 w-5" />
            )}
          </button>

          <div className="hero-title-inside absolute bottom-0 left-0 right-0 z-20 flex items-end justify-start p-3 sm:p-6 max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-magenta/10 rounded-full border border-brand-magenta/20 mb-4">
                <Sparkles className="w-4 h-4 text-brand-magenta" />
                <span className="text-sm font-medium text-brand-magenta font-display">
                  Bachelor of Science in Data Science
                </span>
              </div>
              <p className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-1 sm:mb-4 uppercase tracking-widest font-display">
                Bachelor of Science in Data Science
              </p>
              <h1 className="text-xs sm:text-base md:text-base text-white/80 mb-2 sm:mb-6 leading-tight font-display">
                Industry-Ready Data Science Programs
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-background relative max-w-7xl mx-auto px-3 w-full py-6 sm:py-8">
          <div className="hero-title-outside max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-magenta/10 rounded-full border border-brand-magenta/20 mb-4">
              <Sparkles className="w-4 h-4 text-brand-magenta" />
              <span className="text-sm font-medium text-brand-magenta font-display">
                Bachelor of Science in Data Science
              </span>
            </div>
            <p className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-1 sm:mb-4 uppercase tracking-widest font-display">
              Bachelor of Science in Data Science
            </p>
            <h1 className="text-xs sm:text-base md:text-base text-foreground/80 mb-2 sm:mb-6 leading-tight font-display">
              Industry-Ready Data Science Programs
            </h1>
          </div>

          <div className="flex flex-row gap-2 sm:gap-4">
            <a
              href="https://admissions.dsu.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Button
                size="sm"
                className="sm:size-lg bg-white hover:bg-white/90 text-brand-magenta hover:text-brand-magenta/90 px-4 sm:px-8 py-2 sm:py-6 text-xs sm:text-base font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
              >
                Apply Now
                <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative" id="top">
        <HeroVideo />
      </section>

      {/* Programs Offered */}
      <section className="px-3 py-8 bg-gradient-to-r from-brand-magenta/5 via-brand-blue/5 to-brand-orange/5 border-y border-border/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="headline-2 font-display mb-2">Programs Offered</h2>
            <p className="text-foreground/80 font-body">
              Choose your pathway to excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* B.Sc. Data Science Program */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-5 h-5 text-brand-magenta" />
                  <Badge className="bg-brand-magenta/20 text-brand-magenta border-brand-magenta/30">
                    Undergraduate
                  </Badge>
                </div>
                <CardTitle className="font-display">
                  B.Sc. in Data Science
                </CardTitle>
                <CardDescription className="font-body">
                  3-Year Program
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground font-body">
                  Comprehensive curriculum covering:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Analysis",
                    "Machine Learning",
                    "Statistical Modeling",
                    "Data Mining",
                    "Big Data",
                    "Visualization",
                  ].map((spec, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Program Highlights */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-5 h-5 text-brand-blue" />
                  <Badge className="bg-brand-blue/20 text-brand-blue border-brand-blue/30">
                    Key Features
                  </Badge>
                </div>
                <CardTitle className="font-display">
                  Program Highlights
                </CardTitle>
                <CardDescription className="font-body">
                  What makes Data Science unique
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground font-body">
                  Industry-ready curriculum with:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Interdisciplinary",
                    "Practical Projects",
                    "Industry Exposure",
                    "Internships",
                    "Research",
                  ].map((feat, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {feat}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-display">
                  Why Choose Data Science?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm font-body">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-magenta flex-shrink-0" />
                  <span>Comprehensive 3-Year Program</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand-magenta flex-shrink-0" />
                  <span>Hands-on Real-World Skills</span>
                </div>
                <div className="flex items-center gap-2">
                  <Network className="w-4 h-4 text-brand-magenta flex-shrink-0" />
                  <span>High-Demand Career Opportunities</span>
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
                The B.Sc. (Data Science) program is designed to equip students
                with comprehensive knowledge and hands-on skills in data
                analysis, programming, and statistical modelling. This
                interdisciplinary course blends mathematics, computer science,
                and domain knowledge to address real-world challenges by
                deriving meaningful insights from large datasets.
              </p>
              <p>
                The curriculum is structured to provide a solid foundation in
                data science tools, algorithms, and techniques, preparing
                students for the ever-growing field of data-driven
                decision-making. With an emphasis on practical applications,
                students engage in projects, internships, and industry
                collaborations to enhance their professional competence.
              </p>
            </div>
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-display">
                  Program Highlights
                </CardTitle>
                <CardDescription className="font-body">
                  Core curriculum focus areas
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
                  src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=600&auto=format&fit=crop"
                  alt="Data Science"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Program Details</CardTitle>
                <CardDescription className="font-body">
                  Key specifications
                </CardDescription>
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
                  <span className="font-medium">Bachelor of Science</span>
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
                  alt="Contact Data Science"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Program Contact</CardTitle>
                <CardDescription className="font-body">
                  Computer Applications Department
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <div className="flex items-center justify-between">
                  <span>Email</span>
                  <a
                    className="font-medium hover:underline"
                    href="mailto:info-datascience@dsu.edu.in"
                  >
                    info-datascience@dsu.edu.in
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span>Phone</span>
                  <span className="font-medium">080-49092900</span>
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
              Discover research, placements, admission pathways, and Centers of
              Excellence at DSU
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
                    Innovation labs and industry partnerships for cutting-edge
                    learning
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
                    Opportunities to contribute to cutting-edge research
                    initiatives
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
                    Career pathways with leading companies and diverse
                    opportunities
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
                    Join DSU Data Science and shape your future
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
              Join DSU Data Science
            </h3>
            <p className="text-foreground mb-6 font-body">
              Explore programs, discover opportunities, and launch your career
              in data science.
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

function CurriculumLibrary() {
  const [openProgram, setOpenProgram] = useState<string | null>(null);

  const programs: CurriculumProgram[] = [
    {
      id: "datascience",
      label: "B.Sc. Data Science Curriculum",
      description:
        "3-year comprehensive undergraduate pathway with industry-aligned curriculum",
      image:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=600&h=400&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary:
            "Latest curriculum with industry-relevant technologies and practical project integration across all 6 semesters",
          documentUrl:
            "https://www.dsu.edu.in/images/ComputerApplications/DataScience-Curriculum-2025-26.pdf",
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
              Access comprehensive curriculum documentation, course structures,
              learning outcomes, and downloadable syllabus for the B.Sc. Data
              Science program.
            </p>
          </div>
          <Badge className="w-fit rounded-full bg-brand-magenta/15 px-4 py-2 text-xs font-semibold text-brand-magenta border border-brand-magenta/20">
            2025 – 2026
          </Badge>
        </div>

        <div className="grid gap-3 lg:grid-cols-2">
          {programs.map((program, programIdx) => {
            const isOpen = openProgram === program.id;
            const borderClass = "border-brand-magenta/30";
            const badgeClass =
              "bg-brand-magenta/15 text-brand-magenta border-brand-magenta/20";

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
                      Undergraduate
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
                    className="w-full border-brand-magenta/30 hover:bg-brand-magenta/10 text-brand-magenta hover:text-brand-magenta"
                    onClick={() => setOpenProgram(isOpen ? null : program.id)}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isOpen ? "Hide" : "View"} Curriculum
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
                          className="rounded-xl border border-border/40 bg-card/70 p-3 transition-all hover:border-brand-magenta/40"
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
                          <p className="text-xs text-foreground/80 font-body mb-3 leading-relaxed">
                            {batch.summary}
                          </p>
                          {batch.documentUrl && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full justify-center gap-1 rounded text-xs font-semibold bg-brand-magenta/10 text-brand-magenta hover:bg-brand-magenta/20"
                              asChild
                            >
                              <a
                                href={batch.documentUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center gap-1"
                              >
                                <Download className="h-3 w-3" />
                                Download Curriculum PDF
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
