import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function SridharSKPage() {
  const faculty = cseFaculty.find(f => f.slug === "dr-sridhar-s-k")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
