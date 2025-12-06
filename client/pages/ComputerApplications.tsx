import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  BadgeCheck,
  Beaker,
  BookOpen,
  ChevronRight,
  Cpu,
  Eye,
  GraduationCap,
  Heart,
  Laptop,
  MessageSquare,
  Sparkles,
  Target,
  Users,
  Volume2,
  VolumeX,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Highlight = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  stat?: string;
};

type ProgramGroup = {
  label: string;
  programs: string[];
};

type ResourceLink = {
  title: string;
  description: string;
  href: string;
  badge: string;
};

type LabExperience = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type Achievement = {
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
};

type LifeAtDSU = {
  title: string;
  description: string;
  image: string;
};

type FacultyMember = {
  name: string;
  title: string;
  specialization: string;
  image: string;
};

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?q=80&w=2000&auto=format&fit=crop";

const USP_HIGHLIGHTS: Highlight[] = [
  {
    title: "Nurturing Fresh IT Talent",
    description:
      "Established in 2016-17 to empower the next generation of developers, analysts and product builders with future-ready skills.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",
    icon: Award,
    stat: "8+ Years of Impact",
  },
  {
    title: "Skill-First Curriculum",
    description:
      "Specialise early in app development, cloud, AI or analytics with project studios and hackathons embedded in each semester.",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1600&auto=format&fit=crop",
    icon: Sparkles,
  },
  {
    title: "Industry Immersion Labs",
    description:
      "Gain hands-on time in IBM, NVIDIA, VMware and Automation Technology labs for real-world problem solving.",
    image:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop",
    icon: Cpu,
  },
  {
    title: "Expanding Data Science Futures",
    description:
      "Launching B.Sc and M.Sc in Data Science from 2025-26 to elevate advanced analytics talent.",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop",
    icon: BadgeCheck,
  },
];

const PROGRAM_GROUPS: ProgramGroup[] = [
  {
    label: "Undergraduate",
    programs: ["Bachelor of Computer Applications", "B.Sc in Data Science"],
  },
  {
    label: "Postgraduate",
    programs: ["Master of Computer Applications", "M.Sc in Data Science"],
  },
];

const LAB_EXPERIENCES: LabExperience[] = [
  {
    title: "IBM Software Lab for Emerging Technologies",
    description:
      "Co-innovate on enterprise stack modernisation and full-stack development challenges.",
    icon: Laptop,
  },
  {
    title: "NVIDIA – Boston Innovation Lab",
    description:
      "Prototype AI, XR and accelerated computing solutions with industry-grade toolchains.",
    icon: Cpu,
  },
  {
    title: "VMware IT Academy",
    description:
      "Master cloud infrastructure, virtualisation and automation workflows with certifications.",
    icon: Beaker,
  },
];

const RESOURCE_LINKS: ResourceLink[] = [
  {
    title: "Academic Calendar 2025-26",
    description:
      "Download the latest academic roadmap for Computer Applications cohorts.",
    href: "https://www.dsu.edu.in/images/AC_11082025.pdf",
    badge: "Calendar",
  },
  {
    title: "Events Conducted",
    description:
      "Catch up on ideathons, tech talks and community meetups hosted by the school.",
    href: "https://www.dsu.edu.in/news-events/events-computer-applications",
    badge: "Events",
  },
  {
    title: "Research Updates",
    description:
      "Explore publications and projects undertaken by faculty and students.",
    href: "https://www.dsu.edu.in/computer-applications/research-sca",
    badge: "Research",
  },
];

const STUDENT_ACHIEVEMENTS: Achievement[] = [
  {
    title: "hackathon Winners",
    description:
      "20+ students placed in national hackathons and coding competitions in 2024",
    icon: Award,
    category: "Competition",
  },
  {
    title: "Startup Founders",
    description:
      "8 student-led startups incubated with mentorship and seed funding",
    icon: Target,
    category: "Entrepreneurship",
  },
  {
    title: "Research Publications",
    description:
      "15+ peer-reviewed papers published by students in international conferences",
    icon: BookOpen,
    category: "Research",
  },
  {
    title: "Global Certifications",
    description:
      "95% students earn AWS, Google Cloud, or Azure certifications before graduation",
    icon: BadgeCheck,
    category: "Certification",
  },
];

const FACULTY_ACHIEVEMENTS: Achievement[] = [
  {
    title: "Patent Holders",
    description:
      "12 faculty members with active patents in AI, cloud computing and data science",
    icon: Award,
    category: "Patents",
  },
  {
    title: "Research Grants",
    description:
      "₹2.5 Cr+ in funded research projects from government and industry bodies",
    icon: Sparkles,
    category: "Funding",
  },
  {
    title: "Publications",
    description:
      "50+ journal publications and 100+ conference papers in top-tier venues",
    icon: BookOpen,
    category: "Publishing",
  },
  {
    title: "Industry Collaborations",
    description:
      "Active partnerships with IBM, NVIDIA, Google, and Amazon for research projects",
    icon: Users,
    category: "Collaboration",
  },
];

const LIFE_AT_DSU: LifeAtDSU[] = [
  {
    title: "Collaborative Learning Spaces",
    description:
      "Modern classrooms, AI-powered labs, and collaborative studios designed for peer learning and project-based education.",
    image:
      "https://images.unsplash.com/photo-1522202176988-15695038929c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Student Clubs & Communities",
    description:
      "20+ student-led technical clubs, coding communities, and innovation forums fostering peer mentorship and skill-sharing.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Campus Wellness & Culture",
    description:
      "Holistic development through sports, arts, wellness programs and cultural events celebrating diverse backgrounds.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Global Exposure",
    description:
      "International collaborations, student exchanges, and global hackathons connecting learners with worldwide tech communities.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop",
  },
];

const FEATURED_FACULTY: FacultyMember[] = [
  {
    name: "Dr. Amit Sharma",
    title: "Program Chair & Professor",
    specialization: "Cloud Computing & Distributed Systems",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Dr. Priya Patel",
    title: "Associate Professor",
    specialization: "AI & Machine Learning",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Dr. Rajesh Kumar",
    title: "Associate Professor",
    specialization: "Data Science & Analytics",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
  },
];

function HeroVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = isMuted;
  }, [isMuted]);

  return (
    <div className="w-full h-screen relative overflow-hidden flex items-end md:items-center justify-start">
      <video
        ref={videoRef}
        src="https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2F039b67f729094553afc521bcbf44f524?alt=media&token=f3f572a0-3afd-4a0a-9570-de176cc33653&apiKey=4aa279a8430d441dba9c55f659831878"
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: "brightness(1.1) contrast(1.15) saturate(1.2)"
        }}
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none"></div>

      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-magenta/5 rounded-full filter blur-3xl opacity-60 animate-float pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full filter blur-3xl opacity-60 animate-float pointer-events-none" style={{ animationDelay: "2s" }}></div>

      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,.03) 0px, rgba(255,255,255,.03) 1px, transparent 1px, transparent 2px)"
      }}></div>

      <div className="relative max-w-7xl mx-auto px-6 w-full z-10 pb-20 md:pb-0">
        <div className="max-w-2xl">
          <p className="text-sm md:text-base text-white/80 mb-4 uppercase tracking-widest font-display">
            School of Computer Applications
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-display">
            Build Tomorrow's Digital Experiences
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl font-display">
            Master full-stack development, data science, and cloud-native innovation with industry mentorship, experiential labs, and career-focused learning
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://admissions.dsu.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Button
                size="lg"
                className="bg-white hover:bg-white/90 text-orange-600 hover:text-orange-700 px-8 py-6 text-base font-semibold font-display transition-all duration-300 group border-2 border-white"
              >
                Apply Now
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a
              href="https://dsu.edu.in/virtual-tour/"
              target="_blank"
              rel="noreferrer"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-6 text-base font-semibold font-display transition-all duration-300"
              >
                Virtual Tour
              </Button>
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={toggleMute}
        className="absolute top-8 right-8 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white backdrop-blur-sm border border-white/20"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="h-5 w-5" />
        ) : (
          <Volume2 className="h-5 w-5" />
        )}
      </button>
    </div>
  );
}

function HighlightCard({ highlight }: { highlight: Highlight }) {
  const Icon = highlight.icon;
  return (
    <Card className="group relative h-80 overflow-hidden rounded-none border border-border/40 bg-card/40 backdrop-blur-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-magenta/10">
      <img
        src={highlight.image}
        alt={highlight.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs text-foreground">
        <Icon className="h-4 w-4" /> USP
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5 text-foreground">
        <h3 className="mb-2 text-lg font-semibold font-display">
          {highlight.title}
        </h3>
        <p className="text-sm text-foreground/80 font-body">
          {highlight.description}
        </p>
        {highlight.stat ? (
          <div className="mt-3 text-xs uppercase tracking-wide text-foreground/70 font-body">
            {highlight.stat}
          </div>
        ) : null}
      </div>
    </Card>
  );
}

function ResourceCard({ resource }: { resource: ResourceLink }) {
  return (
    <Card className="h-full rounded-none border border-border/40 bg-card/60 backdrop-blur">
      <CardHeader className="pb-2">
        <Badge className="bg-brand-magenta/15 text-brand-magenta">
          {resource.badge}
        </Badge>
        <CardTitle className="mt-4 text-lg font-display">
          {resource.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 text-sm text-foreground font-body">
        <p>{resource.description}</p>
        <a
          href={resource.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
        >
          View resource
          <ChevronRight className="h-4 w-4" />
        </a>
      </CardContent>
    </Card>
  );
}

function LabCard({ lab }: { lab: LabExperience }) {
  const Icon = lab.icon;
  return (
    <Card className="h-full rounded-none border border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-magenta/10 text-brand-magenta">
          <Icon className="h-5 w-5" />
        </span>
        <CardTitle className="text-base font-display">{lab.title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-sm leading-relaxed text-foreground/90 font-body">
          {lab.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

function AchievementCard({ achievement }: { achievement: Achievement }) {
  const Icon = achievement.icon;
  return (
    <Card className="h-full rounded-none border border-border/40 bg-card/60 backdrop-blur">
      <CardHeader className="flex flex-row items-start gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-magenta/15 text-brand-magenta flex-shrink-0">
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex-1">
          <Badge className="mb-2 bg-brand-magenta/15 text-brand-magenta text-xs">
            {achievement.category}
          </Badge>
          <CardTitle className="text-lg font-display">
            {achievement.title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground font-body">
          {achievement.description}
        </p>
      </CardContent>
    </Card>
  );
}

function FacultyCard({ faculty }: { faculty: FacultyMember }) {
  return (
    <Card className="h-full overflow-hidden rounded-none border border-border/40 bg-card/60 backdrop-blur">
      <div className="relative h-48 overflow-hidden">
        <img
          src={faculty.image}
          alt={faculty.name}
          className="h-full w-full object-cover"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="font-display">{faculty.name}</CardTitle>
        <Badge className="w-fit bg-brand-magenta/15 text-brand-magenta text-xs mt-2">
          {faculty.title}
        </Badge>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground font-body">
          {faculty.specialization}
        </p>
      </CardContent>
    </Card>
  );
}

function LifeCard({ life }: { life: LifeAtDSU }) {
  return (
    <Card className="group overflow-hidden rounded-none border border-border/40 bg-card/30 backdrop-blur hover:shadow-xl transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img
          src={life.image}
          alt={life.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-4 left-4 font-display text-lg font-semibold text-foreground">
          {life.title}
        </h3>
      </div>
      <CardContent className="p-4">
        <p className="text-sm text-foreground font-body">{life.description}</p>
      </CardContent>
    </Card>
  );
}

export default function ComputerApplications() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative w-full" id="top">
        <HeroVideo />
      </section>

      <section
        id="about"
        className="px-6 py-16 bg-gradient-to-r from-brand-magenta/5 via-transparent to-brand-blue/5"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                About School
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl">
                Nurturing India's Next-Gen Tech Creators
              </h2>
              <div className="space-y-4 text-foreground">
                <p className="font-body">
                  Established in 2016, the School of Computer Applications at
                  Dayananda Sagar University is India's premier destination for
                  aspiring software engineers, data scientists, and tech
                  entrepreneurs. With a mission to merge academic excellence
                  with industry relevance, we've shaped over 2,000+ graduates
                  who lead innovation across global tech companies and startups.
                </p>
                <p className="font-body">
                  Our curriculum bridges the gap between classroom learning and
                  real-world challenges through project studios, industry
                  mentorship, and hands-on innovation labs powered by global
                  partners like IBM, NVIDIA, and VMware.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 pt-4">
                <div className="rounded-2xl border border-brand-magenta/20 bg-brand-magenta/10 p-4">
                  <div className="text-2xl font-display font-bold text-brand-magenta">
                    2,000+
                  </div>
                  <p className="text-xs uppercase tracking-wide text-brand-magenta/80 font-body mt-1">
                    Successful Graduates
                  </p>
                </div>
                <div className="rounded-2xl border border-brand-blue/20 bg-brand-blue/10 p-4">
                  <div className="text-2xl font-display font-bold text-brand-blue">
                    95%
                  </div>
                  <p className="text-xs uppercase tracking-wide text-brand-blue/80 font-body mt-1">
                    Placement Rate
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-none overflow-hidden border border-border/40">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
                alt="School of Computer Applications"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section id="vision-mission" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <Badge className="bg-brand-magenta/15 text-brand-magenta">
              Vision & Mission
            </Badge>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              Our Purpose & Direction
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="rounded-none border border-border/40 bg-gradient-to-br from-brand-blue/10 to-brand-magenta/10 backdrop-blur p-8">
              <div className="flex items-start gap-4">
                <Eye className="h-8 w-8 text-brand-blue flex-shrink-0 mt-1" />
                <div>
                  <CardTitle className="text-xl mb-3">Vision</CardTitle>
                  <p className="text-foreground font-body">
                    To be a globally recognized centre of excellence producing
                    technology leaders, innovators, and entrepreneurs who create
                    transformative solutions for societal challenges through
                    ethical, inclusive, and sustainable development.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="rounded-none border border-border/40 bg-gradient-to-br from-brand-magenta/10 to-brand-orange/10 backdrop-blur p-8">
              <div className="flex items-start gap-4">
                <Target className="h-8 w-8 text-brand-magenta flex-shrink-0 mt-1" />
                <div>
                  <CardTitle className="text-xl mb-3">Mission</CardTitle>
                  <p className="text-foreground font-body">
                    Empower learners with industry-aligned skills, research
                    exposure, and entrepreneurial mindset through experiential
                    pedagogy, global partnerships, and mentorship that prepares
                    them for leadership roles in the digital economy.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div className="mt-12 rounded-3xl border border-border/40 bg-card/60 backdrop-blur p-8">
            <h3 className="font-display text-xl mb-6">Core Values</h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex gap-3">
                <Heart className="h-5 w-5 text-brand-magenta flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Excellence</h4>
                  <p className="text-sm text-foreground/90">
                    Pursuing highest standards in education, research, and
                    student outcomes
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Users className="h-5 w-5 text-brand-blue flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Collaboration</h4>
                  <p className="text-sm text-foreground/90">
                    Building strong partnerships with industry, academia, and
                    communities
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Sparkles className="h-5 w-5 text-brand-orange flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Innovation</h4>
                  <p className="text-sm text-foreground/90">
                    Fostering creativity, experimentation, and disruptive
                    thinking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="dean-message"
        className="px-6 py-16 bg-gradient-to-r from-brand-magenta/5 via-brand-orange/5 to-brand-blue/5"
      >
        <div className="mx-auto max-w-4xl">
          <Badge className="bg-brand-magenta/15 text-brand-magenta mb-6">
            Dean's Message
          </Badge>
          <div className="rounded-3xl border border-border/40 bg-card/60 backdrop-blur p-10">
            <div className="flex gap-6 mb-8">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                alt="Dean"
                className="h-24 w-24 rounded-full object-cover"
              />
              <div>
                <h3 className="font-display text-xl font-semibold">
                  Dr. Amit Sharma
                </h3>
                <p className="text-sm text-brand-magenta">
                  Program Chair & Dean, School of Computer Applications
                </p>
              </div>
            </div>
            <div className="space-y-4 text-foreground font-body">
              <p>
                Welcome to the School of Computer Applications at DSU. In an era
                where technology redefines every sector, our mission is clear:
                to cultivate not just skilled programmers, but thoughtful
                technologists who understand the responsibility that comes with
                innovation.
              </p>
              <p>
                Over the past 8 years, we've witnessed remarkable growth in our
                learners—from their first lines of code to leading products used
                by millions. What sets us apart is our unwavering commitment to
                the complete development of each student: technical mastery,
                research acumen, entrepreneurial spirit, and human values.
              </p>
              <p>
                Our partnerships with global technology leaders ensure that
                classroom theories translate into practical applications. Our
                faculty, active researchers and industry veterans, mentor
                students not just academically but in navigating the dynamic
                tech landscape.
              </p>
              <p>
                As you explore this page, I invite you to see DSU Computer
                Applications not just as a degree program, but as a launchpad
                for your career in technology. Join us in building a future
                where technology serves humanity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-faculty" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <Badge className="bg-brand-magenta/15 text-brand-magenta">
              Faculty Leadership
            </Badge>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              Meet Our Distinguished Faculty
            </h2>
            <p className="mt-3 text-foreground max-w-3xl font-body">
              Our faculty comprises PhD holders, published researchers, and
              industry veterans committed to mentoring the next generation of
              technology leaders.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {FEATURED_FACULTY.map((faculty) => (
              <FacultyCard key={faculty.name} faculty={faculty} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="https://www.dsu.edu.in/computer-applications/faculty-sca"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta hover:underline"
            >
              Explore full faculty directory
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section
        id="student-achievements"
        className="px-6 py-16 bg-gradient-to-r from-brand-blue/5 to-brand-magenta/5"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <Badge className="bg-brand-magenta/15 text-brand-magenta">
              Student Success
            </Badge>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              Student Achievements & Milestones
            </h2>
            <p className="mt-3 text-foreground max-w-3xl font-body">
              Our students consistently excel in competitive programming,
              research, startups, and industry roles, showcasing the quality of
              education and mentorship at DSU.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STUDENT_ACHIEVEMENTS.map((achievement) => (
              <AchievementCard
                key={achievement.title}
                achievement={achievement}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="faculty-achievements" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <Badge className="bg-brand-magenta/15 text-brand-magenta">
              Faculty Excellence
            </Badge>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              Faculty Achievements & Research
            </h2>
            <p className="mt-3 text-foreground max-w-3xl font-body">
              Our faculty actively contributes to advancing technology through
              patents, publications, grants, and industry collaborations that
              influence global tech innovation.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FACULTY_ACHIEVEMENTS.map((achievement) => (
              <AchievementCard
                key={achievement.title}
                achievement={achievement}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="life-at-dsu"
        className="px-6 py-16 bg-gradient-to-r from-brand-orange/5 via-brand-magenta/5 to-brand-blue/5"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <Badge className="bg-brand-magenta/15 text-brand-magenta">
              Campus Life
            </Badge>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              Life @ DSU – Global Standards
            </h2>
            <p className="mt-3 text-foreground max-w-3xl font-body mx-auto">
              Beyond classrooms, DSU offers a holistic ecosystem where learning,
              growth, creativity, and community thrive through diverse
              experiences and global exposure.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {LIFE_AT_DSU.map((life) => (
              <LifeCard key={life.title} life={life} />
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_minmax(0,1fr)] lg:items-center">
            <div className="space-y-6">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Academic Pathways
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl">
                Programs that transform tech aspirations into careers
              </h2>
              <p className="text-sm text-foreground font-body">
                Choose focused routes into software development, analytics, data
                science and emerging tech with curriculum co-designed by
                industry mentors and research leaders.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {PROGRAM_GROUPS.map((group) => (
                  <Card
                    key={group.label}
                    className="rounded-3xl border border-border/40 bg-card/60 backdrop-blur-sm"
                  >
                    <CardHeader className="pb-3">
                      <Badge className="bg-brand-magenta/15 text-brand-magenta">
                        {group.label}
                      </Badge>
                      <CardTitle className="mt-4 text-xl font-display">
                        {group.label} Programmes
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-2 text-sm text-foreground font-body">
                      {group.programs.map((program) => (
                        <div key={program} className="flex items-center">
                          <ChevronRight className="mr-2 h-3 w-3 text-brand-magenta" />
                          {program}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-brand-magenta/25 bg-brand-magenta/10 p-8 shadow-[0_30px_120px_-50px_rgba(233,97,255,0.6)]">
              <h3 className="font-display text-2xl text-brand-magenta">
                Programme Highlights
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-brand-magenta/90 font-body">
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4" />
                  Industry-aligned curriculum with Capstone Studios from year
                  one
                </li>
                <li className="flex items-start gap-2">
                  <Laptop className="mt-0.5 h-4 w-4" />
                  Dedicated labs for full-stack, data science, cybersecurity and
                  cloud-native engineering
                </li>
                <li className="flex items-start gap-2">
                  <Award className="mt-0.5 h-4 w-4" />
                  Global certifications and internship immersion with partner
                  companies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="usp"
        className="bg-gradient-to-r from-brand-magenta/5 via-brand-orange/5 to-brand-blue/5 px-6 py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <Badge
              className="bg-white/20 text-brand-magenta backdrop-blur"
              variant="secondary"
            >
              Unique Strengths
            </Badge>
            <h2 className="mt-5 font-display text-3xl md:text-4xl">
              Why Learners Choose DSU Computer Applications
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {USP_HIGHLIGHTS.map((highlight) => (
              <HighlightCard key={highlight.title} highlight={highlight} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="labs"
        className="bg-gradient-to-r from-brand-blue/5 to-brand-orange/5 px-6 py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Experiential Learning
              </Badge>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">
                Innovation Labs & Career Readiness
              </h2>
              <p className="mt-3 text-sm text-foreground font-body">
                Access cross-disciplinary labs and mentorship programmes that
                spark product engineering, AI, automation and cloud-native
                careers.
              </p>
            </div>
            <a
              href="https://www.dsu.edu.in/computer-applications/facilities-sca"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
            >
              View facilities gallery
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {LAB_EXPERIENCES.map((lab) => (
              <LabCard key={lab.title} lab={lab} />
            ))}
          </div>
        </div>
      </section>

      <section id="calendar" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Badge className="bg-brand-magenta/15 text-brand-magenta">
                Calendar & Updates
              </Badge>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">
                Stay Ahead of Every Milestone
              </h2>
              <p className="mt-3 text-sm text-foreground font-body">
                Download academic schedules, explore event recaps and tap into
                ongoing research that keeps learners future focused.
              </p>
            </div>
            <a
              href="https://www.dsu.edu.in/computer-applications/happening-sca"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
            >
              School happenings hub
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {RESOURCE_LINKS.map((resource) => (
              <ResourceCard key={resource.title} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-3xl border border-brand-magenta/20 bg-brand-magenta/5 p-10">
            <h3 className="mb-3 font-display text-3xl">
              Launch Your Tech Career with DSU
            </h3>
            <p className="mb-6 text-foreground font-body">
              Collaborate with mentors, build real products, showcase your
              portfolio and secure roles with the ecosystem of recruiters
              partnering with the School of Computer Applications.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/admissions">
                <Button className="bg-brand-gradient text-foreground">
                  Start Application
                  <GraduationCap className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a
                href="https://www.dsu.edu.in/computer-applications/placement-sca"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-brand-magenta/40 hover:bg-brand-magenta/10"
                >
                  Placement Snapshot
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
