import type { ComponentType, SVGProps } from "react";
import type { ComponentType, SVGProps } from "react";
import { useMemo } from "react";
import { Link } from "react-router-dom";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cseFaculty } from "@/data/cse-faculty";
import {
  Award,
  ChevronRight,
  FlaskConical,
  GraduationCap,
  Layers,
  Sparkles,
  Users,
} from "lucide-react";

export default function FacultyCSE() {
  const stats = useMemo(() => {
    const total = cseFaculty.length;
    const leadershipCount = cseFaculty.filter((f) =>
      /Dean|Chair|Head/i.test(f.title),
    ).length;
    const professors = cseFaculty.filter(
      (f) =>
        /Professor/i.test(f.title) &&
        !/Associate/i.test(f.title) &&
        !/Assistant/i.test(f.title),
    ).length;
    const researchMentors = cseFaculty.filter((f) =>
      /Ph\.D/i.test(f.qualifications ?? ""),
    ).length;
    return {
      total,
      leadership: leadershipCount,
      professors,
      researchMentors,
    };
  }, []);

  const leadership = useMemo(
    () => {
      const rank = (title: string) => {
        if (/Chairperson/i.test(title)) return 0;
        if (/Dean/i.test(title)) return 1;
        if (/Associate Chair/i.test(title)) return 2;
        if (/Professor/i.test(title) && !/Associate/i.test(title) && !/Assistant/i.test(title)) return 3;
        if (/Associate Professor/i.test(title)) return 4;
        if (/Assistant Professor/i.test(title)) return 5;
        return 6;
      };
      return cseFaculty.sort((a, b) => rank(a.title) - rank(b.title));
    },
    [],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection stats={stats} />
      <div className="relative px-6">
        <div className="mx-auto max-w-7xl">
          <LeadershipSection leadership={leadership} />
        </div>
      </div>
      <div className="relative px-6">
        <div className="mx-auto max-w-7xl">
          <ClosingSection />
        </div>
      </div>
    </div>
  );
}

type Stats = {
  total: number;
  leadership: number;
  professors: number;
  researchMentors: number;
};

type HeroSectionProps = {
  stats: Stats;
};

function HeroSection({ stats }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-magenta/20 via-brand-orange/15 to-brand-blue/15 py-24 md:py-32">
      <div className="absolute inset-0">
        <div className="absolute -top-32 right-10 h-96 w-96 rounded-full bg-brand-magenta/25 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-brand-blue/25 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 h-72 w-72 rounded-full bg-brand-orange/15 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-12 lg:gap-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-6 text-center lg:text-left flex-1">
            <Badge className="mx-auto w-fit rounded-full bg-white/80 dark:bg-slate-800/70 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-magenta lg:mx-0 backdrop-blur-md border-2 border-brand-magenta/40 dark:border-brand-magenta/50 shadow-md">
              School of Engineering · CSE Faculty
            </Badge>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white mb-4 tracking-tight">
                Meet the Minds<br className="hidden sm:block" /> Powering CS &amp; Engineering
              </h1>
            </div>
            <p className="max-w-2xl text-lg md:text-xl text-white/85 leading-relaxed">
              Our faculty are seasoned researchers, innovators, and mentors guiding the next generation of technologists through cutting-edge labs, industry collaborations, and personalized mentorship.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start pt-4">
              <Button
                className="bg-brand-gradient text-foreground font-semibold hover:shadow-lg transition-all duration-300"
                size="lg"
                asChild
              >
                <Link to="/academics/engineering/computer-science">
                  <GraduationCap className="mr-2 h-5 w-5" /> Back to Department
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-brand-magenta/40 hover:bg-brand-magenta/10 font-semibold transition-all duration-300"
                asChild
              >
                <a href="mailto:chairman-cse@dsu.edu.in">
                  Connect with Faculty Affairs
                </a>
              </Button>
            </div>
          </div>
          <div className="grid w-full max-w-lg grid-cols-2 gap-5 rounded-3xl border border-white/30 dark:border-slate-700/40 bg-white/70 dark:bg-slate-900/70 p-8 shadow-2xl backdrop-blur-lg lg:max-w-md flex-1">
            <StatTile
              icon={Users}
              value={`${stats.total}`}
              label="Total faculty strength"
            />
            <StatTile
              icon={Sparkles}
              value={`${stats.leadership}+`}
              label="Leadership & programme heads"
            />
            <StatTile
              icon={Award}
              value={`${stats.professors}`}
              label="Professors guiding research"
            />
            <StatTile
              icon={FlaskConical}
              value={`${stats.researchMentors}`}
              label="Doctoral-qualified mentors"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type StatTileProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  value: string;
  label: string;
};

function StatTile({ icon: Icon, value, label }: StatTileProps) {
  return (
    <div className="rounded-2xl border border-brand-magenta/30 dark:border-brand-magenta/30 bg-white/80 dark:bg-slate-800/80 p-5 shadow-lg hover:shadow-xl transition-all duration-300 group">
      <Icon className="h-6 w-6 text-brand-magenta group-hover:scale-110 transition-transform" />
      <p className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">{value}</p>
      <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 font-medium">{label}</p>
    </div>
  );
}

type FacultyEntry = (typeof cseFaculty)[number];

type LeadershipSectionProps = {
  leadership: FacultyEntry[];
};

function FacultyGridCard({ faculty }: { faculty: FacultyEntry }) {
  return (
    <Link
      to={`/academics/engineering/computer-science/faculty/${faculty.slug}`}
      className="group overflow-hidden rounded-xl border border-border/50 bg-card/70 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-brand-magenta/20 active:scale-95"
    >
      <div className="relative overflow-hidden bg-slate-200 dark:bg-slate-800">
        <AspectRatio ratio={3 / 4}>
          <img
            src={faculty.image}
            alt={faculty.name}
            className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 via-40% to-transparent group-hover:from-black/80 transition-all duration-300" />
        </AspectRatio>
        <div className="absolute bottom-0 w-full p-3 text-white">
          <p className="text-xs font-bold line-clamp-2 group-hover:text-brand-magenta transition-colors">{faculty.name}</p>
          <p className="text-xs opacity-80 line-clamp-1 group-hover:opacity-100 transition-opacity">{faculty.title}</p>
        </div>
      </div>
    </Link>
  );
}

function LeadershipSection({ leadership }: LeadershipSectionProps) {
  if (leadership.length === 0) {
    return null;
  }

  return (
    <section className="py-20 md:py-28">
      <div className="text-center space-y-4 mb-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-3">
            CSE Faculty Directory
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-brand-magenta to-brand-orange rounded-full mx-auto" />
        </div>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/75 leading-relaxed">
          Meet our brilliant faculty members—researchers, innovators, and mentors steering curriculum transformation and industry partnerships.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 auto-rows-max">
        {leadership.map((faculty) => (
          <FacultyGridCard key={faculty.slug} faculty={faculty} />
        ))}
      </div>
    </section>
  );
}


function ClosingSection() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl border border-brand-magenta/30 dark:border-brand-magenta/20 bg-gradient-to-br from-brand-magenta/20 via-brand-orange/10 to-brand-blue/15 dark:from-brand-magenta/15 dark:via-brand-orange/5 dark:to-brand-blue/10 p-10 md:p-16 text-center shadow-2xl backdrop-blur-sm">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/50 dark:bg-slate-800/50 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-brand-magenta border border-white/30 dark:border-slate-700/30 backdrop-blur-sm">
            <Layers className="h-4 w-4" />
            Faculty &amp; Industry Partnerships
          </div>
          <h2 className="mt-8 text-4xl md:text-5xl font-bold text-foreground">
            Inspiring Excellence Through<br className="hidden sm:block" /> Research &amp; Innovation
          </h2>
          <p className="mt-6 text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Ready to collaborate? Engage with our faculty on cutting-edge research, industry partnerships, and innovation projects.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button className="bg-brand-gradient text-foreground font-semibold px-8 py-3 text-base hover:shadow-lg transition-all" size="lg" asChild>
              <a href="mailto:research.cse@dsu.edu.in">
                Start a Collaboration
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-brand-magenta/40 hover:bg-brand-magenta/10 font-semibold px-8 py-3 text-base transition-all"
              asChild
            >
              <Link to="/research">Explore Our Research</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
