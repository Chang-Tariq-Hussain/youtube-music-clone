import { useState } from "react";
import { useFetchVideos } from "../../api/queries/videoQueries";
import AlbumCard from "../../components/common/album-card/AlbumCard";
import { Chip } from "../../components/common/chip/Chip";
import QuickPickCard from "../../components/common/quick-pick-card/QuickPickCard";

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

const quickPicksData = [
  {
    image: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
    title: "Shape of You",
    info: ["Ed Sheeran", "3.9B plays", "÷ (Divide)"],
  },
  {
    image: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
    title: "Blinding Lights",
    info: ["The Weeknd", "4.5B plays", "After Hours"],
  },
  {
    image: "https://i.scdn.co/image/ab67616d0000b273e85259a1cae29a8d91f2093d",
    title: "Believer",
    info: ["Imagine Dragons", "2.8B plays", "Evolve"],
  },
  {
    image: "https://i.scdn.co/image/ab67616d0000b2732a0381ea9caf5a2ac39c68b3",
    title: "Kesariya",
    info: ["Arijit Singh", "Pritam", "Brahmāstra"],
  },
  {
    image: "https://i.scdn.co/image/ab67616d0000b273b5e20686c0f9d12656e127ed",
    title: "Calm Down",
    info: ["Rema", "Selena Gomez", "2.1B plays"],
  },
  {
    image: "https://i.scdn.co/image/ab67616d0000b2731da538ded5176fee1b13e1af",
    title: "STAY",
    info: ["The Kid LAROI", "Justin Bieber", "3.7B plays"],
  },
  {
    image: "https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d583b",
    title: "Sunflower",
    info: ["Post Malone", "Swae Lee"],
  },
  {
    image: "https://i.scdn.co/image/ab67616d0000b273212d5e7f1d2e8f8e8f8e8f8e",
    title: "Peaches",
    info: ["Justin Bieber", "Daniel Caesar", "Giveon"],
  },
  {
    image: "https://i.scdn.co/image/ab67616d0000b273c6c6c6c6c6c6c6c6c6c6c6c6",
    title: "Levitating",
    info: ["Dua Lipa", "1.9B plays", "Future Nostalgia"],
  },
  {
    image: "https://i.scdn.co/image/ab67616d0000b273a9a9a9a9a9a9a9a9a9a9a9a9",
    title: "Dance Monkey",
    info: ["Tones and I", "3.2B plays"],
  },
  {
    image: "https://i.scdn.co/image/ab67616d0000b273f54b99b6e6f3e9e8f9e9f9e9",
    title: "Heat Waves",
    info: ["Glass Animals", "2.3B plays"],
  },
  {
    image: "https://i.scdn.co/image/ab67616d0000b273d0d8f6e6e6e6e6e6e6e6e6e6",
    title: "Raataan Lambiyan",
    info: ["Jubin Nautiyal", "Asees Kaur", "Shershaah"],
  },
  {
    image: "https://i.scdn.co/image/ab67616d0000b273e8e8e8e8e8e8e8e8e8e8e8e8",
    title: "O Bedardeya",
    info: ["Arijit Singh", "Tu Jhoothi Main Makkaar"],
  },
  {
    image: "https://i.scdn.co/image/ab67616d0000b273f1f1f1f1f1f1f1f1f1f1f1f1",
    title: "Excuses",
    info: ["AP Dhillon", "Gurinder Gill"],
  },
  {
    image: "https://i.scdn.co/image/ab67616d0000b2739f3e6e6e6e6e6e6e6e6e6e6e",
    title: "Brown Munde",
    info: ["AP Dhillon", "Gurinder Gill", "Gminxr"],
  },
  {
    image: "https://i.scdn.co/image/ab67616d0000b2737h7h7h7h7h7h7h7h7h7h7h7h",
    title: "Unholy",
    info: ["Sam Smith", "Kim Petras"],
  },
  {
    image: "https://i.scdn.co/image/ab67616d0000b273d7d7d7d7d7d7d7d7d7d7d7d7",
    title: "Anti-Hero",
    info: ["Taylor Swift", "Midnights"],
  },
  {
    image: "https://i.scdn.co/image/ab67616d0000b273ff9ca10b55ce82ae553c8228",
    title: "Someone You Loved",
    info: ["Lewis Capaldi", "2.9B plays"],
  },
  {
    image: "https://i.scdn.co/image/ab67616d0000b273a1a1a1a1a1a1a1a1a1a1a1a1",
    title: "Perfect",
    info: ["Ed Sheeran", "3.2B plays"],
  },
  {
    image: "https://i.scdn.co/image/ab67616d0000b273b1519f0c2e9f9e9f9e9f9e9f",
    title: "Closer",
    info: ["The Chainsmokers", "Halsey"],
  },
];

export default function Homepage() {
  const [active, setActive] = useState("Trending");
  const { data, isLoading } = useFetchVideos({
    part: ["snippet", "contentDetails", "statistics"],
    chart: "mostPopular",
    videoCategoryId: "10",
    regionCode: "IN",
    maxResults: 50,
  });

  console.log("data>>>>", data);
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
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
        {quickPicksData.map((item: any) => (
          <QuickPickCard record={item} />
        ))}
      </div>
      <AlbumCard />
    </div>
  );
}
