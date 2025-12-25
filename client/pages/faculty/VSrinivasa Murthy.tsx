import FacultyPageTemplate from "./FacultyPageTemplate";
import { chemistryFaculty } from "@/data/chemistry-faculty";

export default function VSrinivasaMurthyPage() {
  const faculty = chemistryFaculty.find(f => f.slug === "dr-v-srinivasa-murthy")!;
  return <FacultyPageTemplate faculty={faculty} department="Chemistry" departmentLink="/academics/chemistry/faculty" />;
}
