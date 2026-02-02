import { useEffect, useState } from "react";
import type { Event } from "@/lib/content-manager";
import { getDepartmentCode } from "./useDepartmentAnnouncements";
import { getEventsByDepartmentCode } from "@/data/events";

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
 * Custom hook for fetching events by department
 * Fetches from local data using department_code filter
 */
export function useDepartmentEvents(
  options: UseDepartmentEventsOptions
): UseDepartmentEventsResult {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setLoading(true);
      setError(null);

      const departmentCode = options.departmentCode.toLowerCase();

      // Fetch from local data
      const fetchedEvents = getEventsByDepartmentCode(departmentCode);

      console.log(
        `[useDepartmentEvents] Fetched ${fetchedEvents.length} events for ${departmentCode}`
      );

      // Apply limit if specified
      const limitedEvents = options.limit
        ? fetchedEvents.slice(0, options.limit)
        : fetchedEvents;

      setEvents(limitedEvents);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch events");
      setEvents([]);
    } finally {
      setLoading(false);
    }
  }, [options.departmentCode, options.limit]);

  return { events, loading, error };
}
