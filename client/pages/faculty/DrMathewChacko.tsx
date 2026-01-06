import AerospaceFacultyPageTemplate from "./AerospaceFacultyPageTemplate";
import { aerospaceFaculty } from "@/data/aerospace-faculty";

export default function DrMathewChacko() {
  const faculty = aerospaceFaculty.find(f => f.slug === "dr-mathew-chacko")!;
  return <AerospaceFacultyPageTemplate faculty={faculty} />;
}
