import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function SriramkumarAIMLPage() {
  const faculty = aimlFaculty.find(f => f.slug === "mr-r-sriramkumar")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
