import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { getComputerTechnologyFacultyBySlug, computerTechnologyFaculty } from "@/data/computer-technology-faculty";
import { Mail, GraduationCap, ChevronLeft } from "lucide-react";

export default function ComputerTechnologyFacultyProfile() {
  const { slug } = useParams();
  const f = slug ? getComputerTechnologyFacultyBySlug(slug) : undefined;

  const imgFor = (kw: string) => {
    const k = kw.toLowerCase();
    if (k.includes("ai") || k.includes("ml") || k.includes("machine") || k.includes("learning")) return "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop";
    if (k.includes("data")) return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop";
    if (k.includes("cyber") || k.includes("security")) return "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop";
    if (k.includes("network") || k.includes("iot") || k.includes("embedded")) return "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop";
    if (k.includes("cloud") || k.includes("devops") || k.includes("microservices")) return "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop";
    if (k.includes("web") || k.includes("mobile") || k.includes("ui") || k.includes("ux") || k.includes("frontend")) return "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop";
    if (k.includes("software") || k.includes("design") || k.includes("pattern") || k.includes("architecture")) return "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop";
    if (k.includes("database") || k.includes("algorithm") || k.includes("structure")) return "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop";
    return "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop";
  };

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
              <img src={f.image} alt={f.name} className="absolute inset-0 h-full w-full object-cover object-center" />
            </AspectRatio>
          </Card>
          <div className="md:col-span-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs mb-3">CST Faculty</div>
            <h1 className="text-3xl md:text-5xl font-bold font-display">{f.name}</h1>
            <p className="text-foreground mt-1 font-body">{f.title}{f.qualifications ? ` • ${f.qualifications}` : ''}</p>
            {f.email && (
              <div className="mt-5">
                <a href={`mailto:${f.email}`}>
                  <Button variant="outline"><Mail className="w-4 h-4 mr-2"/>Email</Button>
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="px-3 py-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-4 items-start">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border border-border/50 bg-card/50">
              <CardHeader>
                <CardTitle className="font-display">About</CardTitle>
                <CardDescription className="font-body">Professional interests and focus areas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-foreground font-body">
                <p>
                  {`Professor ${f.name} is part of the Computer Science & Technology department at DSU. Areas of interest include modern computing domains across cloud computing, software engineering, and web technologies.`}
                </p>
                {f.interests && f.interests.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {f.interests.map((i, idx) => (
                      <span key={idx} className="px-2 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs">{i}</span>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {f.interests && f.interests.length > 0 ? (
              <div className="space-y-3">
                <h3 className="font-semibold font-display">Research Gallery</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {f.interests.map((kw, i) => (
                    <Card key={i} className="overflow-hidden border border-border/40 bg-card/40">
                      <AspectRatio ratio={16/9}>
                        <img src={imgFor(kw)} alt={kw} className="absolute inset-0 h-full w-full object-cover" />
                      </AspectRatio>
                      <CardContent className="pt-3">
                        <div className="text-sm text-foreground font-body">{kw}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          <div className="space-y-4">
            {f.email && (
              <a href={`mailto:${f.email}`}>
                <Button variant="outline" className="w-full"><Mail className="w-4 h-4 mr-2"/>Email</Button>
              </a>
            )}
            <Link to="/academics/engineering/computer-technology/faculty">
              <Button variant="ghost" className="w-full"><ChevronLeft className="w-4 h-4 mr-2"/>Back to Faculty</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-3 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl p-4 border border-brand-orange/20 bg-brand-orange/5">
            <h3 className="headline-4 mb-2 font-display">Interested in studying under {f.name.split(' ')[0]}?</h3>
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
