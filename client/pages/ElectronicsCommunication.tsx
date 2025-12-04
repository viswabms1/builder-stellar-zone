import { Link as RouterLink } from "react-router-dom";
import { useState, useRef } from "react";
import type { LucideIcon } from "lucide-react";

import {
  Award,
  ChevronRight,
  Cpu,
  GraduationCap,
  Microscope,
  Network,
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

type USPHighlight = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  stat?: string;
};

type ProgramCard = {
  name: string;
  major: string;
  description: string;
  image: string;
  link: string;
  highlights: string[];
};

const ECE_USP: USPHighlight[] = [
  {
    title: "Signal Processing & Communication Systems",
    description:
      "Master advanced signal processing, wireless communication, and 5G technologies with state-of-the-art labs.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
    icon: Network,
    stat: "5G & IoT Labs",
  },
  {
    title: "VLSI & Embedded Systems",
    description:
      "Design cutting-edge semiconductor solutions and embedded systems with hands-on experience in chip design.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1600&auto=format&fit=crop",
    icon: Cpu,
    stat: "Industry-Sponsored",
  },
  {
    title: "IoT & Automation",
    description:
      "Build intelligent IoT systems and automation solutions that power the connected world.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1600&auto=format&fit=crop",
    icon: Award,
  },
  {
    title: "Research & Innovation",
    description:
      "Engage in cutting-edge research with faculty holding Ph.D. degrees from prestigious institutions worldwide.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1600&auto=format&fit=crop",
    icon: Microscope,
  },
];

const ECE_UG_PROGRAMS: ProgramCard[] = [
  {
    name: "B.Tech - Electronics & Communication Engineering",
    major: "Core Program",
    description:
      "Comprehensive curriculum emphasizing fundamental concepts with hands-on lab work, projects, and practical experience in signal processing, VLSI design, embedded systems, and communication systems.",
    image:
      "https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=1600&auto=format&fit=crop",
    link: "https://www.dsu.edu.in/engineering/electronics-communication",
    highlights: ["Signal Processing", "VLSI Design", "Embedded Systems", "5G Research"],
  },
];

const ECE_PG_PROGRAMS: ProgramCard[] = [
  {
    name: "M.Tech - Embedded Systems",
    major: "Specialization",
    description:
      "Master real-time systems, IoT architectures, edge computing and VLSI design with industry collaboration through Bosch ETAS Lab integration.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1600&auto=format&fit=crop",
    link: "https://www.dsu.edu.in/engineering/mtech-embedded",
    highlights: ["RTOS Design", "Bosch ETAS Lab", "Hardware Integration"],
  },
  {
    name: "BVoc - Mechatronics",
    major: "Vocational Program",
    description:
      "Develop industry-ready skills in mechatronics through collaboration with NTTF (National Training and Technical Foundation).",
    image:
      "https://images.unsplash.com/photo-1517677129300-07b130802f46?q=80&w=1600&auto=format&fit=crop",
    link: "https://www.dsu.edu.in/engineering/bvoc-mechatronics",
    highlights: ["Industry Partnership", "Practical Skills", "Career-Ready"],
  },
];

const ECE_FACILITIES = [
  {
    title: "Bosch ETAS Lab",
    description: "Industry-integrated lab for embedded systems and real-time software development",
  },
  {
    title: "Analog Devices Lab",
    description: "Industry-sponsored facility supporting advanced communication research",
  },
  {
    title: "VLSI Design Lab",
    description: "State-of-the-art semiconductor design and simulation tools",
  },
  {
    title: "Communication Systems Lab",
    description: "Advanced equipment for 5G and wireless communication research",
  },
  {
    title: "IoT & Robotics Lab",
    description: "Hands-on laboratory for IoT systems and robotic applications",
  },
  {
    title: "Microcontroller & Embedded Lab",
    description: "Complete embedded system design and testing environment",
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

  return (
    <div className="relative aspect-video overflow-hidden rounded-3xl border-4 border-brand-blue/40 shadow-2xl shadow-brand-blue/20 p-4 bg-black/10">
      <video
        ref={videoRef}
        src="https://cdn.builder.io/o/assets%2F4aa279a8430d441dba9c55f659831878%2F0b20f5ea03294f4d824e69fd8489b78c?alt=media&token=0c4092c4-4afd-4237-b850-81046ecf52f7&apiKey=4aa279a8430d441dba9c55f659831878"
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover rounded-2xl"
      />
      <button
        onClick={toggleMute}
        className="absolute top-8 right-8 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white"
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

function ProgramCardComponent({ program }: { program: ProgramCard }) {
  const isInternal = program.link.startsWith("/");

  const content = (
    <div className="group relative h-full rounded-3xl overflow-hidden border border-white/10 bg-black/10 backdrop-blur-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-blue/20 min-h-[280px] flex flex-col justify-end">
      <img
        src={program.image}
        alt={program.name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur">
        {program.major}
      </div>
      <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
        <div className="rounded-3xl border border-white/15 bg-black/60 backdrop-blur-lg p-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-display text-xl leading-tight text-white">
                {program.name}
              </h3>
              <p className="mt-3 text-sm text-white/85 font-body">
                {program.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {program.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-white/85"
                >
                  {item}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-colors group-hover:text-brand-blue">
              Explore program
              <ChevronRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  if (isInternal) {
    return (
      <RouterLink to={program.link} className="h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-3xl">
        {content}
      </RouterLink>
    );
  }

  return (
    <a
      href={program.link}
      target="_blank"
      rel="noreferrer"
      className="h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-3xl"
    >
      {content}
    </a>
  );
}

export default function ElectronicsCommunication() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative flex items-center justify-center px-6 pt-4 pb-16 md:min-h-screen" id="top">
        <div className="w-full max-w-5xl">
          <HeroVideo />
          <div className="mt-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
              B.Tech - Electronics & Communication Engineering
            </h2>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-brand-blue/5 via-brand-orange/5 to-brand-magenta/5 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <Badge
              className="bg-white/20 text-brand-blue backdrop-blur"
              variant="secondary"
            >
              Unique Strengths (USP)
            </Badge>
            <h2 className="mt-5 font-display text-3xl md:text-4xl">
              Why Choose ECE at DSU
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ECE_USP.map((highlight) => (
              <Card
                key={highlight.title}
                className="group relative h-80 overflow-hidden rounded-3xl border border-border/40 bg-card/40 backdrop-blur-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-blue/10"
              >
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs text-foreground">
                  <highlight.icon className="h-4 w-4" /> USP
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
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="relative overflow-hidden px-6 py-16">
        <div
          className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-brand-blue/20 via-transparent to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl">
                Academic Programs
              </h2>
              <p className="mt-3 text-sm text-foreground font-body">
                Comprehensive undergraduate and postgraduate programs designed to shape industry-ready engineers and researchers.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <div className="mb-8">
              <Badge className="bg-brand-blue/15 text-brand-blue">
                Undergraduate Program
              </Badge>
              <h3 className="mt-4 font-display text-2xl md:text-3xl">
                B.Tech - ECE
              </h3>
              <p className="mt-2 text-sm text-foreground font-body">
                Four-year comprehensive program emphasizing experiential learning and industry alignment
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
              {ECE_UG_PROGRAMS.map((program) => (
                <ProgramCardComponent key={program.name} program={program} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-8">
              <Badge className="bg-brand-orange/15 text-brand-orange">
                Postgraduate Programs
              </Badge>
              <h3 className="mt-4 font-display text-2xl md:text-3xl">
                Specialized Programs
              </h3>
              <p className="mt-2 text-sm text-foreground font-body">
                Advanced research and specialization opportunities
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
              {ECE_PG_PROGRAMS.map((program) => (
                <ProgramCardComponent key={program.name} program={program} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-brand-blue/10 via-brand-orange/10 to-brand-magenta/10 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <Badge className="bg-brand-blue/15 text-brand-blue">
              Laboratory Facilities
            </Badge>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              State-of-the-art ECE Labs
            </h2>
            <p className="mt-3 text-sm text-foreground font-body">
              World-class laboratories and equipment supporting hands-on learning and cutting-edge research
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ECE_FACILITIES.map((facility) => (
              <Card key={facility.title} className="rounded-2xl border border-border/40 bg-card/60 backdrop-blur">
                <CardHeader>
                  <CardTitle className="font-display text-lg">
                    {facility.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-5xl items-start gap-8 lg:grid-cols-2">
          <Card className="rounded-3xl border border-border/50 bg-card/50">
            <CardHeader>
              <CardTitle className="font-display">Department Leadership</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 text-sm font-body text-foreground">
              <div>
                <div className="text-foreground/70 text-xs uppercase tracking-wide">Chairman</div>
                <div className="font-medium text-foreground">ECE Department</div>
              </div>
              <div>
                <div className="text-foreground/70 text-xs uppercase tracking-wide">Email</div>
                <div className="font-medium text-foreground">
                  chairman-ece@dsu.edu.in
                </div>
              </div>
              <div>
                <div className="text-foreground/70 text-xs uppercase tracking-wide">Phone</div>
                <div className="font-medium text-foreground">
                  +91-080-49092937
                </div>
              </div>
              <div>
                <div className="text-foreground/70 text-xs uppercase tracking-wide">Campus Address</div>
                <div className="font-medium text-foreground">
                  Innovation Campus, Kanakapura Road, Bengaluru
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-3xl border border-border/50 bg-card/50">
            <CardHeader>
              <CardTitle className="font-display">
                Program Highlights
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm font-body">
              <div className="flex items-start gap-2">
                <span className="text-brand-blue mt-1">•</span>
                <span>Ph.D. faculty with strong R&D background</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-brand-blue mt-1">•</span>
                <span>Industry-sponsored labs (Bosch ETAS, Analog Devices)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-brand-blue mt-1">•</span>
                <span>Focus on Signal Processing, VLSI & Embedded Systems</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-brand-blue mt-1">•</span>
                <span>5G, IoT and Communication Systems research</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-brand-blue mt-1">•</span>
                <span>M.Tech specialization in Embedded Systems</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-brand-blue mt-1">•</span>
                <span>BVoc in Mechatronics partnership with NTTF</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-10">
            <h3 className="mb-3 font-display text-3xl">
              Ready to pursue Electronics & Communication Engineering?
            </h3>
            <p className="mb-6 text-foreground font-body">
              Explore programs, take a virtual tour and begin your journey at ECE DSU.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://admissions.dsu.edu.in/"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="bg-brand-gradient text-foreground">
                  Apply Now
                  <GraduationCap className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a
                href="https://dsu.edu.in/virtual-tour/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-brand-blue/40 hover:bg-brand-blue/10"
                >
                  Virtual Tour
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
