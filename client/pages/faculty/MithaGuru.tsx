import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function MithaGuruPage() {
  const faculty = aimlFaculty.find(f => f.slug === "mrs-mitha-guru")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
