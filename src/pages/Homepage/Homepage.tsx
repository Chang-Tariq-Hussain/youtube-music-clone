import { useState } from "react";
import { useFetchVideos } from "../../api/queries/videoQueries";
import { Chip } from "../../components/common/chip/Chip";
import { topMusicParams } from "../../utils/constants";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import QuickPickSlider from "@/layout/slider/QuickPickSlider";

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

  return (
    <div
      className={`relative pb-40 w-full sm:px-14 sm:w-[80vw] md:w-[85vw] lg:[90vw]`}
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
      {/* <Player /> */}

      {/* <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
        {data?.items.map((item: YoutubeVideo) => (
          <button onClick={() => handleClick(item)}>
            <QuickPickCard record={item} />
          </button>
        ))}
      </div> */}
      {/* Custom Navigation Buttons - Positioned on top right */}
      <QuickPickSlider data={data} heading={"Most Popular"} />
    </div>
  );
}
