import "./SoftwareEngineer.css";
import profileImg from "../../../assets/images/CorporateProfile.jpg";

import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiGlobe,
  FiMapPin,
  
} from "react-icons/fi";

export default function SoftwareEngineer({ data = {} }) {
  return (
    <div className="software-card container p-0 mb-3">

      {/* Header */}
      <div className="software-header text-center">
        <span className="code-icon">{`</>`}</span>
        <h4 className="mb-0">
          {data.title || "Software Engineer"}
        </h4>
        <small>
          {data.tagline || "Design • Develop • Deploy"}
        </small>
      </div>

      {/* Profile */}
      <div className="profile-section text-center">
  <img
    src={data.image || profileImg}
    alt="profile"
    className="profile-img"
  />

  <h4 className="profile-name">
    {data.name || "Rimpa Morgan"}
  </h4>

  <p className="designation">
    {data.designation || "Full Stack Engineer"}
  </p>

  <p className="company-name">
    {data.companyName || "Company_Name"}
  </p>

  <p className="profile-description">
    {data.description || "Passionate developer building scalable and modern applications."}
  </p>
</div>

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

      {/* CTA */}
      <div className="cta text-center">
        <h6>
          Looking for a <span>Software Engineer?</span>
        </h6>

        {data.github && (
          <a
            href={data.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary mt-2"
          >
            View Github Portfolio
          </a>
        )}

        <p className="mt-3 small fw-semibold">
          {data.status || "Open for Freelance & Full-time Roles"}
        </p>
      </div>

      {/* Footer */}
      <div className="software-footer text-center">
        <small>Tap icons to connect instantly</small>
      </div>

    </div>
  );
}