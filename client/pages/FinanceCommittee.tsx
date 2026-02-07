import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function FinanceCommittee() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-brand-blue/10 via-brand-magenta/5 to-background">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue/10 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-brand-magenta/10 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3 text-center">
          <Badge className="bg-brand-blue/15 text-brand-blue justify-center mb-8">
            Governance
          </Badge>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 leading-tight font-display text-foreground">
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Finance Committee
            </span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-foreground mb-8 leading-relaxed max-w-3xl mx-auto font-body">
            Senior management team overseeing financial planning and resource allocation for the university.
          </p>
        </div>
      </section>

      {/* Committee Functions Section */}
      <section className="px-3 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12 hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300">
            <h2 className="headline-2 mb-6 font-display">
              <span className="text-foreground">Committee </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Functions & Responsibilities
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center">
                    <span className="text-brand-blue font-bold">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Financial Planning
                  </h3>
                  <p className="text-sm text-foreground">
                    Strategic financial planning and budget development
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center">
                    <span className="text-brand-blue font-bold">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Financial Oversight
                  </h3>
                  <p className="text-sm text-foreground">
                    Monitoring financial performance and compliance
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center">
                    <span className="text-brand-blue font-bold">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Resource Allocation
                  </h3>
                  <p className="text-sm text-foreground">
                    Efficient allocation and management of financial resources
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Committee Members Section */}
      <section className="px-3 py-20 bg-gradient-to-br from-brand-blue/5 via-brand-magenta/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 font-display">
              <span className="text-foreground">Meet the </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Members
              </span>
            </h2>
            <p className="text-base sm:text-xl md:text-2xl text-foreground max-w-3xl mx-auto font-body">
              A team of senior administrators and finance professionals managing university finances
            </p>
          </div>

          <div className="bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50 bg-brand-blue/5">
                    <th className="px-3 py-4 text-left text-sm font-semibold text-foreground">Sl. No</th>
                    <th className="px-3 py-4 text-left text-sm font-semibold text-foreground">Name</th>
                    <th className="px-3 py-4 text-left text-sm font-semibold text-foreground">Position</th>
                    <th className="px-3 py-4 text-left text-sm font-semibold text-foreground">Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/30 hover:bg-brand-blue/5 transition-colors">
                    <td className="px-3 py-4 text-sm text-foreground">1</td>
                    <td className="px-3 py-4 text-sm font-medium text-foreground">Dr. D. Hemachandra Sagar</td>
                    <td className="px-3 py-4 text-sm text-foreground">Chancellor, DSU</td>
                    <td className="px-3 py-4 text-sm text-foreground">Chairperson (or his nominee)</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-brand-blue/5 transition-colors">
                    <td className="px-3 py-4 text-sm text-foreground">2</td>
                    <td className="px-3 py-4 text-sm font-medium text-foreground">Dr. D. Premachandra Sagar</td>
                    <td className="px-3 py-4 text-sm text-foreground">Pro Chancellor, DSU</td>
                    <td className="px-3 py-4 text-sm text-foreground">Nominee of Sponsoring Body</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-brand-blue/5 transition-colors">
                    <td className="px-3 py-4 text-sm text-foreground">3</td>
                    <td className="px-3 py-4 text-sm font-medium text-foreground">Prof. B. S. Satyanarayana</td>
                    <td className="px-3 py-4 text-sm text-foreground">Vice Chancellor, DSU</td>
                    <td className="px-3 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-brand-blue/5 transition-colors">
                    <td className="px-3 py-4 text-sm text-foreground">4</td>
                    <td className="px-3 py-4 text-sm font-medium text-foreground">Dr. Puttamadappa C</td>
                    <td className="px-3 py-4 text-sm text-foreground">Registrar, DSU</td>
                    <td className="px-3 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="hover:bg-brand-blue/5 transition-colors">
                    <td className="px-3 py-4 text-sm text-foreground">5</td>
                    <td className="px-3 py-4 text-sm font-medium text-foreground">Mr. D. Ramanathan</td>
                    <td className="px-3 py-4 text-sm text-foreground">Chief Finance Officer, DSU</td>
                    <td className="px-3 py-4 text-sm text-foreground">Member</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-3 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="headline-2 mb-6 font-display">
            <span className="text-foreground">Learn More About </span>
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Leadership
            </span>
          </h2>
          <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto font-body">
            Explore the complete leadership structure of Dayananda Sagar University.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about/leadership">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#0088FF] via-[#FFD700] to-[#FF6B00] hover:from-[#FF6B00] hover:via-[#FFD700] hover:to-[#0088FF] text-foreground px-8 py-6 font-semibold rounded-2xl animate-gradient bg-[length:200%_auto]"
              >
                Back to Leadership
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
