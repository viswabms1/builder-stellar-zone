import DataScienceFacultyPageTemplate from "./DataScienceFacultyPageTemplate";
import { dataScienceFaculty } from "@/data/data-science-faculty";

export default function MrKishorMalakar() {
  const faculty = dataScienceFaculty.find(f => f.slug === "mr-kishor-malakar")!;
  return <DataScienceFacultyPageTemplate faculty={faculty} />;
}
