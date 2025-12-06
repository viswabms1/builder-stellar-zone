import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function NagarjunaNaikPage() {
  const faculty = aimlFaculty.find(f => f.slug === "dr-mude-nagarjuna-naik")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
