import { useEffect, useState } from "react";

export interface Staff {
  id: number;
  documentId: string;
  Name: string;
  Designation: string;
  Department_code?: string;
  Email?: string;
  Phone?: string;
  Image?: {
    id: number;
    documentId: string;
    url: string;
    name: string;
    mime: string;
    size: number;
    width?: number;
    height?: number;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  [key: string]: any;
}

interface UseStaffsOptions {
  departmentCode?: string;
  limit?: number;
}

interface UseStaffsResult {
  staffs: Staff[];
  loading: boolean;
  error: string | null;
}

/**
 * Custom hook for fetching staff/faculty data from Strapi
 * Fetches directly from server proxy endpoint /api/strapi/staffs
 * 
 * @example
 * const { staffs, loading, error } = useStaffs({ departmentCode: "mech" });
 */
export function useStaffs(options?: UseStaffsOptions): UseStaffsResult {
  const [staffs, setStaffs] = useState<Staff[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStaffs = async () => {
      try {
        setLoading(true);
        setError(null);

        // Build query parameters
        const params = new URLSearchParams();
        if (options?.departmentCode) {
          params.append("department_code", options.departmentCode);
        }
        if (options?.limit) {
          params.append("limit", options.limit.toString());
        }

        // Fetch from server proxy
        const serverUrl = `/api/strapi/staffs${params.toString() ? "?" + params.toString() : ""}`;

        console.log(`[useStaffs] Fetching from: ${serverUrl}`);

        const response = await fetch(serverUrl);

        console.log(`[useStaffs] Response status: ${response.status}`);

        if (response.ok) {
          const data = await response.json();
          console.log(`[useStaffs] Full response:`, data);

          // Response should have data array
          const fetchedStaffs = Array.isArray(data) ? data : (data.data || []);

          setStaffs(fetchedStaffs);
          console.log(
            `[useStaffs] Fetched ${fetchedStaffs.length} staffs`,
            fetchedStaffs
          );
        } else {
          console.warn(
            `[useStaffs] Server API returned non-200 status: ${response.status}`
          );
          const errorText = await response.text();
          console.warn(`Error response: ${errorText}`);
          setStaffs([]);
        }
      } catch (apiError) {
        console.warn(
          "[useStaffs] Fetch failed:",
          apiError
        );
        setError(
          apiError instanceof Error ? apiError.message : "Failed to fetch staffs"
        );
        setStaffs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchStaffs();
  }, [options?.departmentCode, options?.limit]);

  return { staffs, loading, error };
}
