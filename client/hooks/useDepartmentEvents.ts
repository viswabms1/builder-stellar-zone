import { useEffect, useState } from "react";
import type { Event } from "@/lib/content-manager";
import { getDepartmentCode } from "./useDepartmentAnnouncements";

interface UseDepartmentEventsOptions {
  departmentCode: string;
  limit?: number;
}

interface UseDepartmentEventsResult {
  events: Event[];
  loading: boolean;
  error: string | null;
}

/**
 * Custom hook for fetching events by department from Directus
 * Fetches directly from Directus API using department_code filter
 */
export function useDepartmentEvents(
  options: UseDepartmentEventsOptions
): UseDepartmentEventsResult {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        setError(null);

        const departmentCode = options.departmentCode.toLowerCase();

        // Fetch directly from Directus API with department_code filter
        // Don't filter by status - handle it client-side
        const directusUrl = `https://dsu-website-headless-cms.directus.app/items/events?filter[department_code][_eq]=${departmentCode}&sort=date&limit=${options.limit || 50}`;
        
        console.log(`[useDepartmentEvents] Fetching for department: ${departmentCode}`);
        
        const response = await fetch(directusUrl);

        if (response.ok) {
          const data = await response.json();
          let fetchedEvents = data.data || [];

          // Filter for upcoming/ongoing events, or events without status (assume upcoming)
          const now = new Date();
          fetchedEvents = fetchedEvents.filter((event: any) => {
            if (!event.status) return true; // Include events without status
            return event.status === "upcoming" || event.status === "ongoing";
          });

          setEvents(fetchedEvents);
          console.log(
            `[useDepartmentEvents] Fetched ${fetchedEvents.length} events for ${departmentCode}`
          );
        } else {
          console.warn(
            `[useDepartmentEvents] Directus API returned non-200 status`
          );
          setEvents([]);
        }
      } catch (apiError) {
        console.warn(
          "[useDepartmentEvents] Directus fetch failed:",
          apiError
        );
        setError(
          apiError instanceof Error ? apiError.message : "Failed to fetch events"
        );
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [options.departmentCode, options.limit]);

  return { events, loading, error };
}
