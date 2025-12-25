import FacultyPageTemplate from "../faculty/FacultyPageTemplate";
import { chemistryFaculty } from "@/data/chemistry-faculty";

export default function SKHabibullahPage() {
  const faculty = chemistryFaculty.find(f => f.slug === "dr-sk-habibullah")!;
  return <FacultyPageTemplate faculty={{...faculty, interests: faculty.interests || []}} />;
}
