import { useState, useEffect } from "react";
import {
  CheckCircle2,
  Filter,
  GraduationCap,
  IndianRupee,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { schools } from "@/pages/Eligibility";

type Program = {
  name: string;
  level: "UG" | "PG" | "Professional";
  duration?: string;
  eligibility: string;
  eligibilityPoints?: string[];
  fees: { label: string; amount: string }[];
  specializations?: string[];
  notes?: string[];
  scholarships?: string;
  school: string;
};

interface ProgramFinderProps {
  schoolName: string;
  themeColor?: "blue" | "magenta" | "orange" | "green";
}

const themeColors = {
  blue: {
    border: "border-brand-blue/20",
    bg: "from-brand-blue/10 to-brand-blue/5",
    bgCard: "bg-gradient-to-r from-green-500/10 to-emerald-500/10",
    borderCard: "border-green-500/20",
    icon: "text-brand-blue",
    bgIcon: "bg-brand-blue/15",
  },
  magenta: {
    border: "border-brand-magenta/20",
    bg: "from-brand-magenta/10 to-brand-magenta/5",
    bgCard: "bg-gradient-to-r from-green-500/10 to-emerald-500/10",
    borderCard: "border-green-500/20",
    icon: "text-brand-magenta",
    bgIcon: "bg-brand-magenta/15",
  },
  orange: {
    border: "border-brand-orange/20",
    bg: "from-brand-orange/10 to-brand-orange/5",
    bgCard: "bg-gradient-to-r from-green-500/10 to-emerald-500/10",
    borderCard: "border-green-500/20",
    icon: "text-brand-orange",
    bgIcon: "bg-brand-orange/15",
  },
  green: {
    border: "border-green-500/20",
    bg: "from-green-500/10 to-emerald-500/10",
    bgCard: "bg-gradient-to-r from-green-500/10 to-emerald-500/10",
    borderCard: "border-green-500/20",
    icon: "text-green-600",
    bgIcon: "bg-green-500/15",
  },
};

export function ProgramFinder({
  schoolName,
  themeColor = "blue",
}: ProgramFinderProps) {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [schoolPrograms, setSchoolPrograms] = useState<Program[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<string>("All");

  const theme = themeColors[themeColor];

  useEffect(() => {
    const school = schools.find((s) => s.name === schoolName);
    if (school) {
      const programs: Program[] = [];
      school.categories.forEach((category) => {
        category.programs.forEach((program) => {
          programs.push({ ...program, school: school.name });
        });
      });
      setSchoolPrograms(programs);
    }
  }, [schoolName]);

  const filteredPrograms = schoolPrograms.filter((program) => {
    const matchesLevel =
      selectedLevel === "All" || program.level === selectedLevel;
    return matchesLevel;
  });

  const handleProgramSelect = (programName: string) => {
    const program = schoolPrograms.find((p) => p.name === programName);
    setSelectedProgram(program || null);
  };

  return (
    <section className="px-3 py-8 mx-auto max-w-4xl">
      <div className="space-y-8">
        <Card
          className={`border-2 ${theme.border} bg-gradient-to-r ${theme.bg} backdrop-blur-sm`}
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg ${theme.bgIcon}`}
              >
                <Filter className={`h-6 w-6 ${theme.icon}`} />
              </div>
              <div>
                <CardTitle className="text-2xl">
                  Eligibility and Fees for {schoolName} Programs
                </CardTitle>
                <CardDescription>
                  Explore program details, eligibility criteria, and fee
                  structure
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">
                Program Level
              </label>
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Select level..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Levels</SelectItem>
                  <SelectItem value="UG">Undergraduate (UG)</SelectItem>
                  <SelectItem value="PG">Postgraduate (PG)</SelectItem>
                  <SelectItem value="Professional">Professional</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between pt-2">
              <p className="text-sm text-foreground/60">
                {filteredPrograms.length} program
                {filteredPrograms.length !== 1 ? "s" : ""} found
              </p>
            </div>

            <div className="border-t border-border/40 pt-4">
              <label className="text-sm font-semibold text-foreground mb-2 block">
                Select Program
              </label>
              <Select
                onValueChange={handleProgramSelect}
                value={selectedProgram?.name || ""}
              >
                <SelectTrigger className="h-12 text-base">
                  <SelectValue placeholder="Choose a program from the filtered results..." />
                </SelectTrigger>
                <SelectContent className="max-h-[400px]">
                  {filteredPrograms.length === 0 ? (
                    <div className="p-4 text-center text-sm text-foreground/60">
                      No programs match your filters
                    </div>
                  ) : (
                    filteredPrograms.map((program) => (
                      <SelectItem
                        key={program.name}
                        value={program.name}
                        className="py-3"
                      >
                        <div className="flex flex-col">
                          <span className="font-semibold">{program.name}</span>
                          <span className="text-xs text-foreground/60">
                            {program.level}
                            {program.duration && ` • ${program.duration}`}
                          </span>
                        </div>
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {selectedProgram && (
          <div className="space-y-6">
            <Card className={`border-2 ${theme.borderCard} ${theme.bgCard}`}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <GraduationCap className={`h-8 w-8 ${theme.icon}`} />
                  <div>
                    <CardTitle className="text-2xl">
                      {selectedProgram.name}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {selectedProgram.level}
                      {selectedProgram.duration &&
                        ` • ${selectedProgram.duration}`}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className={`border-2 ${theme.border}`}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className={`h-6 w-6 ${theme.icon}`} />
                  <CardTitle className="text-xl">
                    Eligibility Criteria
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-foreground leading-relaxed">
                    {selectedProgram.eligibility}
                  </p>
                  {selectedProgram.eligibilityPoints &&
                    selectedProgram.eligibilityPoints.length > 0 && (
                      <ul className="space-y-2">
                        {selectedProgram.eligibilityPoints.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-foreground">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  {selectedProgram.specializations &&
                    selectedProgram.specializations.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-border/40">
                        <h4 className="font-semibold text-foreground mb-2">
                          Specializations Available:
                        </h4>
                        <ul className="space-y-1">
                          {selectedProgram.specializations.map((spec, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-foreground/80"
                            >
                              • {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                </div>
              </CardContent>
            </Card>

            <Card className={`border-2 ${theme.border}`}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <IndianRupee className={`h-6 w-6 ${theme.icon}`} />
                  <CardTitle className="text-xl">
                    Fee Structure (2026-27)
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {selectedProgram.fees.map((fee, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center p-4 rounded-lg bg-green-500/10 border border-green-500/20"
                    >
                      <span className="font-semibold text-foreground">
                        {fee.label}
                      </span>
                      <span className={`text-lg font-bold ${theme.icon}`}>
                        {fee.amount}
                      </span>
                    </div>
                  ))}
                </div>
                {selectedProgram.scholarships && (
                  <div className="mt-4 pt-4 border-t border-border/40">
                    <p className="text-sm text-foreground/70">
                      {selectedProgram.scholarships}
                    </p>
                  </div>
                )}
                {selectedProgram.notes && selectedProgram.notes.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-border/40">
                    <ul className="space-y-2">
                      {selectedProgram.notes.map((note, idx) => (
                        <li key={idx} className="text-sm text-foreground/70">
                          ℹ️ {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="flex gap-3">
              <Button
                onClick={() => setSelectedProgram(null)}
                variant="outline"
                className="flex-1 rounded-lg"
              >
                ← Back to Search
              </Button>
              <Button
                className="flex-1 rounded-lg bg-brand-magenta text-white hover:bg-brand-magenta/90"
                asChild
              >
                <a
                  href="https://admissions.dsu.edu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now →
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
