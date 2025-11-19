import { Route, Routes } from "react-router";
import Layout from "../layout/Layout";
import Homepage from "../pages/Homepage/Homepage";

export default function RoutesConfig() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/explore" element={<h1>Explore</h1>} />
          <Route path="/library" element={<h1>Library</h1>} />
          <Route path="/upgrade" element={<h1>Upgrade</h1>} />
        </Route>
      </Routes>
    </>
  );
}
