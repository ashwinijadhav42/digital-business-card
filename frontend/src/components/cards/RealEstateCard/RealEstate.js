import "bootstrap/dist/css/bootstrap.min.css";
import "./RealEstate.css";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaGlobe,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import houseImg from "../../../assets/images/realEstate/house.jpg";

export default function RealEstate({ data = {} }) {
  return (
    <div className="realestate-card">

      {/* Top Banner */}
      <div className="banner">
        <img
          src={data.image || houseImg}
          alt="house"
          className="banner-img"
        />
      </div>

      {/* Business Info */}
      <div className="business-info text-center">
  <h4>{data.agencyName || "JK Builders & Developers"}</h4>

      
         
        <h5 className="highlight">
          {data.name || "Name"}
        </h5>

        <p className="highlight">
          {data.tagline || "Quality Homes, Trusted Development."}
        </p>

        <p className="desc">
          {data.description ||
            "JK Builders & Developers creates thoughtfully designed residential and commercial spaces with a focus on quality, innovation, and long-term value."}
        </p>

        <p className="desc">
          {data.designation ||
            "Property Consultant"}
        </p>

          <p className="desc">
          {data.experience || "Total Experience"}
        </p>
      </div>

      {/* Contact Section */}
      <div className="contact-section px-4">

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

      {/* View More Images Button */}
      <div className="text-center my-4">
        <button className="btn btn-warning view-more-btn">
          View more images of Real Estate
        </button>
      </div>

      {/* Social Icons */}
      <div className="social-icons text-center mb-3">

        {data.facebook && <FaFacebookF />}
        {data.instagram && <FaInstagram />}
        {data.youtube && <FaYoutube />}
        {data.twitter && <FaTwitter />}
        {data.linkedin && <FaLinkedinIn />}
        {data.whatsapp && <FaWhatsapp />}

      </div>

      <div className="zigzag"></div>
    </div>
  );
}