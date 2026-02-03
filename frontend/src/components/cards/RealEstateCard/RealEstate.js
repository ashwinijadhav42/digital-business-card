import "bootstrap/dist/css/bootstrap.min.css";
import "./RealEstate.css";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDownload,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaGlobe,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";


import houseImg from "../../../assets/images/realEstate/house.jpg";

export default function RealEstate() {
  return (
    <div className="realestate-card">

      {/* Top Banner */}
      <div className="banner ">
        <img src={houseImg} alt="house" className="banner-img" />
          </div>

      {/* Business Info */}
      <div className="business-info text-center">
        <h4>JK Builders & Developers</h4>
        <p className="highlight">Quality Homes,Trusted Development.</p>
        <p className="desc">
          JK Builders & Developers creates thoughtfully designed residential 
          and commercial spaces with a focus on quality, innovation, and 
          long-term value.
           </p>
      </div>

      {/* Contact Section */}
      <div className="contact-section px-4">
        <div className="contact-item">
          <FaPhoneAlt />
          <span>9518311798</span>
        </div>

        <div className="contact-item">
          <FaEnvelope />
          <span>email@yoursite.com</span>
        </div>

        <div className="contact-item">
          <FaMapMarkerAlt />
          <span>12/34, Area, City - 456789</span>
        </div>

        <div className="contact-item">
          <FaGlobe /> 
          <span>www.realEstate.com</span>
        </div>
      </div>
{/* View More Images Button */}
<div className="text-center my-4">
  <button className="btn btn-warning view-more-btn">
    View more images of Real Estate
  </button>
</div>
      
      {/* Social Icons */}
      <div className="social-icons text-center mb-3">
        <FaFacebookF />
        <FaInstagram />
        <FaYoutube />
        <FaTwitter />
        
        <FaLinkedinIn />
        <FaWhatsapp />
      </div>
      {/* Bottom Zigzag */}
      <div className="zigzag"></div>
    </div>
  );
}
