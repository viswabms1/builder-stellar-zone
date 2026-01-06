import MechanicalFacultyPageTemplate from "./MechanicalFacultyPageTemplate";
import { mechFaculty } from "@/data/mech-faculty";

export default function ViswanathanRMech() {
  const faculty = mechFaculty.find(f => f.slug === "dr-viswanathan-r")!;
  return <MechanicalFacultyPageTemplate faculty={faculty} />;
}
