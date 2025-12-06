import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function BahubalSiragapurPage() {
  const faculty = aimlFaculty.find(f => f.slug === "dr-bahubali-shiragapur")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
