import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";
import {
  ArrowRight,
  Building,
  Users,
  Star,
  Heart,
  Music,
  Trophy,
  BookOpen,
  Microscope,
  Laptop,
  MapPin,
  ChevronRight,
  Rocket,
  Volume2,
  VolumeX,
  Zap,
  Target,
  Globe,
} from "lucide-react";

export default function CampusLife() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { elementRef: pillarsRef, isVisible: pillarsVisible } =
    useScrollTrigger();
  const { elementRef: storiesRef, isVisible: storiesVisible } =
    useScrollTrigger();
  const { elementRef: facilitiesRef, isVisible: facilitiesVisible } =
    useScrollTrigger();
  const { elementRef: organizationsRef, isVisible: organizationsVisible } =
    useScrollTrigger();
  const { elementRef: galleryRef, isVisible: galleryVisible } =
    useScrollTrigger();
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollTrigger();

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-campus">
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 hero-zoom-video">
          <video
            ref={videoRef}
            src="https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2F6b0c30504ae64c6aba12aa275eeac2e0?alt=media&token=038cd5f6-c13b-43c6-8760-c92abdbbc4dd&apiKey=4aa279a8430d441dba9c55f659831878"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-slate-800/10 to-slate-900/20"></div>

        <div className="relative h-full flex flex-col justify-between text-left max-w-7xl mx-auto px-3 pt-8 md:pt-16 pb-8 md:pb-16">
          <div className="rounded-none px-4 md:px-8">
            <a
              href="https://dsu.edu.in/virtual-tour/"
              target="_blank"
              rel="noreferrer"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background inline-block mb-6"
            >
              <Button
                size="lg"
                className="hero-button bg-black/10 border border-transparent hover:bg-black/20 backdrop-blur-sm text-foreground px-10 py-6 text-lg font-semibold rounded-full inline-flex items-center transition-all duration-300"
              >
                Explore Student Life
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>

            <div className="hero-badge inline-flex items-center px-4 py-2 bg-orange-500/30 rounded-full border border-orange-500/60 mb-6">
              <Rocket className="w-4 h-4 text-orange-200 mr-2" />
              <span className="text-xs md:text-sm font-semibold text-orange-100">
                Where Innovation Happens
              </span>
            </div>

            <h1
              className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg font-campus-display"
              style={{
                textShadow:
                  "0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6)",
              }}
            >
              Life That Builds the Future
            </h1>
          </div>

          <div className="rounded-none px-4 md:px-8 max-w-3xl mt-auto pb-20 md:pb-32">
            <p
              className="hero-title text-sm sm:text-base md:text-lg text-white/95 leading-relaxed max-w-2xl drop-shadow-md"
              style={{ textShadow: "0 1px 4px rgba(0, 0, 0, 0.8)" }}
            >
              At India's AI-First University, campus life seamlessly integrates
              research, innovation, leadership, and community—shaping graduates
              who drive global impact.
            </p>
          </div>
        </div>

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
      </section>

      {/* ===== 4 PILLARS SECTION ===== */}
      <section
        ref={pillarsRef}
        className={`px-3 py-16 bg-gradient-to-b from-background to-slate-900/30 transition-opacity duration-700 ${
          pillarsVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6">
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Four Dimensions of Excellence
              </span>
            </h2>
            <p className="subheadline text-foreground/80 max-w-3xl mx-auto font-raleway">
              How campus experiences at DSU develop research-driven, innovative,
              and globally competent professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                icon: Rocket,
                title: "Research & Innovation",
                description:
                  "Hackathons, hands-on projects, AI labs, and innovation challenges where students build, ship, and launch real solutions.",
                highlights: [
                  "Hackathons & 48-hour innovation sprints",
                  "NASA Space Apps & international competitions",
                  "Student-led research labs & mentorship",
                ],
                image:
                  "https://images.pexels.com/photos/1181260/pexels-photo-1181260.jpeg",
                link: "/research-publications",
              },
              {
                icon: Target,
                title: "Leadership & Careers",
                description:
                  "Startup incubation, industry partnerships, tech talks, and professional chapters turn student ideas into careers and ventures.",
                highlights: [
                  "Student incubator & startup mentorship",
                  "Industry hiring from hackathons & projects",
                  "Professional chapters (IEEE, ACM, SAE)",
                ],
                image:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
                link: "#",
              },
              {
                icon: Music,
                title: "Creative Expression",
                description:
                  "Performing arts, cultural events, and creative clubs balance technical rigor with artistic growth and diversity.",
                highlights: [
                  "Annual cultural festival & performances",
                  "Student-run arts organizations",
                  "Cross-cultural collaboration",
                ],
                image:
                  "https://static.wixstatic.com/media/a57b29_7432beeeab194cf19d467960322ed7b7~mv2.jpg/v1/fit/w_960,h_960,q_90,enc_avif,quality_auto/a57b29_7432beeeab194cf19d467960322ed7b7~mv2.jpg",
                link: "#",
              },
              {
                icon: Trophy,
                title: "Sports & Wellness",
                description:
                  "Athletic programs, sports meets, and social impact initiatives build teamwork, discipline, and community commitment.",
                highlights: [
                  "Competitive sports programs & inter-college meets",
                  "Community service & volunteering",
                  "Wellness & fitness initiatives",
                ],
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F4965c58a577f42679515554a2c799501?format=webp&width=800",
                link: "#",
              },
            ].map((pillar, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-500 backdrop-blur-sm border border-border/50 bg-gradient-to-br from-card/80 via-card/60 to-card/40"
                style={{
                  animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="relative overflow-hidden h-64 bg-black">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                </div>

                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-brand-blue transition-colors mb-2">
                        {pillar.title}
                      </h3>
                    </div>
                    <pillar.icon className="w-6 h-6 text-brand-blue flex-shrink-0" />
                  </div>

                  <p className="text-foreground/80 leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    {pillar.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center text-foreground/90 text-sm"
                      >
                        <span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>
                        {highlight}
                      </div>
                    ))}
                  </div>

                  <Link
                    to={pillar.link}
                    className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-magenta transition-colors text-sm font-semibold mt-2"
                  >
                    Explore <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RESEARCH-FOCUSED STUDENT STORIES ===== */}
      <section
        ref={storiesRef}
        className={`px-3 py-16 transition-opacity duration-700 ${
          storiesVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6">
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                From Projects to Careers
              </span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              How hackathons, labs, and innovation challenges launch student
              careers and startup ideas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Priya Sharma",
                program: "B.Tech AI & Robotics",
                year: "3rd Year",
                achievement:
                  "Built an AI-powered mental health chatbot at DSU's AI Hackathon. Won 1st place; internship offer from TCS for AI product development.",
                quote:
                  "The hackathon pushed me to ship real code in 48 hours. That experience landed me an internship before graduation.",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F595bbbef684e4f9fbdc3e7401a0aa8aa?format=webp&width=800",
              },
              {
                name: "Arjun Mehta",
                program: "B.Tech Mechanical Engineering",
                year: "4th Year",
                achievement:
                  "Designed & prototyped a thermal testing rig in campus labs. Turned project into startup idea; currently in DSU Incubator with 3 co-founders.",
                quote:
                  "Campus labs and mentor support helped us validate an idea into a real business. We're now building a product.",
                image:
                  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=500&fit=crop",
              },
              {
                name: "Anaya Patel",
                program: "B.Tech Materials Science",
                year: "2nd Year",
                achievement:
                  "Participated in renewable energy innovation challenge; developed solar cell testing protocol. Recruited into faculty research lab + secured internship at IIT.",
                quote:
                  "Taking on student-led projects opened doors to real research opportunities and career paths I didn't expect.",
                image:
                  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=500&fit=crop",
              },
            ].map((story, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-500 backdrop-blur-sm border border-border/50 bg-gradient-to-br from-card/80 via-card/60 to-card/40"
                style={{
                  animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="relative overflow-hidden h-64 bg-black">
                  <img
                    src={story.image}
                    alt={story.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                </div>

                <CardHeader className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-brand-blue transition-colors">
                      {story.name}
                    </h3>
                    <p className="text-sm text-foreground/70 mt-1">
                      {story.program}
                    </p>
                    <Badge
                      variant="secondary"
                      className="mt-2 text-xs bg-brand-blue/20 text-brand-blue"
                    >
                      {story.year}
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="text-sm text-foreground/80 font-medium leading-relaxed">
                      <strong>Achievement:</strong> {story.achievement}
                    </div>

                    <blockquote className="text-foreground/80 italic border-l-2 border-orange-500 pl-3 py-2 text-sm">
                      "{story.quote}"
                    </blockquote>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ENTREPRENEURSHIP ECOSYSTEM ===== */}
      <section className="px-3 py-16 bg-gradient-to-b from-blue-500/10 via-transparent to-blue-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6">
              <span className="text-foreground">DSU's </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Entrepreneurship Ecosystem
              </span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              15+ years of nurturing innovators—from the IEDC (2009) to today's
              AIC-DSU backed by NITI Aayog & Government of India
            </p>
          </div>

          {/* Two Pillars: Heritage + Modern */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* DERBI Foundation - Heritage */}
            <Card className="overflow-hidden border border-border/50 bg-gradient-to-br from-card/80 via-card/60 to-card/40 rounded-lg hover:border-brand-blue/50 transition-colors">
              <CardHeader className="space-y-4">
                <div>
                  <Badge className="bg-brand-blue/20 text-brand-blue mb-4 text-xs font-bold px-3 py-1">
                    Est. 2009
                  </Badge>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    DERBI Foundation
                  </h3>
                  <p className="text-sm text-brand-blue">
                    Innovation & Entrepreneurship Development Centre
                  </p>
                </div>

                <p className="text-foreground/85 leading-relaxed">
                  "All started with a seed of thought, subsequent small steps
                  and a simple decision"—DERBI was established to nurture
                  entrepreneurship among students and faculty of Dayananda Sagar
                  Institutions, laying the foundation for DSU's innovation
                  culture.
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-2 h-2 bg-brand-blue rounded-full"></span>
                    Student entrepreneurship mentorship
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-2 h-2 bg-brand-blue rounded-full"></span>
                    Business ideation workshops
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-2 h-2 bg-brand-blue rounded-full"></span>
                    Early-stage startup support
                  </div>
                </div>

                <a
                  href="https://derbifoundation.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Button
                    variant="outline"
                    className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue/10 px-6 py-2 text-sm rounded-lg transition-all duration-300 group w-full"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </CardHeader>
            </Card>

            {/* AIC-DSU - Modern */}
            <Card className="overflow-hidden border border-border/50 bg-gradient-to-br from-card/80 via-card/60 to-card/40 rounded-lg hover:border-brand-blue/50 transition-colors">
              <CardHeader className="space-y-4">
                <div>
                  <Badge className="bg-brand-blue/20 text-brand-blue mb-4 text-xs font-bold px-3 py-1">
                    Govt. Backed
                  </Badge>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    AIC-DSU Innovation Foundation
                  </h3>
                  <p className="text-sm text-brand-blue">
                    Atal Incubation Center | NITI Aayog & AIM
                  </p>
                </div>

                <p className="text-foreground/85 leading-relaxed">
                  Building on DERBI's legacy, AIC-DSU is an official Atal
                  Incubation Center transforming student hackathons and projects
                  into scalable startups with government backing, mentorship,
                  and investor networks.
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-2 h-2 bg-brand-blue rounded-full"></span>
                    25+ startups incubated
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-2 h-2 bg-brand-blue rounded-full"></span>
                    ₹50Cr+ funding raised
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-2 h-2 bg-brand-blue rounded-full"></span>
                    150+ jobs created
                  </div>
                </div>

                <a
                  href="https://aicdsu.foundation"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Button className="bg-brand-blue hover:bg-brand-blue/90 text-foreground px-6 py-2 text-sm rounded-lg transition-all duration-300 group w-full">
                    Explore AIC-DSU
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </CardHeader>
            </Card>
          </div>

          {/* Timeline showing progression */}
          <div className="mt-16 pt-12 border-t border-blue-500/20">
            <h3 className="text-2xl font-bold text-center text-foreground mb-10">
              The Entrepreneurship Journey
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  year: "2009",
                  title: "DERBI Founded",
                  desc: "Entrepreneurship culture begins",
                },
                {
                  year: "2015",
                  title: "Growth Phase",
                  desc: "100+ startups mentored",
                },
                {
                  year: "2021",
                  title: "AIC-DSU Launched",
                  desc: "Government recognition",
                },
                {
                  year: "Today",
                  title: "Scaling Impact",
                  desc: "25+ active startups",
                },
              ].map((milestone, idx) => (
                <div key={idx} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-blue/20 border border-brand-blue/50 mb-4 mx-auto">
                    <span className="font-bold text-brand-blue text-sm">
                      {idx + 1}
                    </span>
                  </div>
                  <p className="text-lg font-bold text-brand-blue mb-1">
                    {milestone.year}
                  </p>
                  <h4 className="font-semibold text-foreground mb-2">
                    {milestone.title}
                  </h4>
                  <p className="text-sm text-foreground/70">{milestone.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== RESEARCH-READY FACILITIES ===== */}
      <section
        ref={facilitiesRef}
        className={`px-3 py-16 bg-gradient-to-r from-orange-500/5 to-red-600/5 transition-opacity duration-700 ${
          facilitiesVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display">
              <span className="text-foreground">World-Class </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Infrastructure
              </span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              State-of-the-art facilities enabling research breakthroughs,
              innovation, and global-quality learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                icon: Microscope,
                title: "Research & Learning Centers",
                description:
                  "Comprehensive library with 2M+ books, digital archives, AI labs, and specialized research centers enabling world-class experimentation and discovery.",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F303af6a81dfe4b5bb9ea6952ee39c3b7?format=webp&width=800",
                href: null,
              },
              {
                icon: Laptop,
                title: "Maker Spaces & Labs",
                description:
                  "AI labs, 3D printing, electronics workshops, and collaborative studios where students prototype, build, and test ideas from concept to launch.",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F789e863b32fb465eab9cad2700973c01?format=webp&width=800",
                href: null,
              },
              {
                icon: Building,
                title: "Student Living",
                description:
                  "Modern hostels with high-speed connectivity and wellness facilities designed to support academic success and student health.",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F6c9d0613167f4e2eb914a419384301a0?format=webp&width=800",
                href: "https://myposhtell.com",
              },
              {
                icon: Users,
                title: "Social & Wellness Spaces",
                description:
                  "Dining, sports facilities, performance venues, and recreational areas that build community and support holistic student development.",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Feaa91fe5c0b44c02b3ead40543f73fff?format=webp&width=800",
                href: null,
              },
            ].map((facility, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center"
                style={{
                  animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {facility.href ? (
                  <a
                    href={facility.href}
                    target="_blank"
                    rel="noreferrer"
                    className="relative overflow-hidden rounded-none h-80 border border-border hover:border-orange-500/50 transition-colors group cursor-pointer"
                  >
                    <img
                      src={facility.image}
                      alt={facility.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </a>
                ) : (
                  <div className="relative overflow-hidden rounded-none h-80 border border-border hover:border-orange-500/50 transition-colors group">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <facility.icon className="w-8 h-8 text-brand-blue flex-shrink-0 mt-1" />
                    {facility.href ? (
                      <a
                        href={facility.href}
                        target="_blank"
                        rel="noreferrer"
                        className="block hover:text-brand-blue transition-colors"
                      >
                        <h3 className="text-2xl font-bold text-foreground hover:text-brand-blue transition-colors">
                          {facility.title}
                        </h3>
                      </a>
                    ) : (
                      <h3 className="text-2xl font-bold text-foreground">
                        {facility.title}
                      </h3>
                    )}
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STUDENT ORGANIZATIONS (REFRAMED) ===== */}
      <section
        ref={organizationsRef}
        className={`px-3 py-16 transition-opacity duration-700 ${
          organizationsVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 font-campus-display">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Student
              </span>
              <span className="text-foreground"> Ecosystem</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              100+ clubs and organizations aligned with innovation, research,
              arts, and community impact
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { category: "Innovation & Technology", icon: Rocket },
              { category: "Research & Professional Bodies", icon: Microscope },
              { category: "Arts & Culture", icon: Music },
              { category: "Sports & Wellness", icon: Trophy },
              { category: "Social Impact", icon: Heart },
            ].map((org, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-500 backdrop-blur-sm border rounded-none bg-slate-900/50 border-orange-500/10 p-6 text-center"
                style={{
                  animation: `slideInUp 0.6s ease-out ${index * 0.08}s both`,
                }}
              >
                <org.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <h3 className="font-bold text-foreground">{org.category}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CURATED CAMPUS GALLERY ===== */}
      <section
        ref={galleryRef}
        className={`px-3 py-16 bg-gradient-to-r from-orange-500/5 to-red-600/5 transition-opacity duration-700 ${
          galleryVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-campus-display">
              <span className="text-foreground">Campus </span>
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Moments
              </span>
            </h2>
            <p className="text-lg text-foreground/80">
              Curated glimpses of research, innovation, and community at DSU
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
            {[
              {
                title: "AI Research Lab",
                image:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop",
              },
              {
                title: "Campus Innovation Hub",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fa16295c3fda14368b934b709019e0e30?format=webp&width=300",
              },
              {
                title: "Cultural Performance",
                image:
                  "https://static.wixstatic.com/media/a57b29_7432beeeab194cf19d467960322ed7b7~mv2.jpg/v1/fit/w_300,h_300,q_90",
              },
              {
                title: "Sports Excellence",
                image:
                  "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300&h=300&fit=crop",
              },
              {
                title: "Research Symposium",
                image:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop",
              },
              {
                title: "Student Community",
                image:
                  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=300&h=300&fit=crop",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-none border border-border hover:border-orange-500/50 transition-all duration-300 cursor-pointer aspect-square"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                  <p className="font-bold text-white text-xs">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section
        ref={ctaRef}
        className={`px-3 py-16 transition-opacity duration-700 ${
          ctaVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center px-3">
          <div className="bg-gradient-to-r from-orange-500/10 via-red-600/10 to-pink-500/10 rounded-2xl md:rounded-3xl p-8 md:p-12 border border-orange-500/20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight font-campus-display">
              Ready to build the future at
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                {" "}
                India's AI-First University
              </span>
              ?
            </h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join a community where research, innovation, and global
              collaboration shape the next generation of leaders and innovators.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-10">
              <a
                href="https://dsu.edu.in/virtual-tour/"
                target="_blank"
                rel="noreferrer"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 via-red-600 to-pink-500 text-foreground px-8 sm:px-12 py-6 text-sm sm:text-base font-semibold rounded-full hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 group w-full sm:w-auto"
                >
                  Virtual Tour
                  <MapPin className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
              </a>
              <a
                href="https://admissions.dsu.edu.in/"
                target="_blank"
                rel="noreferrer"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500/10 hover:border-orange-400 px-8 sm:px-12 py-6 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 w-full sm:w-auto"
                >
                  Apply Now
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
                </Button>
              </a>
            </div>

            {/* Trust Signals */}
            <div className="pt-8 border-t border-orange-500/20">
              <p className="text-sm text-foreground/70 mb-6">
                Recognized for excellence by students, faculty, and industry
              </p>
              <div className="grid grid-cols-3 gap-6 items-center justify-center">
                <div className="flex flex-col items-center">
                  <Badge className="bg-orange-500/20 text-orange-400 mb-2 text-sm font-bold px-4 py-1">
                    NAAC A+ Accredited
                  </Badge>
                  <p className="text-xs text-foreground/60 mt-1">
                    Assured Quality
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    25,000+
                  </p>
                  <p className="text-xs text-foreground/60 mt-1">
                    Active Students
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    100+
                  </p>
                  <p className="text-xs text-foreground/60 mt-1">
                    Clubs & Societies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
