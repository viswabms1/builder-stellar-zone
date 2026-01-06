import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function MohammedJavaidPage() {
  const faculty = cseFaculty.find(f => f.slug === "mohammed-javaid")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
