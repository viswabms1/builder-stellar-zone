import FacultyPageTemplate from "./FacultyPageTemplate";
import { aerospaceFaculty } from "@/data/aerospace-faculty";

export default function DrGKSuryanarayanaPage() {
  const faculty = aerospaceFaculty.find(f => f.slug === "dr-g-k-suryanarayana")!;
  return <FacultyPageTemplate faculty={faculty} department="Aerospace Engineering" departmentLink="/academics/engineering/aerospace/faculty" />;
}
