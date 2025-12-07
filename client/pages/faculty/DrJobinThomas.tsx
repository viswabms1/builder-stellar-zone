import DataScienceFacultyPageTemplate from "./DataScienceFacultyPageTemplate";
import { dataScienceFaculty } from "@/data/data-science-faculty";

export default function DrJobinThomas() {
  const faculty = dataScienceFaculty.find(f => f.slug === "dr-jobin-thomas")!;
  return <DataScienceFacultyPageTemplate faculty={faculty} />;
}
