import { ArrowRight, Eye, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AlumniVisionMission() {
  const values = [
    {
      icon: Heart,
      title: "Community",
      description: "Building a strong network of alumni who support each other",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Celebrating and promoting alumni achievements",
    },
    {
      icon: Eye,
      title: "Engagement",
      description: "Creating meaningful connections between alumni and DSU",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-500/10 via-purple-600/5 to-background dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/30 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 dark:bg-purple-600/30 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Vision & Mission
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Our commitment to alumni engagement and community building
            </p>
          </div>
          <div className="flex justify-center">
            <Button asChild variant="outline">
              <Link to="/alumni">
                <ArrowRight className="mr-2 h-4 w-4" />
                Back to Alumni
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-3 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Vision */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <Eye className="h-8 w-8 text-blue-600 mb-4" />
              <CardTitle className="text-3xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                To foster a vibrant, engaged, and supportive alumni community that strengthens the DSU legacy and contributes to the personal and professional growth of our graduates.
              </p>
              <p className="text-foreground/70">
                We envision a global network of DSU alumni who:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70">
                <li>Maintain meaningful connections with the university</li>
                <li>Support each other's professional development</li>
                <li>Give back to DSU through mentorship and philanthropy</li>
                <li>Represent DSU with pride across the world</li>
                <li>Contribute to society through innovation and leadership</li>
              </ul>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <Target className="h-8 w-8 text-purple-600 mb-4" />
              <CardTitle className="text-3xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                To create and maintain meaningful pathways for alumni engagement, ensuring lifelong connections between graduates and Dayananda Sagar University.
              </p>
              <p className="text-foreground/70">
                Our mission is to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70">
                <li>Facilitate networking and professional development opportunities</li>
                <li>Celebrate alumni achievements and contributions</li>
                <li>Engage alumni in university governance and planning</li>
                <li>Support student mentorship and career guidance programs</li>
                <li>Strengthen the university through alumni involvement and support</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-foreground/70">
              The principles that guide our alumni engagement initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card key={idx} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Icon className="h-8 w-8 text-blue-600 mb-4" />
                    <h3 className="font-semibold text-xl mb-2">{value.title}</h3>
                    <p className="text-foreground/70">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Alumni Support */}
        <Card className="border-none shadow-lg bg-blue-50 dark:bg-slate-800 mb-8">
          <CardHeader style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}>
            <CardTitle className="text-3xl">How We Support Alumni</CardTitle>
            <CardDescription className="text-lg">
              The services and programs available to DSU alumni
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Professional Development</h4>
                <ul className="list-disc list-inside space-y-1 text-foreground/70">
                  <li>Career advancement seminars</li>
                  <li>Networking events and conferences</li>
                  <li>Skills enhancement workshops</li>
                  <li>Industry-specific forums</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Community Engagement</h4>
                <ul className="list-disc list-inside space-y-1 text-foreground/70">
                  <li>Alumni reunions and gatherings</li>
                  <li>Chapter meetings in different cities</li>
                  <li>Social and cultural events</li>
                  <li>Mentorship matching programs</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">University Support</h4>
                <ul className="list-disc list-inside space-y-1 text-foreground/70">
                  <li>Scholarship fund contributions</li>
                  <li>Guest lectures and workshops</li>
                  <li>Student career guidance</li>
                  <li>Alumni advisory committees</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Communication</h4>
                <ul className="list-disc list-inside space-y-1 text-foreground/70">
                  <li>Regular alumni newsletters</li>
                  <li>Alumni magazine updates</li>
                  <li>Social media engagement</li>
                  <li>Campus news and events</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link to="/alumni">
              Back to Alumni <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
