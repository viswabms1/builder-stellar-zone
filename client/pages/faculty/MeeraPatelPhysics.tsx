import FacultyPageTemplate from "./FacultyPageTemplate";
import { physicsFaculty } from "@/data/physics-faculty";

export default function MeeraPatelPhysicsPage() {
  const faculty = physicsFaculty.find(f => f.slug === "dr-meera-patel")!;
  return <FacultyPageTemplate faculty={faculty} department="Physics" departmentLink="/academics/physics/faculty" />;
}
