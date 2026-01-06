import FacultyPageTemplate from "./FacultyPageTemplate";
import { chemistryFaculty } from "@/data/chemistry-faculty";

export default function ManjudhKaurPage() {
  const faculty = chemistryFaculty.find(f => f.slug === "dr-manjodh-kaur")!;
  return <FacultyPageTemplate faculty={faculty} department="Chemistry" departmentLink="/academics/chemistry/faculty" />;
}
