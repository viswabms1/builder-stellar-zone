import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cseFaculty, getFacultyBySlug } from "@/data/cse-faculty";
import { Mail, GraduationCap, ChevronLeft, FileText } from "lucide-react";

export default function FacultyProfile() {
  const { slug } = useParams();
  const f = slug ? getFacultyBySlug(slug) : undefined;

  if (!f) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <section className="px-6 py-16 text-center">
          <h1 className="headline-3 mb-3">Faculty not found</h1>
          <Link to="/academics/engineering/computer-science/faculty">
            <Button variant="outline"><ChevronLeft className="w-4 h-4 mr-2"/>Back to Faculty</Button>
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative">
        <div className="h-[40vh] w-full overflow-hidden">
          <img src={f.image} alt={f.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-6xl mx-auto px-6 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur text-white text-xs mb-3">CSE Faculty</div>
            <h1 className="text-3xl md:text-5xl font-bold text-white font-gilroy">{f.name}</h1>
            <p className="text-white/80 mt-1 font-graphik">{f.title}{f.qualifications ? ` • ${f.qualifications}` : ''}</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border border-border/50 bg-card/50">
              <CardHeader>
                <CardTitle className="font-gilroy">About</CardTitle>
                <CardDescription className="font-graphik">Professional interests and focus areas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground font-graphik">
                <p>
                  {`Professor ${f.name} is part of the Computer Science & Engineering department at DSU. Areas of interest include modern computing domains across AI/ML, Data Science, Systems, and Applications.`}
                </p>
                {f.interests && f.interests.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {f.interests.map((i, idx) => (
                      <span key={idx} className="px-2 py-1 rounded-full bg-brand-magenta/10 text-brand-magenta text-xs">{i}</span>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4">
            {f.email && (
              <a href={`mailto:${f.email}`}>
                <Button variant="outline" className="w-full"><Mail className="w-4 h-4 mr-2"/>Email</Button>
              </a>
            )}
            {f.profileUrl && (
              <a href={f.profileUrl} target="_blank" rel="noreferrer">
                <Button className="w-full bg-brand-gradient text-white"><FileText className="w-4 h-4 mr-2"/>Detailed Profile</Button>
              </a>
            )}
            <Link to="/academics/engineering/computer-science/faculty">
              <Button variant="ghost" className="w-full"><ChevronLeft className="w-4 h-4 mr-2"/>Back to Faculty</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl p-8 border border-brand-magenta/20 bg-brand-magenta/5">
            <h3 className="headline-4 mb-2 font-gilroy">Interested in studying under {f.name.split(' ')[0]}?</h3>
            <p className="text-muted-foreground mb-4 font-graphik">Explore CSE programs and start your application today.</p>
            <Link to="/admissions">
              <Button className="bg-brand-gradient text-white">Apply Now<GraduationCap className="w-4 h-4 ml-2"/></Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
