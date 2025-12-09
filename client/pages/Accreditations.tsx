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
  Award,
  Star,
  Globe,
  Shield,
  TrendingUp,
  Lightbulb,
  Building,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Accreditations() {
  const accreditations = [
    {
      icon: Award,
      title: "NAAC A+ Grade",
      issuer: "National Assessment and Accreditation Council",
      year: "2023",
      description:
        "Highest accreditation grade, recognizing institutional excellence, quality of academic programs, research, and student development.",
      significance:
        "Validates the university's commitment to quality assurance and continuous improvement",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Star,
      title: "NIRF Ranking",
      issuer: "National Institutional Ranking Framework",
      year: "2024",
      description:
        "Featured among India's top 100 universities, recognizing overall excellence in education, research, and infrastructure.",
      significance:
        "Confirms DSU's position among leading universities in India",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Shield,
      title: "UGC Recognition",
      issuer: "University Grants Commission of India",
      year: "2008",
      description:
        "Full recognition by UGC under Section 2(f) and 12(B), enabling the university to offer degrees recognized nationwide.",
      significance:
        "Essential recognition for operating as a full-fledged university",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Zap,
      title: "AICTE Approval",
      issuer: "All India Council for Technical Education",
      year: "Ongoing",
      description:
        "Approval for all technical programs including engineering, computer applications, and other professional courses.",
      significance:
        "Ensures technical programs meet national standards and quality benchmarks",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: BookOpen,
      title: "NBA Accreditation",
      issuer: "National Board of Accreditation",
      year: "2022",
      description:
        "Accreditation of engineering programs, ensuring curriculum and infrastructure meet NBA standards for engineering education.",
      significance:
        "Validates quality of engineering education and industry readiness",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Globe,
      title: "QS World Rankings",
      issuer: "Quacquarelli Symonds",
      year: "2024",
      description:
        "Inclusion in QS World University Rankings, recognized for quality education and international academic standards.",
      significance:
        "Demonstrates university's standing in global academic community",
      color: "from-green-500 to-green-600",
    },
  ];

  const specialRecognitions = [
    {
      icon: TrendingUp,
      title: "ARIIA Ranking",
      subtitle: "Atal Ranking of Institutions on Innovation Achievements",
      ranking: "Top Performer (2023)",
      description:
        "Recognition for promoting innovation and creating an entrepreneurial ecosystem among students and faculty.",
      highlights: [
        "Innovation initiatives",
        "Startup support",
        "Patent filings",
      ],
    },
    {
      icon: Lightbulb,
      title: "Research Excellence",
      subtitle: "International Research Recognition",
      ranking: "2024",
      description:
        "Recognized for significant research contributions, publications, and innovations across multiple disciplines.",
      highlights: [
        "Peer-reviewed publications",
        "Research collaborations",
        "Innovation projects",
      ],
    },
    {
      icon: Building,
      title: "Carbon Neutral Campus",
      subtitle: "Sustainability Initiative",
      ranking: "2024 Certified",
      description:
        "Achieved carbon neutrality through renewable energy adoption, sustainable infrastructure, and green practices.",
      highlights: [
        "Renewable energy systems",
        "Green buildings",
        "Waste management",
      ],
    },
    {
      icon: Target,
      title: "Industry Certifications",
      subtitle: "Professional Program Partnerships",
      ranking: "Multiple",
      description:
        "Official partnerships with industry leaders for certifications and training programs.",
      highlights: [
        "IBM Certification",
        "VMware Academy",
        "Professional partnerships",
      ],
    },
  ];

  const certifications = [
    {
      name: "ISO 9001:2015",
      category: "Quality Management",
      description: "Quality management system certification",
    },
    {
      name: "Data Security",
      category: "Information Security",
      description: "Data protection and cybersecurity compliance",
    },
    {
      name: "Environmental Standards",
      category: "Sustainability",
      description: "Environmental management and green practices",
    },
    {
      name: "Accessibility Standards",
      category: "Inclusion",
      description: "Campus accessibility for persons with disabilities",
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

        <div className="relative max-w-7xl mx-auto px-3 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/20 mb-4">
            <Award className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-sm font-medium text-orange-500">
              Recognitions
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Accreditations & Rankings
            </span>
          </h1>

          <p className="text-lg md:text-xl text-foreground mb-4 leading-relaxed max-w-3xl mx-auto">
            National and international recognition of our commitment to academic excellence, research innovation, and institutional quality.
          </p>
        </div>
      </section>

      {/* Major Accreditations */}
      <section className="px-3 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Major Accreditations
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Nationally and internationally recognized accreditations validating our educational standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {accreditations.map((acc, index) => {
              const Icon = acc.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:border-orange-500/30 bg-card/50 backdrop-blur-sm border border-border/50"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${acc.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-7 h-7 text-foreground" />
                      </div>
                      <Badge variant="outline" className="border-orange-500/20 bg-orange-500/10 text-orange-500">
                        {acc.year}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-orange-500 transition-colors">
                      {acc.title}
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                      {acc.issuer}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground leading-relaxed">
                      {acc.description}
                    </p>
                    <div className="bg-orange-500/5 border-l-4 border-orange-500 p-3 rounded">
                      <p className="text-sm text-foreground">
                        <span className="font-semibold text-foreground">
                          Significance:
                        </span>{" "}
                        {acc.significance}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Recognitions */}
      <section className="px-3 py-20 bg-gradient-to-br from-orange-500/5 via-red-600/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="border-orange-500/20 bg-orange-500/10 text-orange-500 mb-4"
            >
              Special Recognitions
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Additional </span>
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
            {specialRecognitions.map((rec, index) => {
              const Icon = rec.icon;
              return (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <Icon className="w-8 h-8 text-orange-500" />
                      <Badge variant="secondary" className="text-xs">
                        {rec.ranking}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{rec.title}</CardTitle>
                    <CardDescription>{rec.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground text-sm">
                      {rec.description}
                    </p>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">
                        Key Highlights:
                      </p>
                      <div className="space-y-1">
                        {rec.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm text-foreground"
                          >
                            <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other Certifications */}
      <section className="px-3 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Other </span>
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <p className="text-lg text-foreground">
              Additional certifications and compliance standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="bg-card/30 backdrop-blur-sm border border-border/30 hover:border-orange-500/30 transition-all duration-300 text-center"
              >
                <CardContent className="p-3">
                  <CheckCircle className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">{cert.name}</h3>
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {cert.category}
                  </Badge>
                  <p className="text-sm text-foreground">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="px-3 py-20 bg-gradient-to-r from-orange-500/5 to-red-600/5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-4 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                What These Accreditations Mean
              </span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: "Quality Assurance",
                  description:
                    "Regular evaluation and monitoring of academic programs and institutional practices",
                },
                {
                  title: "Student Protection",
                  description:
                    "Accredited degrees are recognized nationwide and globally",
                },
                {
                  title: "Research Excellence",
                  description:
                    "Validation of research quality and innovation initiatives",
                },
                {
                  title: "Industry Recognition",
                  description:
                    "Employers recognize the value and credibility of DSU degrees",
                },
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-orange-500/20">
                      <Star className="h-6 w-6 text-orange-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-foreground text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-3 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Learn More About Our Programs
          </h2>
          <p className="text-lg text-foreground mb-4 max-w-2xl mx-auto">
            Explore our accredited programs and start your journey with a university recognized for excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/academics">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-red-600 hover:to-orange-500 text-foreground px-8 py-6 font-semibold rounded-2xl"
              >
                Explore Programs
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
