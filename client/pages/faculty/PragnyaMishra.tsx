import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function PragnyaMishaPage() {
  const faculty = aimlFaculty.find(f => f.slug === "ms-pragnya-pragatika-mishra")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
