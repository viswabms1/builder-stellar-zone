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
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  XCircle,
  AlertCircle,
  BookOpen,
  ArrowRight,
} from "lucide-react";

type ProgramLevel = "UG" | "PG";
type Category = "General" | "SC/ST" | "OBC";

type MtechProgram = "CSE/AI" | "Embedded" | "Design";

const mtechBranches: { [key in MtechProgram]: string[] } = {
  "CSE/AI": [
    "CSE / ISE",
    "ECE",
    "Biomedical / Medical Electronics",
    "Electronics & Instrumentation",
    "EEE",
    "Telecommunications",
    "Mechatronics",
    "Other circuit-related branches",
  ],
  "Embedded": ["ECE", "CSE / ISE", "EEE", "Electronics-related branches"],
  "Design": [
    "Mechanical Engineering",
    "Industrial Engineering & Management",
    "Aerospace / Aeronautical",
    "Automobile Engineering",
  ],
};

const mtechProgramLabels: { [key in MtechProgram]: string } = {
  "CSE/AI": "M.Tech – CSE / AI / AI-ML / AI-DS / AI-Robotics",
  "Embedded": "M.Tech – Embedded Systems",
  "Design": "M.Tech – Design Engineering",
};

const allBtechPrograms = [
  "B.Tech Computer Science & Engineering",
  "B.Tech CSE (AI & ML)",
  "B.Tech CSE (Data Science)",
  "B.Tech CSE (Cyber Security)",
  "B.Tech CSE (AI & Data Science)",
  "B.Tech CS & Medical Engineering",
  "B.Tech CSE (Artificial Intelligence)",
  "B.Tech Computer Science & Technology",
  "B.Tech AI & Robotics",
  "B.Tech Electronics & Communication",
  "B.Tech Mechanical Engineering",
  "B.Tech Aerospace Engineering",
];

const ugSubjectOptions = [
  { label: "Physics (compulsory)", value: "Physics" },
  { label: "Mathematics (compulsory)", value: "Mathematics" },
  { label: "Chemistry", value: "Chemistry" },
  { label: "Biotechnology", value: "Biotechnology" },
  { label: "Biology", value: "Biology" },
  { label: "Computer Science", value: "ComputerScience" },
  { label: "Electronics", value: "Electronics" },
  { label: "Technical Vocational subject", value: "TechnicalVocational" },
];

export default function SchoolOfEngineeringEligibility() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [step, setStep] = useState(1);
  const [programLevel, setProgramLevel] = useState<ProgramLevel | "">("");
  const [mtechProgram, setMtechProgram] = useState<MtechProgram | "">("");
  const [selectedBtechBranch, setSelectedBtechBranch] = useState<string>("");
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [percentage, setPercentage] = useState("");
  const [category, setCategory] = useState<Category | "">("");
  const [results, setResults] = useState<{ eligible: boolean; reason: string }>({ eligible: false, reason: "" });
  const [showResults, setShowResults] = useState(false);

  const handleProgramLevelSelect = (level: ProgramLevel) => {
    setProgramLevel(level);
    setStep(2);
  };

  const handleUgStep2 = () => {
    setStep(3);
  };

  const handleUgStep3 = () => {
    if (!percentage || !category) return;
    checkUgEligibility();
    setShowResults(true);
  };

  const handlePgStep2 = (program: MtechProgram) => {
    setMtechProgram(program);
    setStep(3);
  };

  const handlePgStep3 = () => {
    setStep(4);
  };

  const handlePgStep4 = () => {
    if (!percentage || !category) return;
    checkPgEligibility();
    setShowResults(true);
  };

  const checkUgEligibility = () => {
    const hasPhysics = selectedSubjects.includes("Physics");
    const hasMath = selectedSubjects.includes("Mathematics");
    const hasThirdSubject = selectedSubjects.length >= 3;
    const passPercentage = parseFloat(percentage) >= (category === "General" ? 45 : 40);

    const isEligible = hasPhysics && hasMath && hasThirdSubject && passPercentage;

    if (isEligible) {
      setResults({
        eligible: true,
        reason: "You meet all eligibility criteria for B.Tech programs at School of Engineering",
      });
    } else {
      const reasons = [];
      if (!hasPhysics) reasons.push("Physics is compulsory");
      if (!hasMath) reasons.push("Mathematics is compulsory");
      if (!hasThirdSubject) reasons.push("You need one additional subject along with Physics & Mathematics");
      if (!passPercentage) {
        const required = category === "General" ? 45 : 40;
        reasons.push(`Percentage must be at least ${required}%`);
      }
      setResults({
        eligible: false,
        reason: reasons.join("; "),
      });
    }
  };

  const checkPgEligibility = () => {
    const passPercentage = parseFloat(percentage) >= (category === "General" ? 50 : 45);
    const branchMatches = mtechBranches[mtechProgram].some(
      (branch) => selectedBtechBranch.toLowerCase().includes(branch.toLowerCase()) || 
                    branch.toLowerCase().includes(selectedBtechBranch.toLowerCase())
    );

    const isEligible = passPercentage && branchMatches;

    if (isEligible) {
      setResults({
        eligible: true,
        reason: `Your B.Tech branch (${selectedBtechBranch}) is eligible for ${mtechProgramLabels[mtechProgram]}`,
      });
    } else {
      const reasons = [];
      if (!passPercentage) {
        const required = category === "General" ? 50 : 45;
        reasons.push(`B.Tech percentage must be at least ${required}%`);
      }
      if (!branchMatches) {
        reasons.push(`${selectedBtechBranch} is not an eligible branch for ${mtechProgramLabels[mtechProgram]}`);
      }
      setResults({
        eligible: false,
        reason: reasons.join("; "),
      });
    }
  };

  const handleReset = () => {
    setStep(1);
    setProgramLevel("");
    setMtechProgram("");
    setSelectedBtechBranch("");
    setSelectedSubjects([]);
    setPercentage("");
    setCategory("");
    setResults({ eligible: false, reason: "" });
    setShowResults(false);
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      <HeroSection />
      <section className="px-3 py-8">
        <div className="mx-auto max-w-4xl">
          {!showResults && step < 5 && (
            <div className="mb-10">
              <div className="flex items-center justify-between max-w-md">
                {[1, 2, 3].map((stepNum) => (
                  <div key={stepNum} className="flex items-center flex-1">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold transition flex-shrink-0 ${
                        step >= stepNum
                          ? "bg-orange-500 text-white"
                          : "border-2 border-border/60 text-foreground/50"
                      }`}
                    >
                      {stepNum}
                    </div>
                    {stepNum < 3 && (
                      <div
                        className={`mx-2 h-1 flex-1 rounded-full transition ${
                          step > stepNum ? "bg-orange-500" : "bg-border/40"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-xs font-semibold text-foreground/60">
                <div>Step 1</div>
                <div>Step 2</div>
                <div>Step 3</div>
              </div>
            </div>
          )}

          {step === 1 && <StepChooseProgramLevel onSelect={handleProgramLevelSelect} />}

          {step === 2 && programLevel === "UG" && (
            <StepUgQualification onSubmit={handleUgStep2} />
          )}

          {step === 3 && programLevel === "UG" && (
            <StepUgSubjects
              selectedSubjects={selectedSubjects}
              onSubjectsChange={setSelectedSubjects}
              onSubmit={handleUgStep3}
              percentage={percentage}
              onPercentageChange={setPercentage}
              category={category}
              onCategoryChange={setCategory}
            />
          )}

          {step === 2 && programLevel === "PG" && (
            <StepPgProgram onSelect={handlePgStep2} />
          )}

          {step === 3 && programLevel === "PG" && (
            <StepPgBranch
              mtechProgram={mtechProgram as MtechProgram}
              selectedBranch={selectedBtechBranch}
              onBranchSelect={setSelectedBtechBranch}
              onSubmit={handlePgStep3}
            />
          )}

          {step === 4 && programLevel === "PG" && (
            <StepPgMarksAndCategory
              percentage={percentage}
              onPercentageChange={setPercentage}
              category={category}
              onCategoryChange={setCategory}
              onSubmit={handlePgStep4}
            />
          )}

          {showResults && (
            <StepResults
              eligible={results.eligible}
              reason={results.reason}
              programLevel={programLevel as ProgramLevel}
              mtechProgram={mtechProgram as MtechProgram}
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
          <GraduationCap className="h-4 w-4" />
          School of Engineering
        </div>
        <h1 className="mt-8 text-4xl font-bold leading-tight md:text-5xl">
          Check Your Eligibility
        </h1>
        <p className="mt-6 text-lg text-foreground md:text-xl">
          Answer 3 simple questions to verify your eligibility for B.Tech and M.Tech programs.
        </p>
      </div>
    </section>
  );
}

function StepChooseProgramLevel({ onSelect }: { onSelect: (level: ProgramLevel) => void }) {
  return (
    <Card className="border-2 border-orange-500/20 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/15">
            <GraduationCap className="h-6 w-6 text-orange-500" />
          </div>
          <div>
            <CardTitle className="text-2xl">Step 1: Choose Your Program Level</CardTitle>
            <CardDescription>Are you applying for Undergraduate or Postgraduate?</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <button
          onClick={() => onSelect("UG")}
          className="w-full rounded-xl border-2 border-orange-500/20 bg-card/50 p-6 text-left transition hover:border-orange-500/60 hover:bg-orange-500/5"
        >
          <h3 className="font-semibold text-lg text-foreground">👉 Undergraduate (B.Tech)</h3>
          <p className="mt-2 text-sm text-foreground/70">If you are joining after 12th / PUC, read UG eligibility.</p>
        </button>

        <button
          onClick={() => onSelect("PG")}
          className="w-full rounded-xl border-2 border-orange-500/20 bg-card/50 p-6 text-left transition hover:border-orange-500/60 hover:bg-orange-500/5"
        >
          <h3 className="font-semibold text-lg text-foreground">👉 Postgraduate (M.Tech)</h3>
          <p className="mt-2 text-sm text-foreground/70">If you are joining after B.Tech, read PG eligibility.</p>
        </button>
      </CardContent>
    </Card>
  );
}

function StepUgQualification({ onSubmit }: { onSubmit: () => void }) {
  return (
    <Card className="border-2 border-orange-500/20 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/15">
            <CheckCircle2 className="h-6 w-6 text-orange-500" />
          </div>
          <div>
            <CardTitle className="text-2xl">Step 1: Qualification Check</CardTitle>
            <CardDescription>Undergraduate (B.Tech) – Simple Eligibility</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-lg bg-orange-500/10 border border-orange-500/30 p-4">
          <h4 className="font-semibold text-foreground mb-3">✅ Condition 1: Qualification</h4>
          <ul className="space-y-2 text-sm text-foreground/90">
            <li>✓ Passed PUC / 10+2 or equivalent</li>
            <li>✓ Board recognized by State / Central Government</li>
          </ul>
        </div>

        <Button
          onClick={onSubmit}
          className="w-full rounded-lg bg-orange-500 py-3 text-white hover:bg-orange-600"
        >
          I Have Completed 10+2 / PUC
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}

function StepUgSubjects({
  selectedSubjects,
  onSubjectsChange,
  onSubmit,
  percentage,
  onPercentageChange,
  category,
  onCategoryChange,
}: {
  selectedSubjects: string[];
  onSubjectsChange: (subjects: string[]) => void;
  onSubmit: () => void;
  percentage: string;
  onPercentageChange: (value: string) => void;
  category: Category | "";
  onCategoryChange: (cat: Category) => void;
}) {
  const handleToggleSubject = (value: string) => {
    if (["Physics", "Mathematics"].includes(value)) {
      return; // Can't deselect compulsory subjects
    }
    const updated = selectedSubjects.includes(value)
      ? selectedSubjects.filter((s) => s !== value)
      : [...selectedSubjects, value];
    onSubjectsChange(updated);
  };

  const hasPhysics = selectedSubjects.includes("Physics");
  const hasMath = selectedSubjects.includes("Mathematics");
  const hasThirdSubject = selectedSubjects.length >= 3;
  const validPercentage = percentage && parseFloat(percentage) >= 0 && parseFloat(percentage) <= 100;
  const canSubmit = hasPhysics && hasMath && hasThirdSubject && validPercentage && category;

  return (
    <div className="space-y-6">
      <Card className="border-2 border-orange-500/20 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Step 2: Subjects & Marks</CardTitle>
          <CardDescription>Undergraduate (B.Tech) – Eligibility Conditions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              Condition 2: Subjects Studied
            </h4>
            <p className="text-sm text-foreground/70 mb-4">
              You must have Physics and Mathematics (compulsory) + any one of the following:
            </p>
            <div className="space-y-2">
              {ugSubjectOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleToggleSubject(option.value)}
                  disabled={["Physics", "Mathematics"].includes(option.value)}
                  className={`w-full rounded-lg border-2 p-4 text-left transition ${
                    selectedSubjects.includes(option.value)
                      ? "border-green-500 bg-green-500/10"
                      : "border-orange-500/20 bg-card/50 hover:border-orange-500/60"
                  } ${["Physics", "Mathematics"].includes(option.value) ? "opacity-100 cursor-default" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-5 w-5 rounded border-2 transition ${
                        selectedSubjects.includes(option.value)
                          ? "border-green-500 bg-green-500"
                          : "border-border/60"
                      }`}
                    />
                    <span className="font-semibold text-foreground">{option.label}</span>
                    {["Physics", "Mathematics"].includes(option.value) && (
                      <span className="ml-auto text-xs text-orange-600 font-semibold">COMPULSORY</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-border/40 pt-6">
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              Condition 3: Minimum Marks
            </h4>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-foreground">Percentage / Aggregate (%)</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={percentage}
                  onChange={(e) => onPercentageChange(e.target.value)}
                  placeholder="Enter percentage (0-100)"
                  className="mt-2 w-full rounded-lg border border-border/60 bg-background px-4 py-3 text-foreground placeholder-foreground/50 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                />
                <p className="mt-2 text-xs text-foreground/60">
                  Need 45% (General) or 40% (SC/ST/OBC)
                </p>
              </div>

              <div>
                <label className="text-sm font-semibold text-foreground block mb-3">Category</label>
                <div className="grid grid-cols-3 gap-3">
                  {(["General", "SC/ST", "OBC"] as const).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => onCategoryChange(cat)}
                      className={`rounded-lg border-2 p-3 text-center transition ${
                        category === cat
                          ? "border-orange-500 bg-orange-500/10"
                          : "border-orange-500/20 bg-card/50 hover:border-orange-500/60"
                      }`}
                    >
                      <span className="font-semibold text-foreground text-sm">{cat}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Button
            onClick={onSubmit}
            disabled={!canSubmit}
            className="w-full rounded-lg bg-orange-500 py-3 text-white hover:bg-orange-600 disabled:opacity-50"
          >
            Check My Eligibility
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

function StepPgProgram({ onSelect }: { onSelect: (program: MtechProgram) => void }) {
  return (
    <Card className="border-2 border-orange-500/20 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/15">
            <GraduationCap className="h-6 w-6 text-orange-500" />
          </div>
          <div>
            <CardTitle className="text-2xl">Step 1: Choose Your M.Tech Program</CardTitle>
            <CardDescription>Postgraduate (M.Tech) – Branch-Wise Eligibility</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {(["CSE/AI", "Embedded", "Design"] as const).map((program) => (
          <button
            key={program}
            onClick={() => onSelect(program)}
            className="w-full rounded-xl border-2 border-orange-500/20 bg-card/50 p-6 text-left transition hover:border-orange-500/60 hover:bg-orange-500/5"
          >
            <h3 className="font-semibold text-lg text-foreground">{mtechProgramLabels[program]}</h3>
          </button>
        ))}
      </CardContent>
    </Card>
  );
}

function StepPgBranch({
  mtechProgram,
  selectedBranch,
  onBranchSelect,
  onSubmit,
}: {
  mtechProgram: MtechProgram;
  selectedBranch: string;
  onBranchSelect: (branch: string) => void;
  onSubmit: () => void;
}) {
  const branches = mtechBranches[mtechProgram];

  return (
    <Card className="border-2 border-orange-500/20 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Step 2: Your B.Tech Branch</CardTitle>
        <CardDescription>Select your undergraduate branch</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-lg bg-orange-500/10 border border-orange-500/30 p-4">
          <p className="text-sm font-semibold text-foreground mb-3">
            Eligible B.Tech branches for {mtechProgramLabels[mtechProgram]}:
          </p>
          <ul className="space-y-1">
            {branches.map((branch, idx) => (
              <li key={idx} className="text-sm text-foreground/90">
                • {branch}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <label className="text-sm font-semibold text-foreground block mb-3">Your B.Tech Branch</label>
          <select
            value={selectedBranch}
            onChange={(e) => onBranchSelect(e.target.value)}
            className="w-full rounded-lg border border-border/60 bg-background px-4 py-3 text-foreground focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
          >
            <option value="">Select your branch...</option>
            {branches.map((branch) => (
              <option key={branch} value={branch}>
                {branch}
              </option>
            ))}
          </select>
        </div>

        <Button
          onClick={onSubmit}
          disabled={!selectedBranch}
          className="w-full rounded-lg bg-orange-500 py-3 text-white hover:bg-orange-600 disabled:opacity-50"
        >
          Continue
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}

function StepPgMarksAndCategory({
  percentage,
  onPercentageChange,
  category,
  onCategoryChange,
  onSubmit,
}: {
  percentage: string;
  onPercentageChange: (value: string) => void;
  category: Category | "";
  onCategoryChange: (cat: Category) => void;
  onSubmit: () => void;
}) {
  const validPercentage = percentage && parseFloat(percentage) >= 0 && parseFloat(percentage) <= 100;
  const canSubmit = validPercentage && category;

  return (
    <Card className="border-2 border-orange-500/20 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Step 3: Your Marks & Category</CardTitle>
        <CardDescription>Enter your B.Tech percentage and admission category</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <label className="text-sm font-semibold text-foreground block mb-2">B.Tech Percentage / CGPA (%)</label>
          <input
            type="number"
            min="0"
            max="100"
            value={percentage}
            onChange={(e) => onPercentageChange(e.target.value)}
            placeholder="Enter percentage (0-100)"
            className="w-full rounded-lg border border-border/60 bg-background px-4 py-3 text-foreground placeholder-foreground/50 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
          />
          <p className="mt-2 text-xs text-foreground/60">Need 50% (General) or 45% (SC/ST/OBC)</p>
        </div>

        <div>
          <label className="text-sm font-semibold text-foreground block mb-3">Category</label>
          <div className="grid grid-cols-3 gap-3">
            {(["General", "SC/ST", "OBC"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`rounded-lg border-2 p-3 text-center transition ${
                  category === cat
                    ? "border-orange-500 bg-orange-500/10"
                    : "border-orange-500/20 bg-card/50 hover:border-orange-500/60"
                }`}
              >
                <span className="font-semibold text-foreground text-sm">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        <Button
          onClick={onSubmit}
          disabled={!canSubmit}
          className="w-full rounded-lg bg-orange-500 py-3 text-white hover:bg-orange-600 disabled:opacity-50"
        >
          Check My Eligibility
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}

function StepResults({
  eligible,
  reason,
  programLevel,
  mtechProgram,
  onReset,
}: {
  eligible: boolean;
  reason: string;
  programLevel: ProgramLevel;
  mtechProgram: MtechProgram;
  onReset: () => void;
}) {
  return (
    <div className="space-y-6">
      <Card
        className={`border-2 ${
          eligible
            ? "border-green-500/30 bg-gradient-to-r from-green-500/10 to-emerald-500/10"
            : "border-red-500/30 bg-gradient-to-r from-red-500/10 to-red-500/5"
        }`}
      >
        <CardHeader>
          <div className="flex items-center gap-3">
            {eligible ? (
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            ) : (
              <XCircle className="h-8 w-8 text-red-600" />
            )}
            <div>
              <CardTitle className="text-2xl">
                {eligible ? "✅ You Are Eligible!" : "❌ Not Eligible"}
              </CardTitle>
              <CardDescription>{reason}</CardDescription>
            </div>
          </div>
        </CardHeader>
        {eligible && programLevel === "UG" && (
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-3">You can apply for ALL B.Tech programs:</h4>
                <div className="grid gap-2 grid-cols-1 sm:grid-cols-2">
                  {allBtechPrograms.map((program, idx) => (
                    <div key={idx} className="rounded-lg bg-green-500/10 border border-green-500/30 p-3">
                      <p className="text-sm font-semibold text-foreground">{program}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        )}
        {eligible && programLevel === "PG" && (
          <CardContent>
            <div className="rounded-lg bg-green-500/10 border border-green-500/30 p-4">
              <p className="text-sm font-semibold text-foreground mb-2">Program Eligible For:</p>
              <p className="text-lg font-bold text-green-700">{mtechProgramLabels[mtechProgram]}</p>
            </div>
          </CardContent>
        )}
      </Card>

      <div className="flex gap-3">
        <Button
          onClick={onReset}
          className="flex-1 rounded-lg bg-orange-500 py-3 text-white hover:bg-orange-600"
        >
          <ArrowRight className="mr-2 h-4 w-4" />
          Check Again
        </Button>
        <Button
          variant="outline"
          className="flex-1 rounded-lg border-orange-500/30 text-orange-500 hover:bg-orange-500/10"
          asChild
        >
          <a href="/school-of-engineering">
            View All Programs
            <ChevronRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}
