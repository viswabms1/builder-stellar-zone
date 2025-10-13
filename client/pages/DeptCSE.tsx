import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  Brain,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Cpu,
  Database,
  Download,
  FileText,
  GraduationCap,
  Network,
  Shield,
  Sparkles,
} from "lucide-react";

export default function DeptCSE() {
  const specializations = [
    { icon: Brain, label: "AI & ML" },
    { icon: Database, label: "Data Science" },
    { icon: Shield, label: "Cyber Security" },
    { icon: Bot, label: "AI & Robotics" },
    { icon: Network, label: "Networks & IoT" },
    { icon: Cpu, label: "Cloud & Web Tech" },
  ];

  const highlights = [
    "Dynamic ecosystem for study, research, and professional growth",
    "Innovative curriculum aligned with NEP and industry needs",
    "Project-based learning and internships integrated across semesters",
    "Strong foundations in programming, systems, and applications",
    "Early exposure to ML and Cyber Security in the curriculum",
    "Opportunities for minors/specializations and interdisciplinary study",
  ];

  const careers = [
    "Software Engineer → Tech Lead → Architect → Manager",
    "Research pathways: Masters/PhD in India & Abroad",
    "Opportunities in Government & Defense",
    "100% placements for eligible students; Highest CTC: ₹28 LPA",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative">
        <div className="h-[50vh] md:h-[65vh] w-full overflow-hidden">
          <img
            src="https://www.dsu.edu.in/images/Engineering/CSE-dept/abt-cse.JPG"
            alt="Department of Computer Science & Engineering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-magenta/10 rounded-full border border-brand-magenta/20 mb-4">
              <Sparkles className="w-4 h-4 text-brand-magenta" />
              <span className="text-sm font-medium text-brand-magenta font-display">Department of Computer Science & Engineering</span>
            </div>
            <h1 className="headline-1 text-white leading-tight font-display">Build the Future of Computing</h1>
            <p className="subheadline text-white/90 max-w-2xl mt-3 font-body">
              A dynamic ecosystem to become industry-ready engineers, researchers, and entrepreneurs at DSU.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {specializations.map((s, i) => (
                <span key={i} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs backdrop-blur">
                  <s.icon className="w-3.5 h-3.5" /> {s.label}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/admissions">
                <Button className="bg-brand-gradient text-white">Apply Now <GraduationCap className="w-4 h-4 ml-2" /></Button>
              </Link>
              <a href="https://www.dsu.edu.in/engineering/computer-science" target="_blank" rel="noreferrer">
                <Button variant="outline" className="border-brand-magenta/40 hover:bg-brand-magenta/10">Visit Department Page</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="headline-3 font-display">Overview</h2>
            <p className="text-muted-foreground leading-relaxed font-body">
              The Department of Computer Science & Engineering offers a dynamic ecosystem for study, research, and professional growth. The B.Tech CSE program provides a solid foundation and new-age skills with an innovative curriculum and pedagogy aligned to NEP and industry partnerships. Students gain breadth across core computing and depth through elective streams, while developing leadership and personal effectiveness for holistic growth.
            </p>
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-display">Curriculum Highlights</CardTitle>
                <CardDescription className="font-body">Designed for 21st-century careers</CardDescription>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-3 pt-0">
                {highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
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
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop" alt="CSE Labs" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Fast Facts</CardTitle>
                <CardDescription className="font-body">What sets CSE at DSU apart</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <div className="flex items-center justify-between"><span>Highest CTC</span><span className="font-medium">₹28 LPA</span></div>
                <div className="flex items-center justify-between"><span>Placements</span><span className="font-medium">100% (eligible)</span></div>
                <div className="flex items-center justify-between"><span>Industry Exposure</span><span className="font-medium">Internships & MoUs</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CurriculumLibrary />

      {/* Labs & Facilities */}
      <section className="px-6 py-16 bg-gradient-to-r from-brand-blue/5 to-brand-orange/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="headline-3 mb-6 font-display">Labs & Facilities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Programming & Systems Labs", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop" },
              { title: "AI & Data Science Lab", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop" },
              { title: "Networks & IoT Lab", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" },
              { title: "Cyber Security Lab", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop" },
              { title: "Cloud & Web Tech Studio", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" },
              { title: "Innovation & Projects Space", image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop" },
            ].map((lab, idx) => (
              <Card key={idx} className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm">
                <img src={lab.image} alt={lab.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                <div className="relative p-5 h-40 flex items-end">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                  <CardTitle className="relative text-white font-display">{lab.title}</CardTitle>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Preview */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="headline-3 font-display">Meet the Faculty</h2>
            <Link to="/academics/engineering/computer-science/faculty">
              <Button variant="outline" className="border-brand-magenta/40 hover:bg-brand-magenta/10">View all</Button>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Dr. Udaya Kumar Reddy K R", title: "Professor & Dean SoE", image: "https://www.dsu.edu.in/images/Engineering/CSE-dept/faculty/Udaya.jpg" },
              { name: "Dr. Bipin Kumar Rai", title: "Professor & Associate Chair", image: "https://www.dsu.edu.in/images/Engineering/CSE-dept/faculty/DrBipin_1.jpg" },
              { name: "Dr. Meenakshi Malhotra", title: "Associate Professor", image: "https://www.dsu.edu.in/images/Engineering/CSE-dept/faculty/Meenakshi.jpg" },
              { name: "Dr. Sridhar S K", title: "Associate Professor", image: "https://www.dsu.edu.in/images/Engineering/CSE-dept/faculty/DrSridhar.jpg" },
            ].map((f, i) => (
              <Link key={i} to={`/academics/engineering/computer-science/faculty/${f.name.toLowerCase().replace(/\./g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'')}`}>
                <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm hover:shadow-lg hover:shadow-brand-magenta/10 transition-all">
                  <div className="relative">
                    <div className="aspect-[3/4] w-full"></div>
                    <img src={f.image} alt={f.name} className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 p-4">
                    <div className="text-white text-sm opacity-80">{f.title}</div>
                    <div className="text-white font-semibold text-lg font-display">{f.name}</div>
                  </div>
                </div>
              </Link>
            ))}
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
                  <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground font-body">
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
                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop" alt="Contact CSE" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Department Contact</CardTitle>
                <CardDescription className="font-body">Chairman, Computer Science & Engineering</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <div className="flex items-center justify-between"><span>Email</span><a className="font-medium hover:underline" href="mailto:chairman-cse@dsu.edu.in">chairman-cse@dsu.edu.in</a></div>
                <div className="flex items-center justify-between"><span>Phone</span><span className="font-medium">080-49092935</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl p-10 border border-brand-magenta/20 bg-brand-magenta/5">
            <h3 className="headline-3 mb-3 font-display">Join DSU CSE</h3>
            <p className="text-muted-foreground mb-6 font-body">Explore programs, discover research, and launch your career in Computer Science & Engineering.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/admissions">
                <Button className="bg-brand-gradient text-white">Apply Now<GraduationCap className="w-4 h-4 ml-2" /></Button>
              </Link>
              <a href="https://www.dsu.edu.in/engineering/computer-science" target="_blank" rel="noreferrer">
                <Button variant="outline" className="border-brand-magenta/40 hover:bg-brand-magenta/10">Department Site</Button>
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
      id: "btech",
      label: "B.Tech Curriculum",
      description:
        "Four-year undergraduate pathway with specializations in AI, Data Science, Cyber Security, Robotics, and Networks.",
      batches: [
        {
          year: "2025-26",
          summary:
            "Updated NEP-aligned structure with industry electives and design thinking studio from Semester V.",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/CSE-dept/curriculum/BTech-CSE-Curriculum-2025-26.pdf",
        },
        {
          year: "2026-27",
          summary:
            "Revised analytics labs, full-stack engineering projects, and extended internship immersion in Semester VII.",
        },
        {
          year: "2027-28",
          summary:
            "Incorporates autonomous systems track and research dissertation option with global partner universities.",
        },
        {
          year: "2028-29",
          summary:
            "Futuristic curriculum with XR applications, blockchain engineering, and capstone studio showcase.",
        },
      ],
    },
    {
      id: "mtech",
      label: "M.Tech Curriculum",
      description:
        "Two-year postgraduate program focused on advanced computing research, domain electives, and thesis work.",
      batches: [
        {
          year: "2025-26",
          summary:
            "Core modules in distributed systems, deep learning accelerators, and secure computing research methods.",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/CSE-dept/curriculum/MTech-CSE-Curriculum-2025-26.pdf",
        },
        {
          year: "2026-27",
          summary:
            "Includes applied AI clinics, cloud-native automation, and interdisciplinary innovation lab immersion.",
        },
        {
          year: "2027-28",
          summary:
            "Adds quantum-safe cryptography, edge intelligence, and industry co-guided research dissertations.",
        },
        {
          year: "2028-29",
          summary:
            "Emphasizes sustainable computing, human-centric AI, and publication-oriented thesis pipeline.",
        },
      ],
    },
  ];

  return (
    <section className="px-6 py-16 bg-muted/15">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="headline-3 font-display">Curriculum Library</h2>
            <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
              Explore curated curriculum packs for B.Tech and M.Tech cohorts. Click “View curriculum” to reveal batch-wise outlines.
            </p>
          </div>
          <Badge className="w-fit rounded-full bg-brand-magenta/15 px-4 py-2 text-xs font-semibold text-brand-magenta">
            Academic Years 2025 – 2029
          </Badge>
        </div>
        <Card className="border border-border/50 bg-card/60 backdrop-blur-sm">
          <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-magenta/10 text-brand-magenta">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="font-display text-lg sm:text-xl">Programme Curriculum Archive</CardTitle>
                <CardDescription className="font-body text-sm">
                  Downloadable syllabi are published by the department office. For earlier batches, write to chairman-cse@dsu.edu.in.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {programs.map((program) => {
              const isOpen = openProgram === program.id;
              return (
                <div
                  key={program.id}
                  className="rounded-2xl border border-border/40 bg-background/80 p-4 shadow-sm"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-base sm:text-lg">{program.label}</h3>
                      <p className="text-sm text-muted-foreground">{program.description}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 w-full sm:mt-0 sm:w-auto"
                      onClick={() => setOpenProgram(isOpen ? null : program.id)}
                    >
                      {isOpen ? "Hide curriculum" : "View curriculum"}
                      <ChevronDown
                        className={`ml-2 h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </Button>
                  </div>
                  {isOpen ? (
                    <div className="mt-4 space-y-3">
                      {program.batches.map((batch) => (
                        <div
                          key={`${program.id}-${batch.year}`}
                          className="flex flex-col gap-3 rounded-xl border border-border/30 bg-card/70 p-3 sm:flex-row sm:items-center sm:justify-between"
                        >
                          <div className="space-y-1">
                            <Badge className="w-fit rounded-full bg-brand-magenta/15 px-3 py-1 text-xs font-semibold text-brand-magenta">
                              {batch.year}
                            </Badge>
                            <p className="text-sm text-muted-foreground">{batch.summary}</p>
                          </div>
                          {batch.documentUrl ? (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="justify-start text-brand-magenta hover:text-brand-magenta"
                              asChild
                            >
                              <a href={batch.documentUrl} target="_blank" rel="noreferrer">
                                Download PDF
                                <Download className="ml-2 h-4 w-4" />
                              </a>
                            </Button>
                          ) : (
                            <p className="text-xs text-muted-foreground">
                              Release scheduled in coordination with the curriculum committee.
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
