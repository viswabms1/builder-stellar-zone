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
import { medicalEngineeringFaculty } from "@/data/medical-engineering-faculty";
import {
  ChevronRight,
} from "lucide-react";

export default function FacultyMedicalEngineering() {
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
      return medicalEngineeringFaculty.sort((a, b) => rank(a.title) - rank(b.title));
    },
    [],
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

type FacultyEntry = (typeof medicalEngineeringFaculty)[number];

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

      <div className="grid auto-rows-max gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
  return (
    <Card className="overflow-hidden border border-border/40 bg-card/40 transition-all hover:shadow-lg">
      {member.image && (
        <AspectRatio ratio={1 / 1}>
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover"
          />
        </AspectRatio>
      )}
      <CardHeader>
        <CardTitle className="text-lg font-display">{member.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <p className="text-sm text-foreground/80">{member.title}</p>
          <p className="text-xs text-foreground/60">Qualification: {member.qualifications}</p>
        </div>
        {member.profileUrl && (
          <Link to={member.profileUrl} asChild>
            <Button variant="outline" size="sm" className="w-full">
              View Profile
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
