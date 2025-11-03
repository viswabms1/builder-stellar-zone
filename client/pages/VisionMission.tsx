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
  Target,
  Eye,
  Heart,
  CheckCircle,
  ArrowRight,
  Compass,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VisionMission() {
  const coreValues = [
    {
      icon: Heart,
      title: "Integrity & Honesty",
      description: "Committed to ethical practices and truthful conduct in all endeavors",
    },
    {
      icon: Lightbulb,
      title: "Excellence & Innovation",
      description: "Pursuing the highest standards in education and continuous improvement",
    },
    {
      icon: Target,
      title: "Diversity & Inclusion",
      description: "Embracing diverse perspectives and creating inclusive environments",
    },
    {
      icon: Compass,
      title: "Collaboration & Respect",
      description: "Working together with mutual respect and professional courtesy",
    },
  ];

  const missionPoints = [
    "Provide world-class education that empowers students to become leaders",
    "Foster research and innovation aligned with global standards",
    "Develop industry-ready professionals with ethical leadership",
    "Create positive impact through academic excellence and community service",
    "Prepare global citizens with cultural awareness and responsibility",
  ];

  const visionPoints = [
    "Global recognition for academic excellence and innovation",
    "Transformative education that shapes future leaders",
    "Pioneering research contributing to human progress",
    "Meaningful community engagement and social impact",
    "Sustainable development and environmental responsibility",
  ];

  const strategicGoals = [
    {
      title: "Academic Excellence",
      description: "Deliver cutting-edge curricula aligned with industry needs and global standards",
      icon: Target,
    },
    {
      title: "Research & Innovation",
      description: "Establish world-class research centers and encourage faculty-student collaboration",
      icon: Lightbulb,
    },
    {
      title: "Global Partnerships",
      description: "Build strategic alliances with leading universities and organizations worldwide",
      icon: Compass,
    },
    {
      title: "Student Development",
      description: "Foster holistic development of students as responsible global citizens",
      icon: Heart,
    },
    {
      title: "Infrastructure Growth",
      description: "Invest in state-of-the-art facilities and digital transformation",
      icon: Eye,
    },
    {
      title: "Community Engagement",
      description: "Create meaningful social impact through outreach and sustainability initiatives",
      icon: CheckCircle,
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
            <Compass className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-sm font-medium text-orange-500">
              Our Direction
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Vision & Mission
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Guiding principles that define our commitment to academic excellence, innovation, and societal impact.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values - Three Pillars */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Target,
                title: "Mission",
                description:
                  "To provide world-class education that empowers students to become leaders, innovators, and responsible global citizens through excellence in teaching, research, and service.",
                color: "from-orange-500 to-orange-600",
                bgColor: "bg-orange-500/10",
                borderColor: "border-orange-500/20",
              },
              {
                icon: Eye,
                title: "Vision",
                description:
                  "To be a globally recognized university that transforms lives through cutting-edge education, pioneering research, and meaningful community engagement.",
                color: "from-red-500 to-red-600",
                bgColor: "bg-red-500/10",
                borderColor: "border-red-500/20",
              },
              {
                icon: Heart,
                title: "Values",
                description:
                  "Our core values shape every aspect of university life and guide our commitment to academic excellence, integrity, innovation, diversity, collaboration, and social responsibility.",
                color: "from-pink-500 to-pink-600",
                bgColor: "bg-pink-500/10",
                borderColor: "border-pink-500/20",
              },
            ].map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Card
                  key={index}
                  className={`${pillar.borderColor} bg-gradient-to-br ${pillar.bgColor} to-transparent backdrop-blur-sm hover:shadow-lg transition-all duration-300`}
                >
                  <CardHeader>
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-4`}
                    >
                      <Icon className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-2xl font-bold">
                      {pillar.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Detailed Mission Points */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12 mb-20">
            <h2 className="text-3xl font-bold mb-8">
              <span className="text-foreground">Mission </span>
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Commitment
              </span>
            </h2>
            <div className="space-y-4">
              {missionPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Vision Points */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8">
              <span className="text-foreground">Vision </span>
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Aspirations
              </span>
            </h2>
            <div className="space-y-4">
              {visionPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Eye className="w-5 h-5 text-red-500" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-orange-500/5 via-red-600/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Core Values
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our decisions, actions, and interactions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <Icon className="w-10 h-10 text-orange-500 mb-4" />
                    <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="border-orange-500/20 bg-orange-500/10 text-orange-500 mb-4"
            >
              Strategic Initiatives
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Strategic </span>
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Goals
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our roadmap to achieving excellence and creating lasting impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategicGoals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:border-orange-500/30 bg-card/50 backdrop-blur-sm border border-border/50"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <CardTitle className="text-xl">{goal.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{goal.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-orange-500/5 to-red-600/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Our Mission
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of a community dedicated to excellence, innovation, and making a positive impact on the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-red-600 hover:to-orange-500 text-muted-foreground px-8 py-6 font-semibold rounded-2xl"
              >
                Apply Now
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
