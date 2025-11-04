import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function RoshanSanuPage() {
  const faculty = cseFaculty.find(f => f.slug === "roshan-sanu-y")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
