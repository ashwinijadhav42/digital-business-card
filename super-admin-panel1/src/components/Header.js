import React, { useState } from "react";
import { FaMoon, FaSun, FaBars, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

function Header({ onToggle, authUser, onLogout ,collapsed}) {
  const location = useLocation();
  const navigate = useNavigate();

  const title =
    location.pathname.split("/")[1]?.toUpperCase() || "DASHBOARD";

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    document.body.classList.remove("light", "dark");
    document.body.classList.add(newTheme);
  };

  

  const goToProfile = () => {
    navigate("/profile");
  };

  return (
    <nav className="navbar shadow-sm px-4">
      <div className="d-flex align-items-center gap-3">
        <FaBars className="cursor-pointer" onClick={onToggle} />
        <h6 className="mb-0 fw-semibold">{title}</h6>
      </div>

      <div className="d-flex align-items-center gap-3">
        {/* Theme Toggle */}
        <button className="btn btn-light" onClick={toggleTheme}>
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>

        <div className="d-flex align-items-center">
        <a
          href="http://localhost:3000"
          className="btn btn-light"
        >
          User View
        </a>
      </div>

        {/* Profile Dropdown */}
        <div className="dropdown">
          <button
            className="btn btn-light dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            <FaUserCircle className="me-2" />
            {authUser?.email}
          </button>

          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <button className="dropdown-item" onClick={goToProfile}>
                Profile
              </button>
            </li>
            <li>
               {/* Logout Button */}
                  <div
                    className="dropdown-item text-danger"
                    onClick={onLogout}
                    style={{ cursor: "pointer", marginTop: "20px", color: "red" }}
                  >
                    <FaSignOutAlt />
                    {!collapsed && <span>Logout</span>}
                  </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;