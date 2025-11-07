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
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Building,
  FlaskConical,
  TrendingUp,
  Globe,
  Star,
  ChevronRight,
  Cog,
  Cpu,
  Gavel,
  Briefcase,
  Stethoscope,
  Palette,
  Film,
  Microscope,
  CalendarDays,
  Newspaper,
  Laptop,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section with University Building */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F970d4569ee2e428f997dce2503ce79d8?format=webp&width=800"
            alt="Dayananda Sagar University Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-brand-magenta/10 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 left-10 w-96 h-96 bg-brand-orange/10 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-6 text-center lg:text-left lg:flex lg:items-center lg:space-x-12">
          <div className="lg:w-2/3">
            <h1 className="headline-1 mb-8 leading-tight">
              <span className="text-white">Shape Your</span>
              <br />
              <span className="bg-brand-gradient bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                Future
              </span>
              <br />
              <span className="text-white">at Dayananda Sagar University</span>
            </h1>

            <p className="subheadline text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience world-class education at Dayananda Sagar University.
              Innovation meets tradition on our state-of-the-art campus.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-16">
              <Button
                size="lg"
                className="bg-brand-gradient hover:opacity-90 text-foreground px-8 py-6 text-lg font-semibold font-display rounded-2xl shadow-lg hover:shadow-brand-magenta/25 transition-all duration-300 group"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a
                href="https://dsu.edu.in/virtual-tour/"
                target="_blank"
                rel="noreferrer"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 bg-black/40 text-foreground 
             hover:bg-white hover:text-orange-600 
             px-8 py-6 text-lg font-semibold font-display 
             rounded-2xl transition-all duration-300 backdrop-blur-sm"
                >
                  Virtual Tour
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Academics Section */}
      <section className="px-6 py-20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="headline-2 mb-6">
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Academic Excellence
              </span>
              <span className="text-foreground"> That Inspires</span>
            </h2>
            <p className="subheadline text-foreground max-w-3xl mx-auto font-display">
              Discover cutting-edge programs designed to prepare you for
              tomorrow's challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cog,
                title: "Engineering",
                description:
                  "Cutting-edge engineering education with practical immersion, industry mentorship, and future-ready specializations.",
                programs: [
                  "B.Tech CSE",
                  "B.Tech Mechanical",
                  "B.Tech ECE",
                  "B.Tech Civil",
                ],
                color: "brand-orange",
                delay: "0s",
                href: "/academics/engineering",
              },
              {
                icon: Cpu,
                title: "Computer Applications",
                description:
                  "Build software careers with strong foundations in programming, data, cloud, and modern application development.",
                programs: ["BCA", "MCA", "Data Science", "Cloud Computing"],
                color: "brand-magenta",
                delay: "0.1s",
                href: "/academics/computer-applications",
              },
              {
                icon: Gavel,
                title: "School of Law",
                description:
                  "Comprehensive legal education blending theory, practice, moot courts, internships, and research opportunities.",
                programs: ["BA LLB", "BBA LLB", "LLB", "LLM"],
                color: "brand-blue",
                delay: "0.2s",
                href: "/academics/law",
              },
              {
                icon: Briefcase,
                title: "Commerce & Management Studies",
                description:
                  "Business education that merges core management with analytics, entrepreneurship, and industry projects.",
                programs: ["B.Com", "BBA", "MBA", "Finance & Marketing"],
                color: "brand-orange",
                delay: "0.3s",
                href: "/academics/management-studies",
              },
              {
                icon: FlaskConical,
                title: "Basic & Applied Sciences",
                description:
                  "Foundational and interdisciplinary sciences with strong lab exposure and research-driven learning.",
                programs: [
                  "Physics",
                  "Chemistry",
                  "Mathematics",
                  "Biotechnology",
                ],
                color: "brand-magenta",
                delay: "0.4s",
                href: "/academics/basic-applied-sciences",
              },
              {
                icon: Stethoscope,
                title: "Health Sciences",
                description:
                  "Health professions education with clinical immersion, simulation labs, and strong patient-care focus.",
                programs: [
                  "Pharmacy",
                  "Physiotherapy",
                  "Nursing",
                  "Allied Health",
                ],
                color: "brand-blue",
                delay: "0.5s",
                href: "/academics/health-sciences",
              },
              {
                icon: Film,
                title: "Design & Digital Trans Media",
                description:
                  "Design and digital media programs spanning UX/UI, graphics, animation, and storytelling for modern platforms.",
                programs: [
                  "Animation",
                  "UX/UI",
                  "Graphic Design",
                  "Digital Media",
                ],
                color: "brand-magenta",
                delay: "0.7s",
                href: "/academics/design/bdesign",
              },
              {
                icon: Microscope,
                title: "Medical Education & Research",
                description:
                  "Advanced medical education and translational research with a focus on innovation and community impact.",
                programs: [
                  "MBBS",
                  "MD/MS",
                  "Biomedical Research",
                  "Public Health",
                ],
                color: "brand-blue",
                delay: "0.8s",
                href: "https://cdsimer.edu.in",
              },
              {
                icon: Globe,
                title: "Online Degree Programs",
                description:
                  "Flexible, career-aligned online degrees with live sessions, projects, and placement assistance.",
                programs: ["BBA", "BCA", "B.Com"],
                color: "brand-orange",
                delay: "0.9s",
                href: "https://dsuonline.com",
              },
            ].map((school, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-brand-magenta/30 transition-all duration-300 group hover:shadow-lg hover:shadow-brand-magenta/10 hover:-translate-y-2"
                style={{ animationDelay: school.delay }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-2xl bg-brand-magenta/10 flex items-center justify-center mb-4 group-hover:bg-brand-magenta/20 transition-colors">
                    <school.icon className="w-6 h-6 text-brand-magenta group-hover:scale-110 transition-transform" />
                  </div>
                  {school.href ? (
                    school.href.startsWith("http") ? (
                      <a
                        href={school.href}
                        target="_blank"
                        rel="noreferrer"
                        className="block rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        <CardTitle className="headline-4 group-hover:text-brand-magenta transition-colors">
                          {school.title}
                        </CardTitle>
                      </a>
                    ) : (
                      <Link
                        to={school.href}
                        className="block rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        <CardTitle className="headline-4 group-hover:text-brand-magenta transition-colors">
                          {school.title}
                        </CardTitle>
                      </Link>
                    )
                  ) : (
                    <CardTitle className="headline-4 group-hover:text-brand-magenta transition-colors">
                      {school.title}
                    </CardTitle>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-foreground leading-relaxed font-body">
                    {school.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground font-display">
                      Popular Programs:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {school.programs.map((program, idx) =>
                        school.title === "Engineering" &&
                        program === "B.Tech CSE" ? (
                          <Link
                            key={idx}
                            to="/academics/engineering/computer-science"
                          >
                            <Badge
                              variant="secondary"
                              className="text-xs font-body hover:bg-brand-magenta/20 hover:text-brand-magenta cursor-pointer"
                            >
                              {program}
                            </Badge>
                          </Link>
                        ) : (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs font-body"
                          >
                            {program}
                          </Badge>
                        ),
                      )}
                    </div>
                  </div>
                  {school.href ? (
                    school.href.startsWith("http") ? (
                      <a href={school.href} target="_blank" rel="noreferrer">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full justify-between text-foreground group-hover:text-foreground group-hover:bg-brand-magenta/90 font-display transition-colors"
                        >
                          Learn More
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </a>
                    ) : (
                      <Link to={school.href}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full justify-between text-foreground group-hover:text-foreground group-hover:bg-brand-magenta/90 font-display transition-colors"
                        >
                          Learn More
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    )
                  ) : (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-between text-foreground group-hover:text-foreground group-hover:bg-brand-magenta/90 font-display transition-colors"
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="headline-2 mb-6">
              <span className="text-foreground">Featured </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                News
              </span>
            </h2>
            <p className="subheadline text-foreground max-w-2xl mx-auto font-display">
              Stories from research, campus life, and our community
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {/* Featured story */}
            <Link
              to="/Research"
              className="group relative overflow-hidden rounded-3xl border border-border/50 lg:col-span-2"
            >
              <img
                src="https://images.unsplash.com/photo-1554475901-4538ddfbccc2?q=80&w=1600&auto=format&fit=crop"
                alt="DSU launches Center for AI & Robotics"
                className="h-96 w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-brand-magenta/20 text-brand-magenta">
                    Research
                  </Badge>
                  <div className="flex items-center text-white/80 text-xs font-body">
                    <CalendarDays className="w-4 h-4 mr-1" /> Sep 12, 2025
                  </div>
                </div>
                <h3 className="text-3xl font-semibold text-white mb-3 font-display">
                  DSU launches Center for AI & Robotics
                </h3>
                <p className="text-white/80 max-w-3xl mb-6 hidden sm:block font-body">
                  A state-of-the-art hub advancing intelligent systems,
                  human-robot interaction, and applied AI with strong industry
                  partnerships.
                </p>
                <Button
                  variant="secondary"
                  className="group bg-white text-black hover:opacity-90"
                >
                  Read Story
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/40 backdrop-blur px-3 py-1 text-white text-xs">
                <Newspaper className="w-4 h-4" /> Featured
              </div>
            </Link>

            {/* Secondary stories */}
            <div className="grid gap-8 content-start">
              {[
                {
                  href: "/Research",
                  image:
                    "https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2Fee8dd0baa1344765ab26d165e6fc0acc?alt=media&token=37176f13-60ee-4bee-a61c-eff7b954b9a4&apiKey=4aa279a8430d441dba9c55f659831878",
                  isVideo: true,
                  category: "Research",
                  title: "Centre for Space Science & Technology",
                  excerpt:
                    "State-of-the-art satellite programme with ISO-08 cleanroom, mechanical lab, and ground station. Where ideas take shape and reach for the sky.",
                  date: "Oct 26, 2023",
                  color: "brand-blue",
                },
                {
                  href: "/CampusLife",
                  image:
                    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop",
                  category: "Campus Life",
                  title: "Students win national hackathon",
                  excerpt:
                    "Interdisciplinary team develops assistive tech using edge AI and IoT, winning top honors.",
                  date: "Aug 12, 2025",
                  color: "brand-magenta",
                },
                {
                  href: "/Research",
                  image:
                    "https://images.unsplash.com/photo-1580281657527-47c455c8d7bf?q=80&w=1200&auto=format&fit=crop",
                  category: "Health Sciences",
                  title: "MoU with leading hospital for collaborative research",
                  excerpt:
                    "Strengthening clinical research, translational medicine, and student training pathways.",
                  date: "Jul 30, 2025",
                  color: "brand-blue",
                },
                {
                  href: "/CampusLife",
                  image:
                    "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=1200&auto=format&fit=crop",
                  category: "Design & Media",
                  title:
                    "Design and Digital Trans Media festival draws creators nationwide",
                  excerpt:
                    "Workshops, showcases, and competitions celebrating animation, UX, and storytelling.",
                  date: "Jul 18, 2025",
                  color: "brand-orange",
                },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  to={item.href}
                  className="group rounded-2xl overflow-hidden border border-border/50 bg-card/40 backdrop-blur-sm hover:shadow-lg hover:shadow-brand-magenta/10 transition-all"
                >
                  <div className="relative">
                    {item.isVideo ? (
                      <video
                        src={item.image}
                        className="h-44 w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        controls
                        controlsList="nodownload"
                        poster={item.image} // Ensure poster is set to the video URL
                      />
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-44 w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    )}
                    <div className="absolute top-3 left-3">
                      <Badge
                        className={`${item.color === "brand-orange" ? "bg-brand-orange/20 text-brand-orange" : item.color === "brand-magenta" ? "bg-brand-magenta/20 text-brand-magenta" : "bg-brand-blue/20 text-brand-blue"}`}
                      >
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-5 space-y-2">
                    <h4 className="text-lg font-semibold font-display group-hover:text-brand-magenta transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-foreground font-body">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs text-foreground font-body flex items-center">
                        <CalendarDays className="w-4 h-4 mr-1" /> {item.date}
                      </span>
                      <ChevronRight className="w-4 h-4 text-foreground group-hover:text-brand-magenta" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/Research">
              <Button
                variant="outline"
                className="border-brand-magenta/30 hover:bg-brand-magenta/10 font-display"
              >
                View all news
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Campus Life Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-brand-magenta/5 to-brand-orange/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="headline-2 mb-6">
              <span className="text-foreground">Experience </span>
              <span className="bg-brand-gradient-alt bg-clip-text text-transparent">
                Campus Life
              </span>
            </h2>
            <p className="subheadline text-foreground max-w-2xl mx-auto font-display">
              More than education - it's about building lifelong connections and
              memories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Student Organizations",
                description: "100+ clubs and societies",
                highlight: "Join Your Passion",
              },
              {
                icon: Building,
                title: "Modern Facilities",
                description: "State-of-the-art amenities",
                highlight: "World-Class Campus",
              },
              {
                icon: Star,
                title: "Cultural Events",
                description: "Year-round celebrations",
                highlight: "Vibrant Community",
              },
              {
                icon: TrendingUp,
                title: "Career Support",
                description: "Industry connections",
                highlight: "95% Placement Rate",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center p-6 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-brand-magenta/30 transition-all duration-300 group"
              >
                <feature.icon className="w-12 h-12 text-brand-magenta mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="headline-4 mb-2 group-hover:text-brand-magenta transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-foreground mb-3 font-body">
                  {feature.description}
                </p>
                <Badge
                  variant="outline"
                  className="text-xs border-brand-magenta/30 text-brand-magenta font-body"
                >
                  {feature.highlight}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Directory CTA */}
      <section className="px-6 py-16 bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-border/40 bg-background/80 p-10 shadow-[0_40px_120px_-60px_rgba(233,97,255,0.45)] backdrop-blur">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="space-y-4">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Meet Our Faculty
              </Badge>
              <h2 className="headline-3 font-display">
                Explore scholars, mentors, and industry experts across DSU
              </h2>
              <p className="text-foreground font-body max-w-3xl">
                Connect with faculty by school, discipline, or research focus in
                our new directory. Filter by the programmes you care about and
                reach out for collaborations, mentorship, and academic guidance.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/faculty-directory" className="flex-1">
                  <Button className="h-full w-full bg-brand-gradient text-foreground">
                    Explore Faculty Directory
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link
                  to="/academics/engineering/computer-science/faculty"
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    className="h-full w-full border-brand-magenta/40 hover:bg-brand-magenta/10"
                  >
                    CSE Faculty Hub
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-border/50 bg-card/60 p-6 backdrop-blur-sm">
              <div className="grid gap-4">
                {[
                  "Search across schools",
                  "Filter by research focus",
                  "Connect via email",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-magenta" />
                    <p className="text-sm text-foreground font-body">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-brand-magenta/10 via-brand-orange/10 to-brand-blue/10 rounded-3xl p-12 border border-brand-magenta/20">
            <h2 className="headline-2 mb-6">
              Ready to
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                {" "}
                Begin Your Journey
              </span>
              ?
            </h2>
            <p className="subheadline text-foreground mb-8 max-w-2xl mx-auto font-display">
              Join thousands of students who've chosen DSU for their academic
              and personal growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                className="bg-brand-gradient hover:opacity-90 hover:shadow-lg hover:shadow-brand-magenta/25 text-foreground px-12 py-6 text-lg font-semibold font-display rounded-2xl transition-all duration-300 group"
              >
                Apply Now
                <GraduationCap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {[
                "No Application Fee",
                "Merit Scholarships Available",
                "Industry Partnerships",
              ].map((badge, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-3 py-1 text-xs font-medium font-body"
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
