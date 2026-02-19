import "bootstrap/dist/css/bootstrap.min.css";
import "./BusinessAnalyst.css";

import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Globe,
  Github,
  MessageCircle
} from "lucide-react";
import profileImg from "../../../assets/images/CorporateProfile.jpg";


export default function BusinessAnalystCard() {
  return (
    <div className="ba-card container p-0 ">

      {/* Header */}
      <div className="ba-header  text-center">
        <img src={profileImg} alt="logo" className="ba-profile-img" />
        <h4 className="mt-2 mb-0">Business & Data Analyst</h4>
        <small className="ba-tagline">
          Data • Analytics • Strategy
        </small>
      </div>

      {/* Profile Section */}
      <div className="ba-profile text-center">
       
        <h5 className="mt-3 mb-0">Dipak Kulkarni</h5>
        <small className="text-muted">Business Analyst</small>

        <p className="ba-desc mt-2">
          Helping organizations make smarter decisions through
           data-driven analysis, reporting, and strategic insights.
        </p>
      </div>

      {/* Contact Info */}
      <div className="ba-contact mt-3">
        <div className="ba-contact-item">
          <Phone size={18} />
          <span>+91 9518311798</span>
        </div>

        <div className="ba-contact-item">
          <Mail size={18} />
          <span>email@yoursite.com</span>
        </div>

        <div className="ba-contact-item">
          <MapPin size={18} />
          <span>Pune, India</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="ba-social text-center mt-3">
  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
    <Linkedin size={20} />
  </a>

  <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
    <Github size={20} />
  </a>

  <a href="https://yoursite.com" target="_blank" rel="noreferrer">
    <Globe size={20} />
  </a>

   <a href="https://yoursite.com" target="_blank" rel="noreferrer">
    <MessageCircle size={20} />
  </a>

</div>
<button className="btn btn-primary mt-2 text-center w-100">
          View Github Portfolio
        </button>
    </div>
  );
}
