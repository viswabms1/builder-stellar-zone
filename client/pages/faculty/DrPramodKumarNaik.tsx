import AIRoboticsFacultyPageTemplate from "./AIRoboticsFacultyPageTemplate";
import { airFaculty } from "@/data/air-faculty";

export default function DrPramodKumarNaik() {
  const faculty = airFaculty.find(f => f.slug === "dr-pramod-kumar-naik")!;
  return <AIRoboticsFacultyPageTemplate faculty={faculty} />;
}
