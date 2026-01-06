import FacultyPageTemplate from "./FacultyPageTemplate";
import { physicsFaculty } from "@/data/physics-faculty";

export default function RajeshKumarPhysicsPage() {
  const faculty = physicsFaculty.find(f => f.slug === "dr-rajesh-kumar")!;
  return <FacultyPageTemplate faculty={faculty} department="Physics" departmentLink="/academics/physics/faculty" />;
}
