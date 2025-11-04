import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function ArunkumarGopuPage() {
  const faculty = cseFaculty.find(f => f.slug === "dr-arunkumar-gopu")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
