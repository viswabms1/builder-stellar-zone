import { Link as RouterLink } from "react-router-dom";
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
import { DeanSection, type DeanInfo } from "@/components/DeanSection";
import { useAutoMuteOnScroll } from "@/hooks/useAutoMuteOnScroll";

const PRINCIPAL_INFO: DeanInfo = {
  name: "Dr. Shejila CH",
  title: "Principal (I/C)",
  position: "College of Nursing Sciences",
  photo: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F4a2f8f1c18424e98bc7edb721a95a5f2?format=webp&width=800",
  message: [
    "Welcome to College of Nursing Sciences, DSU!",
    "As the Principal of this esteemed institution, I am proud to lead a community of dedicated educators, enthusiastic learners, and committed healthcare professionals. Our college is renowned for its robust academic programs, cutting-edge research, and comprehensive clinical training, all designed to prepare our students to become compassionate and skilled nursing professionals.",
    "Our mission is to provide a nurturing and dynamic learning environment that fosters intellectual growth, ethical practice, and a commitment to lifelong learning. We believe that nursing is not just a profession but a calling, and our curriculum reflects this philosophy by integrating scientific knowledge with holistic care practices.",
    "At College of Nursing Sciences, DSU we offer a range of programs from undergraduate to doctoral levels, each designed to meet the diverse needs of the healthcare sector. Our state-of-the-art facilities, experienced faculty, and strong partnerships with healthcare institutions ensure that our students receive the best possible education and hands-on experience.",
    "We are committed to promoting an inclusive and supportive atmosphere where every student can thrive. Our faculty and staff are here to support you every step of the way, from your first day of classes to your transition into the professional world.",
    "I invite you to explore our website and learn more about our programs, faculty, research initiatives, and the many opportunities that await you here. Whether you are a prospective student, a current student, a parent, or a healthcare professional, we are here to assist you and answer any questions you may have.",
    "BEST WISHES !"
  ],
  borderColor: "border-brand-magenta/20",
  bgColor: "bg-brand-magenta/5",
};

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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      const isVisible =
        rect && rect.top < window.innerHeight && rect.bottom > 0;
      if (isVisible) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    };

    video.addEventListener("ended", handleEnded);
    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  const specializations = [
    { icon: Heart, label: "General Nursing" },
    { icon: Microscope, label: "Critical Care" },
    { icon: Users, label: "Community Health" },
    { icon: Stethoscope, label: "Medical-Surgical" },
    { icon: Trophy, label: "Pediatric Nursing" },
    { icon: Award, label: "Mental Health" },
  ];

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
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 rounded-full border border-white/20 mb-4 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white font-display">College of Nursing Sciences</span>
            </div>
            <p className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-1 sm:mb-4 uppercase tracking-widest font-display">
              College of Nursing Sciences
            </p>
            <h1 className="text-xs sm:text-base md:text-base text-white/80 mb-2 sm:mb-6 leading-tight font-display">
              Compassion, Care & Clinical Excellence
            </h1>
            <div className="mt-4 sm:mt-6 flex flex-wrap gap-1 sm:gap-2">
              {specializations.map((s, i) => (
                <span key={i} className="inline-flex items-center gap-1 px-2 py-0.5 sm:gap-2 sm:px-3 sm:py-1 rounded-full bg-white/10 text-white text-xs backdrop-blur">
                  <s.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> {s.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

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
    </>
  );
}

export default function Nursing() {
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
      <section className="relative" id="top">
        <HeroVideo />
      </section>

      {/* Principal's Message Section */}
      <DeanSection dean={PRINCIPAL_INFO} />

      {/* Programs Section */}
      <section id="programs" className="relative overflow-hidden px-3 py-8">
        <div
          className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-brand-magenta/20 via-transparent to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl">Programs Offered</h2>
              <p className="mt-3 text-sm text-foreground font-body max-w-2xl">
                Comprehensive nursing education with clinical immersion, research, and global exposure
              </p>
            </div>
          </div>

          <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-3">
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

            {/* Overview Card */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-brand-orange" />
                  <Badge className="bg-brand-orange/20 text-brand-orange border-brand-orange/30">Overview</Badge>
                </div>
                <CardTitle className="font-display">Why Choose DSU Nursing?</CardTitle>
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
      <section className="px-3 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">Why Choose Nursing at DSU?</h2>
            <p className="text-foreground/80 font-body max-w-3xl mb-8">
              Our nursing programme prepares you to be a compassionate, competent healthcare professional with global standards and ethical responsibility.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {highlights.map((highlight, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-lg border border-brand-magenta/20 bg-brand-magenta/5">
                <Stethoscope className="h-6 w-6 text-brand-magenta flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground font-body">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="px-3 py-8 bg-gradient-to-r from-brand-magenta/5 via-brand-blue/5 to-brand-orange/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">Career Pathways & Placements</h2>
            <p className="text-foreground/80 font-body max-w-3xl">
              Our graduates are highly sought-after across India and globally. With 100% placement record, they pursue careers in clinical practice, research, education, and healthcare administration.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
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

      {/* Related Resources */}
      <section
        id="related-resources"
        className="bg-gradient-to-r from-brand-magenta/5 via-brand-blue/5 to-brand-orange/5 px-3 py-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl">
              Explore More at DSU Nursing
            </h2>
            <p className="mt-3 text-sm text-foreground font-body">
              Discover our clinical excellence, research initiatives, placements and admission pathways
            </p>
          </div>
          <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-4">
            <a
              href="/centre-of-excellence"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-magenta/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-magenta/20 to-brand-magenta/10 flex items-center justify-center">
                  <Award className="h-12 w-12 text-brand-magenta/70 group-hover:text-brand-magenta transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-magenta transition-colors">
                    Clinical Simulation Labs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    State-of-the-art simulation labs and clinical training centers
                  </p>
                </CardContent>
              </Card>
            </a>

            <a
              href="/research"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 flex items-center justify-center">
                  <Microscope className="h-12 w-12 text-brand-blue/70 group-hover:text-brand-blue transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-blue transition-colors">
                    Research & Innovation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    Faculty-led nursing research and healthcare innovation
                  </p>
                </CardContent>
              </Card>
            </a>

            <a
              href="/placements"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-orange/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-orange/20 to-brand-orange/10 flex items-center justify-center">
                  <GraduationCap className="h-12 w-12 text-brand-orange/70 group-hover:text-brand-orange transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-orange transition-colors">
                    Placements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    Career pathways with leading hospitals and healthcare organizations
                  </p>
                </CardContent>
              </Card>
            </a>

            <a
              href="https://admissions.dsu.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-magenta/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-magenta/20 to-brand-magenta/10 flex items-center justify-center">
                  <Heart className="h-12 w-12 text-brand-magenta/70 group-hover:text-brand-magenta transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-magenta transition-colors">
                    Admissions
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p className="text-sm text-foreground/80 font-body">
                    Join DSU Nursing and make a difference in healthcare
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-brand-magenta group-hover:text-brand-magenta/80 transition-colors">
                    Apply Now
                    <ChevronRight className="h-3 w-3" />
                  </span>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Leadership & Resources */}
      <section className="px-3 py-8">
        <div className="mx-auto grid max-w-5xl items-start gap-4 lg:grid-cols-2">
          <Card className="rounded-none border border-brand-magenta/20 bg-brand-magenta/5">
            <CardHeader>
              <CardTitle className="font-display">Contact & Leadership</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 text-sm font-body text-foreground">
              <div>
                <div className="text-foreground/70 text-xs uppercase tracking-wide">
                  Email
                </div>
                <div className="font-medium text-foreground">
                  nursing@dsu.edu.in
                </div>
              </div>
              <div>
                <div className="text-foreground/70 text-xs uppercase tracking-wide">
                  Phone
                </div>
                <div className="font-medium text-foreground">
                  +91-80-49092933
                </div>
              </div>
              <div>
                <div className="text-foreground/70 text-xs uppercase tracking-wide">
                  Campus Address
                </div>
                <div className="font-medium text-foreground">
                  Kanakapura Road, Bengaluru, Karnataka
                </div>
              </div>
              <div>
                <div className="text-foreground/70 text-xs uppercase tracking-wide">
                  Office Hours
                </div>
                <div className="font-medium text-foreground">
                  Mon–Fri, 9:00 AM – 5:30 PM
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-none border border-brand-blue/20 bg-brand-blue/5">
            <CardHeader>
              <CardTitle className="font-display">More Resources</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm font-body">
              <a
                href="https://www.dsu.edu.in/health-sciences/nursing-programs"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-magenta"
              >
                Programs Overview
              </a>
              <a
                href="https://www.dsu.edu.in/health-sciences/nursing-faculty"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-magenta"
              >
                Faculty Directory
              </a>
              <a
                href="https://www.dsu.edu.in/health-sciences/nursing-library"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-magenta"
              >
                Digital Library
              </a>
              <a
                href="https://www.dsu.edu.in/health-sciences/student-hub"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-magenta"
              >
                Student Hub
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
