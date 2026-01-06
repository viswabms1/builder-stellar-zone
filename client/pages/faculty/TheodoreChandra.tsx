import FacultyPageTemplate from "./FacultyPageTemplate";
import { eceFaculty } from "@/data/ece-faculty";

export default function TheodoreChandraPage() {
  const faculty = eceFaculty.find(f => f.slug === "dr-theodore-chandra-s")!;
  return <FacultyPageTemplate faculty={faculty} department="Electronics & Communication Engineering" departmentLink="/academics/engineering/electronics-communication/faculty" />;
}
