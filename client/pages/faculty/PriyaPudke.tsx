import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function PriyaPudkePage() {
  const faculty = cseFaculty.find(f => f.slug === "priya-pudke")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
