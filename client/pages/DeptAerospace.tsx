import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Wind,
  Rocket,
  Zap,
  BookOpen,
  GraduationCap,
  CheckCircle2,
  ChevronRight,
  Download,
  FileText,
  Award,
  Microscope,
  ChevronDown,
  CalendarDays,
  ClipboardList,
} from "lucide-react";

export default function DeptAerospace() {
  const specializations = [
    { icon: Rocket, label: "Aerodynamics" },
    { icon: Wind, label: "Propulsion Systems" },
    { icon: Zap, label: "Flight Control" },
    { icon: Microscope, label: "Materials Science" },
  ];

  const highlights = [
    "Comprehensive curriculum covering aerodynamics, propulsion, and flight mechanics",
    "Core concepts: Fluid mechanics, thermodynamics, materials science, structural mechanics",
    "Advanced CAE and PLM tools for aircraft and spacecraft design",
    "Project-based learning with practical applications in aircraft systems",
    "Industry partnerships with aviation and aerospace companies",
    "Opportunities for internships in aeronautical and astronautical engineering",
  ];

  const careers = [
    "Aerodynamics Engineer → Senior Aerodynamicist → Chief Engineer",
    "Propulsion Systems Engineer → Systems Lead → Project Director",
    "Structures Engineer → Design Lead → Program Manager",
    "Strong placement opportunities in aerospace, defense, and aviation sectors",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative">
        <div className="h-[50vh] md:h-[65vh] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=1600&auto=format&fit=crop"
            alt="Department of Aerospace Engineering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/10 rounded-full border border-brand-blue/20 mb-4">
              <Sparkles className="w-4 h-4 text-brand-blue" />
              <span className="text-sm font-medium text-brand-blue font-display">Department of Aerospace Engineering</span>
            </div>
            <h1 className="headline-1 text-white leading-tight font-display">Reach New Heights in Engineering</h1>
            <p className="subheadline text-white/90 max-w-2xl mt-3 font-body">
              Master the principles of aerodynamics, propulsion, and aerospace systems design at DSU.
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
              Aerospace Engineering is an upcoming field that deals with the development of aircraft and spacecraft. It consists of two major branches: Aeronautical engineering (aircraft) and Astronautical engineering (spacecraft). The discipline applies principles of physics, mathematics, and materials science for design, analysis, prototyping, manufacturing, and maintenance of aerospace systems. The B.Tech Aerospace Engineering program at DSU combines foundational knowledge with cutting-edge tools and hands-on experience.
            </p>
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-display">Curriculum Highlights</CardTitle>
                <CardDescription className="font-body">Designed for aerospace innovators</CardDescription>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-3 pt-0">
                {highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-foreground">
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
                <img src="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?q=80&w=1200&auto=format&fit=crop" alt="Aerospace Labs" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Fast Facts</CardTitle>
                <CardDescription className="font-body">What sets Aerospace at DSU apart</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <div className="flex items-center justify-between"><span>Program Type</span><span className="font-medium">B.Tech</span></div>
                <div className="flex items-center justify-between"><span>Duration</span><span className="font-medium">4 Years</span></div>
                <div className="flex items-center justify-between"><span>Industry Focus</span><span className="font-medium">Aerospace & Defense</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <NoticeBoard />

      {/* Leadership Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="headline-3 font-display">Department Leadership</h2>
            <Link to="/academics/engineering/aerospace/faculty">
              <Button variant="outline" className="border-brand-blue/40 hover:bg-brand-blue/10">
                Explore full faculty list
              </Button>
            </Link>
          </div>
          <div className="max-w-sm">
            {/* Chairperson */}
            <div>
              <p className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-2">Chairperson</p>
              <Link to="/academics/engineering/aerospace/faculty/dr-nagaraja-s-r">
                <div className="group relative overflow-hidden rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm hover:shadow-lg hover:shadow-brand-blue/10 transition-all cursor-pointer">
                  <div className="relative">
                    <div className="aspect-square w-full"></div>
                    <img src="https://images.unsplash.com/photo-1507842072343-583f20270319?q=80&w=500&auto=format&fit=crop" alt="Dr. Nagaraja S. R." className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 p-3 w-full">
                    <div className="text-white text-xs opacity-80">Chairperson</div>
                    <div className="text-white font-semibold text-sm font-display line-clamp-2">Dr. Nagaraja S. R.</div>
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
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop" alt="Contact Aerospace" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Department Contact</CardTitle>
                <CardDescription className="font-body">Chairperson, Aerospace Engineering</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <div className="flex items-center justify-between"><span>Email</span><a className="font-medium hover:underline" href="mailto:chairman-ae@dsu.edu.in">chairman-ae@dsu.edu.in</a></div>
                <div className="flex items-center justify-between"><span>Phone</span><span className="font-medium">080-49092935</span></div>
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
              Discover research, placements, admission pathways, and Centers of Excellence at DSU
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
                    Research
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    Cutting-edge aerospace research initiatives
                  </p>
                </CardContent>
              </Card>
            </Link>

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
                    Connect with top aerospace and defense companies
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link
              to="/admissions"
              className="group rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 flex items-center justify-center">
                  <ClipboardList className="h-12 w-12 text-brand-blue/70 group-hover:text-brand-blue transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-blue transition-colors">
                    Admissions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    Begin your aerospace engineering journey at DSU
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

interface Notice {
  id: string;
  title: string;
  date: string;
  link?: string;
}

function NoticeBoard() {
  const announcements: Notice[] = [
    {
      id: "1",
      title: "B.Tech Aerospace Engineering Program Launch",
      date: "2024-2025",
      link: "https://www.dsu.edu.in",
    },
    {
      id: "2",
      title: "Guest Lectures by Aerospace Industry Experts",
      date: "Upcoming",
      link: "https://www.dsu.edu.in",
    },
    {
      id: "3",
      title: "Internship Opportunities in Aerospace Companies",
      date: "Year-round",
      link: "https://www.dsu.edu.in",
    },
  ];

  return (
    <section className="px-6 py-16 bg-gradient-to-r from-brand-blue/5 via-brand-blue/5 to-brand-blue/5">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="headline-3 font-display">Notice Board</h2>
            <p className="text-sm text-foreground/60 font-body">Latest updates from the Aerospace Engineering department</p>
          </div>
          <Badge className="w-fit rounded-full bg-brand-blue/15 px-4 py-2 text-xs font-semibold text-brand-blue border border-brand-blue/20">
            <Badge className="ml-auto text-xs">{announcements.length}</Badge>
          </Badge>
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
                    <span className="text-xs font-semibold text-foreground/60">{notice.date}</span>
                    {notice.link && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 px-2 text-xs bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20"
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
              </Card>
            ))
          ) : (
            <p className="col-span-full text-center text-sm text-foreground/60 py-8">No announcements yet</p>
          )}
        </div>
      </div>
    </section>
  );
}
