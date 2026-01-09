import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  GraduationCap,
  BookOpen,
  Award,
  Sparkles,
  Microscope,
  Beaker,
  FlaskConical,
  Volume2,
  VolumeX,
  CalendarDays,
  Zap,
  Atom,
} from "lucide-react";
import { useAutoMuteOnScroll } from "@/hooks/useAutoMuteOnScroll";

export default function MSc() {
  const specializations = [
    { icon: Atom, label: "M.Sc. Biochemistry" },
    { icon: Beaker, label: "M.Sc. Biotechnology" },
    { icon: Microscope, label: "M.Sc. Microbiology" },
    { icon: FlaskConical, label: "M.Sc. Molecular Biology and Genetics" },
  ];

  const highlights = [
    "Research-intensive postgraduate curriculum",
    "Advanced laboratory techniques and instrumentation",
    "Thesis-based learning with independent research projects",
    "Industry collaboration and internship opportunities",
    "Seminars and journal club presentations",
    "Publication opportunities in peer-reviewed journals",
  ];

  const careers = [
    "Research Scientist → Senior Research Scientist → Research Director",
    "Pharmaceutical R&D → Drug Development Manager",
    "Biotech Researcher → Biotech Innovation Manager",
    "Academic Career → Assistant Professor → Research Professor",
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
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=1080&fit=crop"
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
              objectPosition: "center center",
              filter: "brightness(1.1) contrast(1.15) saturate(1.2)",
            }}
          />

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none"></div>

          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-orange/5 rounded-full filter blur-3xl opacity-60 animate-float pointer-events-none"></div>
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-brand-magenta/5 rounded-full filter blur-3xl opacity-60 animate-float pointer-events-none"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full border border-brand-orange/20 mb-4">
                <Sparkles className="w-4 h-4 text-brand-orange" />
                <span className="text-sm font-medium text-brand-orange font-display">Master of Science Specializations</span>
              </div>
              <p className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-1 sm:mb-4 uppercase tracking-widest font-display">
                M.Sc Specializations
              </p>
              <h1 className="text-xs sm:text-base md:text-base text-white/80 mb-2 sm:mb-6 leading-tight font-display">
                Advanced Research and Professional Excellence
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-background relative max-w-7xl mx-auto px-3 w-full py-6 sm:py-8">
          <div className="hero-title-outside max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full border border-brand-orange/20 mb-4">
              <Sparkles className="w-4 h-4 text-brand-orange" />
              <span className="text-sm font-medium text-brand-orange font-display">Master of Science Specializations</span>
            </div>
            <p className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-1 sm:mb-4 uppercase tracking-widest font-display">
              M.Sc Specializations
            </p>
            <h1 className="text-xs sm:text-base md:text-base text-foreground/80 mb-2 sm:mb-6 leading-tight font-display">
              Advanced Research and Professional Excellence
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
                className="sm:size-lg bg-white hover:bg-white/90 text-brand-orange hover:text-brand-orange/90 px-4 sm:px-8 py-2 sm:py-6 text-xs sm:text-base font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
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

      {/* Specialization Options */}
      <section className="px-3 py-8 bg-gradient-to-r from-brand-orange/5 via-brand-magenta/5 to-brand-blue/5 border-y border-border/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="headline-2 font-display mb-2">Specialization Options</h2>
            <p className="text-foreground/80 font-body">Choose your area of advanced study and research</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {specializations.map((spec, idx) => (
              <Card key={idx} className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <spec.icon className="w-5 h-5 text-brand-orange" />
                    <Badge className="bg-brand-orange/20 text-brand-orange border-brand-orange/30">Postgraduate</Badge>
                  </div>
                  <CardTitle className="font-display text-base">{spec.label}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-foreground/80 font-body">Advanced specialization with research-intensive coursework, thesis work, and industry collaboration opportunities.</p>
                </CardContent>
              </Card>
            ))}
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
                The Master of Science program at the School of Basic and Applied Sciences offers specialized pathways in four distinct disciplines: Biochemistry, Biotechnology, Microbiology, and Molecular Biology and Genetics. These postgraduate programs are designed for students seeking to deepen their knowledge and conduct advanced research in specialized areas of life sciences.
              </p>
              <p>
                Each specialization combines rigorous coursework with hands-on research experience, allowing students to engage in original investigations under the guidance of experienced faculty members. The curriculum emphasizes critical analysis, experimental design, and the development of independent research capabilities essential for academic and industrial careers.
              </p>
              <p>
                Students have access to state-of-the-art research facilities, collaborate with leading scientists, and have opportunities to present their work at national and international conferences. The program prepares graduates for diverse careers in pharmaceutical research, biotechnology, academic institutions, and research organizations.
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
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop" alt="Research Lab" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Program Details</CardTitle>
                <CardDescription className="font-body">Key specifications</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3 text-sm font-body">
                <div className="flex items-center justify-between border-b border-border/20 pb-3">
                  <span>Duration</span>
                  <span className="font-medium">2 Years</span>
                </div>
                <div className="flex items-center justify-between border-b border-border/20 pb-3">
                  <span>Semesters</span>
                  <span className="font-medium">4</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Degree</span>
                  <span className="font-medium">Master of Science</span>
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
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" alt="Contact MSc" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Program Contact</CardTitle>
                <CardDescription className="font-body">School of Basic & Applied Sciences</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <div className="flex items-center justify-between"><span>Email</span><a className="font-medium hover:underline" href="mailto:info-sbas@dsu.edu.in">info-sbas@dsu.edu.in</a></div>
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
                    Research Initiatives
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>

            <Link
              to="/admissions"
              className="group rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-orange/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-orange/20 to-brand-orange/10 flex items-center justify-center">
                  <GraduationCap className="h-12 w-12 text-brand-orange/70 group-hover:text-brand-orange transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-orange transition-colors">
                    Admissions
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>

            <Link
              to="/placements"
              className="group rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-orange/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-orange/20 to-brand-orange/10 flex items-center justify-center">
                  <Award className="h-12 w-12 text-brand-orange/70 group-hover:text-brand-orange transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-orange transition-colors">
                    Placements
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
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
  batches: { year: string; summary: string; documentUrl: string }[];
}

function CurriculumLibrary() {
  const [openProgram, setOpenProgram] = useState<string | null>(null);

  const programs: CurriculumProgram[] = [
    {
      id: "msc-specializations",
      label: "M.Sc Specializations Curriculum",
      description: "2-year advanced postgraduate pathway with research-intensive specialization options",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Latest curriculum with advanced specializations in Biochemistry, Biotechnology, Microbiology, and Molecular Biology & Genetics with thesis and research components",
          documentUrl: "https://www.dsu.edu.in/images/BasicAppliedSciences/MSc-Specializations-Curriculum-2025-26.pdf",
        },
      ],
    },
  ];

  return (
    <section className="px-3 py-8 bg-gradient-to-r from-brand-orange/5 via-brand-magenta/5 to-brand-blue/5">
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
              Access comprehensive curriculum documentation, course structures, learning outcomes, and downloadable syllabus for the M.Sc Specializations programs.
            </p>
          </div>
          <Badge className="w-fit rounded-full bg-brand-orange/15 px-4 py-2 text-xs font-semibold text-brand-orange border border-brand-orange/20">
            2025 – 2026
          </Badge>
        </div>

        <div className="grid gap-3 lg:grid-cols-2">
          {programs.map((program, programIdx) => {
            const isOpen = openProgram === program.id;
            const borderClass = "border-brand-orange/30";
            const badgeClass = "bg-brand-orange/15 text-brand-orange border-brand-orange/20";

            return (
              <div
                key={program.id}
                className={`rounded-3xl border-2 ${borderClass} overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-brand-orange/10 hover:-translate-y-1`}
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
                      Postgraduate
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
                      {isOpen ? "Hide" : "View"} Curriculum
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </span>
                  </Button>

                  {isOpen && (
                    <div className="mt-4 space-y-3 border-t border-border/20 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                      {program.batches.map((batch) => (
                        <div
                          key={`${program.id}-${batch.year}`}
                          className="rounded-xl border border-border/40 bg-card/70 p-3 transition-all hover:border-brand-orange/40"
                        >
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2">
                              <Badge className="rounded-full border text-xs bg-brand-orange/20 text-brand-orange border-brand-orange/30">
                                <CalendarDays className="h-3 w-3 mr-1" />
                                {batch.year}
                              </Badge>
                              <Badge className="rounded-full bg-brand-orange/20 text-brand-orange border-brand-orange/30 border text-xs">
                                <Zap className="h-3 w-3 mr-1" />
                                Current
                              </Badge>
                            </div>
                          </div>
                          <p className="text-xs text-foreground/70 mb-3 font-body">{batch.summary}</p>
                          <a
                            href={batch.documentUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 rounded-lg border border-brand-orange/20 bg-brand-orange/5 px-3 py-1.5 text-xs font-semibold text-brand-orange transition-all hover:bg-brand-orange/10"
                          >
                            Download Syllabus →
                          </a>
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
