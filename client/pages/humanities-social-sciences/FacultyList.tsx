import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

const faculty = [
  { name: "Dr. Seema Tharannum", title: "Professor, Biological Sciences", slug: "dr-seema-tharannum" },
  { name: "Dr. Rochna Roy", title: "Assistant Professor, Technical English", slug: "dr-rochna-roy" },
  { name: "Dr. V. Sreemathy", title: "Assistant Professor, Technical English", slug: "dr-v-sreemathy" },
  { name: "Dr. P Wagdevi", title: "Assistant Professor & Assistant Registrar", slug: "dr-p-wagdevi" },
  { name: "Prof. Nagendra H. G.", title: "Assistant Professor, Humanities", slug: "prof-nagendra-h-g" },
  { name: "Dr. Vanishree R", title: "Visiting Faculty, Biological Sciences", slug: "dr-vanishree-r" },
  { name: "Dr. Mythri R", title: "Visiting Faculty, Biological Sciences", slug: "dr-mythri-r" },
  { name: "Dr. Bhagyajyothi K S", title: "Assistant Director, Physical Education", slug: "dr-bhagyajyothi-k-s" },
];

export default function HumanitiesSocialSciencesFacultyList() {
  const professors = faculty.filter(f => f.title.includes("Professor") && !f.title.includes("Assistant"));
  const assistants = faculty.filter(f => (f.title.includes("Assistant") || f.title.includes("Visiting") || f.title.includes("Assistant Director")));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="px-3 py-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/academics/humanities-social-sciences">
            <Button variant="ghost" className="mb-4">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Humanities & Social Sciences
            </Button>
          </Link>

          <div className="mb-12">
            <h1 className="headline-2 font-display mb-2">Humanities & Social Sciences Faculty</h1>
            <p className="text-foreground/80">Meet our dedicated team of faculty experts across multiple disciplines</p>
          </div>

          {/* Leadership Section */}
          {professors.length > 0 && (
            <div className="mb-12">
              <h2 className="headline-3 font-display mb-6">Leadership</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {professors.map((f) => (
                  <Link key={f.slug} to={`/academics/humanities-social-sciences/faculty/${f.slug}`}>
                    <Card className="h-full group border border-border/50 bg-card/50 hover:shadow-lg hover:shadow-brand-blue/10 transition-all hover:-translate-y-1 cursor-pointer">
                      <CardHeader>
                        <div className="mb-3">
                          <Badge className="bg-brand-blue/20 text-brand-blue border-brand-blue/30">
                            {f.title}
                          </Badge>
                        </div>
                        <CardTitle className="font-display text-lg">{f.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <span className="inline-flex items-center gap-2 text-xs font-medium text-brand-blue group-hover:text-brand-blue/80">
                          View Profile
                          <ChevronRight className="h-3 w-3" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Faculty Section */}
          <div>
            <h2 className="headline-3 font-display mb-6">Faculty & Experts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {assistants.map((f) => (
                <Link key={f.slug} to={`/academics/humanities-social-sciences/faculty/${f.slug}`}>
                  <Card className="h-full group border border-border/50 bg-card/50 hover:shadow-lg hover:shadow-brand-blue/10 transition-all hover:-translate-y-1 cursor-pointer">
                    <CardHeader>
                      <div className="mb-3">
                        <Badge className="bg-brand-blue/20 text-brand-blue border-brand-blue/30">
                          {f.title}
                        </Badge>
                      </div>
                      <CardTitle className="font-display text-lg">{f.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <span className="inline-flex items-center gap-2 text-xs font-medium text-brand-blue group-hover:text-brand-blue/80">
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
