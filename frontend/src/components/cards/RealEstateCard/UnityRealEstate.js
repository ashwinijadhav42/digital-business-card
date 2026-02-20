import "bootstrap/dist/css/bootstrap.min.css";
import "./UnityRealEstate.css";
import logo from "../../../assets/images/realEstate/UnityLogo.png";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

export default function UnityRealEstate() {
  return (
    <div className="real-card container p-0">

      {/* Top curved header */}
      <div className="card-header-custom">
        <div className="unity-logo-circle">
         
            <img src={logo} alt="logo" />
         
        </div>

      </div>

      {/* Content */}
      <div className="card-body-custom text-center text-white px-4">
        <h4 className="fw-bold mt-4"> Unity Developers</h4>

        <p className="tagline">
          <b> Building Trust. Creating Value</b>
        </p>

        <p className="description">
          Unity Developers is a trusted real-estate company delivering 
          quality residential and commercial projects with a focus on 
          transparency, timely delivery, and lasting value
        </p>

        {/* Contact Info */}
        <div className="contact-list mt-4">
          <div className="contact-item">
            <FaPhoneAlt /> 9518311798
          </div>
          <div className="contact-item">
            <FaEnvelope /> email@yoursite.com
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt /> 12/34, Area, City - 456789
          </div>
          <div className="contact-item">
            <FaGlobe /> www.yoursite.com
          </div>
        </div>

        

        {/* Social Icons */}
        <div className="social-icons mt-4">
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
          <FaLinkedinIn />
          <FaTelegramPlane />
          <FaWhatsapp/>
        </div>
      </div>

      <div className="text-center my-4">
  <button className="btn btn-warning view-more-image-btn">
    View more images of Real Estate
  </button>
</div>

    </div>
  );
}
