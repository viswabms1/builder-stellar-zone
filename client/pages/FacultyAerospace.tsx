import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { aerospaceFaculty } from "@/data/aerospace-faculty";

export default function FacultyAerospace() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative">
        <div className="h-[40vh] md:h-[50vh] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?q=80&w=1600&auto=format&fit=crop"
            alt="Aerospace Faculty"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-3">
            <Link to="/academics/engineering/aerospace">
              <Button variant="outline" className="mb-6 border-white/20 text-white hover:bg-white/10">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back to Department
              </Button>
            </Link>
            <h1 className="headline-1 text-white leading-tight font-display">Faculty Members</h1>
            <p className="subheadline text-white/90 max-w-2xl mt-3 font-body">
              Meet the expert faculty members driving aerospace education and research at DSU.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="px-3 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-3 grid-cols-9">
            {aerospaceFaculty.map((member) => (
              <Link key={member.slug} to={`/academics/engineering/aerospace/faculty/${member.slug}`}>
                <Card className="group overflow-hidden border border-border/40 bg-card/50 hover:shadow-lg hover:shadow-brand-blue/20 hover:border-brand-blue/40 transition-all duration-300 cursor-pointer h-full">
                  <CardContent className="p-0">
                    <div className="relative h-64 overflow-hidden bg-muted">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg font-display group-hover:text-brand-blue transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-sm text-foreground/70 font-body mb-2">{member.title}</p>
                      <p className="text-xs text-foreground/60 font-body">{member.qualifications}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
