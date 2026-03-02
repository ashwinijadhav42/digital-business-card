import "bootstrap/dist/css/bootstrap.min.css";
import "./BusinessAnalyst.css";

import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiGlobe,
  FiMapPin,
  
} from "react-icons/fi";

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


export default function BusinessAnalystCard({ data = {} }) {
  return (
    <div className="ba-card container p-0 ">

      {/* Header */}
      <div className="ba-header  text-center">
        <img src={data.image || profileImg} alt="logo" className="ba-profile-img" />
        

        <h4 className="mt-2 mb-0">Business & Data Analyst</h4>
        <small className="ba-tagline">
          {data.companyName || "Data • Analytics • Strategy"}
        </small>
      </div>

      {/* Profile Section */}
      <div className="ba-profile text-center">
       
        <h5 className="mt-5 mb-2">
          {data.name || "Rimpa Morgan"}
        </h5>

        <small className="text-muted">Business Analyst</small>

        <p className="ba-desc mt-2">
          {data.description || "Helping organizations make smarter decisions through data-driven analysis, reporting, and strategic insights."}
        </p>
      </div>

      {/* Contact Info */}
      <div className="ba-contact mt-3">
        <div className="ba-contact-item">
          <Phone size={18} />
          <span>{data.phone || "+91 9518311798"}</span>
        </div>

        <div className="ba-contact-item">
          <Mail size={18} />
          <span>{data.email || "email@yoursite.com"}</span>
        </div>

        <div className="ba-contact-item">
          <MapPin size={18} />
          <span>{data.address || "Pune, India"}</span>
        </div>
      </div>

      {/* Social Links */}
      

{/* Action Icons */}
      <div className="icon-row">

        <a
          href={`mailto:${data.email || "engineer@email.com"}`}
          className="icon-circle"
        >
          <FiMail />
        </a>

        <a
          href={`tel:${data.phone || "+919999999999"}`}
          className="icon-circle"
        >
          <FiPhone />
        </a>

        <a
          href={data.linkedin || "https://linkedin.com/in/username"}
          target="_blank"
          rel="noreferrer"
          className="icon-circle"
        >
          <FiLinkedin />
        </a>

        <a
          href={data.website || "https://portfolio.com"}
          target="_blank"
          rel="noreferrer"
          className="icon-circle"
        >
          <FiGlobe />
        </a>

        <a
          href={data.address || "https://www.google.com/maps"}
          target="_blank"
          rel="noreferrer"
          className="icon-circle"
        >
          <FiMapPin />
        </a>

      </div>


<button className="btn btn-primary mt-2 text-center w-100">
          View Github Portfolio
        </button>
    </div>
  );
}
