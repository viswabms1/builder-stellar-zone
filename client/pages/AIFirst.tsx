import { Link } from "react-router-dom";
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
  

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-blue/5 via-brand-magenta/5 to-background dark:from-black dark:via-black/95 dark:to-blue-950/30 overflow-hidden pt-2 pb-16">
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


          {/* AI-First Approach Explanation with Video */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <video
                src="https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2Fc8e62530406a455cbb76f2d7b42b88e6?alt=media&token=5daa1455-02fd-448b-82b9-c013ed23c8be&apiKey=4aa279a8430d441dba9c55f659831878"
                controls
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="bg-white dark:bg-black/20 rounded-2xl p-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">What is the AI-First Initiative?</h3>
              <p className="text-lg md:text-xl text-foreground/80 mb-12 leading-relaxed">
                The AI-First initiative at DSU represents a fundamental shift in how we design education, conduct research, and foster innovation. Rather than treating AI as a peripheral tool, we place artificial intelligence at the core of every academic and operational aspect of the university.
              </p>
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <h4 className="text-lg md:text-xl font-semibold text-brand-blue flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
                    Learning
                  </h4>
                  <p className="text-base md:text-lg text-foreground/70">AI-enhanced curricula and adaptive learning systems that personalize education for every student</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg md:text-xl font-semibold text-brand-magenta flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-magenta"></span>
                    Research
                  </h4>
                  <p className="text-base md:text-lg text-foreground/70">Leveraging AI to accelerate breakthrough discoveries and solve complex real-world problems</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg md:text-xl font-semibold text-brand-orange flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
                    Innovation
                  </h4>
                  <p className="text-base md:text-lg text-foreground/70">Building an ecosystem where AI drives entrepreneurship and industry partnerships</p>
                </div>
              </div>
            </div>
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
      <section className="py-20 bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-blue/5">
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
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6 text-foreground">Where Knowledge Meets <span className="bg-brand-gradient bg-clip-text text-transparent">Intelligence</span></h2>
              <p className="text-xl text-foreground/80 mb-6">
                Learning becomes limitless when powered by artificial intelligence. Our state-of-the-art learning commons provides an environment where traditional pedagogy merges with cutting-edge AI tools and resources.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Personalized Learning Pathways</p>
                    <p className="text-sm text-foreground/70">AI-driven recommendations tailored to each student's learning style</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">24/7 Intelligent Support</p>
                    <p className="text-sm text-foreground/70">AI tutoring systems available round the clock for student assistance</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
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
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F57524a9a7c7f466aa64aef107e87d95b?format=webp&width=800"
              alt="Lighting the Campus with AI-Powered Innovation"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* AI-Enhanced Classroom Learning */}
      <section className="py-20 bg-gradient-to-r from-brand-magenta/5 via-brand-blue/5 to-brand-magenta/5">
        <div className="max-w-7xl mx-auto px-3">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6 text-foreground">Education Amplified by <span className="bg-brand-gradient bg-clip-text text-transparent">AI</span></h2>
              <p className="text-xl text-foreground/80 mb-8">
                Knowledge optimized by artificial intelligence ensures every student receives an education tailored to their unique learning needs and aspirations.
              </p>
              <div className="space-y-6">
                <Card className="border-border/50 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <Cpu className="w-5 h-5 text-brand-blue" />
                      Smart Classrooms
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/70">AI-powered analytics provide real-time insights into student engagement and learning outcomes</p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur hover:shadow-lg hover:shadow-brand-magenta/20 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <Brain className="w-5 h-5 text-brand-magenta" />
                      Adaptive Learning Systems
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/70">Dynamic content delivery that adjusts difficulty and pace based on individual student progress</p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur hover:shadow-lg hover:shadow-brand-orange/20 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <Users className="w-5 h-5 text-brand-orange" />
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
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F3dce43f5dcf84df0a37e7e4c7e8155b6?format=webp&width=800"
              alt="Advancing Research with AI-Enabled Discovery"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Research Focus Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-3">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-4 text-foreground">Research & Innovation <span className="bg-brand-gradient bg-clip-text text-transparent">Domains</span></h2>
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
                <Card key={idx} className="border-border/50 hover:border-brand-blue/50 transition-all bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur hover:shadow-lg hover:shadow-brand-blue/20">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-lg bg-brand-blue/15">
                        <Icon className="w-6 h-6 text-brand-blue" />
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

      {/* Industry Partnerships */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-brand-blue/10 via-brand-magenta/10 to-brand-blue/10">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-10 w-72 h-72 bg-brand-blue rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-brand-magenta rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-3 z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6 text-foreground">Research Engagement <span className="bg-brand-gradient bg-clip-text text-transparent">Opportunities</span></h2>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Transform real-world challenges into breakthrough innovations. Partner with DSU's world-class researchers and NVIDIA's cutting-edge infrastructure to solve industry problems and advance the frontiers of AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {[
              {
                name: "Automotive & Mobility",
                icon: Rocket,
                color: "from-brand-blue to-brand-blue/60",
                areas: ["Digital Twin", "Safety Systems", "Autonomous Vehicles"],
                description: "Revolutionize vehicle intelligence and safety"
              },
              {
                name: "Healthcare & Life Sciences",
                icon: Shield,
                color: "from-brand-magenta to-brand-magenta/60",
                areas: ["Medical Imaging", "Drug Discovery", "Diagnostics"],
                description: "Accelerate medical breakthroughs"
              },
              {
                name: "Financial Services",
                icon: Briefcase,
                color: "from-brand-blue to-brand-magenta",
                areas: ["Risk Management", "Fraud Detection", "Market Analytics"],
                description: "Enhance financial intelligence"
              },
              {
                name: "Manufacturing & IoT",
                icon: Cpu,
                color: "from-brand-orange to-brand-orange/60",
                areas: ["Smart Factories", "Quality Control", "Predictive Maintenance"],
                description: "Optimize production intelligence"
              },
              {
                name: "Cybersecurity & Defense",
                icon: Network,
                color: "from-brand-magenta to-brand-blue",
                areas: ["Threat Detection", "Defense Systems", "Data Protection"],
                description: "Strengthen security intelligence"
              },
              {
                name: "Supply Chain & Logistics",
                icon: Database,
                color: "from-brand-blue to-brand-magenta",
                areas: ["Forecasting", "Optimization", "Route Planning"],
                description: "Maximize operational efficiency"
              }
            ].map((industry, idx) => {
              const Icon = industry.icon;
              return (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 backdrop-blur hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                  {/* Card Content */}
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Icon */}
                    <div className={`flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${industry.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{industry.name}</h3>

                    {/* Description */}
                    <p className="text-sm text-foreground/60 mb-6">{industry.description}</p>

                    {/* Areas */}
                    <div className="flex-1 mb-6">
                      <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-3">Focus Areas</p>
                      <div className="space-y-2">
                        {industry.areas.map((area, aIdx) => (
                          <div key={aIdx} className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${industry.color}`} />
                            <span className="text-sm text-foreground/80">{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <button className={`w-full py-3 px-4 rounded-lg font-semibold text-white bg-gradient-to-r ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:shadow-lg`}>
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Partnership Value Proposition */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <Card className="border-border/50 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur hover:border-brand-blue/50 hover:shadow-lg hover:shadow-brand-blue/20 transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Target className="w-6 h-6 text-brand-blue" />
                  For Industry Partners
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Access top-tier research talent</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Leverage NVIDIA's advanced infrastructure</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Co-develop innovative solutions</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur hover:border-brand-magenta/50 hover:shadow-lg hover:shadow-brand-magenta/20 transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Lightbulb className="w-6 h-6 text-brand-magenta" />
                  For Researchers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-magenta flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Work on real-world problems</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-magenta flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Publish groundbreaking research</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-magenta flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Build industry connections</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur hover:border-brand-orange/50 hover:shadow-lg hover:shadow-brand-orange/20 transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Code className="w-6 h-6 text-brand-orange" />
                  For Students
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Gain industry-relevant experience</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Mentor with world-class experts</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Build your professional network</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact & Recognition */}
      <section className="py-20 bg-gradient-to-r from-brand-magenta/5 via-background/50 to-brand-blue/5">
        <div className="max-w-7xl mx-auto px-3">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-4 text-foreground">Building India's AI <span className="bg-brand-gradient bg-clip-text text-transparent">Leadership</span></h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Establishing DSU as the premier destination for AI research, innovation, and talent development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border/50 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur hover:shadow-lg hover:shadow-brand-blue/20 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl text-brand-blue">Global Recognition</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Positioning DSU among top AI research institutions in India</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Publishing groundbreaking research in premier journals</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Building partnerships with global AI leaders</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur hover:shadow-lg hover:shadow-brand-magenta/20 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl text-brand-magenta">Talent Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-magenta flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Developing highly skilled AI professionals for industry</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-magenta flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Creating innovation and entrepreneurship opportunities</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-magenta flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Building India's AI-first generation of leaders</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join the Initiative Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-3">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fc2f594e327154762bac224d0befab0a1?format=webp&width=800"
                alt="Join DSU's AI-First Initiative"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-8 text-foreground">Be Part of the <span className="bg-brand-gradient bg-clip-text text-transparent">Future</span></h2>
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                Join Dayananda Sagar University's transformative AI-First initiative and shape the future of education, research, and innovation in India.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-brand-blue/20 flex-shrink-0">
                    <Brain className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">World-Class Infrastructure</h3>
                    <p className="text-foreground/70">Access NVIDIA's cutting-edge GPU labs, DGX B200 systems, and state-of-the-art research facilities designed for AI innovation</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-brand-magenta/20 flex-shrink-0">
                    <Users className="w-6 h-6 text-brand-magenta" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Industry Collaboration</h3>
                    <p className="text-foreground/70">Work directly with leading companies across automotive, healthcare, finance, and manufacturing sectors on real-world problems</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-brand-orange/20 flex-shrink-0">
                    <Rocket className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Career & Entrepreneurship</h3>
                    <p className="text-foreground/70">Launch your career with AI expertise in high demand, or build your AI-powered startup with our incubation support and mentorship</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-brand-blue/20 flex-shrink-0">
                    <Award className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Global Recognition</h3>
                    <p className="text-foreground/70">Publish groundbreaking research, contribute to NVIDIA initiatives, and position yourself as an AI thought leader</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-[#0088FF] via-[#FFD700] to-[#FF6B00] hover:from-[#FF6B00] hover:via-[#FFD700] hover:to-[#0088FF] text-foreground px-8 py-6 text-base font-semibold rounded-2xl animate-gradient bg-[length:200%_auto]">
                  Get Involved Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Link to="/nvidia-ai-architecture">
                  <Button variant="outline" size="lg" className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue/10 px-8 py-6 text-base font-semibold rounded-2xl">
                    Explore Technology
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-3 py-20 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Shape India's AI Future</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Whether you're a student, researcher, entrepreneur, or industry leader—DSU's AI-First initiative offers unprecedented opportunities for growth, innovation, and impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white">
              Join Our Community
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Link to="/nvidia-ai-architecture">
              <Button variant="outline" size="lg" className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                Learn About Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
