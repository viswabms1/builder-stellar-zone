import FacultyPageTemplate from "./FacultyPageTemplate";
import { mechFaculty } from "@/data/mech-faculty";

export default function VinayakBHemadriPage() {
  const faculty = mechFaculty.find(f => f.slug === "dr-vinayak-b-hemadri")!;
  return <FacultyPageTemplate faculty={faculty} department="Mechanical Engineering" departmentLink="/academics/engineering/mechanical-engineering/faculty" />;
}
