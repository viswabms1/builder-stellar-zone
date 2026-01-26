import { useLocation } from "react-router-dom";

interface ContentContext {
  school?: string;
  department?: string;
}

/**
 * Hook that automatically detects the current school and department
 * based on the URL route the user is viewing
 *
 * Used internally by News, Events, and Announcements components
 * to auto-filter content without requiring manual props
 */
export function useContentContext(): ContentContext {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  // School mappings
  const schoolMap: Record<string, string> = {
    "/engineering": "Engineering",
    "/dept-cse": "Engineering",
    "/dept-ece": "Engineering",
    "/dept-mechanical": "Engineering",
    "/dept-aerospace": "Engineering",
    "/dept-aiml": "Engineering",
    "/dept-ai-ds": "Engineering",
    "/dept-ai-robotics": "Engineering",
    "/dept-cybersecurity": "Engineering",
    "/deptcse": "Engineering",
    "/deptece": "Engineering",
    "/deptmechanical": "Engineering",
    "/deptaerospace": "Engineering",
    "/deptaiml": "Engineering",
    "/deptaids": "Engineering",
    "/deptairobotics": "Engineering",
    "/deptcybersecurity": "Engineering",

    "/health-sciences": "Health Sciences",
    "/health": "Health Sciences",
    "/pharmacy": "Health Sciences",
    "/nursing": "Health Sciences",
    "/physiotherapy": "Health Sciences",
    "/bpt": "Health Sciences",
    "/bpharma": "Health Sciences",
    "/bscnursing": "Health Sciences",
    "/allied-health": "Health Sciences",

    "/commerce-and-management": "Commerce & Management",
    "/commerce": "Commerce & Management",
    "/management": "Commerce & Management",
    "/bcom": "Commerce & Management",
    "/bba": "Commerce & Management",
    "/mba": "Commerce & Management",
    "/bcom-bba": "Commerce & Management",

    "/law": "Law",
    "/humanities": "Humanities & Social Sciences",
    "/journalism": "Journalism",
    "/design": "Design",
    "/applied-sciences": "Applied Sciences",
    "/mathematics": "Mathematics",
    "/physics": "Physics",
    "/chemistry": "Chemistry",
    "/computer-applications": "Computer Applications",
  };

  // Department mappings (extracted from path)
  const departmentMap: Record<string, string> = {
    // Engineering departments
    "computer-science": "CSE",
    "cse": "CSE",
    "artificial-intelligence": "AIML",
    "ai-ml": "AIML",
    "aiml": "AIML",
    "ai-data-science": "AI & DS",
    "ai-ds": "AI & DS",
    "aids": "AI & DS",
    "data-science": "Data Science",
    "datasci": "Data Science",
    "cybersecurity": "Cybersecurity",
    "computer-technology": "Computer Technology",
    "cs-medical-engineering": "CS Medical Engineering",
    "ai-robotics": "AI Robotics",
    "airobotics": "AI Robotics",
    "mechanical-engineering": "Mechanical",
    "mechanical": "Mechanical",
    "aerospace-engineering": "Aerospace",
    "aerospace": "Aerospace",
    "electronics-communication": "ECE",
    "ece": "ECE",

    // Health Sciences departments
    "pharmacy": "Pharmacy",
    "nursing": "Nursing",
    "physiotherapy": "Physiotherapy",
    "bpt": "Physiotherapy",
    "bpharma": "Pharmacy",
    "bscnursing": "Nursing",
    "allied-health": "Allied Health",

    // Other departments
    "law": "Law",
    "bcom": "Commerce",
    "bba": "Management",
    "mba": "MBA",
    "journalism": "Journalism",
    "design": "Design",
    "mathematics": "Mathematics",
    "physics": "Physics",
    "chemistry": "Chemistry",
    "computer-applications": "Computer Applications",
  };

  let detectedSchool: string | undefined;
  let detectedDepartment: string | undefined;

  // Find school
  for (const [pathSegment, school] of Object.entries(schoolMap)) {
    if (path.includes(pathSegment)) {
      detectedSchool = school;
      break;
    }
  }

  // Find department
  for (const [pathSegment, department] of Object.entries(departmentMap)) {
    if (path.includes(pathSegment)) {
      detectedDepartment = department;
      break;
    }
  }

  return {
    school: detectedSchool,
    department: detectedDepartment,
  };
}

/**
 * Get a user-friendly display name for the current location
 */
export function useContentContextName(): string {
  const { school, department } = useContentContext();

  if (department) {
    return `${department} - ${school || "University"}`;
  }
  if (school) {
    return school;
  }
  return "University";
}
