import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useDepartmentFaculty } from "@/hooks/useDepartmentFaculty";
import {
  ChevronRight,
} from "lucide-react";

export default function FacultyMedicalEngineering() {
  const { faculty } = useDepartmentFaculty({ departmentCode: "medical-engineering" });
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
      return faculty.sort((a, b) => rank(a.title) - rank(b.title));
    },
    [faculty],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative px-3 py-8">
        <div className="mx-auto max-w-7xl">
          <LeadershipSection leadership={leadership} />
        </div>
      </div>
    </div>
  );
}

import type { FacultyMember } from "@/hooks/useDepartmentFaculty";
type FacultyEntry = FacultyMember;

type LeadershipSectionProps = {
  leadership: FacultyEntry[];
};

function LeadershipSection({ leadership }: LeadershipSectionProps) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 text-3xl font-bold font-display">Department Faculty</h1>
        <p className="text-foreground/80">Meet the dedicated faculty members of the Computer Science and Medical Engineering program.</p>
      </div>

      <div className="grid auto-rows-max gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9">
        {leadership.map((person) => (
          <FacultyCard key={person.name} member={person} />
        ))}
      </div>
    </div>
  );
}

type FacultyCardProps = {
  member: FacultyEntry;
};

function FacultyCard({ member }: FacultyCardProps) {
  if (member.profileUrl) {
    return (
      <Link to={member.profileUrl} className="group">
        <div className="overflow-hidden rounded-lg border border-border/40 bg-card/40 transition-all hover:shadow-lg cursor-pointer h-full flex flex-col">
          {member.image && (
            <AspectRatio ratio={1 / 1.3} className="flex-shrink-0">
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform"
              />
            </AspectRatio>
          )}
          <div className="p-2 flex-1 flex flex-col justify-between min-w-0">
            <div>
              <p className="text-xs font-semibold text-foreground truncate">{member.name}</p>
              <p className="text-xs text-foreground/70 line-clamp-2">{member.title}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-border/40 bg-card/40 transition-all hover:shadow-lg h-full flex flex-col">
      {member.image && (
        <AspectRatio ratio={1 / 1.3} className="flex-shrink-0">
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover"
          />
        </AspectRatio>
      )}
      <div className="p-2 flex-1 flex flex-col justify-between min-w-0">
        <div>
          <p className="text-xs font-semibold text-foreground truncate">{member.name}</p>
          <p className="text-xs text-foreground/70 line-clamp-2">{member.title}</p>
        </div>
      </div>
    </div>
  );
}
