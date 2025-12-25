import FacultyPageTemplate from "./FacultyPageTemplate";
import { chemistryFaculty } from "@/data/chemistry-faculty";

export default function VenkataramanaNSPage() {
  const faculty = chemistryFaculty.find(f => f.slug === "dr-venkataramanan-n-s")!;
  return <FacultyPageTemplate faculty={faculty} department="Chemistry" departmentLink="/academics/chemistry/faculty" />;
}
