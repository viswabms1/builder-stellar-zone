import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CurriculumLibrary } from "@/components/CurriculumLibrary";
import { getCurriculumByDepartment } from "@/lib/content-manager";
import {
  Activity,
  Microscope,
  Stethoscope,
  Heart,
  Eye,
  Zap,
  GraduationCap,
  Trophy,
  Award,
  ChevronRight,
  ChevronDown,
  Download,
  CalendarDays,
  FlaskConical,
  Dna,
} from "lucide-react";

function CurriculumLibraryComponent() {
  const programs = getCurriculumByDepartment("Health Sciences", "Allied Health Sciences");
  return <CurriculumLibrary programs={programs} themeColor="blue" />;
}

export default function AlliedHealthBSc() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bscPrograms = [
    {
      icon: Microscope,
      label: "B.Sc. in Medical Laboratory Technology",
      description:
        "Perform clinical tests on specimens of bodily fluids and tissues to gather critical health information or determine cause of death.",
      image:
        "https://images.pexels.com/photos/5726714/pexels-photo-5726714.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      icon: Activity,
      label: "B.Sc. in Emergency & Trauma Care Technology",
      description:
        "Provide diagnostic, curative, and preventive medical services under doctor supervision, applying advanced procedures for treating injuries.",
      image:
        "https://images.pexels.com/photos/8942228/pexels-photo-8942228.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      icon: Stethoscope,
      label: "B.Sc. in Operation Theatre Technology",
      description:
        "Assisting anesthetists, maintaining OTs, and managing sterile services and disaster preparedness in multidisciplinary surgical teams.",
      image:
        "https://images.pexels.com/photos/18112241/pexels-photo-18112241.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      icon: Eye,
      label: "B.Sc. in Radiology & Imaging Technology",
      description:
        "Operate radiographic, ultrasound, and MRI equipment to produce images for diagnosis and monitors radiation treatments.",
      image:
        "https://images.pexels.com/photos/6502017/pexels-photo-6502017.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      icon: Heart,
      label: "B.Sc. in Cardiac Care Technology",
      description:
        "Expertise in circulatory systems and complex equipment operation for adult and pediatric cardiac interventions.",
      image:
        "https://images.pexels.com/photos/4483339/pexels-photo-4483339.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  const highlights = [
    "Integrated clinical training at parent medical school (CDSIMER) and attached hospital",
    "Hands-on exposure in Central Laboratory, OT Complexes, and Emergency Departments",
    "Advanced training in Radio-diagnostics and Blood Bank facilities",
    "Multidisciplinary curriculum mentored by physicians, surgeons, and scientists",
    "State-of-the-art infrastructure including advanced lecture halls and practical labs",
    "Rigorous academic monitoring and vocational mentorship for career readiness",
  ];

  const careers = [
    "Medical Technologists → Laboratory/Clinical Managers → Department Heads",
    "Radiology Technologists → Imaging Specialists → Quality Assurance Officers",
    "Cardiac Care Technicians → Cardiovascular Specialists in critical care units",
    "Global opportunities in ever-advancing healthcare industries with high demand",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative w-full overflow-hidden" id="top">
        <div className="relative w-full h-[55vh] md:h-[70vh]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F0119480c4dc44173b0cb713cdd4d9176?format=webp&width=800"
            alt="B.Sc. Allied Health Sciences"
            className="w-full h-full object-cover"
            style={{
              filter: "brightness(1.1) contrast(1.1) saturate(1.15)",
            }}
          />
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="hero-title-inside absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between p-3 sm:p-6 max-w-7xl mx-auto w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-4 backdrop-blur-sm">
                <GraduationCap className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white font-display">
                  Undergraduate Programme
                </span>
              </div>
              <p className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-1 sm:mb-4 uppercase tracking-widest font-display">
                B.Sc. Allied Health Sciences
              </p>
              <h1 className="text-xs sm:text-base md:text-base text-white mb-2 sm:mb-6 leading-tight font-display font-bold">
                Medical Lab | Emergency & Trauma | Operation Theatre | Radiology
                | Cardiac Care
              </h1>
            </div>

            {/* Buttons inside video - visible on md and up */}
            <div className="hidden md:flex flex-col gap-2 sm:gap-4">
              <a
                href="https://admissions.dsu.edu.in/"
                target="_blank"
                rel="noreferrer"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Button
                  size="sm"
                  className="sm:size-lg bg-white hover:bg-white/90 text-brand-blue hover:text-brand-blue/80 px-4 sm:px-8 py-2 sm:py-6 text-xs sm:text-base font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
                >
                  Apply Now
                  <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a
                href="https://dsu.edu.in/virtual-tour/"
                target="_blank"
                rel="noreferrer"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Button
                  size="sm"
                  className="sm:size-lg bg-white hover:bg-white/90 text-brand-blue hover:text-brand-blue/80 px-4 sm:px-8 py-2 sm:py-6 text-xs sm:text-base font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
                >
                  Virtual Tour
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-background relative max-w-7xl mx-auto px-3 w-full py-6 sm:py-8">
        <div className="hero-title-outside max-w-3xl">
          <p className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-1 sm:mb-4 uppercase tracking-widest font-display">
            B.Sc. Allied Health Sciences
          </p>
          <h1 className="text-xs sm:text-base md:text-base text-foreground/80 mb-2 sm:mb-6 leading-tight font-display">
            Multi-disciplinary Excellence in Technical Healthcare
          </h1>
        </div>

        {/* Buttons below video - visible only on mobile */}
        <div className="flex md:hidden flex-row gap-2 sm:gap-4">
          <a
            href="https://admissions.dsu.edu.in/"
            target="_blank"
            rel="noreferrer"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Button
              size="sm"
              className="sm:size-lg bg-white hover:bg-white/90 text-brand-blue hover:text-brand-blue/80 px-4 sm:px-8 py-2 sm:py-6 text-xs sm:text-base font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
            >
              Apply Now
              <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <a
            href="https://dsu.edu.in/virtual-tour/"
            target="_blank"
            rel="noreferrer"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Button
              size="sm"
              className="sm:size-lg bg-white hover:bg-white/90 text-brand-blue hover:text-brand-blue/80 px-4 sm:px-8 py-2 sm:py-6 text-xs sm:text-base font-semibold font-display transition-all duration-300 group border-2 border-white w-full sm:w-auto"
            >
              Virtual Tour
            </Button>
          </a>
        </div>
      </div>

      {/* B.Sc. Programmes Section */}
      <section className="px-3 py-8 bg-brand-blue/5">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4 text-center">
              B.Sc. Programmes
            </h2>
            <p className="text-foreground/80 font-body max-w-2xl mx-auto text-center">
              Our College of Allied Health Sciences offers comprehensive B.Sc.
              programmes designed to prepare students for technical excellence
              in modern healthcare.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bscPrograms.map((spec, i) => (
              <Card
                key={i}
                className="group flex flex-col hover:shadow-2xl transition-all duration-500 border-brand-blue/20 overflow-hidden bg-card/50 backdrop-blur-sm"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={spec.image}
                    alt={spec.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 p-2 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20">
                    <spec.icon className="h-6 w-6" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-display text-xl group-hover:text-brand-blue transition-colors">
                    {spec.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-sm text-foreground/70 font-body leading-relaxed">
                    {spec.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section id="overview" className="relative overflow-hidden px-3 py-8">
        <div
          className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-brand-blue/20 via-transparent to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                Program Highlights
              </h2>
              <p className="text-foreground/80 font-body mb-8">
                Established in 2021, the B.Sc. Allied Health Sciences program at
                DSU is designed to produce highly skilled healthcare
                professionals who can meet the global demand for preventive,
                curative, and rehabilitative care.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 rounded-lg border border-brand-blue/20 bg-brand-blue/5"
              >
                <Activity className="h-5 w-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground font-body">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="px-3 py-8 bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Career Pathways & Placements
            </h2>
            <p className="text-foreground/80 font-body max-w-3xl">
              Graduates of the Allied Health Sciences program are prepared for
              diverse employment opportunities in diagnostic labs,
              multispecialty hospitals, and global healthcare systems.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {careers.map((career, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <div className="flex items-start gap-3">
                  <Trophy className="h-5 w-5 text-brand-blue flex-shrink-0 mt-1" />
                  <p className="text-sm text-foreground font-body">{career}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Library */}
      <CurriculumLibraryComponent />

      {/* Eligibility & Fees */}
      <section className="px-3 py-8 bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Eligibility & Fee Structure
            </h2>
            <p className="text-foreground/80 font-body max-w-3xl mx-auto">
              Comprehensive information about admission requirements and fee
              structures for the B.Sc. Allied Health Sciences programmes.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <a
              href="/eligibility?school=School%20of%20Health%20Sciences&program=B.Sc%20Allied%20Health%20Sciences"
              className="inline-block"
            >
              <Button className="bg-brand-gradient text-foreground px-8 py-6 text-base font-semibold">
                View Eligibility & Fees
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section
        id="related-resources"
        className="bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5 px-3 py-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl">
              Explore More at DSU
            </h2>
            <p className="mt-3 text-sm text-foreground font-body">
              Discover our clinical training centers, research initiatives, and
              placement excellence
            </p>
          </div>
          <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-4">
            <a
              href="/centre-of-excellence"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 flex items-center justify-center">
                  <Award className="h-12 w-12 text-brand-blue/70 group-hover:text-brand-blue transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-blue transition-colors">
                    Clinical Training Labs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    Integrated training at CDSIMER Medical College labs
                  </p>
                </CardContent>
              </Card>
            </a>

            <a
              href="/research"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-magenta/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-magenta/20 to-brand-magenta/10 flex items-center justify-center">
                  <Microscope className="h-12 w-12 text-brand-magenta/70 group-hover:text-brand-magenta transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-magenta transition-colors">
                    Research & Innovation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    Pioneering research in medical technology
                  </p>
                </CardContent>
              </Card>
            </a>

            <a
              href="/placements"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-orange/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-orange/20 to-brand-orange/10 flex items-center justify-center">
                  <GraduationCap className="h-12 w-12 text-brand-orange/70 group-hover:text-brand-orange transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-orange transition-colors">
                    Placements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 font-body">
                    Global career pathways in healthcare systems
                  </p>
                </CardContent>
              </Card>
            </a>

            <a
              href="https://admissions.dsu.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Card className="h-full border-0 bg-transparent">
                <div className="relative h-32 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 flex items-center justify-center">
                  <Activity className="h-12 w-12 text-brand-blue/70 group-hover:text-brand-blue transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display group-hover:text-brand-blue transition-colors">
                    Admissions
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p className="text-sm text-foreground/80 font-body">
                    Start your career in Allied Health Sciences today
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-brand-blue group-hover:text-brand-blue/80 transition-colors">
                    Apply Now
                    <ChevronRight className="h-3 w-3" />
                  </span>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-3 pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-none border border-brand-blue/20 bg-brand-blue/5 p-10">
            <h3 className="mb-3 font-display text-3xl">
              Join the future of healthcare technology
            </h3>
            <p className="mb-6 text-foreground font-body">
              Explore our B.Sc. programmes and start your journey towards
              technical excellence in medicine.
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

interface CurriculumProgram {
  id: string;
  label: string;
  description: string;
  image: string;
  batches: CurriculumBatch[];
}

interface CurriculumBatch {
  year: string;
  summary: string;
  documentUrl?: string;
}

function CurriculumLibrary() {
  const [openProgram, setOpenProgram] = React.useState<string | null>(null);

  const programs: CurriculumProgram[] = [
    {
      id: "bsc-mlt",
      label: "B.Sc. in Medical Laboratory Technology",
      description:
        "Comprehensive curriculum covering clinical biochemistry, microbiology, pathology, and laboratory management.",
      image:
        "https://images.pexels.com/photos/8279478/pexels-photo-8279478.jpeg?auto=compress&cs=tinysrgb&w=1600",
      batches: [
        {
          year: "2025-26",
          summary:
            "Latest curriculum with advanced training in molecular diagnostics and automated laboratory systems.",
          documentUrl: "#",
        },
      ],
    },
    {
      id: "bsc-etct",
      label: "B.Sc. in Emergency & Trauma Care Technology",
      description:
        "Focused on emergency medical services, trauma management, and advanced life support techniques.",
      image:
        "https://images.pexels.com/photos/28271070/pexels-photo-28271070.jpeg?auto=compress&cs=tinysrgb&w=1600",
      batches: [
        {
          year: "2025-26",
          summary:
            "Curriculum integrated with real-world trauma center exposure and emergency response protocols.",
          documentUrl: "#",
        },
      ],
    },
    {
      id: "bsc-ott",
      label: "B.Sc. in Operation Theatre Technology",
      description:
        "Training in surgical procedures, anesthesia assistance, and operation theatre management.",
      image:
        "https://images.pexels.com/photos/7581089/pexels-photo-7581089.jpeg?auto=compress&cs=tinysrgb&w=1600",
      batches: [
        {
          year: "2025-26",
          summary:
            "Advanced curriculum covering robotic surgery assistance and sterile supply management.",
          documentUrl: "#",
        },
      ],
    },
    {
      id: "bsc-radiology",
      label: "B.Sc. in Radiology & Imaging Technology",
      description:
        "In-depth study of radiographic techniques, CT, MRI, ultrasound, and radiation safety.",
      image:
        "https://images.pexels.com/photos/4226264/pexels-photo-4226264.jpeg?auto=compress&cs=tinysrgb&w=1600",
      batches: [
        {
          year: "2025-26",
          summary:
            "Latest training in digital radiography, 3D imaging, and interventional radiology procedures.",
          documentUrl: "#",
        },
      ],
    },
    {
      id: "bsc-cardiac",
      label: "B.Sc. in Cardiac Care Technology",
      description:
        "Specialized curriculum on cardiovascular systems, ECG, echocardiography, and cardiac catheterization.",
      image:
        "https://images.pexels.com/photos/5327920/pexels-photo-5327920.jpeg?auto=compress&cs=tinysrgb&w=1600",
      batches: [
        {
          year: "2025-26",
          summary:
            "Curriculum focusing on advanced cardiac life support and assistive technologies for heart care.",
          documentUrl: "#",
        },
      ],
    },
  ];

  return (
    <section className="px-3 py-8 bg-gradient-to-r from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5">
      <div className="mx-auto max-w-6xl space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="headline-2 mb-3 font-display">
              <span className="text-foreground">Curriculum </span>
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Library
              </span>
            </h2>
            <p className="max-w-2xl text-sm text-foreground sm:text-base font-body">
              Access comprehensive curriculum documentation and course
              structures for all B.Sc. programmes.
            </p>
          </div>
          <Badge className="w-fit rounded-full bg-brand-blue/15 px-4 py-2 text-xs font-semibold text-brand-blue border border-brand-blue/20">
            2025 – 2026
          </Badge>
        </div>

        <div className="grid gap-3 lg:grid-cols-2">
          {programs.map((program) => {
            const isOpen = openProgram === program.id;
            const borderClass = "border-brand-blue/30";
            const badgeClass =
              "bg-brand-blue/15 text-brand-blue border-brand-blue/20";

            return (
              <div
                key={program.id}
                className={`rounded-3xl border-2 ${borderClass} overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/10 hover:-translate-y-1`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.label}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-3 bg-background/50 backdrop-blur-sm space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge className={`rounded-full border ${badgeClass}`}>
                      Undergraduate
                    </Badge>
                  </div>
                  <div>
                    <h3 className="headline-3 font-display text-foreground mb-2">
                      {program.label}
                    </h3>
                    <p className="text-sm text-foreground/80 font-body">
                      {program.description}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-brand-blue/30 hover:bg-brand-blue/10 text-brand-blue hover:text-brand-blue"
                    onClick={() => setOpenProgram(isOpen ? null : program.id)}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isOpen ? "Hide" : "View"} Curriculum
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </span>
                  </Button>

                  {isOpen && (
                    <div className="mt-4 space-y-3 border-t border-border/20 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                      {program.batches.map((batch, batchIdx) => (
                        <div
                          key={`${program.id}-${batch.year}`}
                          className="rounded-xl border border-border/40 bg-card/70 p-3 transition-all hover:border-brand-blue/40"
                        >
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2">
                              <Badge className="rounded-full border text-xs bg-brand-blue/20 text-brand-blue border-brand-blue/30">
                                <CalendarDays className="h-3 w-3 mr-1" />
                                {batch.year}
                              </Badge>
                              {batchIdx === 0 && (
                                <Badge className="rounded-full bg-brand-blue/20 text-brand-blue border-brand-blue/30 border text-xs">
                                  <Zap className="h-3 w-3 mr-1" />
                                  Current
                                </Badge>
                              )}
                            </div>
                          </div>
                          <p className="text-xs text-foreground/80 font-body mb-3 leading-relaxed">
                            {batch.summary}
                          </p>
                          {batch.documentUrl && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full justify-center gap-1 rounded text-xs font-semibold bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20"
                              asChild
                            >
                              <a
                                href={batch.documentUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center gap-1"
                              >
                                <Download className="h-3 w-3" />
                                Download Curriculum PDF
                              </a>
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
