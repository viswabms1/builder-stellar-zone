import DataScienceFacultyPageTemplate from "./DataScienceFacultyPageTemplate";
import { dataScienceFaculty } from "@/data/data-science-faculty";

export default function ManjulaM() {
  const faculty = dataScienceFaculty.find(f => f.slug === "manjula-m")!;
  return <DataScienceFacultyPageTemplate faculty={faculty} />;
}
