import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserMd,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import "./DoctorCard2.css";

function DoctorCard2() {
  return (<div className="container-fluid my-4 px-3">
  <div
    className="card doctor-card mx-auto  w-100"
    style={{ maxWidth: "380px" }}
  >

        {/* Header */}
        <div className="card-header text-center position-relative">
          <div className="logo-circle">
            <span>DR<br />LOGO</span>
          </div>
        </div>

        {/*  Body */}
        <div className="card-body text-center">
          <h4 className="fw-bold mb-1">Dr. Rahul Sharma</h4>
          <p className="text-muted mb-1">MBBS, MD (Cardiology)</p>
          <p className="small">
            Senior Consultant Cardiologist with 12+ years of experience.
          </p>

          {/* Contact Items */}
          <div className="contact-item">
            <FaPhoneAlt className="icon bg-success" />
            <span>+91 95183 11798</span>
          </div>

          <div className="contact-item">
            <FaEnvelope className="icon bg-warning" />
            <span>doctor@clinicname.com</span>
          </div>

          <div className="contact-item">
            <FaUserMd className="icon bg-primary" />
            <span>Book Appointment</span>
          </div>

          <div className="contact-item mb-4 ">
            <FaMapMarkerAlt className="icon bg-danger" />
            <span>
              Heart Care Clinic, 2nd Floor, MG Road, Pune
            </span>
          </div>

          {/* Social Icons */}
          <div className="social-icons mt-4 py-1">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaYoutube />
            <FaInstagram />
          </div>
        </div>

        {/*  Footer */}
        <div className="card-footer text-center get-in-touch">
          <FaWhatsapp className="me-2 " />
          WHATSAPP FOR APPOINTMENT
        </div>

      </div>
    </div>
  );
}

export default DoctorCard2;
