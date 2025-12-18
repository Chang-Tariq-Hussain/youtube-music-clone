import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "@uidotdev/usehooks"; // Optional: for debouncing
import { youtubeApi } from "../client";

const fetchSearchResults = async (query: string) => {
  if (!query.trim()) return []; // Return empty if query is empty

  try {
    const { data } = await youtubeApi.get(
      `/search?q=${encodeURIComponent(query)}`
    );
    console.log("search data>>>", data);
    return data ?? [];
  } catch (error) {
    console.error("Error: >>>", error);
  }
};

export const useSearch = (searchTerm: string) => {
  const debouncedSearchTerm = useDebounce(searchTerm, 300); // 300ms debounce

  return useQuery({
    queryKey: ["search", debouncedSearchTerm],
    queryFn: () => fetchSearchResults(debouncedSearchTerm),
    enabled: !!debouncedSearchTerm, // Only run when there's a query
    staleTime: 1000 * 60, // 1 minute
    retry: 1,
    refetchOnWindowFocus: false,
  });
};
