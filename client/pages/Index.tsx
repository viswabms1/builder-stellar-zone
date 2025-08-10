import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Rocket, 
  Heart, 
  Star,
  Palette,
  Code,
  Users,
  TrendingUp
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-neon-purple rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-neon-pink rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-neon-blue rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: "4s" }}></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-card rounded-full border border-neon-purple/20 mb-8 animate-glow-pulse">
            <Sparkles className="w-4 h-4 text-neon-purple mr-2" />
            <span className="text-sm font-medium bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
              Now Live • Experience the Future
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
              Create
            </span>
            <br />
            <span className="text-foreground">Something</span>
            <br />
            <span className="bg-gradient-to-r from-neon-green via-neon-yellow to-neon-orange bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
              Legendary
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the revolution of creators, builders, and dreamers who are shaping the digital landscape with 
            <span className="text-neon-purple font-semibold"> next-gen tools</span> and 
            <span className="text-neon-pink font-semibold"> unlimited creativity</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-purple text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-neon-purple/25 transition-all duration-300 group"
            >
              Start Creating
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300"
            >
              Watch Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "10M+", label: "Creators", icon: Users },
              { number: "500K+", label: "Projects", icon: Code },
              { number: "99.9%", label: "Uptime", icon: TrendingUp },
              { number: "24/7", label: "Support", icon: Heart },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <stat.icon className="w-8 h-8 text-neon-purple mx-auto mb-2 group-hover:text-neon-pink transition-colors" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="px-6 py-20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">
                Why Everyone's
              </span>
              <span className="text-foreground"> Switching</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with tools designed for the next generation of creators
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Build and deploy in seconds, not hours. Our optimized infrastructure ensures your ideas come to life instantly.",
                color: "neon-yellow",
                delay: "0s"
              },
              {
                icon: Palette,
                title: "AI-Powered Design",
                description: "Let our AI help you create stunning designs that perfectly match your vision and brand aesthetic.",
                color: "neon-purple",
                delay: "0.2s"
              },
              {
                icon: Rocket,
                title: "Scale Infinitely",
                description: "From startup to unicorn, our platform grows with you. Handle millions of users without breaking a sweat.",
                color: "neon-blue",
                delay: "0.4s"
              },
              {
                icon: Star,
                title: "Premium Quality",
                description: "Every component, every interaction, every pixel is crafted to perfection by our design-obsessed team.",
                color: "neon-pink",
                delay: "0.6s"
              },
              {
                icon: Users,
                title: "Community Driven",
                description: "Join thousands of creators sharing templates, components, and inspiration in our vibrant community.",
                color: "neon-green",
                delay: "0.8s"
              },
              {
                icon: Heart,
                title: "Made with Love",
                description: "Every feature is built with passion and care, ensuring you have the best creative experience possible.",
                color: "neon-orange",
                delay: "1s"
              },
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-neon-purple/30 transition-all duration-300 group hover:shadow-lg hover:shadow-neon-purple/10 hover:-translate-y-2"
                style={{ animationDelay: feature.delay }}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-2xl bg-${feature.color}/10 flex items-center justify-center mb-4 group-hover:bg-${feature.color}/20 transition-colors`}>
                    <feature.icon className={`w-6 h-6 text-${feature.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-neon-purple transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="px-6 py-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-neon-purple/10 via-neon-pink/10 to-neon-blue/10 rounded-3xl p-12 border border-neon-purple/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to 
              <span className="bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent"> Level Up</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join millions of creators who've already made the switch to the future of digital creation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue hover:shadow-lg hover:shadow-neon-purple/25 text-white px-12 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 group"
              >
                Get Started Free
                <Rocket className="w-5 h-5 ml-2 group-hover:translate-y-[-2px] transition-transform" />
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {["No Credit Card", "14-Day Free Trial", "Cancel Anytime"].map((badge, index) => (
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
