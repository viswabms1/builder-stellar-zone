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
  Clock,
  Target,
  ChevronDown,
  Download,
  CalendarDays,
} from "lucide-react";
import { Button } from "@/components/ui/button";

function CurriculumLibrary() {
  const [openProgram, setOpenProgram] = useState<string | null>(null);

  const programs = [
    {
      id: "bcom-standard",
      label: "B.Com (Standard)",
      description: "3-year comprehensive undergraduate program with foundation in accounting, finance, and commerce",
      details: "Bridge the gap between conceptual learning and practical application to inculcate professional corporate expertise. The curriculum is suitably prepared to meet the challenging needs of Indian corporates with built-in flexibility enabling students to choose from a wide spectrum of courses. Imparts comprehensive business skills and turns out high-calibre, competent, versatile professionals.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Latest curriculum across 6 semesters combining rigorous academics with practical application",
          documentUrl: "https://www.dsu.edu.in/images/Commerce/B-Com-Curriculum-2025-26.pdf",
        },
      ],
    },
    {
      id: "bcom-acca",
      label: "B.Com with ACCA Coaching",
      description: "3-year program integrated with ACCA (Association of Chartered Certified Accountants) coaching and examinations",
      details: "ACCA is the global body for professional accountants from the UK, founded in 1904, with over 188,137 members and 480,813 students in 178 countries. Designed for students aspiring to be strategic business leaders and job creators with financial and entrepreneurial expertise to perform key roles as financial analysts and enterprise venture specialists. DSU has partnered with Globalfti, a Gold Approved learning provider for ACCA in India. Students gain industry-relevant skills and qualifications along with a B.Com degree, with up to 6 ACCA paper exemptions including exemption fee waivers with reduced registration and annual subscription fees.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Dual certification program combining B.Com degree with ACCA coaching and up to 6 paper exemptions",
          documentUrl: "https://www.dsu.edu.in/images/Commerce/B-Com-ACCA-Curriculum-2025-26.pdf",
        },
      ],
    },
    {
      id: "bcom-cma",
      label: "B.Com with USA-CMA Coaching",
      description: "3-year program with Certified Management Accountant (CMA) certification from the Institute of Management Accountants, USA",
      details: "US CMA (Certified Management Accountant) is a professional certification in finance and accounting relevant for success, offered by the IMA (Institute of Management Accountants), USA. A globally recognized, advanced-level credential appropriate for accountants and financial professionals in business. The curriculum covers Financial Reporting, Planning, Performance & Control (Part 1) and Financial Decision Making (Part 2). The CMA curriculum is covered over Semesters 1-4 via 5 subjects, and students are encouraged to clear the 2 CMA exams in Semester 4-5 before placements. Candidates who clear CMA exams are eligible for differential placements with top MNCs in India and abroad. Subjects include Financial Planning & Analysis, Financial Management, Internal Controls, Risk Management, Cost Management, Performance Management, Decision Analysis and Professional Ethics.",
      image: "https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1200&auto=format&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Advanced curriculum covering financial reporting, planning, performance control, and financial decision making",
          documentUrl: "https://www.dsu.edu.in/images/Commerce/B-Com-CMA-Curriculum-2025-26.pdf",
        },
      ],
    },
    {
      id: "bcom-ca",
      label: "B.Com with CA Foundation Coaching",
      description: "3-year program enabling simultaneous pursuit of B.Com and Chartered Accountant (CA) articleship",
      details: "Aims to nurture auditing and taxation professionals who become change agents in advising the corporate and thereby bring in higher standards in corporate governance and due diligence for sustainable socio-economic growth. Students have the privilege of pursuing the UG program along with the Articleship required to complete CA due to unique timings and facility to learn on campus. Coaching provided by practicing professionals and academicians enables easier and comprehensive coverage of the curriculum. Students receive in-house training for CPT & IPCE. B.Com classes are held in the morning and CA classes in the afternoon at the DSU campus, seamlessly blending both curricula. Excellent facilities include modern classrooms, Wi-Fi campus, learning centre, seminar halls, and auditorium. The program effectively connects with industry and corporate houses to provide comprehensive placement services.",
      image: "https://images.unsplash.com/photo-1590080876-e50b5ff8f5d9?q=80&w=1200&auto=format&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Integrated program blending B.Com and CA curricula with morning UG classes and afternoon CA classes on campus",
          documentUrl: "https://www.dsu.edu.in/images/Commerce/B-Com-CA-Curriculum-2025-26.pdf",
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
                <Badge className="rounded-full border bg-brand-magenta/15 text-brand-magenta border-brand-magenta/20">Undergraduate</Badge>
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
    </div>
  );
}
