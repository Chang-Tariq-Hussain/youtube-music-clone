// src/api/youtube/queries/useRelatedVideos.ts
import { useQuery } from "@tanstack/react-query";
import { youtubeApi } from "../client";

export const useRelatedVideos = (videoId: string) => {
  return useQuery({
    queryKey: ["related", videoId],
    queryFn: async () => {
      // First, get current video details
      const videoRes = await youtubeApi.get("/videos", {
        params: {
          part: "snippet",
          id: videoId,
        },
      });
      const currentVideo = videoRes.data.items[0];
      if (!currentVideo) return [];

      const title = currentVideo.snippet.title;
      const channel = currentVideo.snippet.channelTitle;

      // Search for similar: title + channel + music filter
      const searchRes = await youtubeApi.get("/search", {
        params: {
          part: "snippet",
          q: `${title} ${channel}`, // e.g., "Song Title Artist Name"
          type: "video",
          videoCategoryId: "10", // Music only
          maxResults: 25,
          regionCode: "IN",
          order: "relevance",
        },
      });

      // Filter out the current video
      const relatedIds = searchRes.data.items
        .filter((item: any) => item.id.videoId !== videoId)
        .map((item: any) => item.id.videoId)
        .slice(0, 20); // Limit to 20

      if (relatedIds.length === 0) return [];

      // Get full details (duration, views)
      const videosRes = await youtubeApi.get("/videos", {
        params: {
          part: "snippet,contentDetails,statistics",
          id: relatedIds.join(","),
          maxResults: 20,
        },
      });

      return videosRes.data.items;
    },
    enabled: !!videoId,
    staleTime: 1000 * 60 * 10, // 10 min cache
  });
};
