import MechanicalFacultyPageTemplate from "./MechanicalFacultyPageTemplate";
import { mechFaculty } from "@/data/mech-faculty";

export default function RahulKumarMech() {
  const faculty = mechFaculty.find(f => f.slug === "dr-rahul-kumar")!;
  return <MechanicalFacultyPageTemplate faculty={faculty} />;
}
