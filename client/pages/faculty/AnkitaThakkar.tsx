import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function AnkitaThakkarPage() {
  const faculty = aimlFaculty.find(f => f.slug === "prof-ankita-thakkar")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
