import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function ShivnandanRaiPage() {
  const faculty = aimlFaculty.find(f => f.slug === "mr-shivnandan-rai")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
