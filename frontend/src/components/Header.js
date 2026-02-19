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
                <NavLink to="/pricingDesign" className="nav-link">
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
                 to="/loginPage"
                  
                  className="nav-link fw-semibold border rounded px-3 py-1"
                >
                  <i className="fa-solid fa-user me-1"></i>Login
                </NavLink>
              </li>

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
        to="/pricing"
        className="dropdown-item"
      >
        Pricing
      </NavLink>
    </li>
  </ul>
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
