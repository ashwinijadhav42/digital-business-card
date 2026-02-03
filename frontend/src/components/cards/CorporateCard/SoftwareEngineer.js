import "./SoftwareEngineer.css";
import profileImg from "../../../assets/images/CorporateProfile.jpg";

import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiGlobe,
  FiMap,
} from "react-icons/fi";

          

export default function CorporateCard() {
  return (
    <div className="software-card container p-0 mb-3">

      {/* Header */}
      <div className="software-header  text-center">
        <span className="code-icon">{`</>`}</span>
        <h4 className="mb-0">Software Engineer</h4>
        <small>Design • Develop • Deploy</small>
      </div>

      {/* Profile */}
      <div className="profile-section text-center">
        <img src={profileImg} alt="profile" className="profile-img" />
        <h4 className="profile-name">Rimpa Morgan</h4>
        <p className="designation">Full Stack Engineer</p>
        
      </div>

      {/* Action Icons */}
      <div className="icon-row">
        <a href="mailto:engineer@email.com" className="icon-circle">
          <FiMail />
        </a>

        <a href="tel:+919999999999" className="icon-circle">
          <FiPhone />
        </a>

        <a href="https://linkedin.com/in/username" target="_blank" className="icon-circle">
          <FiLinkedin />
        </a>

        <a href="https://portfolio.com" target="_blank" className="icon-circle">
          <FiGlobe />
        </a>
        <a href="https://www.google.com/maps" target="_blank" className="icon-circle">
          <FiMap />
        </a>
      </div>

      {/* CTA */}
      <div className="cta text-center">
        <h6>
          Looking for a <span>Software Engineer?</span>
        </h6>

        <button className="btn btn-primary mt-2">
          View Github Portfolio
        </button>

        <p className="mt-3 small fw-semibold">
          Open for Freelance & Full-time Roles
        </p>
      </div>

      {/* Footer */}
      <div className="software-footer text-center">
        <small>Tap icons to connect instantly</small>
      </div>

    </div>
  );
}
