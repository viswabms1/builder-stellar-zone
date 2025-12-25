import FacultyPageTemplate from "./FacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function JayavrindasVrindavanamdPage() {
  const faculty = aimlFaculty.find(f => f.slug === "dr-jayavrinda-vrindavanam-v")!;
  return <FacultyPageTemplate faculty={faculty} department="Computer Science & Engineering (AI & ML)" departmentLink="/academics/engineering/ai-ml/faculty" />;
}
