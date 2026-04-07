import "bootstrap/dist/css/bootstrap.min.css";
import "./SoftwareEngineer.css";
import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import QRCode from "react-qr-code";

const SoftwareEngineerCard = ({ data = {} }) => {
  const cardRef = useRef();

  const downloadPDF = async () => {
  const element = cardRef.current;
  if (!element) return;

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    scrollY: -window.scrollY,
  });

  const imgData = canvas.toDataURL("image/png");

  // ✅ CUSTOM SIZE (BEST FIX)
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: [canvas.width, canvas.height], // ✅ exact card size
  });

  pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);

  pdf.save("business-card.pdf");
};
  return (
    <div className="se-wrapper">
      
      {/* CARD */}
      <div className="se-card" ref={cardRef}>
        
        {/* HEADER */}
        <div className="se-header">
        <div className="se-profile">
  
  <img
  src={
    data.imagePreview ||
    (data.profileImage
      ? `http://localhost:8080/uploads/corporate_card/${data.profileImage}`
      : "https://i.pravatar.cc/150?img=12")
  }
  alt="profile"
  className="profile-img"
/>
          </div>
          <h3>Software Engineer</h3>
          <p>Code • Deploy • Test</p>
        </div>

        {/* BODY */}
        <div className="se-body">
          <h2>{data.fullName || "Jhon Duran"}</h2>
          <p className="se-role">{data.designation || "Software Engineer"}</p>
          <p className="se-desc">{data.description || "Working experience description"}</p>

          {/* INFO */}
          <div className="se-info">
            <div className="se-info-item">
              <FaPhone /> <span>{data.phone || "7986541235"}</span>
            </div>
            <div className="se-info-item">
              <FaEnvelope /> <span>{data.email || "demo@email.com"}</span>
            </div>

            <div className="se-info-item">
              <FaMapMarkerAlt /> <span>{data.address || "Nagpur, India"}</span>
            </div>

            <div className="se-info-item">
              <FaGlobe /> <span>{data.website || "www.example.com"}</span>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="se-social">
            <button
            className="se-btn linkedin"
            onClick={() =>
            window.open(
            data.linkedin || "https://linkedin.com/in/demo",
            "_blank"
         )
        }
      >
          <FaLinkedin />
          <span>
          {(data.linkedin || "https://linkedin.com/in/demo").replace(
          "https://",
            ""
          )}
        </span>
      </button>

        <button
        className="se-btn github"
        onClick={() =>
        window.open(
        data.github || "https://github.com/demo",
        "_blank"
      )
    }
  >
        <FaGithub />
        <span>
          {(data.github || "https://github.com/demo").replace(
          "https://",
          ""
          )}
        </span>
      </button>
  </div>

          {/* QR */}
        <div className="se-qr">
        <QRCode value={data.website || "https://example.com"} size={70} />
        </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="se-footer">
        <button className="se-footer-btn pdf" onClick={downloadPDF}>
          ⬇ PDF
        </button>

        {data.phone?.trim() && (
          <button
            className="se-footer-btn whatsapp"
            onClick={() =>
              window.open(`https://wa.me/${data.phone}`, "_blank")
            }
          >
            🔗 WhatsApp
          </button>
        )}

        <button
          className="se-footer-btn copy"
          onClick={() =>
            navigator.clipboard.writeText(
              `${data.fullName || ""} ${data.phone || ""} ${data.email || ""}`
            )
          }
        >
          📋 Copy
        </button>

        <button className="se-footer-btn buy">💳 Buy</button>
      </div>
    </div>
  );
};

export default SoftwareEngineerCard;