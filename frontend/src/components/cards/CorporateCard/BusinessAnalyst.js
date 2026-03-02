import "bootstrap/dist/css/bootstrap.min.css";
import "./BusinessAnalyst.css";

import {
  Phone,
  Mail,
  MapPin,
  FaLinkedinIn,
  Linkedin,
  Globe,
  Github,
  MessageCircle
} from "lucide-react";

import profileImg from "../../../assets/images/CorporateProfile.jpg";

export default function BusinessAnalystCard({ data = {} }) {
  return (
    <div className="ba-card container p-0">

      {/* Header */}
      <div className="ba-header text-center">
        <img
          src={data.image || profileImg}
          alt="profile"
          className="ba-profile-img"
        />

        <h4 className="mt-2 mb-0">
          {data.designation || "Business & Data Analyst"}
        </h4>

        <small className="ba-tagline">
          {data.companyName || "Data • Analytics • Strategy"}
        </small>
      </div>

      {/* Profile Section */}
      <div className="ba-profile text-center">
        <h5 className="mt-3 mb-0">
          {data.name || "Rimpa Morgon"}
        </h5>

        <small className="text-muted">
          {data.designation || "Business Analyst"}
        </small>

        <p className="ba-desc mt-2">
          {data.description ||
            "Helping organizations make smarter decisions through data-driven insights."}
        </p>
      </div>

      {/* Contact Info */}
      <div className="ba-contact mt-3">

        <div className="ba-contact-item">
          <Phone size={16} className="me-2" />
          <span>{data.phone || "9876543210"}</span>
        </div>

        <div className="ba-contact-item">
          <Mail size={16} className="me-2" />
          <span>{data.email || "example@email.com"}</span>
        </div>

        
          <div className="ba-contact-item">
            <MapPin size={16} className="me-2" />
            <span>{data.address || "Address"}</span>
          </div>
            
          <div className="ba-contact-item">
            <MapPin size={16} className="me-2" />
            <span>{data.FaLinkedinIn || "LinkedIn"}</span>
          </div>
            
      </div>


      {/* Social Links */}
      
      <div className="ba-contact-item">

        {data.linkedin && (
          <a href={data.linkedin} target="_blank" rel="noreferrer">
            <linkedin size={16} />
          </a>
        )}

        {data.github && (
          <a href={data.github} target="_blank" rel="noreferrer">
            <github size={20} />
          </a>
        )}

        {data.portfolio && (
          <a href={data.portfolio} target="_blank" rel="noreferrer">
            <Globe size={20} />
          </a>
        )}

        {data.whatsapp && (
          <a
            href={`https://wa.me/${data.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={20} />
          </a>
        )}

      </div>

      {/* Github Button */}
      {data.github && (
        <a
          href={data.github}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary mt-3 w-100"
        >
          View Github Portfolio
        </a>
      )}

    </div>
  );
}
//Working