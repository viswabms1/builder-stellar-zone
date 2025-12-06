import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function SureshKandasamyPage() {
  const faculty = aimlFaculty.find(f => f.slug === "prof-suresh-kandasamy")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
