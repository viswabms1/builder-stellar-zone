import FacultyPageTemplate from "./FacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function JoshuvaArockiaPage() {
  const faculty = aimlFaculty.find(f => f.slug === "dr-joshuva-arockia-dhanraj")!;
  return <FacultyPageTemplate faculty={faculty} department="Computer Science & Engineering (AI & ML)" departmentLink="/academics/engineering/ai-ml/faculty" />;
}
