import FacultyPageTemplate from "./FacultyPageTemplate";
import { chemistryFaculty } from "@/data/chemistry-faculty";

export default function ManasBaraiPage() {
  const faculty = chemistryFaculty.find(f => f.slug === "dr-manas-barai")!;
  return <FacultyPageTemplate faculty={faculty} department="Chemistry" departmentLink="/academics/chemistry/faculty" />;
}
