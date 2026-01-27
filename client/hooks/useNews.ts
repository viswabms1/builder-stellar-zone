import { useEffect, useState } from "react";
import type { NewsItem } from "@/lib/content-manager";

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
 * Custom hook for fetching news from Directus CMS
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
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch from Directus API (no sorting - some news may not have date field)
        const directusUrl = `https://dsu-website-headless-cms.directus.app/items/news?limit=${options?.limit || 100}`;

        console.log("[useNews] Fetching from:", directusUrl);

        const response = await fetch(directusUrl);

        if (response.ok) {
          const data = await response.json();
          let fetchedNews = data.data || [];

          // Filter for published news (or news without status)
          fetchedNews = fetchedNews.filter((newsItem: any) => {
            if (!newsItem.status) return true; // Include news without status
            return newsItem.status === "published";
          });

          // Client-side filtering
          if (options?.school) {
            fetchedNews = fetchedNews.filter((n: any) =>
              n.school_code === options.school || !n.school_code
            );
          }

          if (options?.department) {
            fetchedNews = fetchedNews.filter((n: any) =>
              n.department_code === options.department
            );
          }

          if (options?.category) {
            fetchedNews = fetchedNews.filter((n: any) =>
              n.category === options.category
            );
          }

          if (options?.tag) {
            fetchedNews = fetchedNews.filter((n: any) =>
              n.tags?.includes(options.tag)
            );
          }

          // Apply limit after filtering
          if (options?.limit) {
            fetchedNews = fetchedNews.slice(0, options.limit);
          }

          setNews(fetchedNews);
        } else {
          throw new Error(`API responded with status ${response.status}`);
        }
      } catch (err) {
        console.error("[useNews] Error:", err);
        setError(err instanceof Error ? err.message : "Failed to fetch news");
        setNews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [options?.school, options?.department, options?.category, options?.tag, options?.limit]);

  return { news, loading, error };
}
