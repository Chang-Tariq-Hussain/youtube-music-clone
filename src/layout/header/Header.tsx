import { useEffect, useState } from "react";
import { LuAlignJustify, LuArrowLeft, LuCast, LuSearch } from "react-icons/lu";
import useSidebarStore from "../../store/sidebarStore";

export default function Header() {
  const { toggleSidebar, isSidebarOpen } = useSidebarStore();
  const [showSearchBox, setShowSearchBox] = useState(
    window.innerWidth > 768 ? true : false
  );
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleWindowSize = () => {
      if (window.innerWidth > 768) {
        setShowSearchBox(true);
      } else {
        setShowSearchBox(false);
      }
    };
    window.addEventListener("resize", handleWindowSize);
    return () => window.removeEventListener("resize", handleWindowSize);
  }, []);

  return (
    <div
      className={`sticky top-0 z-20 flex items-center justify-between px-6 py-4 h-16 ${
        scrolled ? "bg-surface border-b border-outline" : "bg-transparent"
      }`}
    >
      <div
        className={`flex items-center gap-x-4 w-50 h-[70px]  lg:border-r lg:border-outline ${
          scrolled && "border-none"
        } ${!isSidebarOpen && "border-none"}`}
      >
        <LuAlignJustify
          className="text-xl cursor-pointer"
          onClick={toggleSidebar}
        />
        <img
          src="https://music.youtube.com/img/on_platform_logo_dark.svg"
          alt="youtube music logo"
        />
      </div>

      <div className="flex items-center gap-x-5 sm:pr-7 sm:gap-x-6">
        <form
          className={`${
            !showSearchBox && "hidden"
          } fixed top-2 left-2 z-30 bg-surface h-10 w-[97%] mr-2 sm:w-[480px] flex items-center border border-outline rounded-sm md:static md:bg-surface-elevated md:has-focus:bg-surface `}
        >
          <LuArrowLeft
            className="text-white text-2xl mx-4 cursor-pointer md:hidden"
            onClick={() => setShowSearchBox(false)}
          />
          <LuSearch
            className={`hidden text-2xl cursor-pointer mx-4 md:block`}
          />
          <input
            type="text"
            placeholder="Search songs, albums, artists, podcasts"
            className="text-white pr-5 bg-transparent w-full mr-10 outline-none"
          />
        </form>
        <div className="flex items-center gap-x-5 sm:gap-x-6 shrink-0">
          <LuSearch
            className={`text-xl cursor-pointer ${
              showSearchBox && "hidden"
            } md:hidden`}
            onClick={() => setShowSearchBox(true)}
          />
          <LuCast className="text-xl" />
          <button className="group relative bg-orange-400 w-6 h-6 rounded-full text-white">
            T
          </button>
        </div>
      </div>
    </div>
  );
}
