import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  GraduationCap,
  Trophy,
  Award,
  ChevronRight,
  Volume2,
  VolumeX,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { useAutoMuteOnScroll } from "@/hooks/useAutoMuteOnScroll";

export default function PBBScNursing() {
  const highlights = [
    "Bridge program for GNM diploma holders to degree level",
    "Advanced training in medical-surgical and community health nursing",
    "Focus on leadership and nursing education",
    "Enhanced career prospects in clinical and academic settings",
    "Hands-on clinical proficiency enhancement",
    "Research methodology introduction",
  ];

  const careers = [
    "Senior Staff Nurse",
    "Nursing Tutor / Educator",
    "Nursing Supervisor",
    "Clinical Instructor",
    "Public Health Nurse",
    "Critical Care Nurse",
  ];

  function HeroVideo() {
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useAutoMuteOnScroll(videoRef);

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

    return (
      <>
        <div
          ref={containerRef}
          className="hero-video-container relative flex items-center justify-start"
        >
          <video
            ref={videoRef}
            src="https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2F0e3142955d064bcb9e612579c54c1630?alt=media&token=559d7d84-efa6-4617-8c6f-8e5305f8754b&apiKey=4aa279a8430d441dba9c55f659831878"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="metadata"
            crossOrigin="anonymous"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center center",
              filter: "brightness(1.1) contrast(1.1) saturate(1.15)",
              zIndex: 0,
            }}
          />

          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />

          <button
            onClick={toggleMute}
            className="absolute top-4 right-8 z-50 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white backdrop-blur-sm border border-white/20"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <VolumeX className="h-5 w-5" />
            ) : (
              <Volume2 className="h-5 w-5" />
            )}
          </button>

          <div className="hero-title-inside absolute bottom-0 left-0 right-0 z-20 flex items-end justify-start p-3 sm:p-6 max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-magenta/10 rounded-full border border-brand-magenta/20 mb-4 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-brand-magenta" />
                <span className="text-sm font-medium text-brand-magenta font-display">Undergraduate Program</span>
              </div>
              <p className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-1 sm:mb-4 uppercase tracking-widest font-display">
                Post Basic B.Sc Nursing
              </p>
              <h1 className="text-xs sm:text-base md:text-base text-white/80 mb-2 sm:mb-6 leading-tight font-display">
                Advancing Nursing Proficiency
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-background relative max-w-7xl mx-auto px-3 w-full py-6 sm:py-8">
          <div className="hero-title-outside max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-magenta/10 rounded-full border border-brand-magenta/20 mb-4">
              <Sparkles className="w-4 h-4 text-brand-magenta" />
              <span className="text-sm font-medium text-brand-magenta font-display">Undergraduate Program</span>
            </div>
            <p className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-1 sm:mb-4 uppercase tracking-widest font-display">
              Post Basic B.Sc Nursing
            </p>
            <h1 className="text-xs sm:text-base md:text-base text-foreground/80 mb-2 sm:mb-6 leading-tight font-display">
              Advancing Nursing Proficiency
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
                className="sm:size-lg bg-white hover:bg-white/90 text-brand-magenta hover:text-brand-magenta/90 px-4 sm:px-8 py-2 sm:py-6 text-xs sm:text-base font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
              >
                Apply Now
                <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative" id="top">
        <HeroVideo />
      </section>

      {/* Program Details */}
      <section className="px-3 py-8 border-y border-border/30 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="headline-3 font-display mb-4">Program Overview</h2>
                <div className="prose text-foreground/80 font-body text-sm leading-relaxed space-y-4">
                  <p>
                    The Post Basic B.Sc Nursing is a two-year undergraduate program designed to bridge the gap between diploma-level education and a bachelor's degree in nursing. It is tailored for General Nursing and Midwifery (GNM) diploma holders who wish to upgrade their skills and qualifications to meet the evolving demands of the healthcare sector.
                  </p>
                  <p>
                    This program focuses on advanced medical-surgical nursing, community health, and mental health nursing, along with an introduction to nursing education and administration. It empowers nurses with the scientific knowledge and practical expertise required for specialized clinical roles and leadership positions.
                  </p>
                </div>
              </div>

              <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-display">Eligibility Criteria</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-magenta flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/90 font-body leading-relaxed">
                      Pass in GNM after 10+2 or equivalent examination preferably with Science subjects with 50% marks in aggregate. Candidates should be a registered Nurse and registered Midwife or equivalent with any State Nursing Registration Council. Candidates should have completed their GNM course.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-display">Key Facts</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4 text-sm font-body">
                  <div className="flex items-center justify-between border-b border-border/20 pb-2">
                    <span className="text-foreground/60">Duration</span>
                    <span className="font-semibold text-foreground">2 Years</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-border/20 pb-2">
                    <span className="text-foreground/60">Level</span>
                    <span className="font-semibold text-foreground">Undergraduate</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground/60">Intake</span>
                    <span className="font-semibold text-foreground">Annual</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border/50 bg-brand-magenta/5 border-brand-magenta/20">
                <CardHeader>
                  <CardTitle className="text-lg font-display">Why This Program?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {highlights.slice(0, 4).map((h, i) => (
                    <div key={i} className="flex gap-2 text-sm text-foreground/80">
                      <Zap className="w-4 h-4 text-brand-magenta flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Career Prospects */}
      <section className="px-3 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="headline-3 font-display mb-6">Career Pathways</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {careers.map((career, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-card/50 hover:border-brand-magenta/30 transition-colors">
                <Trophy className="w-5 h-5 text-brand-orange" />
                <span className="font-medium text-sm">{career}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-3 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl p-8 border border-brand-magenta/20 bg-gradient-to-b from-brand-magenta/5 to-transparent">
            <h3 className="headline-3 mb-4 font-display">Advance Your Nursing Career</h3>
            <p className="text-foreground/80 mb-8 font-body max-w-xl mx-auto">
              Upgrade your qualifications with DSU's Post Basic B.Sc Nursing program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://admissions.dsu.edu.in/" target="_blank" rel="noreferrer">
                <Button size="lg" className="bg-brand-gradient text-foreground font-semibold px-8">
                  Apply Now <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <a href="https://dsu.edu.in/virtual-tour/" target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline" className="border-brand-magenta/30 hover:bg-brand-magenta/10">
                  Virtual Tour
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
