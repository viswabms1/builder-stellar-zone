import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

const faculty = [
  { name: "Dr. Mahalakshmi P", title: "Professor & Chairperson", slug: "dr-mahalakshmi-p" },
  { name: "Dr. SRIKUMAR", title: "Associate Professor", slug: "dr-srikumar" },
  { name: "Dr. Rakesh Kumar Singh", title: "Assistant Professor", slug: "dr-rakesh-kumar-singh" },
  { name: "Dr. Srimanta Maji", title: "Assistant Professor", slug: "dr-srimanta-maji" },
  { name: "Dr. Priyanka Pandey", title: "Assistant Professor", slug: "dr-priyanka-pandey" },
  { name: "Dr. Mayank Singh Bhakuni", title: "Assistant Professor", slug: "dr-mayank-singh-bhakuni" },
  { name: "Dr. Prosanta Sarkar", title: "Assistant Professor", slug: "dr-prosanta-sarkar" },
  { name: "Dr. Mamatha R M", title: "Assistant Professor", slug: "dr-mamatha-r-m" },
  { name: "Mr. Manoj Solanki", title: "Assistant Professor", slug: "mr-manoj-solanki" },
  { name: "Dr. Prasadini Mahapatra", title: "Assistant Professor", slug: "dr-prasadini-mahapatra" },
  { name: "Dr. Shital Saha", title: "Assistant Professor", slug: "dr-shital-saha" },
  { name: "Zaffar Mehdi Dar", title: "Assistant Professor", slug: "zaffar-mehdi-dar" },
  { name: "Mr. Ajay Singh Jangal", title: "Assistant Professor", slug: "mr-ajay-singh-jangal" },
  { name: "Kruthik P. S.", title: "Assistant Professor", slug: "kruthik-p-s" },
  { name: "Mr. Pratik Mehta", title: "Assistant Professor", slug: "mr-pratik-mehta" },
  { name: "Dr. Sreenanda Raut", title: "Assistant Professor", slug: "dr-sreenanda-raut" },
  { name: "Dr. Om Prakash Keshri", title: "Assistant Professor", slug: "dr-om-prakash-keshri" },
  { name: "Dr. Hariharan S", title: "Assistant Professor", slug: "dr-hariharan-s" },
  { name: "Dr. Naresh Saha", title: "Assistant Professor", slug: "dr-naresh-saha" },
  { name: "Dr. Shilpi Jain", title: "Assistant Professor", slug: "dr-shilpi-jain" },
  { name: "Dr. Soham Swadhin Pradhan", title: "Assistant Professor", slug: "dr-soham-swadhin-pradhan" },
  { name: "Dr. Paresh Kumar Panigrahi", title: "Assistant Professor", slug: "dr-paresh-kumar-panigrahi" },
  { name: "Mr. Junias J. Singh", title: "Assistant Professor", slug: "mr-junias-j-singh" },
  { name: "Mr. Mohammed Salman M", title: "Assistant Professor", slug: "mr-mohammed-salman-m" },
  { name: "Ms. Seetha Poojitha", title: "Assistant Professor", slug: "ms-seetha-poojitha" },
  { name: "Mr. Sarabindu Dolui", title: "Assistant Professor", slug: "mr-sarabindu-dolui" },
];

export default function MathematicsFacultyList() {
  const professors = faculty.filter(f => f.title.includes("Professor") && !f.title.includes("Assistant"));
  const assistants = faculty.filter(f => f.title === "Assistant Professor");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="px-3 py-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/academics/mathematics">
            <Button variant="ghost" className="mb-4">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Mathematics
            </Button>
          </Link>

          <div className="mb-12">
            <h1 className="headline-2 font-display mb-2">Mathematics Faculty</h1>
            <p className="text-foreground/80">Meet our dedicated team of mathematics educators and researchers</p>
          </div>

          {/* Professors Section */}
          <div className="mb-12">
            <h2 className="headline-3 font-display mb-6">Leadership</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {professors.map((f) => (
                <Link key={f.slug} to={`/academics/mathematics/faculty/${f.slug}`}>
                  <Card className="h-full group border border-border/50 bg-card/50 hover:shadow-lg hover:shadow-brand-magenta/10 transition-all hover:-translate-y-1 cursor-pointer">
                    <CardHeader>
                      <div className="mb-3">
                        <Badge className="bg-brand-magenta/20 text-brand-magenta border-brand-magenta/30">
                          {f.title}
                        </Badge>
                      </div>
                      <CardTitle className="font-display text-lg">{f.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <span className="inline-flex items-center gap-2 text-xs font-medium text-brand-magenta group-hover:text-brand-magenta/80">
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
                <Link key={f.slug} to={`/academics/mathematics/faculty/${f.slug}`}>
                  <Card className="h-full group border border-border/50 bg-card/50 hover:shadow-lg hover:shadow-brand-magenta/10 transition-all hover:-translate-y-1 cursor-pointer">
                    <CardHeader>
                      <div className="mb-3">
                        <Badge className="bg-brand-magenta/20 text-brand-magenta border-brand-magenta/30">
                          {f.title}
                        </Badge>
                      </div>
                      <CardTitle className="font-display text-lg">{f.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <span className="inline-flex items-center gap-2 text-xs font-medium text-brand-magenta group-hover:text-brand-magenta/80">
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
