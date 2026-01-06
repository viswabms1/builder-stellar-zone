import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function JeevaSPage() {
  const faculty = cseFaculty.find(f => f.slug === "dr-jeeva-s")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
