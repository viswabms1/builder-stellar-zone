import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { mechFaculty } from "@/data/mech-faculty";

export default function MechanicalEngineeringFacultyList() {
  const faculty = mechFaculty;
  const chairperson = faculty.filter(f => f.title.includes("Chairperson"));
  const professors = faculty.filter(f => f.title === "Professor");
  const associateProfessors = faculty.filter(f => f.title === "Associate Professor");
  const assistants = faculty.filter(f => f.title === "Assistant Professor");
  const visiting = faculty.filter(f => f.title.includes("Visiting"));

  const FacultyCard = ({ f }: { f: typeof faculty[0] }) => (
    <Link to={`/faculty/${f.slug}`}>
      <Card className="group bg-card hover:shadow-md transition-all cursor-pointer rounded-2xl p-5">
        <div className="flex flex-col items-center gap-4">
          <div className="w-[140px] h-[140px] flex-shrink-0">
            <img
              src={f.image}
              alt={f.name}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
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
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16" style={{ maxHeight: '10cm', overflow: 'auto' }}>
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
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16" style={{ maxHeight: '10cm', overflow: 'auto' }}>
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
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16" style={{ maxHeight: '10cm', overflow: 'auto' }}>
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
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16" style={{ maxHeight: '10cm', overflow: 'auto' }}>
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
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16" style={{ maxHeight: '10cm', overflow: 'auto' }}>
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
