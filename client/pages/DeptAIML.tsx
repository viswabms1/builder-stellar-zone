import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Brain,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Languages,
  LineChart,
  Network,
  Rocket,
  Sparkles,
  SquareCode,
} from "lucide-react";

const specializations = [
  { icon: Brain, label: "Machine Learning" },
  { icon: Cpu, label: "Deep Learning" },
  { icon: Languages, label: "Natural Language Processing" },
  { icon: Network, label: "Computer Vision" },
  { icon: SquareCode, label: "Intelligent Automation" },
  { icon: Rocket, label: "Autonomous Robotics" },
];

const highlights = [
  "Integrated liberal education with psychology, design thinking, and creative communication",
  "Curriculum aligned to emerging AI & ML trends with flexible majors, minors, and specialisations",
  "Project-based learning backed by hands-on studios, internships, and UG research opportunities",
  "Blended and hybrid pedagogy that balances theoretical rigor with experiential learning",
  "Entrepreneurship support through DSU's startup ecosystem for prototyping AI-driven ventures",
  "Focus on design-oriented thinking, communication, collaboration, and creativity from Year 1",
];

const careerPaths = [
  "Machine Learning Engineer",
  "AI Research Scientist",
  "Data Scientist / Analyst",
  "Business Intelligence Engineer",
  "Computer Vision Specialist",
  "NLP Engineer",
  "AI Product Architect",
];

const labsAndStudios = [
  {
    title: "AI Innovation Studio",
    description:
      "Immersive project studio integrating machine learning pipelines, deployment sandboxes, and MLOps workflows for student-led solutions.",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "IBM Software Lab for Emerging Technologies",
    description:
      "Industry-partnered facility that accelerates learning in cloud-native AI services, data engineering, and enterprise-grade integrations.",
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "NVIDIA – Boston Innovation Lab",
    description:
      "High-performance computing lab enabling experimentation with GPU-accelerated deep learning, generative AI, and advanced simulation.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Design & Innovation Centre",
    description:
      "Collaborative environment to translate AI concepts into prototypes with rapid design sprints, UX evaluations, and industry mentorship.",
    image:
      "https://images.unsplash.com/photo-1485712207831-935f663eb1dc?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Automation & Robotics Hub",
    description:
      "Hands-on lab for autonomous systems integrating sensors, embedded platforms, and control frameworks for intelligent robotics.",
    image:
      "https://images.unsplash.com/photo-1501601966780-6ea9a272e3df?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Healthcare AI Living Lab",
    description:
      "Applied research space leveraging medical datasets, imaging suites, and interdisciplinary collaborations for healthcare AI innovation.",
    image:
      "https://images.unsplash.com/photo-1587502537681-7905c5a7b81a?q=80&w=1600&auto=format&fit=crop",
  },
];

const valueAdditions = [
  {
    title: "Minor Certifications",
    description:
      "Earn 18-20 credits in allied domains such as Aerospace, Electronics, Mechanical, or Entrepreneurship to complement AI expertise.",
  },
  {
    title: "Specialisation Tracks",
    description:
      "Undertake additional credits in cutting-edge AI areas like Generative Models, Computer Vision, or AI for Edge Computing.",
  },
  {
    title: "Honours Pathway",
    description:
      "Pursue self-directed research or advanced MOOCs (SWAYAM / NPTEL) to graduate with honours credentials in AI & ML.",
  },
];

const courseMatrix = [
  {
    category: "Liberal Arts",
    items: [
      "Technical Communication",
      "Design Thinking",
      "Constitution of India & Ethics",
      "Management & Entrepreneurship",
    ],
  },
  {
    category: "Foundations",
    items: [
      "Engineering Physics & Chemistry",
      "Linear Algebra",
      "Probability & Statistics",
      "Differential Equations",
    ],
  },
  {
    category: "Engineering Sciences",
    items: [
      "Elements of Mechanical Engineering",
      "Basic Electronics",
      "Programming Fundamentals",
      "Electrical Systems",
    ],
  },
  {
    category: "Professional Core",
    items: [
      "Data Structures & Algorithms",
      "Database Systems",
      "Operating Systems",
      "Machine Learning Studio",
      "Artificial Intelligence",
      "Deep Learning",
      "Cloud Application Development",
    ],
  },
  {
    category: "Professional Electives",
    items: [
      "Cognitive Robotics",
      "Human Computer Interaction",
      "ML for Big Data",
      "Natural Language Processing",
      "Computer Vision",
      "Deep Reinforcement Learning",
    ],
  },
  {
    category: "Open Electives & Projects",
    items: [
      "AI for Healthcare",
      "Pattern Recognition",
      "Advanced Internships",
      "Capstone Projects",
      "Industry Hackathons",
    ],
  },
];

const faculty = [
  {
    name: "Dr. Jayavrinda Vrindavanam V",
    title: "Professor & Chairperson, CSE (AI & ML)",
    image:
      "https://www.dsu.edu.in/images/Engineering/CSE-AIML/faculty/jayavrinda.jpg",
  },
  {
    name: "Dr. Vinutha N",
    title: "Associate Professor, CSE (AI & ML)",
    image:
      "https://www.dsu.edu.in/images/Engineering/CSE-AIML/faculty/vinutha.jpg",
  },
  {
    name: "Prof. Pradeep Kumar K",
    title: "Assistant Professor & BOS Coordinator, CSE (AI & ML)",
    image:
      "https://www.dsu.edu.in/images/Engineering/CSE-AIML/faculty/pradeep-kumar.jpg",
  },
];

const contactDetails = [
  {
    label: "Email",
    value: "chairman-aiml@dsu.edu.in",
    href: "mailto:chairman-aiml@dsu.edu.in",
  },
  {
    label: "Phone",
    value: "+91 96366 02677",
    href: "tel:+919636602677",
  },
  {
    label: "DSU Main Campus",
    value: "Devarakaggalahalli, Harohalli, Kanakapura Road, Bengaluru – 562112",
  },
];

export default function DeptAIML() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <OverviewSection />
      <HighlightsSection />
      <LabsSection />
      <CourseMatrixSection />
      <CareersSection />
      <FacultySection />
      <ContactSection />
      <FinalCTA />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative">
      <div className="h-[50vh] md:h-[65vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop"
          alt="Department of Computer Science & Engineering (AI & ML)"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-magenta/20 bg-brand-magenta/10 px-4 py-2">
            <Sparkles className="h-4 w-4 text-brand-magenta" />
            <span className="text-sm font-medium text-brand-magenta font-display">
              Department of Computer Science & Engineering (AI & ML)
            </span>
          </div>
          <h1 className="headline-1 text-white leading-tight font-display">
            Design Intelligent Futures
          </h1>
          <p className="subheadline mt-3 max-w-2xl text-white/90 font-body">
            Blend foundational computer science with advanced artificial
            intelligence and machine learning to build trustworthy,
            human-centred intelligent systems.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {specializations.map((spec) => (
              <span
                key={spec.label}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur"
              >
                <spec.icon className="h-3.5 w-3.5" /> {spec.label}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://admissions.dsu.edu.in/"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="bg-brand-gradient text-foreground">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a
              href="https://www.dsu.edu.in/engineering/cse-aiml"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="outline"
                className="border-brand-magenta/40 hover:bg-brand-magenta/10"
              >
                Visit Department Page
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function OverviewSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="headline-3 font-display">Overview</h2>
          <p className="text-foreground leading-relaxed font-body">
            The B.Tech in Computer Science & Engineering (AI & ML) combines core
            computing foundations with AI-focused coursework spanning natural
            language processing, robotics, reasoning, and intelligent
            decision-making. Students progress through a carefully sequenced
            curriculum covering basic sciences, mathematical and statistical
            foundations, machine learning, and artificial intelligence alongside
            liberal education components that shape holistic technologists.
          </p>
          <p className="text-foreground leading-relaxed font-body">
            From the first year, learners engage with design thinking,
            communication, collaboration, and creativity while working on
            mentored projects, internships, and UG research opportunities.
            DSU&apos;s flexible structure supports majors, minors, and
            specialised tracks so every learner can personalise their journey
            and stay future-ready.
          </p>
          <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-display">
                Curriculum Highlights
              </CardTitle>
              <CardDescription className="font-body">
                Designed for human-centric, industry-ready AI engineers
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 pt-0 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 text-sm text-foreground"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-magenta" />
                  <span>{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="overflow-hidden border border-border/50 bg-card/50">
            <div className="relative h-40">
              <img
                src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop"
                alt="AI research at DSU"
                className="h-full w-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="font-display">Fast Facts</CardTitle>
              <CardDescription className="font-body">
                Impact snapshot of DSU AI & ML
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2 text-sm font-body">
              <FactRow
                label="Programme Duration"
                value="4 Years / 8 Semesters"
              />
              <FactRow
                label="Industry Labs"
                value="IBM, NVIDIA, Automation & Robotics"
              />
              <FactRow
                label="Academic Flexibility"
                value="Majors, Minors & Honours"
              />
              <FactRow
                label="Experiential Learning"
                value="Mandatory internships & capstone"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function HighlightsSection() {
  return (
    <section className="bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <Badge
            className="bg-white/20 text-brand-magenta backdrop-blur"
            variant="secondary"
          >
            Market Potential
          </Badge>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">
            AI & ML is Shaping Global Transformation
          </h2>
          <p className="mt-3 text-sm text-foreground font-body md:text-base">
            Graduates are poised to lead innovations across healthcare, finance,
            aviation, manufacturing, and smart mobility. Explore where your
            skills can make the greatest impact.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "USD 190.6B",
              description:
                "Projected global AI market size by 2025, accelerating demand for skilled engineers.",
              icon: LineChart,
            },
            {
              title: "$58B",
              description:
                "Cumulative investments in machine learning driving digital transformation initiatives worldwide.",
              icon: Award,
            },
            {
              title: "$23B",
              description:
                "Forecasted neural networks market by 2024 highlighting opportunities in deep learning.",
              icon: Brain,
            },
            {
              title: "AI Across Verticals",
              description:
                "From precision healthcare to intelligent logistics, AI-powered solutions redefine possibilities.",
              icon: Sparkles,
            },
          ].map((stat) => (
            <Card
              key={stat.title}
              className="group h-full rounded-3xl border border-border/40 bg-card/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-magenta/10"
            >
              <CardHeader className="space-y-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-magenta/10 text-brand-magenta">
                  <stat.icon className="h-5 w-5" />
                </span>
                <CardTitle className="text-xl font-semibold font-display">
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body text-sm leading-relaxed">
                  {stat.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function LabsSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="headline-3 font-display">
              Innovation Labs & Studios
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-foreground font-body">
              Access DSU&apos;s industry-partnered labs and interdisciplinary
              studios that accelerate experimentation, prototyping, and research
              in artificial intelligence and autonomous systems.
            </p>
          </div>
          <a
            href="https://www.dsu.edu.in/innovation-labs"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
          >
            Explore innovation ecosystem
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {labsAndStudios.map((lab) => (
            <Card
              key={lab.title}
              className="group relative h-80 overflow-hidden rounded-3xl border border-border/40 bg-card/40 backdrop-blur-sm"
            >
              <img
                src={lab.image}
                alt={lab.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-foreground">
                <h3 className="text-lg font-semibold font-display">
                  {lab.title}
                </h3>
                <p className="mt-2 text-sm text-foreground/80 font-body">
                  {lab.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CourseMatrixSection() {
  return (
    <section className="bg-gradient-to-r from-brand-magenta/5 via-brand-orange/5 to-brand-blue/5 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <Badge
            className="bg-white/20 text-brand-magenta backdrop-blur"
            variant="secondary"
          >
            Curriculum Architecture
          </Badge>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">
            Build Depth Across AI & ML Disciplines
          </h2>
          <p className="mt-3 text-sm text-foreground font-body md:text-base">
            A balanced matrix covering liberal learning, foundational sciences,
            engineering sciences, and advanced AI stacks ensures graduates can
            analyse, optimise, and innovate responsibly.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courseMatrix.map((category) => (
            <Card
              key={category.category}
              className="h-full rounded-3xl border border-border/40 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader>
                <CardTitle className="text-lg font-display">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-foreground font-body">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <BadgeCheck className="mt-1 h-4 w-4 text-brand-magenta" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {valueAdditions.map((item) => (
            <Card
              key={item.title}
              className="rounded-3xl border border-brand-magenta/30 bg-card/60 backdrop-blur-sm"
            >
              <CardHeader>
                <CardTitle className="text-lg font-display">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed font-body">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareersSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="headline-3 font-display">Career Pathways</h2>
          <p className="mt-3 text-sm text-foreground font-body">
            Harness DSU&apos;s partnerships, internships, and research
            collaborations to launch careers that span intelligent products,
            data-driven enterprises, and research-intensive organisations.
          </p>
          <Card className="mt-6 border border-border/50 bg-card/50">
            <CardContent className="grid gap-3 p-6">
              {careerPaths.map((role) => (
                <div
                  key={role}
                  className="flex items-start gap-2 text-sm text-foreground font-body"
                >
                  <ChevronRight className="mt-1 h-3 w-3 text-brand-magenta" />
                  <span>{role}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
        <div>
          <h2 className="headline-3 font-display">Internships & Projects</h2>
          <Card className="mt-4 border border-border/50 bg-card/50">
            <CardContent className="space-y-4 p-6 text-sm text-foreground font-body">
              <p>
                Structured summer internships with top technology firms,
                research institutes, and innovation labs expose students to
                real-world AI deployments and interdisciplinary collaboration.
              </p>
              <p>
                Mini-projects are embedded across semesters to strengthen
                applied understanding. Final-year majors tackle societal
                challenges, frontier research, or entrepreneurial prototypes
                mentored by faculty and industry experts.
              </p>
              <p>
                Hackathons, Kaggle-style challenges, and live consultancy briefs
                ensure continuous practice with state-of-the-art tools and
                datasets.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function FacultySection() {
  return (
    <section className="bg-gradient-to-r from-brand-blue/5 to-brand-magenta/5 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="headline-3 font-display">Faculty Leadership</h2>
            <p className="mt-3 max-w-2xl text-sm text-foreground font-body">
              A multidisciplinary team with deep research expertise guides
              learners across machine learning theory, intelligent systems
              engineering, and responsible AI design.
            </p>
          </div>
          <a
            href="https://www.dsu.edu.in/engineering/cse-aiml/faculty"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
          >
            View complete faculty list
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {faculty.map((member) => (
            <Card
              key={member.name}
              className="group relative overflow-hidden rounded-3xl border border-border/40 bg-card/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-magenta/10"
            >
              <div className="relative">
                <div className="aspect-[3/4] w-full" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 p-4">
                <div className="text-foreground text-sm opacity-80 font-body">
                  {member.title}
                </div>
                <div className="text-foreground text-lg font-semibold font-display">
                  {member.name}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <Card className="border border-brand-magenta/30 bg-card/60 backdrop-blur-sm">
          <CardContent className="grid gap-6 p-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-display">
                Connect with the Department
              </h3>
              <p className="mt-3 text-sm text-foreground font-body">
                Reach out for programme counselling, collaborative research, or
                industry partnership enquiries.
              </p>
            </div>
            <div className="space-y-3 text-sm font-body">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex flex-col">
                  <span className="text-xs uppercase tracking-wide text-foreground">
                    {detail.label}
                  </span>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="text-brand-magenta hover:underline"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <span className="text-foreground">{detail.value}</span>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <Card className="rounded-3xl border border-brand-magenta/30 bg-brand-magenta/5">
          <CardContent className="p-10 text-center">
            <h3 className="headline-3 mb-4 font-display">
              Join DSU&apos;s AI & ML Community
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-foreground font-body">
              Co-create responsible intelligent systems with peers, researchers,
              and industry mentors while advancing the future of artificial
              intelligence.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/admissions">
                <Button className="bg-brand-gradient text-foreground">
                  Start Application
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a
                href="https://www.dsu.edu.in/engineering/cse-aiml"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-brand-magenta/40 hover:bg-brand-magenta/10"
                >
                  Department Website
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function FactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-foreground">{label}</span>
      <span className="font-medium text-foreground">{value}</span>
    </div>
  );
}
