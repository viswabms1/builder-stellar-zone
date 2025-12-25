import FacultyPageTemplate from "./FacultyPageTemplate";
import { airFaculty } from "@/data/air-faculty";

export default function MrLalitAshutoshPage() {
  const faculty = airFaculty.find(f => f.slug === "mr-lalit-ashutosh")!;
  return <FacultyPageTemplate faculty={faculty} department="AI and Robotics" departmentLink="/academics/engineering/ai-robotics/faculty" />;
}
