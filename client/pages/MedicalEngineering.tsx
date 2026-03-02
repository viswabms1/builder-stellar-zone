import { Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { medicalEngineeringFaculty } from "@/data/medical-engineering-faculty";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  CheckCircle2,
  GraduationCap,
  Microscope,
  Heart,
  Zap,
  Brain,
  TrendingUp,
  Award,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Download,
  FileText,
  CalendarDays,
  ClipboardList,
} from "lucide-react";

export default function MedicalEngineering() {
  const chairperson = useMemo(() => {
    return medicalEngineeringFaculty.find((f) => f.title.includes("Chairperson"));
  }, []);

  const specializations = [
    { icon: Heart, label: "Biomedical Devices" },
    { icon: Microscope, label: "Biomaterials" },
    { icon: Brain, label: "Medical Imaging" },
    { icon: Zap, label: "Bio-signal Processing" },
  ];

  const highlights = [
    "Comprehensive curriculum in biomedical systems, materials, and devices",
    "Hands-on experience with medical equipment and diagnostic systems",
    "Interdisciplinary approach combining engineering and healthcare",
    "Research opportunities in emerging biomedical technologies",
    "Industry collaborations with healthcare and medical device companies",
    "Internship placements in hospitals, research labs, and medical device companies",
  ];

  const careers = [
    "Biomedical Engineer → Senior Engineer → Project Lead",
    "Medical Device Designer/Specialist",
    "Clinical Engineer in Healthcare facilities",
    "Research and Development roles in pharmaceutical and medical device industries",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative">
        <div className="h-[50vh] md:h-[65vh] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop"
            alt="Department of Medical Engineering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-magenta/10 rounded-full border border-brand-magenta/20 mb-4">
              <Sparkles className="w-4 h-4 text-brand-magenta" />
              <span className="text-sm font-medium text-brand-magenta font-display">Computer Science & Medical Engineering</span>
            </div>
            <h1 className="headline-1 text-white leading-tight">Transform Healthcare with Computer Science & Engineering</h1>
            <p className="subheadline text-white/90 max-w-2xl mt-3">
              Design and develop innovative solutions that improve human health and healthcare delivery.
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
      <section className="px-3 py-8 bg-gradient-to-r from-brand-magenta/5 via-brand-magenta/5 to-brand-magenta/5 border-y border-border/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="headline-2 font-display mb-2">Programs Offered</h2>
            <p className="text-foreground/80 font-body">Choose your pathway to Computer Science & Medical Engineering excellence</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {/* B.Tech Program */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-5 h-5 text-brand-magenta" />
                  <Badge className="bg-brand-magenta/20 text-brand-magenta border-brand-magenta/30">Undergraduate</Badge>
                </div>
                <CardTitle className="font-display">B.Tech Computer Science & Medical Engineering</CardTitle>
                <CardDescription className="font-body">4-Year Program</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground font-body">With specializations in:</p>
                <div className="flex flex-wrap gap-2">
                  {["Biomedical Devices", "Biomaterials", "Medical Imaging", "Bio-signal Processing"].map((spec, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">{spec}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-display">Why Choose CS & Medical Engineering?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm font-body">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-magenta flex-shrink-0" />
                  <span>Healthcare Industry Focus</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand-magenta flex-shrink-0" />
                  <span>Innovative Medical Devices</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-brand-magenta flex-shrink-0" />
                  <span>Impact on Healthcare</span>
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
              Computer Science & Medical Engineering is a specialized discipline that applies computer science, software engineering, and biomedical principles to solve healthcare challenges. The B.Tech Computer Science & Medical Engineering program at DSU combines computer science with biomedical sciences and engineering innovation to develop cutting-edge medical devices, diagnostic systems, healthcare software, and therapeutic solutions that improve patient care and outcomes.
            </p>
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-display">Curriculum Highlights</CardTitle>
                <CardDescription className="font-body">Designed for future healthcare innovators</CardDescription>
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
                <img src="https://images.unsplash.com/photo-1530497802696-a8ea1b7a1e2e?q=80&w=1200&auto=format&fit=crop" alt="Medical Engineering Lab" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Fast Facts</CardTitle>
                <CardDescription className="font-body">What makes CS & Medical Engineering at DSU special</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <div className="flex items-center justify-between"><span>Program Type</span><span className="font-medium">B.Tech</span></div>
                <div className="flex items-center justify-between"><span>Duration</span><span className="font-medium">4 Years</span></div>
                <div className="flex items-center justify-between"><span>Industry Focus</span><span className="font-medium">Healthcare & Medical Devices</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CurriculumLibrary />

      <AccreditationDocuments />

      <NoticeBoard />

      <LabsFacilitiesCarousel />

      {/* Career Paths */}
      <section className="px-3 py-8 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="headline-3 font-display mb-6">Career Pathways</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {careers.map((career, idx) => (
              <Card key={idx} className="border border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <TrendingUp className="w-5 h-5 text-brand-magenta flex-shrink-0 mt-1" />
                    <p className="text-foreground font-body">{career}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Department Leadership */}
      <section className="px-3 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="headline-3 font-display">Department Leadership</h2>
            <Link to="/academics/engineering/cs-medical-engineering/faculty">
              <Button variant="outline" className="border-brand-magenta/40 hover:bg-brand-magenta/10">
                Explore full faculty list
              </Button>
            </Link>
          </div>
          <div className="grid auto-rows-max gap-3 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {/* Chairperson - Only */}
            {chairperson && (
              <div>
                <Link to={chairperson.profileUrl || "#"} className="group block h-full">
                  <div className="relative overflow-hidden rounded-lg border border-border/40 bg-card/40 backdrop-blur-sm hover:shadow-lg hover:shadow-brand-magenta/10 transition-all cursor-pointer h-full">
                    <div className="relative">
                      <div className="aspect-[1/1.3] w-full"></div>
                      {chairperson.image && (
                        <img src={chairperson.image} alt={chairperson.name} className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 p-2 w-full">
                      <div className="text-white text-xs opacity-80 line-clamp-1">Chairperson</div>
                      <div className="text-white font-semibold text-xs font-display line-clamp-2">{chairperson.name}</div>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-3 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border border-brand-magenta/30 bg-gradient-to-br from-brand-magenta/10 to-brand-magenta/5 backdrop-blur-sm">
            <CardContent className="pt-8">
              <div className="text-center">
                <h2 className="headline-3 font-display mb-3">Ready to Shape the Future of Healthcare?</h2>
                <p className="text-foreground/80 mb-6 font-body">
                  Join DSU's Medical Engineering program and become part of the innovation revolutionizing healthcare.
                </p>
                <a href="https://admissions.dsu.edu.in/" target="_blank" rel="noreferrer">
                  <Button className="bg-brand-gradient text-foreground">
                    Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
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
      label: "B.Tech Computer Science and Medical Engineering",
      description: "4-year undergraduate program with specializations in biomedical devices, medical imaging, and healthcare technology",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&h=400&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Foundations in biomedical sciences, engineering fundamentals, and medical device basics",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/ME-dept/curriculum/BTech-ME-Curriculum-2025-26.pdf",
        },
        {
          year: "2026-27",
          summary: "Biomedical systems, medical imaging technologies, and device design principles",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/ME-dept/curriculum/BTech-ME-Curriculum-2026-27.pdf",
        },
        {
          year: "2027-28",
          summary: "Advanced biomedical applications, clinical engineering, and healthcare innovation",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/ME-dept/curriculum/BTech-ME-Curriculum-2027-28.pdf",
        },
        {
          year: "2028-29",
          summary: "Capstone healthcare projects and industry internships in medical device companies",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/ME-dept/curriculum/BTech-ME-Curriculum-2028-29.pdf",
        },
      ],
    },
  ];

  return (
    <section className="px-3 py-8 bg-gradient-to-r from-brand-magenta/5 via-brand-magenta/5 to-brand-magenta/5">
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
              Explore comprehensive curriculum for the B.Tech Computer Science & Medical Engineering program. Access detailed course structures, learning outcomes, and downloadable syllabi.
            </p>
          </div>
          <Badge className="w-fit rounded-full bg-brand-magenta/15 px-4 py-2 text-xs font-semibold text-brand-magenta border border-brand-magenta/20">
            2025 – 2029
          </Badge>
        </div>

        <div className="grid gap-3">
          {programs.map((program) => {
            const isOpen = openProgram === program.id;

            return (
              <div
                key={program.id}
                className="rounded-3xl border-2 border-brand-magenta/30 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-brand-magenta/10 hover:-translate-y-1"
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
                    <Badge className="rounded-full border bg-brand-magenta/15 text-brand-magenta border-brand-magenta/20">
                      Undergraduate
                    </Badge>
                  </div>
                  <div>
                    <h3 className="headline-3 font-display text-foreground mb-2">{program.label}</h3>
                    <p className="text-sm text-foreground/80 font-body">{program.description}</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-brand-magenta/30 hover:bg-brand-magenta/10 text-brand-magenta hover:text-brand-magenta"
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
                          <p className="text-xs text-foreground/80 font-body mb-3 leading-relaxed">{batch.summary}</p>
                          {batch.documentUrl && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full justify-center gap-1 rounded text-xs font-semibold bg-brand-magenta/10 text-brand-magenta hover:bg-brand-magenta/20"
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
      title: "Medical Engineering Symposium 2025",
      category: "Event",
      date: "Feb 25, 2025",
      description:
        "International symposium on biomedical innovation featuring industry leaders and research pioneers in medical device design.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/ME-dept/notices/Symposium-2025.pdf",
    },
    {
      id: "notice-2",
      title: "Healthcare Internship Opportunities",
      category: "Announcement",
      date: "Feb 10, 2025",
      description:
        "Apply for paid internships with leading hospitals, medical device companies, and healthcare research institutions.",
    },
    {
      id: "notice-3",
      title: "Biomedical Innovation Workshop by Medical Device Leaders",
      category: "Event",
      date: "Jan 30, 2025",
      description:
        "Hands-on workshop on the latest biomedical technologies, device design, and clinical applications in healthcare.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/ME-dept/notices/Workshop.pdf",
    },
    {
      id: "notice-4",
      title: "Faculty Research in Medical Imaging",
      category: "News",
      date: "Jan 20, 2025",
      description:
        "Department faculty research on advanced medical imaging technologies accepted at international biomedical conferences.",
      image: "https://images.unsplash.com/photo-1530497802696-a8ea1b7a1e2e?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/Engineering/ME-dept/notices/Research-2025.pdf",
    },
    {
      id: "notice-5",
      title: "Capstone Project Showcase",
      category: "Event",
      date: "Mar 10, 2025",
      description:
        "Final year students showcase innovative healthcare solutions and medical devices to industry partners and recruiters.",
    },
    {
      id: "notice-6",
      title: "Medical Device Design Competition",
      category: "Announcement",
      date: "Feb 15, 2025",
      description:
        "National competition for innovative medical device designs with prizes and industry collaboration opportunities.",
      link: "https://www.dsu.edu.in/images/Engineering/ME-dept/notices/Competition-2025.pdf",
    },
  ];

  const getCategoryStyle = () => ({
    icon: CalendarDays,
    label: "Event",
    className: "bg-brand-magenta/15 text-brand-magenta",
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
          <div className="flex items-center gap-2 px-4 py-3 rounded-xl border-l-4 border-brand-magenta bg-brand-magenta/10">
            <h3 className="headline-4 font-display text-brand-magenta">{title}</h3>
          </div>
          <p className="text-xs text-foreground/60 italic p-4 text-center">No items to display</p>
        </div>
      );
    }

    const currentItem = items[currentIndex];

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 px-4 py-3 rounded-xl border-l-4 border-brand-magenta bg-brand-magenta/10">
          <h3 className="headline-4 font-display text-brand-magenta">{title}</h3>
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
                  className="h-6 px-2 text-xs bg-brand-magenta/10 text-brand-magenta hover:bg-brand-magenta/20"
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
                    ? "bg-brand-magenta w-6"
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
              Stay updated with upcoming events, news, and important announcements from the Computer Science & Medical Engineering department.
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
            {renderCarousel("News", news, "magenta", currentNewsIndex, setCurrentNewsIndex)}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 px-4 py-3 rounded-xl border-l-4 border-brand-magenta bg-brand-magenta/10">
            <h3 className="headline-4 font-display text-brand-magenta">Announcements</h3>
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
                          className="h-6 px-2 text-xs bg-brand-magenta/10 text-brand-magenta hover:bg-brand-magenta/20"
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

function LabsFacilitiesCarousel() {
  const [currentLabIndex, setCurrentLabIndex] = useState(0);

  const labs: LabItem[] = [
    { title: "Biomedical Lab", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop" },
    { title: "Medical Imaging Lab", image: "https://images.unsplash.com/photo-1530497802696-a8ea1b7a1e2e?q=80&w=1200&auto=format&fit=crop" },
    { title: "Device Design Studio", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop" },
    { title: "Biomaterials Lab", image: "https://images.unsplash.com/photo-1530497802696-a8ea1b7a1e2e?q=80&w=1200&auto=format&fit=crop" },
    { title: "Clinical Research Center", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLabIndex((prev) => (prev + 1) % labs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [labs.length]);

  const currentLab = labs[currentLabIndex];

  return (
    <section className="px-3 py-8 bg-gradient-to-r from-brand-magenta/5 to-brand-magenta/5">
      <div className="max-w-7xl mx-auto space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="headline-3 mb-2 font-display">Labs & Facilities</h2>
            <p className="text-sm text-foreground/80 font-body">State-of-the-art infrastructure for Computer Science & Medical Engineering learning</p>
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
