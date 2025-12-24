import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft } from "lucide-react";
import type { Faculty } from "@/data/computer-technology-faculty";

interface FacultyPageTemplateProps {
  faculty: Faculty;
}

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

export default function ComputerTechnologyFacultyPageTemplate({ faculty }: FacultyPageTemplateProps) {
  const bg = "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=1600&auto=format&fit=crop";
  const topics = faculty.interests || [];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero with research background and profile card */}
      <section className="relative">
        <div className="h-[36vh] md:h-[42vh] w-full overflow-hidden">
          <img src={bg} alt="Research background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
        <div className="absolute inset-x-0 -bottom-16 z-10">
          <div className="max-w-6xl mx-auto px-3">
            <Card className="rounded-2xl border border-border/50 bg-card/95 backdrop-blur">
              <CardContent className="p-5 md:p-3 flex gap-3 md:gap-4 items-center">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border border-border/50 shadow-sm flex-shrink-0">
                  <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover object-center" />
                </div>
                <div className="flex-1">
                  <div className="text-brand-orange text-xs font-body">Computer Science & Technology</div>
                  <h1 className="text-2xl md:text-3xl font-bold font-display">{faculty.name}</h1>
                  <div className="text-foreground text-sm">{faculty.title}</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {topics.map((t) => (
                      <Badge key={t} className="bg-brand-orange/10 text-brand-orange">{t}</Badge>
                    ))}
                  </div>
                </div>
                <Link to="/academics/engineering/computer-technology/faculty">
                  <Button variant="outline" className="hidden sm:inline-flex"><ChevronLeft className="w-4 h-4 mr-2"/>Back</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-3 pt-24 pb-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-4 items-start">
          {/* Left column: Bio & sections */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="border border-border/50 bg-card/50">
              <CardHeader>
                <CardTitle className="font-display text-lg">Biography</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-base leading-relaxed text-foreground font-body">
                  {faculty.name} is a dedicated faculty member in the Computer Science & Technology department at Dayananda Sagar University. With expertise in modern computing domains, {faculty.name.split(' ')[0]} contributes significantly to academic excellence and research endeavors.
                </p>
                <p className="text-base leading-relaxed text-foreground font-body">
                  Committed to advancing computer science and technology education and fostering innovation, {faculty.name.split(' ')[0]} engages in curriculum development, student mentorship, and collaborative projects with academic institutions and industry partners. The faculty brings a blend of theoretical knowledge and practical expertise to enrich the learning experience of students.
                </p>
                {faculty.qualifications && (
                  <div className="mt-4 pt-4 border-t border-border/30">
                    <div className="text-sm text-foreground/70">
                      <strong>Qualifications:</strong> {faculty.qualifications}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card/50">
              <CardHeader>
                <CardTitle className="font-display">Area of Research</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-foreground font-body">
                <p>
                  Dedicated to advancing computer science and technology education and research. Engaged in curriculum development, student mentorship, and collaborative projects with industry and academic institutions.
                </p>
              </CardContent>
            </Card>

            {topics.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-semibold font-display">Research Gallery</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {topics.map((topic) => (
                    <Card key={topic} className="overflow-hidden border border-border/40 bg-card/40">
                      <div className="relative aspect-video overflow-hidden">
                        <img src={imgFor(topic)} alt={topic} className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="pt-3">
                        <div className="text-sm text-foreground font-body">{topic}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right column: Contact, Metrics, Education */}
          <div className="space-y-4">
            <Card className="border border-border/50 bg-card/50">
              <CardHeader>
                <CardTitle className="font-display">Faculty Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm font-body">
                <div>
                  <div className="text-foreground/70">Position</div>
                  <div className="font-medium">{faculty.title}</div>
                </div>
                {faculty.qualifications && (
                  <div>
                    <div className="text-foreground/70">Qualifications</div>
                    <div className="font-medium">{faculty.qualifications}</div>
                  </div>
                )}
                <div>
                  <div className="text-foreground/70">Department</div>
                  <div className="font-medium">Computer Science & Technology</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card/50">
              <CardHeader>
                <CardTitle className="font-display">Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm font-body">
                <div className="text-foreground">School of Engineering</div>
                <div className="text-foreground/70">Computer Science & Technology</div>
                <div className="text-foreground/70 text-xs">Dayananda Sagar University</div>
              </CardContent>
            </Card>

            <Link to="/academics/engineering/computer-technology/faculty" className="block">
              <Button variant="outline" className="w-full"><ChevronLeft className="w-4 h-4 mr-2"/>Back to Faculty</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
