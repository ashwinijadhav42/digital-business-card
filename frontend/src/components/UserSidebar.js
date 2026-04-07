import { NavLink, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaHome,
  FaSignOutAlt,
  FaThList,
} from "react-icons/fa";
import "./UserSidebar.css";

function UserSidebar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/loginPage");
  };

  return (
    <div className="sidebar p-5 shadow">

      {/* USER PROFILE */}
      <div className="sidebar-header text-center">
        <FaUser size={45} className="user-icon" />
        <h6 className="mt-2 mb-0">{user?.name || "User"}</h6>
        <small className="text-muted">Welcome back</small>
      </div>

      {/* MENU */}
      <ul className="sidebar-menu">

        <li>
          <NavLink to="/" className="sidebar-link">
            <FaHome /> <span>Home</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/user/profile" className="sidebar-link">
            <FaUser /> <span>Profile</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/user/templates" className="sidebar-link">
            <FaThList /> <span>Templates</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/user/SampleCardInquiryList" className="sidebar-link">
            <FaThList /> <span>Inquiry</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/user/Affiliations" className="sidebar-link">
            <FaThList /> <span>Affiliations</span>
          </NavLink>
        </li>

      </ul>

      {/* LOGOUT */}
      <div className="sidebar-footer">
        <button onClick={handleLogout} className="logout-btn">
          <FaSignOutAlt /> Logout
        </button>
      </div>

    </div>
  );
}

export default UserSidebar;