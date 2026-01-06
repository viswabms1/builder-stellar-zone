import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function LakshmananPage() {
  const faculty = aimlFaculty.find(f => f.slug === "dr-m-lakshmanan")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
