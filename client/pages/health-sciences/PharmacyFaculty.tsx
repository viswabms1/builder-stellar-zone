import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { pharmacyFaculty } from "@/data/pharmacy-faculty";
import { ChevronRight, Pill } from "lucide-react";

export default function PharmacyFaculty() {
  const sortedFaculty = useMemo(() => {
    const rank = (title: string) => {
      if (/Principal/i.test(title) || /Chairperson/i.test(title)) return 0;
      if (/Dean/i.test(title)) return 1;
      if (/HOD/i.test(title)) return 2;
      if (
        /Professor/i.test(title) &&
        !/Associate/i.test(title) &&
        !/Assistant/i.test(title)
      )
        return 3;
      if (/Associate Professor/i.test(title)) return 4;
      if (/Assistant Professor/i.test(title)) return 5;
      if (/Lecturer/i.test(title)) return 6;
      return 7;
    };
    return pharmacyFaculty.sort((a, b) => rank(a.title) - rank(b.title));
  }, []);

  const titleGroups = useMemo(() => {
    const groups = new Map<string, typeof pharmacyFaculty>();
    sortedFaculty.forEach((faculty) => {
      const key = faculty.title;
      if (!groups.has(key)) {
        groups.set(key, []);
      }
      groups.get(key)!.push(faculty);
    });
    return Array.from(groups.entries());
  }, [sortedFaculty]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="relative px-3 py-8">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/academics/health-sciences/pharmacy"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-blue hover:text-brand-blue/80 transition-colors mb-8"
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
            Back to Pharmacy
          </Link>

          <div className="mb-12">
            <div className="space-y-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-3">
                  College of Pharmaceutical Sciences
                </h1>
                <div className="w-20 h-1.5 bg-gradient-to-r from-brand-blue to-brand-magenta rounded-full" />
              </div>
              <p className="max-w-3xl text-lg md:text-xl text-foreground/75 leading-relaxed">
                Meet our exceptional faculty members—experienced pharmaceutical
                scientists, researchers, and educators dedicated to fostering
                excellence in pharmaceutical education, drug discovery, and
                clinical practice.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Faculty Directory by Title */}
      <div className="relative px-3 py-8">
        <div className="mx-auto max-w-7xl">
          {titleGroups.map(([title, faculty]) => (
            <div key={title} className="mb-16">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <Pill className="h-5 w-5 text-brand-blue" />
                  <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground">
                    {title}
                  </h2>
                </div>
                <div className="h-1 w-16 bg-gradient-to-r from-brand-blue to-transparent rounded-full" />
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {faculty.map((member, idx) => (
                  <Card
                    key={idx}
                    className="rounded-lg border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-500 hover:-translate-y-1"
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="font-display text-lg leading-tight">
                        {member.name}
                      </CardTitle>
                      <CardDescription className="text-xs font-medium text-brand-blue">
                        {member.title}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <p className="text-xs text-foreground/60 uppercase tracking-wide mb-1">
                          Qualifications
                        </p>
                        <p className="text-sm text-foreground/90 font-body">
                          {member.qualifications}
                        </p>
                      </div>
                      {member.specialty && (
                        <div>
                          <p className="text-xs text-foreground/60 uppercase tracking-wide mb-1">
                            Specialization
                          </p>
                          <p className="text-sm text-foreground/90 font-body">
                            {member.specialty}
                          </p>
                        </div>
                      )}
                      {member.profileUrl && member.profileUrl !== "#" && (
                        <a
                          href={member.profileUrl}
                          className="inline-flex items-center gap-2 text-xs font-medium text-brand-blue hover:text-brand-blue/80 transition-colors pt-2"
                        >
                          View Profile
                          <ChevronRight className="h-3 w-3" />
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-16 p-6 rounded-lg border border-brand-blue/20 bg-brand-blue/5">
            <p className="text-sm text-foreground/80 font-body">
              For inquiries about our faculty and their research areas, please
              contact the College of Pharmaceutical Sciences at{" "}
              <a
                href="mailto:pharmacy@dsu.edu.in"
                className="font-medium text-brand-blue hover:text-brand-blue/80 transition-colors"
              >
                pharmacy@dsu.edu.in
              </a>{" "}
              or call <span className="font-medium">+91-80-49092933</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
