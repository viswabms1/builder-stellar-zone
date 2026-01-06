import DataScienceFacultyPageTemplate from "./DataScienceFacultyPageTemplate";
import { dataScienceFaculty } from "@/data/data-science-faculty";

export default function ProfPraptiBhattacharjee() {
  const faculty = dataScienceFaculty.find(f => f.slug === "prof-prapti-bhattacharjee")!;
  return <DataScienceFacultyPageTemplate faculty={faculty} />;
}
