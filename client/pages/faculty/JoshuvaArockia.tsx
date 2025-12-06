import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function JoshuvaArockiaPage() {
  const faculty = aimlFaculty.find(f => f.slug === "dr-joshuva-arockia-dhanraj")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
