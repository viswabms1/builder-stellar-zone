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
  const programs = getCurriculumByDepartment("Commerce & Management", "BCom");
  return (
    <CurriculumLibrary
      programs={programs}
      themeColor="magenta"
    />
  );
}

export default function BCom() {
  const highlights = [
    { icon: Award, label: "Industry-Aligned Curriculum" },
    { icon: Briefcase, label: "Professional Certifications" },
    { icon: Users, label: "Expert Faculty" },
    { icon: Target, label: "Career Ready" },
  ];

  const careers = [
    "Financial Analyst",
    "Chartered Accountant",
    "Tax Consultant",
    "Investment Banker",
    "Management Accountant",
    "Auditor",
    "Financial Planner",
    "Corporate Comptroller",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative">
        <div className="h-[50vh] sm:h-[65vh] md:h-[65vh] w-full overflow-hidden" style={{ minHeight: '200px' }}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F1b283ddb4bb848de8952ec13b10820be?format=webp&width=800"
            alt="B.Com Program - Innovation Campus"
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
                Bachelor of Commerce (B.Com)
              </h1>
              <p className="text-sm sm:text-base text-white/90 max-w-2xl mb-6">
                Bridge the gap between conceptual learning and practical application using GPU-accelerated financial technology. Develop professional corporate expertise through flexible, industry-aligned curriculum powered by cutting-edge fintech infrastructure.
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
                The Bachelor of Commerce program at Dayananda Sagar University bridges the gap between conceptual learning and practical application using GPU-accelerated financial technology infrastructure. Students develop professional corporate expertise through hands-on experience with cutting-edge fintech platforms, data analytics tools, and blockchain systems.
              </p>
              <p className="text-foreground/80">
                Our industry-aligned curriculum meets the challenging needs of Indian corporates and emerging fintech sectors, with built-in flexibility enabling students to choose from a wide spectrum of courses. SCMS imparts comprehensive business skills powered by supercomputer-scale analytics, and provides the training ground that turns out high-calibre, competent, versatile finance and technology professionals with 20-35% salary premiums in the job market.
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
            <h2 className="text-3xl font-bold font-display">Program Varieties & Curriculum</h2>
            <CurriculumLibrary />
          </div>
        </div>
      </section>

      {/* GPU-Accelerated Financial Analytics & Fintech Section */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold font-display mb-4">GPU-Accelerated Financial Analytics & Fintech</h2>
            <p className="text-lg text-foreground/80 max-w-3xl">
              B.Com students gain competitive advantage through hands-on experience with advanced financial technology infrastructure, preparing them for careers in fintech, data-driven finance, and high-frequency trading sectors.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Advanced Analytics */}
            <div className="bg-gradient-to-r from-brand-magenta/10 to-brand-orange/10 p-6 rounded-lg border border-brand-magenta/30">
              <h4 className="text-xl font-bold text-brand-magenta mb-3">GPU-Accelerated Financial Analytics</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>✓ Real-time portfolio analysis and risk modeling using GPU acceleration</li>
                <li>✓ Machine learning models for stock prediction and market trend analysis</li>
                <li>✓ High-performance data processing: Analyze millions of transactions in seconds</li>
                <li>✓ Advanced visualization of financial data and business intelligence dashboards</li>
              </ul>
            </div>

            {/* Fintech & Blockchain */}
            <div className="bg-gradient-to-r from-brand-blue/10 to-brand-magenta/10 p-6 rounded-lg border border-brand-blue/30">
              <h4 className="text-xl font-bold text-brand-blue mb-3">Fintech & Blockchain Technologies</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>✓ Cryptocurrency and blockchain fundamentals with practical implementation</li>
                <li>✓ High-frequency trading algorithms and computational finance</li>
                <li>✓ AI-driven fraud detection and compliance automation</li>
                <li>✓ Direct exposure to fintech platforms used by leading financial institutions</li>
              </ul>
            </div>

            {/* Career Opportunities */}
            <div className="bg-gradient-to-r from-brand-orange/10 to-brand-magenta/10 p-6 rounded-lg border border-brand-orange/30">
              <h4 className="text-xl font-bold text-brand-orange mb-3">Career Opportunities & Salary Premium</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>✓ Financial Data Analyst → Senior Analyst (₹15-30 LPA with GPU/ML skills)</li>
                <li>✓ Fintech Developer → Quant Engineer (₹18-40 LPA with blockchain expertise)</li>
                <li>✓ 20-35% salary premium for B.Com graduates with fintech and data science credentials</li>
                <li>✓ Direct pathways to Goldman Sachs, Morgan Stanley, JP Morgan, and Indian fintech unicorns</li>
              </ul>
            </div>

            {/* Why It Matters */}
            <div className="bg-gradient-to-r from-brand-magenta/10 to-brand-blue/10 p-6 rounded-lg border border-brand-magenta/30">
              <h4 className="text-xl font-bold text-brand-magenta mb-3">Competitive Distinction</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>✓ Rare GPU-accelerated fintech infrastructure in Indian commerce education</li>
                <li>✓ Industry-ready skills matching global financial services standards</li>
                <li>✓ Access to cutting-edge tools used by top investment banks and fintech startups</li>
                <li>✓ Direct qualification for high-paying roles in data-driven finance and emerging fintech sectors</li>
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
            <Link to="/academics/commerce-and-management/bcom/faculty">
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
          <h2 className="headline-2 mb-6">Ready to Shape Your Career?</h2>
          <p className="subheadline text-foreground/80 mb-8 max-w-2xl mx-auto">
            Join DSU's B.Com program and gain the expertise and credentials needed for success in the global business landscape.
          </p>
          <a href="https://admissions.dsu.edu.in/" target="_blank" rel="noreferrer">
            <Button size="lg" className="bg-gradient-to-r from-brand-magenta to-brand-orange hover:shadow-lg">
              Apply Now
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
          </a>
        </div>
      </section>

      <DepartmentNoticeBoard school="Commerce & Management" department="BCom" />
    </div>
  );
}
