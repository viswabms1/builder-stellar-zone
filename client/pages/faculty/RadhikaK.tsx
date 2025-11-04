import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function RadhikaKPage() {
  const faculty = cseFaculty.find(f => f.slug === "radhika-k")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
