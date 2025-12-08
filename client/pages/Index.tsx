import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/providers/language-provider";
import { indexTranslations } from "@/lib/i18n-extended";
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
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Building,
  FlaskConical,
  TrendingUp,
  Globe,
  Star,
  ChevronRight,
  Cog,
  Cpu,
  Gavel,
  Briefcase,
  Stethoscope,
  Palette,
  Film,
  Microscope,
  CalendarDays,
  Newspaper,
  Laptop,
  X,
  Volume2,
  VolumeX,
} from "lucide-react";

function HeroVideo() {
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

    // Play video at normal speed
    video.playbackRate = 1;
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = isMuted ? 0 : 1;
    video.muted = isMuted;
  }, [isMuted]);

  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Video with AI-enhanced effects */}
      <video
        ref={videoRef}
        src="https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2F389ede098f8743368a37b080b1969b8a?alt=media&token=101276cc-1be0-485d-a4a8-86f1e71c260f&apiKey=4aa279a8430d441dba9c55f659831878"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        style={{
          filter: "brightness(1.1) contrast(1.15) saturate(1.2)"
        }}
      />

      {/* Animated Gradient Overlay - AI Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none"></div>

      {/* Animated Corner Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-magenta/5 rounded-full filter blur-3xl opacity-60 animate-float pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full filter blur-3xl opacity-60 animate-float pointer-events-none" style={{ animationDelay: "2s" }}></div>

      {/* Subtle Scan Line Effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,.03) 0px, rgba(255,255,255,.03) 1px, transparent 1px, transparent 2px)",
        animation: "scanlines 8s linear infinite"
      }}></div>

      {/* Mute/Unmute Button */}
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

      <style>{`
        @keyframes scanlines {
          0% { transform: translateY(0); }
          100% { transform: translateY(10px); }
        }
      `}</style>

    </div>
  );
}

function VideoWithFrameCapture({
  src,
  rotate = false,
  poster,
  onPlay,
  onPause,
  onEnded
}: {
  src: string;
  rotate?: boolean;
  poster?: string;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // If a poster is provided, use it directly
    if (poster) {
      video.poster = poster;
      return;
    }

    let timeoutId: NodeJS.Timeout;

    const captureFrame = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth || 640;
        canvas.height = video.videoHeight || 360;
        const ctx = canvas.getContext("2d");
        if (ctx && video.videoWidth && video.videoHeight) {
          ctx.drawImage(video, 0, 0);
          const posterUrl = canvas.toDataURL("image/jpeg", 0.9);
          video.poster = posterUrl;
        }
      } catch (error) {
        console.error("Failed to capture video frame:", error);
      }
      video.removeEventListener("seeked", captureFrame);
    };

    const onLoadedMetadata = () => {
      video.addEventListener("seeked", captureFrame);
      // Try to capture at 1 second if available, otherwise use 0.66
      const captureTime = Math.min(1, video.duration * 0.3);
      video.currentTime = captureTime;
    };

    video.addEventListener("loadedmetadata", onLoadedMetadata);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("seeked", captureFrame);
    };
  }, [src, poster]);

  return (
    <div className={rotate ? "flex items-center justify-center overflow-hidden" : ""}>
      <video
        ref={videoRef}
        src={src}
        className={`w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500 ${rotate ? "rotate-[-90deg]" : ""}`}
        controls
        controlsList="nodownload"
        preload="auto"
        crossOrigin="anonymous"
        onPlay={onPlay}
        onPause={onPause}
        onEnded={onEnded}
      />
    </div>
  );
}

function NewsModal({ newsItem, onClose }: { newsItem: any; onClose: () => void }) {
  if (!newsItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur p-4">
      <div className="relative bg-card rounded-3xl border border-border/50 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {newsItem.isVideo ? (
          <VideoWithFrameCapture src={newsItem.image} rotate={newsItem.rotate} poster={newsItem.poster} />
        ) : (
          <img
            src={newsItem.image}
            alt={newsItem.title}
            className="w-full h-auto max-h-96 object-cover rounded-t-3xl"
          />
        )}

        <div className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge
              className={`${
                newsItem.color === "brand-orange"
                  ? "bg-brand-orange/20 text-brand-orange"
                  : newsItem.color === "brand-magenta"
                    ? "bg-brand-magenta/20 text-brand-magenta"
                    : "bg-brand-blue/20 text-brand-blue"
              }`}
            >
              {newsItem.category}
            </Badge>
            <div className="flex items-center text-foreground/60 text-xs font-body">
              <CalendarDays className="w-4 h-4 mr-1" /> {newsItem.date}
            </div>
          </div>
          <h2 className="text-3xl font-semibold text-foreground mb-4 font-display">
            {newsItem.title}
          </h2>
          <p className="text-foreground/80 text-lg font-body">{newsItem.excerpt}</p>
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  const [selectedNews, setSelectedNews] = useState<any>(null);
  const [featuredNewsIndex, setFeaturedNewsIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);
  const [isEventInteracting, setIsEventInteracting] = useState(false);
  const { t, language } = useLanguage();

  // All events for rotation
  const allEvents = [
    {
      date: "Nov 28, 2024",
      title: "Annual Research & Innovation Summit",
      category: "Academic Seminar",
      description: "Join leading researchers and innovators to explore cutting-edge developments in AI, Biotechnology, and Sustainable Energy. Network with industry leaders and discover research opportunities.",
      image: "https://images.pexels.com/photos/6476783/pexels-photo-6476783.jpeg",
    },
    {
      date: "Nov 22, 2024",
      title: "Faculty Mentorship Program Launch",
      category: "Mentoring",
      description: "Connect with experienced faculty mentors who will guide your academic journey and professional development. Register to find your mentor today.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    },
    {
      date: "Nov 25, 2024",
      title: "Inter-School Debate Championship",
      category: "Competition",
      description: "Watch brilliant minds compete in our annual inter-school debate championship. Topics include contemporary global issues and societal challenges.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    },
    {
      date: "Nov 29, 2024",
      title: "Industry-Academia Collaboration Meet",
      category: "Networking",
      description: "An exclusive meeting bringing together industry professionals and academic experts to discuss innovation, partnerships, and career opportunities.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    },
    {
      date: "Dec 2, 2024",
      title: "Winter Cultural Festival",
      category: "Celebration",
      description: "Celebrate diverse cultures through performances, food, art, and music. A vibrant showcase of our campus community's talent and traditions.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=400&fit=crop",
    },
    {
      date: "Dec 5, 2024",
      title: "Career Development Workshop",
      category: "Professional",
      description: "Develop essential skills for your career success. Expert sessions on resume building, interview techniques, and professional networking.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    },
  ];

  // Get schools data based on current language
  const getSchoolsData = () => {
    const baseSchools = [
      {
        key: 'engineering',
        icon: Cog,
        color: 'brand-orange',
        delay: '0s',
        href: '/academics/engineering',
        image: 'https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F17666ebfcd8c4186925b49b8970558ea?format=webp&width=800'
      },
      {
        key: 'computerApplications',
        icon: Cpu,
        color: 'brand-magenta',
        delay: '0.1s',
        href: '/academics/computer-applications',
        image: 'https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F56e10ce7c8bf4da88d7366add7229375?format=webp&width=800'
      },
      {
        key: 'law',
        icon: Gavel,
        color: 'brand-blue',
        delay: '0.2s',
        href: '/academics/law',
        image: 'https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F445520435dd04e20ba9f398ca4e0ae4f?format=webp&width=800'
      },
      {
        key: 'management',
        icon: Briefcase,
        color: 'brand-orange',
        delay: '0.3s',
        href: '/academics/management-studies',
        image: 'https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fba5a0f96605e48d49aa10207bab38a90?format=webp&width=800'
      },
      {
        key: 'sciences',
        icon: FlaskConical,
        color: 'brand-magenta',
        delay: '0.4s',
        href: '/academics/basic-applied-sciences',
        image: 'https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fa85d16e44f15476a898d19f52b59f404?format=webp&width=800'
      },
      {
        key: 'health',
        icon: Stethoscope,
        color: 'brand-blue',
        delay: '0.5s',
        href: '/academics/health-sciences',
        image: 'https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F1401fecee5c84b77b542ab214b216a8e?format=webp&width=800'
      },
      {
        key: 'design',
        icon: Film,
        color: 'brand-magenta',
        delay: '0.7s',
        href: '/academics/design/bdesign',
        image: 'https://images.pexels.com/photos/7552450/pexels-photo-7552450.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        key: 'medical',
        icon: Microscope,
        color: 'brand-blue',
        delay: '0.8s',
        href: 'https://cdsimer.edu.in',
        image: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
    ];

    return baseSchools.map((school) => ({
      ...school,
      title: (() => {
        const translatedTitle = t(`academics.${school.key}.title`);
        return translatedTitle.startsWith('School of') ? translatedTitle : `School of ${translatedTitle}`;
      })(),
      description: "",
      programs: [
        t(`academics.${school.key}.programs.0`) || 'Program 1',
        t(`academics.${school.key}.programs.1`) || 'Program 2',
        t(`academics.${school.key}.programs.2`) || 'Program 3',
        t(`academics.${school.key}.programs.3`) || 'Program 4',
      ],
    }));
  };

  // All featured news items for rotation
  const allFeaturedNews = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fbf6a54aff7814535b71eda78a3d5f95e?format=webp&width=800",
      category: "Aerospace",
      title: "DSU-MAK III Soars High at IN-SPACe Model Rocketry Finale",
      excerpt:
        "Our student-built rocket successfully achieves 1200.77m apogee and safe recovery, marking a triumph of innovation and technical mastery in aerospace engineering.",
      date: "Oct 29, 2025",
      color: "brand-magenta",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ff67a08f95a24431783dc54fc189e605b?format=webp&width=800",
      category: "Leadership",
      title: "DSU at 34th Elets World Education Summit 2025",
      excerpt:
        "Dr. Prakash Sheelvanthmath discusses Digital Transformation in Higher Education: Smart Campuses and Online Learning with national education leaders.",
      date: "Nov 5, 2025",
      color: "brand-blue",
    },
    {
      image:
        "https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2Fd56a1c898842468187e8ff3260f0cdda?alt=media&token=6cb58cdf-a202-461d-b774-09ce61d439c3&apiKey=4aa279a8430d441dba9c55f659831878",
      isVideo: true,
      poster: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F85cbfdbb2c9047f0b769200939941be9?format=webp&width=800",
      category: "Events",
      title: "TEDxDSU Returns for Second Edition 2025",
      excerpt:
        "Join us on November 7th for inspiring talks and transformative ideas at TEDxDSU 2025.",
      date: "Nov 7, 2025",
      color: "brand-magenta",
    },
    {
      image:
        "https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2Fee8dd0baa1344765ab26d165e6fc0acc?alt=media&token=37176f13-60ee-4bee-a61c-eff7b954b9a4&apiKey=4aa279a8430d441dba9c55f659831878",
      isVideo: true,
      category: "Research",
      title: "Centre for Space Science & Technology",
      excerpt:
        "State-of-the-art satellite programme with ISO-08 cleanroom, mechanical lab, and ground station. Where ideas take shape and reach for the sky.",
      date: "Oct 26, 2023",
      color: "brand-blue",
    },
    {
      image:
        "https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2F8ee07440d90c4bd685e8ec8da486df8d?alt=media&token=38c290b6-91a4-4825-a4c8-068661623f55&apiKey=4aa279a8430d441dba9c55f659831878",
      isVideo: true,
      category: "Campus Life",
      title: "9th Convocation at DSU: A Day of Reflection, Gratitude, and Pride",
      excerpt:
        "Celebrating the achievements and milestones of our graduating students and faculty.",
      date: "Oct 15, 2025",
      color: "brand-magenta",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fca407f1fd5994b25a3cdb4b5e18e66b6?format=webp&width=800",
      category: "International Relations",
      title: "A Calm November Morning Welcomes the Gentle Charm of Tibet",
      excerpt:
        "DSU hosts distinguished guests from Tibet, fostering cultural exchange and international academic collaboration.",
      date: "Nov 8, 2025",
      color: "brand-blue",
    },
  ];

  // Auto-rotate featured news every 5 seconds (pauses when video is playing)
  useEffect(() => {
    if (isVideoPlaying) {
      return;
    }

    const interval = setInterval(() => {
      setFeaturedNewsIndex((prev) => (prev + 1) % allFeaturedNews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [allFeaturedNews.length, isVideoPlaying]);

  // Auto-rotate events every 5 seconds (pauses when user interacts)
  useEffect(() => {
    if (isEventInteracting) {
      return;
    }

    const interval = setInterval(() => {
      setSelectedEventIndex((prev) => (prev + 1) % allEvents.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [allEvents.length, isEventInteracting]);

  // Get current featured item and remaining items
  const currentFeatured = allFeaturedNews[featuredNewsIndex];
  const remainingNews = allFeaturedNews.filter(
    (_, idx) => idx !== featuredNewsIndex
  );

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section with Full-Screen Video Background */}
      <section className="relative w-full h-[75vh] flex items-end md:items-center justify-start overflow-hidden">
        {/* Full-screen Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <HeroVideo />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-6 w-full z-10 pb-20 md:pb-0">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight font-display">
              Dayananda Sagar University
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-6 leading-tight font-display">
              {t('hero.mainHeading') || "India's AI First University"}
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white/90 mb-12 font-display">
              {t('hero.subheading') || "Powered by NVIDIA"}
            </p>

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
                  {t('hero.applyNow') || "Apply Today"}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a
                href="https://dsu.edu.in/virtual-tour/"
                target="_blank"
                rel="noreferrer"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-6 text-base font-semibold font-display transition-all duration-300"
                >
                  {t('hero.virtualTour') || "Virtual Tour"}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Indicators Section */}
      <section className="px-6 py-16 relative bg-gradient-to-r from-brand-magenta/5 via-brand-orange/5 to-brand-blue/5 border-y border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="headline-2 mb-4">
              Recognized Excellence
            </h2>
            <p className="subheadline text-foreground max-w-3xl mx-auto font-display text-lg">
              Accredited by leading national and international bodies
            </p>
          </div>

          <div className="flex items-center justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fffc582af946b444b924524e96904cc59?format=webp&width=1400"
              alt="Performance Indicators and Accreditations"
              className="w-full max-w-5xl h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Academics Section */}
      <section className="px-6 py-20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="headline-2 mb-6">
              {t('academics.title')}
            </h2>
            <p className="subheadline text-foreground max-w-3xl mx-auto font-display">
              {t('academics.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 auto-rows-max">
            {getSchoolsData().map((school, index) => {
              const styles = [
                { bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
                { bg: 'bg-pink-500/10', border: 'border-pink-500/20' },
                { bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
                { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
                { bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
                { bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
                { bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
                { bg: 'bg-rose-500/10', border: 'border-rose-500/20' },
              ];
              const style = styles[index % styles.length];

              return (
                <div
                  key={index}
                  className={`rounded-none overflow-hidden transition-all duration-300 group hover:shadow-lg hover:shadow-brand-magenta/10 hover:-translate-y-2 cursor-pointer h-full`}
                  style={{ animationDelay: school.delay }}
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-square overflow-hidden bg-foreground/5 flex items-center justify-center">
                    <img
                      src={school.image}
                      alt={school.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>

                  {/* Content Container */}
                  <div className={`${style.bg} ${style.border} border border-t-0 rounded-none p-6 flex flex-col justify-between h-48 w-full backdrop-blur-sm`}>
                    <div>
                      <div className="mb-6">
                        {school.href ? (
                          school.href.startsWith("http") ? (
                            <a
                              href={school.href}
                              target="_blank"
                              rel="noreferrer"
                              className="block"
                            >
                              <h3 className="text-2xl font-bold text-foreground font-display hover:text-brand-magenta transition-colors">
                                {school.title}
                              </h3>
                            </a>
                          ) : (
                            <Link to={school.href} className="block">
                              <h3 className="text-2xl font-bold text-foreground font-display hover:text-brand-magenta transition-colors">
                                {school.title}
                              </h3>
                            </Link>
                          )
                        ) : (
                          <h3 className="text-2xl font-bold text-foreground font-display">
                            {school.title}
                          </h3>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="headline-2 mb-6">
              <span className="text-foreground">Featured </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                News
              </span>
            </h2>
            <p className="subheadline text-foreground max-w-2xl mx-auto font-display">
              Stories from research, campus life, and our community
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-0 items-start">
            {/* Left side - Featured story (50%) - Auto-rotating */}
            <div className="lg:col-span-2">
              <button
                onClick={() => setSelectedNews(currentFeatured)}
                className="group w-full flex flex-col rounded-none border border-orange-500/20 bg-orange-500/10 cursor-pointer text-left hover:shadow-lg transition-all duration-500 overflow-hidden backdrop-blur-sm"
              >
                {currentFeatured.isVideo ? (
                  <VideoWithFrameCapture
                    src={currentFeatured.image}
                    poster={currentFeatured.poster}
                    onPlay={() => setIsVideoPlaying(true)}
                    onPause={() => setIsVideoPlaying(false)}
                    onEnded={() => setIsVideoPlaying(false)}
                  />
                ) : (
                  <img
                    src={currentFeatured.image}
                    alt={currentFeatured.title}
                    className="w-full max-h-96 object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="p-4 flex-1 flex flex-col space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge
                      className={`text-xs ${currentFeatured.color === "brand-orange" ? "bg-brand-orange/20 text-brand-orange" : currentFeatured.color === "brand-magenta" ? "bg-brand-magenta/20 text-brand-magenta" : "bg-brand-blue/20 text-brand-blue"}`}
                    >
                      {currentFeatured.category}
                    </Badge>
                    <div className="flex items-center text-foreground/60 text-xs font-body">
                      <CalendarDays className="w-3 h-3 mr-1" /> {currentFeatured.date}
                    </div>
                  </div>
                  <h3 className="text-base font-semibold text-foreground font-display line-clamp-2">
                    {currentFeatured.title}
                  </h3>
                  <p className="text-xs text-foreground/80 font-body line-clamp-2">
                    {currentFeatured.excerpt}
                  </p>
                  <div className="text-xs text-foreground/60 font-body">
                    Auto-rotating • {featuredNewsIndex + 1} of {allFeaturedNews.length}
                  </div>
                </div>
              </button>
            </div>

            {/* Right side - Remaining stories (50%) - 2 column grid */}
            <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-0 auto-rows-max">
              {remainingNews.slice(0, 4).map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedNews(item)}
                  className={`group rounded-none overflow-hidden border backdrop-blur-sm hover:shadow-lg hover:shadow-brand-magenta/10 transition-all text-left cursor-pointer ${
                    idx % 2 === 0 ? "bg-blue-500/10 border-blue-500/20" : "bg-purple-500/10 border-purple-500/20"
                  }`}
                >
                  <div className="relative">
                    {item.isVideo ? (
                      <VideoWithFrameCapture src={item.image} rotate={item.rotate} poster={item.poster} />
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-32 w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    )}
                    <div className="absolute top-2 left-2">
                      <Badge
                        className={`text-xs ${item.color === "brand-orange" ? "bg-brand-orange/20 text-brand-orange" : item.color === "brand-magenta" ? "bg-brand-magenta/20 text-brand-magenta" : "bg-brand-blue/20 text-brand-blue"}`}
                      >
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4 space-y-1">
                    <h4 className="text-sm font-semibold font-display group-hover:text-brand-magenta transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-foreground/80 font-body line-clamp-2">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs text-foreground font-body flex items-center">
                        <CalendarDays className="w-4 h-4 mr-1" /> {item.date}
                      </span>
                      <ChevronRight className="w-4 h-4 text-foreground group-hover:text-brand-magenta" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Events Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-brand-orange/5 via-brand-magenta/5 to-brand-blue/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="headline-2 mb-6">
              <span className="text-foreground">Upcoming </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Events
              </span>
            </h2>
            <p className="subheadline text-foreground max-w-2xl mx-auto font-display">
              Connect with our community through seminars, workshops, and celebrations
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-0 items-start">
            {/* Featured Event - Left side */}
            <div className="lg:col-span-2">
              <div className="group rounded-none overflow-hidden border border-orange-500/20 bg-orange-500/10 backdrop-blur-sm hover:shadow-xl hover:shadow-brand-magenta/10 transition-all">
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={allEvents[selectedEventIndex].image}
                    alt={allEvents[selectedEventIndex].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-brand-orange/20 text-brand-orange text-xs">
                      <CalendarDays className="w-3 h-3 mr-1" />
                      {allEvents[selectedEventIndex].date}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {allEvents[selectedEventIndex].category}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 font-display">
                    {allEvents[selectedEventIndex].title}
                  </h3>
                  <p className="text-foreground/80 mb-6 font-body">
                    {allEvents[selectedEventIndex].description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Button className="bg-brand-gradient hover:opacity-90 text-foreground">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <div className="text-xs text-foreground/60 font-body">
                      Auto-rotating • {selectedEventIndex + 1} of {allEvents.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Events List - Right side */}
            <div className="lg:col-span-1 space-y-0">
              <h3 className="text-lg font-bold text-foreground mb-6 font-display">
                More Events
              </h3>
              <div className="space-y-0">
                {allEvents.map((event, idx) => (
                  <button
                    key={idx}
                    onMouseEnter={() => setIsEventInteracting(true)}
                    onMouseLeave={() => setIsEventInteracting(false)}
                    onClick={() => {
                      setSelectedEventIndex(idx);
                      setIsEventInteracting(true);
                    }}
                    className={`group rounded-none border transition-all cursor-pointer w-full text-left p-4 backdrop-blur-sm ${
                      selectedEventIndex === idx
                        ? "border-brand-magenta bg-brand-magenta/10 shadow-lg shadow-brand-magenta/10"
                        : idx % 3 === 0
                        ? "border-blue-500/20 bg-blue-500/10 hover:border-brand-magenta/50 hover:shadow-lg hover:shadow-brand-magenta/5"
                        : idx % 3 === 1
                        ? "border-purple-500/20 bg-purple-500/10 hover:border-brand-magenta/50 hover:shadow-lg hover:shadow-brand-magenta/5"
                        : "border-orange-500/20 bg-orange-500/10 hover:border-brand-magenta/50 hover:shadow-lg hover:shadow-brand-magenta/5"
                    }`}
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-brand-orange/10 text-brand-orange font-bold text-sm font-display">
                          <CalendarDays className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-foreground/60 font-body font-semibold">
                          {event.date.split(",")[0]}
                        </p>
                        <h4 className="text-sm font-semibold text-foreground font-display group-hover:text-brand-magenta transition-colors line-clamp-2 mt-1">
                          {event.title}
                        </h4>
                        <Badge
                          variant="secondary"
                          className="text-xs mt-2 inline-block"
                        >
                          {event.category}
                        </Badge>
                      </div>
                      <div className="flex-shrink-0">
                        <ChevronRight className="w-4 h-4 text-foreground/40 group-hover:text-brand-magenta transition-colors" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <Button
                variant="outline"
                className="w-full border-brand-orange/30 text-brand-orange hover:bg-brand-orange/5 mt-6"
              >
                View All Events
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-brand-magenta/5 to-brand-orange/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="headline-2 mb-6">
              <span className="text-foreground">Experience </span>
              <span className="bg-brand-gradient-alt bg-clip-text text-transparent">
                Campus Life
              </span>
            </h2>
            <p className="subheadline text-foreground max-w-2xl mx-auto font-display">
              More than education - it's about building lifelong connections and
              memories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Student Organizations",
                description: "100+ clubs and societies",
                highlight: "Join Your Passion",
              },
              {
                icon: Building,
                title: "Modern Facilities",
                description: "State-of-the-art amenities",
                highlight: "World-Class Campus",
              },
              {
                icon: Star,
                title: "Cultural Events",
                description: "Year-round celebrations",
                highlight: "Vibrant Community",
              },
              {
                icon: TrendingUp,
                title: "Career Support",
                description: "Industry connections",
                highlight: "95% Placement Rate",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center p-6 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-brand-magenta/30 transition-all duration-300 group"
              >
                <feature.icon className="w-12 h-12 text-brand-magenta mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="headline-4 mb-2 group-hover:text-brand-magenta transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-foreground mb-3 font-body">
                  {feature.description}
                </p>
                <Badge
                  variant="outline"
                  className="text-xs border-brand-magenta/30 text-brand-magenta font-body"
                >
                  {feature.highlight}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Directory CTA */}
      <section className="px-6 py-16 bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-border/40 bg-background/80 p-10 shadow-[0_40px_120px_-60px_rgba(233,97,255,0.45)] backdrop-blur">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="space-y-4">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Meet Our Faculty
              </Badge>
              <h2 className="headline-3 font-display">
                Explore scholars, mentors, and industry experts across DSU
              </h2>
              <p className="text-foreground font-body max-w-3xl">
                Connect with faculty by school, discipline, or research focus in
                our new directory. Filter by the programmes you care about and
                reach out for collaborations, mentorship, and academic guidance.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/faculty-directory" className="flex-1">
                  <Button className="h-full w-full bg-brand-gradient text-foreground">
                    Explore Faculty Directory
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-none border border-border/50 bg-card/60 p-6 backdrop-blur-sm">
              <div className="grid gap-4">
                {[
                  "Search across schools",
                  "Filter by research focus",
                  "Connect via email",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-none bg-brand-magenta" />
                    <p className="text-sm text-foreground font-body">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-brand-magenta/10 via-brand-orange/10 to-brand-blue/10 rounded-3xl p-12 border border-brand-magenta/20">
            <h2 className="headline-2 mb-6">
              Ready to
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                {" "}
                Begin Your Journey
              </span>
              ?
            </h2>
            <p className="subheadline text-foreground mb-8 max-w-2xl mx-auto font-display">
              Join thousands of students who've chosen DSU for their academic
              and personal growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="https://admissions.dsu.edu.in/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-brand-gradient hover:opacity-90 hover:shadow-lg hover:shadow-brand-magenta/25 text-foreground px-12 py-6 text-lg font-semibold font-display rounded-2xl transition-all duration-300 group"
                >
                  Apply Now
                  <GraduationCap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Merit Scholarships Available",
                "Industry Partnerships",
              ].map((badge, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-3 py-1 text-xs font-medium font-body"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <NewsModal newsItem={selectedNews} onClose={() => setSelectedNews(null)} />
    </div>
  );
}
