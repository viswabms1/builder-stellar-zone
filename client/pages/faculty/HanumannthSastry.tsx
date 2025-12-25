import FacultyPageTemplate from "./FacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function HanumannthSastryPage() {
  const faculty = aimlFaculty.find(f => f.slug === "dr-hanumanth-sastry-sistla")!;
  return <FacultyPageTemplate faculty={faculty} department="Computer Science & Engineering (AI & ML)" departmentLink="/academics/engineering/ai-ml/faculty" />;
}
