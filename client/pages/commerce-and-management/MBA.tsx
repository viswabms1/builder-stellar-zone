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
      id: "mba-financial",
      label: "Financial Management",
      description: "Specialized curriculum in corporate finance, investment analysis, and financial strategy",
      details: "Master the complexities of financial decision-making, portfolio management, and corporate finance strategy. Develop expertise through quantitative analysis, case studies, and industry simulations with experienced finance professionals.",
      image: "https://images.unsplash.com/photo-1606531824254-d473aeb44dc5?q=80&w=1200&auto=format&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Specialization courses in Semesters 3 & 4 covering corporate finance, investments, and financial management",
          documentUrl: "https://www.dsu.edu.in/images/Commerce/MBA-FinancialMgmt-Curriculum-2025-26.pdf",
        },
      ],
    },
    {
      id: "mba-hr",
      label: "Human Resource Management",
      description: "Comprehensive program in talent management, organizational development, and strategic HR planning",
      details: "Develop expertise in recruitment, employee development, organizational behavior, and strategic human capital management. Learn to lead organizational transformation and create high-performance cultures through industry partnerships and real-world cases.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Specialization courses in Semesters 3 & 4 covering talent management, organizational development, and HR strategy",
          documentUrl: "https://www.dsu.edu.in/images/Commerce/MBA-HRM-Curriculum-2025-26.pdf",
        },
      ],
    },
    {
      id: "mba-scm",
      label: "Supply Chain Management",
      description: "Expert-level training in logistics, operations strategy, and supply chain optimization",
      details: "Master end-to-end supply chain processes, logistics optimization, and operations management. Develop skills in demand planning, procurement, inventory management, and supply chain digitalization through simulations and industry projects.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Specialization courses in Semesters 3 & 4 covering supply chain strategy, logistics, and operations management",
          documentUrl: "https://www.dsu.edu.in/images/Commerce/MBA-SCM-Curriculum-2025-26.pdf",
        },
      ],
    },
    {
      id: "mba-marketing",
      label: "Marketing Management",
      description: "Strategic focus on brand building, digital marketing, and consumer behavior analysis",
      details: "Develop expertise in market research, consumer analytics, digital marketing, and brand strategy. Learn to navigate the evolving marketing landscape through case studies, business simulations, and collaborations with industry leaders.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Specialization courses in Semesters 3 & 4 covering marketing strategy, digital marketing, and consumer insights",
          documentUrl: "https://www.dsu.edu.in/images/Commerce/MBA-Marketing-Curriculum-2025-26.pdf",
        },
      ],
    },
    {
      id: "mba-it",
      label: "Information Technology & Systems",
      description: "Strategic IT management, enterprise systems, and technology-driven business transformation",
      details: "Master technology strategy, enterprise resource planning, cloud computing, and IT governance. Learn to leverage technology for competitive advantage and digital transformation in modern organizations.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Specialization courses in Semesters 3 & 4 covering IT strategy, enterprise systems, and technology management",
          documentUrl: "https://www.dsu.edu.in/images/Commerce/MBA-IT-Curriculum-2025-26.pdf",
        },
      ],
    },
    {
      id: "mba-analytics",
      label: "Business Analytics",
      description: "Data-driven decision making, predictive analytics, and business intelligence",
      details: "Develop expertise in data analysis, statistical modeling, business intelligence, and analytics tools. Learn to extract actionable insights from data and drive strategic business decisions through hands-on projects and industry case studies.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Specialization courses in Semesters 3 & 4 covering data analytics, business intelligence, and predictive modeling",
          documentUrl: "https://www.dsu.edu.in/images/Commerce/MBA-Analytics-Curriculum-2025-26.pdf",
        },
      ],
    },
    {
      id: "mba-ai",
      label: "Artificial Intelligence",
      description: "AI-driven business solutions, machine learning applications, and intelligent automation",
      details: "Explore artificial intelligence and machine learning applications in business. Develop skills in AI strategy, neural networks, natural language processing, and intelligent automation to drive innovation and competitive advantage in the digital economy.",
      image: "https://images.unsplash.com/photo-1677442d019cecf3d7f94c538221c0e0d0819a0db?q=80&w=1200&auto=format&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Specialization courses in Semesters 3 & 4 covering AI strategy, machine learning, and intelligent business solutions (Available from 2021 onwards)",
          documentUrl: "https://www.dsu.edu.in/images/Commerce/MBA-AI-Curriculum-2025-26.pdf",
        },
      ],
    },
    {
      id: "mba-entrepreneurship",
      label: "Entrepreneurship",
      description: "Startup creation, business model innovation, and venture development",
      details: "Master the art and science of entrepreneurship including business plan development, fundraising, growth strategies, and startup ecosystems. Learn from successful entrepreneurs and develop your own business venture ideas through mentorship and hands-on projects.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Specialization courses in Semesters 3 & 4 covering entrepreneurship, business creation, and venture development",
          documentUrl: "https://www.dsu.edu.in/images/Commerce/MBA-Entrepreneurship-Curriculum-2025-26.pdf",
        },
      ],
    },
    {
      id: "mba-fintech",
      label: "FinTech",
      description: "Financial technology innovation, digital payments, and fintech business models",
      details: "Explore the convergence of finance and technology including blockchain, digital banking, crypto assets, and fintech startups. Develop expertise in fintech business models, regulatory landscape, and innovation in financial services.",
      image: "https://images.unsplash.com/photo-1564722217921-ab82e64c0800?q=80&w=1200&auto=format&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Specialization courses in Semesters 3 & 4 covering fintech innovation, digital payments, and blockchain technology",
          documentUrl: "https://www.dsu.edu.in/images/Commerce/MBA-FinTech-Curriculum-2025-26.pdf",
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
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold font-display mb-4">Program Overview</h2>
                <p className="text-foreground/80 mb-4">
                  Business, industry, and society have converged like never before. Today's ethos is to do business, generate wealth in an ethical space, and not degrade the environment further. At Dayananda Sagar University, we recognize the significance of this convergence and have designed our programs to equip students with the skills and knowledge to navigate this complex landscape.
                </p>
                <p className="text-foreground/80">
                  We pride ourselves on our unique blend of pedagogy that balances traditional lectures, in-depth case analysis, and skill-based learning. Our professors deliver this blend with their outstanding educational credibility and practical industry experience. The program's ethos is to craft superior managers who can problem-solve and make data-driven decisions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold font-display mb-3">T-Shaped Learning Approach</h3>
                <p className="text-foreground/80 mb-3">
                  Our classic T-shaped approach gives students both breadth of understanding and depth in specific areas. Year 1 involves core and foundation courses, while Year 2 allows specialization in two chosen disciplines from nine options.
                </p>
                <p className="text-foreground/80">
                  Students must also complete Audit courses in Leadership, Ethics, and Design Thinking. The program emphasizes industry relevance and student learning outcomes at every stage.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold font-display mb-3">Program Highlights</h3>
                <ul className="text-foreground/80 space-y-2 text-sm">
                  <li>✓ Nine specialization options for Year 2</li>
                  <li>✓ Self-paced learning opportunities worldwide</li>
                  <li>✓ 3-month industry internship</li>
                  <li>✓ Capstone project preparation for career launch</li>
                  <li>✓ Value-based education through student clubs</li>
                  <li>✓ Industry connect with placement preparation from Semester 3</li>
                </ul>
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
