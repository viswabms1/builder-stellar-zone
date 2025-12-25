import FacultyPageTemplate from "../faculty/FacultyPageTemplate";
import { chemistryFaculty } from "@/data/chemistry-faculty";

export default function VenkataramanaNSPage() {
  const faculty = chemistryFaculty.find(f => f.slug === "dr-venkataramanan-n-s")!;
  return <FacultyPageTemplate faculty={{...faculty, interests: faculty.interests || []}} />;
}
