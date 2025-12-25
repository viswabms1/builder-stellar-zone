import FacultyPageTemplate from "../faculty/FacultyPageTemplate";
import { chemistryFaculty } from "@/data/chemistry-faculty";

export default function BhavanaRikhariPage() {
  const faculty = chemistryFaculty.find(f => f.slug === "dr-bhavana-rikhari")!;
  return <FacultyPageTemplate faculty={{...faculty, interests: faculty.interests || []}} />;
}
