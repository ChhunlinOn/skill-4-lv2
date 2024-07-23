import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

export default function Root() {
  return (
    <>
      <div className="container">
        <div className="mains">
          <Sidebar />
          <div id="detail">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
