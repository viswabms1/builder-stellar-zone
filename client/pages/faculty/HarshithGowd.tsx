import AIIDSFacultyPageTemplate from "./AIIDSFacultyPageTemplate";
import { aidsFaculty } from "@/data/ai-ds-faculty";

export default function HarshithGowd() {
  const faculty = aidsFaculty.find(f => f.slug === "prof-nadavadi-harshith-gowd")!;
  return <AIIDSFacultyPageTemplate faculty={faculty} />;
}
