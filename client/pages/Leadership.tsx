import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Award,
  Briefcase,
  Building,
  BookOpen,
  Target,
  Star,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Leadership() {
  const leadershipTeam = [
    {
      role: "Chancellor",
      name: "Dr. D. Hemachandra Sagar",
      description:
        "Join me in taking the first steps as we set up the Dayananda Sagar University (DSU) that is backed by the legacy of Dayananda Sagar Institutions.",
      bio: "Dr. D. Hemachandra Sagar, Chancellor of DSU, leads the university with a vision rooted in the five-decade legacy of Dayananda Sagar Institutions. The Year 2015 marked a major milestone in the pursuit of excellence in higher education. DSU is committed to designing academic programs that reflect present societal needs and future demands, enabling young graduates to be seen as proficient masters in their chosen domains.",
      contact: "Sagar333@hotmail.com | 080-2449-6999",
      image: "https://www.dsu.edu.in/images/demo/chancellor.jpg",
      icon: Target,
    },
    {
      role: "Pro Chancellor",
      name: "Dr. D. Premachandra Sagar",
      description:
        "Success belongs to the hardworking and creative, but it requires institutional leadership, supportive ambience, responsive culture, and access to intellectual, infrastructural, and other critical needs.",
      bio: "Dr. D. Premachandra Sagar, Pro Chancellor of DSU, emphasizes that DSU provides a unique ecosystem and platform for young minds to become innovators, scholars, and entrepreneurs. The university focuses on academics, incubation, and entrepreneurship—enabling students to walk in with ideas and emerge market-ready.",
      contact: "premachandra.sagar@yahoo.com | 080-24496999",
      image: "https://www.dsu.edu.in/images/demo/prochancellor1.jpg",
      icon: Building,
    },
  ];

  const proViceChancellors = [
    {
      role: "Pro Vice Chancellor",
      name: "Prof. R Janardhan",
      description:
        "Bengaluru is now known as the city of innovation and enterprise, globally. Dayananda Sagar University located in Bengaluru reflects that culture.",
      bio: "Prof. R Janardhan, Pro-Vice Chancellor of DSU, emphasizes the university's role in fostering innovation and entrepreneurship. The campus at Kudlu Gate on Hosur Road exemplifies industry and academia partnerships. DSU provides a unique ecosystem with industry-sponsored labs, the AIC-DSU Foundation supported by a Rs 10.00 Crore grant, and a BTech in CS & Entrepreneurship. DSU is pioneering entrepreneurship education from Class 9 onwards, and continues to provide comprehensive support across academics, research, fitness, sports, arts, culture, innovation, entrepreneurship, and community service.",
      contact: "janardhan.dsi@gmail.com | 9845074091",
      image: "https://www.dsu.edu.in/images/Prof_R_Janardhan.jpg",
      icon: BookOpen,
    },
    {
      role: "Pro Vice Chancellor",
      name: "Dr. Prakash Sheelvanthmath",
      description:
        "We heartily welcome you to Dayananda Sagar University—a distinguished institution of higher learning established under the visionary aegis of Mahatma Gandhi Vidya Peetha.",
      bio: "Dr. Prakash S, Pro-Vice Chancellor, leads DSU's AI-centric transformation. The university aims to create a personalized, multidisciplinary, paperless ecosystem that enables each learner to realize their unique 'Talent DNA'. DSU is embedding intelligence into ERP, LMS, and operations to become an agile, insight-driven institution with an AI-First approach.",
      contact: "pvc-prakash@dsu.edu.in | 9535797327",
      image: "https://www.dsu.edu.in/images/Dr_Prakash_S.jpg",
      icon: BookOpen,
    },
  ];

  const registrarAndViceChancellor = [
    {
      role: "Registrar",
      name: "Dr. Puttamadappa C",
      description:
        "I heartily welcome you to Dayananda Sagar University, Bangalore, established under Mahatma Gandhi Vidya Peetha, a splendid temple of learning under the leadership of Dr. D Hemachandra Sagar, Chancellor and Dr. D Premachandra Sagar, Pro-Chancellor.",
      bio: "Dr. Puttamadappa C, Registrar of DSU, oversees the administrative and academic operations of the university. At DSU, commitment to opening vast avenues of learning, especially in cutting edge technologies with thrust on creation and innovation, is paramount. The Registrar ensures that DSU consistently strives to provide education that leads to degrees relevant to today's workplace in a global setting, while maintaining excellence, effectiveness, academic rigor and personalized services.",
      contact: "registrar@dsu.edu.in | 9845716228",
      image: "https://www.dsu.edu.in/images/demo/Dr_Puttamadappa.jpg",
      icon: BookOpen,
    },
    {
      role: "Vice Chancellor",
      name: "Prof B. S. Satyanarayana",
      description:
        "We are in a rapidly changing world where knowledge life cycles have reduced drastically, and product and process life cycles are getting even shorter.",
      bio: "Prof B. S. Satyanarayana, Vice Chancellor of DSU (Ph.D from University of Cambridge), leads the university with a vision to enable learners to excel in education, research, innovation & entrepreneurship for a sustainable tomorrow. DSU aims to create a state-of-the-art campus with a unique, serene, and conducive ambience for multidisciplinary immersive experiential learning.",
      contact: "vicechancellor@dsu.edu.in | 9900084234",
      image: "https://www.dsu.edu.in/images/Prof_Satyanarayana.jpeg",
      icon: Briefcase,
    },
  ];

  const deans = [
    {
      area: "School of Engineering",
      description: "Oversees engineering programs and technical innovation",
      focus: ["B.Tech Programs", "Research", "Industry Partnerships"],
    },
    {
      area: "School of Computer Applications",
      description: "Leads IT and computer science education",
      focus: ["CS Programs", "AI & ML", "Software Innovation"],
    },
    {
      area: "School of Applied Sciences",
      description: "Manages basic and applied science programs",
      focus: ["Science Education", "Research", "Laboratory Management"],
    },
    {
      area: "School of Management",
      description: "Directs management and business education",
      focus: ["MBA Programs", "Executive Education", "Industry Connect"],
    },
    {
      area: "School of Law",
      description: "Oversees law education and legal research",
      focus: ["Law Programs", "Legal Research", "Clinical Programs"],
    },
    {
      area: "School of Health Sciences",
      description: "Manages healthcare and medical education",
      focus: ["Health Programs", "Clinical Training", "Research"],
    },
  ];

  const committees = [
    {
      name: "Board of Governors",
      icon: Users,
      description: "Strategic governance and institutional oversight",
      functions: [
        "University policy development",
        "Financial oversight",
        "Institutional accountability",
      ],
      link: "/about/board-of-governors",
    },
    {
      name: "Academic Council",
      icon: BookOpen,
      description: "Academic matters and curriculum development",
      functions: [
        "Curriculum approval",
        "Academic standards",
        "Research promotion",
      ],
    },
    {
      name: "Board of Management",
      icon: Building,
      description: "Day-to-day operational management",
      functions: [
        "Administrative decisions",
        "Resource management",
        "Campus operations",
      ],
      link: "/about/board-of-management",
    },
    {
      name: "Research & Innovation Council",
      icon: Award,
      description: "Research strategy and innovation initiatives",
      functions: [
        "Research promotion",
        "Innovation support",
        "Collaboration facilitation",
      ],
    },
    {
      name: "Finance Committee",
      icon: Briefcase,
      description: "Financial planning and resource allocation",
      functions: [
        "Budget planning",
        "Financial oversight",
        "Resource optimization",
      ],
    },
    {
      name: "IQAC (Quality)",
      icon: Target,
      description: "Quality assurance and institutional effectiveness",
      functions: [
        "Quality monitoring",
        "Accreditation preparation",
        "Continuous improvement",
      ],
    },
  ];

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
              Our Team
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Leadership & Administration
            </span>
          </h1>

          <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Visionary leaders and dedicated administrators driving academic excellence and institutional growth.
          </p>
        </div>
      </section>

      {/* Key Leadership Positions */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Key Leadership
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Executive team guiding the university's mission and vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {leadershipTeam.map((leader, index) => {
              const Icon = leader.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:border-orange-500/30 bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden"
                >
                  {/* Leader Image */}
                  {leader.image && (
                    <div className="relative w-full bg-gradient-to-br from-orange-500/10 to-red-600/10 flex items-center justify-center h-96">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  )}

                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl font-bold group-hover:text-orange-500 transition-colors">
                          {leader.role}
                        </CardTitle>
                        <p className="text-sm text-foreground mt-1">
                          {leader.name}
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors flex-shrink-0">
                        <Icon className="w-6 h-6 text-orange-500" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">
                        Leadership Vision:
                      </p>
                      <p className="text-sm text-foreground italic border-l-2 border-orange-500/30 pl-3">
                        "{leader.description}"
                      </p>
                    </div>
                    <p className="text-foreground text-sm leading-relaxed">
                      {leader.bio}
                    </p>
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-xs font-semibold text-foreground mb-2">
                        Contact:
                      </p>
                      <p className="text-xs text-foreground">
                        {leader.contact}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Registrar and Vice Chancellor */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Administrative Leadership
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Key officers managing university operations and academic affairs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {registrarAndViceChancellor.map((leader, index) => {
              const Icon = leader.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:border-orange-500/30 bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden flex flex-col"
                >
                  {/* Leader Image */}
                  {leader.image && (
                    <div className="relative w-full bg-gradient-to-br from-orange-500/10 to-red-600/10 flex items-center justify-center h-96">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  )}

                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl font-bold group-hover:text-orange-500 transition-colors">
                          {leader.role}
                        </CardTitle>
                        <p className="text-sm text-foreground mt-1">
                          {leader.name}
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors flex-shrink-0">
                        <Icon className="w-6 h-6 text-orange-500" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow">
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">
                        Leadership Vision:
                      </p>
                      <p className="text-sm text-foreground italic border-l-2 border-orange-500/30 pl-3">
                        "{leader.description}"
                      </p>
                    </div>
                    <p className="text-foreground text-sm leading-relaxed">
                      {leader.bio}
                    </p>
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-xs font-semibold text-foreground mb-2">
                        Contact:
                      </p>
                      <p className="text-xs text-foreground">
                        {leader.contact}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pro Vice Chancellors */}
      <section className="px-6 py-20 bg-gradient-to-br from-orange-500/5 via-red-600/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Pro Vice Chancellors
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Academic visionaries shaping the university's future
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {proViceChancellors.map((pvc, index) => {
              const Icon = pvc.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:border-orange-500/30 bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden flex flex-col"
                >
                  {/* Leader Image */}
                  {pvc.image && (
                    <div className="relative w-full bg-gradient-to-br from-orange-500/10 to-red-600/10 flex items-center justify-center h-96">
                      <img
                        src={pvc.image}
                        alt={pvc.name}
                        className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  )}

                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl font-bold group-hover:text-orange-500 transition-colors">
                          {pvc.role}
                        </CardTitle>
                        <p className="text-sm text-foreground mt-1">
                          {pvc.name}
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors flex-shrink-0">
                        <Icon className="w-6 h-6 text-orange-500" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow">
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">
                        Leadership Vision:
                      </p>
                      <p className="text-sm text-foreground italic border-l-2 border-orange-500/30 pl-3">
                        "{pvc.description}"
                      </p>
                    </div>
                    <p className="text-foreground text-sm leading-relaxed">
                      {pvc.bio}
                    </p>
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-xs font-semibold text-foreground mb-2">
                        Contact:
                      </p>
                      <p className="text-xs text-foreground">
                        {pvc.contact}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* School Deans */}
      <section className="px-6 py-20 bg-gradient-to-br from-orange-500/5 via-red-600/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="border-orange-500/20 bg-orange-500/10 text-orange-500 mb-4"
            >
              Deans of Schools
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Academic </span>
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Leadership
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Experienced academics leading our schools and academic programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deans.map((dean, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-orange-500/30 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{dean.area}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground text-sm">
                    {dean.description}
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">
                      Key Focus:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {dean.focus.map((focus, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                        >
                          {focus}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Committees */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="border-orange-500/20 bg-orange-500/10 text-orange-500 mb-4"
            >
              Governance Structure
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Administrative Committees
              </span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Committees ensuring transparent governance and institutional excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committees.map((committee, index) => {
              const Icon = committee.icon;
              const cardElement = (
                <Card
                  key={index}
                  className="group hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:border-orange-500/30 bg-card/50 backdrop-blur-sm border border-border/50"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-orange-500 transition-colors">
                      {committee.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {committee.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {committee.functions.map((func, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-foreground"
                        >
                          <Star className="w-3 h-3 text-orange-500 flex-shrink-0" />
                          {func}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );

              if (committee.link) {
                return (
                  <Link key={index} to={committee.link}>
                    {cardElement}
                  </Link>
                );
              }
              return cardElement;
            })}
          </div>
        </div>
      </section>

      {/* Organizational Values */}
      <section className="px-6 py-20 bg-gradient-to-r from-orange-500/5 to-red-600/5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Leadership Principles
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Academic Excellence",
                  description:
                    "Maintaining highest standards in teaching, research, and student development",
                },
                {
                  title: "Transparency",
                  description:
                    "Open communication and transparent decision-making in all matters",
                },
                {
                  title: "Innovation",
                  description:
                    "Encouraging creative thinking and continuous improvement",
                },
                {
                  title: "Inclusivity",
                  description:
                    "Fostering diverse perspectives and inclusive environment",
                },
                {
                  title: "Accountability",
                  description:
                    "Taking responsibility for decisions and institutional outcomes",
                },
                {
                  title: "Collaboration",
                  description:
                    "Working together with faculty, staff, and stakeholders",
                },
              ].map((principle, index) => (
                <div
                  key={index}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <Star className="w-5 h-5 text-orange-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-foreground">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Connect With Our Team
          </h2>
          <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
            Have questions? Reach out to our administration for more information.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@dsu.edu.in">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-red-600 hover:to-orange-500 text-foreground px-8 py-6 font-semibold rounded-2xl"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <Link to="/about">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-foreground px-8 py-6 font-semibold rounded-2xl"
              >
                Back to About
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
