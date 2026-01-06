import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function RajeswariPage() {
  const faculty = aimlFaculty.find(f => f.slug === "dr-svkr-rajeswari")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
