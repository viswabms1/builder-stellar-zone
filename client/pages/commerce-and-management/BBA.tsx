import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DepartmentNoticeBoard } from "@/components/DepartmentNoticeBoard";
import { CurriculumLibrary } from "@/components/CurriculumLibrary";
import { getCurriculumByDepartment } from "@/lib/content-manager";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  BookOpen,
  Users,
  Award,
  Briefcase,
  Clock,
  Target,
  ChevronDown,
  Download,
  CalendarDays,
} from "lucide-react";
import { Button } from "@/components/ui/button";

function CurriculumLibraryComponent() {
  const programs = getCurriculumByDepartment("Commerce & Management", "BBA");
  return (
    <CurriculumLibrary
      programs={programs}
      themeColor="magenta"
    />
  );
}

export default function BBA() {
  const highlights = [
    { icon: Target, label: "Leadership Development" },
    { icon: Briefcase, label: "Industry Immersion" },
    { icon: Users, label: "Team Collaboration" },
    { icon: Award, label: "Career Ready" },
  ];

  const careers = [
    "Business Manager",
    "Financial Analyst",
    "Marketing Manager",
    "Operations Manager",
    "Entrepreneur",
    "Management Consultant",
    "Retail Manager",
    "Retail Operations Lead",
    "Business Development Manager",
    "Corporate Strategist",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative">
        <div className="h-[50vh] sm:h-[65vh] md:h-[65vh] w-full overflow-hidden" style={{ minHeight: '200px' }}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fac094b4290a14ca5a7c366dd53f5e613?format=webp&width=800"
            alt="BBA Program - Innovation Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-start md:items-center md:pt-0 z-10" style={{ marginTop: '80px' }}>
          <div className="max-w-7xl mx-auto px-3 w-full">
            <div className="max-w-3xl">
              <Link to="/academics/commerce-and-management" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white mb-4">
                <ChevronRight className="h-4 w-4 rotate-180" />
                Back to Programs
              </Link>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight font-display font-bold mb-4">
                Bachelor of Business Administration (BBA)
              </h1>
              <p className="text-sm sm:text-base text-white/90 max-w-2xl mb-6">
                Transform into a data-driven business leader using GPU-accelerated AI and advanced analytics. Prepare young minds with positive attitude for excellent performance and committed service through innovative management education powered by cutting-edge supercomputing infrastructure.
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

      {/* Program Overview */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold font-display">Program Overview</h2>
              <p className="text-foreground/80">
                The Bachelor of Business Administration (BBA) program at Dayananda Sagar University transforms young minds with positive attitude for excellent performance and committed service, powered by GPU-accelerated AI and advanced business analytics infrastructure. Students develop the technical and strategic acumen to lead in the data-driven enterprise economy, providing the right nurturing ground to enable entrepreneurial ambitions.
              </p>
              <p className="text-foreground/80">
                The three-year program equips students to meet managerial challenges of the 21st century through supercomputer-scale analytics, AI-driven decision support, and hands-on experience with cutting-edge business intelligence tools. Case studies, presentations, internships, research projects, and industry interaction emphasize developing independent thinking, data-driven decision-making capability, and research aptitude. BBA graduates gain 20-30% salary premiums through AI and business analytics expertise.
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
            <CurriculumLibraryComponent />
          </div>
        </div>
      </section>

      {/* GPU-Accelerated Business Intelligence & AI-Driven Management Section */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold font-display mb-4">GPU-Accelerated Business Intelligence & AI-Driven Management</h2>
            <p className="text-lg text-foreground/80 max-w-3xl">
              BBA students gain competitive advantage through hands-on experience with advanced business intelligence and AI infrastructure, preparing them for leadership roles in data-driven organizations, supply chain optimization, marketing analytics, and strategic management.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Supply Chain Optimization */}
            <div className="bg-gradient-to-r from-brand-magenta/10 to-brand-orange/10 p-6 rounded-lg border border-brand-magenta/30">
              <h4 className="text-xl font-bold text-brand-magenta mb-3">Supply Chain Optimization & Logistics AI</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>✓ GPU-accelerated demand forecasting and inventory optimization</li>
                <li>✓ Real-time supply chain visibility and logistics route optimization</li>
                <li>✓ Machine learning for supplier risk assessment and procurement intelligence</li>
                <li>✓ Distributed network simulations: model complex supply chains in milliseconds</li>
              </ul>
            </div>

            {/* Marketing Analytics */}
            <div className="bg-gradient-to-r from-brand-blue/10 to-brand-magenta/10 p-6 rounded-lg border border-brand-blue/30">
              <h4 className="text-xl font-bold text-brand-blue mb-3">Marketing AI & Customer Analytics</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>✓ AI-powered customer segmentation and personalization at scale</li>
                <li>✓ Predictive customer lifetime value and churn modeling</li>
                <li>✓ Real-time campaign optimization and A/B testing acceleration</li>
                <li>✓ Advanced sentiment analysis and brand perception monitoring</li>
              </ul>
            </div>

            {/* Business Intelligence */}
            <div className="bg-gradient-to-r from-brand-orange/10 to-brand-magenta/10 p-6 rounded-lg border border-brand-orange/30">
              <h4 className="text-xl font-bold text-brand-orange mb-3">Predictive Business Intelligence & Strategy</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>✓ GPU-accelerated financial modeling and scenario analysis</li>
                <li>✓ AI-driven competitive intelligence and market trend forecasting</li>
                <li>✓ Real-time business dashboards and executive decision support systems</li>
                <li>✓ Machine learning for strategic planning and opportunity identification</li>
              </ul>
            </div>

            {/* Career Opportunities */}
            <div className="bg-gradient-to-r from-brand-magenta/10 to-brand-blue/10 p-6 rounded-lg border border-brand-magenta/30">
              <h4 className="text-xl font-bold text-brand-magenta mb-3">Career Opportunities & Salary Premium</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>✓ Business Analyst → Senior Manager (₹12-25 LPA with AI/BI skills)</li>
                <li>✓ Supply Chain Manager → Operations Director (₹14-32 LPA with optimization expertise)</li>
                <li>✓ 20-30% salary premium for BBA graduates with AI and business analytics credentials</li>
                <li>✓ Direct pathways to McKinsey, Deloitte, Google, Amazon, and leading Indian conglomerates</li>
              </ul>
            </div>
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
              Learn from experienced educators and industry professionals who are committed to your academic success.
            </p>
            <Link to="/academics/commerce-and-management/bba/faculty">
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
          <h2 className="headline-2 mb-6">Ready to Lead with Excellence?</h2>
          <p className="subheadline text-foreground/80 mb-8 max-w-2xl mx-auto">
            Join DSU's BBA program and develop the skills, knowledge, and mindset needed to become an effective business leader.
          </p>
          <a href="https://admissions.dsu.edu.in/" target="_blank" rel="noreferrer">
            <Button size="lg" className="bg-gradient-to-r from-brand-magenta to-brand-orange hover:shadow-lg">
              Apply Now
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
          </a>
        </div>
      </section>

      <DepartmentNoticeBoard school="Commerce & Management" department="BBA" />
    </div>
  );
}
