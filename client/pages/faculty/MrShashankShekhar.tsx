import DataScienceFacultyPageTemplate from "./DataScienceFacultyPageTemplate";
import { dataScienceFaculty } from "@/data/data-science-faculty";

export default function MrShashankShekhar() {
  const faculty = dataScienceFaculty.find(f => f.slug === "mr-shashank-shekhar")!;
  return <DataScienceFacultyPageTemplate faculty={faculty} />;
}
