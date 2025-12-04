import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  ChevronRight,
  Download,
  GraduationCap,
  Sparkles,
  Network,
  Cpu,
  Zap,
  Radio,
  Microchip,
  Wifi,
  Mail,
} from "lucide-react";
import { eceFaculty } from "@/data/ece-faculty";

export default function ElectronicsCommunication() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const specializations = [
    { icon: Microchip, label: "VLSI Design" },
    { icon: Radio, label: "Communication" },
    { icon: Wifi, label: "5G & IoT" },
    { icon: Cpu, label: "Embedded Systems" },
    { icon: Network, label: "Signal Processing" },
    { icon: Zap, label: "Power Electronics" },
  ];

  const highlights = [
    "Advanced curriculum in signal processing, VLSI, and communication systems",
    "Industry-sponsored labs: Bosch ETAS Lab, Analog Devices Lab",
    "Hands-on experience with 5G, IoT, and embedded systems",
    "Strong faculty with Ph.D. from prestigious institutions",
    "Research-driven learning with practical projects",
    "Specializations in Embedded Systems and Mechatronics",
  ];

  const careers = [
    "Electronics Design Engineer → Senior Design Engineer → Technical Lead",
    "VLSI Design Specialist → Chip Architect",
    "Embedded Systems Developer → IoT Solutions Architect",
    "Research pathways: Masters/PhD in India & Abroad",
  ];

  const facilities = [
    { title: "VLSI Design Lab", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop" },
    { title: "Bosch ETAS Lab", image: "https://images.unsplash.com/photo-1517677129300-07b130802f46?q=80&w=1200&auto=format&fit=crop" },
    { title: "Communication Systems Lab", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop" },
    { title: "IoT & Robotics Lab", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop" },
    { title: "Microcontroller Lab", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop" },
    { title: "Analog Devices Lab", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" },
  ];

  const calendarItems = [
    {
      title: "B.Tech ECE Odd Semester Calendar",
      year: "2025-26",
      description: "Academic timeline for B.Tech ECE with assessment windows and internships",
      url: "https://www.dsu.edu.in/engineering/ece-calendar",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative">
        <div className="h-[50vh] md:h-[65vh] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=1600&auto=format&fit=crop"
            alt="Department of Electronics & Communication Engineering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/10 rounded-full border border-brand-blue/20 mb-4">
              <Sparkles className="w-4 h-4 text-brand-blue" />
              <span className="text-sm font-medium text-brand-blue font-display">Department of Electronics & Communication Engineering</span>
            </div>
            <h1 className="headline-1 text-white leading-tight font-display">Design the Electronics of Tomorrow</h1>
            <p className="subheadline text-white/90 max-w-2xl mt-3 font-body">
              Master signal processing, VLSI design, and communication systems at a leading ECE department with industry partnerships.
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
              The Department of Electronics & Communication Engineering offers a comprehensive program combining theoretical foundations with practical laboratory work. The B.Tech ECE curriculum emphasizes signal processing, VLSI design, embedded systems, and communication technologies. Students engage in hands-on projects through industry-sponsored labs including Bosch ETAS and Analog Devices, preparing them for careers in semiconductor design, IoT, 5G technologies, and telecommunications.
            </p>
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-display">Program Highlights</CardTitle>
                <CardDescription className="font-body">Building electronics leaders</CardDescription>
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
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop" alt="ECE Labs" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Fast Facts</CardTitle>
                <CardDescription className="font-body">What sets ECE at DSU apart</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <div className="flex items-center justify-between"><span>Industry Labs</span><span className="font-medium">2+ Sponsored</span></div>
                <div className="flex items-center justify-between"><span>Specializations</span><span className="font-medium">Embedded & VLSI</span></div>
                <div className="flex items-center justify-between"><span>Research Focus</span><span className="font-medium">5G & IoT</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Notice Board */}
      <section className="px-6 py-16 bg-gradient-to-r from-brand-blue/5 to-brand-orange/5">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="headline-3 mb-2 font-display">Notice Board</h2>
                <p className="text-sm text-foreground/80 font-body">Important academic calendars and announcements for ECE students</p>
              </div>
            </div>
            <div className="grid gap-4">
              {calendarItems.map((item, idx) => (
                <div key={idx} className="flex items-start justify-between p-4 rounded-xl bg-white/5 border border-border/30 hover:border-brand-blue/30 transition-colors">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground font-display">{item.title}</h3>
                    <p className="text-sm text-foreground/70 mt-1 font-body">{item.description}</p>
                    <p className="text-xs text-brand-blue mt-2">{item.year}</p>
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <Download className="w-5 h-5 text-brand-blue" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Labs & Facilities */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="headline-3 mb-6 font-display">Labs & Facilities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((lab, idx) => (
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

      {/* Faculty */}
      <section className="px-6 py-16 bg-gradient-to-r from-brand-orange/5 to-brand-blue/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="headline-3 mb-3 font-display">Faculty Members</h2>
            <p className="text-foreground/80 max-w-2xl font-body">Meet our distinguished team of educators and researchers dedicated to advancing Electronics & Communication Engineering education.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {eceFaculty.map((faculty) => (
              <Link
                key={faculty.slug}
                to={faculty.profileUrl || "#"}
                className="group block h-full"
              >
                <Card className="h-full overflow-hidden rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm hover:border-brand-blue/40 transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/10 hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-brand-blue/10 to-brand-orange/10">
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${faculty.name}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base font-display leading-tight group-hover:text-brand-blue transition-colors">{faculty.name}</CardTitle>
                    <CardDescription className="text-xs font-body text-brand-blue">{faculty.title}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-4 space-y-3">
                    <div className="flex items-center gap-2 text-xs bg-white/5 px-3 py-2 rounded-lg">
                      <Sparkles className="w-3 h-3 text-brand-blue" />
                      <span className="text-foreground/80">{faculty.qualifications}</span>
                    </div>
                    {faculty.publications !== undefined && (
                      <div className="flex items-center justify-between text-xs bg-brand-blue/5 px-3 py-2 rounded-lg">
                        <span className="text-foreground/70">Publications:</span>
                        <span className="font-semibold text-brand-blue">{faculty.publications}</span>
                      </div>
                    )}
                    <div className="flex items-center justify-center gap-2 w-full px-3 py-2 text-xs font-medium text-brand-blue group-hover:bg-brand-blue/10 rounded-lg transition-colors border border-transparent group-hover:border-brand-blue/30">
                      <Mail className="w-3 h-3" />
                      View Profile
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="px-6 py-16 bg-gradient-to-r from-brand-blue/5 to-brand-magenta/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="headline-3 mb-8 font-display">Programs Offered</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="border border-border/50 bg-card/50">
              <CardHeader>
                <div className="inline-block mb-3">
                  <Badge className="bg-brand-blue/15 text-brand-blue">Undergraduate</Badge>
                </div>
                <CardTitle className="font-display">B.Tech ECE</CardTitle>
                <CardDescription className="font-body">4-Year Degree Program</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm font-body">
                <p>Comprehensive engineering education in electronics, communication systems, and signal processing with industry immersion.</p>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3 h-3 mt-1" />
                    <span>Signal Processing & Communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3 h-3 mt-1" />
                    <span>VLSI Design & Semiconductor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3 h-3 mt-1" />
                    <span>Embedded Systems & IoT</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card/50">
              <CardHeader>
                <div className="inline-block mb-3">
                  <Badge className="bg-brand-orange/15 text-brand-orange">Postgraduate</Badge>
                </div>
                <CardTitle className="font-display">M.Tech Embedded</CardTitle>
                <CardDescription className="font-body">2-Year Advanced Program</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm font-body">
                <p>Specialized program in embedded systems with industry collaboration through Bosch ETAS Lab for RTOS design and edge computing.</p>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3 h-3 mt-1" />
                    <span>Real-Time Operating Systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3 h-3 mt-1" />
                    <span>Edge Computing & IoT</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3 h-3 mt-1" />
                    <span>Hardware Integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card/50">
              <CardHeader>
                <div className="inline-block mb-3">
                  <Badge className="bg-brand-magenta/15 text-brand-magenta">Vocational</Badge>
                </div>
                <CardTitle className="font-display">BVoc Mechatronics</CardTitle>
                <CardDescription className="font-body">Industry Partnership Program</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm font-body">
                <p>Vocational program in collaboration with NTTF (National Training and Technical Foundation) for career-ready skills.</p>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3 h-3 mt-1" />
                    <span>Practical Industrial Skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3 h-3 mt-1" />
                    <span>NTTF Certification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3 h-3 mt-1" />
                    <span>Industry-Ready Training</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
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
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop" alt="Contact ECE" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Department Contact</CardTitle>
                <CardDescription className="font-body">Chairman, Electronics & Communication Engineering</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <div className="flex items-center justify-between"><span>Email</span><a className="font-medium hover:underline" href="mailto:chairman-ece@dsu.edu.in">chairman-ece@dsu.edu.in</a></div>
                <div className="flex items-center justify-between"><span>Phone</span><span className="font-medium">+91-080-49092937</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl p-10 border border-brand-blue/20 bg-brand-blue/5">
            <h3 className="headline-3 mb-3 font-display">Join DSU ECE</h3>
            <p className="text-foreground mb-6 font-body">Explore our programs, discover cutting-edge research, and launch your career in Electronics & Communication Engineering.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://admissions.dsu.edu.in/"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="bg-brand-gradient text-foreground">Apply Now<GraduationCap className="w-4 h-4 ml-2" /></Button>
              </a>
              <a
                href="https://dsu.edu.in/virtual-tour/"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="outline" className="border-brand-blue/40 hover:bg-brand-blue/10">Virtual Tour</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
