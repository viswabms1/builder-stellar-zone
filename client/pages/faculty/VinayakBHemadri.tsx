import MechanicalFacultyPageTemplate from "./MechanicalFacultyPageTemplate";
import { mechFaculty } from "@/data/mech-faculty";

export default function VinayakBHemadri() {
  const faculty = mechFaculty.find(f => f.slug === "dr-vinayak-b-hemadri")!;
  return <MechanicalFacultyPageTemplate faculty={faculty} />;
}
