import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function SoheliChakrabortyPage() {
  const faculty = aimlFaculty.find(f => f.slug === "ms-soheli-chakraborty")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
