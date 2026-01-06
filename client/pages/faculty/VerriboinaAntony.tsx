import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function VerriboinaAntonyPage() {
  const faculty = aimlFaculty.find(f => f.slug === "mr-verriboina-antony")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
