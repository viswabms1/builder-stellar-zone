import { useEffect, useState } from "react";
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
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, GraduationCap, IndianRupee, Filter } from "lucide-react";
import { schools } from "./Eligibility";

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

export default function SimpleProgramLookup() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [allPrograms, setAllPrograms] = useState<Program[]>([]);
  const [selectedSchool, setSelectedSchool] = useState<string>("All");
  const [selectedLevel, setSelectedLevel] = useState<string>("All");

  useEffect(() => {
    const programs: Program[] = [];
    schools.forEach((school) => {
      school.categories.forEach((category) => {
        category.programs.forEach((program) => {
          programs.push({ ...program, school: school.name });
        });
      });
    });
    setAllPrograms(programs);
  }, []);

  const schoolNames = Array.from(
    new Set(allPrograms.map((p) => p.school)),
  ).sort();
  const levels = ["UG", "PG", "Professional"];

  const filteredPrograms = allPrograms.filter((program) => {
    const matchesSchool =
      selectedSchool === "All" || program.school === selectedSchool;
    const matchesLevel =
      selectedLevel === "All" || program.level === selectedLevel;
    return matchesSchool && matchesLevel;
  });

  const handleProgramSelect = (programName: string) => {
    const program = allPrograms.find((p) => p.name === programName);
    setSelectedProgram(program || null);
  };

  const handleReset = () => {
    setSelectedSchool("All");
    setSelectedLevel("All");
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      <HeroSection />
      <section className="px-3 py-8">
        <div className="mx-auto max-w-4xl space-y-8">
          <Card className="border-2 border-orange-500/20 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/15">
                  <Filter className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Find Your Program</CardTitle>
                  <CardDescription>
                    Filter by school and level to find your program
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">
                    School
                  </label>
                  <Select
                    value={selectedSchool}
                    onValueChange={setSelectedSchool}
                  >
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select school..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All Schools</SelectItem>
                      {schoolNames.map((school) => (
                        <SelectItem key={school} value={school}>
                          {school}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">
                    Program Level
                  </label>
                  <Select
                    value={selectedLevel}
                    onValueChange={setSelectedLevel}
                  >
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select level..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All Levels</SelectItem>
                      {levels.map((level) => (
                        <SelectItem key={level} value={level}>
                          {level === "UG"
                            ? "Undergraduate (UG)"
                            : level === "PG"
                              ? "Postgraduate (PG)"
                              : "Professional"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <p className="text-sm text-foreground/60">
                  {filteredPrograms.length} program
                  {filteredPrograms.length !== 1 ? "s" : ""} found
                </p>
                {(selectedSchool !== "All" || selectedLevel !== "All") && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleReset}
                    className="text-orange-500 hover:text-orange-600"
                  >
                    Clear Filters
                  </Button>
                )}
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
                  <SelectContent className="max-h-[400px] overflow-y-auto">
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
                            <span className="font-semibold">
                              {program.name}
                            </span>
                            <span className="text-xs text-foreground/60">
                              {program.school} • {program.level}
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
              <Card className="border-2 border-green-500/30 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-8 w-8 text-green-600" />
                    <div>
                      <CardTitle className="text-2xl">
                        {selectedProgram.name}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {selectedProgram.school} • {selectedProgram.level}{" "}
                        {selectedProgram.duration &&
                          `• ${selectedProgram.duration}`}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-2 border-orange-500/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-orange-500" />
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
                          {selectedProgram.eligibilityPoints.map(
                            (point, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-foreground">{point}</span>
                              </li>
                            ),
                          )}
                        </ul>
                      )}
                    {selectedProgram.specializations &&
                      selectedProgram.specializations.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-border/40">
                          <h4 className="font-semibold text-foreground mb-2">
                            Specializations Available:
                          </h4>
                          <ul className="space-y-1">
                            {selectedProgram.specializations.map(
                              (spec, idx) => (
                                <li
                                  key={idx}
                                  className="text-sm text-foreground/80"
                                >
                                  • {spec}
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      )}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-500/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <IndianRupee className="h-6 w-6 text-orange-500" />
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
                        className="flex justify-between items-center p-4 rounded-lg bg-orange-500/5 border border-orange-500/20"
                      >
                        <span className="font-semibold text-foreground">
                          {fee.label}
                        </span>
                        <span className="text-lg font-bold text-orange-600">
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
                  {selectedProgram.notes &&
                    selectedProgram.notes.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-border/40">
                        <ul className="space-y-2">
                          {selectedProgram.notes.map((note, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-foreground/70"
                            >
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
                  className="flex-1 rounded-lg border-orange-500/30 text-orange-500 hover:bg-orange-500/10"
                >
                  ← Back to Search
                </Button>
                <Button
                  className="flex-1 rounded-lg bg-orange-500 text-white hover:bg-orange-600"
                  asChild
                >
                  <a
                    href="https://admission.dsu.edu.in/"
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
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-500/10 via-red-500/10 to-background py-16 lg:py-24">
      <div className="absolute inset-0">
        <div className="absolute -top-12 -left-16 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-red-600/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-3 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-500">
          <GraduationCap className="h-4 w-4" />
          Program Eligibility & Fees
        </div>
        <h1 className="mt-8 text-4xl font-bold leading-tight md:text-5xl">
          Find Your Program Details
        </h1>
        <p className="mt-6 text-lg text-foreground md:text-xl">
          Filter by school and level, then instantly view eligibility criteria,
          fee structure, and required documents.
        </p>
      </div>
    </section>
  );
}
