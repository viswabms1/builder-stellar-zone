import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function ParthaSenPage() {
  const faculty = aimlFaculty.find(f => f.slug === "mr-partha-protim-sen")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
