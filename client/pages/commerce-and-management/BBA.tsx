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
      id: "bba-regular",
      label: "BBA (Regular)",
      description: "3-year comprehensive program preparing effective managers with modern teaching, research, and industry interaction",
      details: "The undergraduate BBA programme is offered as a platform to prepare young minds with a positive attitude for excellent performance and committed service, providing the right nurturing ground to enable students to pursue their entrepreneurial ambitions. The three-year programme (6 semesters) is designed to enable students to get an overview of various aspects of launching and managing a business effectively. Students can specialize in functional areas of management they wish to pursue in their careers. The programme focuses on developing students and equipping them to meet managerial challenges of the 21st century. Emphasis is placed on teamwork skills essential for workplace success. The programme aims to develop independent thinking, decision-making capability and research aptitude through case studies, presentations, internships, research projects, industrial visits, and guest lectures from industry experts. BBA at DSU aims to be a global leader by imparting industry and society relevant management curriculum, with best training for future effective managers through a modern blend of teaching, research and industry interaction.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Curriculum designed to develop competent, innovation-oriented, ethical managers with focus on leadership in global marketplace across 6 semesters",
          documentUrl: "https://www.dsu.edu.in/images/Commerce/BBA-Regular-Curriculum-2025-26.pdf",
        },
      ],
    },
    {
      id: "bba-bfsi",
      label: "BBA BFSI",
      description: "Specialization in Banking, Financial Services & Insurance (BFSI) with quantitative techniques and financial expertise",
      details: "Banking, Financial Services and Insurance (BFSI) is an industry term for companies that provide a range of such financial products or services. This specialization enables students to be more focused right from their undergraduate education. The uniquely designed curriculum lays emphasis on application of quantitative techniques to problems in finance. The program prepares students for careers in advanced accounting and taxation, investment banking, securities & commodities trading, financial modelling, risk management, financial consulting, insurance, underwriting, project appraisal & management and applied research. The programme covers all related areas of finance and accounting with emphasis on managerial applications. Students from across the country and different disciplines interact and solve managerial problems in class. The heterogeneous mix of students, including those with work experience, brings multiple perspectives to discussion issues. Learning is emphasized through discussions and questioning key assumptions. Students work on group projects and are encouraged to work as teams, developing soft skills, analytical skills, technical skills and managerial expertise.",
      image: "https://images.unsplash.com/photo-1606531824254-d473aeb44dc5?q=80&w=1200&auto=format&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "Specialized curriculum emphasizing application of quantitative techniques to finance, investment banking, securities trading, and risk management",
          documentUrl: "https://www.dsu.edu.in/images/Commerce/BBA-BFSI-Curriculum-2025-26.pdf",
        },
      ],
    },
    {
      id: "bba-ro",
      label: "BBA Retail Operations (RO)",
      description: "4-year program in association with Retailers Association's Skill Council of India (RASCI) with earn-while-you-learn approach",
      details: "BBA in Retail Operations Program at DSU-SCMS is introduced in association with Retailers Association's Skill Council of India (RASCI). It is a 4-year undergraduate study comprising 8 semesters, which is a judicious mix of skills relating to professional education and micro specialized general education on a credit-based system. The key principles and operations in the retail sector and retail establishments are introduced. The course covers all basic aspects of the retail industry and provides students with necessary knowledge and skill-sets to succeed in the retail sector. The program focuses on the 'Earn while you learn' concept where students are exposed to concepts and theories learned through real-life work situations via on-the-job internships during the course itself. On successful completion, students graduate with a degree from both DSU and RASCI, providing dual recognition and enhanced career prospects in the rapidly growing retail industry.",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1200&auto=format&fit=crop",
      batches: [
        {
          year: "2025-26",
          summary: "8-semester program covering retail operations with on-the-job internships, dual degree from DSU and RASCI, hands-on retail industry exposure",
          documentUrl: "https://www.dsu.edu.in/images/Commerce/BBA-RO-Curriculum-2025-26.pdf",
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
            <CurriculumLibrary />
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
    </div>
  );
}
