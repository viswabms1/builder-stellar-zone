import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function ArjunKrishnamurthyPage() {
  const faculty = cseFaculty.find(f => f.slug === "prof-arjun-krishnamurthy")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
