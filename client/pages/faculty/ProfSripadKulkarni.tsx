import FacultyPageTemplate from "./FacultyPageTemplate";
import { aerospaceFaculty } from "@/data/aerospace-faculty";

export default function ProfSripadKulkarniPage() {
  const faculty = aerospaceFaculty.find(f => f.slug === "prof-sripad-kulkarni")!;
  return <FacultyPageTemplate faculty={faculty} department="Aerospace Engineering" departmentLink="/academics/engineering/aerospace/faculty" />;
}
