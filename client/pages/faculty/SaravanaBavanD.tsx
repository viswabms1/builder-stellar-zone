import FacultyPageTemplate from "./FacultyPageTemplate";
import { mechFaculty } from "@/data/mech-faculty";

export default function SaravanaBavanDPage() {
  const faculty = mechFaculty.find(f => f.slug === "dr-saravana-bavan-d")!;
  return <FacultyPageTemplate faculty={faculty} department="Mechanical Engineering" departmentLink="/academics/engineering/mechanical-engineering/faculty" />;
}
