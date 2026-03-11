import "bootstrap/dist/css/bootstrap.min.css";
import "./UnityRealEstate.css";
import logo from "../../../assets/images/realEstate/UnityLogo.png";
import CardActions from "../../CardActions";

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

export default function UnityRealEstate({ data = {}, showAllIcons = false ,slug,publicUrl,onDownload}) {

  return (
    <div className="real-card text-center container p-0 ">

      {/* Top curved header */}
      <div className="card-header-custom">
         <div className="banner">
        <img
          src={data.profilePhoto || logo}
          alt="property"
          className="unity-logo-circle"
        />      
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

  <div className="unity-contact-item">
    <span className="unity-contact-icon phone">
      <FaPhoneAlt />
    </span>
    <span>{data.phone || "9518311798"}</span>
  </div>

  <div className="unity-contact-item">
    <span className="unity-contact-icon email">
      <FaEnvelope />
    </span>
    <span>{data.email || "email@yoursite.com"}</span>
  </div>

  <div className="unity-contact-item">
    <span className="unity-contact-icon location">
      <FaMapMarkerAlt />
    </span>
    <span>{data.officeAddress || "12/34, Area, City - 456789"}</span>
  </div>

  <div className="unity-contact-item">
    <span className="unity-contact-icon website">
      <FaGlobe />
    </span>
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
<div className="unity-social-icons mt-4">

  {(!showAllIcons || data.facebook) && (
    <a href={data.facebook || "#"} target="_blank" rel="noopener noreferrer">
      <span className="icon facebook">
        <FaFacebookF />
      </span>
    </a>
  )}

  {(!showAllIcons || data.instagram) && (
    <a href={data.instagram || "#"} target="_blank" rel="noopener noreferrer">
      <span className="icon instagram">
        <FaInstagram />
      </span>
    </a>
  )}

  {(!showAllIcons || data.youtube) && (
    <a href={data.youtube || "#"} target="_blank" rel="noopener noreferrer">
      <span className="icon youtube">
        <FaYoutube />
      </span>
    </a>
  )}

  {(!showAllIcons || data.linkedin) && (
    <a href={data.linkedin || "#"} target="_blank" rel="noopener noreferrer">
      <span className="icon linkedin">
        <FaLinkedinIn />
      </span>
    </a>
  )}

  {(!showAllIcons || data.whatsapp) && (
    <a
      href={data.whatsapp ? `https://wa.me/${data.whatsapp}` : "#"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="icon whatsapp">
        <FaWhatsapp />
      </span>
    </a>
  )}

  {(!showAllIcons || data.twitter) && (
    <a
      href={data.twitter || "#"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="icon twitter">
        <FaTwitter />
      </span>
    </a>
  )}

</div>
</div>

      <div className="text-center mt-2 mb-4">
  <button className="btn unity-view-more-image-btn">
     View more images of Unity Real Estate
  </button>
</div>
<CardActions
  slug={slug}
  publicUrl={publicUrl}
  onDownload={onDownload}
/>
</div>
  );
}