import DataScienceFacultyPageTemplate from "./DataScienceFacultyPageTemplate";
import { dataScienceFaculty } from "@/data/data-science-faculty";

export default function MsSnigdhaSikhakashyap() {
  const faculty = dataScienceFaculty.find(f => f.slug === "ms-snigdha-sikha-kashyap")!;
  return <DataScienceFacultyPageTemplate faculty={faculty} />;
}
