import "bootstrap/dist/css/bootstrap.min.css";
import "./BusinessAnalyst.css";

import {
  Phone,
  Mail,
  Linkedin,
  Globe,
  Github,
  MessageCircle
} from "lucide-react";

import profileImg from "../../../assets/images/CorporateProfile.jpg";

export default function BusinessAnalystCard({ data = {} }) {
  // 👆 IMPORTANT: default empty object

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
          {data.degree || "Business & Data Analyst"}
        </h4>

        <small className="ba-tagline">
          {data.companyName || "Data • Analytics • Strategy"}
        </small>
      </div>

      {/* Profile Section */}
      <div className="ba-profile text-center">

        <h5 className="mt-3 mb-0">
          {data.name || "Your Name"}
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

        {data.phone && (
          <div className="ba-contact-item">
            <Phone size={18} />
            <span>{data.phone}</span>
          </div>
        )}

        {data.email && (
          <div className="ba-contact-item">
            <Mail size={18} />
            <span>{data.email}</span>
          </div>
        )}

      </div>

      {/* Social Links */}
      <div className="ba-social text-center mt-3">

        {data.linkedin && (
          <a href={data.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={20} />
          </a>
        )}

        {data.github && (
          <a href={data.github} target="_blank" rel="noreferrer">
            <Github size={20} />
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

      {data.github && (
        <a
          href={data.github}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary mt-2 text-center w-100"
        >
          View Github Portfolio
        </a>
      )}

    </div>
  );
}
//Working