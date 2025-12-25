import FacultyPageTemplate from "./FacultyPageTemplate";
import { aerospaceFaculty } from "@/data/aerospace-faculty";

export default function DrKartikSTandelPage() {
  const faculty = aerospaceFaculty.find(f => f.slug === "dr-kartik-s-tandel")!;
  return <FacultyPageTemplate faculty={faculty} department="Aerospace Engineering" departmentLink="/academics/engineering/aerospace/faculty" />;
}
