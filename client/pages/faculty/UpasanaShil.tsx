import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function UpasanaShilPage() {
  const faculty = aimlFaculty.find(f => f.slug === "ms-upasana-shil")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
