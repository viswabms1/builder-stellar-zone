import FacultyPageTemplate from "./FacultyPageTemplate";
import { airFaculty } from "@/data/air-faculty";

export default function DrRupamBhaduriPage() {
  const faculty = airFaculty.find(f => f.slug === "dr-rupam-bhaduri")!;
  return <FacultyPageTemplate faculty={faculty} department="AI and Robotics" departmentLink="/academics/engineering/ai-robotics/faculty" />;
}
