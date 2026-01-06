import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function VinuthaAIMLPage() {
  const faculty = aimlFaculty.find(f => f.slug === "dr-vinutha-n")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
