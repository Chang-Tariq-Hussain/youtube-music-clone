import { LuPlay } from "react-icons/lu";
import type { YoutubeVideo } from "../../../types/videoTypes";
import { formatCount, formatTimeAgo } from "../../../utils/helpers";

type ImageSize = "sm" | "md" | "lg" | "xl" | number; // e.g., "md" or 80

interface QuickPickCardProps {
  record: YoutubeVideo;
  imageWidth?: ImageSize; // ← New: control image size
  imageHeight?: ImageSize;
  rounded?: "none" | "sm" | "md" | "lg" | "full"; // ← Optional: control border radius
  className?: string;
}

const sizeMap = {
  sm: 48, // 12rem
  md: 64, // 16rem
  lg: 80, // 20rem
  xl: 96, // 24rem
};

const roundedMap = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};
export default function QuickPickCard({
  record,
  imageWidth = "lg",
  imageHeight = "sm",
  rounded = "sm",
  className = "",
}: QuickPickCardProps) {
  const imgWidth =
    typeof imageWidth === "number" ? imageWidth : sizeMap[imageWidth];
  const imgHeight =
    typeof imageHeight === "number" ? imageHeight : sizeMap[imageHeight];

  return (
    <div
      className={`${className} relative flex gap-4 p-2 rounded-lg hover:bg-white/10 transition group cursor-pointer`}
    >
      <div className={`group relative shrink-0`}>
        <img
          src={record.snippet?.thumbnails?.medium?.url}
          alt={record?.snippet?.title}
          className={`object-cover ${roundedMap[rounded]} transition-all duration-300 
               group-hover:brightness-75`}
          style={{ width: `${imgWidth}px`, height: `${imgHeight}px` }}
        />
        <div
          className="absolute inset-0 rounded-md bg-black/70 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300 
                  flex items-center justify-center"
        >
          <LuPlay className="text-2xl text-white drop-shadow-2xl translate-y-1" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-start truncate min-w-0">
        <p className="font-medium text-white overflow-hidden">
          {record?.snippet?.title.split("|")[0]}
        </p>

        <p className="text-sm text-gray-400 overflow-hidden">
          {[
            formatCount(record?.statistics?.viewCount),
            record.snippet?.channelTitle,
            formatTimeAgo(record?.snippet?.publishedAt),
          ].map((item, index, list) => (
            <span key={index}>
              {item}
              {index < list.length - 1 && (
                <span className="mx-1 select-none">•</span>
              )}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
