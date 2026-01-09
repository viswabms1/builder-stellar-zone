import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
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
  CheckCircle2,
  CalendarDays,
  Zap,
  Download,
  ChevronDown,
} from "lucide-react";
import { useAutoMuteOnScroll } from "@/hooks/useAutoMuteOnScroll";

export default function BScNursing() {
  const highlights = [
    "State-of-the-art simulation labs with high-fidelity manikins",
    "Clinical rotations at affiliated hospitals and healthcare centers",
    "International exposure through global certifications",
    "Project-based learning focusing on patient care excellence",
    "Research opportunities in nursing science",
    "Mentorship by experienced nursing educators",
  ];

  const careers = [
    "Registered Nurse (RN)",
    "Nurse Manager / Supervisor",
    "Clinical Nurse Specialist",
    "Community Health Nurse",
    "Military Nurse",
    "Industrial Nurse",
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
                Basic B.Sc Nursing
              </p>
              <h1 className="text-xs sm:text-base md:text-base text-white/80 mb-2 sm:mb-6 leading-tight font-display">
                Compassion, Care & Clinical Excellence
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
              Basic B.Sc Nursing
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
                    The Basic B.Sc Nursing program is meticulously designed to equip students with the knowledge, skills, and competencies necessary to excel as qualified nurses in diverse healthcare settings. The curriculum emphasizes a balanced integration of theoretical foundations and practical clinical exposure to ensure a comprehensive learning experience.
                  </p>
                  <p>
                    To achieve this, the program adopts innovative and modern teaching and learning methodologies that cater to different learning styles and professional requirements. These methodologies include interactive lectures, case-based learning, simulation labs, problem-solving exercises, and evidence-based practices.
                  </p>
                  <p>
                    Clinical training is an integral component of the program, offering students hands-on experience in various healthcare environments, such as hospitals, community clinics, and specialty care centers. Under the guidance of experienced faculty and practitioners, students gain practical insights into patient care, medical procedures, and teamwork in high-pressure situations.
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
                      Pass in 10+2, A Level, IB, American 12th grade or equivalent with Physics, Chemistry, Biology and English and a minimum of 45% marks taken together in Physics, Chemistry, Biology and English.
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
                    <span className="font-semibold text-foreground">4 Years</span>
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
            <h3 className="headline-3 mb-4 font-display">Ready to Start Your Nursing Journey?</h3>
            <p className="text-foreground/80 mb-8 font-body max-w-xl mx-auto">
              Join DSU's College of Nursing Sciences and become a compassionate, skilled healthcare professional.
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
