import { Link } from "react-router-dom";
import { useLanguage } from "@/providers/language-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  FlaskConical,
  Lightbulb,
  Microscope,
  Atom,
  Brain,
  Cpu,
  Leaf,
  Heart,
  Building,
  Globe,
  Zap,
  Users,
  Award,
  TrendingUp,
  BookOpen,
  Target,
  Star,
  Calendar,
  DollarSign,
  FileText,
  ChevronRight,
  Telescope,
  Dna,
  Rocket,
  Shield,
  Briefcase,
  ClipboardList,
  Megaphone
} from "lucide-react";

export default function Research() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-10 lg:py-32 bg-gradient-to-br from-orange-500/10 via-red-600/5 to-background">
        <div className="absolute inset-0 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2000&auto=format&fit=crop" alt="Research at DSU" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/20 mb-8">
            <FlaskConical className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-sm font-medium text-orange-500">{t('research.title')}</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            {t('research.description')}
          </h1>

          <p className="text-xl md:text-2xl text-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            {t('academics.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-red-600 hover:to-orange-500 text-foreground px-8 py-6 text-lg font-semibold rounded-2xl">
              Explore Research
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-foreground px-8 py-6 text-lg font-semibold rounded-2xl">
              Research Publications
            </Button>
          </div>
          
          {/* Research Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {[
              { number: "50+", label: "Research Centers", icon: Building },
              { number: "₹100Cr+", label: "Research Funding", icon: DollarSign },
              { number: "2000+", label: "Publications", icon: FileText },
              { number: "150+", label: "Patents", icon: Award },
            ].map((stat, index) => (
              <Card key={index} className="text-center p-3 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-orange-500/30 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                <div className="text-sm text-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Hub Quick Links (DSU-style menu) */}
      <section className="px-3 py-14 bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="headline-3">Research Hub</h2>
            <p className="text-foreground font-body">Quick access to Ph.D admissions, regulations, supervisors, and more</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { icon: Calendar, title: "Ph.D Calendar of Events", href: "https://www.dsu.edu.in/research/phd-calendar-of-events" },
              { icon: ClipboardList, title: "Ph.D Admission - July '25", href: "https://www.dsu.edu.in/research/phd-admission" },
              { icon: Users, title: "Research Supervisor List", href: "https://www.dsu.edu.in/research/research-supervisor-list" },
              { icon: FileText, title: "Ph.D Regulations", href: "https://www.dsu.edu.in/research/phd-regulations" },
              { icon: FileText, title: "Templates for Supervisors & Scholars", href: "https://www.dsu.edu.in/research/templates" },
              { icon: Shield, title: "Code of Ethics, Projects & Publications", href: "https://www.dsu.edu.in/research/code-of-ethics" },
              { icon: Briefcase, title: "Research Positions", href: "https://www.dsu.edu.in/research/research-positions" },
              { icon: Award, title: "Research Promotion Policy", href: "https://www.dsu.edu.in/research/research-promotion-policy" },
              { icon: Megaphone, title: "Calls: Proposals, Conferences, Sponsorships", href: "https://www.dsu.edu.in/research/calls" },
            ].map((item, idx) => (
              <a key={idx} href={item.href} target="_blank" rel="noreferrer" className="group rounded-2xl overflow-hidden border border-border/40 bg-card/40 backdrop-blur-sm hover:shadow-lg hover:shadow-brand-magenta/10 transition-all">
                <div className="relative h-28">
                  <img src={`https://images.unsplash.com/photo-15${80+idx}5066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop`} alt={item.title} className="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 p-4 flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-white" />
                    <div className="text-white font-medium font-display">{item.title}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Research Centers */}
      <section className="px-3 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-3">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Research</span>
              <span className="text-foreground"> Centers</span>
            </h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Specialized research centers driving innovation across multiple disciplines
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                icon: Cpu,
                title: "Digital Twin Lab",
                description: "Advanced research on digital twin technologies for aerospace engineering, manufacturing systems, and complex industrial applications. Creating virtual replicas of physical systems to optimize design, predict performance, and enhance operational efficiency.",
                focus: ["Digital Twin Modeling", "Aerospace Systems", "Manufacturing Simulation", "Real-time Data Integration", "Predictive Analytics", "System Optimization"],
                projects: "5+ Active Projects",
                funding: "Research in Progress",
                publications: "Research in Progress",
                researchers: ["Dr. Prashantha Kumar H G (NPDF- IITM, Asst. Professor, Dept. of Aerospace Engineering)"],
                images: [
                  "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fcdc3731512be458fbcb6a4bbfd9dc81e?format=webp&width=800",
                  "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F873b3f093e894babbc6e55899c8fa0c7?format=webp&width=800"
                ]
              },
              {
                icon: FlaskConical,
                title: "SynTech Bio Solutions Lab",
                description: "Pioneering research on upcycling agricultural waste into sustainable protein sources. Our students are reimagining agricultural byproducts as nutritional resources to address food waste management and malnutrition.",
                focus: ["Protein Engineering", "Waste Upcycling", "Sustainable Food", "Bioprocessing", "Nutritional Science"],
                projects: "3+ Active Projects",
                funding: "ANRF Funded",
                publications: "Research in Progress",
                researchers: ["Dr. B. M. Ashwin Desai", "Dr. Pronama Biswas"],
                students: ["Bhoomika Sridhar", "Challa Mokshith Chowdhary", "Khushi Agrawal"],
                videoUrl: "https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2F9943902d95dc447ea4c98bfa5489a2eb?alt=media&token=ad667b6e-dc94-41de-a3dc-040b69d9577a&apiKey=4aa279a8430d441dba9c55f659831878",
                images: [
                  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop"
                ]
              },
              {
                icon: Cpu,
                title: "Center for AI & Machine Learning",
                description: "Advancing artificial intelligence and machine learning technologies for real-world applications",
                focus: ["Deep Learning", "Computer Vision", "Natural Language Processing", "Robotics", "Big Data Analytics"],
                projects: "25+ Active Projects",
                funding: "₹15 Cr",
                publications: "150+ Papers",
                images: [
                  "https://images.unsplash.com/photo-1677442d019cecf8d30e93c9ba13b3b4d5e8c5b0?q=80&w=1200&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1485827404703-d12cf3f3dfb5?q=80&w=1200&auto=format&fit=crop"
                ]
              },
              {
                icon: Dna,
                title: "Biotechnology Research Institute",
                description: "Pioneering biotechnology research for healthcare, agriculture, and environmental solutions",
                focus: ["Genetic Engineering", "Drug Discovery", "Bioinformatics", "Tissue Engineering", "Bioprocessing"],
                projects: "20+ Active Projects",
                funding: "₹12 Cr",
                publications: "120+ Papers",
                images: [
                  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop"
                ]
              },
              {
                icon: Leaf,
                title: "Sustainable Energy Lab",
                description: "Developing renewable energy solutions and sustainable technologies for a greener future",
                focus: ["Solar Energy", "Wind Power", "Energy Storage", "Smart Grids", "Green Materials"],
                projects: "18+ Active Projects",
                funding: "₹10 Cr",
                publications: "100+ Papers",
                images: [
                  "https://images.unsplash.com/photo-1509391366360-2e938d440424?q=80&w=1200&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1559027615-cd2628902d4a?q=80&w=1200&auto=format&fit=crop"
                ]
              },
              {
                icon: Brain,
                title: "Cognitive Science Center",
                description: "Exploring human cognition, behavior, and brain function through interdisciplinary research",
                focus: ["Neuroscience", "Psychology", "Human-Computer Interaction", "Behavioral Studies", "Brain Imaging"],
                projects: "15+ Active Projects",
                funding: "₹8 Cr",
                publications: "90+ Papers",
                images: [
                  "https://images.unsplash.com/photo-1559027615-cd2628902d4a?q=80&w=1200&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1579154204601-01d3f2d3d7a6?q=80&w=1200&auto=format&fit=crop"
                ]
              },
              {
                icon: Telescope,
                title: "Space Technology Lab",
                description: "Advancing space technology and satellite applications for national development",
                focus: ["Satellite Technology", "Remote Sensing", "Space Communication", "Astronomy", "Space Materials"],
                projects: "12+ Active Projects",
                funding: "₹20 Cr",
                publications: "80+ Papers",
                images: [
                  "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=1200&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1458066918949-eea6b1c85dfe?q=80&w=1200&auto=format&fit=crop"
                ]
              },
              {
                icon: Heart,
                title: "Medical Devices Innovation Hub",
                description: "Developing next-generation medical devices and healthcare technologies",
                focus: ["Biomedical Engineering", "Medical Imaging", "Prosthetics", "Diagnostics", "Telemedicine"],
                projects: "22+ Active Projects",
                funding: "₹18 Cr",
                publications: "110+ Papers",
                images: [
                  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1631217314831-c6227db76b6e?q=80&w=1200&auto=format&fit=crop"
                ]
              },
            ].map((center, index) => (
              <Card key={index} className="group hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30 overflow-hidden">
                <div className="grid md:grid-cols-3 gap-3 p-3">
                  {/* Media Gallery */}
                  <div className="md:col-span-1 space-y-4">
                    {center.videoUrl ? (
                      <div className="space-y-4">
                        <div className="rounded-xl overflow-hidden bg-slate-900 aspect-video">
                          <video
                            src={center.videoUrl}
                            controls
                            className="w-full h-full object-cover"
                            poster="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {center.images.map((img, idx) => (
                            <img
                              key={idx}
                              src={img}
                              alt={`${center.title} gallery ${idx + 1}`}
                              className="rounded-lg aspect-square object-cover hover:scale-105 transition-transform"
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-3">
                        {center.images.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`${center.title} gallery ${idx + 1}`}
                            className="rounded-lg aspect-square object-cover hover:scale-105 transition-transform"
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors flex-shrink-0">
                        <center.icon className="w-7 h-7 text-orange-500 group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="flex gap-2 flex-wrap justify-end">
                        <Badge variant="secondary" className="text-xs">
                          {center.projects}
                        </Badge>
                        {center.funding && (
                          <Badge variant="outline" className="text-xs border-orange-500/30 text-orange-500">
                            {center.funding}
                          </Badge>
                        )}
                        {center.publications && (
                          <Badge variant="outline" className="text-xs border-green-500/30 text-green-500">
                            {center.publications}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <CardTitle className="text-2xl font-bold group-hover:text-orange-500 transition-colors leading-tight mb-3">
                      {center.title}
                    </CardTitle>

                    <CardDescription className="text-foreground leading-relaxed mb-4 text-base">
                      {center.description}
                    </CardDescription>

                    {center.researchers && (
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-foreground mb-2">Principal Investigators:</p>
                        <p className="text-sm text-foreground/80">{center.researchers.join(", ")}</p>
                      </div>
                    )}

                    {center.students && (
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-foreground mb-2">Research Team:</p>
                        <p className="text-sm text-foreground/80">{center.students.join(", ")}</p>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-3 mb-4">
                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-foreground">Research Focus:</p>
                        <div className="grid grid-cols-1 gap-1">
                          {center.focus.slice(0, 3).map((area, idx) => (
                            <div key={idx} className="flex items-center text-sm text-foreground">
                              <ChevronRight className="w-3 h-3 text-orange-500 mr-2 flex-shrink-0" />
                              {area}
                            </div>
                          ))}
                          {center.focus.length > 3 && (
                            <div className="text-sm text-orange-500 font-medium">
                              +{center.focus.length - 3} more areas
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <Button variant="ghost" size="sm" className="group-hover:text-orange-500 hover:bg-transparent">
                      View Projects
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Achievements & Inspiration */}
      <section className="px-3 py-10 bg-gradient-to-r from-orange-500/5 to-red-600/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-3">
              <span className="text-foreground">Research </span>
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-xl text-foreground">
              Recognition and impact of our research contributions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "National Awards",
                number: "25+",
                description: "Prestigious national research awards and recognitions"
              },
              {
                icon: Globe,
                title: "International Collaborations",
                number: "50+",
                description: "Global partnerships with leading universities and institutions"
              },
              {
                icon: TrendingUp,
                title: "H-Index Impact",
                number: "75+",
                description: "High citation impact across all research publications"
              },
              {
                icon: Target,
                title: "Industry Patents",
                number: "150+",
                description: "Commercial patents filed and approved for industry use"
              },
              {
                icon: DollarSign,
                title: "Research Grants",
                number: "₹100Cr+",
                description: "Total research funding from government and private sources"
              },
              {
                icon: Users,
                title: "PhD Scholars",
                number: "500+",
                description: "Active doctoral researchers across all disciplines"
              },
              {
                icon: BookOpen,
                title: "Publications",
                number: "2000+",
                description: "Peer-reviewed publications in top-tier journals"
              },
              {
                icon: Star,
                title: "Excellence Rating",
                number: "A++",
                description: "Highest research excellence rating from UGC"
              },
            ].map((achievement, index) => (
              <Card key={index} className="text-center p-3 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-orange-500/30 transition-all duration-300 group">
                <achievement.icon className="w-12 h-12 text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold mb-2 group-hover:text-orange-500 transition-colors">{achievement.title}</h3>
                <div className="text-3xl font-bold text-orange-500 mb-3">{achievement.number}</div>
                <p className="text-sm text-foreground leading-relaxed">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight Stories */}
      <section className="px-3 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="headline-3">Research Spotlights</h2>
            <p className="text-foreground font-body">Stories to inspire students and faculty to pursue impactful research</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {[
              {
                image: "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?q=80&w=1600&auto=format&fit=crop",
                tag: "AI & Robotics",
                title: "Field robots navigate unstructured terrain with learning-based control",
                href: "/research"
              },
              {
                image: "https://images.unsplash.com/photo-1580281657527-47c455c8d7bf?q=80&w=1600&auto=format&fit=crop",
                tag: "Health Sciences",
                title: "Clinical collaboration accelerates translational diagnostics",
                href: "/research"
              },
              {
                image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop",
                tag: "Sustainability",
                title: "Smart energy lab pilots grid-scale storage algorithms",
                href: "/research"
              },
            ].map((s, i) => (
              <a key={i} href={s.href} className="group relative overflow-hidden rounded-3xl border border-border/50">
                <img src={s.image} alt={s.title} className="h-64 w-full object-cover group-hover:scale-[1.02] transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 p-3">
                  <Badge className="bg-white/10 text-white mb-3">{s.tag}</Badge>
                  <h3 className="text-white font-semibold text-xl font-display">{s.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Research Opportunities */}
      <section className="px-3 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-3">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Research</span>
              <span className="text-foreground"> Opportunities</span>
            </h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Join our research community and contribute to groundbreaking discoveries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Undergraduate Research Program",
                description: "Early exposure to research for undergraduate students with faculty mentorship",
                benefits: ["Research Mentorship", "Publication Opportunities", "Conference Presentations", "Research Stipend"],
                duration: "1-2 Years",
                eligibility: "2nd Year onwards"
              },
              {
                icon: Microscope,
                title: "Master's Research Projects",
                description: "Comprehensive research projects as part of master's degree curriculum",
                benefits: ["Industry Collaboration", "Advanced Lab Access", "Research Publications", "Career Guidance"],
                duration: "1-2 Semesters",
                eligibility: "Master's Students"
              },
              {
                icon: Atom,
                title: "Doctoral Research Programs",
                description: "Full-time PhD programs with comprehensive research training and support",
                benefits: ["Full Scholarship", "International Exposure", "Conference Travel", "Research Facilities"],
                duration: "3-5 Years",
                eligibility: "Master's Degree"
              },
              {
                icon: Brain,
                title: "Post-Doctoral Fellowships",
                description: "Advanced research positions for post-doctoral researchers",
                benefits: ["Competitive Salary", "Research Independence", "Collaboration Opportunities", "Career Development"],
                duration: "2-3 Years",
                eligibility: "PhD Degree"
              },
              {
                icon: Rocket,
                title: "Industry Research Partnerships",
                description: "Collaborative research projects with industry partners",
                benefits: ["Industry Exposure", "Commercial Applications", "Technology Transfer", "Professional Network"],
                duration: "1-3 Years",
                eligibility: "All Levels"
              },
              {
                icon: Globe,
                title: "International Research Exchange",
                description: "Research exchange programs with partner universities worldwide",
                benefits: ["Global Exposure", "Cultural Exchange", "International Publications", "Networking"],
                duration: "6 Months - 1 Year",
                eligibility: "PhD Students"
              },
            ].map((opportunity, index) => (
              <Card key={index} className="group hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                      <opportunity.icon className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-foreground">Duration</div>
                      <div className="text-sm font-semibold text-orange-500">{opportunity.duration}</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-orange-500 transition-colors">
                    {opportunity.title}
                  </CardTitle>
                  <Badge variant="secondary" className="w-fit text-xs">
                    {opportunity.eligibility}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-foreground leading-relaxed">
                    {opportunity.description}
                  </CardDescription>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">Benefits:</p>
                    <div className="grid grid-cols-1 gap-1">
                      {opportunity.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-foreground">
                          <Star className="w-3 h-3 text-orange-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <a
                    href="https://admissions.dsu.edu.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full"
                  >
                    <Button variant="ghost" size="sm" className="w-full justify-between group-hover:text-orange-500 hover:bg-transparent">
                      Apply Now
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Support */}
      <section className="px-3 py-10 bg-gradient-to-r from-orange-500/5 to-red-600/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-3">
              <span className="text-foreground">Research </span>
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Support</span>
            </h2>
            <p className="text-xl text-foreground">
              Comprehensive support ecosystem for researchers at all levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Funding Support",
                description: "Assistance with grant applications and funding opportunities"
              },
              {
                icon: Building,
                title: "Research Infrastructure",
                description: "State-of-the-art labs and research facilities"
              },
              {
                icon: Users,
                title: "Mentorship Program",
                description: "Expert guidance from senior faculty and researchers"
              },
              {
                icon: FileText,
                title: "Publication Support",
                description: "Assistance with writing and publishing research papers"
              },
              {
                icon: Globe,
                title: "International Collaboration",
                description: "Global research partnerships and exchange programs"
              },
              {
                icon: Award,
                title: "IP & Patents",
                description: "Intellectual property protection and patent filing support"
              },
              {
                icon: TrendingUp,
                title: "Career Development",
                description: "Professional development and career guidance"
              },
              {
                icon: Zap,
                title: "Technology Transfer",
                description: "Commercialization of research innovations"
              },
            ].map((support, index) => (
              <Card key={index} className="text-center p-3 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-orange-500/30 transition-all duration-300 group">
                <support.icon className="w-12 h-12 text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold mb-3 group-hover:text-orange-500 transition-colors">{support.title}</h3>
                <p className="text-sm text-foreground leading-relaxed">{support.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-3 py-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-500/10 via-red-600/10 to-pink-500/10 rounded-3xl p-12 border border-orange-500/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-3">
              Ready to 
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> Lead Innovation</span>?
            </h2>
            <p className="text-xl text-foreground mb-8 max-w-2xl mx-auto">
              Join our research community and be part of discoveries that shape the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 via-red-600 to-pink-500 text-foreground px-12 py-6 text-lg font-semibold rounded-2xl">
                Apply for Research
                <FlaskConical className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-foreground px-12 py-6 text-lg font-semibold rounded-2xl">
                Explore Publications
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {["Research Funding", "Global Collaboration", "Publication Support", "Patent Assistance"].map((badge, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1 text-xs font-medium">
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
