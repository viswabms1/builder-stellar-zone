import AIRoboticsFacultyPageTemplate from "./AIRoboticsFacultyPageTemplate";
import { airFaculty } from "@/data/air-faculty";

export default function MrLalitAshutosh() {
  const faculty = airFaculty.find(f => f.slug === "mr-lalit-ashutosh")!;
  return <AIRoboticsFacultyPageTemplate faculty={faculty} />;
}
