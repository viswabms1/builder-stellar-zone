import FacultyPageTemplate from "./FacultyPageTemplate";
import { dataScienceFaculty } from "@/data/data-science-faculty";

export default function MsSouramitaBhowmikPage() {
  const faculty = dataScienceFaculty.find(f => f.slug === "ms-souramita-bhowmik")!;
  return <FacultyPageTemplate faculty={faculty} department="Data Science" departmentLink="/academics/engineering/data-science/faculty" />;
}
