import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function BonduVenkateswarluPage() {
  const faculty = cseFaculty.find(f => f.slug === "dr-bondu-venkateswarlu")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
