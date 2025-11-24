import Player from "../../layout/player/Player";

export default function Watch() {
  //   const {
  //     currentTrack,
  //     isPlaying,
  //     togglePlay,
  //     nextTrack,
  //     prevTrack,
  //     volume,
  //     setVolume,
  //     progress,
  //     setProgress,
  //   } = usePlayerStore();
  return (
    <div className="px-14 mt-6 flex items-center gap-x-6">
      <div className="flex-[60%] border">
        <h1>THumbnail</h1>
      </div>
      <div className="flex-[40%] border">
        <h1>Right Side</h1>
      </div>
      <Player />
    </div>
  );
}
