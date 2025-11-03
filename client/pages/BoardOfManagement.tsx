import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";

export default function BoardOfManagement() {
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
              Administration
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Board of Management
            </span>
          </h1>

          <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Efficient management and operational oversight ensuring the university's smooth functioning and institutional growth.
          </p>
        </div>
      </section>

      {/* Board Overview Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Board Responsibilities
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <span className="text-orange-500 font-bold">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Operational Management
                  </h3>
                  <p className="text-sm text-foreground">
                    Overseeing the day-to-day administrative and operational functions of the university
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
                    Resource Allocation
                  </h3>
                  <p className="text-sm text-foreground">
                    Managing institutional resources and ensuring effective utilization of assets
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
                    Policy Implementation
                  </h3>
                  <p className="text-sm text-foreground">
                    Executing policies and decisions made by the Board of Governors
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <span className="text-orange-500 font-bold">4</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Academic Support
                  </h3>
                  <p className="text-sm text-foreground">
                    Supporting academic initiatives and institutional development programs
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
                Board Members
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Experienced administrators and academic leaders managing institutional operations
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50 bg-orange-500/5">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Sl. No</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Address/Designation</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status in Authority</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">1</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Dr. D. Premachandra Sagar</td>
                    <td className="px-6 py-4 text-sm text-foreground">Pro Chancellor, DSU Nominee of Sponsoring Body</td>
                    <td className="px-6 py-4 text-sm text-foreground">Observer</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">2</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Dr B S Satyanarayana</td>
                    <td className="px-6 py-4 text-sm text-foreground">Vice Chancellor, DSU</td>
                    <td className="px-6 py-4 text-sm text-foreground">Chairperson</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">3</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Prof. Janardhan R</td>
                    <td className="px-6 py-4 text-sm text-foreground">Pro Vice Chancellor, DSU</td>
                    <td className="px-6 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">4</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Ms. Tintisha Sagar</td>
                    <td className="px-6 py-4 text-sm text-foreground">Nominee of Sponsoring Body</td>
                    <td className="px-6 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">5</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Dr. Udaya Kumar Reddy K R</td>
                    <td className="px-6 py-4 text-sm text-foreground">Dean, SOE, DSU & Nominee of Vice Chancellor, DSU</td>
                    <td className="px-6 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">6</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Dr. Pushpa Sarkar</td>
                    <td className="px-6 py-4 text-sm text-foreground">Dean, School of Health Sciences (SHS), DSU; Nominee of Vice Chancellor, DSU</td>
                    <td className="px-6 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">7</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Dr. Puttamadappa C</td>
                    <td className="px-6 py-4 text-sm text-foreground">Registrar, DSU</td>
                    <td className="px-6 py-4 text-sm text-foreground">Secretary</td>
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
          <div className="bg-gradient-to-r from-orange-500/10 via-red-600/10 to-pink-500/10 rounded-3xl p-12 border border-orange-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Learn More About Our Leadership
            </h2>
            <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
              Explore the governance structure and leadership teams driving DSU's vision and excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/about/board-of-governors">
                <Button
                  size="lg"
                  className="bg-brand-gradient hover:opacity-90 text-foreground px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300"
                >
                  Board of Governors
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/about/leadership">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-orange-500/30 hover:bg-orange-500/10 px-8 py-6 text-lg font-semibold rounded-2xl"
                >
                  Leadership
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
