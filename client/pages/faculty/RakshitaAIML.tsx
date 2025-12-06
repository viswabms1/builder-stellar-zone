import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function RakshitaAIMLPage() {
  const faculty = aimlFaculty.find(f => f.slug === "rakshita-r")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
