import FacultyPageTemplate from "./FacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function ArpitKumarPage() {
  const faculty = aimlFaculty.find(f => f.slug === "mr-arpit-kumar")!;
  return <FacultyPageTemplate faculty={faculty} department="Computer Science & Engineering (AI & ML)" departmentLink="/academics/engineering/ai-ml/faculty" />;
}
