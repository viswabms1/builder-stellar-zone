import AerospaceFacultyPageTemplate from "./AerospaceFacultyPageTemplate";
import { aerospaceFaculty } from "@/data/aerospace-faculty";

export default function DrKartikSTandel() {
  const faculty = aerospaceFaculty.find(f => f.slug === "dr-kartik-s-tandel")!;
  return <AerospaceFacultyPageTemplate faculty={faculty} />;
}
