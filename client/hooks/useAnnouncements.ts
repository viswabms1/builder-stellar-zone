import { useEffect, useState } from "react";
import type { Announcement } from "@/data/announcements";
import {
  getUrgentAnnouncements,
  getAnnouncementsBySchool,
  getAnnouncementsByCategory,
  getAllAnnouncements,
} from "@/data/announcements";

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
 * Fetches directly from Directus API with graceful fallback to local data
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
          // Fetch directly from Directus API
          const directusUrl = "https://dsu-website-headless-cms.directus.app/items/announcements?filter[status][_eq]=active&sort=-date&limit=100";
          const response = await fetch(directusUrl);

          if (response.ok) {
            const data = await response.json();
            // Transform Directus response to match our Announcement interface
            fetchedAnnouncements = (data.data || []).map((item: any) => ({
              id: item.id,
              title: item.title || "",
              content: item.content || "",
              type: item.type || "announcement",
              category: item.category || "General",
              priority: item.priority || "medium",
              date: item.date || new Date().toISOString(),
              expiryDate: item.expiry_date,
              status: item.status || "active",
              school: item.school,
              department: item.department,
              image: item.image,
              attachments: item.attachments || [],
            }));
            console.log(
              "[useAnnouncements] Fetched from Directus:",
              fetchedAnnouncements.length,
              "announcements"
            );
          } else {
            console.warn(
              "[useAnnouncements] Directus API returned non-200 status, using local data"
            );
            fetchedAnnouncements = getAllAnnouncements();
          }
        } catch (apiError) {
          console.warn(
            "[useAnnouncements] Directus fetch failed, falling back to local data:",
            apiError
          );
          // Fall back to local data if API fails
          fetchedAnnouncements = getAllAnnouncements();
        }

        // Apply filters
        if (options?.priority === "high") {
          fetchedAnnouncements = fetchedAnnouncements.filter(
            (a) => a.priority === "high"
          );
        } else if (options?.category) {
          fetchedAnnouncements = fetchedAnnouncements.filter(
            (a) => a.category === options.category
          );
        } else if (options?.school) {
          fetchedAnnouncements = fetchedAnnouncements.filter(
            (a) => a.school === options.school || !a.school // Include universal announcements
          );
        }

        // Sort by date (newest first)
        fetchedAnnouncements.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );

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
