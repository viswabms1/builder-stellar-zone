import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function PrincyRandhawPage() {
  const faculty = aimlFaculty.find(f => f.slug === "dr-princy-randhawa")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
