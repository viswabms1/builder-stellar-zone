import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function PrateekVermaPage() {
  const faculty = aimlFaculty.find(f => f.slug === "dr-prateek-verma")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
