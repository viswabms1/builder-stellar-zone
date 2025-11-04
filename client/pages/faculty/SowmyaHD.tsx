import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function SowmyaHDPage() {
  const faculty = cseFaculty.find(f => f.slug === "sowmya-h-d")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
