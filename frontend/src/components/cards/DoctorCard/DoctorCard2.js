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
  FaClock,
} from "react-icons/fa";
import "./DoctorCard2.css";

const formatFacebookUrl = (value) => {
  if (!value) return "#";
  if (value.startsWith("http")) return value;
  return `https://facebook.com/${value.replace("@", "")}`;
};

const formatLinkedinUrl = (value) => {
  if (!value) return "#";
  if (value.startsWith("http")) return value;
  return `https://linkedin.com/in/${value.replace("@", "")}`;
};

const formatYoutubeUrl = (value) => {
  if (!value) return "#";
  if (value.startsWith("http")) return value;
  return `https://youtube.com/${value.replace("@", "")}`;
};

const formatInstagramUrl = (value) => {
  if (!value) return "#";
  if (value.startsWith("http")) return value;
  return `https://instagram.com/${value.replace("@", "")}`;
};

function DoctorCard2({ data, showAllIcons = false }) {
  return (

    <div className="card doctor-card-2 mx-auto ">

      {/* Header */}
      <div className="card-header text-center position-relative">
        <h5 className="text-white mb-0 fw-semibold">
          Doctor Digital Business Card
        </h5>
        <div className="logo-circle">
          {data?.logo ? (
            <img src={data.logo} alt="Doctor Logo" />
          ) : (
            <span>DR<br />LOGO</span>
          )}
        </div>
      </div>


      {/* Body */}
      <div className="card-body text-center">
        <h4 className="fw-bold mb-1">
          {data?.name || "Dr Name"}
        </h4>

        <p className="text-muted mb-1">
          {data?.degree || "Specialization / Degree"}
        </p>

        <p className="small text-muted">
          {data?.description ||
            "Doctor description and experience here"}
        </p>

        {/* Contact Items */}
        <div className="contact-item">
          <FaUserMd className="icon bg-primary" />
          <span>{data?.hospitalName || "Hospital Name"}</span>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="icon bg-success" />
          <span>{data?.phone || "+91 XXXXXXXX"}</span>
        </div>

        <div className="contact-item">
          <FaEnvelope className="icon bg-warning" />
          <span>{data?.email || "doctor@email.com"}</span>
        </div>



        <div className="contact-item">
          <FaMapMarkerAlt className="icon bg-danger" />
          <span>{data?.address || "Hospital Address"}</span>
        </div>

        <div className="contact-item mb-3">
          <FaClock className="icon bg-dark" />
          <span>{data?.time || "Availability Time"}</span>
        </div>

        {/* Social Icons */}
        <div className="social-icons mt-3 py-1">
          {(showAllIcons || data?.facebook) && (
            <a
              href={formatFacebookUrl(data?.facebook)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          )}

          {(showAllIcons || data?.linkedin) && (
            <a
              href={formatLinkedinUrl(data?.linkedin)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          )}

          {(showAllIcons || data?.youtube) && (
            <a
              href={formatYoutubeUrl(data?.youtube)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          )}

          {(showAllIcons || data?.instagram) && (
            <a
              href={formatInstagramUrl(data?.instagram)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className=" card-footer text-center get-in-touch">
        {showAllIcons ? (
          <div className="text-muted">
            <FaWhatsapp className="me-2 " />
            Whatsapp for Appointment
          </div>
        ) : data?.whatsapp ? (
          <a
            href={`https://wa.me/${data.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn d-flex justify-content-center align-items-center"

          >
            <FaWhatsapp className="me-2" />
            Chat With Us (Book Appointment)
          </a>
        ) : (
          <div className="btn text-center  text-muted py-2">
            Enter WhatsApp number to enable booking
          </div>
        )}
      </div>
    </div>

  );
}

export default DoctorCard2;
