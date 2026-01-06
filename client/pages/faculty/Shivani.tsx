import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function ShivaniPage() {
  const faculty = cseFaculty.find(f => f.slug === "shivani")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
