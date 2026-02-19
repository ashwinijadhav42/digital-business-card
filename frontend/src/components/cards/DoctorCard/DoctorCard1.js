import "bootstrap/dist/css/bootstrap.min.css";
import "./DoctorCard1.css";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaClock,
  FaWhatsapp,
  FaShareAlt,
  FaDownload,
} from "react-icons/fa";


  function DoctorCard1({ data, showAllIcons = false }) {
  return (
    <div className="doctor-card doctor-card-1 ">

      {/* Top Header */}
      
<div className="doctor-header text-center py-2">
  <h5 className="text-white mb-0 fw-semibold">
    Doctor Digital Business Card
  </h5>
</div>


      {/* Right Side Social Icons */}
      <div className="doctor1-social-icons">

  {(showAllIcons || data?.facebook) && (
    <a
      href={data?.facebook || "#"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaFacebookF />
    </a>
  )}

  {(showAllIcons || data?.linkedin) && (
    <a
      href={data?.linkedin || "#"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedinIn />
    </a>
  )}

  {(showAllIcons || data?.youtube) && (
    <a
      href={data?.youtube || "#"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaYoutube />
    </a>
  )}

  {(showAllIcons || data?.instagram) && (
    <a
      href={data?.instagram || "#"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram />
    </a>
  )}
</div>
      {/* Doctor Info */}
      <div className="doctor-body text-center px-4">
        <div
  className="doctor-logo mx-auto"
  style={
    data?.logo
      ? { backgroundImage: `url(${data.logo})` }
      : {}
  }
>
  {!data?.logo && <span>Dr. Logo</span>}
</div>


        <h4 className="mt-3">{data?.name || " Name"}</h4>
        <p className="text-muted mb-1">{data?.degree || "Specialization /Degree"}</p>
        <p className="doctor-desc">
          {data?.description || "Doctor description and their speciality and experience here"}
        </p>

        <hr />

        {/* Contact Info */}
        <div className="contact-item">
          <FaGlobe /> <span> {data?.hospitalName || "Hopital Name"}  </span>
        </div>
        
        <div className="contact-item">

          <FaPhoneAlt /> <span>
          {data?.phone || "+91 XXXXXXXX"}</span>
        </div>
        <div className="contact-item">
          <FaEnvelope /> <span>{data?.email || "doctor@email.com"}</span>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt />{" "}
          <span>
            {data?.address || "Hospital Address "}
            </span>
        </div>
        
        <div className="contact-item">
  <FaClock /> <span>{data?.time || "Dr's Availability at Hospital(Time) "}</span>
</div>

      </div>



      {/* Bottom Actions */}
      <div className="doctor-footer">

        <button className="btn w-100">
          <FaWhatsapp /> Chat With Us(Book Appointment)
        </button>
      </div>
    </div>
  );
}

export default DoctorCard1;
