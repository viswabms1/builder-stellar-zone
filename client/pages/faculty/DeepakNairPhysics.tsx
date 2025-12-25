import FacultyPageTemplate from "./FacultyPageTemplate";
import { physicsFaculty } from "@/data/physics-faculty";

export default function DeepakNairPhysicsPage() {
  const faculty = physicsFaculty.find(f => f.slug === "dr-deepak-nair")!;
  return <FacultyPageTemplate faculty={faculty} department="Physics" departmentLink="/academics/physics/faculty" />;
}
