import FacultyPageTemplate from "./FacultyPageTemplate";
import { dataScienceFaculty } from "@/data/data-science-faculty";

export default function SindhuAPage() {
  const faculty = dataScienceFaculty.find(f => f.slug === "sindhu-a")!;
  return <FacultyPageTemplate faculty={faculty} department="Data Science" departmentLink="/academics/engineering/data-science/faculty" />;
}
