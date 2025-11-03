import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Briefcase,
  TrendingUp,
  Users,
  Award,
  Building2,
  Target,
  CheckCircle,
} from "lucide-react";

export default function Placements() {
  const placementStats = [
    {
      label: "Students Placed",
      value: "92%",
      icon: TrendingUp,
      description: "Of eligible graduates",
    },
    {
      label: "Average Package",
      value: "₹8.5 LPA",
      icon: Award,
      description: "Across all programs",
    },
    {
      label: "Recruiting Companies",
      value: "150+",
      icon: Building2,
      description: "From diverse sectors",
    },
    {
      label: "Internship Offers",
      value: "85%",
      icon: Users,
      description: "During academic tenure",
    },
  ];

  const topRecruiters = [
    "TCS",
    "Infosys",
    "Wipro",
    "Capgemini",
    "Accenture",
    "Google",
    "Amazon",
    "Microsoft",
    "IBM",
    "Cisco",
    "Oracle",
    "SAP",
    "Deloitte",
    "EY",
    "PwC",
    "Goldman Sachs",
  ];

  const placementProcess = [
    {
      title: "Pre-Placement Training",
      description: "Comprehensive preparation including aptitude, technical, and soft skills training",
      icon: Target,
    },
    {
      title: "Company Interactions",
      description: "Direct engagement with recruiters through campus drives and networking events",
      icon: Users,
    },
    {
      title: "Selection & Placement",
      description: "Streamlined recruitment process with individual guidance and support",
      icon: CheckCircle,
    },
    {
      title: "Career Development",
      description: "Continuous support and mentorship for career growth and progression",
      icon: TrendingUp,
    },
  ];

  const programs = [
    {
      school: "Engineering",
      placement: "94%",
      avgPackage: "₹9.5 LPA",
      highestPackage: "₹35 LPA",
    },
    {
      school: "Computer Applications",
      placement: "95%",
      avgPackage: "₹10.2 LPA",
      highestPackage: "₹42 LPA",
    },
    {
      school: "Management Studies",
      placement: "88%",
      avgPackage: "₹7.8 LPA",
      highestPackage: "₹20 LPA",
    },
    {
      school: "Law",
      placement: "85%",
      avgPackage: "₹6.5 LPA",
      highestPackage: "₹18 LPA",
    },
    {
      school: "Health Sciences",
      placement: "90%",
      avgPackage: "₹5.8 LPA",
      highestPackage: "₹15 LPA",
    },
    {
      school: "Applied Sciences",
      placement: "89%",
      avgPackage: "₹6.2 LPA",
      highestPackage: "₹16 LPA",
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
            <Briefcase className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-sm font-medium text-orange-500">
              Career Opportunities
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Placements & Career Services
            </span>
          </h1>

          <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Launching careers with industry-leading companies and comprehensive placement support for our graduates.
          </p>
        </div>
      </section>

      {/* Placement Statistics */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {placementStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div className="text-3xl font-bold text-orange-500 mb-1">
                      {stat.value}
                    </div>
                    <CardTitle className="text-foreground text-sm font-semibold">
                      {stat.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="px-6 py-20 bg-gradient-to-br from-orange-500/5 via-red-600/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Our Placement Process
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Comprehensive support system ensuring successful placements for all students
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {placementProcess.map((process, index) => {
              const Icon = process.icon;
              return (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30 transition-all duration-300 group"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <CardTitle className="text-foreground group-hover:text-orange-500 transition-colors">
                      {process.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground">{process.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program-wise Statistics */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Program-wise Placements
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Placement statistics across our academic schools and programs
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50 bg-orange-500/5">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                      School/Program
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                      Placement Rate
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                      Average Package
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                      Highest Package
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {programs.map((program, index) => (
                    <tr
                      key={index}
                      className="border-b border-border/30 hover:bg-orange-500/5 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-foreground">
                        {program.school}
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground">
                        <Badge className="bg-green-500/20 text-green-500 border-0">
                          {program.placement}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-orange-500">
                        {program.avgPackage}
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground">
                        {program.highestPackage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="px-6 py-20 bg-gradient-to-br from-orange-500/5 via-red-600/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Top Recruiting Partners
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Leading organizations across sectors recruiting our graduates
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {topRecruiters.map((company, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 flex items-center justify-center hover:border-orange-500/30 transition-all duration-300 group"
              >
                <span className="text-sm font-semibold text-foreground group-hover:text-orange-500 transition-colors text-center">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-500/10 via-red-600/10 to-pink-500/10 rounded-3xl p-12 border border-orange-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Launch Your Career?
            </h2>
            <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
              Join DSU and become part of our thriving alumni network succeeding in leading organizations worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions">
                <Button
                  size="lg"
                  className="bg-brand-gradient hover:opacity-90 text-foreground px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/academics">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-orange-500/30 hover:bg-orange-500/10 px-8 py-6 text-lg font-semibold rounded-2xl"
                >
                  Explore Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
