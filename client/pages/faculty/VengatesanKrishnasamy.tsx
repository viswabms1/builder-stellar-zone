import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function VengatesanKrishnasamyPage() {
  const faculty = cseFaculty.find(f => f.slug === "dr-vengatesan-krishnasamy")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
