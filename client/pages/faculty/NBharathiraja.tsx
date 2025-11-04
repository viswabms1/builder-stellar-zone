import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function NBharathirajaPage() {
  const faculty = cseFaculty.find(f => f.slug === "dr-n-bharathiraja")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
