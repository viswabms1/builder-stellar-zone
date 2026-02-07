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
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function NVIDIAArchitecture() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-8 lg:py-12 bg-gradient-to-b from-slate-900 via-blue-900/20 to-background overflow-hidden">
        {/* Background with grid effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent"></div>
        </div>

        {/* Main Content Grid */}
        <div className="relative max-w-7xl mx-auto px-3">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Left Side - Campus with AI Infrastructure Image */}
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ffd142f634f47493e974aa82a480af412?format=webp&width=800"
                alt="DSU Campus with AI Infrastructure"
                className="w-full h-full object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              {/* Green light effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-4">
              {/* Main Headline */}
              <div>
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2 font-display">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-magenta to-brand-blue">
                    THE WORLD IS BUILDING AI.
                  </span>
                  <br />
                  <span className="bg-brand-gradient bg-clip-text text-transparent">
                    WE ARE BUILDING THE FACTORY.
                  </span>
                </h1>
              </div>

              {/* Subheadline */}
              <div className="space-y-2">
                <p className="text-base sm:text-xl text-foreground/80 leading-relaxed font-body">
                  Invitation To Experience India's First AI-Native Research Ecosystem.
                </p>
                <div className="space-y-1">
                  <p className="text-base sm:text-lg text-brand-blue font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-blue rounded-full"></span>
                    20 NVIDIA DGX B200 Nodes
                  </p>
                  <p className="text-base sm:text-lg text-brand-blue font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-blue rounded-full"></span>
                    One Mission
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="#explore"
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-[#0088FF] via-[#FFD700] to-[#FF6B00] hover:from-[#FF6B00] hover:via-[#FFD700] hover:to-[#0088FF] text-foreground px-8 py-6 text-lg font-semibold rounded-2xl animate-gradient bg-[length:200%_auto]"
                  >
                    Explore the Stack
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient accent */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-950 to-transparent"></div>
      </section>

      {/* The Technology Behind Your AI Future Section */}
      <section className="relative py-16 pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-3">
          <div className="text-center mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-4">
              The Technology Behind Your AI Future
            </h1>
            <p className="text-2xl md:text-3xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
              NVIDIA's complete AI stack—from classroom labs to cutting-edge
              research. Everything you need to master artificial intelligence.
            </p>
          </div>

          <div className="mb-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F935799d5edb9464794f76adfc8ca6552?format=webp&width=1200"
              alt="NVIDIA Stack for Accelerated Computing"
              className="w-full rounded-xl shadow-2xl border border-border/30"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* DSU's NVIDIA Architecture */}
      <section id="explore" className="px-3 py-20 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              DSU's NVIDIA AI Architecture
            </h2>
            <p className="text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed mb-8">
              Dayananda Sagar University has partnered with NVIDIA to create a AI architecture enables students to build, train, and deploy large-scale AI systems across vision, language, and data-intensive domains.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-3xl mb-4">
                  What DSU Has Built
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-xl text-foreground/80 leading-relaxed">
                  DSU's AI infrastructure represents a significant investment in
                  creating a world-class environment where students, faculty,
                  and researchers can work with the same technology used by
                  leading AI companies globally. This isn't a classroom
                  simulation—it's the real deal.
                </p>

                {/* Exclusivity & Pride */}
                <div className="relative overflow-hidden rounded-lg border-2 border-gradient-to-r from-gold-400 to-yellow-500/50 bg-gradient-to-r from-amber-50/50 to-yellow-50/50 dark:from-amber-950/30 dark:to-yellow-950/30 p-8">
                  <div className="absolute top-0 right-0 text-7xl opacity-10">
                    👑
                  </div>
                  <div className="relative z-10">
                    <p className="text-lg font-bold text-amber-900 dark:text-amber-200 mb-2">
                      🏆 A Rare Distinction
                    </p>
                    <p className="text-lg text-foreground/85 leading-relaxed font-semibold">
                      This complete NVIDIA AI infrastructure stack is available
                      at only a handful of elite institutions across India. DSU
                      is proud to be among them—offering students access to
                      world-class research and learning infrastructure that
                      matches top universities globally.
                    </p>
                  </div>
                </div>

                {/* The Complete NVIDIA Stack */}
                <div className="space-y-4">
                  <p className="text-lg font-semibold text-foreground mb-6">
                    The Complete NVIDIA AI Stack at DSU
                  </p>

                  {/* Layer 4: Application Layer */}
                  <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 p-6 rounded-lg border border-orange-500/30">
                    <h4 className="text-xl font-bold text-orange-500 mb-3">
                      Layer 4: AI Applications
                    </h4>
                    <p className="text-base text-foreground/80 leading-relaxed mb-3">
                      Build real-world AI applications and solutions across
                      various domains
                    </p>
                    <ul className="space-y-2 text-base text-foreground/70">
                      <li>✓ Natural Language Processing applications</li>
                      <li>✓ Computer vision and autonomous systems</li>
                      <li>✓ Healthcare and biomedical AI solutions</li>
                      <li>✓ Enterprise AI systems and products</li>
                    </ul>
                  </div>

                  {/* Layer 3: AI Frameworks & Libraries */}
                  <div className="bg-gradient-to-r from-purple-500/10 to-violet-500/10 p-6 rounded-lg border border-purple-500/30">
                    <h4 className="text-xl font-bold text-purple-500 mb-3">
                      Layer 3: AI & Deep Learning Frameworks
                    </h4>
                    <p className="text-base text-foreground/80 leading-relaxed mb-3">
                      Industry-standard frameworks optimized to run on NVIDIA
                      GPUs
                    </p>
                    <ul className="space-y-2 text-base text-foreground/70">
                      <li>
                        ✓ <span className="font-semibold">PyTorch</span> - Deep
                        learning research and production
                      </li>
                      <li>
                        ✓ <span className="font-semibold">TensorFlow</span> -
                        Scalable machine learning
                      </li>
                      <li>
                        ✓ <span className="font-semibold">RAPIDS</span> -
                        GPU-accelerated data science
                      </li>
                      <li>
                        ✓ <span className="font-semibold">TensorRT</span> -
                        High-performance inference
                      </li>
                    </ul>
                  </div>

                  {/* Layer 2: CUDA Layer */}
                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-6 rounded-lg border border-blue-500/30">
                    <h4 className="text-xl font-bold text-blue-500 mb-3">
                      Layer 2: CUDA - The Parallel Computing Platform
                    </h4>
                    <p className="text-base text-foreground/80 leading-relaxed mb-3">
                      NVIDIA's core computing platform that enables massive
                      parallel processing
                    </p>
                    <ul className="space-y-2 text-base text-foreground/70">
                      <li>
                        ✓ <span className="font-semibold">CUDA Cores</span> -
                        Thousands of processors working in parallel
                      </li>
                      <li>
                        ✓ <span className="font-semibold">cuDNN</span> -
                        Optimized neural network operations
                      </li>
                      <li>
                        ✓ <span className="font-semibold">CUTLASS</span> - Fast
                        matrix operations for deep learning
                      </li>
                      <li>
                        ✓ <span className="font-semibold">cuBLAS</span> -
                        GPU-accelerated linear algebra
                      </li>
                    </ul>
                  </div>

                  {/* Layer 1: Hardware Foundation */}
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-lg border border-green-500/30">
                    <h4 className="text-xl font-bold text-green-500 mb-3">
                      Layer 1: Hardware Foundation
                    </h4>
                    <p className="text-base text-foreground/80 leading-relaxed mb-3">
                      Enterprise-grade NVIDIA GPU infrastructure designed for AI
                      acceleration
                    </p>
                    <ul className="space-y-2 text-base text-foreground/70">
                      <li>
                        ✓ <span className="font-semibold">DGX B200</span> -
                        Supercomputer for training massive models
                      </li>
                      <li>
                        ✓ <span className="font-semibold">Jetson Family</span> -
                        Edge AI devices for real-world deployment
                      </li>
                      <li>
                        ✓{" "}
                        <span className="font-semibold">GPU Workstations</span>{" "}
                        - High-performance individual development
                      </li>
                      <li>
                        ✓ <span className="font-semibold">NVLink</span> -
                        Ultra-fast GPU-to-GPU communication
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-8 rounded-lg border border-blue-500/30">
                  <h4 className="text-2xl font-bold text-foreground mb-4">
                    Why This Stack Matters
                  </h4>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    This isn't just hardware. It's a complete, integrated
                    ecosystem where every layer is optimized to work together.
                    CUDA enables PyTorch to run at lightning speed on GPUs.
                    TensorRT takes trained models and makes them 10X faster.
                    Students experience this integration firsthand,
                    understanding how real AI systems are built, deployed, and
                    scaled in production environments. This is how Google, Meta,
                    and OpenAI build their AI systems.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="px-3 py-20 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              From Day One: Your Learning Journey
            </h2>
            <p className="text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Starting with fundamentals, building to mastery—with the same
              tools used by AI researchers and companies worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/50 hover:border-blue-500/50 transition-all bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">
                  Semester 1: Foundation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-base">
                    Learn Python and AI fundamentals on commodity hardware
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-base">
                    Explore popular frameworks like PyTorch and TensorFlow
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-base">
                    Work with small AI models and datasets
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-purple-500/50 transition-all bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">
                  Semester 2-3: Acceleration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" />
                  <p className="text-base">
                    Access Jetson edge devices for real-world projects
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" />
                  <p className="text-base">
                    Learn GPU acceleration and CUDA basics
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" />
                  <p className="text-base">
                    Build autonomous systems and vision applications
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-pink-500/50 transition-all bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">
                  Semester 4+: Mastery
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0 mt-0.5" />
                  <p className="text-base">
                    Work on DGX B200 for large-scale model training
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0 mt-0.5" />
                  <p className="text-base">
                    Conduct research with industry partners
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0 mt-0.5" />
                  <p className="text-base">
                    Deploy production AI systems at scale
                  </p>
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
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Your AI Training Arsenal
            </h2>
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
                    A complete supercomputer in a box, designed specifically for
                    training massive AI models
                  </p>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-3">
                        What's Inside?
                      </h4>
                      <p className="text-base text-foreground/70 mb-3 leading-relaxed">
                        8 extremely powerful processors (GPUs) that work
                        together to solve AI problems incredibly fast. Think of
                        it like having 8 super-brains instead of 1.
                      </p>
                      <p className="text-sm text-blue-500 font-semibold">
                        🔧 NVIDIA calls this: 8x Blackwell GPUs
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-3">
                        Memory Power
                      </h4>
                      <p className="text-base text-foreground/70 mb-3 leading-relaxed">
                        1.4 trillion bytes of memory (TB). For perspective,
                        that's enough to hold an entire library—and access it in
                        milliseconds.
                      </p>
                      <p className="text-sm text-blue-500 font-semibold">
                        💾 Why it matters: Train models with 100+ billion
                        parameters
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-3">
                        Speed Between Processors
                      </h4>
                      <p className="text-base text-foreground/70 mb-3 leading-relaxed">
                        The 8 GPUs communicate at lightning speed (1.8 TB/s),
                        sharing information instantly to coordinate on massive
                        problems.
                      </p>
                      <p className="text-sm text-blue-500 font-semibold">
                        ⚡ NVIDIA calls this: NVLink technology
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                    <p className="text-sm font-semibold text-foreground mb-2">
                      🎯 What You Can Do:
                    </p>
                    <ul className="text-sm space-y-1 text-foreground/70">
                      <li>• Train the latest large language models</li>
                      <li>
                        • Process massive datasets in hours instead of weeks
                      </li>
                      <li>• Conduct cutting-edge AI research</li>
                      <li>• Collaborate on real industry projects</li>
                    </ul>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-green-500/10 to-transparent">
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="text-xs text-foreground/60">
                        Training Speed
                      </p>
                      <p className="text-2xl font-bold text-green-500">
                        3X faster
                      </p>
                      <p className="text-xs text-foreground/60">
                        than previous generation
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="text-xs text-foreground/60">
                        Inference Speed
                      </p>
                      <p className="text-2xl font-bold text-green-500">
                        15X faster
                      </p>
                      <p className="text-xs text-foreground/60">
                        running trained models
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="text-xs text-foreground/60">Power Used</p>
                      <p className="text-2xl font-bold text-green-500">
                        ~14.3 kW
                      </p>
                      <p className="text-xs text-foreground/60">
                        entire supercomputer
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="text-xs text-foreground/60">
                        Physical Size
                      </p>
                      <p className="text-2xl font-bold text-green-500">
                        10U Chassis
                      </p>
                      <p className="text-xs text-foreground/60">
                        fits in any data center
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Jetson Family */}
          <div>
            <h3 className="text-3xl font-bold mb-8">
              Jetson: AI in Your Hands
            </h3>
            <p className="text-lg text-foreground/70 mb-10">
              Small, powerful computers for building AI applications in the real
              world—robots, drones, smart devices, and autonomous systems.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-border/50 hover:border-blue-500/50 transition-all bg-card/50 backdrop-blur">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-3">
                    Nano
                  </Badge>
                  <CardTitle className="text-lg">Jetson Orin Nano</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-xs text-foreground/70 mb-1">
                      Power Usage
                    </p>
                    <p className="font-bold">7-10W</p>
                    <p className="text-xs text-foreground/60">
                      Like a small phone
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/70 mb-1">Best For</p>
                    <p className="text-xs">
                      Learning, hobby projects, edge devices
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-purple-500/50 transition-all bg-card/50 backdrop-blur">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-3">
                    NX
                  </Badge>
                  <CardTitle className="text-lg">Jetson Orin NX</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-xs text-foreground/70 mb-1">
                      Power Usage
                    </p>
                    <p className="font-bold">10-25W</p>
                    <p className="text-xs text-foreground/60">
                      Tablet equivalent
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/70 mb-1">Best For</p>
                    <p className="text-xs">
                      Autonomous robots, drones, smart devices
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-pink-500/50 transition-all bg-card/50 backdrop-blur">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-3">
                    AGX
                  </Badge>
                  <CardTitle className="text-lg">Jetson AGX Orin</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-xs text-foreground/70 mb-1">
                      Power Usage
                    </p>
                    <p className="font-bold">15-60W</p>
                    <p className="text-xs text-foreground/60">
                      Desktop computer
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/70 mb-1">Best For</p>
                    <p className="text-xs">
                      Advanced research, complex applications
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-yellow-500/50 transition-all bg-card/50 backdrop-blur">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-3">
                    Xavier
                  </Badge>
                  <CardTitle className="text-lg">Jetson AGX Xavier</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-xs text-foreground/70 mb-1">
                      Power Usage
                    </p>
                    <p className="font-bold">10-30W</p>
                    <p className="text-xs text-foreground/60">
                      Efficient & capable
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/70 mb-1">Best For</p>
                    <p className="text-xs">
                      Industrial deployments, automotive
                    </p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Tools You'll Master
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Industry-standard software that accelerates every step of your AI
              journey
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
                      CUDA is a technology that lets you write code that runs on
                      NVIDIA GPUs. Instead of using just one processor, your
                      code can use thousands of tiny processors working together
                      in parallel—like having a thousand workers tackling a
                      problem simultaneously.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-blue-500 font-bold mt-1">→</span>
                        <div>
                          <p className="font-semibold text-sm">
                            Write Once, Run Anywhere
                          </p>
                          <p className="text-xs text-foreground/70">
                            Your CUDA code works on all NVIDIA GPUs
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-blue-500 font-bold mt-1">→</span>
                        <div>
                          <p className="font-semibold text-sm">
                            Industry Standard
                          </p>
                          <p className="text-xs text-foreground/70">
                            Used by researchers and companies worldwide
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-blue-500 font-bold mt-1">→</span>
                        <div>
                          <p className="font-semibold text-sm">
                            10-100X Speed Boost
                          </p>
                          <p className="text-xs text-foreground/70">
                            Same code runs much faster on GPUs
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                    <p className="font-bold text-foreground mb-4">
                      Real-World Examples
                    </p>
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
                    <p className="text-sm text-foreground/70 mb-3">
                      Popular AI frameworks that work great on NVIDIA GPUs
                    </p>
                    <Badge className="bg-purple-500/30 text-purple-400">
                      Framework
                    </Badge>
                  </div>
                  <div className="bg-purple-500/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">NVIDIA RAPIDS</h4>
                    <p className="text-sm text-foreground/70 mb-3">
                      Process data 50X faster using GPU acceleration
                    </p>
                    <Badge className="bg-purple-500/30 text-purple-400">
                      Data Tools
                    </Badge>
                  </div>
                  <div className="bg-purple-500/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">TensorRT</h4>
                    <p className="text-sm text-foreground/70 mb-3">
                      Make trained models run 10X faster in production
                    </p>
                    <Badge className="bg-purple-500/30 text-purple-400">
                      Deployment
                    </Badge>
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
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              What You'll Build Here
            </h2>
            <p className="text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Real projects with real impact, using real technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Autonomous Robots",
                desc: "Build robots that see, learn, and decide using edge AI",
                icon: "🤖",
              },
              {
                title: "Medical AI",
                desc: "Analyze medical images and predict diagnoses",
                icon: "⚕️",
              },
              {
                title: "Natural Language",
                desc: "Train and deploy large language models",
                icon: "💬",
              },
              {
                title: "Computer Vision",
                desc: "Build systems that understand video and images",
                icon: "👁️",
              },
              {
                title: "Data Science",
                desc: "Process and analyze massive datasets instantly",
                icon: "📊",
              },
              {
                title: "Industry Research",
                desc: "Partner with companies on real problems",
                icon: "🏢",
              },
            ].map((project, idx) => (
              <Card
                key={idx}
                className="border-border/50 hover:border-blue-500/50 transition-all bg-card/50 backdrop-blur"
              >
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
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Why This Setup Matters
            </h2>
          </div>

          <div className="mb-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-lg border border-blue-500/30">
            <p className="text-lg text-foreground/80 leading-relaxed">
              This infrastructure bridges rigorous academic foundations with
              production-scale AI systems used in global research and industry.
            </p>
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
                <p>
                  You learn on the same tools used by AI researchers at leading
                  universities and companies worldwide.
                </p>
                <p>
                  When you graduate, you'll have hands-on experience with
                  production-grade infrastructure.
                </p>
                <p>
                  No "re-learning" new tools—you're already proficient in what
                  matters most.
                </p>
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
                <p>
                  Leading AI companies prioritize hiring engineers with hands-on
                  NVIDIA experience.
                </p>
                <p>
                  Build a portfolio of real AI projects on enterprise hardware.
                </p>
                <p>
                  Network with industry professionals and researchers who
                  collaborate with DSU.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact on Placements */}
      <section className="px-3 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Your Gateway to Top Placements
            </h2>
            <p className="text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              This infrastructure isn't just impressive—it directly transforms
              your career prospects and placement outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <Card className="border-border/50 bg-gradient-to-br from-blue-500/10 to-blue-500/5 backdrop-blur hover:border-blue-500/50 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl mb-6">
                  What Employers Want
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="font-bold text-lg text-foreground mb-2">
                    Hands-on NVIDIA Experience
                  </p>
                  <p className="text-sm text-foreground/70">
                    Experience with CUDA, DGX systems, and GPU-accelerated
                    workflows used across the AI industry
                  </p>
                </div>
                <div>
                  <p className="font-bold text-lg text-foreground mb-2">
                    Production-Ready Skills
                  </p>
                  <p className="text-sm text-foreground/70">
                    Exposure to real training, inference, optimization, and
                    deployment pipelines
                  </p>
                </div>
                <div>
                  <p className="font-bold text-lg text-foreground mb-2">
                    Demonstrated Capability
                  </p>
                  <p className="text-sm text-foreground/70">
                    Portfolio projects trained and deployed on enterprise-grade
                    NVIDIA infrastructure
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-gradient-to-br from-green-500/10 to-green-500/5 backdrop-blur hover:border-green-500/50 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl mb-6">
                  Your Competitive Advantage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="font-bold text-lg text-foreground mb-2">
                    Immediate Job Readiness
                  </p>
                  <p className="text-sm text-foreground/70">
                    While peers are learning tools on the job, you're already
                    proficient—hiring managers value candidates who can
                    contribute from day one
                  </p>
                </div>
                <div>
                  <p className="font-bold text-lg text-foreground mb-2">
                    Higher Compensation
                  </p>
                  <p className="text-sm text-foreground/70">
                    NVIDIA-certified and GPU-experienced engineers often command
                    significantly higher compensation in the AI industry
                  </p>
                </div>
                <div>
                  <p className="font-bold text-lg text-foreground mb-2">
                    Exclusive Opportunities
                  </p>
                  <p className="text-sm text-foreground/70">
                    Leading AI companies such as Google, Meta, Microsoft, and
                    others actively recruit from universities with advanced GPU
                    infrastructure
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* The Placement Reality */}
          <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-border/50 mb-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  The Recruitment Pipeline
                </h3>
                <p className="text-foreground/80 mb-6">
                  DSU's NVIDIA-powered ecosystem creates a clear pathway from
                  learning to recruitment.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-semibold">Industry Partnerships</p>
                      <p className="text-sm text-foreground/70 mt-1">
                        DSU's NVIDIA partnership attracts direct recruitment
                        from AI teams at major companies
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500 text-white font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-semibold">Research Opportunities</p>
                      <p className="text-sm text-foreground/70 mt-1">
                        Collaborate on real industry problems → Paper
                        publications → Fast-track interviews
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-semibold">Portfolio Projects</p>
                      <p className="text-sm text-foreground/70 mt-1">
                        Train models on DGX B200 → Deploy on Jetson → Showcase
                        on your resume
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <p className="font-semibold">Expert Network</p>
                      <p className="text-sm text-foreground/70 mt-1">
                        Learn from visiting NVIDIA researchers and industry
                        partners → Build professional relationships
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Why DSU Graduates Stand Out
                </h3>
                <div className="space-y-3 text-foreground/80">
                  <p className="flex items-start gap-3">
                    <span className="font-bold text-blue-500 min-w-fit">
                      ✓ Targeted Skills:
                    </span>
                    <span>
                      You learn exactly what industry needs, not what textbooks
                      say
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="font-bold text-blue-500 min-w-fit">
                      ✓ Real Scale:
                    </span>
                    <span>
                      Experience with infrastructure that handles real AI
                      workloads, not simulations
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="font-bold text-blue-500 min-w-fit">
                      ✓ Proven Track Record:
                    </span>
                    <span>
                      Your projects are proof of capability—not just theory
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="font-bold text-blue-500 min-w-fit">
                      ✓ First-Mover Advantage:
                    </span>
                    <span>
                      Few Indian universities have this. You're competing with
                      elite peers globally
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-8 border border-green-500/30 text-center">
            <h3 className="text-3xl font-bold mb-4">The Bottom Line</h3>
            <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Top AI companies recruit from universities with world-class
              infrastructure. Your degree from DSU isn't just a credential—it's
              proof that you've mastered the tools and infrastructure used by
              leading AI teams. That significantly strengthens your placement
              outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-3 py-16 bg-gradient-to-r from-green-500/20 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Master AI?
          </h2>
          <p className="text-2xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            This is the infrastructure. This is the opportunity. The question
            is: what will you build?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ai-first">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white"
              >
                Explore AI-First @ DSU
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/academics">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
              >
                View AI Programs & Curriculum
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
