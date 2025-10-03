import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  GraduationCap, 
  Calendar, 
  FileText, 
  DollarSign, 
  Award,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  Download,
  Mail,
  Phone,
  MapPin,
  Star,
  TrendingUp,
  BookOpen,
  CreditCard
} from "lucide-react";

export default function Admissions() {
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
            <GraduationCap className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-sm font-medium text-orange-500">Admissions Open 2024-25</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-foreground">Your Journey to</span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Excellence
            </span>
            <br />
            <span className="text-foreground">Starts Here</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Join thousands of students who have chosen DSU for their academic journey. 
            <span className="text-orange-400 font-semibold"> Simple application process</span>, 
            <span className="text-red-400 font-semibold"> merit-based scholarships</span>, and personalized guidance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-red-600 hover:to-orange-500 text-white px-8 py-6 text-lg font-semibold rounded-2xl">
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-6 text-lg font-semibold rounded-2xl">
              Download Prospectus
              <Download className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          {/* Application Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: "50K+", label: "Applications", icon: FileText },
              { number: "₹2L+", label: "Scholarships", icon: Award },
              { number: "95%", label: "Success Rate", icon: TrendingUp },
              { number: "24/7", label: "Support", icon: Users },
            ].map((stat, index) => (
              <Card key={index} className="text-center p-6 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-orange-500/30 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Simple</span>
              <span className="text-foreground"> Application Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Follow our streamlined 4-step process to secure your admission at DSU
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: FileText,
                title: "Online Application",
                description: "Complete your application form online with all required documents",
                details: ["Personal Information", "Academic Records", "Document Upload", "Application Fee Payment"],
                time: "15 minutes"
              },
              {
                step: "02",
                icon: BookOpen,
                title: "Entrance Exam",
                description: "Appear for DSU entrance test or submit valid scores",
                details: ["DSAT (DSU SAT)", "JEE/NEET Scores", "GATE Scores", "Management Quota"],
                time: "2-3 hours"
              },
              {
                step: "03",
                icon: Users,
                title: "Counseling",
                description: "Attend counseling session for course and campus selection",
                details: ["Document Verification", "Course Selection", "Campus Tour", "Fee Structure"],
                time: "1 day"
              },
              {
                step: "04",
                icon: CheckCircle,
                title: "Admission Confirmation",
                description: "Confirm your admission by paying the fees",
                details: ["Fee Payment", "Hostel Booking", "Orientation Details", "Welcome Kit"],
                time: "Immediate"
              },
            ].map((process, index) => (
              <Card key={index} className="group hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-6xl font-bold text-orange-500/20 group-hover:text-orange-500/30 transition-colors">
                      {process.step}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {process.time}
                    </Badge>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                    <process.icon className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-orange-500 transition-colors">
                    {process.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {process.description}
                  </CardDescription>
                  
                  <div className="space-y-2">
                    {process.details.map((detail, idx) => {
                      const key = `${process.title}-${idx}-${detail}`;
                      const lowerDetail = typeof detail === "string" ? detail.toLowerCase() : "";
                      const isHostelDetail = lowerDetail.includes("hostel");
                      const isTourDetail = lowerDetail.includes("tour");

                      return (
                        <div key={key} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {isHostelDetail ? (
                            <a
                              href="https://myposhtell.com"
                              target="_blank"
                              rel="noreferrer"
                              className="text-brand-magenta hover:underline"
                            >
                              {detail}
                            </a>
                          ) : isTourDetail ? (
                            <a
                              href="https://dsu.edu.in/virtual-tour/"
                              target="_blank"
                              rel="noreferrer"
                              className="text-brand-magenta hover:underline"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="px-6 py-20 bg-gradient-to-r from-orange-500/5 to-red-600/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Important </span>
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Dates</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Mark your calendar - Don't miss these crucial admission dates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "Application Start",
                date: "December 1, 2023",
                description: "Online application portal opens",
                status: "completed",
                urgent: false
              },
              {
                icon: Clock,
                title: "Last Date to Apply",
                date: "June 30, 2024",
                description: "Final deadline for application submission",
                status: "active",
                urgent: true
              },
              {
                icon: BookOpen,
                title: "Entrance Exam",
                date: "July 15-20, 2024",
                description: "DSAT entrance examination dates",
                status: "upcoming",
                urgent: false
              },
              {
                icon: Users,
                title: "Counseling Begins",
                date: "August 1, 2024",
                description: "First round of counseling starts",
                status: "upcoming",
                urgent: false
              },
              {
                icon: CheckCircle,
                title: "Classes Begin",
                date: "August 15, 2024",
                description: "Academic session 2024-25 commences",
                status: "upcoming",
                urgent: false
              },
              {
                icon: Award,
                title: "Scholarship Results",
                date: "August 10, 2024",
                description: "Merit scholarship announcements",
                status: "upcoming",
                urgent: false
              },
            ].map((date, index) => (
              <Card key={index} className={`p-6 transition-all duration-300 ${
                date.urgent 
                  ? "bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/30 animate-pulse" 
                  : "bg-card/30 backdrop-blur-sm border border-border/30 hover:border-orange-500/30"
              }`}>
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    date.urgent ? "bg-red-500/20" : "bg-orange-500/10"
                  }`}>
                    <date.icon className={`w-6 h-6 ${
                      date.urgent ? "text-red-500" : "text-orange-500"
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-foreground">{date.title}</h3>
                      {date.urgent && (
                        <Badge variant="destructive" className="text-xs">
                          Urgent
                        </Badge>
                      )}
                    </div>
                    <div className={`text-lg font-semibold mb-2 ${
                      date.urgent ? "text-red-500" : "text-orange-500"
                    }`}>
                      {date.date}
                    </div>
                    <p className="text-sm text-muted-foreground">{date.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Scholarships</span>
              <span className="text-foreground"> & Financial Aid</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in rewarding merit and supporting deserving students through various scholarship programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Merit Scholarship",
                amount: "Up to ₹2,00,000",
                description: "Based on academic performance in qualifying exams",
                criteria: ["90%+ in 12th grade", "Top 10% in entrance exam", "Consistent academic record"],
                coverage: "50-100% tuition fee waiver"
              },
              {
                icon: Users,
                title: "Sports Scholarship",
                amount: "Up to ₹1,50,000",
                description: "For students with exceptional sports achievements",
                criteria: ["State/National level player", "Sports certificates", "College team participation"],
                coverage: "25-75% tuition fee waiver"
              },
              {
                icon: TrendingUp,
                title: "Need-Based Aid",
                amount: "Up to ₹1,00,000",
                description: "Financial assistance for economically disadvantaged students",
                criteria: ["Family income criteria", "Academic merit", "Community service"],
                coverage: "Flexible financial support"
              },
            ].map((scholarship, index) => (
              <Card key={index} className="group hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-orange-500/5 to-red-600/5 border border-orange-500/20">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                    <scholarship.icon className="w-7 h-7 text-orange-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-orange-500 transition-colors">
                    {scholarship.title}
                  </CardTitle>
                  <div className="text-2xl font-bold text-orange-500">
                    {scholarship.amount}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {scholarship.description}
                  </CardDescription>
                  
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-foreground">Eligibility Criteria:</p>
                    <div className="space-y-1">
                      {scholarship.criteria.map((criteria, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {criteria}
                        </div>
                      ))}
                    </div>
                    <Badge variant="outline" className="text-xs border-orange-500/30 text-orange-500">
                      {scholarship.coverage}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section className="px-6 py-20 bg-gradient-to-r from-orange-500/5 to-red-600/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Need </span>
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Help?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our admissions team is here to guide you through every step
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Phone,
                title: "Call Us",
                info: "+91 80-2861-1000",
                description: "Mon-Sat, 9 AM - 6 PM"
              },
              {
                icon: Mail,
                title: "Email Support",
                info: "admissions@dsu.edu.in",
                description: "24/7 email support"
              },
              {
                icon: MapPin,
                title: "Visit Campus",
                info: "DSU Campus, Bangalore",
                description: "Schedule a campus tour",
                linkLabel: "Take Virtual Tour",
                linkHref: "https://dsu.edu.in/virtual-tour/"
              },
              {
                icon: Users,
                title: "Chat Support",
                info: "Live Chat Available",
                description: "Instant assistance online"
              },
            ].map((contact, index) => (
              <Card key={index} className="text-center p-6 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-orange-500/30 transition-all duration-300 group">
                <contact.icon className="w-12 h-12 text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold mb-2 group-hover:text-orange-500 transition-colors">{contact.title}</h3>
                <p className="text-orange-500 font-semibold mb-2">{contact.info}</p>
                <p className="text-sm text-muted-foreground">{contact.description}</p>
                {contact.linkHref && contact.linkLabel && (
                  <a
                    href={contact.linkHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center justify-center gap-2 text-sm font-medium text-orange-500 hover:underline"
                  >
                    {contact.linkLabel}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
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
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> Apply</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't wait! Secure your future at DSU. Limited seats available.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 via-red-600 to-pink-500 text-white px-12 py-6 text-lg font-semibold rounded-2xl">
                Start Application
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-12 py-6 text-lg font-semibold rounded-2xl">
                Download Brochure
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {["No Application Fee", "Rolling Admissions", "Instant Support", "Secure Process"].map((badge, index) => (
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
