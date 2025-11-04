import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function PoojaShreeHRPage() {
  const faculty = cseFaculty.find(f => f.slug === "pooja-shree-h-r")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
