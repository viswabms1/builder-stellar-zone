import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  BookOpen,
  Users,
  Award,
  Briefcase,
  Globe,
  Target,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MBA() {
  const highlights = [
    { icon: Globe, label: "Global Perspective" },
    { icon: Target, label: "Strategic Thinking" },
    { icon: Lightbulb, label: "Entrepreneurial Mindset" },
    { icon: Award, label: "Industry Recognized" },
  ];

  const learningMethods = [
    {
      title: "Business Simulations",
      description: "Simulate real business scenarios, make decisions, and observe outcomes in a risk-free environment to enhance decision-making abilities and strategic thinking.",
      icon: Target,
    },
    {
      title: "Collaborative Projects",
      description: "Work in diverse teams to develop teamwork, communication, and leadership skills while gaining exposure to different viewpoints and approaches.",
      icon: Users,
    },
    {
      title: "Field Experiences",
      description: "Company visits, field trips, and workshops provide experiential learning opportunities outside the classroom, offering insights into various industries and business practices.",
      icon: Globe,
    },
    {
      title: "International Immersion",
      description: "Live briefly in a global environment in a foreign nation, immersing yourself in a different culture and gaining a unique global perspective.",
      icon: Briefcase,
    },
    {
      title: "Startup Ecosystem",
      description: "As an innovative B-School, we have created a startup ecosystem and encourage development of entrepreneurial minds.",
      icon: Lightbulb,
    },
    {
      title: "Case Analysis & Lectures",
      description: "Balanced blend of traditional lectures and in-depth case analysis delivered by professors with outstanding educational credibility and practical industry experience.",
      icon: BookOpen,
    },
  ];

  const careers = [
    "General Manager",
    "Business Analyst",
    "Management Consultant",
    "Marketing Manager",
    "Finance Manager",
    "Operations Manager",
    "Entrepreneur/Startup Founder",
    "Strategy Manager",
    "Project Manager",
    "Corporate Leader",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-brand-magenta/10 via-brand-blue/10 to-brand-orange/10 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-6">
            <div>
              <Link to="/academics/management-studies" className="inline-flex items-center gap-2 text-sm text-brand-magenta hover:text-brand-magenta/80 mb-4">
                <ChevronRight className="h-4 w-4 rotate-180" />
                Back to Programs
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
                Master of Business Administration (MBA)
              </h1>
              <p className="text-lg text-foreground/80 max-w-2xl">
                Nurture superior managers who are leaders, entrepreneurs, and change-makers equipped with skills and knowledge to navigate today's complex business landscape.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Program Philosophy */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold font-display mb-4">Our Philosophy</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Business, industry, and society have converged like never before. Today's ethos is to do business, generate wealth in an ethical space, and not degrade the environment further. At Dayananda Sagar University, we recognize the significance of this convergence and have designed our programs to equip students with the skills and knowledge to navigate this complex landscape.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-display mb-4">Pedagogy & Teaching Excellence</h3>
                <p className="text-foreground/80 leading-relaxed">
                  We pride ourselves on our unique blend of pedagogy that balances traditional lectures, in-depth case analysis, and skill-based learning. Our professors deliver this blend with their outstanding educational credibility and practical industry experience. The program's ethos is to craft superior managers who can problem-solve and make data-driven decisions, developing excellent skills in various management areas.
                </p>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  In our increasingly digital world, our program equips young managers with the skills and knowledge needed to succeed in the digital age, preparing them for outstanding careers.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.label} className="border-border/50 bg-card/60 backdrop-blur">
                    <CardContent className="pt-6">
                      <Icon className="h-8 w-8 text-brand-magenta mb-3" />
                      <p className="font-semibold text-sm">{item.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Methods */}
      <section className="bg-gradient-to-r from-brand-magenta/5 via-brand-blue/5 to-brand-orange/5 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold font-display mb-4">Learning Experiences</h2>
            <p className="text-foreground/80">
              Learning at Dayananda Sagar University is about more than just lectures and textbooks. It's about exciting, hands-on experiences that broaden your horizons and develop critical thinking, leadership, and entrepreneurial capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningMethods.map((method) => {
              const Icon = method.icon;
              return (
                <Card key={method.title} className="border-border/50 bg-card/40 backdrop-blur hover:shadow-lg hover:shadow-brand-magenta/10 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="h-6 w-6 text-brand-magenta flex-shrink-0" />
                      <CardTitle className="text-lg font-display">{method.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/80">{method.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold font-display mb-8">What Sets Our MBA Apart</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-border/50 bg-card/60 backdrop-blur">
              <CardHeader>
                <Award className="h-8 w-8 text-brand-magenta mb-3" />
                <CardTitle>Superior Managers</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-foreground/80">
                Nurturing and delivering superior managers who are not just leaders but also entrepreneurs and change-makers capable of solving complex problems.
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/60 backdrop-blur">
              <CardHeader>
                <Globe className="h-8 w-8 text-brand-magenta mb-3" />
                <CardTitle>Global Competence</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-foreground/80">
                Equipping students with global perspective, digital skills, and understanding of cross-cultural business practices essential for success in international markets.
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/60 backdrop-blur">
              <CardHeader>
                <Lightbulb className="h-8 w-8 text-brand-magenta mb-3" />
                <CardTitle>Entrepreneurial Focus</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-foreground/80">
                Creating a startup ecosystem and fostering entrepreneurial mindsets among students to become job creators and innovative leaders in their industries.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="bg-gradient-to-r from-brand-magenta/5 via-brand-blue/5 to-brand-orange/5 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold font-display mb-8">Career Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {careers.map((career) => (
              <div key={career} className="flex items-center gap-3 p-4 rounded-lg border border-border/30 bg-card/40 backdrop-blur-sm">
                <Briefcase className="h-5 w-5 text-brand-magenta flex-shrink-0" />
                <span className="text-foreground/90">{career}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold font-display mb-6">Ready to Transform Your Career?</h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Join DSU's MBA program and become a superior manager, leader, and entrepreneur equipped for success in today's complex business world.
          </p>
          <a href="https://admissions.dsu.edu.in/" target="_blank" rel="noreferrer">
            <Button size="lg" className="bg-gradient-to-r from-brand-magenta to-brand-orange hover:shadow-lg">
              Apply Now
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
