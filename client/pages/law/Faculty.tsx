import { useMemo } from "react";
import { Link } from "react-router-dom";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useDepartmentFaculty } from "@/hooks/useDepartmentFaculty";
import {
  ChevronRight,
} from "lucide-react";

export default function LawFaculty() {
  const { faculty } = useDepartmentFaculty({ departmentCode: "law" });
  const leadership = useMemo(
    () => {
      const rank = (title: string) => {
        if (/Dean/i.test(title)) return 1;
        if (/Professor/i.test(title) && !/Associate/i.test(title) && !/Assistant/i.test(title)) return 2;
        if (/Associate Professor/i.test(title)) return 3;
        if (/Assistant Professor/i.test(title)) return 4;
        return 5;
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

type FacultyEntry = (typeof faculty)[number];

type LeadershipSectionProps = {
  leadership: FacultyEntry[];
};

function FacultyGridCard({ faculty }: { faculty: FacultyEntry }) {
  return (
    <Link
      to={`/academics/law/faculty/${faculty.slug}`}
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
    <section className="py-10 md:py-28">
      <div className="text-center space-y-4 mb-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-3">
            School of Law Faculty Directory
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-brand-magenta to-brand-orange rounded-full mx-auto" />
        </div>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/75 leading-relaxed">
          Meet our distinguished faculty—legal scholars, researchers, and mentors dedicated to excellence in legal education and practice.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 auto-rows-max">
        {leadership.map((faculty) => (
          <FacultyGridCard key={faculty.slug} faculty={faculty} />
        ))}
      </div>
    </section>
  );
}
