import FacultyPageTemplate from "./FacultyPageTemplate";
import { dataScienceFaculty } from "@/data/data-science-faculty";

export default function DrSureshArumugamPage() {
  const faculty = dataScienceFaculty.find(f => f.slug === "dr-suresh-arumugam")!;
  return <FacultyPageTemplate faculty={faculty} department="Data Science" departmentLink="/academics/engineering/data-science/faculty" />;
}
