import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

const faculty = [
  { name: "Dr. Venkataramanan N S", title: "Professor & Chairperson", slug: "venkataramanan-ns" },
  { name: "Dr. A V RAGHU", title: "Professor", slug: "av-raghu" },
  { name: "Dr. Bhavana Rikhari", title: "Assistant Professor", slug: "bhavana-rikhari" },
  { name: "Dr. Sai Prasad Nayak", title: "Assistant Professor", slug: "sai-prasad-nayak" },
  { name: "Dr. Pradeep Kumar Badiya", title: "Assistant Professor", slug: "pradeep-kumar-badiya" },
  { name: "Dr. Shreeganesh Subraya Hegde", title: "Assistant Professor", slug: "shreeganesh-hegde" },
  { name: "Dr. SK Habibullah", title: "Assistant Professor", slug: "sk-habibullah" },
  { name: "Dr. V. Srinivasa Murthy", title: "Assistant Professor", slug: "srinivasa-murthy" },
  { name: "Dr. Manas Barai", title: "Assistant Professor", slug: "manas-barai" },
  { name: "Dr. Dipen Biswakarma", title: "Assistant Professor", slug: "dipen-biswakarma" },
  { name: "Dr. Manjodh Kaur", title: "Assistant Professor", slug: "manjodth-kaur" },
];

export default function ChemistryFacultyList() {
  const professors = faculty.filter(f => f.title.includes("Professor &") || f.title === "Professor");
  const assistants = faculty.filter(f => f.title === "Assistant Professor");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="px-3 py-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/academics/chemistry">
            <Button variant="ghost" className="mb-4">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Chemistry
            </Button>
          </Link>

          <div className="mb-12">
            <h1 className="headline-2 font-display mb-2">Chemistry Faculty</h1>
            <p className="text-foreground/80">Meet our dedicated team of chemistry educators and researchers</p>
          </div>

          {/* Professors Section */}
          <div className="mb-12">
            <h2 className="headline-3 font-display mb-6">Professors</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {professors.map((f) => (
                <Link key={f.slug} to={`/academics/chemistry/faculty/${f.slug}`}>
                  <Card className="h-full group border border-border/50 bg-card/50 hover:shadow-lg hover:shadow-brand-orange/10 transition-all hover:-translate-y-1 cursor-pointer">
                    <CardHeader>
                      <div className="mb-3">
                        <Badge className="bg-brand-orange/20 text-brand-orange border-brand-orange/30">
                          {f.title}
                        </Badge>
                      </div>
                      <CardTitle className="font-display text-lg">{f.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <span className="inline-flex items-center gap-2 text-xs font-medium text-brand-orange group-hover:text-brand-orange/80">
                        View Profile
                        <ChevronRight className="h-3 w-3" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Assistant Professors Section */}
          <div>
            <h2 className="headline-3 font-display mb-6">Assistant Professors</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {assistants.map((f) => (
                <Link key={f.slug} to={`/academics/chemistry/faculty/${f.slug}`}>
                  <Card className="h-full group border border-border/50 bg-card/50 hover:shadow-lg hover:shadow-brand-orange/10 transition-all hover:-translate-y-1 cursor-pointer">
                    <CardHeader>
                      <div className="mb-3">
                        <Badge className="bg-brand-orange/20 text-brand-orange border-brand-orange/30">
                          {f.title}
                        </Badge>
                      </div>
                      <CardTitle className="font-display text-lg">{f.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <span className="inline-flex items-center gap-2 text-xs font-medium text-brand-orange group-hover:text-brand-orange/80">
                        View Profile
                        <ChevronRight className="h-3 w-3" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
