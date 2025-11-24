// src/components/Player/AudioOnlyPlayer.tsx
import { Pause, Play, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { usePlayerStore } from "../../store/playerStore";

export default function AudioOnlyPlayer() {
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

  console.log("track>>>", currentTrack);

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
        style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
        config={{
          youtube: {
            playerVars: {
              autoplay: 1,
              controls: 0,
              showinfo: 0,
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
      <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-2xl border-t border-white/10 z-50">
        <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-4 flex-1">
            <img
              src={currentTrack.snippet?.thumbnails?.high?.url}
              alt=""
              className="w-14 h-14 rounded-lg object-cover"
            />
            <div>
              <p className="text-white font-semibold w-[250px] md:w-[350px] lg:w-[600px] xl:w-full text-lg line-clamp-1 truncate">
                {currentTrack?.snippet?.title}
              </p>
              <p className="text-gray-400 text-sm">
                {currentTrack?.snippet?.channelTitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={prevTrack}
              className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10"
            >
              <SkipBack className="w-6 h-6" />
            </button>
            <button
              onClick={togglePlay}
              className="bg-white text-black rounded-full p-4 hover:scale-110 transition"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6 ml-0.5" />
              )}
            </button>
            <button
              onClick={nextTrack}
              className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10"
            >
              <SkipForward className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <Volume2 className="w-5 h-5 text-white/70" />
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
        </div>

        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/20">
          <div
            className="h-full bg-linear-to-r from-white to-gray-300 transition-all duration-300"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        {/* Time Display */}
        <div className="px-4 pb-2 text-xs text-gray-400 flex justify-between">
          <span>{formatTime(progress * duration)}</span>
          <span>{formatTime(duration)}</span>
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
