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
      className={`relative w-screen sm:px-14 sm:w-[80vw] md:w-[85vw] lg:[90vw]`}
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
      <p className="">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque velit
        sed mollitia impedit tenetur veritatis similique. Est reprehenderit
        voluptates, perspiciatis nostrum quam odit! Nesciunt sit architecto, eos
        sequi rerum, laudantium laborum, neque esse velit corrupti ratione
        quaerat! Numquam cum ducimus, quod fugit ipsam vel, officia veniam
        cupiditate cumque aperiam facere aliquid reiciendis laudantium non
        obcaecati eaque error, perferendis laborum dolore ex fuga. Facere
        aliquid similique fugit. Sint iure eum nobis vero vel omnis et molestiae
        suscipit odit voluptatibus exercitationem, libero quas culpa id ullam
        perferendis, pariatur eaque aliquam ex ea, illum harum itaque
        reprehenderit quaerat. Corrupti repudiandae quaerat neque tempore et
        voluptas inventore ex error molestiae facere eius perspiciatis magni
        maiores similique illum sint, nostrum nisi. Distinctio earum quis
        officia quod accusantium, placeat corrupti repellendus rerum rem natus
        in sunt. Ea distinctio est nulla aut a, pariatur consectetur vel velit
        rerum, ullam quaerat tempore, eum officiis laudantium quam tempora optio
        in quidem! Voluptates ipsam ad magnam aspernatur. Consectetur, sequi.
        Unde temporibus, nisi praesentium consequuntur impedit amet tenetur
        ducimus sit hic molestias suscipit rem quae excepturi quidem totam! Quas
        commodi sit delectus officia magnam cupiditate accusamus nostrum. Aut
        rem odit ducimus voluptates ratione reiciendis, voluptatum modi
        praesentium numquam a fugiat, corporis blanditiis nobis. Fuga
        voluptatibus aliquam veritatis unde, laboriosam esse facilis id adipisci
        eveniet accusamus. Animi nesciunt laborum quod voluptate velit.
        Praesentium dignissimos pariatur neque provident unde. Et, cumque!
        Possimus laudantium vero, molestias fugit magnam numquam officiis
        recusandae eum excepturi atque, a sint. Unde voluptates dignissimos
        neque aperiam ut error officiis? Dolor repellat iusto, qui dignissimos,
        atque officiis quisquam totam similique molestias esse veritatis libero
        quia porro corrupti nostrum fugiat. Labore praesentium nam ratione unde
        porro nulla pariatur, minima modi eos reiciendis quas, necessitatibus
        omnis voluptatibus est doloremque. Ducimus esse distinctio cumque, non
        ipsum accusantium, aut fugiat nulla dolor quia aliquid! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Sequi officiis asperiores
        officia dolorum doloribus commodi fugit impedit harum, provident
        voluptates quam, similique saepe error? Debitis fugiat sapiente velit
        mollitia facilis maxime similique quam non a culpa impedit quae fugit
        molestiae eaque commodi doloremque repellendus possimus numquam
        pariatur, provident tenetur adipisci eum delectus eveniet. Nulla quam
        expedita aperiam. Aliquam est consequuntur odit cumque eos perferendis
        neque quasi, soluta quam, fugiat sit, expedita nam ipsa fuga. Quo,
        perspiciatis est minus optio eaque ipsa rem? Adipisci aliquam nulla
        aspernatur, voluptatum a in possimus molestias perferendis, nesciunt
        tempore sit culpa voluptas blanditiis veritatis fugiat eius doloribus
        eveniet officia consequatur dolorem vitae accusantium consectetur nisi?
        Incidunt fugiat similique laudantium fugit rerum autem, dolores
        reprehenderit in iusto voluptates aliquid culpa sunt sed mollitia
        accusantium eos odit eaque ex unde distinctio, pariatur ea quisquam?
        Laborum quaerat labore blanditiis eius repellendus maxime assumenda ex
        ut repudiandae? Exercitationem consequuntur impedit autem? Alias,
        accusantium itaque. Nisi corrupti blanditiis officia corporis dolores
        vitae saepe recusandae incidunt reiciendis, facere, veniam quos dicta
        voluptates voluptatibus necessitatibus veritatis sapiente temporibus
        assumenda voluptate ipsam eveniet, vero possimus error? Blanditiis optio
        corrupti beatae ad atque exercitationem iusto doloribus quia, dolores
        itaque necessitatibus iste dolor ullam. Voluptas.
      </p>
    </div>
  );
}
