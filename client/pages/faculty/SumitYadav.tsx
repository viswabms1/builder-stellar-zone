import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function SumitYadavPage() {
  const faculty = aimlFaculty.find(f => f.slug === "dr-sumit-kumar-yadav")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
