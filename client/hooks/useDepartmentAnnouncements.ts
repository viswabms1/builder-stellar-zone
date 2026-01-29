import { useEffect, useState } from "react";
import type { Announcement } from "@/lib/content-manager";

/**
 * Converts Strapi rich text format to plain text
 * Strapi returns Description as: [{"type":"paragraph","children":[{"type":"text","text":"..."}]}]
 * Handles block-based rich text with proper paragraph spacing
 */
function normalizeDescription(description: any): string {
  if (!description) return "";

  // If it's already a string, return it
  if (typeof description === "string") return description;

  // If it's a rich text array, extract text content
  if (Array.isArray(description)) {
    return description
      .map((block: any) => {
        // Handle paragraph blocks
        if (block.type === "paragraph" && block.children && Array.isArray(block.children)) {
          return block.children
            .map((child: any) => {
              // Handle text nodes
              if (typeof child.text === "string") {
                return child.text;
              }
              // Handle bold, italic, underline text
              if (child.children && Array.isArray(child.children)) {
                return child.children
                  .map((c: any) => c.text || "")
                  .join("");
              }
              return "";
            })
            .join("");
        }

        // Handle heading blocks
        if (block.type?.includes("heading") && block.children && Array.isArray(block.children)) {
          return block.children
            .map((child: any) => child.text || "")
            .join("");
        }

        // Handle list items
        if ((block.type === "list-item" || block.type === "li") && block.children && Array.isArray(block.children)) {
          return block.children
            .map((child: any) => child.text || "")
            .join("");
        }

        return "";
      })
      .filter((text) => text.trim().length > 0) // Remove empty blocks
      .join("\n\n"); // Join with paragraph spacing
  }

  return "";
}

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

        // Fetch from our server proxy (which connects to Strapi)
        const serverUrl = `/api/strapi/announcements?department_code=${departmentCode}`;

        console.log(`[useDepartmentAnnouncements] Fetching URL: ${serverUrl}`);

        const response = await fetch(serverUrl);

        console.log(`[useDepartmentAnnouncements] Response status: ${response.status}`);

        if (response.ok) {
          const data = await response.json();
          console.log(`[useDepartmentAnnouncements] Full response:`, data);

          // Strapi response returns data array or wrapped in data object
          let fetchedAnnouncements = Array.isArray(data) ? data : (data.data || []);

          // Normalize Strapi field names to our Announcement interface
          fetchedAnnouncements = fetchedAnnouncements.map((item: any) => {
            const strapiBaseUrl = "http://72.61.225.136:1340";

            // Handle image from Strapi - use server proxy to avoid mixed content issues
            let image = null;
            if (item.Image?.url) {
              const imagePath = item.Image.url;
              image = `/api/strapi/image?path=${encodeURIComponent(imagePath)}`;
            } else if (item.image && typeof item.image === 'string') {
              image = `/api/strapi/image?path=${encodeURIComponent(item.image)}`;
            }

            // Handle pdf_link object from Strapi
            let attachment = null;
            if (item.pdf_link?.url) {
              const pdfPath = item.pdf_link.url;
              attachment = {
                url: `${strapiBaseUrl}${pdfPath}`,
                name: item.pdf_link.name || 'document.pdf'
              };
            } else if (item.attachment) {
              attachment = item.attachment;
            }

            return {
              id: item.id || item.documentId,
              title: item.Title || item.title,
              description: normalizeDescription(item.Description || item.description),
              department_code: item.Department_code || item.department_code,
              school_code: item.school_code,
              status: item.Status || item.status || 'active',
              expiry_date: item.Expirydate || item.expiry_date,
              date: item.createdAt,
              attachment: attachment,
              category: item.Category || item.category,
              priority: item.Priority || item.priority,
              image: image,
            };
          });

          setAnnouncements(fetchedAnnouncements);
          console.log(
            `[useDepartmentAnnouncements] Fetched ${fetchedAnnouncements.length} announcements for ${departmentCode}`
          );
        } else {
          console.warn(
            `[useDepartmentAnnouncements] Strapi API returned non-200 status: ${response.status}`
          );
          const errorText = await response.text();
          console.warn(`Error response: ${errorText}`);
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
