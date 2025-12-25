import FacultyPageTemplate from "./FacultyPageTemplate";
import { dataScienceFaculty } from "@/data/data-science-faculty";

export default function DrSanthoshKumarGPage() {
  const faculty = dataScienceFaculty.find(f => f.slug === "dr-santhosh-kumar-g")!;
  return <FacultyPageTemplate faculty={faculty} department="Data Science" departmentLink="/academics/engineering/data-science/faculty" />;
}
