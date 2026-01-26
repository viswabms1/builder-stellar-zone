import { useEffect, useState } from "react";
import type { NewsItem } from "@/data/news";
import {
  getAllNews,
  getNewsBySchool,
  getNewsBySchoolAndDepartment,
  getNewsByCategory,
  getLatestNews,
  getNewsByTag,
} from "@/data/news";

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
 * Custom hook for fetching and filtering news
 * Currently uses local data; ready to swap with Directus API endpoint
 *
 * @example
 * // Get all news for Engineering school
 * const { news } = useNews({ school: "Engineering" });
 *
 * @example
 * // Get news for specific department
 * const { news } = useNews({ school: "Engineering", department: "CSE" });
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

        // TODO: Replace with Directus API call
        // const response = await fetch(
        //   'https://dsu-website-headless-cms.directus.app/items/news?filter[status]=published'
        // );
        // const data = await response.json();
        // let fetchedNews = data.data;

        // For now, use local data
        let fetchedNews: NewsItem[] = [];

        if (options?.school && options?.department) {
          fetchedNews = getNewsBySchoolAndDepartment(
            options.school,
            options.department
          );
        } else if (options?.school) {
          fetchedNews = getNewsBySchool(options.school);
        } else if (options?.tag) {
          fetchedNews = getNewsByTag(options.tag);
        } else if (options?.category) {
          fetchedNews = getNewsByCategory(options.category);
        } else if (options?.limit) {
          fetchedNews = getLatestNews(options.limit);
        } else {
          fetchedNews = getAllNews();
        }

        // Apply limit if specified (and not already applied by specific function)
        if (options?.limit && !options?.school && !options?.department) {
          fetchedNews = fetchedNews.slice(0, options.limit);
        }

        setNews(fetchedNews);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch news");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [options?.school, options?.department, options?.category, options?.tag, options?.limit]);

  return { news, loading, error };
}
