import FacultyPageTemplate from "../faculty/FacultyPageTemplate";
import { chemistryFaculty } from "@/data/chemistry-faculty";

export default function AVRaghuPage() {
  const faculty = chemistryFaculty.find(f => f.slug === "dr-a-v-raghu")!;
  return <FacultyPageTemplate faculty={{...faculty, interests: faculty.interests || []}} />;
}
