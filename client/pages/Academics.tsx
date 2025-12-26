import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/providers/language-provider";
import { useAutoMuteOnScroll } from "@/hooks/useAutoMuteOnScroll";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  FlaskConical,
  Building,
  Globe,
  Users,
  Award,
  ChevronRight,
  TrendingUp,
  Briefcase,
  Cog,
  Cpu,
  Gavel,
  Stethoscope,
  Palette,
  Film,
  Microscope,
  Laptop,
  PenSquare,
  Presentation,
  Volume2,
  VolumeX,
} from "lucide-react";

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

    video.volume = 0;
    video.muted = true;

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;

      if (currentTime < 2) {
        video.playbackRate = 0.5;
      } else if (currentTime < 4) {
        video.playbackRate = 1;
      } else if (currentTime < 6) {
        video.playbackRate = 0.6;
      } else if (currentTime < 8) {
        video.playbackRate = 5;
      } else if (currentTime < 10) {
        video.playbackRate = 0.8;
      } else if (currentTime < 12) {
        video.playbackRate = 8;
      } else if (currentTime < 14) {
        video.playbackRate = 1.2;
      } else if (currentTime < 16) {
        video.playbackRate = 7;
      } else if (currentTime < 18) {
        video.playbackRate = 0.7;
      } else if (currentTime < 20) {
        video.playbackRate = 9;
      } else if (currentTime < 22) {
        video.playbackRate = 1.5;
      } else if (currentTime < 24) {
        video.playbackRate = 6;
      } else if (currentTime < 26) {
        video.playbackRate = 0.9;
      } else if (currentTime < 28) {
        video.playbackRate = 10;
      } else if (currentTime < 30) {
        video.playbackRate = 2;
      } else if (currentTime < 32) {
        video.playbackRate = 5.5;
      } else if (currentTime < 34) {
        video.playbackRate = 1.1;
      } else if (currentTime < 36) {
        video.playbackRate = 7.5;
      } else if (currentTime < 38) {
        video.playbackRate = 0.8;
      } else if (currentTime < 40) {
        video.playbackRate = 8.5;
      } else if (currentTime < 42) {
        video.playbackRate = 1.3;
      } else if (currentTime < 44) {
        video.playbackRate = 6.5;
      } else {
        video.playbackRate = 1;
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden" ref={containerRef}>
      <video
        ref={videoRef}
        src="https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2F039b67f729094553afc521bcbf44f524?alt=media&token=f3f572a0-3afd-4a0a-9570-de176cc33653&apiKey=4aa279a8430d441dba9c55f659831878"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        crossOrigin="anonymous"
        volume={0}
        className="w-full h-full object-cover"
        style={{
          filter: "brightness(1.1) contrast(1.15) saturate(1.2)"
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none"></div>

      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-magenta/5 rounded-full filter blur-3xl opacity-60 animate-float pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full filter blur-3xl opacity-60 animate-float pointer-events-none" style={{ animationDelay: "2s" }}></div>

      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,.03) 0px, rgba(255,255,255,.03) 1px, transparent 1px, transparent 2px)",
        animation: "scanlines 8s linear infinite"
      }}></div>

      <style>{`
        @keyframes scanlines {
          0% { transform: translateY(0); }
          100% { transform: translateY(10px); }
        }
      `}</style>

      <button
        onClick={toggleMute}
        className="absolute top-4 right-8 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white backdrop-blur-sm border border-white/20"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="h-5 w-5" />
        ) : (
          <Volume2 className="h-5 w-5" />
        )}
      </button>
    </div>
  );
}

export default function Academics() {
  const { t } = useLanguage();

  const schoolsData = [
    {
      icon: Cog,
      title: "Engineering",
      image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ff68b38f444334f6a9d6f31196dc787af?format=webp&width=800",
      programs: [
        "B.Tech CSE",
        "B.Tech Mechanical",
        "B.Tech ECE",
        "B.Tech Aerospace",
      ],
      color: "orange",
      href: "/academics/engineering",
    },
    {
      icon: Cpu,
      title: "Computer Applications",
      image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F81d450f810104dc8926ff033cbb8ec87?format=webp&width=800",
      programs: [
        "BCA",
        "B.Sc Data Science",
        "MCA",
        "M.Sc Data Science",
      ],
      color: "magenta",
      href: "/academics/computer-applications",
    },
    {
      icon: Gavel,
      title: "School of Law",
      image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Faa5e530144f148c29a6935c9777759b3?format=webp&width=800",
      programs: [
        "B.B.A., LL.B.",
        "B.A., LL.B.",
        "LL.B.",
        "Research Centres",
      ],
      color: "blue",
      href: "/academics/law",
    },
    {
      icon: Briefcase,
      title: "Commerce & Management Studies",
      image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F7827db3aa95d45a389a5d0bdeb29d463?format=webp&width=800",
      programs: ["B.Com", "BBA", "MBA", "Doctoral Programmes"],
      color: "orange",
      href: "/academics/management-studies",
    },
    {
      icon: FlaskConical,
      title: "Basic & Applied Sciences",
      image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ff5cde141ec88434abe5b7909f2bf9710?format=webp&width=800",
      programs: [
        "B.Sc Biological Sciences",
        "B.Sc Data Science",
        "M.Sc Biological Sciences",
        "M.Sc Data Science",
      ],
      color: "magenta",
      href: "/academics/basic-applied-sciences",
    },
    {
      icon: Stethoscope,
      title: "Health Sciences",
      image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fbc944f36dda948aa94827a23ad35369b?format=webp&width=800",
      programs: [
        "Pharmacy",
        "Physiotherapy",
        "Nursing",
        "Allied Health",
      ],
      color: "blue",
      href: "/academics/health-sciences",
    },
    {
      icon: PenSquare,
      title: "Journalism & Mass Communication",
      image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F0f5e9825dc2342c38fb53f7c1c9ce3a6?format=webp&width=800",
      programs: [
        "BA (JMC)",
        "Podcast Lab",
        "Global Comm Project",
        "Industry Internships",
      ],
      color: "blue",
      href: "/academics/journalism-mass-communication",
    },
    {
      icon: Film,
      title: "Design & Digital Trans Media",
      image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fa2063ac0bf034cbaa9d21546069eeb18?format=webp&width=800",
      programs: [
        "B.Design",
        "UX/UI",
        "Animation & VFX",
        "Game Design",
      ],
      color: "magenta",
      href: "/academics/design/bdesign",
    },
    {
      icon: Microscope,
      title: "Medical Education & Research",
      image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F14e1fd7abfe94ba3a86faff2e81bd88f?format=webp&width=800",
      programs: [
        "MBBS",
        "MD/MS",
        "Biomedical Research",
        "Public Health",
      ],
      color: "blue",
      href: "https://cdsimer.edu.in",
    },
    {
      icon: Presentation,
      title: "Center for Executive Education",
      image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fa0a53cf62f55495e94ddc5c0e3b890d8?format=webp&width=800",
      programs: [
        "Executive MBA",
        "Speaker Series",
        "Leadership Clinics",
        "Industry Associations",
      ],
      color: "blue",
      href: "/academics/cee",
    },
    {
      icon: Globe,
      title: "Online Degree Programs",
      image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fedd2e018f6c34d60a22bc6202d6d86c4?format=webp&width=800",
      programs: ["BBA", "BCA", "B.Com"],
      color: "orange",
      href: "https://dsuonline.com",
    },
  ];

  const colorClasses = {
    orange: { bg: 'bg-gradient-to-br from-orange-500/10 to-orange-600/5', border: 'border-orange-500/30', text: 'text-orange-500', badge: 'bg-orange-500/30 text-foreground border-orange-500/50' },
    magenta: { bg: 'bg-gradient-to-br from-brand-magenta/10 to-pink-600/5', border: 'border-brand-magenta/30', text: 'text-brand-magenta', badge: 'bg-brand-magenta/30 text-foreground border-brand-magenta/50' },
    blue: { bg: 'bg-gradient-to-br from-blue-500/10 to-cyan-600/5', border: 'border-blue-500/30', text: 'text-blue-500', badge: 'bg-blue-500/30 text-foreground border-blue-500/50' },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Video Background */}
      <section className="relative w-full h-screen flex items-end md:items-center justify-start overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <HeroVideo />
        </div>

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto px-3 w-full z-10 pb-20 md:pb-0">
          <div className="max-w-2xl">
            <p className="text-sm md:text-base text-white/80 mb-4 uppercase tracking-widest font-display">
              Explore Excellence
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-display">
              Academic Programs <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 bg-clip-text text-transparent">That Transform</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://admissions.dsu.edu.in/"
                target="_blank"
                rel="noreferrer"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-orange-600 hover:text-orange-700 px-8 py-6 text-base font-semibold font-display transition-all duration-300 group border-2 border-white"
                >
                  Start Exploring
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Schools & Colleges - Modernized Section */}
      <section className="px-3 py-10 relative bg-gradient-to-b from-background via-brand-orange/2 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/20 mb-8">
              <BookOpen className="w-4 h-4 text-orange-500 mr-2" />
              <span className="text-sm font-medium text-orange-500">Our Schools</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Schools </span>
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-600 bg-clip-text text-transparent">
                under Dayananda Sagar University
              </span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-display">
              Choose from our diverse range of academic schools, each offering cutting-edge programs and world-class faculty
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {schoolsData.map((school, index) => {
              const colors = colorClasses[school.color as keyof typeof colorClasses];
              
              const cardElement = (
                <div className={`group h-full rounded-xl border ${colors.border} ${colors.bg} overflow-hidden backdrop-blur-sm hover:shadow-xl hover:shadow-brand-magenta/20 transition-all duration-500 hover:-translate-y-2 flex flex-col`}>
                  {/* Image Section */}
                  <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-foreground/5 to-foreground/10">
                    <img
                      src={school.image}
                      alt={school.title}
                      className={`h-full w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                        school.title === "Online Degree Programs"
                          ? "object-contain bg-white/5"
                          : school.title === "Computer Applications"
                          ? "object-cover object-top"
                          : "object-cover"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-black/40 backdrop-blur px-3 py-1.5 text-foreground text-xs font-medium pointer-events-none">
                      <school.icon className="w-4 h-4" /> School
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-3 flex flex-col justify-between">
                    <div>
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-brand-magenta transition-colors leading-tight font-display">
                          {school.title}
                        </h3>
                      </div>

                      <div className="space-y-3">
                        <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">
                          Key Programs:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {school.programs.slice(0, 4).map((program, idx) => (
                            <Badge
                              key={idx}
                              className={`text-xs font-medium ${colors.badge} border cursor-default hover:bg-opacity-75 transition-all`}
                            >
                              {program}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-6">
                      <button className="w-full text-foreground font-semibold text-sm flex items-center justify-between gap-2 py-2 px-3 rounded-lg hover:bg-foreground/5 group-hover:text-brand-magenta transition-all group/btn">
                        Explore School
                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              );

              return (
                <div key={index}>
                  {school.href ? (
                    school.href.startsWith("http") ? (
                      <a
                        href={school.href}
                        target="_blank"
                        rel="noreferrer"
                        className="block"
                      >
                        {cardElement}
                      </a>
                    ) : (
                      <Link
                        to={school.href}
                        className="block"
                      >
                        {cardElement}
                      </Link>
                    )
                  ) : (
                    cardElement
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* CTA Section - Modernized */}
      <section className="px-3 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-orange-500/10 via-red-600/10 to-pink-500/10 rounded-3xl p-12 border border-orange-500/20 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-magenta/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Ready to
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  {" "}
                  Begin Your Journey
                </span>
                ?
              </h2>
              <p className="text-xl text-foreground/80 mb-8 max-w-2xl font-display">
                Explore our academic programs and find the perfect fit for your career aspirations. Join thousands of students who have transformed their futures at DSU.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://admissions.dsu.edu.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 via-red-600 to-pink-500 text-foreground px-12 py-6 text-lg font-semibold rounded-xl hover:opacity-90 transition-all duration-300"
                  >
                    Apply Now
                    <GraduationCap className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <a
                  href="https://dsu.edu.in/virtual-tour/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-transparent text-orange-500 hover:bg-transparent hover:text-orange-500 px-12 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
                  >
                    Virtual Tour
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "Merit Scholarships",
                  "Industry Internships",
                  "Global Exposure",
                  "Career Support",
                ].map((badge, index) => (
                  <Badge
                    key={index}
                    className="px-4 py-2 text-xs font-medium bg-foreground/10 border border-foreground/20 hover:bg-foreground/20 transition-all"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
