import AerospaceFacultyPageTemplate from "./AerospaceFacultyPageTemplate";
import { aerospaceFaculty } from "@/data/aerospace-faculty";

export default function DrVivekAnand() {
  const faculty = aerospaceFaculty.find(f => f.slug === "dr-vivek-anand")!;
  return <AerospaceFacultyPageTemplate faculty={faculty} />;
}
