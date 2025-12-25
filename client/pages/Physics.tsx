import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Zap,
  Microscope,
  Beaker,
  Award,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Cpu,
  CalendarDays,
  FileText,
  ClipboardList,
  Download,
} from "lucide-react";

export default function Physics() {
  const specializations = [
    { icon: Zap, label: "Nanotechnology" },
    { icon: Beaker, label: "Materials Science" },
    { icon: Microscope, label: "Applied Physics" },
    { icon: Award, label: "Instrumentation" },
  ];

  const highlights = [
    "Modern laboratories equipped with advanced instruments and measurement tools",
    "Strong research environment with Ph.D. programs in computational physics, complex systems, and bioinformatics",
    "Expert faculty trained at finest universities in India and abroad",
    "Interdisciplinary collaborations with leading universities and industries",
    "Open electives on Nanoscience and Nanotechnology for advanced students",
    "Focus on practical applications in energy, sensors, and smart materials",
  ];

  const researchAreas = [
    "Computational Physics & Complex Systems",
    "Bioinformatics & Molecular Modeling",
    "Nanotechnology & Nanoscience",
    "Materials Science & Engineering",
    "Sensors & Instrumentation",
    "Photonics & Energy Systems",
  ];

  const careers = [
    "Research Scientist → Senior Researcher → Principal Investigator",
    "Industrial Physicist → Technology Manager → Engineering Lead",
    "Instrumentation Engineer specializing in sensors and measurement systems",
    "Opportunities in semiconductor, aerospace, healthcare, and materials industries",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative">
        <div className="h-[50vh] md:h-[65vh] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1581092795360-6b4ea08a1f5c?q=80&w=1600&auto=format&fit=crop"
            alt="Department of Physics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/10 rounded-full border border-brand-blue/20 mb-4">
              <Sparkles className="w-4 h-4 text-brand-blue" />
              <span className="text-sm font-medium text-brand-blue font-display">Department of Physics</span>
            </div>
            <h1 className="headline-1 text-white leading-tight font-display">Unlock the Fundamentals of Science</h1>
            <p className="subheadline text-white/90 max-w-2xl mt-3 font-body">
              Explore advanced physics, nanotechnology, and materials science with world-class faculty and cutting-edge research facilities at DSU.
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
                <Button className="bg-brand-gradient text-foreground">Explore Opportunities <GraduationCap className="w-4 h-4 ml-2" /></Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-3 py-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-5 items-start">
          <div className="lg:col-span-2 space-y-3">
            <h2 className="headline-3 font-display">Overview</h2>
            <p className="text-foreground leading-relaxed font-body">
              Welcome to the Department of Physics. We provide a comprehensive curriculum well-designed to prepare engineering and science students to handle challenging problems in academics and industry. The department is empowered with modern laboratories and a very good research environment catering to high-quality programs at all levels.
            </p>
            <p className="text-foreground leading-relaxed font-body">
              Currently, we offer Engineering Physics courses to first-year B.Tech students and open electives on "Nanoscience and Nanotechnology" for advanced students. Our faculty members are excellent educators and researchers trained in some of the finest universities in India and abroad, fostering an environment of innovation and discovery.
            </p>
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-display">Curriculum Highlights</CardTitle>
                <CardDescription className="font-body">Designed for future scientists and engineers</CardDescription>
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
                <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop" alt="Physics Labs" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Fast Facts</CardTitle>
                <CardDescription className="font-body">What sets Physics at DSU apart</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <div className="flex items-center justify-between"><span>Research Areas</span><span className="font-medium">6</span></div>
                <div className="flex items-center justify-between"><span>PhD Program</span><span className="font-medium">Active</span></div>
                <div className="flex items-center justify-between"><span>Faculty</span><span className="font-medium">16+</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="px-3 py-8 bg-gradient-to-r from-brand-blue/5 via-brand-blue/5 to-brand-blue/5 border-y border-border/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="headline-2 font-display mb-2">Research Areas</h2>
            <p className="text-foreground/80 font-body">Cutting-edge research advancing science and technology</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {researchAreas.map((area, i) => (
              <Card key={i} className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Beaker className="w-5 h-5 text-brand-blue flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display text-foreground font-medium">{area}</h3>
                      <p className="text-xs text-foreground/70 mt-1">Advanced research and innovation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Labs & Facilities */}
      <LabsFacilitiesCarousel />

      {/* Notice Board */}
      <NoticeBoard />

      {/* Department Leadership Section */}
      <section className="px-3 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="headline-3 font-display">Department Leadership</h2>
            <a href="https://www.dsu.edu.in/academics/physics/faculty">
              <Button variant="outline" className="border-brand-blue/40 hover:bg-brand-blue/10">
                Explore full faculty list
              </Button>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <p className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-2">Chairman & Professor</p>
              <div className="group relative overflow-hidden rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm hover:shadow-lg hover:shadow-brand-blue/10 transition-all cursor-pointer">
                <div className="relative">
                  <div className="aspect-square w-full"></div>
                  <img src="https://images.unsplash.com/photo-1507842072343-583f20270319?q=80&w=500&auto=format&fit=crop" alt="Dr. Yogesh Kalegowda" className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 p-3 w-full">
                  <div className="text-white text-xs opacity-80">Chairman & Professor</div>
                  <div className="text-white font-semibold text-sm font-display line-clamp-2">Dr. Yogesh Kalegowda</div>
                  <div className="text-white/70 text-xs mt-1">Ph.D.</div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-2">Research Professor</p>
              <div className="group relative overflow-hidden rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm hover:shadow-lg hover:shadow-brand-blue/10 transition-all cursor-pointer">
                <div className="relative">
                  <div className="aspect-square w-full"></div>
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop" alt="Dr. M V Hanumantha Rao" className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 p-3 w-full">
                  <div className="text-white text-xs opacity-80">Research Professor</div>
                  <div className="text-white font-semibold text-sm font-display line-clamp-2">Dr. M V Hanumantha Rao</div>
                  <div className="text-white/70 text-xs mt-1">Ph.D.</div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-2">Professor</p>
              <div className="group relative overflow-hidden rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm hover:shadow-lg hover:shadow-brand-blue/10 transition-all cursor-pointer">
                <div className="relative">
                  <div className="aspect-square w-full"></div>
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop" alt="Dr. K Vijaya Kumar" className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 p-3 w-full">
                  <div className="text-white text-xs opacity-80">Professor</div>
                  <div className="text-white font-semibold text-sm font-display line-clamp-2">Dr. K Vijaya Kumar</div>
                  <div className="text-white/70 text-xs mt-1">Ph.D., FIAAM, IASA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contact */}
      <section className="px-3 py-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-5 items-start">
          <div>
            <h2 className="headline-3 mb-4 font-display">Career Prospects</h2>
            <Card className="border border-border/50 bg-card/50">
              <CardContent className="p-3 grid gap-3">
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
                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop" alt="Contact Physics" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Department Contact</CardTitle>
                <CardDescription className="font-body">Chairman, Department of Physics</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <div className="flex items-center justify-between"><span>Email</span><a className="font-medium hover:underline" href="mailto:chairman-physics@dsu.edu.in">chairman-physics@dsu.edu.in</a></div>
                <div className="flex items-center justify-between"><span>Phone</span><span className="font-medium">080-49092935</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="px-3 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="headline-2 mb-3 font-display">
              <span className="text-foreground">Explore </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                More Opportunities
              </span>
            </h2>
            <p className="text-foreground/80 font-body max-w-2xl mx-auto">
              Discover research, placements, and academic pathways at DSU
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
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
                    Research labs and innovation facilities
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
                    Research & Innovation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    Cutting-edge physics research initiatives
                  </p>
                </CardContent>
              </Card>
            </Link>

            <a
              href="https://admissions.dsu.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 flex items-center justify-center">
                  <Cpu className="h-12 w-12 text-brand-blue/70 group-hover:text-brand-blue transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-blue transition-colors">
                    Admissions
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p className="text-sm text-foreground/80 font-body">
                    Join DSU Physics
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
      <section className="px-3 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl p-5 border border-brand-blue/20 bg-brand-blue/5">
            <h3 className="headline-3 mb-3 font-display">Join DSU Physics</h3>
            <p className="text-foreground mb-6 font-body">Explore cutting-edge research, advanced coursework, and launch your career in physics and related fields.</p>
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

function LabsFacilitiesCarousel() {
  const [currentLabIndex, setCurrentLabIndex] = useState(0);

  const labs = [
    { title: "Optics & Photonics Lab", image: "https://images.unsplash.com/photo-1581092795360-6b4ea08a1f5c?q=80&w=1200&auto=format&fit=crop" },
    { title: "Materials Science Laboratory", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop" },
    { title: "Computational Physics Lab", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop" },
    { title: "Nanotechnology Research Facility", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop" },
    { title: "Instrumentation & Measurement Lab", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLabIndex((prev) => (prev + 1) % labs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [labs.length]);

  const currentLab = labs[currentLabIndex];

  return (
    <section className="px-3 py-8 bg-gradient-to-r from-brand-blue/5 to-brand-orange/5">
      <div className="max-w-7xl mx-auto space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="headline-3 mb-2 font-display">Labs & Facilities</h2>
            <p className="text-sm text-foreground/80 font-body">State-of-the-art infrastructure for research and learning</p>
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
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  const notices = [
    {
      id: "notice-1",
      title: "Research Seminar: Nanotechnology Breakthroughs",
      category: "Event",
      date: "Feb 10, 2025",
      description: "Guest lecture by Prof. Dr. Rajesh Kumar on recent advances in nanomaterials and applications.",
      image: "https://images.unsplash.com/photo-1581092795360-6b4ea08a1f5c?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/academics/physics/notices/nanotechnology-seminar.pdf",
    },
    {
      id: "notice-2",
      title: "Lab Access Hours Extended for Semester",
      category: "Announcement",
      date: "Feb 5, 2025",
      description: "Physics department laboratories now open from 8 AM to 8 PM. Weekend access available for approved projects.",
      link: "https://www.dsu.edu.in/images/academics/physics/notices/lab-hours.pdf",
    },
    {
      id: "notice-3",
      title: "Faculty Publication in Nature Physics",
      category: "News",
      date: "Jan 28, 2025",
      description: "Dr. Yogesh Kalegowda's research on quantum materials published in Nature Physics journal.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f70a504f0?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/academics/physics/notices/faculty-publication.pdf",
    },
    {
      id: "notice-4",
      title: "PhD Admissions Open for 2025-26",
      category: "Announcement",
      date: "Jan 20, 2025",
      description: "Applications invited for PhD programs in Computational Physics, Materials Science, and Nanotechnology. Deadline: March 31, 2025.",
      link: "https://www.dsu.edu.in/images/academics/physics/notices/phd-admissions-2025.pdf",
    },
    {
      id: "notice-5",
      title: "Instrumentation Workshop: Modern Measurement Techniques",
      category: "Event",
      date: "Feb 15, 2025",
      description: "Hands-on workshop on advanced measurement techniques using modern lab equipment. Open to all science students.",
      image: "https://images.unsplash.com/photo-1581091870622-5f1e9b8d2f70?w=600&h=300&fit=crop",
    },
    {
      id: "notice-6",
      title: "Department News: New Microscopy Facility",
      category: "News",
      date: "Jan 15, 2025",
      description: "State-of-the-art electron microscopy lab inaugurated. Booking slots now available for research projects.",
      image: "https://images.unsplash.com/photo-1530618666019-b8f93d8432f1?w=600&h=300&fit=crop",
      link: "https://www.dsu.edu.in/images/academics/physics/notices/microscopy-facility.pdf",
    },
  ];

  const events = notices.filter((n) => n.category === "Event");
  const news = notices.filter((n) => n.category === "News");
  const announcements = notices.filter((n) => n.category === "Announcement");

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

  const renderCarousel = (title: string, items: typeof notices, color: string, currentIndex: number, setCurrentIndex: (idx: number) => void) => {
    if (items.length === 0) {
      return (
        <div className="space-y-4">
          <div className={`flex items-center gap-2 px-4 py-3 rounded-xl border-l-4 ${
            color === "blue"
              ? "border-brand-blue bg-brand-blue/10"
              : "border-brand-orange bg-brand-orange/10"
          }`}>
            <h3 className={`headline-4 font-display ${color === "blue" ? "text-brand-blue" : "text-brand-orange"}`}>{title}</h3>
          </div>
          <p className="text-xs text-foreground/60 italic p-4 text-center">No items to display</p>
        </div>
      );
    }

    const currentItem = items[currentIndex];

    return (
      <div className="space-y-4">
        <div className={`flex items-center gap-2 px-4 py-3 rounded-xl border-l-4 ${
          color === "blue"
            ? "border-brand-blue bg-brand-blue/10"
            : "border-brand-orange bg-brand-orange/10"
        }`}>
          <h3 className={`headline-4 font-display ${color === "blue" ? "text-brand-blue" : "text-brand-orange"}`}>{title}</h3>
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
                    ? `${color === "blue" ? "bg-brand-blue" : "bg-brand-orange"} w-6`
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
              Stay updated with upcoming events, news, and important announcements from the Physics department.
            </p>
          </div>
          <Badge className="w-fit rounded-full bg-brand-blue/15 px-4 py-2 text-xs font-semibold text-brand-blue border border-brand-blue/20">
            Updated weekly
          </Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            {renderCarousel("Events", events, "blue", currentEventIndex, setCurrentEventIndex)}
          </div>
          <div>
            {renderCarousel("News", news, "orange", currentNewsIndex, setCurrentNewsIndex)}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 px-4 py-3 rounded-xl border-l-4 border-brand-blue bg-brand-blue/10">
            <h3 className="headline-4 font-display text-brand-blue">Announcements</h3>
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
