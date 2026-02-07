import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
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
  Award,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/providers/theme-provider";

// Type for Vision/Mission content
interface VisionMissionContent {
  Vision?: string;
  Mission_?: string;
  [key: string]: any;
}

const DEFAULT_CORE_VALUES = [
  {
    icon: Lightbulb,
    title: "The Pursuit of Excellence",
    description:
      "Continuous improvement in teaching, research, infrastructure and institutional practices.",
  },
  {
    icon: Award,
    title: "Fairness",
    description:
      "Commitment to equity, inclusiveness, and unbiased academic and administrative processes.",
  },
  {
    icon: Target,
    title: "Leadership",
    description:
      "Developing responsible leaders capable of guiding change in education, research and industry.",
  },
  {
    icon: Heart,
    title: "Integrity and Transparency",
    description:
      "Upholding ethical conduct, accountability and openness in governance and academics.",
  },
];

export default function VisionMission() {
  const { theme } = useTheme();
  const [content, setContent] = useState<VisionMissionContent>({
    Vision:
      "To be a centre of excellence in education, research & training, innovation & entrepreneurship and to produce citizens with exceptional leadership qualities to serve national and global needs.",
    Mission_:
      "To achieve our objectives in an environment that enhances creativity, innovation and scholarly pursuits while adhering to our vision.",
  });
  const [loading, setLoading] = useState(true);
  const coreValues = DEFAULT_CORE_VALUES;

  // Initialize content and stop loading
  useEffect(() => {
    // Using default content - can be extended to fetch from CMS if needed
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Image */}
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
            src="https://www.dsu.edu.in/images/Home/vision-mission.jpg"
            alt="Vision and Mission"
            className="w-full h-auto max-h-[600px] object-contain"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-3 py-10 lg:py-32 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-brand-blue/10 rounded-full border border-brand-blue/40 mb-8">
            <Compass className="w-4 h-4 text-brand-blue mr-2" />
            <span className="text-sm font-medium text-brand-blue">
              Our Direction
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight font-display text-white">
            Vision, Mission and Values
          </h1>

          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-1 sm:mb-2 md:mb-6 leading-tight font-display">
            Guiding DSU's transition from a legacy institution to a future-ready, AI-first university
          </p>

          <p className="text-xs sm:text-base md:text-lg lg:text-xl font-medium text-white/80 mt-2 font-display hidden sm:block">
            Throwing light on the way forward
          </p>
        </div>
      </section>

      {/* Vision & Mission - Two Pillars */}
      <section className="px-3 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Vision Card */}
            <Card className="group bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm border border-border/50 hover:border-brand-blue/50 hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-4 group-hover:bg-brand-blue/20 transition-colors">
                  <Eye className="w-8 h-8 text-brand-blue group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-display group-hover:text-brand-blue transition-colors">
                  Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-foreground leading-relaxed font-body">
                  {content.Vision || "Loading..."}
                </p>
              </CardContent>
            </Card>

            {/* Mission Card */}
            <Card className="group bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm border border-border/50 hover:border-brand-blue/50 hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-4 group-hover:bg-brand-blue/20 transition-colors">
                  <Target className="w-8 h-8 text-brand-blue group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-display group-hover:text-brand-blue transition-colors">
                  Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-foreground leading-relaxed font-body">
                  {content.Mission_ || "Loading..."}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Translate Vision into Action */}
      <section className="px-3 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="headline-2 mb-6 font-display">
              <span className="text-foreground">How We Translate </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Vision into Action
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                "AI-infused curricula and interdisciplinary learning",
                "Research-driven teaching and innovation culture",
                "Strong industry, startup and societal partnerships",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start p-4 rounded-lg bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm border border-border/50 hover:border-brand-blue/50 transition-all duration-300"
                >
                  <CheckCircle className="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-foreground leading-relaxed font-body">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="px-3 py-10 bg-gradient-to-br from-brand-blue/5 via-brand-magenta/3 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="headline-2 mb-6 font-display">
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
            <p className="subheadline text-foreground max-w-3xl mx-auto font-display">
              The principles that guide our decisions, actions, and interactions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="group bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm border border-border/50 hover:border-brand-blue/50 hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300"
                >
                  <CardContent className="p-3">
                    <Icon className="w-10 h-10 text-brand-blue mb-4 group-hover:scale-110 group-hover:text-brand-orange transition-all" />
                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-3 text-foreground font-display group-hover:text-brand-blue transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-xs sm:text-xs md:text-sm lg:text-base text-foreground leading-relaxed font-body">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-3 py-10 bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-display">
            <span className="text-foreground">Join Our </span>
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Community
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground mb-6 md:mb-8 max-w-2xl mx-auto font-display leading-tight">
            Be part of a university community shaping future-ready professionals, innovators and leaders.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://admissions.dsu.edu.in/"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#0088FF] via-[#FFD700] to-[#FF6B00] hover:from-[#0066FF] hover:via-[#FFC700] hover:to-[#FF5500] text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 transition-all animate-gradient bg-[length:200%_auto]"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <Link to="/about">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue/10 hover:border-brand-blue px-8 py-6 font-semibold rounded-2xl text-base transition-all"
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
