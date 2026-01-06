import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function GeorgeFernandezPage() {
  const faculty = cseFaculty.find(f => f.slug === "dr-george-fernandez-i")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
