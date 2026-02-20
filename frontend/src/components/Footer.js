function Footer() {
  return (
    
    <footer className="footer text-light pt-4 pb-3 ">
      <div className="container">
        <div className="row">

          {/* About */}
          <div className="col-md-4 mb-3">
            <h4>Digital Business Card</h4>
            <p className=" text-light">
              Create and share modern digital business cards for professionals,
              doctors, and freelancers.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-4 mb-3">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/templates" className="text-light text-decoration-none">Templates</a></li>
              <li><a href="/admin/login" className="text-light text-decoration-none">Admin Login</a></li>
              <li><a href="/admin/register" className="text-light text-decoration-none">Register Admin</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-3">
            <h4>Contact</h4>
            <p className="mb-1">Email: support@digitalcard.com</p>
            <p className="mb-0">Phone: +91 9876543210</p>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center">
          © {new Date().getFullYear()} Digital Business Card. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
