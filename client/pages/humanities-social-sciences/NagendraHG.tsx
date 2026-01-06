import FacultyPageTemplate from "../faculty/FacultyPageTemplate";
import { humanitiesSocialSciencesFaculty } from "@/data/humanities-social-sciences-faculty";

export default function NagendraHGPage() {
  const faculty = humanitiesSocialSciencesFaculty.find(f => f.slug === "prof-nagendra-h-g")!;
  return <FacultyPageTemplate faculty={{...faculty, interests: faculty.interests || []}} department="Humanities & Social Sciences" departmentLink="/academics/humanities-social-sciences/faculty" />;
}
