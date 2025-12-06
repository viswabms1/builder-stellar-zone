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

      {/* Overview */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="headline-3 font-display">Overview</h2>
            <p className="text-foreground leading-relaxed font-body">
              The Department of Computer Science & Engineering offers a dynamic ecosystem for study, research, and professional growth. The B.Tech CSE program provides a solid foundation and new-age skills with an innovative curriculum and pedagogy aligned to NEP and industry partnerships. Students gain breadth across core computing and depth through elective streams, while developing leadership and personal effectiveness for holistic growth.
            </p>
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-display">Curriculum Highlights</CardTitle>
                <CardDescription className="font-body">Designed for 21st-century careers</CardDescription>
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

      <NoticeBoard />

      <LabsFacilitiesCarousel />

      {/* Leadership Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="headline-3 font-display">Department Leadership</h2>
            <Link to="/academics/engineering/computer-science/faculty">
              <Button variant="outline" className="border-brand-magenta/40 hover:bg-brand-magenta/10">
                Explore full faculty roster
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Dean */}
            <div>
              <p className="text-xs font-semibold text-brand-magenta uppercase tracking-wider mb-2">Dean of School of Engineering</p>
              <Link to="/academics/engineering/computer-science/faculty/dr-udaya-kumar-reddy-k-r">
                <div className="group relative overflow-hidden rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm hover:shadow-lg hover:shadow-brand-magenta/10 transition-all cursor-pointer">
                  <div className="relative">
                    <div className="aspect-square w-full"></div>
                    <img src="https://www.dsu.edu.in/images/Engineering/CSE-dept/faculty/Udaya.jpg" alt="Dr. Udaya Kumar Reddy K R" className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 p-3 w-full">
                    <div className="text-white text-xs opacity-80">Professor</div>
                    <div className="text-white font-semibold text-sm font-display line-clamp-2">Dr. Udaya Kumar Reddy K R</div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Chairperson */}
            <div>
              <p className="text-xs font-semibold text-brand-magenta uppercase tracking-wider mb-2">Chairperson</p>
              <Link to="/academics/engineering/computer-science/faculty/dr-girisha-g-s">
                <div className="group relative overflow-hidden rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm hover:shadow-lg hover:shadow-brand-magenta/10 transition-all cursor-pointer">
                  <div className="relative">
                    <div className="aspect-square w-full"></div>
                    <img src="https://www.dsu.edu.in/images/Engineering/CSE-dept/faculty/Girisha_GS.jpg" alt="Dr. Girisha G S" className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 p-3 w-full">
                    <div className="text-white text-xs opacity-80">Professor</div>
                    <div className="text-white font-semibold text-sm font-display line-clamp-2">Dr. Girisha G S</div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Associate Chair 1 */}
            <div>
              <p className="text-xs font-semibold text-brand-magenta uppercase tracking-wider mb-2">Associate Chair</p>
              <Link to="/academics/engineering/computer-science/faculty/dr-bipin-kumar-rai">
                <div className="group relative overflow-hidden rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm hover:shadow-lg hover:shadow-brand-magenta/10 transition-all cursor-pointer">
                  <div className="relative">
                    <div className="aspect-square w-full"></div>
                    <img src="https://www.dsu.edu.in/images/Engineering/CSE-dept/faculty/DrBipin_1.jpg" alt="Dr. Bipin Kumar Rai" className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 p-3 w-full">
                    <div className="text-white text-xs opacity-80">Professor</div>
                    <div className="text-white font-semibold text-sm font-display line-clamp-2">Dr. Bipin Kumar Rai</div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Associate Chair 2 */}
            <div>
              <p className="text-xs font-semibold text-brand-magenta uppercase tracking-wider mb-2">Associate Chair</p>
              <Link to="/academics/engineering/computer-science/faculty/dr-revathi-v">
                <div className="group relative overflow-hidden rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm hover:shadow-lg hover:shadow-brand-magenta/10 transition-all cursor-pointer">
                  <div className="relative">
                    <div className="aspect-square w-full"></div>
                    <img src="https://www.dsu.edu.in/images/Engineering/CSE-dept/faculty/Revathi_V.jpg" alt="Dr. Revathi V" className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 p-3 w-full">
                    <div className="text-white text-xs opacity-80">Associate Professor</div>
                    <div className="text-white font-semibold text-sm font-display line-clamp-2">Dr. Revathi V</div>
                  </div>
                </div>
              </Link>
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
            <p className="text-foreground mb-6 font-body">Explore programs, discover research, and launch your career in Computer Science & Engineering.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://admissions.dsu.edu.in/"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="bg-brand-gradient text-foreground">Apply Now<GraduationCap className="w-4 h-4 ml-2" /></Button>
              </a>
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
  link?: string;
}

function LabsFacilitiesCarousel() {
  const [currentLabIndex, setCurrentLabIndex] = useState(0);

  const labs: LabItem[] = [
    { title: "Programming & Systems Labs", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop" },
    { title: "AI & Data Science Lab", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop" },
    { title: "Networks & IoT Lab", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" },
    { title: "Cyber Security Lab", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop" },
    { title: "Cloud & Web Tech Studio", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" },
    { title: "Innovation & Projects Space", image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop" },
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
            <p className="text-sm text-foreground/80 font-body">State-of-the-art infrastructure for hands-on learning</p>
          </div>
          <div className="text-xs text-foreground/60 font-body">
            {currentLabIndex + 1} of {labs.length}
          </div>
        </div>

        <Card className="group relative overflow-hidden rounded-3xl border-2 border-border/40 bg-card/40 backdrop-blur-sm h-96">
          <img
            src={currentLab.image}
            alt={currentLab.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <CardTitle className="text-white font-display text-3xl">{currentLab.title}</CardTitle>
          </div>
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

function NoticeBoard() {
  const notices: NoticeItem[] = [
    {
      id: "notice-1",
      title: "HackDSU 2025: 36-hour Product Build Sprint",
      category: "Event",
      date: "Feb 12, 2025",
      description:
        "Interdisciplinary hackathon hosted by CSE with tracks in AI for Health, Sustainable Tech, and FinTech innovation.",
      link: "https://www.dsu.edu.in/images/Engineering/CSE-dept/notices/HackDSU-2025.pdf",
    },
    {
      id: "notice-2",
      title: "Semester VI Elective Registration Window",
      category: "Announcement",
      date: "Jan 29, 2025",
      description:
        "Students can choose from Advanced Cloud Platforms, Secure Coding, XR Applications, and Data Storytelling electives till Feb 05.",
    },
    {
      id: "notice-3",
      title: "Industry Lecture: Responsible GenAI Systems",
      category: "Event",
      date: "Jan 24, 2025",
      description:
        "Guest session by Dr. Leela Narayanan, Principal Scientist at Novus Labs. Venue: Innovation Theatre, 10:30 AM.",
      link: "https://www.dsu.edu.in/images/Engineering/CSE-dept/notices/Responsible-GenAI-Guest-Lecture.pdf",
    },
    {
      id: "notice-4",
      title: "Circular: Updated Internship Compliance Process",
      category: "Circular",
      date: "Jan 18, 2025",
      description:
        "Revised documentation requirements for summer internship submissions. Submit signed MoUs to internship@dsu.edu.in.",
    },
  ];

  const getCategoryStyle = (category: NoticeItem["category"]) => {
    switch (category) {
      case "Event":
        return {
          icon: CalendarDays,
          label: "Event",
          className: "bg-brand-magenta/15 text-brand-magenta",
        };
      case "Announcement":
        return {
          icon: ClipboardList,
          label: "Announcement",
          className: "bg-brand-blue/15 text-brand-blue",
        };
      case "Circular":
        return {
          icon: Landmark,
          label: "Circular",
          className: "bg-amber-500/15 text-amber-600",
        };
      default:
        return {
          icon: ClipboardList,
          label: category,
          className: "bg-brand-blue/15 text-brand-blue",
        };
    }
  };

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="headline-3 font-display">Department Notice Board</h2>
            <p className="max-w-2xl text-sm text-foreground sm:text-base">
              Track upcoming events, academic announcements, and official circulars released by the Computer Science & Engineering department.
            </p>
          </div>
          <Badge className="w-fit rounded-full bg-brand-magenta/15 px-4 py-2 text-xs font-semibold text-brand-magenta">
            Updated weekly by the CSE office
          </Badge>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {notices.map((notice) => {
            const categoryStyle = getCategoryStyle(notice.category);
            const Icon = categoryStyle.icon;
            return (
              <Card
                key={notice.id}
                className="group border border-border/40 bg-card/70 shadow-sm transition hover:-translate-y-1 hover:border-brand-magenta/40 hover:shadow-brand-magenta/10"
              >
                <CardHeader className="flex flex-row items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div
                        className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${categoryStyle.className}`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {categoryStyle.label}
                      </div>
                      <span className="text-xs text-foreground">{notice.date}</span>
                    </div>
                    <CardTitle className="text-base font-display text-foreground sm:text-lg">
                      {notice.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-foreground">
                  <p>{notice.description}</p>
                  <div className="flex items-center justify-between text-xs text-foreground">
                    <span>Ref: CSE/{new Date(notice.date).getFullYear()}/{notice.id.split("-")[1]}</span>
                    {notice.link ? (
                      <Button
                        variant="secondary"
                        size="sm"
                        className="h-8 rounded-full bg-brand-magenta/15 text-brand-magenta hover:bg-brand-magenta/20"
                        asChild
                      >
                        <a href={notice.link} target="_blank" rel="noreferrer">
                          View PDF
                          <Download className="ml-2 h-3.5 w-3.5" />
                        </a>
                      </Button>
                    ) : (
                      <span className="text-[11px] italic">Internal memo – available on request</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
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
      label: "B.Tech Curriculum",
      description: "4-year undergraduate pathway with industry-aligned specializations",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "NEP-aligned with industry electives and design thinking studio",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/CSE-dept/curriculum/BTech-CSE-Curriculum-2025-26.pdf",
        },
        {
          year: "2026-27",
          summary: "Analytics labs, full-stack projects, and internship immersion",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/CSE-dept/curriculum/BTech-CSE-Curriculum-2026-27.pdf",
        },
        {
          year: "2027-28",
          summary: "Autonomous systems track with global university partnerships",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/CSE-dept/curriculum/BTech-CSE-Curriculum-2027-28.pdf",
        },
        {
          year: "2028-29",
          summary: "XR applications, blockchain engineering, and capstone showcase",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/CSE-dept/curriculum/BTech-CSE-Curriculum-2028-29.pdf",
        },
      ],
    },
    {
      id: "mtech",
      label: "M.Tech Curriculum",
      description: "2-year postgraduate program focused on advanced research",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Distributed systems, deep learning, and secure computing research",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/CSE-dept/curriculum/MTech-CSE-Curriculum-2025-26.pdf",
        },
        {
          year: "2026-27",
          summary: "AI clinics, cloud-native automation, and innovation lab immersion",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/CSE-dept/curriculum/MTech-CSE-Curriculum-2026-27.pdf",
        },
        {
          year: "2027-28",
          summary: "Quantum-safe cryptography, edge intelligence, and research dissertations",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/CSE-dept/curriculum/MTech-CSE-Curriculum-2027-28.pdf",
        },
        {
          year: "2028-29",
          summary: "Sustainable computing, human-centric AI, and thesis publishing",
          documentUrl:
            "https://www.dsu.edu.in/images/Engineering/CSE-dept/curriculum/MTech-CSE-Curriculum-2028-29.pdf",
        },
      ],
    },
  ];

  return (
    <section className="px-6 py-16 bg-gradient-to-r from-brand-magenta/5 via-brand-blue/5 to-brand-orange/5">
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
              Explore comprehensive curriculum packs for B.Tech and M.Tech programs. Access detailed course structures, learning outcomes, and downloadable syllabi.
            </p>
          </div>
          <Badge className="w-fit rounded-full bg-brand-magenta/15 px-4 py-2 text-xs font-semibold text-brand-magenta border border-brand-magenta/20">
            2025 – 2029
          </Badge>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {programs.map((program, programIdx) => {
            const isOpen = openProgram === program.id;
            const isProgramBtech = program.id === "btech";
            const borderClass = isProgramBtech
              ? "border-brand-orange/30"
              : "border-brand-blue/30";
            const badgeClass = isProgramBtech
              ? "bg-brand-orange/15 text-brand-orange border-brand-orange/20"
              : "bg-brand-blue/15 text-brand-blue border-brand-blue/20";
            const Icon = isProgramBtech ? Code : BookOpen;

            return (
              <div
                key={program.id}
                className={`rounded-3xl border-2 ${borderClass} overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-brand-magenta/10 hover:-translate-y-1`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <Badge className={`rounded-full border ${badgeClass}`}>
                        {isProgramBtech ? "Undergraduate" : "Postgraduate"}
                      </Badge>
                    </div>
                    <h3 className="headline-3 font-display text-white mb-1">{program.label}</h3>
                    <p className="text-sm text-white/90 font-body">{program.description}</p>
                  </div>
                </div>

                <div className="p-6 bg-background/50 backdrop-blur-sm">
                  <Button
                    variant="outline"
                    className={`w-full ${isProgramBtech ? "border-brand-orange/30 hover:bg-brand-orange/10 text-brand-orange hover:text-brand-orange" : "border-brand-blue/30 hover:bg-brand-blue/10 text-brand-blue hover:text-brand-blue"}`}
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
                              <Badge className={`rounded-full border text-xs ${isProgramBtech ? "bg-brand-orange/20 text-brand-orange border-brand-orange/30" : "bg-brand-blue/20 text-brand-blue border-brand-blue/30"}`}>
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
                              className={`w-full justify-center gap-1 rounded text-xs font-semibold ${
                                isProgramBtech
                                  ? "bg-brand-orange/10 text-brand-orange hover:bg-brand-orange/20"
                                  : "bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20"
                              }`}
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
