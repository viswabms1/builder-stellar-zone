import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ChevronLeft } from "lucide-react";
import type { Faculty } from "@/data/cse-faculty";

interface FacultyPageTemplateProps {
  faculty: Faculty;
}

export default function FacultyPageTemplate({ faculty }: FacultyPageTemplateProps) {
  const bg = "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=1600&auto=format&fit=crop";
  const topics = faculty.interests || [];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative">
        <div className="h-[36vh] md:h-[42vh] w-full overflow-hidden">
          <img src={bg} alt="Research background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
        <div className="absolute inset-x-0 -bottom-16 z-10">
          <div className="max-w-6xl mx-auto px-6">
            <Card className="rounded-2xl border border-border/50 bg-card/95 backdrop-blur">
              <CardContent className="p-5 md:p-6 flex gap-4 md:gap-6 items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border border-border/50 shadow-sm">
                  <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover object-center" />
                </div>
                <div className="flex-1">
                  <div className="text-brand-blue text-xs font-body">Computer Science & Engineering</div>
                  <h1 className="text-2xl md:text-3xl font-bold font-display">{faculty.name}</h1>
                  <div className="text-foreground text-sm">{faculty.title}</div>
                  {faculty.qualifications && (
                    <div className="text-xs text-foreground/70 mt-1">{faculty.qualifications}</div>
                  )}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {topics.map((t) => (
                      <Badge key={t} className="bg-brand-magenta/10 text-brand-magenta text-xs">{t}</Badge>
                    ))}
                  </div>
                </div>
                <Link to="/academics/engineering/computer-science/faculty">
                  <Button variant="outline" className="hidden sm:inline-flex"><ChevronLeft className="w-4 h-4 mr-2"/>Back</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-6 pt-24 pb-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-8">
            <Card className="border border-border/50 bg-card/50">
              <CardHeader>
                <CardTitle className="font-display">About</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-foreground font-body">
                <p>
                  {faculty.name} is a dedicated faculty member in the Computer Science & Engineering department at Dayananda Sagar University. With expertise in modern computing domains, {faculty.name.split(' ')[0]} contributes significantly to academic excellence and research endeavors.
                </p>
                {faculty.qualifications && (
                  <div className="mt-3 text-xs text-foreground/70">
                    <strong>Qualifications:</strong> {faculty.qualifications}
                  </div>
                )}
              </CardContent>
            </Card>

            {topics.length > 0 && (
              <Card className="border border-border/50 bg-card/50">
                <CardHeader>
                  <CardTitle className="font-display">Areas of Interest</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {topics.map((topic) => (
                    <Badge key={topic} className="bg-brand-magenta/10 text-brand-magenta">
                      {topic}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            )}

            <Card className="border border-border/50 bg-card/50">
              <CardHeader>
                <CardTitle className="font-display">Department</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm font-body">
                <div>
                  <div className="font-medium">School of Engineering</div>
                  <div className="text-foreground/70">Computer Science & Engineering</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
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
              </CardContent>
            </Card>

            <Link to="/academics/engineering/computer-science/faculty" className="block">
              <Button variant="outline" className="w-full"><ChevronLeft className="w-4 h-4 mr-2"/>Back to Faculty</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
