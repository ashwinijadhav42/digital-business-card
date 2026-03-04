import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserShield,
  FaUsers,
  FaIdCard,
  FaLayerGroup,
  FaTags,
  FaBlog,
  FaAddressBook
} from "react-icons/fa";

import logo from "../img/logo.png";

function Sidebar({ collapsed, role }) {

  const superAdminMenu = [
    { path: "/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    { path: "/admin", label: "Admins", icon: <FaUserShield /> },
    { path: "/users", label: "Users", icon: <FaUsers /> },
    { path: "/cards", label: "Cards", icon: <FaIdCard /> },
    { path: "/templates", label: "Templates", icon: <FaLayerGroup /> },
    { path: "/pricinglist", label: "Pricing", icon: <FaTags /> },
    { path: "/blogs", label: "Blogs", icon: <FaBlog /> },
    { path: "/categories", label: "Categories", icon: <FaAddressBook /> },
    { path: "/featuremaster", label: "Feature Master", icon: <FaAddressBook /> }
  ];

  const subAdminMenu = [
    { path: "/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    { path: "/users", label: "Users", icon: <FaUsers /> },
    { path: "/cards", label: "Cards", icon: <FaIdCard /> },
    { path: "/templates", label: "Templates", icon: <FaLayerGroup /> },
    { path: "/blogs", label: "Blogs", icon: <FaBlog /> },
    { path: "/categories", label: "Categories", icon: <FaAddressBook /> },
    { path: "/featuremaster", label: "Feature Master", icon: <FaAddressBook /> }
  ];

  const menu = role === "SUPER_ADMIN" ? superAdminMenu : subAdminMenu;

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      
      <div className="sidebar-logo">
        <img src={logo} alt="Logo" width="40" />
        {!collapsed && <span>Builder</span>}
      </div>

      <nav>
        {menu.map((item) => (
          <NavLink key={item.path} to={item.path} className="nav-link">
            {item.icon}
            {!collapsed && <span>{item.label}</span>}
          </NavLink>
        ))}

       

      </nav>
    </aside>
  );
}

export default Sidebar;