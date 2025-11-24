import { useState } from "react";
import { useFetchVideos } from "../../api/queries/videoQueries";
import { Chip } from "../../components/common/chip/Chip";
import QuickPickCard from "../../components/common/quick-pick-card/QuickPickCard";
import TextHeading from "../../components/common/text-heading/TextHeading";
import Player from "../../layout/player/Player";
import { usePlayerStore } from "../../store/playerStore";
import { topMusicParams } from "../../utils/constants";

export const categories = [
  "Relax",
  "Workout",
  "Party",
  "Focus",
  "Sleep",
  "Energize",
  "Chill",
  "Bollywood",
  "Pakistani",
  "Romance",
  "Hip-Hop",
  "Pop",
  "Punjabi",
  "Trending",
  "New Releases",
  "Classic Mix",
  "Retro Vibes",
];

export default function Homepage() {
  const [active, setActive] = useState("Trending");
  const { data } = useFetchVideos(topMusicParams);
  const { playTrack } = usePlayerStore();
  return (
    <div
      className={`relative w-screen pb-40 sm:px-14 sm:w-[80vw] md:w-[85vw] lg:[90vw]`}
    >
      <div className="flex gap-3 overflow-x-auto no-scrollbar px-4 py-3 md:scrollbar">
        {categories.map((cat) => (
          <Chip
            key={cat}
            text={cat}
            active={active === cat}
            onClick={() => setActive(cat)}
          />
        ))}
      </div>
      <Player />
      <TextHeading text={"Most Popular"} />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
        {data?.items.map((item: any) => (
          <button onClick={() => playTrack(item)}>
            <QuickPickCard record={item} />
          </button>
        ))}
      </div>
    </div>
  );
}
