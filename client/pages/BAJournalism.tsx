import { useState } from "react";
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
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Download,
  GraduationCap,
  Sparkles,
  BookOpen,
  Zap,
  Award,
  Microscope,
  Mic,
  Camera,
  Globe,
  PenSquare,
  Film,
  Headphones,
} from "lucide-react";

export default function BAJournalism() {
  const specializations = [
    { icon: Mic, label: "Print Journalism" },
    { icon: Camera, label: "Photography" },
    { icon: Film, label: "Documentary Making" },
    { icon: Headphones, label: "Podcasting" },
    { icon: PenSquare, label: "Digital Media" },
    { icon: Globe, label: "Global Communication" },
  ];

  const highlights = [
    "Three-year comprehensive program with hands-on multimedia experience",
    "Training across print, television, digital media, and film production",
    "Industry partnerships with leading media organizations",
    "Two-month mandatory internship with real-world reporting",
    "State-of-the-art newsroom labs and broadcast studios",
    "Development of critical thinking and storytelling expertise",
  ];

  const careers = [
    "Reporter → Senior Journalist → Editor → News Director",
    "Documentary Filmmaker → Production House Lead",
    "Digital Content Creator → Media Manager",
    "Broadcast Producer → Editorial Head at Media Networks",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative">
        <div
          className="h-[50vh] sm:h-[65vh] md:h-[65vh] w-full overflow-hidden"
          style={{ minHeight: "200px" }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fc027ba151bfe4b128709651c407602fd?format=webp&width=800"
            alt="BA Journalism Program"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div
          className="absolute inset-0 flex items-start md:items-center md:pt-0 z-10"
          style={{ marginTop: "80px" }}
        >
          <div className="max-w-7xl mx-auto px-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-magenta/10 rounded-full border border-brand-magenta/20 mb-4">
              <Sparkles className="w-4 h-4 text-brand-magenta" />
              <span className="text-xs sm:text-sm font-medium text-white font-display">
                Bachelor of Arts in Journalism & Mass Communication
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight font-display font-bold">
              Bachelor of Arts in Journalism & Mass Communication
            </h1>
            <p className="subheadline text-white/90 max-w-2xl mt-3 font-body">
              A comprehensive three-year program designed to transform you into
              a skilled storyteller across multimedia platforms with industry
              expertise.
            </p>
            <div className="mt-6 hidden sm:flex flex-wrap gap-2">
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

      {/* Programs Offered */}
      <section className="px-3 py-8 bg-gradient-to-r from-brand-magenta/5 via-brand-blue/5 to-brand-orange/5 border-y border-border/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="headline-2 font-display mb-2">Program Overview</h2>
            <p className="text-foreground/80 font-body">
              Master the art and science of storytelling
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* BA Journalism Program */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-5 h-5 text-brand-magenta" />
                  <Badge className="bg-brand-magenta/20 text-brand-magenta border-brand-magenta/30">
                    Undergraduate
                  </Badge>
                </div>
                <CardTitle className="font-display">
                  BA Journalism & Mass Communication
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
                    "Print Journalism",
                    "Broadcast Media",
                    "Digital Storytelling",
                    "Filmmaking",
                    "Media Ethics",
                    "Public Relations",
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
                  What makes BA Journalism unique
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground font-body">
                  Industry-ready curriculum with:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Newsroom Labs",
                    "Studio Production",
                    "Field Reporting",
                    "Internships",
                    "Industry Partnerships",
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
                  Why Choose BA Journalism?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm font-body">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-magenta flex-shrink-0" />
                  <span>Comprehensive 3-Year Program</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand-magenta flex-shrink-0" />
                  <span>Hands-On Media Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-brand-magenta flex-shrink-0" />
                  <span>Global Storytelling Opportunities</span>
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
                The BA Journalism & Mass Communication program is meticulously
                designed to nurture creative storytellers and thoughtful
                communicators. Spanning three years, this comprehensive
                curriculum blends theoretical knowledge with hands-on practical
                training in multimedia journalism, preparing students to excel
                in today's dynamic media landscape.
              </p>
              <p>
                In an age of unprecedented information flow and audience
                fragmentation, skilled journalists and communicators are more
                essential than ever. This program addresses the evolving needs
                of the media industry by immersing students in contemporary
                platforms—from traditional print and broadcast to cutting-edge
                digital media—while grounding them in timeless principles of
                ethical journalism and compelling storytelling.
              </p>
              <p>
                Beyond technical proficiency in audio, video, photography, and
                writing, the program develops critical thinking, research
                skills, and the ability to engage with complex social issues.
                Students learn to work collaboratively in fast-paced editorial
                environments, adapt to emerging technologies, and maintain the
                ethical standards that define professional journalism.
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
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop"
                  alt="Journalism Labs"
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
                  <span className="font-medium">Bachelor of Arts</span>
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
                  alt="Contact Journalism"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Program Contact</CardTitle>
                <CardDescription className="font-body">
                  School of Arts, Design & Humanities
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <div className="flex items-center justify-between">
                  <span>Email</span>
                  <a
                    className="font-medium hover:underline"
                    href="mailto:cjmc@dsu.edu.in"
                  >
                    cjmc@dsu.edu.in
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span>Phone</span>
                  <span className="font-medium">+91-80-49092933</span>
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
                    Creative studios and media production labs
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
                    Opportunities to contribute to media research initiatives
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
                    Career pathways with media organizations worldwide
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
                  <Mic className="h-12 w-12 text-brand-magenta/70 group-hover:text-brand-magenta transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-magenta transition-colors">
                    Admissions
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p className="text-sm text-foreground/80 font-body">
                    Join DSU and tell stories that matter
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
              Join DSU BA Journalism
            </h3>
            <p className="text-foreground mb-6 font-body">
              Explore programs, discover opportunities, and launch your career
              in journalism and mass communication.
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
      id: "ba-journalism",
      label: "B.A. Journalism & Mass Communication Curriculum",
      description:
        "3-year comprehensive undergraduate pathway with multimedia journalism focus",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary:
            "Latest curriculum with comprehensive coverage of print, broadcast, digital media, and documentary filmmaking across all 6 semesters with industry partnerships",
          documentUrl:
            "https://www.dsu.edu.in/images/CJMC/BA-Journalism-Curriculum-2025-26.pdf",
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
              learning outcomes, and downloadable syllabus for the BA Journalism
              & Mass Communication program.
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
