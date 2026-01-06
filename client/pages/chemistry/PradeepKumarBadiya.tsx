import FacultyPageTemplate from "../faculty/FacultyPageTemplate";
import { chemistryFaculty } from "@/data/chemistry-faculty";

export default function PradeepKumarBadiyaPage() {
  const faculty = chemistryFaculty.find(f => f.slug === "dr-pradeep-kumar-badiya")!;
  return <FacultyPageTemplate faculty={{...faculty, interests: faculty.interests || []}} department="Chemistry" departmentLink="/academics/chemistry/faculty" />;
}
