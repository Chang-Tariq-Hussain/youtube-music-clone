import type { VideosListParams } from "../types/videoTypes";

export const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const regions = [
  { code: "US", name: "United States" },
  { code: "IN", name: "India" },
  { code: "GB", name: "United Kingdom" },
  { code: "KR", name: "South Korea" },
  { code: "JP", name: "Japan" },
  { code: "BR", name: "Brazil" },
];

export const topMusicParams: VideosListParams = {
  part: ["snippet", "contentDetails", "statistics"],
  chart: "mostPopular",
  videoCategoryId: "10",
  regionCode: "IN",
  maxResults: 20,
};
