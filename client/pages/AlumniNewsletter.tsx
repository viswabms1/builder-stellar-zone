import {
  ArrowRight,
  ArrowLeft,
  Mail,
  TrendingUp,
  Users,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AlumniNewsletter() {
  const newsletters = [
    {
      title: "DSU Alumni Digest - January 2026",
      date: "January 2026",
      highlights: ["New Alumni Awards", "Success Stories", "Upcoming Events"],
    },
    {
      title: "DSU Alumni Digest - December 2025",
      date: "December 2025",
      highlights: [
        "Year-End Review",
        "Holiday Celebrations",
        "New Initiatives",
      ],
    },
    {
      title: "DSU Alumni Digest - November 2025",
      date: "November 2025",
      highlights: [
        "Campus Updates",
        "Alumni Network News",
        "Industry Insights",
      ],
    },
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "Alumni Success Stories",
      description:
        "Inspiring achievements and career trajectories of DSU alumni",
    },
    {
      icon: Users,
      title: "Community Updates",
      description: "Latest news about the university and alumni community",
    },
    {
      icon: Star,
      title: "Spotlights & Awards",
      description: "Recognition of outstanding alumni contributions",
    },
    {
      icon: Mail,
      title: "Event Announcements",
      description: "Information about upcoming alumni events and gatherings",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-green-500/10 via-emerald-600/5 to-background dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 dark:bg-green-500/30 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-600/10 dark:bg-emerald-600/30 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Alumni Newsletter
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Stay connected with alumni updates and stories
            </p>
          </div>
          <div className="flex justify-center">
            <Button asChild variant="outline">
              <Link to="/alumni">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Alumni
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-3 max-w-7xl mx-auto">
        {/* Newsletter Description */}
        <Card className="border-none shadow-lg mb-12 bg-green-50 dark:bg-slate-800">
          <CardHeader style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}>
            <CardTitle className="text-3xl">DSU Alumni Digest</CardTitle>
            <CardDescription className="text-lg">
              Your monthly source for alumni news and university updates
            </CardDescription>
          </CardHeader>
          <CardContent
            className="space-y-6 text-foreground/80 leading-relaxed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          >
            <p>
              The DSU Alumni Digest is our flagship publication connecting
              alumni worldwide with the latest updates from campus, inspiring
              success stories from fellow alumni, and information about
              community events and opportunities.
            </p>
            <p>
              Published monthly, our newsletter celebrates alumni achievements,
              shares news about the university's academic and research
              initiatives, and highlights upcoming events where alumni can
              reconnect and engage.
            </p>
            <p>
              Whether you're interested in staying informed about campus
              developments, networking with fellow alumni, or discovering how
              you can contribute to DSU's future, the Alumni Digest keeps you
              connected to your alma mater and your alumni family.
            </p>
          </CardContent>
        </Card>

        {/* Newsletter Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What's Inside
            </h2>
            <p className="text-lg text-foreground/70">
              Each issue includes valuable content for our alumni community
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
                    <Icon className="h-8 w-8 text-green-600 mb-4" />
                    <h3 className="font-semibold text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-foreground/70">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recent Issues
            </h2>
            <p className="text-lg text-foreground/70">
              Browse our latest publications
            </p>
          </div>

          <div className="space-y-4">
            {newsletters.map((newsletter, idx) => (
              <Card
                key={idx}
                className="border-none shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="py-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">
                        {newsletter.title}
                      </h3>
                      <p className="text-foreground/70 mb-3">
                        {newsletter.date}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {newsletter.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-xs rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button
                      asChild
                      className="ml-4 bg-green-600 hover:bg-green-700"
                    >
                      <a
                        href="https://alumni.dsu.edu.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Subscribe Section */}
        <Card className="border-none shadow-lg bg-green-50 dark:bg-slate-800">
          <CardHeader style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}>
            <CardTitle className="text-3xl">
              Subscribe to Our Newsletter
            </CardTitle>
            <CardDescription className="text-lg">
              Never miss an update from the DSU alumni community
            </CardDescription>
          </CardHeader>
          <CardContent
            className="space-y-6"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          >
            <p className="text-foreground/80 leading-relaxed">
              Stay connected with monthly updates on alumni achievements,
              university news, upcoming events, and ways to get involved.
              Subscribe to the DSU Alumni Digest today and become part of our
              thriving global alumni community.
            </p>
            <div className="space-y-3">
              <p className="font-semibold">Subscribe benefits:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70">
                <li>Monthly newsletter delivered to your inbox</li>
                <li>Exclusive alumni event announcements</li>
                <li>Success stories and career opportunities</li>
                <li>University news and campus updates</li>
                <li>Networking opportunities with fellow alumni</li>
              </ul>
            </div>
            <Button asChild className="w-full bg-green-600 hover:bg-green-700">
              <a
                href="https://alumni.dsu.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Subscribe Now <Mail className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card className="border-none shadow-lg mt-8">
          <CardHeader>
            <CardTitle>Questions About Our Newsletter?</CardTitle>
            <CardDescription>
              Get in touch with the Alumni office
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/70 mb-4">
              Have suggestions for newsletter content or want to share your
              story? We'd love to hear from you!
            </p>
            <Button asChild variant="outline">
              <Link to="/alumni/contact">
                Contact Alumni Office <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link to="/alumni">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Alumni
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
