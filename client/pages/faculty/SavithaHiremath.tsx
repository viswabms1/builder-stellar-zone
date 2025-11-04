import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function SavithaHiremathPage() {
  const faculty = cseFaculty.find(f => f.slug === "dr-savitha-hiremath")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
