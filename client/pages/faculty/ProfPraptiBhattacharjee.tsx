import FacultyPageTemplate from "./FacultyPageTemplate";
import { dataScienceFaculty } from "@/data/data-science-faculty";

export default function ProfPraptiBhattacharjeePage() {
  const faculty = dataScienceFaculty.find(f => f.slug === "prof-prapti-bhattacharjee")!;
  return <FacultyPageTemplate faculty={faculty} department="Data Science" departmentLink="/academics/engineering/data-science/faculty" />;
}
