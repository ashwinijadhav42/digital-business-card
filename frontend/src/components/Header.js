import { NavLink } from "react-router-dom";
import cardLogo from "../assets/images/card-logo.jpg";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top bg-white shadow-lg">
        <div className="container">

          {/* LOGO */}
          <NavLink className="navbar-brand me-4" to="/">
            <img src={cardLogo} alt="logo" height="45" />
          </NavLink>

          {/* HAMBURGER (MOBILE) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* MENU */}
          <div
            className="collapse navbar-collapse ps-lg-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2 text-center">

              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/features" className="nav-link">
                  Features
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/blogs" className="nav-link">
                  Blogs
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/pricing" className="nav-link">
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/templates" className="nav-link">
                  Templates
                </NavLink>
              </li>

              {/* LOGIN */}
<li className="nav-item mt-2 mt-lg-0">
                <NavLink
                 to="/LoginPage"
                  
                  className="nav-link fw-semibold border rounded px-3 py-1"
                >
                  <i className="fa-solid fa-user me-1"></i>Login
                </NavLink>
              </li>

              <li className="nav-item mt-2 mt-lg-0">
                <NavLink
                 
                   to="/template-category/add"
                  className="nav-link fw-semibold border rounded px-3 py-1"
                >
                  <i className="fa-solid fa-user me-1"></i>Template category
                </NavLink>
              </li>

              {/* CTA */}
              <li className="nav-item mt-2 mt-lg-0">
                <NavLink
                  to="/createCard"
                  className="btn btn-primary px-3 py-2 ms-lg-2"
                >
                  Create Your Digital Card
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
