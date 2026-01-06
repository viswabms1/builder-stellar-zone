import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function JitendraJaiswalPage() {
  const faculty = aimlFaculty.find(f => f.slug === "dr-jitendra-jaiswal")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
