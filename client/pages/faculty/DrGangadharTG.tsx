import FacultyPageTemplate from "./FacultyPageTemplate";
import { airFaculty } from "@/data/air-faculty";

export default function DrGangadharTGPage() {
  const faculty = airFaculty.find(f => f.slug === "dr-gangadhar-t-g")!;
  return <FacultyPageTemplate faculty={faculty} department="AI and Robotics" departmentLink="/academics/engineering/ai-robotics/faculty" />;
}
