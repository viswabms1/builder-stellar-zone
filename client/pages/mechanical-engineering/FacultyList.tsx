import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { mechFaculty } from "@/data/mech-faculty";

const faculty = mechFaculty;

export default function MechanicalEngineeringFacultyList() {
  const chairperson = faculty.filter(f => f.title.includes("Chairperson"));
  const professors = faculty.filter(f => f.title === "Professor");
  const associateProfessors = faculty.filter(f => f.title === "Associate Professor");
  const assistants = faculty.filter(f => f.title === "Assistant Professor");
  const visiting = faculty.filter(f => f.title.includes("Visiting"));

  const FacultyCard = ({ f }: { f: typeof faculty[0] }) => (
    <Link to={`/faculty/${f.slug}`}>
      <Card className="h-full group border border-border/50 bg-card/50 hover:shadow-lg hover:shadow-brand-orange/10 transition-all hover:-translate-y-1 cursor-pointer overflow-hidden">
        <div className="h-24 overflow-hidden bg-muted">
          <img
            src={f.image}
            alt={f.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-3">
          <CardHeader className="p-0 pb-1">
            <div className="mb-1">
              <Badge className="bg-brand-orange/20 text-brand-orange border-brand-orange/30 text-xs py-0 px-2">
                {f.title}
              </Badge>
            </div>
            <CardTitle className="font-display text-sm">{f.name}</CardTitle>
          </CardHeader>
          <CardContent className="p-0 pt-1">
            <div className="mb-1">
              <p className="text-xs text-foreground/70">{f.qualifications}</p>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-orange group-hover:text-brand-orange/80">
              View Profile
              <ChevronRight className="h-2 w-2" />
            </span>
          </CardContent>
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
              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
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
              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
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
              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
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
              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
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
              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
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
