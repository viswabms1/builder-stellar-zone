import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function BasavarajNHiremathPage() {
  const faculty = cseFaculty.find(f => f.slug === "dr-basavaraj-n-hiremath")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
