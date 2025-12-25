import FacultyPageTemplate from "./FacultyPageTemplate";
import { aerospaceFaculty } from "@/data/aerospace-faculty";

export default function MsSwagatikaPage() {
  const faculty = aerospaceFaculty.find(f => f.slug === "ms-swagatika")!;
  return <FacultyPageTemplate faculty={faculty} department="Aerospace Engineering" departmentLink="/academics/engineering/aerospace/faculty" />;
}
