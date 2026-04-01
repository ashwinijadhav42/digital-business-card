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
  {data.imagePreview ? (
    <img
      src={data.imagePreview}
      alt="preview"
      className="profile-img"
    />
  ) : data.profileImage ? (
    <img
      src={`http://localhost:8080/uploads/${data.profileImage}`}
      alt="profile"
      className="profile-img"
    />
  ) : (
    "👤"
  )}
          </div>
          <h3>Software Engineer</h3>
          <p>Code • Deploy • Test</p>
        </div>

        {/* BODY */}
        <div className="se-body">
          <h2>{data.fullName || "Your Name"}</h2>
          <p className="se-role">{data.designation || "Your Role"}</p>
          <p className="se-desc">{data.description || "Description here"}</p>

          {/* INFO */}
          <div className="se-info">
            {data.phone && (
              <div className="se-info-item">
                <FaPhone /> <span>{data.phone}</span>
              </div>
            )}
            {data.email && (
              <div className="se-info-item">
                <FaEnvelope /> <span>{data.email}</span>
              </div>
            )}
            {data.address && (
              <div className="se-info-item">
                <FaMapMarkerAlt /> <span>{data.address}</span>
              </div>
            )}
            {data.website && (
              <div className="se-info-item">
                <FaGlobe /> <span>{data.website}</span>
              </div>
            )}
          </div>

          {/* SOCIAL */}
          <div className="se-social">
            {data.linkedin?.trim() && (
              <button
                className="se-btn linkedin"
                onClick={() => window.open(data.linkedin, "_blank")}
              >
                <FaLinkedin />
                <span>{data.linkedin.replace("https://", "")}</span>
              </button>
            )}

            {data.github?.trim() && (
              <button
                className="se-btn github"
                onClick={() => window.open(data.github, "_blank")}
              >
                <FaGithub />
                <span>{data.github.replace("https://", "")}</span>
              </button>
            )}
          </div>

          {/* QR */}
          {data.website && (
            <div className="se-qr">
              <QRCode value={data.website} size={70} />
            </div>
          )}
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