import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function UdayaKumarReddyPage() {
  const faculty = cseFaculty.find(f => f.slug === "dr-udaya-kumar-reddy-k-r")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
