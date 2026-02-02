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
  const departmentCode = options.departmentCode.toLowerCase();

  // Try to fetch from Strapi staffs endpoint first
  const { staffs, loading: staffsLoading, error: staffsError } = useStaffs({
    departmentCode,
    limit: options.limit,
  });

  const [faculty, setFaculty] = useState<FacultyMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFaculty = async () => {
      try {
        setLoading(true);
        setError(null);

        let fetchedFaculty: FacultyMember[] = [];

        // If we have Strapi staffs data, map it to FacultyMember
        if (staffs && staffs.length > 0) {
          console.log("[useDepartmentFaculty] Using Strapi staffs data:", staffs.length, "faculty members");

          fetchedFaculty = staffs.map((staff: any) => {
            // Map Photo field to image URL using server proxy to avoid HTTPS/HTTP mixed content issues
            let photoUrl = "/placeholder.svg";
            if (staff.Photo?.url) {
              // Use server proxy endpoint to avoid mixed content (HTTPS/HTTP) issues
              photoUrl = `/api/strapi/image?path=${encodeURIComponent(staff.Photo.url)}`;
            } else if (staff.Image?.url) {
              photoUrl = `/api/strapi/image?path=${encodeURIComponent(staff.Image.url)}`;
            } else if (staff.image) {
              photoUrl = staff.image;
            }

            return {
              id: staff.id || staff.documentId,
              name: staff.Name || staff.name || "",
              title: staff.Designation || staff.title || "",
              image: photoUrl,
              qualifications: staff.Qualifications || staff.qualifications || "",
              category: staff.Category || staff.category || "teaching",
              slug: generateSlug(staff.Name || staff.name || ""),
              department_code: staff.department?.Dept_code || departmentCode,
              email: staff.Email || staff.email,
              phone: staff.Phone || staff.phone,
              ...staff, // Include any other properties
            };
          });
        } else if (staffsError) {
          // Strapi failed, use fallback data
          console.log("[useDepartmentFaculty] Strapi staffs fetch failed, falling back to local data");
          fetchedFaculty = await getFallbackFacultyData(departmentCode);
        } else if (!staffsLoading) {
          // No staffs data and loading is done but empty
          console.log("[useDepartmentFaculty] No staffs data available, falling back to local data");
          fetchedFaculty = await getFallbackFacultyData(departmentCode);
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

    loadFaculty();
  }, [staffs, staffsError, staffsLoading, departmentCode]);

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
