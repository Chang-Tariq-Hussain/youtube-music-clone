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

  return (
    <div
      className={`fixed top-0 left-0 z-10 w-56 h-screen bg-black text-white px-2 py-4 transition-transform duration-300 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Top Header */}
      <div className="flex items-center gap-5 px-4 mb-6">
        <LuX className="text-2xl cursor-pointer" onClick={toggleSidebar} />
        <img
          src="https://music.youtube.com/img/on_platform_logo_dark.svg"
          alt=""
        />
      </div>

      {/* Navigation */}
      <nav className="space-y-1">
        {links.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            onClick={closeSidebar}
            to={to}
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
  );
}
