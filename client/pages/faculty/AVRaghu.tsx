import FacultyPageTemplate from "./FacultyPageTemplate";
import { chemistryFaculty } from "@/data/chemistry-faculty";

export default function AVRaghuPage() {
  const faculty = chemistryFaculty.find(f => f.slug === "dr-a-v-raghu")!;
  return <FacultyPageTemplate faculty={faculty} department="Chemistry" departmentLink="/academics/chemistry/faculty" />;
}
