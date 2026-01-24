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
  X,
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
  const [showFilters, setShowFilters] = useState(false);

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

  const availableFocusAreas = useMemo(() => {
    if (schoolFilter === ALL_SCHOOLS_VALUE) {
      return facultyFocusAreas;
    }

    const schoolFocusAreas = new Set<string>();
    facultyDirectory
      .filter((member) => member.schoolId === schoolFilter)
      .forEach((member) => {
        member.focusAreas.forEach((area) => {
          schoolFocusAreas.add(area);
        });
      });

    return Array.from(schoolFocusAreas).sort();
  }, [schoolFilter]);

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
      {/* Hero Section */}
      <section className="border-b border-border/40 bg-gradient-to-r from-brand-magenta/5 via-brand-blue/5 to-brand-orange/5 px-6 py-12">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="space-y-3">
            <Badge className="bg-brand-magenta/15 text-brand-magenta">
              Faculty Directory
            </Badge>
            <h1 className="font-display text-4xl leading-tight md:text-5xl">
              Discover Experts Across Every DSU School
            </h1>
            <p className="max-w-3xl text-sm text-foreground font-body md:text-base">
              Search and filter the complete faculty ecosystem by school,
              department, research interest or keyword. Find the right mentors
              to collaborate with or contact as you explore DSU&apos;s
              programmes.
            </p>
          </div>

          {/* Statistics Bar */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
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
      </section>

      {/* Search and Filter Bar */}
      <section className="sticky top-0 z-40 border-b border-border/40 bg-background/95 px-6 py-4 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground" />
              <Input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search by name, department, research focus"
                className="pl-10"
                aria-label="Search faculty directory"
              />
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="gap-2"
            >
              <Filter className="h-4 w-4" />
              <span className="hidden sm:inline">Filters</span>
            </Button>
          </div>

          {/* Filters - Collapsible on mobile, always visible on desktop */}
          <div
            className={`space-y-3 overflow-hidden transition-all duration-300 ${
              showFilters ? "max-h-96" : "max-h-0 lg:max-h-96"
            }`}
          >
            <FilterPills
              label="Schools"
              options={schoolOptions}
              activeValue={schoolFilter}
              onSelect={(value) => {
                setSchoolFilter(value as SelectedSchool);
                // Reset focus filter when school changes
                setFocusFilter(ALL_AREAS);
              }}
            />
            <FilterPills
              label="Focus Areas"
              options={[
                { label: ALL_AREAS, value: ALL_AREAS },
                ...availableFocusAreas.map((option) => ({
                  label: option,
                  value: option,
                })),
              ]}
              activeValue={focusFilter}
              onSelect={(value) => setFocusFilter(value)}
            />
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs font-medium text-foreground">
                {filteredFaculty.length} faculty matched
              </span>
              {(searchTerm ||
                schoolFilter !== ALL_SCHOOLS_VALUE ||
                focusFilter !== ALL_AREAS) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSchoolFilter(ALL_SCHOOLS_VALUE);
                    setFocusFilter(ALL_AREAS);
                    setSearchTerm("");
                  }}
                  className="h-6 text-xs"
                >
                  Clear all
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* School Overview Section */}
      <section className="border-b border-border/40 px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 font-display text-2xl">Browse by School</h2>
          <SchoolOverviewGrid counts={schoolCountMap} />
        </div>
      </section>

      {/* Faculty Results Section */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
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
            <div className="grid gap-4 grid-cols-9">
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
    <div className="flex items-center gap-3 rounded-2xl border border-border/40 bg-background/80 px-4 py-3 backdrop-blur">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-magenta/10 text-brand-magenta">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <div className="text-lg font-semibold font-display">{value}</div>
        <div className="text-xs uppercase tracking-wide text-foreground font-body">
          {label}
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
    <div className="grid gap-3 grid-cols-9">
      {facultySchoolsMeta.map((school) => {
        const profileCount = counts[school.id] ?? 0;
        const meta = getFacultySchoolMeta(school.id);

        return (
          <Card
            key={school.id}
            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border/40 bg-card/60 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand-magenta/40 hover:shadow-lg hover:shadow-brand-magenta/10"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-magenta/10 text-brand-magenta">
                  <Library className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <CardTitle className="text-base font-display">
                    {school.name}
                  </CardTitle>
                  <p className="text-xs uppercase tracking-wide text-foreground font-body">
                    {profileCount} {profileCount === 1 ? "profile" : "profiles"}
                  </p>
                </div>
              </div>
              {meta?.highlight ? (
                <p className="text-xs text-foreground font-body line-clamp-2">
                  {meta.highlight}
                </p>
              ) : null}
            </CardHeader>
            <CardContent className="pb-3">
              <p className="text-xs text-foreground font-body line-clamp-3">
                {school.description}
              </p>
            </CardContent>
            {school.href && (
              <CardFooter className="pt-0">
                {school.href.startsWith("http") ? (
                  <a
                    href={school.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-brand-magenta hover:underline"
                  >
                    Visit
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                ) : (
                  <Link
                    to={school.href}
                    className="inline-flex items-center gap-1 text-xs font-medium text-brand-magenta hover:underline"
                  >
                    Visit
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                )}
              </CardFooter>
            )}
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
    <Card className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/60 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand-magenta/40 hover:shadow-lg hover:shadow-brand-magenta/10">
      <CardHeader className="flex flex-col items-center gap-3 pb-3 text-center">
        <Avatar className="h-14 w-14">
          {member.image ? (
            <AvatarImage src={member.image} alt={member.name} />
          ) : null}
          <AvatarFallback className="font-display text-sm">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <CardTitle className="text-sm font-display leading-tight">
            {member.name}
          </CardTitle>
          <CardDescription className="font-body text-xs">
            {member.title}
          </CardDescription>
        </div>
        <Badge className="bg-brand-magenta/15 text-brand-magenta text-xs">
          {member.department}
        </Badge>
      </CardHeader>

      <CardContent className="flex-1 space-y-3 pb-3">
        <div className="space-y-2 text-xs text-foreground font-body">
          <div className="flex items-center justify-center gap-1">
            <GraduationCap className="h-3 w-3 flex-shrink-0 text-brand-magenta" />
            <span className="line-clamp-1">{schoolName}</span>
          </div>
          {member.office ? (
            <div className="flex items-center justify-center gap-1">
              <MapPin className="h-3 w-3 flex-shrink-0 text-brand-magenta" />
              <span className="line-clamp-1">{member.office}</span>
            </div>
          ) : null}
          {member.email ? (
            <div className="flex items-center justify-center gap-1">
              <Mail className="h-3 w-3 flex-shrink-0 text-brand-magenta" />
              <a
                href={`mailto:${member.email}`}
                className="line-clamp-1 text-brand-magenta hover:underline"
                title={member.email}
              >
                {member.email.split("@")[0]}
              </a>
            </div>
          ) : null}
        </div>

        {member.focusAreas.length > 0 && (
          <div className="space-y-1">
            <div className="text-xs font-semibold uppercase tracking-wide text-foreground">
              Focus
            </div>
            <div className="flex flex-wrap justify-center gap-1">
              {member.focusAreas.slice(0, 2).map((area) => (
                <Badge
                  key={area}
                  variant="secondary"
                  className="rounded-full bg-brand-magenta/10 text-xs text-brand-magenta"
                >
                  {area.length > 15 ? area.slice(0, 12) + "..." : area}
                </Badge>
              ))}
              {member.focusAreas.length > 2 && (
                <Badge
                  variant="secondary"
                  className="rounded-full bg-brand-magenta/10 text-xs text-brand-magenta"
                >
                  +{member.focusAreas.length - 2}
                </Badge>
              )}
            </div>
          </div>
        )}
      </CardContent>

      {member.profileUrl && (
        <CardFooter className="pt-0">
          {member.profileUrl.startsWith("http") ? (
            <a
              href={member.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-1 rounded-lg border border-brand-magenta/40 px-3 py-2 text-xs font-medium text-brand-magenta transition-colors hover:bg-brand-magenta/10"
            >
              Profile
              <ArrowUpRight className="h-3 w-3" />
            </a>
          ) : (
            <Link
              to={member.profileUrl}
              className="inline-flex w-full items-center justify-center gap-1 rounded-lg border border-brand-magenta/40 px-3 py-2 text-xs font-medium text-brand-magenta transition-colors hover:bg-brand-magenta/10"
            >
              Profile
              <ArrowRight className="h-3 w-3" />
            </Link>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
