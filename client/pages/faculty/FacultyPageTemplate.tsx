import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft } from "lucide-react";
import type { Faculty } from "@/data/cse-faculty";

interface FacultyPageTemplateProps {
  faculty: Faculty;
  department?: string;
  departmentLink?: string;
  departmentColor?: string;
  backgroundImage?: string;
}

const departmentConfig: Record<string, { colorClass: string; colorText: string; colorBg: string; colorBorder: string; bg: string }> = {
  "Computer Science & Engineering": { colorClass: "brand-blue", colorText: "text-brand-blue", colorBg: "bg-brand-blue/10", colorBorder: "text-brand-blue", bg: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=1600&auto=format&fit=crop" },
  "Computer Science & Engineering (AI & ML)": { colorClass: "brand-magenta", colorText: "text-brand-magenta", colorBg: "bg-brand-magenta/10", colorBorder: "text-brand-magenta", bg: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=1600&auto=format&fit=crop" },
  "Aerospace Engineering": { colorClass: "brand-blue", colorText: "text-brand-blue", colorBg: "bg-brand-blue/10", colorBorder: "text-brand-blue", bg: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?q=80&w=1600&auto=format&fit=crop" },
  "Electronics & Communication Engineering": { colorClass: "brand-blue", colorText: "text-brand-blue", colorBg: "bg-brand-blue/10", colorBorder: "text-brand-blue", bg: "https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=1600&auto=format&fit=crop" },
  "Mechanical Engineering": { colorClass: "brand-orange", colorText: "text-brand-orange", colorBg: "bg-brand-orange/10", colorBorder: "text-brand-orange", bg: "https://images.unsplash.com/photo-1517677129300-07b130802f46?q=80&w=1600&auto=format&fit=crop" },
  "AI and Robotics": { colorClass: "brand-magenta", colorText: "text-brand-magenta", colorBg: "bg-brand-magenta/10", colorBorder: "text-brand-magenta", bg: "https://images.unsplash.com/photo-1581091216562-40c08a5a4183?q=80&w=1600&auto=format&fit=crop" },
  "Computer Technology": { colorClass: "brand-blue", colorText: "text-brand-blue", colorBg: "bg-brand-blue/10", colorBorder: "text-brand-blue", bg: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=1600&auto=format&fit=crop" },
  "Cybersecurity": { colorClass: "brand-magenta", colorText: "text-brand-magenta", colorBg: "bg-brand-magenta/10", colorBorder: "text-brand-magenta", bg: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop" },
  "Data Science": { colorClass: "brand-magenta", colorText: "text-brand-magenta", colorBg: "bg-brand-magenta/10", colorBorder: "text-brand-magenta", bg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop" },
  "AI & Data Science": { colorClass: "brand-magenta", colorText: "text-brand-magenta", colorBg: "bg-brand-magenta/10", colorBorder: "text-brand-magenta", bg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop" },
  "Medical Engineering": { colorClass: "brand-blue", colorText: "text-brand-blue", colorBg: "bg-brand-blue/10", colorBorder: "text-brand-blue", bg: "https://images.unsplash.com/photo-1576091160550-112173f31c74?q=80&w=1600&auto=format&fit=crop" },
  "Physics": { colorClass: "brand-blue", colorText: "text-brand-blue", colorBg: "bg-brand-blue/10", colorBorder: "text-brand-blue", bg: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=1600&auto=format&fit=crop" },
  "Chemistry": { colorClass: "brand-blue", colorText: "text-brand-blue", colorBg: "bg-brand-blue/10", colorBorder: "text-brand-blue", bg: "https://images.unsplash.com/photo-1576091160550-112173f31c74?q=80&w=1600&auto=format&fit=crop" },
};

export default function FacultyPageTemplate({
  faculty,
  department = "Computer Science & Engineering",
  departmentLink = "/academics/engineering/computer-science/faculty",
  departmentColor,
  backgroundImage
}: FacultyPageTemplateProps) {
  const defaultConfig = { colorClass: "brand-blue", colorText: "text-brand-blue", colorBg: "bg-brand-blue/10", colorBorder: "text-brand-blue", bg: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=1600&auto=format&fit=crop" };
  const config = departmentConfig[department] || defaultConfig;
  const bg = backgroundImage || config.bg;
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
                  <div className={`${config.colorText} body-sm`}>{department}</div>
                  <h1 className="headline-3">{faculty.name}</h1>
                  <div className="text-foreground body-sm">{faculty.title}</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {topics.map((t) => (
                      <Badge key={t} className={`${config.colorBg} ${config.colorText}`}>{t}</Badge>
                    ))}
                  </div>
                </div>
                <Link to={departmentLink}>
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
                <CardTitle>Biography</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="body-md leading-relaxed text-foreground">
                  {faculty.name} is a dedicated faculty member in the {department} department at Dayananda Sagar University. With strong expertise and academic credentials, {faculty.name.split(' ')[0]} contributes significantly to academic excellence and research endeavors.
                </p>
                <p className="body-md leading-relaxed text-foreground">
                  Committed to advancing education and fostering innovation, {faculty.name.split(' ')[0]} engages in curriculum development, student mentorship, and collaborative projects with academic institutions and industry partners. The faculty brings a blend of theoretical knowledge and practical expertise to enrich the learning experience of students.
                </p>
                {faculty.qualifications && (
                  <div className="mt-4 pt-4 border-t border-border/30">
                    <div className="body-sm text-foreground/70">
                      <strong>Qualifications:</strong> {faculty.qualifications}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card/50">
              <CardHeader>
                <CardTitle>Area of Research</CardTitle>
              </CardHeader>
              <CardContent className="body-sm text-foreground">
                <p>
                  Dedicated to advancing education and research in the field. Engaged in curriculum development, student mentorship, and collaborative projects with industry and academic institutions.
                </p>
              </CardContent>
            </Card>

            {topics.length > 0 && (
              <Card className="border border-border/50 bg-card/50">
                <CardHeader>
                <CardTitle>Areas of Interest</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {topics.map((topic) => (
                    <Badge key={topic} className={`${config.colorBg} ${config.colorText}`}>
                      {topic}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            )}

          </div>

          {/* Right column: Contact, Metrics, Education */}
          <div className="space-y-4">
            <Card className="border border-border/50 bg-card/50">
              <CardHeader>
                <CardTitle>Faculty Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 body-sm">
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
                  <div className="font-medium">{department}</div>
                </div>
              </CardContent>
            </Card>


            <Card className="border border-border/50 bg-card/50">
              <CardHeader>
                <CardTitle>Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 body-sm">
                <div className="text-foreground">Dayananda Sagar University</div>
                <div className="text-foreground/70">{department}</div>
                <div className="text-foreground/70 body-sm">Bangalore, India</div>
              </CardContent>
            </Card>

            <Link to={departmentLink} className="block">
              <Button variant="outline" className="w-full"><ChevronLeft className="w-4 h-4 mr-2"/>Back to Faculty</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
