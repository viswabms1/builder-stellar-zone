import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function RevathiVPage() {
  const faculty = cseFaculty.find(f => f.slug === "dr-revathi-v")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
