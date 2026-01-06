import DataScienceFacultyPageTemplate from "./DataScienceFacultyPageTemplate";
import { dataScienceFaculty } from "@/data/data-science-faculty";

export default function SindhuA() {
  const faculty = dataScienceFaculty.find(f => f.slug === "sindhu-a")!;
  return <DataScienceFacultyPageTemplate faculty={faculty} />;
}
