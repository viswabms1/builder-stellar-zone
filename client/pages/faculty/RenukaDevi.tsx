import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function RenukaDeviPage() {
  const faculty = cseFaculty.find(f => f.slug === "dr-renuka-devi-mn")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
