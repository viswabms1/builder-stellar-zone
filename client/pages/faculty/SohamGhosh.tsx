import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function SohamGhoshPage() {
  const faculty = cseFaculty.find(f => f.slug === "soham-ghosh")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
