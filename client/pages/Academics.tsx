import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  BookOpen, 
  GraduationCap, 
  FlaskConical, 
  Building, 
  Globe,
  Users,
  Award,
  Calendar,
  ChevronRight,
  Star,
  TrendingUp,
  Lightbulb,
  Laptop,
  Heart,
  Briefcase
} from "lucide-react";

export default function Academics() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-orange-500/10 via-red-600/5 to-background">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/20 mb-8">
            <BookOpen className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-sm font-medium text-orange-500">Academic Excellence</span>
          </div>
          
          <h1 className="headline-1 mb-8 leading-tight">
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Shape Tomorrow
            </span>
            <br />
            <span className="text-foreground">Through Learning</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover world-class academic programs designed to prepare you for the challenges of tomorrow. 
            At DSU, innovation meets excellence across every discipline.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-brand-gradient hover:opacity-90 text-white px-8 py-6 text-lg font-semibold font-gilroy rounded-2xl">
              Explore Programs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8 py-6 text-lg font-semibold font-gilroy rounded-2xl">
              Download Brochure
            </Button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: "15", label: "Schools & Colleges", icon: Building },
              { number: "100+", label: "Programs", icon: BookOpen },
              { number: "500+", label: "Expert Faculty", icon: Users },
              { number: "95%", label: "Placement Rate", icon: TrendingUp },
            ].map((stat, index) => (
              <Card key={index} className="text-center p-6 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-orange-500/30 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-brand-magenta mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schools & Colleges */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Schools & </span>
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Colleges</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our diverse range of academic schools, each offering cutting-edge programs and world-class faculty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FlaskConical,
                title: "School of Engineering & Technology",
                description: "Leading-edge engineering programs with state-of-the-art labs and industry partnerships.",
                programs: ["Computer Science & Engineering", "Electronics & Communication", "Mechanical Engineering", "Civil Engineering", "Information Science", "Biotechnology"],
                highlight: "NAAC A+ Accredited",
                students: "8,000+",
                color: "orange"
              },
              {
                icon: Briefcase,
                title: "School of Business & Management",
                description: "Innovative business education combining theory with real-world application and entrepreneurship.",
                programs: ["MBA", "BBA", "M.Com", "B.Com", "Economics", "International Business"],
                highlight: "AICTE Approved",
                students: "3,500+",
                color: "red"
              },
              {
                icon: Laptop,
                title: "School of Computer Applications",
                description: "Comprehensive computing programs preparing students for the digital economy.",
                programs: ["MCA", "BCA", "Data Science", "Artificial Intelligence", "Cybersecurity", "Software Engineering"],
                highlight: "Industry Partnerships",
                students: "2,800+",
                color: "blue"
              },
              {
                icon: Heart,
                title: "School of Health Sciences",
                description: "Healthcare education with emphasis on practical training and community service.",
                programs: ["Nursing", "Physiotherapy", "Medical Lab Technology", "Pharmacy", "Public Health", "Nutrition"],
                highlight: "Clinical Excellence",
                students: "2,200+",
                color: "green"
              },
              {
                icon: Globe,
                title: "School of Liberal Arts & Sciences",
                description: "Interdisciplinary programs fostering critical thinking and global perspectives.",
                programs: ["Psychology", "English Literature", "Journalism", "Mass Communication", "Political Science", "Sociology"],
                highlight: "Research Focus",
                students: "1,800+",
                color: "purple"
              },
              {
                icon: Lightbulb,
                title: "School of Design & Architecture",
                description: "Creative programs blending artistic vision with technical expertise.",
                programs: ["Architecture", "Interior Design", "Fashion Design", "Graphic Design", "Product Design", "Urban Planning"],
                highlight: "Creative Excellence",
                students: "1,500+",
                color: "pink"
              },
            ].map((school, index) => (
              <Card key={index} className="group hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                      <school.icon className="w-7 h-7 text-orange-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <Badge variant="secondary" className="text-xs font-medium">
                      {school.students} Students
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-orange-500 transition-colors leading-tight">
                    {school.title}
                  </CardTitle>
                  <Badge variant="outline" className="w-fit text-xs border-orange-500/30 text-orange-500">
                    {school.highlight}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {school.description}
                  </CardDescription>
                  
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-foreground">Key Programs:</p>
                    <div className="grid grid-cols-1 gap-2">
                      {school.programs.slice(0, 4).map((program, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <ChevronRight className="w-3 h-3 text-orange-500 mr-2 flex-shrink-0" />
                          {program}
                        </div>
                      ))}
                      {school.programs.length > 4 && (
                        <div className="text-sm text-orange-500 font-medium">
                          +{school.programs.length - 4} more programs
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="w-full justify-between group-hover:text-orange-500 group-hover:bg-orange-500/5">
                    Explore School
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Features */}
      <section className="px-6 py-20 bg-gradient-to-r from-orange-500/5 to-red-600/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Why Choose</span>
              <span className="text-foreground"> DSU Academics?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence Recognition",
                description: "NAAC A+ grade and top rankings across multiple disciplines"
              },
              {
                icon: Users,
                title: "Expert Faculty",
                description: "Learn from industry leaders and renowned academicians"
              },
              {
                icon: Laptop,
                title: "Modern Infrastructure",
                description: "State-of-the-art labs, libraries, and learning spaces"
              },
              {
                icon: TrendingUp,
                title: "Industry Connect",
                description: "Strong partnerships with leading companies and organizations"
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-orange-500/30 transition-all duration-300 group">
                <feature.icon className="w-12 h-12 text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold mb-3 group-hover:text-orange-500 transition-colors">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-500/10 via-red-600/10 to-pink-500/10 rounded-3xl p-12 border border-orange-500/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to 
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> Start Your Journey</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore our academic programs and find the perfect fit for your career aspirations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 via-red-600 to-pink-500 text-white px-12 py-6 text-lg font-semibold rounded-2xl">
                Apply Now
                <GraduationCap className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-12 py-6 text-lg font-semibold rounded-2xl">
                Schedule Campus Visit
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {["Merit Scholarships", "Industry Internships", "Global Exposure", "Career Support"].map((badge, index) => (
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
