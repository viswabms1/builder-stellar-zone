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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  Cpu,
  Briefcase,
} from "lucide-react";

export default function About() {
  const heroBgImage = "https://www.dsu.edu.in/images/3.jpg";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Background Image */}
      <section className="relative py-10 lg:py-32 bg-gradient-to-br from-brand-blue/10 via-brand-magenta/5 to-background overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBgImage}
            alt="DSU Campus"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue/10 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-brand-magenta/10 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3 text-center">
          <h1 className="headline-1 font-display mb-8 text-white">
            Building India's AI-First Academic Ecosystem
          </h1>

          <p className="subheadline font-display text-white mb-6 max-w-4xl mx-auto">
            A multidisciplinary university where legacy education meets
            industry-grade AI, research, and innovation.
          </p>

          <div className="flex justify-center mb-8">
            <a
              href="https://dsu.edu.in/virtual-tour/"
              target="_blank"
              rel="noreferrer"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#0088FF] via-[#FFD700] to-[#FF6B00] hover:from-[#0066FF] hover:via-[#FFC700] hover:to-[#FF5500] text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 transition-all animate-gradient bg-[length:200%_auto]"
              >
                Campus Tour
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>

          {/* Metrics Connector */}
          <p className="subheadline font-display text-white mb-8 max-w-4xl mx-auto">
            A legacy built on scale, trust, and academic excellence
          </p>

          {/* Key Numbers */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {[
              { number: "17,000+", label: "Students", icon: Users },
              { number: "60+", label: "Years Heritage", icon: Calendar },
              { number: "2014", label: "University Status", icon: Building },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center p-3 bg-white/95 backdrop-blur-sm border border-white/40 hover:border-white/60 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-brand-blue mx-auto mb-3" />
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-1 font-display">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-slate-700 font-body">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="px-3 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="headline-2 mb-6">
              <span className="bg-brand-gradient bg-clip-text text-transparent font-display">
                Welcome to DSU
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            <div className="text-sm md:text-base lg:text-lg text-foreground leading-relaxed space-y-3 font-body">
              <p>
                Founded in the 1960s, the Dayananda Sagar Institutions have
                shaped generations of learners. As a state university since
                2014, DSU carries this legacy forward with a future-focused
                academic vision.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="story"
                className="border border-border/50 rounded-lg px-4"
              >
                <AccordionTrigger className="text-brand-blue hover:text-brand-blue/80 font-semibold text-sm md:text-base">
                  Read Our Story →
                </AccordionTrigger>
                <AccordionContent className="space-y-4 text-foreground leading-relaxed text-sm md:text-base font-body">
                  <p>
                    Dayananda Sagar Institutions founded in the 60s by one such
                    visionary, late Sri Dayananda Sagar committed to take
                    knowledge to the people, transforms today's students into
                    responsible citizens and professional leaders of tomorrow.
                  </p>
                  <p>
                    Dayananda Sagar University created by an Act of the
                    Karnataka State in 2014, built on this adorable legacy and
                    inspired by its own milestones, meeting the needs of quality
                    higher education in this part of the world.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Core Sections */}
      <section className="px-3 py-10 bg-gradient-to-br from-brand-blue/5 via-brand-magenta/3 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="headline-2 mb-6">
              <span className="text-foreground">What Makes </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent font-display">
                DSU Special
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: Award,
                title: "World Class Center of Excellence",
                bullets: [
                  "State-of-the-art research facilities and specialized technology hubs",
                  "Collaborative spaces designed for breakthrough discoveries and innovation",
                ],
              },
              {
                icon: Cpu,
                title: "AI-First Education",
                bullets: [
                  "AI integrated across engineering, sciences, health, law, and design",
                  "Students learn on industry-grade AI workflows, not simulations",
                ],
              },
              {
                icon: Star,
                title: "Legacy with Trust",
                bullets: [
                  "60+ years of educational impact",
                  "Institutions that shape people, not just degrees",
                ],
              },
              {
                icon: Lightbulb,
                title: "Research & Innovation Culture",
                bullets: [
                  "25,000+ sq. ft. research & incubation ecosystem",
                  "High-impact publications and interdisciplinary projects",
                ],
              },
              {
                icon: Briefcase,
                title: "Industry & Career Readiness",
                bullets: [
                  "Strong industry partnerships and startup ecosystem",
                  "Focus on employability, research careers, and entrepreneurship",
                ],
              },
              {
                icon: Globe,
                title: "World Class Physical and Digital Infrastructure",
                bullets: [
                  "Modern campus facilities powered by Simmons Smart Campus Initiative with cutting-edge laboratories and digital networks",
                  "Seamless integration of physical and virtual learning environments",
                ],
              },
            ].map((section, index) => {
              const Icon = section.icon;
              return (
                <Card
                key={index}
                className="group hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300 hover:border-brand-blue/50 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm border border-border/50 hover:border-brand-blue/30 flex flex-col"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-4 group-hover:bg-brand-blue/20 transition-colors">
                    <Icon className="w-6 h-6 text-brand-blue group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-base md:text-lg lg:text-xl font-display group-hover:text-brand-blue transition-colors">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-2 text-foreground flex-1">
                      {section.bullets.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-xs md:text-sm leading-relaxed font-body"
                        >
                          <span className="text-brand-blue font-bold flex-shrink-0">
                            ✓
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
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
            <h2 className="headline-2 mb-6">
              <span className="text-foreground">Explore </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent font-display">
                About DSU
              </span>
            </h2>
            <p className="subheadline text-foreground max-w-3xl mx-auto">
              Discover DSU's vision, leadership, legacy, and infrastructure that
              shape a future-ready university.
            </p>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center max-w-5xl mx-auto">
            {[
              {
                icon: History,
                title: "History",
                description: "60+ years of educational excellence",
                href: "/about/history",
              },
              {
                icon: Compass,
                title: "Vision & Mission",
                description: "Our guiding principles and strategic goals",
                href: "/about/vision-mission",
              },
              {
                icon: Users,
                title: "Leadership",
                description: "Meet our visionary leadership team",
                href: "/about/leadership",
              },
            ].map((section, index) => {
              const Icon = section.icon;
              return (
                <Link key={index} to={section.href}>
                  <Card className="h-full group hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300 hover:border-brand-blue/30 bg-card/50 backdrop-blur-sm border border-border/50 cursor-pointer hover:-translate-y-1">
                    <CardContent className="p-3 text-center">
                      <Icon className="w-10 h-10 text-brand-blue mx-auto mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="font-bold text-sm md:text-base lg:text-lg font-display mb-2 group-hover:text-brand-blue transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-xs md:text-sm text-foreground font-body">
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
      <section className="px-3 py-10 bg-gradient-to-r from-brand-blue/5 to-brand-magenta/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-brand-blue/10 via-brand-magenta/10 to-brand-blue/5 rounded-3xl p-8 md:p-12 border border-brand-blue/20">
            <h2 className="headline-2 mb-4 md:mb-6">
              <span className="text-foreground">Ready to build your future with </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent font-display">
                AI-powered education
              </span>
              <span className="text-foreground">?</span>
            </h2>
            <p className="subheadline text-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
              Join a university where legacy, innovation, and AI-driven
              education converge.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
              href="https://admissions.dsu.edu.in/"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#0088FF] via-[#FFD700] to-[#FF6B00] hover:from-[#0066FF] hover:via-[#FFC700] hover:to-[#FF5500] text-white px-12 py-6 text-lg font-semibold rounded-2xl shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 transition-all animate-gradient bg-[length:200%_auto]"
              >
                Apply Now
                <GraduationCap className="w-5 h-5 ml-2" />
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
                  className="px-3 py-1 text-xs md:text-sm font-medium font-body bg-white text-slate-900 dark:bg-white dark:text-slate-900 hover:bg-white/90 dark:hover:bg-white/90"
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
