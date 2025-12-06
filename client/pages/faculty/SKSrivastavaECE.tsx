import ECEFacultyPageTemplate from "./ECEFacultyPageTemplate";
import { eceFaculty } from "@/data/ece-faculty";

export default function SKSrivastavaECEPage() {
  const faculty = eceFaculty.find(f => f.slug === "dr-s-k-srivastava")!;
  return <ECEFacultyPageTemplate faculty={faculty} />;
}
