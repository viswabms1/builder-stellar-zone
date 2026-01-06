import FacultyPageTemplate from "./FacultyPageTemplate";
import { aerospaceFaculty } from "@/data/aerospace-faculty";

export default function DrSrinathRamakrishnanPage() {
  const faculty = aerospaceFaculty.find(f => f.slug === "dr-srinath-ramakrishnan")!;
  return <FacultyPageTemplate faculty={faculty} department="Aerospace Engineering" departmentLink="/academics/engineering/aerospace/faculty" />;
}
