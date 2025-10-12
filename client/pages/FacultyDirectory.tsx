import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Filter,
  GraduationCap,
  MapPin,
  Mail,
  Search,
  Users,
} from "lucide-react";

import { facultyDirectory, facultyFocusAreas, facultySchools } from "@/data/faculty-directory";
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
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

const ALL_SCHOOLS = "All Schools";
const ALL_AREAS = "All Focus Areas";

const schoolOptions = [ALL_SCHOOLS, ...facultySchools];
const focusOptions = [ALL_AREAS, ...facultyFocusAreas];

export default function FacultyDirectory() {
  const [schoolFilter, setSchoolFilter] = useState<string>(ALL_SCHOOLS);
  const [focusFilter, setFocusFilter] = useState<string>(ALL_AREAS);
  const [searchTerm, setSearchTerm] = useState("");

  const stats = useMemo(() => {
    const total = facultyDirectory.length;
    const schools = facultySchools.length;
    const focus = facultyFocusAreas.length;
    return { total, schools, focus };
  }, []);

  const filteredFaculty = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return facultyDirectory.filter((member) => {
      const matchesSchool =
        schoolFilter === ALL_SCHOOLS || member.school === schoolFilter;

      const matchesFocus =
        focusFilter === ALL_AREAS || member.focusAreas.includes(focusFilter);

      const matchesQuery =
        query.length === 0 ||
        [
          member.name,
          member.title,
          member.department,
          member.school,
          member.focusAreas.join(" "),
          member.interests.join(" "),
        ]
          .join(" ")
          .toLowerCase()
          .includes(query);

      return matchesSchool && matchesFocus && matchesQuery;
    });
  }, [focusFilter, schoolFilter, searchTerm]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="bg-gradient-to-r from-brand-magenta/5 via-brand-blue/5 to-brand-orange/5 px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl space-y-5">
            <Badge className="bg-brand-magenta/15 text-brand-magenta">
              Faculty Directory
            </Badge>
            <h1 className="font-gilroy text-4xl leading-tight md:text-5xl">
              Discover Experts Across Schools & Focus Areas
            </h1>
            <p className="text-sm text-muted-foreground font-graphik md:text-base">
              Search and filter  to connect with DSU faculty by school, discipline, or research interest. Each profile highlights leadership roles, focus areas, and direct contact information where available.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <StatisticsCard
                label="Faculty Profiles"
                value={stats.total.toString()}
                icon={Users}
              />
              <StatisticsCard
                label="Schools Represented"
                value={stats.schools.toString()}
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
            <div className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
              Refine your search
            </div>
            <div className="space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search by name, department, or expertise"
                  className="pl-10"
                />
              </div>
              <FilterPills
                label="Schools"
                options={schoolOptions}
                active={schoolFilter}
                onSelect={setSchoolFilter}
              />
              <FilterPills
                label="Focus Areas"
                options={focusOptions}
                active={focusFilter}
                onSelect={setFocusFilter}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-gilroy text-3xl">
                {filteredFaculty.length} faculty matched
              </h2>
              <p className="text-sm text-muted-foreground font-graphik">
                Showing results filtered by {schoolFilter.toLowerCase()} and {focusFilter.toLowerCase()}.
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                setSchoolFilter(ALL_SCHOOLS);
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
                <CardTitle className="font-gilroy text-2xl">
                  No faculty found
                </CardTitle>
                <CardDescription className="font-graphik">
                  Try adjusting your filters or search for another focus area.
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

type FilterPillsProps = {
  label: string;
  options: string[];
  active: string;
  onSelect: (option: string) => void;
};

function FilterPills({ label, options, active, onSelect }: FilterPillsProps) {
  return (
    <div>
      <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <Button
            key={option}
            type="button"
            variant={option === active ? "secondary" : "outline"}
            size="sm"
            className="rounded-full border-border/60"
            onClick={() => onSelect(option)}
          >
            {option}
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
          <div className="text-2xl font-semibold font-gilroy">{value}</div>
          <div className="text-xs uppercase tracking-wide text-muted-foreground font-graphik">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}

type FacultyCardProps = {
  member: (typeof facultyDirectory)[number];
};

function FacultyCard({ member }: FacultyCardProps) {
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
          <AvatarFallback className="font-gilroy text-base">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <CardTitle className="text-lg font-gilroy leading-tight">
            {member.name}
          </CardTitle>
          <CardDescription className="font-graphik text-sm">
            {member.title}
          </CardDescription>
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-brand-magenta font-graphik">
            <Badge className="bg-brand-magenta/15 text-brand-magenta">
              {member.department}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2 text-sm text-muted-foreground font-graphik">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-brand-magenta" />
            <span>{member.school}</span>
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
          <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
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
          <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Research Interests
          </div>
          <p className="mt-1 text-sm text-foreground font-graphik">
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
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}
        </CardFooter>
      ) : null}
    </Card>
  );
}
