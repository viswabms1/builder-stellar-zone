import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function TrupthiRaoPage() {
  const faculty = aimlFaculty.find(f => f.slug === "prof-trupthi-rao")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
