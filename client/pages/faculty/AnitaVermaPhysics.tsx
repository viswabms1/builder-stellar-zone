import FacultyPageTemplate from "./FacultyPageTemplate";
import { physicsFaculty } from "@/data/physics-faculty";

export default function AnitaVermaPhysicsPage() {
  const faculty = physicsFaculty.find(f => f.slug === "dr-anita-verma")!;
  return <FacultyPageTemplate faculty={faculty} department="Physics" departmentLink="/academics/physics/faculty" />;
}
