import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { computerTechnologyFaculty } from "@/data/computer-technology-faculty";

export default function FacultyComputerTechnology() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative">
        <div className="h-[40vh] md:h-[50vh] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
            alt="Computer Science & Technology Faculty"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <Link to="/academics/engineering/computer-technology">
              <Button variant="outline" className="mb-6 border-white/20 text-white hover:bg-white/10">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back to Department
              </Button>
            </Link>
            <h1 className="headline-1 text-white leading-tight font-display">Faculty Members</h1>
            <p className="subheadline text-white/90 max-w-3xl mt-3 font-body">
              Our expert faculty members fulfill multiple roles as educators, researchers, and professionals with broad backgrounds, scholarly interests, and areas of expertise. They bring substantial achievement in professional practice and research into the classroom while maintaining strong links with industry and academia. Our faculty members are actively involved in basic and applied research through various R&D projects and consultancy.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="headline-3 font-display mb-4">Regular Faculty</h2>
            <p className="text-foreground/80 max-w-3xl font-body">
              Our dedicated team of qualified professionals with extensive experience and specialization across diverse areas brings together theoretical expertise and practical industry knowledge.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {computerTechnologyFaculty.map((member) => (
              <Card
                key={member.slug}
                className="group overflow-hidden border border-border/40 bg-card/50 hover:shadow-lg hover:shadow-brand-orange/20 hover:border-brand-orange/40 transition-all duration-300 cursor-pointer h-full"
              >
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden bg-muted">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg font-display group-hover:text-brand-orange transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-foreground/70 font-body mb-2">{member.title}</p>
                    <p className="text-xs text-foreground/60 font-body">{member.qualifications}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Information Section */}
      <section className="px-6 py-16 bg-gradient-to-r from-brand-orange/5 to-brand-orange/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="headline-3 font-display mb-8 text-center">Faculty Expertise & Engagement</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-display">Teaching Excellence</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-foreground/80 font-body">
                <p>Our faculty combines high quality teaching with research-driven curriculum development. They bring real-world industry experience into classroom instruction, ensuring students learn both theoretical concepts and practical applications.</p>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-display">Research & Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-foreground/80 font-body">
                <p>Faculty members are actively involved in basic and applied research through various R&D projects. Their research contributions span software engineering, systems integration, platform engineering, and entrepreneurship domains.</p>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-display">Industry Collaboration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-foreground/80 font-body">
                <p>Our faculty maintains strong links with industry and academia, engaging in consultancy projects and collaborative initiatives. This ensures curriculum remains aligned with industry needs and emerging technologies.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
