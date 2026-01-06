import FacultyPageTemplate from "../faculty/FacultyPageTemplate";
import { chemistryFaculty } from "@/data/chemistry-faculty";

export default function SrinivasaMurthyPage() {
  const faculty = chemistryFaculty.find(f => f.slug === "dr-v-srinivasa-murthy")!;
  return <FacultyPageTemplate faculty={{...faculty, interests: faculty.interests || []}} department="Chemistry" departmentLink="/academics/chemistry/faculty" />;
}
