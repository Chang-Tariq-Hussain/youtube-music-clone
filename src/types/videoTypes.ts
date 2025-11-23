export type YoutubeVideo = {
  kind: string;
  etag: string;
  id: string;
  snippet?: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default?: { url: string; width: number; height: number };
      medium?: { url: string; width: number; height: number };
      high?: { url: string; width: number; height: number };
      standard?: { url: string; width: number; height: number };
      maxres?: { url: string; width: number; height: number };
    };
    channelTitle: string;
    tags?: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized?: { title: string; description: string };
  };
  contentDetails?: {
    duration: string;
    dimension: string;
    definition: string;
    caption: string;
    licensedContent: boolean;
    projection: string;
  };
  statistics?: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
  player?: {
    embedHtml: string;
  };
};

export type VideosListResponse = {
  kind: string;
  etag: string;
  items: YoutubeVideo[];
  nextPageToken?: string;
  prevPageToken?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
};

export type VideoPart =
  | "id"
  | "snippet"
  | "contentDetails"
  | "liveStreamingDetails"
  | "localizations"
  | "player"
  | "recordingDetails"
  | "statistics"
  | "status"
  | "topicDetails";

export type VideosListParams = {
  /** Required — The parts of video resource to include */
  part: readonly VideoPart[];

  /** Filter results */
  chart?: "mostPopular"; // Only valid value for chart-based lists
  id?: string; // Comma-separated video IDs (e.g. "abc123,xyz789")
  myRating?: "like" | "dislike"; // Return videos user liked/disliked

  /** Music & regional filters */
  videoCategoryId?: string; // '10' = Music
  regionCode?: string; // 'US', 'IN', 'GB', etc.
  videoDuration?: "any" | "long" | "medium" | "short";

  /** Language & localization */
  hl?: string; // Interface language (e.g. 'en', 'hi')
  locale?: string; // Deprecated, but still accepted

  /** Pagination */
  maxResults?: number; // 0–50 (default: 5)
  pageToken?: string; // Next/previous page token

  /** Date filters */
  publishedAfter?: string; // RFC 3339 (e.g. '2024-01-01T00:00:00Z')
  publishedBefore?: string; // RFC 3339

  /** Advanced filters */
  forDeveloper?: boolean; // Restrict to developer's videos
  managedByMe?: boolean; // For content owners
  onBehalfOfContentOwner?: string; // For CMS users
  notifySubscribers?: boolean; // Filter by notification setting

  /** Rarely used but valid */
  videoLicense?: "any" | "creativeCommon" | "youtube";
  videoEmbeddable?: "any" | "true";
  videoSyndicated?: "any" | "true";
  videoType?: "any" | "episode" | "movie";
};

// Fetch specific videos by ID
export const videoDetailsParams: VideosListParams = {
  part: ["snippet", "contentDetails", "statistics", "player"],
  id: "dQw4w9WgXcQ",
};

// New releases in last 7 days (music only)
export const newReleasesParams: VideosListParams = {
  part: ["snippet", "contentDetails"],
  chart: "mostPopular",
  videoCategoryId: "10",
  publishedAfter: "2025-11-16T00:00:00Z",
  maxResults: 25,
};
