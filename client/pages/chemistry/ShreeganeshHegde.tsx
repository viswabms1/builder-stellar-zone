import FacultyPageTemplate from "../faculty/FacultyPageTemplate";
import { chemistryFaculty } from "@/data/chemistry-faculty";

export default function ShreeganeshHegdePage() {
  const faculty = chemistryFaculty.find(f => f.slug === "dr-shreeganesh-subraya-hegde")!;
  return <FacultyPageTemplate faculty={{...faculty, interests: faculty.interests || []}} department="Chemistry" departmentLink="/academics/chemistry/faculty" />;
}
