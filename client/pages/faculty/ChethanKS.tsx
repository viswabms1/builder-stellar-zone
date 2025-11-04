import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function ChethanKSPage() {
  const faculty = cseFaculty.find(f => f.slug === "chethan-k-s")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
