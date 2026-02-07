import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

export default function AcademicCouncil() {
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

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <Badge className="bg-brand-blue/15 text-brand-blue justify-center mb-8">
            Governance
          </Badge>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-display text-foreground">
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Academic Council
            </span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-foreground mb-8 leading-relaxed max-w-3xl mx-auto font-body">
            Leading Dayananda Sagar University through academic excellence and curriculum development across all schools and institutions.
          </p>
        </div>
      </section>

      {/* Council Functions Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Council Functions & Responsibilities
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
                    Academic Matters
                  </h3>
                  <p className="text-sm text-foreground">
                    Oversight of academic programs and educational standards
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
                    Curriculum Development
                  </h3>
                  <p className="text-sm text-foreground">
                    Development and approval of curricula and study programs
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
                    Quality Assurance
                  </h3>
                  <p className="text-sm text-foreground">
                    Ensuring academic excellence and quality standards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Council Members Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-orange-500/5 via-red-600/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Members
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Distinguished academics and industry leaders guiding the university's academic vision
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
                    <td className="px-6 py-4 text-sm text-foreground">1</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Dr B S Satyanarayana</td>
                    <td className="px-6 py-4 text-sm text-foreground">Vice Chancellor, DSU</td>
                    <td className="px-6 py-4 text-sm text-foreground">Chairman</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">2</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Prof Janardhan R</td>
                    <td className="px-6 py-4 text-sm text-foreground">Pro Vice Chancellor, DSU</td>
                    <td className="px-6 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">3</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Dr Prakash S</td>
                    <td className="px-6 py-4 text-sm text-foreground">Pro Vice Chancellor, DSU</td>
                    <td className="px-6 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">4</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Prof. Kithiganahalli Narayanaswamy Balaji</td>
                    <td className="px-6 py-4 text-sm text-foreground">Prof. Dept of Microbiology & Cell Biology-IISC</td>
                    <td className="px-6 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">5</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Dr Larissa Martha Sams</td>
                    <td className="px-6 py-4 text-sm text-foreground">Principal, Laxmi Memorial College of Nursing, Mangalore</td>
                    <td className="px-6 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">6</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Prof S Ramachandra Setty</td>
                    <td className="px-6 py-4 text-sm text-foreground">Director(R&D), RGUHS</td>
                    <td className="px-6 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">7</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Dr Sini Joun</td>
                    <td className="px-6 py-4 text-sm text-foreground">Vice Principal, Christ Academy, Institute of Law, Bangalore</td>
                    <td className="px-6 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">8</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Dr H Rajashekar</td>
                    <td className="px-6 py-4 text-sm text-foreground">Prof of Commerce and Director, EMRC(UGC), UOM</td>
                    <td className="px-6 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">9</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Dr Arindam Sen</td>
                    <td className="px-6 py-4 text-sm text-foreground">Director, Digital Transformation- HCL Limited</td>
                    <td className="px-6 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">10</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Dr Raghunandan Srinath</td>
                    <td className="px-6 py-4 text-sm text-foreground">Principal Member of Technical Staff, AIoT Building Automation Graylinx Pvt Ltd.</td>
                    <td className="px-6 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">11</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Dr Ramakanth Kumar P</td>
                    <td className="px-6 py-4 text-sm text-foreground">Prof & Head, CSE Dept, RVCE, Bangalore</td>
                    <td className="px-6 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">12</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Dr Appa Rao</td>
                    <td className="px-6 py-4 text-sm text-foreground">CMD, Centum Electronics Limited, Bangalore</td>
                    <td className="px-6 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">13</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Ms. Binita Desai</td>
                    <td className="px-6 py-4 text-sm text-foreground">Designer, Dhirubhai Ambani Institute of Information and Communication Technology</td>
                    <td className="px-6 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">14</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Dr M K Sudarshan</td>
                    <td className="px-6 py-4 text-sm text-foreground">Ex Director, Ret Dean / Principal, KIMS, Bangalore</td>
                    <td className="px-6 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">15</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Ms. Pranathi Mirale Chandu</td>
                    <td className="px-6 py-4 text-sm text-foreground">Trans Lab Pvt Ltd.</td>
                    <td className="px-6 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">16</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Mr. Irol Furtado</td>
                    <td className="px-6 py-4 text-sm text-foreground">IBM</td>
                    <td className="px-6 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">17</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Dr Uday Kumar Reddy K R</td>
                    <td className="px-6 py-4 text-sm text-foreground">Dean- School of Engineering, DSU</td>
                    <td className="px-6 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">18</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Dr Prashanth Kumar M</td>
                    <td className="px-6 py-4 text-sm text-foreground">Dean & Principal Dr.CDSIMER, DSU</td>
                    <td className="px-6 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">19</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Dr Sunil More</td>
                    <td className="px-6 py-4 text-sm text-foreground">Dean, School of Basic & Applied Sciences, DSU</td>
                    <td className="px-6 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">20</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Dr Pushpa Sarkar</td>
                    <td className="px-6 py-4 text-sm text-foreground">Dean, School of Health Sciences, DSU</td>
                    <td className="px-6 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">21</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Dr. Capt A Nagaraj Subbarao</td>
                    <td className="px-6 py-4 text-sm text-foreground">Dean, School of Commerce and Management Studies (PG), DSU</td>
                    <td className="px-6 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">22</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Prof Dinesh Kulkarni</td>
                    <td className="px-6 py-4 text-sm text-foreground">Dean, School of Design & Digital Transmedia, DSU</td>
                    <td className="px-6 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">23</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Dr Sai Prasad K</td>
                    <td className="px-6 py-4 text-sm text-foreground">Dean, College of Journalism and Mass Communications, DSU</td>
                    <td className="px-6 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">24</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Dr. Truptha Shankar</td>
                    <td className="px-6 py-4 text-sm text-foreground">Dean, School of Commerce and Management Studies (UG), DSU</td>
                    <td className="px-6 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">25</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Dr Senthil S</td>
                    <td className="px-6 py-4 text-sm text-foreground">Dean, School of Computer Application, DSU</td>
                    <td className="px-6 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">26</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Dr Kiran Dennis Gardner</td>
                    <td className="px-6 py-4 text-sm text-foreground">Dean, School of Law, DSU</td>
                    <td className="px-6 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">27</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Dr Sudarshan T S B</td>
                    <td className="px-6 py-4 text-sm text-foreground">Dean – Research and Innovation, DSU</td>
                    <td className="px-6 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">28</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Dr Sunil S More</td>
                    <td className="px-6 py-4 text-sm text-foreground">Controller of Examinations, DSU</td>
                    <td className="px-6 py-4 text-sm text-foreground">Member</td>
                  </tr>
                  <tr className="hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">29</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">Dr Puttamadappa C</td>
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
