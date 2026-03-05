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
  
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
  FaTelegramPlane,
  FaTwitter,
  FaInstagram
} from "react-icons/fa";

/* ============================= */
/* Social URL Format Functions   */
/* ============================= */

const formatGithubUrl = (value) => {
  if (!value) return "#";
  if (value.startsWith("http")) return value;
  return `https://github.com/${value.replace("@", "")}`;
};

const formatLinkedinUrl = (value) => {
  if (!value) return "#";
  if (value.startsWith("http")) return value;
  return `https://linkedin.com/in/${value.replace("@", "")}`;
};

const formatTelegramUrl = (value) => {
  if (!value) return "#";
  if (value.startsWith("http")) return value;
  return `https://t.me/${value.replace("@", "")}`;
};

const formatYoutubeUrl = (value) => {
  if (!value) return "#";
  if (value.startsWith("http")) return value;
  return `https://youtube.com/${value.replace("@", "")}`;
};

const formatTwitterUrl = (value) => {
  if (!value) return "#";
  if (value.startsWith("http")) return value;
  return `https://twitter.com/${value.replace("@", "")}`;
};

const formatInstagramUrl = (value) => {
  if (!value) return "#";
  if (value.startsWith("http")) return value;
  return `https://instagram.com/${value.replace("@", "")}`;
};

const formatWhatsappUrl = (value) => {
  if (!value) return "#";
  if (value.startsWith("http")) return value;

  const cleanedNumber = value.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanedNumber}`;
};

/* ============================= */
/* Component                     */
/* ============================= */

export default function FreelanceSoftwareEngineer({ data = {}, showAllIcons = true }) {
  return (
    <div className="fs-se-wrapper">
      <div className="fs-se-card">

        {/* ===== LOGO ===== */}
        <div className="fs-se-top-images">
          <div className="fs-se-logo">

            <img
              src={
                data.logo
                  ? typeof data.logo === "string"
                    ? `http://localhost:8080/uploads/${data.logo}`
                    : URL.createObjectURL(data.logo)
                  : logo
              }
              alt="Logo"
              className="fs-se-logo-img"
            />

          </div>
        </div>

        {/* ===== CONTENT ===== */}
        <div className="fs-se-content text-center mt-2">

          <h3>{data.name || "Sonali Mule"}</h3>

          <h5>{data.profession || "Freelance Software Engineer"}</h5>

          <p className="fs-se-tagline">
            {data.skills
              ? data.skills.split(",").map((skill, i) => (
                  <span key={i}>• {skill.trim()} </span>
                ))
              : "• React • Bootstrap • MySQL"}
          </p>

          <p className="fs-se-desc">
            {data.bio ||
              "I design, develop, and deploy scalable web applications for startups and businesses."}
          </p>

          {/* ===== CONTACT ===== */}

          <div className="fs-se-info text-start mt-4 px-4">

            <div className="fs-se-contact-item">
              <FaPhoneAlt />
              <span>{data?.phone || "+91 XXXXXXXX"}</span>
            </div>

            <div className="fs-se-contact-item">
              <FaEnvelope />
              <span>{data?.email || "email@yoursite.com"}</span>
            </div>

            <div className="fs-se-contact-item">
              <FaMapMarkerAlt />
              <span>{data?.address || "Your Address Here"}</span>
            </div>

            <div className="fs-se-contact-item">
              <FaGlobe />
              <span>{data?.website || "www.yoursite.com"}</span>
            </div>          </div>
        </div>

        {/* ===== CTA BUTTON ===== */}

        {(showAllIcons || data?.whatsapp) && (
          <a
            href={formatWhatsappUrl(data?.whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="fs-se-save-btn"
          >
            <FaWhatsapp /> Explore My Services
          </a>
        )}

        {/* ===== SOCIAL ICONS ===== */}

        <div className="fs-se-social">

          {(showAllIcons || data?.twitter) && (
            <a
              href={formatTwitterUrl(data?.twitter)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
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

          {(showAllIcons || data?.github) && (
            <a
              href={formatGithubUrl(data?.github)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          )}
{(showAllIcons || data?.facebook) && (
            <a
              href={formatInstagramUrl(data?.facebook)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
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

        </div>

      </div>
    </div>
  );
}