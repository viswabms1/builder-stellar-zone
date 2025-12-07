import AerospaceFacultyPageTemplate from "./AerospaceFacultyPageTemplate";
import { aerospaceFaculty } from "@/data/aerospace-faculty";

export default function DrBVNRamakumar() {
  const faculty = aerospaceFaculty.find(f => f.slug === "dr-b-v-n-ramakumar")!;
  return <AerospaceFacultyPageTemplate faculty={faculty} />;
}
