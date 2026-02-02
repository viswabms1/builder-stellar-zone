import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDepartmentFaculty } from "@/hooks/useDepartmentFaculty";

export default function MechanicalEngineeringFacultyList() {
  const { faculty } = useDepartmentFaculty({ departmentCode: "mech" });
  const chairperson = faculty.filter(f => f.title.includes("Chairperson"));
  const professors = faculty.filter(f => f.title === "Professor");
  const associateProfessors = faculty.filter(f => f.title === "Associate Professor");
  const assistants = faculty.filter(f => f.title === "Assistant Professor");
  const visiting = faculty.filter(f => f.title.includes("Visiting"));

  const FacultyCard = ({ f }: { f: typeof faculty[0] }) => (
    <Link to={`/faculty/${f.slug}`}>
      <Card className="builder-faculty-card group bg-card hover:shadow-md transition-all cursor-pointer">
        <div className="flex flex-col items-center">
          <img
            src={f.image}
            alt={f.name}
            style={{
              width: '140px',
              height: '140px',
              objectFit: 'cover',
              borderRadius: '12px',
              display: 'block',
              margin: '0 auto 16px auto'
            }}
          />
          <div className="text-center space-y-2 w-full">
            <Badge className="bg-brand-orange/20 text-brand-orange border-brand-orange/30 text-xs">
              {f.title}
            </Badge>
            <h3 className="font-semibold text-sm">{f.name}</h3>
            <p className="text-xs text-muted-foreground">{f.qualifications}</p>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-orange group-hover:text-brand-orange/80">
              View Profile
              <ChevronRight className="h-3 w-3" />
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="px-3 py-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/academics/engineering">
            <Button variant="ghost" className="mb-4">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Engineering
            </Button>
          </Link>

          <div className="mb-12">
            <h1 className="headline-2 font-display mb-2">Mechanical Engineering Faculty</h1>
            <p className="text-foreground/80">Meet our dedicated team of mechanical engineers and educators</p>
          </div>

          {/* Chairperson Section */}
          {chairperson.length > 0 && (
            <div className="mb-12">
              <h2 className="headline-3 font-display mb-6">Chairperson</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {chairperson.map((f) => (
                  <FacultyCard key={f.slug} f={f} />
                ))}
              </div>
            </div>
          )}

          {/* Professors Section */}
          {professors.length > 0 && (
            <div className="mb-12">
              <h2 className="headline-3 font-display mb-6">Professors</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {professors.map((f) => (
                  <FacultyCard key={f.slug} f={f} />
                ))}
              </div>
            </div>
          )}

          {/* Associate Professors Section */}
          {associateProfessors.length > 0 && (
            <div className="mb-12">
              <h2 className="headline-3 font-display mb-6">Associate Professors</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {associateProfessors.map((f) => (
                  <FacultyCard key={f.slug} f={f} />
                ))}
              </div>
            </div>
          )}

          {/* Assistant Professors Section */}
          {assistants.length > 0 && (
            <div className="mb-12">
              <h2 className="headline-3 font-display mb-6">Assistant Professors</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {assistants.map((f) => (
                  <FacultyCard key={f.slug} f={f} />
                ))}
              </div>
            </div>
          )}

          {/* Visiting Faculty Section */}
          {visiting.length > 0 && (
            <div>
              <h2 className="headline-3 font-display mb-6">Visiting Faculty</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {visiting.map((f) => (
                  <FacultyCard key={f.slug} f={f} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
