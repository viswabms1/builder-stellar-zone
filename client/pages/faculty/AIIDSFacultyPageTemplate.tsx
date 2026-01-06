import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft } from "lucide-react";
import type { Faculty } from "@/data/ai-ds-faculty";

interface AIIDSFacultyPageTemplateProps {
  faculty: Faculty;
}

export default function AIIDSFacultyPageTemplate({ faculty }: AIIDSFacultyPageTemplateProps) {
  const bg = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop";
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
                  <div className="text-brand-blue text-xs font-body">AI & Data Science Engineering</div>
                  <h1 className="text-2xl md:text-3xl font-bold font-display">{faculty.name}</h1>
                  <div className="text-foreground text-sm">{faculty.title}</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {topics.map((t) => (
                      <Badge key={t} className="bg-brand-blue/10 text-brand-blue">{t}</Badge>
                    ))}
                  </div>
                </div>
                <Link to="/academics/engineering/ai-ds/faculty">
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
                  {faculty.name} is a dedicated faculty member in the AI & Data Science Engineering department at Dayananda Sagar University. With expertise in machine learning, data analytics, deep learning, and AI innovation, {faculty.name.split(' ')[0]} contributes significantly to academic excellence and research endeavors.
                </p>
                <p className="text-base leading-relaxed text-foreground font-body">
                  Committed to advancing AI and data science education and fostering innovation, {faculty.name.split(' ')[0]} engages in curriculum development, student mentorship, and collaborative projects with academic institutions and industry partners. The faculty brings a blend of theoretical knowledge and practical expertise to enrich the learning experience of students.
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
                  Dedicated to advancing AI and data science education and research. Engaged in curriculum development, student mentorship, and collaborative projects with industry and academic institutions focusing on machine learning, data analytics, deep learning, natural language processing, computer vision, and emerging AI technologies.
                </p>
              </CardContent>
            </Card>

            {topics.length > 0 && (
              <Card className="border border-border/50 bg-card/50">
                <CardHeader>
                  <CardTitle className="font-display">Areas of Interest</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {topics.map((topic) => (
                    <Badge key={topic} className="bg-brand-blue/10 text-brand-blue">
                      {topic}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right column: Contact & Details */}
          <div className="space-y-3">
            <Card className="border border-border/50 bg-card/50">
              <CardHeader>
                <CardTitle className="font-display text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm font-body">
                <div>
                  <span className="text-foreground/70">Email</span>
                  <div className="font-medium text-brand-blue hover:underline"><a href={`mailto:${faculty.name.toLowerCase().replace(/\s+/g, '.')}@dsu.edu.in`}>{faculty.name.toLowerCase().replace(/\s+/g, '.')}@dsu.edu.in</a></div>
                </div>
                <div>
                  <span className="text-foreground/70">Department</span>
                  <div className="font-medium text-foreground">AI & Data Science Engineering</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card/50">
              <CardHeader>
                <CardTitle className="font-display text-lg">Professional Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm font-body">
                <div>
                  <span className="text-foreground/70">Position</span>
                  <div className="font-medium text-foreground">{faculty.title}</div>
                </div>
                <div>
                  <span className="text-foreground/70">Qualifications</span>
                  <div className="font-medium text-foreground">{faculty.qualifications}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
