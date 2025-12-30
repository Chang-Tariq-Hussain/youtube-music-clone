import type { Channel } from "@/types/youtubeChannel";

type ImageSize = "sm" | "md" | "lg" | "xl" | number; // e.g., "md" or 80

interface ChannelCardProps {
  record: Channel;
  imageWidth?: ImageSize; // ← New: control image size
  imageHeight?: ImageSize;
  rounded?: "none" | "sm" | "md" | "lg" | "full"; // ← Optional: control border radius
  className?: string;
}

const roundedMap = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

const sizeMap = {
  sm: 48, // 12rem
  md: 64, // 16rem
  lg: 80, // 20rem
  xl: 96, // 24rem
};

export default function ChannelCard({
  record,
  imageWidth = "lg",
  imageHeight = "sm",
  rounded = "sm",
  className = "channel-card",
}: ChannelCardProps) {
  const imgWidth =
    typeof imageWidth === "number" ? imageWidth : sizeMap[imageWidth];
  const imgHeight =
    typeof imageHeight === "number" ? imageHeight : sizeMap[imageHeight];
  return (
    <div className={` ${className} flex items-center gap-4`}>
      <div className={`group relative shrink-0`}>
        <img
          src={record.snippet?.thumbnails?.medium?.url}
          alt={record?.snippet?.title}
          className={`object-cover ${roundedMap[rounded]} transition-all duration-300 
                    group-hover:brightness-75`}
          style={{ width: `${imgWidth}px`, height: `${imgHeight}px` }}
        />
      </div>
      <p>{record?.snippet?.title}</p>
    </div>
  );
}
