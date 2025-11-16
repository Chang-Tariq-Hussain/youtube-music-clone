import { Outlet } from "react-router";
import Sidebar from "./sidebar/Sidebar";

export default function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
}
