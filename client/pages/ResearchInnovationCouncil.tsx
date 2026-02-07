import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ResearchInnovationCouncil() {
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

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-display text-foreground">
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Research & Innovation Council
            </span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-foreground mb-8 leading-relaxed max-w-3xl mx-auto font-body">
            Driving research excellence and fostering innovation initiatives across the university and beyond.
          </p>
        </div>
      </section>

      {/* Council Functions Section */}
      <section className="px-3 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12 hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300">
            <h2 className="headline-2 mb-8 font-display">
              <span className="text-foreground">Council </span>
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
                    Research Strategy
                  </h3>
                  <p className="text-sm text-foreground">
                    Developing and implementing comprehensive research strategies
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
                    Innovation Initiatives
                  </h3>
                  <p className="text-sm text-foreground">
                    Promoting innovation and entrepreneurship across the institution
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
                    Collaboration Facilitation
                  </h3>
                  <p className="text-sm text-foreground">
                    Fostering partnerships with industry and academic institutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Council Members Section */}
      <section className="px-3 py-10 bg-gradient-to-br from-orange-500/5 via-red-600/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Members
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Leading researchers and innovators driving academic advancement and collaborative excellence
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50 bg-orange-500/5">
                    <th className="px-3 py-4 text-left text-sm font-semibold text-foreground">Sl. No</th>
                    <th className="px-3 py-4 text-left text-sm font-semibold text-foreground">Name</th>
                    <th className="px-3 py-4 text-left text-sm font-semibold text-foreground">Position</th>
                    <th className="px-3 py-4 text-left text-sm font-semibold text-foreground">Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-3 py-4 text-sm text-foreground">1</td>
                    <td className="px-3 py-4 text-sm font-medium text-foreground">Dr B S Satyanarayana</td>
                    <td className="px-3 py-4 text-sm text-foreground">Vice Chancellor, DSU</td>
                    <td className="px-3 py-4 text-sm text-foreground">Chairman</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-3 py-4 text-sm text-foreground">2</td>
                    <td className="px-3 py-4 text-sm font-medium text-foreground">Prof Janardhan R</td>
                    <td className="px-3 py-4 text-sm text-foreground">Pro Vice Chancellor, DSU</td>
                    <td className="px-3 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-3 py-4 text-sm text-foreground">3</td>
                    <td className="px-3 py-4 text-sm font-medium text-foreground">Dr Prakash S</td>
                    <td className="px-3 py-4 text-sm text-foreground">Pro Vice Chancellor, DSU</td>
                    <td className="px-3 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-3 py-4 text-sm text-foreground">4</td>
                    <td className="px-3 py-4 text-sm font-medium text-foreground">Dr Y N Srikant</td>
                    <td className="px-3 py-4 text-sm text-foreground">Dean, Engineering, IISC, Bengaluru</td>
                    <td className="px-3 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-3 py-4 text-sm text-foreground">5</td>
                    <td className="px-3 py-4 text-sm font-medium text-foreground">Dr Pradeep V Desai</td>
                    <td className="px-3 py-4 text-sm text-foreground">CEO, Entrepreneurship Centre IISC Campus, Bengaluru</td>
                    <td className="px-3 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-3 py-4 text-sm text-foreground">6</td>
                    <td className="px-3 py-4 text-sm font-medium text-foreground">Dr Lokesh Boregowda</td>
                    <td className="px-3 py-4 text-sm text-foreground">Director, Samsung R&D Institute, Bengaluru</td>
                    <td className="px-3 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-3 py-4 text-sm text-foreground">7</td>
                    <td className="px-3 py-4 text-sm font-medium text-foreground">Dr V Ramasubramanian</td>
                    <td className="px-3 py-4 text-sm text-foreground">Professor, IIITB, Bengaluru</td>
                    <td className="px-3 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-3 py-4 text-sm text-foreground">8</td>
                    <td className="px-3 py-4 text-sm font-medium text-foreground">Dr Kumar N Sivarajan</td>
                    <td className="px-3 py-4 text-sm text-foreground">CTO, Tejas Networks, Bengaluru</td>
                    <td className="px-3 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-3 py-4 text-sm text-foreground">9</td>
                    <td className="px-3 py-4 text-sm font-medium text-foreground">Dr Paturu Kondaiah</td>
                    <td className="px-3 py-4 text-sm text-foreground">INSA Senior Scientist, Dept of Molecular Reproduction, IISc, Bengaluru</td>
                    <td className="px-3 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-3 py-4 text-sm text-foreground">10</td>
                    <td className="px-3 py-4 text-sm font-medium text-foreground">Dr Mahesh Pavan Sathavalli</td>
                    <td className="px-3 py-4 text-sm text-foreground">Program Manager, Mphasis, Bengaluru</td>
                    <td className="px-3 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-3 py-4 text-sm text-foreground">11</td>
                    <td className="px-3 py-4 text-sm font-medium text-foreground">Dr H Rajashekar</td>
                    <td className="px-3 py-4 text-sm text-foreground">Professor of Commerce, Former I/C, Vice Chancellor, University of Mysore</td>
                    <td className="px-3 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-3 py-4 text-sm text-foreground">12</td>
                    <td className="px-3 py-4 text-sm font-medium text-foreground">Dr Puttamadappa C</td>
                    <td className="px-3 py-4 text-sm text-foreground">Registrar, DSU</td>
                    <td className="px-3 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-3 py-4 text-sm text-foreground">13</td>
                    <td className="px-3 py-4 text-sm font-medium text-foreground">Dr Udaya Kumar Reddy K R</td>
                    <td className="px-3 py-4 text-sm text-foreground">Dean-School of Engineering, DSU</td>
                    <td className="px-3 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-3 py-4 text-sm text-foreground">14</td>
                    <td className="px-3 py-4 text-sm font-medium text-foreground">Dr Prashanth Kumar M</td>
                    <td className="px-3 py-4 text-sm text-foreground">Dean & Principal- CDSIMER, DSU</td>
                    <td className="px-3 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-3 py-4 text-sm text-foreground">15</td>
                    <td className="px-3 py-4 text-sm font-medium text-foreground">Dr Sunil S More</td>
                    <td className="px-3 py-4 text-sm text-foreground">Dean, School of Basic & Applied Sciences, DSU</td>
                    <td className="px-3 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-3 py-4 text-sm text-foreground">16</td>
                    <td className="px-3 py-4 text-sm font-medium text-foreground">Dr Pushpa Sarkar</td>
                    <td className="px-3 py-4 text-sm text-foreground">Dean, School of Health Sciences, DSU</td>
                    <td className="px-3 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-3 py-4 text-sm text-foreground">17</td>
                    <td className="px-3 py-4 text-sm font-medium text-foreground">Capt. A. Nagaraj Subbarao</td>
                    <td className="px-3 py-4 text-sm text-foreground">Dean, School of Commerce and Management Studies, DSU</td>
                    <td className="px-3 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-3 py-4 text-sm text-foreground">18</td>
                    <td className="px-3 py-4 text-sm font-medium text-foreground">Prof Dinesh Kulkarni</td>
                    <td className="px-3 py-4 text-sm text-foreground">Dean, School of Design & Digital Transmedia, DSU</td>
                    <td className="px-3 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-3 py-4 text-sm text-foreground">19</td>
                    <td className="px-3 py-4 text-sm font-medium text-foreground">Dr Sai Prasad K</td>
                    <td className="px-3 py-4 text-sm text-foreground">Dean, College of Journalism and Mass Communication</td>
                    <td className="px-3 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-3 py-4 text-sm text-foreground">20</td>
                    <td className="px-3 py-4 text-sm font-medium text-foreground">Dr Truptha Shankar</td>
                    <td className="px-3 py-4 text-sm text-foreground">Dean, School of Commerce and Management Studies, (UG) DSU</td>
                    <td className="px-3 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-3 py-4 text-sm text-foreground">21</td>
                    <td className="px-3 py-4 text-sm font-medium text-foreground">Dr Senthil S</td>
                    <td className="px-3 py-4 text-sm text-foreground">Dean, School of Computer Application, DSU</td>
                    <td className="px-3 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-3 py-4 text-sm text-foreground">22</td>
                    <td className="px-3 py-4 text-sm font-medium text-foreground">Dr Kiran Dennis Gardner</td>
                    <td className="px-3 py-4 text-sm text-foreground">Dean-School of Law, DSU</td>
                    <td className="px-3 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="hover:bg-orange-500/5 transition-colors">
                    <td className="px-3 py-4 text-sm text-foreground">23</td>
                    <td className="px-3 py-4 text-sm font-medium text-foreground">Dr Sudarshan T S B</td>
                    <td className="px-3 py-4 text-sm text-foreground">Dean, Research & Development, DSU</td>
                    <td className="px-3 py-4 text-sm text-foreground">Secretary</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-3 py-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Learn More About Leadership
          </h2>
          <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
            Explore the complete leadership structure of Dayananda Sagar University.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about/leadership">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-red-600 hover:to-orange-500 text-foreground px-8 py-6 font-semibold rounded-2xl"
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
