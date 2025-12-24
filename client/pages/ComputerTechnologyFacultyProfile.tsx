import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { getComputerTechnologyFacultyBySlug, computerTechnologyFaculty } from "@/data/computer-technology-faculty";
import { Mail, GraduationCap, ChevronLeft } from "lucide-react";

export default function ComputerTechnologyFacultyProfile() {
  const { slug } = useParams();
  const f = slug ? getComputerTechnologyFacultyBySlug(slug) : undefined;

  if (!f) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <section className="px-3 py-8 text-center">
          <h1 className="headline-3 mb-3">Faculty not found</h1>
          <Link to="/academics/engineering/computer-technology/faculty">
            <Button variant="outline"><ChevronLeft className="w-4 h-4 mr-2"/>Back to Faculty</Button>
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="px-3 pt-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4 items-start">
          <Card className="overflow-hidden border border-border/50 bg-card/50">
            <AspectRatio ratio={3/4}>
              <img 
                src={f.image} 
                alt={f.name} 
                className="absolute inset-0 h-full w-full object-cover object-center"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507842072343-583f20270319?q=80&w=500&auto=format&fit=crop";
                }}
              />
            </AspectRatio>
          </Card>
          <div className="md:col-span-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs mb-3">CST Faculty</div>
            <h1 className="text-3xl md:text-5xl font-bold font-display">{f.name}</h1>
            <p className="text-foreground mt-1 font-body">{f.title}{f.qualifications ? ` • ${f.qualifications}` : ''}</p>
            <div className="mt-5">
              <Button variant="outline"><Mail className="w-4 h-4 mr-2"/>Email Department</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 py-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-4 items-start">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border border-border/50 bg-card/50">
              <CardHeader>
                <CardTitle className="font-display">About</CardTitle>
                <CardDescription className="font-body">Professional expertise and focus areas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-foreground font-body">
                <p>
                  {`Professor ${f.name} is part of the Department of Computer Science & Technology at DSU. With a qualification of ${f.qualifications}, they bring valuable expertise and mentorship to the program.`}
                </p>
                <p>
                  Their role as {f.title.toLowerCase()} involves contributing to curriculum development, student mentorship, and advancing the department's vision of excellence in computer science and technology education.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card/50">
              <CardHeader>
                <CardTitle className="font-display">Department Focus Areas</CardTitle>
                <CardDescription className="font-body">Key areas of the CST program</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {["Software Engineering", "Systems Design", "Cloud Computing", "Web Technologies"].map((area, i) => (
                    <span key={i} className="px-2 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs">{area}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4">
            <Button variant="outline" className="w-full"><Mail className="w-4 h-4 mr-2"/>Email Department</Button>
            <Link to="/academics/engineering/computer-technology/faculty">
              <Button variant="ghost" className="w-full"><ChevronLeft className="w-4 h-4 mr-2"/>Back to Faculty</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-3 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl p-4 border border-brand-orange/20 bg-brand-orange/5">
            <h3 className="headline-4 mb-2 font-display">Interested in studying Computer Science & Technology?</h3>
            <p className="text-foreground mb-4 font-body">Explore CST programs and start your application today.</p>
            <a
              href="https://admissions.dsu.edu.in/"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="bg-brand-gradient text-foreground">Apply Now<GraduationCap className="w-4 h-4 ml-2"/></Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
