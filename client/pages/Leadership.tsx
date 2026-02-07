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
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function Leadership() {
  const leadershipTeam = [
    {
      role: "Chancellor",
      name: "Dr. D. Hemachandra Sagar",
      focus: "Institutional vision, academic strategy, and legacy-driven growth",
      message:
        "Join me in taking the first steps as we set up the Dayananda Sagar University (DSU) that is backed by the legacy of Dayananda Sagar Institutions.",
      bio: "Dr. D. Hemachandra Sagar leads DSU with a vision anchored in the legacy of Dayananda Sagar Institutions while steering the university toward future-ready academic models. Under his leadership, DSU focuses on programs aligned with societal needs and emerging global demands.",
      contact: "chancellor.office@dsu.edu.in",
      image: "https://www.dsu.edu.in/images/demo/chancellor.jpg",
      icon: Target,
    },
    {
      role: "Pro Chancellor",
      name: "Dr. D. Premachandra Sagar",
      focus: "Incubation ecosystem, entrepreneurship culture, and student innovation",
      message:
        "Success belongs to the hardworking and creative, but it requires institutional leadership, supportive ambience, responsive culture, and access to intellectual, infrastructural, and other critical needs.",
      bio: "Dr. D. Premachandra Sagar leads the university's entrepreneurial mission, providing a unique ecosystem and platform for young minds to become innovators, scholars, and entrepreneurs. The university focuses on academics, incubation, and entrepreneurship—enabling students to emerge market-ready.",
      contact: "prochancellor.office@dsu.edu.in",
      image: "https://www.dsu.edu.in/images/demo/prochancellor1.jpg",
      icon: Building,
    },
  ];

  const registrarAndViceChancellor = [
    {
      role: "Vice Chancellor",
      name: "Prof B. S. Satyanarayana",
      focus: "Academic excellence, research promotion, and sustainable learning",
      message:
        "We are in a rapidly changing world where knowledge life cycles have reduced drastically, and product and process life cycles are getting even shorter.",
      bio: "Prof B. S. Satyanarayana (Ph.D from University of Cambridge) leads the university with a vision to enable learners to excel in education, research, innovation & entrepreneurship for a sustainable tomorrow. DSU aims to create a state-of-the-art campus with a unique, serene, and conducive ambience for multidisciplinary immersive experiential learning.",
      contact: "vc.office@dsu.edu.in",
      image: "https://www.dsu.edu.in/images/Prof_Satyanarayana.jpeg",
      icon: Briefcase,
    },
    {
      role: "Registrar",
      name: "Dr. Puttamadappa C",
      focus: "Administrative excellence, academic compliance, and operational efficiency",
      message:
        "I heartily welcome you to Dayananda Sagar University, Bangalore, established under Mahatma Gandhi Vidya Peetha.",
      bio: "Dr. Puttamadappa C oversees the administrative and academic operations of the university. DSU's commitment to opening vast avenues of learning, especially in cutting edge technologies with thrust on creation and innovation, is paramount. The Registrar ensures consistent delivery of education relevant to today's workplace in a global setting.",
      contact: "registrar.office@dsu.edu.in",
      image: "https://www.dsu.edu.in/images/demo/Dr_Puttamadappa.jpg",
      icon: BookOpen,
    },
  ];

  const proViceChancellors = [
    {
      role: "Pro Vice Chancellor",
      name: "Prof. R Janardhan",
      focus: "Innovation ecosystems and entrepreneurship development",
      message:
        "Bengaluru is now known as the city of innovation and enterprise, globally. Dayananda Sagar University located in Bengaluru reflects that culture.",
      bio: "Prof. R Janardhan emphasizes the university's role in fostering innovation and entrepreneurship. The campus exemplifies industry and academia partnerships.",
      contributions: [
        "Innovation and entrepreneurship ecosystems development",
        "Industry-sponsored labs and research facilities",
        "AIC-DSU Foundation with Rs 10.00 Crore grant management",
        "BTech in CS & Entrepreneurship program leadership",
        "Comprehensive support in research, sports, arts, and community service",
      ],
      image: "https://www.dsu.edu.in/images/Prof_R_Janardhan.jpg",
      icon: BookOpen,
    },
    {
      role: "Pro Vice Chancellor",
      name: "Dr. Prakash Sheelvanthmath",
      focus: "AI-First institutional transformation and personalized learning",
      message:
        "We heartily welcome you to Dayananda Sagar University—a distinguished institution of higher learning established under the visionary aegis of Mahatma Gandhi Vidya Peetha.",
      bio: "Dr. Prakash S leads DSU's AI-centric transformation. The university aims to create a personalized, multidisciplinary, paperless ecosystem that enables each learner to realize their unique 'Talent DNA'.",
      contributions: [
        "AI-First institutional transformation",
        "Intelligent ERP & LMS integration",
        "Personalized, paperless academic ecosystem",
        "Multidisciplinary and talent-centric education model",
        "Data-driven insights for agile institutional management",
      ],
      image: "https://www.dsu.edu.in/images/Dr_Prakash_S.jpg",
      icon: BookOpen,
    },
  ];

  const founders = [
    {
      name: "Late Shri R Dayananda Sagar",
      title: "Visionary Educationist",
      bio: "Graduate in Arts & Commerce from India & a barrister-at-law from England. His visionary leadership laid the foundation for the institution's commitment to excellence and innovation.",
      impact: "His values continue to guide DSU's emphasis on excellence, ethics, and service-oriented education.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fcacac77f6c114bb1a4a34ad1388f4453?format=webp&width=800",
      alt: "Late Shri R Dayananda Sagar",
    },
    {
      name: "Late Smt Chandramma Sagar",
      title: "Healthcare Pioneer",
      bio: "The first Indian woman to have acquired a triple fellowship from the Royal College of Surgeons (FRCS) from London, Edinburgh, and Dublin. A doctor by profession with unwavering dedication to service and excellence.",
      impact: "Her pioneering spirit and commitment to healthcare excellence continue to inspire DSU's emphasis on holistic student development and social responsibility.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F7c95103cd25e4990afc8d402e7cc5d6e?format=webp&width=800",
      alt: "Late Smt Chandramma Sagar",
    },
  ];

  const governanceStructure = {
    strategic: {
      title: "Strategic Governance",
      description: "Institutional oversight and policy direction",
      committees: [
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
      ],
    },
    academic: {
      title: "Academic Governance",
      description: "Academic matters and curriculum development",
      committees: [
        {
          name: "Academic Council",
          icon: BookOpen,
          description: "Academic matters and curriculum development",
          functions: [
            "Curriculum approval",
            "Academic standards",
            "Research promotion",
          ],
          link: "/about/academic-council",
        },
        {
          name: "Board of Studies",
          icon: BookOpen,
          description: "Academic curriculum and study program oversight",
          functions: [
            "Curriculum development",
            "Academic standards",
            "Study program approval",
          ],
          link: "https://www.dsu.edu.in/images/University/BOS.pdf",
          external: true,
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
          link: "/about/research-innovation-council",
        },
      ],
    },
    quality: {
      title: "Quality & Compliance",
      description: "Quality assurance and institutional effectiveness",
      committees: [
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
        {
          name: "Finance Committee",
          icon: Briefcase,
          description: "Financial planning and resource allocation",
          functions: [
            "Budget planning",
            "Financial oversight",
            "Resource optimization",
          ],
          link: "/about/finance-committee",
        },
      ],
    },
  };

  const principles = [
    {
      title: "Academic Excellence",
      description:
        "Maintaining highest standards in teaching, research, and student development through rigorous curriculum and faculty-led innovation.",
    },
    {
      title: "Innovation",
      description:
        "Encouraging interdisciplinary learning, AI-enabled systems, and entrepreneurship-driven education to prepare future leaders.",
    },
    {
      title: "Transparency",
      description:
        "Open communication and transparent decision-making in all institutional matters, ensuring accountability to all stakeholders.",
    },
    {
      title: "Collaboration",
      description:
        "Building strong partnerships with industry, research bodies, and global institutions to enhance learning and research outcomes.",
    },
    {
      title: "Inclusivity",
      description:
        "Fostering diverse perspectives and inclusive environment where all students and faculty members can thrive and contribute.",
    },
    {
      title: "Accountability",
      description:
        "Taking responsibility for decisions and institutional outcomes, continuously improving based on feedback and assessment.",
    },
  ];

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
          <div className="inline-flex items-center px-4 py-2 bg-brand-blue/10 rounded-full border border-brand-blue/40 mb-8">
            <Users className="w-4 h-4 text-brand-blue mr-2" />
            <span className="text-sm font-medium text-brand-blue">
              Our Team
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight font-display text-white">
            Leadership & Administration
          </h1>

          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-1 sm:mb-2 md:mb-6 leading-tight font-display">
            Academic leaders, institutional builders, and administrators shaping DSU's legacy, governance, and future-ready transformation.
          </p>
        </div>
      </section>

      {/* Founding Leadership Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent"></div>

      {/* Founders Section */}
      <section className="px-3 py-20 bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="border-brand-blue/20 bg-brand-blue/10 text-brand-blue mb-4"
            >
              Founding Leadership
            </Badge>
            <h2 className="headline-2 mb-6 font-display">
              <span className="text-foreground">Our </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Founders
              </span>
            </h2>
            <p className="subheadline text-foreground max-w-3xl mx-auto font-display">
              Visionary leaders whose legacy continues to inspire excellence and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <div key={index} className="group text-center">
                <div className="mb-6 relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-magenta/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">
                    <img
                      src={founder.image}
                      alt={founder.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 font-display">
                  {founder.name}
                </h3>
                <p className="text-base sm:text-lg font-semibold text-brand-blue mb-4">
                  {founder.title}
                </p>
                <p className="text-xs sm:text-sm md:text-base text-foreground/80 text-center mb-4 font-body">
                  {founder.bio}
                </p>
                <div className="pt-4 border-t border-brand-blue/20">
                  <p className="text-xs sm:text-sm font-semibold text-brand-blue mb-2">
                    Institutional Impact
                  </p>
                  <p className="text-xs sm:text-sm text-foreground/80 font-body">
                    {founder.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* University Executive Leadership Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent"></div>

      {/* Key Leadership Positions */}
      <section className="px-3 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="border-brand-blue/20 bg-brand-blue/10 text-brand-blue mb-4"
            >
              University Executive Leadership
            </Badge>
            <h2 className="headline-2 mb-6 font-display">
              <span className="text-foreground">Key </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Leadership
              </span>
            </h2>
            <p className="subheadline text-foreground max-w-3xl mx-auto font-display">
              Executive team guiding the university's mission and vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {leadershipTeam.map((leader, index) => {
              const Icon = leader.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300 hover:border-brand-blue/50 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm border border-border/50 overflow-hidden flex flex-col"
                >
                  {/* Leader Image */}
                  {leader.image && (
                    <div className="relative w-full bg-gradient-to-br from-brand-blue/10 to-brand-magenta/10 flex items-center justify-center h-80">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                  )}

                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-grow">
                        <CardTitle className="text-lg sm:text-xl md:text-2xl font-display font-bold group-hover:text-brand-blue transition-colors">
                          {leader.name}
                        </CardTitle>
                        <p className="text-xs sm:text-sm font-semibold text-brand-blue mt-1">
                          {leader.role}
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors flex-shrink-0">
                        <Icon className="w-6 h-6 text-brand-blue group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4 flex-grow flex flex-col">
                    <div>
                      <p className="text-xs font-semibold text-brand-blue mb-1">
                        LEADERSHIP FOCUS
                      </p>
                      <p className="text-xs sm:text-sm font-medium text-foreground">
                        {leader.focus}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-foreground leading-relaxed flex-grow font-body">
                      {leader.bio}
                    </p>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="message" className="border-none">
                        <AccordionTrigger className="text-xs sm:text-sm font-semibold text-brand-blue hover:text-brand-blue/80 py-2 px-0">
                          <span className="flex items-center gap-2">
                            <ChevronDown className="w-4 h-4" />
                            Read {leader.role}'s Message
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-xs sm:text-sm text-foreground italic border-l-2 border-brand-blue/30 pl-3 pb-0 font-body">
                          "{leader.message}"
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <div className="pt-4 border-t border-border/50 mt-auto">
                      <p className="text-xs font-semibold text-foreground mb-2">
                        📩 CONTACT
                      </p>
                      <p className="text-xs text-foreground break-all font-body">
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
      <section className="px-3 py-20 bg-gradient-to-br from-brand-blue/5 via-brand-magenta/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="border-brand-blue/20 bg-brand-blue/10 text-brand-blue mb-4"
            >
              Administrative Leadership
            </Badge>
            <h2 className="headline-2 mb-6 font-display">
              <span className="text-foreground">Executive </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Officers
              </span>
            </h2>
            <p className="subheadline text-foreground max-w-3xl mx-auto font-display">
              Key officers managing university operations and academic affairs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {registrarAndViceChancellor.map((leader, index) => {
              const Icon = leader.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300 hover:border-brand-blue/50 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm border border-border/50 overflow-hidden flex flex-col"
                >
                  {/* Leader Image */}
                  {leader.image && (
                    <div className="relative w-full bg-gradient-to-br from-brand-blue/10 to-brand-magenta/10 flex items-center justify-center h-80">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                  )}

                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-grow">
                        <CardTitle className="text-lg sm:text-xl md:text-2xl font-display font-bold group-hover:text-brand-blue transition-colors">
                          {leader.name}
                        </CardTitle>
                        <p className="text-xs sm:text-sm font-semibold text-brand-blue mt-1">
                          {leader.role}
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors flex-shrink-0">
                        <Icon className="w-6 h-6 text-brand-blue group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4 flex-grow flex flex-col">
                    <div>
                      <p className="text-xs font-semibold text-brand-blue mb-1">
                        LEADERSHIP FOCUS
                      </p>
                      <p className="text-xs sm:text-sm font-medium text-foreground">
                        {leader.focus}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-foreground leading-relaxed flex-grow font-body">
                      {leader.bio}
                    </p>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="message" className="border-none">
                        <AccordionTrigger className="text-xs sm:text-sm font-semibold text-brand-blue hover:text-brand-blue/80 py-2 px-0">
                          <span className="flex items-center gap-2">
                            <ChevronDown className="w-4 h-4" />
                            Read {leader.role}'s Message
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-xs sm:text-sm text-foreground italic border-l-2 border-brand-blue/30 pl-3 pb-0 font-body">
                          "{leader.message}"
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <div className="pt-4 border-t border-border/50 mt-auto">
                      <p className="text-xs font-semibold text-foreground mb-2">
                        📩 CONTACT
                      </p>
                      <p className="text-xs text-foreground break-all font-body">
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

      {/* Academic Leadership Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent"></div>

      {/* Pro Vice Chancellors */}
      <section className="px-3 py-20 bg-gradient-to-br from-brand-blue/5 via-brand-magenta/3 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="border-brand-blue/20 bg-brand-blue/10 text-brand-blue mb-4"
            >
              Academic Leadership
            </Badge>
            <h2 className="headline-2 mb-6 font-display">
              <span className="text-foreground">Pro Vice </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Chancellors
              </span>
            </h2>
            <p className="subheadline text-foreground max-w-3xl mx-auto font-display">
              Academic visionaries shaping the university's future
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {proViceChancellors.map((pvc, index) => {
              const Icon = pvc.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300 hover:border-brand-blue/50 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm border border-border/50 overflow-hidden flex flex-col"
                >
                  {/* Leader Image */}
                  {pvc.image && (
                    <div className="relative w-full bg-gradient-to-br from-brand-blue/10 to-brand-magenta/10 flex items-center justify-center h-80">
                      <img
                        src={pvc.image}
                        alt={pvc.name}
                        className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                  )}

                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-grow">
                        <CardTitle className="text-lg sm:text-xl md:text-2xl font-display font-bold group-hover:text-brand-blue transition-colors">
                          {pvc.name}
                        </CardTitle>
                        <p className="text-xs sm:text-sm font-semibold text-brand-blue mt-1">
                          {pvc.role}
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors flex-shrink-0">
                        <Icon className="w-6 h-6 text-brand-blue group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4 flex-grow flex flex-col">
                    <div>
                      <p className="text-xs font-semibold text-brand-blue mb-1">
                        LEADERSHIP FOCUS
                      </p>
                      <p className="text-xs sm:text-sm font-medium text-foreground">
                        {pvc.focus}
                      </p>
                    </div>

                    <p className="text-sm text-foreground leading-relaxed">
                      {pvc.bio}
                    </p>

                    <div>
                      <p className="text-xs font-semibold text-orange-500 mb-2">
                        KEY CONTRIBUTIONS
                      </p>
                      <ul className="space-y-1">
                        {pvc.contributions.map((contribution, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs text-foreground"
                          >
                            <Star className="w-3 h-3 text-orange-500 flex-shrink-0 mt-0.5" />
                            <span>{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="message" className="border-none">
                        <AccordionTrigger className="text-xs sm:text-sm font-semibold text-brand-blue hover:text-brand-blue/80 py-2 px-0">
                          <span className="flex items-center gap-2">
                            <ChevronDown className="w-4 h-4" />
                            Read {pvc.role}'s Message
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-xs sm:text-sm text-foreground italic border-l-2 border-brand-blue/30 pl-3 pb-0 font-body">
                          "{pvc.message}"
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <div className="pt-4 border-t border-border/50 mt-auto">
                      <p className="text-xs font-semibold text-foreground mb-2">
                        📩 CONTACT
                      </p>
                      <p className="text-xs text-foreground">
                        For official communication, please contact the University Administration Office.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Governance Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent"></div>

      {/* Governance Committees */}
      <section id="administrative-committees" className="px-3 py-20 bg-gradient-to-br from-brand-blue/5 via-brand-magenta/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="border-brand-blue/20 bg-brand-blue/10 text-brand-blue mb-4"
            >
              Governance Structure
            </Badge>
            <h2 className="headline-2 mb-6 font-display">
              <span className="text-foreground">Governance & </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Committees
              </span>
            </h2>
            <p className="subheadline text-foreground max-w-3xl mx-auto mb-8 font-display">
              DSU follows a multi-tier governance model to ensure transparency, academic rigor, and continuous improvement.
            </p>
          </div>

          {/* Strategic Governance */}
          <div className="mb-16">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 font-display text-foreground">
              Strategic Governance
            </h3>
            <p className="text-foreground/70 mb-8 max-w-3xl">
              {governanceStructure.strategic.description}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {governanceStructure.strategic.committees.map(
                (committee, index) => {
                  const Icon = committee.icon;
                  const cardElement = (
                    <Card
                      key={index}
                      className="group hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300 hover:border-brand-blue/50 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm border border-border/50"
                    >
                      <CardHeader>
                        <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-4 group-hover:bg-brand-blue/20 transition-colors">
                          <Icon className="w-6 h-6 text-brand-blue group-hover:scale-110 transition-transform" />
                        </div>
                        <CardTitle className="text-sm sm:text-base md:text-lg font-display group-hover:text-brand-blue transition-colors">
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
                              <Star className="w-3 h-3 text-brand-blue flex-shrink-0" />
                              {func}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );

                  if (committee.link) {
                    if (
                      committee.external ||
                      committee.link.startsWith("http")
                    ) {
                      return (
                        <a
                          key={index}
                          href={committee.link}
                          target="_blank"
                          rel="noreferrer"
                          className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
                        >
                          {cardElement}
                        </a>
                      );
                    } else {
                      return (
                        <Link
                          key={index}
                          to={committee.link}
                          className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
                        >
                          {cardElement}
                        </Link>
                      );
                    }
                  }
                  return cardElement;
                }
              )}
            </div>
          </div>

          {/* Academic Governance */}
          <div className="mb-16">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 font-display text-foreground">
              Academic Governance
            </h3>
            <p className="text-foreground/70 mb-8 max-w-3xl">
              {governanceStructure.academic.description}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {governanceStructure.academic.committees.map(
                (committee, index) => {
                  const Icon = committee.icon;
                  const cardElement = (
                    <Card
                      key={index}
                      className="group hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300 hover:border-brand-blue/50 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm border border-border/50"
                    >
                      <CardHeader>
                        <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-4 group-hover:bg-brand-blue/20 transition-colors">
                          <Icon className="w-6 h-6 text-brand-blue group-hover:scale-110 transition-transform" />
                        </div>
                        <CardTitle className="text-sm sm:text-base md:text-lg font-display group-hover:text-brand-blue transition-colors">
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
                              <Star className="w-3 h-3 text-brand-blue flex-shrink-0" />
                              {func}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );

                  if (committee.link) {
                    if (
                      committee.external ||
                      committee.link.startsWith("http")
                    ) {
                      return (
                        <a
                          key={index}
                          href={committee.link}
                          target="_blank"
                          rel="noreferrer"
                          className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
                        >
                          {cardElement}
                        </a>
                      );
                    } else {
                      return (
                        <Link
                          key={index}
                          to={committee.link}
                          className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
                        >
                          {cardElement}
                        </Link>
                      );
                    }
                  }
                  return cardElement;
                }
              )}
            </div>
          </div>

          {/* Quality & Compliance */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 font-display text-foreground">
              Quality & Compliance
            </h3>
            <p className="text-foreground/70 mb-8 max-w-3xl">
              {governanceStructure.quality.description}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {governanceStructure.quality.committees.map(
                (committee, index) => {
                  const Icon = committee.icon;
                  const cardElement = (
                    <Card
                      key={index}
                      className="group hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300 hover:border-brand-blue/50 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm border border-border/50"
                    >
                      <CardHeader>
                        <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-4 group-hover:bg-brand-blue/20 transition-colors">
                          <Icon className="w-6 h-6 text-brand-blue group-hover:scale-110 transition-transform" />
                        </div>
                        <CardTitle className="text-sm sm:text-base md:text-lg font-display group-hover:text-brand-blue transition-colors">
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
                              <Star className="w-3 h-3 text-brand-blue flex-shrink-0" />
                              {func}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );

                  if (committee.link) {
                    if (
                      committee.external ||
                      committee.link.startsWith("http")
                    ) {
                      return (
                        <a
                          key={index}
                          href={committee.link}
                          target="_blank"
                          rel="noreferrer"
                          className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
                        >
                          {cardElement}
                        </a>
                      );
                    } else {
                      return (
                        <Link
                          key={index}
                          to={committee.link}
                          className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
                        >
                          {cardElement}
                        </Link>
                      );
                    }
                  }
                  return cardElement;
                }
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Values Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent"></div>

      {/* Organizational Values */}
      <section className="px-3 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="border-brand-blue/20 bg-brand-blue/10 text-brand-blue mb-4"
            >
              Leadership Values
            </Badge>
            <h2 className="headline-2 mb-6 font-display">
              <span className="text-foreground">Leadership </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Principles
              </span>
            </h2>
            <p className="subheadline text-foreground max-w-3xl mx-auto font-display">
              Core values guiding DSU's institutional direction and decision-making
            </p>
          </div>

          <div className="bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {principles.map((principle, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center">
                      <Star className="w-5 h-5 text-brand-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-semibold text-foreground mb-1 font-display">
                      {principle.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground/80 font-body">
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
      <section className="px-3 py-20 bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-display">
            <span className="text-foreground">Connect With Our </span>
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground mb-6 md:mb-8 max-w-2xl mx-auto font-display leading-tight">
            Have questions? Reach out to our administration for more information about DSU's leadership and governance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@dsu.edu.in">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#0088FF] via-[#FFD700] to-[#FF6B00] hover:from-[#0066FF] hover:via-[#FFC700] hover:to-[#FF5500] text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 transition-all animate-gradient bg-[length:200%_auto]"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <Link to="/about">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue/10 hover:border-brand-blue px-8 py-6 font-semibold rounded-2xl text-base transition-all"
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
