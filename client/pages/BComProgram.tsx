import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  TrendingUp,
  DollarSign,
  Zap,
  Database,
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
  Cpu,
  ArrowRight,
  DollarSign as Currency,
} from "lucide-react";

export default function BComProgram() {
  const specializations = [
    { icon: TrendingUp, label: "Financial Analytics" },
    { icon: DollarSign, label: "Fintech & Blockchain" },
    { icon: Database, label: "ML in Finance" },
    { icon: Cpu, label: "High-Frequency Trading" },
  ];

  const highlights = [
    "Master accounting, finance, and data science using GPU-accelerated analytics and fintech platforms",
    "Learn on the same infrastructure used by investment banks, Goldman Sachs, JP Morgan, and fintech unicorns",
    "Real-time portfolio analysis, risk modeling, and stock prediction using advanced ML algorithms",
    "Hands-on experience with cryptocurrency, blockchain, and high-frequency trading systems",
    "Industry partnerships with fintech startups and leading financial institutions",
    "20-35% salary premium for B.Com graduates with advanced fintech and data science credentials",
  ];

  const careers = [
    "Financial Data Analyst → Senior Analyst (₹15-30 LPA with GPU/ML skills)",
    "Fintech Developer → Quant Engineer (₹18-40 LPA with blockchain expertise)",
    "Portfolio Manager → Investment Strategist (with AI-driven analysis capabilities)",
    "Strong placements in investment banking, asset management, and emerging fintech sectors",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative">
        <div className="h-[50vh] md:h-[65vh] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop"
            alt="Bachelor of Commerce - GPU-Accelerated Financial Technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-magenta/10 rounded-full border border-brand-magenta/20 mb-4">
              <Sparkles className="w-4 h-4 text-brand-magenta" />
              <span className="text-sm font-medium text-brand-magenta font-display">Bachelor of Commerce (B.Com)</span>
            </div>
            <h1 className="headline-1 text-white leading-tight font-display">Master Finance on Cutting-Edge GPU Infrastructure</h1>
            <p className="subheadline text-white/90 max-w-2xl mt-3 font-body">
              Gain competitive advantage through hands-on experience with GPU-accelerated analytics, fintech platforms, and blockchain technologies. Prepare for careers in investment banking, fintech, and data-driven finance.
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

      {/* Programs Offered */}
      <section className="px-3 py-8 bg-gradient-to-r from-brand-magenta/5 via-brand-orange/5 to-brand-magenta/5 border-y border-border/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="headline-2 font-display mb-2">Program Overview</h2>
            <p className="text-foreground/80 font-body">4-Year Bachelor of Commerce with specialization in GPU-accelerated financial technology</p>
          </div>
          <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="w-5 h-5 text-brand-magenta" />
                <Badge className="bg-brand-magenta/20 text-brand-magenta border-brand-magenta/30">Undergraduate</Badge>
              </div>
              <CardTitle className="font-display">B.Com - Financial Technology</CardTitle>
              <CardDescription className="font-body">4-Year Program</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-foreground font-body">Learn accounting, finance, and data science using GPU-accelerated analytics and fintech platforms. Industry certifications and practical experience with cutting-edge financial technology infrastructure.</p>
              <div className="flex flex-wrap gap-2">
                {["Financial Analytics", "Fintech & Blockchain", "ML in Finance", "High-Frequency Trading"].map((spec, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">{spec}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Overview */}
      <section className="px-3 py-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-5 items-start">
          <div className="lg:col-span-2 space-y-3">
            <h2 className="headline-3 font-display">Why B.Com at DSU?</h2>
            <p className="text-foreground leading-relaxed font-body">
              DSU's B.Com program combines rigorous commerce education with cutting-edge financial technology infrastructure. Students gain practical experience with GPU-accelerated analytics platforms, fintech systems, and blockchain technologies—the same tools used by Goldman Sachs, Morgan Stanley, JP Morgan, and leading fintech unicorns.
            </p>
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-display">Curriculum Highlights</CardTitle>
                <CardDescription className="font-body">Designed for future finance leaders and entrepreneurs</CardDescription>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-3 pt-0">
                {highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-brand-magenta mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="overflow-hidden border border-border/50 bg-card/50">
              <div className="relative h-40">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" alt="Finance Labs" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Fast Facts</CardTitle>
                <CardDescription className="font-body">What sets B.Com at DSU apart</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <div className="flex items-center justify-between"><span>Program Type</span><span className="font-medium">B.Com</span></div>
                <div className="flex items-center justify-between"><span>Duration</span><span className="font-medium">4 Years</span></div>
                <div className="flex items-center justify-between"><span>Focus</span><span className="font-medium">Fintech & Analytics</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* GPU-Accelerated Financial Analytics Section */}
      <section className="px-3 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="headline-2 font-display mb-2">GPU-Accelerated Financial Analytics & Fintech</h2>
            <p className="text-sm md:text-base text-foreground/80 font-body max-w-3xl">
              B.Com students gain competitive advantage through hands-on experience with advanced financial technology infrastructure, preparing them for careers in fintech, data-driven finance, and high-frequency trading sectors.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Advanced Analytics */}
            <div className="bg-gradient-to-r from-brand-magenta/10 to-brand-orange/10 p-6 rounded-lg border border-brand-magenta/30">
              <h4 className="text-xl font-bold text-brand-magenta mb-3">GPU-Accelerated Financial Analytics</h4>
              <ul className="space-y-2 text-sm text-foreground/80 font-body">
                <li>✓ Real-time portfolio analysis and risk modeling using GPU acceleration</li>
                <li>✓ Machine learning models for stock prediction and market trend analysis</li>
                <li>✓ High-performance data processing: Analyze millions of transactions in seconds</li>
                <li>✓ Advanced visualization of financial data and business intelligence dashboards</li>
              </ul>
            </div>

            {/* Fintech & Blockchain */}
            <div className="bg-gradient-to-r from-brand-blue/10 to-brand-magenta/10 p-6 rounded-lg border border-brand-blue/30">
              <h4 className="text-xl font-bold text-brand-blue mb-3">Fintech & Blockchain Technologies</h4>
              <ul className="space-y-2 text-sm text-foreground/80 font-body">
                <li>✓ Cryptocurrency and blockchain fundamentals with practical implementation</li>
                <li>✓ High-frequency trading algorithms and computational finance</li>
                <li>✓ AI-driven fraud detection and compliance automation</li>
                <li>✓ Direct exposure to fintech platforms used by leading financial institutions</li>
              </ul>
            </div>

            {/* Career Opportunities */}
            <div className="bg-gradient-to-r from-brand-orange/10 to-brand-magenta/10 p-6 rounded-lg border border-brand-orange/30">
              <h4 className="text-xl font-bold text-brand-orange mb-3">Career Opportunities & Salary Premium</h4>
              <ul className="space-y-2 text-sm text-foreground/80 font-body">
                <li>✓ Financial Data Analyst → Senior Analyst (₹15-30 LPA with GPU/ML skills)</li>
                <li>✓ Fintech Developer → Quant Engineer (₹18-40 LPA with blockchain expertise)</li>
                <li>✓ 20-35% salary premium for B.Com graduates with fintech and data science credentials</li>
                <li>✓ Direct pathways to Goldman Sachs, Morgan Stanley, JP Morgan, and Indian fintech unicorns</li>
              </ul>
            </div>

            {/* Why It Matters */}
            <div className="bg-gradient-to-r from-brand-magenta/10 to-brand-blue/10 p-6 rounded-lg border border-brand-magenta/30">
              <h4 className="text-xl font-bold text-brand-magenta mb-3">Competitive Distinction</h4>
              <ul className="space-y-2 text-sm text-foreground/80 font-body">
                <li>✓ Rare GPU-accelerated fintech infrastructure in Indian commerce education</li>
                <li>✓ Industry-ready skills matching global financial services standards</li>
                <li>✓ Access to cutting-edge tools used by top investment banks and fintech startups</li>
                <li>✓ Direct qualification for high-paying roles in data-driven finance and emerging fintech sectors</li>
              </ul>
            </div>
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
                    <ChevronRight className="w-3 h-3 text-brand-magenta mt-1" />
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
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" alt="Contact B.Com" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Department Contact</CardTitle>
                <CardDescription className="font-body">School of Commerce & Management</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <div className="flex items-center justify-between"><span>Email</span><a className="font-medium hover:underline" href="mailto:admissions@dsu.edu.in">admissions@dsu.edu.in</a></div>
                <div className="flex items-center justify-between"><span>Phone</span><span className="font-medium">+91-080-49092935</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-3 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl p-5 border border-brand-magenta/20 bg-brand-magenta/5">
            <h3 className="headline-3 mb-3 font-display">Join B.Com at DSU</h3>
            <p className="text-foreground mb-6 font-body">Master financial technology and build a career in the high-growth fintech and finance sectors with industry-ready skills.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://admissions.dsu.edu.in/"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="bg-brand-gradient text-foreground">Apply Now<GraduationCap className="w-4 h-4 ml-2" /></Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
