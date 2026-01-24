import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
  BookOpen,
  Users,
  Target,
  Clock,
  GraduationCap,
} from "lucide-react";

const programs = [
  {
    id: "llb-3year",
    title: "LLB (3-Year)",
    duration: "3 Years",
    description:
      "Designed for graduates from other fields pursuing a career in law.",
    fullDescription:
      "This program is designed for graduates from other fields who wish to pursue a career in law. It focuses on core legal subjects while allowing students to specialize in specific areas of law.",
    slug: "llb-3-year",
    icon: Target,
    highlights: [
      "Core legal subjects focus",
      "Specialization flexibility",
      "Tailored for career switchers",
      "Accelerated timeline",
    ],
  },
  {
    id: "llm-tech",
    title: "LLM in Law and Technology",
    duration: "2 Years",
    description:
      "Postgraduate program exploring law and emerging technologies.",
    fullDescription:
      "A postgraduate program that explores the evolving intersection between law and emerging technologies. Students gain expertise in the regulation, challenges, and legal implications of technological advancements.",
    slug: "llm-law-technology",
    icon: Clock,
    highlights: [
      "Emerging technology focus",
      "Regulatory framework expertise",
      "Tech law implications",
      "Future-ready skills",
    ],
  },
  {
    id: "llm-corporate",
    title: "LLM in Corporate and Commercial Law",
    duration: "2 Years",
    description: "Postgraduate program focusing on corporate law complexities.",
    fullDescription:
      "This program delves into the complexities of corporate law, focusing on the regulatory environment, business transactions, mergers and acquisitions, intellectual property rights, and other aspects essential for a career in corporate law.",
    slug: "llm-corporate-commercial",
    icon: GraduationCap,
    highlights: [
      "Corporate law in-depth study",
      "M&A expertise",
      "IP rights focus",
      "Regulatory environment mastery",
    ],
  },
];

export default function LawPrograms() {
  const [selectedProgram, setSelectedProgram] = useState<
    (typeof programs)[0] | null
  >(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative px-3 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-magenta/10 rounded-full border border-brand-magenta/20 mb-4">
              <BookOpen className="w-4 h-4 text-brand-magenta" />
              <span className="text-sm font-medium text-brand-magenta font-display">
                Academic Programs
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Law Programs at DSU
            </h1>
            <p className="text-lg text-foreground/75 max-w-2xl mx-auto">
              Explore our comprehensive range of undergraduate and postgraduate
              law programs designed to prepare you for a successful career in
              law.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <RouterLink
                  key={program.id}
                  to={`/academics/law/${program.slug}`}
                  className="group"
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50 hover:border-brand-magenta/30 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <Icon className="w-8 h-8 text-brand-magenta" />
                        <Badge
                          variant="outline"
                          className="border-brand-magenta/30 text-brand-magenta"
                        >
                          {program.duration}
                        </Badge>
                      </div>
                      <CardTitle className="font-display group-hover:text-brand-magenta transition-colors">
                        {program.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {program.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {program.highlights.slice(0, 2).map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm"
                          >
                            <ChevronRight className="w-4 h-4 text-brand-magenta flex-shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        variant="ghost"
                        className="w-full group-hover:bg-brand-magenta/10 group-hover:text-brand-magenta"
                      >
                        Learn More <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </RouterLink>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="relative px-3 py-16 bg-muted/40">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-center">
            Why Choose DSU Law Programs?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Faculty",
                description:
                  "Learn from experienced legal practitioners and scholars with industry expertise.",
              },
              {
                title: "Practical Learning",
                description:
                  "Engage with moot courts, legal aid clinics, and real-world case studies.",
              },
              {
                title: "Career Support",
                description:
                  "Mentorship from leading practitioners and strong placement support.",
              },
            ].map((feature, i) => (
              <Card
                key={i}
                className="border-border/30 bg-card/40 backdrop-blur-sm"
              >
                <CardHeader>
                  <CardTitle className="font-display">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/75">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-3 py-16">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Ready to Start Your Legal Journey?
          </h2>
          <p className="text-lg text-foreground/75 mb-8 max-w-2xl mx-auto">
            Apply now to one of our comprehensive law programs and begin your
            journey towards a distinguished legal career.
          </p>
          <a
            href="https://admissions.dsu.edu.in/"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="bg-brand-gradient text-foreground">
              Apply Now <GraduationCap className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
