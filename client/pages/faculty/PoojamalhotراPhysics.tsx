import FacultyPageTemplate from "./FacultyPageTemplate";
import { physicsFaculty } from "@/data/physics-faculty";

export default function PoojamalhotPhysicsPage() {
  const faculty = physicsFaculty.find(f => f.slug === "dr-pooja-malhotra")!;
  return <FacultyPageTemplate faculty={faculty} department="Physics" departmentLink="/academics/physics/faculty" />;
}
