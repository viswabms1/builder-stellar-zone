import FacultyPageTemplate from "../faculty/FacultyPageTemplate";
import { chemistryFaculty } from "@/data/chemistry-faculty";

export default function SaiPrasadNayakPage() {
  const faculty = chemistryFaculty.find(f => f.slug === "dr-sai-prasad-nayak")!;
  return <FacultyPageTemplate faculty={{...faculty, interests: faculty.interests || []}} department="Chemistry" departmentLink="/academics/chemistry/faculty" />;
}
