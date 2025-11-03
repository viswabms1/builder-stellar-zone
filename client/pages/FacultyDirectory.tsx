import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Filter,
  GraduationCap,
  Library,
  Mail,
  MapPin,
  Search,
  Users,
} from "lucide-react";

import {
  facultyDirectory,
  facultyFocusAreas,
  facultySchoolsMeta,
  getFacultySchoolMeta,
} from "@/data/faculty-directory";
import type { FacultySchoolId } from "@/data/faculty-directory";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ALL_SCHOOLS_VALUE = "all";
const ALL_SCHOOLS_LABEL = "All Schools";
const ALL_AREAS = "All Focus Areas";

const schoolOptions = [
  { label: ALL_SCHOOLS_LABEL, value: ALL_SCHOOLS_VALUE },
  ...facultySchoolsMeta.map((school) => ({
    label: school.name,
    value: school.id,
  })),
];

const focusOptions = [ALL_AREAS, ...facultyFocusAreas];

type SelectedSchool = typeof ALL_SCHOOLS_VALUE | FacultySchoolId;

export default function FacultyDirectory() {
  const [schoolFilter, setSchoolFilter] =
    useState<SelectedSchool>(ALL_SCHOOLS_VALUE);
  const [focusFilter, setFocusFilter] = useState<string>(ALL_AREAS);
  const [searchTerm, setSearchTerm] = useState("");

  const stats = useMemo(() => {
    const total = facultyDirectory.length;
    const schoolsRepresented = new Set(
      facultyDirectory.map((member) => member.schoolId),
    ).size;
    const focus = facultyFocusAreas.length;
    return { total, schoolsRepresented, focus };
  }, []);

  const schoolCountMap = useMemo(() => {
    return facultySchoolsMeta.reduce<Record<string, number>>((acc, school) => {
      acc[school.id] = facultyDirectory.filter(
        (member) => member.schoolId === school.id,
      ).length;
      return acc;
    }, {});
  }, []);

  const filteredFaculty = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return facultyDirectory.filter((member) => {
      const matchesSchool =
        schoolFilter === ALL_SCHOOLS_VALUE || member.schoolId === schoolFilter;

      const matchesFocus =
        focusFilter === ALL_AREAS || member.focusAreas.includes(focusFilter);

      const matchesQuery =
        query.length === 0 ||
        [
          member.name,
          member.title,
          member.department,
          getFacultySchoolMeta(member.schoolId)?.name ?? "",
          member.focusAreas.join(" "),
          member.interests.join(" "),
        ]
          .join(" ")
          .toLowerCase()
          .includes(query);

      return matchesSchool && matchesFocus && matchesQuery;
    });
  }, [focusFilter, schoolFilter, searchTerm]);

  const activeSchoolLabel =
    schoolFilter === ALL_SCHOOLS_VALUE
      ? "all schools"
      : (getFacultySchoolMeta(schoolFilter)?.name ?? "all schools");

  const activeFocusLabel =
    focusFilter === ALL_AREAS ? "all focus areas" : focusFilter.toLowerCase();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="bg-gradient-to-r from-brand-magenta/5 via-brand-blue/5 to-brand-orange/5 px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl space-y-5">
            <Badge className="bg-brand-magenta/15 text-brand-magenta">
              Faculty Directory
            </Badge>
            <h1 className="font-display text-4xl leading-tight md:text-5xl">
              Discover Experts Across Every DSU School
            </h1>
            <p className="text-sm text-foreground font-body md:text-base">
              Search and filter the complete faculty ecosystem by school,
              department, research interest or keyword. Find the right mentors
              to collaborate with or contact as you explore DSU&apos;s
              programmes.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <StatisticsCard
                label="Faculty Profiles"
                value={stats.total.toString()}
                icon={Users}
              />
              <StatisticsCard
                label="Schools Covered"
                value={stats.schoolsRepresented.toString()}
                icon={GraduationCap}
              />
              <StatisticsCard
                label="Focus Areas"
                value={stats.focus.toString()}
                icon={Filter}
              />
            </div>
          </div>
          <div className="w-full max-w-xl rounded-3xl border border-border/40 bg-background/80 p-6 backdrop-blur">
            <div className="mb-4 text-sm font-medium uppercase tracking-wide text-foreground">
              Refine your search
            </div>
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground" />
                <Input
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search by name, department, research focus"
                  className="pl-10"
                  aria-label="Search faculty directory"
                />
              </div>
              <FilterPills
                label="Schools"
                options={schoolOptions}
                activeValue={schoolFilter}
                onSelect={(value) => setSchoolFilter(value as SelectedSchool)}
              />
              <FilterPills
                label="Focus Areas"
                options={focusOptions.map((option) => ({
                  label: option,
                  value: option,
                }))}
                activeValue={focusFilter}
                onSelect={(value) => setFocusFilter(value)}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-4">
        <div className="mx-auto max-w-7xl">
          <SchoolOverviewGrid counts={schoolCountMap} />
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-3xl">
                {filteredFaculty.length} faculty matched
              </h2>
              <p className="text-sm text-foreground font-body">
                Showing results filtered by {activeSchoolLabel.toLowerCase()}{" "}
                and {activeFocusLabel}.
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                setSchoolFilter(ALL_SCHOOLS_VALUE);
                setFocusFilter(ALL_AREAS);
                setSearchTerm("");
              }}
            >
              Reset filters
            </Button>
          </div>

          {filteredFaculty.length === 0 ? (
            <Card className="border-dashed border-border/60 bg-muted/40 p-10 text-center">
              <CardHeader>
                <CardTitle className="font-display text-2xl">
                  No faculty found yet
                </CardTitle>
                <CardDescription className="font-body">
                  We&apos;re still cataloguing profiles for this selection. Try
                  another school or focus area.
                </CardDescription>
              </CardHeader>
            </Card>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredFaculty.map((member) => (
                <FacultyCard key={member.id} member={member} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

type FilterOption = { label: string; value: string };

type FilterPillsProps = {
  label: string;
  options: FilterOption[];
  activeValue: string;
  onSelect: (value: string) => void;
};

function FilterPills({
  label,
  options,
  activeValue,
  onSelect,
}: FilterPillsProps) {
  return (
    <div>
      <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground">
        {label}
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <Button
            key={option.value}
            type="button"
            variant={option.value === activeValue ? "secondary" : "outline"}
            size="sm"
            className="rounded-full border-border/60"
            onClick={() => onSelect(option.value)}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

type StatisticsCardProps = {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
};

function StatisticsCard({ label, value, icon: Icon }: StatisticsCardProps) {
  return (
    <div className="rounded-2xl border border-border/40 bg-background/80 p-4 backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-magenta/10 text-brand-magenta">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-2xl font-semibold font-display">{value}</div>
          <div className="text-xs uppercase tracking-wide text-foreground font-body">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}

type SchoolOverviewGridProps = {
  counts: Record<string, number>;
};

function SchoolOverviewGrid({ counts }: SchoolOverviewGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {facultySchoolsMeta.map((school) => {
        const profileCount = counts[school.id] ?? 0;
        const meta = getFacultySchoolMeta(school.id);

        return (
          <Card
            key={school.id}
            className="group flex h-full flex-col justify-between rounded-3xl border border-border/40 bg-card/60 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand-magenta/40 hover:shadow-xl hover:shadow-brand-magenta/10"
          >
            <CardHeader className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-magenta/10 text-brand-magenta">
                  <Library className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-lg font-display">
                    {school.name}
                  </CardTitle>
                  <p className="text-xs uppercase tracking-wide text-foreground font-body">
                    {profileCount} {profileCount === 1 ? "profile" : "profiles"}
                  </p>
                </div>
              </div>
              {meta?.highlight ? (
                <p className="text-sm text-foreground font-body">
                  {meta.highlight}
                </p>
              ) : null}
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-foreground font-body">
                {school.description}
              </p>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              {school.href ? (
                school.href.startsWith("http") ? (
                  <a
                    href={school.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
                  >
                    Visit school page
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  <Link
                    to={school.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-brand-magenta"
                  >
                    Visit school page
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )
              ) : (
                <span className="text-sm font-medium text-foreground">
                  Info coming soon
                </span>
              )}
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}

type FacultyCardProps = {
  member: (typeof facultyDirectory)[number];
};

function FacultyCard({ member }: FacultyCardProps) {
  const schoolMeta = getFacultySchoolMeta(member.schoolId);
  const schoolName = schoolMeta?.name ?? "";
  const initials = member.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  return (
    <Card className="group h-full overflow-hidden rounded-3xl border border-border/50 bg-card/60 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand-magenta/40 hover:shadow-xl hover:shadow-brand-magenta/10">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-16 w-16">
          {member.image ? (
            <AvatarImage src={member.image} alt={member.name} />
          ) : null}
          <AvatarFallback className="font-display text-base">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <CardTitle className="text-lg font-display leading-tight">
            {member.name}
          </CardTitle>
          <CardDescription className="font-body text-sm">
            {member.title}
          </CardDescription>
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-brand-magenta font-body">
            <Badge className="bg-brand-magenta/15 text-brand-magenta">
              {member.department}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2 text-sm text-foreground font-body">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-brand-magenta" />
            <span>{schoolName}</span>
          </div>
          {member.office ? (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand-magenta" />
              <span>{member.office}</span>
            </div>
          ) : null}
          {member.email ? (
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-magenta" />
              <a
                href={`mailto:${member.email}`}
                className="text-brand-magenta hover:underline"
              >
                {member.email}
              </a>
            </div>
          ) : null}
        </div>
        <div className="space-y-1">
          <div className="text-xs font-semibold uppercase tracking-wide text-foreground">
            Focus Areas
          </div>
          <div className="flex flex-wrap gap-2">
            {member.focusAreas.map((area) => (
              <Badge
                key={area}
                variant="secondary"
                className="rounded-full bg-brand-magenta/10 text-xs text-brand-magenta"
              >
                {area}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-foreground">
            Research Interests
          </div>
          <p className="mt-1 text-sm text-foreground font-body">
            {member.interests.join(", ")}
          </p>
        </div>
      </CardContent>
      {member.profileUrl ? (
        <CardFooter>
          {member.profileUrl.startsWith("http") ? (
            <a
              href={member.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-between rounded-2xl border border-brand-magenta/40 px-4 py-2 text-sm font-medium text-brand-magenta transition-colors hover:bg-brand-magenta/10"
            >
              View profile
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <Link
              to={member.profileUrl}
              className="inline-flex w-full items-center justify-between rounded-2xl border border-brand-magenta/40 px-4 py-2 text-sm font-medium text-brand-magenta transition-colors hover:bg-brand-magenta/10"
            >
              View profile
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </CardFooter>
      ) : null}
    </Card>
  );
}
