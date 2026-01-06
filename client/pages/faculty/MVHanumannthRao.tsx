import FacultyPageTemplate from "./FacultyPageTemplate";
import { physicsFaculty } from "@/data/physics-faculty";

export default function MVHanumannthRaoPage() {
  const faculty = physicsFaculty.find(f => f.slug === "dr-m-v-hanumantha-rao")!;
  return <FacultyPageTemplate faculty={faculty} department="Physics" departmentLink="/academics/physics/faculty" />;
}
