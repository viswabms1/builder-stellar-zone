import { Link } from "react-router-dom";
import { useLanguage } from "@/providers/language-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Brain,
  Cpu,
  Users,
  Award,
  BookOpen,
  Microscope,
  Shield,
  Briefcase,
  CheckCircle,
  Rocket,
  Network,
  Code,
  Database,
  Target,
  Lightbulb
} from "lucide-react";

export default function AIFirst() {
  const { t } = useLanguage();

  const schoolOfAIBenefits = [
    {
      title: "For Students, Researchers, Faculties and Campus Startups",
      description: "Comprehensive ecosystem for learning, research, and innovation",
      icon: BookOpen
    },
    {
      title: "Roadmap to Leading Private University",
      description: "Establish AI leadership in skill development, research & entrepreneurship",
      icon: Rocket
    },
    {
      title: "Unparallel AI Research Pedigree",
      description: "World-class research capabilities and recognition",
      icon: Brain
    },
    {
      title: "Enhanced NIRF Perception Score",
      description: "Improve ranking within industry and students",
      icon: Award
    }
  ];

  const aiResearchAreas = [
    {
      title: "Natural Language Processing",
      description: "Multilingual systems, sentiment analysis, language understanding",
      icon: Target,
      color: "blue"
    },
    {
      title: "Computer Vision",
      description: "Image processing, object detection, visual recognition systems",
      icon: Lightbulb,
      color: "orange"
    },
    {
      title: "Autonomous Systems",
      description: "Robotics, autonomous vehicles, intelligent automation",
      icon: Rocket,
      color: "green"
    },
    {
      title: "AI for Sustainability",
      description: "Environmental monitoring, resource optimization",
      icon: Shield,
      color: "purple"
    },
    {
      title: "Healthcare AI",
      description: "Medical imaging, diagnostic systems, healthcare solutions",
      icon: Database,
      color: "red"
    },
    {
      title: "Enterprise AI",
      description: "Business intelligence, predictive analytics, automation",
      icon: Briefcase,
      color: "indigo"
    }
  ];

  const researchDomains = [
    { name: "Automobile", areas: ["Digital Twin", "AI-Driven Safety", "Predictive Maintenance", "Supply Chain Quality"] },
    { name: "Defense", areas: ["Warfare Systems", "Strategic Decision Making", "Combat Simulation", "Threat Monitoring"] },
    { name: "IT/ITES", areas: ["Cybersecurity", "Data Analytics", "Software Development", "Network Optimization"] },
    { name: "Industrial", areas: ["Connected Factories", "Cobots", "Assembly Line Optimization", "Quality Assurance"] },
    { name: "Finance", areas: ["Fraud Prevention", "Risk Management", "Customer Service", "Compliance"] },
    { name: "Logistics", areas: ["Automated Warehousing", "Demand Forecasting", "Supply Chain Optimization"] }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-black/95 to-blue-950/30 overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-3 z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-8">
              <Brain className="w-4 h-4 text-blue-500 mr-2" />
              <span className="text-sm font-medium text-blue-500">AI-First Initiative at DSU</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Dayananda Sagar University School of AI
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-4">
              In Technology Collaboration with NVIDIA
            </p>
            <p className="text-lg text-white/60 max-w-3xl mx-auto mb-12">
              Establishing AI Leadership in India in Skill Development, Research & Entrepreneurship
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white px-8 py-6 text-lg font-semibold rounded-2xl">
                Learn More About School of AI
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Link to="/nvidia-ai-architecture">
                <Button variant="outline" size="lg" className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-6 text-lg font-semibold rounded-2xl">
                  Explore NVIDIA Technology Stack
                </Button>
              </Link>
            </div>
          </div>

          {/* Framework Image */}
          <div className="rounded-xl overflow-hidden shadow-2xl border border-border/30 mb-12">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F7386ba632ed842219d7f49b3a25d37b7?format=webp&width=800"
              alt="NVIDIA AI University Program Framework"
              className="w-full h-auto rounded-xl"
              loading="lazy"
            />
          </div>

          {/* Vision Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Card className="text-center p-4 bg-card/30 backdrop-blur-sm border border-border/30">
              <div className="text-3xl font-bold text-blue-500 mb-2">1:10</div>
              <div className="text-sm text-foreground">SKILL GAP</div>
              <p className="text-xs text-foreground/70 mt-2">For every 10 Data Scientists needed, 1 available</p>
            </Card>
            <Card className="text-center p-4 bg-card/30 backdrop-blur-sm border border-border/30">
              <div className="text-3xl font-bold text-purple-500 mb-2">8 of 10</div>
              <div className="text-sm text-foreground">INNOVATION GAP</div>
              <p className="text-xs text-foreground/70 mt-2">Unicorns in India come from IITs</p>
            </Card>
            <Card className="text-center p-4 bg-card/30 backdrop-blur-sm border border-border/30">
              <div className="text-3xl font-bold text-pink-500 mb-2">Majority</div>
              <div className="text-sm text-foreground">RESEARCH GAP</div>
              <p className="text-xs text-foreground/70 mt-2">AI research funding goes to IITs</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Overview */}
      <section className="px-3 py-16 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Vision</h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Realize the vision of being "a Non-IIT IIT" by building a thriving AI ECOSYSTEM at DSU to bridge INNOVATION, SKILL & RESEARCH GAP making it a "GO-TO CENTER for AI RESEARCH, DEVELOPMENT & PROLIFERATION"
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border/50 hover:border-blue-500/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Brain className="w-6 h-6 text-blue-500" />
                  School of Artificial Intelligence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {schoolOfAIBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-sm">{benefit.title}</p>
                        <p className="text-xs text-foreground/70">{benefit.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-purple-500/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Network className="w-6 h-6 text-purple-500" />
                  Center for Applied AI and Industry Partnership
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-sm">Research Collaboration with Industries</p>
                      <p className="text-xs text-foreground/70">Partner with leading companies on real-world problems</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-sm">AI CoE as a Service</p>
                      <p className="text-xs text-foreground/70">Provide AI expertise to industry partners</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-sm">Skilling & Reskilling Partner</p>
                      <p className="text-xs text-foreground/70">Train workforce for industry needs</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-sm">Innovation Labs</p>
                      <p className="text-xs text-foreground/70">Robotics, humanoid labs, medical research CoE</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Programs & Curriculum */}
      <section className="px-3 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">NVIDIA's AI University Programs</h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Comprehensive framework spanning education, research, and industry collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "AI Infra",
                description: "Centralized AI infrastructure, GPU-backed labs, test beds for development, AI CoE as a Service",
                icon: Cpu
              },
              {
                title: "B.E AI",
                description: "Full 4-year curriculum, specialized courses, tailored AI electives for core branches",
                icon: BookOpen
              },
              {
                title: "Elective Programs",
                description: "AI, ML, DS for non-STEM branches, courses in architecture, design, media & entertainment",
                icon: Code
              },
              {
                title: "Research & Incubation",
                description: "Collaborative industry research, startup ecosystem, R&D center for industries",
                icon: Microscope
              },
              {
                title: "Skilling",
                description: "Training and certifications, industry skilling partner, upskilling programs",
                icon: Award
              }
            ].map((program, idx) => {
              const Icon = program.icon;
              return (
                <Card key={idx} className="border-border/50 hover:border-blue-500/50 transition-all bg-card/50 backdrop-blur">
                  <CardHeader>
                    <Icon className="w-8 h-8 text-blue-500 mb-3" />
                    <CardTitle className="text-lg">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/70">{program.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Research Areas */}
      <section className="px-3 py-16 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">AI Research & Innovation Focus</h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Advancing frontiers of research across multiple domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiResearchAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <Card key={idx} className="border-border/50 hover:border-blue-500/50 transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-lg bg-blue-500/10">
                        <Icon className="w-6 h-6 text-blue-500" />
                      </div>
                    </div>
                    <CardTitle className="text-lg">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/70">{area.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Engagement Areas */}
      <section className="px-3 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Possible Research Engagement Areas</h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Be the technology enabler for industries across key sectors
            </p>
          </div>

          <div className="space-y-6">
            {researchDomains.map((domain, idx) => (
              <Card key={idx} className="border-border/50 hover:border-blue-500/50 transition-all bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-xl">{domain.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {domain.areas.map((area, aIdx) => (
                      <Badge key={aIdx} variant="secondary" className="justify-center py-2">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 border-blue-500/30 bg-blue-500/5 backdrop-blur">
            <CardContent className="pt-6">
              <p className="text-center text-foreground">
                All powered by <Badge className="bg-blue-500 text-white ml-2">GenAI</Badge> <Badge className="bg-green-500 text-white ml-1">NVAITC</Badge> <Badge className="bg-green-600 text-white ml-1">NVIDIA Software Stack</Badge> <Badge className="bg-yellow-600 text-white ml-1">NVIDIA DGX B200 & Jetson Edge</Badge>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Shareable Infrastructure */}
      <section className="px-3 py-16 bg-gradient-to-r from-purple-500/5 via-black/50 to-blue-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Shareable Infrastructure for R&D</h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Supporting companies, academic researchers, and startup ecosystems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-blue-500" />
                  Companies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 mb-3">Problem Statements & Use Cases</p>
                <p className="text-xs text-foreground/70">Leverage DSU's innovation center and NVAITC resources for research needs</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-500" />
                  Academic Researchers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 mb-3">Research Topics & Initiatives</p>
                <p className="text-xs text-foreground/70">Strategic collaboration with university's research center</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-green-500" />
                  Startup Ecosystem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 mb-3">Initiatives & Incubation</p>
                <p className="text-xs text-foreground/70">For all - university inception, companies, and external startups</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border/50 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-center">Dayananda Sagar University Innovation Center</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-center">
                <p className="text-sm font-semibold">AI Infrastructure, Software and Tools</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-3 bg-card/50 rounded-lg">
                    <p className="font-bold text-blue-500">GPUs</p>
                  </div>
                  <div className="p-3 bg-card/50 rounded-lg">
                    <p className="font-bold text-blue-500">Network</p>
                  </div>
                  <div className="p-3 bg-card/50 rounded-lg">
                    <p className="font-bold text-blue-500">Models, SDKs, Frameworks, Tools</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* H-Index & NIRF Impact */}
      <section className="px-3 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Impact on H-Index & NIRF Rankings</h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Building reputation through research excellence and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-500">H-Index Improvement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-6">Global metric for evaluating scholarly output and impact</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm"><strong>Improved Faculty Access to Resources</strong> - State-of-the-art infrastructure</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm"><strong>Foster Industry Collaboration</strong> - Joint research initiatives</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm"><strong>Help Research Dissemination</strong> - Publications and citations</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-500">NIRF Ranking Enhancement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-6">National Institutional Ranking Framework methodology</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm"><strong>Better Lab Resources & Facilities</strong> - World-class infrastructure</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm"><strong>Improving Publications & Citations</strong> - Research excellence</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm"><strong>Startup Incubation (Joint IP)</strong> - Innovation ecosystem</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-3 py-16 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Shape the Future of AI in India</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Join Dayananda Sagar University's AI-First initiative and be part of India's leading center for AI research, development, and innovation
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white">
            Get Involved
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
