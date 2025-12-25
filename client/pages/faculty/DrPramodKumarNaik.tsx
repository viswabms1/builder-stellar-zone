import FacultyPageTemplate from "./FacultyPageTemplate";
import { airFaculty } from "@/data/air-faculty";

export default function DrPramodKumarNaikPage() {
  const faculty = airFaculty.find(f => f.slug === "dr-pramod-kumar-naik")!;
  return <FacultyPageTemplate faculty={faculty} department="AI and Robotics" departmentLink="/academics/engineering/ai-robotics/faculty" />;
}
