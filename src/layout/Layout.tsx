import { Outlet } from "react-router";
import Header from "./header/Header";
import Player from "./player/Player";
import Sidebar from "./sidebar/Sidebar";

export default function Layout() {
  return (
    <div className="bg-surface min-h-screen text-white">
      <Header />
      <div className="flex">
        <div className="flex">
          <Sidebar />
        </div>
        <div className="flex-1 overflow-hidden">
          <Outlet />
          <Player />
        </div>
      </div>
    </div>
  );
}
