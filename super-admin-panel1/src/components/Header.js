import React, { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

function Header({ onToggle, authUser, onLogout, collapsed }) {
  const location = useLocation();
  const navigate = useNavigate();

  const title =
    location.pathname.split("/")[1]?.toUpperCase() || "DASHBOARD";

  const [theme, setTheme] = useState("light");
  const [timeLeft, setTimeLeft] = useState("60:00");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    document.body.classList.remove("light", "dark");
    document.body.classList.add(newTheme);
  };

  const goToProfile = () => {
    navigate("/profile");
  };

  // Session Countdown Timer
  useEffect(() => {
    const updateTimer = () => {
      const loginTime = parseInt(localStorage.getItem("loginTime"));

      if (!loginTime) return;

      const now = new Date().getTime();
      const diff = now - loginTime;

      const remaining = 60 * 60 * 1000 - diff;

      if (remaining <= 0) {
        onLogout();
        return;
      }

      const minutes = Math.floor(remaining / 60000);
      const seconds = Math.floor((remaining % 60000) / 1000);

      setTimeLeft(
        `${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`
      );
    };

    updateTimer();

    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [onLogout]);

  return (
    <nav className="navbar shadow-sm px-4">
      <div className="d-flex align-items-center gap-3">
        <FaBars className="cursor-pointer" onClick={onToggle} />
        <h6 className="mb-0 fw-semibold">{title}</h6>
      </div>

      <div className="d-flex align-items-center gap-3">

        {/* Session Timer */}
        <span className="badge bg-warning text-dark">
          ⏳ {timeLeft}
        </span>

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
                <FaUserCircle className="me-2" />
                Profile
              </button>
            </li>

            <li>
              <div
                className="dropdown-item text-danger"
                onClick={onLogout}
                style={{ cursor: "pointer", marginTop: "20px" }}
              >
                <FaSignOutAlt />
                {!collapsed && <span className="ms-2">Logout</span>}
              </div>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Header;