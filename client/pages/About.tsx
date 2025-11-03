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
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Building,
  Globe,
  Star,
  TrendingUp,
  MapPin,
  Calendar,
  Mail,
  Phone,
  Clock,
  CheckCircle,
  Lightbulb,
  BookOpen,
  Shield,
  ChevronRight,
  Compass,
  History,
} from "lucide-react";

export default function About() {
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
            <Building className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-sm font-medium text-orange-500">
              Established 2008
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-foreground">About</span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Dayananda Sagar
            </span>
            <br />
            <span className="text-foreground">University</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            A legacy of
            <span className="text-orange-400 font-semibold">
              {" "}
              academic excellence
            </span>
            ,
            <span className="text-red-400 font-semibold">
              {" "}
              innovative research
            </span>
            , and
            <span className="text-pink-400 font-semibold">
              {" "}
              transformative education
            </span>
            spanning over a decade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-red-600 hover:to-orange-500 text-white px-8 py-6 text-lg font-semibold rounded-2xl"
            >
              Our Story
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <a
              href="https://dsu.edu.in/virtual-tour/"
              target="_blank"
              rel="noreferrer"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-6 text-lg font-semibold rounded-2xl"
              >
                Campus Tour
              </Button>
            </a>
          </div>

          {/* Key Numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: "25,000+", label: "Students", icon: Users },
              { number: "15+", label: "Years Legacy", icon: Calendar },
              { number: "100+", label: "Programs", icon: BookOpen },
              { number: "₹1000Cr+", label: "Infrastructure", icon: Building },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center p-6 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-orange-500/30 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Explore About DSU Navigation */}
      <section className="px-6 py-20 bg-gradient-to-br from-orange-500/5 via-red-600/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Explore About DSU
              </span>
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Learn more about our university through dedicated sections
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                icon: Compass,
                title: "Vision & Mission",
                description: "Our guiding principles and strategic goals",
                href: "/about/vision-mission",
              },
              {
                icon: History,
                title: "History",
                description: "Journey through our 16+ years of excellence",
                href: "/about/history",
              },
              {
                icon: Users,
                title: "Leadership",
                description: "Meet our visionary leadership team",
                href: "/about/leadership",
              },
              {
                icon: Award,
                title: "Accreditations",
                description: "National and international recognitions",
                href: "/about/accreditations",
              },
              {
                icon: Building,
                title: "Facilities",
                description: "World-class infrastructure and amenities",
                href: "/about/facilities",
              },
            ].map((section, index) => {
              const Icon = section.icon;
              return (
                <Link key={index} to={section.href}>
                  <Card className="h-full group hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:border-orange-500/30 bg-card/50 backdrop-blur-sm border border-border/50 cursor-pointer hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <Icon className="w-10 h-10 text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="font-bold text-lg mb-2 group-hover:text-orange-500 transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {section.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Welcome to DSU Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Welcome to Dayananda Sagar University
              </span>
            </h2>
          </div>

          <div className="prose prose-invert max-w-4xl mx-auto mb-16">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12">
              <p className="text-lg text-white leading-relaxed mb-6">
                Dayananda Sagar Institutions founded in the 60s by one such visionary, late Sri Dayananda Sagar committed to take knowledge to the people, transforms today's students into responsible citizens and professional leaders of tomorrow.
              </p>
              <p className="text-lg text-white leading-relaxed">
                Dayananda Sagar University created by an Act of the Karnataka State in 2014, built on this adorable legacy and inspired by its own milestones, meeting the needs of quality higher education in this part of the world.
              </p>
            </div>
          </div>

          {/* Heritage Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Star,
                title: "Unveiling a Legacy",
                description:
                  "Universities of great legacy across the world are the invaluable contribution of certain visionaries to the world. Universities don't manufacture products with specific use and determined life cycle. They share & impart multitudes of streams of knowledge and create wonderful human beings – learned practitioners & Disseminators of knowledge to make the world a better place to be. These Universities of great significance have lived through the centuries building centers of knowledge and great alumni of such Universities.",
              },
              {
                icon: Building,
                title: "Proud to be part of DSU",
                description:
                  "DSU is a proud member of the Dayananda Sagar Institutions family. Founded by Late Sri Dayananda Sagar in the early sixties (with just four students), DSI has morphed into global education power house, spread over five campuses, catering to the education needs of over 17,000 students. Operating under the aegis of the Mahatma Gandhi Vidya Peetha Trust in Bengaluru, DSI has enabled the transformation of tens of thousands of young Indian and international citizens into professionals in diverse specializations.",
              },
              {
                icon: Users,
                title: "Best-in-class Facilities",
                description:
                  "Besides our high-calibre teaching staff, the students are given a challenging academic environment with well-equipped lecture theatres, laboratories, excellent libraries and computer networking facilities. DSU also has exceptional infrastructure for students who possess a passion for sports and games. The hostel facilities, encompassing cultural and recreational needs, cater to both local and international students.",
              },
              {
                icon: Lightbulb,
                title: "Inspired by Innovators",
                description:
                  "Research, Innovation and Incubation (spread over 25,000 sft of industry quality labs) form the core of DSU. So it isn't surprising that DSU has taken the next logical step: Laying the foundation to transform the entrepreneurial dream of every young Indian and global citizen into a reality. Enabling this transformation is the active support of industry leaders, industry bodies and a dedicated 4 lakh square feet modern ready-to-move-in infrastructure!",
              },
              {
                icon: Award,
                title: "Stellar Performance – Time and Again",
                description:
                  "Dayananda Sagar Institutions (DSI) have consistent topped the academic charts in every area of knowledge standing out from the midst of a sea of institutions of repute. Its accomplishments are unparalleled. In the recent past, DSI secured 58 ranks from Visvesvaraya Technological University among 220 engineering colleges in Karnataka (in 2014).",
              },
              {
                icon: Globe,
                title: "Different Courses for Different Passions",
                description:
                  "Beginning Academic Year 2015–16, Dayananda Sagar University would offer courses in Engineering, Computer Applications, Sciences, Arts and Management in the Bachelors, Masters and Ph.D levels. Supporting the academic activities are the Centers of Excellence in ICT, Health Care, Energy and Life Science, among other fast evolving fields of study.",
              },
            ].map((section, index) => {
              const Icon = section.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:border-orange-500/30 bg-card/50 backdrop-blur-sm border border-border/50"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-orange-500 transition-colors">
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {section.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* History & Milestones */}
      <section className="px-6 py-20 bg-gradient-to-r from-orange-500/5 to-red-600/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Our </span>
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-xl text-white">
              Key milestones in our path to becoming a leading university
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                year: "2008",
                title: "Foundation",
                description:
                  "Dayananda Sagar University established with a vision to provide quality education",
                milestone: "University Establishment",
              },
              {
                year: "2012",
                title: "NAAC Accreditation",
                description:
                  "Achieved NAAC A grade accreditation, recognizing our commitment to excellence",
                milestone: "Quality Recognition",
              },
              {
                year: "2016",
                title: "Research Excellence",
                description:
                  "Established multiple research centers and achieved significant research funding",
                milestone: "Research Expansion",
              },
              {
                year: "2020",
                title: "Digital Transformation",
                description:
                  "Successfully transitioned to digital education during the global pandemic",
                milestone: "Innovation Leadership",
              },
              {
                year: "2022",
                title: "Global Partnerships",
                description:
                  "Formed strategic partnerships with leading international universities",
                milestone: "Global Reach",
              },
              {
                year: "2023",
                title: "Industry 4.0 Campus",
                description:
                  "Launched smart campus initiatives with AI and IoT integration",
                milestone: "Tech Integration",
              },
              {
                year: "2024",
                title: "Sustainability Goals",
                description:
                  "Achieved carbon neutral campus and launched green technology programs",
                milestone: "Environmental Leadership",
              },
              {
                year: "Future",
                title: "Vision 2030",
                description:
                  "Aiming to be among the top 50 universities globally by 2030",
                milestone: "Global Recognition",
              },
            ].map((milestone, index) => (
              <Card
                key={index}
                className="text-center p-6 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-orange-500/30 transition-all duration-300 group"
              >
                <div className="text-3xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform">
                  {milestone.year}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-orange-500 transition-colors">
                  {milestone.title}
                </h3>
                <Badge
                  variant="outline"
                  className="mb-3 text-xs border-orange-500/30 text-orange-500"
                >
                  {milestone.milestone}
                </Badge>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {milestone.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Leadership
              </span>
              <span className="text-foreground"> Team</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Visionary leaders driving academic excellence and institutional
              growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                role: "Chancellor",
                name: "",
                experience: "25+ Years",
                expertise: "Educational Leadership, Policy Development",
                achievements: [
                  "Distinguished Academic Leader",
                  "Former Vice-Chancellor",
                  "Education Reformer",
                ],
                quote: "Education is the foundation of a progressive society.",
              },
              {
                role: "Vice-Chancellor",
                name: "",
                experience: "20+ Years",
                expertise: "Academic Administration, Research Management",
                achievements: [
                  "IIT Alumni",
                  "Research Publications: 150+",
                  "Innovation Leader",
                ],
                quote: "Innovation in education shapes the future of humanity.",
              },
              {
                role: "Pro Vice-Chancellor",
                name: "",
                experience: "18+ Years",
                expertise: "Curriculum Development, International Relations",
                achievements: [
                  "PhD from Leading University",
                  "Global Education Expert",
                  "Industry Connect",
                ],
                quote:
                  "Global education prepares students for worldwide opportunities.",
              },
              {
                role: "Registrar",
                name: "",
                experience: "15+ Years",
                expertise: "Academic Operations, Student Affairs",
                achievements: [
                  "Excellence in Administration",
                  "Student Welfare Champion",
                  "Process Innovation",
                ],
                quote: "Student success is our primary mission.",
              },
              {
                role: "Dean - Engineering",
                name: "",
                experience: "22+ Years",
                expertise: "Engineering Education, Technology Innovation",
                achievements: [
                  "IEEE Fellow",
                  "Patent Holder: 25+",
                  "Industry Expert",
                ],
                quote:
                  "Engineering education must evolve with technological advancement.",
              },
              {
                role: "Dean - Research",
                name: "",
                experience: "20+ Years",
                expertise: "Research Strategy, Innovation Management",
                achievements: [
                  "Research Funding: ₹100Cr+",
                  "International Collaborations",
                  "Patent Expert",
                ],
                quote: "Research is the engine of progress and innovation.",
              },
            ].map((leader, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30"
              >
                <CardHeader>
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500/20 to-red-600/20 flex items-center justify-center mb-4 mx-auto group-hover:from-orange-500/30 group-hover:to-red-600/30 transition-colors">
                    <Users className="w-10 h-10 text-orange-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-center">
                    {leader.name ? (
                      <CardTitle className="text-xl font-bold group-hover:text-brand-magenta transition-colors mb-1">
                        {leader.name}
                      </CardTitle>
                    ) : (
                      <div className="h-6 mb-1"></div>
                    )}
                    <Badge
                      variant="outline"
                      className="text-xs border-orange-500/30 text-orange-500 mb-2"
                    >
                      {leader.role}
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      {leader.experience} Experience
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">
                      Expertise:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {leader.expertise}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">
                      Key Achievements:
                    </p>
                    <div className="space-y-1">
                      {leader.achievements.map((achievement, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <Star className="w-3 h-3 text-orange-500 mr-2 flex-shrink-0" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-orange-500/5 rounded-lg p-3 border-l-4 border-orange-500">
                    <p className="text-sm italic text-muted-foreground">
                      "{leader.quote}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation & Rankings */}
      <section className="px-6 py-20 bg-gradient-to-r from-orange-500/5 to-red-600/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Accreditation & </span>
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                Rankings
              </span>
            </h2>
            <p className="text-xl text-white">
              Recognition of our commitment to quality and excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "NAAC A+ Grade",
                description:
                  "Highest accreditation grade from National Assessment and Accreditation Council",
                year: "2023",
              },
              {
                icon: Star,
                title: "NIRF Ranking",
                description:
                  "Among top 100 universities in India by National Institutional Ranking Framework",
                year: "2024",
              },
              {
                icon: Globe,
                title: "QS World Ranking",
                description:
                  "Featured in QS World University Rankings for quality education",
                year: "2024",
              },
              {
                icon: Shield,
                title: "UGC Recognition",
                description:
                  "Fully recognized by University Grants Commission of India",
                year: "2008",
              },
              {
                icon: TrendingUp,
                title: "ARIIA Ranking",
                description:
                  "Top performer in Atal Ranking of Institutions on Innovation Achievements",
                year: "2023",
              },
              {
                icon: Lightbulb,
                title: "NBA Accreditation",
                description:
                  "Engineering programs accredited by National Board of Accreditation",
                year: "2022",
              },
              {
                icon: Building,
                title: "AICTE Approval",
                description:
                  "All technical programs approved by All India Council for Technical Education",
                year: "Ongoing",
              },
              {
                icon: BookOpen,
                title: "Research Excellence",
                description:
                  "Recognized for outstanding research contributions and innovation",
                year: "2024",
              },
            ].map((recognition, index) => (
              <Card
                key={index}
                className="text-center p-6 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-orange-500/30 transition-all duration-300 group"
              >
                <recognition.icon className="w-12 h-12 text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold mb-2 group-hover:text-orange-500 transition-colors">
                  {recognition.title}
                </h3>
                <Badge variant="secondary" className="mb-3 text-xs">
                  {recognition.year}
                </Badge>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {recognition.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Connect
              </span>
              <span className="text-foreground"> With Us</span>
            </h2>
            <p className="text-xl text-white">
              Get in touch with Dayananda Sagar University
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MapPin,
                title: "Campus Address",
                info: "Kumaraswamy Layout, Bangalore - 560078, Karnataka, India",
                action: "Get Directions",
              },
              {
                icon: Phone,
                title: "Phone Numbers",
                info: "+91 80-2861-1000\n+91 80-2861-2000",
                action: "Call Now",
              },
              {
                icon: Mail,
                title: "Email Addresses",
                info: "info@dsu.edu.in\nadmissions@dsu.edu.in",
                action: "Send Email",
              },
              {
                icon: Clock,
                title: "Office Hours",
                info: "Mon - Fri: 9:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM",
                action: "Visit Us",
              },
            ].map((contact, index) => (
              <Card
                key={index}
                className="text-center p-6 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-orange-500/30 transition-all duration-300 group"
              >
                <contact.icon className="w-12 h-12 text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold mb-3 group-hover:text-orange-500 transition-colors">
                  {contact.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed whitespace-pre-line">
                  {contact.info}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-orange-500 hover:bg-orange-500/5"
                >
                  {contact.action}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-orange-500/5 to-red-600/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-500/10 via-red-600/10 to-pink-500/10 rounded-3xl p-12 border border-orange-500/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to be
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                {" "}
                Part of DSU
              </span>
              ?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Join our community of learners, innovators, and leaders shaping
              the future.
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
                Schedule Visit
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Excellence in Education",
                "Research Innovation",
                "Global Recognition",
                "Industry Connect",
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
