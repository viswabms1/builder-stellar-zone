import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Users,
  Award,
  Globe,
  ArrowRight,
  Zap,
  Database,
  FileText,
  Shield,
  Link2,
  Images,
  HelpCircle,
} from "lucide-react";

export default function Library() {
  const heroBgImage = "https://www.dsu.edu.in/images/3.jpg";

  const libraryFeatures = [
    {
      icon: BookOpen,
      title: "Comprehensive Collections",
      description:
        "Over 5 lakh volumes including books, CDs, DVDs, and periodicals",
      color: "from-brand-blue to-brand-blue/80",
    },
    {
      icon: Globe,
      title: "Digital Library Access",
      description:
        "Online resources and e-books through our digital library platform",
      color: "from-brand-magenta to-brand-magenta/80",
    },
    {
      icon: Users,
      title: "Professional Staff",
      description:
        "Skilled and compassionate librarians dedicated to user assistance",
      color: "from-brand-orange to-brand-orange/80",
    },
    {
      icon: Award,
      title: "Modern Facilities",
      description: "Seating capacity of 560 students with state-of-the-art infrastructure",
      color: "from-brand-blue to-brand-magenta",
    },
  ];

  const libraryServices = [
    {
      name: "Library Vision & Mission",
      description: "Our commitment to academic excellence",
      href: "/library/vision-mission",
      icon: Zap,
    },
    {
      name: "Collections",
      description: "Explore our vast collection of resources",
      href: "/library/collections",
      icon: Database,
    },
    {
      name: "E-Resources",
      description: "Access digital library and online databases",
      href: "/library/e-resources",
      icon: Globe,
    },
    {
      name: "Our Team",
      description: "Meet our dedicated library staff",
      href: "/library/team",
      icon: Users,
    },
    {
      name: "Rules & Regulations",
      description: "Library policies and guidelines",
      href: "/library/rules-regulations",
      icon: FileText,
    },
    {
      name: "Anti-Plagiarism Tools",
      description: "Tools and resources for academic integrity",
      href: "/library/anti-plagiarism",
      icon: Shield,
    },
    {
      name: "Useful Links",
      description: "External resources and references",
      href: "/library/useful-links",
      icon: Link2,
    },
    {
      name: "Gallery",
      description: "View library facilities and spaces",
      href: "/library/gallery",
      icon: Images,
    },
    {
      name: "Contact & Support",
      description: "Get help from our library team",
      href: "/library/contact",
      icon: HelpCircle,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-10 lg:py-32 bg-gradient-to-br from-brand-blue/5 via-brand-magenta/5 to-background dark:from-slate-900 dark:via-black dark:to-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBgImage}
            alt="DSU Library"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue/20 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-brand-magenta/20 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3 text-center">
          <Badge className="mb-4 bg-brand-blue/20 text-white hover:bg-brand-blue/30">
            Knowledge Hub
          </Badge>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-8 leading-tight text-white">
            <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">DSU Central Library</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold text-white mb-6 max-w-4xl mx-auto leading-relaxed">
            A world-class center of intellectual life with comprehensive resources for learning, research, and innovation
          </p>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
            Established as a cornerstone of academic excellence, our library serves as an instrument of education with modern facilities and extensive collections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-gradient-to-r from-[#0088FF] via-[#FFD700] to-[#FF6B00] hover:via-[#FFC500] text-foreground font-semibold px-8 py-6 text-lg rounded-lg animate-gradient bg-[length:200%_auto]"
            >
              <a href="https://dsuunivopac.ltsinformatics.com/" target="_blank" rel="noopener noreferrer">
                Access Digital Library
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/20 font-semibold px-8 py-6 text-lg rounded-lg"
            >
              <Link to="/library/e-resources">
                E-Resources
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Library Section */}
      <section className="py-16 px-3 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
              <span className="bg-brand-gradient bg-clip-text text-transparent">About Our Library</span>
            </h2>
            <p className="text-lg text-foreground/80 mb-4">
              The library came into existence with the establishment of DSI in 1969, further expanded with Dayananda Sagar College of Engineering in 1979, and evolved with Dayananda Sagar University in 2014.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Late Sri R. Dayananda Sagar, founder of the Dayananda Sagar group, took special interest in establishing a world-class library. Built and equipped steadily and systematically, our library stands as a testament to educational excellence.
            </p>
            <p className="text-lg text-foreground/80">
              With a seating capacity of 560 students, our library houses a huge collection of books, CDs, DVDs, and periodicals, along with access to online resources through our digital library platform.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {libraryFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="border-none shadow-lg hover:shadow-lg hover:shadow-brand-blue/20 transition-all bg-gradient-to-br from-card/80 via-card/60 to-card/40">
                  <CardContent className="pt-6">
                    <div
                      className={`bg-gradient-to-br ${feature.color} p-3 rounded-lg w-fit mb-4`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-foreground/70">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-3 bg-gradient-to-br from-brand-blue/5 via-brand-magenta/5 to-background dark:from-brand-magenta/5 dark:via-brand-blue/5 dark:to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">
              <span className="bg-brand-gradient bg-clip-text text-transparent">Library Services & Resources</span>
            </h2>
            <p className="text-xl text-foreground/70">
              Explore our comprehensive range of services and resources
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {libraryServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Link key={idx} to={service.href}>
                  <Card className="h-full border-none shadow-md hover:shadow-lg hover:shadow-brand-blue/20 hover:scale-105 transition-all cursor-pointer group bg-gradient-to-br from-card/80 via-card/60 to-card/40">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-brand-blue/10 group-hover:bg-brand-blue/20 transition-colors">
                          <Icon className="h-6 w-6 text-brand-blue" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{service.name}</h3>
                          <p className="text-sm text-foreground/70">{service.description}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-3 bg-gradient-to-r from-brand-blue/10 via-brand-magenta/10 to-brand-orange/10 dark:from-brand-blue/5 dark:via-brand-magenta/5 dark:to-brand-orange/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-brand-blue mb-2">5L+</div>
              <p className="text-lg text-foreground/70">Total Volumes</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-brand-magenta mb-2">560</div>
              <p className="text-lg text-foreground/70">Seating Capacity</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-brand-blue mb-2">24/7</div>
              <p className="text-lg text-foreground/70">Digital Access</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-brand-orange mb-2">100%</div>
              <p className="text-lg text-foreground/70">Student Access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Links */}
      <section className="py-16 px-3 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">
            <span className="bg-brand-gradient bg-clip-text text-transparent">Essential Information</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Find guides, policies, and additional resources
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-none shadow-md hover:shadow-lg hover:shadow-brand-blue/20 transition-all bg-gradient-to-br from-card/80 via-card/60 to-card/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-brand-blue" />
                Rules & Regulations
              </CardTitle>
              <CardDescription>
                Library policies, guidelines, and code of conduct
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="ghost" className="w-full justify-start text-brand-blue hover:text-brand-magenta">
                <Link to="/library/rules-regulations">
                  View Guidelines <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg hover:shadow-brand-blue/20 transition-all bg-gradient-to-br from-card/80 via-card/60 to-card/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-brand-magenta" />
                Contact & Support
              </CardTitle>
              <CardDescription>
                Get in touch with our library team for assistance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="ghost" className="w-full justify-start text-brand-magenta hover:text-brand-blue">
                <Link to="/library/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
