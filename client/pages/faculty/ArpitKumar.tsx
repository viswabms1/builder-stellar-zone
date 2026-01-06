import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function ArpitKumarPage() {
  const faculty = aimlFaculty.find(f => f.slug === "mr-arpit-kumar")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
