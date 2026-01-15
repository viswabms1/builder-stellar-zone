import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

const faculty = [
  { name: "Dr. Saravana Bavan D", title: "Chairperson - ME", slug: "saravana-bavan-d", qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Vinayak B Hemadri", title: "Professor", slug: "vinayak-b-hemadri", qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Viswanathan R", title: "Associate Professor", slug: "viswanathan-r", qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Rahul Kumar", title: "Associate Professor", slug: "rahul-kumar", qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Shashidhara L C", title: "Assistant Professor", slug: "shashidhara-l-c", qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Ravitej Y P", title: "Assistant Professor", slug: "ravitej-y-p", qualifications: "M.Tech, Ph.D" },
  { name: "Abhijith N", title: "Assistant Professor", slug: "abhijith-n", qualifications: "M.Tech, (Ph.D)" },
  { name: "Dr. Manish Kumar Mishra", title: "Assistant Professor", slug: "manish-kumar-mishra", qualifications: "Ph.D" },
  { name: "Dr. Abhilash O", title: "Assistant Professor", slug: "abhilash-o", qualifications: "Ph.D" },
  { name: "Dr. Rajeev Kumar Gupta", title: "Assistant Professor", slug: "rajeev-kumar-gupta", qualifications: "Ph.D" },
  { name: "Dr. Naseem Khayum", title: "Assistant Professor", slug: "naseem-khayum", qualifications: "Ph.D" },
  { name: "Dr. Rajesh Ranjan Ravi", title: "Assistant Professor", slug: "rajesh-ranjan-ravi", qualifications: "Ph.D" },
  { name: "Dr. K. Sudha Deepthi", title: "Assistant Professor", slug: "k-sudha-deepthi", qualifications: "Ph.D" },
  { name: "Dr. Vinay M S", title: "Assistant Professor", slug: "vinay-m-s", qualifications: "M.Tech, Ph.D" },
  { name: "Mr. Karthik S B", title: "Assistant Professor", slug: "karthik-s-b", qualifications: "M.E, (Ph.D)" },
  { name: "Dr. P M G B Asdaque", title: "Assistant Professor", slug: "p-m-g-b-asdaque", qualifications: "Ph.D" },
  { name: "Dr. Joy Mondal", title: "Assistant Professor", slug: "joy-mondal", qualifications: "Ph.D" },
  { name: "Dr. Velugula Ravi", title: "Assistant Professor", slug: "velugula-ravi", qualifications: "Ph.D" },
  { name: "Dr. Deepu Kumar", title: "Assistant Professor", slug: "deepu-kumar", qualifications: "Ph.D" },
  { name: "Dr. Lokendra Singh", title: "Assistant Professor", slug: "lokendra-singh", qualifications: "Ph.D" },
  { name: "Dr. Samrat Sagar", title: "Assistant Professor", slug: "samrat-sagar", qualifications: "Ph.D" },
  { name: "Dr. Ashok Kaushal", title: "Visiting Professor", slug: "ashok-kaushal", qualifications: "Ph.D, PEO" },
];

export default function MechanicalEngineeringFacultyList() {
  const chairperson = faculty.filter(f => f.title.includes("Chairperson"));
  const professors = faculty.filter(f => f.title === "Professor");
  const associateProfessors = faculty.filter(f => f.title === "Associate Professor");
  const assistants = faculty.filter(f => f.title === "Assistant Professor");
  const visiting = faculty.filter(f => f.title.includes("Visiting"));

  const FacultyCard = ({ f }: { f: typeof faculty[0] }) => (
    <Link to={`/faculty/${f.slug}`}>
      <Card className="h-full group border border-border/50 bg-card/50 hover:shadow-lg hover:shadow-brand-orange/10 transition-all hover:-translate-y-1 cursor-pointer">
        <CardHeader className="pb-2">
          <div className="mb-2">
            <Badge className="bg-brand-orange/20 text-brand-orange border-brand-orange/30 text-xs">
              {f.title}
            </Badge>
          </div>
          <CardTitle className="font-display text-base">{f.name}</CardTitle>
        </CardHeader>
        <CardContent className="pt-2">
          <div className="mb-2">
            <p className="text-xs text-foreground/70">{f.qualifications}</p>
          </div>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-orange group-hover:text-brand-orange/80">
            View Profile
            <ChevronRight className="h-3 w-3" />
          </span>
        </CardContent>
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
