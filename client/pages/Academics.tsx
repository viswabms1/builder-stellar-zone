import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
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
  BookOpen,
  GraduationCap,
  FlaskConical,
  Building,
  Globe,
  Users,
  Award,
  ChevronRight,
  TrendingUp,
  Briefcase,
  Cog,
  Cpu,
  Gavel,
  Stethoscope,
  Palette,
  Film,
  Microscope,
  Laptop,
  PenSquare,
  Presentation,
} from "lucide-react";

export default function Academics() {
  const schoolsData = [
    {
      icon: Cog,
      title: "School of Engineering",
      campus: "Main Campus",
      image:
        "https://images.pexels.com/photos/3862638/pexels-photo-3862638.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
      programs: [
        "B.Tech CSE",
        "B.Tech Mechanical",
        "B.Tech ECE",
        "B.Tech Aerospace",
      ],
      color: "orange",
      href: "/academics/engineering",
      delay: "0s",
    },
    {
      icon: Cpu,
      title: "School of Computer Applications",
      campus: "City Innovation Campus",
      image:
        "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
      programs: ["BCA", "MCA", "Data Science", "Cloud Computing"],
      color: "magenta",
      href: "/academics/computer-applications",
      delay: "0.1s",
    },
    {
      icon: Gavel,
      title: "School of Law",
      campus: "City Innovation Campus",
      image:
        "https://images.pexels.com/photos/8112201/pexels-photo-8112201.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
      programs: ["BA LLB", "BBA LLB", "LLB", "LLM"],
      color: "blue",
      href: "/academics/law",
      delay: "0.2s",
    },
    {
      icon: Briefcase,
      title: "School of Commerce & Management",
      campus: "City Innovation Campus",
      image:
        "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
      programs: ["B.Com", "BBA", "MBA", "Finance & Marketing"],
      color: "orange",
      href: "/academics/management-studies",
      delay: "0.3s",
    },
    {
      icon: FlaskConical,
      title: "School of Basic & Applied Sciences",
      campus: "City Innovation Campus",
      image:
        "https://images.pexels.com/photos/9628799/pexels-photo-9628799.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
      programs: ["Physics", "Chemistry", "Mathematics", "Biotechnology"],
      color: "magenta",
      href: "/academics/basic-applied-sciences",
      delay: "0.4s",
    },
    {
      icon: Stethoscope,
      title: "School of Health Sciences",
      campus: "Main Campus",
      image:
        "https://images.pexels.com/photos/1279365/pexels-photo-1279365.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
      programs: ["Pharmacy", "Nursing", "CDSIMER", "CAHS"],
      color: "blue",
      href: "/academics/health-sciences",
      delay: "0.5s",
    },
    {
      icon: Film,
      title: "School of Design & Digital Trans-Media",
      campus: "City Innovation Campus",
      image:
        "https://images.pexels.com/photos/7147711/pexels-photo-7147711.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
      programs: ["Animation", "UX/UI", "Graphic Design", "Digital Media"],
      color: "magenta",
      href: "/academics/design/bdesign",
      delay: "0.7s",
    },
    {
      icon: PenSquare,
      title: "School of Arts, Design & Humanities",
      campus: "City Innovation Campus",
      image:
        "https://images.pexels.com/photos/7317291/pexels-photo-7317291.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
      programs: ["BJMC", "PG Diploma", "Documentary", "Digital Media"],
      color: "blue",
      href: "/academics/journalism-mass-communication",
      delay: "0.75s",
    },
    {
      icon: Microscope,
      title:
        "Dr. Chandramma Dayananda Sagar Institute of Medical Education & Research",
      campus: "Main Campus",
      image:
        "https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
      programs: ["MBBS", "MD", "DM", "Fellowship"],
      color: "blue",
      href: "https://cdsimer.edu.in",
      delay: "0.8s",
    },
    {
      icon: Laptop,
      title: "Online Degree Programs",
      campus: "City Innovation Campus",
      image:
        "https://images.pexels.com/photos/7974355/pexels-photo-7974355.jpeg?auto=compress&cs=tinysrgb&w=400&q=75",
      programs: [
        "Online Degrees",
        "Flexible Learning",
        "Certification Programs",
        "Professional Development",
      ],
      color: "orange",
      href: "https://dsuonline.com/",
      delay: "0.85s",
    },
  ];

  const colorClasses = {
    orange: {
      bg: "bg-gradient-to-br from-orange-500/10 to-orange-600/5",
      border: "border-orange-500/30",
      text: "text-orange-500",
      badge: "bg-orange-500/30 text-foreground border-orange-500/50",
    },
    magenta: {
      bg: "bg-gradient-to-br from-brand-magenta/10 to-pink-600/5",
      border: "border-brand-magenta/30",
      text: "text-brand-magenta",
      badge: "bg-brand-magenta/30 text-foreground border-brand-magenta/50",
    },
    blue: {
      bg: "bg-gradient-to-br from-blue-500/10 to-cyan-600/5",
      border: "border-blue-500/30",
      text: "text-blue-500",
      badge: "bg-blue-500/30 text-foreground border-blue-500/50",
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section - What Makes Us Different */}
      <section className="relative px-3 py-16 md:py-20 bg-gradient-to-br from-brand-blue/10 via-background to-brand-orange/10 border-b border-brand-orange/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm md:text-base text-brand-orange mb-4 uppercase tracking-widest font-display font-semibold">
                What Makes DSU Different
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight font-display">
                Academic Programs{" "}
                <span className="bg-brand-gradient bg-clip-text text-transparent">
                  Powered by AI
                </span>
              </h1>
              <p className="text-lg text-foreground/80 mb-8 max-w-xl font-display leading-relaxed">
                We're not just teaching traditional courses. We're integrating
                AI, emerging technologies, and industry partnerships into every
                program to prepare you the way the industry is looking for.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://admissions.dsu.edu.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Button
                    size="lg"
                    className="bg-brand-gradient hover:opacity-90 text-foreground px-8 py-6 text-base font-semibold font-display transition-all duration-300 group border-2 border-transparent"
                  >
                    Apply Now
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Award,
                  label: "AI-Integrated Curriculum",
                  desc: "Every program includes AI and emerging tech",
                },
                {
                  icon: Globe,
                  label: "Industry Partnerships",
                  desc: "Real-world projects with leading companies",
                },
                {
                  icon: Users,
                  label: "Diverse Schools",
                  desc: "10+ specialized schools across all fields",
                },
                {
                  icon: TrendingUp,
                  label: "Research & Innovation",
                  desc: "World-class research centers and labs",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-white/5 border border-foreground/10 hover:border-brand-orange/30 transition-all"
                >
                  <item.icon className="w-6 h-6 text-brand-orange mb-2" />
                  <p className="font-bold text-sm text-foreground mb-1">
                    {item.label}
                  </p>
                  <p className="text-xs text-foreground/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schools & Colleges - Matching Homepage Layout */}
      <section className="px-3 pt-10 pb-4 md:pb-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="headline-2 mb-6">
              Academic Excellence That Inspires
            </h2>
            <p className="subheadline text-foreground max-w-3xl mx-auto">
              Explore AI-integrated undergraduate and postgraduate programs
              spanning engineering, sciences, health, law, design, and
              management.
            </p>
          </div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-0 auto-rows-max"
            style={{ contain: "layout style paint" }}
          >
            {schoolsData.map((school, index) => {
              const styles = [
                { bg: "bg-orange-500/10", border: "border-orange-500/20" },
                { bg: "bg-violet-500/10", border: "border-violet-500/20" },
                { bg: "bg-blue-500/10", border: "border-blue-500/20" },
                { bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
                { bg: "bg-purple-500/10", border: "border-purple-500/20" },
                { bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
                { bg: "bg-amber-500/10", border: "border-amber-500/20" },
                { bg: "bg-rose-500/10", border: "border-rose-500/20" },
                { bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
                { bg: "bg-teal-500/10", border: "border-teal-500/20" },
              ];
              const style = styles[index % styles.length];

              const cardElement = (
                <div
                  className={`rounded-none overflow-hidden cursor-pointer h-full`}
                  style={{ contain: "content" }}
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-square overflow-hidden bg-foreground/5 flex items-center justify-center">
                    <img
                      src={school.image}
                      alt={school.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
                  </div>

                  {/* Content Container */}
                  <div
                    className={`${style.bg} ${style.border} border border-t-0 rounded-none p-3 flex flex-col justify-center items-center h-24 w-full backdrop-blur-sm`}
                  >
                    <div className="text-center space-y-1.5">
                      <h3 className="text-lg font-bold text-foreground font-display hover:text-brand-magenta transition-colors text-center">
                        {school.title}
                      </h3>
                      {school.campus && (
                        <p className="text-xs font-semibold text-foreground/70 bg-foreground/10 px-2 py-0.5 rounded-full inline-block">
                          {school.campus}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );

              const cardContent = school.href ? (
                school.href.startsWith("http") ? (
                  <a
                    href={school.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                  >
                    {cardElement}
                  </a>
                ) : (
                  <Link to={school.href} className="block">
                    {cardElement}
                  </Link>
                )
              ) : (
                cardElement
              );

              return (
                <div
                  key={index}
                  style={{ animationDelay: school.delay || "0s" }}
                  className={`scroll-fade-in-up`}
                >
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Modernized */}
      <section className="px-3 py-10 relative bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-brand-magenta/10 via-brand-orange/10 to-brand-blue/10 rounded-3xl p-8 md:p-12 border border-brand-magenta/20 shadow-xl">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-magenta/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="headline-2 mb-6">
                Ready to
                <span className="bg-brand-gradient bg-clip-text text-transparent">
                  {" "}
                  Begin Your Journey
                </span>
                ?
              </h2>
              <p className="subheadline text-foreground/80 mb-8 max-w-2xl">
                Explore our academic programs and find the perfect fit for your
                career aspirations. Join thousands of students who have
                transformed their futures at DSU.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://admissions.dsu.edu.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-brand-gradient hover:opacity-90 hover:shadow-lg hover:shadow-brand-magenta/25 text-foreground px-12 py-6 text-lg font-semibold font-display rounded-2xl transition-all duration-300 group"
                  >
                    Apply Now
                    <GraduationCap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                  </Button>
                </a>
                <a
                  href="https://dsu.edu.in/virtual-tour/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-brand-orange/40 text-brand-orange hover:bg-brand-orange/10 hover:border-brand-orange/60 px-12 py-6 text-lg font-semibold font-display rounded-2xl transition-all duration-300"
                  >
                    Virtual Tour
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap justify-start gap-2">
                {[
                  "Merit-Based Scholarships Available",
                  "Industry-Aligned Curriculum & Partnerships",
                  "Career Support & Mentoring",
                  "Global Exposure Programs",
                ].map((badge, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-3 py-1 text-xs font-medium font-body"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
