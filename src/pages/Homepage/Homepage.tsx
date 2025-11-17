import { useState } from "react";
import { Chip } from "../../components/common/chip/Chip";

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
  return (
    <div className="relative w-screen">
      <div className="flex gap-3 overflow-x-scroll px-2 py-3">
        {categories.map((cat) => (
          <Chip
            key={cat}
            text={cat}
            active={active === cat}
            onClick={() => setActive(cat)}
          />
        ))}
      </div>
    </div>
  );
}
