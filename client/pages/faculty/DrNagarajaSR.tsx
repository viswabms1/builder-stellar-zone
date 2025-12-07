import AerospaceFacultyPageTemplate from "./AerospaceFacultyPageTemplate";
import { aerospaceFaculty } from "@/data/aerospace-faculty";

export default function DrNagarajaSR() {
  const faculty = aerospaceFaculty.find(f => f.slug === "dr-nagaraja-s-r")!;
  return <AerospaceFacultyPageTemplate faculty={faculty} />;
}
