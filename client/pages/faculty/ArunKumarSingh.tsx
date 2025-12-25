import FacultyPageTemplate from "./FacultyPageTemplate";
import { physicsFaculty } from "@/data/physics-faculty";

export default function ArunKumarSinghPage() {
  const faculty = physicsFaculty.find(f => f.slug === "dr-arun-kumar-singh")!;
  return <FacultyPageTemplate faculty={faculty} department="Physics" departmentLink="/academics/physics/faculty" />;
}
