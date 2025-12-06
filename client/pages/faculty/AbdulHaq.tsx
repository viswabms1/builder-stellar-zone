import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function AbdulHaqPage() {
  const faculty = aimlFaculty.find(f => f.slug === "dr-abdul-haq-nalband")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
