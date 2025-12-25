import FacultyPageTemplate from "./FacultyPageTemplate";
import { airFaculty } from "@/data/air-faculty";

export default function MrVikasVishwakarmaPage() {
  const faculty = airFaculty.find(f => f.slug === "mr-vikas-vishwakarma")!;
  return <FacultyPageTemplate faculty={faculty} department="AI and Robotics" departmentLink="/academics/engineering/ai-robotics/faculty" />;
}
