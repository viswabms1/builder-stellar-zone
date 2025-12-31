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
  HardDrive
} from "lucide-react";
import { Link } from "react-router-dom";

export default function NVIDIAArchitecture() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center bg-gradient-to-br from-black via-black/95 to-black overflow-hidden pt-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-600 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-3 text-center z-10 py-20">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20 mb-8">
            <Cpu className="w-4 h-4 text-green-500 mr-2" />
            <span className="text-sm font-medium text-green-500">NVIDIA Technology Stack</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            NVIDIA AI Architecture
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8">
            Full-Stack, Purpose-Built and Optimized for AI with Direct Access to Expertise
          </p>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Powering accelerated computing with industry-leading hardware and comprehensive software solutions
          </p>
        </div>
      </section>

      {/* NVIDIA Stack Overview */}
      <section className="px-3 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">NVIDIA Stack for Accelerated Computing</h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Accelerated computing requires full-stack optimization from chip architecture to applications
            </p>
          </div>

          <div className="mb-12">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F935799d5edb9464794f76adfc8ca6552?format=webp&width=1200"
              alt="NVIDIA Stack for Accelerated Computing"
              className="w-full rounded-xl shadow-2xl border border-border/30"
              loading="lazy"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/50 hover:border-green-500/50 transition-all bg-card/50 backdrop-blur">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-lg bg-green-500/10">
                    <Cpu className="w-6 h-6 text-green-500" />
                  </div>
                  <CardTitle className="text-lg">Nvidia Software Stack</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>• Application Frameworks</li>
                  <li>• Platform Solutions</li>
                  <li>• Acceleration Libraries</li>
                  <li>• System Software</li>
                  <li>• CUDA-X AI</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-green-500/50 transition-all bg-card/50 backdrop-blur">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-lg bg-green-500/10">
                    <Zap className="w-6 h-6 text-green-500" />
                  </div>
                  <CardTitle className="text-lg">Platform & Acceleration</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>• NVIDIA AI</li>
                  <li>• NVIDIA Omniverse</li>
                  <li>• RTX Graphics</li>
                  <li>• CUDA-X Libraries</li>
                  <li>• DOCA Framework</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-green-500/50 transition-all bg-card/50 backdrop-blur">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-lg bg-green-500/10">
                    <HardDrive className="w-6 h-6 text-green-500" />
                  </div>
                  <CardTitle className="text-lg">Industry-Leading Hardware</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>• GPU Solutions</li>
                  <li>• Data Processing Units</li>
                  <li>• CPUs</li>
                  <li>• Networking Solutions</li>
                  <li>• System-on-Chip (SOC)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* NVIDIA DGX B200 */}
      <section className="px-3 py-16 bg-gradient-to-r from-green-500/5 via-black/50 to-green-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">NVIDIA DGX B200</h2>
              <p className="text-lg text-foreground mb-8 leading-relaxed">
                The foundation of the modern AI data center, delivering unprecedented performance for training and inference of large generative AI models.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-500 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">8X NVIDIA Blackwell GPUs</h3>
                    <p className="text-sm text-foreground/70">Air-cooled system with maximum computational power</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-500 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">1.4TB GPU Memory</h3>
                    <p className="text-sm text-foreground/70">64 TB/s Bandwidth for large model training</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-500 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">1.8 TB/s NVLink Bandwidth</h3>
                    <p className="text-sm text-foreground/70">GPU-to-GPU communication at unprecedented speeds</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-500 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">3X Training & 15X Inference</h3>
                    <p className="text-sm text-foreground/70">Performance gain over DGX H100</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-black/50 rounded-2xl p-8 border border-green-500/20">
              <h3 className="text-2xl font-bold mb-6 text-white">Specifications</h3>
              <div className="space-y-4">
                <div className="flex justify-between pb-3 border-b border-white/10">
                  <span className="text-foreground/70">Chassis</span>
                  <span className="font-semibold text-white">10U Chassis</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-white/10">
                  <span className="text-foreground/70">Power Consumption</span>
                  <span className="font-semibold text-white">~14.3 kW</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-white/10">
                  <span className="text-foreground/70">GPUs</span>
                  <span className="font-semibold text-white">8x Blackwell</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-white/10">
                  <span className="text-foreground/70">GPU Memory</span>
                  <span className="font-semibold text-white">1.4TB Total</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">Deployment</span>
                  <span className="font-semibold text-white">Any Data Center</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jetson Family */}
      <section className="px-3 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Jetson Family</h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              AI at the Edge and Autonomous Machines - From entry-level to performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                name: "JETSON Orin Nano",
                power: "7-10W",
                performance: "20 TOPs (INT8)",
                size: "45mm x 70mm",
                category: "ENTRY"
              },
              {
                name: "JETSON Orin NX",
                power: "10-25W",
                performance: "100 TOPs (INT8)",
                size: "45mm x 70mm",
                category: "MAINSTREAM"
              },
              {
                name: "JETSON AGX Orin",
                power: "15-60W",
                performance: "275 TOPs (INT8)",
                size: "100mm x 87mm",
                category: "PERFORMANCE"
              },
              {
                name: "JETSON AGX Xavier",
                power: "10-30W",
                performance: "32 TFLOPS (FP16)",
                size: "100mm x 87mm",
                category: "PERFORMANCE"
              }
            ].map((jetson, idx) => (
              <Card key={idx} className="border-border/50 hover:border-green-500/50 transition-all bg-card/50 backdrop-blur">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-3">{jetson.category}</Badge>
                  <CardTitle className="text-base">{jetson.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-foreground/70">Performance</p>
                      <p className="font-semibold">{jetson.performance}</p>
                    </div>
                    <div>
                      <p className="text-foreground/70">Power</p>
                      <p className="font-semibold">{jetson.power}</p>
                    </div>
                    <div>
                      <p className="text-foreground/70">Size</p>
                      <p className="font-semibold">{jetson.size}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Software Suite */}
      <section className="px-3 py-16 bg-gradient-to-r from-green-500/5 via-black/50 to-green-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">NVIDIA AI Enterprise Software Suite</h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Essential software for streamlined development and deployment
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Code className="w-6 h-6 text-green-500" />
                  Data Science & Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-500/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">NVIDIA RAPIDS</h4>
                    <p className="text-sm text-foreground/70">Accelerate data prep and analytics</p>
                  </div>
                  <div className="bg-green-500/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">NVIDIA TAO Toolkit</h4>
                    <p className="text-sm text-foreground/70">Train AI models with custom data</p>
                  </div>
                  <div className="bg-green-500/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">PyTorch/TensorFlow</h4>
                    <p className="text-sm text-foreground/70">Popular frameworks optimized for NVIDIA</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Rocket className="w-6 h-6 text-green-500" />
                  Deployment & Inference
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-500/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">NVIDIA TensorRT</h4>
                    <p className="text-sm text-foreground/70">Optimize models for inference performance</p>
                  </div>
                  <div className="bg-green-500/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">NVIDIA Triton Server</h4>
                    <p className="text-sm text-foreground/70">Deploy models at scale with inference optimization</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Network className="w-6 h-6 text-green-500" />
                  Infrastructure & Orchestration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-500/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">GPU Operator</h4>
                    <p className="text-sm text-foreground/70">Automated GPU management</p>
                  </div>
                  <div className="bg-green-500/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Network Operator</h4>
                    <p className="text-sm text-foreground/70">High-performance networking</p>
                  </div>
                  <div className="bg-green-500/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">vGPU & Magnum IO</h4>
                    <p className="text-sm text-foreground/70">Infrastructure optimization</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Impact */}
      <section className="px-3 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Transforming Industries with AI</h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              NVIDIA technology powers innovation across multiple sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Automotive", stat: "30 of top 30 AV data centers", icon: "🚗" },
              { title: "AI Factories", stat: "40,000+ companies", icon: "🏭" },
              { title: "Digital Twins", stat: "300K users & 700 companies", icon: "🌐" },
              { title: "Healthcare", stat: "1M+ developers (MONAI)", icon: "⚕️" },
              { title: "Robotics", stat: "1M+ on Jetson platform", icon: "🤖" },
              { title: "Gaming", stat: "200M gamers & creators", icon: "🎮" }
            ].map((item, idx) => (
              <Card key={idx} className="border-border/50 hover:border-green-500/50 transition-all bg-card/50 backdrop-blur text-center">
                <CardContent className="pt-8">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.stat}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-3 py-16 bg-gradient-to-r from-green-500/20 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore DSU's AI-First Initiatives</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Discover how Dayananda Sagar University is leveraging NVIDIA's technology stack to build the next generation of AI leaders
          </p>
          <Link to="/ai-first">
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white">
              Explore AI-First @ DSU
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
