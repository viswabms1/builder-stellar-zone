import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function SouvikGhoshPage() {
  const faculty = aimlFaculty.find(f => f.slug === "mr-souvik-ghosh")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
