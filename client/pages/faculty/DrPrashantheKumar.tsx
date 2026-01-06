import AerospaceFacultyPageTemplate from "./AerospaceFacultyPageTemplate";
import { aerospaceFaculty } from "@/data/aerospace-faculty";

export default function DrPrashantheKumar() {
  const faculty = aerospaceFaculty.find(f => f.slug === "dr-prashantha-kumar")!;
  return <AerospaceFacultyPageTemplate faculty={faculty} />;
}
