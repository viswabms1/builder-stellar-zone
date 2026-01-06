import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function SasikalaNPage() {
  const faculty = cseFaculty.find(f => f.slug === "sasikala-n")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
