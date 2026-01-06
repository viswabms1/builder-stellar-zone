import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function NandiniKPage() {
  const faculty = cseFaculty.find(f => f.slug === "nandini-k")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
