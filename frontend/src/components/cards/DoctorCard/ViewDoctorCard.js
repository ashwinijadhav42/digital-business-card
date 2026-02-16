import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import DoctorCard1 from "./DoctorCard1";
import DoctorCard2 from "./DoctorCard2";
import { useRef } from "react";




function ViewDoctorCard() {
const cardRef = useRef();
  const { slug } = useParams();
  const [card, setCard] = useState(null);

  const handleDownloadPDF = async () => {
  const element = cardRef.current;
  const canvas = await html2canvas(element, {
    scale: 2
  });
  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("p", "mm", "a4");
  const imgWidth = 190;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;
  pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
  pdf.save(`${slug}.pdf`);
};


  useEffect(() => {
    fetch(`http://localhost:8080/api/doctor-cards/public/${slug}`)
      .then(res => {
        if (!res.ok) throw new Error("Private");
        return res.json();
      })
      .then(data => setCard(data))
      .catch(() => setCard("PRIVATE"));
  }, [slug]);

  if (card === "PRIVATE")
    return <h3 className="text-center mt-5">This Card is Private</h3>;

  if (!card) return <h4>Loading...</h4>;

  //  Public URL for QR
  const publicUrl = `${window.location.origin}/view-doctor-card/${slug}`;

  return (
  <div className="text-center">

    {/*  Wrap only card design inside this div */}
    <div ref={cardRef} id="card-to-download">
      {card.templateType === "DOCTOR_CARD_1" && <DoctorCard1 data={card} />}
      {card.templateType === "DOCTOR_CARD_2" && <DoctorCard2 data={card} />}
    </div>

    {/* QR Section */}
    <div className="mt-4">
      <h5>Scan QR Code</h5>
      <QRCodeCanvas value={publicUrl} size={200} />
    </div>

    {/* Download Button */}
    <button
      className="btn btn-success mt-4"
      onClick={handleDownloadPDF}
    >
      Download as PDF
    </button>

<div className="mt-4">
  <h5>Share This Card</h5>

  {/* WhatsApp */}
  <a
    href={`https://wa.me/?text=${encodeURIComponent(publicUrl)}`}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-success m-2"
  >
    Share on WhatsApp
  </a>

  {/* LinkedIn */}
  <a
    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(publicUrl)}`}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-primary m-2"
  >
    Share on LinkedIn
  </a>

  {/* Copy Link (Best for Instagram) */}
  <button
    className="btn btn-dark m-2"
    onClick={() => {
      navigator.clipboard.writeText(publicUrl);
      alert("Link Copied!");
    }}
  >
    Copy Link
  </button>
</div>

  </div>
);
}

export default ViewDoctorCard;
