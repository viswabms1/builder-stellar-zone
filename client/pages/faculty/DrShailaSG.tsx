import DataScienceFacultyPageTemplate from "./DataScienceFacultyPageTemplate";
import { dataScienceFaculty } from "@/data/data-science-faculty";

export default function DrShailaSG() {
  const faculty = dataScienceFaculty.find(f => f.slug === "dr-shaila-s-g")!;
  return <DataScienceFacultyPageTemplate faculty={faculty} />;
}
