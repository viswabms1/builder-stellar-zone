import AerospaceFacultyPageTemplate from "./AerospaceFacultyPageTemplate";
import { aerospaceFaculty } from "@/data/aerospace-faculty";

export default function DrGKSuryanarayana() {
  const faculty = aerospaceFaculty.find(f => f.slug === "dr-g-k-suryanarayana")!;
  return <AerospaceFacultyPageTemplate faculty={faculty} />;
}
