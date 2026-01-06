import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function NiveithaAIMLPage() {
  const faculty = aimlFaculty.find(f => f.slug === "ms-nivetha-r")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
