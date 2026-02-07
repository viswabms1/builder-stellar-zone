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
import { useScrollTrigger } from "@/hooks/useScrollTrigger";
import {
  ArrowRight,
  Brain,
  Cpu,
  Leaf,
  Heart,
  Dna,
  Telescope,
  Zap,
  Users,
  Award,
  TrendingUp,
  BookOpen,
  Target,
  Building,
  Globe,
  Star,
  Calendar,
  DollarSign,
  FileText,
  ChevronRight,
  Shield,
  Briefcase,
  ClipboardList,
  Megaphone,
  Lightbulb,
  CheckCircle,
} from "lucide-react";

export default function Research() {
  const { elementRef: centersRef, isVisible: centersVisible } =
    useScrollTrigger();
  const { elementRef: metricsRef, isVisible: metricsVisible } =
    useScrollTrigger();
  const { elementRef: pillarsRef, isVisible: pillarsVisible } =
    useScrollTrigger();
  const { elementRef: spotlightsRef, isVisible: spotlightsVisible } =
    useScrollTrigger();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ===== HERO SECTION: AI-FIRST RESEARCH IDENTITY ===== */}
      <section className="relative py-10 lg:py-28 bg-gradient-to-br from-brand-blue/5 via-brand-magenta/5 to-background dark:from-slate-900 dark:via-brand-magenta/10 dark:to-black overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue/20 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute top-1/3 right-0 w-80 h-80 bg-brand-magenta/15 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-0 left-1/3 w-72 h-72 bg-brand-orange/10 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>

          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="absolute top-10 right-20 w-40 h-40 border-2 border-brand-blue/20 rounded-3xl transform rotate-45 animate-pulse"></div>
          <div
            className="absolute bottom-20 left-10 w-32 h-32 border-2 border-brand-magenta/20 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3 text-center">
          <div className="inline-flex items-center px-3 py-3 bg-gradient-to-r from-brand-blue/20 to-brand-magenta/20 backdrop-blur-sm rounded-full border border-brand-blue/40 mb-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <Brain className="w-5 h-5 text-brand-blue mr-2" />
            <span className="text-sm font-semibold text-brand-blue dark:text-brand-blue/90">
              AI-Driven, Industry-Integrated Research at Scale
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6">
            <span className="bg-brand-gradient bg-clip-text text-transparent inline-block px-2">
              Defining India's
            </span>
            <br />
            <span className="bg-brand-gradient bg-clip-text text-transparent inline-block px-2">
              AI Research Future
            </span>
          </h1>

          <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            DSU advances AI-enabled research across digital transformation,
            biotechnology, sustainable energy, and healthcare innovation—powered
            by NVIDIA's computing infrastructure and strategic industry
            partnerships.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href="#research-centers">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#0088FF] via-[#FFD700] to-[#FF6B00] hover:via-[#FFC500] text-foreground px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 animate-gradient bg-[length:200%_auto]"
              >
                Explore Research Centers
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <Button
              variant="outline"
              size="lg"
              className="border-brand-blue/30 hover:bg-brand-blue/10 px-8 py-6 text-lg font-semibold rounded-2xl"
            >
              Research Publications
            </Button>
          </div>

          {/* CONTEXTUAL METRICS (No Naked Numbers) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {[
              {
                number: "2000+",
                label: "Peer-Reviewed Publications",
                context: "Across top-tier journals (2018–2024)",
              },
              {
                number: "150+",
                label: "Patents Filed",
                context: "Industry-commercialized innovations",
              },
              {
                number: "75+",
                label: "H-Index Impact",
                context: "Institutional cumulative (Scopus)",
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className={`text-center p-4 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm border border-border/30 hover:border-brand-blue/30 transition-all duration-300 transform ${
                  metricsVisible
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl font-bold text-brand-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                <div className="text-xs text-foreground/70">{stat.context}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NATIONAL ALIGNMENT & AI RESEARCH SPINE ===== */}
      <section className="px-3 py-10 lg:py-16 bg-gradient-to-br from-brand-blue/5 via-brand-magenta/5 to-background dark:from-brand-magenta/5 dark:via-brand-blue/5 dark:to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6">
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Aligned with National Priorities
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Strategic research focused on national missions and AI-first
              infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: Lightbulb,
                title: "ANRF & DST Missions",
                description:
                  "Strategic alignment with Atal Innovation Mission, DST initiatives, and national research priorities",
              },
              {
                icon: Brain,
                title: "NVIDIA-Powered AI Stack",
                description:
                  "Computing infrastructure enabling cutting-edge AI/ML research at scale",
              },
              {
                icon: Briefcase,
                title: "Industry Translation",
                description:
                  "Direct commercialization pathway from research labs to market applications",
              },
            ].map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <CardTitle className="text-foreground">
                      {pillar.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== RESEARCH CENTERS: STRATEGIC PILLARS (5-6 WITH AI SPINE) ===== */}
      <section
        id="research-centers"
        ref={centersRef}
        className="px-3 py-10 lg:py-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Six Research Pillars
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Strategic clusters defining DSU's research identity
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: Cpu,
                title: "AI & Machine Learning Systems",
                tagline: "Deep Learning | Computer Vision | NLP | Robotics",
                description:
                  "Advanced AI/ML research leveraging NVIDIA's computing infrastructure for real-world applications across manufacturing, healthcare, and autonomous systems.",
                projects: "25+ Active",
                publications: "150+",
                impact:
                  "Industry partnerships: Manufacturing optimization, autonomous vehicle systems",
              },
              {
                icon: Dna,
                title: "Digital & Computational Biology",
                tagline:
                  "Biotech Engineering | Protein Design | Bioinformatics",
                description:
                  "AI-enabled biotechnology research for drug discovery, protein engineering, and genome analysis addressing healthcare and agricultural challenges.",
                projects: "20+ Active",
                publications: "120+",
                impact:
                  "Patent pipeline: 5+ active biotech patents in commercialization",
              },
              {
                icon: Leaf,
                title: "Sustainable Energy & Climate",
                tagline:
                  "Solar Systems | Energy Storage | Smart Grids | Climate AI",
                description:
                  "Renewable energy innovation and climate-resilient technologies for India's green energy transition and net-zero commitments.",
                projects: "18+ Active",
                publications: "100+",
                impact:
                  "Deployed: 3 grid-scale energy systems; 2 climate modeling partnerships",
              },
              {
                icon: Heart,
                title: "Healthcare & Medical Devices",
                tagline:
                  "AI Diagnostics | Biomedical Engineering | Telemedicine",
                description:
                  "Next-generation medical devices and AI-powered diagnostics improving healthcare access and outcomes across rural and urban India.",
                projects: "22+ Active",
                publications: "110+",
                impact:
                  "Clinical trials: 2 devices in FDA/India regulatory pathways",
              },
              {
                icon: Telescope,
                title: "Aerospace & Advanced Manufacturing",
                tagline: "Digital Twins | Space Tech | Smart Manufacturing",
                description:
                  "Digital twin technology and aerospace innovations supporting India's space program and next-gen manufacturing competitiveness.",
                projects: "12+ Active",
                publications: "80+",
                impact:
                  "ISRO collaborations: 2 satellite systems in development",
              },
              {
                icon: Brain,
                title: "Human-AI Interaction & Cognition",
                tagline: "Neuroscience | Behavioral AI | HCI | Ethics",
                description:
                  "Interdisciplinary research at the intersection of human cognition, AI, and responsible technology design for societal benefit.",
                projects: "15+ Active",
                publications: "90+",
                impact:
                  "Policy contribution: AI ethics framework adopted by 2 government bodies",
              },
            ].map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Card
                  key={index}
                  className={`bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30 transition-all duration-300 transform ${
                    centersVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-orange-500" />
                      </div>
                      <div className="flex gap-2 flex-wrap justify-end">
                        <Badge variant="secondary" className="text-xs">
                          {pillar.projects}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="text-xs border-green-500/30 text-green-500"
                        >
                          {pillar.publications}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold mb-2">
                      {pillar.title}
                    </CardTitle>
                    <p className="text-sm font-semibold text-orange-500 mb-3">
                      {pillar.tagline}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground mb-4">{pillar.description}</p>
                    <div className="border-l-2 border-orange-500 pl-4">
                      <p className="text-sm font-semibold text-foreground mb-1">
                        Real-World Impact:
                      </p>
                      <p className="text-sm text-foreground/80">
                        {pillar.impact}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== RESEARCH SPOTLIGHTS: OUTCOME NARRATIVES ===== */}
      <section
        ref={spotlightsRef}
        className="px-3 py-10 lg:py-16 bg-gradient-to-br from-red-500/5 via-orange-500/5 to-background"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Outcomes in Action
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              How DSU research solves real problems
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                problem: "Agricultural Waste Management",
                solution: "Upcycled Protein Technology",
                impact:
                  "SynTech Bio: Converting 10,000 tons agricultural waste annually into sustainable protein",
                outcome: "Patent-pending process; 2 industry partnerships",
              },
              {
                problem: "Manufacturing Inefficiency",
                solution: "AI-Powered Digital Twins",
                impact:
                  "Real-time optimization reducing production downtime by 40% in pilot factories",
                outcome: "Deployed in 3 Tier-1 automotive suppliers",
              },
              {
                problem: "Rural Healthcare Access",
                solution: "AI-Enabled Diagnostics",
                impact:
                  "Telemedicine platform screening 50,000+ patients in underserved regions",
                outcome:
                  "2 medical devices in regulatory approval; partnership with Apollo Hospitals",
              },
            ].map((spotlight, index) => (
              <Card
                key={index}
                className={`bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30 transition-all duration-300 transform ${
                  spotlightsVisible
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 rounded-full mb-4 w-fit">
                    <Target className="w-4 h-4 text-orange-500" />
                    <span className="text-xs font-semibold text-orange-500">
                      Real-World Impact
                    </span>
                  </div>
                  <CardTitle className="text-lg font-bold mb-2">
                    {spotlight.solution}
                  </CardTitle>
                  <p className="text-sm text-foreground/70">
                    Problem: {spotlight.problem}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-4">{spotlight.impact}</p>
                  <div className="pt-4 border-t border-border/30">
                    <p className="text-sm font-semibold text-orange-500 mb-1">
                      Outcome:
                    </p>
                    <p className="text-sm text-foreground">
                      {spotlight.outcome}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RESEARCH SUPPORT (COMPRESSED BY 40%) ===== */}
      <section className="px-3 py-10 lg:py-16 bg-gradient-to-br from-orange-500/5 via-red-600/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Research Velocity Enablers
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Infrastructure and support accelerating research impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: Target,
                title: "Mentorship & IP",
                description:
                  "Patent assistance and entrepreneurship support for research innovations",
              },
              {
                icon: Globe,
                title: "Global Collaboration",
                description:
                  "International partnerships amplifying research reach and impact",
              },
            ].map((support, index) => {
              const Icon = support.icon;
              return (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <CardTitle className="text-foreground">
                      {support.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground">
                      {support.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== RESEARCH HUB (SECONDARY SECTION, COLLAPSED INITIALLY) ===== */}
      <section className="px-3 py-10 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Research Portal & </span>
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                PhD Programs
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Administrative resources for scholars and researchers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              {
                icon: Calendar,
                title: "Ph.D Calendar of Events",
                href: "https://www.dsu.edu.in/research/phd-calendar-of-events",
              },
              {
                icon: ClipboardList,
                title: "Ph.D Admission - July '25",
                href: "https://www.dsu.edu.in/research/phd-admission",
              },
              {
                icon: Users,
                title: "Research Supervisor List",
                href: "https://www.dsu.edu.in/research/research-supervisor-list",
              },
              {
                icon: FileText,
                title: "Ph.D Regulations",
                href: "https://www.dsu.edu.in/research/phd-regulations",
              },
              {
                icon: FileText,
                title: "Templates & Guidelines",
                href: "https://www.dsu.edu.in/research/templates",
              },
              {
                icon: Shield,
                title: "Code of Ethics",
                href: "https://www.dsu.edu.in/research/code-of-ethics",
              },
              {
                icon: Briefcase,
                title: "Research Positions",
                href: "https://www.dsu.edu.in/research/research-positions",
              },
              {
                icon: Award,
                title: "Research Promotion Policy",
                href: "https://www.dsu.edu.in/research/research-promotion-policy",
              },
              {
                icon: Megaphone,
                title: "Calls & Opportunities",
                href: "https://www.dsu.edu.in/research/calls",
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl overflow-hidden border border-border/40 bg-card/40 backdrop-blur-sm hover:shadow-lg hover:shadow-orange-500/10 transition-all p-6"
              >
                <div className="flex items-start gap-4 group-hover:translate-x-1 transition-transform">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground group-hover:text-orange-500 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <ChevronRight className="w-4 h-4 text-orange-500/50 group-hover:text-orange-500 transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AUTHORITY CTA (RESEARCH LEADERSHIP, NOT MARKETING) ===== */}
      <section className="px-3 py-10 lg:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-500/10 via-red-600/10 to-pink-500/10 rounded-3xl p-12 border border-orange-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join India's AI Research Frontier
            </h2>
            <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
              Collaborate with DSU on transformative research advancing AI,
              healthcare, sustainability, and national missions. Industry
              partnerships and doctoral opportunities available.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.dsu.edu.in/images/phd/Syllabus/2025_dec/Application_2025.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-red-600 hover:to-orange-500 text-foreground px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300"
                >
                  Apply for Ph.D
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a
                href="https://www.dsu.edu.in/research/research-positions"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-orange-500/30 hover:bg-orange-500/10 px-8 py-6 text-lg font-semibold rounded-2xl"
                >
                  Industry Collaboration
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
