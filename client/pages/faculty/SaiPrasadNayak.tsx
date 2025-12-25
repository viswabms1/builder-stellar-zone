import FacultyPageTemplate from "./FacultyPageTemplate";
import { chemistryFaculty } from "@/data/chemistry-faculty";

export default function SaiPrasadNayakPage() {
  const faculty = chemistryFaculty.find(f => f.slug === "dr-sai-prasad-nayak")!;
  return <FacultyPageTemplate faculty={faculty} department="Chemistry" departmentLink="/academics/chemistry/faculty" />;
}
