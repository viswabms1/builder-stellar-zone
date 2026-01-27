import { useEffect, useState } from "react";
import type { NewsItem } from "@/lib/content-manager";
import { getDepartmentCode } from "./useDepartmentAnnouncements";

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
 * Custom hook for fetching department-specific news from Directus
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
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);

        const departmentCode = options.departmentCode.toLowerCase();
        const directusUrl = `https://dsu-website-headless-cms.directus.app/items/news?filter[department_code][_eq]=${departmentCode}&limit=${options.limit || 50}`;

        console.log("[useDepartmentNews] Fetching from:", directusUrl);

        const response = await fetch(directusUrl);

        if (response.ok) {
          const data = await response.json();
          let fetchedNews = data.data || [];

          // Filter for published news (or news without status)
          fetchedNews = fetchedNews.filter((newsItem: any) => {
            if (!newsItem.status) return true; // Include news without status
            return newsItem.status === "published";
          });

          setNews(fetchedNews);
        } else {
          throw new Error(`API responded with status ${response.status}`);
        }
      } catch (apiError) {
        console.error("[useDepartmentNews] Error:", apiError);
        setError(apiError instanceof Error ? apiError.message : "Failed to fetch news");
        setNews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [options.departmentCode, options.limit]);

  return { news, loading, error };
}
