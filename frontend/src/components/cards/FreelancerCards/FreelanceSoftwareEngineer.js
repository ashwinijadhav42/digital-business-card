import "bootstrap/dist/css/bootstrap.min.css";
import "./FreelanceSoftwareEngineer.css";
import logo from "../../../assets/images/CorporateProfile.jpg";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaTelegramPlane,
  FaTwitter,
  FaQrcode,
} from "react-icons/fa";

export default function FreelanceSoftwareEngineer({ data = {} }) {
  return (
    <div className="fs-se-wrapper">
      <div className="fs-se-card">

       

        {/* ===== TOP ===== */}
        <div className="fs-se-top-images">
          <div className="fs-se-logo">
            <img
            src={data.logo || logo}
            alt="Logo"
            className="fs-se-logo-img"
          />
          </div>
        </div>

        {/* ===== CONTENT ===== */}
        <div className="fs-se-content text-center">
          <h3>{data.name || "Sonali Mule"}</h3>
          <h5>{data.profession || "Freelance Software Engineer"}</h5>

          <p className="fs-se-tagline">
            {data.skills || "• React • Bootstrap • MySQL"}</p>

          <p className="fs-se-desc">
            {data.bio || "I design, develop, and deploy scalable web applications for startups and businesses."}
          </p>

          <div className="fs-se-info text-start mt-4 px-4">
            <p className="fs-se-item"><FaPhoneAlt /> {data.phone || "9518311798"}</p>
            <p className="fs-se-item"><FaEnvelope /> {data.email || "dev@yoursite.com"}</p>
            <p className="fs-se-item"><FaMapMarkerAlt /> {data.address || "Remote / India"} </p>
            <p className="fs-se-item"><FaGlobe />{data.portfolio || "www.yoursite.com"} </p>
          </div>
        </div>

        {/* ===== CTA ===== */}
        <a
        href="https://wa.me/919518311798"
        target="_blank"
        rel="noopener noreferrer"
    className="fs-se-save-btn"
>
  <FaWhatsapp /> Explore My Services
</a>

        {/* ===== SOCIAL ===== */}
        <div className="fs-se-social">
          <FaTwitter />
          <FaLinkedinIn />
          <FaTelegramPlane />
          <FaYoutube />
          <FaGithub />
          <FaFacebookF />
        </div>

             </div>
    </div>
  );
}