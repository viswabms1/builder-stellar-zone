import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function TejalKhadePage() {
  const faculty = aimlFaculty.find(f => f.slug === "ms-tejal-khade")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
