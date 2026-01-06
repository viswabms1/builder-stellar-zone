import FacultyPageTemplate from "./FacultyPageTemplate";
import { eceFaculty } from "@/data/ece-faculty";

export default function ArunBalodiPage() {
  const faculty = eceFaculty.find(f => f.slug === "dr-arun-balodi")!;
  return <FacultyPageTemplate faculty={faculty} department="Electronics & Communication Engineering" departmentLink="/academics/engineering/electronics-communication/faculty" />;
}
