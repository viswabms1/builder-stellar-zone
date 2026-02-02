import { useEffect, useState } from "react";
import { useStaffs } from "./useStaffs";

/**
 * Faculty member base structure
 * Matches the structure used in hardcoded faculty data files
 */
export interface FacultyMember {
  id?: string;
  name: string;
  title: string;
  image: string;
  qualifications: string;
  category?: "teaching" | "non-teaching" | "research" | "admin";
  slug?: string;
  department_code?: string;
  specialization?: string;
  specialty?: string;
  email?: string;
  phone?: string;
  [key: string]: any; // Allow additional properties from different faculty types
}

interface UseDepartmentFacultyOptions {
  departmentCode: string;
  limit?: number;
}

interface UseDepartmentFacultyResult {
  faculty: FacultyMember[];
  loading: boolean;
  error: string | null;
}

/**
 * Import all hardcoded faculty data as fallback
 * Maps department code to faculty array
 */
const getFallbackFacultyData = async (departmentCode: string): Promise<FacultyMember[]> => {
  const normalizedCode = departmentCode.toLowerCase();

  // Dynamic import mapping for all faculty data files
  const facultyModules: Record<string, () => Promise<any>> = {
    aerospace: () => import("@/data/aerospace-faculty"),
    aero: () => import("@/data/aerospace-faculty"),
    "ai-ds": () => import("@/data/ai-ds-faculty"),
    aidS: () => import("@/data/ai-ds-faculty"),
    aiml: () => import("@/data/aiml-faculty"),
    "ai-robotics": () => import("@/data/ai-robotics-faculty"),
    air: () => import("@/data/air-faculty"),
    "applied-sciences": () => import("@/data/applied-sciences-faculty"),
    "applied_sciences": () => import("@/data/applied-sciences-faculty"),
    chemistry: () => import("@/data/chemistry-faculty"),
    "computer-applications": () => import("@/data/computer-applications-faculty"),
    "computer_applications": () => import("@/data/computer-applications-faculty"),
    "computer-technology": () => import("@/data/computer-technology-faculty"),
    "computer_technology": () => import("@/data/computer-technology-faculty"),
    cse: () => import("@/data/cse-faculty"),
    cybersecurity: () => import("@/data/cybersecurity-faculty"),
    "data-science": () => import("@/data/data-science-faculty"),
    data_science: () => import("@/data/data-science-faculty"),
    ece: () => import("@/data/ece-faculty"),
    "humanities-social-sciences": () => import("@/data/humanities-social-sciences-faculty"),
    "humanities_social_sciences": () => import("@/data/humanities-social-sciences-faculty"),
    journalism: () => import("@/data/journalism-faculty"),
    law: () => import("@/data/law-faculty"),
    mathematics: () => import("@/data/mathematics-faculty"),
    math: () => import("@/data/mathematics-faculty"),
    mechanical: () => import("@/data/mech-faculty"),
    mech: () => import("@/data/mech-faculty"),
    "medical-engineering": () => import("@/data/medical-engineering-faculty"),
    "medical_engineering": () => import("@/data/medical-engineering-faculty"),
    physics: () => import("@/data/physics-faculty"),
    pharmacy: () => import("@/data/pharmacy-faculty"),
    physiotherapy: () => import("@/data/physiotherapy-faculty"),
    nursing: () => import("@/data/nursing-faculty"),
    mba: () => import("@/data/mba-faculty"),
    "bcom-bba": () => import("@/data/bcom-bba-faculty"),
    "bcom_bba": () => import("@/data/bcom-bba-faculty"),
  };

  try {
    const moduleLoader = facultyModules[normalizedCode];
    if (!moduleLoader) {
      console.warn(`[useDepartmentFaculty] No fallback data found for department: ${departmentCode}`);
      return [];
    }

    const module = await moduleLoader();

    // Find the faculty array in the module (usually named like 'aerospaceFaculty', 'cseFaculty', etc.)
    const facultyArray = Object.values(module).find((val) => Array.isArray(val)) as FacultyMember[] | undefined;

    if (!facultyArray) {
      console.warn(`[useDepartmentFaculty] Could not find faculty array in module for: ${departmentCode}`);
      return [];
    }

    return facultyArray.map((f) => ({
      ...f,
      department_code: departmentCode,
    }));
  } catch (error) {
    console.error(`[useDepartmentFaculty] Error loading fallback data for ${departmentCode}:`, error);
    return [];
  }
};

/**
 * Custom hook for fetching department-specific faculty from Strapi
 * Falls back to hardcoded data if API is unavailable
 *
 * @example
 * const { faculty, loading, error } = useDepartmentFaculty({
 *   departmentCode: "cse",
 *   limit: 50
 * });
 */
export function useDepartmentFaculty(
  options: UseDepartmentFacultyOptions
): UseDepartmentFacultyResult {
  const [faculty, setFaculty] = useState<FacultyMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        setLoading(true);
        setError(null);

        const departmentCode = options.departmentCode.toLowerCase();
        const limit = options.limit || 100;

        // Try to fetch from Strapi API first
        let fetchedFaculty: FacultyMember[] = [];
        let hasStrapi = false;

        try {
          // Attempt to fetch from Strapi
          const strapiUrl = `/api/strapi/faculty?filter[department_code][_eq]=${departmentCode}&limit=${limit}`;

          console.log("[useDepartmentFaculty] Attempting Strapi fetch from:", strapiUrl);

          const response = await fetch(strapiUrl);

          if (response.ok) {
            const data = await response.json();
            fetchedFaculty = Array.isArray(data) ? data : data.data || [];

            // Normalize Strapi field names to our interface
            fetchedFaculty = fetchedFaculty.map((f: any) => ({
              id: f.id || f.documentId,
              name: f.name || f.Name,
              title: f.title || f.Title,
              image: f.image || f.Image,
              qualifications: f.qualifications || f.Qualifications,
              category: f.category || f.Category || "teaching",
              slug: f.slug || generateSlug(f.name || f.Name),
              department_code: departmentCode,
              specialization: f.specialization || f.Specialization,
              specialty: f.specialty || f.Specialty,
              email: f.email || f.Email,
              phone: f.phone || f.Phone,
              ...f, // Include any other properties
            }));

            hasStrapi = true;
            console.log("[useDepartmentFaculty] Successfully fetched from Strapi:", fetchedFaculty.length, "faculty members");
          } else {
            console.warn("[useDepartmentFaculty] Strapi API returned non-200 status, falling back to local data");
          }
        } catch (strapiError) {
          console.warn("[useDepartmentFaculty] Strapi fetch failed:", strapiError);
        }

        // If Strapi failed, use fallback data
        if (!hasStrapi) {
          console.log("[useDepartmentFaculty] Falling back to local data for department:", departmentCode);
          fetchedFaculty = await getFallbackFacultyData(departmentCode);
        }

        // Apply limit
        if (limit && fetchedFaculty.length > limit) {
          fetchedFaculty = fetchedFaculty.slice(0, limit);
        }

        setFaculty(fetchedFaculty);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Failed to fetch faculty";
        console.error("[useDepartmentFaculty] Error:", errorMessage);
        setError(errorMessage);
        setFaculty([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFaculty();
  }, [options.departmentCode, options.limit]);

  return { faculty, loading, error };
}

/**
 * Helper function to generate slug from name
 * Used when Strapi slug is not available
 */
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}
