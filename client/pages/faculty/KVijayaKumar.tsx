import FacultyPageTemplate from "./FacultyPageTemplate";
import { physicsFaculty } from "@/data/physics-faculty";

export default function KVijayaKumarPage() {
  const faculty = physicsFaculty.find(f => f.slug === "dr-k-vijaya-kumar")!;
  return <FacultyPageTemplate faculty={faculty} department="Physics" departmentLink="/academics/physics/faculty" />;
}
