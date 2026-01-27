import { useEffect, useState } from "react";
import type { Event } from "@/data/events";
import {
  getAllEvents,
  getEventsBySchool,
  getEventsBySchoolAndDepartment,
  getEventsByCategory,
  getUpcomingEvents,
  getEventsByTag,
} from "@/data/events";

interface UseEventsOptions {
  school?: string;
  department?: string;
  category?: Event["category"];
  tag?: string;
  limit?: number;
}

interface UseEventsResult {
  events: Event[];
  loading: boolean;
  error: string | null;
}

/**
 * Custom hook for fetching and filtering events
 * Currently uses local data; ready to swap with Directus API endpoint
 *
 * @example
 * // Get all upcoming events for Engineering school
 * const { events } = useEvents({ school: "Engineering" });
 *
 * @example
 * // Get events for specific department
 * const { events } = useEvents({ school: "Engineering", department: "CSE" });
 *
 * @example
 * // Get next 5 workshop events
 * const { events } = useEvents({ category: "Workshop", limit: 5 });
 */
export function useEvents(options?: UseEventsOptions): UseEventsResult {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        setError(null);

        let fetchedEvents: Event[] = [];

        try {
          // Fetch directly from Directus API
          const directusUrl = "https://dsu-website-headless-cms.directus.app/items/events?filter[status][_in]=upcoming,ongoing&sort=date&limit=100";
          const response = await fetch(directusUrl);

          if (response.ok) {
            const data = await response.json();
            fetchedEvents = data.data || [];
            console.log(
              "[useEvents] Fetched from Directus:",
              fetchedEvents.length,
              "events"
            );
          } else {
            console.warn(
              "[useEvents] Directus API returned non-200 status, using local data"
            );
            fetchedEvents = getAllEvents();
          }
        } catch (apiError) {
          console.warn(
            "[useEvents] Directus fetch failed, falling back to local data:",
            apiError
          );
          fetchedEvents = getAllEvents();
        }

        // Apply filters
        if (options?.school) {
          fetchedEvents = fetchedEvents.filter(
            (e) => e.school_code === options.school || !e.school_code
          );
        }
        if (options?.department) {
          fetchedEvents = fetchedEvents.filter(
            (e) => e.department_code === options.department
          );
        }
        if (options?.category) {
          fetchedEvents = fetchedEvents.filter(
            (e) => e.category === options.category
          );
        }
        if (options?.tag) {
          fetchedEvents = fetchedEvents.filter(
            (e) => e.tags?.includes(options.tag!)
          );
        }

        // Apply limit if specified
        if (options?.limit) {
          fetchedEvents = fetchedEvents.slice(0, options.limit);
        }

        setEvents(fetchedEvents);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch events"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [options?.school, options?.department, options?.category, options?.tag, options?.limit]);

  return { events, loading, error };
}
