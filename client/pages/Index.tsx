import { Link } from "react-router-dom";
import { useEffect, useRef, useState, useMemo } from "react";
import { useTheme } from "@/providers/theme-provider";
import { useAutoMuteOnScroll } from "@/hooks/useAutoMuteOnScroll";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";
import { indexTranslations } from "@/lib/i18n-extended";
import { Button } from "@/components/ui/button";
import ScrollingTicker from "@/components/ScrollingTicker";
import { VirtualTourSection } from "@/components/VirtualTourSection";
import { AdmissionsCTASection } from "@/components/AdmissionsCTASection";
import { CampusLocationsSection } from "@/components/CampusLocationsSection";
import { StoryboardSection } from "@/components/StoryboardSection";
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
  MapPin,
} from "lucide-react";

function HeroVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useAutoMuteOnScroll(videoRef);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      const newMutedState = !video.muted;
      video.muted = newMutedState;
      video.volume = newMutedState ? 0 : 1;
      setIsMuted(newMutedState);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 1;
    video.play().catch((error) => {
      console.warn("Video autoplay failed:", error);
      const playOnInteraction = () => {
        video.play().catch(() => {});
        document.removeEventListener("click", playOnInteraction);
        document.removeEventListener("scroll", playOnInteraction);
      };
      document.addEventListener("click", playOnInteraction);
      document.addEventListener("scroll", playOnInteraction);
    });
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.volume = isMuted ? 0 : 1;
    video.muted = isMuted;
  }, [isMuted]);

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div ref={containerRef} className="w-full h-full relative">
        {/* Video */}
        <video
          ref={videoRef}
          src="https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2F389ede098f8743368a37b080b1969b8a?alt=media&token=101276cc-1be0-485d-a4a8-86f1e71c260f&apiKey=4aa279a8430d441dba9c55f659831878"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          preload="auto"
          crossOrigin="anonymous"
          controls={false}
          className="w-full h-full object-cover"
          style={{
            objectPosition: "center center",
            display: "block",
            width: "100%",
            height: "100%",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none"></div>
      </div>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          zIndex: 99999,
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          color: "white",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          padding: 0,
          margin: 0,
          pointerEvents: "auto",
        }}
        aria-label={isMuted ? "Unmute" : "Mute"}
        type="button"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </div>
  );
}

function VideoWithFrameCapture({
  src,
  rotate = false,
  poster,
  onPlay,
  onPause,
  onEnded,
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
    if (!video || poster) return;

    const onLoadedMetadata = () => {
      if (
        typeof video.duration === "number" &&
        isFinite(video.duration) &&
        video.duration > 0
      ) {
        // Set poster via requestIdleCallback to avoid blocking scroll
        if ("requestIdleCallback" in window) {
          requestIdleCallback(() => {
            const captureTime = Math.min(1, video.duration * 0.3);
            if (isFinite(captureTime)) {
              video.currentTime = captureTime;
            }
          });
        }
      }
    };

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
    };
  }, [src, poster]);

  return (
    <div
      className={
        rotate ? "flex items-center justify-center overflow-hidden" : ""
      }
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className={`w-full h-auto object-contain transition-transform duration-500 ${rotate ? "rotate-[-90deg]" : ""}`}
        controls
        controlsList="nodownload"
        preload="metadata"
        crossOrigin="anonymous"
        onPlay={onPlay}
        onPause={onPause}
        onEnded={onEnded}
      />
    </div>
  );
}

function NewsModal({
  newsItem,
  onClose,
}: {
  newsItem: any;
  onClose: () => void;
}) {
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
          <VideoWithFrameCapture
            src={newsItem.image}
            rotate={newsItem.rotate}
            poster={newsItem.poster}
          />
        ) : (
          <img
            src={newsItem.image}
            alt={newsItem.title}
            loading="lazy"
            className="w-full h-auto max-h-96 object-cover rounded-t-3xl"
          />
        )}

        <div className="p-4">
          <div className="flex items-center gap-3 mb-4">
            <Badge
              className={`${
                newsItem.color === "brand-orange"
                  ? "bg-brand-orange/20 text-brand-orange"
                  : newsItem.color === "emerald-500"
                    ? "bg-emerald-500/20 text-emerald-500"
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
          <p className="text-foreground/80 text-lg font-body">
            {newsItem.excerpt}
          </p>
        </div>
      </div>
    </div>
  );
}

function VideoModal({
  videoItem,
  onClose,
}: {
  videoItem: any;
  onClose: () => void;
}) {
  if (!videoItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur p-4">
      <div className="relative w-full max-w-5xl max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoItem.youtubeId}?autoplay=1`}
            title={videoItem.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        <div className="p-6 bg-card rounded-b-lg mt-4">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-brand-blue/20 text-brand-blue">
              {videoItem.category}
            </Badge>
            <div className="flex items-center text-foreground/60 text-xs font-body">
              <CalendarDays className="w-4 h-4 mr-1" /> {videoItem.date}
            </div>
          </div>
          <h2 className="text-3xl font-semibold text-foreground mb-4 font-display">
            {videoItem.title}
          </h2>
          <p className="text-foreground/80 text-lg font-body">
            {videoItem.excerpt}
          </p>
        </div>
      </div>
    </div>
  );
}

function SchoolCardWrapper({
  children,
  index,
  delay,
}: {
  children: React.ReactNode;
  index: number;
  delay: string;
}) {
  const { elementRef, isVisible } = useScrollTrigger({ threshold: 0.2 });

  return (
    <div
      ref={elementRef}
      style={{ animationDelay: delay }}
      className={`${isVisible ? "scroll-fade-in-up" : ""}`}
    >
      {children}
    </div>
  );
}

export default function Index() {
  const [selectedNews, setSelectedNews] = useState<any>(null);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [featuredNewsIndex, setFeaturedNewsIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [newsTransitioning, setNewsTransitioning] = useState(false);
  const [rotationProgress, setRotationProgress] = useState(100);
  const [selectedPublicationIndex, setSelectedPublicationIndex] = useState(0);
  const [isPublicationInteracting, setIsPublicationInteracting] =
    useState(false);
  const { theme } = useTheme();

  // Featured publications - curated to showcase high-impact, interdisciplinary research
  // Reduced to 5 items for homepage to improve clarity and reduce scroll fatigue
  const allPublications = [
    {
      date: "Jan 2025",
      title:
        "Multimodal Mental State Analysis: AI-powered Depression Detection",
      category: "Springer Q1 Journal",
      description:
        "AI for mental health diagnostics using voice, text, and facial cues. Achieved 20% accuracy gain via data fusion utilizing LSTM + CNN.",
      image:
        "https://images.pexels.com/photos/8090286/pexels-photo-8090286.jpeg",
      authors: "Bipin Kumar Rai, Ishika Jain, Baibhav Tiwari, Abhay Saxena",
      link: "https://doi.org/10.1007/s10742-024-00329-2",
    },
    {
      date: "2025",
      title:
        "Perovskite Solar Cell Stability Analysis Using Advanced Techniques",
      category: "Progress in Photovoltaics",
      description:
        "Advanced stability analysis of perovskite solar cells using cutting-edge characterization techniques.",
      image:
        "https://images.pexels.com/photos/35501726/pexels-photo-35501726.jpeg",
      authors: "DSU Renewable Energy Lab",
      link: "https://doi.org/10.1002/pip.3861",
    },
    {
      date: "2025",
      title: "Development of a Scaled-Down Test Rig for Wheel Systems",
      category: "Journal of Thermal Science and Engineering Applications",
      description:
        "Laboratory-scale test rig for studying wheel system performance and thermal behavior.",
      image:
        "https://images.pexels.com/photos/9242838/pexels-photo-9242838.jpeg",
      authors: "DSU Mechanical Engineering",
      link: "https://doi.org/10.1115/1.4067351",
    },
    {
      date: "2025",
      title: "Exploring Caffeine as a Disruptor of Membrane Dynamics",
      category: "Physical Review E",
      description:
        "Investigation of caffeine's molecular effects on membrane dynamics and protein interactions using advanced techniques.",
      image:
        "https://images.pexels.com/photos/25626515/pexels-photo-25626515.jpeg",
      authors: "DSU Biophysics Group",
      link: "https://doi.org/10.1103/PhysRevE.111.014402",
    },
    {
      date: "2024",
      title: "Fiber Bragg Grating as a Temperature Sensor",
      category: "Journal of Optics",
      description:
        "Novel application of fiber Bragg gratings for high-precision temperature sensing in industrial applications.",
      image:
        "https://images.pexels.com/photos/16777744/pexels-photo-16777744.jpeg",
      authors: "DSU Photonics Lab",
      link: "https://doi.org/10.1007/s12596-024-01894-y",
    },
  ];

  // Get schools data
  const schoolsData = [
    {
      key: "engineering",
      icon: Cog,
      color: "brand-orange",
      delay: "0s",
      href: "/academics/engineering",
      image:
        "https://images.pexels.com/photos/3862638/pexels-photo-3862638.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
      title: "School of Engineering",
      campus: "Main Campus",
      description: "",
      programs: [
        "B.Tech CSE",
        "B.Tech Mechanical",
        "B.Tech ECE",
        "B.Tech Aerospace",
      ],
    },
    {
      key: "computerApplications",
      icon: Cpu,
      color: "emerald-500",
      delay: "0.1s",
      href: "/academics/computer-applications",
      image:
        "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
      title: "School of Computer Applications",
      campus: "City Innovation Campus",
      description: "",
      programs: ["BCA", "MCA", "Data Science", "Cloud Computing"],
    },
    {
      key: "law",
      icon: Gavel,
      color: "brand-blue",
      delay: "0.2s",
      href: "/academics/law",
      image:
        "https://images.pexels.com/photos/8112201/pexels-photo-8112201.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
      title: "School of Law",
      campus: "City Innovation Campus",
      description: "",
      programs: ["BA LLB", "BBA LLB", "LLB", "LLM"],
    },
    {
      key: "management",
      icon: Briefcase,
      color: "brand-orange",
      delay: "0.3s",
      href: "/academics/management-studies",
      image:
        "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
      title: "School of Commerce & Management",
      campus: "City Innovation Campus",
      description: "",
      programs: ["B.Com", "BBA", "MBA", "Finance & Marketing"],
    },
    {
      key: "sciences",
      icon: FlaskConical,
      color: "emerald-500",
      delay: "0.4s",
      href: "/academics/basic-applied-sciences",
      image:
        "https://images.pexels.com/photos/9628799/pexels-photo-9628799.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
      title: "School of Basic & Applied Sciences",
      campus: "City Innovation Campus",
      description: "",
      programs: ["Physics", "Chemistry", "Mathematics", "Biotechnology"],
    },
    {
      key: "health",
      icon: Stethoscope,
      color: "brand-blue",
      delay: "0.5s",
      href: "/academics/health-sciences",
      image:
        "https://images.pexels.com/photos/1279365/pexels-photo-1279365.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
      title: "School of Health Sciences",
      campus: "Main Campus",
      description: "",
      programs: ["Pharmacy", "Nursing", "CDSIMER", "CAHS"],
    },
    {
      key: "design",
      icon: Film,
      color: "emerald-500",
      delay: "0.7s",
      href: "/academics/design/bdesign",
      image:
        "https://images.pexels.com/photos/7147711/pexels-photo-7147711.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
      title: "School of Design & Digital Trans-Media",
      campus: "City Innovation Campus",
      description: "",
      programs: ["Animation", "UX/UI", "Graphic Design", "Digital Media"],
    },
    {
      key: "journalism",
      icon: Newspaper,
      color: "brand-orange",
      delay: "0.75s",
      href: "/academics/journalism-mass-communication",
      image:
        "https://images.pexels.com/photos/7317291/pexels-photo-7317291.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
      title: "School of Arts, Design & Humanities",
      campus: "City Innovation Campus",
      description: "",
      programs: ["BJMC", "PG Diploma", "Documentary", "Digital Media"],
    },
    {
      key: "medical",
      icon: Microscope,
      color: "brand-blue",
      delay: "0.8s",
      href: "https://cdsimer.edu.in",
      image:
        "https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
      title:
        "Dr. Chandramma Dayananda Sagar Institute of Medical Education & Research",
      campus: "Main Campus",
      description: "",
      programs: ["MBBS", "MD", "DM", "Fellowship"],
    },
    {
      key: "online",
      icon: Laptop,
      color: "emerald-500",
      delay: "0.85s",
      href: "https://dsuonline.com/",
      image:
        "https://images.pexels.com/photos/7974355/pexels-photo-7974355.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
      title: "Online Degree Programs",
      campus: "City Innovation Campus",
      description: "",
      programs: [
        "Online Degrees",
        "Flexible Learning",
        "Certification Programs",
        "Professional Development",
      ],
    },
  ];

  // Featured news carousel - curated to showcase institutional momentum
  // Purpose: Major Institutional Events, Student/Research Breakthroughs, Flagship Campus Moments
  const allFeaturedNews = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fbf6a54aff7814535b71eda78a3d5f95e?format=webp&width=800",
      category: "Achievement",
      title: "DSU-MAK III Soars High at IN-SPACe Model Rocketry Finale",
      excerpt:
        "Our student-built rocket successfully achieves 1200.77m apogee and safe recovery, marking a triumph of innovation and technical mastery in aerospace engineering.",
      date: "Oct 29, 2025",
      color: "brand-blue",
    },
    {
      image:
        "https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2F8ee07440d90c4bd685e8ec8da486df8d?alt=media&token=38c290b6-91a4-4825-a4c8-068661623f55&apiKey=4aa279a8430d441dba9c55f659831878",
      isVideo: true,
      category: "Milestone",
      title:
        "9th Convocation at DSU: A Day of Reflection, Gratitude, and Pride",
      excerpt:
        "Celebrating the achievements and milestones of our graduating students and faculty.",
      date: "Oct 15, 2025",
      color: "brand-blue",
    },
    {
      image:
        "https://img.youtube.com/vi/OnFyTkmXRZQ/maxresdefault.jpg",
      isVideo: false,
      youtubeId: "OnFyTkmXRZQ",
      poster:
        "https://img.youtube.com/vi/OnFyTkmXRZQ/maxresdefault.jpg",
      category: "Inspiring Stories",
      title: "Transforming Lives Through Innovation",
      excerpt:
        "Watch inspiring stories of how innovation and perseverance are transforming communities and creating positive impact.",
      date: "Jan 2025",
      color: "brand-blue",
    },
  ];

  // Auto-rotate featured news every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setNewsTransitioning(true);
      setTimeout(() => {
        setFeaturedNewsIndex((prev) => (prev + 1) % allFeaturedNews.length);
        setNewsTransitioning(false);
      }, 300);
      setRotationProgress(0);
    }, 4000);

    const progressInterval = setInterval(() => {
      setRotationProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 100 / 40;
      });
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [allFeaturedNews.length]);

  // Auto-rotate publications every 4 seconds (pauses when user interacts)
  useEffect(() => {
    if (isPublicationInteracting) {
      return;
    }

    const interval = setInterval(() => {
      setSelectedPublicationIndex(
        (prev) => (prev + 1) % allPublications.length,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [allPublications.length, isPublicationInteracting]);

  // Get current featured item and remaining items
  const currentFeatured = allFeaturedNews[featuredNewsIndex];
  const remainingNews = allFeaturedNews.filter(
    (_, idx) => idx !== featuredNewsIndex,
  );

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Scrolling Ticker */}
      <ScrollingTicker />

      {/* Hero Section with Full-Screen Video Background */}
      <section
        className="hero-section relative flex flex-col justify-between overflow-hidden"
        style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
      >
        {/* Full-screen Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <HeroVideo />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Location Badge */}
        <div className="absolute top-16 md:top-28 right-6 z-20 flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/40 shadow-lg">
          <MapPin className="w-4 h-4 text-white font-bold" />
          <span className="text-sm font-semibold text-white whitespace-nowrap">
            Main Campus
          </span>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-3 w-full z-10 flex flex-col justify-between h-full py-0 md:py-0 md:items-start md:justify-center">
          {/* Title Section - Top on mobile */}
          <div className="max-w-4xl pt-6 md:pt-0 md:pb-12">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 sm:mb-3 md:mb-4 leading-tight font-display">
              Dayananda Sagar University
            </h1>
            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-1 sm:mb-2 md:mb-6 leading-tight font-display">
              India’s AI-First University
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-normal text-white/75 mb-2 md:mb-0">
              Powered by NVIDIA
            </p>
            <p className="text-xs sm:text-base md:text-lg lg:text-xl font-medium text-white/80 mt-2 font-display hidden sm:block">
              AI integrated across academics, research, and campus innovation
            </p>
          </div>

          {/* Buttons Section - Apply Today full width on mobile, below tagline */}
          <div className="flex flex-col gap-4 w-full sm:w-auto sm:gap-6 pb-6 md:pb-0 landscape-buttons md:flex hidden">
            <a
              href="https://admissions.dsu.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#0088FF] via-[#FFD700] to-[#FF6B00] hover:from-[#0066FF] hover:via-[#FFC700] hover:to-[#FF5500] text-white font-bold font-display transition-all duration-300 group shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto animate-gradient bg-[length:200%_auto]"
                style={{
                  padding: "clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)",
                  fontSize: "clamp(0.875rem, 2vw, 1rem)",
                }}
              >
                Apply Today
                <ArrowRight
                  style={{
                    width: "clamp(1rem, 2vw, 1.25rem)",
                    height: "clamp(1rem, 2vw, 1.25rem)",
                  }}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </a>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://dsu.edu.in/virtual-tour/"
                target="_blank"
                rel="noreferrer"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  className="bg-transparent hover:bg-white/10 text-white border border-white/70 font-medium font-display transition-all duration-300 w-full sm:w-auto"
                  style={{
                    padding:
                      "clamp(0.5rem, 1.5vw, 0.75rem) clamp(1.25rem, 3vw, 1.5rem)",
                    fontSize: "clamp(0.8125rem, 1.8vw, 0.875rem)",
                  }}
                >
                  Virtual Tour
                </Button>
              </a>
            </div>

            <Link
              to="/ai-first"
              className="hidden sm:inline-flex items-center gap-2 text-white hover:text-orange-200 transition-all duration-300 font-display font-semibold text-lg group w-fit"
            >
              <span>Build the Future of AI at DSU</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Buttons Section - Visible only on mobile portrait */}
      <section className="md:hidden bg-background relative max-w-7xl mx-auto px-3 w-full py-6">
        <div className="flex flex-col gap-4 sm:flex-row landscape-buttons">
          <a
            href="https://admissions.dsu.edu.in/"
            target="_blank"
            rel="noreferrer"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#0088FF] via-[#FFD700] to-[#FF6B00] hover:from-[#0066FF] hover:via-[#FFC700] hover:to-[#FF5500] text-white font-bold font-display transition-all duration-300 group shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto animate-gradient bg-[length:200%_auto]"
              style={{
                padding: "clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)",
                fontSize: "clamp(0.875rem, 2vw, 1rem)",
              }}
            >
              Apply Today
              <ArrowRight
                style={{
                  width: "clamp(1rem, 2vw, 1.25rem)",
                  height: "clamp(1rem, 2vw, 1.25rem)",
                }}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </a>

          <a
            href="https://dsu.edu.in/virtual-tour/"
            target="_blank"
            rel="noreferrer"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background w-full sm:w-auto"
          >
            <Button
              variant="outline"
              className="bg-transparent hover:bg-white/10 text-foreground border border-border hover:border-brand-orange font-medium font-display transition-all duration-300 w-full sm:w-auto"
              style={{
                padding:
                  "clamp(0.5rem, 1.5vw, 0.75rem) clamp(1.25rem, 3vw, 1.5rem)",
                fontSize: "clamp(0.8125rem, 1.8vw, 0.875rem)",
              }}
            >
              Virtual Tour
            </Button>
          </a>
        </div>
      </section>

      {/* Performance Indicators Section */}
      <section className="px-3 pt-2 md:pt-4 pb-3 md:pb-4 relative bg-gradient-to-r from-brand-magenta/5 via-brand-orange/5 to-brand-blue/5 border-y border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4 md:mb-6">
            <h2 className="headline-2 mb-1 md:mb-2">
              Recognized
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                {" "}
                Excellence
              </span>
            </h2>
            <p className="subheadline text-foreground max-w-3xl mx-auto">
              Accredited by leading national and international bodies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center justify-center py-2 md:py-3">
            <div className="flex items-center justify-center h-24 md:h-28">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ff0867b0eefa441e5aa0675ef12215dfa?format=webp&width=800"
                alt="NAAC A+ Accreditation"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-24 md:h-28">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F3c4cfada60ba4b1394c956782c4daa9b?format=webp&width=800"
                alt="KSURI Teaching Excellence"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-24 md:h-28">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F8b709d82bfc74d6db9ad48dcc8839f49?format=webp&width=800"
                alt="IIRF 2023 National Rank"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-24 md:h-28">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F3ea02afdba384ab18493f01f740f2572?format=webp&width=800"
                alt="AllianceIndia Ranked B School"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-24 md:h-28">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F54da0554e889484290313954c571275e?format=webp&width=800"
                alt="Educational Excellence Award 2021"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-24 md:h-28">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F815dc802ec3148348545468b3b9d2cca?format=webp&width=800"
                alt="Times Best Emerging University 2021"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Academics Section */}
      <section className="px-3 pt-10 pb-4 md:pb-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="headline-2 mb-6">
              Academic Excellence
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                {" "}
                That Inspires
              </span>
            </h2>
            <p className="subheadline text-foreground max-w-3xl mx-auto">
              Explore AI-integrated undergraduate and postgraduate programs
              spanning engineering, sciences, health, law, design, and
              management.
            </p>
          </div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-0 auto-rows-max"
            style={{ contain: "layout style paint" }}
          >
            {schoolsData.map((school, index) => {
              const styles = [
                { bg: "bg-orange-500/10", border: "border-orange-500/20" },
                { bg: "bg-violet-500/10", border: "border-violet-500/20" },
                { bg: "bg-blue-500/10", border: "border-blue-500/20" },
                { bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
                { bg: "bg-purple-500/10", border: "border-purple-500/20" },
                { bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
                { bg: "bg-amber-500/10", border: "border-amber-500/20" },
                { bg: "bg-rose-500/10", border: "border-rose-500/20" },
                { bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
                { bg: "bg-teal-500/10", border: "border-teal-500/20" },
              ];
              const style = styles[index % styles.length];

              const cardElement = (
                <div
                  className={`rounded-none overflow-hidden cursor-pointer h-full`}
                  style={{ contain: "content" }}
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-square overflow-hidden bg-foreground/5 flex items-center justify-center">
                    <img
                      src={school.image}
                      alt={school.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
                  </div>

                  {/* Content Container */}
                  <div
                    className={`${style.bg} ${style.border} border border-t-0 rounded-none ${school.key === "medical" ? "p-1" : "p-2"} flex flex-col ${school.key === "medical" ? "justify-start" : "justify-center"} items-center h-24 w-full backdrop-blur-sm`}
                  >
                    <div
                      className={`text-center ${school.key === "medical" ? "space-y-0.25" : "space-y-1.5"}`}
                    >
                      <h3
                        className={`${school.key === "medical" ? "text-[8px] sm:text-xs md:text-sm leading-tight" : "text-base md:text-lg"} font-bold text-foreground font-display hover:text-brand-blue transition-colors text-center ${school.key === "medical" ? "line-clamp-4" : "line-clamp-2"}`}
                      >
                        {school.title}
                      </h3>
                    </div>
                    {school.campus && (
                      <p
                        className={`${school.key === "medical" ? "text-[8px] py-0 px-1 mt-0.5" : "text-xs py-0.5 px-2"} font-semibold text-foreground/70 bg-foreground/10 rounded-full inline-block`}
                      >
                        {school.campus}
                      </p>
                    )}
                  </div>
                </div>
              );

              const cardContent = school.href ? (
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
                  <Link to={school.href} className="block">
                    {cardElement}
                  </Link>
                )
              ) : (
                cardElement
              );

              return (
                <SchoolCardWrapper
                  key={index}
                  index={index}
                  delay={school.delay}
                >
                  {cardContent}
                </SchoolCardWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* DSU Publications Section */}
      <section className="px-3 py-10 bg-gradient-to-b from-white/5 via-white/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-1 w-8 bg-white rounded-full"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-white">
                Research Excellence
              </span>
              <div className="h-1 w-8 bg-white rounded-full"></div>
            </div>
            <h2 className="headline-2 mb-6">
              <span className="text-foreground">DSU </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Research Publications
              </span>
            </h2>
            <p className="subheadline text-foreground max-w-2xl mx-auto mb-4">
              Showcasing high-impact, interdisciplinary research across AI,
              materials science, energy, and health
            </p>
          </div>

          {/* Featured Publication */}
          <div className="mb-12" style={{ contain: "content" }}>
            <div className="w-full flex flex-col rounded-xl border-2 border-white/20 bg-gradient-to-br from-white/5 to-white/10 cursor-pointer text-left overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              {/* Progress bar indicator - Full rectangle */}
              <div className="h-2 bg-white/10 overflow-hidden">
                <div
                  key={`progress-${selectedPublicationIndex}`}
                  className="h-full bg-gradient-to-r from-brand-blue via-brand-yellow to-brand-orange"
                  style={{
                    animation: "progressFill 4s linear forwards",
                  }}
                />
              </div>

              <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-foreground/5 to-white/5">
                <img
                  key={selectedPublicationIndex}
                  src={allPublications[selectedPublicationIndex].image}
                  alt={allPublications[selectedPublicationIndex].title}
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                  style={{
                    animation: [
                      "featuredPublicationSlideLeft 0.7s ease-out",
                      "featuredPublicationSlideRight 0.7s ease-out",
                      "featuredPublicationSlideUpRotate 0.8s ease-out",
                      "featuredPublicationBounceDown 0.8s ease-out",
                      "featuredPublicationSpiralIn 0.9s ease-out",
                    ][selectedPublicationIndex],
                  }}
                  loading="eager"
                />
              </div>

              <div
                key={`content-${selectedPublicationIndex}`}
                className="p-8 space-y-5"
                style={{
                  animation: [
                    "featuredPublicationContentFadeIn0 0.7s ease-out 0.1s both",
                    "featuredPublicationContentFadeIn1 0.7s ease-out 0.1s both",
                    "featuredPublicationContentFadeIn2 0.8s ease-out 0.1s both",
                    "featuredPublicationContentFadeIn3 0.8s ease-out 0.1s both",
                    "featuredPublicationContentFadeIn4 0.9s ease-out 0.1s both",
                  ][selectedPublicationIndex],
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-3">
                    <Badge className="bg-brand-blue/25 text-brand-blue border border-brand-blue/50 w-fit">
                      {allPublications[selectedPublicationIndex].category}
                    </Badge>
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
                      <span className="text-xs font-semibold text-white">
                        Featured Publication
                      </span>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-foreground/60">
                    {allPublications[selectedPublicationIndex].date}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground font-display leading-tight">
                  {allPublications[selectedPublicationIndex].title}
                </h3>
                <p className="text-sm text-foreground/80 font-body leading-relaxed">
                  {allPublications[selectedPublicationIndex].description}
                </p>
                <div className="pt-2 border-t border-foreground/10">
                  <p className="text-sm text-white/90 font-semibold">
                    ✓ {allPublications[selectedPublicationIndex].authors}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-6">
                  {allPublications[selectedPublicationIndex].link ? (
                    <a
                      href={allPublications[selectedPublicationIndex].link}
                      target="_blank"
                      rel="noreferrer"
                      className="no-underline group"
                    >
                      <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold gap-2 transform group-hover:translate-x-1 transition-all shadow-lg hover:shadow-xl">
                        Read Full Paper
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </a>
                  ) : (
                    <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold gap-2 shadow-lg hover:shadow-xl">
                      Read Full Paper
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Featured Publications Grid - 5 Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
            {allPublications.map((publication, idx) => {
              const isSpringer = publication.category.includes("Springer");
              const isHighImpact = [
                "Physical Review E",
                "Progress in Photovoltaics",
              ].includes(publication.category);
              const colors = [
                "from-brand-blue/20 to-brand-blue/5",
                "from-brand-blue/20 to-brand-blue/5",
                "from-brand-blue/20 to-brand-blue/5",
                "from-brand-blue/20 to-brand-blue/5",
                "from-brand-blue/20 to-brand-blue/5",
              ];
              const borderColors = [
                "border-brand-blue/30 hover:border-brand-blue",
                "border-brand-blue/30 hover:border-brand-blue",
                "border-brand-blue/30 hover:border-brand-blue",
                "border-brand-blue/30 hover:border-brand-blue",
                "border-brand-blue/30 hover:border-brand-blue",
              ];

              return (
                <button
                  key={idx}
                  onMouseEnter={() => setIsPublicationInteracting(true)}
                  onMouseLeave={() => setIsPublicationInteracting(false)}
                  onClick={() => {
                    setSelectedPublicationIndex(idx);
                    setIsPublicationInteracting(true);
                  }}
                  className={`group relative overflow-hidden rounded-xl border-2 transition-all duration-500 p-4 text-left h-full backdrop-blur-sm animate-publication-card-enter ${
                    selectedPublicationIndex === idx
                      ? "border-brand-blue bg-brand-blue/20 shadow-2xl shadow-brand-blue/20 scale-105 z-10"
                      : `${borderColors[idx % 5]} bg-gradient-to-br ${colors[idx % 5]} hover:shadow-xl hover:shadow-brand-blue/20`
                  }`}
                  style={{
                    animation:
                      selectedPublicationIndex === idx
                        ? "publication-card-pulse 2s infinite"
                        : `publication-card-enter 0.6s ease-out ${idx * 0.08}s both`,
                  }}
                >
                  {/* Background accent */}
                  <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-brand-blue/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>

                  <div className="space-y-3 relative z-10">
                    {/* Header with badges */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex flex-col gap-2">
                        <Badge
                          variant="secondary"
                          className={`text-xs flex-shrink-0 ${
                            isSpringer
                              ? "bg-brand-blue/25 text-brand-blue border-brand-blue/50"
                              : isHighImpact
                                ? "bg-brand-blue/25 text-brand-blue border-brand-blue/50"
                                : "bg-brand-orange/25 text-brand-orange border-brand-orange/50"
                          }`}
                        >
                          {isSpringer
                            ? "Q1 Journal"
                            : isHighImpact
                              ? "High Impact"
                              : "Research"}
                        </Badge>
                      </div>
                      <span className="text-xs text-foreground/60 flex-shrink-0 font-semibold">
                        {publication.date}
                      </span>
                    </div>

                    {/* Title with improved styling */}
                    <h4 className="text-xs font-bold text-foreground font-display group-hover:text-brand-blue transition-colors line-clamp-3 leading-tight">
                      {publication.title}
                    </h4>

                    {/* Category description */}
                    <p className="text-xs text-foreground/70 line-clamp-1 font-medium">
                      {publication.category}
                    </p>

                    {/* CTA indicator */}
                    <div className="flex items-center gap-2 text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1 pt-2 border-t border-foreground/10">
                      <ChevronRight className="w-3 h-3" />
                      <span className="text-xs font-semibold">
                        View Details
                      </span>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="px-3 pt-4 md:pt-10 pb-10 bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="headline-2 mb-6">
              <span className="text-foreground">Featured </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                News and Events
              </span>
            </h2>
            <p className="subheadline text-foreground max-w-2xl mx-auto">
              Stories from research, campus life, and our community
            </p>
          </div>

          <div
            className="grid lg:grid-cols-3 gap-0 items-start"
            style={{ contain: "layout style paint" }}
          >
            {/* Left side - Featured story (50%) - Auto-rotating */}
            <div className="lg:col-span-2" style={{ contain: "content" }}>
              {/* Full Rectangle Progress Bar */}
              <div className="h-2 bg-white/10 overflow-hidden">
                <div
                  key={`news-progress-${featuredNewsIndex}`}
                  className="h-full bg-gradient-to-r from-brand-blue via-brand-yellow to-brand-orange"
                  style={{
                    animation: "progressFill 4s linear forwards",
                  }}
                />
              </div>

              <div className="relative">
                {featuredNewsIndex === 0 && (
                  <div className="absolute top-2 right-3 z-10 text-xs font-semibold text-white/70 pointer-events-none animate-pulse">
                    Swipe →
                  </div>
                )}
                <button
                  onClick={() => setSelectedNews(currentFeatured)}
                  className={`w-full flex flex-col rounded-none border border-brand-blue/20 bg-gradient-to-br from-brand-blue/10 to-brand-magenta/5 cursor-pointer text-left overflow-hidden featured-news-card transition-all duration-300 ${
                    newsTransitioning
                      ? "featured-news-exit"
                      : "featured-news-enter"
                  }`}
                  style={{
                    animation: [
                      "featuredPublicationSlideLeft 0.7s ease-out",
                      "featuredPublicationSlideRight 0.7s ease-out",
                      "featuredPublicationSlideUpRotate 0.8s ease-out",
                      "featuredPublicationBounceDown 0.8s ease-out",
                      "featuredPublicationSpiralIn 0.9s ease-out",
                      "featuredPublicationSlideLeft 0.7s ease-out",
                    ][featuredNewsIndex % 6],
                  }}
                >
                  {currentFeatured.youtubeId ? (
                    <button
                      onClick={() => setSelectedVideo(currentFeatured)}
                      className="relative w-full aspect-video group overflow-hidden"
                    >
                      <img
                        src={currentFeatured.image}
                        alt={currentFeatured.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  ) : currentFeatured.isVideo ? (
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
                      loading="lazy"
                      className="w-full max-h-96 object-contain"
                    />
                  )}
                  <div
                    key={`news-content-${featuredNewsIndex}`}
                    className="p-4 flex-1 flex flex-col space-y-2"
                    style={{
                      animation: [
                        "featuredPublicationContentFadeIn0 0.7s ease-out 0.1s both",
                        "featuredPublicationContentFadeIn1 0.7s ease-out 0.1s both",
                        "featuredPublicationContentFadeIn2 0.8s ease-out 0.1s both",
                        "featuredPublicationContentFadeIn3 0.8s ease-out 0.1s both",
                        "featuredPublicationContentFadeIn4 0.9s ease-out 0.1s both",
                        "featuredPublicationContentFadeIn0 0.7s ease-out 0.1s both",
                      ][featuredNewsIndex % 6],
                    }}
                  >
                    <div className="flex items-center gap-2 flex-wrap">
                      <div className="relative">
                        <Badge
                          className={`text-xs bg-brand-blue/20 text-brand-blue`}
                        >
                          {currentFeatured.category}
                        </Badge>
                        {!newsTransitioning && (
                          <div className="absolute -top-1 -right-1 w-2 h-2 bg-brand-blue rounded-full featured-news-pulse" />
                        )}
                      </div>
                      <div className="flex items-center text-foreground/60 text-xs font-body">
                        <CalendarDays className="w-3 h-3 mr-1" />{" "}
                        {currentFeatured.date}
                      </div>
                    </div>
                    <h3 className="text-base font-semibold text-foreground font-display line-clamp-2">
                      {currentFeatured.title}
                    </h3>
                    <p className="text-xs text-foreground/80 font-body line-clamp-2">
                      {currentFeatured.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <div className="text-xs text-foreground/60 font-body">
                        {featuredNewsIndex + 1} of {allFeaturedNews.length}
                      </div>
                      <div className="flex gap-1">
                        {allFeaturedNews.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setFeaturedNewsIndex(idx)}
                            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                              idx === featuredNewsIndex
                                ? "w-4 bg-brand-blue"
                                : "w-1.5 bg-foreground/30 hover:bg-foreground/50"
                            }`}
                            aria-label={`Go to featured news ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Right side - Remaining stories (50%) - 1 column, 2 tiles (medium size) */}
            <div className="lg:col-span-1 grid grid-cols-1 gap-0 auto-rows-max">
              {remainingNews.slice(0, 2).map((item, idx) => {
                const itemIndex = allFeaturedNews.findIndex(
                  (news) => news.title === item.title
                );
                return (
                <button
                  key={idx}
                  onClick={() => setFeaturedNewsIndex(itemIndex)}
                  className="group rounded-none overflow-hidden border border-brand-magenta/20 bg-brand-magenta/5 hover:border-brand-magenta/40 text-left cursor-pointer news-grid-item transition-all duration-300"
                  style={{
                    animation: `publicationCardEnter 0.6s ease-out ${idx * 0.1}s both`,
                  }}
                >
                  <div className="relative">
                    {item.youtubeId ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedVideo(item);
                        }}
                        className="relative w-full h-48 group overflow-hidden block"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    ) : item.isVideo ? (
                      <VideoWithFrameCapture
                        src={item.image}
                        rotate={item.rotate}
                        poster={item.poster}
                      />
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="h-48 w-full object-cover news-card-image"
                      />
                    )}
                    <div className="absolute top-2 left-2 transition-all duration-300 group-hover:scale-105">
                      <Badge
                        className={`text-xs transition-all duration-300 ${item.color === "brand-orange" ? "bg-brand-orange/20 text-brand-orange group-hover:bg-brand-orange/40" : item.color === "brand-magenta" ? "bg-brand-magenta/20 text-brand-magenta group-hover:bg-brand-magenta/40" : "bg-brand-blue/20 text-brand-blue group-hover:bg-brand-blue/40"}`}
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
              );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <VirtualTourSection />

      {/* Storyboard Section */}
      <StoryboardSection />

      {/* Campus Locations Section */}
      <CampusLocationsSection />

      {/* Admissions CTA Section */}
      <AdmissionsCTASection />

      <NewsModal
        newsItem={selectedNews}
        onClose={() => setSelectedNews(null)}
      />

      <VideoModal
        videoItem={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

    </div>
  );
}
