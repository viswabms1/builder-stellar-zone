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

        // TODO: Replace with Directus API call
        // const response = await fetch(
        //   'https://dsu-website-headless-cms.directus.app/items/events?filter[status]=upcoming,ongoing'
        // );
        // const data = await response.json();
        // let fetchedEvents = data.data;

        // For now, use local data
        let fetchedEvents: Event[] = [];

        if (options?.school && options?.department) {
          fetchedEvents = getEventsBySchoolAndDepartment(
            options.school,
            options.department
          );
        } else if (options?.school) {
          fetchedEvents = getEventsBySchool(options.school);
        } else if (options?.tag) {
          fetchedEvents = getEventsByTag(options.tag);
        } else if (options?.category) {
          fetchedEvents = getEventsByCategory(options.category);
        } else if (options?.limit) {
          fetchedEvents = getUpcomingEvents(options.limit);
        } else {
          fetchedEvents = getAllEvents();
        }

        // Apply limit if specified (and not already applied by specific function)
        if (options?.limit && !options?.school && !options?.department) {
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
