import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Award,
  TrendingUp,
  Building,
  Users,
  Lightbulb,
  Globe,
  Star,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function History() {
  const founders = [
    {
      name: "Late Shri R Dayananda Sagar",
      title: "Founder & Visionary Educationist",
      background: "Graduate in Arts & Commerce from India; Barrister-at-law from England",
      achievements: [
        "Established Mahatma Gandhi Vidya Peetha Education Trust in the 1960s",
        "Founded Dayananda Sagar Schools and Colleges of Science, Arts, and Commerce",
        "Built an alumni network of 100,000+ worldwide including professionals, lawmakers, athletes, and celebrities",
        "Pioneered forward-looking educational institutions in Bangalore",
      ],
      icon: Users,
      image: "https://www.dsu.edu.in/images/founder.png",
    },
    {
      name: "Late Smt Chandramma Sagar",
      title: "Co-Founder & Healthcare Pioneer",
      background: "Doctor by training with triple fellowship from Royal Colleges of Surgeons",
      achievements: [
        "First Indian woman to acquire triple fellowship (FRCS) from Royal Colleges of Surgeons (London, Edinburgh, Glasgow)",
        "Member of the panel of doctors to the President of India",
        "Supported the establishment of healthcare and wellness programs",
        "Advocated for quality healthcare education",
      ],
      icon: Award,
      image: "https://www.dsu.edu.in/images/founder2.png",
    },
  ];

  const milestones = [
    {
      year: "1960s",
      title: "Foundation of Dayananda Sagar Institutions",
      description:
        "Late Shri R Dayananda Sagar established the Mahatma Gandhi Vidya Peetha Education Trust, laying the foundation for a legacy of educational excellence that would span over 60 years.",
      achievements: [
        "Establishment of schools and colleges in Science, Arts, and Commerce",
        "Focus on pioneering and forward-looking educational approaches",
        "Building of modern academic infrastructure and facilities",
      ],
      icon: Building,
      color: "from-blue-500 to-blue-600",
    },
    {
      year: "1984 - 2008",
      title: "Growth & Expansion of DSI",
      description:
        "Dayananda Sagar Institutions expanded significantly, building a comprehensive network of educational programs and establishing itself as a trusted name in Indian higher education.",
      achievements: [
        "Expansion into diverse disciplines: Engineering, Dental Sciences, Biological Sciences, Pharmacy, Nursing, and more",
        "Development of modern laboratories, lecture theatres, and libraries",
        "Establishment of computer networks and sports facilities",
        "Creation of hostel accommodations for local and international students",
      ],
      icon: TrendingUp,
      color: "from-green-500 to-green-600",
    },
    {
      year: "2008",
      title: "Transition to University Status",
      description:
        "Dayananda Sagar Institutions transitioned to Dayananda Sagar University (DSU), marking a new phase of comprehensive higher education with undergraduate, postgraduate, and doctoral programs.",
      achievements: [
        "Government of Karnataka recognition as a State Private University",
        "Launch of diverse academic programs across multiple disciplines",
        "Establishment of research centers and innovation labs",
        "Introduction of international collaboration frameworks",
      ],
      icon: Building,
      color: "from-purple-500 to-purple-600",
    },
    {
      year: "2010s",
      title: "Expansion & Innovation",
      description:
        "Rapid expansion of academic offerings, research capabilities, and infrastructure to support modern education and global partnerships.",
      achievements: [
        "Introduction of postgraduate and doctoral programs",
        "Establishment of state-of-the-art research centers",
        "Signing of MOUs with leading international universities",
        "Campus modernization and facility upgrades",
      ],
      icon: Lightbulb,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      year: "2015 - Present",
      title: "Excellence & Global Recognition",
      description:
        "DSU has emerged as a globally recognized institution, fostering innovation, entrepreneurship, and research excellence while maintaining its core commitment to quality education.",
      achievements: [
        "NAAC accreditation and NIRF rankings",
        "Establishment of Innovation Centers and Centers of Excellence",
        "International student exchange programs and collaborations",
        "Recognition as an AI-centric and research-focused university",
      ],
      icon: Globe,
      color: "from-red-500 to-red-600",
    },
  ];

  const heritage = [
    {
      period: "1960s - 2008",
      title: "Dayananda Sagar Institutions Legacy",
      description:
        "A visionary foundation built by Late Shri R Dayananda Sagar and Late Smt Chandramma Sagar, establishing a network of schools and colleges dedicated to quality education and community development.",
      highlights: [
        "Over 60 years of educational excellence and trust",
        "Alumni network of 100,000+ professionals worldwide",
        "Pioneering approach to modern education",
        "High-caliber teaching staff and modern infrastructure",
      ],
    },
    {
      period: "2008 - Present",
      title: "Dayananda Sagar University Era",
      description:
        "Evolution into a comprehensive university creating a canvas for young global citizens to transform creative abilities into world-facing achievements through innovation, entrepreneurship, and leadership.",
      highlights: [
        "Diverse academic programs from UG to PhD",
        "World-class research and innovation initiatives",
        "Global partnerships and collaborations",
        "Campus supporting academics, arts, culture, and entrepreneurship",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500/10 via-red-600/5 to-background overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/10 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative w-full">
          <img
            src="https://www.dsu.edu.in/images/Home/history.jpg"
            alt="DSU History"
            className="w-full h-auto max-h-[600px] object-contain"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/20 mb-8">
              <Calendar className="w-4 h-4 text-orange-500 mr-2" />
              <span className="text-sm font-medium text-orange-500">
                Founding Pillars
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Inspiring the Shape of Things to Come
              </span>
            </h1>

            <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              A legacy built on vision, excellence, and commitment to transforming lives through quality education. From the Mahatma Gandhi Vidya Peetha Education Trust to Dayananda Sagar University.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Our </span>
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Founders
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Visionary leaders who established the foundation of educational excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((founder, index) => {
              const Icon = founder.icon;
              return (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30 transition-all duration-300 overflow-hidden"
                >
                  {founder.image && (
                    <div className="w-full h-64 bg-gradient-to-br from-orange-500/10 to-red-600/10 flex items-center justify-center overflow-hidden">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="h-full w-full object-contain"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-start gap-4 mb-2">
                      <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-orange-500" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{founder.name}</CardTitle>
                        <p className="text-sm text-orange-500 font-semibold mt-1">{founder.title}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-foreground italic border-l-2 border-orange-500/30 pl-3">
                      {founder.background}
                    </p>
                    <div className="space-y-2">
                      {founder.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Our </span>
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Heritage
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Building on decades of educational excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {heritage.map((era, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30 transition-all duration-300"
              >
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-4 border-orange-500/20 bg-orange-500/10 text-orange-500">
                    {era.period}
                  </Badge>
                  <CardTitle className="text-2xl">{era.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground leading-relaxed">
                    {era.description}
                  </p>
                  <div className="space-y-2">
                    {era.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                        <span className="text-sm text-foreground">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline of Milestones */}
      <section className="px-6 py-20 bg-gradient-to-br from-orange-500/5 via-red-600/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="border-orange-500/20 bg-orange-500/10 text-orange-500 mb-4"
            >
              Key Milestones
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Our </span>
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Timeline
              </span>
            </h2>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <div key={index} className="relative">
                  <div className="flex gap-8">
                    {/* Timeline marker */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center mb-4 shadow-lg`}
                      >
                        <Icon className="w-8 h-8 text-foreground" />
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="w-1 h-24 bg-gradient-to-b from-orange-500/50 to-transparent"></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="pb-8 flex-1">
                      <Card className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30 transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div>
                              <Badge
                                variant="outline"
                                className="mb-2 border-orange-500/20 bg-orange-500/10 text-orange-500 text-lg font-bold"
                              >
                                {milestone.year}
                              </Badge>
                              <CardTitle className="text-2xl">
                                {milestone.title}
                              </CardTitle>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-foreground leading-relaxed">
                            {milestone.description}
                          </p>
                          <div className="space-y-2">
                            {milestone.achievements.map((achievement, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 text-sm"
                              >
                                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                <span className="text-foreground">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="px-6 py-20 bg-gradient-to-br from-orange-500/5 via-red-600/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                By the Numbers
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              The legacy and impact of educational excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "60+", label: "Years of Trust & Excellence", icon: Calendar },
              { number: "100,000+", label: "Alumni Worldwide", icon: Users },
              { number: "10+", label: "Academic Disciplines", icon: Award },
              { number: "6", label: "Schools & Colleges", icon: Building },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border/30 hover:border-orange-500/30 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Breadth Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Academic </span>
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Comprehensive programs across multiple disciplines with modern infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Engineering",
              "Dental Sciences",
              "Biological Sciences",
              "Pharmacy & Healthcare",
              "Nursing & Allied Health",
              "Arts & Sciences",
              "Commerce & Management",
              "Information Technology",
              "Business Applications",
            ].map((discipline, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border border-border/30 hover:border-orange-500/30 transition-all duration-300 flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-foreground font-medium">{discipline}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Infrastructure Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-orange-500/5 via-red-600/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                World-Class Infrastructure
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Modern facilities supporting academic excellence and holistic development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Lecture Theatres", description: "State-of-the-art classrooms with modern AV systems" },
              { title: "Laboratories", description: "Well-equipped labs for hands-on learning and research" },
              { title: "Libraries", description: "Comprehensive collections and digital resources" },
              { title: "Computer Networks", description: "High-speed connectivity and IT infrastructure" },
              { title: "Sports Facilities", description: "Complete sports and recreation amenities" },
              { title: "Hostel Accommodation", description: "Comfortable facilities for local and international students" },
            ].map((facility, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border border-border/30 hover:border-orange-500/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{facility.title}</h3>
                <p className="text-sm text-foreground">{facility.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-orange-500/5 to-red-600/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be Part of Our Future
          </h2>
          <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
            Join an institution with a proven track record of excellence and innovation. Shape your future with us.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-red-600 hover:to-orange-500 text-foreground px-8 py-6 font-semibold rounded-2xl"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/about">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-foreground px-8 py-6 font-semibold rounded-2xl"
              >
                Back to About
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
