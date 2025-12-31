import { useLanguage } from "@/providers/language-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Cpu,
  Zap,
  Layers,
  Code,
  Database,
  Network,
  Rocket,
  Shield,
  Lightbulb,
  Gauge,
  HardDrive,
  CheckCircle,
  Brain,
  Users,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

export default function NVIDIAArchitecture() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 pt-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-3">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6">
              The Technology Behind Your AI Future
            </h1>
            <p className="text-2xl md:text-3xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
              NVIDIA's complete AI stack—from classroom labs to cutting-edge research. Everything you need to master artificial intelligence.
            </p>
          </div>

          <div className="mb-16">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F935799d5edb9464794f76adfc8ca6552?format=webp&width=1200"
              alt="NVIDIA Stack for Accelerated Computing"
              className="w-full rounded-xl shadow-2xl border border-border/30"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="px-3 py-20 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">From Day One: Your Learning Journey</h2>
            <p className="text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Starting with fundamentals, building to mastery—with the same tools used by AI researchers and companies worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/50 hover:border-blue-500/50 transition-all bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Semester 1: Foundation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-base">Learn Python and AI fundamentals on commodity hardware</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-base">Explore popular frameworks like PyTorch and TensorFlow</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-base">Work with small AI models and datasets</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-purple-500/50 transition-all bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Semester 2-3: Acceleration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" />
                  <p className="text-base">Access Jetson edge devices for real-world projects</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" />
                  <p className="text-base">Learn GPU acceleration and CUDA basics</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" />
                  <p className="text-base">Build autonomous systems and vision applications</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-pink-500/50 transition-all bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Semester 4+: Mastery</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0 mt-0.5" />
                  <p className="text-base">Work on DGX B200 for large-scale model training</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0 mt-0.5" />
                  <p className="text-base">Conduct research with industry partners</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0 mt-0.5" />
                  <p className="text-base">Deploy production AI systems at scale</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Hardware: Explained Simply */}
      <section className="px-3 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Your AI Training Arsenal</h2>
            <p className="text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade hardware that makes complex AI tasks possible
            </p>
          </div>

          {/* DGX B200 */}
          <div className="mb-16">
            <Card className="border-border/50 bg-card/50 backdrop-blur overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 border-r border-border/30">
                  <h3 className="text-4xl font-bold mb-6">DGX B200</h3>
                  <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                    A complete supercomputer in a box, designed specifically for training massive AI models
                  </p>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-3">What's Inside?</h4>
                      <p className="text-base text-foreground/70 mb-3 leading-relaxed">8 extremely powerful processors (GPUs) that work together to solve AI problems incredibly fast. Think of it like having 8 super-brains instead of 1.</p>
                      <p className="text-sm text-blue-500 font-semibold">🔧 NVIDIA calls this: 8x Blackwell GPUs</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-3">Memory Power</h4>
                      <p className="text-base text-foreground/70 mb-3 leading-relaxed">1.4 trillion bytes of memory (TB). For perspective, that's enough to hold an entire library—and access it in milliseconds.</p>
                      <p className="text-sm text-blue-500 font-semibold">💾 Why it matters: Train models with 100+ billion parameters</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-3">Speed Between Processors</h4>
                      <p className="text-base text-foreground/70 mb-3 leading-relaxed">The 8 GPUs communicate at lightning speed (1.8 TB/s), sharing information instantly to coordinate on massive problems.</p>
                      <p className="text-sm text-blue-500 font-semibold">⚡ NVIDIA calls this: NVLink technology</p>
                    </div>
                  </div>

                  <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                    <p className="text-sm font-semibold text-foreground mb-2">🎯 What You Can Do:</p>
                    <ul className="text-sm space-y-1 text-foreground/70">
                      <li>• Train the latest large language models</li>
                      <li>• Process massive datasets in hours instead of weeks</li>
                      <li>• Conduct cutting-edge AI research</li>
                      <li>• Collaborate on real industry projects</li>
                    </ul>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-green-500/10 to-transparent">
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="text-xs text-foreground/60">Training Speed</p>
                      <p className="text-2xl font-bold text-green-500">3X faster</p>
                      <p className="text-xs text-foreground/60">than previous generation</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="text-xs text-foreground/60">Inference Speed</p>
                      <p className="text-2xl font-bold text-green-500">15X faster</p>
                      <p className="text-xs text-foreground/60">running trained models</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="text-xs text-foreground/60">Power Used</p>
                      <p className="text-2xl font-bold text-green-500">~14.3 kW</p>
                      <p className="text-xs text-foreground/60">entire supercomputer</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="text-xs text-foreground/60">Physical Size</p>
                      <p className="text-2xl font-bold text-green-500">10U Chassis</p>
                      <p className="text-xs text-foreground/60">fits in any data center</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Jetson Family */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Jetson: AI in Your Hands</h3>
            <p className="text-lg text-foreground/70 mb-10">
              Small, powerful computers for building AI applications in the real world—robots, drones, smart devices, and autonomous systems.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-border/50 hover:border-blue-500/50 transition-all bg-card/50 backdrop-blur">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-3">Nano</Badge>
                  <CardTitle className="text-lg">Jetson Orin Nano</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-xs text-foreground/70 mb-1">Power Usage</p>
                    <p className="font-bold">7-10W</p>
                    <p className="text-xs text-foreground/60">Like a small phone</p>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/70 mb-1">Best For</p>
                    <p className="text-xs">Learning, hobby projects, edge devices</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-purple-500/50 transition-all bg-card/50 backdrop-blur">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-3">NX</Badge>
                  <CardTitle className="text-lg">Jetson Orin NX</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-xs text-foreground/70 mb-1">Power Usage</p>
                    <p className="font-bold">10-25W</p>
                    <p className="text-xs text-foreground/60">Tablet equivalent</p>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/70 mb-1">Best For</p>
                    <p className="text-xs">Autonomous robots, drones, smart devices</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-pink-500/50 transition-all bg-card/50 backdrop-blur">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-3">AGX</Badge>
                  <CardTitle className="text-lg">Jetson AGX Orin</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-xs text-foreground/70 mb-1">Power Usage</p>
                    <p className="font-bold">15-60W</p>
                    <p className="text-xs text-foreground/60">Desktop computer</p>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/70 mb-1">Best For</p>
                    <p className="text-xs">Advanced research, complex applications</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-yellow-500/50 transition-all bg-card/50 backdrop-blur">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-3">Xavier</Badge>
                  <CardTitle className="text-lg">Jetson AGX Xavier</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-xs text-foreground/70 mb-1">Power Usage</p>
                    <p className="font-bold">10-30W</p>
                    <p className="text-xs text-foreground/60">Efficient & capable</p>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/70 mb-1">Best For</p>
                    <p className="text-xs">Industrial deployments, automotive</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Software Tools */}
      <section className="px-3 py-20 bg-gradient-to-r from-purple-500/5 via-black/50 to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Tools You'll Master</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Industry-standard software that accelerates every step of your AI journey
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3 mb-4">
                  <Code className="w-8 h-8 text-blue-500" />
                  CUDA: Supercharging Your Code
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-foreground/80 mb-4 leading-relaxed">
                      CUDA is a technology that lets you write code that runs on NVIDIA GPUs. Instead of using just one processor, your code can use thousands of tiny processors working together in parallel—like having a thousand workers tackling a problem simultaneously.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-blue-500 font-bold mt-1">→</span>
                        <div>
                          <p className="font-semibold text-sm">Write Once, Run Anywhere</p>
                          <p className="text-xs text-foreground/70">Your CUDA code works on all NVIDIA GPUs</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-blue-500 font-bold mt-1">→</span>
                        <div>
                          <p className="font-semibold text-sm">Industry Standard</p>
                          <p className="text-xs text-foreground/70">Used by researchers and companies worldwide</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-blue-500 font-bold mt-1">→</span>
                        <div>
                          <p className="font-semibold text-sm">10-100X Speed Boost</p>
                          <p className="text-xs text-foreground/70">Same code runs much faster on GPUs</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                    <p className="font-bold text-foreground mb-4">Real-World Examples</p>
                    <ul className="space-y-2 text-sm text-foreground/70">
                      <li>🤖 Training neural networks 50X faster</li>
                      <li>📊 Processing billions of data points</li>
                      <li>🎮 Rendering graphics in video games</li>
                      <li>🏥 Analyzing medical images instantly</li>
                      <li>🚗 Training self-driving cars</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3 mb-4">
                  <Rocket className="w-8 h-8 text-purple-500" />
                  Key Software You'll Use
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-purple-500/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">PyTorch & TensorFlow</h4>
                    <p className="text-sm text-foreground/70 mb-3">Popular AI frameworks that work great on NVIDIA GPUs</p>
                    <Badge className="bg-purple-500/30 text-purple-400">Framework</Badge>
                  </div>
                  <div className="bg-purple-500/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">NVIDIA RAPIDS</h4>
                    <p className="text-sm text-foreground/70 mb-3">Process data 50X faster using GPU acceleration</p>
                    <Badge className="bg-purple-500/30 text-purple-400">Data Tools</Badge>
                  </div>
                  <div className="bg-purple-500/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">TensorRT</h4>
                    <p className="text-sm text-foreground/70 mb-3">Make trained models run 10X faster in production</p>
                    <Badge className="bg-purple-500/30 text-purple-400">Deployment</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Real Projects & Opportunities */}
      <section className="px-3 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">What You'll Build Here</h2>
            <p className="text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Real projects with real impact, using real technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Autonomous Robots", desc: "Build robots that see, learn, and decide using edge AI", icon: "🤖" },
              { title: "Medical AI", desc: "Analyze medical images and predict diagnoses", icon: "⚕️" },
              { title: "Natural Language", desc: "Train and deploy large language models", icon: "💬" },
              { title: "Computer Vision", desc: "Build systems that understand video and images", icon: "👁️" },
              { title: "Data Science", desc: "Process and analyze massive datasets instantly", icon: "📊" },
              { title: "Industry Research", desc: "Partner with companies on real problems", icon: "🏢" }
            ].map((project, idx) => (
              <Card key={idx} className="border-border/50 hover:border-blue-500/50 transition-all bg-card/50 backdrop-blur">
                <CardContent className="pt-8">
                  <div className="text-5xl mb-4">{project.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-sm text-foreground/70">{project.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="px-3 py-20 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why This Setup Matters</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-blue-500" />
                  For Your Learning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-foreground/70">
                <p>You learn on the exact same tools used by AI researchers at top companies and universities worldwide.</p>
                <p>When you graduate, you'll have hands-on experience that employers are desperately looking for.</p>
                <p>No need to "re-learn" new tools—you'll already know what matters.</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Brain className="w-6 h-6 text-purple-500" />
                  For Your Career
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-foreground/70">
                <p>Every major AI company uses NVIDIA technology. You'll be job-ready from day one.</p>
                <p>Build a portfolio of real AI projects on enterprise hardware.</p>
                <p>Network with industry professionals and researchers who visit campus.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* DSU's NVIDIA Architecture */}
      <section className="px-3 py-20 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">DSU's NVIDIA AI Architecture</h2>
            <p className="text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
              Dayananda Sagar University has partnered with NVIDIA to create a complete, enterprise-grade AI infrastructure dedicated to transforming education and research.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-3xl mb-4">What DSU Has Built</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-xl text-foreground/80 leading-relaxed">
                  DSU's AI infrastructure represents a significant investment in creating a world-class environment where students, faculty, and researchers can work with the same technology used by leading AI companies globally. This isn't a classroom simulation—it's the real deal.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                    <h4 className="text-2xl font-bold text-blue-500 mb-4">GPU Computing Labs</h4>
                    <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                      Multiple NVIDIA GPUs and systems available for student projects, research, and learning.
                    </p>
                    <ul className="space-y-3 text-lg text-foreground/70">
                      <li>✓ Jetson platforms for edge AI</li>
                      <li>✓ High-performance GPU workstations</li>
                      <li>✓ Scalable computing infrastructure</li>
                    </ul>
                  </div>
                  <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                    <h4 className="text-2xl font-bold text-purple-500 mb-4">Software & Tools</h4>
                    <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                      Complete access to NVIDIA's entire software ecosystem for development and deployment.
                    </p>
                    <ul className="space-y-3 text-lg text-foreground/70">
                      <li>✓ CUDA and deep learning frameworks</li>
                      <li>✓ RAPIDS for data science</li>
                      <li>✓ TensorRT for production deployment</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-8 rounded-lg border border-blue-500/30">
                  <h4 className="text-2xl font-bold text-foreground mb-4">Industry-Standard Training</h4>
                  <p className="text-xl text-foreground/80 leading-relaxed">
                    Students learn on the exact same tools used by researchers at Google, Meta, OpenAI, and other leading AI labs. This means your education translates directly to real-world relevance and immediate job readiness. When you graduate, you won't need to "learn" new tools—you'll already be proficient with what matters.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-3 py-16 bg-gradient-to-r from-green-500/20 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Master AI?</h2>
          <p className="text-2xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            This is the infrastructure. This is the opportunity. The question is: what will you build?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ai-first">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white">
                Explore AI-First @ DSU
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background">
              View Programs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
