import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function JayavrindasVrindavnamPage() {
  const faculty = aimlFaculty.find(f => f.slug === "dr-jayavrinda-vrindavanam-v")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
