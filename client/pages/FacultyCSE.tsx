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

  const facultyInterests = useMemo(() => {
    const interests = new Set<string>();
    cseFaculty.forEach((f) => {
      f.interests?.forEach((interest) => interests.add(interest));
    });
    return Array.from(interests).slice(0, 8);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection stats={stats} interests={facultyInterests} />
      <div className="relative px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <LeadershipSection leadership={leadership} />
        </div>
      </div>
      <ClosingSection />
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
  interests: string[];
};

function HeroSection({ stats, interests }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-magenta/15 via-brand-orange/10 to-brand-blue/10 py-16">
      <div className="absolute inset-0">
        <div className="absolute -top-16 right-10 h-64 w-64 rounded-full bg-brand-magenta/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4 text-center lg:text-left">
            <Badge className="mx-auto w-fit rounded-full bg-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-magenta lg:mx-0">
              School of Engineering · CSE Faculty
            </Badge>
            <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Meet the Minds Powering Computer Science &amp; Engineering
            </h1>
            <p className="max-w-2xl text-base text-foreground md:text-lg">
              Our faculty are seasoned researchers, innovators, and mentors
              guiding the next generation of technologists through cutting-edge
              labs, industry collaborations, and personalized mentorship.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row lg:items-start">
              <Button
                className="bg-brand-gradient text-foreground"
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
                className="border-brand-magenta/40 hover:bg-brand-magenta/10"
                asChild
              >
                <a href="mailto:chairman-cse@dsu.edu.in">
                  Connect with Faculty Affairs
                </a>
              </Button>
            </div>
          </div>
          <div className="grid w-full max-w-xl grid-cols-2 gap-4 rounded-3xl border border-white/20 dark:border-slate-700/40 bg-white/60 dark:bg-slate-900/60 p-6 shadow-xl backdrop-blur lg:max-w-md">
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
        {interests.length > 0 ? (
          <div className="mt-10 rounded-3xl border border-white/30 dark:border-slate-700/30 bg-white/40 dark:bg-slate-900/40 p-4 shadow-lg backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-magenta">
              Research &amp; Interest Clusters
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {interests.map((interest) => (
                <Badge
                  key={interest}
                  className="rounded-full bg-brand-magenta/15 px-3 py-1 text-xs font-medium text-brand-magenta"
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        ) : null}
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
    <div className="rounded-2xl border border-brand-magenta/20 dark:border-brand-magenta/30 bg-white/70 dark:bg-slate-800 p-4 shadow-sm">
      <Icon className="h-5 w-5 text-brand-magenta" />
      <p className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{value}</p>
      <p className="text-xs text-slate-700 dark:text-slate-300">{label}</p>
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
      className="group overflow-hidden rounded-lg border border-border/40 bg-card/60 shadow-sm transition hover:-translate-y-0.5 hover:shadow-brand-magenta/15"
    >
      <div className="relative overflow-hidden">
        <AspectRatio ratio={3 / 4}>
          <img
            src={faculty.image}
            alt={faculty.name}
            className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-[1.05] transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        </AspectRatio>
        <div className="absolute bottom-0 w-full p-2.5 text-white">
          <p className="text-xs font-semibold line-clamp-2">{faculty.name}</p>
          <p className="text-xs opacity-75 line-clamp-1">{faculty.title}</p>
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
    <section className="space-y-6">
      <div className="text-center space-y-3">
        <h2 className="headline-2 font-display">CSE Faculty Directory</h2>
        <p className="max-w-3xl mx-auto text-lg text-foreground">
          Meet our dedicated faculty members steering curriculum transformation, research innovation, and industry partnerships.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {leadership.map((faculty) => (
          <FacultyGridCard key={faculty.slug} faculty={faculty} />
        ))}
      </div>
    </section>
  );
}


function ClosingSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-5xl rounded-3xl border border-brand-magenta/20 bg-gradient-to-r from-brand-magenta/15 via-brand-orange/15 to-brand-blue/15 p-10 text-center shadow-lg">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/40 dark:bg-slate-800/40 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-magenta">
          <Layers className="h-4 w-4" />
          Faculty &amp; Student Synergy
        </div>
        <h2 className="mt-6 text-3xl font-bold text-foreground md:text-4xl">
          Inspiring Excellence Through Research, Mentorship &amp; Innovation
        </h2>
        <p className="mt-4 text-lg text-foreground">
          Collaborate with DSU CSE faculty on applied research, grants, and
          industry-ready projects. For partnerships and visiting appointments,
          write to{" "}
          <a
            className="font-semibold text-brand-magenta"
            href="mailto:research.cse@dsu.edu.in"
          >
            research.cse@dsu.edu.in
          </a>
          .
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button className="bg-brand-gradient text-foreground" size="lg" asChild>
            <a href="mailto:placements.cse@dsu.edu.in">
              Connect for collaborations
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-brand-magenta/40 hover:bg-brand-magenta/10"
            asChild
          >
            <Link to="/research">Explore CSE research</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
