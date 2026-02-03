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
                <a href="/sampleCard" className="btn btn-primary me-3">
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
        <h3 className="text-center mb-3">
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
        <h3 className="text-center mb-4">Key Features</h3>
        <div className="row">
          {[
            "Mobile Friendly",
            "One Click Share",
            "Easy Customization",
            "QR Code Enabled",
            "Analytics Tracking",
            "Secure Platform",
          ].map((feature, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow-sm h-100 text-center">
                <div className="card-body">
                  <h5>{feature}</h5>
                  <p className="text-muted">
                    Build and manage your digital card effortlessly.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container mt-5">
        <h3 className="text-center mb-4">How It Works</h3>
        <div className="row text-center">
          <div className="col-md-4">
            <h5>1. Sign Up</h5>
            <p>Create your free account</p>
          </div>
          <div className="col-md-4">
            <h5>2. Create Your Card</h5>
            <p>Add your details and branding</p>
          </div>
          <div className="col-md-4">
            <h5>3. Share Instantly</h5>
            <p>Share via link or QR code</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container mt-5">
        <h3 className="text-center mb-4">Why Choose VbizCard?</h3>
        <div className="row align-items-center">
          <div className="col-md-6">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">✔ No App Required</li>
              <li className="list-group-item">✔ Works on All Devices</li>
              <li className="list-group-item">✔ Instant Updates</li>
              <li className="list-group-item">✔ Professional Branding</li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={democardimage}
                alt="Demo Digital Business Card"
              className="img-fluid"
            />
          </div>
        </div>
      </section>

      

     
      {/* CTA */}
      <section className="container mt-5 mb-5 text-center">
        <h4>Create Your Digital Business Card</h4>
        <p className="text-muted">
          Admin login is required to create a new card.
        </p>
        <a href="/admin/login" className="btn btn-success">
          Create Card
        </a>
      </section>
    </>
  );
}

export default HeroSection;
