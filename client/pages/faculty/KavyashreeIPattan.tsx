import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function KavyashreeIPattanPage() {
  const faculty = cseFaculty.find(f => f.slug === "kavyashree-i-pattan")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
