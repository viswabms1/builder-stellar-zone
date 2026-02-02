import { useEffect, useState } from "react";
import type { NewsItem } from "@/lib/content-manager";
import { getNewsBySchool, getNewsBySchoolAndDepartment, getAllNews } from "@/data/news";

interface UseNewsOptions {
  school?: string;
  department?: string;
  category?: NewsItem["category"];
  tag?: string;
  limit?: number;
}

interface UseNewsResult {
  news: NewsItem[];
  loading: boolean;
  error: string | null;
}

/**
 * Custom hook for fetching news
 *
 * @example
 * // Get all news for Engineering school
 * const { news } = useNews({ school: "ENG" });
 *
 * @example
 * // Get news for specific department
 * const { news } = useNews({ school: "ENG", department: "cse" });
 *
 * @example
 * // Get latest 5 placement news items
 * const { news } = useNews({ category: "Placement", limit: 5 });
 */
export function useNews(options?: UseNewsOptions): UseNewsResult {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setLoading(true);
      setError(null);

      let fetchedNews: NewsItem[] = [];

      // Get news from local data
      if (options?.school && options?.department) {
        fetchedNews = getNewsBySchoolAndDepartment(options.school, options.department);
      } else if (options?.school) {
        fetchedNews = getNewsBySchool(options.school);
      } else {
        fetchedNews = getAllNews();
      }

      // Client-side filtering
      if (options?.category) {
        fetchedNews = fetchedNews.filter((n) => n.category === options.category);
      }

      if (options?.tag) {
        fetchedNews = fetchedNews.filter((n) => n.tags?.includes(options.tag!));
      }

      // Apply limit after filtering
      if (options?.limit) {
        fetchedNews = fetchedNews.slice(0, options.limit);
      }

      setNews(fetchedNews);
    } catch (err) {
      console.error("[useNews] Error:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch news");
      setNews([]);
    } finally {
      setLoading(false);
    }
  }, [options?.school, options?.department, options?.category, options?.tag, options?.limit]);

  return { news, loading, error };
}
