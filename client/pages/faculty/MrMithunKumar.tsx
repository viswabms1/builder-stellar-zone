import DataScienceFacultyPageTemplate from "./DataScienceFacultyPageTemplate";
import { dataScienceFaculty } from "@/data/data-science-faculty";

export default function MrMithunKumar() {
  const faculty = dataScienceFaculty.find(f => f.slug === "mr-mithun-kumar")!;
  return <DataScienceFacultyPageTemplate faculty={faculty} />;
}
