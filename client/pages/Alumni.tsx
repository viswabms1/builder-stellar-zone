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
  Users,
  Award,
  Briefcase,
  Globe,
  ArrowRight,
  Heart,
  Newspaper,
  Mail,
  Network,
} from "lucide-react";

export default function Alumni() {
  const alumniFeatures = [
    {
      icon: Network,
      title: "Alumni Network",
      description: "Connect with fellow alumni across diverse industries and sectors",
      color: "from-brand-blue to-brand-blue/80",
    },
    {
      icon: Briefcase,
      title: "Professional Growth",
      description: "Expand your professional network and career opportunities",
      color: "from-brand-magenta to-brand-magenta/80",
    },
    {
      icon: Heart,
      title: "Give Back",
      description: "Support scholarships, awards, and mentorship programs",
      color: "from-brand-orange to-brand-orange/80",
    },
    {
      icon: Award,
      title: "Alumni Events",
      description: "Celebrate achievements through exclusive university-hosted events",
      color: "from-brand-blue to-brand-magenta",
    },
  ];

  const alumniServices = [
    {
      name: "Vision & Mission",
      description: "Our commitment to alumni engagement",
      href: "/alumni/vision-mission",
      icon: Users,
    },
    {
      name: "Alumni Events",
      description: "Upcoming events and reunions",
      href: "/alumni/events",
      icon: Award,
    },
    {
      name: "Newsletter",
      description: "Stay updated with alumni news",
      href: "/alumni/newsletter",
      icon: Newspaper,
    },
    {
      name: "Alumni Directory",
      description: "Connect with fellow alumni",
      href: "https://alumni.dsu.edu.in/",
      external: true,
      icon: Users,
    },
    {
      name: "Mentorship Program",
      description: "Share expertise and guide current students",
      href: "/alumni/events",
      icon: Briefcase,
    },
    {
      name: "Contact & Support",
      description: "Get in touch with the Alumni office",
      href: "/alumni/contact",
      icon: Mail,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-10 lg:py-32 bg-gradient-to-br from-blue-500/10 via-purple-600/5 to-background dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/30 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 dark:bg-purple-600/30 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3 text-center">
          <Badge className="mb-4 bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">
            Alumni Community
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-foreground">
            DSU Alumni Community
          </h1>
          <p className="text-xl md:text-2xl font-bold text-foreground/90 mb-6 max-w-4xl mx-auto leading-relaxed">
            Your lifelong connection to Dayananda Sagar University
          </p>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-8">
            Engage with fellow alumni, celebrate achievements, and support the future of DSU
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <a href="https://alumni.dsu.edu.in/" target="_blank" rel="noopener noreferrer">
                <Users className="mr-2 h-4 w-4" />
                Alumni Portal
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link to="/about">
                <ArrowRight className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-3 max-w-7xl mx-auto">
        {/* Welcome Section */}
        <Card className="border-none shadow-lg mb-12 bg-blue-50 dark:bg-slate-800">
          <CardHeader style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}>
            <CardTitle className="text-3xl md:text-4xl">Welcome to DSU Alumni</CardTitle>
            <CardDescription className="text-lg">
              A lifelong connection to your alma mater
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                On behalf of the entire Dayananda Sagar University community, it is our privilege and pleasure to warmly welcome you back to your alma mater. Your association with DSU is lifelong, and we deeply appreciate the continued pride, support, and inspiration you bring to our institution.
              </p>
              <p>
                Your time at DSU was marked by invaluable learning, personal growth, and enduring memories. We recognize the profound impact that your education and experiences here have had on your personal and professional journeys. We take great pride in your achievements and eagerly look forward to celebrating your future successes together.
              </p>
              <p>
                To facilitate your ongoing connection with DSU, the Alumni Section on our website provides regular updates on university news, upcoming events, alumni achievements, and ways to stay involved.
              </p>
              <p className="font-semibold text-lg mt-6">
                As a cherished member of the DSU alumni community, you are invited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Engage with fellow alumni through exclusive social platforms and university-hosted events.</li>
                <li>Stay informed about the latest campus developments, academic advancements, and institutional milestones.</li>
                <li>Participate in alumni-led projects and share your expertise to support DSU's mission.</li>
                <li>Expand your professional network by connecting with DSU alumni across diverse industries and sectors.</li>
                <li>Contribute to the future of DSU by supporting scholarships, awards, and mentorship programs for current students.</li>
              </ul>
              <p className="mt-6">
                We look forward to your active participation and are excited to have you as an integral part of DSU's vibrant and evolving journey.
              </p>
              <div className="mt-8 pt-6 border-t border-foreground/20">
                <p className="font-semibold">Best Regards</p>
                <p className="font-semibold">DSU Alumni Council</p>
                <p className="text-foreground/70">Dayananda Sagar University</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Features */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Stay Connected?
            </h2>
            <p className="text-lg text-foreground/70">
              Benefits of being an active member of the DSU alumni community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {alumniFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.color} w-fit mb-4`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-foreground/70">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Alumni Services */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Alumni Services & Resources
            </h2>
            <p className="text-lg text-foreground/70">
              Explore ways to stay engaged with DSU and your alumni network
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumniServices.map((service, idx) => {
              const Icon = service.icon;
              const isExternal = service.external;

              return (
                <Card key={idx} className="border-none shadow-md hover:shadow-lg transition-shadow group">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl">{service.name}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </div>
                      <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                        <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {isExternal ? (
                      <a
                        href={service.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 font-semibold flex items-center gap-2"
                      >
                        Visit Portal <ArrowRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <Link
                        to={service.href}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 font-semibold flex items-center gap-2"
                      >
                        Learn More <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="border-none shadow-lg bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-950/30 dark:to-purple-950/30">
          <CardContent className="py-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Not Yet a Member?</h3>
            <p className="text-lg text-foreground/70 mb-6 max-w-2xl mx-auto">
              Register with the DSU Alumni Portal to join our vibrant community and unlock exclusive benefits
            </p>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <a href="https://alumni.dsu.edu.in/" target="_blank" rel="noopener noreferrer">
                Register Now <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link to="/">
              Back to Home <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
