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
  Coffee,
  Utensils,
  Wifi,
  Car,
  Gamepad2,
  Dumbbell,
  Palette,
  Camera,
  Mic,
  Drama,
  Plane,
  MapPin,
  Calendar,
  Clock,
  ChevronRight,
  Rocket,
  Volume2,
  VolumeX,
} from "lucide-react";

export default function CampusLife() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Video Background */}
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

        {/* Mute/Unmute Button */}
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
          <div className="rounded-none px-3 md:px-8 py-8 max-w-xl -ml-6 md:-ml-8">
            <div className="hero-badge inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full border border-orange-500/40 mb-4">
              <Heart className="w-4 h-4 text-orange-300 mr-2" />
              <span className="text-sm font-medium text-orange-200">
                Life @ DSU
              </span>
            </div>

            <h1 className="hero-title text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight text-white">
              Campus Life
            </h1>
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
            Virtual Campus Tour
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </a>
      </section>

      {/* Featured Facilities with Tabs */}
      <section className="px-3 py-10 bg-gradient-to-r from-orange-500/5 to-red-600/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">World-Class </span>
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Facilities
              </span>
            </h2>
          </div>

          <Tabs defaultValue="learn" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 rounded-none bg-transparent border-b border-orange-500/20">
              <TabsTrigger
                value="learn"
                className="text-lg font-semibold rounded-none border-b-2 border-transparent data-[state=active]:border-orange-500 data-[state=active]:bg-transparent px-6 py-4"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Learn
              </TabsTrigger>
              <TabsTrigger
                value="live"
                className="text-lg font-semibold rounded-none border-b-2 border-transparent data-[state=active]:border-orange-500 data-[state=active]:bg-transparent px-6 py-4"
              >
                <Building className="w-5 h-5 mr-2" />
                Live
              </TabsTrigger>
              <TabsTrigger
                value="play"
                className="text-lg font-semibold rounded-none border-b-2 border-transparent data-[state=active]:border-orange-500 data-[state=active]:bg-transparent px-6 py-4"
              >
                <Trophy className="w-5 h-5 mr-2" />
                Play
              </TabsTrigger>
            </TabsList>

            {/* Learn Tab */}
            <TabsContent value="learn" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative overflow-hidden rounded-none h-80 border border-border hover:border-orange-500/50 transition-colors group">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F303af6a81dfe4b5bb9ea6952ee39c3b7?format=webp&width=800"
                    alt="Central Library"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-foreground">
                    Central Library
                  </h3>
                  <p className="text-lg text-foreground">
                    Extensive collection with digital resources and study spaces
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-orange-500 rounded-none mr-3"></span>
                      2M+ Books
                    </div>
                    <div className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-orange-500 rounded-none mr-3"></span>
                      Digital Library
                    </div>
                    <div className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-orange-500 rounded-none mr-3"></span>
                      Study Halls
                    </div>
                    <div className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-orange-500 rounded-none mr-3"></span>
                      Research Centers
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Live Tab */}
            <TabsContent value="live" className="mt-0 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative overflow-hidden rounded-none h-80 border border-border hover:border-orange-500/50 transition-colors group">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F0357dfeb9259438fbb59b6cd31a06e5a?format=webp&width=800"
                    alt="Modern Hostels"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-foreground">
                    Modern Hostels
                  </h3>
                  <p className="text-lg text-foreground">
                    Comfortable accommodation with all modern amenities
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-orange-500 rounded-none mr-3"></span>
                      AC Rooms
                    </div>
                    <div className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-orange-500 rounded-none mr-3"></span>
                      WiFi
                    </div>
                    <div className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-orange-500 rounded-none mr-3"></span>
                      Study Areas
                    </div>
                    <div className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-orange-500 rounded-none mr-3"></span>
                      Recreation Rooms
                    </div>
                  </div>
                  <a
                    href="https://myposhtell.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-4"
                  >
                    <Button className="bg-orange-500 hover:bg-orange-600 text-foreground">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:[&>:first-child]:order-2">
                <div className="relative overflow-hidden rounded-none h-80 border border-border hover:border-orange-500/50 transition-colors group">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Feaa91fe5c0b44c02b3ead40543f73fff?format=webp&width=800"
                    alt="Food Courts"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-foreground">
                    Food Courts
                  </h3>
                  <p className="text-lg text-foreground">
                    Multiple dining options with diverse cuisines
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-orange-500 rounded-none mr-3"></span>
                      Multi-cuisine
                    </div>
                    <div className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-orange-500 rounded-none mr-3"></span>
                      Healthy Options
                    </div>
                    <div className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-orange-500 rounded-none mr-3"></span>
                      24/7 Cafes
                    </div>
                    <div className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-orange-500 rounded-none mr-3"></span>
                      Food Courts
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Play Tab */}
            <TabsContent value="play" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative overflow-hidden rounded-none h-80 border border-border hover:border-orange-500/50 transition-colors group">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fbc9e4b114ef0435c809830c5bca27d60?format=webp&width=800"
                    alt="Sports Complex"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-foreground">
                    Sports Complex
                  </h3>
                  <p className="text-lg text-foreground">
                    State-of-the-art facilities for all sports and fitness
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-orange-500 rounded-none mr-3"></span>
                      Swimming Pool
                    </div>
                    <div className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-orange-500 rounded-none mr-3"></span>
                      Gymnasium
                    </div>
                    <div className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-orange-500 rounded-none mr-3"></span>
                      Indoor Sports
                    </div>
                    <div className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-orange-500 rounded-none mr-3"></span>
                      Outdoor Courts
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Campus Life Gallery - Curated Strip */}
      <section className="px-3 py-10 bg-gradient-to-r from-orange-500/5 to-red-600/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Life in </span>
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Pictures
              </span>
            </h2>
            <p className="text-lg text-foreground">
              Curated glimpses of campus moments
            </p>
          </div>

          {/* Horizontal Scrolling Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              {
                title: "Campus Entrance",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fa16295c3fda14368b934b709019e0e30?format=webp&width=800",
              },
              {
                title: "Performing Arts",
                image:
                  "https://static.wixstatic.com/media/a57b29_7432beeeab194cf19d467960322ed7b7~mv2.jpg/v1/fit/w_960,h_960,q_90,enc_avif,quality_auto/a57b29_7432beeeab194cf19d467960322ed7b7~mv2.jpg",
              },
              {
                title: "Sports Day",
                image:
                  "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300&h=300&fit=crop",
              },
              {
                title: "Graduation",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F692a9321c1bd4ab09f4bbb0f31d62fa2?format=webp&width=800",
              },
              {
                title: "Tech Fair",
                image:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop",
              },
              {
                title: "Student Life",
                image:
                  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-none border border-border hover:border-orange-500/50 transition-all duration-300 cursor-pointer aspect-square"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <h3 className="font-bold text-white text-sm">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Organizations with Images */}
      <section className="px-3 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Student
              </span>
              <span className="text-foreground"> Organizations</span>
            </h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Discover your passion through our diverse range of student clubs
              and societies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
            {[
              {
                icon: Palette,
                title: "Arts & Culture",
                description: "Express your creativity through artistic mediums",
                image:
                  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
                members: "2,500+",
              },
              {
                icon: Trophy,
                title: "Sports & Recreation",
                description: "Stay active with comprehensive sports programs",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Febfd634b00b44333a5bb858290a814d7?format=webp&width=800",
                members: "3,000+",
              },
              {
                icon: Gamepad2,
                title: "Technology & Innovation",
                description: "Build innovative solutions with latest tech",
                image:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
                members: "4,500+",
              },
              {
                icon: Users,
                title: "Social Service",
                description: "Make a positive impact in the community",
                image:
                  "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
                members: "2,000+",
              },
              {
                icon: BookOpen,
                title: "Academic & Professional",
                description: "Enhance your career development journey",
                image:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
                members: "3,500+",
              },
              {
                icon: Heart,
                title: "Special Interest",
                description: "Explore unique hobbies with like-minded peers",
                image:
                  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop",
                members: "1,800+",
              },
            ].map((category, index) => (
              <Card
                key={index}
                className={`group overflow-hidden hover:shadow-lg hover:shadow-brand-magenta/10 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm border rounded-none ${
                  index % 3 === 0
                    ? "bg-orange-500/10 border-orange-500/20"
                    : index % 3 === 1
                      ? "bg-blue-500/10 border-blue-500/20"
                      : "bg-purple-500/10 border-purple-500/20"
                }`}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                      <category.icon className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {category.members}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold group-hover:text-orange-500 transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground">
                    {category.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Centre for Performing Arts - Featured Highlight */}
      <section className="px-3 py-10 bg-gradient-to-r from-orange-500/10 to-red-600/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Video */}
            <div className="relative overflow-hidden rounded-none h-96 border border-orange-500/20 group bg-black">
              <video
                src="https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2F6b0c30504ae64c6aba12aa275eeac2e0?alt=media&token=038cd5f6-c13b-43c6-8760-c92abdbbc4dd&apiKey=4aa279a8430d441dba9c55f659831878"
                controls
                preload="none"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Content */}
            <div className="space-y-3">
              <div>
                <Badge className="bg-orange-500/20 text-orange-600 mb-4">
                  Arts & Culture
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                    Centre for Performing Arts
                  </span>
                </h2>
              </div>

              <p className="text-xl text-foreground leading-relaxed">
                Express your creativity through artistic mediums
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                A dedicated space for students to explore dance, music, theater,
                and other performing arts. Our Centre for Performing Arts
                nurtures talent and provides a platform for artistic expression
                and cultural celebration.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-foreground">
                  <Star className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>Professional training and mentorship</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <Star className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>State-of-the-art auditorium and rehearsal spaces</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <Star className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>Regular performances and cultural events</span>
                </div>
              </div>

              <a
                href="https://www.centreforperformingarts.in"
                target="_blank"
                rel="noreferrer"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background inline-block"
              >
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-foreground px-8 py-6 text-lg font-semibold rounded-xl inline-flex items-center gap-2"
                >
                  Visit Centre for Performing Arts
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Events Timeline with Images */}
      <section className="px-3 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Events
              </span>
              <span className="text-foreground"> & Activities</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              {
                icon: Star,
                title: "Annual Fest - DSUFEST",
                image:
                  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop",
                duration: "5 Days",
                attendance: "50,000+",
                category: "Cultural",
              },
              {
                icon: Trophy,
                title: "Sports Meet",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F4965c58a577f42679515554a2c799501?format=webp&width=800",
                duration: "1 Week",
                attendance: "15,000+",
                category: "Sports",
              },
              {
                icon: Mic,
                title: "Tech Symposium",
                image:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
                duration: "3 Days",
                attendance: "20,000+",
                category: "Technology",
              },
              {
                icon: Heart,
                title: "Social Initiatives",
                image:
                  "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
                duration: "Ongoing",
                attendance: "2,000+",
                category: "Social Impact",
              },
            ].map((event, index) => (
              <Card
                key={index}
                className={`group overflow-hidden hover:shadow-lg hover:shadow-brand-magenta/10 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm border rounded-none scroll-fade-in-up ${
                  index % 4 === 0
                    ? "bg-orange-500/10 border-orange-500/20"
                    : index % 4 === 1
                      ? "bg-blue-500/10 border-blue-500/20"
                      : index % 4 === 2
                        ? "bg-purple-500/10 border-purple-500/20"
                        : "bg-green-500/10 border-green-500/20"
                }`}
                style={{
                  animation: `slideInUp 0.6s ease-out ${index * 0.08}s both`,
                }}
              >
                <div className="relative overflow-hidden bg-black aspect-video">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <event.icon className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
                    <Badge variant="secondary" className="text-xs">
                      {event.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold group-hover:text-orange-500 transition-colors group-hover:-translate-y-1">
                    {event.title}
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className="w-fit text-xs border-orange-500/30 text-orange-500"
                  >
                    {event.attendance}
                  </Badge>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/all-events" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background inline-block">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-foreground px-10 py-6 text-lg font-semibold rounded-full inline-flex items-center gap-2"
              >
                View All Events
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Student Stories Section */}
      <section className="px-3 py-10 bg-gradient-to-r from-orange-500/5 to-red-600/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Student </span>
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-xl text-foreground">
              Real voices and experiences from our student community
            </p>
          </div>

          {/* Story Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Priya Sharma",
                program: "B.Tech Computer Science",
                year: "4th Year",
                quote:
                  "DSU gave me the freedom to explore, innovate, and grow beyond academics.",
                image:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=500&fit=crop",
              },
              {
                name: "Arjun Mehta",
                program: "B.Sc Data Science",
                year: "3rd Year",
                quote:
                  "The collaborative spirit here transformed my learning journey completely.",
                image:
                  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=500&fit=crop",
              },
              {
                name: "Anaya Patel",
                program: "B.Tech Electronics",
                year: "2nd Year",
                quote:
                  "Faculty mentorship and peer support made all the difference in my success.",
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
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                </div>
                <CardHeader className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-orange-500 transition-colors">
                      {story.name}
                    </h3>
                    <p className="text-sm text-foreground/70 mt-1">
                      {story.program}
                    </p>
                    <Badge
                      variant="secondary"
                      className="mt-2 text-xs bg-orange-500/20 text-orange-300"
                    >
                      {story.year}
                    </Badge>
                  </div>

                  <blockquote className="text-foreground italic border-l-2 border-orange-500 pl-3 py-2">
                    "{story.quote}"
                  </blockquote>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-3 py-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-500/10 via-red-600/10 to-pink-500/10 rounded-3xl p-12 border border-orange-500/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to be
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                {" "}
                Part of the Family
              </span>
              ?
            </h2>
            <p className="text-xl text-foreground mb-8 max-w-2xl mx-auto">
              Join our vibrant community and create memories that will last a
              lifetime.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 via-red-600 to-pink-500 text-foreground px-12 py-6 text-lg font-semibold rounded-full"
              >
                Visit Campus
                <MapPin className="w-5 h-5 ml-2" />
              </Button>
              <a
                href="https://admissions.dsu.edu.in/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-foreground px-12 py-6 text-lg font-semibold rounded-full"
                >
                  Apply Now
                </Button>
              </a>
            </div>

            {/* Trust Signals */}
            <div className="pt-8 border-t border-orange-500/20">
              <p className="text-sm text-foreground/70 mb-4">Trusted by students worldwide</p>
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
