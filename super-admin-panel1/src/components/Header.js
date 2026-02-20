import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaBars, FaUserCircle } from "react-icons/fa";

function Header({ onToggle }) {
  const location = useLocation();

  const title =
    location.pathname.split("/")[1]?.toUpperCase() || "DASHBOARD";
  
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    document.body.classList.remove("light", "dark");
    document.body.classList.add(newTheme);
  };
  <button onClick={() => document.body.classList.toggle("dark")}>
    Toggle Mode
  </button>


  return (
    <nav className="navbar shadow-sm px-4">
      <div className="d-flex align-items-center gap-3">
        <FaBars className="cursor-pointer" onClick={onToggle} />
        <h6 className="mb-0 fw-semibold">{title}</h6>
      </div>

       <div className="d-flex align-items-center gap-3">
        <button className="btn btn-light" onClick={toggleTheme}>
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>

        <div className="dropdown">
          <button
            className="btn btn-light dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            <FaUserCircle className="me-2" />
            Super Admin
          </button>

          <ul className="dropdown-menu dropdown-menu-end">
            <li><button className="dropdown-item">Profile</button></li>
            <li><button className="dropdown-item">Logout</button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
