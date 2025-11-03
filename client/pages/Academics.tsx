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
  ArrowRight,
  BookOpen,
  GraduationCap,
  FlaskConical,
  Building,
  Globe,
  Users,
  Award,
  ChevronRight,
  TrendingUp,
  Briefcase,
  Cog,
  Cpu,
  Gavel,
  Stethoscope,
  Palette,
  Film,
  Microscope,
  Laptop,
  PenSquare,
  Presentation,
} from "lucide-react";

export default function Academics() {
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
            <BookOpen className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-sm font-medium text-orange-500">
              Academic Excellence
            </span>
          </div>

          <h1 className="headline-1 mb-8 leading-tight">
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Shape Tomorrow
            </span>
            <br />
            <span className="text-foreground">Through Learning</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-4xl mx-auto leading-relaxed">
            Discover world-class academic programs designed to prepare you for
            the challenges of tomorrow. At DSU, innovation meets excellence
            across every discipline.
          </p>

        </div>
      </section>

      {/* Schools & Colleges */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Schools </span>
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                under Dayananda Sagar University
              </span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Choose from our diverse range of academic schools, each offering
              cutting-edge programs and world-class faculty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cog,
                title: "Engineering",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ff68b38f444334f6a9d6f31196dc787af?format=webp&width=800",
                description:
                  "Cutting-edge engineering education with practical immersion, industry mentorship, and future-ready specializations.",
                programs: [
                  "B.Tech CSE",
                  "B.Tech Mechanical",
                  "B.Tech ECE",
                  "B.Tech Civil",
                ],
                color: "brand-orange",
                href: "/academics/engineering",
              },
              {
                icon: Cpu,
                title: "Computer Applications",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F81d450f810104dc8926ff033cbb8ec87?format=webp&width=800",
                description:
                  "Build software careers with strong foundations in programming, data, cloud, and modern application development.",
                programs: [
                  "BCA",
                  "B.Sc Data Science",
                  "MCA",
                  "M.Sc Data Science",
                ],
                color: "brand-magenta",
                href: "/academics/computer-applications",
              },
              {
                icon: Gavel,
                title: "School of Law",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Faa5e530144f148c29a6935c9777759b3?format=webp&width=800",
                description:
                  "Comprehensive legal education blending theory, practice, moot courts, internships, and research opportunities.",
                programs: [
                  "B.B.A., LL.B.",
                  "B.A., LL.B.",
                  "LL.B.",
                  "Research Centres",
                ],
                color: "brand-blue",
                href: "/academics/law",
              },
              {
                icon: Briefcase,
                title: "Commerce & Management Studies",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F7827db3aa95d45a389a5d0bdeb29d463?format=webp&width=800",
                description:
                  "Business education that merges core management with analytics, entrepreneurship, and industry projects.",
                programs: ["B.Com", "BBA", "MBA", "Doctoral Programmes"],
                color: "brand-orange",
                href: "/academics/management-studies",
              },
              {
                icon: FlaskConical,
                title: "Basic & Applied Sciences",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ff5cde141ec88434abe5b7909f2bf9710?format=webp&width=800",
                description:
                  "Foundational and interdisciplinary sciences with strong lab exposure and research-driven learning.",
                programs: [
                  "B.Sc Biological Sciences",
                  "B.Sc Data Science",
                  "M.Sc Biological Sciences",
                  "M.Sc Data Science",
                ],
                color: "brand-magenta",
                href: "/academics/basic-applied-sciences",
              },
              {
                icon: Stethoscope,
                title: "Health Sciences",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fbc944f36dda948aa94827a23ad35369b?format=webp&width=800",
                description:
                  "Health professions education with clinical immersion, simulation labs, and strong patient-care focus.",
                programs: [
                  "Pharmacy",
                  "Physiotherapy",
                  "Nursing",
                  "Allied Health",
                ],
                color: "brand-blue",
                href: "/academics/health-sciences",
              },
              {
                icon: PenSquare,
                title: "Journalism & Mass Communication",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F0f5e9825dc2342c38fb53f7c1c9ce3a6?format=webp&width=800",
                description:
                  "Future-ready storytellers trained across multimedia newsrooms, podcasts, films and global communication projects.",
                programs: [
                  "BA (JMC)",
                  "Podcast Lab",
                  "Global Comm Project",
                  "Industry Internships",
                ],
                color: "brand-blue",
                href: "/academics/journalism-mass-communication",
              },
              {
                icon: Film,
                title: "Design & Digital Trans Media",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fa2063ac0bf034cbaa9d21546069eeb18?format=webp&width=800",
                description:
                  "Design and digital media programs spanning UX/UI, graphics, animation, and storytelling for modern platforms.",
                programs: [
                  "B.Design",
                  "UX/UI",
                  "Animation & VFX",
                  "Game Design",
                ],
                color: "brand-magenta",
                href: "/academics/design/bdesign",
              },
              {
                icon: Microscope,
                title: "Medical Education & Research",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F14e1fd7abfe94ba3a86faff2e81bd88f?format=webp&width=800",
                description:
                  "Advanced medical education and translational research with a focus on innovation and community impact.",
                programs: [
                  "MBBS",
                  "MD/MS",
                  "Biomedical Research",
                  "Public Health",
                ],
                color: "brand-blue",
                href: "https://cdsimer.edu.in",
              },
              {
                icon: Presentation,
                title: "Center for Executive Education",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fa0a53cf62f55495e94ddc5c0e3b890d8?format=webp&width=800",
                description:
                  "Executive MBA and leadership programmes tailored for working professionals with CXO mentorship.",
                programs: [
                  "Executive MBA",
                  "Speaker Series",
                  "Leadership Clinics",
                  "Industry Associations",
                ],
                color: "brand-blue",
                href: "/academics/cee",
              },
              {
                icon: Globe,
                title: "Online Degree Programs",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fedd2e018f6c34d60a22bc6202d6d86c4?format=webp&width=800",
                description:
                  "Flexible, career-aligned online degrees with live sessions, projects, and placement assistance.",
                programs: ["BBA", "BCA", "B.Com"],
                color: "brand-orange",
                href: "https://dsuonline.com",
              },
            ].map((school, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl hover:shadow-brand-magenta/10 transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-brand-magenta/30 overflow-hidden"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={school.image}
                    alt={school.title}
                    className={`h-full w-full ${
                      school.title === "Online Degree Programs"
                        ? "object-contain bg-white/5"
                        : school.title === "Computer Applications"
                          ? "object-cover object-top"
                          : "object-cover"
                    } group-hover:scale-[1.03] transition-transform duration-700`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-black/40 backdrop-blur px-3 py-1 text-white text-xs">
                    <school.icon className="w-4 h-4" /> School
                  </div>
                </div>
                <CardHeader>
                  {school.href ? (
                    school.href.startsWith("http") ? (
                      <a
                        href={school.href}
                        target="_blank"
                        rel="noreferrer"
                        className="block rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        <CardTitle className="text-xl font-bold group-hover:text-brand-magenta transition-colors leading-tight">
                          {school.title}
                        </CardTitle>
                      </a>
                    ) : (
                      <Link
                        to={school.href}
                        className="block rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        <CardTitle className="text-xl font-bold group-hover:text-brand-magenta transition-colors leading-tight">
                          {school.title}
                        </CardTitle>
                      </Link>
                    )
                  ) : (
                    <CardTitle className="text-xl font-bold group-hover:text-brand-magenta transition-colors leading-tight">
                      {school.title}
                    </CardTitle>
                  )}
                </CardHeader>
                <CardContent className="space-y-6">
                  <CardDescription className="text-white leading-relaxed">
                    {school.description}
                  </CardDescription>
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-foreground">
                      Key Programs:
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      {school.programs.slice(0, 4).map((program, idx) =>
                        program === "B.Tech CSE" ? (
                          <Link
                            key={idx}
                            to="/academics/engineering/computer-science"
                            className="flex items-center text-sm text-brand-magenta hover:underline"
                          >
                            <ChevronRight className="w-3 h-3 text-brand-magenta mr-2 flex-shrink-0" />
                            {program}
                          </Link>
                        ) : (
                          <div
                            key={idx}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <ChevronRight className="w-3 h-3 text-brand-magenta mr-2 flex-shrink-0" />
                            {program}
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                  {school.href ? (
                    <Link to={school.href}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-between group-hover:text-brand-magenta group-hover:bg-brand-magenta/5"
                      >
                        Explore School
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-between group-hover:text-brand-magenta group-hover:bg-brand-magenta/5"
                    >
                      Explore School
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Features */}
      <section className="px-6 py-20 bg-gradient-to-r from-orange-500/5 to-red-600/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                Why Choose
              </span>
              <span className="text-foreground"> DSU Academics?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence Recognition",
                description:
                  "NAAC A+ grade and top rankings across multiple disciplines",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F047841ee5d304f10a49f022a1c5c511b?format=webp&width=800",
                badgeClass: "bg-brand-magenta/20 text-brand-magenta",
                objectFit: "contain",
              },
              {
                icon: Users,
                title: "Expert Faculty",
                description:
                  "Learn from industry leaders and renowned academicians",
                image:
                  "https://images.pexels.com/photos/17364073/pexels-photo-17364073.jpeg",
                badgeClass: "bg-brand-orange/20 text-brand-orange",
              },
              {
                icon: Laptop,
                title: "Modern Infrastructure",
                description:
                  "State-of-the-art labs, libraries, and learning spaces",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F1e657736504149818bf89d58c6b3d031?format=webp&width=800",
                badgeClass: "bg-brand-blue/20 text-brand-blue",
                objectFit: "contain",
              },
              {
                icon: TrendingUp,
                title: "Industry Connect",
                description:
                  "Strong partnerships with leading companies and organizations",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F29a06e5c2ef44ca8a7d2ebacbffe0f9f?format=webp&width=800",
                badgeClass: "bg-brand-magenta/20 text-brand-magenta",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden ${
                  feature.customHeight || "h-80"
                } rounded-3xl border border-border/40 bg-card/40 backdrop-blur-sm hover:shadow-xl hover:shadow-brand-magenta/10 transition-all duration-500 hover:-translate-y-1 flex flex-col`}
              >
                <div
                  className={`flex-1 overflow-hidden ${
                    feature.objectFit === "contain"
                      ? "flex items-center justify-center bg-black/20"
                      : ""
                  }`}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className={`w-full h-full ${
                      feature.objectFit === "contain"
                        ? "object-contain p-4"
                        : "object-cover"
                    } group-hover:scale-105 transition-transform duration-700`}
                  />
                </div>

                {/* Content Section - Only for non-contain images */}
                {feature.objectFit !== "contain" && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                )}

                {/* Decorative blobs */}
                <div className="absolute -top-6 -right-6 w-40 h-40 bg-brand-magenta/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-brand-orange/10 rounded-full blur-2xl" />


                <div className={`${
                  feature.objectFit === "contain" ? "p-6" : "absolute bottom-0 inset-x-0 p-6"
                }`}>
                  <div className="inline-flex mb-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${feature.badgeClass}`}
                    >
                      {feature.title}
                    </span>
                  </div>
                  <h3
                    className={`text-xl font-bold mb-2 font-display ${
                      feature.objectFit === "contain"
                        ? "text-foreground"
                        : "text-white"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`text-sm font-body ${
                      feature.objectFit === "contain"
                        ? "text-muted-foreground"
                        : "text-white/80"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-500/10 via-red-600/10 to-pink-500/10 rounded-3xl p-12 border border-orange-500/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                {" "}
                Start Your Journey
              </span>
              ?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Explore our academic programs and find the perfect fit for your
              career aspirations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 via-red-600 to-pink-500 text-white px-12 py-6 text-lg font-semibold rounded-2xl"
              >
                Apply Now
                <GraduationCap className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-12 py-6 text-lg font-semibold rounded-2xl"
              >
                Schedule Campus Visit
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Merit Scholarships",
                "Industry Internships",
                "Global Exposure",
                "Career Support",
              ].map((badge, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-3 py-1 text-xs font-medium"
                >
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
