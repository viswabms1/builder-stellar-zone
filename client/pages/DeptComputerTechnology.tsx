import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Code2,
  Cpu,
  Zap,
  Network,
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
  Lightbulb,
  ArrowRight,
} from "lucide-react";

export default function DeptComputerTechnology() {
  const specializations = [
    { icon: Code2, label: "Software Engineering" },
    { icon: Network, label: "Systems Integration" },
    { icon: Cpu, label: "Platform Engineering" },
    { icon: Lightbulb, label: "Entrepreneurship" },
  ];

  const highlights = [
    "Integration of business and computing skills for innovative applications",
    "Project-based learning with practical experimentation in small groups",
    "Comprehensive coverage of hardware, software, networks, and databases",
    "Focus on critical thinking, problem exploration, and problem-solving",
    "Hands-on practical work and industry-oriented projects",
    "Entrepreneurship and startup ecosystem integration",
  ];

  const careers = [
    "Software Engineer → Senior Software Engineer → Tech Lead",
    "Systems Architect → Enterprise Architect → CTO",
    "Product Manager → Senior Product Manager → Director",
    "Startup Founder → Scale-up CEO → Innovation Leader",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative">
        <div className="h-[50vh] md:h-[65vh] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop"
            alt="Department of Computer Science & Technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full border border-brand-orange/20 mb-4">
              <Sparkles className="w-4 h-4 text-brand-orange" />
              <span className="text-sm font-medium text-brand-orange font-display">Department of Computer Science & Technology</span>
            </div>
            <h1 className="headline-1 text-white leading-tight font-display">Information to Intelligence Technology</h1>
            <p className="subheadline text-white/90 max-w-2xl mt-3 font-body">
              Transform theoretical knowledge into practical innovation with integrated business and computing skills.
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
      <section className="px-3 py-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-5 items-start">
          <div className="lg:col-span-2 space-y-3">
            <h2 className="headline-3 font-display">Overview</h2>
            <p className="text-foreground leading-relaxed font-body">
              The Department of Computer Science & Technology has a unique structure designed to respond to the vibrant progress in Information to Intelligence Technology. We focus on theoretical and application development to equip students with skills and competencies to envision products and make them a reality. Our curriculum integrates computer science applications framework with entrepreneurship, blending business and computing skills to create driving forces for innovative technology applications. Students engage in experimentation and practical work in small groups, acquiring a deeper understanding of hardware, software, networks, databases, and other elements through hands-on learning.
            </p>
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-display">Curriculum Highlights</CardTitle>
                <CardDescription className="font-body">Designed for technology innovators and entrepreneurs</CardDescription>
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
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" alt="Computer Technology Labs" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Fast Facts</CardTitle>
                <CardDescription className="font-body">What sets Computer Science & Technology at DSU apart</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <div className="flex items-center justify-between"><span>Program Type</span><span className="font-medium">B.Tech</span></div>
                <div className="flex items-center justify-between"><span>Duration</span><span className="font-medium">4 Years</span></div>
                <div className="flex items-center justify-between"><span>Industry Focus</span><span className="font-medium">Enterprise & Startups</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="px-3 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="headline-3 font-display">Department Leadership</h2>
            <Link to="/academics/engineering/computer-technology/faculty">
              <Button variant="outline" className="border-brand-orange/40 hover:bg-brand-orange/10">
                Explore full faculty list
              </Button>
            </Link>
          </div>
          <p className="text-foreground/80 max-w-3xl mb-6 font-body">
            Our department is led by a team of well-qualified professionals with extensive experience and specialization across diverse subject areas, bringing substantial achievement in professional practice and research.
          </p>
        </div>
      </section>

      {/* Philosophy & Approach */}
      <section className="px-3 py-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="headline-3 font-display mb-6">Teaching Philosophy</h2>
          <div className="grid lg:grid-cols-2 gap-5">
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-display">Learning Approach</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-foreground text-sm font-body">
                  We emphasize project-based learning where students work in small groups to explore real-world problems. Our focus on critical thinking and problem exploration enables students to develop comprehensive solutions using modern technologies.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <ChevronRight className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                    <span>Experimentation with hardware and software components</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <ChevronRight className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                    <span>Practical work with networks and database systems</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <ChevronRight className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                    <span>Industry partnerships and collaborative projects</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-display">Faculty Excellence</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-foreground text-sm font-body">
                  Our department comprises well-qualified professionals with extensive experience and specialization across diverse subject areas. They bring industry expertise and research excellence to guide student learning.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <ChevronRight className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                    <span>Expert faculty with industry experience</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <ChevronRight className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                    <span>Research-driven curriculum development</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <ChevronRight className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                    <span>Mentorship and professional guidance</span>
                  </li>
                </ul>
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
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" alt="Contact Department" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Department Contact</CardTitle>
                <CardDescription className="font-body">Chairperson, Computer Science & Technology</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <p>For more information about the department, programs, and admissions:</p>
                <p className="text-brand-orange font-medium">
                  <a href="mailto:cst@dsu.edu.in">cst@dsu.edu.in</a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-3 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border border-brand-orange/20 bg-gradient-to-br from-brand-orange/10 to-transparent backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="headline-2 font-display">Ready to Begin Your Journey?</CardTitle>
              <CardDescription className="text-lg mt-2 font-body">
                Join the Department of Computer Science & Technology and transform your ideas into reality.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <a href="https://admissions.dsu.edu.in/" target="_blank" rel="noreferrer">
                <Button size="lg" className="bg-brand-gradient text-foreground">
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
