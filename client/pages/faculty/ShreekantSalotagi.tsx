import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function ShreekantSalotagiPage() {
  const faculty = cseFaculty.find(f => f.slug === "shreekant-salotagi")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
