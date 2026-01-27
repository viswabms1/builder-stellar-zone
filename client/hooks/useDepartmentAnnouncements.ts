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
  // Engineering
  "Computer Science & Engineering": "cse",
  "Electronics & Communication": "ece",
  "Data Science": "ds",
  "Mechanical": "mech",
  "Aerospace": "aero",
  "AI & ML": "aiml",
  "AI & DS": "aids",
  "AI & Robotics": "airo",
  "Cybersecurity": "cyber",
  "Computer Technology": "ct",
  "Mechatronics": "meeng",
  "MCA": "mca",
  "MS Data Science": "msds",
  // Basic & Applied Sciences
  "Physics": "phys",
  "Chemistry": "chem",
  "Mathematics": "math",
  // Health Sciences
  "Nursing": "nurs",
  "Physiotherapy": "phys",
  "Pharmacy": "pharm",
  "Allied Health": "ahs",
  // Law
  "BA LLB": "ballb",
  "BBA LLB": "bballb",
  "LLB 3 Year": "llb3y",
  "LLM Corporate": "llm-cc",
  "LLM Tech": "llm-tech",
  // Commerce & Management
  "BBA": "bba",
  "BCom": "bcom-std",
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
};

/**
 * Custom hook for fetching announcements by department from Directus
 * Fetches directly from Directus API using department_code filter
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

        // Fetch directly from Directus API with department_code filter
        const directusUrl = `https://dsu-website-headless-cms.directus.app/items/announcements?filter[department_code][_eq]=${departmentCode}&sort=-expiry_date&limit=${options.limit || 50}`;
        
        console.log(`[useDepartmentAnnouncements] Fetching for department: ${departmentCode}`);
        
        const response = await fetch(directusUrl);

        if (response.ok) {
          const data = await response.json();
          const fetchedAnnouncements = data.data || [];
          setAnnouncements(fetchedAnnouncements);
          console.log(
            `[useDepartmentAnnouncements] Fetched ${fetchedAnnouncements.length} announcements for ${departmentCode}`
          );
        } else {
          console.warn(
            `[useDepartmentAnnouncements] Directus API returned non-200 status`
          );
          setAnnouncements([]);
        }
      } catch (apiError) {
        console.warn(
          "[useDepartmentAnnouncements] Directus fetch failed:",
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
 */
export function getDepartmentCode(departmentName: string): string {
  return DEPARTMENT_CODE_MAP[departmentName] || departmentName.toLowerCase();
}
