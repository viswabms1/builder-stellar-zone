import { ArrowRight, Mail, BookOpen, FileText, Zap, Download, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Newsletter = {
  title: string;
  month: string;
  year: number;
  date: string;
  pdfUrl: string;
  highlights: string[];
};

export default function SoENewsletter() {
  const [selectedYear, setSelectedYear] = useState("2025");

  const newsletters: Newsletter[] = [
    {
      title: "SOE Bulletin - November 2025",
      month: "November",
      year: 2025,
      date: "November 2025",
      pdfUrl:
        "https://www.dsu.edu.in/images/Engineering/Newsletters/2025/November_2025.pdf",
      highlights: [
        "Latest Research",
        "Faculty Updates",
        "Student Achievements",
      ],
    },
    {
      title: "SOE Bulletin - October 2025",
      month: "October",
      year: 2025,
      date: "October 2025",
      pdfUrl:
        "https://www.dsu.edu.in/images/Engineering/Newsletters/2025/October_2025.pdf",
      highlights: [
        "Semester Updates",
        "Lab Innovations",
        "Industry Partnerships",
      ],
    },
    {
      title: "SOE Bulletin - August 2025",
      month: "August",
      year: 2025,
      date: "August 2025",
      pdfUrl:
        "https://www.dsu.edu.in/images/Engineering/Newsletters/2025/August_2025.pdf",
      highlights: ["Academic Programs", "Research Highlights", "Events"],
    },
    {
      title: "SOE Bulletin - June 2025",
      month: "June",
      year: 2025,
      date: "June 2025",
      pdfUrl:
        "https://www.dsu.edu.in/images/Engineering/Newsletters/2025/June_2025.pdf",
      highlights: [
        "Mid-Year Review",
        "Faculty Recognition",
        "Project Showcases",
      ],
    },
    {
      title: "SOE Bulletin - May 2025",
      month: "May",
      year: 2025,
      date: "May 2025",
      pdfUrl:
        "https://www.dsu.edu.in/images/Engineering/Newsletters/2025/May_2025_1.pdf",
      highlights: [
        "Semester Highlights",
        "Alumni Features",
        "Placements",
      ],
    },
    {
      title: "SOE Bulletin - April 2025",
      month: "April",
      year: 2025,
      date: "April 2025",
      pdfUrl:
        "https://www.dsu.edu.in/images/Engineering/Newsletters/2025/April_2025.pdf",
      highlights: ["New Initiatives", "Department News", "Collaborations"],
    },
    {
      title: "SOE Bulletin - March 2025",
      month: "March",
      year: 2025,
      date: "March 2025",
      pdfUrl:
        "https://www.dsu.edu.in/images/Engineering/Newsletters/2025/March_2025.pdf",
      highlights: ["Spring Updates", "Research News", "Student Events"],
    },
    {
      title: "SOE Bulletin - February 2025",
      month: "February",
      year: 2025,
      date: "February 2025",
      pdfUrl:
        "https://www.dsu.edu.in/images/Engineering/Newsletters/2025/February_2025.pdf",
      highlights: ["Monthly Updates", "Faculty Spotlights", "Announcements"],
    },
    {
      title: "SOE Bulletin - January 2025",
      month: "January",
      year: 2025,
      date: "January 2025",
      pdfUrl:
        "https://www.dsu.edu.in/images/Engineering/Newsletters/2025/January_2025.pdf",
      highlights: ["New Year Updates", "Strategic Vision", "Achievements"],
    },
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Monthly Updates",
      description:
        "Stay informed with comprehensive monthly bulletins covering all SOE activities",
    },
    {
      icon: Zap,
      title: "Research Highlights",
      description:
        "Discover cutting-edge research projects and innovations from our faculty",
    },
    {
      icon: FileText,
      title: "Faculty & Student News",
      description:
        "Read about achievements, recognitions, and success stories from our community",
    },
    {
      icon: Mail,
      title: "Industry Partnerships",
      description:
        "Learn about collaborations and industry engagement opportunities",
    },
  ];

  const latestNewsletter = newsletters[0];
  const filteredByYear = newsletters.filter((n) => n.year.toString() === selectedYear);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Gradient Overlay */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-magenta/10 via-brand-blue/5 to-background"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-5 w-96 h-96 bg-brand-magenta/15 dark:bg-brand-magenta/25 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-10 right-5 w-80 h-80 bg-brand-blue/15 dark:bg-brand-blue/25 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/3 w-72 h-72 bg-brand-orange/10 dark:bg-brand-orange/20 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3">
          <div className="text-center mb-12">
            <Badge className="inline-block mb-4 bg-brand-magenta/20 text-brand-magenta border-brand-magenta/30">
              School of Engineering Publication
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-foreground font-display tracking-tight">
              SOE Bulletin
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto font-body leading-relaxed">
              Your monthly connection to the heartbeat of engineering innovation, research excellence, and student success
            </p>
          </div>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button asChild variant="default" className="bg-brand-magenta hover:bg-brand-magenta/90 px-8 h-12 text-base font-semibold">
              <a href={latestNewsletter.pdfUrl} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download Latest
              </a>
            </Button>
            <Button asChild variant="outline" className="px-8 h-12 text-base font-semibold">
              <RouterLink to="/academics/engineering">
                <ArrowRight className="mr-2 h-5 w-5" />
                Back to Engineering
              </RouterLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Latest Bulletin */}
      <section className="relative px-3 py-12 max-w-7xl mx-auto mb-8">
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Featured Card */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-brand-magenta/30 bg-gradient-to-br from-brand-magenta/5 to-brand-blue/5 overflow-hidden h-full shadow-xl hover:shadow-2xl hover:border-brand-magenta/50 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-magenta via-brand-blue to-brand-orange"></div>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <Badge className="mb-3 bg-brand-magenta/20 text-brand-magenta border-brand-magenta/30 px-4 py-1">
                      Latest Edition
                    </Badge>
                    <CardTitle className="text-3xl font-display">
                      {latestNewsletter.title}
                    </CardTitle>
                    <CardDescription className="text-lg mt-2 flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-brand-magenta" />
                      {latestNewsletter.date}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-foreground/80 leading-relaxed font-body">
                  The latest SOE Bulletin brings you the newest updates on research initiatives, faculty achievements, student success stories, and industry collaborations from the School of Engineering.
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-brand-magenta/10">
                  {latestNewsletter.highlights.map((highlight, i) => (
                    <Badge key={i} variant="outline" className="bg-brand-blue/10 text-brand-blue border-brand-blue/30 px-3 py-1.5">
                      {highlight}
                    </Badge>
                  ))}
                </div>
                <Button asChild className="w-full bg-brand-magenta hover:bg-brand-magenta/90 h-12 text-base font-semibold mt-6">
                  <a href={latestNewsletter.pdfUrl} target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-5 w-5" />
                    View Latest Bulletin
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats */}
          <div className="space-y-4">
            <Card className="border-none shadow-lg bg-gradient-to-br from-brand-blue/10 to-brand-magenta/10">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-magenta font-display mb-2">9</div>
                  <p className="text-foreground/70 font-body">Monthly Bulletins</p>
                  <p className="text-sm text-foreground/60 mt-2">Published in 2025</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-gradient-to-br from-brand-orange/10 to-brand-magenta/10">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-orange font-display mb-2">∞</div>
                  <p className="text-foreground/70 font-body">Research Stories</p>
                  <p className="text-sm text-foreground/60 mt-2">Faculty & Student Updates</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-3 py-16 bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
              What's Inside Each Bulletin
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-magenta via-brand-blue to-brand-orange mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={idx}
                  className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/40 backdrop-blur"
                >
                  <CardContent className="pt-8">
                    <div className="text-center">
                      <div className="inline-flex p-3 rounded-lg bg-brand-magenta/10 mb-4">
                        <Icon className="h-7 w-7 text-brand-magenta" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2 font-display">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-foreground/70 font-body leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-3 max-w-7xl mx-auto">
        {/* Filter by Year */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-2">
              All Editions
            </h2>
            <p className="text-foreground/70 font-body">
              Browse and download SOE Bulletins from {filteredByYear.length} published issues
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-foreground/70">Filter by Year:</span>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-32 h-10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2025">2025</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Newsletter Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredByYear.map((newsletter, idx) => (
            <Card
              key={idx}
              className="group border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-card/40 backdrop-blur hover:bg-card/60"
            >
              {/* Top accent bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${
                idx === 0 
                  ? 'from-brand-magenta to-brand-blue' 
                  : idx % 3 === 1 
                  ? 'from-brand-blue to-brand-orange'
                  : 'from-brand-orange to-brand-magenta'
              }`}></div>
              
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <Badge className="bg-brand-blue/15 text-brand-blue border-brand-blue/30 text-xs px-2 py-0.5">
                    {newsletter.month}
                  </Badge>
                  {idx === 0 && (
                    <Badge className="bg-brand-magenta/20 text-brand-magenta border-brand-magenta/30 text-xs px-2 py-0.5">
                      Latest
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg font-display leading-tight">
                  {newsletter.title}
                </CardTitle>
                <CardDescription className="flex items-center gap-1 mt-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  {newsletter.date}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {newsletter.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-blue/90 text-xs rounded-full font-body"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <Button
                  asChild
                  className="w-full bg-brand-magenta hover:bg-brand-magenta/90 transition-all duration-300 group-hover:shadow-lg h-10 font-semibold"
                >
                  <a
                    href={newsletter.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                    <ChevronRight className="ml-auto h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About Section */}
        <Card className="border-2 border-brand-blue/20 bg-gradient-to-r from-brand-blue/5 to-brand-magenta/5 mt-16 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-magenta to-brand-orange"></div>
          <CardHeader className="pb-4">
            <CardTitle className="text-3xl font-display">
              About the SOE Bulletin
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 font-body text-foreground/80 leading-relaxed">
            <p>
              The SOE Bulletin is the official monthly publication of the School of Engineering, connecting our vibrant community of students, faculty, alumni, and industry partners with the latest developments in engineering education and research.
            </p>
            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground font-display flex items-center gap-2">
                  <ChevronRight className="h-5 w-5 text-brand-magenta" />
                  Research Excellence
                </h4>
                <p className="text-sm">
                  Cutting-edge projects, faculty innovations, and GPU-accelerated computing breakthroughs
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground font-display flex items-center gap-2">
                  <ChevronRight className="h-5 w-5 text-brand-blue" />
                  Student Achievements
                </h4>
                <p className="text-sm">
                  Success stories, awards, placements, and remarkable accomplishments
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground font-display flex items-center gap-2">
                  <ChevronRight className="h-5 w-5 text-brand-orange" />
                  Industry Partnerships
                </h4>
                <p className="text-sm">
                  Collaborations, internships, and career opportunities
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground font-display flex items-center gap-2">
                  <ChevronRight className="h-5 w-5 text-brand-magenta" />
                  Campus Life
                </h4>
                <p className="text-sm">
                  Events, seminars, student clubs, and community activities
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="mt-16 text-center p-8 rounded-xl bg-gradient-to-r from-brand-magenta/10 via-brand-blue/10 to-brand-orange/10 border border-brand-magenta/20">
          <h3 className="headline-3 mb-6 font-display">Ready to Explore?</h3>
          <p className="subheadline text-foreground/70 mb-6 max-w-2xl mx-auto">
            Download the latest SOE Bulletin and stay updated with everything happening in the School of Engineering
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild className="bg-brand-magenta hover:bg-brand-magenta/90 px-8 h-11 font-semibold">
              <a href={latestNewsletter.pdfUrl} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download Latest Edition
              </a>
            </Button>
            <Button asChild variant="outline" className="px-8 h-11 font-semibold">
              <RouterLink to="/academics/engineering">
                Back to School of Engineering
                <ArrowRight className="ml-2 h-5 w-5" />
              </RouterLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
