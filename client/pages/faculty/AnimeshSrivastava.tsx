import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function AnimeshSrivastavPage() {
  const faculty = aimlFaculty.find(f => f.slug === "dr-animesh-srivastava")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
