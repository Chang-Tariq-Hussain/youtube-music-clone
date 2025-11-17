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
    <div
      className={`relative w-screen sm:pl-14 sm:w-[80vw] md:w-[85vw] lg:[90vw]`}
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tempora ipsa
        officia praesentium, modi aliquam id est numquam in ducimus corrupti rem
        enim soluta rerum atque quibusdam quam ratione libero perspiciatis autem
        earum voluptates et. Distinctio aliquid officia voluptate odio id itaque
        ad debitis ratione officiis labore. Nihil animi sed voluptate maiores
        soluta ut reprehenderit consectetur sint libero ratione atque ab, nemo
        necessitatibus minus? Dolorem consectetur at reprehenderit repellendus
        similique qui quis, itaque sed blanditiis mollitia nam libero cupiditate
        voluptatibus earum dolor quos asperiores ratione quaerat! Necessitatibus
        nobis neque itaque? Sit eaque saepe incidunt, aliquam tempore labore
        tempora rerum ullam voluptatem fugiat repellat! Quam maiores aperiam
        consectetur rem ex nesciunt et maxime temporibus earum. Perferendis
        voluptatibus aliquam sint accusantium suscipit quasi magnam nisi earum
        eveniet iure maxime, distinctio soluta sunt architecto adipisci
        reiciendis quae debitis! Dignissimos vero ab nostrum laboriosam
        asperiores quibusdam omnis minus recusandae, deleniti amet voluptatem
        tempore quia, quam laborum voluptatibus corporis dolorem. Corporis,
        quidem veniam atque libero quo magni repellat maxime ea facere, ad ipsum
        magnam! Veritatis, labore autem. Hic dolor rem est amet architecto
        beatae quas labore modi molestias culpa accusantium similique vitae quo,
        delectus unde itaque ducimus excepturi nostrum. Nobis quae earum laborum
        sit blanditiis! eriores quibusdam omnis minus recusandae, deleniti amet
        voluptatem tempore quia, quam laborum voluptatibus corporis dolorem.
        Corporis, quidem veniam atque libero quo magni repellat maxime ea
        facere, ad ipsum magnam! Veritatis, labore autem. Hic dolor rem est amet
        architecto beatae quas labore modi molestias culpa accusantium similique
        vitae quo, delectus unde itaque ducimus excepturi nostrum. Nobis quae
        earum laborum sit blanditiis! eriores quibusdam omnis minus recusandae,
        deleniti amet voluptatem tempore quia, quam laborum voluptatibus
        corporis dolorem. Corporis, quidem veniam atque libero quo magni
        repellat maxime ea facere, ad ipsum magnam! Veritatis, labore autem. Hic
        dolor rem est amet architecto beatae quas labore modi molestias culpa
        accusantium similique vitae quo, delectus unde itaque ducimus excepturi
        nostrum. Nobis quae earum laborum sit blanditiis! eriores quibusdam
        omnis minus recusandae, deleniti amet voluptatem tempore quia, quam
        laborum voluptatibus corporis dolorem. Corporis, quidem veniam atque
        libero quo magni repellat maxime ea facere, ad ipsum magnam! Veritatis,
        labore autem. Hic dolor rem est amet architecto beatae quas labore modi
        molestias culpa accusantium similique vitae quo, delectus unde itaque
        ducimus excepturi nostrum. Nobis quae earum laborum sit blanditiis!
        eriores quibusdam omnis minus recusandae, deleniti amet voluptatem
        tempore quia, quam laborum voluptatibus corporis dolorem. Corporis,
        quidem veniam atque libero quo magni repellat maxime ea facere, ad ipsum
        magnam! Veritatis, labore autem. Hic dolor rem est amet architecto
        beatae quas labore modi molestias culpa accusantium similique vitae quo,
        delectus unde itaque ducimus excepturi nostrum. Nobis quae earum laborum
        sit blanditiis! eriores quibusdam omnis minus recusandae, deleniti amet
        voluptatem tempore quia, quam laborum voluptatibus corporis dolorem.
        Corporis, quidem veniam atque libero quo magni repellat maxime ea
        facere, ad ipsum magnam! Veritatis, labore autem. Hic dolor rem est amet
        architecto beatae quas labore modi molestias culpa accusantium similique
        vitae quo, delectus unde itaque ducimus excepturi nostrum. Nobis quae
        earum laborum sit blanditiis! eriores quibusdam omnis minus recusandae,
        deleniti amet voluptatem tempore quia, quam laborum voluptatibus
        corporis dolorem. Corporis, quidem veniam atque libero quo magni
        repellat maxime ea facere, ad ipsum magnam! Veritatis, labore autem. Hic
        dolor rem est amet architecto beatae quas labore modi molestias culpa
        accusantium similique vitae quo, delectus unde itaque ducimus excepturi
        nostrum. Nobis quae earum laborum sit blanditiis!eriores quibusdam omnis
        minus recusandae, deleniti amet voluptatem tempore quia, quam laborum
        voluptatibus corporis dolorem. Corporis, quidem veniam atque libero quo
        magni repellat maxime ea facere, ad ipsum magnam! Veritatis, labore
        autem. Hic dolor rem est amet architecto beatae quas labore modi
        molestias culpa accusantium similique vitae quo, delectus unde itaque
        ducimus excepturi nostrum. Nobis quae earum laborum sit blanditiis!
      </p>
    </div>
  );
}
