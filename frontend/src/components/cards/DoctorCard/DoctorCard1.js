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

function DoctorCard1() {
  return (
    <div className="doctor-card doctor-card-1 container-fluid p-0">

      {/* Top Header */}
      <div className="doctor-header d-flex  justify-content-between align-items-center px-3 py-2">
       
      </div>
      {/* Right Side Social Icons */}
      <div className="doctor1-social-icons">

        <FaFacebookF />
        <FaLinkedinIn />
        <FaYoutube />
        <FaInstagram />
      </div>


      {/* Doctor Info */}
      <div className="doctor-body text-center px-4">
        <div className="doctor-logo mx-auto">
          <span> Logo</span>
        </div>  

        <h4 className="mt-3">Dr.Chetan Thorat</h4>
        <p className="text-muted mb-1">MBBS, MD (Cardiology)</p>
        <p className="doctor-desc">
          Consultant Cardiologist with 10+ years of experience providing
          patient-focused heart care.
        </p>

        <hr />

        {/* Contact Info */}
        <div className="contact-item">
          <FaPhoneAlt /> <span>+91 9518311798</span>
        </div>
        <div className="contact-item">
          <FaEnvelope /> <span>doctor@email.com</span>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt />{" "}
          <span>12/34, Medical Area, City - 456789</span>
        </div>
        <div className="contact-item">
          <FaGlobe /> <span>www.doctorclinic.com</span>
        </div>
        <div className="contact-item">
  <FaClock /> <span>Mon - Sat | 10:00 AM - 7:00 PM</span>
</div>

      </div>



      {/* Bottom Actions */}
      <div className="doctor-footer d-flex">

        <button className="btn w-100">
          <FaWhatsapp /> Chat With Us
        </button>
      </div>
    </div>
  );
}

export default DoctorCard1;
