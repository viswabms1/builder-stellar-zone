import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function PavithraDPage() {
  const faculty = cseFaculty.find(f => f.slug === "pavithra-d")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
