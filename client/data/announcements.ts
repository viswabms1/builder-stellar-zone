/**
 * Announcements Data Structure and Functions
 *
 * This file re-exports the Announcement interface from content-manager.ts
 * and provides helper functions for accessing announcements.
 *
 * Data is fetched from Directus CMS via the useAnnouncements hook.
 */

export { type Announcement } from "@/lib/content-manager";
export {
  getAnnouncementsBySchool,
  getAnnouncementsByDepartment,
  convertAnnouncementToCarouselItem,
} from "@/lib/content-manager";

/**
 * Get all active announcements
 *
 * NOTE: This returns an empty array as a fallback.
 * The useAnnouncements hook fetches from the API.
 * @returns Empty array (use useAnnouncements hook for actual data)
 */
export function getAllAnnouncements() {
  return [];
}

/**
 * Get announcements filtered by priority
 *
 * NOTE: Filtering is done in the useAnnouncements hook
 * @returns Empty array (use useAnnouncements hook with priority option)
 */
export function getAnnouncementsByPriority(
  priority: "high" | "medium" | "low"
) {
  return [];
}

/**
 * Get announcements by category
 *
 * NOTE: Filtering is done in the useAnnouncements hook
 * @returns Empty array (use useAnnouncements hook with category option)
 */
export function getAnnouncementsByCategory(category: string) {
  return [];
}

/**
 * Get high-priority announcements (for homepage banner)
 *
 * NOTE: Filtering is done in the useAnnouncements hook
 * @returns Empty array (use useAnnouncements hook with priority: 'high')
 */
export function getUrgentAnnouncements() {
  return [];
}
