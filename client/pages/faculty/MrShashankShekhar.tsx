import FacultyPageTemplate from "./FacultyPageTemplate";
import { dataScienceFaculty } from "@/data/data-science-faculty";

export default function MrShashankShekharPage() {
  const faculty = dataScienceFaculty.find(f => f.slug === "mr-shashank-shekhar")!;
  return <FacultyPageTemplate faculty={faculty} department="Data Science" departmentLink="/academics/engineering/data-science/faculty" />;
}
