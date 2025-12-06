import MechanicalFacultyPageTemplate from "./MechanicalFacultyPageTemplate";
import { mechFaculty } from "@/data/mech-faculty";

export default function SaravanaBavanD() {
  const faculty = mechFaculty.find(f => f.slug === "dr-saravana-bavan-d")!;
  return <MechanicalFacultyPageTemplate faculty={faculty} />;
}
