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

export default function UnityRealEstate({ data = {} }) {
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
       
        <h4>{data.agencyName || "Unity Developers"}</h4>


        <p className="tagline">
          <b> Building Trust. Creating Value</b>
        </p>

        <p className="description">
          {data.description ||
          "Unity Developers is a trusted real-estate company delivering quality residential and commercial projects with a focus on transparency, timely delivery, and lasting value"}
        </p>

        <h5 className="highlight">
          {data.name || "Name"}
        </h5>

        <p className="highlight">
          {data.designation ||
            "Property Consultant"}
        </p>

        <p className="dedescriptionsc">
          {data.experience || "Total Experience"}
        </p>


        {/* Contact Info */}
        <div className="contact-list mt-4">
          <div className="contact-item">
            <FaPhoneAlt />
            <span>{data.phone || "9518311798"}</span>
          </div>

          <div className="contact-item">
            <FaEnvelope /> 
            <span>{data.email || "email@yoursite.com"}</span>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt /> 
            <span>{data.officeAddress || "12/34, Area, City - 456789"}</span>
          </div>

          <div className="contact-item">
            <FaGlobe />
            <span>{data.website || "www.realEstate.com"}</span>
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