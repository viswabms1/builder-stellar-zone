import FacultyPageTemplate from "./FacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function VegiFernandoPage() {
  const faculty = aimlFaculty.find(f => f.slug === "dr-vegi-fernando-a")!;
  return <FacultyPageTemplate faculty={faculty} department="Computer Science & Engineering (AI & ML)" departmentLink="/academics/engineering/ai-ml/faculty" />;
}
