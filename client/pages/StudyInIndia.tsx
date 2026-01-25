import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  MessageCircle,
  ArrowRight,
  Globe,
} from "lucide-react";
import { useTheme } from "@/providers/theme-provider";

export default function StudyInIndia() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="space-y-6">
            <div className="flex justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F9b586b9e0c27414a93c50ba6639f9891?format=webp&width=800"
                alt="Study In India"
                className="max-w-xs md:max-w-md h-auto"
              />
            </div>
            <div>
              <h1 className="headline-1 mb-4 text-gray-900 dark:text-gray-100">
                Study In India
              </h1>
              <p className="subheadline text-gray-700 dark:text-gray-300 font-semibold">
                LEARN | DISCOVER | INNOVATE
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4 bg-orange-500/20 text-orange-600">
            Global Opportunity
          </Badge>
          <h2 className="headline-2 mb-8">
            Welcome to Dayananda Sagar University
          </h2>
          
          <div className="space-y-6 body-lg text-foreground/80 leading-relaxed">
            <p>
              Dayananda Sagar University extends a warm invitation to international students to apply for our diverse undergraduate and postgraduate programs across multiple disciplines. At DSU, we seek students from around the world who demonstrate a commitment to academic excellence, creativity, and innovation.
            </p>
            
            <p>
              In collaboration with the Government of India's Study in India initiative, DSU proudly offers a world-class education with the guiding philosophy of <span className="italic font-semibold text-foreground">"वसधु वै कुटुंबकम | Vasudhaiva Kutumbakam"</span> – <span className="italic">"The world is one family."</span> Our inclusive and vibrant community is a place where diverse perspectives meet, enriching each student's learning experience.
            </p>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mt-8">
              <p className="mb-4">
                For more information on e-Student VISA, <a href="https://studyinindia.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold underline">Click Here</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-orange-500/5 via-yellow-500/5 to-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="headline-2 mb-12 text-center">
            Programs Offered at DSU
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "School of Engineering",
                description: "Innovation-driven education for the tech-savvy world.",
                color: "blue",
                href: "/academics/engineering",
              },
              {
                title: "School of Law",
                description: "Training tomorrow's legal minds with a focus on justice and impact.",
                color: "purple",
                href: "/academics/law",
              },
              {
                title: "School of Medicine",
                description: "Excellence in healthcare education and leadership.",
                color: "red",
                href: "/academics/health-sciences/cdsimer",
              },
              {
                title: "School of Basic and Applied Science",
                description: "Practical approaches rooted in foundational sciences.",
                color: "green",
                href: "/academics/basic-applied-sciences",
              },
              {
                title: "School of Health Sciences",
                description: "Equipping future leaders in global health and wellness.",
                color: "emerald",
                href: "/academics/health-sciences",
              },
              {
                title: "School of Computer Applications",
                description: "Cutting-edge IT education for the digital age.",
                color: "indigo",
                href: "/academics/computer-applications",
              },
              {
                title: "School of Commerce and Management",
                description: "Shaping tomorrow's business and industry leaders.",
                color: "amber",
                href: "/academics/management-studies",
              },
              {
                title: "School of Arts, Design, and Humanities",
                description: "Cultivating creativity, culture, and critical thinking.",
                color: "pink",
                href: "/academics/humanities-social-sciences",
              },
              {
                title: "School of Design & Digital Trans-Media",
                description: "Bringing creativity to reality.",
                color: "violet",
                href: "/academics/design/bdesign",
              },
            ].map((program, idx) => {
              const colorMap: Record<string, { bg: string; border: string; text: string }> = {
                blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-900" },
                purple: { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-900" },
                red: { bg: "bg-red-50", border: "border-red-200", text: "text-red-900" },
                green: { bg: "bg-green-50", border: "border-green-200", text: "text-green-900" },
                emerald: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-900" },
                indigo: { bg: "bg-indigo-50", border: "border-indigo-200", text: "text-indigo-900" },
                amber: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-900" },
                pink: { bg: "bg-pink-50", border: "border-pink-200", text: "text-pink-900" },
                violet: { bg: "bg-violet-50", border: "border-violet-200", text: "text-violet-900" },
              };
              const colors = colorMap[program.color];
              return (
                <Link key={idx} to={program.href}>
                  <Card className={`${colors.bg} border-2 ${colors.border} hover:shadow-lg transition-shadow cursor-pointer h-full`}>
                    <CardHeader>
                      <CardTitle className={colors.text}>{program.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-sm text-foreground/80">
                        {program.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why DSU Section */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="headline-2 mb-12 text-center">
            Why Study at DSU?
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <Globe className="w-12 h-12 text-orange-600" />
              </div>
              <div>
                <h3 className="title-lg font-bold mb-2">Global Perspectives</h3>
                <p className="body-md text-foreground/80">
                  Join a transformative academic journey offering global perspectives and a community dedicated to learning, leadership, and creativity.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <ArrowRight className="w-12 h-12 text-orange-600" />
              </div>
              <div>
                <h3 className="title-lg font-bold mb-2">World-Class Education</h3>
                <p className="body-md text-foreground/80">
                  Accredited with a NAAC A+ rating, we offer world-class interdisciplinary programs across multiple disciplines.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-orange-600/20 flex items-center justify-center">
                  <span className="text-orange-600 font-bold">🌍</span>
                </div>
              </div>
              <div>
                <h3 className="title-lg font-bold mb-2">Inclusive Community</h3>
                <p className="body-md text-foreground/80">
                  An inclusive and vibrant community where diverse perspectives meet, enriching each student's learning experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Innovation Section */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="headline-2 mb-4 text-center">
            Research & Innovation
          </h2>
          <p className="body-lg text-foreground/80 text-center mb-12 max-w-3xl mx-auto">
            Hackathons, hands-on projects, AI labs, and innovation challenges where students build, ship, and launch real solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div className="space-y-6">
              {[
                {
                  title: "Hackathons & 48-hour Innovation Sprints",
                  description: "Participate in intensive innovation events where you collaborate with peers to develop real-world solutions.",
                  icon: "⚡",
                },
                {
                  title: "NASA Space Apps & International Competitions",
                  description: "Compete on global platforms like NASA Space Apps Challenge and other international innovation competitions.",
                  icon: "🚀",
                },
                {
                  title: "Student-led Research Labs & Mentorship",
                  description: "Lead cutting-edge research projects with dedicated mentorship from experienced faculty and industry leaders.",
                  icon: "🔬",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/20 dark:to-yellow-950/20 rounded-lg p-6 border border-orange-200/50 dark:border-orange-600/30 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <span className="title-lg flex-shrink-0">{item.icon}</span>
                    <div>
                      <h3 className="title-sm font-bold mb-2 text-black">
                        {item.title}
                      </h3>
                      <p className="body-sm text-black">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <img
                src="https://images.pexels.com/photos/1181260/pexels-photo-1181260.jpeg"
                alt="Students collaborating on innovative projects"
                className="w-full h-auto rounded-lg shadow-lg object-cover max-h-96"
              />
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-background rounded-lg border border-orange-200/50 dark:border-orange-600/30 p-8 text-center">
            <p className="body-lg text-foreground/80">
              At DSU, we cultivate a culture of innovation where students are encouraged to think beyond the classroom, experiment with new ideas, and transform their visions into reality. Our research initiatives provide the platform and support needed to make a tangible impact.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-blue-500/5 to-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="headline-2 mb-12 text-center">
            Get In Touch
          </h2>
          
          <div className="bg-black rounded-2xl border border-orange-200/50 dark:border-orange-600/30 p-8 md:p-12">
            <h3 className="title-lg font-bold mb-8 text-white">
              International Admissions Office
            </h3>

            <div className="space-y-8">
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="body-sm font-semibold mb-2 text-white">Email</p>
                  <a href="mailto:international-admissions@dsu.edu.in" className="text-orange-400 hover:text-orange-300">
                    international-admissions@dsu.edu.in
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <MessageCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="body-sm font-semibold mb-2 text-white">WhatsApp</p>
                  <div className="space-y-2">
                    <a href="https://wa.me/919606022152" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 block">
                      +91 9606022152
                    </a>
                    <a href="https://wa.me/919606022149" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 block">
                      +91 9606022149
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-700">
              <p className="body-md text-gray-300 leading-relaxed mb-6">
                Interested in learning more? <span className="font-semibold text-white">Click here for details</span> and take your first step toward an impactful education at DSU.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
              >
                <a href="https://dsu.edu.in/international/" target="_blank" rel="noopener noreferrer">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="headline-2 mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="subheadline text-foreground/80 mb-8">
            Join us at DSU, where a transformative academic journey awaits, offering global perspectives and a community dedicated to learning, leadership, and creativity.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600"
          >
            <a href="https://international-admissions.dsu.edu.in" target="_blank" rel="noopener noreferrer">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
