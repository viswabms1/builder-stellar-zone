import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function HairunesaBeeviPage() {
  const faculty = aimlFaculty.find(f => f.slug === "ms-hairunesa-beevi")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
