import "./Freelancer.css";
import profileImg from "../../../assets/images/CorporateProfile.jpg";

import {
  FaPhoneAlt, FaEnvelope, FaGlobe, FaMapMarkerAlt,
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
  FaLinkedinIn,
  FaTelegramPlane,
  FaYoutube,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

// GitHub
const formatGithubUrl = (value) => {
  if (!value) return "#";
  if (value.startsWith("http")) return value;
  return `https://github.com/${value.replace("@", "")}`;
};

// LinkedIn
const formatLinkedinUrl = (value) => {
  if (!value) return "#";
  if (value.startsWith("http")) return value;
  return `https://linkedin.com/in/${value.replace("@", "")}`;
};

// Telegram
const formatTelegramUrl = (value) => {
  if (!value) return "#";
  if (value.startsWith("http")) return value;
  return `https://t.me/${value.replace("@", "")}`;
};

// YouTube
const formatYoutubeUrl = (value) => {
  if (!value) return "#";
  if (value.startsWith("http")) return value;
  return `https://youtube.com/${value.replace("@", "")}`;
};

// Twitter (X)
const formatTwitterUrl = (value) => {
  if (!value) return "#";
  if (value.startsWith("http")) return value;
  return `https://twitter.com/${value.replace("@", "")}`;
};

// Instagram
const formatInstagramUrl = (value) => {
  if (!value) return "#";
  if (value.startsWith("http")) return value;
  return `https://instagram.com/${value.replace("@", "")}`;
};

// WhatsApp (number only)
const formatWhatsappUrl = (value) => {
  if (!value) return "#";
  if (value.startsWith("http")) return value;
  
  // Remove spaces, +, and non-numeric characters
  const cleanedNumber = value.replace(/[^0-9]/g, "");
  
  return `https://wa.me/${cleanedNumber}`;
};

export default function Freelancer({ data = {}, showAllIcons = true }) {
  return (

    <div className="container p-0 mb-3 freelancer-card-page  ">
      {/* Card */}
      <div className="container d-flex justify-content-center">
        <div className="freelancer-business-card text-center position-relative">

          {/* Profile */}
<img
  src={
    data.logo
      ? typeof data.logo === "string"
        ? `http://localhost:8080/uploads/${data.logo}`
        : URL.createObjectURL(data.logo)
      : profileImg
  }
  alt="profile"
  className="freelancer-profile-img"
/>
          <h4 className="freelancer-name">
            {data.name || "Rimpa Morgan"}
          </h4>

          <p className="freelancer-title">
            {data.profession || "MERN Stack Developer"}
          </p>

          <p className="freelancer-description">
            {data.description || "Building modern, scalable & responsive web applications."}
          </p>

          {/* Skills */}
          <div className="freelancer-skills">
  {data.skills ? (
    data.skills.split(",").map((skill, index) => (
      <span key={index}>• {skill.trim()}</span>
    ))
  ) : (
    <>
      <span>• React</span>
      <span>• Node.js</span>
      <span>• MongoDB</span>
      <span>• JavaScript</span>
    </>
  )}
</div>
          {/* Contact info */}
          <div className="freelancer-contact-info mt-4 px-4">

            <div className="freelancer-contact-item">
              <FaPhoneAlt />
              <span>{data?.phone || "+91 XXXXXXXX"}</span>
            </div>

            <div className="freelancer-contact-item">
              <FaEnvelope />
              <span>{data?.email || "email@yoursite.com"}</span>
            </div>

            <div className="freelancer-contact-item">
              <FaMapMarkerAlt />
              <span>{data?.address || "Your Address Here"}</span>
            </div>

            <div className="freelancer-contact-item">
              <FaGlobe />
              <span>{data?.website || "www.yoursite.com"}</span>
            </div>
            
            {/* Social Icons */}
<div className="freelancer-social-icons ">

  {(showAllIcons || data?.github) && (
    <a
      href={formatGithubUrl(data?.github)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub />
    </a>
  )}

  {(showAllIcons || data?.linkedin) && (
    <a
      href={formatLinkedinUrl(data?.linkedin)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedinIn />
    </a>
  )}

  {(showAllIcons || data?.telegram) && (
    <a
      href={formatTelegramUrl(data?.telegram)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaTelegramPlane />
    </a>
  )}

  {(showAllIcons || data?.youtube) && (
    <a
      href={formatYoutubeUrl(data?.youtube)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaYoutube />
    </a>
  )}
</div>
<div className="freelancer-social-icons">
  {(showAllIcons || data?.twitter) && (
    <a
      href={formatTwitterUrl(data?.twitter)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaTwitter />
    </a>
  )}

  {(showAllIcons || data?.instagram) && (
    <a
      href={formatInstagramUrl(data?.instagram)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram />
    </a>
  )}

  {(showAllIcons || data?.whatsapp) && (
    <a
      href={`https://wa.me/${data?.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  )}

</div>
          </div>
        </div>
      </div>
      {/* Bottom buttons */}
      <div className="freelancer-bottom-bar d-flex">
        <button className="btn btn-primary small  w-50 rounded-10">
          My Services
        </button>
        <button className="btn btn-primary small  w-50 rounded-10">
          Hire me
        </button>
      </div>
    </div>
  );
}