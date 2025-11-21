import { LuEllipsisVertical, LuPlay } from "react-icons/lu";

export default function AlbumCard() {
  return (
    <div className="flex flex-col w-40">
      <div className="group relative">
        <img
          src="https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96"
          className="w-44 h-44 object-cover rounded-md cursor-pointer"
          alt=""
        />
        <div className="absolute bottom-2 right-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-2 py-2">
          <LuPlay className="text-xl " />
        </div>

        <div className="absolute top-2 right-1 hover:rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50 px-2 py-2 hover:cursor-pointer">
          <LuEllipsisVertical className="text-xl" />
        </div>
      </div>
      <div className="pt-2 ">
        <strong className="font-medium hover:underline cursor-pointer">
          Shape of you (Ed-Shereen){" "}
        </strong>
        <p className="text-sm text-on-surface-variant">
          Album <span className="mx-1 select-none">•</span> Divide
        </p>
      </div>
    </div>
  );
}
