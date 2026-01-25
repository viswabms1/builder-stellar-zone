import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

export function AdmissionsCTASection() {
  return (
    <section className="px-3 py-0 relative bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-brand-blue/10 rounded-3xl p-8 md:p-12 border border-brand-blue/20 shadow-xl">
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
                className="bg-brand-blue hover:bg-brand-blue/90 hover:shadow-lg hover:shadow-brand-blue/25 text-white px-12 py-6 text-lg font-semibold font-display rounded-2xl transition-all duration-300 group"
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
                className="px-3 py-1 text-xs font-medium font-body bg-white text-slate-900 dark:bg-white dark:text-slate-900 hover:bg-white/90 dark:hover:bg-white/90"
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
