import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function SrinidhiAIMLPage() {
  const faculty = aimlFaculty.find(f => f.slug === "prof-kuna-srinidhi")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
