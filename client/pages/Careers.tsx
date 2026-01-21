import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase } from "lucide-react";

export default function Careers() {
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
            <h1 className="headline-1 text-white leading-tight font-display">Careers at DSU</h1>
            <p className="subheadline text-white/90 max-w-2xl mt-3 font-body">
              Join our team and be part of India's premier AI-first university.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://careers.dsu.edu.in/current-openings" target="_blank" rel="noreferrer">
                <Button className="bg-orange-600 text-white hover:bg-orange-700">
                  Current Openings <Briefcase className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <a href="https://dsu.edu.in/apply-now/" target="_blank" rel="noreferrer">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="px-3 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="headline-2 font-display mb-6">Current Openings</h2>
          
          <div className="bg-card/50 border border-border/50 rounded-lg p-10 backdrop-blur-sm">
            <h3 className="text-xl font-display mb-4">Careers at DSU</h3>
            <p className="text-foreground/80 font-body mb-8">
              We are currently hiring for various positions across the university.
            </p>
            
            <div className="space-y-6">
              <div>
                <p className="text-lg font-semibold text-foreground mb-3">Write to us at:</p>
                <a 
                  href="mailto:careers@dsu.edu.in" 
                  className="text-orange-600 hover:text-orange-700 font-medium text-lg transition-colors"
                >
                  careers@dsu.edu.in
                </a>
              </div>

              <div className="pt-6 border-t border-border/50">
                <a href="https://dsu.edu.in/apply-now/" target="_blank" rel="noreferrer">
                  <Button className="bg-orange-600 text-white hover:bg-orange-700 px-8 py-6 text-base">
                    Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <a 
              href="https://careers.dsu.edu.in/current-openings" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium transition-colors"
            >
              View all current openings <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
