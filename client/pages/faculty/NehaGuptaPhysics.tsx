import FacultyPageTemplate from "./FacultyPageTemplate";
import { physicsFaculty } from "@/data/physics-faculty";

export default function NehaGuptaPhysicsPage() {
  const faculty = physicsFaculty.find(f => f.slug === "dr-neha-gupta")!;
  return <FacultyPageTemplate faculty={faculty} department="Physics" departmentLink="/academics/physics/faculty" />;
}
