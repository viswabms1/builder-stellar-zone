import { useEffect, useState } from "react";
import type { Announcement } from "@/data/announcements";
import {
  getUrgentAnnouncements,
  getAnnouncementsBySchool,
  getAnnouncementsByCategory,
  getAllAnnouncements,
} from "@/data/announcements";

/**
 * Converts Strapi rich text format to plain text
 * Strapi returns Description as: [{"type":"paragraph","children":[{"type":"text","text":"..."}]}]
 */
function normalizeDescription(description: any): string {
  if (!description) return "";

  // If it's already a string, return it
  if (typeof description === "string") return description;

  // If it's a rich text array, extract text content
  if (Array.isArray(description)) {
    return description
      .map((block: any) => {
        if (block.children && Array.isArray(block.children)) {
          return block.children
            .map((child: any) => child.text || "")
            .join("");
        }
        return "";
      })
      .join(" ");
  }

  return "";
}

interface UseAnnouncementsOptions {
  priority?: "high" | "medium" | "low";
  category?: Announcement["category"];
  school?: string;
  limit?: number;
}

interface UseAnnouncementsResult {
  announcements: Announcement[];
  loading: boolean;
  error: string | null;
}

/**
 * Custom hook for fetching and filtering announcements
 * Fetches directly from Strapi API with graceful fallback to local data
 */
export function useAnnouncements(
  options?: UseAnnouncementsOptions
): UseAnnouncementsResult {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        setLoading(true);
        setError(null);

        let fetchedAnnouncements: Announcement[] = [];

        try {
          // Fetch directly from Strapi API
          const strapiUrl = "http://72.61.225.136:1340/api/announcements";
          console.log(`[useAnnouncements] Fetching from: ${strapiUrl}`);

          const response = await fetch(strapiUrl);

          console.log(`[useAnnouncements] Response status: ${response.status}`);

          if (response.ok) {
            const data = await response.json();
            console.log(`[useAnnouncements] Full response:`, data);

            // Strapi response returns data array or wrapped in data object
            fetchedAnnouncements = Array.isArray(data) ? data : (data.data || []);
            console.log(
              "[useAnnouncements] Fetched from Strapi:",
              fetchedAnnouncements.length,
              "announcements"
            );
          } else {
            console.warn(
              "[useAnnouncements] Strapi API returned non-200 status, using local data"
            );
            const errorText = await response.text();
            console.warn(`Error response: ${errorText}`);
            fetchedAnnouncements = getAllAnnouncements();
          }
        } catch (apiError) {
          console.warn(
            "[useAnnouncements] Strapi fetch failed, falling back to local data:",
            apiError
          );
          // Fall back to local data if API fails
          fetchedAnnouncements = getAllAnnouncements();
        }

        // Apply filters
        if (options?.priority) {
          fetchedAnnouncements = fetchedAnnouncements.filter(
            (a) => a.priority === options.priority
          );
        }
        if (options?.category) {
          fetchedAnnouncements = fetchedAnnouncements.filter(
            (a) => a.category === options.category
          );
        }
        if (options?.school) {
          fetchedAnnouncements = fetchedAnnouncements.filter(
            (a) => a.school_code === options.school || !a.school_code // Include universal announcements
          );
        }

        // Already sorted by expiry_date from Directus, no need to re-sort

        // Apply limit if specified
        if (options?.limit) {
          fetchedAnnouncements = fetchedAnnouncements.slice(
            0,
            options.limit
          );
        }

        setAnnouncements(fetchedAnnouncements);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch announcements"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, [options?.priority, options?.category, options?.school, options?.limit]);

  return { announcements, loading, error };
}
