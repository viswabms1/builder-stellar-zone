import FacultyPageTemplate from "./FacultyPageTemplate";
import { mechFaculty } from "@/data/mech-faculty";

export default function RahulKumarMechPage() {
  const faculty = mechFaculty.find(f => f.slug === "dr-rahul-kumar")!;
  return <FacultyPageTemplate faculty={faculty} department="Mechanical Engineering" departmentLink="/academics/engineering/mechanical-engineering/faculty" />;
}
