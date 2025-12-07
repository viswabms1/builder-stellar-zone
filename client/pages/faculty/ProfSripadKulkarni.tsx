import AerospaceFacultyPageTemplate from "./AerospaceFacultyPageTemplate";
import { aerospaceFaculty } from "@/data/aerospace-faculty";

export default function ProfSripadKulkarni() {
  const faculty = aerospaceFaculty.find(f => f.slug === "prof-sripad-kulkarni")!;
  return <AerospaceFacultyPageTemplate faculty={faculty} />;
}
