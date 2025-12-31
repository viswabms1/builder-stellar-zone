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

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-black/95 to-blue-950/30 overflow-hidden pt-2 pb-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-3 z-10">
          {/* Framework Image - Top */}
          <div className="rounded-xl overflow-hidden shadow-2xl border border-border/30 mb-12">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F7386ba632ed842219d7f49b3a25d37b7?format=webp&width=800"
              alt="NVIDIA AI University Program Framework"
              className="w-full h-auto rounded-xl"
              loading="lazy"
            />
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Dayananda Sagar University School of AI
            </h1>

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

          {/* AI-First Approach Explanation */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-border/50 bg-card/30 backdrop-blur-sm border-border/30">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-bold text-white mb-6">What is the AI-First Approach?</h3>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  The AI-First approach at DSU represents a fundamental shift in how we design education, conduct research, and foster innovation. Rather than treating AI as a peripheral tool, we place artificial intelligence at the core of every academic and operational aspect of the university.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-blue-400 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      Learning
                    </h4>
                    <p className="text-sm text-foreground/70">AI-enhanced curricula and adaptive learning systems that personalize education for every student</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-purple-400 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                      Research
                    </h4>
                    <p className="text-sm text-foreground/70">Leveraging AI to accelerate breakthrough discoveries and solve complex real-world problems</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-pink-400 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                      Innovation
                    </h4>
                    <p className="text-sm text-foreground/70">Building an ecosystem where AI drives entrepreneurship and industry partnerships</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Entering a Smarter Learning World */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-3">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ff23ab891b7034cb39a115957640a25b9?format=webp&width=800"
              alt="Entering a Smarter Learning World"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Knowledge Meets Intelligence */}
      <section className="py-20 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5">
        <div className="max-w-7xl mx-auto px-3">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F442e50f3c1044522ab5e9e19c3b55712?format=webp&width=800"
                alt="Where knowledge meets intelligence"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Where Knowledge Meets Intelligence</h2>
              <p className="text-xl text-foreground/80 mb-6">
                Learning becomes limitless when powered by artificial intelligence. Our state-of-the-art learning commons provides an environment where traditional pedagogy merges with cutting-edge AI tools and resources.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Personalized Learning Pathways</p>
                    <p className="text-sm text-foreground/70">AI-driven recommendations tailored to each student's learning style</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">24/7 Intelligent Support</p>
                    <p className="text-sm text-foreground/70">AI tutoring systems available round the clock for student assistance</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Collaborative Innovation Spaces</p>
                    <p className="text-sm text-foreground/70">Modern facilities for student projects and research initiatives</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lighting the Campus with AI Innovation */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-3">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F57524a9a7c7f466aa64aef107e87d95b?format=webp&width=800"
                alt="Lighting the Campus with AI-Powered Innovation"
                className="w-full h-auto"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Campus-Wide AI Integration</h2>
                <p className="text-lg max-w-3xl">Every corner of DSU is being transformed with intelligent systems that enhance learning, research, and campus life</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Enhanced Classroom Learning */}
      <section className="py-20 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto px-3">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Education Amplified by AI</h2>
              <p className="text-xl text-foreground/80 mb-8">
                Knowledge optimized by artificial intelligence ensures every student receives an education tailored to their unique learning needs and aspirations.
              </p>
              <div className="space-y-6">
                <Card className="border-border/50 bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <Cpu className="w-5 h-5 text-blue-500" />
                      Smart Classrooms
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/70">AI-powered analytics provide real-time insights into student engagement and learning outcomes</p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <Brain className="w-5 h-5 text-purple-500" />
                      Adaptive Learning Systems
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/70">Dynamic content delivery that adjusts difficulty and pace based on individual student progress</p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <Users className="w-5 h-5 text-pink-500" />
                      Collaborative Tools
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/70">AI-enhanced platforms enable seamless student-to-student and student-to-faculty collaboration</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F876844b6a0c840948d75f635cd347049?format=webp&width=800"
                alt="Knowledge Optimized by AI Education Amplified"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advancing Research */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-3">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F3dce43f5dcf84df0a37e7e4c7e8155b6?format=webp&width=800"
                alt="Advancing Research with AI-Enabled Discovery"
                className="w-full h-auto"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">AI-Enabled Discovery at Scale</h2>
                <p className="text-lg max-w-3xl">Our research labs leverage AI and NVIDIA technology to accelerate breakthrough discoveries across multiple domains</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-3">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Research & Innovation Domains</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Driving impact across industries through collaborative AI research
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Natural Language Processing", icon: Brain, color: "blue" },
              { title: "Computer Vision", icon: Target, color: "orange" },
              { title: "Autonomous Systems", icon: Rocket, color: "green" },
              { title: "Healthcare AI", icon: Shield, color: "red" },
              { title: "Industrial Automation", icon: Cpu, color: "purple" },
              { title: "Enterprise Intelligence", icon: Briefcase, color: "indigo" }
            ].map((domain, idx) => {
              const Icon = domain.icon;
              return (
                <Card key={idx} className="border-border/50 hover:border-blue-500/50 transition-all bg-card/50 backdrop-blur">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-lg bg-blue-500/10">
                        <Icon className="w-6 h-6 text-blue-500" />
                      </div>
                    </div>
                    <CardTitle className="text-lg">{domain.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/70">Pioneering research and practical applications in {domain.title.toLowerCase()}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-20 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5">
        <div className="max-w-7xl mx-auto px-3">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Five Pillars of AI Excellence</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Building a comprehensive AI ecosystem at DSU
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "AI Infrastructure", icon: Cpu, desc: "GPU-backed labs and advanced computing resources" },
              { title: "B.E in AI", icon: BookOpen, desc: "Specialized 4-year engineering curriculum" },
              { title: "Electives", icon: Code, desc: "AI courses for all disciplines" },
              { title: "Research", icon: Microscope, desc: "Industry-backed research projects" },
              { title: "Skilling", icon: Award, desc: "Professional certifications and training" }
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <Card key={idx} className="border-border/50 hover:border-blue-500/50 transition-all bg-card/50 backdrop-blur text-center">
                  <CardHeader>
                    <Icon className="w-8 h-8 text-blue-500 mb-3 mx-auto" />
                    <CardTitle className="text-base">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-foreground/70">{pillar.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Partnerships */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-3">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Research Engagement Opportunities</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Partner with us across key industry sectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Automotive", areas: ["Digital Twin", "Safety Systems", "Predictive Maintenance"] },
              { name: "Healthcare", areas: ["Medical Imaging", "Diagnostics", "Patient Care"] },
              { name: "Finance", areas: ["Risk Management", "Fraud Detection", "Analytics"] },
              { name: "Manufacturing", areas: ["Smart Factories", "Quality Control", "Optimization"] },
              { name: "Defense", areas: ["Surveillance", "Strategy", "Operations"] },
              { name: "Logistics", areas: ["Supply Chain", "Forecasting", "Optimization"] }
            ].map((industry, idx) => (
              <Card key={idx} className="border-border/50 hover:border-blue-500/50 transition-all bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle>{industry.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {industry.areas.map((area, aIdx) => (
                      <Badge key={aIdx} variant="secondary" className="block text-center py-1">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Recognition */}
      <section className="py-20 bg-gradient-to-r from-purple-500/5 via-black/50 to-blue-500/5">
        <div className="max-w-7xl mx-auto px-3">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Building India's AI Leadership</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Establishing DSU as the premier destination for AI research, innovation, and talent development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-500">Global Recognition</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Positioning DSU among top AI research institutions in India</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Publishing groundbreaking research in premier journals</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Building partnerships with global AI leaders</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-500">Talent Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Developing highly skilled AI professionals for industry</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Creating innovation and entrepreneurship opportunities</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Building India's AI-first generation of leaders</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-3 py-20 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the AI Revolution</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Be part of India's most ambitious AI-first initiative. Partner with us, study with us, or research with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white">
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Link to="/nvidia-ai-architecture">
              <Button variant="outline" size="lg" className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                Technology Stack
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
