import "./DoctorCard2.css";
import CardActions from "../../CardActions";

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

function DoctorCard2({ data, showAllIcons = true ,slug,onDownload,publicUrl}) {
  return (

    <div className="card doctor-card-2 mx-auto text-center ">

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

        {/* Social Icons */}
        <div className="doctor-social-icons mt-2">
 {(showAllIcons || data?.youtube) && (
    <a
      href={formatYoutubeUrl(data?.youtube)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="icon youtube">
        <FaYoutube />
      </span>
    </a>
  )}

  {(showAllIcons || data?.instagram) && (
    <a
      href={formatInstagramUrl(data?.instagram)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="icon instagram">
        <FaInstagram />
      </span>
    </a>
  )}


  {(showAllIcons || data?.facebook) && (
    <a
      href={formatFacebookUrl(data?.facebook)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="icon facebook">
        <FaFacebookF />
      </span>
    </a>
  )}

  {(showAllIcons || data?.linkedin) && (
    <a
      href={formatLinkedinUrl(data?.linkedin)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="icon linkedin">
        <FaLinkedinIn />
      </span>
    </a>
  )}

 </div>
        
       {/* Contact Items */}

<div className="doctor-contact-list mt-4">

  <div className="doctor2-contact-item">
    <span className="doctor2-contact-icon hospital">
      <FaUserMd />
    </span>
    <span>{data?.hospitalName || "Hospital Name"}</span>
  </div>

  <div className="doctor2-contact-item">
    <span className="doctor2-contact-icon phone">
      <FaPhoneAlt />
    </span>
    <span>{data?.phone || "+91 XXXXXXXX"}</span>
  </div>

  <div className="doctor2-contact-item">
    <span className="doctor2-contact-icon email">
      <FaEnvelope />
    </span>
    <span>{data?.email || "doctor@email.com"}</span>
  </div>

  <div className="doctor2-contact-item">
    <span className="doctor2-contact-icon location">
      <FaMapMarkerAlt />
    </span>
    <span>{data?.address || "Hospital Address"}</span>
  </div>

  <div className="doctor2-contact-item mb-3">
    <span className="doctor2-contact-icon clock">
      <FaClock />
    </span>
    <span>{data?.time || "Availability Time"}</span>
  </div>
</div>


      {/* Footer */}
<div className=" text-center">

  {showAllIcons ? (
    <div className="doctor2-whatsapp-btn">
      <FaWhatsapp className="mt-1"/>
      Whatsapp for Appointment
    </div>

  ) : data?.whatsapp ? (
    <a
      href={`https://wa.me/${data.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="doctor2-whatsapp-btn"
    >
      <FaWhatsapp/>
      Chat With Us (Book Appointment)
    </a>

  ) : (
    <div className="doctor2-whatsapp-btn text-muted disabled-btn">
      Enter WhatsApp number to enable booking
    </div>
  )}

</div>
      <CardActions
slug={slug}
publicUrl={publicUrl}
onDownload={onDownload}
      />
    </div>
</div>
  );
}

export default DoctorCard2;
