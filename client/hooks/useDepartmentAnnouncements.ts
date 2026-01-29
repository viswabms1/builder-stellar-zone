import { useEffect, useState } from "react";
import type { Announcement } from "@/lib/content-manager";

interface UseDepartmentAnnouncementsOptions {
  departmentCode: string;
  limit?: number;
}

interface UseDepartmentAnnouncementsResult {
  announcements: Announcement[];
  loading: boolean;
  error: string | null;
}

// Map department names to department codes
const DEPARTMENT_CODE_MAP: Record<string, string> = {
  // Engineering - Multiple naming variations
  "Computer Science & Engineering": "cse",
  "CSE": "cse",
  "Computer Science": "cse",
  "Electronics & Communication": "ece",
  "ECE": "ece",
  "Electronics and Communication": "ece",
  "Data Science": "ds",
  "Mechanical": "mech",
  "Mechanical Engineering": "mech",
  "Aerospace": "aero",
  "Aerospace Engineering": "aero",
  "AI & ML": "aiml",
  "AIML": "aiml",
  "AI & DS": "aids",
  "AIDS": "aids",
  "AI & Robotics": "airo",
  "AI and Robotics": "airo",
  "Cybersecurity": "cyber",
  "Computer Technology": "ct",
  "CT": "ct",
  "Mechatronics": "meeng",
  "MCA": "mca",
  "MS Data Science": "msds",
  // Engineering-specific basic sciences
  "Physics Engineering": "phys-eng",
  "Chemistry Engineering": "chem-eng",
  "Mathematics Engineering": "math-eng",
  "HSS Engineering": "hss-eng",
  // Basic & Applied Sciences
  "Physics": "phys",
  "Chemistry": "chem",
  "Mathematics": "math",
  // Health Sciences
  "Nursing": "nurs",
  "Physiotherapy": "phys",
  "Pharmacy": "pharm",
  "Allied Health": "ahs",
  "Allied Health Sciences": "ahs",
  // Law
  "BA LLB": "ballb",
  "BBA LLB": "bballb",
  "LLB 3 Year": "llb3y",
  "LLM Corporate": "llm-cc",
  "LLM Tech": "llm-tech",
  "LLM Corporate Commercial": "llm-cc",
  "LLM Law Technology": "llm-tech",
  // Commerce & Management
  "BBA": "bba",
  "BBA BFSI": "bba-bfsi",
  "BBA RO": "bba-ro",
  "BCom": "bcom-std",
  "BCom Standard": "bcom-std",
  "BCom ACCA": "bcom-acca",
  "BCom CMA": "bcom-cma",
  "BCom CA": "bcom-ca",
  "MBA": "mba",
  // Design
  "Product Design": "des-prod",
  "Graphic Design": "des-graph",
  // Computer Applications
  "BCA": "bca",
  "BSc Data Science": "bsc-ds",
  "MSc Data Science": "msc-ds",
  // Journalism
  "Journalism": "jmc",
  "Journalism & Mass Communication": "jmc",
};

/**
 * Custom hook for fetching announcements by department from Strapi
 * Fetches directly from Strapi API using department_code filter
 */
export function useDepartmentAnnouncements(
  options: UseDepartmentAnnouncementsOptions
): UseDepartmentAnnouncementsResult {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        setLoading(true);
        setError(null);

        const departmentCode = options.departmentCode.toLowerCase();

        // Fetch directly from Strapi API with department_code filter
        const strapiUrl = `http://72.61.225.136:1340/api/announcements?filters[department_code][$eq]=${departmentCode}&sort=-id&pagination[limit]=${options.limit || 50}`;

        console.log(`[useDepartmentAnnouncements] Fetching for department: ${departmentCode}`);

        const response = await fetch(strapiUrl);

        if (response.ok) {
          const data = await response.json();
          // Strapi response returns data array or wrapped in data object
          const fetchedAnnouncements = Array.isArray(data) ? data : (data.data || []);
          setAnnouncements(fetchedAnnouncements);
          console.log(
            `[useDepartmentAnnouncements] Fetched ${fetchedAnnouncements.length} announcements for ${departmentCode}`
          );
        } else {
          console.warn(
            `[useDepartmentAnnouncements] Strapi API returned non-200 status`
          );
          setAnnouncements([]);
        }
      } catch (apiError) {
        console.warn(
          "[useDepartmentAnnouncements] Strapi fetch failed:",
          apiError
        );
        setError(
          apiError instanceof Error ? apiError.message : "Failed to fetch announcements"
        );
        setAnnouncements([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, [options.departmentCode, options.limit]);

  return { announcements, loading, error };
}

/**
 * Helper function to get department code from department name
 * Handles case-insensitive lookups and common variations
 */
export function getDepartmentCode(departmentName: string): string {
  // Try exact match first
  if (DEPARTMENT_CODE_MAP[departmentName]) {
    return DEPARTMENT_CODE_MAP[departmentName];
  }

  // Try case-insensitive match
  const normalizedName = departmentName.trim();
  const matchingKey = Object.keys(DEPARTMENT_CODE_MAP).find(
    key => key.toLowerCase() === normalizedName.toLowerCase()
  );

  if (matchingKey) {
    return DEPARTMENT_CODE_MAP[matchingKey];
  }

  // Fallback: convert to lowercase and remove spaces for code-like names
  // e.g., "CSE" -> "cse", "AI ML" -> "aiml"
  return normalizedName.toLowerCase().replace(/\s+/g, '');
}
