import { useEffect, useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { GoHomeFill } from "react-icons/go";
import { LuX } from "react-icons/lu";
import { MdOutlineExplore } from "react-icons/md";
import { Link, useLocation } from "react-router";
import useSidebarStore from "../../store/sidebarStore";

const links = [
  { to: "/", label: "Home", icon: GoHomeFill },
  { to: "/explore", label: "Explore", icon: MdOutlineExplore },
  { to: "/library", label: "Library", icon: CiBookmark },
];

export default function Sidebar() {
  const { toggleSidebar, isSidebarOpen, closeSidebar } = useSidebarStore();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`hidden sm:flex flex-col items-center lg:flex-row lg:items-center w-20 h-[calc(100vh-63px)] sticky top-[63px] left-0 px-2 py-6 ${
          scrolled ? "bg-black border-r border-white" : "bg-transparent"
        } `}
      >
        {links.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            className={`flex flex-col items-center py-4 px-2 w-full transition rounded-md
              ${
                location.pathname === to ? "bg-gray-900" : "hover:bg-gray-800"
              }`}
          >
            <Icon className="text-2xl" />
            <span className="text-xs mt-1">{label}</span>
          </Link>
        ))}
      </div>
      <div
        className={`
          fixed top-0 left-0 z-20 w-56 h-screen ${
            scrolled ? "bg-black border-r border-white" : ""
          } md:${
          isSidebarOpen ? "relative" : "sticky md:top-[63px]"
        } bg-black text-white px-2 py-4
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
                  location.pathname === to ? "bg-gray-900" : "hover:bg-gray-800"
                }`}
            >
              <Icon className="text-2xl" />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
