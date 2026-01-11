import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Download,
  FileText,
  Filter,
  GraduationCap,
  Lightbulb,
  Zap,
} from "lucide-react";

type EntranceExam = "CET" | "JEE" | "PGCET" | "CLAT" | "Direct" | "None";

type Program = {
  name: string;
  school: string;
  level: "UG" | "PG" | "Professional";
  duration: string;
  eligibility: string;
  fees: { label: string; amount: string }[];
  admissionPathways: string[];
};

const mockPrograms: Program[] = [
  {
    name: "B.Tech Computer Science & Engineering",
    school: "School of Engineering",
    level: "UG",
    duration: "4 Years",
    eligibility: "PUC/10+2 with Physics & Mathematics (45% marks)",
    fees: [
      { label: "CET", amount: "Not Available" },
      { label: "JEE Mains/Ranking Based", amount: "₹4,12,000" },
      { label: "Others", amount: "₹4,92,000" },
    ],
    admissionPathways: ["CET", "JEE", "Direct"],
  },
  {
    name: "M.Tech Computer Science Engineering",
    school: "School of Engineering",
    level: "PG",
    duration: "2 Years",
    eligibility: "B.Tech in related field (50% marks)",
    fees: [
      { label: "PGCET", amount: "Not Available" },
      { label: "Others", amount: "₹2,52,000" },
    ],
    admissionPathways: ["PGCET", "Direct"],
  },
  {
    name: "BBA Regular",
    school: "School of Commerce & Management",
    level: "UG",
    duration: "3 Years",
    eligibility: "PUC/10+2 with 50% marks",
    fees: [
      { label: "Term I", amount: "₹1,07,000" },
      { label: "Term II", amount: "₹1,05,000" },
    ],
    admissionPathways: ["Direct"],
  },
  {
    name: "MBA",
    school: "School of Commerce & Management",
    level: "PG",
    duration: "2 Years",
    eligibility: "Bachelor's degree (50% marks)",
    fees: [
      { label: "Term I", amount: "₹3,07,000" },
      { label: "Term II", amount: "₹2,95,000" },
    ],
    admissionPathways: ["PGCET", "CAT", "Direct"],
  },
  {
    name: "B.A. LL.B",
    school: "School of Law",
    level: "UG",
    duration: "5 Years",
    eligibility: "PUC/10+2 with 50% marks (CLAT scores)",
    fees: [
      { label: "Tuition Fee", amount: "₹2,02,000" },
      { label: "Other Fee", amount: "₹50,000" },
    ],
    admissionPathways: ["CLAT", "Direct"],
  },
  {
    name: "LL.M",
    school: "School of Law",
    level: "PG",
    duration: "1 Year",
    eligibility: "LL.B degree (50% marks)",
    fees: [
      { label: "Tuition Fee", amount: "₹1,10,000" },
      { label: "Other Fee", amount: "₹35,000" },
    ],
    admissionPathways: ["CLAT", "Direct"],
  },
  {
    name: "B.Sc Nursing",
    school: "School of Health Sciences",
    level: "UG",
    duration: "4 Years",
    eligibility: "PUC/10+2 with Physics, Chemistry, Biology (45%)",
    fees: [
      { label: "Term I", amount: "₹97,000" },
      { label: "Term II", amount: "₹85,000" },
    ],
    admissionPathways: ["CET", "Direct"],
  },
  {
    name: "M.Sc Nursing",
    school: "School of Health Sciences",
    level: "PG",
    duration: "2 Years",
    eligibility: "B.Sc Nursing (55% marks, 1 year experience)",
    fees: [
      { label: "Others", amount: "₹1,42,000" },
    ],
    admissionPathways: ["Direct"],
  },
  {
    name: "BCA",
    school: "School of Computer Applications",
    level: "UG",
    duration: "3 Years",
    eligibility: "PUC/10+2 with 45% marks",
    fees: [
      { label: "Term I", amount: "₹1,09,500" },
      { label: "Term II", amount: "₹97,500" },
    ],
    admissionPathways: ["Direct"],
  },
  {
    name: "MCA",
    school: "School of Computer Applications",
    level: "PG",
    duration: "2 Years",
    eligibility: "BCA/B.Sc with Mathematics (50% marks)",
    fees: [
      { label: "Term I", amount: "₹1,77,000" },
      { label: "Term II", amount: "₹1,65,000" },
    ],
    admissionPathways: ["Direct"],
  },
];

const examOptions: EntranceExam[] = ["CET", "JEE", "PGCET", "CLAT", "Direct", "None"];
const categoryOptions = ["General", "SC/ST", "OBC", "Not Applicable"];

export default function EligibilityChecker() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [step, setStep] = useState(1);
  const [selectedExam, setSelectedExam] = useState<EntranceExam | "">("");
  const [score, setScore] = useState("");
  const [category, setCategory] = useState("");
  const [programLevel, setProgramLevel] = useState<"" | "UG" | "PG">("UG");
  const [matchedPrograms, setMatchedPrograms] = useState<Program[]>([]);

  const examPercentiles: Record<EntranceExam, { min: number; max: number }> = {
    CET: { min: 0, max: 180 },
    JEE: { min: 0, max: 100 },
    PGCET: { min: 0, max: 180 },
    CLAT: { min: 0, max: 120 },
    Direct: { min: 0, max: 100 },
    None: { min: 0, max: 100 },
  };

  const handleExamSelect = (exam: EntranceExam) => {
    setSelectedExam(exam);
    setScore("");
    setStep(2);
  };

  const handleScoreSubmit = () => {
    if (!score) return;
    setStep(3);
  };

  const handleCategorySelect = (cat: string) => {
    setCategory(cat);
    setStep(4);
  };

  const handleLevelSelect = (level: "UG" | "PG") => {
    setProgramLevel(level);
    findMatchingPrograms(level);
    setStep(5);
  };

  const findMatchingPrograms = (level: "UG" | "PG") => {
    const matched = mockPrograms.filter((program) => {
      const levelMatch = program.level === level;
      const pathwayMatch = program.admissionPathways.includes(selectedExam as string) || selectedExam === "Direct";
      return levelMatch && pathwayMatch;
    });
    setMatchedPrograms(matched);
  };

  const handleReset = () => {
    setStep(1);
    setSelectedExam("");
    setScore("");
    setCategory("");
    setProgramLevel("");
    setMatchedPrograms([]);
  };

  const scorePercentage = selectedExam
    ? Math.round((parseFloat(score) / examPercentiles[selectedExam as EntranceExam].max) * 100)
    : 0;

  return (
    <div className="bg-background text-foreground min-h-screen">
      <HeroSection />

      <section className="px-3 py-8">
        <div className="mx-auto max-w-6xl">
          {step < 5 && (
            <div className="mb-8">
              <div className="flex items-center justify-between">
                {[1, 2, 3, 4].map((stepNum) => (
                  <div key={stepNum} className="flex items-center">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full font-semibold transition ${
                        step >= stepNum
                          ? "bg-orange-500 text-white"
                          : "border-2 border-border/60 text-foreground/50"
                      }`}
                    >
                      {stepNum}
                    </div>
                    {stepNum < 4 && (
                      <div
                        className={`mx-2 h-1 w-12 rounded-full transition ${
                          step > stepNum ? "bg-orange-500" : "bg-border/40"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <StepExamType examOptions={examOptions} onSelect={handleExamSelect} />
          )}

          {step === 2 && (
            <StepScore
              selectedExam={selectedExam as EntranceExam}
              score={score}
              onScoreChange={setScore}
              onSubmit={handleScoreSubmit}
              scorePercentage={scorePercentage}
            />
          )}

          {step === 3 && (
            <StepCategory
              categoryOptions={categoryOptions}
              onSelect={handleCategorySelect}
              selectedCategory={category}
            />
          )}

          {step === 4 && (
            <StepProgramLevel onSelect={handleLevelSelect} />
          )}

          {step === 5 && (
            <StepResults
              programs={matchedPrograms}
              selectedExam={selectedExam as EntranceExam}
              score={score}
              category={category}
              programLevel={programLevel as "UG" | "PG"}
              onReset={handleReset}
            />
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
          <Zap className="h-4 w-4" />
          Smart Eligibility Finder
        </div>
        <h1 className="mt-8 text-4xl font-bold leading-tight md:text-5xl">
          Find Your Perfect Program
        </h1>
        <p className="mt-6 text-lg text-foreground md:text-xl">
          Answer 4 simple questions to discover programs you're eligible for, compare fees, and understand admission pathways.
        </p>
      </div>
    </section>
  );
}

type StepExamTypeProps = {
  examOptions: EntranceExam[];
  onSelect: (exam: EntranceExam) => void;
};

function StepExamType({ examOptions, onSelect }: StepExamTypeProps) {
  return (
    <Card className="border-2 border-orange-500/20 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/15">
            <GraduationCap className="h-6 w-6 text-orange-500" />
          </div>
          <div>
            <CardTitle className="text-2xl">Step 1: Entrance Exam</CardTitle>
            <CardDescription>Which entrance exam are you taking?</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {examOptions.map((exam) => (
            <button
              key={exam}
              onClick={() => onSelect(exam)}
              className="rounded-xl border-2 border-orange-500/20 bg-card/50 p-6 text-left transition hover:border-orange-500/60 hover:bg-orange-500/5"
            >
              <h3 className="font-semibold text-lg text-foreground">{exam}</h3>
              <p className="mt-2 text-sm text-foreground/70">
                {exam === "CET" && "Karnataka Common Entrance Test"}
                {exam === "JEE" && "Joint Entrance Exam (Mains)"}
                {exam === "PGCET" && "Post Graduate Common Entrance Test"}
                {exam === "CLAT" && "Common Law Admission Test"}
                {exam === "Direct" && "Merit-based Direct Admission"}
                {exam === "None" && "Without entrance exam"}
              </p>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

type StepScoreProps = {
  selectedExam: EntranceExam;
  score: string;
  onScoreChange: (score: string) => void;
  onSubmit: () => void;
  scorePercentage: number;
};

function StepScore({ selectedExam, score, onScoreChange, onSubmit, scorePercentage }: StepScoreProps) {
  const scoreRanges: Record<EntranceExam, { min: number; max: number; unit: string }> = {
    CET: { min: 0, max: 180, unit: "marks out of 180" },
    JEE: { min: 0, max: 100, unit: "percentile" },
    PGCET: { min: 0, max: 180, unit: "marks out of 180" },
    CLAT: { min: 0, max: 120, unit: "marks out of 120" },
    Direct: { min: 0, max: 100, unit: "percentage (12th/Graduation)" },
    None: { min: 0, max: 100, unit: "percentage (12th/Graduation)" },
  };

  const range = scoreRanges[selectedExam];
  const isValidScore = score && parseFloat(score) <= range.max && parseFloat(score) >= range.min;

  return (
    <Card className="border-2 border-orange-500/20 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/15">
            <Lightbulb className="h-6 w-6 text-orange-500" />
          </div>
          <div>
            <CardTitle className="text-2xl">Step 2: Your Score</CardTitle>
            <CardDescription>
              Enter your score for {selectedExam} ({range.unit})
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <label className="text-sm font-semibold text-foreground">Score</label>
          <div className="mt-3 flex gap-2">
            <input
              type="number"
              min={range.min}
              max={range.max}
              value={score}
              onChange={(e) => onScoreChange(e.target.value)}
              placeholder={`Enter score (${range.min}-${range.max})`}
              className="flex-1 rounded-lg border border-border/60 bg-background px-4 py-3 text-foreground placeholder-foreground/50 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
            />
            <span className="flex items-center rounded-lg bg-orange-500/10 px-4 py-3 text-sm font-semibold text-orange-600">
              {scorePercentage}%
            </span>
          </div>
          {score && (
            <div className="mt-3 overflow-hidden rounded-lg bg-background/50">
              <div
                className="h-2 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300"
                style={{ width: `${Math.min(scorePercentage, 100)}%` }}
              />
            </div>
          )}
        </div>

        <Button
          onClick={onSubmit}
          disabled={!isValidScore}
          className="w-full rounded-lg bg-orange-500 py-3 text-white hover:bg-orange-600 disabled:opacity-50"
        >
          Continue
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}

type StepCategoryProps = {
  categoryOptions: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
};

function StepCategory({ categoryOptions, selectedCategory, onSelect }: StepCategoryProps) {
  return (
    <Card className="border-2 border-orange-500/20 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/15">
            <Filter className="h-6 w-6 text-orange-500" />
          </div>
          <div>
            <CardTitle className="text-2xl">Step 3: Candidate Category</CardTitle>
            <CardDescription>Select your category for admission eligibility</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 sm:grid-cols-2">
          {categoryOptions.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className={`rounded-xl border-2 p-4 text-left transition ${
                selectedCategory === cat
                  ? "border-orange-500 bg-orange-500/10"
                  : "border-orange-500/20 bg-card/50 hover:border-orange-500/60"
              }`}
            >
              <h3 className="font-semibold text-foreground">{cat}</h3>
              {cat === "General" && <p className="mt-1 text-xs text-foreground/70">Unreserved category</p>}
              {cat === "SC/ST" && <p className="mt-1 text-xs text-foreground/70">Scheduled Caste / Scheduled Tribe</p>}
              {cat === "OBC" && <p className="mt-1 text-xs text-foreground/70">Other Backward Classes</p>}
              {cat === "Not Applicable" && <p className="mt-1 text-xs text-foreground/70">Foreign / NRI candidates</p>}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

type StepProgramLevelProps = {
  onSelect: (level: "UG" | "PG") => void;
};

function StepProgramLevel({ onSelect }: StepProgramLevelProps) {
  return (
    <Card className="border-2 border-orange-500/20 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/15">
            <BookOpen className="h-6 w-6 text-orange-500" />
          </div>
          <div>
            <CardTitle className="text-2xl">Step 4: Program Level</CardTitle>
            <CardDescription>What level of program are you interested in?</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 sm:grid-cols-2">
          <button
            onClick={() => onSelect("UG")}
            className="rounded-xl border-2 border-orange-500/20 bg-card/50 p-8 text-center transition hover:border-orange-500/60 hover:bg-orange-500/5"
          >
            <GraduationCap className="mx-auto h-10 w-10 text-orange-500 mb-3" />
            <h3 className="font-semibold text-lg text-foreground">Undergraduate</h3>
            <p className="mt-2 text-sm text-foreground/70">Bachelor's Degree (3-4 years)</p>
          </button>
          <button
            onClick={() => onSelect("PG")}
            className="rounded-xl border-2 border-orange-500/20 bg-card/50 p-8 text-center transition hover:border-orange-500/60 hover:bg-orange-500/5"
          >
            <BookOpen className="mx-auto h-10 w-10 text-orange-500 mb-3" />
            <h3 className="font-semibold text-lg text-foreground">Postgraduate</h3>
            <p className="mt-2 text-sm text-foreground/70">Master's Degree (1-2 years)</p>
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

type StepResultsProps = {
  programs: Program[];
  selectedExam: EntranceExam;
  score: string;
  category: string;
  programLevel: "UG" | "PG";
  onReset: () => void;
};

function StepResults({ programs, selectedExam, score, category, programLevel, onReset }: StepResultsProps) {
  const handleExportPDF = () => {
    const content = `
Eligibility Checker Results
==========================

Exam Type: ${selectedExam}
Score: ${score}
Category: ${category}
Program Level: ${programLevel === "UG" ? "Undergraduate" : "Postgraduate"}

Matching Programs (${programs.length} found):

${programs.map((prog) => `
Program: ${prog.name}
School: ${prog.school}
Duration: ${prog.duration}
Admission Pathways: ${prog.admissionPathways.join(", ")}
Eligibility: ${prog.eligibility}
Fee Structure: ${prog.fees.map((f) => `${f.label}: ${f.amount}`).join("; ")}
---
`).join("\n")}

Generated at: ${new Date().toLocaleDateString("en-IN")}
    `.trim();

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `eligibility-results-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <Card className="border-2 border-green-500/30 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
        <CardHeader>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
            <div>
              <CardTitle className="text-2xl">Your Results</CardTitle>
              <CardDescription>
                Found {programs.length} {programs.length === 1 ? "program" : "programs"} matching your criteria
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-background/50 p-4">
              <p className="text-xs text-foreground/70">Entrance Exam</p>
              <p className="mt-2 font-semibold text-foreground">{selectedExam}</p>
            </div>
            <div className="rounded-lg bg-background/50 p-4">
              <p className="text-xs text-foreground/70">Your Score</p>
              <p className="mt-2 font-semibold text-foreground">{score}</p>
            </div>
            <div className="rounded-lg bg-background/50 p-4">
              <p className="text-xs text-foreground/70">Category</p>
              <p className="mt-2 font-semibold text-foreground">{category}</p>
            </div>
            <div className="rounded-lg bg-background/50 p-4">
              <p className="text-xs text-foreground/70">Program Level</p>
              <p className="mt-2 font-semibold text-foreground">
                {programLevel === "UG" ? "Undergraduate" : "Postgraduate"}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {programs.length > 0 ? (
        <div className="space-y-4">
          {programs.map((program, idx) => (
            <Card
              key={idx}
              className="border border-border/60 bg-card/70 transition hover:-translate-y-1 hover:border-orange-500/40"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {program.name}
                    </CardTitle>
                    <CardDescription className="mt-1 text-sm text-foreground">
                      {program.school}
                    </CardDescription>
                  </div>
                  <Badge className="bg-orange-500/15 text-orange-500">{program.duration}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-border/40 p-3">
                    <p className="text-xs uppercase text-foreground/60">Eligibility</p>
                    <p className="mt-2 text-sm text-foreground">{program.eligibility}</p>
                  </div>
                  <div className="rounded-lg border border-border/40 p-3">
                    <p className="text-xs uppercase text-foreground/60">Admission Via</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {program.admissionPathways.map((pathway) => (
                        <Badge key={pathway} className="bg-blue-500/15 text-blue-600">
                          {pathway}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-orange-500/20">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-2/3">Fee Component</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {program.fees.map((fee, feeIdx) => (
                        <TableRow key={feeIdx}>
                          <TableCell className="text-sm text-foreground">{fee.label}</TableCell>
                          <TableCell className="text-right text-orange-500 font-medium">{fee.amount}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <Button
                  variant="outline"
                  className="w-full justify-center rounded-lg border-orange-500/30 text-orange-500"
                  asChild
                >
                  <a href={`/eligibility?school=${encodeURIComponent(program.school)}`}>
                    View Full Details
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="border border-red-500/30 bg-red-500/10">
          <CardContent className="pt-8 text-center">
            <FileText className="mx-auto h-12 w-12 text-red-500/50 mb-4" />
            <h3 className="font-semibold text-foreground mb-2">No Matching Programs</h3>
            <p className="text-sm text-foreground/70">
              No programs match your criteria. Try adjusting your entrance exam or category selection.
            </p>
          </CardContent>
        </Card>
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          onClick={handleExportPDF}
          className="flex-1 rounded-lg bg-orange-500/15 text-orange-500 hover:bg-orange-500 hover:text-white transition"
        >
          <Download className="mr-2 h-4 w-4" />
          Export Results
        </Button>
        <Button
          onClick={onReset}
          variant="outline"
          className="flex-1 rounded-lg border-orange-500/30 text-orange-500 hover:bg-orange-500/10"
        >
          Start Over
        </Button>
      </div>
    </div>
  );
}
