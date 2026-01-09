import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  GraduationCap,
  BookOpen,
  Stethoscope,
  Heart,
  Users,
  Trophy,
  Microscope,
  Award,
  ChevronRight,
  Volume2,
  VolumeX,
} from "lucide-react";

export default function Nursing() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = isMuted;
  }, [isMuted]);

  const specializations = [
    { icon: Heart, label: "General Nursing" },
    { icon: Microscope, label: "Critical Care" },
    { icon: Users, label: "Community Health" },
    { icon: Stethoscope, label: "Medical-Surgical" },
    { icon: Trophy, label: "Pediatric Nursing" },
    { icon: Award, label: "Mental Health" },
  ];

  const highlights = [
    "State-of-the-art simulation labs with high-fidelity manikins and advanced equipment",
    "Clinical rotations at affiliated hospitals and healthcare centers",
    "International exposure through global certifications and exchange programmes",
    "Project-based learning focusing on patient care excellence",
    "Research opportunities in nursing science and healthcare innovation",
    "Mentorship by experienced nursing educators and clinical practitioners",
  ];

  const careers = [
    "Registered Nurse → Nurse Manager → Chief Nurse Officer",
    "Clinical Specialist → Healthcare Administrator → Director of Nursing Services",
    "International opportunities: USA, UK, Canada, Middle East (high demand, ₹18-30 LPA+)",
    "100% placements; Graduates placed at leading hospitals, healthcare organizations worldwide",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="dept-hero-section relative">
        <div className="h-[65vh] w-full overflow-hidden">
          <video
            ref={videoRef}
            src="https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2F0e3142955d064bcb9e612579c54c1630?alt=media&token=559d7d84-efa6-4617-8c6f-8e5305f8754b&apiKey=4aa279a8430d441dba9c55f659831878"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            style={{
              filter: "brightness(1.1) contrast(1.1) saturate(1.15)",
              objectPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <button
            onClick={toggleMute}
            className="absolute top-8 right-8 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white backdrop-blur-sm border border-white/20"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <VolumeX className="h-5 w-5" />
            ) : (
              <Volume2 className="h-5 w-5" />
            )}
          </button>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-3 pb-20 md:pb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 rounded-full border border-white/20 mb-4 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white font-display">College of Nursing Sciences</span>
            </div>
            <h1 className="text-xs sm:text-base md:text-base text-white/80 mb-2 sm:mb-6 leading-tight font-display">Compassion, Care & Clinical Excellence</h1>
            <div className="mt-6 flex flex-wrap gap-2">
              {specializations.map((s, i) => (
                <span key={i} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs backdrop-blur">
                  <s.icon className="w-3.5 h-3.5" /> {s.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-background relative max-w-7xl mx-auto px-3 w-full py-6 sm:py-8">
        <div className="hero-title-outside max-w-2xl">
          <p className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-1 sm:mb-4 uppercase tracking-widest font-display">
            College of Nursing Sciences
          </p>
          <h1 className="text-xs sm:text-base md:text-base text-foreground/80 mb-2 sm:mb-6 leading-tight font-display">
            Compassion, Care & Clinical Excellence
          </h1>
        </div>

        <div className="flex flex-row gap-2 sm:gap-4">
          <a
            href="https://admissions.dsu.edu.in/"
            target="_blank"
            rel="noreferrer"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Button
              size="sm"
              className="sm:size-lg bg-white hover:bg-white/90 text-brand-orange hover:text-brand-orange/80 px-4 sm:px-8 py-2 sm:py-6 text-xs sm:text-base font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
            >
              Apply Now
              <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <a
            href="https://dsu.edu.in/virtual-tour/"
            target="_blank"
            rel="noreferrer"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Button
              size="sm"
              className="sm:size-lg bg-white hover:bg-white/90 text-brand-orange hover:text-brand-orange/80 px-4 sm:px-8 py-2 sm:py-6 text-xs sm:text-base font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
            >
              Virtual Tour
            </Button>
          </a>
        </div>
      </div>

      {/* Programs Offered */}
      <section className="px-3 py-8 bg-gradient-to-r from-brand-magenta/5 via-brand-blue/5 to-brand-orange/5 border-y border-border/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="headline-2 font-display mb-2">Programs Offered</h2>
            <p className="text-foreground/80 font-body">Comprehensive nursing education with clinical immersion, research, and global exposure</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* B.Sc Nursing */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-5 h-5 text-brand-magenta" />
                  <Badge className="bg-brand-magenta/20 text-brand-magenta border-brand-magenta/30">Undergraduate</Badge>
                </div>
                <CardTitle className="font-display">B.Sc Nursing</CardTitle>
                <CardDescription className="font-body">4-Year Program</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground font-body">Holistic nursing education covering:</p>
                <div className="flex flex-wrap gap-2">
                  {["Clinical Rotations", "Simulation Labs", "Global Certifications", "Patient Care", "Community Health", "Research Projects"].map((spec, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">{spec}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* M.Sc Nursing */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-5 h-5 text-brand-blue" />
                  <Badge className="bg-brand-blue/20 text-brand-blue border-brand-blue/30">Postgraduate</Badge>
                </div>
                <CardTitle className="font-display">M.Sc Nursing</CardTitle>
                <CardDescription className="font-body">2-Year Program</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground font-body">Leadership-oriented specialisations:</p>
                <div className="flex flex-wrap gap-2">
                  {["Clinical Excellence", "Nursing Education", "Research Thesis", "Healthcare Administration", "Leadership Development"].map((spec, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">{spec}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-brand-orange" />
                  <Badge className="bg-brand-orange/20 text-brand-orange border-brand-orange/30">Overview</Badge>
                </div>
                <CardTitle className="font-display">Why Choose DBAS Nursing?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-foreground font-body">
                <p>✓ State-of-the-art simulation labs and clinical facilities</p>
                <p>✓ 100% placement rate at leading hospitals worldwide</p>
                <p>✓ International exposure and global certifications</p>
                <p>✓ Experienced faculty and mentorship</p>
                <p>✓ Research opportunities in healthcare innovation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Nursing */}
      <section className="px-3 py-12 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="headline-2 font-display mb-4">Why Choose Nursing at DSU?</h2>
          <p className="text-foreground/80 font-body max-w-3xl mb-8">
            Our nursing programme prepares you to be a compassionate, competent healthcare professional with global standards and ethical responsibility.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((highlight, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-lg border border-brand-magenta/20 bg-brand-magenta/5">
              <Stethoscope className="h-6 w-6 text-brand-magenta flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground font-body">{highlight}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Career Pathways */}
      <section className="px-3 py-12 bg-gradient-to-r from-brand-magenta/5 via-brand-blue/5 to-brand-orange/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="headline-2 font-display mb-4">Career Pathways & Placements</h2>
            <p className="text-foreground/80 font-body max-w-3xl">
              Our graduates are highly sought-after across India and globally. With 100% placement record, they pursue careers in clinical practice, research, education, and healthcare administration.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {careers.map((career, i) => (
              <div key={i} className="p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <Trophy className="h-5 w-5 text-brand-orange flex-shrink-0 mt-1" />
                  <p className="text-sm text-foreground font-body">{career}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-3 py-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border border-brand-magenta/20 bg-brand-magenta/5">
            <CardHeader>
              <CardTitle className="font-display text-lg">Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm font-body">
              <div>
                <p className="text-foreground/70 text-xs uppercase tracking-wide">Email</p>
                <p className="font-medium text-foreground">nursing@dsu.edu.in</p>
              </div>
              <div>
                <p className="text-foreground/70 text-xs uppercase tracking-wide">Phone</p>
                <p className="font-medium text-foreground">+91-80-49092933</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-brand-blue/20 bg-brand-blue/5">
            <CardHeader>
              <CardTitle className="font-display text-lg">Admissions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm font-body">
              <p>Apply for B.Sc and M.Sc Nursing programmes through the DSU admissions portal.</p>
              <a href="https://admissions.dsu.edu.in/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-brand-magenta hover:text-brand-magenta/80 font-semibold">
                Apply Now <ChevronRight className="h-4 w-4" />
              </a>
            </CardContent>
          </Card>

          <Card className="border border-brand-orange/20 bg-brand-orange/5">
            <CardHeader>
              <CardTitle className="font-display text-lg">Location</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm font-body">
              <div>
                <p className="text-foreground/70 text-xs uppercase tracking-wide">Campus</p>
                <p className="font-medium text-foreground">Kanakapura Road, Bengaluru, Karnataka</p>
              </div>
              <div>
                <p className="text-foreground/70 text-xs uppercase tracking-wide">Hours</p>
                <p className="font-medium text-foreground">Mon–Fri, 9:00 AM – 5:30 PM</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
