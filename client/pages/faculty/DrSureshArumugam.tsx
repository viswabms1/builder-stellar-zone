import DataScienceFacultyPageTemplate from "./DataScienceFacultyPageTemplate";
import { dataScienceFaculty } from "@/data/data-science-faculty";

export default function DrSureshArumugam() {
  const faculty = dataScienceFaculty.find(f => f.slug === "dr-suresh-arumugam")!;
  return <DataScienceFacultyPageTemplate faculty={faculty} />;
}
