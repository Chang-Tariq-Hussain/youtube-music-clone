import {
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  ThumbsDown,
  ThumbsUp,
  Volume2,
} from "lucide-react";
import { useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player";
import { usePlayerStore } from "../../store/playerStore";

export default function Player() {
  const {
    currentTrack,
    isPlaying,
    togglePlay,
    nextTrack,
    prevTrack,
    volume,
    setVolume,
    progress,
    setProgress,
  } = usePlayerStore();

  const [duration, setDuration] = useState(0);

  if (!currentTrack) return null;

  const handleProgress = (state: any) => {
    setProgress(state.played);
  };

  const handleDurationChange = (durationValue: any) => {
    // ← FIXED: Use 'any' for param
    const durationNum = typeof durationValue === "number" ? durationValue : 0; // Safe extraction
    setDuration(durationNum);
  };

  return (
    <>
      {/* Hidden ReactPlayer — Audio Only */}
      <ReactPlayer
        src={`https://www.youtube.com/watch?v=${currentTrack.id}`}
        playing={isPlaying}
        volume={volume}
        onProgress={handleProgress}
        onDurationChange={handleDurationChange} // ← Now TS happy!
        width="0"
        height="0"
        controls={true}
        style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
        config={{
          youtube: {
            playerVars: {
              autoplay: 1,
              controls: 1,
              showinfo: 1,
              rel: 0,
              modestbranding: 1,
              iv_load_policy: 3,
              fs: 0,
              playsinline: 1,
            },
          } as any,
        }}
      />

      {/* Miniplayer UI */}
      <div className="fixed bottom-0 left-0 right-0 bg-surface-elevated backdrop-blur-2xl border-t border-white/10 z-50">
        <div className="max-w-7xl mx-auto p-3 flex items-center justify-between gap-x-6">
          <div className="flex items-center gap-x-2">
            <button
              onClick={prevTrack}
              className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10"
            >
              <SkipBack className="w-6 h-6 cursor-pointer" />
            </button>
            <button
              onClick={togglePlay}
              className="p-4 hover:scale-110 transition"
            >
              {isPlaying ? (
                <FaPause className="text-3xl cursor-pointer" />
              ) : (
                <FaPlay className="text-3xl ml-0.5 cursor-pointer" />
              )}
            </button>
            <button
              onClick={nextTrack}
              className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10"
            >
              <SkipForward className="w-6 h-6 cursor-pointer" />
            </button>
            <div className="flex items-center gap-x-2 font-sm text-gray-400 md:hidden">
              <span>{formatTime(progress * duration)}</span>
              <span>/</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          <div className="hidden sm:flex items-center justifiy-center gap-x-4 flex-1">
            <img
              src={currentTrack.snippet?.thumbnails?.high?.url}
              alt=""
              className="w-14 h-14 rounded-lg object-cover"
            />
            <div className="truncate">
              <p className="text-white font-semibold w-[200px] md:w-[350px] lg:w-[500px] xl:w-full text-lg line-clamp-1 truncate">
                {currentTrack?.snippet?.title.split("|")[0]}
              </p>
              <p className="text-gray-400 text-sm">
                {currentTrack?.snippet?.channelTitle}
              </p>
            </div>
            <div className="hidden lg:flex gap-x-6 ml-4">
              <ThumbsUp className="h-6 w-6 cursor-pointer text-gray-400" />
              <ThumbsDown className="h-6 w-6 cursor-pointer text-gray-400" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Volume2 className="w-6 h-6 text-white/70" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-20 accent-white"
            />
          </div>
          <div className="hidden lg:flex items-center gap-x-4">
            <Repeat className="h-6 w-6 cursor-pointer text-gray-400" />
            <Shuffle className="h-6 w-6 cursor-pointer text-gray-400" />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-yt-red-accent cursor-pointer">
          <div
            className="h-full  transition-all duration-300"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </>
  );
}

const formatTime = (seconds: number): string => {
  if (isNaN(seconds) || seconds <= 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};
