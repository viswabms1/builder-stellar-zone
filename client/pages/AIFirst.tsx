import { Link } from "react-router-dom";
import { useLanguage } from "@/providers/language-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Brain,
  Cpu,
  Zap,
  Users,
  Award,
  TrendingUp,
  Target,
  Star,
  Lightbulb,
  Code,
  Database,
  Network,
  Rocket,
  Globe,
  BookOpen,
  Microscope,
  Shield,
  Briefcase,
  CheckCircle
} from "lucide-react";

export default function AIFirst() {
  const { t } = useLanguage();

  const aiInitiatives = [
    {
      title: "AI & Machine Learning Engineering",
      description: "Cutting-edge programs in artificial intelligence, machine learning, and deep learning integrated across all engineering disciplines",
      icon: Brain,
      color: "orange"
    },
    {
      title: "Data Science & Analytics",
      description: "Advanced analytics, predictive modeling, and big data processing to unlock insights from complex datasets",
      icon: Database,
      color: "red"
    },
    {
      title: "AI-Powered Research",
      description: "Research labs focused on natural language processing, computer vision, robotics, and autonomous systems",
      icon: Microscope,
      color: "blue"
    },
    {
      title: "Industry Collaborations",
      description: "Partnerships with leading AI companies for real-world project experience and innovation",
      icon: Network,
      color: "green"
    },
    {
      title: "AI Ethics & Governance",
      description: "Programs emphasizing responsible AI development, ethical considerations, and regulatory compliance",
      icon: Shield,
      color: "purple"
    },
    {
      title: "Innovation Hubs",
      description: "State-of-the-art facilities equipped with GPU clusters and AI development tools for hands-on learning",
      icon: Rocket,
      color: "pink"
    }
  ];

  const aiPrograms = [
    {
      name: "B.Tech CSE (AI & ML)",
      level: "Undergraduate",
      focus: "Comprehensive curriculum in machine learning, neural networks, and AI applications"
    },
    {
      name: "B.Tech CSE (AI & Data Science)",
      level: "Undergraduate",
      focus: "Integrated approach to AI and data analytics with industry-standard tools"
    },
    {
      name: "B.Tech CSE (Cybersecurity with AI)",
      level: "Undergraduate",
      focus: "AI-enhanced security solutions and intelligent threat detection systems"
    },
    {
      name: "B.Tech AI & Robotics",
      level: "Undergraduate",
      focus: "Robotics, autonomous systems, and intelligent automation technologies"
    },
    {
      name: "M.Tech Data Science & AI",
      level: "Postgraduate",
      focus: "Advanced research in AI, machine learning, and statistical methods"
    },
    {
      name: "B.Sc Data Science",
      level: "Undergraduate",
      focus: "Core data science and analytics with programming expertise"
    }
  ];

  const aiCapabilities = [
    "GPU-accelerated Computing Facilities",
    "ML Framework Expertise (TensorFlow, PyTorch, Scikit-learn)",
    "Natural Language Processing Labs",
    "Computer Vision Research Centers",
    "Autonomous Systems & Robotics",
    "AI Model Deployment & Cloud Integration",
    "Big Data Processing Infrastructure",
    "Industry-Led Workshops & Certifications"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Video */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center bg-black overflow-hidden">
        <video
          src="https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2F03362b62a37f44ddafe493229d096ee4?alt=media&token=0e85ba67-0518-4bd2-83fb-d7feee4d7438&apiKey=4aa279a8430d441dba9c55f659831878"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          loading="lazy"
          preload="metadata"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40"></div>

        <div className="relative max-w-7xl mx-auto px-3 text-center z-10">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-8">
            <Cpu className="w-4 h-4 text-blue-500 mr-2" />
            <span className="text-sm font-medium text-blue-500">AI-First Initiative</span>
          </div>

          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-foreground px-8 py-6 text-lg font-semibold rounded-2xl">
              Explore AI Programs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-foreground px-8 py-6 text-lg font-semibold rounded-2xl">
              AI Research Centers
            </Button>
          </div>
          
          {/* AI Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {[
              { number: "15+", label: "AI Programs", icon: BookOpen },
              { number: "₹50Cr+", label: "AI Infrastructure", icon: Cpu },
              { number: "200+", label: "AI Faculty", icon: Users },
              { number: "500+", label: "AI Patents", icon: Award },
            ].map((stat, index) => (
              <Card key={index} className="text-center p-3 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-blue-500/30 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                <div className="text-sm text-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Initiatives Section */}
      <section className="px-3 py-16 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">AI Initiatives at DSU</h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Comprehensive ecosystem of AI programs, research, and innovation supporting academic excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {aiInitiatives.map((initiative, idx) => {
              const IconComponent = initiative.icon;
              return (
                <Card 
                  key={idx} 
                  className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-blue-500/50 bg-card/50 backdrop-blur"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-3">
                      <IconComponent className="w-10 h-10 text-blue-500 group-hover:scale-110 transition-transform" />
                      <Badge variant="outline" className="bg-blue-500/10 text-blue-600">AI</Badge>
                    </div>
                    <CardTitle className="text-lg">{initiative.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground leading-relaxed">{initiative.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Programs Section */}
      <section className="px-3 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">AI-Focused Academic Programs</h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Comprehensive curriculum spanning undergraduate to postgraduate studies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiPrograms.map((program, idx) => (
              <Link 
                key={idx} 
                to="/academics"
                className="group p-6 rounded-xl border border-border/50 hover:border-blue-500/50 bg-card/50 hover:bg-card/80 backdrop-blur transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-lg text-foreground group-hover:text-blue-500 transition-colors">{program.name}</h3>
                    <Badge variant="secondary" className="mt-2">{program.level}</Badge>
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm text-foreground leading-relaxed mt-4">{program.focus}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="px-3 py-16 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">World-Class AI Infrastructure</h2>
              <p className="text-lg text-foreground mb-8 leading-relaxed">
                DSU provides state-of-the-art facilities and resources to support AI education and research. Our infrastructure enables students and faculty to work on cutting-edge AI projects with real-world impact.
              </p>
              <div className="space-y-3">
                {aiCapabilities.map((capability, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-foreground">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop" 
                alt="AI Infrastructure" 
                className="rounded-2xl shadow-2xl"
                loading="lazy"
                preload="metadata"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Innovation */}
      <section className="px-3 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">AI Research & Innovation</h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Leading research initiatives advancing AI technology and its applications across industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Natural Language Processing",
                description: "Advanced NLP research for multilingual systems, sentiment analysis, and language understanding",
                icon: Target
              },
              {
                title: "Computer Vision",
                description: "Image processing, object detection, and visual recognition systems with real-world applications",
                icon: Lightbulb
              },
              {
                title: "Autonomous Systems",
                description: "Robotics, autonomous vehicles, and intelligent automation technology development",
                icon: Rocket
              },
              {
                title: "AI for Sustainability",
                description: "Research in AI applications for environmental monitoring, resource optimization, and green technology",
                icon: Globe
              },
              {
                title: "Healthcare AI",
                description: "Medical imaging, diagnostic systems, and AI-powered healthcare solutions",
                icon: Shield
              },
              {
                title: "Enterprise AI",
                description: "Business intelligence, predictive analytics, and enterprise automation systems",
                icon: Briefcase
              }
            ].map((research, idx) => {
              const IconComponent = research.icon;
              return (
                <Card 
                  key={idx} 
                  className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-blue-500/50"
                >
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-blue-500" />
                      </div>
                      <CardTitle className="text-lg">{research.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground leading-relaxed">{research.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Partnerships */}
      <section className="px-3 py-16 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Industry Partnerships</h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Collaborations with leading technology companies and AI organizations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "AI Research Collaborations", desc: "Joint research projects with industry leaders" },
              { name: "Internship Programs", desc: "Industry mentorship and real-world project experience" },
              { name: "Technical Certifications", desc: "Industry-recognized credentials and training" },
              { name: "Innovation Challenges", desc: "Hackathons and competitions with industry participation" },
              { name: "Guest Lectures", desc: "Industry experts sharing latest AI trends and practices" },
              { name: "Placement Pipeline", desc: "Direct connections with leading AI-focused companies" }
            ].map((partnership, idx) => (
              <Card key={idx} className="p-6 border-border/50 hover:border-blue-500/50 transition-all">
                <h3 className="font-bold text-lg mb-2 text-foreground">{partnership.name}</h3>
                <p className="text-sm text-foreground">{partnership.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-3 py-16">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 border-blue-500/30">
            <CardContent className="pt-8 pb-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the AI Revolution at DSU</h2>
                <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
                  Become part of our thriving AI community and shape the future of technology
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-foreground px-8 py-6 text-lg font-semibold rounded-2xl">
                    Apply Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-foreground px-8 py-6 text-lg font-semibold rounded-2xl"
                    onClick={() => window.location.href = '/admissions'}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
