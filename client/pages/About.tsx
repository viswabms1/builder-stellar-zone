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
  ArrowRight,
  GraduationCap,
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Building,
  Globe,
  Star,
  TrendingUp,
  MapPin,
  Calendar,
  Mail,
  Phone,
  Clock,
  CheckCircle,
  Lightbulb,
  BookOpen,
  Shield,
  ChevronRight,
  Compass,
  History,
} from "lucide-react";

export default function About() {
  const heroBgImage = "https://www.dsu.edu.in/images/3.jpg";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Background Image */}
      <section className="relative py-10 lg:py-32 bg-gradient-to-br from-orange-500/10 via-red-600/5 to-background overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBgImage}
            alt="DSU Campus"
            className="w-full h-full object-cover opacity-20"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/10 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/20 mb-8">
            <Building className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-sm font-medium text-orange-500">
              Established 2008 | Legacy since 1960s
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-foreground">About</span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Dayananda Sagar
            </span>
            <br />
            <span className="text-foreground">University</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground mb-6 max-w-4xl mx-auto leading-relaxed">
            A centre of excellence in education, research & training, innovation & entrepreneurship producing citizens with exceptional leadership qualities
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link to="/about/history">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-red-600 hover:to-orange-500 text-foreground px-8 py-6 text-lg font-semibold rounded-2xl"
              >
                Our Legacy
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a
              href="https://dsu.edu.in/virtual-tour/"
              target="_blank"
              rel="noreferrer"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-foreground px-8 py-6 text-lg font-semibold rounded-2xl"
              >
                Campus Tour
              </Button>
            </a>
          </div>

          {/* Key Numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {[
              { number: "17,000+", label: "Students", icon: Users },
              { number: "60+", label: "Years Heritage", icon: Calendar },
              { number: "5", label: "Campuses Worldwide", icon: Globe },
              { number: "2014", label: "University Status", icon: Building },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center p-3 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-orange-500/30 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-foreground">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="px-3 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Welcome to DSU
              </span>
            </h2>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-4 md:p-12 space-y-3">
            <p className="text-lg text-foreground leading-relaxed">
              Dayananda Sagar Institutions founded in the 60s by one such visionary, late Sri Dayananda Sagar committed to take knowledge to the people, transforms today's students into responsible citizens and professional leaders of tomorrow.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Dayananda Sagar University created by an Act of the Karnataka State in 2014, built on this adorable legacy and inspired by its own milestones, meeting the needs of quality higher education in this part of the world.
            </p>
          </div>
        </div>
      </section>

      {/* Core Sections */}
      <section className="px-3 py-10 bg-gradient-to-br from-orange-500/5 via-red-600/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                What Makes DSU Special
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: Star,
                title: "Unveiling a Legacy",
                description:
                  "Universities of great legacy across the world are the invaluable contribution of certain visionaries to the world. Universities don't manufacture products with specific use and determined life cycle. They share & impart multitudes of streams of knowledge and create wonderful human beings – learned practitioners & Disseminators of knowledge to make the world a better place to be.",
              },
              {
                icon: Building,
                title: "Proud to be part of DSU",
                description:
                  "DSU is a proud member of the Dayananda Sagar Institutions family. Founded by Late Sri Dayananda Sagar in the early sixties with just four students, DSI has morphed into a global education powerhouse, spread over five campuses, catering to the education needs of over 17,000 students. Operating under the aegis of the Mahatma Gandhi Vidya Peetha Trust in Bengaluru, DSI has enabled the transformation of tens of thousands of young Indian and international citizens into professionals in diverse specializations.",
              },
              {
                icon: Users,
                title: "Best-in-class Facilities",
                description:
                  "Besides our high-calibre teaching staff, the students are given a challenging academic environment with well-equipped lecture theatres, laboratories, excellent libraries and computer networking facilities. DSU also has exceptional infrastructure for students who possess a passion for sports and games. The hostel facilities, encompassing cultural and recreational needs, cater to both local and international students.",
              },
              {
                icon: Lightbulb,
                title: "Inspired by Innovators",
                description:
                  "Research, Innovation and Incubation (spread over 25,000 sft of industry quality labs) form the core of DSU. DSU has laid the foundation to transform the entrepreneurial dream of every young Indian and global citizen into a reality. Enabling this transformation is the active support of industry leaders, industry bodies and a dedicated 4 lakh square feet modern ready-to-move-in infrastructure!",
              },
              {
                icon: Award,
                title: "Stellar Performance – Time and Again",
                description:
                  "Dayananda Sagar Institutions (DSI) have consistently topped the academic charts in every area of knowledge standing out from the midst of a sea of institutions of repute. In the recent past, DSI secured 58 ranks from Visvesvaraya Technological University among 220 engineering colleges in Karnataka.",
              },
              {
                icon: Globe,
                title: "Different Courses for Different Passions",
                description:
                  "Dayananda Sagar University offers courses in Engineering, Computer Applications, Sciences, Arts and Management in the Bachelors, Masters and Ph.D levels. Supporting the academic activities are the Centers of Excellence in ICT, Health Care, Energy and Life Science, among other fast evolving fields of study.",
              },
            ].map((section, index) => {
              const Icon = section.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:border-orange-500/30 bg-card/50 backdrop-blur-sm border border-border/50"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-orange-500 transition-colors">
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground leading-relaxed">
                      {section.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Explore About DSU Navigation */}
      <section className="px-3 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Explore About DSU
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Learn more about our university through dedicated sections
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                icon: Compass,
                title: "Vision & Mission",
                description: "Our guiding principles and strategic goals",
                href: "/about/vision-mission",
              },
              {
                icon: History,
                title: "History",
                description: "60+ years of educational excellence",
                href: "/about/history",
              },
              {
                icon: Users,
                title: "Leadership",
                description: "Meet our visionary leadership team",
                href: "/about/leadership",
              },
              {
                icon: Award,
                title: "Accreditations",
                description: "National and international recognitions",
                href: "/about/accreditations",
              },
              {
                icon: Building,
                title: "Facilities",
                description: "World-class infrastructure and amenities",
                href: "/about/facilities",
              },
            ].map((section, index) => {
              const Icon = section.icon;
              return (
                <Link key={index} to={section.href}>
                  <Card className="h-full group hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:border-orange-500/30 bg-card/50 backdrop-blur-sm border border-border/50 cursor-pointer hover:-translate-y-1">
                    <CardContent className="p-3 text-center">
                      <Icon className="w-10 h-10 text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="font-bold text-lg mb-2 group-hover:text-orange-500 transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-sm text-foreground">
                        {section.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-3 py-10 bg-gradient-to-r from-orange-500/5 to-red-600/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-500/10 via-red-600/10 to-pink-500/10 rounded-3xl p-12 border border-orange-500/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to be
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                {" "}
                Part of DSU
              </span>
              ?
            </h2>
            <p className="text-xl text-foreground mb-8 max-w-2xl mx-auto">
              Join our community of learners, innovators, and leaders shaping the future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="https://admissions.dsu.edu.in/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 via-red-600 to-pink-500 text-foreground px-12 py-6 text-lg font-semibold rounded-2xl"
                >
                  Apply Now
                  <GraduationCap className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a
                href="https://dsu.edu.in/virtual-tour/"
                target="_blank"
                rel="noreferrer"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-foreground px-12 py-6 text-lg font-semibold rounded-2xl"
                >
                  Schedule Visit
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Excellence in Education",
                "Research Innovation",
                "Global Recognition",
                "Industry Connect",
              ].map((badge, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-3 py-1 text-xs font-medium"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
