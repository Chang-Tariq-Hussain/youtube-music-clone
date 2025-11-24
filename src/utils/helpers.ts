export const formatCount = (count?: string | number): string => {
  const num = Number(count);
  if (!count || isNaN(num)) return "0";

  const abs = Math.abs(num);
  if (abs >= 1e9) return `${(num / 1e9).toFixed(1).replace(".0", "")}B`;
  if (abs >= 1e6) return `${(num / 1e6).toFixed(1).replace(".0", "")}M`;
  if (abs >= 1e3) return `${(num / 1e3).toFixed(1).replace(".0", "")}K`;
  return num.toString();
};

export const formatTimeAgo = (dateString: string | undefined): string => {
  if (!dateString) return "Unknown";

  const now = new Date();
  const published = new Date(dateString);
  const diffInMs = now.getTime() - published.getTime();
  const diffInSeconds = Math.floor(diffInMs / 1000);

  if (diffInSeconds < 60) return "Just now";

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60)
    return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24)
    return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7)
    return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;

  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4)
    return `${diffInWeeks} week${diffInWeeks > 1 ? "s" : ""} ago`;

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12)
    return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`;

  const diffInYears = Math.floor(diffInDays / 365);
  return `${diffInYears} year${diffInYears > 1 ? "s" : ""} ago`;
};
