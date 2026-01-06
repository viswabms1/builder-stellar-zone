import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function HanumannthSastryPage() {
  const faculty = aimlFaculty.find(f => f.slug === "dr-hanumanth-sastry-sistla")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
