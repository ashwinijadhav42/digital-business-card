import "bootstrap/dist/css/bootstrap.min.css";
import "./UnityRealEstate.css";
import logo from "../../../assets/images/realEstate/UnityLogo.png";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTelegramPlane,
  FaTwitter,
  FaWhatsapp,
  FaIdCard,
} from "react-icons/fa";

export default function UnityRealEstate({ data = {}, showAllIcons = false }) {

  return (
    <div className="real-card container p-0">

      {/* Top curved header */}
      <div className="card-header-custom">
        <div className="unity-logo-circle">
         
            <img src={logo} alt="logo" />
 
        </div>

      </div>

  
      {/* Content */}
      <div className="card-body-custom text-center px-4">
       <div className="unity-header">
        <h4>{data.agencyName || "Unity Developers"}</h4>

        <p className="unity-info-line">
          <FaIdCard className="me-2" />
          {data.reraNumber
            ? `RERA: ${data.reraNumber}`
            : "RERA: A123456789"}
        </p>
        <p className="description">
          {data.description ||
          "Unity Developers is a trusted real-estate company delivering quality residential and commercial projects "}
        </p>
</div>
        {/* Contact Info */}
        <div className="contact-list mt-4">
          <div className="contact-item">
            <FaPhoneAlt />
            <span>{data.phone || "9518311798"}</span>
          </div>

          <div className="contact-item">
            <FaEnvelope /> 
            <span>{data.email || "email@yoursite.com"}</span>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt /> 
            <span>{data.officeAddress || "12/34, Area, City - 456789"}</span>
          </div>

          <div className="contact-item">
            <FaGlobe />
            <span>{data.website || "www.realEstate.com"}</span>
          </div>
        </div>

{/* Specialization */}
<div className="unity-specialization-wrapper px-4 mt-4">
  <h5 className="specialization-title text-center mb-4">
    Our Expertise
  </h5>

  <div className="specialization-grid">

    <div className="specialization-box">
      <div className="spec-heading">Property Type</div>
      <div className="spec-content">
        {data.propertyType || "Apartment • Villa • Commercial"}
      </div>
    </div>

    <div className="specialization-box">
      <div className="spec-heading">Transaction</div>
      <div className="spec-content">
        {data.transactionType || "Buy • Sell • Rent"}
      </div>
    </div>

    <div className="specialization-box">
      <div className="spec-heading">Budget Range</div>
      <div className="spec-content highlight-text">
        {data.budgetRange || "₹50L – ₹2Cr"}
      </div>
    </div>

    <div className="specialization-box">
      <div className="spec-heading">Preferred Locations</div>
      <div className="spec-content">
        {data.preferredLocations || "Baner • Wakad • Hinjewadi"}
      </div>
    </div>

  </div>
</div>
        {/* Social Icons */}
        <div className="social-icons mt-4">

  {(!showAllIcons || data.facebook) && (
    <a href={data.facebook || "#"} target="_blank" rel="noopener noreferrer">
      <FaFacebookF />
    </a>
  )}

  {(!showAllIcons || data.instagram) && (
    <a href={data.instagram || "#"} target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
  )}

  {(!showAllIcons || data.youtube) && (
    <a href={data.youtube || "#"} target="_blank" rel="noopener noreferrer">
      <FaYoutube />
    </a>
  )}

  {(!showAllIcons || data.linkedin) && (
    <a href={data.linkedin || "#"} target="_blank" rel="noopener noreferrer">
      <FaLinkedinIn />
    </a>
  )}

  {(!showAllIcons || data.whatsapp) && (
    <a
      href={
        data.whatsapp
          ? `https://wa.me/${data.whatsapp}`
          : "#"
      }
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  )}
  {(!showAllIcons || data.twitter) && (
    <a
      href={
        data.twitter
          ? `https://wa.me/${data.twitter}`
          : "#"
      }
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaTwitter />
    </a>
  )}

</div>

              </div>

      <div className="text-center mt-2 mb-4">
  <button className="btn unity-view-more-image-btn">
     View more images of Unity Real Estate
  </button>
</div>
</div>
  );
}