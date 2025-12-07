import AIRoboticsFacultyPageTemplate from "./AIRoboticsFacultyPageTemplate";
import { airFaculty } from "@/data/air-faculty";

export default function DrBharathKumarS() {
  const faculty = airFaculty.find(f => f.slug === "dr-bharath-kumar-s")!;
  return <AIRoboticsFacultyPageTemplate faculty={faculty} />;
}
