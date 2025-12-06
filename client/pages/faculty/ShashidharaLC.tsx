import MechanicalFacultyPageTemplate from "./MechanicalFacultyPageTemplate";
import { mechFaculty } from "@/data/mech-faculty";

export default function ShashidharaLC() {
  const faculty = mechFaculty.find(f => f.slug === "dr-shashidhara-l-c")!;
  return <MechanicalFacultyPageTemplate faculty={faculty} />;
}
