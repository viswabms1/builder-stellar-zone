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
  Building,
  Microscope,
  BookOpen,
  Users,
  Wifi,
  Dumbbell,
  Utensils,
  Home,
  Zap,
  Leaf,
  Monitor,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Facilities() {
  const facilities = [
    {
      icon: Building,
      title: "Academic Buildings",
      description: "Modern, well-designed academic blocks with seminar halls and classrooms",
      features: [
        "State-of-the-art classrooms",
        "Seminar and conference halls",
        "Faculty offices and research spaces",
        "Digital learning centers",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Microscope,
      title: "Research & Innovation Labs",
      description: "Well-equipped laboratories across engineering, sciences, and technology disciplines",
      features: [
        "AI & Machine Learning Lab",
        "Advanced Materials Lab",
        "Cybersecurity Research Center",
        "Robotics Lab",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: BookOpen,
      title: "Libraries",
      description: "Comprehensive library resources with digital and physical collections",
      features: [
        "5 Lakh+ volumes collection",
        "Digital library access",
        "Study zones and reading rooms",
        "Research databases",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: Dumbbell,
      title: "Sports & Recreation",
      description: "Comprehensive sports facilities and recreation centers",
      features: [
        "Cricket ground",
        "Basketball court",
        "Tennis courts",
        "Fitness center & gymnasium",
      ],
      color: "from-red-500 to-red-600",
    },
    {
      icon: Utensils,
      title: "Food & Dining",
      description: "Multi-cuisine food courts with quality dining options",
      features: [
        "Hygienic food courts",
        "Cafeteria with vegetarian options",
        "Vending machines",
        "Quality food standards",
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Home,
      title: "Hostels & Accommodation",
      description: "Safe and comfortable residential facilities for students",
      features: [
        "Boys hostel facilities",
        "Girls hostel facilities",
        "24/7 security",
        "Common recreational areas",
      ],
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Wifi,
      title: "Digital Infrastructure",
      description: "High-speed internet and modern IT infrastructure across campus",
      features: [
        "High-speed WiFi",
        "Computer labs",
        "Cloud infrastructure",
        "Digital classrooms",
      ],
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Leaf,
      title: "Green Campus",
      description: "Sustainable and eco-friendly campus initiatives",
      features: [
        "Solar power systems",
        "Water recycling",
        "Green spaces and gardens",
        "Waste management systems",
      ],
      color: "from-emerald-500 to-emerald-600",
    },
  ];

  const campuses = [
    {
      name: "Main Campus - Kumaraswamy Layout",
      location: "Bangalore, Karnataka",
      features: [
        "Engineering School",
        "Computer Applications",
        "Management Studies",
        "Applied Sciences",
      ],
      area: "10+ acres",
      facilities: [
        "Multiple academic buildings",
        "Hostel facilities",
        "Sports complex",
        "Research centers",
      ],
    },
    {
      name: "City Innovation Campus",
      location: "Bangalore, Karnataka",
      features: [
        "Executive programs",
        "Online education hub",
        "Innovation center",
        "Industry partnerships",
      ],
      area: "2+ acres",
      facilities: [
        "Modern classrooms",
        "Conference facilities",
        "Innovation labs",
        "Digital studios",
      ],
    },
    {
      name: "Health Sciences Campus",
      location: "Harohalli, Bangalore",
      features: [
        "CDSIMER Hospital",
        "Health sciences programs",
        "Clinical training",
        "Research facilities",
      ],
      area: "5+ acres",
      facilities: [
        "Hospital facilities",
        "Medical labs",
        "Simulation centers",
        "Clinical spaces",
      ],
    },
  ];

  const infrastructure = [
    {
      category: "Computing",
      items: [
        "High-performance computing clusters",
        "Cloud computing infrastructure",
        "Supercomputing facilities",
      ],
    },
    {
      category: "Communication",
      items: [
        "Fiber optic backbone",
        "Broadband connectivity",
        "Video conferencing setup",
      ],
    },
    {
      category: "Laboratories",
      items: [
        "25,000+ sq ft laboratory space",
        "State-of-the-art equipment",
        "Research-grade instruments",
      ],
    },
    {
      category: "Safety & Security",
      items: [
        "24/7 security monitoring",
        "CCTV surveillance",
        "Emergency response systems",
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
            <Building className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-sm font-medium text-orange-500">
              Infrastructure
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Facilities & Infrastructure
            </span>
          </h1>

          <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            World-class facilities and infrastructure designed to provide an excellent learning and living environment for our students.
          </p>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Campus Facilities
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Comprehensive facilities supporting academic, recreational, and residential needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:border-orange-500/30 bg-card/50 backdrop-blur-sm border border-border/50 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${facility.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-orange-500 transition-colors">
                      {facility.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-foreground">
                      {facility.description}
                    </p>
                    <div className="space-y-2">
                      {facility.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-sm text-foreground"
                        >
                          <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          {feature}
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

      {/* Campuses */}
      <section className="px-6 py-20 bg-gradient-to-br from-orange-500/5 via-red-600/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="border-orange-500/20 bg-orange-500/10 text-orange-500 mb-4"
            >
              Our Campuses
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Strategic </span>
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Locations
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {campuses.map((campus, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{campus.name}</CardTitle>
                  <CardDescription className="text-base">
                    {campus.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      {campus.area}
                    </Badge>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">
                      Academic Offerings:
                    </p>
                    <div className="space-y-1">
                      {campus.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-foreground"
                        >
                          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">
                      Key Facilities:
                    </p>
                    <div className="space-y-1">
                      {campus.facilities.map((facility, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-foreground"
                        >
                          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                          {facility}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Details */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Digital & </span>
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Technical Infrastructure
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infrastructure.map((infra, index) => (
              <Card
                key={index}
                className="bg-card/30 backdrop-blur-sm border border-border/30 hover:border-orange-500/30 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4 text-foreground">
                    {infra.category}
                  </h3>
                  <div className="space-y-2">
                    {infra.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <Monitor className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="px-6 py-20 bg-gradient-to-r from-orange-500/5 to-red-600/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                By the Numbers
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "25,000+", label: "sq ft Laboratory Space" },
              { number: "4,00,000+", label: "sq ft Built-up Area" },
              { number: "50+", label: "Research Centers" },
              { number: "500+", label: "Lab Equipment" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center p-6 bg-card/30 backdrop-blur-sm border border-border/30"
              >
                <Zap className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Green & Sustainable Campus
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Leaf,
                  title: "Renewable Energy",
                  description:
                    "Solar power systems generating sustainable energy for campus operations",
                },
                {
                  icon: Zap,
                  title: "Energy Efficiency",
                  description:
                    "Modern infrastructure with energy-efficient designs and systems",
                },
                {
                  icon: Leaf,
                  title: "Water Management",
                  description:
                    "Rainwater harvesting and water recycling systems for conservation",
                },
                {
                  icon: Leaf,
                  title: "Waste Management",
                  description:
                    "Comprehensive waste segregation and recycling programs",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <Icon className="w-8 h-8 text-orange-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-orange-500/5 to-red-600/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Explore Our Campus
          </h2>
          <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
            Experience our world-class facilities firsthand. Take a virtual or physical tour of our campuses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://dsu.edu.in/virtual-tour/" target="_blank" rel="noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-red-600 hover:to-orange-500 text-foreground px-8 py-6 font-semibold rounded-2xl"
              >
                Virtual Tour
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
