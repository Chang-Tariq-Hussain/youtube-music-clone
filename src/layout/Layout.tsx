import { Outlet } from "react-router";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

export default function Layout() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="main">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
