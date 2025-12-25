import FacultyPageTemplate from "../faculty/FacultyPageTemplate";
import { mathematicsFaculty } from "@/data/mathematics-faculty";

export default function PratikMehtaPage() {
  const faculty = mathematicsFaculty.find(f => f.slug === "mr-pratik-mehta")!;
  return <FacultyPageTemplate faculty={{...faculty, interests: faculty.interests || []}} department="Mathematics" departmentLink="/academics/mathematics/faculty" />;
}
