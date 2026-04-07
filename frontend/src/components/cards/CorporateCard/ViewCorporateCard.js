import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

import SoftwareEngineer from "./SoftwareEngineer";

import BusinessAnalyst from "./BusinessAnalyst";
import { downloadCardPDF } from "../../../utils/downloadPDF";




function ViewCorporateCard() {
const cardRef = useRef();
  const { slug } = useParams();
  const [card, setCard] = useState(null);

// ================= PDF DOWNLOAD =================
const handleDownloadPDF = () => {
  downloadCardPDF(cardRef.current, slug);
}; 

 useEffect(() => {
  fetch(`http://localhost:8080/api/corporate-cards/public/${slug}`)
    .then(res => res.json())
    .then(data => {
      console.log("DATA:", data);
      console.log("FINAL CARD:", card);
      setCard(data);
    })
    .catch(err => {
      console.error("ERROR:", err);
    });
}, [slug]);

  if (card === "PRIVATE")
    return <h3 className="text-center mt-5">This Card is Private</h3>;

  if (!card) return <h4>Loading...</h4>;

  //  Public URL for QR
  const publicUrl = `${window.location.origin}/view-corporate-card/${slug}`;

  return (
  <div className="text-center">

    <h3>Template: {card.templateType}</h3>

    {card?.templateType?.trim() === "template1" ? (
      <BusinessAnalyst data={card} />
    ) : card?.templateType?.trim() === "template2" ? (
      <SoftwareEngineer data={card} />
    ) : (
      <div>
        <h3>❌ No Template Match</h3>
        <pre>{JSON.stringify(card, null, 2)}</pre>
      </div>
    )}

  </div>
);
}

export default ViewCorporateCard;
