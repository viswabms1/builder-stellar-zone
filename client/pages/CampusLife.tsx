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

  const { elementRef: pillarsRef, isVisible: pillarsVisible } = useScrollTrigger();
  const { elementRef: storiesRef, isVisible: storiesVisible } = useScrollTrigger();
  const { elementRef: facilitiesRef, isVisible: facilitiesVisible } = useScrollTrigger();
  const { elementRef: organizationsRef, isVisible: organizationsVisible } = useScrollTrigger();
  const { elementRef: galleryRef, isVisible: galleryVisible } = useScrollTrigger();
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollTrigger();

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
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

        <div className="relative h-full flex items-start justify-start text-left max-w-7xl mx-auto px-3 pt-8">
          <div className="rounded-none px-3 md:px-8 py-8 max-w-2xl -ml-6 md:-ml-8">
            <div className="hero-badge inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full border border-orange-500/40 mb-4">
              <Rocket className="w-4 h-4 text-orange-300 mr-2" />
              <span className="text-sm font-medium text-orange-200">
                Where Innovation Happens
              </span>
            </div>

            <h1 className="hero-title text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Life That Builds the Future
            </h1>

            <p className="hero-title text-base md:text-lg text-white/85 leading-relaxed max-w-2xl">
              At India's AI-First University, campus life seamlessly integrates research, innovation, leadership, and community—shaping graduates who drive global impact.
            </p>
          </div>
        </div>

        <a
          href="https://dsu.edu.in/virtual-tour/"
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-8 left-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background z-10"
        >
          <Button
            size="lg"
            className="hero-button bg-black/10 border border-transparent hover:bg-black/20 backdrop-blur-sm text-foreground px-10 py-6 text-lg font-semibold rounded-full inline-flex items-center transition-all duration-300"
          >
            Explore Student Life
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </a>
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
            <h2 className="headline-2 mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Four Dimensions of Excellence
              </span>
            </h2>
            <p className="subheadline text-foreground/80 max-w-3xl mx-auto font-display">
              How campus experiences at DSU develop research-driven, innovative, and globally competent professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Rocket,
                title: "Research & Innovation",
                description:
                  "Hands-on research projects, AI labs, NASA Space Apps, and innovation competitions where students turn ideas into impact.",
                highlights: [
                  "Published research across AI, materials, energy",
                  "International hackathons and competitions",
                  "Faculty-led research mentorship",
                ],
                image:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
                link: "/research-publications",
              },
              {
                icon: Target,
                title: "Leadership & Careers",
                description:
                  "Industry partnerships, tech symposiums, and professional chapters (IEEE, ACM, SAE, NASSCOM) accelerate career readiness.",
                highlights: [
                  "Industry expert talks & networking",
                  "Professional certifications",
                  "Student-led technical societies",
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
                className="group overflow-hidden hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-500 backdrop-blur-sm border rounded-none bg-slate-900/50 border-orange-500/10"
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
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-orange-500 transition-colors mb-2">
                        {pillar.title}
                      </h3>
                    </div>
                    <pillar.icon className="w-6 h-6 text-orange-500 flex-shrink-0" />
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
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                        {highlight}
                      </div>
                    ))}
                  </div>

                  <Link
                    to={pillar.link}
                    className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors text-sm font-semibold mt-2"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Research in Action
              </span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              How DSU students turn campus experiences into published research and career breakthroughs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Priya Sharma",
                program: "B.Tech AI & Robotics",
                year: "3rd Year",
                achievement:
                  "Led research on AI-powered mental health diagnostics using multimodal learning (voice + facial data), achieving 20% accuracy improvement.",
                quote:
                  "Working on AI projects alongside faculty changed how I think about engineering.",
                image:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=500&fit=crop",
              },
              {
                name: "Arjun Mehta",
                program: "B.Tech Mechanical Engineering",
                year: "4th Year",
                achievement:
                  "Developed a scaled-down test rig for thermal analysis in wheel systems, published in Journal of Thermal Science and Engineering Applications.",
                quote:
                  "Campus labs gave me the tools to turn ideas into published research.",
                image:
                  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=500&fit=crop",
              },
              {
                name: "Anaya Patel",
                program: "B.Tech Materials Science",
                year: "2nd Year",
                achievement:
                  "Contributing to perovskite solar cell stability research under faculty mentorship, part of DSU's renewable energy innovation pipeline.",
                quote:
                  "Faculty mentorship and peer collaboration created the environment for real impact.",
                image:
                  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=500&fit=crop",
              },
            ].map((story, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-500 backdrop-blur-sm border rounded-none bg-slate-900/50 border-orange-500/10"
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
                    <h3 className="text-xl font-bold text-foreground group-hover:text-orange-500 transition-colors">
                      {story.name}
                    </h3>
                    <p className="text-sm text-foreground/70 mt-1">{story.program}</p>
                    <Badge
                      variant="secondary"
                      className="mt-2 text-xs bg-orange-500/20 text-orange-300"
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

      {/* ===== RESEARCH-READY FACILITIES ===== */}
      <section
        ref={facilitiesRef}
        className={`px-3 py-16 bg-gradient-to-r from-orange-500/5 to-red-600/5 transition-opacity duration-700 ${
          facilitiesVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">World-Class </span>
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Infrastructure
              </span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              State-of-the-art facilities enabling research breakthroughs, innovation, and global-quality learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                icon: Microscope,
                title: "Research-Ready Libraries & Labs",
                description:
                  "2M+ books, digital archives, and state-of-the-art research centers supporting AI, engineering, life sciences, and interdisciplinary innovation.",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F303af6a81dfe4b5bb9ea6952ee39c3b7?format=webp&width=800",
              },
              {
                icon: Laptop,
                title: "Innovation & Collaboration Hubs",
                description:
                  "Maker spaces, AI labs, and collaborative work areas where students prototype, test, and develop breakthrough solutions.",
                image:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
              },
              {
                icon: Building,
                title: "Accommodation & Wellness",
                description:
                  "Modern hostels with connectivity, fitness facilities, and wellness programs that support student health and productivity.",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F0357dfeb9259438fbb59b6cd31a06e5a?format=webp&width=800",
              },
              {
                icon: Users,
                title: "Community & Recreation Spaces",
                description:
                  "Multi-cuisine dining, sports complexes, and cultural venues that foster collaboration, creativity, and community.",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Feaa91fe5c0b44c02b3ead40543f73fff?format=webp&width=800",
              },
            ].map((facility, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
                style={{
                  animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="relative overflow-hidden rounded-none h-80 border border-border hover:border-orange-500/50 transition-colors group">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <facility.icon className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                    <h3 className="text-2xl font-bold text-foreground">
                      {facility.title}
                    </h3>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Student
              </span>
              <span className="text-foreground"> Ecosystem</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              100+ clubs and organizations aligned with innovation, research, arts, and community impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { category: "Innovation & Technology", members: "4,500+", icon: Rocket },
              { category: "Research & Professional Bodies", members: "3,500+", icon: Microscope },
              { category: "Arts & Culture", members: "2,500+", icon: Music },
              { category: "Sports & Wellness", members: "3,000+", icon: Trophy },
              { category: "Social Impact", members: "2,000+", icon: Heart },
            ].map((org, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-500 backdrop-blur-sm border rounded-none bg-slate-900/50 border-orange-500/10 p-6 text-center"
                style={{
                  animation: `slideInUp 0.6s ease-out ${index * 0.08}s both`,
                }}
              >
                <org.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">{org.category}</h3>
                <p className="text-2xl font-bold text-orange-500">{org.members}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Campus </span>
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Moments
              </span>
            </h2>
            <p className="text-lg text-foreground/80">
              Curated glimpses of research, innovation, and community at DSU
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { title: "AI Research Lab", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop" },
              { title: "Campus Innovation Hub", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fa16295c3fda14368b934b709019e0e30?format=webp&width=300" },
              { title: "Cultural Performance", image: "https://static.wixstatic.com/media/a57b29_7432beeeab194cf19d467960322ed7b7~mv2.jpg/v1/fit/w_300,h_300,q_90" },
              { title: "Sports Excellence", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300&h=300&fit=crop" },
              { title: "Research Symposium", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop" },
              { title: "Student Community", image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=300&h=300&fit=crop" },
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
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-500/10 via-red-600/10 to-pink-500/10 rounded-3xl p-12 border border-orange-500/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to experience
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                {" "}
                a campus designed for the future
              </span>
              ?
            </h2>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Where research, innovation, leadership, and community converge to build AI-ready, globally competent professionals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <a
                href="https://dsu.edu.in/virtual-tour/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 via-red-600 to-pink-500 text-foreground px-12 py-6 text-lg font-semibold rounded-full hover:shadow-lg hover:shadow-orange-500/30 transition-all"
                >
                  Visit Campus
                  <MapPin className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a
                href="https://admissions.dsu.edu.in/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-foreground px-12 py-6 text-lg font-semibold rounded-full transition-all"
                >
                  Apply for 2026
                </Button>
              </a>
            </div>

            {/* Trust Signals */}
            <div className="pt-8 border-t border-orange-500/20">
              <p className="text-sm text-foreground/70 mb-4">
                Trusted by students and industry leaders worldwide
              </p>
              <div className="grid grid-cols-3 gap-6 items-center justify-center">
                <div className="flex flex-col items-center">
                  <Badge className="bg-orange-500/20 text-orange-400 mb-2 text-sm font-bold">
                    NAAC A+
                  </Badge>
                  <p className="text-xs text-foreground/60">Accredited</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-2xl font-bold text-orange-500">25,000+</p>
                  <p className="text-xs text-foreground/60">Students</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-2xl font-bold text-orange-500">100+</p>
                  <p className="text-xs text-foreground/60">Student Clubs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
