import { LuPlay } from "react-icons/lu";
import type { YoutubeVideo } from "../../../types/videoTypes";
import { formatCount, formatTimeAgo } from "../../../utils/helpers";

export default function QuickPickCard({ record }: { record: YoutubeVideo }) {
  return (
    <div className="relative flex gap-4 p-2 rounded-lg hover:bg-white/10 transition group cursor-pointer">
      <div className="group relative">
        <img
          src={record.snippet?.thumbnails?.medium?.url}
          alt={record?.snippet?.title}
          className="object-cover rounded-md shrink-0 transition-all duration-300 
               group-hover:brightness-75"
        />
        <div
          className="absolute inset-0 rounded-md bg-black/70 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300 
                  flex items-center justify-center"
        >
          <LuPlay className="text-2xl text-white drop-shadow-2xl translate-y-1" />
        </div>
      </div>

      <div className="flex flex-col justify-center min-w-0">
        <p className="font-medium text-white truncate">
          {record?.snippet?.title}
        </p>

        <p className="text-sm text-gray-400 truncate">
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
