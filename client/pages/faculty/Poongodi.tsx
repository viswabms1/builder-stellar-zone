import AIIDSFacultyPageTemplate from "./AIIDSFacultyPageTemplate";
import { aidsFaculty } from "@/data/ai-ds-faculty";

export default function Poongodi() {
  const faculty = aidsFaculty.find(f => f.slug === "dr-poongodi-t")!;
  return <AIIDSFacultyPageTemplate faculty={faculty} />;
}
