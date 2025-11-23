export const youtubeKeys = {
  search: (query: string) => ['youtube', 'search', query] as const,
  video: (videoId: string) => ['youtube', 'video', videoId] as const,
};