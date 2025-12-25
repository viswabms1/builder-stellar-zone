import FacultyPageTemplate from "./FacultyPageTemplate";
import { chemistryFaculty } from "@/data/chemistry-faculty";

export default function ShreeganeshSubrayaHegdePage() {
  const faculty = chemistryFaculty.find(f => f.slug === "dr-shreeganesh-subraya-hegde")!;
  return <FacultyPageTemplate faculty={faculty} department="Chemistry" departmentLink="/academics/chemistry/faculty" />;
}
