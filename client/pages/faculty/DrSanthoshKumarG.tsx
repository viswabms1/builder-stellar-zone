import DataScienceFacultyPageTemplate from "./DataScienceFacultyPageTemplate";
import { dataScienceFaculty } from "@/data/data-science-faculty";

export default function DrSanthoshKumarG() {
  const faculty = dataScienceFaculty.find(f => f.slug === "dr-santhosh-kumar-g")!;
  return <DataScienceFacultyPageTemplate faculty={faculty} />;
}
