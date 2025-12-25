import FacultyPageTemplate from "./FacultyPageTemplate";
import { cybersecurityFaculty } from "@/data/cybersecurity-faculty";

export default function DeepthikaKaruppusamyPage() {
  const faculty = cybersecurityFaculty.find(f => f.slug === "deepthika-karuppusamy")!;
  return <FacultyPageTemplate faculty={faculty} department="Cybersecurity" departmentLink="/academics/engineering/cybersecurity/faculty" />;
}
