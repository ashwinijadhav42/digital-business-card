import "bootstrap/dist/css/bootstrap.min.css";
import "./RealEstate.css";
import CardActions from "../../CardActions";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaGlobe,
  FaLinkedinIn,
  FaWhatsapp,
  FaIdCard,
  FaBriefcase,
  FaFilePdf,
  FaVideo
} from "react-icons/fa";

import defaultHouse from "../../../assets/images/realEstate/house.jpg";
//import defaultProfile from "../../../assets/images/defaultProfile.png";

const formatFacebookUrl = (value) => {
  if (!value) return "#";
  if (value.startsWith("http")) return value;
  return `https://facebook.com/${value.replace("@", "")}`;
};

const formatLinkedinUrl = (value) => {
  if (!value) return "#";
  if (value.startsWith("http")) return value;
  return `https://linkedin.com/in/${value.replace("@", "")}`;
};

const formatYoutubeUrl = (value) => {
  if (!value) return "#";
  if (value.startsWith("http")) return value;
  return `https://youtube.com/${value.replace("@", "")}`;
};

const formatInstagramUrl = (value) => {
  if (!value) return "#";
  if (value.startsWith("http")) return value;
  return `https://instagram.com/${value.replace("@", "")}`;
};
const formatTwitterUrl = (value) => {
  if (!value) return "#";
  if (value.startsWith("http")) return value;
  return `https://twitter.com/${value.replace("@", "")}`;
};

export default function RealEstate({ data = {}, showAllIcons = false ,publicUrl,onDownload,slug}) {
return (
    <div className="realestate-card text-center ">
      {/* Top Banner */}
      <div className="banner">
        <img
          src={data.profilePhoto || defaultHouse}
          alt="property"
          className="banner-img"
        />      
      </div>

      {/* Profile Section */}
      <div className="profile-section text-center">
        
       <h4>{data.agencyName || "JK Builders & Developers"}</h4>

<p className="info-line">
  <FaIdCard className="me-2" />
  {data.reraNumber
    ? `RERA: ${data.reraNumber}`
    : "RERA: A123456789"}
</p>
      </div>

      {/* About */}
      <div className="px-4 mt-3">
        <p className="text-center">
          {data.description ||
            "Trusted real estate expert helping clients buy, sell and rent properties ."}
        </p>
      </div>

      {/* Specialization */}
<div className="jk-specialization-wrapper px-4 mt-4">
  <h5 className="jk-specialization-title text-center mb-4">
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
{/* Contact Section */}
<div className="contact-section px-4 mt-3">

  {/* Phone */}
  <div className="contact-item">
    <FaPhoneAlt />
    <span className={!data.phone ? "disabled-contact" : ""}>
      {data.phone || "8436983423"}
    </span>
  </div>

  {/* Email */}
  <div className="contact-item">
    <FaEnvelope />
    <span className={!data.email ? "disabled-contact" : ""}>
      {data.email || "Email Address"}
    </span>
  </div>

  {/* Address */}
  <div className="contact-item">
    <FaMapMarkerAlt />
    <span className={!data.officeAddress ? "disabled-contact" : ""}>
      {data.officeAddress || "Office Address"}
    </span>
  </div>

  {/* Website */}
  <div className="contact-item">
    <FaGlobe />
    <span className={!data.website ? "disabled-contact" : ""}>
      {data.website || "Website URL"}
    </span>
  </div>
</div>

{/* View More Images Button */} 
<div className="text-center my-4"> <button className="btn btn-warning view-more-btn"> View more images of Real Estate </button> </div>
{/* Social Icons */}
<div className="social-icons text-center mt-4 mb-3">
{(!showAllIcons || data?.whatsapp) && (
    <a
      href={`https://wa.me/${data?.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  )}
  {(!showAllIcons || data?.facebook) && (
            <a
              href={formatFacebookUrl(data?.facebook)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          )}
  
          {(!showAllIcons || data?.linkedin) && (
            <a
              href={formatLinkedinUrl(data?.linkedin)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          )}
  
          {(!showAllIcons || data?.youtube) && (
            <a
              href={formatYoutubeUrl(data?.youtube)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          )}
  
          {(!showAllIcons || data?.instagram) && (
            <a
              href={formatInstagramUrl(data?.instagram)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          )}
          {(!showAllIcons || data?.twitter) && (
            <a
              href={formatTwitterUrl(data?.twitter)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          )}
</div>
<CardActions
  slug={slug}
  publicUrl={publicUrl}
  onDownload={onDownload}
/>
   
   <div className="zigzag"></div> </div>
    
  );
}