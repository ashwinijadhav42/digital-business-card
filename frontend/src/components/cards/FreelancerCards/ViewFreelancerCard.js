
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import FreelancerTemplate1 from "./Freelancer";
import FreelancerTemplate2 from "./FreelanceSoftwareEngineer";

function ViewFreelancerCard() {
  const cardRef = useRef();
  const { slug } = useParams();
  const [card, setCard] = useState(null);

  // ================= PDF DOWNLOAD =================
const handleDownloadPDF = async () => {
  const element = cardRef.current;

  if (!element) {
    alert("Card not loaded yet");
    return;
  }

  const canvas = await html2canvas(element, {
    scale: 4,
    useCORS: true
  });

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const imgWidth = canvas.width;
  const imgHeight = canvas.height;

  const ratio = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);

  const finalWidth = imgWidth * ratio;
  const finalHeight = imgHeight * ratio;

  const x = (pageWidth - finalWidth) / 2;
  const y = (pageHeight - finalHeight) / 2;

  pdf.addImage(imgData, "PNG", x, y, finalWidth, finalHeight);

  pdf.save(`${slug}.pdf`);
   element.style.width = "100%";
};// ================= FETCH CARD =================
  useEffect(() => {
    fetch(`http://localhost:8080/api/freelancer-cards/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Private");
        return res.json();
      })
      .then((data) => setCard(data))
      .catch(() => setCard("PRIVATE"));
  }, [slug]);

  if (card === "PRIVATE")
    return <h3 className="text-center mt-5">This Card is Private</h3>;

  if (!card) return <h4 className="text-center mt-5">Loading...</h4>;

  const publicUrl =
    `${window.location.origin}/view-freelancer-card/${slug}`;

  return (
    <div className="text-center">

  {/* CARD */}
  <div className="d-flex justify-content-center mt-5">
    <div ref={cardRef} id="card-to-download">
      {card.templateType === "template1" && (
        <FreelancerTemplate1 data={card} 
        showAllIcons={false}
         onDownload={handleDownloadPDF}
          cardRef={cardRef} 
    slug={slug}
    publicUrl={publicUrl}
    />
      )}

      {card.templateType === "template2" && (
  <FreelancerTemplate2
    data={card}
    showAllIcons={false}
    onDownload={handleDownloadPDF}
    cardRef={cardRef}
    slug={slug}
    publicUrl={publicUrl}
  />
)}
    </div>
  </div>
  
    </div> 
  );
}

export default ViewFreelancerCard;