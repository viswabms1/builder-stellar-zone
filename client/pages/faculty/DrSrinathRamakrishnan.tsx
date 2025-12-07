import AerospaceFacultyPageTemplate from "./AerospaceFacultyPageTemplate";
import { aerospaceFaculty } from "@/data/aerospace-faculty";

export default function DrSrinathRamakrishnan() {
  const faculty = aerospaceFaculty.find(f => f.slug === "dr-srinath-ramakrishnan")!;
  return <AerospaceFacultyPageTemplate faculty={faculty} />;
}
