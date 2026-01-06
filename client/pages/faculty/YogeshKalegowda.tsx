import FacultyPageTemplate from "./FacultyPageTemplate";
import { physicsFaculty } from "@/data/physics-faculty";

export default function YogeshKalegowdaPage() {
  const faculty = physicsFaculty.find(f => f.slug === "dr-yogesh-kalegowda")!;
  return <FacultyPageTemplate faculty={faculty} department="Physics" departmentLink="/academics/physics/faculty" />;
}
