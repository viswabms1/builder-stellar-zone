import FacultyPageTemplate from "./FacultyPageTemplate";
import { dataScienceFaculty } from "@/data/data-science-faculty";

export default function DrJobinThomasPage() {
  const faculty = dataScienceFaculty.find(f => f.slug === "dr-jobin-thomas")!;
  return <FacultyPageTemplate faculty={faculty} department="Data Science" departmentLink="/academics/engineering/data-science/faculty" />;
}
