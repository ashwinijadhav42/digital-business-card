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

export default function FreelanceSoftwareEngineer() {
  return (
    <div className="fs-se-wrapper">
      <div className="fs-se-card">

        {/* ===== TOP ===== */}
        <div className="fs-se-top-images">
          <div className="fs-se-logo">
            <img src={logo} alt="Logo" className="fs-se-logo-img" />
          </div>
        </div>

        {/* ===== CONTENT ===== */}
        <div className="fs-se-content text-center">
          <h3>Sonali Mule</h3>
          <h5>Freelance Software Engineer</h5>

          <p className="fs-se-tagline">• React • Bootstrap • MySQL</p>

          <p className="fs-se-desc">
            I design, develop, and deploy scalable web applications
            for startups and businesses.
          </p>

          <div className="fs-se-info text-start mt-4 px-4">
            <p className="fs-se-item"><FaPhoneAlt /> 9518311798</p>
            <p className="fs-se-item"><FaEnvelope /> dev@yoursite.com</p>
            <p className="fs-se-item"><FaMapMarkerAlt /> Remote / India</p>
            <p className="fs-se-item"><FaGlobe /> www.yoursite.com</p>
          </div>
        </div>

        {/* ===== CTA ===== */}
        <button className="fs-se-save-btn">
          <FaWhatsapp /> Explore My Services
        </button>

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
