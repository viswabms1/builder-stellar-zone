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
import { useTheme } from "@/providers/theme-provider";

export default function History() {
  const { theme } = useTheme();
  const founders = [
    {
      name: "Late Shri R Dayananda Sagar",
      title: "Founder & Visionary Educationist",
      background: "Graduate in Arts & Commerce from India; Barrister-at-law from England",
      philosophy: "Educational Philosophy",
      philosophyText: "Late Shri R Dayananda Sagar believed education must empower individuals to serve society with competence, integrity, and leadership—principles that continue to guide DSU's academic culture.",
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
      philosophy: "Healthcare & Social Impact Legacy",
      philosophyText: "Late Smt Chandramma Sagar's pioneering work in healthcare education laid the foundation for DSU's continued emphasis on health sciences, ethics, and community well-being.",
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

  const heritage = [
    {
      period: "1960s - 2008",
      title: "Institutional Foundations",
      description:
        "A visionary foundation built by Late Shri R Dayananda Sagar and Late Smt Chandramma Sagar, establishing a network of schools and colleges dedicated to quality education and community development.",
      highlights: [
        "Expansion across multiple disciplines and campuses",
        "Establishment of strong alumni and community trust",
        "Emphasis on quality teaching and infrastructure",
        "Foundation for healthcare, technical, and professional education",
      ],
    },
    {
      period: "2008 - Present",
      title: "University Era",
      description:
        "Evolution into a comprehensive university creating a canvas for young global citizens to transform creative abilities into world-facing achievements through innovation, entrepreneurship, and leadership.",
      highlights: [
        "Transition to a multidisciplinary state university",
        "Expansion into research, innovation, and entrepreneurship",
        "Strengthening global collaborations and industry partnerships",
        "Integration of emerging technologies and AI-driven education",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-blue/10 via-brand-magenta/5 to-background overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue/10 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-brand-magenta/10 rounded-full filter blur-3xl animate-float"
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

        <div className="relative max-w-7xl mx-auto px-3 py-10 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-brand-blue/40 bg-brand-blue/10 mb-8">
              <Calendar className="w-4 h-4 mr-2 text-brand-blue" />
              <span className="text-sm font-medium text-brand-blue">
                Founding Pillars
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight font-display text-white">
              Inspiring the Shape of Things to Come
            </h1>

            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-1 sm:mb-2 md:mb-6 leading-tight font-display">
              Tracing six decades of educational leadership culminating in a modern, multidisciplinary university.
            </p>

            <p className="text-xs sm:text-base md:text-lg lg:text-xl font-medium text-white/80 mt-2 font-display hidden sm:block">
              A legacy built on vision, excellence, and commitment to transforming lives through quality education. From the Mahatma Gandhi Vidya Peetha Education Trust to Dayananda Sagar University.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="px-3 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="headline-2 mb-6 font-display">
              <span className="text-foreground">Our </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Founders
              </span>
            </h2>
            <p className="subheadline text-foreground max-w-3xl mx-auto font-display">
              Visionary leaders who established the foundation of educational excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((founder, index) => {
              const Icon = founder.icon;
              return (
                <Card
                  key={index}
                  className="group bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm border border-border/50 hover:border-brand-blue/50 hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300 overflow-hidden"
                >
                  {founder.image && (
                    <div className="w-full h-64 bg-gradient-to-br from-brand-blue/10 to-brand-magenta/10 flex items-center justify-center overflow-hidden">
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
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-brand-blue/10 group-hover:bg-brand-blue/20 transition-colors">
                        <Icon className="w-6 h-6 text-brand-blue group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <CardTitle className="text-lg sm:text-xl md:text-2xl font-display group-hover:text-brand-blue transition-colors">{founder.name}</CardTitle>
                        <p className="text-xs sm:text-sm font-semibold mt-1 text-brand-blue">{founder.title}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-xs sm:text-sm text-foreground italic border-l-2 border-brand-blue/30 pl-3 font-body">
                      {founder.background}
                    </p>

                    <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-lg p-3">
                      <h4 className="text-xs sm:text-sm font-semibold mb-2 text-brand-blue">
                        {founder.philosophy}
                      </h4>
                      <p className="text-xs sm:text-sm text-foreground leading-relaxed font-body">
                        {founder.philosophyText}
                      </p>
                    </div>

                    <div className="space-y-2">
                      {founder.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-brand-blue" />
                          <span className="text-xs sm:text-sm text-foreground font-body">
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
      <section className="px-3 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="headline-2 mb-6 font-display">
              <span className="text-foreground">Our </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Heritage
              </span>
            </h2>
            <p className="subheadline text-foreground max-w-3xl mx-auto font-display">
              Building on decades of educational excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {heritage.map((era, index) => (
              <Card
                key={index}
                className="group bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm border border-border/50 hover:border-brand-blue/50 hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300"
              >
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-4 border-brand-blue/20 bg-brand-blue/10 text-brand-blue">
                    {era.period}
                  </Badge>
                  <CardTitle className="text-lg sm:text-xl md:text-2xl font-display group-hover:text-brand-blue transition-colors">{era.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-xs sm:text-sm md:text-base text-foreground leading-relaxed font-body">
                    {era.description}
                  </p>
                  <div className="space-y-2">
                    {era.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-brand-blue" />
                        <span className="text-xs sm:text-sm text-foreground font-body">
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

      {/* Evolution of Academic Disciplines Section */}
      <section className="px-3 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="headline-2 mb-6 font-display">
              <span className="text-foreground">Evolution of Academic </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Disciplines
              </span>
            </h2>
            <p className="subheadline text-foreground max-w-3xl mx-auto mb-6 font-display">
              Over the decades, DSU has expanded from foundational disciplines to a comprehensive academic ecosystem spanning technology, healthcare, sciences, management, and design.
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-foreground max-w-3xl mx-auto font-body">
              Programs across multiple disciplines with modern infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "School of Engineering",
              "School of Health Sciences",
              "School of Law",
              "School of Commerce & Management",
              "School of Basic & Applied Sciences",
              "School of Design & Digital Trans-Media",
              "School of Media & Communication",
              "Computer Applications",
            ].map((discipline, index) => (
              <Card
                key={index}
                className="group p-6 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm border border-border/50 hover:border-brand-blue/50 hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300 flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0 text-brand-blue group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm md:text-base text-foreground font-medium font-body group-hover:text-brand-blue transition-colors">{discipline}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Infrastructure Section */}
      <section className="px-3 py-10 bg-gradient-to-br from-brand-blue/5 via-brand-magenta/3 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="headline-2 mb-6 font-display">
              <span className="text-foreground">Growth of </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Campus Infrastructure
              </span>
            </h2>
            <p className="subheadline text-foreground max-w-3xl mx-auto mb-6 font-display">
              Infrastructure development at DSU has evolved in parallel with academic growth, ensuring modern learning environments across generations.
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-foreground max-w-3xl mx-auto font-body">
              Facilities supporting academic excellence and holistic development
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
                className={`p-6 bg-card/50 backdrop-blur-sm border transition-all duration-300 ${
                  theme === "light"
                    ? "border-border/30 hover:border-orange-300"
                    : "border-border/30 hover:border-orange-500/30"
                }`}
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{facility.title}</h3>
                <p className="text-sm text-foreground">{facility.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* From Legacy to the Future Section */}
      <section className="px-3 py-10">
        <div className="max-w-7xl mx-auto">
          <div className={`rounded-2xl p-8 md:p-12 bg-gradient-to-r border ${
            theme === "light"
              ? "from-orange-100 to-red-100 border-orange-300"
              : "from-orange-500/10 to-red-600/10 border-orange-500/30"
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              From Legacy to the <span className={theme === "light" ? "text-orange-900" : "text-white"}>Future</span>
            </h2>
            <p className="text-lg text-foreground leading-relaxed max-w-3xl">
              Building on its strong foundation, Dayananda Sagar University continues to evolve as a future-ready institution—integrating emerging technologies, interdisciplinary learning, research-led education, and global engagement to prepare students for a rapidly changing world.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/ai-first">
                <Button
                  variant="outline"
                  size="lg"
                  className={`border-2 rounded-xl font-semibold ${
                    theme === "light"
                      ? "border-orange-600 text-orange-600 hover:bg-orange-600"
                      : "border-orange-500 text-orange-500 hover:bg-orange-500"
                  } hover:text-foreground`}
                >
                  Explore AI-First @ DSU
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/academics">
                <Button
                  variant="outline"
                  size="lg"
                  className={`border-2 rounded-xl font-semibold ${
                    theme === "light"
                      ? "border-orange-600 text-orange-600 hover:bg-orange-600"
                      : "border-orange-500 text-orange-500 hover:bg-orange-500"
                  } hover:text-foreground`}
                >
                  View Our Academics
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`px-3 py-10 bg-gradient-to-r ${
        theme === "light"
          ? "from-orange-100 to-red-100"
          : "from-orange-500/5 to-red-600/5"
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Begin Your Chapter Here
          </h2>
          <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
            Join an institution shaped by legacy and driven by innovation—where history informs the future. Shape your future with us.
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
                className={`border-2 px-8 py-6 font-semibold rounded-2xl ${
                  theme === "light"
                    ? "border-orange-600 text-orange-600 hover:bg-orange-600"
                    : "border-orange-500 text-orange-500 hover:bg-orange-500"
                } hover:text-foreground`}
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
