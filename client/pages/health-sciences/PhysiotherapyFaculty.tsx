import { useMemo } from "react";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useDepartmentFaculty, FacultyMember } from "@/hooks/useDepartmentFaculty";
import {
  ChevronLeft,
  GraduationCap,
  Microscope,
  Award,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PhysiotherapyFaculty() {
  const { faculty } = useDepartmentFaculty({ departmentCode: "physiotherapy" });
  const departments = useMemo(() => {
    const grouped: Record<string, typeof faculty> = {};
    faculty.forEach((member: any) => {
      const dept = member.department || "General";
      if (!grouped[dept]) {
        grouped[dept] = [];
      }
      grouped[dept].push(member);
    });
    return Object.entries(grouped);
  }, [faculty]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative px-3 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <Link
              to="/academics/health-sciences/physiotherapy"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-blue hover:text-brand-blue/80 transition-colors mb-6"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Physiotherapy
            </Link>
            <div className="text-center space-y-4 mb-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-3 uppercase tracking-wider">
                  College of Physiotherapy Faculty
                </h2>
                <div className="w-24 h-1.5 bg-brand-blue rounded-full mx-auto" />
              </div>
              <p className="max-w-3xl mx-auto text-lg text-foreground/75 leading-relaxed font-body">
                Our faculty members are highly qualified professionals with
                extensive clinical experience and research expertise, dedicated
                to shaping the next generation of physiotherapists.
              </p>
            </div>
          </div>

          <div className="space-y-20">
            {departments.map(([deptName, members]) => (
              <section key={deptName} className="scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-2xl font-display font-bold text-brand-blue border-l-4 border-brand-blue pl-4">
                    {deptName}
                  </h3>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {members.map((faculty) => (
                    <FacultyGridCard key={faculty.slug} faculty={faculty} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FacultyGridCard({ faculty }: { faculty: PhysiotherapyFacultyMember }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-brand-blue/10 bg-card/40 backdrop-blur-sm shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-blue/10">
      <div className="relative overflow-hidden aspect-[4/5]">
        <img
          src={faculty.image}
          alt={faculty.name}
          className="absolute inset-0 h-full w-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-100 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        {faculty.googleScholar && (
          <a
            href={faculty.googleScholar}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-blue hover:scale-110"
            title="Google Scholar Profile"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      <div className="p-5 space-y-3">
        <div>
          <h4 className="font-display font-bold text-lg text-foreground group-hover:text-brand-blue transition-colors duration-300">
            {faculty.name}
          </h4>
          <p className="text-sm font-semibold text-brand-blue/80 italic">
            {faculty.title}
          </p>
        </div>

        <div className="space-y-2 pt-2 border-t border-brand-blue/5">
          <div className="flex items-start gap-2 text-xs text-foreground/70">
            <GraduationCap className="w-3.5 h-3.5 mt-0.5 text-brand-blue" />
            <span className="font-body">
              <strong>Qualification:</strong> {faculty.qualifications}
            </span>
          </div>
          <div className="flex items-start gap-2 text-xs text-foreground/70">
            <Award className="w-3.5 h-3.5 mt-0.5 text-brand-blue" />
            <span className="font-body">
              <strong>Specialization:</strong> {faculty.specialty}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
