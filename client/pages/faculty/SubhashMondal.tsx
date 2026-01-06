import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function SubhashMondalPage() {
  const faculty = aimlFaculty.find(f => f.slug === "mr-subhash-mondal")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
