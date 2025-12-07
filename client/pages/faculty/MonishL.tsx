import DataScienceFacultyPageTemplate from "./DataScienceFacultyPageTemplate";
import { dataScienceFaculty } from "@/data/data-science-faculty";

export default function MonishL() {
  const faculty = dataScienceFaculty.find(f => f.slug === "monish-l")!;
  return <DataScienceFacultyPageTemplate faculty={faculty} />;
}
