import React from "react";
import demoCard from "../assets/images/demo-card.png";
import digidemocard from "../assets/images/digital-demo-card.png"
import democardimage from "../assets/images/demo-card-image.webp"
function HeroSection() {
  return (
    <>
      {/* HERO */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="hero-title">
                Create Your Digital Business Card in Seconds
              </h1>
              <p className="hero-text">
                Share your contact details, social links, and business
                information instantly with a single smart link.
              </p>
              <div className="mt-3">
                <a href="/register" className="btn btn-primary me-3">
                  Create Your Card
                </a>
                <a href="/Templates" className="btn btn-primary me-3">
                  See Sample Card
                </a>
              </div>
            </div>

            <div className="col-md-6 text-center">
              <img
                src={digidemocard}
                alt="Digital Business Card Preview"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="container mt-5">
        <h3 className="text-center mb-2 text-primary fs-6">KEY FEATURES</h3>
       
        <h3 className="text-center mb-3 fw-bold">
          Digital Business Cards Made Simple
        </h3>
        <p className="text-center text-muted">
          VbizCard helps professionals, businesses, and entrepreneurs create
          modern digital business cards to share contact details, social links,
          and business information instantly.
        </p>
      </section>

      {/* FEATURES */}
      <section className="container mt-5">
     
        <div className="row text-center">
          {[
  { title: "Mobile Friendly", icon: "bi bi-phone" },
  { title: "One Click Share", icon: "bi bi-share" },
  { title: "Easy Customization", icon: "bi bi-magic" },
  { title: "QR Code Enabled", icon: "bi bi-qr-code-scan" },
  { title: "Analytics Tracking", icon: "bi bi-graph-up-arrow" },
  { title: "Secure Platform", icon: "bi bi-shield-lock" },
      ].
            map((feature, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow-sm h-100 text-center  p-4  border-0">
                <div className="card-body">
                <div className="mb-3">
                <i className={`${feature.icon} text-primary`}
                style={{ fontSize: '2.5rem' }}></i>
               </div>

                  <h5 className="fw-bold"> {feature.title}</h5>
                  <p className="text-muted small">
                    Build and manage your digital card effortlessly.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container py-5 ">
  <div className="text-center mb-5">
    <h6 className="text-primary text-uppercase fw-bold">Process</h6>
    <h2 className="fw-bold">How It Works</h2>
  </div>

  <div className="row text-center g-4">
    {/* Step 1 */}
    <div className="col-md-4">
      <div className="p-4 border rounded shadow-sm h-100">
        <div className="display-4 text-primary fw-bold fs-2">1</div>
        <h5 className="fw-bold">Sign Up</h5>
        <p className="text-muted">Create your free account in just a few seconds.</p>
      </div>
    </div>

    {/* Step 2 */}
    <div className="col-md-4">
      <div className="p-4 border rounded shadow-sm h-100">
        <div className="display-4 text-primary fw-bold fs-2">2</div>
        <h5 className="fw-bold">Create Your Card</h5>
        <p className="text-muted">Add your professional details, links, and branding.</p>
      </div>
    </div>

    {/* Step 3 */}
    <div className="col-md-4">
      <div className="p-4 border rounded shadow-sm h-100">
        <div className="display-4 text-primary fw-bold fs-2">3</div>
        <h5 className="fw-bold">Share Instantly</h5>
        <p className="text-muted">Share your card via a unique link or a custom QR code.</p>
      </div>
    </div>
  </div>
</section>
<section className="container mt-5 mb-5">
  <div className="row align-items-center">

    {/* LEFT SIDE - WHY CHOOSE US */}
    <div className="col-md-6 mb-4 mb-md-0">
      <h3 className="fw-bold mb-4">Why Choose VbizCard?</h3>
      <h6 className="text-primary fw-bold">EXCELLENCE</h6>

      <ul className="list-group list-group-flush mt-3">
        <li className="list-group-item fw-bold">
          <span className="text-primary me-2">✔</span> No App Required
        </li>
        <li className="list-group-item fw-bold">
          <span className="text-primary me-2">✔</span> Works on All Devices
        </li>
        <li className="list-group-item fw-bold">
          <span className="text-primary me-2">✔</span> Instant Updates
        </li>
        <li className="list-group-item fw-bold">
          <span className="text-primary me-2">✔</span> Professional Branding
        </li>
      </ul>
    </div>

    {/* RIGHT SIDE - CTA CARD */}
    <div className="col-md-6 d-flex justify-content-center">
      <div className="custom-square-card p-3 text-center shadow bg-white w-100">
        
        <div className="icon-container mb-2">
          <img
            src={democardimage}
            alt="icon"
            style={{ width: "200px", height: "auto" }}
            className="img-fluid"
          />
        </div>

        <h4 className="fw-bold mb-2">Professional Dashboard</h4>
        <p className="text-muted mb-4">
          Admin login is required to create a new card.
        </p>

        <a
          href="http://localhost:3001/dashboard"
          className="btn btn-success px-4 py-2"
        >
          Create Card
        </a>

      </div>
    </div>

  </div>
</section>
</>
  )

}





export default HeroSection;
