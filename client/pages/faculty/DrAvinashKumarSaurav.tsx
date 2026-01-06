import AerospaceFacultyPageTemplate from "./AerospaceFacultyPageTemplate";
import { aerospaceFaculty } from "@/data/aerospace-faculty";

export default function DrAvinashKumarSaurav() {
  const faculty = aerospaceFaculty.find(f => f.slug === "dr-avinash-kumar-saurav")!;
  return <AerospaceFacultyPageTemplate faculty={faculty} />;
}
