import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Mail, MapPin, Clock, Linkedin, ChevronLeft } from "lucide-react";

export default function FacultyRohitKumarSingh() {
  const bg = "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=1600&auto=format&fit=crop"; // robotics lab vibe
  const portrait = "https://www.dsu.edu.in/images/Engineering/CSE-dept/faculty/Rohit_KS.jpg";
  const topics = ["Robotics", "Autonomous Systems", "Embedded ML"];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero with research background and profile card */}
      <section className="relative">
        <div className="h-[36vh] md:h-[42vh] w-full overflow-hidden">
          <img src={bg} alt="Research background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
        <div className="absolute inset-x-0 -bottom-16 z-10">
          <div className="max-w-6xl mx-auto px-6">
            <Card className="rounded-2xl border border-border/50 bg-card/95 backdrop-blur">
              <CardContent className="p-5 md:p-6 flex gap-4 md:gap-6 items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border border-border/50 shadow-sm">
                  <img src={portrait} alt="Rohit Kumar Singh" className="w-full h-full object-cover object-center" />
                </div>
                <div className="flex-1">
                  <div className="text-brand-blue text-xs font-body">Computer Science & Engineering</div>
                  <h1 className="text-2xl md:text-3xl font-bold font-display">Dr. Rohit Kumar Singh</h1>
                  <div className="text-white text-sm">Associate Professor</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {topics.map((t) => (
                      <Badge key={t} className="bg-brand-magenta/10 text-brand-magenta">{t}</Badge>
                    ))}
                  </div>
                </div>
                <Link to="/academics/engineering/computer-science/faculty">
                  <Button variant="outline" className="hidden sm:inline-flex"><ChevronLeft className="w-4 h-4 mr-2"/>Back</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-6 pt-24 pb-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 items-start">
          {/* Left column: Bio & sections */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="border border-border/50 bg-card/50">
              <CardHeader>
                <CardTitle className="font-display">Biography</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-white font-body">
                Builds robust autonomy stacks for field robots. Works at the intersection of sensing, planning and control for real‑world deployment.
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card/50">
              <CardHeader>
                <CardTitle className="font-display">Awards & Honors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm font-body">
                <div>SERB Early Career Award (2022)</div>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card/50">
              <CardHeader>
                <CardTitle className="font-display">Selected Publications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm font-body">
                <div className="leading-relaxed">Learning‑based MPC for Off‑road Navigation. ICRA (2023)</div>
                <div className="leading-relaxed">Robust SLAM under Perception Degradation. RSS (2022)</div>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card/50">
              <CardHeader>
                <CardTitle className="font-display">Teaching</CardTitle>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-4 text-sm font-body">
                <div>
                  <div className="text-white">CSE 635 · Spring 2025</div>
                  <div className="font-medium">Robot Perception & Control</div>
                </div>
                <div>
                  <div className="text-white">CSE 420 · Fall 2024</div>
                  <div className="font-medium">Embedded Systems</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card/50">
              <CardHeader>
                <CardTitle className="font-display">Active Projects</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {[
                  "Autonomous Agriculture Robots",
                  "Warehouse Mobile Manipulation",
                ].map((p) => (
                  <Badge key={p} className="bg-brand-blue/10 text-brand-blue">{p}</Badge>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right column: Contact, Metrics, Education */}
          <div className="space-y-8">
            <Card className="border border-border/50 bg-card/50">
              <CardHeader>
                <CardTitle className="font-display">Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm font-body">
                <div className="flex items-center gap-2 text-white"><MapPin className="w-4 h-4"/> Robotics Lab, Tech Park — 2nd Floor</div>
                <div className="flex items-center gap-2 text-white"><Clock className="w-4 h-4"/> Office Hours: Mon, 3:00–5:00 PM</div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Citations", value: 2150 },
                { label: "h-index", value: 24 },
                { label: "i10-index", value: 40 },
              ].map((s) => (
                <Card key={s.label} className="text-center border border-border/50 bg-card/50">
                  <CardHeader className="py-4">
                    <div className="text-2xl font-bold font-display">{s.value}</div>
                    <CardDescription className="font-body">{s.label}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card className="border border-border/50 bg-card/50">
              <CardHeader>
                <CardTitle className="font-display">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm font-body">
                <div>Ph.D., Robotics — Carnegie Mellon University</div>
                <div>M.S., Electrical Engineering — ETH Zürich</div>
                <div>B.Tech, Electronics — NIT Trichy</div>
              </CardContent>
            </Card>

            <Link to="/academics/engineering/computer-science/faculty" className="block">
              <Button variant="outline" className="w-full"><ChevronLeft className="w-4 h-4 mr-2"/>Back to Faculty</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
