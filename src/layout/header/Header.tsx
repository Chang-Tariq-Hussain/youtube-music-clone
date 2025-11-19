import { useEffect, useState } from "react";
import { LuAlignJustify, LuCast, LuSearch } from "react-icons/lu";
import useSidebarStore from "../../store/sidebarStore";

export default function Header() {
  const { toggleSidebar } = useSidebarStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-20 flex items-center justify-between px-6 py-4 ${
        scrolled ? "bg-black border-b border-outline" : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-x-4">
        <LuAlignJustify className="text-xl" onClick={toggleSidebar} />
        <img
          src="https://music.youtube.com/img/on_platform_logo_dark.svg"
          alt="youtube music logo"
        />
      </div>

      <div className="flex items-center gap-x-5 sm:pr-7 sm:gap-x-6">
        <LuSearch className="text-xl" />
        <LuCast className="text-xl" />
        <button className="group relative bg-orange-400 w-6 h-6 rounded-full text-white">
          T
        </button>
      </div>
    </div>
  );
}
