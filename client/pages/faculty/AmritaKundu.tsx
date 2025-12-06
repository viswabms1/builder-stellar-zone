import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function AmritaKunduPage() {
  const faculty = aimlFaculty.find(f => f.slug === "ms-amrita-kundu")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
