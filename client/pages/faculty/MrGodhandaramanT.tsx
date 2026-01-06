import DataScienceFacultyPageTemplate from "./DataScienceFacultyPageTemplate";
import { dataScienceFaculty } from "@/data/data-science-faculty";

export default function MrGodhandaramanT() {
  const faculty = dataScienceFaculty.find(f => f.slug === "mr-godhandaraman-t")!;
  return <DataScienceFacultyPageTemplate faculty={faculty} />;
}
