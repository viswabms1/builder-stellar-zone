import AerospaceFacultyPageTemplate from "./AerospaceFacultyPageTemplate";
import { aerospaceFaculty } from "@/data/aerospace-faculty";

export default function MsSwagatika() {
  const faculty = aerospaceFaculty.find(f => f.slug === "ms-swagatika")!;
  return <AerospaceFacultyPageTemplate faculty={faculty} />;
}
