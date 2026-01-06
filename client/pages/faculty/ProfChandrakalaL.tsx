import DataScienceFacultyPageTemplate from "./DataScienceFacultyPageTemplate";
import { dataScienceFaculty } from "@/data/data-science-faculty";

export default function ProfChandrakalaL() {
  const faculty = dataScienceFaculty.find(f => f.slug === "prof-chandrakala-l")!;
  return <DataScienceFacultyPageTemplate faculty={faculty} />;
}
