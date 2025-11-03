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
  const milestones = [
    {
      year: "2008",
      title: "Foundation Year",
      description:
        "Dayananda Sagar University established with a vision to provide world-class education, continuing the legacy of Dayananda Sagar Institutions since 1984.",
      achievements: [
        "University recognition by Government of Karnataka",
        "First batch of students enrolled",
        "Academic programs across multiple disciplines launched",
      ],
      icon: Building,
      color: "from-blue-500 to-blue-600",
    },
    {
      year: "2010",
      title: "Expansion Phase",
      description:
        "Rapid expansion of academic offerings and infrastructure development across the campus.",
      achievements: [
        "Introduction of postgraduate programs",
        "Establishment of research centers",
        "Campus modernization initiatives",
      ],
      icon: TrendingUp,
      color: "from-green-500 to-green-600",
    },
    {
      year: "2012",
      title: "NAAC Accreditation",
      description:
        "Achieved prestigious NAAC A-Grade accreditation, recognizing institutional excellence and quality assurance.",
      achievements: [
        "NAAC A Grade awarded",
        "Recognition for academic and administrative excellence",
        "Enhanced institutional credibility",
      ],
      icon: Award,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      year: "2015",
      title: "Research Excellence",
      description:
        "Established state-of-the-art research centers and fostered innovation across multiple disciplines.",
      achievements: [
        "Multiple research centers inaugurated",
        "Industry collaboration agreements signed",
        "Publication of peer-reviewed research",
      ],
      icon: Lightbulb,
      color: "from-purple-500 to-purple-600",
    },
    {
      year: "2018",
      title: "International Recognition",
      description:
        "Expanded global partnerships and established international student exchange programs.",
      achievements: [
        "MOU with leading international universities",
        "Student exchange programs initiated",
        "Participation in global academic forums",
      ],
      icon: Globe,
      color: "from-red-500 to-red-600",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description:
        "Successfully transitioned to online education and digital infrastructure during the global pandemic.",
      achievements: [
        "Seamless online learning implementation",
        "Digital campus infrastructure",
        "Continued academic excellence",
      ],
      icon: Users,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      year: "2022",
      title: "NIRF Ranking",
      description:
        "Recognized among India's top universities in the National Institutional Ranking Framework.",
      achievements: [
        "Featured in NIRF Overall Rankings",
        "Ranked among top 100 universities in India",
        "Global recognition for quality",
      ],
      icon: Star,
      color: "from-orange-500 to-orange-600",
    },
    {
      year: "2024",
      title: "Innovation & Sustainability",
      description:
        "Launched initiatives for sustainability, AI integration, and next-generation research.",
      achievements: [
        "Carbon neutral campus certification",
        "AI-powered learning platforms",
        "Centres of Excellence establishment",
      ],
      icon: Lightbulb,
      color: "from-pink-500 to-pink-600",
    },
  ];

  const heritage = [
    {
      period: "1984 - 2008",
      title: "Dayananda Sagar Institutions Legacy",
      description:
        "Foundation of Dayananda Sagar Institutions with focus on quality education and community development.",
      highlights: [
        "Established schools and colleges",
        "Pioneered educational innovation",
        "Built trust and credibility",
      ],
    },
    {
      period: "2008 - Present",
      title: "University Era",
      description:
        "Evolution into a comprehensive university offering diverse undergraduate, postgraduate, and research programs.",
      highlights: [
        "Academic expansion",
        "Research and innovation focus",
        "Global partnerships",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-orange-500/10 via-red-600/5 to-background">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/10 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/20 mb-8">
            <Calendar className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-sm font-medium text-orange-500">
              Our Journey
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              A Legacy of Excellence
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            From a vision of quality education to a globally recognized university, discover the milestones that shaped DSU.
          </p>
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
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
                  <p className="text-muted-foreground leading-relaxed">
                    {era.description}
                  </p>
                  <div className="space-y-2">
                    {era.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
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
                        <Icon className="w-8 h-8 text-muted-foreground" />
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
                          <p className="text-muted-foreground leading-relaxed">
                            {milestone.description}
                          </p>
                          <div className="space-y-2">
                            {milestone.achievements.map((achievement, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 text-sm"
                              >
                                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                <span className="text-muted-foreground">
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
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                By the Numbers
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "16+", label: "Years of Excellence", icon: Calendar },
              { number: "25,000+", label: "Students", icon: Users },
              { number: "100+", label: "Programs Offered", icon: Award },
              { number: "50+", label: "Research Centers", icon: Lightbulb },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center p-6 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-orange-500/30 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
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
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join an institution with a proven track record of excellence and innovation. Shape your future with us.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-red-600 hover:to-orange-500 text-muted-foreground px-8 py-6 font-semibold rounded-2xl"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/about">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-muted-foreground px-8 py-6 font-semibold rounded-2xl"
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
