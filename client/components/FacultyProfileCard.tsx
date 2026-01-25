import { useState } from "react";
import { ChevronDown, Mail, Phone, MapPin, Globe, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FacultyProfileSection {
  title: string;
  content: string | string[];
}

interface FacultyProfileData {
  name: string;
  title: string;
  department: string;
  image: string;
  email?: string;
  phone?: string;
  office?: string;
  website?: string;
  qualifications: string;
  researchAreas: string[];
  publications?: number;
  doctoralStudents?: number;
  projects?: number;
  patents?: number;
  sections?: FacultyProfileSection[];
}

export default function FacultyProfileCard({ faculty }: { faculty: FacultyProfileData }) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle],
    }));
  };

  const stats = [
    { label: "Publications", value: faculty.publications || 0 },
    { label: "Doctoral Students", value: faculty.doctoralStudents || 0 },
    { label: "Projects", value: faculty.projects || 0 },
    { label: "Patents", value: faculty.patents || 0 },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-8">
      <div className="max-w-7xl mx-auto px-3">
        {/* Header Section */}
        <div className="mb-4">
          <h1 className="headline-3 font-bold text-foreground mb-1">
            {faculty.name}
          </h1>
          <p className="title-sm font-semibold text-brand-blue mb-1">{faculty.title}</p>
          <p className="body-sm text-foreground/70">{faculty.department}</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-4">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            {/* Profile Photo */}
            <Card className="mb-3 overflow-hidden border border-border/50 bg-card/50">
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-brand-blue/10 to-brand-orange/10">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${faculty.name}`;
                  }}
                />
              </div>
            </Card>

            {/* Information Sidebar */}
            <Card className="border border-border/50 bg-card/50">
              <CardHeader className="pb-3 border-b border-border/30">
                <CardTitle className="title-sm">Information</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                {faculty.office && (
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                    <div className="body-sm">
                      <p className="eyebrow text-foreground/60">Office</p>
                      <p className="font-medium text-foreground">{faculty.office}</p>
                    </div>
                  </div>
                )}

                {faculty.phone && (
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                    <div className="body-sm">
                      <p className="eyebrow text-foreground/60">Phone</p>
                      <a
                        href={`tel:${faculty.phone}`}
                        className="font-medium text-foreground hover:text-brand-blue transition-colors"
                      >
                        {faculty.phone}
                      </a>
                    </div>
                  </div>
                )}

                {faculty.email && (
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                    <div className="body-sm">
                      <p className="eyebrow text-foreground/60">Email</p>
                      <a
                        href={`mailto:${faculty.email}`}
                        className="font-medium text-foreground hover:text-brand-blue transition-colors break-all"
                      >
                        {faculty.email}
                      </a>
                    </div>
                  </div>
                )}

                {faculty.website && (
                  <div className="flex items-start gap-3">
                    <Globe className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                    <div className="body-sm">
                      <p className="eyebrow text-foreground/60">Website</p>
                      <a
                        href={faculty.website}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-foreground hover:text-brand-blue transition-colors break-all"
                      >
                        {faculty.website}
                      </a>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <Award className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                  <div className="body-sm">
                    <p className="eyebrow text-foreground/60">Qualifications</p>
                    <p className="font-medium text-foreground">{faculty.qualifications}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <Card
                  key={idx}
                  className="border border-border/50 bg-gradient-to-br from-brand-blue/5 to-brand-orange/5 overflow-hidden"
                >
                  <CardContent className="p-4 text-center">
                    <div className="title-lg font-bold text-brand-blue mb-1">
                      {stat.value}
                    </div>
                    <p className="eyebrow text-foreground/70">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Research Areas */}
            <Card className="border border-border/50 bg-card/50">
              <CardHeader className="pb-3 border-b border-border/30">
                <CardTitle className="title-sm">Research Areas</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-3">
                  {faculty.researchAreas.map((area, idx) => (
                    <Badge
                      key={idx}
                      className="bg-brand-blue/15 text-brand-blue border border-brand-blue/30 hover:bg-brand-blue/25 transition-colors"
                      variant="outline"
                    >
                      {area}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Collapsible Sections */}
            {faculty.sections && (
              <div className="space-y-3">
                {faculty.sections.map((section, idx) => (
                  <Card
                    key={idx}
                    className="border border-border/50 bg-card/50 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleSection(section.title)}
                      className="w-full px-3 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <CardTitle className="title-sm text-foreground">
                        {section.title}
                      </CardTitle>
                      <ChevronDown
                        className={`w-5 h-5 text-brand-blue transition-transform duration-300 ${
                          expandedSections[section.title] ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {expandedSections[section.title] && (
                      <CardContent className="px-3 pb-4 border-t border-border/30 pt-4">
                        {Array.isArray(section.content) ? (
                          <ul className="space-y-2">
                            {section.content.map((item, itemIdx) => (
                              <li
                                key={itemIdx}
                                className="body-sm text-foreground/80 flex items-start gap-2"
                              >
                                <span className="text-brand-blue mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="body-sm text-foreground/80 whitespace-pre-wrap">
                            {section.content}
                          </p>
                        )}
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
