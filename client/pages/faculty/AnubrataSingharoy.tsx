import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function AnubrataSingharyPage() {
  const faculty = aimlFaculty.find(f => f.slug === "mr-anubrata-singharoy")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
