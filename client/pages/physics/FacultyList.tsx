import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

const faculty = [
  { name: "Dr. Yogesh Kalegowda", title: "Chairman & Professor", slug: "dr-yogesh-kalegowda" },
  { name: "Dr. M V Hanumantha Rao", title: "Research Professor", slug: "dr-m-v-hanumantha-rao" },
  { name: "Dr. K Vijaya Kumar", title: "Professor", slug: "dr-k-vijaya-kumar" },
  { name: "Dr. Rajesh Kumar", title: "Associate Professor", slug: "dr-rajesh-kumar" },
  { name: "Dr. Priya Sharma", title: "Associate Professor", slug: "dr-priya-sharma" },
  { name: "Dr. Arun Kumar Singh", title: "Assistant Professor", slug: "dr-arun-kumar-singh" },
  { name: "Dr. Meera Patel", title: "Assistant Professor", slug: "dr-meera-patel" },
  { name: "Dr. Suresh Reddy", title: "Assistant Professor", slug: "dr-suresh-reddy" },
  { name: "Dr. Neha Gupta", title: "Assistant Professor", slug: "dr-neha-gupta" },
  { name: "Dr. Vikram Desai", title: "Assistant Professor", slug: "dr-vikram-desai" },
  { name: "Dr. Anita Verma", title: "Assistant Professor", slug: "dr-anita-verma" },
  { name: "Dr. Deepak Nair", title: "Assistant Professor", slug: "dr-deepak-nair" },
  { name: "Dr. Ravi Kumar Yadav", title: "Assistant Professor", slug: "dr-ravi-kumar-yadav" },
  { name: "Dr. Sweta Chatterjee", title: "Assistant Professor", slug: "dr-sweta-chatterjee" },
  { name: "Dr. Rajendra Singh", title: "Assistant Professor", slug: "dr-rajendra-singh" },
  { name: "Dr. Pooja Malhotra", title: "Assistant Professor", slug: "dr-pooja-malhotra" },
];

export default function PhysicsFacultyList() {
  const professors = faculty.filter(f => f.title.includes("Professor"));
  const assistants = faculty.filter(f => f.title === "Assistant Professor");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="px-3 py-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/academics/physics">
            <Button variant="ghost" className="mb-4">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Physics
            </Button>
          </Link>

          <div className="mb-12">
            <h1 className="headline-2 font-display mb-2">Physics Faculty</h1>
            <p className="text-foreground/80">Meet our dedicated team of physics educators and researchers</p>
          </div>

          {/* Professors Section */}
          <div className="mb-12">
            <h2 className="headline-3 font-display mb-6">Professors</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {professors.map((f) => (
                <Link key={f.slug} to={`/academics/physics/faculty/${f.slug}`}>
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

          {/* Assistant Professors Section */}
          <div>
            <h2 className="headline-3 font-display mb-6">Assistant Professors</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {assistants.map((f) => (
                <Link key={f.slug} to={`/academics/physics/faculty/${f.slug}`}>
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
