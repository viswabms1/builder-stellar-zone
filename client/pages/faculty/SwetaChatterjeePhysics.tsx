import FacultyPageTemplate from "./FacultyPageTemplate";
import { physicsFaculty } from "@/data/physics-faculty";

export default function SwetaChatterjeePhysicsPage() {
  const faculty = physicsFaculty.find(f => f.slug === "dr-sweta-chatterjee")!;
  return <FacultyPageTemplate faculty={faculty} department="Physics" departmentLink="/academics/physics/faculty" />;
}
