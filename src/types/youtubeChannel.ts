// Basic thumbnail image object (shared across resources)
export interface Thumbnail {
  url: string;
  width?: number;
  height?: number;
}

// Map of thumbnails by size key (default, medium, high, standard, maxres)
export interface Thumbnails {
  default?: Thumbnail;
  medium?: Thumbnail;
  high?: Thumbnail;
  standard?: Thumbnail;
  maxres?: Thumbnail;
}

// Localized title/description
export interface ChannelLocalization {
  title?: string;
  description?: string;
}

// Channel snippet (basic details)
export interface ChannelSnippet {
  title: string;
  description: string;
  customUrl?: string;
  publishedAt: string; // ISO 8601 datetime
  thumbnails: Thumbnails;
  defaultLanguage?: string;
  localized?: ChannelLocalization;
  country?: string;
}

// Related playlists for the channel
export interface ChannelContentDetailsRelatedPlaylists {
  likes?: string; // Playlist ID
  uploads: string; // Playlist ID (most important)
  favorites?: string; // Deprecated
  watchHistory?: string; // Deprecated
  watchLater?: string; // Deprecated
}

export interface ChannelContentDetails {
  relatedPlaylists: ChannelContentDetailsRelatedPlaylists;
}

// Channel statistics (counts are strings because they can be very large uint64)
export interface ChannelStatistics {
  viewCount?: string;
  subscriberCount?: string;
  hiddenSubscriberCount?: boolean;
  videoCount?: string;
  commentCount?: string; // Deprecated
}

// Topic details
export interface ChannelTopicDetails {
  topicIds?: string[]; // Deprecated
  topicCategories?: string[]; // Wikipedia URLs, e.g., "https://en.wikipedia.org/wiki/Music"
}

// Channel status
export interface ChannelStatus {
  privacyStatus?: "public" | "unlisted" | "private";
  isLinked?: boolean;
  longUploadsStatus?: "allowed" | "eligible" | "disallowed";
  madeForKids?: boolean;
  selfDeclaredMadeForKids?: boolean;
}

// Core Channel resource
export interface Channel {
  kind: "youtube#channel";
  etag?: string;
  id: string;
  snippet?: ChannelSnippet;
  contentDetails?: ChannelContentDetails;
  statistics?: ChannelStatistics;
  topicDetails?: ChannelTopicDetails;
  status?: ChannelStatus;
  brandingSettings?: ChannelBrandingSettings; // Detailed below, often partial
  auditDetails?: ChannelAuditDetails;
  contentOwnerDetails?: ChannelContentOwnerDetails;
  localizations?: Record<string, ChannelLocalization>; // Key: language code (e.g., 'en')
}

// Simplified branding channel settings
export interface ChannelBrandingSettingsChannel {
  title?: string;
  description?: string;
  keywords?: string;
  unsubscribedTrailer?: string;
  country?: string;
  defaultLanguage?: string;
  trackingAnalyticsAccountId?: string;
  // Many others are deprecated (e.g., moderateComments, defaultTab)
}

// Branding settings (can be large; many image fields are deprecated)
export interface ChannelBrandingSettings {
  channel?: ChannelBrandingSettingsChannel;
  // image, watch, hints are mostly deprecated – omitted here for brevity
}

// Audit details (requires partner scope)
export interface ChannelAuditDetails {
  overallGoodStanding?: boolean;
  communityGuidelinesGoodStanding?: boolean;
  copyrightStrikesGoodStanding?: boolean;
  contentIdClaimsGoodStanding?: boolean;
}

// Content owner details (partner-linked)
export interface ChannelContentOwnerDetails {
  contentOwner?: string;
  timeLinked?: string; // ISO 8601 datetime
}

// Pagination info
export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

// Response from channels.list
export interface ChannelListResponse {
  kind: "youtube#channelListResponse";
  etag?: string;
  nextPageToken?: string;
  prevPageToken?: string;
  pageInfo: PageInfo;
  items: Channel[];
}
