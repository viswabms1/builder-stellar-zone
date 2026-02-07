import { ArrowRight, ArrowLeft, Users, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LibraryAdvisoryCommittee() {
  const committees = [
    {
      name: "Library Advisory Committee",
      role: "Overall Library Strategy & Development",
      members: [
        "Vice Chancellor (Chair)",
        "Dean of Schools (Members)",
        "Chief Librarian (Member Secretary)",
        "Faculty Representatives",
        "Student Representatives",
      ],
      responsibilities: [
        "Review library policies and procedures",
        "Approve budget allocations",
        "Guide collection development",
        "Recommend service improvements",
        "Oversee technology initiatives",
      ],
    },
    {
      name: "Collection Development Committee",
      role: "Resource Acquisition & Management",
      members: [
        "Chief Librarian (Chair)",
        "Subject Librarians",
        "Faculty Representatives from each school",
        "Student Representatives",
      ],
      responsibilities: [
        "Evaluate and select new resources",
        "Review collection gaps",
        "Plan special collections",
        "Manage weeding programs",
        "Coordinate interdisciplinary acquisitions",
      ],
    },
    {
      name: "Digital Resources Committee",
      role: "Technology & Online Services",
      members: [
        "Digital Resources Manager (Chair)",
        "IT Representatives",
        "System Librarians",
        "Faculty Technology Advisors",
      ],
      responsibilities: [
        "Manage e-resources subscriptions",
        "Oversee digital platform improvements",
        "Plan technology upgrades",
        "Monitor digital library performance",
        "Enhance online user experience",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-brand-blue/10 via-brand-magenta/5 to-background overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue/10 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-brand-magenta/10 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-foreground font-display">
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Library Advisory Committee
              </span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-foreground max-w-2xl mx-auto font-body">
              Governance and oversight of library operations
            </p>
          </div>
          <div className="flex justify-center">
            <Button asChild className="bg-gradient-to-r from-[#0088FF] via-[#FFD700] to-[#FF6B00] hover:from-[#FF6B00] hover:via-[#FFD700] hover:to-[#0088FF] text-foreground px-6 py-2 font-semibold rounded-2xl animate-gradient bg-[length:200%_auto]">
              <Link to="/library">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Library
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-3 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-display">
            <span className="text-foreground">Committee </span>
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Structure
            </span>
          </h2>
          <p className="text-base sm:text-lg text-foreground font-body">
            Multiple specialized committees overseeing different aspects of
            library operations
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {committees.map((committee, idx) => (
            <Card
              key={idx}
              className="border-none shadow-md hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Award className="h-6 w-6 text-brand-blue" />
                  {committee.name}
                </CardTitle>
                <CardDescription className="text-base">
                  {committee.role}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">
                    Committee Members
                  </h4>
                  <ul className="space-y-2">
                    {committee.members.map((member, i) => (
                      <li
                        key={i}
                        className="text-foreground/70 flex items-center gap-2"
                      >
                        <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                        {member}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {committee.responsibilities.map((resp, i) => (
                      <li
                        key={i}
                        className="text-foreground/70 flex items-start gap-2"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-violet-600 mt-1.5 flex-shrink-0"></span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Governance Overview */}
        <Card className="border-none shadow-lg bg-gradient-to-br from-card/80 via-card/60 to-card/40 mb-8 hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300">
          <CardHeader className="border-b border-border/30">
            <CardTitle className="text-2xl sm:text-3xl md:text-4xl flex items-center gap-2 font-display text-foreground">
              <Users className="h-8 w-8 text-brand-blue" />
              Library Governance
            </CardTitle>
            <CardDescription className="text-base sm:text-lg text-foreground/70">
              Collaborative approach to library management
            </CardDescription>
          </CardHeader>
          <CardContent
            className="space-y-4"
          >
            <p className="text-foreground/80">
              The DSU Central Library operates under a well-defined governance
              structure that ensures transparency, accountability, and
              continuous improvement. Our committees comprise faculty members,
              students, and library professionals working collaboratively to
              serve the university community.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Target className="h-5 w-5 text-brand-blue" />
                  Strategic Planning
                </h4>
                <p className="text-sm text-foreground/70">
                  Committees guide long-term vision and strategic initiatives
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Award className="h-5 w-5 text-brand-blue" />
                  Quality Assurance
                </h4>
                <p className="text-sm text-foreground/70">
                  Continuous monitoring and improvement of services
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Users className="h-5 w-5 text-brand-blue" />
                  Community Input
                </h4>
                <p className="text-sm text-foreground/70">
                  Student and faculty representation in decision-making
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Meeting Information */}
        <Card className="border-none shadow-lg bg-gradient-to-br from-card/80 via-card/60 to-card/40 hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-display text-foreground">Committee Meetings</CardTitle>
            <CardDescription className="text-foreground/70">
              Regular meetings to review and guide library operations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h4 className="font-semibold mb-2">Meeting Frequency</h4>
              <p className="text-foreground/70">
                Library Advisory Committee: Meets quarterly or as needed
                <br />
                Subcommittees: Meet bi-monthly or as per requirement
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Meeting Agendas</h4>
              <p className="text-foreground/70">
                Meeting agendas are prepared with input from committee members
                and focus on current library initiatives, budget matters, and
                strategic priorities.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Feedback & Suggestions</h4>
              <p className="text-foreground/70">
                The committees welcome feedback and suggestions from the
                university community. You can share your ideas and concerns
                through email or during library consultations.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="border-none shadow-lg mt-8">
          <CardHeader>
            <CardTitle>Get Involved</CardTitle>
            <CardDescription>
              Interested in serving on a library committee?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/70 mb-4">
              We welcome faculty and student representatives who are interested
              in contributing to library governance and improvement. Contact the
              Chief Librarian for more information about committee
              opportunities.
            </p>
            <Button asChild className="w-full">
              <Link to="/library/contact">
                Contact Library <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Button asChild className="bg-violet-600 hover:bg-violet-700">
            <Link to="/library">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Library
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
