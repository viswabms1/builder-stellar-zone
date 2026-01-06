import AIMLFacultyPageTemplate from "./AIMLFacultyPageTemplate";
import { aimlFaculty } from "@/data/aiml-faculty";

export default function GovindPandeyPage() {
  const faculty = aimlFaculty.find(f => f.slug === "mr-govind-kumar-pandey")!;
  return <AIMLFacultyPageTemplate faculty={faculty} />;
}
