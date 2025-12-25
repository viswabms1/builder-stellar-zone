import FacultyPageTemplate from "../faculty/FacultyPageTemplate";
import { mathematicsFaculty } from "@/data/mathematics-faculty";

export default function PareshKumarPanigrahiPage() {
  const faculty = mathematicsFaculty.find(f => f.slug === "dr-paresh-kumar-panigrahi")!;
  return <FacultyPageTemplate faculty={{...faculty, interests: faculty.interests || []}} department="Mathematics" departmentLink="/academics/mathematics/faculty" />;
}
