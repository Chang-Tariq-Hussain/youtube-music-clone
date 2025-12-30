export interface Thumbnail {
  url: string;
  width?: number;
  height?: number;
}

export interface Thumbnails {
  default?: Thumbnail;
  medium?: Thumbnail;
  high?: Thumbnail;
  maxres?: Thumbnail;
}

export interface ResourceId {
  kind: "youtube#video" | "youtube#channel" | "youtube#playlist";
  videoId?: string;
  channelId?: string;
  playlistId?: string;
}

export interface SearchResultSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: "none" | "live" | "upcoming";
}

export interface SearchResult {
  kind: "youtube#searchResult";
  etag: string;
  id: ResourceId;
  snippet: SearchResultSnippet;
}

export interface SearchListResponse {
  kind: "youtube#searchListResponse";
  etag?: string;
  nextPageToken?: string;
  prevPageToken?: string;
  regionCode?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: SearchResult[];
}
