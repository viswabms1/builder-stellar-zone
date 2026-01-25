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

// Type for Directus response
interface VisionMissionData {
  vision_title?: string;
  vision_description?: string;
  mission_title?: string;
  mission_description?: string;
}

// Default core values (fallback)
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

// Default vision & mission (fallback)
const DEFAULT_VISION_MISSION = {
  vision_title: "Vision",
  vision_description:
    "To be a centre of excellence in education, research & training, innovation & entrepreneurship and to produce citizens with exceptional leadership qualities to serve national and global needs.",
  mission_title: "Mission",
  mission_description:
    "To achieve our objectives in an environment that enhances creativity, innovation and scholarly pursuits while adhering to our vision.",
};

export default function VisionMission() {
  const { theme } = useTheme();
  const [visionMissionData, setVisionMissionData] = useState<VisionMissionData>(DEFAULT_VISION_MISSION);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const coreValues = DEFAULT_CORE_VALUES;

  // Fetch Vision & Mission from Directus API
  useEffect(() => {
    const fetchVisionMission = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/directus/vision-mission");

        if (!response.ok) {
          throw new Error("Failed to fetch vision-mission content");
        }

        const result = await response.json();

        if (result.success && result.data) {
          setVisionMissionData(result.data);
        } else if (result.fallback) {
          // Use default if API has fallback
          console.warn("Using fallback vision-mission content");
          setVisionMissionData(DEFAULT_VISION_MISSION);
        }

        setError(null);
      } catch (err) {
        console.error("Error fetching vision-mission:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
        // Use default content on error
        setVisionMissionData(DEFAULT_VISION_MISSION);
      } finally {
        setLoading(false);
      }
    };

    fetchVisionMission();
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
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/20 mb-8">
            <Compass className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-sm font-medium text-orange-500">
              Our Direction
            </span>
          </div>

          <h1 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${
            theme === "light" ? "text-orange-900" : "text-white"
          }`}>
            Vision, Mission and Values
          </h1>

          <p className="text-lg md:text-xl font-semibold text-foreground mb-4 leading-relaxed max-w-3xl mx-auto">
            Guiding DSU's transition from a legacy institution to a future-ready, AI-first university
          </p>

          <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Throwing light on the way forward
          </p>
        </div>
      </section>

      {/* Vision & Mission - Two Pillars */}
      <section className="px-3 py-10">
        <div className="max-w-7xl mx-auto">
          {loading && (
            <div className="text-center py-12">
              <p className="text-foreground">Loading vision & mission content...</p>
            </div>
          )}

          {!loading && (
            <div className="grid md:grid-cols-2 gap-4">
              {/* Vision Card */}
              <Card className="bg-card/50 backdrop-blur-sm border border-blue-500/30 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4">
                    <Eye className="w-8 h-8 text-blue-500" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-foreground">
                    {visionMissionData.vision_title || "Vision"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground leading-relaxed">
                    {visionMissionData.vision_description}
                  </p>
                </CardContent>
              </Card>

              {/* Mission Card */}
              <Card className="bg-card/50 backdrop-blur-sm border border-blue-500/30 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-blue-500" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-foreground">
                    {visionMissionData.mission_title || "Mission"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground leading-relaxed">
                    {visionMissionData.mission_description}
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* How We Translate Vision into Action */}
      <section className="px-3 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              theme === "light" ? "text-orange-900" : "text-white"
            }`}>
              How We Translate Vision into Action
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
                  className="flex gap-4 items-start p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30 transition-all duration-300"
                >
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-foreground leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="px-3 py-10 bg-gradient-to-br from-orange-500/5 via-red-600/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              theme === "light" ? "text-orange-900" : "text-white"
            }`}>
              Values
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              The principles that guide our decisions, actions, and interactions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30 transition-all duration-300"
                >
                  <CardContent className="p-3">
                    <Icon className="w-10 h-10 text-orange-500 mb-4" />
                    <h3 className="text-lg font-bold mb-3 text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm text-foreground leading-relaxed">
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
      <section className="px-3 py-10 bg-gradient-to-r from-orange-500/5 to-red-600/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Community
          </h2>
          <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
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
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-red-600 hover:to-orange-500 text-foreground px-8 py-6 font-semibold rounded-2xl"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
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
