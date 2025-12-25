import FacultyPageTemplate from "./FacultyPageTemplate";
import { physicsFaculty } from "@/data/physics-faculty";

export default function PriyaSharmaPhysicsPage() {
  const faculty = physicsFaculty.find(f => f.slug === "dr-priya-sharma")!;
  return <FacultyPageTemplate faculty={faculty} department="Physics" departmentLink="/academics/physics/faculty" />;
}
