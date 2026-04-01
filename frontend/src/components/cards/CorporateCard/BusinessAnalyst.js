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
  {data.imagePreview ? (
  <img src={data.imagePreview} alt="profile" className="profile-img" />
) : data.profileImage ? (
  <img
    src={`http://localhost:8080/uploads/corporate_card/${data.profileImage}`}
    alt="profile"
    className="profile-img"
  />
) : (
  "👤"
)}
          </div>
          <h3>Business & Data Analyst</h3>
          <p>Data • Analytics • Strategy</p>
        </div>

        {/* Body */}
        <div className="card-body">
          <h2>{data.fullName || "Your Name"}</h2>
          <p className="role">{data.designation || "Your Role"}</p>
          <p className="desc">{data.description || "Description here"}</p>

          {/* INFO */}
          <div className="info">
            {data.phone && (
              <div className="info-item">
                <FaPhone /> <span>{data.phone}</span>
              </div>
            )}

            {data.email && (
              <div className="info-item">
                <FaEnvelope /> <span>{data.email}</span>
              </div>
            )}

            {data.address && (
              <div className="info-item">
                <FaMapMarkerAlt /> <span>{data.address}</span>
              </div>
            )}

            {data.website && (
              <div className="info-item">
                <FaGlobe /> <span>{data.website}</span>
              </div>
            )}
          </div>

          {/* SOCIAL BUTTONS */}
          <div className="social-buttons">
            {data.linkedin?.trim() && (
              <button
                className="social-btn linkedin"
                onClick={() => window.open(data.linkedin, "_blank")}
              >
                <FaLinkedin className="icon" />
                <span>{data.linkedin.replace("https://", "")}</span>
              </button>
            )}

            {data.github?.trim() && (
              <button
                className="social-btn github"
                onClick={() => window.open(data.github, "_blank")}
              >
                <FaGithub className="icon" />
                <span>{data.github.replace("https://", "")}</span>
              </button>
            )}
          </div>

          {/* QR */}
          {data.website && (
            <div className="qr">
              <QRCode value={data.website} size={70} />
            </div>
          )}
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