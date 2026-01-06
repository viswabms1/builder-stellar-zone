import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function BhuvanaMohiniPage() {
  const faculty = aimlFaculty.find(f => f.slug === "ms-bhuvana-mohini-t-n")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
