import AIIDSFacultyPageTemplate from "./AIIDSFacultyPageTemplate";
import { aidsFaculty } from "@/data/ai-ds-faculty";

export default function RameshWadawadagi() {
  const faculty = aidsFaculty.find(f => f.slug === "dr-ramesh-wadawadagi")!;
  return <AIIDSFacultyPageTemplate faculty={faculty} />;
}
