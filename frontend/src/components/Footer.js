function Footer() {
  return (
    
    <footer className="footer text-light pt-4 pb-3 bg-dark mt-5 ">
      <div className="container">
        <div className="row">

          {/* About */}
          <div className="col-md-4 mb-3">
            <h4 className="fs-4 fw-bold mb-4">Digital Business Card</h4>
            <p className=" text-light">
              Create and share modern digital business cards for professionals,
              doctors, and freelancers.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-3 offset-md-1 mb-3">
            <h4 className="fs-4 fw-bold mb-4">Quick Links</h4>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/" className="text-light text-decoration-none">Home</a> </li>
              <li className="mb-2"><a href="/templates" className="text-light text-decoration-none">Templates</a></li>
              <li className="mb-2"><a href="/create your card"className="text-light text-decoration-none">Create your card</a></li>
              <li className="mb-2"><a href="/See sample card"className="text-light text-decoration-none">See sample card</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-3">
            <h4 className="fs-4 fw-bold mb-4">Contact</h4>
            <p className="mb-1">Email:</p>
            <p className="mb-1">support@digitalcard.com</p>
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

