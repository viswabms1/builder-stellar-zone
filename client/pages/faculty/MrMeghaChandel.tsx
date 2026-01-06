import DataScienceFacultyPageTemplate from "./DataScienceFacultyPageTemplate";
import { dataScienceFaculty } from "@/data/data-science-faculty";

export default function MrMeghaChandel() {
  const faculty = dataScienceFaculty.find(f => f.slug === "mr-megha-chandel")!;
  return <DataScienceFacultyPageTemplate faculty={faculty} />;
}
