import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function SmritiBartiPage() {
  const faculty = cseFaculty.find(f => f.slug === "smriti-bharti")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
