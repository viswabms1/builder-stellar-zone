import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function SumantMohaptraPage() {
  const faculty = aimlFaculty.find(f => f.slug === "dr-sumant-kumar-mohapatra")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
