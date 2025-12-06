import ECEFacultyPageTemplate from "./ECEFacultyPageTemplate";
import { eceFaculty } from "@/data/ece-faculty";

export default function TheodoreChandraPage() {
  const faculty = eceFaculty.find(f => f.slug === "dr-theodore-chandra-s")!;
  return <ECEFacultyPageTemplate faculty={faculty} />;
}
