import { LuAlignJustify, LuCast, LuSearch } from "react-icons/lu";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-x-4">
        <LuAlignJustify className="text-2xl" />
        <img
          src="https://music.youtube.com/img/on_platform_logo_dark.svg"
          alt="youtube music logo"
        />
      </div>

      <div className="flex items-center gap-x-4">
        <LuSearch className="text-2xl" />
        <LuCast className="text-2xl" />
        <button className="group relative bg-orange-400 w-8 h-8 rounded-full text-white">
          T
        </button>
      </div>
    </div>
  );
}
