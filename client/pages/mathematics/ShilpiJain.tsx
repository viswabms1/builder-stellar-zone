import FacultyPageTemplate from "../faculty/FacultyPageTemplate";
import { mathematicsFaculty } from "@/data/mathematics-faculty";

export default function ShilpiJainPage() {
  const faculty = mathematicsFaculty.find(f => f.slug === "dr-shilpi-jain")!;
  return <FacultyPageTemplate faculty={{...faculty, interests: faculty.interests || []}} department="Mathematics" departmentLink="/academics/mathematics/faculty" />;
}
