import FacultyPageTemplate from "./FacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function VerriboinaAntonyPage() {
  const faculty = aimlFaculty.find(f => f.slug === "mr-verriboina-antony")!;
  return <FacultyPageTemplate faculty={faculty} department="Computer Science & Engineering (AI & ML)" departmentLink="/academics/engineering/ai-ml/faculty" />;
}
