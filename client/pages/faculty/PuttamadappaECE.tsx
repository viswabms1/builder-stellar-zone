import FacultyPageTemplate from "./FacultyPageTemplate";
import { eceFaculty } from "@/data/ece-faculty";

export default function PuttamadappaECEPage() {
  const faculty = eceFaculty.find(f => f.slug === "dr-puttamadappa-c")!;
  return <FacultyPageTemplate faculty={faculty} department="Electronics & Communication Engineering" departmentLink="/academics/engineering/electronics-communication/faculty" />;
}
