import { FaPhoneAlt, FaEnvelope, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
import "./Freelancer.css";
import profileImg from "../../../assets/images/CorporateProfile.jpg";

import {
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
  FaLinkedinIn,
  FaTelegramPlane,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";


export default function Freelancer() { 
  return (

    <div className="container p-0 mb-3 
      card-page  ">
      {/* Card */}
      <div className="container d-flex justify-content-center">
        <div className="business-card text-center position-relative">

          {/* Logo */}
          <div className="freelancer-logo-circle">
           <img src={profileImg} alt="profile" className="freelancer-profile-img " />
        
          </div>
           <h4 className="mt-3">Rimpa Morgan</h4>
          <p className="fw-semibold mb-1">
        Freelance Web Developer
          </p>

          <hr />

          <p className="text-muted small px-4">
             Helping businesses build modern, responsive, and scalable digital
            solutions.
          </p>

          {/* Contact info */}
          <div className="contact-info text-start mt-4 px-4">
            <p><FaPhoneAlt /> 9518311798</p>
            <p><FaEnvelope /> email@yoursite.com</p>
            <p><FaGlobe /> www.yoursite.com</p>
            <p><FaMapMarkerAlt /> 12/34, Area, City - 456789</p>
          </div>

          {/* Social icons */}
          <div className="social-icons">
            
            <FaTwitter />
            <FaLinkedinIn />
            <FaTelegramPlane />
            <FaYoutube />
            <FaFacebookF />
          </div>
        </div>
      </div>

      {/* Bottom buttons */}
      <div className="freelancer-bottom-bar d-flex">
        <button className="btn btn-primary fw-semibold  w-100 rounded-0">
         Explore My Services
        </button>
        
      </div>
    </div>
  );
}
