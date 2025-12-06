import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function SughandhaSaxenaPage() {
  const faculty = aimlFaculty.find(f => f.slug === "dr-sugandha-saxena")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
