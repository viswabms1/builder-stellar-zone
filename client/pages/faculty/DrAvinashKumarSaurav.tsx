import FacultyPageTemplate from "./FacultyPageTemplate";
import { aerospaceFaculty } from "@/data/aerospace-faculty";

export default function DrAvinashKumarSauravPage() {
  const faculty = aerospaceFaculty.find(f => f.slug === "dr-avinash-kumar-saurav")!;
  return <FacultyPageTemplate faculty={faculty} department="Aerospace Engineering" departmentLink="/academics/engineering/aerospace/faculty" />;
}
