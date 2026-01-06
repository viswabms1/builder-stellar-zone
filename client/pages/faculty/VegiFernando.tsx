import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function VegiFernandoPage() {
  const faculty = aimlFaculty.find(f => f.slug === "dr-vegi-fernando-a")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
