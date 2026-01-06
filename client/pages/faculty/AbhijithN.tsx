import MechanicalFacultyPageTemplate from "./MechanicalFacultyPageTemplate";
import { mechFaculty } from "@/data/mech-faculty";

export default function AbhijithN() {
  const faculty = mechFaculty.find(f => f.slug === "abhijith-n")!;
  return <MechanicalFacultyPageTemplate faculty={faculty} />;
}
