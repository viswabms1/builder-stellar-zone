import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Briefcase, ChevronDown } from "lucide-react";

export default function Careers() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const jobOpenings = [
    {
      id: 1,
      title: "Professors & Associate Professors",
      department:
        "Dr. Chandramma Dayananda Sagar Institute of Medical Education & Research (CDSIMER)",
      preview: "Medical positions across multiple specialties",
      positions: [
        "General Medicine",
        "Emergency Medicine",
        "Respiratory Medicine",
        "Radio-diagnosis",
        "Paediatrics",
        "OBG",
        "Anaesthesiology",
        "Dermatology",
        "Psychiatry",
        "Ophthalmology",
        "General Surgery",
        "Anatomy",
        "Physiology",
        "Biochemistry",
        "Pharmacology",
        "Pathology",
        "Microbiology",
        "Community Medicine",
        "Forensic Medicine",
      ],
      superSpecialties: [
        "Cardiology",
        "Medical Gastroenterology",
        "Critical Care Medicine",
        "Endocrinology",
        "Medical Oncology",
        "Neurosurgery",
        "CTVS",
        "Plastic Surgery",
        "Nephrology",
        "Neurology",
      ],
      qualifications: "As per NMC norms",
      salary:
        "As per UGC Pay Scales / Higher scales can be considered for the right candidate",
      benefits: "Faculty accommodation available within the campus",
      contact: "hr.cdsimer@dsu.edu.in or vc-ceo@dayanandasagar.edu",
      deadline: "7 days from the date of advertisement",
    },
    {
      id: 2,
      title: "Senior Project Engineers",
      department: "School of Engineering",
      preview: "15+ years civil engineering construction experience required",
      description:
        "Bachelor's Degree in Civil Engineering with minimum 15 years of experience in premier construction industry",
      requirements: [
        "Extensive experience in construction, plumbing, carpentry, electrical engineering, environmental engineering, HVAC, and mechanical systems",
        "Experience leading teams of individuals from varied backgrounds and disciplines",
        "Knowledge of engineering design principles",
        "Exceptional organizational and time management skills",
        "Experience with IT parks, multi-specialty hospitals & star hotels",
      ],
      contact: "vc-ceo@dayanandasagar.edu",
      deadline: "15 days from the date of advertisement",
    },
    {
      id: 3,
      title: "School of Engineering Faculty Positions",
      department: "School of Engineering",
      preview:
        "Multiple engineering specializations including CSE, AI&ML, ECE, Aerospace",
      positions: [
        "Computer Science & Engineering",
        "Computer Science & Engineering (Data Sciences)",
        "Computer Science & Engineering (Cyber Security)",
        "Computer Science & Engineering (AI & ML)",
        "Computer Science & Engineering (AI and Data Science)",
        "Computer Science & Technology",
        "Computer Applications",
        "AI & Robotics",
        "Electronics & Communication Engineering",
        "Aerospace Engineering",
      ],
      salary: "As per AICTE pay scales / Higher scales for the right candidate",
      contact: "vc-ceo@dayanandasagar.edu",
      deadline: "10 days from the date of advertisement",
    },
    {
      id: 4,
      title: "General Manager - Administration",
      department: "Dayananda Sagar University",
      preview: "Oversee day-to-day administration with 15-20 years experience",
      description: "Oversee day-to-day administration of Educational Campus",
      responsibilities: [
        "Developing and managing Admin Operations and Maintenance",
        "Managing Liaison, Vendor management, Physical Security",
        "Housekeeping, Safety Audit, Purchase, Asset Management, Transportation",
      ],
      qualifications:
        "Master's Degree Holder from Tier 1 or 2 Educational Institution with good understanding of Higher Education sector",
      experience:
        "15-20 years in Facility Management, Operations and General Administration",
      benefits:
        "Leadership position in Educational, Hospital, or Hospitality sectors",
      contact: "vc-ceo@dayanandasagar.edu",
      deadline: "Within 10 days from the date of advertisement",
    },
    {
      id: 5,
      title: "Manager - Facilities Management",
      department: "Dayananda Sagar University",
      preview:
        "Manage campus facilities and infrastructure with 10+ years experience",
      description: "Manage and oversee Campus facilities and infrastructure",
      responsibilities: [
        "Managing Admin Operations & Maintenance",
        "Liaison, Vendor management, Physical Security",
        "Housekeeping, Safety Audit, Purchase, Asset Management",
      ],
      qualifications:
        "Master's Degree from Tier 1 or 2 Educational Institution with good understanding of Higher Education sector",
      experience:
        "Minimum 10 years in Facility Management, Operations and General Administration. 3-4 years in leadership position preferred",
      benefits:
        "Educational, Hospital, or Hospitality sector experience preferred",
      contact: "vc-ceo@dayanandasagar.edu",
      deadline: "Within 10 days from the date of advertisement",
    },
    {
      id: 6,
      title: "Faculty Positions - School of Computer Applications",
      department: "School of Computer Applications",
      preview:
        "Assistant Professor, Associate Professor, and Professor positions available",
      positions: ["Assistant Professor", "Associate Professor", "Professor"],
      contact: "careers@dsu.edu.in",
      applyUrl: "https://www.dsu.edu.in/careers",
    },
  ];

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative">
        <div className="h-[50vh] md:h-[65vh] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
            alt="Careers at DSU"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-3 w-full">
            <h1 className="headline-1 text-white leading-tight font-display">
              Careers at DSU
            </h1>
            <p className="subheadline text-white/90 max-w-2xl mt-3 font-body">
              Join India's premier AI-first university and make a difference in
              education and innovation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:careers@dsu.edu.in">
                <Button className="bg-orange-600 text-white hover:bg-orange-700">
                  Write to us at careers@dsu.edu.in{" "}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <a
                href="https://www.dsu.edu.in/apply-now/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Apply Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="px-3 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="headline-2 font-display mb-3">Current Openings</h2>
            <p className="text-foreground/80 font-body max-w-3xl">
              Click on any position to view full details and application
              instructions.
            </p>
          </div>

          <div className="space-y-4">
            {jobOpenings.map((job) => (
              <Card
                key={job.id}
                className="border border-border/50 bg-card/50 backdrop-blur-sm hover:border-orange-500/30 transition-all hover:shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleExpand(job.id)}
                  className="w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <CardHeader className="pb-4 text-left hover:bg-orange-600/5 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle className="text-lg md:text-xl font-display">
                          {job.title}
                        </CardTitle>
                        <CardDescription className="mt-2 flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </CardDescription>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-orange-600 flex-shrink-0 transition-transform duration-300 ${
                          expandedId === job.id ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    <p className="text-sm text-foreground/70 mt-3">
                      {job.preview}
                    </p>
                  </CardHeader>
                </button>

                {/* Expanded Content */}
                {expandedId === job.id && (
                  <CardContent className="pt-0 border-t border-border/50 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
                    {/* Positions */}
                    {job.positions && job.positions.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">
                          Available Positions:
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {job.positions.map((pos, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <span className="text-orange-600 text-lg leading-none">
                                •
                              </span>
                              <span className="text-sm text-foreground/90">
                                {pos}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Super Specialties */}
                    {job.superSpecialties &&
                      job.superSpecialties.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">
                            Super Specialties:
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {job.superSpecialties.map((spec, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <span className="text-orange-600 text-lg leading-none">
                                  •
                                </span>
                                <span className="text-sm text-foreground/90">
                                  {spec}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    {/* Description */}
                    {job.description && (
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          Description:
                        </h4>
                        <p className="text-sm text-foreground/80">
                          {job.description}
                        </p>
                      </div>
                    )}

                    {/* Responsibilities */}
                    {job.responsibilities &&
                      job.responsibilities.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">
                            Responsibilities:
                          </h4>
                          <div className="space-y-2">
                            {job.responsibilities.map((resp, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <span className="text-orange-600 text-lg leading-none">
                                  •
                                </span>
                                <span className="text-sm text-foreground/80">
                                  {resp}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    {/* Requirements */}
                    {job.requirements && job.requirements.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">
                          Key Requirements:
                        </h4>
                        <div className="space-y-2">
                          {job.requirements.map((req, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <span className="text-orange-600 text-lg leading-none">
                                •
                              </span>
                              <span className="text-sm text-foreground/80">
                                {req}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-border/50">
                      {job.qualifications && (
                        <div>
                          <p className="text-xs text-foreground/60 uppercase tracking-wide mb-1">
                            Qualifications
                          </p>
                          <p className="text-sm text-foreground/90">
                            {job.qualifications}
                          </p>
                        </div>
                      )}

                      {job.experience && (
                        <div>
                          <p className="text-xs text-foreground/60 uppercase tracking-wide mb-1">
                            Experience Required
                          </p>
                          <p className="text-sm text-foreground/90">
                            {job.experience}
                          </p>
                        </div>
                      )}

                      {job.salary && (
                        <div>
                          <p className="text-xs text-foreground/60 uppercase tracking-wide mb-1">
                            Salary
                          </p>
                          <p className="text-sm text-foreground/90">
                            {job.salary}
                          </p>
                        </div>
                      )}

                      {job.benefits && (
                        <div>
                          <p className="text-xs text-foreground/60 uppercase tracking-wide mb-1">
                            Benefits
                          </p>
                          <p className="text-sm text-foreground/90">
                            {job.benefits}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Application Info */}
                    <div className="pt-4 border-t border-border/50 space-y-3">
                      {job.contact && (
                        <div>
                          <p className="text-xs text-foreground/60 uppercase tracking-wide mb-1">
                            How to Apply
                          </p>
                          <p className="text-sm text-foreground/90 mb-2">
                            Send your application to:
                          </p>
                          <a
                            href={`mailto:${job.contact.split(" or ")[0]}`}
                            className="inline-block text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors"
                          >
                            {job.contact}
                          </a>
                        </div>
                      )}

                      {job.deadline && (
                        <div>
                          <p className="text-xs text-foreground/60 uppercase tracking-wide mb-1">
                            Application Deadline
                          </p>
                          <p className="text-sm text-foreground/90">
                            {job.deadline}
                          </p>
                        </div>
                      )}

                      {job.applyUrl && (
                        <a href={job.applyUrl} target="_blank" rel="noreferrer">
                          <Button className="bg-orange-600 text-white hover:bg-orange-700 text-sm mt-2">
                            Apply Online <ArrowRight className="w-3 h-3 ml-2" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-3 py-16 bg-gradient-to-b from-muted/30 to-background border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="headline-2 font-display mb-4">Have Questions?</h2>
          <p className="text-foreground/80 mb-8 font-body max-w-2xl mx-auto">
            Contact our HR team for any inquiries about career opportunities at
            DSU.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a
              href="mailto:careers@dsu.edu.in"
              className="px-6 py-3 rounded-lg bg-card/50 border border-border/50 hover:border-orange-500/30 transition-colors"
            >
              <p className="text-sm text-foreground/70 mb-1">Email</p>
              <p className="font-medium text-orange-600">careers@dsu.edu.in</p>
            </a>
          </div>

          <div className="bg-card/50 border border-orange-500/30 rounded-lg p-8">
            <h3 className="text-lg font-display mb-3">Ready to Join DSU?</h3>
            <p className="text-foreground/80 mb-6">
              Review the positions above and submit your application with your
              resume and CV.
            </p>
            <a
              href="https://www.dsu.edu.in/apply-now/"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="bg-orange-600 text-white hover:bg-orange-700 px-8">
                Apply Now <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
