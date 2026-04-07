import UserSidebar from "./UserSidebar";
import { Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <div className="d-flex">
      
      {/* Sidebar */}
      <UserSidebar />

      {/* Page Content */}
      <div className="content p-4" style={{ width: "100%" }}>
        <Outlet />
      </div>

    </div>
  );
}

export default UserLayout;