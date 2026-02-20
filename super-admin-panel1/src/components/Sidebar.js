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

const menu = [
  { path: "/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
  { path: "/admin", label: "Admins", icon: <FaUserShield /> },
  { path: "/users", label: "Users", icon: <FaUsers /> },
  { path: "/cards", label: "Cards", icon: <FaIdCard /> },
  { path: "/templates", label: "Templates", icon: <FaLayerGroup /> },
  { path: "/pricinglist", label: "Pricing", icon: <FaTags /> },
  { path: "/blogs", label: "Blogs", icon: <FaBlog /> },
  {path: "/categories", label: "Categories", icon: <FaAddressBook /> },
  {path: "/featuremaster", label: "Feature Master", icon: <FaAddressBook /> }
];

function Sidebar({ collapsed }) {
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      
      {/* LOGO */}
      <div className="sidebar-logo">
        <img src={logo} alt="Card Builder" />
        {!collapsed && <span>Builder</span>}
      </div>

      {/* MENU */}
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
