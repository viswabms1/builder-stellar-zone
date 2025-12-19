import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Users,
  BookOpen,
  Award,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Heart,
  Globe,
  Zap,
  Target,
  GraduationCap,
} from "lucide-react";

export default function Careers() {
  const careerCategories = [
    { icon: BookOpen, label: "Faculty & Research" },
    { icon: Briefcase, label: "Administration" },
    { icon: Users, label: "Student Support" },
    { icon: Zap, label: "Technical Teams" },
  ];

  const whyWorkHere = [
    "Contribute to India's premier AI-first university with cutting-edge research",
    "Collaborative environment fostering innovation and academic excellence",
    "Comprehensive professional development and career growth opportunities",
    "Inclusive, diverse campus culture with modern facilities",
    "Competitive compensation and comprehensive benefits package",
    "Opportunity to shape future leaders and innovators",
  ];

  const benefits = [
    { title: "Flexible Work Culture", description: "Work-life balance with flexible arrangements" },
    { title: "Professional Development", description: "Training programs, conferences, and certifications" },
    { title: "Health & Wellness", description: "Comprehensive health insurance and wellness programs" },
    { title: "Generous Leave Policy", description: "Annual leave, sick leave, and special consideration" },
    { title: "Retirement Benefits", description: "Structured retirement and pension schemes" },
    { title: "Campus Amenities", description: "State-of-the-art facilities and recreational areas" },
  ];

  const recruitmentProcess = [
    { step: 1, title: "Application", description: "Submit your resume and application online" },
    { step: 2, title: "Initial Review", description: "HR team reviews your qualifications" },
    { step: 3, title: "Interview", description: "Technical and behavioral assessment rounds" },
    { step: 4, title: "Final Selection", description: "Offer letter and onboarding" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative">
        <div className="h-[50vh] md:h-[65vh] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
            alt="Careers at DSU"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-3 w-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600/20 rounded-full border border-orange-500/30 mb-4">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-orange-300 font-display">Join Our Team</span>
            </div>
            <h1 className="headline-1 text-white leading-tight font-display">Build Your Future at DSU</h1>
            <p className="subheadline text-white/90 max-w-2xl mt-3 font-body">
              Become part of India's leading AI-first university and contribute to transforming education and innovation globally.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {careerCategories.map((category, i) => (
                <span key={i} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs backdrop-blur">
                  <category.icon className="w-3.5 h-3.5" /> {category.label}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://dsu.edu.in/apply-now/" target="_blank" rel="noreferrer">
                <Button className="bg-orange-600 text-white hover:bg-orange-700">
                  Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <a href="https://careers.dsu.edu.in/current-openings" target="_blank" rel="noreferrer">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  View Current Openings <Briefcase className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work at DSU */}
      <section className="px-3 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="headline-2 font-display mb-3">Why Work at DSU?</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto font-body">
              Join a community dedicated to academic excellence, innovation, and creating positive impact in the world.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyWorkHere.map((reason, idx) => (
              <Card key={idx} className="border border-border/50 bg-card/50 backdrop-blur-sm hover:border-orange-500/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <p className="text-foreground font-body">{reason}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Categories */}
      <section className="px-3 py-12 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="headline-2 font-display mb-3">Career Opportunities</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto font-body">
              Explore diverse roles across our institution and make a meaningful difference.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {careerCategories.map((category, idx) => (
              <Card key={idx} className="border border-border/50 bg-card/50 backdrop-blur-sm hover:border-orange-500/30 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="inline-flex w-fit p-2 rounded-lg bg-orange-600/10 mb-3">
                    <category.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg font-display">{category.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70 font-body">
                    {category.label === "Faculty & Research" && "Contribute to cutting-edge research and mentor the next generation"}
                    {category.label === "Administration" && "Support university operations and student success"}
                    {category.label === "Student Support" && "Guide students in their academic and personal growth"}
                    {category.label === "Technical Teams" && "Build and maintain our digital and physical infrastructure"}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-3 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="headline-2 font-display mb-3">Benefits & Perks</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto font-body">
              We invest in our team members' well-being and professional growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="border border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="inline-flex w-fit p-2 rounded-lg bg-orange-600/10 mb-2">
                    <Heart className="w-5 h-5 text-orange-600" />
                  </div>
                  <CardTitle className="text-base font-display">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70 font-body">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="px-3 py-12 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="headline-2 font-display mb-3">Our Recruitment Process</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto font-body">
              A transparent and fair process to find the right fit for our team.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {recruitmentProcess.map((item) => (
              <div key={item.step}>
                <Card className="border border-border/50 bg-card/50 backdrop-blur-sm h-full">
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-600 text-white font-bold mb-3">
                      {item.step}
                    </div>
                    <CardTitle className="text-base font-display">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/70 font-body">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-3 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="border border-orange-500/30 bg-gradient-to-br from-orange-600/10 to-orange-600/5 backdrop-blur-sm">
            <CardContent className="pt-8">
              <div className="text-center">
                <h2 className="headline-3 font-display mb-3">Ready to Join DSU?</h2>
                <p className="text-foreground/80 mb-6 max-w-2xl mx-auto font-body">
                  Explore open positions and submit your application. We look forward to meeting talented professionals who share our vision.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <a href="https://dsu.edu.in/careers" target="_blank" rel="noreferrer">
                    <Button className="bg-orange-600 text-white hover:bg-orange-700">
                      Explore Careers Portal <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                  <a href="https://careers.dsu.edu.in/current-openings" target="_blank" rel="noreferrer">
                    <Button variant="outline" className="border-orange-500/50 hover:bg-orange-600/10">
                      Current Openings
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-3 py-12 border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="headline-3 font-display mb-4">Have Questions?</h2>
          <p className="text-foreground/80 mb-6 font-body">
            Contact our HR team for any inquiries about career opportunities at DSU.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="px-4 py-2 rounded-lg bg-card/50 border border-border/50">
              <p className="text-sm text-foreground/70 font-body">Email</p>
              <p className="font-medium text-orange-600">careers@dsu.edu.in</p>
            </div>
            <div className="px-4 py-2 rounded-lg bg-card/50 border border-border/50">
              <p className="text-sm text-foreground/70 font-body">Phone</p>
              <p className="font-medium">+91-XXXX-XXXX-XXX</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
