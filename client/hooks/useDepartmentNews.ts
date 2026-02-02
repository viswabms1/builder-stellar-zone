import { useEffect, useState } from "react";
import type { NewsItem } from "@/lib/content-manager";
import { getDepartmentCode } from "./useDepartmentAnnouncements";
import { getNewsByDepartmentCode } from "@/data/news";

interface UseDepartmentNewsOptions {
  departmentCode: string;
  limit?: number;
}

interface UseDepartmentNewsResult {
  news: NewsItem[];
  loading: boolean;
  error: string | null;
}

/**
 * Custom hook for fetching department-specific news
 * Uses department code mapping from useDepartmentAnnouncements
 *
 * @example
 * const { news, loading, error } = useDepartmentNews({
 *   departmentCode: "cse",
 *   limit: 10
 * });
 */
export function useDepartmentNews(
  options: UseDepartmentNewsOptions
): UseDepartmentNewsResult {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setLoading(true);
      setError(null);

      const departmentCode = options.departmentCode.toLowerCase();

      // Fetch from local data
      const fetchedNews = getNewsByDepartmentCode(departmentCode);

      // Apply limit if specified
      const limitedNews = options.limit
        ? fetchedNews.slice(0, options.limit)
        : fetchedNews;

      setNews(limitedNews);
    } catch (err) {
      console.error("[useDepartmentNews] Error:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch news");
      setNews([]);
    } finally {
      setLoading(false);
    }
  }, [options.departmentCode, options.limit]);

  return { news, loading, error };
}
