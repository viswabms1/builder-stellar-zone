import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ChevronRight,
  BookOpen,
  Users,
  Award,
  Briefcase,
  Globe,
  Target,
  Lightbulb,
  ChevronDown,
  Download,
  CalendarDays,
} from "lucide-react";
import { Button } from "@/components/ui/button";

function CurriculumLibrary() {
  const [openProgram, setOpenProgram] = useState<string | null>(null);

  const programs = [
    {
      id: "mba-general",
      label: "MBA (General)",
      description: "2-year comprehensive postgraduate program preparing superior managers with strategic thinking and data-driven decision making",
      details: "Business, industry, and society have converged like never before. Today's ethos is to do business, generate wealth in an ethical space, and not degrade the environment further. Our programs are designed to equip students with the skills and knowledge to navigate this complex landscape. We pride ourselves on a unique blend of pedagogy balancing traditional lectures, in-depth case analysis, and skill-based learning delivered by professors with outstanding educational credibility and practical industry experience. The program crafts superior managers who can problem-solve and make data-driven decisions. In our increasingly digital world, the program equips managers with skills needed to succeed in the digital age.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Latest curriculum covering management fundamentals, strategic thinking, and leadership development across 4 semesters",
          documentUrl: "https://www.dsu.edu.in/images/Commerce/MBA-General-Curriculum-2025-26.pdf",
        },
      ],
    },
    {
      id: "mba-marketing",
      label: "MBA - Marketing Specialization",
      description: "Specialized postgraduate program focusing on marketing strategy, consumer behavior, and brand management",
      details: "Specialization in Marketing management with focus on strategic marketing, brand building, digital marketing, and consumer analytics. Learn from industry experts and develop expertise in market research, product development, and marketing communications. Through case studies, business simulations, and industry projects, develop the skills to make strategic marketing decisions in today's competitive global marketplace.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Marketing specialization curriculum covering strategic marketing, digital marketing, brand management, and consumer insights",
          documentUrl: "https://www.dsu.edu.in/images/Commerce/MBA-Marketing-Curriculum-2025-26.pdf",
        },
      ],
    },
    {
      id: "mba-finance",
      label: "MBA - Finance Specialization",
      description: "Specialized postgraduate program in financial management, investment analysis, and corporate finance",
      details: "Specialization in Finance with focus on corporate finance, investment management, financial analytics, and risk management. Study under faculty with extensive banking and finance industry experience. Develop expertise in financial decision-making, portfolio management, and financial strategy through quantitative analysis, case studies, and industry simulations. Prepare for roles in investment banking, corporate finance, and financial consulting.",
      image: "https://images.unsplash.com/photo-1606531824254-d473aeb44dc5?q=80&w=1200&auto=format&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Finance specialization curriculum covering corporate finance, investment management, financial analysis, and risk management",
          documentUrl: "https://www.dsu.edu.in/images/Commerce/MBA-Finance-Curriculum-2025-26.pdf",
        },
      ],
    },
    {
      id: "mba-operations",
      label: "MBA - Operations & HR Specialization",
      description: "Specialized postgraduate program in operations management and human resource management",
      details: "Specialization in Operations and Human Resources combining supply chain management, operations strategy, and talent management. Develop skills in process optimization, organizational development, and strategic HR planning. Learn through case studies, collaborative projects, and industry partnerships. Prepare for leadership roles in operations, supply chain management, and human capital management in global organizations.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Operations & HR specialization curriculum covering supply chain, process management, organizational behavior, and talent development",
          documentUrl: "https://www.dsu.edu.in/images/Commerce/MBA-OpHR-Curriculum-2025-26.pdf",
        },
      ],
    },
  ];

  return (
    <div className="grid gap-4 lg:grid-cols-1">
      {programs.map((program) => {
        const isOpen = openProgram === program.id;
        return (
          <div key={program.id} className="rounded-3xl border-2 border-brand-magenta/30 overflow-hidden transition-all hover:shadow-xl hover:shadow-brand-magenta/10">
            <div className="relative h-48 overflow-hidden">
              <img src={program.image} alt={program.label} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 bg-background/50 backdrop-blur-sm space-y-4">
              <div className="flex items-start gap-3">
                <Badge className="rounded-full border bg-brand-magenta/15 text-brand-magenta border-brand-magenta/20">Postgraduate</Badge>
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-foreground mb-2">{program.label}</h3>
                <p className="text-sm text-foreground/80">{program.description}</p>
                {program.details && (
                  <p className="text-sm text-foreground/70 mt-3 leading-relaxed">{program.details}</p>
                )}
              </div>
              <Button variant="outline" className="w-full border-brand-magenta/30 hover:bg-brand-magenta/10 text-brand-magenta" onClick={() => setOpenProgram(isOpen ? null : program.id)}>
                <span className="flex items-center justify-center gap-2">
                  {isOpen ? "Hide" : "View"} Curriculum
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </span>
              </Button>
              {isOpen && (
                <div className="mt-4 space-y-3 border-t border-border/20 pt-4">
                  {program.batches.map((batch) => (
                    <div key={batch.year} className="rounded-xl border border-border/40 bg-card/70 p-4 space-y-3">
                      <div className="flex items-center gap-2">
                        <Badge className="rounded-full border text-xs bg-brand-magenta/20 text-brand-magenta border-brand-magenta/30">
                          <CalendarDays className="h-3 w-3 mr-1" />
                          {batch.year}
                        </Badge>
                      </div>
                      <p className="text-sm text-foreground/80">{batch.summary}</p>
                      <a href={batch.documentUrl} target="_blank" rel="noreferrer" className="inline-block">
                        <Button size="sm" variant="outline" className="gap-2 border-brand-magenta/30 hover:bg-brand-magenta/10 text-brand-magenta">
                          <Download className="w-4 h-4" /> Download Syllabus
                        </Button>
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

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

      {/* Program Overview */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold font-display">Program Overview</h2>
              <p className="text-foreground/80">
                Business, industry, and society have converged like never before. Today's ethos is to do business, generate wealth in an ethical space, and not degrade the environment further. At Dayananda Sagar University, we recognize the significance of this convergence and have designed our programs to equip students with the skills and knowledge to navigate this complex landscape.
              </p>
              <p className="text-foreground/80">
                We pride ourselves on our unique blend of pedagogy that balances traditional lectures, in-depth case analysis, and skill-based learning. Our professors deliver this blend with their outstanding educational credibility and practical industry experience. The program's ethos is to craft superior managers who can problem-solve and make data-driven decisions.
              </p>
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

          {/* Curriculum Library */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-display">Program Specializations & Curriculum</h2>
            <CurriculumLibrary />
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
