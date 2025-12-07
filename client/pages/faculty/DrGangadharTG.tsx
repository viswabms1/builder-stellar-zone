import AIRoboticsFacultyPageTemplate from "./AIRoboticsFacultyPageTemplate";
import { airFaculty } from "@/data/air-faculty";

export default function DrGangadharTG() {
  const faculty = airFaculty.find(f => f.slug === "dr-gangadhar-t-g")!;
  return <AIRoboticsFacultyPageTemplate faculty={faculty} />;
}
