import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NewsSection } from "@/components/NewsSection";
import { EventsSection } from "@/components/EventsSection";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
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
  const [openSection, setOpenSection] = useState<string | null>("overview");

  const specializations = [
    "Financial Management",
    "Human Resource Management",
    "Supply Chain Management",
    "Marketing Management",
    "Information Technology & Systems",
    "Business Analytics",
    "Artificial Intelligence (From 2021 onwards)",
    "Entrepreneurship",
    "FinTech",
  ];

  const semesters = [
    {
      id: "sem1",
      label: "Semester 1",
      type: "Core Courses",
      courses: [],
      description: "Foundation courses introducing core management concepts and skills",
    },
    {
      id: "sem2",
      label: "Semester 2",
      type: "Core Courses",
      courses: [],
      description: "Core management disciplines and foundation for specialization",
    },
    {
      id: "sem3",
      label: "Semester 3",
      type: "Specialization & Internship",
      courses: ["Specialization Courses", "Industry Internship"],
      description: "Begin specialization selection from 9 available options",
    },
    {
      id: "sem4",
      label: "Semester 4",
      type: "Specialization & Capstone",
      courses: ["Specialization Courses", "Capstone Project"],
      description: "Complete specialization with culminating capstone project",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Program Overview Card */}
      <div className="rounded-3xl border-2 border-brand-magenta/30 overflow-hidden transition-all hover:shadow-xl hover:shadow-brand-magenta/10">
        <div className="relative h-48 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
            alt="MBA Program"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6 bg-background/50 backdrop-blur-sm space-y-4">
          <div className="flex items-start gap-3">
            <Badge className="rounded-full border bg-brand-magenta/15 text-brand-magenta border-brand-magenta/20">
              Postgraduate
            </Badge>
          </div>
          <div>
            <h3 className="text-xl font-bold font-display text-foreground mb-2">Master of Business Administration (MBA)</h3>
            <p className="text-sm text-foreground/80 mb-3">
              2-year comprehensive postgraduate program with flexible specialization options
            </p>
            <p className="text-sm text-foreground/70 leading-relaxed">
              The MBA program follows a T-shaped learning approach, providing breadth through core courses in Year 1 and depth through specialization in Year 2. 
              Students must complete Audit courses in Leadership, Ethics, and Design Thinking. The program includes a 3-month industry internship and culminates in 
              a capstone project. Industry connect is integrated throughout, with placement preparation commencing in Semester 3.
            </p>
          </div>
          <Button
            variant="outline"
            className="w-full border-brand-magenta/30 hover:bg-brand-magenta/10 text-brand-magenta"
            onClick={() => setOpenSection(openSection === "overview" ? null : "overview")}
          >
            <span className="flex items-center justify-center gap-2">
              {openSection === "overview" ? "Hide" : "View"} Full Details
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${openSection === "overview" ? "rotate-180" : ""}`} />
            </span>
          </Button>
          {openSection === "overview" && (
            <div className="mt-4 space-y-4 border-t border-border/20 pt-4">
              <div className="rounded-xl border border-border/40 bg-card/70 p-4 space-y-3">
                <h4 className="font-semibold text-foreground">Program Duration & Structure</h4>
                <ul className="text-sm text-foreground/80 space-y-2">
                  <li>• <strong>Duration:</strong> 2 Years (4 Semesters)</li>
                  <li>• <strong>Year 1:</strong> Core and Foundation Courses</li>
                  <li>• <strong>Year 2:</strong> Specialization + Industry Internship + Capstone Project</li>
                  <li>• <strong>Audit Courses:</strong> Leadership, Ethics, Design Thinking</li>
                  <li>• <strong>Internship:</strong> 3-month paid internship at leading organizations</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border/40 bg-card/70 p-4 space-y-3">
                <h4 className="font-semibold text-foreground">Learning Approach</h4>
                <p className="text-sm text-foreground/80">
                  Our pedagogy balances traditional lectures, in-depth case analysis, and skill-based learning. Students benefit from self-paced learning 
                  opportunities, business simulations, collaborative projects, and field experiences. Value-based education is integrated through student clubs 
                  and experiential learning centers, emphasizing life skills essential for sustainable careers.
                </p>
              </div>
              <a href="https://www.dsu.edu.in/images/Commerce/MBA-Curriculum-2025-26.pdf" target="_blank" rel="noreferrer" className="inline-block">
                <Button size="sm" variant="outline" className="gap-2 border-brand-magenta/30 hover:bg-brand-magenta/10 text-brand-magenta">
                  <Download className="w-4 h-4" /> Download Full Syllabus
                </Button>
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Semester Structure Cards */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold font-display">Program Structure by Semester</h3>
        <div className="grid gap-4">
          {semesters.map((semester) => (
            <div key={semester.id} className="rounded-2xl border border-border/50 bg-card/40 backdrop-blur overflow-hidden hover:shadow-lg transition-all">
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-lg font-bold font-display text-foreground">{semester.label}</h4>
                      <Badge className="bg-brand-magenta/20 text-brand-magenta border border-brand-magenta/30">{semester.type}</Badge>
                    </div>
                    <p className="text-sm text-foreground/70">{semester.description}</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {semester.courses.map((course) => (
                    <div key={course} className="px-3 py-2 rounded-lg bg-foreground/5 border border-border/20">
                      <p className="text-sm text-foreground/80">{course}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Specialization Options */}
      <div className="rounded-3xl border-2 border-brand-magenta/30 overflow-hidden">
        <div className="p-6 bg-background/50 backdrop-blur-sm space-y-4">
          <div>
            <h3 className="text-xl font-bold font-display text-foreground mb-2">Specialization Options (Semesters 3 & 4)</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {specializations.map((spec) => (
              <div key={spec} className="p-4 rounded-xl border border-brand-magenta/30 bg-brand-magenta/5 hover:bg-brand-magenta/10 transition-colors">
                <div className="flex items-start gap-2">
                  <Target className="h-5 w-5 text-brand-magenta flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-semibold text-foreground">{spec}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 rounded-lg bg-brand-blue/5 border border-brand-blue/20">
            <p className="text-xs text-foreground/70">
              <strong>Nine Specialization Options:</strong> Financial Management, Human Resource Management, Supply Chain Management, Marketing Management, 
              Information Technology & Systems, Business Analytics, Artificial Intelligence, Entrepreneurship, and FinTech. Students can create their unique choice 
              rubric and earn credits for self-paced learning from world-class institutions.
            </p>
          </div>
        </div>
      </div>
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
      description: "Simulate real business scenarios, make decisions, and observe outcomes in a risk-free environment to enhance decision-making abilities.",
      icon: Target,
    },
    {
      title: "Collaborative Projects",
      description: "Work in diverse teams to develop teamwork, communication, and leadership skills while gaining exposure to different viewpoints.",
      icon: Users,
    },
    {
      title: "Field Experiences",
      description: "Company visits, field trips, and workshops provide experiential learning opportunities outside the classroom.",
      icon: Globe,
    },
    {
      title: "International Immersion",
      description: "Live briefly in a global environment in a foreign nation, immersing yourself in a different culture and gaining unique perspective.",
      icon: Briefcase,
    },
    {
      title: "Startup Ecosystem",
      description: "As an innovative B-School, we have created a startup ecosystem and encourage development of entrepreneurial minds.",
      icon: Lightbulb,
    },
    {
      title: "Case Analysis & Lectures",
      description: "Balanced blend of traditional lectures and in-depth case analysis delivered by professors with outstanding industry experience.",
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
      <section className="relative">
        <div className="h-[50vh] sm:h-[65vh] md:h-[65vh] w-full overflow-hidden" style={{ minHeight: '200px' }}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F276ef2246b764f87971e7127f05c0a74?format=webp&width=800"
            alt="MBA Program - Innovation Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-start md:items-center md:pt-0 z-10" style={{ marginTop: '80px' }}>
          <div className="max-w-7xl mx-auto px-3 w-full">
            <div className="max-w-3xl">
              <Link to="/academics/management-studies" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white mb-4">
                <ChevronRight className="h-4 w-4 rotate-180" />
                Back to Programs
              </Link>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight font-display font-bold mb-4">
                Master of Business Administration (MBA)
              </h1>
              <p className="text-sm sm:text-base text-white/90 max-w-2xl mb-6">
                Nurture superior managers who are leaders, entrepreneurs, and change-makers equipped with skills and knowledge to navigate today's complex business landscape.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://admissions.dsu.edu.in/" target="_blank" rel="noreferrer">
                  <Button className="bg-white hover:bg-white/90 text-brand-magenta hover:text-brand-magenta/80 px-8 py-6 font-semibold font-display">
                    Apply Now
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview with Curriculum */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold font-display mb-4">Why Our MBA?</h2>
                <p className="text-foreground/80 mb-4">
                  Business, industry, and society have converged like never before. Our MBA programs are designed to equip students with the skills and knowledge to navigate this complex landscape while doing business ethically and sustainably.
                </p>
                <p className="text-foreground/80">
                  We pride ourselves on a unique blend of pedagogy balancing traditional lectures, in-depth case analysis, and skill-based learning delivered by professors with outstanding educational credibility and practical industry experience.
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

          {/* Curriculum Library */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-display">Program Curriculum & Specializations</h2>
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
              Learning at Dayananda Sagar University is about exciting, hands-on experiences that broaden your horizons and develop critical thinking, leadership, and entrepreneurial capabilities.
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
                <CardTitle>Industry Connect</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-foreground/80">
                Strong industry partnerships, paid internships, and placement preparation from Semester 3 ensure students are work-ready for global organizations.
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/60 backdrop-blur">
              <CardHeader>
                <Lightbulb className="h-8 w-8 text-brand-magenta mb-3" />
                <CardTitle>Entrepreneurial Focus</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-foreground/80">
                Creating a startup ecosystem and fostering entrepreneurial mindsets among students to become job creators and innovative leaders.
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

      {/* Faculty Section */}
      <section className="bg-gradient-to-r from-brand-magenta/5 via-brand-blue/5 to-brand-orange/5 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display mb-4">Meet Our Faculty</h2>
            <p className="text-lg text-foreground/80 mb-6">
              Learn from industry experts, renowned scholars, and experienced practitioners who are committed to your success.
            </p>
            <Link to="/academics/commerce-and-management/mba/faculty">
              <Button variant="outline" size="lg" className="border-brand-magenta/30 hover:bg-brand-magenta/10">
                View Faculty Directory
                <Users className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="headline-2 mb-6">Ready to Transform Your Career?</h2>
          <p className="subheadline text-foreground/80 mb-8 max-w-2xl mx-auto">
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

      <AnnouncementBanner priority="high" variant="banner" />
      <NewsSection variant="carousel" title="Department News" />
      <EventsSection variant="carousel" title="Upcoming Events" />
    </div>
  );
}
