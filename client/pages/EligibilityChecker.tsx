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

type EducationLevel = "10+2" | "Bachelor's" | "Master's" | "Law";
type Category = "General" | "SC/ST" | "OBC";
type SubjectRequirement = "PCM" | "PCB" | "Commerce" | "Arts" | "Law" | "Engineering" | "Science" | "Life Sciences" | "Any";

type EligibilityRule = {
  requiredEducation: EducationLevel;
  subjectRequirement: SubjectRequirement;
  minimumPercentage: (category: Category) => number;
  applicablePrograms: string[];
  reason: string;
};

const eligibilityRules: EligibilityRule[] = [
  {
    requiredEducation: "10+2",
    subjectRequirement: "PCM",
    minimumPercentage: (cat) => (cat === "General" ? 45 : 40),
    applicablePrograms: [
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
    ],
    reason: "Requires 10+2/PUC with Physics, Chemistry & Mathematics (PCM) with minimum 45% (40% for SC/ST/OBC)",
  },
  {
    requiredEducation: "10+2",
    subjectRequirement: "PCB",
    minimumPercentage: (cat) => (cat === "General" ? 45 : 40),
    applicablePrograms: ["B.Sc Nursing", "B.Pharm"],
    reason: "Requires 10+2/PUC with Physics, Chemistry & Biology (PCB) with minimum 45% (40% for SC/ST/OBC)",
  },
  {
    requiredEducation: "10+2",
    subjectRequirement: "Commerce",
    minimumPercentage: (cat) => (cat === "General" ? 50 : 45),
    applicablePrograms: ["BBA", "B.Com General", "B.Com ACCA", "B.Com CA", "B.Com CMA", "BCA"],
    reason: "Requires 10+2 or equivalent with Commerce subjects and minimum 50% marks (45% for SC/ST/OBC)",
  },
  {
    requiredEducation: "10+2",
    subjectRequirement: "Any",
    minimumPercentage: (cat) => (cat === "General" ? 50 : 45),
    applicablePrograms: ["BA Journalism & Mass Communication"],
    reason: "Requires 10+2 or equivalent with minimum 50% marks (45% for SC/ST/OBC)",
  },
  {
    requiredEducation: "10+2",
    subjectRequirement: "Any",
    minimumPercentage: (cat) => (cat === "General" ? 50 : 45),
    applicablePrograms: ["B.A. LL.B", "B.B.A. LL.B", "3 Year LL.B"],
    reason: "Requires 10+2 or equivalent with minimum 50% marks (45% for SC/ST/OBC)",
  },
  {
    requiredEducation: "Bachelor's",
    subjectRequirement: "Any",
    minimumPercentage: (cat) => (cat === "General" ? 50 : 45),
    applicablePrograms: ["MBA", "MCA", "M.Sc Data Science", "M.Sc Basic Sciences"],
    reason: "Requires Bachelor's degree with minimum 50% marks (45% for SC/ST/OBC)",
  },
  {
    requiredEducation: "Bachelor's",
    subjectRequirement: "Engineering",
    minimumPercentage: (cat) => 50,
    applicablePrograms: ["M.Tech CSE", "M.Tech AI & Data Science"],
    reason: "Requires B.Tech in Engineering/CSE with minimum 50% marks",
  },
  {
    requiredEducation: "Law",
    subjectRequirement: "Law",
    minimumPercentage: (cat) => 50,
    applicablePrograms: ["LL.M"],
    reason: "Requires LL.B degree with minimum 50% marks",
  },
  {
    requiredEducation: "Master's",
    subjectRequirement: "Life Sciences",
    minimumPercentage: (cat) => 50,
    applicablePrograms: ["M.Sc Nursing", "M.Sc Biotechnology", "M.Sc Microbiology"],
    reason: "Requires B.Sc in relevant life science subject with minimum 50% marks",
  },
];

export default function EligibilityChecker() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [step, setStep] = useState(1);
  const [education, setEducation] = useState<EducationLevel | "">("");
  const [subjectRequirement, setSubjectRequirement] = useState<SubjectRequirement | "">("");
  const [percentage, setPercentage] = useState("");
  const [category, setCategory] = useState<Category | "">("");
  const [results, setResults] = useState<{ eligible: any[]; notEligible: any[] }>({ eligible: [], notEligible: [] });

  const handleEducationSelect = (edu: EducationLevel) => {
    setEducation(edu);
    setSubjectRequirement("");
    setPercentage("");
    setStep(2);
  };

  const getSubjectOptions = (): { [key in EducationLevel]: { label: string; value: SubjectRequirement }[] } => {
    return {
      "10+2": [
        { label: "Physics, Chemistry, Mathematics (PCM)", value: "PCM" },
        { label: "Physics, Chemistry, Biology (PCB)", value: "PCB" },
        { label: "Commerce Subjects", value: "Commerce" },
        { label: "Arts/Humanities", value: "Arts" },
      ],
      "Bachelor's": [
        { label: "Engineering/CSE", value: "Engineering" },
        { label: "Commerce", value: "Commerce" },
        { label: "Science", value: "Science" },
        { label: "Arts/Humanities", value: "Arts" },
      ],
      "Master's": [
        { label: "Engineering", value: "Engineering" },
        { label: "Science", value: "Science" },
        { label: "Life Sciences", value: "Life Sciences" },
        { label: "Commerce", value: "Commerce" },
      ],
      "Law": [
        { label: "Law", value: "Law" },
      ],
    };
  };

  const handleSubjectsSelect = (sub: SubjectRequirement) => {
    setSubjectRequirement(sub);
    setStep(3);
  };

  const handlePercentageSubmit = () => {
    if (!percentage) return;
    setStep(4);
  };

  const handleCategorySelect = (cat: Category) => {
    setCategory(cat);
    findMatchingPrograms(cat);
    setStep(5);
  };

  const findMatchingPrograms = (selectedCategory: Category) => {
    const eligible: any[] = [];
    const notEligible: any[] = [];

    eligibilityRules.forEach((rule) => {
      const isEducationMatch = rule.requiredEducation === education;
      const isSubjectMatch = rule.subjectRequirement === "Any" || rule.subjectRequirement === subjectRequirement;
      const isPercentageOk = parseFloat(percentage) >= rule.minimumPercentage(selectedCategory);

      const isEligible = isEducationMatch && isSubjectMatch && isPercentageOk;

      rule.applicablePrograms.forEach((program) => {
        const result = {
          program,
          rule,
          isEligible,
          failureReason: getFailureReason(
            isEducationMatch,
            isSubjectMatch,
            isPercentageOk,
            rule.minimumPercentage(selectedCategory)
          ),
        };

        if (isEligible) {
          if (!eligible.find((e) => e.program === program)) {
            eligible.push(result);
          }
        } else {
          if (!notEligible.find((e) => e.program === program)) {
            notEligible.push(result);
          }
        }
      });
    });

    setResults({ eligible, notEligible });
  };

  const getFailureReason = (
    eduMatch: boolean,
    subjectsMatch: boolean,
    percentageOk: boolean,
    required: number
  ): string => {
    const reasons = [];
    if (!eduMatch) reasons.push("Education qualification doesn't match");
    if (!subjectsMatch) reasons.push("Required subjects not matched");
    if (!percentageOk) reasons.push(`Percentage below required minimum (${required}%)`);
    return reasons.join("; ");
  };

  const handleReset = () => {
    setStep(1);
    setEducation("");
    setSubjectRequirement("");
    setPercentage("");
    setCategory("");
    setResults({ eligible: [], notEligible: [] });
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      <HeroSection />
      <section className="px-3 py-8">
        <div className="mx-auto max-w-6xl">
          {step < 5 && (
            <div className="mb-10">
              <div className="flex items-center justify-between">
                {[1, 2, 3, 4].map((stepNum) => (
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
                    {stepNum < 4 && (
                      <div
                        className={`mx-2 h-1 flex-1 rounded-full transition ${
                          step > stepNum ? "bg-orange-500" : "bg-border/40"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 text-xs font-semibold text-foreground/60">
                <div>Education</div>
                <div>Subjects</div>
                <div>Percentage</div>
                <div>Category</div>
              </div>
            </div>
          )}

          {step === 1 && (
            <StepEducation onSelect={handleEducationSelect} />
          )}

          {step === 2 && (
            <StepSubjects
              education={education as EducationLevel}
              onSelect={handleSubjectsSelect}
              subjectOptions={getSubjectOptions()}
              selectedSubject={subjectRequirement as SubjectRequirement | ""}
            />
          )}

          {step === 3 && (
            <StepPercentage
              percentage={percentage}
              onPercentageChange={setPercentage}
              onSubmit={handlePercentageSubmit}
            />
          )}

          {step === 4 && (
            <StepCategory onSelect={handleCategorySelect} />
          )}

          {step === 5 && (
            <StepResults
              results={results}
              education={education as EducationLevel}
              subjectRequirement={subjectRequirement as SubjectRequirement}
              percentage={percentage}
              category={category as Category}
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
          <CheckCircle2 className="h-4 w-4" />
          Eligibility Checker
        </div>
        <h1 className="mt-8 text-4xl font-bold leading-tight md:text-5xl">
          Check Your Eligibility
        </h1>
        <p className="mt-6 text-lg text-foreground md:text-xl">
          Answer 4 simple questions to find programs you're eligible for. Based on actual eligibility requirements, no guessing.
        </p>
      </div>
    </section>
  );
}

type StepEducationProps = {
  onSelect: (edu: EducationLevel) => void;
};

function StepEducation({ onSelect }: StepEducationProps) {
  const educationOptions: { label: string; value: EducationLevel }[] = [
    { label: "10+2 / PUC", value: "10+2" },
    { label: "Bachelor's Degree", value: "Bachelor's" },
    { label: "Master's Degree", value: "Master's" },
    { label: "Bachelor's in Law", value: "Law" },
  ];

  return (
    <Card className="border-2 border-orange-500/20 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/15">
            <GraduationCap className="h-6 w-6 text-orange-500" />
          </div>
          <div>
            <CardTitle className="text-2xl">Step 1: What have you completed?</CardTitle>
            <CardDescription>Select your current education level</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {educationOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onSelect(option.value)}
              className="rounded-xl border-2 border-orange-500/20 bg-card/50 p-6 text-left transition hover:border-orange-500/60 hover:bg-orange-500/5"
            >
              <h3 className="font-semibold text-lg text-foreground">{option.label}</h3>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

type StepSubjectsProps = {
  education: EducationLevel;
  onSelect: (subject: SubjectRequirement) => void;
  subjectOptions: { [key in EducationLevel]: { label: string; value: SubjectRequirement }[] };
  selectedSubject: SubjectRequirement | "";
};

function StepSubjects({ education, onSelect, subjectOptions, selectedSubject }: StepSubjectsProps) {
  const options = subjectOptions[education] || [];

  return (
    <Card className="border-2 border-orange-500/20 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/15">
            <BookOpen className="h-6 w-6 text-orange-500" />
          </div>
          <div>
            <CardTitle className="text-2xl">Step 2: What subjects did you study?</CardTitle>
            <CardDescription>Select the stream/subjects applicable to your education</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => onSelect(option.value)}
              className={`w-full rounded-lg border-2 p-4 text-left transition ${
                selectedSubject === option.value
                  ? "border-orange-500 bg-orange-500/10"
                  : "border-orange-500/20 bg-card/50 hover:border-orange-500/60"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`h-5 w-5 rounded border-2 transition ${
                    selectedSubject === option.value
                      ? "border-orange-500 bg-orange-500"
                      : "border-border/60"
                  }`}
                />
                <span className="font-semibold text-foreground">{option.label}</span>
              </div>
            </button>
          ))}
        </div>

        <Button
          onClick={() => onSelect(selectedSubject as SubjectRequirement)}
          disabled={selectedSubject === ""}
          className="w-full rounded-lg bg-orange-500 py-3 text-white hover:bg-orange-600 disabled:opacity-50"
        >
          Continue
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}

type StepPercentageProps = {
  percentage: string;
  onPercentageChange: (value: string) => void;
  onSubmit: () => void;
};

function StepPercentage({ percentage, onPercentageChange, onSubmit }: StepPercentageProps) {
  const isValid = percentage && parseFloat(percentage) >= 0 && parseFloat(percentage) <= 100;

  return (
    <Card className="border-2 border-orange-500/20 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/15">
            <AlertCircle className="h-6 w-6 text-orange-500" />
          </div>
          <div>
            <CardTitle className="text-2xl">Step 3: Your Percentage/Grade</CardTitle>
            <CardDescription>Enter your overall percentage or CGPA</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <label className="text-sm font-semibold text-foreground">Percentage (%)</label>
          <input
            type="number"
            min="0"
            max="100"
            value={percentage}
            onChange={(e) => onPercentageChange(e.target.value)}
            placeholder="Enter percentage (0-100)"
            className="mt-3 w-full rounded-lg border border-border/60 bg-background px-4 py-3 text-foreground placeholder-foreground/50 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
          />
        </div>

        <Button
          onClick={onSubmit}
          disabled={!isValid}
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
  onSelect: (category: Category) => void;
};

function StepCategory({ onSelect }: StepCategoryProps) {
  return (
    <Card className="border-2 border-orange-500/20 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/15">
            <AlertCircle className="h-6 w-6 text-orange-500" />
          </div>
          <div>
            <CardTitle className="text-2xl">Step 4: Your Category</CardTitle>
            <CardDescription>Select your admission category</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 sm:grid-cols-3">
          {(["General", "SC/ST", "OBC"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className="rounded-xl border-2 border-orange-500/20 bg-card/50 p-6 text-center transition hover:border-orange-500/60 hover:bg-orange-500/5"
            >
              <h3 className="font-semibold text-lg text-foreground">{cat}</h3>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

type StepResultsProps = {
  results: { eligible: any[]; notEligible: any[] };
  education: EducationLevel;
  subjectRequirement: SubjectRequirement;
  percentage: string;
  category: Category;
  onReset: () => void;
};

function StepResults({ results, education, subjectRequirement, percentage, category, onReset }: StepResultsProps) {
  return (
    <div className="space-y-6">
      <Card className="border-2 border-green-500/30 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
        <CardHeader>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
            <div>
              <CardTitle className="text-2xl">Your Eligibility Results</CardTitle>
              <CardDescription>
                {results.eligible.length} eligible · {results.notEligible.length} not eligible
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-sm">
            <div className="rounded-lg bg-background/50 p-3">
              <p className="text-xs text-foreground/60">Education</p>
              <p className="mt-1 font-semibold text-foreground">{education}</p>
            </div>
            <div className="rounded-lg bg-background/50 p-3">
              <p className="text-xs text-foreground/60">Stream/Subject</p>
              <p className="mt-1 font-semibold text-foreground text-xs">{subjectRequirement}</p>
            </div>
            <div className="rounded-lg bg-background/50 p-3">
              <p className="text-xs text-foreground/60">Percentage</p>
              <p className="mt-1 font-semibold text-foreground">{percentage}%</p>
            </div>
            <div className="rounded-lg bg-background/50 p-3">
              <p className="text-xs text-foreground/60">Category</p>
              <p className="mt-1 font-semibold text-foreground">{category}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {results.eligible.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-green-600" />
            You Are Eligible For ({results.eligible.length})
          </h3>
          <div className="space-y-2">
            {results.eligible.map((result, idx) => (
              <Card key={idx} className="border border-green-500/30 bg-green-500/10">
                <CardContent className="pt-4">
                  <p className="font-semibold text-foreground">{result.program}</p>
                  <p className="mt-1 text-xs text-green-700">✓ Meets all eligibility requirements</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {results.notEligible.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
            <XCircle className="h-6 w-6 text-red-600" />
            Not Eligible For ({results.notEligible.length})
          </h3>
          <div className="space-y-2">
            {results.notEligible.map((result, idx) => (
              <Card key={idx} className="border border-red-500/30 bg-red-500/10">
                <CardContent className="pt-4">
                  <p className="font-semibold text-foreground">{result.program}</p>
                  <p className="mt-1 text-xs text-red-700">✗ {result.failureReason}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {results.eligible.length === 0 && results.notEligible.length === 0 && (
        <Card className="border border-border/40 bg-card/50">
          <CardContent className="pt-8 text-center">
            <AlertCircle className="mx-auto h-12 w-12 text-foreground/30 mb-4" />
            <h3 className="font-semibold text-foreground mb-2">No Programs Found</h3>
            <p className="text-sm text-foreground/70">
              No programs match the selected combination. Try adjusting your education or category.
            </p>
          </CardContent>
        </Card>
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          onClick={onReset}
          className="flex-1 rounded-lg bg-orange-500 py-3 text-white hover:bg-orange-600 transition"
        >
          <ArrowRight className="mr-2 h-4 w-4" />
          Check Again
        </Button>
        <Button
          variant="outline"
          className="flex-1 rounded-lg border-orange-500/30 text-orange-500 hover:bg-orange-500/10"
          asChild
        >
          <a href="/eligibility">
            View Full Program Details
            <ChevronRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}
