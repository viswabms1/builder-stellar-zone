import FacultyPageTemplate from "./FacultyPageTemplate";
import { aerospaceFaculty } from "@/data/aerospace-faculty";

export default function DrVivekAnandPage() {
  const faculty = aerospaceFaculty.find(f => f.slug === "dr-vivek-anand")!;
  return <FacultyPageTemplate faculty={faculty} department="Aerospace Engineering" departmentLink="/academics/engineering/aerospace/faculty" />;
}
