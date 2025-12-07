import AIRoboticsFacultyPageTemplate from "./AIRoboticsFacultyPageTemplate";
import { airFaculty } from "@/data/air-faculty";

export default function MrVikasVishwakarma() {
  const faculty = airFaculty.find(f => f.slug === "mr-vikas-vishwakarma")!;
  return <AIRoboticsFacultyPageTemplate faculty={faculty} />;
}
