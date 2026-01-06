import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function PradeepKumarAIMLPage() {
  const faculty = aimlFaculty.find(f => f.slug === "mr-pradeep-kumar-k")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
