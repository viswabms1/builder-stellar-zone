import FacultyPageTemplate from "./FacultyPageTemplate";
import { mechFaculty } from "@/data/mech-faculty";

export default function ViswanathanRMechPage() {
  const faculty = mechFaculty.find(f => f.slug === "dr-viswanathan-r")!;
  return <FacultyPageTemplate faculty={faculty} department="Mechanical Engineering" departmentLink="/academics/engineering/mechanical-engineering/faculty" />;
}
