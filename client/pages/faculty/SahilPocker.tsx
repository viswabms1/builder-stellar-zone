import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function SahilPockerPage() {
  const faculty = aimlFaculty.find(f => f.slug === "mr-sahil-pocker")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
