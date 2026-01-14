import { ArrowRight, Mail, BookOpen, FileText, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link as RouterLink } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Newsletter = {
  title: string;
  month: string;
  year: number;
  date: string;
  pdfUrl: string;
  highlights: string[];
};

export default function SoENewsletter() {
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-brand-blue/10 via-brand-magenta/5 to-background dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue/10 dark:bg-brand-blue/30 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-brand-magenta/10 dark:bg-brand-magenta/30 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground font-display">
              SOE Bulletin
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-body">
              Your monthly source for School of Engineering news and updates
            </p>
          </div>
          <div className="flex justify-center">
            <Button asChild variant="outline">
              <RouterLink to="/academics/engineering">
                <ArrowRight className="mr-2 h-4 w-4" />
                Back to School of Engineering
              </RouterLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-3 max-w-7xl mx-auto">
        {/* Newsletter Description */}
        <Card className="border-none shadow-lg mb-12 bg-gradient-to-r from-brand-blue/5 to-brand-magenta/5">
          <CardHeader className="bg-gradient-to-r from-brand-blue/20 to-brand-magenta/20 rounded-t-lg">
            <CardTitle className="text-3xl font-display">
              SOE Bulletin – Monthly Newsletter
            </CardTitle>
            <CardDescription className="text-lg">
              Connect with the heartbeat of the School of Engineering
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-foreground/80 leading-relaxed pt-6 font-body">
            <p>
              The SOE Bulletin is our flagship publication connecting students,
              faculty, and alumni with the latest developments from the School
              of Engineering. Published monthly, each bulletin brings you
              comprehensive coverage of academic achievements, research
              innovations, student success stories, and upcoming events.
            </p>
            <p>
              From groundbreaking research projects powered by NVIDIA DGX B200
              to industry partnerships and faculty recognition, the SOE Bulletin
              keeps you informed about what's happening across all our
              engineering disciplines—Computer Science, AI & ML, Electronics,
              Mechanical, Aerospace, and more.
            </p>
            <p>
              Whether you're a current student, prospective engineer, proud
              alumnus, or industry partner, our monthly bulletins provide a
              window into the innovation, excellence, and collaborative spirit
              that defines the School of Engineering.
            </p>
          </CardContent>
        </Card>

        {/* Newsletter Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              What's Inside
            </h2>
            <p className="text-lg text-foreground/70 font-body">
              Each bulletin includes valuable content for the engineering
              community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={idx}
                  className="border-none shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardContent className="pt-6">
                    <Icon className="h-8 w-8 text-brand-magenta mb-4" />
                    <h3 className="font-semibold text-lg mb-2 font-display">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-foreground/70 font-body">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Recent Issues */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              Recent Issues
            </h2>
            <p className="text-lg text-foreground/70 font-body">
              Browse our latest publications
            </p>
          </div>

          <div className="space-y-4">
            {newsletters.map((newsletter, idx) => (
              <Card
                key={idx}
                className="border-none shadow-md hover:shadow-lg transition-shadow hover:bg-card/60"
              >
                <CardContent className="py-6">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-lg font-display">
                          {newsletter.title}
                        </h3>
                        {idx === 0 && (
                          <Badge className="bg-brand-magenta/20 text-brand-magenta border-brand-magenta/30">
                            Latest
                          </Badge>
                        )}
                      </div>
                      <p className="text-foreground/70 mb-3 font-body">
                        {newsletter.date}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {newsletter.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-blue/90 text-xs rounded-full font-body"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button
                      asChild
                      className="ml-4 bg-brand-magenta hover:bg-brand-magenta/90 whitespace-nowrap flex-shrink-0"
                    >
                      <a
                        href={newsletter.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        Download PDF
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <Card className="border-none shadow-lg bg-gradient-to-r from-brand-orange/5 to-brand-magenta/5">
          <CardHeader className="bg-gradient-to-r from-brand-orange/20 to-brand-magenta/20 rounded-t-lg">
            <CardTitle className="text-3xl font-display">
              Staying Connected
            </CardTitle>
            <CardDescription className="text-lg">
              Get the latest from the School of Engineering
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-6 font-body">
            <p className="text-foreground/80 leading-relaxed">
              The SOE Bulletin is just one way we keep our community informed
              and engaged. Each month, we highlight the achievements, innovations,
              and initiatives that make the School of Engineering a leader in
              engineering education and research.
            </p>
            <div className="space-y-3">
              <p className="font-semibold font-display">
                What you'll discover:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70">
                <li>
                  Latest research projects and breakthroughs from our faculty
                </li>
                <li>
                  Student achievements, awards, and success stories
                </li>
                <li>
                  Updates on GPU-accelerated learning and AI research
                </li>
                <li>
                  Industry partnerships and collaboration opportunities
                </li>
                <li>
                  Placement highlights and alumni spotlights
                </li>
                <li>
                  Upcoming events, seminars, and conferences
                </li>
              </ul>
            </div>
            <div className="pt-4">
              <p className="text-sm text-foreground/60 font-body">
                For more information about the School of Engineering and our
                programs, visit our main engineering page.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Button asChild className="bg-brand-magenta hover:bg-brand-magenta/90">
            <RouterLink to="/academics/engineering">
              Explore School of Engineering
              <ArrowRight className="ml-2 h-4 w-4" />
            </RouterLink>
          </Button>
        </div>
      </section>
    </div>
  );
}
