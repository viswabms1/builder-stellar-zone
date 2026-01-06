import FacultyPageTemplate from "./FacultyPageTemplate";
import { eceFaculty } from "@/data/ece-faculty";

export default function SNPrasadECEPage() {
  const faculty = eceFaculty.find(f => f.slug === "dr-s-n-prasad")!;
  return <FacultyPageTemplate faculty={faculty} department="Electronics & Communication Engineering" departmentLink="/academics/engineering/electronics-communication/faculty" />;
}
