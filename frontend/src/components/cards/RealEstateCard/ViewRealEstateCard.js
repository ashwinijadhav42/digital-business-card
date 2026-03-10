import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import RealEstate from "./RealEstate";
import UnityRealEstate from "./UnityRealEstate";

function ViewRealEstateCard() {
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
};

  useEffect(() => {
    fetch(`http://localhost:8080/api/realestate-cards/public/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Private");
        return res.json();
      })
      .then((data) => setCard(data))
      .catch(() => setCard("PRIVATE"));
  }, [slug]);

  if (card === "PRIVATE")
    return <h3 className="text-center mt-5">This Card is Private</h3>;

  if (!card) return <h4>Loading...</h4>;

  const publicUrl =
    `${window.location.origin}/view-realestate-card/${slug}`;

  return (
     <div className="text-center">
    <div className="d-flex justify-content-center mt-5">

      {/* Card Section */}
      <div ref={cardRef} id="card-to-download">
        {card.templateType === "template1" && (
          <RealEstate data={card} 
           showAllIcons={true}
    onDownload={handleDownloadPDF}
    cardRef={cardRef}
    slug={slug}
    publicUrl={publicUrl}/>
        )}
        {card.templateType === "template2" && (
          <UnityRealEstate data={card} 
           showAllIcons={true}
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

export default ViewRealEstateCard;