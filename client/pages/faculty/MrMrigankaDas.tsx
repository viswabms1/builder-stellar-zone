import DataScienceFacultyPageTemplate from "./DataScienceFacultyPageTemplate";
import { dataScienceFaculty } from "@/data/data-science-faculty";

export default function MrMrigankaDas() {
  const faculty = dataScienceFaculty.find(f => f.slug === "mr-mriganka-das")!;
  return <DataScienceFacultyPageTemplate faculty={faculty} />;
}
