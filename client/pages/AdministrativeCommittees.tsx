import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  CheckCircle,
  Target,
  BookOpen,
  Award,
  Briefcase,
} from "lucide-react";

export default function AdministrativeCommittees() {
  const committees = [
    {
      icon: Users,
      name: "Board of Governors",
      description:
        "Oversees the overall governance and strategic direction of the university",
      href: "/about/board-of-governors",
      color: "brand-orange",
    },
    {
      icon: Briefcase,
      name: "Board of Management",
      description:
        "Manages institutional policies and administrative operations",
      href: "/about/board-of-management",
      color: "brand-magenta",
    },
    {
      icon: BookOpen,
      name: "Academic Council",
      description: "Ensures academic excellence and curriculum development",
      color: "brand-blue",
    },
    {
      icon: Award,
      name: "Finance Committee",
      description: "Oversees financial planning and resource allocation",
      color: "brand-orange",
    },
    {
      icon: Target,
      name: "Quality Assurance Cell",
      description: "Maintains and improves institutional quality standards",
      color: "brand-magenta",
    },
    {
      icon: CheckCircle,
      name: "Admissions Committee",
      description: "Manages admission policies and student enrollment",
      color: "brand-blue",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4 text-center mb-12">
            <Badge className="bg-brand-magenta/15 text-brand-magenta justify-center">
              University Governance
            </Badge>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display text-foreground mb-4">
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Administrative Committees
              </span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-foreground max-w-3xl mx-auto font-body">
              Oversight bodies that guide the university's operations, academic
              excellence, and strategic initiatives
            </p>
          </div>
        </div>
      </section>

      {/* Committees Grid */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committees.map((committee, index) => (
              <Card
                key={index}
                className="group bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-sm border border-border/50 hover:border-brand-magenta/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-magenta/20"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-2xl bg-brand-magenta/10 flex items-center justify-center mb-4 group-hover:bg-brand-magenta/20 transition-colors">
                    <committee.icon className="w-6 h-6 text-brand-magenta group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="headline-4 group-hover:text-brand-magenta transition-colors">
                    {committee.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground leading-relaxed font-body">
                    {committee.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Committees Section */}
      <section className="px-6 py-16 bg-gradient-to-r from-brand-magenta/5 to-brand-blue/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center font-display">
            <span className="text-foreground">Our Commitment to</span>
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              {" "}
              Governance
            </span>
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="headline-4 mb-3">Strategic Leadership</h3>
              <p className="text-foreground font-body leading-relaxed">
                Our administrative committees represent a commitment to
                transparent, accountable, and inclusive governance. Each
                committee brings together experts and stakeholders to ensure
                that DSU maintains the highest standards of excellence in
                education, administration, and institutional development.
              </p>
            </div>

            <div>
              <h3 className="headline-4 mb-3">Key Responsibilities</h3>
              <ul className="space-y-2 text-foreground font-body">
                <li className="flex items-start gap-3">
                  <span className="text-brand-magenta mt-1">•</span>
                  <span>Setting institutional policies and strategic direction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-magenta mt-1">•</span>
                  <span>Ensuring financial sustainability and resource optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-magenta mt-1">•</span>
                  <span>
                    Maintaining academic standards and curriculum excellence
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-magenta mt-1">•</span>
                  <span>Promoting institutional quality and continuous improvement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-magenta mt-1">•</span>
                  <span>Supporting student success and institutional growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
