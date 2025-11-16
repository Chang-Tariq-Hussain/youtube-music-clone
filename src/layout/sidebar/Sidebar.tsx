import { LuAlignJustify } from "react-icons/lu";
export default function Sidebar() {
  return (
    <div className="sidebar px-2 py-4">
      {/* Sidebar Header */}
      <div className="flex items-center gap-x-4">
        <LuAlignJustify />
        <img
          src="https://music.youtube.com/img/on_platform_logo_dark.svg"
          alt="youtube music logo"
        />
      </div>
    </div>
  );
}
