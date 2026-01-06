import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function TrinadhSingampalliPage() {
  const faculty = cseFaculty.find(f => f.slug === "trinadh-singampalli")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
