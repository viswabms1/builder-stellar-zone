import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Building,
  FlaskConical,
  TrendingUp,
  Globe,
  Star,
  ChevronRight,
  Cog,
  Cpu,
  Gavel,
  Briefcase,
  Stethoscope,
  Palette,
  Film,
  Microscope
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section with University Building */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F970d4569ee2e428f997dce2503ce79d8?format=webp&width=800"
            alt="Dayananda Sagar University Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-brand-magenta/10 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-orange/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-6 text-center lg:text-left lg:flex lg:items-center lg:space-x-12">
          <div className="lg:w-2/3">
            <div className="inline-flex items-center px-4 py-2 bg-brand-orange/10 rounded-full border border-brand-orange/20 mb-8 animate-glow-pulse">
              <Award className="w-4 h-4 text-brand-orange mr-2" />
              <span className="text-sm font-medium text-brand-orange font-gilroy">
                Ranked #1 Private University in Karnataka
              </span>
            </div>
            
            <h1 className="headline-1 mb-8 leading-tight">
              <span className="text-white">Shape Your</span>
              <br />
              <span className="bg-brand-gradient bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                Future
              </span>
              <br />
              <span className="text-white">at DSU</span>
            </h1>
            
            <p className="subheadline text-gray-200 mb-12 max-w-3xl leading-relaxed font-gilroy">
              Experience world-class education at Dayananda Sagar University. 
              <span className="text-brand-orange font-semibold"> Innovation meets tradition</span> in our 
              <span className="text-brand-magenta font-semibold"> state-of-the-art campus</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-16">
              <Button 
                size="lg" 
                className="bg-brand-gradient hover:opacity-90 text-white px-8 py-6 text-lg font-semibold font-gilroy rounded-2xl shadow-lg hover:shadow-brand-magenta/25 transition-all duration-300 group"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white/20 text-white hover:bg-white hover:text-background px-8 py-6 text-lg font-semibold font-gilroy rounded-2xl transition-all duration-300 backdrop-blur-sm"
              >
                Virtual Tour
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
              {[
                { number: "25K+", label: "Students", icon: Users },
                { number: "500+", label: "Faculty", icon: GraduationCap },
                { number: "100+", label: "Programs", icon: BookOpen },
                { number: "95%", label: "Placement", icon: TrendingUp },
              ].map((stat, index) => (
                <div key={index} className="text-center group backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/20">
                  <stat.icon className="w-6 h-6 text-brand-orange mx-auto mb-2 group-hover:text-brand-magenta transition-colors" />
                  <div className="text-2xl font-bold text-white mb-1 font-gilroy">{stat.number}</div>
                  <div className="text-sm text-gray-300 font-graphik">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Academics Section */}
      <section className="px-6 py-20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="headline-2 mb-6">
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Academic Excellence
              </span>
              <span className="text-foreground"> That Inspires</span>
            </h2>
            <p className="subheadline text-muted-foreground max-w-3xl mx-auto font-gilroy">
              Discover cutting-edge programs designed to prepare you for tomorrow's challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cog,
                title: "Engineering",
                description: "Cutting-edge engineering education with practical immersion, industry mentorship, and future-ready specializations.",
                programs: ["B.Tech CSE", "B.Tech Mechanical", "B.Tech ECE", "B.Tech Civil"],
                color: "brand-orange",
                delay: "0s"
              },
              {
                icon: Cpu,
                title: "Computer Applications",
                description: "Build software careers with strong foundations in programming, data, cloud, and modern application development.",
                programs: ["BCA", "MCA", "Data Science", "Cloud Computing"],
                color: "brand-magenta",
                delay: "0.1s"
              },
              {
                icon: Gavel,
                title: "School of Law",
                description: "Comprehensive legal education blending theory, practice, moot courts, internships, and research opportunities.",
                programs: ["BA LLB", "BBA LLB", "LLB", "LLM"],
                color: "brand-blue",
                delay: "0.2s"
              },
              {
                icon: Briefcase,
                title: "Commerce & Management Studies",
                description: "Business education that merges core management with analytics, entrepreneurship, and industry projects.",
                programs: ["B.Com", "BBA", "MBA", "Finance & Marketing"],
                color: "brand-orange",
                delay: "0.3s"
              },
              {
                icon: FlaskConical,
                title: "Basic & Applied Sciences",
                description: "Foundational and interdisciplinary sciences with strong lab exposure and research-driven learning.",
                programs: ["Physics", "Chemistry", "Mathematics", "Biotechnology"],
                color: "brand-magenta",
                delay: "0.4s"
              },
              {
                icon: Stethoscope,
                title: "Health Sciences",
                description: "Health professions education with clinical immersion, simulation labs, and strong patient-care focus.",
                programs: ["Pharmacy", "Physiotherapy", "Nursing", "Allied Health"],
                color: "brand-blue",
                delay: "0.5s"
              },
              {
                icon: Palette,
                title: "Arts, Design and Humanities",
                description: "Creative and humanistic disciplines that nurture expression, critical thought, and cultural literacy.",
                programs: ["Psychology", "English", "Economics", "Sociology"],
                color: "brand-orange",
                delay: "0.6s"
              },
              {
                icon: Film,
                title: "Design & Digital Trans Media",
                description: "Design and digital media programs spanning UX/UI, graphics, animation, and storytelling for modern platforms.",
                programs: ["Animation", "UX/UI", "Graphic Design", "Digital Media"],
                color: "brand-magenta",
                delay: "0.7s"
              },
              {
                icon: Microscope,
                title: "Medical Education & Research",
                description: "Advanced medical education and translational research with a focus on innovation and community impact.",
                programs: ["MBBS", "MD/MS", "Biomedical Research", "Public Health"],
                color: "brand-blue",
                delay: "0.8s"
              },
              {
                icon: Globe,
                title: "Online Degree Programs",
                description: "Flexible, career-aligned online degrees with live sessions, projects, and placement assistance.",
                programs: ["BBA", "BCA", "B.Com"],
                color: "brand-orange",
                delay: "0.9s"
              },
            ].map((school, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-brand-magenta/30 transition-all duration-300 group hover:shadow-lg hover:shadow-brand-magenta/10 hover:-translate-y-2"
                style={{ animationDelay: school.delay }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-2xl bg-brand-magenta/10 flex items-center justify-center mb-4 group-hover:bg-brand-magenta/20 transition-colors">
                    <school.icon className="w-6 h-6 text-brand-magenta group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="headline-4 group-hover:text-brand-magenta transition-colors">
                    {school.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed font-graphik">
                    {school.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground font-gilroy">Popular Programs:</p>
                    <div className="flex flex-wrap gap-2">
                      {school.programs.map((program, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs font-graphik">
                          {program}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="w-full justify-between group-hover:text-brand-magenta font-gilroy">
                    Learn More
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Campus Life Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-brand-magenta/5 to-brand-orange/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="headline-2 mb-6">
              <span className="text-foreground">Experience </span>
              <span className="bg-brand-gradient-alt bg-clip-text text-transparent">
                Campus Life
              </span>
            </h2>
            <p className="subheadline text-muted-foreground max-w-2xl mx-auto font-gilroy">
              More than education - it's about building lifelong connections and memories
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Student Organizations",
                description: "100+ clubs and societies",
                highlight: "Join Your Passion"
              },
              {
                icon: Building,
                title: "Modern Facilities",
                description: "State-of-the-art amenities",
                highlight: "World-Class Campus"
              },
              {
                icon: Star,
                title: "Cultural Events",
                description: "Year-round celebrations",
                highlight: "Vibrant Community"
              },
              {
                icon: TrendingUp,
                title: "Career Support",
                description: "Industry connections",
                highlight: "95% Placement Rate"
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-brand-magenta/30 transition-all duration-300 group">
                <feature.icon className="w-12 h-12 text-brand-magenta mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="headline-4 mb-2 group-hover:text-brand-magenta transition-colors">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 font-graphik">{feature.description}</p>
                <Badge variant="outline" className="text-xs border-brand-magenta/30 text-brand-magenta font-graphik">
                  {feature.highlight}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="px-6 py-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-brand-magenta/10 via-brand-orange/10 to-brand-blue/10 rounded-3xl p-12 border border-brand-magenta/20">
            <h2 className="headline-2 mb-6">
              Ready to 
              <span className="bg-brand-gradient bg-clip-text text-transparent"> Begin Your Journey</span>?
            </h2>
            <p className="subheadline text-muted-foreground mb-8 max-w-2xl mx-auto font-gilroy">
              Join thousands of students who've chosen DSU for their academic and personal growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                className="bg-brand-gradient hover:opacity-90 hover:shadow-lg hover:shadow-brand-magenta/25 text-white px-12 py-6 text-lg font-semibold font-gilroy rounded-2xl transition-all duration-300 group"
              >
                Apply Now
                <GraduationCap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {["No Application Fee", "Merit Scholarships Available", "Industry Partnerships"].map((badge, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1 text-xs font-medium font-graphik">
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
