import "bootstrap/dist/css/bootstrap.min.css";
import "./BusinessAnalyst.css";
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

const BusinessAnalystCard = ({ data = {} }) => {
  const cardRef = useRef();

  // ✅ PDF DOWNLOAD FUNCTION
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
    <div className="card-wrapper">
      
      {/* ✅ CARD */}
      <div className="card-container" ref={cardRef}>
        
        {/* Header */}
        <div className="card-header">
          <div className="profile-circle">
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
          <h3>Business & Data Analyst</h3>
          <p>Data • Analytics • Strategy</p>
        </div>

        {/* Body */}
        <div className="card-body">
          <h3>{data.fullName || "Jhon Duran"}</h3>
          <p className="role">{data.designation || "Business Analyst"}</p>
          <p className="desc">{data.description || "Working experience description"}</p>

          {/* INFO */}
          <div className="info">
            <div className="info-item">
            <FaPhone /> <span>{data.phone || "7986541235"}</span>
          </div>
          <div className="info-item">
            <FaEnvelope /> <span>{data.email || "demo@email.com"}</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt /> <span>{data.address || "Nagpur, India"}</span>
          </div>

          <div className="info-item">
            <FaGlobe /> <span>{data.website || "www.example.com"}</span>
          </div>
          </div>

          {/* SOCIAL BUTTONS */}
          <div className="social-buttons">

          {/* LinkedIn */}
          <button
            className="social-btn linkedin"
            onClick={() =>
            window.open(
            data.linkedin || "https://linkedin.com/in/demo",
            "_blank"
          )
        }
      >
          <FaLinkedin className="icon" />
          <span>
          {(data.linkedin || "https://linkedin.com/in/demo").replace("https://", "")}
          </span>
          </button>

          {/* GitHub */}
          <button
          className="social-btn github"
          onClick={() =>
          window.open(
          data.github || "https://github.com/demo",
          "_blank"
          )
        }
      >
          <FaGithub className="icon" />
          <span>
          {(data.github || "https://github.com/demo").replace("https://", "")}
          </span>
          </button>

          </div>

        {/* QR */}
        <div className="qr">
        <QRCode value={data.website || "https://example.com"} size={70} />
        </div>
        </div>
      </div>

      {/* ✅ FOOTER OUTSIDE */}
      <div className="floating-footer">
        
        {/* PDF BUTTON */}
        <button className="footer-btn pdf" onClick={downloadPDF}>
          ⬇ PDF
        </button>

        {/* WHATSAPP */}
        {data.phone?.trim() && (
          <button
            className="footer-btn whatsapp"
            onClick={() =>
              window.open(`https://wa.me/${data.phone}`, "_blank")
            }
          >
            🔗 WhatsApp
          </button>
        )}

        {/* COPY */}
        <button
          className="footer-btn copy"
          onClick={() =>
            navigator.clipboard.writeText(
              `${data.fullName || ""} ${data.phone || ""} ${data.email || ""}`
            )
          }
        >
          📋 Copy
        </button>

        {/* BUY */}
        <button className="footer-btn buy">💳 Buy Now</button>
      </div>
    </div>
  );
};

export default BusinessAnalystCard;