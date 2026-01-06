import FacultyPageTemplate from "../faculty/FacultyPageTemplate";
import { humanitiesSocialSciencesFaculty } from "@/data/humanities-social-sciences-faculty";

export default function PWagdeviPage() {
  const faculty = humanitiesSocialSciencesFaculty.find(f => f.slug === "dr-p-wagdevi")!;
  return <FacultyPageTemplate faculty={{...faculty, interests: faculty.interests || []}} department="Humanities & Social Sciences" departmentLink="/academics/humanities-social-sciences/faculty" />;
}
