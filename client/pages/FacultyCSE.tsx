import type { ComponentType, SVGProps } from "react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cseFaculty } from "@/data/cse-faculty";
import {
  Award,
  ChevronRight,
  FlaskConical,
  GraduationCap,
  Layers,
  Search,
  Sparkles,
  Users,
} from "lucide-react";

type FilterKey = "all" | "leadership" | "professor" | "associate" | "assistant";

const filterOptions: Array<{
  key: FilterKey;
  label: string;
  description: string;
}> = [
  {
    key: "all",
    label: "All Faculty",
    description: "Complete faculty directory",
  },
  {
    key: "leadership",
    label: "Leadership",
    description: "Dean & academic leaders",
  },
  {
    key: "professor",
    label: "Professors",
    description: "Core research mentors",
  },
  {
    key: "associate",
    label: "Associate Professors",
    description: "Program anchors",
  },
  {
    key: "assistant",
    label: "Assistant Professors",
    description: "Emerging scholars",
  },
];

export default function FacultyCSE() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const stats = useMemo(() => {
    const total = cseFaculty.length;
    const leadershipCount = cseFaculty.filter((f) =>
      /Dean|Chair|Head/i.test(f.title),
    ).length;
    const professors = cseFaculty.filter(
      (f) =>
        /Professor/i.test(f.title) && !/Associate/i.test(f.title) && !/Assistant/i.test(f.title),
    ).length;
    const researchMentors = cseFaculty.filter((f) => /Ph\.D/i.test(f.qualifications ?? ""))
      .length;
    return {
      total,
      leadership: leadershipCount,
      professors,
      researchMentors,
    };
  }, []);

  const leadership = useMemo(
    () =>
      cseFaculty
        .filter((f) => /Dean|Chair|Head/i.test(f.title))
        .slice(0, 3),
    [],
  );

  const facultyInterests = useMemo(() => {
    const interests = new Set<string>();
    cseFaculty.forEach((f) => {
      f.interests?.forEach((interest) => interests.add(interest));
    });
    return Array.from(interests).slice(0, 8);
  }, []);

  const filteredFaculty = useMemo(() => {
    const query = search.trim().toLowerCase();
    const rank = (title: string) => {
      if (/Dean|Chair|Head/i.test(title)) return 0;
      if (/Professor/i.test(title) && !/Associate|Assistant/i.test(title)) return 1;
      if (/Associate Professor/i.test(title)) return 2;
      if (/Assistant Professor/i.test(title)) return 3;
      return 4;
    };

    return cseFaculty
      .filter((faculty) => {
        const matchesSearch =
          !query ||
          faculty.name.toLowerCase().includes(query) ||
          (faculty.title ?? "").toLowerCase().includes(query) ||
          (faculty.interests ?? []).some((interest) =>
            interest.toLowerCase().includes(query),
          );

        if (!matchesSearch) {
          return false;
        }

        switch (activeFilter) {
          case "leadership":
            return /Dean|Chair|Head/i.test(faculty.title);
          case "professor":
            return (
              /Professor/i.test(faculty.title) &&
              !/Associate/i.test(faculty.title) &&
              !/Assistant/i.test(faculty.title)
            );
          case "associate":
            return /Associate Professor/i.test(faculty.title);
          case "assistant":
            return /Assistant Professor/i.test(faculty.title);
          default:
            return true;
        }
      })
      .sort((a, b) => {
        const rankDiff = rank(a.title) - rank(b.title);
        if (rankDiff !== 0) {
          return rankDiff;
        }
        return a.name.localeCompare(b.name);
      });
  }, [activeFilter, search]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection stats={stats} interests={facultyInterests} />
      <LeadershipSection leadership={leadership} />
      <DirectorySection
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        onSearchChange={setSearch}
        search={search}
        filteredFaculty={filteredFaculty}
      />
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
            <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
              Our faculty are seasoned researchers, innovators, and mentors guiding the next generation of technologists through cutting-edge labs, industry collaborations, and personalized mentorship.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row lg:items-start">
              <Button className="bg-brand-gradient text-white" size="lg" asChild>
                <Link to="/academics/engineering/computer-science">
                  <GraduationCap className="mr-2 h-5 w-5" /> Back to Department
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-brand-magenta/40 hover:bg-brand-magenta/10" asChild>
                <a href="mailto:chairman-cse@dsu.edu.in">Connect with Faculty Affairs</a>
              </Button>
            </div>
          </div>
          <div className="grid w-full max-w-xl grid-cols-2 gap-4 rounded-3xl border border-white/20 bg-white/60 p-6 shadow-xl backdrop-blur lg:max-w-md">
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
          <div className="mt-10 rounded-3xl border border-white/30 bg-white/40 p-4 shadow-lg backdrop-blur">
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
    <div className="rounded-2xl border border-brand-magenta/20 bg-white/70 p-4 shadow-sm">
      <Icon className="h-5 w-5 text-brand-magenta" />
      <p className="mt-3 text-2xl font-semibold text-foreground">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

type FacultyEntry = (typeof cseFaculty)[number];

type LeadershipSectionProps = {
  leadership: FacultyEntry[];
};

function LeadershipSection({ leadership }: LeadershipSectionProps) {
  if (leadership.length === 0) {
    return null;
  }

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="headline-3 font-display">Leadership Spotlight</h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              Visionaries steering curriculum transformation, research innovation, and industry partnerships.
            </p>
          </div>
          <Badge className="w-fit rounded-full bg-brand-magenta/15 px-4 py-2 text-xs font-semibold text-brand-magenta">
            Faculty Senate &amp; Program Chairs
          </Badge>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {leadership.map((faculty) => (
            <Card
              key={faculty.slug}
              className="group overflow-hidden border border-border/40 bg-card/80 shadow-lg transition hover:-translate-y-1 hover:shadow-brand-magenta/20"
            >
              <div className="relative">
                <AspectRatio ratio={3 / 4}>
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </AspectRatio>
                <div className="absolute bottom-0 w-full p-4 text-white">
                  <p className="text-sm opacity-80">{faculty.title}</p>
                  <p className="text-lg font-semibold">{faculty.name}</p>
                </div>
              </div>
              <CardContent className="space-y-4 p-5 text-sm text-muted-foreground">
                {faculty.qualifications ? (
                  <p>
                    <span className="font-semibold text-foreground">Qualifications:</span> {faculty.qualifications}
                  </p>
                ) : null}
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" className="bg-brand-gradient text-white" asChild>
                    <Link to={`/academics/engineering/computer-science/faculty/${faculty.slug}`}>
                      View profile
                      <ChevronRight className="ml-1 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                  {faculty.profileUrl ? (
                    <Button variant="outline" size="sm" className="border-brand-magenta/30 hover:bg-brand-magenta/10" asChild>
                      <a href={faculty.profileUrl} target="_blank" rel="noreferrer">
                        Download CV
                      </a>
                    </Button>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

type DirectorySectionProps = {
  activeFilter: FilterKey;
  onFilterChange: (value: FilterKey) => void;
  onSearchChange: (value: string) => void;
  search: string;
  filteredFaculty: FacultyEntry[];
};

function DirectorySection({
  activeFilter,
  onFilterChange,
  onSearchChange,
  search,
  filteredFaculty,
}: DirectorySectionProps) {
  return (
    <section className="bg-gradient-to-br from-brand-magenta/5 via-brand-orange/5 to-brand-blue/5 px-6 py-16">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="headline-3 font-display">Faculty Directory</h2>
              <p className="text-sm text-muted-foreground sm:text-base">
                Use the search and filters to connect with mentors by expertise, role, or leadership responsibility.
              </p>
            </div>
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={search}
                onChange={(event) => onSearchChange(event.target.value)}
                placeholder="Search by name, title, or interest"
                className="h-11 rounded-full border-brand-magenta/30 pl-9"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((option) => (
              <Button
                key={option.key}
                variant={activeFilter === option.key ? "default" : "outline"}
                size="sm"
                className={`rounded-full border-brand-magenta/30 ${
                  activeFilter === option.key
                    ? "bg-brand-gradient text-white"
                    : "bg-white/60 text-brand-magenta hover:bg-brand-magenta/10"
                }`}
                onClick={() => onFilterChange(option.key)}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredFaculty.map((faculty) => (
            <Card
              key={faculty.slug}
              className="group flex h-full flex-col overflow-hidden border border-border/40 bg-card/80 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-magenta/15"
            >
              <div className="relative">
                <AspectRatio ratio={3 / 4}>
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                </AspectRatio>
                <div className="absolute bottom-0 w-full p-4 text-white">
                  <p className="text-xs uppercase tracking-wide opacity-80">{faculty.title}</p>
                  <p className="text-lg font-semibold flex items-center gap-1">
                    {faculty.name}
                    <ChevronRight className="h-4 w-4 opacity-70" />
                  </p>
                </div>
              </div>
              <CardContent className="flex flex-1 flex-col gap-4 p-5 text-sm text-muted-foreground">
                {faculty.qualifications ? (
                  <p>
                    <span className="font-semibold text-foreground">Qualifications:</span> {faculty.qualifications}
                  </p>
                ) : null}
                {faculty.interests && faculty.interests.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {faculty.interests.map((interest) => (
                      <Badge
                        key={`${faculty.slug}-${interest}`}
                        className="rounded-full bg-brand-magenta/15 px-2.5 py-1 text-[11px] font-medium text-brand-magenta"
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                ) : null}
                <div className="mt-auto flex flex-wrap gap-2">
                  <Button size="sm" className="bg-brand-gradient text-white" asChild>
                    <Link to={`/academics/engineering/computer-science/faculty/${faculty.slug}`}>
                      View details
                    </Link>
                  </Button>
                  {faculty.profileUrl ? (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-brand-magenta/30 hover:bg-brand-magenta/10"
                      asChild
                    >
                      <a href={faculty.profileUrl} target="_blank" rel="noreferrer">
                        Download CV
                      </a>
                    </Button>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {filteredFaculty.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-brand-magenta/30 bg-white/60 p-10 text-center text-sm text-muted-foreground">
            No faculty records match your search. Try adjusting the name, role filter, or keywords.
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ClosingSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-5xl rounded-3xl border border-brand-magenta/20 bg-gradient-to-r from-brand-magenta/15 via-brand-orange/15 to-brand-blue/15 p-10 text-center shadow-lg">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-magenta">
          <Layers className="h-4 w-4" />
          Faculty &amp; Student Synergy
        </div>
        <h2 className="mt-6 text-3xl font-bold text-foreground md:text-4xl">
          Inspiring Excellence Through Research, Mentorship &amp; Innovation
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Collaborate with DSU CSE faculty on applied research, grants, and industry-ready projects. For partnerships and visiting appointments, write to <a className="font-semibold text-brand-magenta" href="mailto:research.cse@dsu.edu.in">research.cse@dsu.edu.in</a>.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button className="bg-brand-gradient text-white" size="lg" asChild>
            <a href="mailto:placements.cse@dsu.edu.in">Connect for collaborations</a>
          </Button>
          <Button variant="outline" size="lg" className="border-brand-magenta/40 hover:bg-brand-magenta/10" asChild>
            <Link to="/research">Explore CSE research</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
