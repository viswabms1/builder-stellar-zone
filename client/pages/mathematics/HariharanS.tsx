import FacultyPageTemplate from "../faculty/FacultyPageTemplate";
import { mathematicsFaculty } from "@/data/mathematics-faculty";

export default function HariharanSPage() {
  const faculty = mathematicsFaculty.find(f => f.slug === "dr-hariharan-s")!;
  return <FacultyPageTemplate faculty={{...faculty, interests: faculty.interests || []}} department="Mathematics" departmentLink="/academics/mathematics/faculty" />;
}
