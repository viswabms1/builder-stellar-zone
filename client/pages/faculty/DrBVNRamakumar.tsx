import FacultyPageTemplate from "./FacultyPageTemplate";
import { aerospaceFaculty } from "@/data/aerospace-faculty";

export default function DrBVNRamakumarPage() {
  const faculty = aerospaceFaculty.find(f => f.slug === "dr-b-v-n-ramakumar")!;
  return <FacultyPageTemplate faculty={faculty} department="Aerospace Engineering" departmentLink="/academics/engineering/aerospace/faculty" />;
}
