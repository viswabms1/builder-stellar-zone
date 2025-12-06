import ECEFacultyPageTemplate from "./ECEFacultyPageTemplate";
import { eceFaculty } from "@/data/ece-faculty";

export default function ArunBalodiPage() {
  const faculty = eceFaculty.find(f => f.slug === "dr-arun-balodi")!;
  return <ECEFacultyPageTemplate faculty={faculty} />;
}
