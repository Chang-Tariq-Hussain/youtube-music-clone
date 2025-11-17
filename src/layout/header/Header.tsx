import { LuAlignJustify, LuCast, LuSearch } from "react-icons/lu";
import useSidebarStore from "../../store/sidebarStore";

export default function Header() {
  const { toggleSidebar } = useSidebarStore();
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-x-4">
        <LuAlignJustify className="text-xl" onClick={toggleSidebar} />
        <img
          src="https://music.youtube.com/img/on_platform_logo_dark.svg"
          alt="youtube music logo"
        />
      </div>

      <div className="flex items-center gap-x-4">
        <LuSearch className="text-xl" />
        <LuCast className="text-xl" />
        <button className="group relative bg-orange-400 w-6 h-6 rounded-full text-white">
          T
        </button>
      </div>
    </div>
  );
}
