import AerospaceFacultyPageTemplate from "./AerospaceFacultyPageTemplate";
import { aerospaceFaculty } from "@/data/aerospace-faculty";

export default function DrAjeySingh() {
  const faculty = aerospaceFaculty.find(f => f.slug === "dr-ajey-singh")!;
  return <AerospaceFacultyPageTemplate faculty={faculty} />;
}
