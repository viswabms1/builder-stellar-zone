import DataScienceFacultyPageTemplate from "./DataScienceFacultyPageTemplate";
import { dataScienceFaculty } from "@/data/data-science-faculty";

export default function DrUPavanKumar() {
  const faculty = dataScienceFaculty.find(f => f.slug === "dr-u-pavan-kumar")!;
  return <DataScienceFacultyPageTemplate faculty={faculty} />;
}
