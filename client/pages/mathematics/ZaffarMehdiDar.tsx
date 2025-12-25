import FacultyPageTemplate from "../faculty/FacultyPageTemplate";
import { mathematicsFaculty } from "@/data/mathematics-faculty";

export default function ZaffarMehdiDarPage() {
  const faculty = mathematicsFaculty.find(f => f.slug === "zaffar-mehdi-dar")!;
  return <FacultyPageTemplate faculty={{...faculty, interests: faculty.interests || []}} department="Mathematics" departmentLink="/academics/mathematics/faculty" />;
}
