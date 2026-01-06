import FacultyPageTemplate from "./FacultyPageTemplate";
import { dataScienceFaculty } from "@/data/data-science-faculty";

export default function MrGodhandaramanTPage() {
  const faculty = dataScienceFaculty.find(f => f.slug === "mr-godhandaraman-t")!;
  return <FacultyPageTemplate faculty={faculty} department="Data Science" departmentLink="/academics/engineering/data-science/faculty" />;
}
