import FacultyPageTemplate from "./FacultyPageTemplate";
import { mechFaculty } from "@/data/mech-faculty";

export default function AbhijithNPage() {
  const faculty = mechFaculty.find(f => f.slug === "abhijith-n")!;
  return <FacultyPageTemplate faculty={faculty} department="Mechanical Engineering" departmentLink="/academics/engineering/mechanical-engineering/faculty" />;
}
