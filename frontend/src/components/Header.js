import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import cardLogo from "../assets/images/card-logo.jpg";

function Header() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  //  Get user from localStorage
 useEffect(() => {
  const getUser = () => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    setUser(loggedUser);
  };
  getUser();

  window.addEventListener("storage", getUser);

  return () => window.removeEventListener("storage", getUser);
}, []);

  //  Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/loginPage");
  };

  const goToProfile = () => {
    
    navigate("/user/profile");
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top bg-white shadow-lg">
        <div className="container">

          {/* LOGO */}
          <NavLink className="navbar-brand me-4" to="/">
            <img src={cardLogo} alt="logo" height="45" />
          </NavLink>

          {/* TOGGLE */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* MENU */}
          <div className="collapse navbar-collapse ps-lg-5" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2 text-center">

              <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/features" className="nav-link">Features</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/blogs" className="nav-link">Blogs</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/pricingDesign" className="nav-link">Pricing</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/templates" className="nav-link">Templates</NavLink>
              </li>

              {/*  USER DROPDOWN OR LOGIN */}
              {user ? (
                <li className="nav-item">
                  <div className="dropdown">
                    <button
                      className="btn btn-light dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <FaUserCircle className="me-2" />
                      {user?.name}
                    </button>

                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <button className="dropdown-item" onClick={goToProfile}>
                          Profile
                        </button>
                      </li>

                      <li>
                        <button
                          className="dropdown-item text-danger"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>
              ) : (
                <li className="nav-item">
                  <NavLink to="/loginPage" className="nav-link">
                    Login
                  </NavLink>
                </li>
              )}

              {/* ADMIN BUTTON */}
              {/*If you want admin dashboard to open in new tab*/}
              <li className="nav-item">
                <a
                  href="http://localhost:3001/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-danger px-3 py-2 ms-lg-2"
                >
                  Admin Login
                </a>
              </li>
{/*
              <li className="nav-item dropdown mt-2 mt-lg-0">
  <a
    className="nav-link dropdown-toggle fw-semibold border rounded px-3 py-1"
    href="#"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    <i className="fa-solid fa-user me-1"></i> Admin
  </a>

  <ul className="dropdown-menu">
    <li>
      <NavLink
        to="/template-category/add"
        className="dropdown-item"
      >
        Template Category
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/add-blog"
        className="dropdown-item"
      >
        Add Blog
      </NavLink>
    </li>
     <li>
      <NavLink
        to="/add-pricing"
        className="dropdown-item"
      >
        Add Pricing
      </NavLink>
      </li>
      <li>
      <NavLink
        to="/SampleCardInquiryList"
        className="dropdown-item"
      >
        SampleCardInquiryList
      </NavLink>
    </li>
  </ul>
</li>
*/}

   
            </ul>
            
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;