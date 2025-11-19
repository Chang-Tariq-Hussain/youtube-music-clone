import { useEffect, useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { GoHomeFill } from "react-icons/go";
import { LuPlus, LuX } from "react-icons/lu";
import { MdOutlineExplore } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { Link, useLocation } from "react-router";
import useSidebarStore from "../../store/sidebarStore";

const links = [
  { to: "/", label: "Home", icon: GoHomeFill },
  { to: "/explore", label: "Explore", icon: MdOutlineExplore },
  { to: "/library", label: "Library", icon: CiBookmark },
  { to: "/upgrade", label: "Upgrade", icon: SiYoutubemusic },
];

export default function Sidebar() {
  const { toggleSidebar, isSidebarOpen, closeSidebar, openSidebar } =
    useSidebarStore();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        openSidebar(); // Always open on lg+
      } else {
        closeSidebar(); // Optional: close on mobile when resizing
      }
    };

    // Run on mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [openSidebar, closeSidebar]);

  return (
    <>
      <div
        className={`hidden lg:border-r lg:border-outline sm:flex flex-col items-center ${
          isSidebarOpen ? "lg:w-56" : "lg:w-20 lg:border-none"
        } w-20 h-[calc(100vh-63px)] sticky top-[63px] left-0 px-2 py-6 ${
          scrolled ? "border-r border-outline" : "bg-transparent"
        } transition-[width] duration-300 ease-in-out
          `}
      >
        {links.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            className={`flex flex-col items-center ${
              isSidebarOpen &&
              "lg:flex-row lg:items-center lg:gap-4 lg:px-4 lg:py-3"
            } py-4 px-2 w-full transition rounded-md
              ${
                location.pathname === to
                  ? "bg-surface-elevated"
                  : "hover:bg-surface-elevated"
              }`}
          >
            <Icon className="text-2xl" />
            <span className="mt-1">{label}</span>
          </Link>
        ))}

        <div className={`${!isSidebarOpen && "hidden"} w-full`}>
          {/* Divider */}
          <div
            className={`hidden ${
              !isSidebarOpen && "hidden"
            } lg:block lg:my-6 lg:mx-4 lg:h-px bg-outline `}
            id="divider"
          ></div>
          <button
            className={`hidden ${
              !isSidebarOpen && "hidden"
            } bg-surface-elevated h-9 px-2 w-[90%] mx-auto lg:flex items-center justify-center gap-x-2 rounded-full`}
          >
            <LuPlus className="text-2xl" />
            New playlist
          </button>
        </div>
      </div>
      <div
        className={`
          fixed top-0 left-0 z-20 w-56 h-screen lg:hidden ${
            scrolled ? " border-r border-outline" : ""
          } md:${
          isSidebarOpen ? "fixed" : "sticky md:top-[63px]"
        } bg-surface text-white px-2 py-4
          transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
     `}
      >
        {/* Drawer header (only visible for drawer) */}
        <div className="flex items-center gap-5 px-4 mb-6">
          <LuX className="text-2xl cursor-pointer" onClick={toggleSidebar} />
          <img
            src="https://music.youtube.com/img/on_platform_logo_dark.svg"
            alt=""
          />
        </div>

        {/* Drawer navigation */}
        <nav className="space-y-1">
          {links.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              onClick={closeSidebar}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg transition
                ${
                  location.pathname === to
                    ? "bg-surface-elevated"
                    : "hover:bg-surface-elevated"
                }`}
            >
              <Icon className="text-2xl" />
              <span>{label}</span>
            </Link>
          ))}
        </nav>

        <div className={` w-full`}>
          {/* Divider */}
          <div className={`my-6 mx-4 h-px bg-outline `} id="divider"></div>
          <button
            className={` bg-surface-elevated h-9 px-2 w-[90%] mx-auto flex items-center justify-center gap-x-2 rounded-full`}
          >
            <LuPlus className="text-2xl" />
            New playlist
          </button>
        </div>
      </div>
    </>
  );
}
