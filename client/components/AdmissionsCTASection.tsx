import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

export function AdmissionsCTASection() {
  return (
    <section className="px-3 py-0 relative bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-brand-magenta/10 via-brand-orange/10 to-brand-blue/10 rounded-3xl p-8 md:p-12 border border-brand-magenta/20 shadow-xl">
          <h2 className="headline-2 mb-6">
            Ready to
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              {" "}
              Build Your Future with AI
            </span>
            ?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="https://admissions.dsu.edu.in/"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                size="lg"
                className="bg-brand-gradient hover:opacity-90 hover:shadow-lg hover:shadow-brand-magenta/25 text-foreground px-12 py-6 title-sm rounded-2xl transition-all duration-300 group"
              >
                Apply for 2026 Admissions
                <GraduationCap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Merit-Based Scholarships Available",
              "Industry-Aligned Curriculum & Partnerships",
            ].map((badge, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-3 py-1 body-sm font-medium"
              >
                {badge}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
