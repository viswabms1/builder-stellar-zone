import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  CheckCircle2,
  GraduationCap,
  Microscope,
  Heart,
  Zap,
  Brain,
  TrendingUp,
  Award,
  ArrowRight,
} from "lucide-react";

export default function MedicalEngineering() {
  const specializations = [
    { icon: Heart, label: "Biomedical Devices" },
    { icon: Microscope, label: "Biomaterials" },
    { icon: Brain, label: "Medical Imaging" },
    { icon: Zap, label: "Bio-signal Processing" },
  ];

  const highlights = [
    "Comprehensive curriculum in biomedical systems, materials, and devices",
    "Hands-on experience with medical equipment and diagnostic systems",
    "Interdisciplinary approach combining engineering and healthcare",
    "Research opportunities in emerging biomedical technologies",
    "Industry collaborations with healthcare and medical device companies",
    "Internship placements in hospitals, research labs, and medical device companies",
  ];

  const careers = [
    "Biomedical Engineer → Senior Engineer → Project Lead",
    "Medical Device Designer/Specialist",
    "Clinical Engineer in Healthcare facilities",
    "Research and Development roles in pharmaceutical and medical device industries",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative">
        <div className="h-[50vh] md:h-[65vh] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop"
            alt="Department of Medical Engineering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-magenta/10 rounded-full border border-brand-magenta/20 mb-4">
              <Sparkles className="w-4 h-4 text-brand-magenta" />
              <span className="text-sm font-medium text-brand-magenta font-display">Medical Engineering</span>
            </div>
            <h1 className="headline-1 text-white leading-tight font-display">Transform Healthcare with Engineering</h1>
            <p className="subheadline text-white/90 max-w-2xl mt-3 font-body">
              Design and develop innovative solutions that improve human health and healthcare delivery.
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
      <section className="px-3 py-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-5 items-start">
          <div className="lg:col-span-2 space-y-3">
            <h2 className="headline-3 font-display">Overview</h2>
            <p className="text-foreground leading-relaxed font-body">
              Medical Engineering is a specialized discipline that applies engineering principles and techniques to solve healthcare challenges. The B.Tech Medical Engineering program at DSU combines biomedical sciences with engineering innovation to develop cutting-edge medical devices, diagnostic systems, and therapeutic solutions that improve patient care and outcomes.
            </p>
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-display">Curriculum Highlights</CardTitle>
                <CardDescription className="font-body">Designed for future healthcare innovators</CardDescription>
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
                <img src="https://images.unsplash.com/photo-1530497802696-a8ea1b7a1e2e?q=80&w=1200&auto=format&fit=crop" alt="Medical Engineering Lab" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-display">Fast Facts</CardTitle>
                <CardDescription className="font-body">What makes Medical Engineering at DSU special</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm font-body">
                <div className="flex items-center justify-between"><span>Program Type</span><span className="font-medium">B.Tech</span></div>
                <div className="flex items-center justify-between"><span>Duration</span><span className="font-medium">4 Years</span></div>
                <div className="flex items-center justify-between"><span>Industry Focus</span><span className="font-medium">Healthcare & Medical Devices</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="px-3 py-8 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="headline-3 font-display mb-6">Career Pathways</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {careers.map((career, idx) => (
              <Card key={idx} className="border border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <TrendingUp className="w-5 h-5 text-brand-magenta flex-shrink-0 mt-1" />
                    <p className="text-foreground font-body">{career}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-3 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border border-brand-magenta/30 bg-gradient-to-br from-brand-magenta/10 to-brand-magenta/5 backdrop-blur-sm">
            <CardContent className="pt-8">
              <div className="text-center">
                <h2 className="headline-3 font-display mb-3">Ready to Shape the Future of Healthcare?</h2>
                <p className="text-foreground/80 mb-6 font-body">
                  Join DSU's Medical Engineering program and become part of the innovation revolutionizing healthcare.
                </p>
                <a href="https://admissions.dsu.edu.in/" target="_blank" rel="noreferrer">
                  <Button className="bg-brand-gradient text-foreground">
                    Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
