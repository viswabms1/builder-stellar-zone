import DataScienceFacultyPageTemplate from "./DataScienceFacultyPageTemplate";
import { dataScienceFaculty } from "@/data/data-science-faculty";

export default function MsSouramitaBhowmik() {
  const faculty = dataScienceFaculty.find(f => f.slug === "ms-souramita-bhowmik")!;
  return <DataScienceFacultyPageTemplate faculty={faculty} />;
}
