import FacultyPageTemplate from "./FacultyPageTemplate";
import { dataScienceFaculty } from "@/data/data-science-faculty";

export default function MsSnigdhaSikhakashyapPage() {
  const faculty = dataScienceFaculty.find(f => f.slug === "ms-snigdha-sikha-kashyap")!;
  return <FacultyPageTemplate faculty={faculty} department="Data Science" departmentLink="/academics/engineering/data-science/faculty" />;
}
