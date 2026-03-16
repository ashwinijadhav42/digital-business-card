import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="admin-layout">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;