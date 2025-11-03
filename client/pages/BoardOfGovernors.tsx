import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";

export default function BoardOfGovernors() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-orange-500/10 via-red-600/5 to-background">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/10 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/20 mb-8">
            <Users className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-sm font-medium text-orange-500">
              Governance
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Board of Governors
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Strategic leadership driving the university's vision, mission, and institutional excellence.
          </p>
        </div>
      </section>

      {/* Board Functions Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Board Functions & Responsibilities
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <span className="text-orange-500 font-bold">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Strategic Governance
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Providing strategic direction and institutional oversight
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <span className="text-orange-500 font-bold">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Policy Development
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Development and approval of university policies and programs
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <span className="text-orange-500 font-bold">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Financial Oversight
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Financial oversight and resource allocation management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-orange-500/5 via-red-600/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Members
              </span>
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              A distinguished group of educational leaders, administrators, and government representatives
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50 bg-orange-500/5">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Sl. No</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Position</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-muted-foreground">1</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Dr. D. Hemachandra Sagar</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Chancellor, DSU</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Chairperson</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-muted-foreground">2</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Dr. D. Premachandra Sagar</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Pro Chancellor, DSU</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-muted-foreground">3</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Prof. B. S. Satyanarayana</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Vice Chancellor, DSU</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-muted-foreground">4</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Principal Secretary / Secretary to the State Government in Higher Education</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Government Nominee</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-muted-foreground">5</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Principal Secretary / Secretary to the State Government in Medical Education</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Government Nominee</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-muted-foreground">6</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Sri K. Jairaj, IAS (Retd.)</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Retired Additional Chief Secretary to Government</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">GOK Nominee</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-muted-foreground">7</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Ms. Tintisha Sagar</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Dayananda Sagar Institutions</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Sponsoring Body Nominee</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-muted-foreground">8</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Sri Rohan Prem Sagar</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Dayananda Sagar Institutions</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Sponsoring Body Nominee</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-muted-foreground">9</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Prof. R Janardhan</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Pro Vice Chancellor, DSU</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-muted-foreground">10</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Vacant</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">UGC Nominee</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Member</td>
                  </tr>
                  <tr className="hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-muted-foreground">11</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Dr. Puttamadappa C</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Registrar, DSU</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Secretary</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Learn More About Leadership
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Explore the complete leadership structure of Dayananda Sagar University.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about/leadership">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-red-600 hover:to-orange-500 text-white px-8 py-6 font-semibold rounded-2xl"
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
