import { Link } from "react-router-dom";
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
  Download,
  FileText,
  GraduationCap,
  BookOpen,
  ChevronDown,
  CalendarDays,
  ClipboardList,
  Cpu,
  ArrowRight,
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

      {/* Department Leadership Section */}
      <section className="px-3 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="headline-3 font-display">Department Leadership</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Chairman */}
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

            {/* Research Professor */}
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

            {/* Distinguished Professor */}
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

      {/* Faculty Grid */}
      <section className="px-3 py-8 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="headline-3 font-display">Faculty Members</h2>
            <p className="text-foreground/80 font-body text-sm mt-2">Experts in physics research and education</p>
          </div>

          {/* Associate Professors */}
          <div className="mb-10">
            <h3 className="text-lg font-display text-brand-blue mb-4">Associate Professors</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { name: "Dr. Suresh Pittala", qualification: "Ph.D." },
                { name: "Dr. Sudeep Kumara K", qualification: "Ph.D." },
                { name: "Dr. Rajesh Cheruku", qualification: "Ph.D." },
                { name: "Dr. V. Janardhanam", qualification: "Ph.D." },
                { name: "Dr. Vinay Pratap Singh", qualification: "Ph.D." },
              ].map((prof, i) => (
                <Card key={i} className="border border-border/40 bg-card/50 hover:shadow-md transition-all">
                  <CardHeader className="pb-3">
                    <div className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-1">Associate Professor</div>
                    <CardTitle className="text-sm font-display">{prof.name}</CardTitle>
                    <CardDescription className="text-xs">{prof.qualification}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Assistant Professors */}
          <div>
            <h3 className="text-lg font-display text-brand-blue mb-4">Assistant Professors</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { name: "Dr. B. Sathyamoorthy", qualification: "Ph.D." },
                { name: "Dr. Amar Srivastava", qualification: "Ph.D." },
                { name: "Dr. P R Sekhar Reddy", qualification: "Ph.D." },
                { name: "Dr. Murali Krishnan M", qualification: "Ph.D." },
                { name: "Dr. Vanitha M K", qualification: "Ph.D." },
                { name: "Dr. D. Manikandan", qualification: "Ph.D." },
                { name: "Dr. Alesh Kumar", qualification: "Ph.D." },
                { name: "Dr. Kapil Saraswat", qualification: "Ph.D." },
              ].map((prof, i) => (
                <Card key={i} className="border border-border/40 bg-card/50 hover:shadow-md transition-all">
                  <CardHeader className="pb-3">
                    <div className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-1">Assistant Professor</div>
                    <CardTitle className="text-sm font-display">{prof.name}</CardTitle>
                    <CardDescription className="text-xs">{prof.qualification}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Programs */}
      <section className="px-3 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="headline-3 font-display mb-2">Future Initiatives</h2>
            <p className="text-foreground/80 font-body">Expanding academic pathways in physics</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-5 h-5 text-brand-blue" />
                  <Badge className="bg-brand-blue/20 text-brand-blue border-brand-blue/30">Planned</Badge>
                </div>
                <CardTitle className="font-display">Integrated BS-MS Programs</CardTitle>
                <CardDescription className="font-body">Advanced degree pathways in physics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground font-body">Specialized graduate programs combining advanced coursework and research, designed to prepare students for careers in academia and industry.</p>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-brand-blue" />
                  <Badge className="bg-brand-blue/20 text-brand-blue border-brand-blue/30">Active</Badge>
                </div>
                <CardTitle className="font-display">Ph.D. Program</CardTitle>
                <CardDescription className="font-body">Doctoral research in specialized areas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground font-body">Ongoing Ph.D. programs in computational physics, complex systems, bioinformatics, nanotechnology, materials science, sensors and instrumentation.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="px-3 py-8 bg-background/50">
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
