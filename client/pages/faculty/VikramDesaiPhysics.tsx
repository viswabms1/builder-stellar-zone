import FacultyPageTemplate from "./FacultyPageTemplate";
import { physicsFaculty } from "@/data/physics-faculty";

export default function VikramDesaiPhysicsPage() {
  const faculty = physicsFaculty.find(f => f.slug === "dr-vikram-desai")!;
  return <FacultyPageTemplate faculty={faculty} department="Physics" departmentLink="/academics/physics/faculty" />;
}
