import FacultyPageTemplate from "./FacultyPageTemplate";
import { chemistryFaculty } from "@/data/chemistry-faculty";

export default function DipenBiswakarmaPage() {
  const faculty = chemistryFaculty.find(f => f.slug === "dr-dipen-biswakarma")!;
  return <FacultyPageTemplate faculty={faculty} department="Chemistry" departmentLink="/academics/chemistry/faculty" />;
}
