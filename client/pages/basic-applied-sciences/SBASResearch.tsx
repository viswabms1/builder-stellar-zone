import { useRef, useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  ChevronRight,
  Award,
  Beaker,
  FileText,
  DollarSign,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAutoMuteOnScroll } from "@/hooks/useAutoMuteOnScroll";

type ResearchProject = {
  sNo: number;
  name: string;
  pi: string;
  yearOfAward: number;
  fundingAgency: string;
  fundsInLakh: number;
  photo?: string;
};

const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    sNo: 1,
    name: "PLGA-based bone implant scaffolds for anti-tubercular therapy in Pott's disease",
    pi: "Dr. Blessy Baby Mathew",
    yearOfAward: 2025,
    fundingAgency: "Department of Science & Technology (DST)- NIDHI",
    fundsInLakh: 8,
  },
  {
    sNo: 2,
    name: 'A therapeutic combination of synthetic and natural small molecules toxin inhibitors against Indian "Big Two" Viper snake venom: A preclinical efficacy study.',
    pi: "Dr. Vineetha MS",
    yearOfAward: 2025,
    fundingAgency: "VGST",
    fundsInLakh: 10,
  },
  {
    sNo: 3,
    name: "Rheosensation in bacteria a potential tool to target Multidrug resistance",
    pi: "Dr. Kumar Perinbam",
    yearOfAward: 2025,
    fundingAgency: "DST-ANRF",
    fundsInLakh: 60,
  },
  {
    sNo: 4,
    name: "National Conference on Innovative strategies for Advancing Biomedical Research",
    pi: "Dr. Vineetha MS & Dr. Pronama Biswas",
    yearOfAward: 2025,
    fundingAgency: "DST-ANRF",
    fundsInLakh: 1.5,
  },
  {
    sNo: 5,
    name: "National Conference on Innovative strategies for Advancing Biomedical Research",
    pi: "Dr. Vineetha MS & Dr. Pronama Biswas",
    yearOfAward: 2025,
    fundingAgency: "Anderson Labs, Bengaluru",
    fundsInLakh: 0.25,
  },
  {
    sNo: 6,
    name: "National Conference on Innovative strategies for Advancing Biomedical Research",
    pi: "Dr. Vineetha MS & Dr. Pronama Biswas",
    yearOfAward: 2025,
    fundingAgency: "KSCST, GOK",
    fundsInLakh: 0.25,
  },
  {
    sNo: 7,
    name: "A five day National workshop on Recent Advances in 3D printing for Tissue Engineering Applications",
    pi: "Dr. S. Geetha Priya",
    yearOfAward: 2024,
    fundingAgency: "DST-ANRF",
    fundsInLakh: 1.2,
  },
  {
    sNo: 8,
    name: "Standardization and validation of fluorescent polarization assay for the diagnosis of brucellosis",
    pi: "Dr. Triveni K, Dr. Susweta D M",
    yearOfAward: 2022,
    fundingAgency: "VGST, Govt. of Karnataka",
    fundsInLakh: 3,
  },
  {
    sNo: 9,
    name: "Separation of Biobutanol via Scalable Approach of Pervaporation: To be a Viable biofuel for future.",
    pi: "Dr. Santosh Choudhari",
    yearOfAward: 2019,
    fundingAgency: "DST-SERB",
    fundsInLakh: 40.9,
  },
  {
    sNo: 10,
    name: "Investigations on intestinal neuropeptides as anticolitogenic agents on mitochondrial function for the maintenance of colon epithelial tract in ulcerative colitis.",
    pi: "Dr. Sunil S More, Dr. Gautham S A, Dr. Arpan Kumar Maiti",
    yearOfAward: 2017,
    fundingAgency: "DST-SERB",
    fundsInLakh: 39.14,
  },
  {
    sNo: 11,
    name: "Isolation of Matricryptic peptides from marine industry waste involved in nanocrystal hydroxyapatite and fabrication of a peptide based osteointegrative implant coating.",
    pi: "Dr. Pradipta Banerjee",
    yearOfAward: 2017,
    fundingAgency: "DST-SERB",
    fundsInLakh: 34.4,
  },
  {
    sNo: 12,
    name: "Immobilized microbial consortium for pesticide bioremediation in Ginger cultivated soils of Karnataka",
    pi: "Dr. Shobha K Jayanna",
    yearOfAward: 2017,
    fundingAgency: "KSTePS, Govt. of Karnataka",
    fundsInLakh: 20,
  },
  {
    sNo: 13,
    name: "Purification and preparation of nano cocktail of active principles of folk medicinal plants as first –aid formulation for snake bite victims",
    pi: "Dr. Sunil More, Dr. Gautham S A",
    yearOfAward: 2016,
    fundingAgency: "DST-SERB",
    fundsInLakh: 28.53,
  },
  {
    sNo: 14,
    name: "Isolation of therapeutic cryptic peptides involved in blood pressure regulation from marine industry waste",
    pi: "Dr. Pradipta Banerjee",
    yearOfAward: 2015,
    fundingAgency: "VGST, Govt. of Karnataka",
    fundsInLakh: 30,
  },
];

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop";

function HeroVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useAutoMuteOnScroll(videoRef);

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
    <div
      ref={containerRef}
      className="relative h-96 flex items-center justify-start overflow-hidden"
    >
      <img
        src={HERO_IMAGE}
        alt="SBAS Research"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 py-6 sm:py-8">
        <div className="max-w-2xl">
          <p className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-1 sm:mb-4 uppercase tracking-widest font-display">
            Research at SBAS
          </p>
          <h1 className="text-xs sm:text-base md:text-base text-white/80 mb-2 sm:mb-6 leading-tight font-display">
            Groundbreaking Research Projects Advancing Life Sciences
          </h1>
        </div>
      </div>
    </div>
  );
}

function ResearchProjectCard({ project }: { project: ResearchProject }) {
  return (
    <Card className="rounded-none border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-500 hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3 mb-3">
          <Badge className="bg-brand-blue/15 text-brand-blue flex-shrink-0">
            S.No {project.sNo}
          </Badge>
          <span className="text-xs font-medium text-foreground/70 flex-shrink-0">
            {project.yearOfAward}
          </span>
        </div>
        <CardTitle className="font-display text-lg leading-tight">
          {project.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex gap-3">
            <Beaker className="h-5 w-5 text-brand-blue/60 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-foreground/60 uppercase tracking-wide font-medium">
                Principal Investigator
              </p>
              <p className="text-sm font-body text-foreground">{project.pi}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Award className="h-5 w-5 text-brand-orange/60 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-foreground/60 uppercase tracking-wide font-medium">
                Funding Agency
              </p>
              <p className="text-sm font-body text-foreground">
                {project.fundingAgency}
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <DollarSign className="h-5 w-5 text-brand-magenta/60 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-foreground/60 uppercase tracking-wide font-medium">
                Funds Allocated
              </p>
              <p className="text-sm font-body text-foreground">
                ₹ {project.fundsInLakh} Lakh
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function SBASResearch() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative" id="top">
        <HeroVideo />
      </section>

      {/* Breadcrumb */}
      <div className="bg-background/50 backdrop-blur-sm border-b border-border/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-3 py-3">
          <div className="flex items-center gap-2 text-sm text-foreground/70">
            <RouterLink
              to="/academics/basic-applied-sciences"
              className="hover:text-foreground transition-colors"
            >
              SBAS
            </RouterLink>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Research Projects</span>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="px-3 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Funded Research Projects
            </h2>
            <p className="text-base text-foreground/80 font-body leading-relaxed">
              The School of Basic & Applied Sciences at DSU is a hub of
              groundbreaking research initiatives funded by leading national and
              state agencies. Our faculty-led projects span biotechnology,
              biochemistry, microbiology, and molecular sciences, addressing
              critical challenges in healthcare, sustainable development, and
              biomedical innovation.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Card className="rounded-none border border-border/40 bg-gradient-to-br from-brand-blue/10 to-brand-blue/5">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold font-display text-brand-blue">
                  {RESEARCH_PROJECTS.length}
                </div>
                <p className="text-xs text-foreground/70 mt-2 font-body">
                  Total Projects
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-none border border-border/40 bg-gradient-to-br from-brand-magenta/10 to-brand-magenta/5">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold font-display text-brand-magenta">
                  ₹ {RESEARCH_PROJECTS.reduce((acc, p) => acc + p.fundsInLakh, 0).toFixed(1)}L
                </div>
                <p className="text-xs text-foreground/70 mt-2 font-body">
                  Total Funds
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-none border border-border/40 bg-gradient-to-br from-brand-orange/10 to-brand-orange/5">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold font-display text-brand-orange">
                  {Math.max(...RESEARCH_PROJECTS.map((p) => p.yearOfAward))}
                </div>
                <p className="text-xs text-foreground/70 mt-2 font-body">
                  Latest Award Year
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-none border border-border/40 bg-gradient-to-br from-green-500/10 to-green-500/5">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold font-display text-green-600">
                  {new Set(RESEARCH_PROJECTS.map((p) => p.fundingAgency)).size}
                </div>
                <p className="text-xs text-foreground/70 mt-2 font-body">
                  Funding Agencies
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {RESEARCH_PROJECTS.map((project) => (
              <ResearchProjectCard key={project.sNo} project={project} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 p-8 rounded-lg border border-brand-blue/30 bg-brand-blue/5">
            <div className="max-w-2xl">
              <h3 className="font-display text-2xl mb-3">
                Join Our Research Community
              </h3>
              <p className="text-sm text-foreground/80 font-body mb-6">
                SBAS offers exceptional opportunities for graduate students,
                postdoctoral researchers, and collaborative partnerships. Join
                our faculty in advancing the frontiers of biological and
                applied sciences.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <RouterLink to="/academics/basic-applied-sciences/faculty">
                  <Button className="bg-brand-blue hover:bg-brand-blue/90 rounded-none">
                    Meet Faculty
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </RouterLink>
                <a href="mailto:sbas@dsu.edu.in">
                  <Button
                    variant="outline"
                    className="rounded-none border-brand-blue/40 hover:bg-brand-blue/10"
                  >
                    Contact Research Office
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
