import { Link } from "react-router-dom";
import { useEffect, useRef, useState, useMemo } from "react";
import { useTheme } from "@/providers/theme-provider";
import { useAutoMuteOnScroll } from "@/hooks/useAutoMuteOnScroll";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";
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
  const containerRef = useAutoMuteOnScroll(videoRef);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      const newMutedState = !video.muted;
      video.muted = newMutedState;
      video.volume = newMutedState ? 0 : 1;
      setIsMuted(newMutedState);
      console.log("Mute toggled:", newMutedState);
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
      <div ref={containerRef} className="w-full h-full relative">
        {/* Video */}
        <video
          ref={videoRef}
          src="https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2F389ede098f8743368a37b080b1969b8a?alt=media&token=101276cc-1be0-485d-a4a8-86f1e71c260f&apiKey=4aa279a8430d441dba9c55f659831878"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          preload="metadata"
          crossOrigin="anonymous"
          className="w-full h-full object-cover"
          style={{
            objectPosition: "center center",
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
          <p className="text-foreground/80 text-lg font-body">
            {newsItem.excerpt}
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
  const [featuredNewsIndex, setFeaturedNewsIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [newsTransitioning, setNewsTransitioning] = useState(false);
  const [rotationProgress, setRotationProgress] = useState(100);
  const [selectedPublicationIndex, setSelectedPublicationIndex] = useState(0);
  const [isPublicationInteracting, setIsPublicationInteracting] =
    useState(false);
  const { theme } = useTheme();

  // All publications for rotation
  const allPublications = [
    {
      date: "Jan 2025",
      title:
        "Multimodal Mental State Analysis: AI-powered Depression Detection",
      category: "Springer Q1 Journal",
      description:
        "Groundbreaking research on multimodal AI for mental health diagnostics using voice, text, and facial cues. Achieved 20% accuracy gain via data fusion utilizing LSTM + CNN on DAIC-WoZ dataset. Published in Health Services and Outcomes Research Methodology by Springer Nature.",
      image:
        "https://images.pexels.com/photos/8090286/pexels-photo-8090286.jpeg",
      authors: "Bipin Kumar Rai, Ishika Jain, Baibhav Tiwari, Abhay Saxena",
      link: "https://doi.org/10.1007/s10742-024-00329-2",
    },
    {
      date: "2025",
      title: "Effect of Zircon on Aluminum/Graphite Alloy Hybrid Composites",
      category: "Transactions of Indian Institute of Metals",
      description:
        "Research on the effect of zircon reinforcement on aluminum/graphite hybrid composite materials, analyzing mechanical properties and structural improvements.",
      image:
        "https://images.pexels.com/photos/19825178/pexels-photo-19825178.jpeg",
      authors: "DSU Materials Science Team",
      link: "https://doi.org/10.1007/s40735-025-00944-7",
    },
    {
      date: "2025",
      title:
        "Perovskite Solar Cell Stability Analysis Using Advanced Techniques",
      category: "Progress in Photovoltaics",
      description:
        "Advanced stability analysis of perovskite solar cells using cutting-edge characterization techniques to improve long-term performance and reliability.",
      image:
        "https://images.pexels.com/photos/35501726/pexels-photo-35501726.jpeg",
      authors: "DSU Renewable Energy Lab",
      link: "https://doi.org/10.1002/pip.3861",
    },
    {
      date: "2025",
      title: "Host–Guest Inclusion Complexes of Tafamidis",
      category: "Journal of Molecular Structure",
      description:
        "Comprehensive study on host-guest inclusion complexes involving tafamidis, examining molecular interactions and structural characterization.",
      image:
        "https://images.pexels.com/photos/25626509/pexels-photo-25626509.jpeg",
      authors: "DSU Chemistry Research",
      link: "https://doi.org/10.1016/j.molstruc.2025.141649",
    },
    {
      date: "2025",
      title: "Development of a Scaled-Down Test Rig for Wheel Systems",
      category: "Journal of Thermal Science and Engineering Applications",
      description:
        "Design and development of a laboratory-scale test rig for studying wheel system performance, thermal behavior, and durability characteristics.",
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
        "Investigation of caffeine's molecular effects on membrane dynamics and protein interactions using advanced computational and experimental techniques.",
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
        "Novel application of fiber Bragg gratings for high-precision temperature sensing in industrial and scientific applications.",
      image:
        "https://images.pexels.com/photos/16777744/pexels-photo-16777744.jpeg",
      authors: "DSU Photonics Lab",
      link: "https://doi.org/10.1007/s12596-024-01894-y",
    },
    {
      date: "2025",
      title:
        "Synthesis, Characterization and Computational Study of Molecular Systems",
      category: "Journal of Molecular Structure",
      description:
        "Integrated approach combining chemical synthesis, experimental characterization, and computational modeling for understanding molecular systems and their properties.",
      image:
        "https://images.pexels.com/photos/7723393/pexels-photo-7723393.jpeg",
      authors: "DSU Computational Chemistry",
      link: "https://doi.org/10.1016/j.molstruc.2025.142056",
    },
    {
      date: "2024",
      title: "Multilayer Coating-Assisted Gold-Encapsulated Nanostructures",
      category: "Journal of Optics",
      description:
        "Development of advanced multilayer coating techniques for creating gold-encapsulated nanostructures with enhanced optical and plasmonic properties.",
      image:
        "https://images.pexels.com/photos/16777744/pexels-photo-16777744.jpeg",
      authors: "DSU Nanotechnology Research",
      link: "https://doi.org/10.1007/s12596-024-01711-6",
    },
    {
      date: "2024",
      title:
        "Optimizing Solar Radiation Forecasting for Renewable Energy Applications",
      category: "Journal of Solar Energy & Sustainable Development",
      description:
        "Advanced forecasting methods for predicting solar radiation patterns to optimize renewable energy generation and grid integration.",
      image:
        "https://images.pexels.com/photos/9799712/pexels-photo-9799712.jpeg",
      authors: "DSU Sustainable Energy Institute",
      link: "https://doi.org/10.51646/jsesd.v14i1.386",
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
      color: "brand-magenta",
      delay: "0.1s",
      href: "/academics/computer-applications",
      image:
        "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
      title: "School of Computer Applications",
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
      description: "",
      programs: ["B.Com", "BBA", "MBA", "Finance & Marketing"],
    },
    {
      key: "sciences",
      icon: FlaskConical,
      color: "brand-magenta",
      delay: "0.4s",
      href: "/academics/basic-applied-sciences",
      image:
        "https://images.pexels.com/photos/9628799/pexels-photo-9628799.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
      title: "School of Applied Sciences",
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
      description: "",
      programs: ["Pharmacy", "Nursing", "CDSIMER", "Allied Health"],
    },
    {
      key: "design",
      icon: Film,
      color: "brand-magenta",
      delay: "0.7s",
      href: "/academics/design/bdesign",
      image:
        "https://images.pexels.com/photos/7147711/pexels-photo-7147711.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
      title: "School of Design",
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
        "https://images.pexels.com/photos/12306438/pexels-photo-12306438.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
      title: "School of Journalism & Mass Communication",
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
      title: "Medical Education & Research",
      description: "",
      programs: ["MBBS", "MD", "DM", "Fellowship"],
    },
  ];

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
      poster:
        "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F85cbfdbb2c9047f0b769200939941be9?format=webp&width=800",
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
      title:
        "9th Convocation at DSU: A Day of Reflection, Gratitude, and Pride",
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

  // Auto-rotate featured news every 8 seconds (pauses when video is playing)
  useEffect(() => {
    if (isVideoPlaying) {
      return;
    }

    const interval = setInterval(() => {
      setNewsTransitioning(true);
      setTimeout(() => {
        setFeaturedNewsIndex((prev) => (prev + 1) % allFeaturedNews.length);
        setNewsTransitioning(false);
      }, 300);
      setRotationProgress(0);
    }, 8000);

    const progressInterval = setInterval(() => {
      setRotationProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 100 / 80;
      });
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [allFeaturedNews.length, isVideoPlaying]);

  // Auto-rotate publications every 8 seconds (pauses when user interacts)
  useEffect(() => {
    if (isPublicationInteracting) {
      return;
    }

    const interval = setInterval(() => {
      setSelectedPublicationIndex(
        (prev) => (prev + 1) % allPublications.length,
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [allPublications.length, isPublicationInteracting]);

  // Get current featured item and remaining items
  const currentFeatured = allFeaturedNews[featuredNewsIndex];
  const remainingNews = allFeaturedNews.filter(
    (_, idx) => idx !== featuredNewsIndex,
  );

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section with Full-Screen Video Background */}
      <section
        className="hero-section relative h-[40vh] md:h-[75vh] flex flex-col justify-between md:overflow-hidden overflow-visible"
        style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
      >
        {/* Full-screen Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <HeroVideo />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-3 w-full z-10 flex flex-col justify-between h-full py-4 md:py-0 md:items-start md:justify-center">
          {/* Title Section - Top on mobile */}
          <div className="max-w-4xl pt-2 md:pt-0 md:pb-12">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 sm:mb-3 md:mb-4 leading-tight font-display">
              Dayananda Sagar University
            </h1>
            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-1 sm:mb-2 md:mb-6 leading-tight font-display hidden sm:block">
              India's AI First University
            </p>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-medium text-white/90 hidden sm:block font-display">
              Powered by NVIDIA
            </p>
          </div>

          {/* Buttons Section - Bottom on mobile */}
          <div className="flex flex-col gap-1 sm:gap-2 md:gap-4">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
              <a
                href="https://admissions.dsu.edu.in/"
                target="_blank"
                rel="noreferrer"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-orange-600 hover:text-orange-700 px-4 sm:px-8 py-2 sm:py-6 text-xs sm:text-base font-semibold font-display transition-all duration-300 group border-2 border-white"
                >
                  Apply Today
                  <ArrowRight className="w-3 sm:w-5 h-3 sm:h-5 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a
                href="https://dsu.edu.in/virtual-tour/"
                target="_blank"
                rel="noreferrer"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-black hover:text-black px-4 sm:px-8 py-2 sm:py-6 text-xs sm:text-base font-semibold font-display transition-all duration-300 group border-2 border-white"
                >
                  Virtual Tour
                </Button>
              </a>
            </div>
            <Link
              to="/ai-first"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background hidden sm:block"
            >
              <Button
                size="lg"
                className="bg-white hover:bg-white/90 text-black hover:text-black px-4 sm:px-8 py-2 sm:py-6 text-xs sm:text-base font-semibold font-display transition-all duration-300 group border-2 border-white"
              >
                Build the Future of AI at DSU
                <ArrowRight className="w-3 sm:w-5 h-3 sm:h-5 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Performance Indicators Section */}
      <section className="px-3 py-8 relative bg-gradient-to-r from-brand-magenta/5 via-brand-orange/5 to-brand-blue/5 border-y border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="headline-2 mb-4">Recognized Excellence</h2>
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
      <section className="px-3 py-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="headline-2 mb-6">
              Academic Excellence That Inspires
            </h2>
            <p className="subheadline text-foreground max-w-3xl mx-auto font-display">
              Discover our diverse range of undergraduate and postgraduate
              programs designed to shape the leaders of tomorrow.
            </p>
          </div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 auto-rows-max"
            style={{ contain: "layout style paint" }}
          >
            {schoolsData.map((school, index) => {
              const styles = [
                { bg: "bg-orange-500/10", border: "border-orange-500/20" },
                { bg: "bg-pink-500/10", border: "border-pink-500/20" },
                { bg: "bg-blue-500/10", border: "border-blue-500/20" },
                { bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
                { bg: "bg-purple-500/10", border: "border-purple-500/20" },
                { bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
                { bg: "bg-amber-500/10", border: "border-amber-500/20" },
                { bg: "bg-rose-500/10", border: "border-rose-500/20" },
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
                    className={`${style.bg} ${style.border} border border-t-0 rounded-none p-3 flex flex-col justify-center items-center h-24 w-full backdrop-blur-sm`}
                  >
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-foreground font-display hover:text-brand-magenta transition-colors text-center">
                        {school.title}
                      </h3>
                    </div>
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

      {/* Featured News Section */}
      <section className="px-3 py-10 bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5">
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

          <div
            className="grid lg:grid-cols-3 gap-0 items-start"
            style={{ contain: "layout style paint" }}
          >
            {/* Left side - Featured story (50%) - Auto-rotating */}
            <div className="lg:col-span-2" style={{ contain: "content" }}>
              <div className="relative">
                <button
                  onClick={() => setSelectedNews(currentFeatured)}
                  className={`w-full flex flex-col rounded-none border border-orange-500/20 bg-orange-500/10 cursor-pointer text-left overflow-hidden featured-news-card transition-all duration-300 ${
                    newsTransitioning
                      ? "featured-news-exit"
                      : "featured-news-enter"
                  }`}
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
                      loading="lazy"
                      className="w-full max-h-96 object-contain"
                    />
                  )}
                  <div className="p-4 flex-1 flex flex-col space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <div className="relative">
                        <Badge
                          className={`text-xs ${currentFeatured.color === "brand-orange" ? "bg-brand-orange/20 text-brand-orange" : currentFeatured.color === "brand-magenta" ? "bg-brand-magenta/20 text-brand-magenta" : "bg-brand-blue/20 text-brand-blue"}`}
                        >
                          {currentFeatured.category}
                        </Badge>
                        {!newsTransitioning && (
                          <div className="absolute -top-1 -right-1 w-2 h-2 bg-brand-magenta rounded-full featured-news-pulse" />
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
                        Auto-rotating • {featuredNewsIndex + 1} of{" "}
                        {allFeaturedNews.length}
                      </div>
                      <div className="flex gap-1">
                        {allFeaturedNews.map((_, idx) => (
                          <div
                            key={idx}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              idx === featuredNewsIndex
                                ? "w-4 bg-brand-magenta"
                                : "w-1.5 bg-foreground/30 hover:bg-foreground/50"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div
                className="rotation-progress-bar"
                style={{ width: `${rotationProgress}%` }}
              />
            </div>

            {/* Right side - Remaining stories (50%) - 2 column grid */}
            <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-0 auto-rows-max">
              {remainingNews.slice(0, 4).map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedNews(item)}
                  className={`group rounded-none overflow-hidden border text-left cursor-pointer news-grid-item transition-all duration-300 ${
                    idx % 2 === 0
                      ? "bg-blue-500/10 border-blue-500/20 hover:border-blue-500/40"
                      : "bg-purple-500/10 border-purple-500/20 hover:border-purple-500/40"
                  }`}
                >
                  <div className="relative">
                    {item.isVideo ? (
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
                        className="h-32 w-full object-cover news-card-image"
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DSU Publications Section */}
      <section className="px-3 py-10 bg-gradient-to-b from-brand-magenta/5 via-brand-blue/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-1 w-8 bg-brand-magenta rounded-full"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-magenta">Research Excellence</span>
              <div className="h-1 w-8 bg-brand-magenta rounded-full"></div>
            </div>
            <h2 className="headline-2 mb-6">
              <span className="text-foreground">DSU </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Research Publications
              </span>
            </h2>
            <p className="subheadline text-foreground max-w-2xl mx-auto font-display">
              Discover cutting-edge research and academic insights from our top scholars across multiple disciplines
            </p>
          </div>

          {/* Featured Publication */}
          <div className="mb-12" style={{ contain: "content" }}>
            <div className="w-full flex flex-col rounded-xl border-2 border-brand-magenta/30 bg-gradient-to-br from-brand-magenta/10 to-brand-orange/5 cursor-pointer text-left overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-foreground/5 to-brand-magenta/5">
                <img
                  src={allPublications[selectedPublicationIndex].image}
                  alt={allPublications[selectedPublicationIndex].title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="eager"
                />
              </div>

              <div className="p-8 space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-3">
                    <Badge className="bg-brand-magenta/25 text-brand-magenta border border-brand-magenta/50 w-fit">
                      {allPublications[selectedPublicationIndex].category}
                    </Badge>
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-brand-magenta animate-pulse"></span>
                      <span className="text-xs font-semibold text-brand-magenta">Featured Publication</span>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-foreground/60">
                    {allPublications[selectedPublicationIndex].date}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground font-display leading-tight bg-gradient-to-r from-brand-magenta via-brand-orange to-brand-magenta bg-clip-text text-transparent">
                  {allPublications[selectedPublicationIndex].title}
                </h3>
                <p className="text-foreground/85 font-body leading-relaxed">
                  {allPublications[selectedPublicationIndex].description}
                </p>
                <div className="pt-2 border-t border-foreground/10">
                  <p className="text-sm text-brand-magenta font-semibold">
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
                      <Button className="bg-brand-gradient hover:shadow-lg hover:shadow-brand-magenta/50 text-foreground font-semibold gap-2 transform group-hover:translate-x-1 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </a>
                  ) : (
                    <Button className="bg-brand-gradient hover:shadow-lg hover:shadow-brand-magenta/50 text-foreground font-semibold gap-2">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  )}
                  <div className="text-xs text-foreground/60 font-semibold">
                    {selectedPublicationIndex + 1} / {allPublications.length}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Publications Grid with Dynamic Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
            {allPublications.map((publication, idx) => {
              const isSpringer = publication.category.includes("Springer");
              const isHighImpact = ["Physical Review E", "Progress in Photovoltaics"].includes(publication.category);
              const colors = [
                "from-brand-magenta/20 to-brand-magenta/5",
                "from-brand-blue/20 to-brand-blue/5",
                "from-brand-orange/20 to-brand-orange/5",
                "from-emerald-500/20 to-emerald-500/5",
                "from-purple-500/20 to-purple-500/5",
              ];
              const borderColors = [
                "border-brand-magenta/30 hover:border-brand-magenta",
                "border-brand-blue/30 hover:border-brand-blue",
                "border-brand-orange/30 hover:border-brand-orange",
                "border-emerald-500/30 hover:border-emerald-500",
                "border-purple-500/30 hover:border-purple-500",
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
                  className={`group relative overflow-hidden rounded-xl border-2 transition-all duration-300 p-4 text-left h-full backdrop-blur-sm ${
                    selectedPublicationIndex === idx
                      ? "border-brand-magenta bg-brand-magenta/20 shadow-2xl shadow-brand-magenta/20 scale-105 z-10"
                      : `${borderColors[idx % 5]} bg-gradient-to-br ${colors[idx % 5]} hover:shadow-xl hover:shadow-brand-magenta/10`
                  }`}
                  style={{
                    animation: selectedPublicationIndex === idx ? "pulse 2s infinite" : "none",
                  }}
                >
                  {/* Background accent */}
                  <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-brand-magenta/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>

                  <div className="space-y-3 relative z-10">
                    {/* Header with badges */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex flex-col gap-2">
                        <Badge
                          variant="secondary"
                          className={`text-xs flex-shrink-0 ${
                            isSpringer
                              ? "bg-brand-magenta/25 text-brand-magenta border-brand-magenta/50"
                              : isHighImpact
                              ? "bg-brand-blue/25 text-brand-blue border-brand-blue/50"
                              : "bg-brand-orange/25 text-brand-orange border-brand-orange/50"
                          }`}
                        >
                          {isSpringer ? "Q1 Journal" : isHighImpact ? "High Impact" : "Research"}
                        </Badge>
                      </div>
                      <span className="text-xs text-foreground/60 flex-shrink-0 font-semibold">
                        {publication.date}
                      </span>
                    </div>

                    {/* Title with improved styling */}
                    <h4 className="text-xs font-bold text-foreground font-display group-hover:text-brand-magenta transition-colors line-clamp-3 leading-tight">
                      {publication.title}
                    </h4>

                    {/* Category description */}
                    <p className="text-xs text-foreground/70 line-clamp-1 font-medium">
                      {publication.category}
                    </p>

                    {/* CTA indicator */}
                    <div className="flex items-center justify-between pt-2 border-t border-foreground/10">
                      <div className="flex items-center gap-2 text-brand-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1">
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-xs font-semibold">Details</span>
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full bg-foreground/5 text-foreground/60 group-hover:bg-brand-magenta/20 group-hover:text-brand-magenta transition-all">
                        {idx + 1}/{allPublications.length}
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

      {/* CTA Section */}
      <section className="px-3 py-10 relative">
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
              {["Merit Scholarships Available", "Industry Partnerships"].map(
                (badge, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-3 py-1 text-xs font-medium font-body"
                  >
                    {badge}
                  </Badge>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <NewsModal
        newsItem={selectedNews}
        onClose={() => setSelectedNews(null)}
      />
    </div>
  );
}
